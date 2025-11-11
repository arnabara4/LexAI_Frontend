import React, { 
  useState, 
  useEffect, 
  createContext, 
  useContext, 
  useCallback 
} from "react";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";
import api from "../utils/api"; // Your pre-configured axios client

// This is the key we use for storing the ACCESS token.
// The REFRESH token is never stored in JS; it's in a secure cookie.
const ACCESS_TOKEN_KEY = "access_token";

// 1. Create the Context
// This will hold the shared authentication state
const AuthContext = createContext(null);

// 2. Create the Provider Component
// You will wrap your entire application in this component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem(ACCESS_TOKEN_KEY) || null
  );
  const [isLoading, setIsLoading] = useState(true); // Start in a "loading" state

  /**
   * This effect runs whenever the `accessToken` state changes.
   * Its job is to keep your app (state, localStorage, API headers)
   * perfectly in sync.
   */
  useEffect(() => {
    if (accessToken) {
      // 1. Save token to localStorage for persistence
      localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
      
      // 2. Set the default Authorization header for all API requests
      api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      
      // 3. Decode the token to set the 'user' object (for UI)
      try {
        const decoded = jwtDecode(accessToken);
        setUser({
          id: decoded.sub, // 'sub' (subject) is the standard claim for user ID
          role: decoded.role,
          is_email_verified: decoded.is_email_verified
        });
      } catch (e) {
        // This means the token in localStorage is invalid
        console.error("Invalid access token found:", e);
        setAccessToken(null); // Clear the bad token
        setUser(null);
      }
    } else {
      // 1. No token, so clear everything
      localStorage.removeItem(ACCESS_TOKEN_KEY);
      delete api.defaults.headers.common["Authorization"];
      setUser(null);
    }
  }, [accessToken]); // Re-run this logic every time the token changes

  /**
   * This effect runs ONCE when the app first loads.
   * Its job is to handle the "Stay Logged In" feature.
   */
  useEffect(() => {
    const initializeAuth = async () => {
      const token = localStorage.getItem(ACCESS_TOKEN_KEY);
      
      if (token) {
        try {
          const decoded = jwtDecode(token);
          if (decoded.exp * 1000 < Date.now()) {
            // Token is expired, try to refresh it
            const { data } = await api.post("/refresh", {});
            setAccessToken(data.access_token); // This will trigger the effect above
          } else {
            // Token is valid, set it in state
            setAccessToken(token);
          }
        } catch (err) {
          // Any error (invalid token, refresh failed) means we log out
          setAccessToken(null);
        }
      }
      setIsLoading(false); // We're done checking, app can now render
    };

    initializeAuth();
  }, []); // The empty array [] means this runs only ONCE

  /**
   * LOGIN: Calls the /login endpoint.
   * The backend sets the HttpOnly refresh cookie.
   * We receive and set the access token.
   */
  const login = async (email, password) => {
    try {
      const { data } = await api.post("/login", { email, password });
      setAccessToken(data.access_token); // Set the new token
      toast.success("Login successful!");
      return true;
    } catch (err) {
      toast.error(err.response?.data?.error || "Invalid credentials.");
      throw err; // Let the form know it failed
    }
  };

  /**
   * SIGNUP: Calls the /signup endpoint.
   */
  const signup = async (email, password) => {
    try {
      const { data } = await api.post("/signup", { email, password });
      toast.success("Signup successful! Please verify your email.");
      return data.message;
    } catch (err) {
      toast.error(err.response?.data?.error || "Signup failed.");
      throw err;
    }
  };

  /**
   * LOGOUT: Clears the access token from state/storage
   * and tells the backend to revoke the refresh token.
   * We use useCallback to prevent it from changing on every render.
   */
  const logout = useCallback(async () => {
    // 1. Clear frontend state immediately
    setAccessToken(null);
    
    try {
      // 2. Tell backend to delete the refresh cookie & revoke the JTI
      // We don't need to send anything; the cookie is sent automatically.
      await api.delete("/logout");
    } catch (err) {
      console.error("Logout API call failed", err);
    } finally {
      toast.success("Logged out successfully.");
    }
  }, []);

  // 3. This is the "value" our components will get
  const value = {
    user,
    accessToken,
    isLoading,
    login,
    signup,
    logout,
    // Note: We don't need to export 'refreshToken' because the
    // axios interceptor (in api/axiosConfig.js) will handle it automatically.
  };

  // 4. Return the Provider
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
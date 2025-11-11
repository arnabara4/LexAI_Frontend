import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom"; // 1. Import useNavigate

export default function Dashboard() {
  const { logout, user } = useAuth(); // 2. Get the user object
  const navigate = useNavigate(); // 3. Initialize the navigate hook

  const handleLogout = async () => {
    await logout();
    // 4. Use navigate for a clean, instant redirect
    //    No 'toast' is needed here, as the logout()
    //    function in your hook already shows one.
    navigate("/login");
  };

  return (
    // --- UPDATED ---
    // Using your 'lexai-bg' class to get the gradient
    <div className="min-h-screen flex flex-col items-center justify-center lexai-bg lexai-orbs p-6">
      <div className="section-foreground text-center">
        
        {/* --- UPDATED --- */}
        <h1 className="text-4xl font-bold text-[var(--font-color)] mb-4 animate-fadeInUp">
          Welcome to LexAI ⚖️
        </h1>
        
        {/* --- UPDATED --- */}
        <p className="text-[var(--font-color-muted)] mb-8 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          Your account is verified and your session is active.
        </p>
        
        {/* --- UPDATED --- */}
        <button
          onClick={handleLogout}
          className="px-6 py-3 rounded-lg 
                     bg-red-600 hover:bg-red-700 
                     text-white font-semibold 
                     shadow-lg transition 
                     animate-fadeInUp"
          style={{ animationDelay: '0.4s' }}
        >
          Logout
        </button>

        {/* Example: Show user email */}
        {user && (
          <p className="text-sm text-[var(--font-color-muted)] mt-12 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            Logged in as: {user.email}
          </p>
        )}
      </div>
    </div>
  );
}
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth"; // For auth state
import { useTheme } from "../../../context/ThemeContext"; // For theme state


export default function Header() {
  const { user, logout } = useAuth();
  const { setting, setSetting } = useTheme();

  return (
    <header 
      className="sticky top-0 z-50 w-full border-b backdrop-blur-md shadow-sm 
                 border-[var(--border-color)] 
                 bg-[var(--bg-color)]/80 
                 transition-colors duration-300"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-6 md:px-10">
        
        {/* === Logo === */}
        <Link
          to="/"
          className="flex items-center gap-2 transition hover:opacity-90"
        >
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-base">⚖️</span>
          </div>
          <span 
            className="text-xl font-bold text-[var(--font-color)] tracking-tight 
                       transition-colors duration-300"
          >
            LexAI
          </span>
        </Link>

        {/* === Center Navigation === */}
        <nav 
          className="hidden md:flex items-center gap-6 text-sm font-medium 
                     text-[var(--font-color-muted)] 
                     transition-colors duration-300"
        >
          <Link to="/" className="hover:text-[var(--primary-color)] transition-colors">
            Home
          </Link>
          <Link to="/features" className="hover:text-[var(--primary-color)] transition-colors">
            Features
          </Link>
          <Link to="/about" className="hover:text-[var(--primary-color)] transition-colors">
            About
          </Link>
        </nav>

        {/* === Auth Buttons & Theme Toggle === */}
        <div className="flex items-center gap-3">
          
          {/* Theme Toggle Select */}
          <select 
            value={setting} 
            onChange={(e) => setSetting(e.target.value)}
            className="text-sm rounded-md border-none 
                       text-[var(--font-color-muted)] 
                       bg-transparent 
                       cursor-pointer 
                       focus:ring-0"
          >
            <option value="auto">Auto</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>

          {/* Conditional Auth Buttons */}
          {user ? (
            // --- User is LOGGED IN ---
            <>
              <Link
                to="/dashboard"
                className="px-4 py-2 text-sm font-medium 
                           text-[var(--font-color-muted)] 
                           rounded-lg hover:text-[var(--primary-color)] 
                           transition-colors duration-300"
              >
                Dashboard
              </Link>
              <button
                onClick={logout}
                className="px-5 py-2 text-sm font-semibold 
                           text-[var(--primary-color-text)] 
                           bg-[var(--primary-color)] 
                           rounded-lg hover:opacity-90 shadow-md 
                           transition-all duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            // --- User is LOGGED OUT ---
            <>
              <Link
                to="/login"
                className="px-4 py-2 text-sm font-medium 
                           text-[var(--font-color-muted)] 
                           rounded-lg hover:text-[var(--primary-color)] 
                           transition-colors duration-300"
              >
                Sign in
              </Link>
              <Link
                to="/signup"
                className="px-5 py-2 text-sm font-semibold 
                           text-[var(--primary-color-text)] 
                           bg-[var(--primary-color)] 
                           rounded-lg hover:opacity-90 shadow-md 
                           transition-all duration-300"
              >
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
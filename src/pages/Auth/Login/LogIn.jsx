// in frontend/src/pages/Login.jsx

import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../../../hooks/useAuth";
import toast from "react-hot-toast"; // Don't forget to import toast

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false); // For button loading state
  
  // This gets the page the user was *trying* to visit
  const from = location.state?.from?.pathname || '/dashboard';

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      toast.error("Please enter both email and password.");
      return;
    }
    
    setIsLoading(true);
    try {
      await login(formData.email, formData.password);
      // Navigate to their intended page
      navigate(from, { replace: true });
    } catch (err) {
      // Error toast is already handled in your useAuth hook
      setIsLoading(false);
    }
  };

  return (
    // --- UPDATED ---
    // Using your 'lexai-bg' and 'lexai-orbs' classes from index.css
    <section className="relative min-h-screen flex flex-col items-center justify-center lexai-bg lexai-orbs p-6 overflow-hidden">
      {/* === Header --- UPDATED --- */}
      <header 
        className="absolute top-0 left-0 w-full flex items-center justify-between px-8 py-4 
                   bg-[var(--bg-color)]/70 backdrop-blur-md 
                   border-b border-[var(--border-color)]/50 
                   shadow-sm z-20 transition-colors duration-300"
      >
        <Link
          to="/"
          className="flex items-center gap-2 hover:opacity-90 transition"
        >
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-md">
            <span className="text-white text-lg font-semibold">⚖️</span>
          </div>
          <span className="text-xl font-bold text-[var(--font-color)] transition-colors duration-300">LexAI</span>
        </Link>
        <Link
          to="/signup"
          className="text-sm font-medium text-[var(--primary-color)] hover:underline transition-colors duration-300"
        >
          Sign up
        </Link>
      </header>

      {/* Login Card --- UPDATED --- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md p-8 rounded-2xl 
                   bg-[var(--bg-color)]/80 backdrop-blur-md 
                   border border-[var(--border-color)]/50 
                   shadow-xl mt-16 transition-colors duration-300"
      >
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-md">
              <span className="text-white text-lg font-semibold">⚖️</span>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-[var(--font-color)] mb-2 transition-colors duration-300">
            Welcome Back
          </h1>
          <p className="text-[var(--font-color-muted)] text-sm transition-colors duration-300">
            Log in to access your AI-driven legal insights.
          </p>
        </div>

        {/* Form --- UPDATED --- */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-[var(--font-color)] mb-1 transition-colors duration-300">
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border 
                         bg-[var(--bg-color-muted)] 
                         border-[var(--border-color)] 
                         text-[var(--font-color)] 
                         focus:ring-2 focus:ring-[var(--primary-color)] 
                         focus:outline-none transition-colors duration-300"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--font-color)] mb-1 transition-colors duration-300">
              Password
            </label>
            <input
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border 
                         bg-[var(--bg-color-muted)] 
                         border-[var(--border-color)] 
                         text-[var(--font-color)] 
                         focus:ring-2 focus:ring-[var(--primary-color)] 
                         focus:outline-none transition-colors duration-300"
              placeholder="********"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-[var(--font-color-muted)] transition-colors duration-300">
              <input
                type="checkbox"
                className="mr-2 accent-[var(--primary-color)]"
              />
              Remember me
            </label>
            <a
              href="#" /* TODO: Link to /forgot-password */
              className="text-[var(--primary-color)] hover:underline font-medium"
            >
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-4 py-3 px-6 rounded-lg 
                       bg-[var(--primary-color)] 
                       text-[var(--primary-color-text)] 
                       font-semibold hover:opacity-90 transition 
                       disabled:opacity-50 disabled:cursor-wait"
          >
            {isLoading ? "Signing in..." : "Log In"}
          </button>
        </form>

        <div className="mt-6 border-t border-[var(--border-color)] transition-colors duration-300" />

        <p className="text-center text-sm text-[var(--font-color-muted)] mt-6 transition-colors duration-300">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-[var(--primary-color)] font-medium hover:underline"
          >
            Create one
          </Link>
        </p>
      </motion.div>
    </section>
  );
}
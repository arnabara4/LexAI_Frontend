// in frontend/src/pages/Signup.jsx

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../../../hooks/useAuth";
import toast from "react-hot-toast"; // Import toast

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false); // For button loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // --- ADDED VALIDATION ---
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }
    if (formData.password.length < 8) {
        toast.error("Password must be at least 8 characters.");
        return;
    }
    // --- END VALIDATION ---
    
    setIsLoading(true);
    try {
      await signup(formData.email, formData.password);
      toast.success("Account created! Please check your email to verify.");
      navigate("/verify-reminder"); // Send to verify page, not login
    } catch (err) {
      // Error toast is already handled in your useAuth hook
      setIsLoading(false);
    }
  };

  return (
    // --- UPDATED ---
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
          to="/login"
          className="text-sm font-medium text-[var(--primary-color)] hover:underline transition-colors duration-300"
        >
          Log in
        </Link>
      </header>

      {/* Signup Card --- UPDATED --- */}
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
            Create Your Account
          </h1>
          <p className="text-[var(--font-color-muted)] text-sm transition-colors duration-300">
            Get started with LexAI — your AI-powered legal assistant.
          </p>
        </div>

        {/* Form --- UPDATED --- */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-[var(--font-color)] mb-1 transition-colors duration-300">
              Full Name
            </label>
            <input
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border 
                         bg-[var(--bg-color-muted)] 
                         border-[var(--border-color)] 
                         text-[var(--font-color)] 
                         focus:ring-2 focus:ring-[var(--primary-color)] 
                         focus:outline-none transition-colors duration-300"
              placeholder="John Doe"
            />
          </div>

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
              placeholder="Min. 8 characters"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--font-color)] mb-1 transition-colors duration-300">
              Confirm Password
            </label>
            <input
              name="confirmPassword"
              type="password"
              required
              value={formData.confirmPassword}
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

          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-4 py-3 px-6 rounded-lg 
                       bg-[var(--primary-color)] 
                       text-[var(--primary-color-text)] 
                       font-semibold hover:opacity-90 transition 
                       disabled:opacity-50 disabled:cursor-wait"
          >
            {isLoading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <div className="mt-6 border-t border-[var(--border-color)] transition-colors duration-300" />

        <p className="text-center text-sm text-[var(--font-color-muted)] mt-6 transition-colors duration-300">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[var(--primary-color)] font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </motion.div>
    </section>
  );
}
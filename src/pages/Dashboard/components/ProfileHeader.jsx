// src/pages/Dashboard/components/ProfileHeader.jsx
import React from "react";
import { Mail, CheckCircle, XCircle } from "lucide-react";
import { useAuth } from "../../../hooks/useAuth"; // Import the hook to get the user

export default function ProfileHeader() {
  const { user } = useAuth(); // Get the user from your global auth state

  // Provide a fallback "user" in case the hook is still loading
  const safeUser = user || { email: "Loading...", role: "...", is_email_verified: false };

  return (
    <div className="rounded-2xl border border-[var(--border-color)] 
                    bg-[var(--bg-color-card)] p-6 shadow-sm 
                    flex flex-col sm:flex-row items-center gap-6 
                    transition-colors duration-300"
    >
      {/* Avatar */}
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/40 to-blue-800/30 
                    flex-shrink-0 flex items-center justify-center 
                    text-3xl font-bold text-blue-200"
      >
        {safeUser.email?.toUpperCase() || "U"}
      </div>

      {/* Info */}
      <div className="flex-1 text-center sm:text-left">
        <h2 className="text-2xl font-semibold text-[var(--font-color)]">
          {safeUser.email}
        </h2>
        <p className="text-sm text-[var(--font-color-muted)] flex items-center 
                      justify-center sm:justify-start gap-2 mt-1"
        >
          <Mail className="w-4 h-4 text-[var(--font-color-muted)]" />
          <span className="capitalize">{safeUser.role?.replace('_', ' ') || "Member"}</span>
        </p>
        <div className="mt-3">
          {safeUser.is_email_verified ? (
            // This is a "success" color, so it stays green
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium">
              <CheckCircle className="w-4 h-4" /> Verified Account
            </span>
          ) : (
            // This is a "danger" color, so it stays red
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-800 text-sm font-medium">
              <XCircle className="w-4 h-4" /> Email Not Verified
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
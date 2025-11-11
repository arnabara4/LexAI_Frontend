// src/pages/Dashboard/components/ProfileSettings.jsx
import React from "react";
import { LogOut, Moon, Zap } from "lucide-react"; // Added Zap for 'Upgrade'
import { useTheme } from "../../../context/ThemeContext";
import { useAuth } from "../../../hooks/useAuth";

export default function ProfileSettings() {
  const { logout, user } = useAuth();
  const { setting, setSetting } = useTheme();

  const handleThemeToggle = () => {
    // Cycle through the 3 theme settings
    if (setting === 'auto') setSetting('light');
    else if (setting === 'light') setSetting('dark');
    else setSetting('auto');
  };

  return (
    <div className="rounded-2xl border border-[var(--border-color)] 
                    bg-[var(--bg-color-card)] p-6 space-y-4 shadow-sm
                    transition-colors duration-300"
    >
      <h3 className="text-lg font-semibold text-[var(--font-color)]">Account Settings</h3>

      <div className="space-y-3">
        {/* --- 1. UPGRADE BUTTON (Good CTA) --- */}
        {user?.role === 'free_user' && (
          <button
            className="w-full flex items-center justify-center gap-3 px-4 py-2 rounded-lg 
                       bg-[var(--primary-color)] 
                       text-[var(--primary-color-text)] 
                       font-medium
                       hover:opacity-90 transition"
          >
            <Zap className="w-5 h-5" />
            <span>Upgrade to Pro</span>
          </button>
        )}

        {/* --- 2. THEME TOGGLE (Fixed Logic) --- */}
        <button
          onClick={handleThemeToggle}
          className="w-full flex items-center gap-3 px-4 py-2 rounded-lg 
                     bg-[var(--bg-color-muted)]/50 
                     text-[var(--font-color)]
                     hover:bg-[var(--bg-color-muted)] 
                     transition-colors duration-300"
        >
          <Moon className="w-5 h-5 text-[var(--primary-color)]" />
          <span>Toggle Theme (Currently: {setting})</span>
        </button>

        {/* --- 3. LOGOUT BUTTON (UX Fix) --- */}
        {/* This is no longer a loud red box. It's now a subtle,
            but clear, "danger" action text button. */}
        <button
          onClick={logout}
          className="w-full flex items-center gap-3 px-4 py-2 rounded-lg 
                     text-red-500 
                     hover:bg-red-500/10 
                     transition-colors duration-300"
        >
          <LogOut className="w-5 h-5" />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
}
import React from "react";
import { Menu } from "lucide-react";
import { useAuth } from "../../../hooks/useAuth"; // Import the auth hook
import { useTheme } from "../../../context/ThemeContext"; // Import the theme hook

export default function TopNav({ onMenuClick }) {
  const { user } = useAuth(); // Get the currently logged-in user
  const { setting, setSetting } = useTheme(); // Get theme controls

  // Get the user's initial, or "A" as a fallback
  const userInitial = user?.email ? user.email[0].toUpperCase() : "A";
  // Get the user's name (just the part before the @)
  const userName = user?.email ? user.email.split('@')[0] : "User";

  return (
    <header
      className="backdrop-blur-md bg-[var(--bg-color)]/80 border-b border-[var(--border-color)]/60 
                 h-16 flex items-center px-6 shadow-[0_2px_12px_rgba(59,130,246,0.05)] 
                 sticky top-0 z-50 transition-colors duration-300"
    >

      {/* Page Title */}
      <div className="flex-1 flex items-center justify-between">
        <h1 className="text-lg sm:text-xl font-semibold text-[var(--font-color)] animate-slideInDown">
          LexAI Dashboard
        </h1>

        {/* Profile preview & Theme Toggle */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <select 
            value={setting} 
            onChange={(e) => setSetting(e.target.value)}
            className="text-sm rounded-md border-none text-[var(--font-color-muted)] bg-transparent"
          >
            <option value="auto">Auto</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>

          {/* Profile */}
          <div className="hidden sm:flex items-center gap-3 text-[var(--font-color-muted)] transition-colors duration-300">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white font-semibold shadow-md">
              {userInitial}
            </div>
            <span className="font-medium text-sm capitalize">{userName}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
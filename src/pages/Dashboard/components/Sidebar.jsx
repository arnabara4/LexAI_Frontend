import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FileText,
  MessageSquare,
  User,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import clsx from "clsx";

const Sidebar = ({ open, onToggle }) => {
  const location = useLocation();

  const navItems = [
    { label: "Analyze", href: "/dashboard/analyze", icon: FileText },
    { label: "Chat", href: "/dashboard/chat", icon: MessageSquare },
    { label: "Profile", href: "/dashboard/profile", icon: User },
  ];

  return (
    <aside
      className={clsx(
        "fixed top-0 left-0 h-screen border-r overflow-hidden z-50",
        "transition-all duration-500 ease-in-out animate-slideInDown shadow-[4px_0_12px_rgba(59,130,246,0.05)]",
        // --- UPDATED ---
        // Swapped hard-coded colors for theme variables
        "border-[var(--border-color)]/50",
        "backdrop-blur-md bg-[var(--bg-color)]/90",
        open ? "w-64" : "w-20"
      )}
      // --- REMOVED ---
      // Removed the hard-coded light-mode gradient.
      // The bg-color/90 above will now handle both themes.
      // style={{ ... }}
    >
      {/* Decorative Orbs --- UPDATED --- */}
      {/* These now use your theme-aware orb colors from index.css */}
      <div className="absolute inset-0 opacity-60 pointer-events-none">
        <div className="absolute w-[300px] h-[300px] bg-[var(--lexai-orb-1)] rounded-full blur-3xl top-[-100px] left-[-100px]" />
        <div className="absolute w-[250px] h-[250px] bg-[var(--lexai-orb-2)] rounded-full blur-3xl bottom-[-80px] right-[-80px]" />
      </div>

      {/* Header --- UPDATED --- */}
      <div className="relative z-10 flex items-center justify-between p-4 border-b border-[var(--border-color)]/50">
        <div className="flex items-center gap-2 font-semibold text-lg">
          {/* Logo is brand-colored, no change needed */}
          <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-blue-600 text-white font-bold shadow-md transition-transform duration-300 hover:scale-110">
            LA
          </div>
          {/* Text color now uses theme variable */}
          {open && (
            <span className="tracking-wide text-[var(--font-color)] animate-fadeInUp">
              LexAI
            </span>
          )}
        </div>
        {/* Desktop Collapse Button (Hidden on Mobile) */}
        <button
          onClick={() => onToggle(!open)}
          className="hidden md:inline-flex hover:bg-[var(--bg-color-muted)]/60 p-1 rounded-lg 
             transition-all duration-300 hover:scale-110 
             text-[var(--primary-color)]">
          {open ? (
            <ChevronLeft className="w-5 h-5" />
          ) : (
            <ChevronRight className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Navigation --- UPDATED --- */}
      <nav className="relative z-10 mt-6 flex flex-col space-y-2 px-3">
        {navItems.map(({ label, href, icon: Icon }) => {
          const active = location.pathname === href;
          return (
            <Link
              key={href}
              to={href}
              className={clsx(
                "group flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 hover:translate-x-1",
                // Hover colors now use theme variables
                "hover:bg-[var(--bg-color-muted)] hover:text-[var(--primary-color)] hover:shadow-[0_4px_12px_rgba(59,130,246,0.1)]",
                active
                  ? // Active state is your brand color, which is great.
                    // We just change the "inactive" text color.
                    "bg-blue-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.3)] animate-pulse"
                  : "text-[var(--font-color-muted)]"
              )}>
              <Icon
                className={clsx(
                  "w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110",
                  active && "text-white"
                )}
              />
              {open && (
                <span className="font-medium animate-fadeInUp transition-opacity duration-300">
                  {label}
                </span>
              )}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;

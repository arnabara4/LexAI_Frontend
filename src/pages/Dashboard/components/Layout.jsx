import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex h-screen lexai-bg lexai-orbs overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full transition-all duration-500 ease-in-out bg-white/70 backdrop-blur-lg border-r border-border z-50 ${
          sidebarOpen ? "w-64" : "w-20"
        }`}
      >
        <Sidebar open={sidebarOpen} onToggle={setSidebarOpen} />
      </aside>

      {/* Top Navbar */}
      <header
        className={`fixed top-0 right-0 transition-all duration-500 ease-in-out bg-white/70 backdrop-blur-md border-b border-border z-40 ${
          sidebarOpen ? "left-64" : "left-20"
        }`}
      >
        <TopNav onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      </header>

      {/* Main Content */}
      <main
        className={`flex-1 overflow-y-auto p-8 pt-24 transition-all duration-500 ease-out ${
          animate ? "opacity-100" : "opacity-0"
        } ${sidebarOpen ? "ml-64" : "ml-20"}`}
      >
        {children}
      </main>
    </div>
  );
}

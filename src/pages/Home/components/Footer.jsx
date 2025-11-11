import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="relative 
                 bg-[var(--lexai-grad-end)] 
                 border-t border-[var(--border-color)]/50 
                 transition-colors duration-300"
    >
      {/* Top Divider Accent (This is a brand color, so it remains) */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 opacity-30" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-md">
                <span className="text-white text-lg font-semibold">⚖️</span>
              </div>
              <h3 className="text-2xl font-bold text-[var(--font-color)] tracking-tight transition-colors duration-300">
                LexAI
              </h3>
            </div>
            <p className="text-[var(--font-color-muted)] text-sm leading-relaxed max-w-sm transition-colors duration-300">
              Empowering individuals to understand and evaluate legal documents
              with AI-driven clarity, fairness, and transparency.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-[var(--font-color)] mb-4 transition-colors duration-300">Product</h4>
            <ul className="space-y-2 text-sm text-[var(--font-color-muted)] transition-colors duration-300">
              <li>
                <a
                  href="/features"
                  className="hover:text-[var(--primary-color)] transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/signup"
                  className="hover:text-[var(--primary-color)] transition-colors"
                >
                  Get Started
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[var(--primary-color)] transition-colors"
                >
                  API Access
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[var(--primary-color)] transition-colors"
                >
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-[var(--font-color)] mb-4 transition-colors duration-300">Company</h4>
            <ul className="space-y-2 text-sm text-[var(--font-color-muted)] transition-colors duration-300">
              <li>
                <a
                  href="/about"
                  className="hover:text-[var(--primary-color)] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[var(--primary-color)] transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[var(--primary-color)] transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[var(--primary-color)] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-[var(--font-color)] mb-4 transition-colors duration-300">Legal</h4>
            <ul className="space-y-2 text-sm text-[var(--font-color-muted)] transition-colors duration-300">
              <li>
                <a href="#" className="hover:text-[var(--primary-color)] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--primary-color)] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--primary-color)] transition-colors">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--primary-color)] transition-colors">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[var(--border-color)]/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 transition-colors duration-300">
          <p className="text-sm text-[var(--font-color-muted)]">
            © {currentYear} LexAI. All rights reserved.
          </p>

          {/* Socials */}
          <div className="flex gap-6 text-[var(--font-color-muted)]">
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-[var(--primary-color)] transition"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9.09 9.09 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.11 0c-2.52 0-4.57 2.05-4.57 4.57 0 .36.04.72.12 1.06A12.84 12.84 0 0 1 1.67.89a4.57 4.57 0 0 0-.62 2.3c0 1.59.81 2.99 2.04 3.81A4.45 4.45 0 0 1 .96 6v.06a4.57 4.57 0 0 0 3.66 4.48 4.6 4.6 0 0 1-2.04.08 4.57 4.57 0 0 0 4.27 3.18A9.08 9.08 0 0 1 0 20.13a12.82 12.82 0 0 0 6.94 2.03c8.32 0 12.87-6.89 12.87-12.87 0-.2 0-.4-.01-.6A9.21 9.21 0 0 0 23 3z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-[var(--primary-color)] transition"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3A2.5 2.5 0 0 1 7.5 5.5 2.5 2.5 0 1 1 4.98 3zM3 8.5h3v12H3zM9 8.5h2.8v1.7h.04c.39-.74 1.36-1.52 2.8-1.52 3 0 3.56 1.97 3.56 4.52v7.3h-3v-6.46c0-1.54-.03-3.53-2.15-3.53-2.16 0-2.5 1.68-2.5 3.42v6.57H9z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="GitHub"
              className="hover:text-[var(--primary-color)] transition"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0a12 12 0 0 0-3.79 23.4c.6.1.82-.26.82-.57v-2.02c-3.34.73-4.04-1.61-4.04-1.61a3.19 3.19 0 0 0-1.34-1.76c-1.09-.74.08-.72.08-.72a2.53 2.53 0 0 1 1.85 1.25 2.56 2.56 0 0 0 3.48 1 2.57 2.57 0 0 1 .76-1.6c-2.66-.3-5.46-1.34-5.46-5.97a4.66 4.66 0 0 1 1.25-3.24 4.33 4.33 0 0 1 .12-3.2s1-.33 3.3 1.25a11.4 11.4 0 0 1 6 0c2.28-1.58 3.28-1.25 3.28-1.25a4.33 4.33 0 0 1 .13 3.2 4.67 4.67 0 0 1 1.25 3.24c0 4.64-2.81 5.66-5.48 5.96a2.9 2.9 0 0 1 .83 2.25v3.33c0 .31.22.68.83.56A12 12 0 0 0 12 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
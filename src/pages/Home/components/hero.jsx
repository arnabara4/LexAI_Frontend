import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    // --- UPDATED ---
    // Applied your theme-aware background classes from index.css
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden 
                       lexai-bg lexai-orbs text-center py-10"
    >
      {/* Animated gradient blobs (These are fine, they are part of the orb) */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 50, -50, 0], y: [0, 40, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -60, 60, 0], y: [0, -30, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-15%] right-[10%] w-[500px] h-[500px] bg-indigo-400/20 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-5xl mx-auto flex flex-col items-center">
        {/* Badge --- UPDATED --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full 
                     border border-[var(--border-color)] 
                     bg-[var(--bg-color-muted)]/70 
                     text-[var(--primary-color)] 
                     text-sm font-medium shadow-sm transition-colors duration-300"
        >
          <span className="h-2 w-2 rounded-full bg-[var(--primary-color)] animate-pulse" />
          AI-Powered Legal Analysis
        </motion.div>

        {/* Heading --- UPDATED --- */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--font-color)] mb-6 leading-tight transition-colors duration-300"
        >
          Understand Legal Documents{" "}
          {/* This gradient is a brand element, it's fine to keep */}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Instantly
          </span>
        </motion.h1>

        {/* Subheading --- UPDATED --- */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl text-[var(--font-color-muted)] mb-10 max-w-3xl leading-relaxed transition-colors duration-300"
        >
          Transform complex contracts into clear summaries, highlight risky
          clauses, and get plain-English legal insights — powered by AI trained
          on Indian legal data.
        </motion.p>

        {/* CTAs --- UPDATED --- */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="/signup"
            className="px-8 py-3 rounded-xl 
                       bg-[var(--primary-color)] 
                       text-[var(--primary-color-text)] 
                       font-semibold shadow-lg hover:opacity-90 transition-all duration-300"
          >
            Analyze a Document
          </a>
          <a
            href="/login"
            className="px-8 py-3 rounded-xl 
                       border border-[var(--primary-color)] 
                       text-[var(--primary-color)] 
                       font-semibold hover:bg-[var(--bg-color-muted)] 
                       transition-all duration-300"
          >
            Login
          </a>
        </motion.div>

        {/* Floating mock document --- UPDATED --- */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="relative mt-16 w-full max-w-3xl"
        >
          <div className="relative mx-auto w-full 
                          bg-[var(--bg-color)] 
                          shadow-xl rounded-2xl 
                          border border-[var(--border-color)] 
                          overflow-hidden backdrop-blur-md transition-colors duration-300"
          >
            <div className="flex items-center justify-between px-4 py-2 
                            border-b border-[var(--border-color)] 
                            bg-[var(--bg-color-muted)] 
                            transition-colors duration-300"
            >
              <div className="flex gap-1">
                <span className="w-3 h-3 bg-red-400 rounded-full" />
                <span className="w-3 h-3 bg-yellow-400 rounded-full" />
                <span className="w-3 h-3 bg-green-400 rounded-full" />
              </div>
              <span className="text-sm text-[var(--font-color-muted)] font-medium transition-colors duration-300">
                agreement.pdf
              </span>
              <div />
            </div>
            <div className="px-6 py-6 text-left text-[var(--font-color)] text-sm leading-relaxed transition-colors duration-300">
              <p className="mb-3">
                <strong>Clause 4.2:</strong> The lessee shall pay rent within 7
                days of invoice receipt.{" "}
                {/* Red text is fine, it's a specific alert color */}
                <span className="text-red-500 font-medium">
                  (⚠ Late payment penalty: 10% per day)
                </span>
              </p>
              <p className="mb-3">
                <strong>Clause 6.1:</strong> The lessor reserves the right to
                modify the agreement unilaterally.{" "}
                <span className="text-red-500 font-medium">(⚠ Red Flag)</span>
              </p>
              <p>
                <strong>Summary:</strong> This contract heavily favors the
                lessor. Consider negotiating payment terms and renewal clauses.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Trusted by --- UPDATED --- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="mt-20 text-[var(--font-color-muted)] text-sm uppercase tracking-wide transition-colors duration-300"
        >
          Trusted by Students, Freelancers, and Startups across India 🇮🇳
        </motion.div>
      </div>
    </section>
  );
}
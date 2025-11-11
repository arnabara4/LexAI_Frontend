// FeaturesSection.jsx
import React from "react";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  const features = [
    {
      id: 1,
      title: "Plain-English Summaries",
      description:
        "Rephrase dense clauses into short, actionable explanations.",
      icon: "📄",
    },
    {
      id: 2,
      title: "Red-Flag Detection",
      description:
        "Detect exploitative clauses like automatic renewals or excessive penalties.",
      icon: "🚩",
    },
    {
      id: 3,
      title: "Clause Comparison",
      description:
        "Compare clauses against balanced standards and see the differences.",
      icon: "⚖️",
    },
    {
      id: 4,
      title: "Upload & Analyze",
      description:
        "Upload PDFs or paste text — the AI parses structure and extracts clauses.",
      icon: "📤",
    },
    {
      id: 5,
      title: "Multilingual",
      description: "Summaries and explanations in English, Hindi, and Bengali.",
      icon: "🌐",
    },
    {
      id: 6,
      title: "Privacy & Transparency",
      description:
        "End-to-end encryption and explainable model notes for trust.",
      icon: "🔒",
    },
  ];

  const container = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
  };
  const card = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="features"
      className="lexai-bg lexai-orbs relative py-20 md:py-28" // This is already theme-aware!
    >
      <div className="section-foreground container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12">
          {/* --- UPDATED --- */}
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--font-color)] mb-4 transition-colors duration-300">
            What LexAI Does for You
          </h2>
          <p className="text-lg text-[var(--font-color-muted)] transition-colors duration-300">
            AI-driven analysis tailored for Indian legal documents — clarity,
            protection and confidence.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={container}>
          {features.map((f, idx) => (
            <motion.article
              key={f.id}
              variants={card}
              // --- UPDATED ---
              className="group relative p-6 rounded-2xl 
                         bg-[var(--bg-color)] 
                         border border-[var(--border-color)]/50 
                         shadow-sm hover:shadow-lg hover:-translate-y-1 
                         transition-all duration-300">
              <div className="flex items-start gap-4">
                {/* Icon is fine, brand colors */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white text-xl shadow">
                  {f.icon}
                </div>
                <div>
                  {/* --- UPDATED --- */}
                  <h3 className="text-lg font-semibold text-[var(--font-color)] mb-1 transition-colors duration-300">
                    {f.title}
                  </h3>
                  <p className="text-sm text-[var(--font-color-muted)] leading-relaxed transition-colors duration-300">
                    {f.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* --- UPDATED --- */}
        <div className="text-center mt-12">
          <a
            href="/signup"
            className="inline-block px-6 py-3 rounded-lg 
                       bg-[var(--primary-color)] 
                       text-[var(--primary-color-text)] 
                       font-semibold hover:opacity-90 
                       transition-all duration-300">
            Try it now
          </a>
        </div>
      </div>
    </section>
  );
}

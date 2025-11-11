// src/pages/Dashboard/components/AnalysisPreview.jsx
import React from "react";

export default function AnalysisPreview({ file, text, loading, progress, onAnalyze, onClear }) {
  const hasInput = !!file || text.trim().length > 50; // Increased min length

  return (
    <div className="mt-6 rounded-xl border border-[var(--border-color)] bg-[var(--bg-color-card)] p-6 shadow-sm transition-colors duration-300">
      <h3 className="text-lg font-semibold text-[var(--font-color)] mb-2">Ready to analyze</h3>
      <p className="text-sm text-[var(--font-color-muted)] mb-4">
        We'll extract key clauses, highlight risks, and provide a plain-English summary.
      </p>

      {/* --- Loading Bar --- */}
      {loading && (
        <div className="mb-4">
          <div className="w-full bg-[var(--bg-color-content)] rounded-full h-2 overflow-hidden">
            <div 
              className="h-2 bg-[var(--primary-color)]" 
              style={{ width: `${progress}%`, transition: "width .2s" }} 
            />
          </div>
          <div className="text-xs mt-2 text-[var(--font-color-muted)]">
            Analyzing... {progress}%
          </div>
        </div>
      )}

      {/* --- Buttons --- */}
      <div className="flex gap-3">
        <button
          onClick={onAnalyze}
          disabled={!hasInput || loading}
          className="px-5 py-2 rounded-lg font-medium shadow-md transition-all 
                     disabled:opacity-50 disabled:cursor-not-allowed
                     bg-[var(--primary-color)] 
                     text-[var(--primary-color-text)] 
                     hover:opacity-90"
          // --- Replaced complex conditional class with 'disabled:' pseudo-class ---
        >
          {loading ? "Analyzing..." : "Analyze"}
        </button>

        <button
          onClick={onClear}
          className="px-4 py-2 rounded-lg border 
                     border-[var(--border-color)] 
                     text-[var(--font-color-muted)] 
                     hover:bg-[var(--bg-color-muted)] 
                     transition-colors disabled:opacity-50"
          disabled={loading}
        >
          Clear
        </button>
      </div>

      <div className="mt-4 text-xs text-[var(--font-color-muted)] opacity-70">
        Tip: use the paste box for quick checks of short contracts.
      </div>
    </div>
  );
}
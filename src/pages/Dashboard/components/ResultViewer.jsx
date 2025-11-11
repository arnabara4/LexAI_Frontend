import React from "react";
import toast from "react-hot-toast";
import { AlertTriangle, Shield, Info } from "lucide-react";

function RiskBadge({ level }) {
  const map = {
    low: "bg-green-100 text-green-800 border-green-200",
    medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
    high: "bg-red-100 text-red-800 border-red-200",
  };

  const iconMap = {
    low: <Shield className="w-3.5 h-3.5 mr-1" />,
    medium: <Info className="w-3.5 h-3.5 mr-1" />,
    high: <AlertTriangle className="w-3.5 h-3.5 mr-1" />,
  };

  return (
    <div
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${map[level] || "bg-gray-100 text-gray-800 border-gray-200"}`}
    >
      {iconMap[level] || <Info className="w-3.5 h-3.5 mr-1" />}
      {level ? level.toUpperCase() : "N/A"}
    </div>
  );
}

export default function ResultsViewer({ data, loading, error, onRetry }) {
  if (loading) {
    return (
      <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-color-muted)]/40 p-6 animate-pulse">
        <div className="h-6 w-1/2 bg-[var(--border-color)] rounded mb-4" />
        <div className="h-44 bg-[var(--border-color)] rounded" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-xl border border-red-300 bg-red-500/10 p-6 text-center">
        <h3 className="text-lg font-semibold text-red-400">Analysis Failed</h3>
        <p className="text-sm text-red-300 mt-2">{error}</p>
        <button
          onClick={onRetry}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-color-muted)]/30 p-6 text-center">
        <h3 className="text-lg font-semibold text-[var(--font-color)]">No Analysis Yet</h3>
        <p className="text-sm text-[var(--font-color-muted)] mt-2">
          Upload a PDF or paste text to get instant insights.
        </p>
      </div>
    );
  }

  const { summary, highlights = [], red_flags = [], metadata = {}, raw } = data;
  const displayItems = highlights.length
    ? highlights
    : (red_flags || []).map((rf) => ({
        clause: rf.context_source || "Clause",
        text: rf.clause_text || "",
        note: rf.concern || "",
        risk: "high",
      }));

  const handleCopy = (text, message) => {
    navigator.clipboard?.writeText(text);
    toast.success(message);
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex items-start justify-between flex-wrap gap-3">
        <div>
          <h2 className="text-2xl font-bold text-[var(--font-color)]">Analysis Results</h2>
          <p className="text-sm text-[var(--font-color-muted)] mt-1">
            File: {metadata.filename || "pasted-text.txt"}
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => handleCopy(JSON.stringify(data, null, 2), "JSON Copied!")}
            className="px-3 py-2 text-sm font-medium bg-[var(--bg-color-muted)] text-[var(--font-color)] rounded-lg hover:bg-[var(--border-color)] transition-colors"
          >
            Copy JSON
          </button>
          <button
            onClick={() => handleCopy(summary || "", "Summary Copied!")}
            className="px-3 py-2 text-sm font-medium bg-[var(--bg-color-muted)] text-[var(--font-color)] rounded-lg hover:bg-[var(--border-color)] transition-colors"
          >
            Copy Summary
          </button>
        </div>
      </div>

      {/* Summary Section */}
      {summary && (
        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-color-muted)]/30 p-5 shadow-sm">
          <h3 className="font-semibold text-[var(--font-color)] mb-2">Summary</h3>
          <p className="text-[var(--font-color-muted)] leading-relaxed whitespace-pre-wrap">{summary}</p>
        </div>
      )}

      {/* Highlights & Risks */}
      <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-color-muted)]/30 p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-[var(--font-color)]">Highlights & Risk Flags</h3>
          <p className="text-sm text-[var(--font-color-muted)]">Tap a clause to copy</p>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-1 md:grid-cols-2">
          {displayItems.length === 0 ? (
            <p className="text-sm text-[var(--font-color-muted)]">No specific clauses detected.</p>
          ) : (
            displayItems.map((item, idx) => (
              <div
                key={idx}
                className={`
                  relative border rounded-xl p-4 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]
                  ${
                    item.risk === "high"
                      ? "border-red-300/60 bg-red-500/5"
                      : item.risk === "medium"
                      ? "border-yellow-300/60 bg-yellow-500/5"
                      : "border-green-300/60 bg-green-500/5"
                  }
                `}
                onClick={() => handleCopy(item.text, "Clause copied!")}
              >
                {/* Risk Badge */}
                <div className="absolute top-3 right-3">
                  <RiskBadge level={item.risk || "low"} />
                </div>

                {/* Clause Heading */}
                <h4 className="font-semibold text-[var(--font-color)] mb-1">
                  {item.clause || `Clause ${idx + 1}`}
                </h4>

                {/* Clause Description */}
                {item.note && (
                  <p className="text-xs text-[var(--font-color-muted)] mb-2 leading-snug">
                    {item.note}
                  </p>
                )}

                {/* Clause Text */}
                <blockquote className="text-sm text-[var(--font-color)] italic border-l-2 border-[var(--border-color)] pl-3 leading-relaxed">
                  {item.text}
                </blockquote>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Raw Text */}
      {raw && (
        <details className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-color-muted)]/30 p-5 shadow-sm">
          <summary className="cursor-pointer font-medium text-[var(--font-color)]">
            View Processed Text
          </summary>
          <pre className="mt-3 max-h-64 overflow-auto text-sm text-[var(--font-color-muted)] whitespace-pre-wrap">
            {raw}
          </pre>
        </details>
      )}
    </div>
  );
}

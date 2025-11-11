// src/pages/Dashboard/components/chat/ChatContextBanner.jsx
import React from "react";

export default function ChatContextBanner({ context }) {
  if (!context) {
    // --- Warning (Yellow) is semantic, so we leave it. This is correct. ---
    return (
      <div className="mx-6 my-3 bg-yellow-100/10 border border-yellow-200/30 text-yellow-300 text-sm rounded-lg p-3">
        ⚠️ No document context loaded. Please analyze a document first in the 'Analyze' tab.
      </div>
    );
  }

  return (
    // --- Themed Info Banner ---
    <div className="mx-6 my-3 bg-[var(--primary-color)]/10 border border-[var(--primary-color)]/20 
                    text-[var(--primary-color)] rounded-lg p-3 text-sm transition-colors duration-300"
    >
      <strong>Document Context:</strong>{" "}
      {context.metadata?.filename || "Pasted Text"}
      <p className="text-[var(--primary-color)]/70 italic mt-1 text-xs">
        LexAI uses this analyzed document to ground your chat responses.
      </p>
    </div>
  );
}
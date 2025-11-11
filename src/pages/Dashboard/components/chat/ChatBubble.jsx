import React from "react";

export default function ChatBubble({ role, content }) {
  const isUser = role === "user";

  // 🧠 Try parsing JSON-like responses for clean display
  let displayText = content;
  try {
    const parsed = JSON.parse(content);
    if (typeof parsed === "object") {
      displayText = Object.entries(parsed)
        .map(([k, v]) => `**${k.charAt(0).toUpperCase() + k.slice(1)}:** ${v}`)
        .join("\n\n");
    }
  } catch {
    // not JSON, keep as-is
  }

return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[75%] px-4 py-3 rounded-2xl shadow-sm whitespace-pre-wrap 
                    transition-colors duration-300 ${
          isUser
            ? "bg-[var(--primary-color)] text-[var(--primary-color-text)] rounded-br-none"
            : "bg-[var(--bg-color-muted)] border border-[var(--border-color)] text-[var(--font-color)] rounded-bl-none"
        }`}
      >
        {displayText}
      </div>
    </div>
  );
}

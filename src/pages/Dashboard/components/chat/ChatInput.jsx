// src/pages/Dashboard/components/chat/ChatInput.jsx
import React, { useState } from "react";
import { Send, Eraser } from "lucide-react"; // Import icons

export default function ChatInput({ onSend, onClear, loading }) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    onSend(message);
    setMessage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border-t border-[var(--border-color)]/50 
                 bg-[var(--bg-color-card)]/80 backdrop-blur-md 
                 px-4 py-3 flex items-center gap-3 transition-colors duration-300"
    >
      {/* --- Clear Button --- */}
      <button
        type="button"
        onClick={onClear}
        className="text-[var(--font-color-muted)] hover:text-[var(--primary-color)] transition-colors p-2 rounded-lg"
      >
        <Eraser className="w-4 h-4" />
      </button>

      {/* --- Text Input --- */}
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask something about your document..."
        disabled={loading}
        className="flex-1 bg-[var(--bg-color-content)] border border-[var(--border-color)]
                   focus:border-[var(--primary-color)] 
                   rounded-lg px-4 py-2 text-sm text-[var(--font-color)]
                   outline-none focus:ring-1 focus:ring-[var(--primary-color)] 
                   transition-colors duration-300"
      />

      {/* --- Send Button --- */}
      <button
        type="submit"
        disabled={loading}
        className="bg-[var(--primary-color)] hover:opacity-90 
                   text-[var(--primary-color-text)] 
                   px-4 py-2 rounded-lg text-sm font-medium 
                   disabled:opacity-50 transition-colors"
      >
        <Send className="w-4 h-4" />
      </button>
    </form>
  );
}
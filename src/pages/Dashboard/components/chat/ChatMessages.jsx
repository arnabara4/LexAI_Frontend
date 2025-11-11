import React from "react";
import { motion } from "framer-motion";

export default function ChatMessages({ messages, loading }) {
  if (messages.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-slate-400 text-sm">
        Start chatting about your document...
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 py-2">
      {messages.map((msg, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`flex ${
            msg.role === "user" ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`max-w-[75%] px-4 py-3 rounded-2xl shadow-sm text-sm leading-relaxed ${
              msg.role === "user"
                ? "bg-blue-600 text-white rounded-br-sm"
                : "bg-white/80 backdrop-blur-md border border-blue-50 text-slate-800"
            }`}
          >
            {msg.content}
          </div>
        </motion.div>
      ))}

      {loading && (
        <div className="text-slate-400 text-sm italic animate-pulse">
          LexAI is thinking...
        </div>
      )}
    </div>
  );
}

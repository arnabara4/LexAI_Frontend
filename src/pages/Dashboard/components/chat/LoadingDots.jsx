// src/pages/Dashboard/components/chat/LoadingDots.jsx
import React from "react";

export default function LoadingDots() {
  return (
    <div className="flex space-x-1">
      <span className="w-2 h-2 bg-[var(--primary-color)] rounded-full animate-bounce" />
      <span className="w-2 h-2 bg-[var(--primary-color)] rounded-full animate-bounce delay-100 opacity-80" />
      <span className="w-2 h-2 bg-[var(--primary-color)] rounded-full animate-bounce delay-200 opacity-60" />
    </div>
  );
}
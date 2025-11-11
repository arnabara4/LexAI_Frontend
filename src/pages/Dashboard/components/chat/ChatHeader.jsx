import React from "react";

export default function ChatHeader() {
  return (
    <div className="sticky top-0 z-10 backdrop-blur-lg bg-white/70 border-b border-blue-50 px-6 py-4 flex items-center justify-between">
      <h1 className="text-xl font-semibold text-slate-800">
        LexAI Document Chat 💬
      </h1>
      <div className="text-sm text-slate-500">Powered by Legal Intelligence</div>
    </div>
  );
}

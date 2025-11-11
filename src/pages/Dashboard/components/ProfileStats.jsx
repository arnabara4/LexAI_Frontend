// src/pages/Dashboard/components/ProfileStats.jsx
import React from "react";
import { FileText, MessageSquare, Clock } from "lucide-react";

export default function ProfileStats({ stats, loading }) {
  if (loading) {
    // Themed loading state
    return (
      <div className="rounded-2xl border border-[var(--border-color)] 
                      bg-[var(--bg-color-card)] p-6 animate-pulse"
      >
        <div className="h-6 w-1/3 bg-[var(--bg-color-muted)] rounded mb-4" />
        <div className="h-24 bg-[var(--bg-color-muted)] rounded" />
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-[var(--border-color)] 
                    bg-[var(--bg-color-card)] p-6 space-y-4 shadow-sm
                    transition-colors duration-300"
    >
      <h3 className="text-lg font-semibold text-[var(--font-color)]">Your Activity</h3>

      <div className="grid grid-cols-3 gap-4 text-center">
        {/* Stat Card 1 */}
        <div className="flex flex-col items-center bg-[var(--bg-color-muted)]/50 rounded-xl p-4">
          <FileText className="w-6 h-6 text-[var(--primary-color)] mb-1" />
          <div className="text-2xl font-bold text-[var(--font-color)]">
            {stats?.documents || 0}
          </div>
          <div className="text-xs text-[var(--font-color-muted)]">Documents</div>
        </div>
        {/* Stat Card 2 */}
        <div className="flex flex-col items-center bg-[var(--bg-color-muted)]/50 rounded-xl p-4">
          <MessageSquare className="w-6 h-6 text-[var(--primary-color)] mb-1" />
          <div className="text-2xl font-bold text-[var(--font-color)]">
            {stats?.chats || 0}
          </div>
          <div className="text-xs text-[var(--font-color-muted)]">Chats</div>
        </div>
        {/* Stat Card 3 */}
        <div className="flex flex-col items-center bg-[var(--bg-color-muted)]/50 rounded-xl p-4">
          <Clock className="w-6 h-6 text-[var(--primary-color)] mb-1" />
          <div className="text-xl font-bold text-[var(--font-color)]">
            {stats?.last_active
              ? new Date(stats.last_active).toLocaleDateString()
              : "-"}
          </div>
          <div className="text-xs text-[var(--font-color-muted)]">Last Active</div>
        </div>
      </div>
    </div>
  );
}
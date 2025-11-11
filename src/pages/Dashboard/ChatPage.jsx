import React, { useState, useEffect, useRef } from "react";
import api from "../../utils/api";
import toast from "react-hot-toast";
import ChatBubble from "./components/chat/ChatBubble";
import ChatInput from "./components/chat/ChatInput";
import LoadingDots from "./components/chat/LoadingDots";

export default function ChatPage() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  // 🧠 Load chat history from backend on mount
  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const { data } = await api.get("/chat/history");
        if (data?.chat_history?.length > 0) {
          setHistory(data.chat_history);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchHistory();
  }, []);

  // Auto-scroll on new message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const sendMessage = async (message) => {
    if (!message.trim()) return;

    const newMessage = { role: "user", content: message };
    const updatedHistory = [...history, newMessage];
    setHistory(updatedHistory);
    setLoading(true);

    try {
      const { data } = await api.post("/chat", { history: updatedHistory });
      setHistory([...updatedHistory, data]); // backend returns { role, content }
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.error || "Chat failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleClear = async () => {
    setHistory([]);
    toast.success("Chat cleared!");
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] 
                   bg-[var(--bg-color-card)] 
                   rounded-xl shadow-sm border border-[var(--border-color)] 
                   overflow-hidden transition-colors duration-300"
    >
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        {history.length === 0 && (
          <div className="text-center text-[var(--font-color-muted)] mt-10">
            <p className="text-lg font-medium">💬 Start chatting about your document</p>
            <p className="text-sm text-[var(--font-color-muted)]/70 mt-1">
              Your analyzed document is automatically remembered.
            </p>
          </div>
        )}

        {history.map((msg, idx) => (
          <ChatBubble key={idx} role={msg.role} content={msg.content} />
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-[var(--bg-color-muted)] border border-[var(--border-color)] 
                            rounded-2xl px-4 py-2 shadow-sm transition-colors duration-300"
            >
              <LoadingDots />
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      <ChatInput onSend={sendMessage} onClear={handleClear} loading={loading} />
    </div>
  );
}
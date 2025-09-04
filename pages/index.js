import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Namaste 👋. Kuch bhi puchho…" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      { from: "user", text: input },
      { from: "bot", text: "Apni biwi se puch." },
    ]);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-white flex flex-col items-center justify-center p-4">
      <motion.h1
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        ApniBiwiSePuch.ai 💍
      </motion.h1>
      <div className="w-full max-w-md shadow-2xl rounded-2xl bg-white">
        <div className="flex flex-col h-[500px] p-4">
          <div className="flex-1 overflow-y-auto space-y-3 mb-4">
            {messages.map((msg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: msg.from === "user" ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={`p-3 rounded-2xl max-w-[80%] text-sm shadow-md ${
                  msg.from === "user"
                    ? "bg-blue-500 text-white ml-auto"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {msg.text}
              </motion.div>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              className="flex-1 border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your question..."
            />
            <button
              onClick={handleSend}
              className="rounded-xl bg-pink-500 hover:bg-pink-600 px-4 py-2 text-white text-sm"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

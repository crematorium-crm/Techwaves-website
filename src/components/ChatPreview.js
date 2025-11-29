"use client";

import { useState, useEffect, useRef } from "react";

export default function ChatPreview() {
  const [visibleMessages, setVisibleMessages] = useState([]);
  const containerRef = useRef(null);
  const currentIndexRef = useRef(0);
  const intervalRef = useRef(null);

  const messages = [
    {
      username: "DorsaneZ",
      content: "Huawei ICT workshop starts now! 🚀",
      color: "text-blue-400",
      duration: 3000,
    },
    {
      username: "MahinarZ",
      content: "Design session in 10 mins!",
      color: "text-purple-400",
      duration: 2500,
    },
    {
      username: "RazaneB",
      content: "New members welcome! 👋",
      color: "text-green-400",
      duration: 2000,
    },
    {
      username: "SororB",
      content: "Hackathon reg open! 💻",
      color: "text-red-400",
      duration: 2800,
    },
    {
      username: "AssilB",
      content: "Meeting in main hall",
      color: "text-yellow-400",
      duration: 2200,
    },
    {
      username: "Huawei_ICT",
      content: "Certification deadline! 🏆",
      color: "text-cyan-400",
      duration: 3200,
    },
  ];

  // Add CSS styles
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes message-appear {
        from { opacity: 0; transform: translateY(8px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-message-appear {
        animation: message-appear 0.3s ease-out forwards;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  useEffect(() => {
    const addMessage = () => {
      const newMessage = {
        ...messages[currentIndexRef.current],
        timestamp: Date.now(),
      };
      currentIndexRef.current = (currentIndexRef.current + 1) % messages.length;
      setVisibleMessages((prev) => [...prev, newMessage].slice(-4));
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(addMessage, newMessage.duration);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          currentIndexRef.current = 0;
          setVisibleMessages([]);
          addMessage();
        } else {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setVisibleMessages([]);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      observer.disconnect();
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full max-w-sm">
      <div className="bg-slate-900/80 border border-slate-700 rounded-xl shadow-lg backdrop-blur-xl">
        {/* Header */}
        <div className="border-b border-slate-700 px-3 py-2">
          <div className="flex items-center gap-2">
            <span className="font-medium text-sm text-blue-400">#techwaves</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400 text-sm truncate">Club announcements</span>
          </div>
        </div>

        {/* Messages */}
        <div className="p-3 flex flex-col justify-end h-48">
          <div className="flex flex-col gap-2 overflow-hidden">
            {visibleMessages.map((message) => (
              <div
                key={message.timestamp}
                className={`flex items-start gap-2 ${
                  message === visibleMessages[visibleMessages.length - 1] && "animate-message-appear"
                }`}
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  message.color.replace('text-', 'bg-').replace('400', '500/20')
                }`}>
                  {message.username.charAt(0)}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className={`font-medium text-sm ${message.color}`}>
                      {message.username}
                    </span>
                    <span className="text-slate-500 text-xs">now</span>
                  </div>
                  <p className="text-slate-100 text-sm">{message.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
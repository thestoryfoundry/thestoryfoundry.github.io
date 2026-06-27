"use client";

import { useState, useEffect } from "react";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istTime = new Intl.DateTimeFormat('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }).format(now);
      setTime(`${istTime} IST`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="border-t border-border py-8 px-6 md:px-12 bg-background relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-mono text-xs text-text-muted">
          Dixit Kumar
        </div>
        <div className="font-mono text-xs text-text-muted">
          &copy; {new Date().getFullYear()} &middot; Delhi, India
        </div>
        <div className="font-mono text-xs text-text-muted flex flex-col md:flex-row items-center gap-2">
          {time && (
            <>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span>{time}</span>
              </div>
              <span className="hidden md:inline">&middot;</span>
            </>
          )}
          <span>Designed with intent</span>
        </div>
      </div>
    </footer>
  );
}

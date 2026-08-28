import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: true }) + ' GMT' + (now.getTimezoneOffset() < 0 ? '+' : '-') + Math.abs(now.getTimezoneOffset() / 60));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#0d0d0d]/80 border-b border-zinc-800/50">
      <div className="w-full px-6 md:px-12 lg:px-24 xl:px-42 h-16 flex items-center justify-between text-sm tracking-wider uppercase text-zinc-400 font-medium">
        <div className="flex items-center gap-2">
          <span className="text-zinc-300 tracking-normal">{time}</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="hover:text-zinc-100 transition-colors">About</a>
          <a href="#skills" className="hover:text-zinc-100 transition-colors">Skills</a>
          <a href="#experience" className="hover:text-zinc-100 transition-colors">Experience</a>
          <a href="#education" className="hover:text-zinc-100 transition-colors">Education</a>
          <a href="#projects" className="hover:text-zinc-100 transition-colors">Projects</a>
          <a href="#connect" className="hover:text-zinc-100 transition-colors">Connect</a>
        </nav>
      </div>
    </header>
  );
};

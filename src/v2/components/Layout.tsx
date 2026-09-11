import React from 'react';
import { Navbar } from './Navbar';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-zinc-300 selection:bg-zinc-800 selection:text-zinc-100 font-sans">
      <Navbar />
      <main className="w-full px-6 md:px-12 lg:px-24 xl:px-32 py-12 md:py-24 space-y-32">
        {children}
      </main>
      <footer className="border-t border-zinc-800/50 py-12 mt-32 text-xs text-zinc-500 uppercase tracking-widest">
        <div className="w-full px-6 md:px-12 lg:px-24 xl:px-32 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>© {new Date().getFullYear()} Daniella. All rights reserved.</div>
          <div>Software Engineer & IT Student</div>
        </div>
      </footer>
    </div>
  );
};

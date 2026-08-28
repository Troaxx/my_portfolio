import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Hero: React.FC = () => {
  return (
    <section className="flex flex-col gap-8 pb-8 pt-4">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-zinc-100">Daniella Han</h1>
        <h2 className="text-xl md:text-2xl text-zinc-400 font-medium tracking-tight">Software Engineer & IT Student</h2>
      </div>

      <div className="flex items-center gap-6 pt-6 text-sm font-medium text-zinc-400">
        <a href="https://github.com/Troaxx" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-zinc-100 transition-colors">
          <GitHubIcon fontSize="small" /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/daniella-han" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-zinc-100 transition-colors">
          <LinkedInIcon fontSize="small" /> LinkedIn
        </a>
      </div>
    </section>
  );
};

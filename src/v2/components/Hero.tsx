import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Hero: React.FC = () => {
  return (
    <section className="flex flex-col gap-8 pb-8 pt-4">
      <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-8 md:gap-10">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-zinc-100">Daniella Han</h1>
          <h2 className="text-xl md:text-2xl text-zinc-400 font-medium tracking-tight">Software Engineer & IT Student</h2>
        </div>
        <div className="shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-zinc-400 shadow-lg">
          <img
            src={`${import.meta.env.BASE_URL}my-pic.jpg`}
            alt="Daniella Han"
            className="w-full h-full object-cover"
          />
        </div>
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

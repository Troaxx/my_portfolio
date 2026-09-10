import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Connect: React.FC = () => {
  return (
    <section id="connect" className="space-y-8">
      <div className="flex items-center justify-between border-b border-zinc-800/50 pb-4 h-[38px]">
        <div>
          <h2 className="text-sm font-semibold tracking-widest text-zinc-100 uppercase">CONNECT</h2>
          <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Let's Build Something</p>
        </div>
      </div>
      <div className="space-y-6">
        <p className="text-base md:text-lg text-zinc-400 font-light">
          Have a project in mind or just want to say hi? Reach out.
        </p>
        <div className="flex items-center gap-6 text-sm font-medium text-zinc-400">
          <a
            href="https://github.com/Troaxx"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-zinc-100 transition-colors"
          >
            <GitHubIcon fontSize="small" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/daniella-han"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-zinc-100 transition-colors"
          >
            <LinkedInIcon fontSize="small" /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

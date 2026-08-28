import React from 'react';

export const AboutMe: React.FC = () => {
  return (
    <section className="space-y-8" id="about">
      <div className="flex items-center justify-between border-b border-zinc-800/50 pb-4 h-[38px]">
        <div>
          <h2 className="text-sm font-semibold tracking-widest text-zinc-100 uppercase">About</h2>
          <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Get to know me</p>
        </div>
      </div>
      <div className="text-base md:text-lg text-zinc-400 max-w-5xl leading-relaxed space-y-6 font-light">
        <p>I'm a student at Temasek Polytechnic passionate about building meaningful web experiences.</p>
        <p>I love mastering technologies like React and TypeScript to turn creative ideas into reality. Currently shaping digital solutions as Lead Developer at Eventas Asia LLP and interning at Akira Taekwondo.</p>
        <p>Outside of coding, I enjoy building Gundam models—a hobby that shares the same need for patience and precision as software engineering.</p>
      </div>
    </section>
  );
};

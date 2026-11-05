import React from 'react';
import { Card } from "@/components/ui/card";
import { ExternalLink } from 'lucide-react';

export const Demos: React.FC = () => {
  const demos = [
    {
      title: 'Copydesk Docs',
      description: 'Markdown-first documentation site with auto-generated navigation, Fuse.js search, dark and light themes, and a responsive layout.',
      image: 'demo-copydesk-docs.png',
      url: 'https://copydesk-demo.netlify.app/getting-started/introduction',
    },
    {
      title: 'Copydesk Dashboard',
      description: 'Landing and sign-in experience for an editorial workspace built for small publishing teams.',
      image: 'demo-copydesk-dashboard.png',
      url: 'https://copydesk-dashboard.netlify.app/',
    },
    {
      title: 'Alder Coffee Roasters',
      description: 'Brand website for a specialty coffee roaster with story, offerings, visit info and an order call to action.',
      image: 'demo-alder-coffee.png',
      url: 'https://alder-coffee-demo.netlify.app/',
    },
  ];

  return (
    <section id="demos" className="space-y-8">
      <div className="flex items-center justify-between border-b border-zinc-800/50 pb-4 h-[38px]">
        <div>
          <h2 className="text-sm font-semibold tracking-widest text-zinc-100 uppercase">DEMOS</h2>
          <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Sample Sites</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {demos.map((demo, idx) => (
          <a
            key={idx}
            href={demo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <Card className="bg-zinc-900/30 border-zinc-800/50 group-hover:bg-zinc-900/60 group-hover:border-zinc-700/50 transition-all duration-300 rounded-lg p-0 gap-0">
              <img
                src={`${import.meta.env.BASE_URL}${demo.image}`}
                alt={demo.title}
                className="w-full aspect-video object-cover"
              />
              <div className="p-5 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-zinc-100">{demo.title}</h3>
                  <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed font-light">
                  {demo.description}
                </p>
              </div>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
};

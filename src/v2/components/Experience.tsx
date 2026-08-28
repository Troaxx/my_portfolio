import React, { useState } from 'react';
import { Briefcase } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

export const Experience: React.FC = () => {
  const [view, setView] = useState<'Detailed' | 'Compact'>('Detailed');

  const experiences = [
    {
      company: 'OCBC',
      location: 'Singapore',
      duration: 'Current',
      roles: [
        {
          title: 'Software Engineer Intern',
          date: 'Mar 2026 – Current',
          desc: 'Working as a Software Engineer Intern within the bank, contributing to backend services and internal tooling.',
          tags: ['Java', 'Spring Boot']
        }
      ]
    },
    {
      company: 'Eventas Asia LLP',
      location: 'Singapore',
      duration: 'Current',
      roles: [
        {
          title: 'Lead Developer',
          date: '2023 – Present',
          desc: 'Created the current eventas.com.sg website and digital solutions for events. Assisted in porting the old infrastructure to a modern architecture and implemented CI/CD workflows.',
          tags: ['Next.js', 'TypeScript', 'CI/CD']
        }
      ]
    },
    {
      company: 'Akira Taekwondo',
      location: 'Singapore',
      duration: '1 Year',
      roles: [
        {
          title: 'Web Developer Intern',
          date: 'Aug 2025 – Aug 2026',
          desc: 'Currently working on the revamp of akiraxtkd.com, modernizing the web presence and user experience.',
          tags: ['TypeScript', 'CI/CD']
        }
      ]
    },
    {
      company: 'Stealth AI Startup',
      location: 'Singapore',
      duration: 'Current',
      roles: [
        {
          title: 'Co-Founder & Lead Developer',
          date: 'Aug 2025 – Present',
          desc: 'Led a team of 3 on product implementation, testing, and incremental improvement of prototypes.',
          tags: ['HTML', 'CSS', 'JavaScript']
        }
      ]
    }
  ];


  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between border-b border-zinc-800/50 pb-4">
        <div>
          <h2 className="text-sm font-semibold tracking-widest text-zinc-100 uppercase">Experience</h2>
          <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Professional Journey</p>
        </div>
        <div className="flex gap-1 bg-zinc-900/50 p-1 rounded-full border border-zinc-800/50">
          <button 
            className={`text-xs px-3 py-1 rounded-full transition-all duration-300 ${view === 'Detailed' ? 'bg-zinc-800 text-zinc-100 shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
            onClick={() => setView('Detailed')}
          >
            Detailed
          </button>
          <button 
            className={`text-xs px-3 py-1 rounded-full transition-all duration-300 ${view === 'Compact' ? 'bg-zinc-800 text-zinc-100 shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
            onClick={() => setView('Compact')}
          >
            Compact
          </button>
        </div>
      </div>
      <div className="space-y-10 pl-2">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative border-l border-zinc-800/60 pl-8 pb-2">
            <span className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-zinc-900 border-2 border-zinc-700" />
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-4">
              <div>
                <h3 className="text-base font-semibold text-zinc-200">{exp.company}</h3>
                <span className="text-xs text-zinc-500">{exp.location} • {exp.duration}</span>
              </div>
            </div>
            <div className="space-y-6">
              {exp.roles.map((role, rIdx) => (
                <div key={rIdx} className="space-y-2">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                    <h4 className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                      <Briefcase className="w-3.5 h-3.5 text-zinc-500" />
                      {role.title}
                    </h4>
                    <span className="text-[11px] uppercase tracking-wider text-zinc-500">{role.date}</span>
                  </div>
                  {view === 'Detailed' && role.desc && (
                    <div className="mt-2 text-sm text-zinc-400 leading-relaxed">
                      {role.desc}
                      {role.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {role.tags.map(tag => (
                            <Badge variant="secondary" key={tag} className="text-[10px] uppercase tracking-wider bg-zinc-800/40 text-zinc-400 hover:bg-zinc-800 border-zinc-800/50 font-medium">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

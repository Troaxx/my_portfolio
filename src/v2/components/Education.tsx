import React from 'react';
import { GraduationCap } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { PresentBadge } from './PresentBadge';

export const Education: React.FC = () => {
  const educationList = [
    {
      degree: 'Diploma in Information Technology',
      school: 'Temasek Polytechnic',
      duration: '2024 – Present',
      status: 'Current',
      activities: [
        'President, IT Student Interest Group',
        'ExCo, Girls-in-Tech'
      ]
    },
    {
      degree: 'Higher NITEC in Financial Services',
      school: 'ITE (College Central)',
      duration: '2022 – 2024',
      status: 'Graduated',
      activities: [
        'Student Council Member',
        'Assistant Vice-President, Investment Club'
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between border-b border-zinc-800/50 pb-4 h-[38px]">
        <div>
          <h2 className="text-sm font-semibold tracking-widest text-zinc-100 uppercase">Education</h2>
          <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Academic Background</p>
        </div>
      </div>

      <div className="space-y-10 pl-2">
        {educationList.map((edu, idx) => (
          <div key={idx} className="relative border-l border-zinc-800/60 pl-8 pb-2">
            <span className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-zinc-900 border-2 border-zinc-700" />
            <div className="flex flex-col gap-1 mb-4">
              <h3 className="text-base font-semibold text-zinc-200 flex items-center flex-wrap gap-2">
                {edu.degree}
                {edu.status === 'Current' ? (
                  <PresentBadge className="ml-1" />
                ) : (
                  <Badge variant="outline" className="text-[9px] uppercase tracking-wider border-zinc-700 text-zinc-400 bg-zinc-900 ml-1">
                    {edu.status}
                  </Badge>
                )}
              </h3>
              <span className="text-sm text-zinc-400">{edu.school}</span>
              <span className="text-xs text-zinc-500">{edu.duration}</span>
            </div>
            
            {edu.activities.length > 0 && (
              <div className="space-y-3 mt-4">
                <div className="flex flex-col gap-2">
                  <h4 className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider flex items-center gap-2 pt-1">
                    <GraduationCap className="w-3.5 h-3.5 text-zinc-500" />
                    Co-curricular Activities
                  </h4>
                  <ul className="mt-1 space-y-1">
                    {edu.activities.map((act, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2 text-[11px] text-zinc-400">
                        <span className="mt-[5px] w-1 h-1 rounded-full bg-zinc-500 shrink-0" />
                        {act}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

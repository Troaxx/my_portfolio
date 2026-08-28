import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { ExternalLink, BookMarked, FolderGit2 } from 'lucide-react';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Card } from "@/components/ui/card";
import { ThinScrollbar } from './ThinScrollbar';

interface Project {
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  type: string;
}

const projects: Project[] = [
    {
    title: 'Sonar',
    description: 'Built a Discord Bot that reads Reddit stories in voice chat. Currently reaching over 7k+ users.',
    tech: ['Discord.js', 'TypeScript', 'Next.js'],
    liveDemoUrl: 'https://sonar-landing-page.onrender.com/',
    type: 'Product',
  },
  {
    title: 'OCBC Ignite Challenge 2025',
    description: 'Category Winner: Pitched meaningful dashboard insights to reduce manual testing overhead. Custom Playwright cross-browser automation. Unable to show a demo due to company confidentiality.',
    tech: ['Playwright', 'Jenkins', 'React'],
    type: 'Hackathon',
  },
  {
    title: 'AURA - Wealth Management',
    description: 'A comprehensive wealth management platform serving High Net Worth Individuals (HNWIs) with an AI chatbot companion, jargon translator, life map coach and legacy planner.',
    tech: ['TypeScript', 'React Native', 'AI'],
    githubUrl: 'https://github.com/Troaxx/aura',
    liveDemoUrl: 'https://aura-teamtweaking.netlify.app/',
    type: 'Hackathon',
  },
  {
    title: 'Hello Japan - KOSEN Camp',
    description: 'A mobile-first web application addressing Japan overtourism through smart technology and dynamic pricing.',
    tech: ['TypeScript', 'React'],
    githubUrl: 'https://github.com/Troaxx/KOSEN-Global-Camp-A3',
    liveDemoUrl: 'https://kosena3.netlify.app/',
    type: 'Hackathon',
  },
  {
    title: 'Synapse - AI Peer Tutoring',
    description: 'AI-powered platform connecting students for personalized peer tutoring sessions at Temasek Polytechnic.',
    tech: ['React', 'Node.js', 'MongoDB', 'Gemini AI'],
    githubUrl: 'https://github.com/Troaxx/synapse',
    type: 'Personal',
  },
];

const techColors: Record<string, string> = {
  'TypeScript': '#3178c6',
  'React': '#61dafb',
  'React Native': '#61dafb',
  'Node.js': '#68a063',
  'Python': '#3572A5',
  'Playwright': '#2e8b57',
  'Jenkins': '#d33833',
};

export const Projects: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between border-b border-zinc-800/50 pb-4 h-[38px]">
        <div>
          <h2 className="text-sm font-semibold tracking-widest text-zinc-100 uppercase">Projects</h2>
          <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Featured Work</p>
        </div>
      </div>
      
      <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-lg p-6">
        <div className="flex items-center gap-2 mb-6 text-zinc-100">
          <GitHubIcon fontSize="small" />
          <span className="font-semibold uppercase tracking-widest text-sm">GitHub</span>
        </div>
        <ThinScrollbar direction="x" className="pb-2 flex justify-center">
          <GitHubCalendar 
            username="Troaxx" 
            colorScheme="dark"
            blockSize={14}
            blockMargin={5}
            fontSize={14}
            theme={{
              dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']
            }}
          />
        </ThinScrollbar>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, idx) => (
          <Card key={idx} className="bg-zinc-900/30 border-zinc-800/50 hover:bg-zinc-900/60 hover:border-zinc-700/50 transition-all duration-300 p-5 flex flex-col justify-between group rounded-lg">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                {project.githubUrl || project.liveDemoUrl ? (
                  <a 
                    href={project.githubUrl || project.liveDemoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 group-hover:text-blue-400 transition-colors"
                  >
                    <BookMarked className="w-4 h-4 text-zinc-500 group-hover:text-blue-400 transition-colors" />
                    <h3 className="text-base font-semibold text-blue-400">{project.title}</h3>
                  </a>
                ) : (
                  <div className="flex items-center gap-2">
                    <BookMarked className="w-4 h-4 text-zinc-500" />
                    <h3 className="text-base font-semibold text-zinc-300">{project.title}</h3>
                  </div>
                )}
                <div className="flex gap-3 text-zinc-500">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors pt-1">
                      <GitHubIcon fontSize="small" />
                    </a>
                  )}
                  {project.liveDemoUrl && (
                    <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors pt-1">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
              
              <p className="text-sm text-zinc-400 leading-relaxed font-light line-clamp-3">
                {project.description}
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 mt-6 text-xs text-zinc-500 font-medium tracking-wide">
              {project.tech.map((t, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: techColors[t] || '#888' }} />
                  <span>{t}</span>
                </div>
              ))}
              <div className="flex items-center gap-1.5 ml-auto text-zinc-600">
                <FolderGit2 className="w-3.5 h-3.5" />
                <span>{project.type}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

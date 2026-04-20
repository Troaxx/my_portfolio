import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

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
    title: 'OCBC Ignite Challenge 2025',
    description: 'Category Winner: Pitched meaningful dashboard insights to reduce manual testing overhead. Custom Playwright cross-browser automation.',
    tech: ['Playwright', 'Jenkins', 'React'],
    type: 'Hackathon',
  },
  {
    title: 'AURA - Wealth Management',
    description: 'A comprehensive wealth management platform serving HNWIs with an AI chatbot companion and legacy planner.',
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
  {
    title: 'DevOps Pipeline',
    description: 'End-to-end CI/CD demonstration using Jenkins, Docker, Kubernetes, and automated testing.',
    tech: ['Jenkins', 'Docker', 'K8s'],
    githubUrl: 'https://github.com/Troaxx/devops',
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
    <section className="v2-section">
      <h2 className="v2-section-title">Projects</h2>
      
      <div className="v2-projects-grid">
        {projects.map((project, idx) => (
          <div key={idx} className="v2-project-card">
            <div className="v2-project-header">
              <div className="v2-project-title">
                {project.title}
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)' }}>
                    <GitHubIcon fontSize="small" />
                  </a>
                )}
                {project.liveDemoUrl && (
                  <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)' }}>
                    <OpenInNewIcon fontSize="small" />
                  </a>
                )}
              </div>
            </div>
            
            <p className="v2-project-desc">{project.description}</p>
            
            <div className="v2-project-footer">
              {project.tech.map((t, i) => (
                <span key={i} style={{ display: 'flex', alignItems: 'center' }}>
                  <span className="v2-tech-dot" style={{ backgroundColor: techColors[t] || '#888' }}></span>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

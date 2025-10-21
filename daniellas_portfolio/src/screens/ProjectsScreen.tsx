import React, { useState } from 'react';
import { Button, Card } from '../components';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WebIcon from '@mui/icons-material/Web';
import GitHubIcon from '@mui/icons-material/GitHub';
import CloseIcon from '@mui/icons-material/Close';
import './ProjectsScreen.css';

interface ProjectsScreenProps {
  onNext: () => void;
  onBack: () => void;
}

interface Project {
  title: string;
  description: string;
  status: 'Completed' | 'In Progress' | 'Contributed to';
  type: 'Hackathon' | 'Personal' | 'Collaborative';
  icon: React.ReactNode;
  tech: string[];
  image?: string;
  learningTakeaways?: string[];
  githubUrl?: string;
  isFeatured?: boolean;
}

export const ProjectsScreen: React.FC<ProjectsScreenProps> = ({ onNext, onBack }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProjects: Project[] = [
    {
      title: 'AURA - Wealth Management App',
      description: 'Advise, Understand, Reflect, Act - Wealth that learns you, Advice that evolves with you. Built for PolyFinTechAPI100 2025 with Team Tweaking.',
      status: 'Completed',
      type: 'Hackathon',
      icon: <WebIcon />,
      tech: ['TypeScript', 'React', 'FinTech API'],
      image: '/project-images/aura.jpg',
      githubUrl: 'https://github.com/Troaxx/aura',
      isFeatured: true,
      learningTakeaways: [
        'Integrated financial APIs to provide personalized wealth management advice',
        'Learned to build adaptive systems that evolve with user behavior',
        'Gained experience in hackathon-style rapid prototyping and teamwork',
        'Explored FinTech domain and financial data visualization'
      ]
    },
    {
      title: 'KOSEN Global Camp A3',
      description: 'Prototype developed for KOSEN Global Camp Group A3, focusing on collaborative international education solutions.',
      status: 'Completed',
      type: 'Hackathon',
      icon: <WebIcon />,
      tech: ['TypeScript', 'React'],
      image: '/project-images/kosen.jpg',
      githubUrl: 'https://github.com/Troaxx/KOSEN-Global-Camp-A3',
      isFeatured: true,
      learningTakeaways: [
        'Collaborated with international team members across different time zones',
        'Developed cross-cultural communication skills in technical projects',
        'Built scalable prototypes under tight deadlines',
        'Enhanced TypeScript and React proficiency'
      ]
    },
  ];

  const completedProjects: Project[] = [
    {
      title: 'TP ITSIG Website',
      description: "Temasek Polytechnic Information Technology Student Interest Group (ITSIG)'s official website. Built using React & TypeScript",
      status: 'Contributed to',
      type: 'Collaborative',
      icon: <WebIcon />,
      tech: ['React', 'TypeScript', 'Web Design'],
      githubUrl: 'https://github.com/TP-ITSIG/tp-itsig.github.io'
    },
    {
      title: 'TWCC Game',
      description: 'Tampines West CC x IITSC x SIGs interactive game project',
      status: 'Completed',
      type: 'Collaborative',
      icon: <CheckCircleIcon />,
      tech: ['HTML', 'JavaScript', 'Python Flask', 'Raspberry Pi'],
      githubUrl: 'https://github.com/Troaxx/twcc'
    },
  ];

  return (
    <div className="projects-screen">
      <div className="projects-screen__content">
        <h1 className="projects-screen__title">Featured Projects</h1>
        <p className="projects-screen__subtitle">Things I've built</p>

        <div className="featured-projects-grid">
          {featuredProjects.map((project, index) => (
            <Card key={index} hover className="featured-project-card-compact" onClick={() => setSelectedProject(project)}>
              {project.image && (
                <div className="featured-project__image-compact">
                  <img src={project.image} alt={project.title} />
                </div>
              )}
              
              <div className="featured-project__content-compact">
                <div className="project-card__header">
                  <div className="project-card__icon">{project.icon}</div>
                </div>
                
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description-compact">{project.description}</p>
                
                <div className="project-card__tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-card__badges">
                  <span className={`type-badge type-badge--${project.type.toLowerCase()}`}>
                    {project.type}
                  </span>
                  <span className={`status-badge status-badge--${project.status === 'Completed' ? 'completed' : project.status === 'In Progress' ? 'progress' : 'contributed'}`}>
                    {project.status}
                  </span>
                </div>

                <div className="project-card__footer-compact">
                  <div onClick={(e) => e.stopPropagation()}>
                    <Button 
                      onClick={() => setSelectedProject(project)}
                      variant="quest"
                      size="small"
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {selectedProject && (
          <div className="project-modal" onClick={() => setSelectedProject(null)}>
            <div className="project-modal__content" onClick={(e) => e.stopPropagation()}>
              <button className="project-modal__close" onClick={() => setSelectedProject(null)}>
                <CloseIcon />
              </button>
              
              {selectedProject.image && (
                <div className="project-modal__image">
                  <img src={selectedProject.image} alt={selectedProject.title} />
                </div>
              )}

              <div className="project-modal__body">
                <div className="project-card__icon">{selectedProject.icon}</div>

                <h2 className="project-modal__title">{selectedProject.title}</h2>
                <p className="project-modal__description">{selectedProject.description}</p>

                <div className="project-card__tech">
                  {selectedProject.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-card__badges">
                  <span className={`type-badge type-badge--${selectedProject.type.toLowerCase()}`}>
                    {selectedProject.type}
                  </span>
                  <span className={`status-badge status-badge--${selectedProject.status === 'Completed' ? 'completed' : selectedProject.status === 'In Progress' ? 'progress' : 'contributed'}`}>
                    {selectedProject.status}
                  </span>
                </div>

                <div className="project-modal__blog">
                  <h3>Project Story</h3>
                  <p>Add your detailed blog post content here about the project journey, challenges, and outcomes...</p>
                </div>

                {selectedProject.learningTakeaways && selectedProject.learningTakeaways.length > 0 && (
                  <div className="project-learnings">
                    <h4 className="project-learnings__title">Key Learnings</h4>
                    <ul className="project-learnings__list">
                      {selectedProject.learningTakeaways.map((takeaway, i) => (
                        <li key={i}>{takeaway}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="project-modal__actions">
                  {selectedProject.githubUrl && (
                    <Button 
                      onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                      variant="secondary"
                      size="medium"
                    >
                      <GitHubIcon style={{ fontSize: '20px', marginRight: '8px' }} />
                      View Code
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="projects-section-divider">
          <h2 className="projects-section__title">My Completed Projects</h2>
        </div>

        <div className="projects-grid">
          {completedProjects.map((project, index) => (
            <Card key={index} hover className="project-card">
              <div className="project-card__header">
                <div className="project-card__icon">{project.icon}</div>
              </div>
              
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__description">{project.description}</p>
              
              <div className="project-card__tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="project-card__badges">
                <span className={`type-badge type-badge--${project.type.toLowerCase()}`}>
                  {project.type}
                </span>
                <span className={`status-badge status-badge--${project.status === 'Completed' ? 'completed' : project.status === 'In Progress' ? 'progress' : 'contributed'}`}>
                  {project.status}
                </span>
              </div>

              <div className="project-card__footer">
                {project.githubUrl && (
                  <Button 
                    onClick={() => window.open(project.githubUrl, '_blank')}
                    variant="secondary"
                    size="small"
                  >
                    <GitHubIcon style={{ fontSize: '18px', marginRight: '6px' }} />
                    View Code
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>

        <div className="github-section">
          <Button 
            onClick={() => window.open('https://github.com/Troaxx', '_blank')}
            variant="secondary"
            size="large"
          >
            <GitHubIcon style={{ marginRight: '8px' }} />
            View My GitHub
          </Button>
        </div>

        <div className="projects-screen__actions">
          <Button onClick={onBack} variant="secondary">
            Previous
          </Button>
          <Button onClick={onNext} variant="quest">
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};


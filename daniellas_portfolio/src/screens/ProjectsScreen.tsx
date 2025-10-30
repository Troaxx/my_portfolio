import React, { useState } from 'react';
import { Button, Card } from '../components';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WebIcon from '@mui/icons-material/Web';
import GitHubIcon from '@mui/icons-material/GitHub';
import CloseIcon from '@mui/icons-material/Close';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import './ProjectsScreen.css';

interface ProjectFeature {
  description: string | string[];
  image?: string;
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
  liveDemoUrl?: string;
  isFeatured?: boolean;
  story?: string;
  features?: ProjectFeature[];
}

export const ProjectsScreen: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProjects: Project[] = [
    {
      title: 'AURA - Wealth Management Platform',
      description: 'Built a comprehensive wealth management platform serving HNWIs. Created by Team Tweaking during the PolyFinTechAPI100 2025 Hackathon.',
      status: 'Completed',
      type: 'Hackathon',
      icon: <WebIcon />,
      tech: ['TypeScript', 'React Native', 'AI Integration'],
      image: '/aura-header.png',
      githubUrl: 'https://github.com/Troaxx/aura',
      isFeatured: true,
      story: `AURA is a standalone wealth management application for High Net Worth Individuals (HNWIs), developed for the PolyFinTechAPI100 2025 Hackathon (Smart Wealth category, sponsored by UBS).

It solves the problem of fragmented financial information across multiple institutions by using the Personal Online Datastore (POD) architecture to consolidate anonymized, aggregated financial data. This provides a holistic portfolio view via contextualized statements.`
,
      features: [
        {
          description: [
            '<strong>Financial Products Overview:</strong> An unbiased and holistic view of their financial solutions.',
            '<strong>Legacy Planner:</strong> Structure long-term estate and succession planning.',
            '<strong>Jargon Translator:</strong> Breaks down complex financial terminology into simple, accessible explanations.',
            '<strong>Life Map:</strong> Goal-based generational planning.',
            '<strong>Private Vault:</strong> A secure and encrypted overview of all assets held across multiple institutions.',
            '<strong>AI Chatbot Companion:</strong> An always-available assistant that interprets contextualised statements and UBS-specific insights.'
          ],
          image: '/aura-features.png'
        }
      ],
      learningTakeaways: [
        'Built a comprehensive wealth management platform serving HNWIs',
        'Proposed Personal Online Datastore (POD) integration for multi-bank data consolidation',
        'Developed AI-powered chatbot companion for financial insights',
        'Created features including Legacy Planner, Life Map, and Private Vault',
        'Collaborated with Team Tweaking under PolyFinTechAPI100 2025 hackathon'
      ]
    },
    {
      title: 'Hello Japan - KOSEN Global Camp',
      description: 'A mobile-first web application addressing Japan overtourism through smart technology solutions. ',
      status: 'Completed',
      type: 'Hackathon',
      icon: <WebIcon />,
      tech: ['TypeScript', 'React'],
      image: '/hello-japan.png',
      githubUrl: 'https://github.com/Troaxx/KOSEN-Global-Camp-A3',
      liveDemoUrl: 'https://kosena3.netlify.app/',
      isFeatured: true,
      story: `Hello Japan is a mobile-first web application developed for the KOSEN Global Camp to address Japan's overtourism challenges through smart technology solutions.

This project was created by Group A3 during the KOSEN Global Camp, where students from Kyushu Region KOSENs (Japan), Thailand (PCHSS Princess Chulabhorn Science High School Loei), and Singapore (Temasek Polytechnic) collaborated to solve overtourism and smart disaster prevention challenges in Japan.

<br/><br/>Key features include:<br/><br/>• Dynamic pricing based on crowd levels to distribute tourist flow and reduce overcrowding at popular destinations<br/><br/>• Japanese rules and etiquette guide covering cultural customs and tourist guidelines<br/><br/>• Voice command system that displays common phrases in English, Romaji (romanized pronunciation), and Japanese script to help tourists communicate basic needs`

,
      learningTakeaways: [
        'Collaborated internationally with team members from Japan (Kyushu KOSENs), Thailand, and Singapore',
        'Built features including dynamic pricing based on crowd levels to distribute tourist flow',
        'Developed Japanese etiquette guide and voice command system for tourist communication',
        'Created mobile-optimized web application deployed on Netlify within 3 days',
        'Enhanced cross-cultural collaboration and React/TypeScript skills'
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
        <div className="github-section">
          <Button 
            onClick={() => window.open('https://github.com/Troaxx', '_blank')}
            variant="secondary"
            size="large"
          >
            <GitHubIcon style={{ marginRight: '8px', verticalAlign: 'middle' }} />
            View My GitHub
          </Button>
        </div>

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
                  <h3 className="project-card__title">{project.title}</h3>
                </div>
                
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

                {selectedProject.story && (
                  <div className="project-modal__blog">
                    <h3>Project Story</h3>
                    <p dangerouslySetInnerHTML={{ __html: selectedProject.story }}></p>
                  </div>
                )}

                {selectedProject.features && selectedProject.features.length > 0 && (
                  <div className="project-features">
                    <h4 className="project-features__title">Key Features</h4>
                    <div className="project-features__container">
                      {selectedProject.features.map((feature, i) => (
                        <div key={i} className="project-feature">
                          {Array.isArray(feature.description) ? (
                            <ul className="project-feature__list">
                              {feature.description.map((item, j) => (
                                <li key={j} dangerouslySetInnerHTML={{ __html: item }}></li>
                              ))}
                            </ul>
                          ) : (
                            <p className="project-feature__description" dangerouslySetInnerHTML={{ __html: feature.description as string }}></p>
                          )}
                          {feature.image && (
                            <div className="project-feature__image">
                              <img src={feature.image}/>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedProject.learningTakeaways && selectedProject.learningTakeaways.length > 0 && (
                  <div className="project-learnings">
                    <h4 className="project-learnings__title">Key Takeaways</h4>
                    <div className="project-learnings__container">
                      <ul className="project-learnings__list">
                        {selectedProject.learningTakeaways.map((takeaway, i) => (
                          <li key={i}>{takeaway}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                <div className="project-modal__actions">
                  {selectedProject.githubUrl && (
                    <Button 
                      onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                      variant="secondary"
                      size="medium"
                    >
                      <GitHubIcon style={{ fontSize: '20px', marginRight: '8px', verticalAlign: 'middle' }} />
                      View Code
                    </Button>
                  )}
                  {selectedProject.liveDemoUrl && (
                    <Button 
                      onClick={() => window.open(selectedProject.liveDemoUrl, '_blank')}
                      variant="secondary"
                      size="medium"
                    >
                      <OpenInNewIcon style={{ fontSize: '20px', marginRight: '8px', verticalAlign: 'middle' }} />
                      View Live Demo
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
                <h3 className="project-card__title">{project.title}</h3>
              </div>
              
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
                    <GitHubIcon style={{ fontSize: '18px', marginRight: '6px', verticalAlign: 'middle' }} />
                    View Code
                  </Button>
                )}
                {project.liveDemoUrl && (
                  <Button 
                    onClick={() => window.open(project.liveDemoUrl, '_blank')}
                    variant="secondary"
                    size="small"
                  >
                    View Live Demo
                    <OpenInNewIcon style={{ fontSize: '18px', marginLeft: '6px', verticalAlign: 'middle' }} />
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>




      </div>
    </div>
  );
};


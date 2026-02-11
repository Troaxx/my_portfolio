import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import InstagramIcon from '@mui/icons-material/Instagram';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import CloseIcon from '@mui/icons-material/Close';
import './Projects.css';

// --- Data Types ---
interface ProjectFeature {
    description: string | string[];
    image?: string;
}

interface Project {
    title: string;
    description: string;
    status: 'Completed' | 'In Progress' | 'Contributed to';
    type: 'Hackathon' | 'Personal' | 'Collaborative';
    icon?: React.ReactNode;
    tech: string[];
    image?: string;
    learningTakeaways?: string[];
    githubUrl?: string;
    liveDemoUrl?: string;
    instagramUrl?: string;
    isFeatured?: boolean;
    story?: string;
    features?: ProjectFeature[];
    id?: string;
}

export const Projects: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const location = useLocation();

    // Helper to resolve paths correctly including base URL
    const resolvePath = (path: string) => {
        return path.startsWith('http') ? path : `${import.meta.env.BASE_URL}${path.startsWith('/') ? path.slice(1) : path}`;
    };

    const featuredProjects: Project[] = [
        {
            title: 'OCBC Ignite Challenge 2025',
            description: 'Pitched meaningful dashboard insights to reduce manual testing overhead.',
            status: 'Completed',
            type: 'Hackathon',
            icon: <WorkspacePremiumIcon />,
            tech: ['Playwright', 'Jenkins', 'Istanbul (nyc)', 'React', 'CI/CD'],
            image: resolvePath('/project-images/ocbc-ignite.png'),
            isFeatured: true,
            instagramUrl: 'https://www.instagram.com/p/DRtIpBTEnXz/',
            story: `<strong>Problem Statement: Enable cross platform browsers automation</strong><br/><br/>With the growing number of applications in the bank, the test cases will increase. How do we develop a scalable and user-friendly platform to run these test cases automatically without users’ manual intervention?<br/><br/><em>*Note: Images of this project are not posted intentionally to maintain confidentiality.</em>`,
            features: [
                {
                    description: [
                        '<strong>Playwright (E2E Testing):</strong> Utilized to automate interactions across Chromium, Firefox, and WebKit engines, ensuring consistent performance for all users.',
                        '<strong>Istanbul (nyc):</strong> Integrated to track code coverage, ensuring tests exercise the critical logic of the application.',
                        '<strong>CI/CD Pipeline (Jenkins):</strong> Fully automated pipeline that triggers builds on main branch pushes, executes Playwright tests, and updates the dashboard.',
                        '<strong>CI/CD Dashboard:</strong> Visualizes test execution status, duration trends, and failure rates by browser.',
                        '<strong>Email Notifications:</strong> Automated alerts sent to the recipient list whenever a build succeeds or fails, providing real-time feedback.',
                        '<strong>Comprehensive Test Suite:</strong> Robust testing covering Authentication, Client Management (CRUD), Transactions, and Fund Transfers.'
                    ]
                }
            ],
            learningTakeaways: [
                'Category Winner of OCBC Ignite Challenge 2025',
                'Developed automated cross-browser testing using Playwright',
                'Implemented Jenkins CI/CD pipeline for automated reporting',
                'Integrated Istanbul (nyc) for code coverage analysis'
            ]
        },
        {
            title: 'AURA - Wealth Management Platform',
            description: 'Built a comprehensive wealth management mobile prototype serving HNWIs. Created by Team Tweaking during the PolyFinTechAPI100 2025 Hackathon.',
            status: 'Completed',
            type: 'Hackathon',
            tech: ['TypeScript', 'React Native', 'AI Integration'],
            image: resolvePath('/aura-header.png'),
            githubUrl: 'https://github.com/Troaxx/aura',
            liveDemoUrl: 'https://aura-teamtweaking.netlify.app/',
            isFeatured: true,
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
                    image: resolvePath('/aura-features.png')
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
            tech: ['TypeScript', 'React'],
            image: resolvePath('/hello-japan.png'),
            githubUrl: 'https://github.com/Troaxx/KOSEN-Global-Camp-A3',
            liveDemoUrl: 'https://kosena3.netlify.app/',
            isFeatured: true,
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
            title: 'PolyFinTechAPI100 2024',
            description: 'Finalist in the 2024 iteration of the hackathon. Category Finalist - Team InsurTech.',
            status: 'Completed',
            type: 'Hackathon',
            tech: ['Hackathon', 'FinTech'],
        },
        {
            title: 'TP ITSIG Website',
            description: "Temasek Polytechnic Information Technology Student Interest Group (ITSIG)'s official website. Built using React & TypeScript",
            status: 'Contributed to',
            type: 'Collaborative',
            tech: ['React', 'TypeScript', 'Web Design'],
            id: 'itsig',
            githubUrl: 'https://github.com/TP-ITSIG/tp-itsig.github.io',
            liveDemoUrl: 'https://tp-itsig.github.io/#/',
        },
        {
            title: 'TWCC Game',
            description: 'Tampines West CC x IITSC x SIGs interactive game project',
            status: 'Completed',
            type: 'Collaborative',
            tech: ['HTML', 'JavaScript', 'Python Flask', 'Raspberry Pi'],
            id: 'twcc'
        }
    ];

    useEffect(() => {
        if (location.state && (location.state as any).openProject) {
            const title = (location.state as any).openProject;
            const found = [...featuredProjects, ...completedProjects].find(p => p.title === title);
            if (found) {
                setSelectedProject(found);
                window.history.replaceState({}, '');
            }
        }
    }, [location]);

    return (
        <div className="revamp-projects">
            <div className="projects-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="projects-header"
                >
                    <h1 className="page-title">Projects</h1>
                    <p className="page-subtitle">A showcase of my hacks, builds, and experiments.</p>
                </motion.div>

                {/* Featured Section */}
                <div className="section-title-bar">
                    <h2>Featured Work</h2>
                </div>

                <div className="featured-grid">
                    {featuredProjects.map((project, index) => (
                        <div
                            key={index}
                            className="project-card featured"
                            onClick={() => {
                                setSelectedProject(project);
                            }}
                        >
                            {project.image && (
                                <div className="project-image-container">
                                    <img src={project.image} alt={project.title} />
                                </div>
                            )}
                            <div className="project-content">
                                <div className="project-top">
                                    <div className="badges">
                                        <span className={`badge ${project.type.toLowerCase()}`}>{project.type}</span>
                                        <span className="badge status">{project.status}</span>
                                    </div>
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                </div>
                                <div className="project-tech">
                                    {project.tech.map((t, i) => <span key={i} className="tech-pill">{t}</span>)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tools & Technologies Section */}
                <div className="section-title-bar" style={{ marginTop: '5rem' }}>
                    <h2>Tools & Technologies</h2>
                </div>
                <div className="tech-grid">
                    <div className="tech-card">
                        <h3>Frontend Development</h3>
                        <p>Creating responsive, interactive user interfaces with modern frameworks for both mobile and web.</p>
                        <div className="tech-tags">
                            <span className="tech-tag">React / React Native</span>
                            <span className="tech-tag">Next.js</span>
                            <span className="tech-tag">TypeScript</span>
                            <span className="tech-tag">Vite</span>
                            <span className="tech-tag">Tailwind</span>
                            <span className="tech-tag">HTML5</span>
                            <span className="tech-tag">CSS3</span>
                            <span className="tech-tag">Dart</span>
                            <span className="tech-tag">Flutter</span>
                        </div>
                    </div>

                    <div className="tech-card">
                        <h3>Backend Development</h3>
                        <p>Building robust server-side logic and managing efficient databases.</p>
                        <div className="tech-tags">
                            <span className="tech-tag">Node.js</span>
                            <span className="tech-tag">Express</span>
                            <span className="tech-tag">MySQL / PostgreSQL</span>
                            <span className="tech-tag">Firebase</span>
                            <span className="tech-tag">MongoDB</span>
                        </div>
                    </div>

                    <div className="tech-card">
                        <h3>DevOps</h3>
                        <p>Ensuring code quality through automated testing and CI/CD pipelines.</p>
                        <div className="tech-tags">
                            <span className="tech-tag">Jenkins</span>
                            <span className="tech-tag">Playwright</span>
                            <span className="tech-tag">Jest</span>
                            <span className="tech-tag">Supertest</span>
                            <span className="tech-tag">Kubernetes</span>
                            <span className="tech-tag">Docker</span>
                            <span className="tech-tag">GitHub Actions</span>
                            <span className="tech-tag">Istanbul (NYC) / c8</span>
                        </div>
                    </div>
                </div>

                {/* Other Projects */}
                <div className="section-title-bar" style={{ marginTop: '5rem' }}>
                    <h2>More Projects</h2>
                </div>
                <div className="compact-grid">
                    {completedProjects.map((project, index) => (
                        <div
                            key={index}
                            className="project-card compact"
                            onClick={() => setSelectedProject(project)}
                        >
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            {project.githubUrl && (
                                <a href={project.githubUrl} target="_blank" className="link-btn">
                                    <GitHubIcon fontSize="small" /> View Code
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal - PORTAL STRATEGY */}
            {selectedProject && createPortal(
                <div
                    className="project-modal-overlay"
                    onClick={() => setSelectedProject(null)}
                // No inline styles needed as CSS handles it now, but we keep basic flex structure here if needed or let CSS handle it.
                // Actually, let's let CSS handle everything to be clean.
                >
                    <div
                        className="project-modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="project-modal-close"
                            onClick={() => setSelectedProject(null)}
                        >
                            <CloseIcon />
                        </button>

                        <h2 className="project-modal-title">{selectedProject.title}</h2>

                        <div className="badges mb-4" style={{ display: 'flex', gap: '8px', marginBottom: '1.5rem' }}>
                            <span className={`badge ${selectedProject.type.toLowerCase()}`}>{selectedProject.type}</span>
                            <span className="badge status">{selectedProject.status}</span>
                        </div>

                        {selectedProject.image && (
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                style={{ width: '100%', borderRadius: '12px', marginBottom: '1.5rem', objectFit: 'cover' }}
                            />
                        )}

                        <div className="project-modal-story">
                            <div dangerouslySetInnerHTML={{ __html: selectedProject.story || selectedProject.description }} />
                        </div>

                        {selectedProject.features && selectedProject.features.length > 0 && (
                            <div className="project-modal-features">
                                <h4>Key Features</h4>
                                <ul className="project-modal-list" style={{ paddingLeft: '1.5rem' }}>
                                    {selectedProject.features.map((f, i) => (
                                        <React.Fragment key={i}>
                                            {Array.isArray(f.description)
                                                ? f.description.map((d, j) => <li key={`${i}-${j}`} dangerouslySetInnerHTML={{ __html: d }} />)
                                                : <li dangerouslySetInnerHTML={{ __html: f.description as string }} />
                                            }
                                        </React.Fragment>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {selectedProject.learningTakeaways && (
                            <div className="project-modal-takeaways" style={{ marginBottom: '2.5rem', marginTop: '2rem' }}>
                                <h4>Key Takeaways</h4>
                                <ul style={{ paddingLeft: '1.5rem' }}>
                                    {selectedProject.learningTakeaways.map((t, i) => <li key={i} style={{ marginBottom: '0.5rem', lineHeight: 1.6 }}>{t}</li>)}
                                </ul>
                            </div>
                        )}

                        <div className="project-modal-actions">
                            {selectedProject.githubUrl && (
                                <a href={selectedProject.githubUrl} target="_blank" className="action-btn">
                                    <GitHubIcon style={{ marginRight: '0.5rem' }} /> Code
                                </a>
                            )}
                            {selectedProject.liveDemoUrl && (
                                <a href={selectedProject.liveDemoUrl} target="_blank" className="action-btn">
                                    <OpenInNewIcon style={{ marginRight: '0.5rem' }} /> Demo
                                </a>
                            )}
                            {selectedProject.instagramUrl && (
                                <a href={selectedProject.instagramUrl} target="_blank" className="action-btn">
                                    <InstagramIcon style={{ marginRight: '0.5rem' }} /> Post
                                </a>
                            )}
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
};

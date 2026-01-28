import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import InstagramIcon from '@mui/icons-material/Instagram';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import CloseIcon from '@mui/icons-material/Close';
import './Projects.css';

// --- Data Types (Ported) ---
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
}

interface SkillCategory {
    title: string;
    skills: { name: string; path: string }[];
}

export const Projects: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    // --- Ported Data ---
    const skillCategories: SkillCategory[] = [
        {
            title: 'Frontend Development',
            skills: [
                { name: 'React', path: 'project-images/react.png' },
                { name: 'TypeScript', path: 'project-images/typescript.png' },
                { name: 'HTML5', path: 'project-images/html5.png' },
                { name: 'CSS3', path: 'project-images/css3.png' },
                { name: 'Flutter', path: 'project-images/flutter.png' },
                { name: 'Vite', path: 'project-images/vite.png' },
            ]
        },
        {
            title: 'Backend & Database',
            skills: [
                { name: 'Node.js', path: 'project-images/nodejs.png' },
                { name: 'Python', path: 'project-images/python.png' },
                { name: 'Java', path: 'project-images/java.png' },
                { name: 'Dart', path: 'project-images/dart.png' },
                { name: 'SQL', path: 'project-images/mysql.png' },
                { name: 'Firebase', path: 'project-images/firebase.png' },
            ]
        },
        {
            title: 'CI/CD',
            skills: [
                { name: 'Jenkins', path: 'project-images/Jenkins.png' },
                { name: 'Jest', path: 'project-images/Jest.png' },
                { name: 'Playwright', path: 'project-images/Playwright.png' },
            ]
        }
    ];

    const featuredProjects: Project[] = [
        {
            title: 'OCBC Ignite Challenge 2025',
            description: 'Pitched meaningful dashboard insights to reduce manual testing overhead.',
            status: 'Completed',
            type: 'Hackathon',
            icon: <WorkspacePremiumIcon />,
            tech: ['Playwright', 'Jenkins', 'Istanbul (nyc)', 'React', 'CI/CD'],
            image: 'project-images/ocbc-ignite.png',
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
            description: 'Built a comprehensive wealth management platform serving HNWIs. Created by Team Tweaking during the PolyFinTechAPI100 2025 Hackathon.',
            status: 'Completed',
            type: 'Hackathon',
            tech: ['TypeScript', 'React Native', 'AI Integration'],
            image: 'aura-header.png',
            githubUrl: 'https://github.com/Troaxx/aura',
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
                    image: 'aura-features.png'
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
            image: 'hello-japan.png',
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
            title: 'TP ITSIG Website',
            description: "Temasek Polytechnic Information Technology Student Interest Group (ITSIG)'s official website. Built using React & TypeScript",
            status: 'Contributed to',
            type: 'Collaborative',
            tech: ['React', 'TypeScript', 'Web Design'],
            githubUrl: 'https://github.com/TP-ITSIG/tp-itsig.github.io'
        },
        {
            title: 'TWCC Game',
            description: 'Tampines West CC x IITSC x SIGs interactive game project',
            status: 'Completed',
            type: 'Collaborative',
            tech: ['HTML', 'JavaScript', 'Python Flask', 'Raspberry Pi'],
            githubUrl: 'https://github.com/Troaxx/twcc'
        },
    ];

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
                        <motion.div
                            key={index}
                            className="glass-card project-card featured"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setSelectedProject(project)}
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
                        </motion.div>
                    ))}
                </div>

                {/* Other Projects */}
                <div className="section-title-bar" style={{ marginTop: '4rem' }}>
                    <h2>More Projects</h2>
                </div>
                <div className="compact-grid">
                    {completedProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="glass-card project-card compact"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                        >
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            {project.githubUrl && (
                                <a href={project.githubUrl} target="_blank" className="link-btn">
                                    <GitHubIcon fontSize="small" /> View Code
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Modal */}
                {selectedProject && (
                    <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
                        <motion.div
                            className="modal-content glass-card"
                            onClick={(e) => e.stopPropagation()}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                        >
                            <button className="modal-close" onClick={() => setSelectedProject(null)}>
                                <CloseIcon />
                            </button>

                            <h2 className="modal-title">{selectedProject.title}</h2>
                            <div className="badges mb-4">
                                <span className={`badge ${selectedProject.type.toLowerCase()}`}>{selectedProject.type}</span>
                            </div>

                            {selectedProject.story && (
                                <div className="modal-story" dangerouslySetInnerHTML={{ __html: selectedProject.story }} />
                            )}

                            {selectedProject.learningTakeaways && (
                                <div className="modal-takeaways">
                                    <h4>Key Takeaways</h4>
                                    <ul>
                                        {selectedProject.learningTakeaways.map((t, i) => <li key={i}>{t}</li>)}
                                    </ul>
                                </div>
                            )}

                            <div className="modal-actions">
                                {selectedProject.githubUrl && (
                                    <a href={selectedProject.githubUrl} target="_blank" className="action-btn">
                                        <GitHubIcon /> Code
                                    </a>
                                )}
                                {selectedProject.liveDemoUrl && (
                                    <a href={selectedProject.liveDemoUrl} target="_blank" className="action-btn">
                                        <OpenInNewIcon /> Demo
                                    </a>
                                )}
                            </div>

                        </motion.div>
                    </div>
                )}
            </div>
        </div>
    );
};

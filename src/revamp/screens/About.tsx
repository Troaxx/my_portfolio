import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TerminalIcon from '@mui/icons-material/Terminal';
import CodeIcon from '@mui/icons-material/Code';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WorkIcon from '@mui/icons-material/Work';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import './About.css';

interface Achievement {
    title: string;
    subtitle: string;
    description?: string;
}

interface WorkExperience {
    role: string;
    company: string;
    period: string;
    summary: React.ReactNode;
    highlights?: React.ReactNode[];
}

const workExperienceList: WorkExperience[] = [
    {
        role: 'Intern',
        company: 'Akira Taekwondo',
        period: 'Aug 2025 – Present',
        summary: <span>Currently working on the revamp of <a href="https://akiraxtkd.com" target="_blank" style={{ color: '#6495ed' }}>akiraxtkd.com</a></span>,
        highlights: []
    },
    {
        role: 'Lead Developer',
        company: 'Eventas Asia LLP',
        period: '2023 – Present',
        summary: <span>Created the current <a href="https://eventas.com.sg" target="_blank" style={{ color: '#6495ed' }}>eventas.com.sg</a></span>,
        highlights: [
            'Implemented CI/CD workflow.',
            'Assisted in the porting over from old to new website.',
            'Created digital solutions for events.',
            'Tech Stack: Next.js + TypeScript'
        ]
    },
    {
        role: 'Co-Founder, Lead Developer',
        company: 'Stealth AI Startup',
        period: 'Aug 2025 – Present',
        summary: 'Worked on implementation and testing of prototypes.',
        highlights: [
            'Led a team of 3 on product implementation, testing, and incremental improvement.',
            'Tech Stack: HTML + CSS + JavaScript'
        ]
    }
];

const achievementsList: Achievement[] = [
    {
        title: 'OCBC Ignite Challenge 2025',
        subtitle: 'Category Winner',
        description: 'Pitched meaningful dashboard insights to reduce manual testing overhead.',
    },
    {
        title: 'AURA - Wealth Management Platform',
        subtitle: 'Category Finalist - Team Tweaking',
        description: 'Built AURA - A comprehensive wealth management platform serving HNWIs. Created by Team Tweaking during the PolyFinTechAPI100 2025 Hackathon.',
    },
    {
        title: 'PolyFinTechAPI100 2024',
        subtitle: 'Category Finalist - Team InsurTech',
        description: 'Finalist in the 2024 iteration of the hackathon.',
    },
    {
        title: 'Hello Japan - KOSEN Global Camp',
        subtitle: 'Most Feasible Award',
        description: 'A mobile-first web application addressing Japan overtourism through smart technology.',
    }
];

export const About: React.FC = () => {
    return (
        <div className="revamp-about">
            <div className="about-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="about-header"
                >
                    <h1 className="page-title">About</h1>
                </motion.div>

                <div className="content-grid two-column">
                    {/* Main Bio Card */}
                    <motion.div
                        className="glass-card bio-card"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="card-header">
                            <div className="icon-box"><TerminalIcon /></div>
                            <h2>My Story</h2>
                        </div>
                        <p>
                            Hi! I'm Daniella, a student at <span className="accent">Temasek Polytechnic</span> passionate about
                            building meaningful web experiences. I love mastering technologies like React and TypeScript to turn
                            creative ideas into reality.
                        </p>
                        <p>
                            Outside of coding, I enjoy building Gundam models—a hobby that shares the same need for patience and precision
                            as software engineering.
                        </p>
                    </motion.div>

                    {/* Education Card */}
                    <motion.div
                        className="glass-card education-card"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                            <div className="profile-image-container" style={{
                                width: '150px',
                                height: '150px',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                border: '2px solid rgba(100, 149, 237, 0.3)',
                                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                            }}>
                                <img
                                    src={`${import.meta.env.BASE_URL}my-pic.jpg`}
                                    alt="Daniella"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                />
                            </div>
                        </div>

                        <div className="social-links-container" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <a href="https://www.linkedin.com/in/daniella-han" target="_blank" rel="noopener noreferrer" className="social-btn">
                                <LinkedInIcon />
                            </a>
                            <a href="https://github.com/Troaxx" target="_blank" rel="noopener noreferrer" className="social-btn">
                                <GitHubIcon />
                            </a>
                            <a href="mailto:daniellahan@live.com" className="social-btn">
                                <EmailIcon />
                            </a>
                        </div>
                        <div className="timeline-item inner-card">
                            <div className="timeline-header">
                                <h3>Diploma, Information Technology</h3>
                                <span className="timeline-date">Apr 2024 – Current</span>
                            </div>
                            <span className="timeline-school">Temasek Polytechnic</span>
                            <ul className="timeline-details-list">
                                <li>President, IT Student Interest Group</li>
                                <li>ExCo, Girls-in-Tech</li>
                            </ul>
                        </div>
                        <div className="timeline-item inner-card">
                            <div className="timeline-header">
                                <h3>Higher NITEC, Financial Services</h3>
                                <span className="timeline-date">Jan 2022 – May 2024</span>
                            </div>
                            <span className="timeline-school">ITE (College Central)</span>
                        </div>
                    </motion.div>
                </div>



                {/* Experience Section */}
                <motion.div
                    className="glass-card full-width"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="card-header">
                        <div className="icon-box"><WorkIcon /></div>
                        <h2>Work Experience</h2>
                    </div>
                    <div className="experience-grid">
                        {workExperienceList.map((exp, index) => (
                            <div
                                key={index}
                                className="experience-item inner-card"
                            >
                                <h3>{exp.role}</h3>
                                <h4>{exp.company}</h4>
                                <span className="date">{exp.period}</span>
                                <p>{typeof exp.summary === 'string' ? exp.summary : exp.summary}</p>
                                {exp.highlights && exp.highlights.length > 0 && (
                                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.2rem', marginTop: '0.5rem', color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>
                                        {exp.highlights.map((item, i) => (
                                            <li key={i} style={{ marginBottom: '0.3rem' }}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Featured Work Section */}
                <motion.div
                    className="glass-card full-width"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="card-header">
                        <div className="icon-box"><EmojiEventsIcon /></div>
                        <h2>Featured Work</h2>
                    </div>
                    <div className="achievements-grid">
                        {achievementsList.map((achievement, index) => (
                            <motion.div
                                key={index}
                                className="achievement-card inner-card"
                                whileHover={{ scale: 1.01 }}
                            >
                                <div className="achievement-content">
                                    <h3>{achievement.title}</h3>
                                    <p className="achievement-subtitle" style={{ color: '#6495ed', marginBottom: '0.5rem', fontSize: '0.9rem' }}>{achievement.subtitle}</p>
                                    <p className="achievement-desc">{achievement.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

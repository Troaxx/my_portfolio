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
    story?: string;
    features?: { description: string | string[]; image?: string }[];
    learningTakeaways?: string[];
    links?: { label: string; url: string; icon: 'github' | 'instagram' | 'demo' }[];
    image?: string;
    tags?: string[];
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
        summary: 'Steering the digital presence for Eventas with scalable delivery practices.',
        highlights: [
            <span>Created the current <a href="https://eventas.com.sg" target="_blank" style={{ color: '#6495ed' }}>eventas.com.sg</a></span>,
            'Implemented CI/CD workflow.',
            'Assisted in the porting over from old to new website.',
            'Created digital solutions for events.',
            'Tech Stack: React + Vite'
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
        image: 'ocbc-ignite.png',
        tags: ['HACKATHON', 'COMPLETED'],
        story: `<strong>Problem Statement: Enable cross platform browsers automation</strong><br/><br/>With the growing number of applications in the bank, the test cases will increase. How do we develop a scalable and user-friendly platform to run these test cases automatically without users’ manual intervention?<br/><br/><span style="font-size: 0.85em; font-style: italic; opacity: 0.7">*Note: Images of this project are not posted intentionally to maintain confidentiality.</span>`,
        features: [
            {
                description: [
                    '<strong>Playwright (E2E Testing):</strong> Utilized to automate interactions across Chromium, Firefox, and WebKit engines, ensuring consistent performance for all users.',
                    '<strong>Istanbul (nyc):</strong> Integrated to track code coverage, ensuring tests exercise the critical logic of the application.',
                    '<strong>CI/CD Pipeline (Jenkins):</strong> Fully automated pipeline that triggers builds on main branch pushes, executes Playwright tests, and updates the dashboard.',
                    '<strong>CI/CD Dashboard:</strong> Visualizes test execution status, duration trends, and failure rates by category.'
                ]
            }
        ],
        learningTakeaways: [
            'Category Winner of OCBC Ignite Challenge 2025',
            'Developed automated cross-browser testing using Playwright',
            'Implemented Jenkins CI/CD pipeline'
        ],
        // links: [{ label: 'View Post', url: 'https://www.instagram.com/p/DRtIpBTEnXz/', icon: 'instagram' }]
    },
    {
        title: 'AURA - Wealth Management Platform',
        subtitle: 'Category Finalist - Team Tweaking',
        description: 'Built AURA - A comprehensive wealth management platform serving HNWIs. Created by Team Tweaking during the PolyFinTechAPI100 2025 Hackathon.',
        image: 'aura-header.png', // Assuming this is valid based on previous list_dir, will check again if needed, but 'aura-header.png' existed.
        tags: ['HACKATHON', 'COMPLETED'],
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
        image: 'hello-japan.png',
        tags: ['HACKATHON', 'COMPLETED'],
    }
];

export const About: React.FC = () => {
    const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

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
                            <a href="https://www.linkedin.com/in/daniella-han-xue-en-8a3b5a265/" target="_blank" rel="noopener noreferrer" className="social-btn">
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

                {/* Tools & Technologies Section */}
                <motion.div
                    className="glass-card full-width"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                >
                    <div className="card-header">
                        <div className="icon-box"><CodeIcon /></div>
                        <h2>Tools & Technologies</h2>
                    </div>
                    <div className="tech-grid">
                        <div className="tech-card">
                            <h3>Frontend Development</h3>
                            <p>Creating responsive, interactive user interfaces with modern frameworks.</p>
                            <div className="tech-tags">
                                <span className="tech-tag">React</span>
                                <span className="tech-tag">TypeScript</span>
                                <span className="tech-tag">Vite</span>
                                <span className="tech-tag">Tailwind</span>
                                <span className="tech-tag">HTML5</span>
                                <span className="tech-tag">CSS3</span>
                            </div>
                        </div>

                        <div className="tech-card">
                            <h3>Backend & Database</h3>
                            <p>Building robust server-side logic and managing efficient databases.</p>
                            <div className="tech-tags">
                                <span className="tech-tag">Node.js</span>
                                <span className="tech-tag">Python</span>
                                <span className="tech-tag">Java</span>
                                <span className="tech-tag">SQL</span>
                                <span className="tech-tag">Firebase</span>
                            </div>
                        </div>

                        <div className="tech-card">
                            <h3>Mobile Development</h3>
                            <p>Developing cross-platform mobile applications.</p>
                            <div className="tech-tags">
                                <span className="tech-tag">Flutter</span>
                                <span className="tech-tag">Dart</span>
                            </div>
                        </div>

                        <div className="tech-card">
                            <h3>QA & DevOps</h3>
                            <p>Ensuring code quality through automated testing and CI/CD pipelines.</p>
                            <div className="tech-tags">
                                <span className="tech-tag">Jenkins</span>
                                <span className="tech-tag">Playwright</span>
                                <span className="tech-tag">Jest</span>
                                <span className="tech-tag">GitHub Actions</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

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
                                className="achievement-card inner-card clickable"
                                onClick={() => setSelectedAchievement(achievement)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {achievement.image && (
                                    <div className="achievement-image-container">
                                        <img src={`${import.meta.env.BASE_URL}project-images/${achievement.image}`} alt={achievement.title} className="achievement-image" />
                                        <div className="achievement-overlay"></div>
                                    </div>
                                )}
                                <div className="achievement-content">
                                    <div className="achievement-tags">
                                        {achievement.tags?.map((tag, i) => (
                                            <span key={i} className={`achievement-tag ${tag.toLowerCase()}`}>{tag}</span>
                                        ))}
                                    </div>
                                    <h3>{achievement.title}</h3>
                                    {/* <p className="achievement-subtitle">{achievement.subtitle}</p> */}
                                    <p className="achievement-desc">{achievement.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Achievement Modal */}
                <AnimatePresence>
                    {selectedAchievement && (
                        <div className="modal-overlay" onClick={() => setSelectedAchievement(null)}>
                            <motion.div
                                className="modal-content glass-card"
                                onClick={(e) => e.stopPropagation()}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                            >
                                <button className="modal-close" onClick={() => setSelectedAchievement(null)}>
                                    <CloseIcon />
                                </button>

                                <div className="modal-header-section">
                                    <div className="modal-icon-badge">
                                        <WorkspacePremiumIcon fontSize="large" style={{ color: '#FFD700' }} />
                                    </div>
                                    <h2 className="modal-title">{selectedAchievement.title}</h2>
                                    <p className="modal-subtitle-text">{selectedAchievement.subtitle}</p>
                                </div>

                                {selectedAchievement.story && (
                                    <div className="modal-story">
                                        <h3 style={{ marginBottom: '1rem', color: '#6495ed' }}>Project Story</h3>
                                        <div dangerouslySetInnerHTML={{ __html: selectedAchievement.story }} />
                                    </div>
                                )}

                                {selectedAchievement.features && selectedAchievement.features.length > 0 && (
                                    <div className="modal-features">
                                        <h3 style={{ marginBottom: '1rem', color: '#6495ed' }}>Key Features</h3>
                                        <ul className="modal-list">
                                            {selectedAchievement.features.map((f, i) => (
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

                                {selectedAchievement.learningTakeaways && (
                                    <div className="modal-takeaways">
                                        <h3 style={{ marginBottom: '1rem', color: '#6495ed' }}>Takeaways</h3>
                                        <ul className="modal-list">
                                            {selectedAchievement.learningTakeaways.map((t, i) => (
                                                <li key={i}>{t}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {selectedAchievement.links && (
                                    <div className="modal-actions">
                                        {selectedAchievement.links.map((link, i) => (
                                            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="action-btn">
                                                {link.icon === 'github' && <GitHubIcon style={{ fontSize: 20 }} />}
                                                {link.icon === 'instagram' && <InstagramIcon style={{ fontSize: 20 }} />}
                                                <span>{link.label}</span>
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

            </div>
        </div>
    );
};

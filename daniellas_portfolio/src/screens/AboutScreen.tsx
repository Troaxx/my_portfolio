import React from 'react';
import { Card } from '../components';
import BarChartIcon from '@mui/icons-material/BarChart';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StarIcon from '@mui/icons-material/Star';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import './AboutScreen.css';

export const AboutScreen: React.FC = () => {
  const journeySteps = [
    { label: 'Started coding', value: '2022 - First Minecraft Plugin' },
    { label: 'First project', value: '202 - Built my first React app' },
    { label: 'Current focus', value: '2024 - Mastering TypeScript and modern web development' },
    { label: 'Passion', value: 'Building production-ready applications' },
  ];

  const achievements = [
    {
      icon: <EmojiEventsIcon />,
      title: 'PolyFinTechAPI100 2025 - Category Finalist',
      description: 'Advise, Understand, Reflect, Act - Wealth that learns you, Advice that evolves with you. Built for PolyFinTechAPI100 2025 by Team Tweaking.',
      date: '2025'
    },
    {
      icon: <WorkspacePremiumIcon />,
      title: 'KOSEN Global Camp - Most Feasible Award',
      description: 'Prototype developed for KOSEN Global Camp Group A3, focusing on solving over-tourism issues in Japan.',
      date: '2024'
    },
    {
      icon: <StarIcon />,
      title: 'PolyFinTechAPI100 2024 - Category Finalist',
      description: 'Proposed innovative changes to TEE-UP application.',
      date: '2024'
    },
  ];

  return (
    <div className="about-screen">
      <div className="about-screen__content">
        <h1 className="about-screen__title">About Me</h1>

        <Card className="about-story">
          <h2 className="about-story__title">My Story</h2>
          <div className="about-story__content">
            <p>
              Hi! I'm Daniella, a student at Temasek Polytechnic diving deep into the world of 
              web development. My journey started with curiosity about how websites work, and it's 
              evolved into a genuine passion for building things that people can use and enjoy.
            </p>
            <p>
              I'm currently focused on mastering React and TypeScript, constantly learning through 
              hands-on projects and collaborations. Whether it's a hackathon prototype or contributing 
              to open-source projects, I love the challenge of turning ideas into working code.
            </p>
            <p>
              Outside of coding, I'm a huge fan of building Gundam models. There's something therapeutic 
              about following instructions precisely, just like debugging code. Both require patience, 
              attention to detail, and the satisfaction of seeing something come together piece by piece.
            </p>
            <p>
              <strong>Write your personal story here - what drives you, what you're passionate about, 
              your journey so far, and where you want to go. Make it conversational and authentic!</strong>
            </p>
          </div>
        </Card>

        <div className="about-screen__grid">

          <Card className="stats-card">
            <div className="stats-card__header">
              <BarChartIcon className="stats-card__icon" />
              <h3>My Journey</h3>
            </div>
            <div className="stats-list">
              {journeySteps.map((step, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-label">{step.label}</div>
                  <div className="stat-value">{step.value}</div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="info-card">
            <div className="info-card__header">
              <TrackChangesIcon className="info-card__icon" />
              <h3>Current Focus</h3>
            </div>
            <div className="current-focus-content">
              <p>Building innovative solutions and mastering new technologies</p>
              <p>Currently developing this portfolio website using React & TypeScript</p>
              <p>Exploring Next.js for server-side rendering and performance optimization</p>
              <p>Learning advanced React patterns and testing frameworks</p>
            </div>
          </Card>

          <Card className="info-card">
            <div className="info-card__header">
              <AutoAwesomeIcon className="info-card__icon" />
              <h3>Development Stack</h3>
            </div>
            <ul className="abilities-list">
              <li>Frontend: React/React Native, TypeScript, Flutter</li>
              <li>Backend: Node.js, Python, MySQL, MongoDB</li>
              <li>Tools: Git, Figma</li>
              <li>Learning: Next.js, Testing frameworks</li>
            </ul>
          </Card>
        </div>

        <div className="achievements-section">
          <h2 className="section-title">Achievements & Milestones</h2>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <Card key={index} hover className="achievement-card">
                <div className="achievement-card__icon">{achievement.icon}</div>
                <h3 className="achievement-card__title">{achievement.title}</h3>
                <p className="achievement-card__description">{achievement.description}</p>
                <span className="achievement-card__date">{achievement.date}</span>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


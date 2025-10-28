import React from 'react';
import { Card } from '../components';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StarIcon from '@mui/icons-material/Star';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import './AboutScreen.css';

export const AboutScreen: React.FC = () => {
  const educationHistory = [
    { 
      title: 'Diploma, Information Technology',
      school: 'Temasek Polytechnic',
      period: 'Apr 2024 – Current (Graduating in May 2027)',
      details: '• President, IT Student Interest Group AY25/26 \n• Executive Committee Member, Girls-in-Tech (Cross-Polytechnic) AY25/26'
    },
    { 
      title: 'Higher NITEC, Financial Services',
      school: 'ITE (College Central)',
      period: 'Jan 2022 – May 2024',
      details: '• Vice-President, Investment Club AY23/24\n• Certified Citi-SMU Trainer'
    },
    { 
      title: 'NITEC, Business Services',
      school: 'ITE (College Central)',
      period: 'Jan 2020 – May 2022',
      details: '• Director\'s list for ITE College Central from January 2021 – June 2021'
    },
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

        <div className="education-section">
          <h2 className="section-title">Education</h2>
          <div className="education-grid">
            {educationHistory.map((edu, index) => (
              <Card key={index} hover className="education-card">
                <h3 className="education-card__title">{edu.title}</h3>
                <p className="education-card__school">{edu.school}</p>
                <p className="education-card__period">{edu.period}</p>
                {edu.details && (
                  <p className="education-card__details">{edu.details}</p>
                )}
              </Card>
            ))}
          </div>
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


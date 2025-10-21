import React from 'react';
import { Button, Card, ProgressBar } from '../components';
import PersonIcon from '@mui/icons-material/Person';
import BarChartIcon from '@mui/icons-material/BarChart';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import './AboutScreen.css';

interface AboutScreenProps {
  onNext: () => void;
  onBack: () => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({ onNext, onBack }) => {
  const stats = [
    { label: 'Problem Solving', value: 95 },
    { label: 'Team Collaboration', value: 90 },
    { label: 'Creativity', value: 88 },
    { label: 'Adaptability', value: 92 },
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
          <Card className="about-card">
            <div className="about-card__header">
              <PersonIcon className="about-card__icon" />
              <h3>Quick Facts</h3>
            </div>
            <ul className="about-facts">
              <li>Based in Singapore</li>
              <li>Student at Temasek Polytechnic</li>
              <li>Learning React & TypeScript</li>
              <li>Gundam enthusiast</li>
              <li>Always up for a challenge</li>
            </ul>
          </Card>

          <Card className="stats-card">
            <div className="stats-card__header">
              <BarChartIcon className="stats-card__icon" />
              <h3>Core Strengths</h3>
            </div>
            <div className="stats-list">
              {stats.map((stat, index) => (
                <ProgressBar
                  key={index}
                  label={stat.label}
                  progress={stat.value}
                  animated
                />
              ))}
            </div>
          </Card>

          <Card className="info-card">
            <div className="info-card__header">
              <TrackChangesIcon className="info-card__icon" />
              <h3>Current Focus</h3>
            </div>
            <p>Building innovative solutions and mastering new technologies</p>
          </Card>

          <Card className="info-card">
            <div className="info-card__header">
              <AutoAwesomeIcon className="info-card__icon" />
              <h3>Core Competencies</h3>
            </div>
            <ul className="abilities-list">
              <li>Full-Stack Development</li>
              <li>UI/UX Design</li>
              <li>Problem Solving</li>
              <li>Quick Learning</li>
            </ul>
          </Card>
        </div>

        <div className="about-screen__actions">
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


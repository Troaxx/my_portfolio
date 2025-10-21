import React, { useState, useEffect } from 'react';
import { Button, Card } from '../components';
import StarIcon from '@mui/icons-material/Star';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import './HomeScreen.css';

export const HomeScreen: React.FC = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowText(true), 300);
  }, []);

  return (
    <div className="home-screen">
      <div className={`home-screen__content ${showText ? 'home-screen__content--visible' : ''}`}>
        <div className="home-screen__avatar">
          <div className="avatar-circle">D</div>
        </div>
        
        <h1 className="home-screen__title">Hi, I'm Daniella</h1>
        <p className="home-screen__intro">Student Developer · Gundam Builder · Problem Solver</p>
        
        <Card className="home-screen__card">
          <p className="home-screen__text">
            I'm a student at Temasek Polytechnic learning to build things with 
            React and TypeScript. When I'm not coding, you'll find me building gundams 
            and exploring new technologies.
          </p>
          <div className="home-screen__features">
            <div className="feature">
              <StarIcon className="feature__icon" />
              <span className="feature__text">My Skills</span>
            </div>
            <div className="feature">
              <EmojiEventsIcon className="feature__icon" />
              <span className="feature__text">Projects</span>
            </div>
            <div className="feature">
              <TrendingUpIcon className="feature__icon" />
              <span className="feature__text">Experience</span>
            </div>
          </div>
        </Card>

        <Button onClick={() => {
          const element = document.getElementById('about');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }} variant="quest" size="large">
          Explore My Work
        </Button>
      </div>
    </div>
  );
};


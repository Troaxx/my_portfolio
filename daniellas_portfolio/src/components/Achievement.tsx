import React from 'react';
import './Achievement.css';

interface AchievementProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  unlocked: boolean;
}

export const Achievement: React.FC<AchievementProps> = ({ 
  icon, 
  title, 
  description, 
  unlocked 
}) => {
  return (
    <div className={`achievement ${unlocked ? 'achievement--unlocked' : 'achievement--locked'}`}>
      <div className="achievement__icon">{icon}</div>
      <div className="achievement__content">
        <h4 className="achievement__title">{title}</h4>
        <p className="achievement__description">{description}</p>
      </div>
    </div>
  );
};


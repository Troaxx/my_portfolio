import React from 'react';
import './LevelIndicator.css';

interface LevelIndicatorProps {
  currentLevel: number;
  totalLevels: number;
  xp: number;
  maxXp: number;
}

export const LevelIndicator: React.FC<LevelIndicatorProps> = ({ 
  currentLevel, 
  totalLevels, 
  xp, 
  maxXp 
}) => {
  const progress = (xp / maxXp) * 100;

  return (
    <div className="level-indicator">
      <div className="level-indicator__header">
        <span className="level-indicator__level">Level {currentLevel}/{totalLevels}</span>
        <span className="level-indicator__xp">{xp}/{maxXp} XP</span>
      </div>
      <div className="level-indicator__bar">
        <div 
          className="level-indicator__bar-fill" 
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};


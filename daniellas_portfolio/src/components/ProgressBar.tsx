import React from 'react';
import './ProgressBar.css';

interface ProgressBarProps {
  progress: number;
  label?: string;
  showPercentage?: boolean;
  animated?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ 
  progress, 
  label, 
  showPercentage = true,
  animated = true 
}) => {
  return (
    <div className="progress-bar-container">
      {label && (
        <div className="progress-bar-label">
          <span>{label}</span>
          {showPercentage && <span>{progress}%</span>}
        </div>
      )}
      <div className="progress-bar">
        <div 
          className={`progress-bar-fill ${animated ? 'progress-bar-fill--animated' : ''}`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};


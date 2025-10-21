import React from 'react';
import './Card.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = false,
  onClick 
}) => {
  return (
    <div 
      className={`game-card ${hover ? 'game-card--hover' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};


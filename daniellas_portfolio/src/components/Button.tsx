import React from 'react';
import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'quest';
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  disabled = false,
  size = 'medium'
}) => {
  return (
    <button
      className={`game-button game-button--${variant} game-button--${size}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="game-button__content">{children}</span>
    </button>
  );
};


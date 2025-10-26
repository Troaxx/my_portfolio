import React from 'react';
import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'quest';
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  disabled = false,
  size = 'medium',
  type = 'button',
  className = ''
}) => {
  return (
    <button
      className={`game-button game-button--${variant} game-button--${size} ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      <span className="game-button__content">{children}</span>
    </button>
  );
};


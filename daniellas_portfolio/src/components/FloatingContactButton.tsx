import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import './FloatingContactButton.css';

interface FloatingContactButtonProps {
  onClick: () => void;
}

export const FloatingContactButton: React.FC<FloatingContactButtonProps> = ({ onClick }) => {
  return (
    <button className="floating-contact-button" onClick={onClick}>
      <EmailIcon className="floating-contact-button__icon" />
      <span className="floating-contact-button__text">Contact Me</span>
    </button>
  );
};


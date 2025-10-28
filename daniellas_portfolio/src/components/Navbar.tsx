import React from 'react';
import './Navbar.css';

interface NavbarProps {
  onNavigate: (screen: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <ul className="navbar__menu">
          <li className="navbar__item">
            <button onClick={() => onNavigate('home')} className="navbar__link">
              Home
            </button>
          </li>
          <li className="navbar__item">
            <button onClick={() => onNavigate('about')} className="navbar__link">
              About
            </button>
          </li>
          <li className="navbar__item">
            <button onClick={() => onNavigate('projects')} className="navbar__link">
              Projects & Skills
            </button>
          </li>
          <li className="navbar__item">
            <button onClick={() => onNavigate('contact')} className="navbar__link">
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};


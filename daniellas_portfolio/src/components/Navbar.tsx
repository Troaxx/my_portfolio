import React from 'react';
import './Navbar.css';

interface NavbarProps {
  currentScreen: string;
  onNavigate: (screen: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentScreen, onNavigate }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar__content">
        <div className="navbar__brand" onClick={() => onNavigate('home')}>
          <span className="navbar__logo">D</span>
          <span className="navbar__name">Daniella</span>
        </div>
        
        <div className="navbar__links">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`navbar__link ${currentScreen === item.id ? 'navbar__link--active' : ''}`}
              onClick={() => onNavigate(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};


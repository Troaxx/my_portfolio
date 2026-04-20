import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="v2-navbar">
      <div className="v2-navbar-brand">
        <a href="/" style={{ fontWeight: 600, color: '#f5f5f0' }}>Daniella.</a>
      </div>
      <div className="v2-navbar-links">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#projects">Projects</a>
      </div>
    </nav>
  );
};

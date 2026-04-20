import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

export const Hero: React.FC = () => {
  return (
    <section className="v2-hero" id="about">
      <h1 className="v2-hero-title">Daniella Han | Software Engineer & IT Student</h1>
      <div className="v2-hero-subtitle">
        <p>I'm a student at Temasek Polytechnic passionate about building meaningful web experiences.</p>
        <p style={{ marginTop: '0.75rem' }}>I love mastering technologies like React and TypeScript to turn creative ideas into reality. Currently shaping digital solutions as Lead Developer at Eventas Asia LLP and interning at Akira Taekwondo.</p>
        <p style={{ marginTop: '0.75rem' }}>Outside of coding, I enjoy building Gundam models—a hobby that shares the same need for patience and precision as software engineering.</p>
      </div>

      <div className="v2-hero-stats" style={{ marginBottom: '2.5rem', display: 'flex', gap: '2rem' }}>
        <div className="v2-stat-item" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '0.25rem' }}>
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>Repositories</span>
          <span className="v2-stat-value" style={{ fontSize: '1.25rem' }}>21</span>
        </div>
        <div className="v2-stat-item" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '0.25rem' }}>
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>Followers</span>
          <span className="v2-stat-value" style={{ fontSize: '1.25rem' }}>8</span>
        </div>
        <div className="v2-stat-item" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '0.25rem' }}>
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>Following</span>
          <span className="v2-stat-value" style={{ fontSize: '1.25rem' }}>9</span>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <a href="https://github.com/Troaxx" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#f5f5f0' }}>
          <GitHubIcon fontSize="small" /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/daniella-han" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#f5f5f0' }}>
          <LinkedInIcon fontSize="small" /> LinkedIn
        </a>
        <span style={{ color: 'var(--border-color)' }}>|</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#f5f5f0' }}>
          <AutoAwesomeIcon fontSize="small" style={{ color: '#6495ed' }} /> Next gen builder
        </div>
      </div>
    </section>
  );
};

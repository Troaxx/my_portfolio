import React, { useState } from 'react';
import BusinessIcon from '@mui/icons-material/Business';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';

export const Experience: React.FC = () => {
  const [view, setView] = useState<'Detailed' | 'Compact'>('Detailed');

  return (
    <section className="v2-section">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
        <div>
          <h2 className="v2-section-title" style={{ marginBottom: '0.5rem', fontSize: '1.5rem', letterSpacing: '0.2em' }}>EXPERIENCE</h2>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            PROFESSIONAL JOURNEY
          </div>
        </div>
        
        <div className="v2-toggle-group">
          <button 
            className={`v2-toggle-btn ${view === 'Detailed' ? 'active' : ''}`}
            onClick={() => setView('Detailed')}
          >
            Detailed
          </button>
          <button 
            className={`v2-toggle-btn ${view === 'Compact' ? 'active' : ''}`}
            onClick={() => setView('Compact')}
          >
            Compact
          </button>
        </div>
      </div>

      <div className="v2-timeline-container">
        
        {/* Item 1 */}
        <div className="v2-timeline-group">
          <div className="v2-timeline-group-header">
            <div className="v2-timeline-year">2023</div>
            <div className="v2-timeline-logo">
              <BusinessIcon fontSize="small" />
            </div>
            <div className="v2-timeline-company-name">Eventas Asia LLP</div>
          </div>
          <div className="v2-timeline-company-meta">Singapore • 2 yrs</div>

          <div className="v2-timeline-role-block">
            <div className="v2-timeline-role-header">
              <div className="v2-timeline-role-title">
                <CodeIcon fontSize="small" style={{ color: 'var(--text-muted)', marginRight: '0.5rem' }} />
                Lead Developer
              </div>
              <div className="v2-timeline-role-date">2023 – Present</div>
            </div>
            
            {view === 'Detailed' && (
              <div className="v2-timeline-role-desc">
                Created the current eventas.com.sg website and digital solutions for events. 
                Assisted in porting the old infrastructure to a modern architecture and implemented CI/CD workflows.
                
                <div className="v2-timeline-tags">
                  <span className="v2-timeline-tag">Next.js</span>
                  <span className="v2-timeline-tag">TypeScript</span>
                  <span className="v2-timeline-tag">CI/CD</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Item 2 */}
        <div className="v2-timeline-group">
          <div className="v2-timeline-group-header">
            <div className="v2-timeline-year">2025</div>
            <div className="v2-timeline-logo">
              <BusinessIcon fontSize="small" />
            </div>
            <div className="v2-timeline-company-name">Akira Taekwondo</div>
          </div>
          <div className="v2-timeline-company-meta">Singapore • Current</div>

          <div className="v2-timeline-role-block">
            <div className="v2-timeline-role-header">
              <div className="v2-timeline-role-title">
                <WebIcon fontSize="small" style={{ color: 'var(--text-muted)', marginRight: '0.5rem' }} />
                Web Developer Intern
              </div>
              <div className="v2-timeline-role-date">Aug 2025 – Present</div>
            </div>
            
            {view === 'Detailed' && (
              <div className="v2-timeline-role-desc">
                Currently working on the revamp of akiraxtkd.com, modernizing the web presence and user experience.
              </div>
            )}
          </div>
        </div>

        {/* Item 3 */}
        <div className="v2-timeline-group">
          <div className="v2-timeline-group-header">
            <div className="v2-timeline-year">2025</div>
            <div className="v2-timeline-logo">
              <BusinessIcon fontSize="small" />
            </div>
            <div className="v2-timeline-company-name">Stealth AI Startup</div>
          </div>
          <div className="v2-timeline-company-meta">Singapore • Current</div>

          <div className="v2-timeline-role-block">
            <div className="v2-timeline-role-header">
              <div className="v2-timeline-role-title">
                <CodeIcon fontSize="small" style={{ color: 'var(--text-muted)', marginRight: '0.5rem' }} />
                Co-Founder & Lead Developer
              </div>
              <div className="v2-timeline-role-date">Aug 2025 – Present</div>
            </div>
            
            {view === 'Detailed' && (
              <div className="v2-timeline-role-desc">
                Led a team of 3 on product implementation, testing, and incremental improvement of prototypes.
                
                <div className="v2-timeline-tags">
                  <span className="v2-timeline-tag">HTML</span>
                  <span className="v2-timeline-tag">CSS</span>
                  <span className="v2-timeline-tag">JavaScript</span>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import SchoolIcon from '@mui/icons-material/School';

export const Education: React.FC = () => {
  return (
    <section className="v2-section">
      <div style={{ marginBottom: '2rem' }}>
        <h2 className="v2-section-title" style={{ marginBottom: '0.5rem', fontSize: '1.5rem', letterSpacing: '0.2em' }}>EDUCATION</h2>
      </div>

      <div className="v2-timeline-container">
        
        {/* Item 1 */}
        <div className="v2-timeline-group">
          <div className="v2-timeline-group-header">
            <div className="v2-timeline-logo" style={{ left: '-1.45rem' }}>
              <SchoolIcon fontSize="small" />
            </div>
            <div className="v2-timeline-company-name" style={{ fontSize: '1.15rem' }}>Diploma in Information Technology <span className="v2-badge-current">CURRENT</span></div>
          </div>
          <div style={{ paddingLeft: '2rem', marginBottom: '0.5rem' }}>
             <div className="v2-timeline-company-name" style={{ fontWeight: 'normal', color: 'var(--text-color)' }}>Temasek Polytechnic</div>
             <div className="v2-timeline-company-meta" style={{ marginTop: '0.25rem' }}>2024 – Present • Current</div>
          </div>

          <div className="v2-timeline-role-block" style={{ marginTop: '1rem' }}>
            <div className="v2-timeline-role-desc" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ color: 'var(--text-muted)' }}>Co-curricular Activities:</div>
              <div className="v2-timeline-tags">
                <span className="v2-timeline-tag">President, IT Student Interest Group</span>
                <span className="v2-timeline-tag">ExCo, Girls-in-Tech</span>
              </div>
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="v2-timeline-group">
          <div className="v2-timeline-group-header">
            <div className="v2-timeline-logo" style={{ left: '-1.45rem' }}>
              <SchoolIcon fontSize="small" />
            </div>
            <div className="v2-timeline-company-name" style={{ fontSize: '1.15rem' }}>Higher NITEC in Financial Services</div>
          </div>
          <div style={{ paddingLeft: '2rem', marginBottom: '0.5rem' }}>
             <div className="v2-timeline-company-name" style={{ fontWeight: 'normal', color: 'var(--text-color)' }}>ITE (College Central)</div>
             <div className="v2-timeline-company-meta" style={{ marginTop: '0.25rem' }}>2022 – 2024 • Graduated</div>
          </div>
        </div>

      </div>
    </section>
  );
};

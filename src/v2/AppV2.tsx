import React from 'react';
import './index.css';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Projects } from './components/Projects';

export const AppV2: React.FC = () => {
  return (
    <div className="v2-app" style={{ backgroundColor: '#0d0d0d', minHeight: '100vh', color: '#f5f5f0' }}>
      <Layout>
        <Hero />
        <div className="v2-two-column-layout">
          <section id="experience" className="v2-column-left">
            <Experience />
          </section>
          <section id="education" className="v2-column-right">
            <Education />
          </section>
        </div>
        <section id="projects">
          <Projects />
        </section>
      </Layout>
    </div>
  );
};

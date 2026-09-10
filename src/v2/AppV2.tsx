import React from 'react';
import './index.css';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Connect } from './components/Connect';
import { TooltipProvider } from "@/components/ui/tooltip";

export const AppV2: React.FC = () => {
  return (
    <TooltipProvider delay={100}>
      <Layout>
        <Hero />
        <AboutMe />
        <Skills />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 pt-6">
          <section id="experience">
            <Experience />
          </section>
          <section id="education">
            <Education />
          </section>
        </div>
        <section id="projects" className="pt-16">
          <Projects />
        </section>
        <section id="services" className="pt-16">
          <Services />
        </section>
        <Connect />
      </Layout>
    </TooltipProvider>
  );
};

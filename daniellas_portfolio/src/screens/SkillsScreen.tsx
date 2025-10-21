import React, { useState } from 'react';
import { Card, TechMarquee } from '../components';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BuildIcon from '@mui/icons-material/Build';
import AppsIcon from '@mui/icons-material/Apps';
import './SkillsScreen.css';

interface Skill {
  name: string;
  category: string;
}

export const SkillsScreen: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const skills: Skill[] = [
    { name: 'React', category: 'frontend' },
    { name: 'TypeScript', category: 'frontend' },
    { name: 'JavaScript', category: 'frontend' },
    { name: 'HTML/CSS', category: 'frontend' },
    { name: 'Node.js', category: 'backend' },
    { name: 'Python', category: 'backend' },
    { name: 'SQL', category: 'backend' },
    { name: 'Git', category: 'tools' },
    { name: 'Figma', category: 'tools' },
    { name: 'Vite', category: 'tools' },
  ];

  const categories = [
    { id: 'all', name: 'All Skills', icon: <AppsIcon /> },
    { id: 'frontend', name: 'Frontend', icon: <CodeIcon /> },
    { id: 'backend', name: 'Backend', icon: <StorageIcon /> },
    { id: 'tools', name: 'Tools', icon: <BuildIcon /> },
  ];

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <div className="skills-screen">
      <div className="skills-screen__content">
        <h1 className="skills-screen__title">Skills & Technologies</h1>
        <p className="skills-screen__subtitle">What I work with</p>

        <TechMarquee />

        <div className="skills-categories">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-btn ${selectedCategory === category.id ? 'category-btn--active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <span className="category-btn__icon">{category.icon}</span>
              <span className="category-btn__text">{category.name}</span>
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <Card key={index} hover className="skill-card">
              <h3 className="skill-card__name">{skill.name}</h3>
              <p className="skill-card__label">Proficiency</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};


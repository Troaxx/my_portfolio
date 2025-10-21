import React from 'react';
import './TechMarquee.css';

interface TechIcon {
  name: string;
  path: string;
}

export const TechMarquee: React.FC = () => {
  const techIcons: TechIcon[] = [
    { name: 'React', path: '/project-images/react.png' },
    { name: 'TypeScript', path: '/project-images/typescript.png' },
    { name: 'JavaScript', path: '/project-images/javascript.png' },
    { name: 'HTML5', path: '/project-images/html5.png' },
    { name: 'CSS3', path: '/project-images/css3.png' },
    { name: 'Node.js', path: '/project-images/nodejs.png' },
    { name: 'Python', path: '/project-images/python.png' },
    { name: 'Java', path: '/project-images/java.png' },
    { name: 'SQL', path: '/project-images/mysql.png' },
    { name: 'Git', path: '/project-images/github.png' },
    { name: 'Figma', path: '/project-images/figma.png' },
    { name: 'Vite', path: '/project-images/vite.png' },
  ];

  return (
    <div className="tech-marquee">
      <div className="tech-marquee__track">
        {[...techIcons, ...techIcons].map((tech, index) => (
          <div key={index} className="tech-marquee__item">
            <img src={tech.path} alt={tech.name} />
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};


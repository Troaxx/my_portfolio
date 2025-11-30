import React from 'react';
import { Card } from '../components';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StarIcon from '@mui/icons-material/Star';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import ScienceIcon from '@mui/icons-material/Science';
import LaunchIcon from '@mui/icons-material/Launch';
import './AboutScreen.css';

export const AboutScreen: React.FC = () => {
  const educationHistory = [
    {
      title: 'Diploma, Information Technology',
      school: 'Temasek Polytechnic',
      period: 'Apr 2024 – Current (Graduating in May 2027)',
      details: '• President, IT Student Interest Group AY25/26 \n• Executive Committee Member, Girls-in-Tech (Cross-Polytechnic) AY25/26'
    },
    {
      title: 'Higher NITEC, Financial Services',
      school: 'ITE (College Central)',
      period: 'Jan 2022 – May 2024',
      details: '• Vice-President, Investment Club AY23/24\n• Certified Citi-SMU Trainer'
    },
    {
      title: 'NITEC, Business Services',
      school: 'ITE (College Central)',
      period: 'Jan 2020 – May 2022',
      details: '• Director\'s list for ITE College Central from January 2021 – June 2021'
    },
  ];

  type Achievement = {
    icon: React.ReactNode;
    title: string;
    description: string;
    date: string;
    link: string;
  };

  const achievements: Achievement[] = [
    {
      icon: <EmojiEventsIcon />,
      title: 'PolyFinTechAPI100 2025 - Category Finalist',
      description: 'Advise, Understand, Reflect, Act - Wealth that learns you, Advice that evolves with you. Built for PolyFinTechAPI100 2025 by Team Tweaking.',
      date: '2025',
      link: 'https://github.com/Troaxx/aura'
    },
    {
      icon: <WorkspacePremiumIcon />,
      title: 'KOSEN Global Camp - Most Feasible Award',
      description: 'Prototype developed for KOSEN Global Camp Group A3, focusing on solving over-tourism issues in Japan.',
      date: '2024',
      link: 'https://github.com/Troaxx/KOSEN-Global-Camp-A3'
    },
    {
      icon: <StarIcon />,
<<<<<<< HEAD
      title: 'OCBC Ignite Challenge 2025 (Category Winner)',
      description: 'Pitched meaningful dashboard insights to reduce manual testing overhead.',
      date: '2025'
=======
      title: 'PolyFinTechAPI100 2024 - Category Finalist',
      description: 'Proposed innovative changes to TEE-UP application.',
      date: '2024',
      link: 'https://github.com/Troaxx/aura'
>>>>>>> 116272f18b25b70a62b43bc2296736bcf4671348
    },
  ];

  type WorkExperienceItem = {
    icon: React.ReactNode;
    role: string;
    company: string;
    period: string;
    summary: React.ReactNode;
    highlights: React.ReactNode[];
  };

  const workExperience = [
    {
      icon: <SportsMartialArtsIcon />,
      role: 'Intern',
      company: 'Akira Taekwondo',
      period: 'August 2025 – Present',
      summary: (
        <>
          Currently working on the revamp of{' '}
          <a
            href="https://akiraxtkd.com/"
            target="_blank"
            rel="noreferrer"
            className="experience-card__link"
          >
            akiraxtkd.com
            <LaunchIcon fontSize="inherit" />
          </a>
        </>
      ),
      highlights: []
    },
    {
      icon: <EventAvailableIcon />,
      role: 'Lead Developer',
      company: 'Eventas Asia LLP',
      period: '2023 – Present',
      summary: 'Steering the digital presence for Eventas with scalable delivery practices.',
      highlights: [
        (
          <>
            Created the current{' '}
            <a
              href="https://eventas.com.sg/"
              target="_blank"
              rel="noreferrer"
              className="experience-card__link"
            >
              eventas.com.sg
              <LaunchIcon fontSize="inherit" />
            </a>
          </>
        ),
        'Implemented CI/CD workflow.',
        'Assisted in the porting over from old to new website.',
        'Created digital solutions for events.'
      ]
    },
    {
      icon: <ScienceIcon />,
      role: 'Lead Developer',
      company: 'Stealth AI Startup',
      period: 'August 2025 – Present',
      summary: 'Worked on implementation and testing of prototypes.',
      highlights: [
        'Led a team of 3 on product implementation, testing, and incremental improvement.'
      ]
    }
  ] satisfies WorkExperienceItem[];

  return (
    <div className="about-screen">
      <div className="about-screen__content">
        <h1 className="about-screen__title">About Me</h1>

        <Card className="about-story">
          <h2 className="about-story__title">My Story</h2>
          <div className="about-story__content">
            <p>
              Hi! I'm Daniella, a student at Temasek Polytechnic diving deep into the world of
              web development. My journey started with curiosity about how websites work, and it's
              evolved into a genuine passion for building things that people can use and enjoy.
            </p>
            <p>
              I'm currently focused on mastering React and TypeScript, constantly learning through
              hands-on projects and collaborations. Whether it's a hackathon prototype or contributing
              to open-source projects, I love the challenge of turning ideas into working code.
            </p>
            <p>
              Outside of coding, I'm a huge fan of building Gundam models. There's something therapeutic
              about following instructions precisely, just like debugging code. Both require patience,
              attention to detail, and the satisfaction of seeing something come together piece by piece.
            </p>
            <p>
              <strong>Write your personal story here - what drives you, what you're passionate about,
                your journey so far, and where you want to go. Make it conversational and authentic!</strong>
            </p>
          </div>
        </Card>

        <div className="education-section">
          <h2 className="section-title">Education</h2>
          <div className="education-grid">
            {educationHistory.map((edu, index) => (
              <Card key={index} hover className="education-card">
                <h3 className="education-card__title">{edu.title}</h3>
                <p className="education-card__school">{edu.school}</p>
                <p className="education-card__period">{edu.period}</p>
                {edu.details && (
                  <p className="education-card__details">{edu.details}</p>
                )}
              </Card>
            ))}
          </div>
        </div>

        <div className="experience-section">
          <h2 className="section-title">Work Experience</h2>
          <div className="experience-grid">
            {workExperience.map((experience, index) => (
              <Card key={index} hover className="experience-card">
                <div className="experience-card__header">
                  <div className="experience-card__icon">{experience.icon}</div>
                  <div>
                    <h3 className="experience-card__role">{experience.role}</h3>
                    <p className="experience-card__company">{experience.company}</p>
                    <span className="experience-card__period">{experience.period}</span>
                  </div>
                </div>
                <p className="experience-card__summary">{experience.summary}</p>
                {experience.highlights.length > 0 && (
                  <ul className="experience-card__highlights">
                    {experience.highlights.map((item, highlightIndex) => (
                      <li key={highlightIndex}>{item}</li>
                    ))}
                  </ul>
                )}
              </Card>
            ))}
          </div>
        </div>

        <div className="achievements-section">
          <h2 className="section-title">Achievements & Milestones</h2>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <a
                key={index}
                href={achievement.link}
                target="_blank"
                rel="noreferrer"
                className="achievement-card__link"
              >
                <Card hover className="achievement-card">
                  <div className="achievement-card__icon">{achievement.icon}</div>
                  <h3 className="achievement-card__title">{achievement.title}</h3>
                  <p className="achievement-card__description">{achievement.description}</p>
                  <span className="achievement-card__date">{achievement.date}</span>
                </Card>
              </a>
            ))}
          </div>
        </div>


      </div>
    </div>
  );
};


import React from 'react';
import { Card } from '../components';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import InsightsIcon from '@mui/icons-material/Insights';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import './ServicesScreen.css';

type Service = {
  icon: React.ReactNode;
  title: string;
  tag: string;
  description: string;
  highlights: string[];
};

const services: Service[] = [
  {
    icon: <RocketLaunchIcon />,
    title: 'Launch high-converting landing pages',
    tag: 'Web Launch',
    description: 'Polished marketing sites that stay on-brand, load fast, and guide visitors to take action.',
    highlights: [
      'Responsive React builds with tailored Home, About, Services, and Contact sections.',
      'SEO-ready meta setup, accessible components, and performance tuning baked in.',
      'Perfect for product launches, personal brands, and small business campaigns.'
    ]
  },
  {
    icon: <InsightsIcon />,
    title: 'Ship full-stack web platforms',
    tag: 'Full Stack Website',
    description: 'End-to-end web applications that connect your frontend experience with a secure backend.',
    highlights: [
      'React interfaces paired with Node.js/Express APIs and MongoDB or MySQL data layers.',
      'Role-based authentication, admin dashboards, and REST endpoints ready to extend.',
      'Deployment guidance across Vercel, Render, and GitHub Actions for steady releases.'
    ]
  },
  {
    icon: <PhoneIphoneIcon />,
    title: 'Prototype mobile products fast',
    tag: 'Mobile Application MVP',
    description: 'Flutter MVPs that help you validate ideas quickly without sacrificing polish.',
    highlights: [
      'Authentication flows, splash screens, and bottom navigation ready to customize.',
      'Firebase or REST integrations for real-time data, messaging, or bookings.',
      'Ideal for community apps, event tools, and early-stage startup pilots.'
    ]
  },
  {
    icon: <MenuBookIcon />,
    title: 'Document and educate with clarity',
    tag: 'Docs & Support',
    description: 'Interactive documentation hubs that keep your team and clients aligned.',
    highlights: [
      'React-driven Markdown publishing with search, sidebar navigation, and theme toggling.',
      'Responsive layouts that look great on any device or in client handoffs.',
      'Great for API docs, onboarding guides, and ongoing product knowledge bases.'
    ]
  }
];

export const ServicesScreen: React.FC = () => {
  return (
    <div className="services-screen">
      <div className="services-screen__content">
        <h1 className="services-screen__title">What can I do for you?</h1>
        <p className="services-screen__subtitle">
          Need a partner to design, build, and launch digital experiences? Here’s how I help teams ship with confidence.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <Card key={index} hover className="service-card">
              <div className="service-card__header">
                <div className="service-card__icon">{service.icon}</div>
                <div className="service-card__heading">
                  <span className="service-card__tag">{service.tag}</span>
                  <h3 className="service-card__title">{service.title}</h3>
                </div>
              </div>
              <p className="service-card__description">{service.description}</p>
              <div className="service-card__divider" />
              <ul className="service-card__list">
                {service.highlights.map((highlight, highlightIndex) => (
                  <li key={highlightIndex}>{highlight}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <p className="services-screen__cta">Don't see your ideal project here? Contact me and see what we can do.</p>
      </div>
    </div>
  );
};



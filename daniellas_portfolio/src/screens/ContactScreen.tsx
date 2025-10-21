import React, { useState } from 'react';
import { Button, Card } from '../components';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import PublicIcon from '@mui/icons-material/Public';
import './ContactScreen.css';

export const ContactScreen: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thanks for your message! This is a demo, so no actual email is sent.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { icon: <LinkedInIcon />, name: 'LinkedIn', url: '#' },
    { icon: <GitHubIcon />, name: 'GitHub', url: 'https://github.com/Troaxx' },
    { icon: <EmailIcon />, name: 'Email', url: 'mailto:iitroaxx@gmail.com' },
    { icon: <TwitterIcon />, name: 'Twitter', url: '#' },
  ];

  return (
    <div className="contact-screen">
      <div className="contact-screen__content">
        <h1 className="contact-screen__title">Let's Connect</h1>
        <p className="contact-screen__subtitle">Get in touch</p>

        <div className="contact-screen__grid">
          <Card className="contact-card">
            <h2 className="section-title">
              <EmailIcon className="section-icon" />
              Get In Touch
            </h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or just say hi!"
                />
              </div>
              <Button type="submit" variant="quest" size="large">
                Send Message
              </Button>
            </form>
          </Card>

          <Card className="social-card">
            <h2 className="section-title">
              <PublicIcon className="section-icon" />
              Connect Online
            </h2>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="social-link__icon">{link.icon}</span>
                  <span className="social-link__name">{link.name}</span>
                </a>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};


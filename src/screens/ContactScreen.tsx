import React, { useState, useRef } from 'react';
import { Button, Card } from '../components';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';
import emailjs from '@emailjs/browser';
import './ContactScreen.css';

export const ContactScreen: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    // Rate Limiting (Client-side)
    const LIMIT = 3;
    const TIME_WINDOW = 24 * 60 * 60 * 1000; // 24 hours
    const STORAGE_KEY = 'contact_form_limit';

    const checkRateLimit = () => {
      const storedData = localStorage.getItem(STORAGE_KEY);
      const now = Date.now();

      if (!storedData) {
        return { count: 0, firstTimestamp: now };
      }

      const { count, firstTimestamp } = JSON.parse(storedData);

      if (now - firstTimestamp > TIME_WINDOW) {
        // Reset if window passed
        return { count: 0, firstTimestamp: now };
      }

      return { count, firstTimestamp };
    };

    const { count, firstTimestamp } = checkRateLimit();

    if (count >= LIMIT) {
      alert(`You have reached the messages limit. Please try again tomorrow.`);
      return;
    }

    setIsSubmitting(true);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (form.current) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
        .then(
          () => {
            // Update rate limit on success
            localStorage.setItem(STORAGE_KEY, JSON.stringify({
              count: count + 1,
              firstTimestamp
            }));

            alert('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
            setIsSubmitting(false);
          },
          (error) => {
            console.error('FAILED...', error.text);
            alert('Failed to send message. Please try again later.');
            setIsSubmitting(false);
          },
        );
    }
  };

  const socialLinks = [
    { icon: <LinkedInIcon />, name: 'LinkedIn', url: 'https://www.linkedin.com/in/daniella-han/' },
    { icon: <GitHubIcon />, name: 'GitHub', url: 'https://github.com/Troaxx' },
    { icon: <EmailIcon />, name: 'Email', url: 'mailto:daniellahan@live.com' },
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
            <form
              ref={form}
              onSubmit={sendEmail}
              className="contact-form"
            >
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
              <Button
                type="submit"
                variant="quest"
                size="large"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Card>

          <Card className="social-card">
            <h2 className="section-title">
              <PublicIcon className="section-icon" />
              Socials
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

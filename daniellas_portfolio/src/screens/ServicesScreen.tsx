import React from 'react';
import { Card, Button } from '../components';
import HandymanIcon from '@mui/icons-material/Handyman';
import './ServicesScreen.css';

export const ServicesScreen: React.FC = () => {
    return (
        <div className="services-screen">
            <div className="services-screen__content services-screen__content--centered">
                <Card className="coming-soon-card">
                    <div className="service-card__icon coming-soon__icon">
                        <HandymanIcon fontSize="large" />
                    </div>
                    <h1 className="services-screen__title">Services</h1>
                    <p className="services-screen__subtitle">Something exciting is being built!</p>
                    
                    <div className="coming-soon__message">
                        <p>I'm currently curating a list of professional services to help bring your ideas to life.</p>
                        <p>Check back soon for updates.</p>
                    </div>

                    <div className="services-cta">
                        <p className="cta-text">Need something right now?</p>
                        <Button 
                            onClick={() => window.location.href = 'mailto:daniellahan@live.com'}
                            variant="primary"
                            size="large"
                        >
                            Contact Me Directly
                        </Button>
                    </div>
                </Card>
            </div>
        </div>
    );
};

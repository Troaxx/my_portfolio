import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './Navigation.css';

const navLinks = [
    { name: 'Home', path: '/v2' },
    { name: 'Projects', path: '/v2/projects' },
    { name: 'Blogs', path: '/v2/blogs' },
    { name: 'About', path: '/v2/about' },
    { name: 'Certificates', path: '/v2/certificates' },
    { name: 'Services', path: '/v2/services' },
];

export const Navigation: React.FC = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    return (
        <>
            <nav className={`navigation-container ${isMobile ? 'mobile' : 'desktop'}`}>
                {!isMobile ? (
                    <div className="nav-pill">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                end={link.path === '/v2'}
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? 'active' : ''}`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>
                ) : (
                    <button
                        className="hamburger-btn"
                        onClick={() => setMenuOpen(true)}
                        aria-label="Open Menu"
                    >
                        <MenuIcon fontSize="large" style={{ color: '#fff' }} />
                    </button>
                )}
            </nav>

            <AnimatePresence>
                {isMobile && menuOpen && (
                    <motion.div
                        className="mobile-menu-overlay"
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    >
                        <button
                            className="close-btn"
                            onClick={() => setMenuOpen(false)}
                            aria-label="Close Menu"
                        >
                            <CloseIcon fontSize="large" style={{ color: '#fff' }} />
                        </button>
                        <div className="mobile-links">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 + 0.2 }}
                                >
                                    <NavLink
                                        to={link.path}
                                        end={link.path === '/v2'}
                                        className={({ isActive }) =>
                                            `mobile-link ${isActive ? 'active' : ''}`
                                        }
                                    >
                                        {link.name}
                                    </NavLink>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

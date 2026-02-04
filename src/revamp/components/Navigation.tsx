import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './Navigation.css';

interface NavLinkItem {
    name: string;
    path: string;
    children?: { name: string; path: string }[];
}

const navLinks: NavLinkItem[] = [
    { name: 'Home', path: '/v2' },
    { name: 'Projects', path: '/v2/projects' },
    {
        name: 'About',
        path: '/v2/about',
        children: [
            { name: 'Services', path: '/v2/services' },
            { name: 'Blogs', path: '/v2/blogs' },
            { name: 'Certificates', path: '/v2/certificates' },
        ]
    },
];

export const Navigation: React.FC = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [menuOpen, setMenuOpen] = useState(false);
    const [desktopDropdownOpen, setDesktopDropdownOpen] = useState<string | null>(null);
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
    const location = useLocation();

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Close menus when route changes
    useEffect(() => {
        setMenuOpen(false);
        setDesktopDropdownOpen(null);
        setMobileDropdownOpen(null);
    }, [location]);

    const handleMouseEnter = (name: string) => {
        if (!isMobile) {
            setDesktopDropdownOpen(name);
        }
    };

    const handleMouseLeave = () => {
        if (!isMobile) {
            setDesktopDropdownOpen(null);
        }
    };

    const toggleMobileDropdown = (name: string) => {
        setMobileDropdownOpen(mobileDropdownOpen === name ? null : name);
    };

    return (
        <>
            <nav className={`navigation-container ${isMobile ? 'mobile' : 'desktop'}`}>
                {!isMobile ? (
                    <div className="nav-pill">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="nav-item-container"
                                onMouseEnter={() => link.children && handleMouseEnter(link.name)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <NavLink
                                    to={link.path}
                                    end={link.path === '/v2'}
                                    className={({ isActive }) =>
                                        `nav-link ${isActive ? 'active' : ''}`
                                    }
                                >
                                    {link.name}
                                    {link.children && <KeyboardArrowDownIcon fontSize="small" className={`dropdown-arrow ${desktopDropdownOpen === link.name ? 'open' : ''}`} />}
                                </NavLink>

                                {/* Desktop Dropdown */}
                                <AnimatePresence>
                                    {link.children && desktopDropdownOpen === link.name && (
                                        <motion.div
                                            className="desktop-dropdown"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {link.children.map((child) => (
                                                <NavLink
                                                    key={child.name}
                                                    to={child.path}
                                                    className={({ isActive }) =>
                                                        `dropdown-item ${isActive ? 'active' : ''}`
                                                    }
                                                >
                                                    {child.name}
                                                </NavLink>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
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
                                    className="mobile-item-container"
                                >
                                    <div className="mobile-link-header">
                                        <NavLink
                                            to={link.path}
                                            end={link.path === '/v2'}
                                            className={({ isActive }) =>
                                                `mobile-link ${isActive ? 'active' : ''}`
                                            }
                                            onClick={() => !link.children && setMenuOpen(false)}
                                        >
                                            {link.name}
                                        </NavLink>
                                        {link.children && (
                                            <button 
                                                className={`mobile-dropdown-toggle ${mobileDropdownOpen === link.name ? 'open' : ''}`}
                                                onClick={() => toggleMobileDropdown(link.name)}
                                            >
                                                <KeyboardArrowDownIcon fontSize="large" style={{ color: '#fff' }} />
                                            </button>
                                        )}
                                    </div>
                                    
                                    {/* Mobile Dropdown */}
                                    <AnimatePresence>
                                        {link.children && mobileDropdownOpen === link.name && (
                                            <motion.div
                                                className="mobile-dropdown"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                            >
                                                {link.children.map((child) => (
                                                    <NavLink
                                                        key={child.name}
                                                        to={child.path}
                                                        className={({ isActive }) =>
                                                            `mobile-link sub-link ${isActive ? 'active' : ''}`
                                                        }
                                                        onClick={() => setMenuOpen(false)}
                                                    >
                                                        {child.name}
                                                    </NavLink>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

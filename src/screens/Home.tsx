import React from 'react';
import { motion } from 'framer-motion';
import TerminalBio from '../components/TerminalBio';

import './Home.css';

export const Home: React.FC = () => {


    return (
        <div className="revamp-home">
            <div className="home-container">

                {/* Left Column: Terminal */}
                <motion.div
                    className="terminal-column"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <TerminalBio />
                </motion.div>

                {/* Right Column: Text & Intro */}
                <div className="intro-column">
                    <motion.h1
                        className="intro-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        Hi, I'm <span className="highlight-text">Daniella</span>.
                    </motion.h1>

                    <motion.p
                        className="intro-subtitle"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        Full Stack Developer with a passion for developing web experiences and improving user experience.
                    </motion.p>


                </div>

            </div>
        </div>
    );
};

import React from 'react';
import { Outlet } from 'react-router-dom';
import FaultyTerminal from './components/FaultyTerminal';
import { Navigation } from './components/Navigation';

const RevampLayout: React.FC = () => {
    return (
        <div className="revamp-app" style={{ fontFamily: '"JetBrains Mono", monospace', minHeight: '100vh', color: '#fff' }}>
            {/* Persistent Background */}
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 0 }}>
                <FaultyTerminal
                    scale={1.5}
                    gridMul={[2, 1]}
                    digitSize={1.2}
                    timeScale={0.5}
                    pause={false}
                    scanlineIntensity={0.5}
                    glitchAmount={1}
                    flickerAmount={1}
                    noiseAmp={1}
                    chromaticAberration={0}
                    dither={0}
                    curvature={0.1}
                    tint="#6495ed"
                    mouseReact={false}
                    mouseStrength={0.5}
                    pageLoadAnimation
                    brightness={0.6}
                />
            </div>



            {/* Navigation Layer */}
            <Navigation />

            {/* Subtle Blur Overlay */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backdropFilter: 'blur(3px)',
                zIndex: 0,
                pointerEvents: 'none'
            }} />

            {/* Page Content */}
            <main style={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>
                <Outlet />
            </main>
        </div>
    );
};

export default RevampLayout;

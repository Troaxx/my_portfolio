import React from 'react';

const Placeholder: React.FC<{ title: string }> = ({ title }) => (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        color: '#fff',
        fontFamily: '"JetBrains Mono", monospace'
    }}>
        <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>{title}</h1>
            <p style={{ opacity: 0.7 }}>Coming Soon...</p>
        </div>
    </div>
);

export const Services: React.FC = () => {
    return <Placeholder title="Services" />;
};

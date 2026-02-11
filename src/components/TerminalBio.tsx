import React, { useState, useEffect } from 'react';
import './TerminalBio.css';

const TerminalBio: React.FC = () => {
    const [terminalContent, setTerminalContent] = useState<string>('');

    useEffect(() => {
        const fullText = `$ whoami
> daniella
$ cat README.md
> # Daniella's Portfolio
> Full-stack Developer specialised in React & TypeScript
> Currently studying at <span class="temasek-red">Temasek</span> <span class="temasek-white">Polytechnic</span>
$ npm run build
> Built successfully in 2.3s
> Bundle size: 245KB
$ echo "Ready to work together?";
> Ready to work together?`;

        let currentIndex = 0;
        let lastTime = performance.now();
        let accumulator = 0;
        let currentDelay = 500; // Initial delay
        let rafId: number;
        let isComplete = false;

        const animate = (time: number) => {
            if (isComplete) return;

            const updateTime = time;
            const deltaTime = updateTime - lastTime;
            lastTime = updateTime;
            accumulator += deltaTime;

            let updated = false;

            // Process as many characters as the accumulated time allows
            while (accumulator >= currentDelay && currentIndex < fullText.length) {
                accumulator -= currentDelay;
                updated = true;

                const char = fullText[currentIndex];

                // Check for HTML tag
                if (char === '<') {
                    const tagEnd = fullText.indexOf('>', currentIndex);
                    if (tagEnd !== -1) {
                        currentIndex = tagEnd + 1;
                        currentDelay = 10; // Fast skip for tags
                    } else {
                        currentIndex++;
                        currentDelay = 40; // Fallback
                    }
                } else {
                    currentIndex++;

                    // Determine delay for *next* character based on *current* character
                    if (char === ' ') {
                        currentDelay = 20;
                    } else if (char === '\n') {
                        currentDelay = 150;
                    } else if (char === '>') {
                        currentDelay = 10;
                    } else {
                        currentDelay = 40; // Default typing speed
                    }
                }
            }

            if (updated) {
                setTerminalContent(fullText.substring(0, currentIndex));
            }

            if (currentIndex >= fullText.length) {
                isComplete = true;
            } else {
                rafId = requestAnimationFrame(animate);
            }
        };

        rafId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <div className="computer-screen">
            <div className="screen-header">
                <div className="screen-controls">
                    <div className="control-btn close"></div>
                    <div className="control-btn minimize"></div>
                    <div className="control-btn maximize"></div>
                </div>
                <div className="screen-title">Terminal - Portfolio</div>
            </div>

            <div className="terminal-content">
                <div className="terminal-lines">
                    <div className="terminal-text">
                        {terminalContent.split('\n').map((line, index) => (
                            <div key={index} className={`terminal-line ${line.startsWith('$') ? 'command-line' : 'output-line'}`}>
                                <span dangerouslySetInnerHTML={{ __html: line }} />
                            </div>
                        ))}
                        <span className="cursor">_</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TerminalBio;

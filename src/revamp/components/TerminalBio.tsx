import React, { useState, useEffect } from 'react';
import './TerminalBio.css';

const TerminalBio: React.FC = () => {
    const [terminalContent, setTerminalContent] = useState<string>('');

    useEffect(() => {
        let charIndex = 0;
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

        const typeNextChar = () => {
            if (charIndex < fullText.length) {
                setTerminalContent(fullText.substring(0, charIndex + 1));
                charIndex++;

                let delay = 40;
                const currentChar = fullText[charIndex - 1];

                if (currentChar === ' ') {
                    delay = 20;
                } else if (currentChar === '\n') {
                    delay = 150;
                } else if (currentChar === '<') {
                    const tagEnd = fullText.indexOf('>', charIndex);
                    if (tagEnd !== -1) {
                        charIndex = tagEnd;
                        setTerminalContent(fullText.substring(0, charIndex + 1));
                        charIndex++;
                    }
                    delay = 10;
                } else if (currentChar === '>') {
                    delay = 10;
                }

                setTimeout(typeNextChar, delay);
            }
        };

        setTimeout(typeNextChar, 500);
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

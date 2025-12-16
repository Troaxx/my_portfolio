import React, { useState, useEffect } from 'react';
import { Button } from '../components';
import DownloadIcon from '@mui/icons-material/Download';
import './HomeScreen.css';

export const HomeScreen: React.FC = () => {
  const [showText, setShowText] = useState(false);
  const [terminalContent, setTerminalContent] = useState<string>('');

  useEffect(() => {
    setTimeout(() => setShowText(true), 300);

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
> Ready to work together?`

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
    <div className="home-screen">
      <div className="home-screen__layout">
        <div className="home-screen__terminal">
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
        </div>

        <div className={`home-screen__content ${showText ? 'home-screen__content--visible' : ''}`}>
          <div className="home-screen__avatar">
            <div className="avatar-circle">
              <img src="my-pic.jpg" alt="Daniella" className="avatar-image" />
            </div>
          </div>

          <h1 className="home-screen__title">Hi, I'm Daniella!</h1>
          <p className="home-screen__intro">Student Developer</p>

          <div className="home-screen__actions">
            <Button
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/resume.pdf';
                link.download = 'Daniella_Resume.pdf';
                link.click();
              }}
              variant="quest"
              size="large"
              className="resume-download-btn"
            >
              <DownloadIcon style={{ fontSize: '20px', marginRight: '8px' }} />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};


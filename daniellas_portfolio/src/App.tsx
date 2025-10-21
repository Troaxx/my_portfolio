import { useState, useEffect } from 'react';
import { FloatingContactButton, Navbar } from './components';
import { 
  HomeScreen, 
  AboutScreen, 
  SkillsScreen, 
  ProjectsScreen, 
  ContactScreen 
} from './screens';
import './App.css';

type Screen = 'home' | 'about' | 'skills' | 'projects' | 'contact';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');

  const goToScreen = (screen: Screen) => {
    setCurrentScreen(screen);
    
    const element = document.getElementById(screen);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleScroll = () => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    const scrollPosition = window.scrollY + 200;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setCurrentScreen(section as Screen);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <Navbar currentScreen={currentScreen} onNavigate={goToScreen} />
      
      <FloatingContactButton onClick={() => goToScreen('contact')} />

      <div id="home">
        <HomeScreen onStart={() => goToScreen('about')} />
      </div>
      
      <div id="about">
        <AboutScreen 
          onNext={() => goToScreen('skills')} 
          onBack={() => goToScreen('home')} 
        />
      </div>
      
      <div id="skills">
        <SkillsScreen 
          onNext={() => goToScreen('projects')} 
          onBack={() => goToScreen('about')} 
        />
      </div>
      
      <div id="projects">
        <ProjectsScreen 
          onNext={() => goToScreen('contact')} 
          onBack={() => goToScreen('skills')} 
        />
      </div>
      
      <div id="contact">
        <ContactScreen 
          onBack={() => goToScreen('projects')}
        />
      </div>
    </div>
  );
}

export default App;

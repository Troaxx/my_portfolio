import { FloatingContactButton } from './components';
import { 
  HomeScreen, 
  AboutScreen, 
  SkillsScreen, 
  ProjectsScreen, 
  ContactScreen 
} from './screens';
import './App.css';

function App() {
  const goToScreen = (screen: string) => {
    const element = document.getElementById(screen);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="app">
      <FloatingContactButton onClick={() => goToScreen('contact')} />

      <div id="home">
        <HomeScreen />
      </div>
      
      <div id="about">
        <AboutScreen />
      </div>
      
      <div id="skills">
        <SkillsScreen />
      </div>
      
      <div id="projects">
        <ProjectsScreen />
      </div>
      
      <div id="contact">
        <ContactScreen />
      </div>
    </div>
  );
}

export default App;

import { useState } from 'react';
import { FloatingContactButton, Navbar } from './components';
import {
  HomeScreen,
  AboutScreen,
  ServicesScreen,
  ProjectsScreen,
  ContactScreen,
  CertificatesScreen
} from './screens';

import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const goToScreen = (screen: string) => {
    setCurrentPage(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutScreen />;
      case 'services':
        return <ServicesScreen />;
      case 'projects':
        return <ProjectsScreen />;
      case 'certificates':
        return <CertificatesScreen />;
      case 'contact':
        return <ContactScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="app">
      <Navbar onNavigate={goToScreen} />
      <FloatingContactButton onClick={() => goToScreen('contact')} />

      {renderCurrentPage()}
    </div>
  );
}

export default App;

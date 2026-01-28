import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Legacy Imports
import { FloatingContactButton, Navbar } from './components';
import {
  HomeScreen as LegacyHome,
  AboutScreen as LegacyAbout,
  ServicesScreen as LegacyServices,
  ProjectsScreen as LegacyProjects,
  ContactScreen as LegacyContact,
  CertificatesScreen as LegacyCertificates
} from './screens';
import './App.css';

// Revamp Imports
import RevampLayout from './revamp/RevampLayout';
import { Home as RevampHome } from './revamp/screens/Home';
import { About as RevampAbout } from './revamp/screens/About';
import { Projects } from './revamp/screens/Projects';
import { Services } from './revamp/screens/Services';
import { Certificates } from './revamp/screens/Certificates';
import { Blogs } from './revamp/screens/Placeholders';

// --- Legacy App Component ---
function LegacyApp() {
  const [currentPage, setCurrentPage] = useState('home');

  const goToScreen = (screen: string) => {
    setCurrentPage(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'about':
        return <LegacyAbout />;
      case 'services':
        return <LegacyServices />;
      case 'projects':
        return <LegacyProjects />;
      case 'certificates':
        return <LegacyCertificates />;
      case 'contact':
        return <LegacyContact />;
      default:
        return <LegacyHome />;
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

// --- Main Router App ---
function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        {/* Legacy Route */}
        <Route path="/" element={<LegacyApp />} />

        {/* Revamp Routes */}
        <Route path="/v2" element={<RevampLayout />}>
          <Route index element={<RevampHome />} />
          <Route path="about" element={<RevampAbout />} />
          <Route path="projects" element={<Projects />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="services" element={<Services />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

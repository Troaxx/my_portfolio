import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Revamp Imports
import RevampLayout from './RevampLayout';
import { Home } from './screens/Home';
import { About } from './screens/About';
import { Projects } from './screens/Projects';
import { Services } from './screens/Services';
import { Certificates } from './screens/Certificates';
import { Blogs } from './screens/Placeholders';
import { AppV2 } from './v2/AppV2';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/v2" element={<AppV2 />} />
        <Route path="/" element={<RevampLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
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

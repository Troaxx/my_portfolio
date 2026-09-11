import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppV2 } from './v2/AppV2';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/*" element={<AppV2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

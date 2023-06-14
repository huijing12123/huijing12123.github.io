
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Welcome from "./pages/Welcome/index";
import Resume from './pages/Resume';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>

  );
}

export default App;

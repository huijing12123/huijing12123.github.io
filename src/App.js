
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Resume from './pages/Resume';
import Loading from './pages/Loading';


function App() {



  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </Router>


  );
}

export default App;

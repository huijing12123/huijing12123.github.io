
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Resume from './pages/Resume';
import Loading from './pages/Loading';
import Background from './components/Background';


function App() {



  return (

    <Router>
      <Background />
      <div>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/loading" element={<Loading />} />
        </Routes>
      </div>

    </Router>


  );
}

export default App;

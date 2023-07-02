import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Resume from './pages/Resume';
import Loading from './pages/Loading';
import Background from './components/Background';


function App() {
  const isLoading = true; // 设置isLoading的值
  const selectedComponent = 'personality'; // 设置 selectedComponent 的值
  const handleComponentClick = (component) => {
    // 处理点击事件逻辑
    console.log('Clicked on component:', component);
  };
  return (
    <Router>
      <div style={{ width: '100%', height: '100%' }}>
        <Background />
        <div style={{ width: '100%', height: '100%' }}>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/resume"
              element={<Resume isLoading={isLoading}
                selectedComponent={selectedComponent}
                handleComponentClick={handleComponentClick} />} />
            <Route path="/loading" element={<Loading />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}





export default App;


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Resume from './pages/Resume';
import Loading from './pages/Loading';
import Background from './components/Background';

function App() {
  /** 
   * isLoading 被注解为 boolean 类型。
   * selectedComponent 被注解为 string 类型。
   * handleComponentClick 方法的参数 component 被注解为 string 类型。 
   * */
  const isLoading: boolean = true; // 设置 isLoading 的值
  const selectedComponent: string = 'personality'; // 设置 selectedComponent 的值

  const handleComponentClick = (component: string) => {
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
            <Route
              path="/resume"
              element={
                <Resume
                  isLoading={isLoading}
                  selectedComponent={selectedComponent}
                  handleComponentClick={handleComponentClick}
                />
              }
            />
            <Route path="/loading" element={<Loading />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

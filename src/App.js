import './App.css';
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import Slogan from './components/NavBar/Slogan/Slogan';
import Content from './components/NavBar/Content/Content';
function App() {
  // size màn hình 
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  });
  // Theo dÕi size có phải mobile hay desktop hay ko
  const [isMobile, setMobile] = useState(false)
  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
      
    };
    window.addEventListener('resize', handleSize)
    handleSize();
    return () => {
      window.removeEventListener('resize', handleSize)
    }
  }, [])

  // Responsive
  
  useEffect(() => {
   if(windowSize.width < 500) {
    setMobile(true);
   }
   else {
     setMobile(false);
   }
  },[windowSize])
  return (
    <div className="h-screen overflow-y-auto overflow-x-hidden px-4 py-8 bg-gradient-to-b dark:from-purple-900 dark:to-purple-700 from-white dark:text-white to-pink-500 
    font-sora text-black
    ">
      <NavBar isMobile={isMobile}/>
      <Slogan />
      <Content />
    </div>
  );
}

export default App;

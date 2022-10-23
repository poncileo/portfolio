import './App.css';
import LeftMenu from './components/LeftMenu';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import { useEffect, useState } from 'react';
import Snowfall from 'react-snowfall';

function App() {

  const [contentWidth, setContentWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if(contentWidth === 0) {
      setContentWidth(window.innerWidth)
    }

    function handleResize() {
      setContentWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)

    if (contentWidth <= 1024) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  },[contentWidth])

  return (
    <div className="App">
      <LeftMenu isMobile={isMobile} />
      <div className={isMobile ? 'containerMobile' : 'container'}>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/portfolio" element={<Portfolio/>} />
            <Route path="about" element={<About isMobile={isMobile} />} />
            <Route path="contact" element={<Contact isMobile={isMobile} />} />
        </Routes>
        <Snowfall color='white' />
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './pages/Navbar';
import Hero from './pages/Hero';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Certificates from './pages/Certificates';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100
    });
    document.documentElement.classList.add('dark');
  },[]); 

  useEffect(() => {
    AOS.refresh
  },[darkMode]);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark');
  }

  return (
    <div className={darkMode ? 'bg-linear-to-br from-gray-900 via-[#0d182e] to-gray-900 min-h-screen' : 'bg-linear-to-br from-gray-50 to-blue-50 min-h-screen'}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>      
      <Hero darkMode={darkMode}/>
      <About darkMode={darkMode}/>
      <Skills darkMode={darkMode}/>
      {/* <Projects darkMode={darkMode}/> */}
      <Contact darkMode={darkMode}/>
      <Footer darkMode={darkMode}/> 
      {/* <Certificates darkMode={darkMode}/> */}
    </div>
  )
}

export default App
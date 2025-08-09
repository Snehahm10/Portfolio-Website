// src/App.js
import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DarkModeToggle from './components/DarkModeToggle';
import ScrollToTopButton from './components/ScrollToTopButton';
import Education from './components/Education';


function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300 min-h-screen">
      <DarkModeToggle />
      <Home />
      <Navbar/>
      <About />
      <Skills />
      <Projects />
      <Education/>
      <Certifications />
      <Contact />
      <Footer />
      <ScrollToTopButton/>
   
    </div>
  );
}

export default App;

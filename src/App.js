import React from 'react';
import './App.css';
import 'tailwindcss/tailwind.css';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
function App() {
  return (
     <div>
      <Navbar />
      <Hero />
      <Projects />
      <Skills/>
      <Resume />
       <Contact />
    </div>
   
  );
}

export default App;

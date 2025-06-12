import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center shadow-md sticky top-0 z-50">
  <h1 className="text-xl font-bold tracking-wide">
    
    Tanuja Khandve Portfolio 
  </h1>
  <div className="space-x-6 text-sm font-medium">
    <a href="#projects" className="hover:text-indigo-300">Projects</a>
    <a href="#skills" className="hover:text-indigo-300">Tech Stack</a>
    <a href="#resume" className="hover:text-indigo-300">Resume</a>
    <a href="#contact" className="hover:text-indigo-300">Contact</a>
  </div>
</nav>

  );
}

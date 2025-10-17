import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaCode, FaCloud } from 'react-icons/fa';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section detection
      const sections = ['home', 'projects', 'skills', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', section: 'home' },
    { name: 'Projects', href: '#projects', section: 'projects' },
    { name: 'Skills', href: '#skills', section: 'skills' },
    { name: 'Resume', href: '#resume', section: 'resume' },
    { name: 'Contact', href: '#contact', section: 'contact' }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-slate-900/80 backdrop-blur-2xl shadow-2xl shadow-cyan-500/5 border-b border-cyan-500/10' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo with animation */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-cyan-500 to-blue-600 p-2 rounded-lg">
                  <FaCode className="text-white text-xl" />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Tanuja Khandve
                </h1>
                <p className="text-[10px] text-gray-400 font-medium tracking-wider flex items-center gap-1">
                  <FaCode className="text-[8px]" /> DEVELOPER <span className="text-cyan-400">×</span> <FaCloud className="text-[8px]" /> CLOUD
                </p>
              </div>
            </a>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-2 bg-slate-800/50 backdrop-blur-xl rounded-full px-2 py-2 border border-slate-700/50">
              {navLinks.map((link) => {
                const isActive = activeSection === (link.section || link.href.substring(1));
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'text-white'
                        : 'text-gray-400 hover:text-cyan-400'
                    }`}
                  >
                    {isActive && (
                      <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></span>
                    )}
                    <span className="relative z-10">{link.name}</span>
                    
                    {/* Hover effect */}
                    {!isActive && (
                      <span className="absolute inset-0 bg-cyan-500/10 rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                    )}
                  </a>
                );
              })}
            </div>

            {/* CTA Button - Desktop */}
            <a
              href="#contact"
              className="hidden md:block relative group overflow-hidden px-6 py-2.5 rounded-full font-semibold text-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 transition-transform group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative text-white flex items-center gap-2">
                Let's Talk
                <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </span>
            </a>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800 border border-slate-700 text-cyan-400 hover:border-cyan-500/50 transition-all"
            >
              {mobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-slate-900/95 backdrop-blur-2xl border-t border-slate-800 px-6 py-6">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => {
                const isActive = activeSection === (link.section || link.href.substring(1));
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                        : 'text-gray-400 hover:text-cyan-400 hover:bg-slate-800'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-sm font-medium bg-gradient-to-r from-purple-500 to-pink-600 text-white text-center shadow-lg shadow-purple-500/25"
              >
                Let's Talk →
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content jump */}
      <div className="h-20"></div>
    </>
  );
}
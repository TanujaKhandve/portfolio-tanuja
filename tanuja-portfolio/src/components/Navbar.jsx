import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

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
      {/* Animated gradient background */}
      <div className="fixed top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50 z-50"></div>
      
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-cyan-500/5' 
          : 'bg-black/60 backdrop-blur-md'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo with magnetic effect */}
            <a href="#home" className="flex items-center gap-3 group relative">
              {/* Glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700"></div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl blur-md opacity-75 group-hover:opacity-100 group-hover:blur-lg transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-cyan-500 to-blue-600 p-2.5 rounded-xl shadow-lg shadow-cyan-500/50 group-hover:shadow-cyan-500/70 group-hover:scale-110 transition-all duration-500">
                  <Code2 className="text-black text-xl" strokeWidth={2.5} />
                </div>
              </div>
              
              <div className="relative">
                <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent tracking-tight">
                  Tanuja Khandve
                </h1>
                <div className="flex items-center gap-2 mt-0.5">
                  <div className="h-px w-8 bg-gradient-to-r from-cyan-500 to-transparent"></div>
                  <p className="text-[10px] text-gray-400 font-medium tracking-widest uppercase">
                    Developer × Cloud
                  </p>
                </div>
              </div>
            </a>
            
            {/* Desktop Menu - Floating pill design */}
            <div className="hidden lg:flex items-center gap-1 relative">
              {/* Glow background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 rounded-full blur-xl"></div>
              
              <div className="relative flex items-center gap-1 bg-white/5 backdrop-blur-xl rounded-full px-2 py-2 border border-white/10 shadow-lg shadow-black/50">
                {navLinks.map((link) => {
                  const isActive = activeSection === (link.section || link.href.substring(1));
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-500 group ${
                        isActive
                          ? 'text-white'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {isActive && (
                        <>
                          <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full animate-pulse"></span>
                          <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full blur-sm"></span>
                        </>
                      )}
                      <span className="relative z-10 tracking-wide">{link.name}</span>
                      
                      {/* Hover glow */}
                      {!isActive && (
                        <span className="absolute inset-0 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100"></span>
                      )}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* CTA Button - Magnetic hover */}
            <a
              href="#contact"
              className="hidden lg:flex relative group items-center gap-2 overflow-hidden px-6 py-3 rounded-full font-semibold text-sm"
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 transition-transform duration-700 group-hover:scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse"></div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <span className="relative text-white flex items-center gap-2 tracking-wide">
                <Sparkles className="w-4 h-4 group-hover:rotate-180 transition-transform duration-700" />
                Let's Talk
                <span className="group-hover:translate-x-1 transition-transform inline-block duration-300">→</span>
              </span>
            </a>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden relative w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 text-cyan-400 hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl opacity-0 group-hover:opacity-10 blur transition-opacity"></div>
              {mobileMenuOpen ? (
                <X className="text-xl relative z-10 group-hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Menu className="text-xl relative z-10 group-hover:scale-110 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Slide down animation */}
        <div className={`lg:hidden transition-all duration-500 ease-out ${
          mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-black/98 backdrop-blur-2xl border-t border-white/5 px-6 py-6 shadow-2xl shadow-cyan-500/10">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link, index) => {
                const isActive = activeSection === (link.section || link.href.substring(1));
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ animationDelay: `${index * 50}ms` }}
                    className={`px-5 py-4 rounded-xl text-sm font-medium transition-all duration-300 relative overflow-hidden group ${
                      isActive
                        ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white shadow-lg shadow-cyan-500/30'
                        : 'text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/10'
                    } ${mobileMenuOpen ? 'animate-slideIn' : ''}`}
                  >
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 blur-md opacity-50"></div>
                    )}
                    <span className="relative z-10 tracking-wide">{link.name}</span>
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="relative mt-2 px-5 py-4 rounded-xl text-sm font-medium bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white text-center shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10 flex items-center justify-center gap-2 tracking-wide">
                  <Sparkles className="w-4 h-4" />
                  Let's Talk
                  <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Demo sections for scroll effect 
      <div className="bg-black min-h-screen">
        <section id="home" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Home Section
            </h2>
            <p className="text-gray-400">Scroll to see the navbar in action</p>
          </div>
        </section>
        
        <section id="projects" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
          <h2 className="text-5xl font-bold text-white">Projects</h2>
        </section>
        
        <section id="skills" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black">
          <h2 className="text-5xl font-bold text-white">Skills</h2>
        </section>
        
        <section id="resume" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
          <h2 className="text-5xl font-bold text-white">Resume</h2>
        </section>
        
        <section id="contact" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black">
          <h2 className="text-5xl font-bold text-white">Contact</h2>
        </section>
      </div>*/}

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slideIn {
          animation: slideIn 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
}
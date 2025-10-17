import React, { useEffect, useState } from 'react';
import { FaDownload, FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      {/* Floating Orbs with Mouse Parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-[500px] h-[500px] bg-cyan-500/30 rounded-full blur-[120px] -top-48 -left-48 animate-pulse"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
          }}
        ></div>
        <div 
          className="absolute w-[400px] h-[400px] bg-blue-600/30 rounded-full blur-[100px] top-1/2 right-0 animate-pulse"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            animationDelay: '1s'
          }}
        ></div>
        <div 
          className="absolute w-[350px] h-[350px] bg-purple-600/20 rounded-full blur-[90px] -bottom-32 left-1/3 animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            animationDelay: '2s'
          }}
        ></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 backdrop-blur-xl border border-cyan-500/20 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          {/*<span className="text-cyan-400 text-xs font-semibold tracking-wider uppercase">Available for Opportunities</span>*/}
        </div>
        
        {/* Main Heading with Gradient Animation */}
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black mb-8 leading-tight animate-fade-in-up">
          <span className="block mb-2 text-white">Hi, I'm</span>
          <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
            Tanuja Khandve
          </span>
        </h1>
        
        {/* Subtitle with Typing Effect Styling */}
        <div className="mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-2xl sm:text-3xl lg:text-3xl font-bold text-gray-300 mb-2">
            Full Stack Developer
          </p>
          <p className="text-lg sm:text-xl text-cyan-400 font-semibold">
            × Cloud Enthusiast × Problem Solver
          </p>
        </div>
        
        {/* Description */}
        <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto mb-4 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Crafting scalable web applications with the <span className="text-cyan-400 font-semibold">MERN stack</span> and exploring the world of 
          <span className="text-blue-400 font-semibold"> Cloud Infrastructure</span>. 
          Passionate about bridging development and deployment through AWS, Azure, and modern DevOps practices.
        </p>

        {/* Quote */}
        <div className="mb-10 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-cyan-400/80 italic text-sm sm:text-base font-medium">
            <span className="text-2xl">"</span> Coding builds the app — Cloud makes it accessible to the world <span className="text-2xl">"</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <a 
            href="#projects" 
            className="group relative px-8 py-4 rounded-full font-bold text-white overflow-hidden shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 bg-[length:200%_auto] animate-gradient"></div>
            <span className="relative flex items-center gap-2">
              View My Work
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          
          <a 
            href="https://drive.google.com/file/d/17O0kTsT05-_xt6aaD7Qk70uNgOij7QuK/view?usp=drivesdk" 
            target="_blank" 
            rel="noreferrer"
            className="group px-8 py-4 rounded-full font-bold text-white bg-white/5 backdrop-blur-xl border-2 border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
          >
            <FaDownload className="group-hover:animate-bounce" />
            Download Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <a 
            href="https://github.com/TanujaKhandve" 
            target="_blank" 
            rel="noreferrer"
            className="group relative w-14 h-14 flex items-center justify-center rounded-full bg-slate-800/50 backdrop-blur-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-110"
          >
            <FaGithub className="text-2xl text-gray-400 group-hover:text-white transition-colors" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/tanuja-khandve" 
            target="_blank" 
            rel="noreferrer"
            className="group relative w-14 h-14 flex items-center justify-center rounded-full bg-slate-800/50 backdrop-blur-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-110"
          >
            <FaLinkedin className="text-2xl text-gray-400 group-hover:text-white transition-colors" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
          </a>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-cyan-400 rounded-full animate-scroll"></div>
          </div>
          <span className="text-cyan-400/50 text-xs font-semibold tracking-wider">SCROLL</span>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
          animation-fill-mode: both;
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        
        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
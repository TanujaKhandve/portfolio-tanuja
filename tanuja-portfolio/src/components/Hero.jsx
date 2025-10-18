import React, { useEffect, useState } from 'react';
import { Download, Github, Linkedin, ArrowRight, Sparkles, Code2, Cloud } from 'lucide-react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Sophisticated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black_40%,transparent_100%)]"></div>

      {/* Premium Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-[800px] h-[800px] rounded-full opacity-20 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(6,182,212,0.4) 0%, transparent 70%)',
            top: '10%',
            left: '10%',
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div 
          className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[100px]"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)',
            bottom: '10%',
            right: '10%',
            transform: `translate(${-mousePosition.x * 0.3}px, ${-mousePosition.y * 0.3}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div 
          className="absolute w-[500px] h-[500px] rounded-full opacity-15 blur-[80px]"
          style={{
            background: 'radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 70%)',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%) translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              background: i % 3 === 0 ? 'rgba(6,182,212,0.3)' : i % 3 === 1 ? 'rgba(59,130,246,0.3)' : 'rgba(168,85,247,0.3)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              filter: 'blur(0.5px)'
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
        {/* Premium Status Badge */}
        <div 
          className={`mb-8 inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400 shadow-lg shadow-cyan-400/50"></span>
          </span>
          <span className="text-gray-300 text-sm font-medium tracking-wide">Available for Opportunities</span>
        </div>
        
        {/* Main Heading - Ultra Premium */}
        <div className={`mb-10 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-2xl sm:text-3xl text-gray-400 font-light mb-6 tracking-wide">
            Hello, I'm
          </h1>
          <h2 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black mb-6 leading-none">
            <span className="inline-block bg-gradient-to-br from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
              Tanuja
            </span>
            <br />
            <span className="inline-block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
              Khandve
            </span>
          </h2>
        </div>
        
        {/* Role Tags - Modern Design */}
        <div className={`mb-8 flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="group relative px-6 py-3 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
            <div className="relative flex items-center gap-2">
              <Code2 className="w-4 h-4 text-cyan-400" />
              <span className="text-white font-semibold tracking-wide">Full Stack Developer</span>
            </div>
          </div>
          
          <div className="group relative px-6 py-3 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-400/30 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
            <div className="relative flex items-center gap-2">
              <Cloud className="w-4 h-4 text-blue-400" />
              <span className="text-white font-semibold tracking-wide">Cloud Enthusiast</span>
            </div>
          </div>
        </div>
        
        {/* Description - Refined Typography */}
        <p className={`text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto mb-6 leading-relaxed font-light transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Crafting scalable web applications with the{' '}
          <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text font-semibold">
            MERN stack
          </span>
          {' '}and exploring the world of{' '}
          <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text font-semibold">
            Cloud Infrastructure
          </span>
          . Passionate about bridging development and deployment through modern DevOps practices.
        </p>

        {/* Elegant Quote */}
        <div className={`mb-12 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl opacity-50"></div>
            <p className="relative text-gray-300 italic text-base sm:text-lg font-light px-8 py-2">
              "Coding builds the app — Cloud makes it accessible to the world"
            </p>
          </div>
        </div>

        {/* Premium CTA Buttons */}
        <div className={`flex flex-wrap justify-center gap-5 mb-14 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <a 
            href="#projects" 
            className="group relative px-8 py-4 rounded-full font-semibold text-white overflow-hidden transition-all duration-500 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 animate-shimmer bg-[length:200%_100%]"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            <span className="relative flex items-center gap-3">
              <Sparkles className="w-4 h-4" />
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </a>
          
          <a 
            href="https://drive.google.com/file/d/17O0kTsT05-_xt6aaD7Qk70uNgOij7QuK/view?usp=drivesdk" 
            target="_blank" 
            rel="noreferrer"
            className="group relative px-8 py-4 rounded-full font-semibold text-white bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 rounded-full transition-opacity"></div>
            <span className="relative flex items-center gap-3">
              <Download className="w-4 h-4 group-hover:animate-bounce" />
              Download Resume
            </span>
          </a>
        </div>

        {/* Social Links - Minimalist Premium */}
        <div className={`flex justify-center gap-4 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <a 
            href="https://github.com/TanujaKhandve" 
            target="_blank" 
            rel="noreferrer"
            className="group relative w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-110"
          >
            <Github className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/tanuja-khandve" 
            target="_blank" 
            rel="noreferrer"
            className="group relative w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-110"
          >
            <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
          </a>
        </div>
      </div>

      {/* Minimalist Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-3 animate-bounce-slow">
          <div className="w-[2px] h-16 bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent"></div>
          <span className="text-cyan-400/50 text-xs font-medium tracking-[0.2em] uppercase">Scroll</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0) translateX(0); 
            opacity: 0.3;
          }
          50% { 
            transform: translateY(-30px) translateX(10px); 
            opacity: 0.6;
          }
        }
        
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-shimmer {
          animation: shimmer 8s linear infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
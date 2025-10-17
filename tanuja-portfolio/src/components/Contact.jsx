import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  const contactMethods = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "tanujakhandve.official@gmail.com",
      link: "mailto:tanujakhandve.official@gmail.com",
      color: "cyan",
      action: "Send Email"
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "tanuja-khandve",
      link: "https://www.linkedin.com/in/tanuja-khandve",
      color: "blue",
      action: "Connect"
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "@TanujaKhandve",
      link: "https://github.com/TanujaKhandve",
      color: "purple",
      action: "Follow"
    }
  ];

  const colorClasses = {
    cyan: {
      gradient: "from-cyan-500 to-blue-500",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
      text: "text-cyan-400",
      shadow: "hover:shadow-cyan-500/20"
    },
    blue: {
      gradient: "from-blue-500 to-cyan-500",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
      text: "text-blue-400",
      shadow: "hover:shadow-blue-500/20"
    },
    purple: {
      gradient: "from-purple-500 to-pink-500",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20",
      text: "text-purple-400",
      shadow: "hover:shadow-purple-500/20"
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-slate-900">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            I'm eager to learn, collaborate, and contribute to meaningful projects
          </p>
        </div>

        {/* Main Contact Card */}
        <div className="bg-slate-950 rounded-2xl p-8 md:p-12 border border-slate-800 mb-8">
          {/* Info Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Get In Touch
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                I'm a motivated developer looking to grow and contribute. Whether you have opportunities, 
                project ideas, or just want to connect, I'd love to hear from you!
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-400">
                  <FaMapMarkerAlt className="text-cyan-400" />
                  <span className="text-sm">Pimpri, Maharashtra, India</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <div className="flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                  </div>
                  <span className="text-sm">Open to opportunities & collaborations</span>
                </div>
              </div>
            </div>

            {/* What I'm Looking For */}
            <div className="space-y-4">
              <div className="bg-slate-900 rounded-lg p-4 border border-slate-800">
                <h4 className="text-cyan-400 font-semibold mb-2 text-sm">Learning</h4>
                <p className="text-gray-500 text-xs">Currently exploring MERN stack and cloud technologies</p>
              </div>
              <div className="bg-slate-900 rounded-lg p-4 border border-slate-800">
                <h4 className="text-purple-400 font-semibold mb-2 text-sm">Seeking</h4>
                <p className="text-gray-500 text-xs">Internships, entry-level roles, and project collaborations</p>
              </div>
              <div className="bg-slate-900 rounded-lg p-4 border border-slate-800">
                <h4 className="text-blue-400 font-semibold mb-2 text-sm">Interested In</h4>
                <p className="text-gray-500 text-xs">Full-stack development, cloud computing, and web technologies</p>
              </div>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-4">
            {contactMethods.map((method, idx) => {
              const colors = colorClasses[method.color];
              return (
                <a
                  key={idx}
                  href={method.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`group ${colors.bg} border ${colors.border} rounded-xl p-6 hover:scale-105 ${colors.shadow} hover:shadow-xl transition-all duration-300`}
                >
                  <div className={`${colors.text} text-4xl mb-4`}>
                    {method.icon}
                  </div>
                  <h4 className="text-white font-semibold mb-2">
                    {method.title}
                  </h4>
                  <p className="text-gray-500 text-xs mb-3 break-all">
                    {method.value}
                  </p>
                  <span className={`${colors.text} text-sm font-medium group-hover:gap-2 flex items-center gap-1 transition-all`}>
                    {method.action}
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t border-slate-800">
          <p className="text-gray-500 text-sm mb-2">
            © {new Date().getFullYear()} Tanuja Khandve. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
}
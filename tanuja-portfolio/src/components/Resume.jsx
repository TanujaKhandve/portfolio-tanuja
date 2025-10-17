import React from 'react';
import { FaDownload, FaEye, FaGraduationCap, FaCode, FaCloud, FaServer } from 'react-icons/fa';

export default function Resume() {
  const highlights = [
    {
      icon: <FaGraduationCap />,
      title: "Education",
      desc: "MSc Computer Applications",
      color: "cyan"
    },
    {
      icon: <FaCode />,
      title: "Development",
      desc: "MERN Stack Expert",
      color: "purple"
    },
    {
      icon: <FaCloud />,
      title: "Cloud Learning",
      desc: "AWS & Azure",
      color: "blue"
    },
    {
      icon: <FaServer />,
      title: "Backend",
      desc: "Node.js & APIs",
      color: "pink"
    }
  ];

  const colorClasses = {
    cyan: {
      gradient: "from-cyan-500 to-blue-500",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
      text: "text-cyan-400"
    },
    purple: {
      gradient: "from-purple-500 to-pink-500",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20",
      text: "text-purple-400"
    },
    blue: {
      gradient: "from-blue-500 to-cyan-500",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
      text: "text-blue-400"
    },
    pink: {
      gradient: "from-pink-500 to-red-500",
      bg: "bg-pink-500/10",
      border: "border-pink-500/20",
      text: "text-pink-400"
    }
  };

  return (
    <section id="resume" className="py-24 px-6 bg-slate-950">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Resume
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Explore my professional journey from development to deployment, connecting code with cloud infrastructure
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {highlights.map((item, idx) => {
            const colors = colorClasses[item.color];
            return (
              <div 
                key={idx} 
                className={`${colors.bg} border ${colors.border} rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300`}
              >
                <div className={`${colors.text} text-4xl mb-3 flex justify-center`}>
                  {item.icon}
                </div>
                <h3 className="text-white font-semibold mb-1 text-sm">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Main Card */}
        <div className="bg-slate-900 rounded-2xl p-8 md:p-12 border border-slate-800">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-3">
              Tanuja Khandve
            </h3>
            <p className="text-gray-400 mb-6">
              Full Stack Developer specializing in MERN stack with a passion for cloud infrastructure and scalable solutions
            </p>
            
            {/* Key Points */}
            <div className="grid md:grid-cols-3 gap-4 text-left">
              <div className="bg-slate-950 rounded-lg p-4 border border-slate-800">
                <h4 className="text-cyan-400 font-semibold mb-2 text-sm">Frontend</h4>
                <p className="text-gray-500 text-xs">React.js, Tailwind CSS, Modern UI/UX</p>
              </div>
              <div className="bg-slate-950 rounded-lg p-4 border border-slate-800">
                <h4 className="text-purple-400 font-semibold mb-2 text-sm">Backend</h4>
                <p className="text-gray-500 text-xs">Node.js, Express, REST APIs, JWT</p>
              </div>
              <div className="bg-slate-950 rounded-lg p-4 border border-slate-800">
                <h4 className="text-blue-400 font-semibold mb-2 text-sm">Database</h4>
                <p className="text-gray-500 text-xs">MongoDB, MySQL, Data Modeling</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://drive.google.com/file/d/17O0kTsT05-_xt6aaD7Qk70uNgOij7QuK/view?usp=drivesdk"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
            >
              <FaEye />
              View Resume
            </a>

            <a
              href="https://drive.google.com/file/d/17O0kTsT05-_xt6aaD7Qk70uNgOij7QuK/view?usp=drivesdk"
              target="_blank"
              rel="noreferrer"
              download
              className="flex items-center gap-2 px-8 py-3 bg-slate-800 rounded-lg font-semibold text-white border border-slate-700 hover:border-cyan-500/50 transition-all"
            >
              <FaDownload />
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
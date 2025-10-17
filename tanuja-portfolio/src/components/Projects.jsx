import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      title: "ToDo List Web App",
      desc: "MERN-based task manager with CRUD operations, modals, and real-time notifications. Exploring cloud deployment on AWS EC2 & Vercel.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      link: "https://github.com/TanujaKhandve/todolistselfproject",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      title: "GoFood – Food Ordering App",
      desc: "Full-stack food ordering platform with JWT authentication, dynamic menu filters, and cart logic. Built scalable REST APIs with Node.js.",
      tech: ["MERN", "JWT", "REST API"],
      link: "https://github.com/TanujaKhandve/gofood-project",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Online Exam Portal",
      desc: "Secure examination system with admin control, real-time result tracking, and user management. Learning cloud deployment strategies.",
      tech: ["Node.js", "MySQL", "Express"],
      link: "https://github.com/TanujaKhandve/online-examination-portal",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      title: "Employee Manager",
      desc: "Desktop application with Swing GUI and MySQL for employee CRUD operations and payroll management with robust backend logic.",
      tech: ["Java", "Swing", "MySQL"],
      link: "https://github.com/TanujaKhandve/Employee-management-system",
      gradient: "from-pink-500 to-red-600"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          A collection of projects showcasing my full-stack development skills and cloud exploration journey
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-2">
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`}></div>
              
              <h3 className="text-2xl font-bold text-white mb-3 flex items-center justify-between">
                {project.title}
                <FaExternalLinkAlt className="text-sm text-gray-500 group-hover:text-cyan-400 transition-colors" />
              </h3>
              
              <p className="text-gray-400 mb-4 leading-relaxed">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-xs font-semibold rounded-full border border-cyan-500/20">
                    {tech}
                  </span>
                ))}
              </div>

              <a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition-colors"
              >
                <FaGithub className="text-lg" />
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaAws, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript, SiMysql, SiPostman, SiDjango } from 'react-icons/si';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      gradient: "from-cyan-500 to-blue-600",
      skills: [
        { name: "React.js", icon: <FaReact />, level: 90 },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 85 },
        { name: "JavaScript", icon: <SiJavascript />, level: 88 },
        { name: "HTML & CSS", icon: null, level: 92 }
      ]
    },
    {
      title: "Backend",
      gradient: "from-purple-500 to-pink-600",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, level: 85 },
        { name: "Express.js", icon: <SiExpress />, level: 88 },
        { name: "Django", icon: <SiDjango />, level: 75 },
        { name: "REST APIs", icon: null, level: 90 },
        { name: "JWT Auth", icon: null, level: 82 }
      ]
    },
    {
      title: "Databases & Tools",
      gradient: "from-blue-500 to-cyan-600",
      skills: [
        { name: "MongoDB", icon: <SiMongodb />, level: 87 },
        { name: "MySQL", icon: <SiMysql />, level: 83 },
        { name: "SQLite", icon: <FaDatabase />, level: 80 },
        { name: "Postman", icon: <SiPostman />, level: 88 },
        { name: "Git", icon: <FaGitAlt />, level: 85 }
      ]
    },
    {
      title: "Cloud & DevOps",
      gradient: "from-pink-500 to-red-600",
      skills: [
        { name: "AWS Basics", icon: <FaAws />, level: 70, badge: "Learning" },
        { name: "Virtualization", icon: <FaDocker />, level: 65, badge: "Learning" },
        { name: "Deployment", icon: null, level: 68, badge: "Learning" },
        { name: "Networking", icon: null, level: 62, badge: "Learning" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Tech Stack & Skills
          </span>
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Technologies and tools I use to bring ideas to life
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/30 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-1 h-8 bg-gradient-to-b ${category.gradient} rounded-full`}></div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {skill.icon && <span className="text-cyan-400 text-xl">{skill.icon}</span>}
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        {skill.badge && (
                          <span className="px-2 py-0.5 bg-cyan-500/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30">
                            {skill.badge}
                          </span>
                        )}
                      </div>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-300 mb-6">Also Familiar With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['VS Code', 'GitHub', 'Vercel', 'Netlify', 'Ubuntu', 'Azure Basics'].map((tool, i) => (
              <span key={i} className="px-4 py-2 bg-slate-800 text-gray-400 border border-slate-700 rounded-lg hover:border-cyan-500/50 hover:text-cyan-400 transition-all">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
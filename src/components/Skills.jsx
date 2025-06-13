import React from 'react';

export default function Skills() {
  const skills = [
    "React.js", "Tailwind CSS", "JavaScript", "HTML", "CSS",
    "Node.js", "Express.js", "Django",
    "MongoDB", "MySQL", "SQLite",
    "Postman", "REST API", "JWT", "GitHub", "VS Code",
    "Java", "Python"
  ];

  return (
    <section id="skills" className="p-14 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6 text-indigo-600 tracking-wide">My Skills</h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <span key={index} className="bg-indigo-100 text-indigo-900 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

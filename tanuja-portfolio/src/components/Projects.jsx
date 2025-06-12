import React from 'react';

export default function Projects() {
  const projectList = [
    {
      title: "ToDo List Web App",
      desc: "MERN-based task manager with modals, notifications, and edit/delete functionality.",
      link: "https://github.com/TanujaKhandve/todolistselfproject"
    },
    {
      title: "GoFood – Food Ordering App",
      desc: "Full-stack food ordering app with JWT login, menu filters, and cart logic.",
      link: "https://github.com/TanujaKhandve/gofood-project"
    },
    {
      title: "Online Exam Portal",
      desc: "Django-based online exam system with admin control and real-time results.",
      link: "https://github.com/TanujaKhandve/online-examination-portal"
    },
    {
      title: "Employee Manager (Java)",
      desc: "Desktop app using Swing + MySQL for employee CRUD and salary management.",
      link: "https://github.com/TanujaKhandve/Employee-management-system"
    }
  ];

  return (
    <section id="projects" className="p-14 bg-[#f3f4f6]">
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600 tracking-wide">My Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projectList.map((project, index) => (
          <div key={index} className="bg-white rounded-lg p-4 shadow-md hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1 border border-gray-200">
            <h3 className="text-xl font-semibold text-indigo-800">{project.title}</h3>
            <p className="text-gray-700 text-sm mt-2 mb-4">{project.desc}</p>
            <a href={project.link} target="_blank" rel="noreferrer" className="inline-block text-indigo-600 hover:underline text-sm font-medium">
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

import React from 'react';

export default function Resume() {
  return (
    <section id="resume" className="py-16 px-6 bg-[#f3f4f6] text-center">
      <h2 className="text-3xl font-bold text-indigo-600 mb-4 tracking-wide">Resume</h2>

      <p className="text-gray-700 text-lg max-w-xl mx-auto mb-6">
        Want to know more about my experience and education?  
        Download or view my latest resume to explore how I’ve worked on real-world MERN stack projects, managed APIs, and built web apps from scratch.
      </p>

      <div className="space-x-4 mt-4">
        <a
          href="https://drive.google.com/file/d/17O0kTsT05-_xt6aaD7Qk70uNgOij7QuK/view?usp=drivesdk"
          target="_blank"
          rel="noreferrer"
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-md shadow-md transition duration-300"
        >
          📄 View Resume
        </a>

        <a
          href="https://drive.google.com/file/d/17O0kTsT05-_xt6aaD7Qk70uNgOij7QuK/view?usp=drivesdk"
          target="_blank"
          rel="noreferrer"
          download
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md shadow-md transition duration-300"
        >
          ⬇️ Download PDF
        </a>
      </div>
    </section>
  );
}

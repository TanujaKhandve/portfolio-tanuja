import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold text-indigo-600 mb-6">Contact Me</h2>
      <p className="text-gray-700 mb-6">
        I'd love to connect! You can reach out via any of the platforms below.
      </p>

      <div className="flex justify-center gap-8 text-3xl text-indigo-500">
        <a href="mailto:tanujakhandve.official@gmail.com" target="_blank" rel="noreferrer" className="hover:text-indigo-700 transition"><FaEnvelope title="Email" /></a>
        <a href="https://www.linkedin.com/in/tanuja-khandve" target="_blank" rel="noreferrer" className="hover:text-indigo-700 transition"><FaLinkedin title="LinkedIn" /></a>
        <a href="https://github.com/TanujaKhandve" target="_blank" rel="noreferrer" className="hover:text-indigo-700 transition"><FaGithub title="GitHub" /></a>
      </div>

      <p className="text-sm text-gray-500 mt-8">
        © {new Date().getFullYear()} Tanuja Khandve. All rights reserved.
      </p>
    </section>
  );
}

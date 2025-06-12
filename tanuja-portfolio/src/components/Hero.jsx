import React from 'react';

export default function Hero() {
    return (
        <section className="h-[90vh] flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-white to-indigo-50" id="home">
            <h1 className="text-4xl font-bold mb-4 text-indigo-800"> Hi, I'm Tanuja 👩‍💻 Full Stack MERN Developer</h1>
            <p className="text-lg text-gray-700 max-w-xl">
                A highly motivated and self-driven Full Stack Developer with hands-on experience in building responsive, scalable web applications using the MERN stack. I've successfully developed real-world projects like a Food Ordering App (GoFood), Online Examination Portal, and a ToDo Manager — all integrating REST APIs, authentication, and CRUD operations. I’m passionate about solving problems, writing clean code, and continuously improving.
            </p>
            <p className="italic text-gray-500 mt-3">“Coding isn’t just my skill — it’s my superpower.”</p>
            <div className="mt-6 space-x-4">
                <a href="https://github.com/TanujaKhandve" className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md shadow-md transition duration-300">GitHub</a>
                <a href="https://www.linkedin.com/in/tanuja-khandve" className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-md shadow-md transition duration-300">LinkedIn</a>
                <a href="https://drive.google.com/file/d/17O0kTsT05-_xt6aaD7Qk70uNgOij7QuK/view?usp=drivesdk" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md shadow-md transition duration-300">Resume</a>
            </div>
        </section>
    );
}

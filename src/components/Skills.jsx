import React from "react";
import { FaCode, FaTools, FaDatabase, FaLaptopCode } from "react-icons/fa";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-br from-[#1e3c72] via-[#2a5298] to-[#1e3c72] text-white"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#80ffdb] mb-2 drop-shadow-md">Skills</h2>
        <hr className="w-24 mx-auto border-[#80ffdb] mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Languages */}
          <div
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-xl hover:shadow-[#80ffdb]/40 transition-all duration-300 hover:-translate-y-1"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <FaCode className="text-4xl text-[#80ffdb] mb-4 mx-auto drop-shadow-md group-hover:scale-110 transition" />
            <h3 className="text-xl font-semibold mb-2">Languages</h3>
            <ul className="text-white/80 space-y-1">
              <li>C</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>Python</li>
            </ul>
          </div>

          {/* Web */}
          <div
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-xl hover:shadow-[#80ffdb]/40 transition-all duration-300 hover:-translate-y-1"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <FaLaptopCode className="text-4xl text-[#80ffdb] mb-4 mx-auto drop-shadow-md" />
            <h3 className="text-xl font-semibold mb-2">Web</h3>
            <ul className="text-white/80 space-y-1">
              <li>HTML, CSS</li>
              <li>React.js</li>
              <li>Node.js, Express.js</li>
            </ul>
          </div>

          {/* Databases */}
          <div
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-xl hover:shadow-[#80ffdb]/40 transition-all duration-300 hover:-translate-y-1"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <FaDatabase className="text-4xl text-[#80ffdb] mb-4 mx-auto drop-shadow-md" />
            <h3 className="text-xl font-semibold mb-2">Databases</h3>
            <ul className="text-white/80 space-y-1">
              <li>MongoDB</li>
              <li>MySQL</li>
            </ul>
          </div>

          {/* Tools & Design */}
          <div
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-xl hover:shadow-[#80ffdb]/40 transition-all duration-300 hover:-translate-y-1"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <FaTools className="text-4xl text-[#80ffdb] mb-4 mx-auto drop-shadow-md" />
            <h3 className="text-xl font-semibold mb-2">Tools & Design</h3>
            <ul className="text-white/80 space-y-1">
              <li>Git, GitHub, Postman, VS Code</li>
              <li>Figma, Tailwind CSS, Canva</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

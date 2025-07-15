import React, { useEffect } from "react";
import { FaGraduationCap, FaCode, FaGlobe } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 bg-gradient-to-br from-[#1e3c72] via-[#2a5298] to-[#1e3c72] text-white"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Icon Container */}
        <div data-aos="zoom-in" className="flex justify-center">
          <div className="bg-gradient-to-br from-[#ff416c] to-[#ff4b2b] p-8 rounded-full shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
            <FaGraduationCap className="text-white text-7xl drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]" />
          </div>
        </div>

        {/* Content Box */}
        <div
          data-aos="fade-up"
          className="backdrop-blur-md bg-white/10 p-8 rounded-3xl shadow-2xl border border-white/20 space-y-6 transition-all duration-300 hover:shadow-[#80ffdb]/30"
        >
          <h2 className="text-4xl font-extrabold text-[#ff416c] border-b-4 border-[#ff4b2b] inline-block pb-2 drop-shadow-lg">
            About Me
          </h2>

          <p className="text-lg leading-relaxed text-white/80">
            I'm a full‑stack developer crafting modern, scalable applications—from note‑taking tools to rural healthcare platforms. My approach blends clean architecture, thoughtful experience design, and a passion for learning.
          </p>

          <div className="space-y-4">
            <p className="flex items-start text-[#80ffdb] drop-shadow transition duration-300 hover:scale-[1.03] hover:text-white">
              <FaCode className="mr-3 mt-1" />
              C • Java • JavaScript • Python • React • Node.js • MongoDB • MySQL
            </p>
            <p className="flex items-start text-[#80ffdb] drop-shadow transition duration-300 hover:scale-[1.03] hover:text-white">
              <FaGlobe className="mr-3 mt-1" />
              English • Hindi • Bengali — Collaborative, creative, and constantly growing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

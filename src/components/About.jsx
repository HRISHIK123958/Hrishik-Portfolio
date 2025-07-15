import React, { useEffect, useState } from "react";
import { FaGraduationCap, FaCode, FaGlobe, FaDownload } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const handleEsc = (e) => {
      if (e.key === "Escape") setShowModal(false);
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 bg-gradient-to-br from-[#1e3c72] via-[#2a5298] to-[#1e3c72] text-white"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Icon */}
        <div data-aos="zoom-in" className="flex justify-center">
          <div className="bg-gradient-to-br from-[#ff416c] to-[#ff4b2b] p-8 rounded-full shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
            <FaGraduationCap className="text-white text-7xl drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]" />
          </div>
        </div>

        {/* Info Card */}
        <div
          data-aos="fade-up"
          className="backdrop-blur-md bg-white/10 p-8 rounded-3xl shadow-2xl border border-white/20 space-y-6 transition-all duration-300 hover:shadow-[#80ffdb]/30"
        >
          <h2 className="text-4xl font-extrabold text-[#80ffdb] border-b-4 border-[#80ffdb] inline-block pb-2 drop-shadow-lg">
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

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 bg-[#80ffdb] text-[#1e1e1e] px-5 py-2 rounded-xl font-semibold shadow-md hover:bg-[#5ee8c7] transition-all duration-300"
            >
              <FaDownload />
              Download Resume
            </a>

            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-2 bg-transparent border border-[#80ffdb] text-[#80ffdb] px-5 py-2 rounded-xl font-semibold hover:bg-[#80ffdb]/10 transition-all duration-300"
            >
              👁️ View Resume
            </button>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl bg-[#1e1e1e] rounded-xl shadow-2xl border border-white/20 overflow-hidden animate-slide-in"
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center px-4 py-3 bg-white/10 border-b border-white/10">
              <span className="text-lg font-semibold text-white">Resume Preview</span>
              <button
                onClick={() => setShowModal(false)}
                className="text-white hover:text-[#ff4b2b] font-bold text-lg transition"
              >
                ✖
              </button>
            </div>

            {/* Modal Iframe */}
            <iframe
              src="/cv.pdf"
              className="w-full h-[75vh] transition-all duration-500"
              title="Resume Modal Preview"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;

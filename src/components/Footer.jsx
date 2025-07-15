import React from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#1e3c72] via-[#2a5298] to-[#1e3c72] text-white py-10 border-t border-white/20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center space-y-6">
        <p className="text-sm tracking-wide text-white/80">
          © {new Date().getFullYear()} <span className="text-[#80ffdb] font-semibold">Hrishik Dey</span>. All rights reserved.
        </p>

        <div className="flex space-x-8 text-lg">
          <a
            href="mailto:hrishikdey75@gmail.com"
            className="hover:text-[#80ffdb] transition duration-300 flex items-center gap-2 group"
          >
            <FaEnvelope className="group-hover:scale-110 group-hover:drop-shadow-md transition duration-300" />
            <span>Email</span>
          </a>

          <a
            href="https://www.linkedin.com/in/hrishik-"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#80ffdb] transition duration-300 flex items-center gap-2 group"
          >
            <FaLinkedin className="group-hover:scale-110 group-hover:drop-shadow-md transition duration-300" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

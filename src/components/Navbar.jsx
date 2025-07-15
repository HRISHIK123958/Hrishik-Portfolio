import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-lg bg-white/10 border-b border-[#80ffdb]/30 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-[#80ffdb] drop-shadow-md hover:tracking-wider transition-all duration-300">
          Hrishik
        </h1>

        {/* Nav Links */}
        <nav>
          <ul className="flex space-x-6 text-white/90 font-medium text-sm md:text-base">
            {["home", "about", "skills", "projects", "contact"].map((item, index) => (
              <li key={index}>
                <Link
                  to={item}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="cursor-pointer group transition duration-300"
                >
                  <span className="relative text-white/90 group-hover:text-[#80ffdb] transition">
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#80ffdb] transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-[#1e3c72] via-[#2a5298] to-[#1e3c72] py-24 px-6 text-white text-center"
      data-aos="fade-up"
    >
      <div data-aos="zoom-in">
        <img
          src="/images/photograph.jpg"
          alt="Hrishik Dey"
          className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-[#80ffdb] shadow-2xl transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div
        className="mt-6 inline-block bg-white/10 backdrop-blur-md border border-white/20 px-6 py-4 rounded-xl shadow-lg"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h1 className="text-4xl font-extrabold text-[#80ffdb] drop-shadow-lg">
          Hrishik Dey
        </h1>
        <p className="mt-2 text-lg text-white/80">
          MCA Student | Full-Stack Developer | Tech Enthusiast
        </p>
      </div>
    </section>
  );
};

export default Hero;

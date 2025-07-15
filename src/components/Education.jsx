import React from "react";
import { FaGraduationCap, FaSchool, FaCertificate } from "react-icons/fa";

const timeline = [
  {
    icon: <FaGraduationCap />,
    title: "Master of Computer Applications",
    inst: "Adamas University, Kolkata",
    year: "2024 – Present",
    desc: "Specializing in full‑stack development & advanced software methodologies."
  },
  {
    icon: <FaSchool />,
    title: "Bachelor of Computer Science",
    inst: "Adamas University",
    year: "2021 – 2024",
    desc: "Graduated with 72.2%, strong focus on databases & web technologies."
  },
  {
    icon: <FaCertificate />,
    title: "Class XII – Science (CBSE)",
    inst: "Central Model School",
    year: "2021",
    desc: "Scored 59.5% in PCM; developed critical thinking skills."
  },
  {
    icon: <FaCertificate />,
    title: "Class X (ICSE)",
    inst: "St. Claret School",
    year: "2019",
    desc: "Achieved 61% across core subjects like Maths and Science."
  }
];

export default function Education() {
  return (
    <section
      id="education"
      className="bg-gradient-to-br from-[#1e3c72] via-[#2a5298] to-[#1e3c72] py-20 px-6 text-white"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-4xl font-bold text-[#80ffdb] text-center mb-16 border-b-4 inline-block border-[#80ffdb] pb-2 drop-shadow-lg"
          data-aos="fade-up"
        >
          Education & Timeline
        </h2>

        <div className="relative ml-6">
          <div className="absolute left-4 top-0 h-full border-l-4 border-[#80ffdb]/60 shadow-cyan-500/40 shadow-md"></div>

          {timeline.map((item, i) => (
            <div
              key={i}
              className="flex items-start mb-14 relative"
              data-aos="fade-up"
              data-aos-delay={100 + i * 100}
            >
              <div className="flex-none -ml-4 z-10 bg-[#1e293b] border-4 border-[#80ffdb] rounded-full w-12 h-12 flex items-center justify-center text-[#80ffdb] shadow-lg shadow-cyan-500/30 hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <div className="pl-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 w-full">
                <p className="text-[#80ffdb] font-medium">{item.year}</p>
                <h3 className="text-2xl font-semibold text-white mt-1">{item.title}</h3>
                <p className="text-gray-300 mt-1">{item.inst}</p>
                <p className="text-gray-400 mt-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

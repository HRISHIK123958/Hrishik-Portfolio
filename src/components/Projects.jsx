import React from "react";

const projectData = [
  {
    title: "Shipsy – Goods Shipping Website",
    description:
      "A MERN stack platform for goods shipping. Supports real-time package creation, tracking, and e-commerce logistics management.",
  },
  {
    title: "Project Management App – Issue Tracking",
    description:
      "Task manager with Kanban board, user auth, ticket tracking, and project collaboration features.",
  },
  {
    title: "Digital Signature Website",
    description:
      "Secure web app for generating and verifying digital signatures using modern cryptographic methods.",
  },
  {
    title: "Rural Health System",
    description:
      "Healthcare portal for rural areas with doctor consultations, medicine reminders, and pharmacy integration.",
  },
];

const Projects = () => (
  <section
    id="projects"
    className="py-24 px-6 bg-gradient-to-br from-[#1e3c72] via-[#2a5298] to-[#1e3c72] text-white"
  >
    <div className="max-w-6xl mx-auto text-center">
      <h2
        className="text-4xl font-bold text-[#80ffdb] mb-2 drop-shadow"
        data-aos="fade-up"
      >
        Projects
      </h2>
      <hr className="w-24 mx-auto border-[#80ffdb] mb-12" />

      <div className="grid gap-12 md:grid-cols-2">
        {projectData.map((project, idx) => (
          <div
            key={idx}
            className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 text-left shadow-xl hover:shadow-[#80ffdb]/40 hover:-translate-y-2 transition-transform duration-300"
            data-aos="fade-up"
            data-aos-delay={idx * 150}
          >
            <h3 className="text-2xl font-semibold text-[#80ffdb] mb-3 drop-shadow-md">
              {project.title}
            </h3>
            <p className="text-white/80 leading-relaxed">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;

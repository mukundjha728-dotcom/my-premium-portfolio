import React from "react";
import { FaGithub, FaExternalLinkAlt, FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Import Export Website",
      company: "VR AND Sons",
      description:
        "Developed a professional business website to showcase import-export products and services. Implemented structured layouts for product listings and ensured cross-device compatibility.",
      techStack: ["React.js", "Tailwind CSS", "JavaScript"],
      githubLink: "https://github.com/mukundjha728-dotcom",
      liveLink: "https://www.vrandsons.com/",
    },
    {
      title: "Furniture E-Commerce",
      company: "Personal Project",
      description:
        "Built a fully responsive e-commerce platform for furniture. Designed intuitive product browsing, filtering, and implemented reusable components for scalability and optimized loading.",
      techStack: ["React.js", "Tailwind CSS", "JavaScript"],
      githubLink: "https://github.com/mukundjha728-dotcom",
      liveLink: "https://furniture-website-8sts.vercel.app/",
    },
    {
      title: "Email Verifier",
      company: "Personal Project",
      description:
        "Engineered a web application to validate email addresses and improve data reliability. Focused on real-time validation, performance optimization, and seamless cross-device compatibility.",
      techStack: ["JavaScript", "HTML", "CSS"],
      githubLink: "https://github.com/mukundjha728-dotcom",
      liveLink: "https://www.graphurahub.in/",
    },
    {
      title: "Task Management App",
      company: "Personal Project",
      description:
        "Developed a dynamic task management platform. Implemented modular UI components and responsive layouts to improve usability with efficient task organization features.",
      techStack: ["React.js", "Tailwind CSS", "JavaScript"],
      githubLink: "https://github.com/mukundjha728-dotcom",
      liveLink: "https://task-management-liart-nu.vercel.app/",
    },
    {
      title: "School Management System",
      company: "Personal Project",
      description:
        "Built a structured system to manage academic information efficiently. Focused on clean design, intuitive navigation, and scalable UI architecture for user-friendly interaction.",
      techStack: ["React.js", "Tailwind CSS", "JavaScript"],
      githubLink: "https://github.com/mukundjha728-dotcom",
      liveLink: "https://school-management-phi-sandy.vercel.app/",
    },
    {
      title: "Fruites Bounty",
      company: "Personal Project",
      description:
        "Created a modern product-based website with engaging UI design. Used Tailwind CSS for consistent and efficient styling ensuring perfect responsiveness across multiple devices.",
      techStack: ["React.js", "Tailwind CSS", "JavaScript"],
      githubLink: "https://github.com/mukundjha728-dotcom",
      liveLink: "https://www.fruitsbounty.in/",
    },
  ];

  // Modern Cyan-to-Purple Gradient Reusable Class
  const techGradientText =
    "bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent";

  // Smooth Scroll Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <section
      id="projects"
      className="py-24 bg-slate-950 relative overflow-hidden font-sans"
    >
      {/* Abstract Neon Background Glows */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-purple-700/10 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Featured <span className={techGradientText}>Projects</span>
          </h2>
          <p className="text-lg text-slate-400 font-medium">
            A showcase of my recent work, side projects, and web development
            experiments.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              variants={fadeUp}
              key={index}
              className="bg-slate-900/40 backdrop-blur-xl rounded-2xl p-8 border border-slate-800 shadow-xl hover:border-cyan-500/40 hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.2)] hover:-translate-y-2 transition-all duration-300 flex flex-col h-full relative group"
            >
              {/* Card Header (Icons) */}
              <div className="flex justify-between items-center mb-8">
                <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors duration-300">
                  <FaLaptopCode className="text-3xl text-cyan-400" />
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300"
                    aria-label="GitHub Repository"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300"
                    aria-label="Live Project Link"
                  >
                    <FaExternalLinkAlt size={22} />
                  </a>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-slate-100 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300">
                  {project.title}
                </h3>
                {project.company !== "Personal Project" && (
                  <p className="text-xs font-bold text-purple-400 mb-4 tracking-widest uppercase">
                    {project.company}
                  </p>
                )}
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  {project.description}
                </p>
              </div>

              {/* Card Footer (Tech Stack) */}
              <div className="mt-auto flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-semibold tracking-wide text-cyan-300 bg-cyan-950/50 px-3 py-1.5 rounded-full border border-cyan-800/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Github Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <a
            href="https://github.com/mukundjha728-dotcom"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full hover:from-cyan-400 hover:to-blue-500 shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 active:scale-95"
          >
            <FaGithub className="mr-3" size={22} />
            Explore More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

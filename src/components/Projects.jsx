import React from "react";
import { FaGithub, FaExternalLinkAlt, FaFolderOpen } from "react-icons/fa";
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

  // Metallic Gold Gradient Reusable Class
  const goldGradientText =
    "bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728] bg-clip-text text-transparent";

  // Scroll Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <section
      id="projects"
      className="py-20 bg-[#0a0f1a] relative overflow-hidden"
    >
      {/* Abstract Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[30%] h-[30%] rounded-full bg-[#bf953f]/5 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[5%] w-[40%] h-[40%] rounded-full bg-blue-900/10 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Featured <span className={goldGradientText}>Projects</span>
          </h2>
          <p className="text-lg text-slate-400 font-light">
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
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-[#bf953f]/20 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:border-[#bf953f]/50 hover:shadow-[0_0_25px_rgba(191,149,63,0.15)] hover:-translate-y-2 transition-all duration-300 flex flex-col h-full relative group"
            >
              {/* Card Header (Icons) */}
              <div className="flex justify-between items-center mb-6">
                <FaFolderOpen className="text-4xl text-[#d4af37] group-hover:text-[#fcf6ba] transition-colors duration-300 drop-shadow-md" />
                <div className="flex space-x-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-[#fcf6ba] hover:scale-110 transition-all duration-300"
                  >
                    <span className="sr-only">GitHub</span>
                    <FaGithub size={22} />
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-[#fcf6ba] hover:scale-110 transition-all duration-300"
                  >
                    <span className="sr-only">Live Link</span>
                    <FaExternalLinkAlt size={20} />
                  </a>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#fcf6ba] transition-colors duration-300">
                  {project.title}
                </h3>
                {project.company !== "Personal Project" && (
                  <p className="text-sm font-semibold text-[#b38728] mb-3 uppercase tracking-wider">
                    {project.company}
                  </p>
                )}
                <p className="text-slate-300 text-sm font-light leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Card Footer (Tech Stack) */}
              <div className="mt-auto pt-6 border-t border-[#bf953f]/10 flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono font-medium text-[#e5c158] bg-[#0a0f1a]/50 px-3 py-1.5 rounded-md border border-[#bf953f]/30 shadow-inner"
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
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/mukundjha728-dotcom"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-[#fcf6ba] bg-transparent border-2 border-[#bf953f]/40 rounded-full hover:bg-[#bf953f]/10 hover:border-[#fcf6ba] hover:shadow-[0_0_20px_rgba(191,149,63,0.2)] transition-all duration-300 active:scale-95"
          >
            <FaGithub className="mr-3" size={20} />
            See more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

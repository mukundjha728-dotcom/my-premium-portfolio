import React from "react";
import { Mail, ArrowRight, Download, MapPin, Terminal } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  // Professional, subtle entrance animations
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center py-20 bg-[#020817] overflow-hidden" // Clean, modern dark background (Tailwind slate-950/custom)
    >
      {/* Subtle modern grid/glow background instead of heavy blobs */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Side: Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-2 lg:order-1 lg:col-span-7 flex flex-col justify-center text-center lg:text-left"
          >
            <motion.div
              variants={fadeUp}
              className="flex justify-center lg:justify-start mb-6"
            >
              <span className="px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-indigo-400" />
                <span className="text-indigo-300 font-medium text-sm tracking-wide">
                  Available for new opportunities
                </span>
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-4 text-slate-100"
            >
              Hi, I'm <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                Mukund Kumar Jha
              </span>
            </motion.h1>

            <motion.h2
              variants={fadeUp}
              className="text-xl sm:text-2xl font-medium text-slate-400 mb-6 flex items-center justify-center lg:justify-start gap-2"
            >
              Frontend Developer{" "}
              <span className="hidden sm:inline text-slate-600">|</span>{" "}
              <MapPin className="w-5 h-5 text-slate-500" /> India
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              Results-driven developer with hands-on experience building
              responsive, scalable, and high-performance web applications using
              React.js, JavaScript, and Tailwind CSS. Committed to writing clean
              code and delivering user-focused digital products.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#projects"
                className="group flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-900 bg-slate-100 rounded-lg hover:bg-white transition-colors duration-200 w-full sm:w-auto"
              >
                View Projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              
              <a
                href="https://drive.google.com/file/d/16y6Z5P4me6FD8MdwgpIGYRHO4qo17-EL/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-300 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 hover:text-white transition-colors duration-200 w-full sm:w-auto"
              >
                <Download className="mr-2 w-4 h-4" />
                Resume
              </a>

              <div className="flex items-center gap-4 ml-0 sm:ml-4 mt-4 sm:mt-0">
                <a
                  href="https://github.com/mukundjha728-dotcom"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-white transition-colors p-2"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com/in/mukundjha01"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors p-2"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:mukundjha728@gmail.com"
                  className="text-slate-400 hover:text-white transition-colors p-2"
                  aria-label="Email"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Professional Image Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="order-1 lg:order-2 lg:col-span-5 flex justify-center items-center relative"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px]">
              {/* Subtle background element instead of rotating disco lights */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-cyan-500/20 rounded-3xl rotate-6 blur-lg"></div>

              <div className="relative w-full h-full rounded-3xl bg-slate-800 border border-slate-700 overflow-hidden shadow-2xl">
                <img
                  src="/MukundJhaPortfolio.jpeg"
                  alt="Mukund Kumar Jha"
                  className="w-full h-full object-cover object-top grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                />

                {/* Tech Stack Overlay styling */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent">
                  <div className="flex justify-center gap-3">
                    <span className="px-2 py-1 bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded text-xs font-mono text-cyan-400">
                      React.js
                    </span>
                    <span className="px-2 py-1 bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded text-xs font-mono text-indigo-400">
                      Tailwind
                    </span>
                    <span className="px-2 py-1 bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded text-xs font-mono text-yellow-400">
                      JS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

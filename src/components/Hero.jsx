import React, { useState, useEffect } from "react";
import { Mail, ArrowRight, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Pro-level simulated loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // 100% hone ke baad thoda pause dekar screen remove karenge
          setTimeout(() => setIsLoading(false), 600);
          return 100;
        }
        // Random speed me progress badhega ek realistic feel ke liye
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  // Hero Section Animations
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.8, // Loader hatne ke baad text animate hoga
      },
    },
  };

  // Metallic Gold Gradient Reusable Class
  const goldGradientText =
    "bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728] bg-clip-text text-transparent";

  return (
    <>
      {/* =========================================
          PRO-LEVEL PRELOADER (Dark Premium Theme)
      ========================================= */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            exit={{
              y: "-100vh",
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
            }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-white overflow-hidden"
          >
            {/* Background minimal glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#bf953f]/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 w-full max-w-sm px-8">
              <div className="flex justify-between items-end mb-2">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-sm font-medium tracking-[0.3em] text-[#b38728] uppercase"
                >
                  System Initializing
                </motion.span>
                <span className="text-4xl font-light text-white font-mono">
                  {progress}%
                </span>
              </div>

              {/* Glowing Progress Bar */}
              <div className="h-[2px] w-full bg-slate-800 rounded-full overflow-hidden relative">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728] shadow-[0_0_15px_rgba(191,149,63,0.5)]"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "linear", duration: 0.2 }}
                />
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: progress === 100 ? 1 : 0 }}
                className="mt-4 text-right text-xs text-[#fcf6ba] font-mono"
              >
                Welcome, Mukund.
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================
          MAIN HERO SECTION (Premium Dark Mode)
      ========================================= */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden bg-[#0a0f1a]" // Deep dark premium blue-black background
      >
        {/* Abstract Background Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-[10%] left-[5%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px]" />
          <div className="absolute top-[30%] right-[5%] w-[30%] h-[50%] rounded-full bg-[#bf953f]/10 blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Side: Text Content Area */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="order-2 lg:order-1 flex flex-col justify-center text-center lg:text-left"
            >
              <motion.div
                variants={fadeUp}
                className="flex justify-center lg:justify-start mb-6"
              >
                {/* Premium Badge */}
                <span className="px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-[#bf953f]/30 flex items-center gap-2 shadow-[0_0_15px_rgba(191,149,63,0.1)]">
                  <Sparkles className="w-4 h-4 text-[#fcf6ba]" />
                  <span className="text-[#fcf6ba] font-medium text-sm tracking-wide">
                    Welcome to my portfolio
                  </span>
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight ${goldGradientText}`}
              >
                <span className="text-white">Hi, I'm</span>{" "}
                <br className="hidden lg:block" />
                Mukund Kumar Jha
              </motion.h1>

              <motion.h2
                variants={fadeUp}
                className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#d4af37] mb-6"
              >
                Frontend Developer
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="text-base sm:text-lg text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
              >
                I build responsive, scalable, and user-focused web applications.
                Passionate about modern web technologies like React.js and
                Tailwind CSS, committed to delivering high-quality digital
                products.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6"
              >
                <a
                  href="#projects"
                  className="group flex items-center justify-center px-8 py-3.5 text-base font-medium text-[#fcf6ba] bg-[#0f172a] border border-[#bf953f]/40 rounded-full hover:bg-[#1e293b] hover:shadow-[0_0_20px_rgba(191,149,63,0.2)] transition-all duration-300 w-full sm:w-auto active:scale-95"
                >
                  View Projects
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                </a>

                <div className="flex items-center gap-5">
                  <a
                    href="https://github.com/mukundjha728-dotcom"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 text-[#d4af37] bg-white/5 border border-[#bf953f]/30 rounded-full hover:bg-[#bf953f]/10 hover:text-[#fcf6ba] transition-all duration-300 hover:-translate-y-1"
                  >
                    <span className="sr-only">GitHub</span>
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/mukundjha01"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 text-[#d4af37] bg-white/5 border border-[#bf953f]/30 rounded-full hover:bg-[#bf953f]/10 hover:text-[#fcf6ba] transition-all duration-300 hover:-translate-y-1"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:mukundjha728@gmail.com"
                    className="p-3 text-[#d4af37] bg-white/5 border border-[#bf953f]/30 rounded-full hover:bg-[#bf953f]/10 hover:text-[#fcf6ba] transition-all duration-300 hover:-translate-y-1"
                  >
                    <span className="sr-only">Email</span>
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side: Image Area */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={!isLoading ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              className="order-1 lg:order-2 flex justify-center items-center relative"
            >
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px]">
                {/* Premium Rotating Background Glow */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#bf953f] via-[#0a0f1a] to-[#b38728] blur-2xl opacity-30"
                ></motion.div>

                {/* Profile Image with Thin Gold Gradient Border */}
                <div className="relative w-full h-full rounded-full p-[3px] bg-gradient-to-tr from-[#bf953f] via-[#fcf6ba] to-[#b38728] shadow-[0_0_30px_rgba(191,149,63,0.3)]">
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
                    <img
                      src="/MukundJhaPortfolio.jpeg"
                      alt="Mukund Kumar Jha"
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Floating Badge (Dark Premium) */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={!isLoading ? { y: [0, -8, 0], opacity: 1 } : {}}
                  transition={{
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    opacity: { duration: 0.5, delay: 1.2 },
                  }}
                  className="absolute bottom-4 -left-4 sm:bottom-8 sm:-left-8 bg-[#0f172a] px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-[#bf953f]/30 flex items-center gap-3 z-20 backdrop-blur-md"
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="font-medium text-slate-200 text-xs sm:text-sm whitespace-nowrap">
                    Open to Work
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Scroll Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    // Yahan pb-32 kar diya hai taaki mobile mein aur zyada jagah mile
    <footer className="bg-slate-950 relative overflow-hidden pt-16 pb-60 md:pb-12 border-t border-slate-800 font-sans">
      {/* Subtle Neon Background Glow at the bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-cyan-600/10 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        {/* Top Section: Logo & Tagline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex flex-col items-center"
        >
          {/* Logo Image */}
          <img
            src="/Logo.png"
            alt="Mukund Jha Logo"
            className="h-16 md:h-20 w-auto mb-6 drop-shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:scale-105 transition-transform duration-500"
          />

          <p className="text-slate-400 text-center max-w-md mb-8 font-medium text-sm sm:text-base leading-relaxed">
            Crafting premium digital experiences through clean code, modern web
            technologies, and elegant design.
          </p>

          {/* Social Links */}
          <div className="flex space-x-5 mb-12">
            <a
              href="https://github.com/mukundjha728-dotcom"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-cyan-950/30 border border-cyan-800/50 text-cyan-400 rounded-full shadow-inner hover:bg-cyan-900/50 hover:border-cyan-400/50 hover:text-cyan-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://linkedin.com/in/mukundjha01"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-cyan-950/30 border border-cyan-800/50 text-cyan-400 rounded-full shadow-inner hover:bg-cyan-900/50 hover:border-cyan-400/50 hover:text-cyan-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="mailto:mukundjha728@gmail.com"
              className="p-3 bg-cyan-950/30 border border-cyan-800/50 text-cyan-400 rounded-full shadow-inner hover:bg-cyan-900/50 hover:border-cyan-400/50 hover:text-cyan-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300"
              aria-label="Send an Email"
            >
              <FaEnvelope size={22} />
            </a>
          </div>
        </motion.div>

        {/* Elegant Tech Divider */}
        <div className="w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-8"></div>

        {/* Bottom Section: Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-col items-center text-center pb-6" /* Yahan pb-6 add kiya hai safe area ke liye */
        >
          <p className="text-slate-500 text-sm font-medium mb-2 tracking-wide">
            © {currentYear} Mukund Kumar Jha. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs flex items-center justify-center font-mono font-semibold tracking-wide">
            Built with React
            <FaHeart size={14} className="mx-2 text-cyan-500 animate-pulse" />&
            Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

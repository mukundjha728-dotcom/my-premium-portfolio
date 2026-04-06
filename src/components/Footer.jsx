import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, Heart } from "lucide-react";
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
    <footer className="bg-[#0a0f1a] relative overflow-hidden pt-16 pb-8 border-t border-[#bf953f]/20">
      {/* Subtle Background Glow at the bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#bf953f]/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        {/* Top Section: Logo & Tagline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex flex-col items-center"
        >
          {/* Logo Image from Public Folder - Size Increased Here */}
          <img
            src="/Logo.png"
            alt="Mukund Jha Logo"
            className="h-24 md:h-28 w-auto mb-6 drop-shadow-[0_0_15px_rgba(191,149,63,0.4)] hover:scale-105 transition-transform duration-500"
          />

          <p className="text-slate-400 text-center max-w-md mb-8 font-light text-sm sm:text-base leading-relaxed">
            Crafting premium digital experiences through clean code, modern web
            technologies, and elegant design.
          </p>

          {/* Social Links */}
          <div className="flex space-x-5 mb-12">
            <a
              href="https://github.com/mukundjha728-dotcom"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-[#0a0f1a]/50 border border-[#bf953f]/30 text-[#d4af37] rounded-full shadow-inner hover:border-[#fcf6ba] hover:text-[#fcf6ba] hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(191,149,63,0.3)] transition-all duration-300"
            >
              <span className="sr-only">GitHub</span>
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/mukundjha01"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-[#0a0f1a]/50 border border-[#bf953f]/30 text-[#d4af37] rounded-full shadow-inner hover:border-[#fcf6ba] hover:text-[#fcf6ba] hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(191,149,63,0.3)] transition-all duration-300"
            >
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:mukundjha728@gmail.com"
              className="p-3 bg-[#0a0f1a]/50 border border-[#bf953f]/30 text-[#d4af37] rounded-full shadow-inner hover:border-[#fcf6ba] hover:text-[#fcf6ba] hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(191,149,63,0.3)] transition-all duration-300"
            >
              <span className="sr-only">Email</span>
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        {/* Elegant Divider */}
        <div className="w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-[#bf953f]/30 to-transparent mb-8"></div>

        {/* Bottom Section: Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          <p className="text-slate-500 text-sm font-light mb-2 tracking-wide">
            © {currentYear} Mukund Kumar Jha. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs flex items-center justify-center font-mono">
            Built with React
            <Heart size={12} className="mx-1.5 text-[#bf953f] fill-[#bf953f]" />
            & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

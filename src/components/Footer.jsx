import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <footer className="bg-[#f4f1ea] relative overflow-hidden pt-16 pb-60 md:pb-12 border-t-8 border-slate-900 font-['Old_Standard_TT']">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        {/* Top Section: Logo & Tagline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex flex-col items-center"
        >
          <div className="flex-shrink-0 flex items-center mb-6 border-4 border-slate-900 p-2 shadow-[4px_4px_0_0_rgba(15,23,42,1)] bg-white transform rotate-2">
            <span className="font-['Playfair_Display'] font-black text-4xl tracking-tighter uppercase text-slate-900">
              MKJ.
            </span>
          </div>

          <p className="text-slate-900 text-center max-w-md mb-8 font-bold text-sm sm:text-base leading-relaxed italic border-y-2 border-slate-900 py-4 uppercase tracking-widest">
            "Crafting premium digital experiences through clean code, modern web
            technologies, and classic design."
          </p>

          {/* Social Links */}
          <div className="flex space-x-6 mb-12">
            <a
              href="https://github.com/mukundjha728-dotcom"
              target="_blank"
              rel="noreferrer"
              className="p-4 bg-slate-900 text-[#f4f1ea] rounded-none shadow-[4px_4px_0_0_rgba(15,23,42,1)] hover:bg-white hover:text-slate-900 border-2 border-slate-900 hover:-translate-y-1 transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/mukundjha01"
              target="_blank"
              rel="noreferrer"
              className="p-4 bg-slate-900 text-[#f4f1ea] rounded-none shadow-[4px_4px_0_0_rgba(15,23,42,1)] hover:bg-white hover:text-slate-900 border-2 border-slate-900 hover:-translate-y-1 transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:mukundjha728@gmail.com"
              className="p-4 bg-slate-900 text-[#f4f1ea] rounded-none shadow-[4px_4px_0_0_rgba(15,23,42,1)] hover:bg-white hover:text-slate-900 border-2 border-slate-900 hover:-translate-y-1 transition-all duration-300"
              aria-label="Send an Email"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </motion.div>

        {/* Elegant Tech Divider */}
        <div className="w-full max-w-3xl h-px bg-slate-900 mb-8 border-b-2 border-slate-900 border-dashed"></div>

        {/* Bottom Section: Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-col items-center text-center pb-6"
        >
          <p className="text-slate-900 text-sm font-bold mb-2 tracking-wide uppercase">
            © {currentYear} Mukund Kumar Jha. All rights reserved.
          </p>
          <p className="text-slate-700 text-xs flex items-center justify-center font-bold tracking-wide italic">
            Printed with React
            <FaHeart size={14} className="mx-2 text-slate-900" /> &
            Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

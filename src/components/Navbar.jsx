import React, { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 top-0 transition-all duration-300 ${
        scrolled
          ? "bg-[#020817]/80 backdrop-blur-lg border-b border-slate-800/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo / Brand Name - Size Reduced & Optimized */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="group flex items-center gap-2">
              <img
                src="/Logo.png"
                alt="Mukund Jha"
                // Size thik kar diya: h-8 for mobile, h-9 for desktop
                className="h-8 md:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              />
              {/* Optional: Agar logo me text nahi hai, toh text add kar sakte ho */}
              {/* <span className="text-slate-200 font-semibold tracking-tight text-lg hidden sm:block group-hover:text-white transition-colors">Mukund.</span> */}
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}

            {/* Resume Call-to-Action Button (Clean SaaS Style) */}
            <a
              href="https://drive.google.com/file/d/16y6Z5P4me6FD8MdwgpIGYRHO4qo17-EL/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 font-medium border border-indigo-500/20 hover:bg-indigo-500 hover:text-white hover:border-indigo-500 transition-all duration-200 text-sm"
            >
              <FileText className="w-4 h-4" />
              Resume
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 -mr-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 w-full bg-[#020817] border-b border-slate-800 shadow-xl"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 pb-2 px-4">
                <a
                  href="https://drive.google.com/file/d/16y6Z5P4me6FD8MdwgpIGYRHO4qo17-EL/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  View Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

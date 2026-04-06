import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect ke liye
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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
      className={`fixed w-full z-50 top-0 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0f1a]/85 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-[#bf953f]/20 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo / Brand Name */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <a href="#home">
              <img
                src="/Logo.png"
                alt="Mukund Jha Logo"
                className={`w-auto transition-all duration-300 drop-shadow-[0_0_10px_rgba(191,149,63,0.3)] hover:scale-105 ${scrolled ? "h-10 md:h-12" : "h-12 md:h-16"}`}
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-[#fcf6ba] font-medium transition-colors duration-300 relative group tracking-wide text-sm uppercase"
              >
                {link.name}
                {/* Underline Hover Effect (Gold) */}
                <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-gradient-to-r from-[#bf953f] to-[#fcf6ba] transition-all duration-300 group-hover:w-full rounded-full shadow-[0_0_8px_rgba(191,149,63,0.6)]"></span>
              </a>
            ))}

            {/* Resume Call-to-Action Button */}
            <a
              href="https://drive.google.com/file/d/16y6Z5P4me6FD8MdwgpIGYRHO4qo17-EL/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-2.5 rounded-full bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728] text-[#0a0f1a] font-bold shadow-[0_0_15px_rgba(191,149,63,0.3)] hover:shadow-[0_0_25px_rgba(191,149,63,0.5)] hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-[#fcf6ba] focus:outline-none transition-colors"
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute w-full bg-[#0a0f1a]/95 backdrop-blur-xl border-t border-[#bf953f]/20 shadow-2xl overflow-hidden"
          >
            <div className="px-4 py-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-sm font-semibold text-slate-300 hover:text-[#fcf6ba] hover:bg-[#bf953f]/10 rounded-xl transition-all uppercase tracking-widest border border-transparent hover:border-[#bf953f]/20"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-6 px-4">
                <a
                  href="https://drive.google.com/file/d/YOUR_DRIVE_FILE_ID/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728] text-[#0a0f1a] font-bold shadow-[0_0_15px_rgba(191,149,63,0.4)] hover:shadow-[0_0_20px_rgba(191,149,63,0.6)] transition-all"
                >
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

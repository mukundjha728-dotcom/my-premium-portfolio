import React from "react";
import { Mail, ArrowRight, Download, MapPin, Terminal } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#f4f1ea] text-slate-900 pt-24 pb-12 px-4 sm:px-6 lg:px-8 flex justify-center font-['Old_Standard_TT'] relative overflow-hidden"
    >
      {/* Paper texture overlay */}
      <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-multiply" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')" }}></div>

      <div className="max-w-6xl w-full mx-auto relative z-10 flex flex-col">

        {/* Masthead */}
        <header className="border-b-4 border-slate-900 pb-4 mb-6 flex flex-col items-center justify-center text-center">
          <div className="flex justify-between w-full uppercase text-xs sm:text-sm font-bold tracking-widest border-b border-slate-900 pb-2 mb-4">
            <span>Vol 1. No. 1</span>
            <span>{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span>Edition 1</span>
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-['Playfair_Display'] tracking-tighter uppercase mb-2">
            The Daily Dev
          </h1>
          <p className="text-sm sm:text-lg italic font-['Playfair_Display'] border-y border-slate-900 py-1 w-full max-w-2xl mx-auto uppercase tracking-widest">
            "You can make coding look easy"
          </p>
        </header>

        {/* Headlines */}
        <div className="text-center mb-8 border-b-2 border-slate-900 pb-6">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold font-['Playfair_Display'] uppercase leading-none mb-4">
            Mukund Kumar Jha
          </h2>
          <h3 className="text-xl sm:text-3xl font-bold uppercase tracking-widest border-t-2 border-slate-900 pt-4 mt-2 max-w-4xl mx-auto">
            MERN-Stack Web Developer Ready for Action
          </h3>
        </div>

        {/* Content Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

          {/* Left Column (Text) */}
          <div className="md:col-span-3 text-justify space-y-4 text-base sm:text-lg leading-relaxed">
            <p>
              <span className="float-left text-6xl leading-none font-['Playfair_Display'] pr-2 pt-2 font-bold">R</span>esults-driven developer with hands-on experience building scalable and full-stack web applications using MongoDB, Express.js, React.js, and Node.js.
            </p>
            <p>
              Committed to writing clean code and delivering user-focused digital products. Based in India, always ready for global opportunities and challenging projects that push the boundaries of modern web development.
            </p>
            <div className="mt-6 border-t border-slate-400 pt-4">
              <span className="block font-bold uppercase mb-2 text-sm">Status Update:</span>
              <span className="inline-block px-3 py-1 border border-slate-900 text-xs font-bold uppercase tracking-wider">Available for Hire</span>
            </div>
          </div>

          {/* Center Column (Image) */}
          <div className="md:col-span-6 flex flex-col items-center border-x-0 md:border-x border-slate-400 md:px-6">
            <div className="w-full relative bg-slate-200 border-2 border-slate-900 p-2 transform rotate-1 hover:rotate-0 transition-transform duration-500 shadow-[8px_8px_0_0_rgba(15,23,42,1)]">
              <img
                src="/MukundJhaPortfolio.jpeg"
                alt="Mukund Kumar Jha"
                className="w-full h-auto object-cover grayscale contrast-125 sepia-[0.2]"
              />
              <div className="absolute -bottom-4 right-4 bg-[#f4f1ea] border-2 border-slate-900 px-3 py-1 font-bold font-['Playfair_Display'] text-sm shadow-[4px_4px_0_0_rgba(15,23,42,1)]">
                Figure 1: The Developer
              </div>
            </div>
            <p className="mt-8 text-sm italic text-center w-full max-w-md mx-auto px-4">
              "Building modern web applications with a classic touch. Focusing on performance, accessibility, and clean architecture."
            </p>
          </div>

          {/* Right Column (Sidebar/Links) */}
          <div className="md:col-span-3 space-y-6">
            <div className="border-4 border-slate-900 p-4 shadow-[4px_4px_0_0_rgba(15,23,42,1)] bg-white">
              <h4 className="font-['Playfair_Display'] font-black text-xl uppercase mb-4 text-center border-b-2 border-slate-900 pb-2">
                Quick Links
              </h4>
              <div className="flex flex-col gap-3">
                <a
                  href="#projects"
                  className="flex items-center justify-between border-b border-slate-400 pb-2 hover:bg-slate-900 hover:text-[#f4f1ea] transition-colors px-2 uppercase font-bold text-sm group"
                >
                  View Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="https://drive.google.com/file/d/16y6Z5P4me6FD8MdwgpIGYRHO4qo17-EL/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between border-b border-slate-400 pb-2 hover:bg-slate-900 hover:text-[#f4f1ea] transition-colors px-2 uppercase font-bold text-sm group"
                >
                  Resume PDF <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="border-2 border-slate-900 p-4 text-center bg-slate-900 text-[#f4f1ea] shadow-[4px_4px_0_0_rgba(15,23,42,0.5)] hover:scale-[1.02] transition-transform">
              <h4 className="font-['Playfair_Display'] font-bold text-lg uppercase mb-4 tracking-widest">
                Connect
              </h4>
              <div className="flex justify-center gap-6">
                <a
                  href="https://github.com/mukundjha728-dotcom"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gray-400 transition-colors"
                >
                  <FaGithub className="w-7 h-7" />
                </a>
                <a
                  href="https://linkedin.com/in/mukundjha01"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gray-400 transition-colors"
                >
                  <FaLinkedin className="w-7 h-7" />
                </a>
                <a
                  href="mailto:mukundjha728@gmail.com"
                  className="hover:text-gray-400 transition-colors"
                >
                  <Mail className="w-7 h-7" />
                </a>
              </div>
            </div>

            <div className="text-center p-4 border-2 border-dashed border-slate-900 bg-slate-100/50">
              <MapPin className="w-6 h-6 mx-auto mb-2 text-slate-700" />
              <p className="font-bold uppercase text-sm tracking-wider">Location</p>
              <p className="italic font-['Playfair_Display'] text-lg">India</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import {
  Briefcase,
  GraduationCap,
  BadgeCheck,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Web Developer Intern",
      company: "Graphura India Private Limited",
      duration: "Dec 2025 - March 2026",
      points: [
        "Developed responsive and high-performance user interfaces using React.js, JavaScript, HTML, and CSS.",
        "Built reusable components that improved development speed and maintainability.",
        "Collaborated with team members to deliver production-ready features.",
        "Optimized applications for mobile responsiveness and faster load times.",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Maharshi Dayanand University (MDU)",
      duration: "2023 - 2026",
    },
  ];

  const skills = [
    { category: "Frameworks & Libraries", items: ["React.js", "Tailwind CSS"] },
    { category: "Languages", items: ["JavaScript", "HTML5", "CSS3"] },
    {
      category: "Core Concepts",
      items: [
        "Responsive Design",
        "Component-Based Architecture",
        "Web Performance Optimization",
      ],
    },
    { category: "Tools", items: ["Git", "GitHub", "VS Code"] },
  ];

  // Metallic Gold Gradient Reusable Class (Same as Hero)
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
      id="experience"
      className="py-20 bg-[#0a0f1a] relative overflow-hidden"
    >
      {/* Abstract Background Glow (Subtle) */}
      <div className="absolute top-1/4 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-[#bf953f]/5 blur-[120px]" />
        <div className="absolute bottom-[10%] -right-[5%] w-[30%] h-[40%] rounded-full bg-[#bf953f]/10 blur-[150px]" />
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
            Experience & <span className={goldGradientText}>Skills</span>
          </h2>
          <p className="text-lg text-slate-400 font-light">
            My professional journey and the technical tools I use to bring ideas
            to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: Timeline (Experience & Education) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="space-y-12"
          >
            {/* Work Experience */}
            <div>
              <motion.div
                variants={fadeUp}
                className="flex items-center space-x-4 mb-8"
              >
                <div className="p-3 bg-white/5 border border-[#bf953f]/30 rounded-xl text-[#d4af37] shadow-[0_0_15px_rgba(191,149,63,0.1)]">
                  <Briefcase size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Work Experience
                </h3>
              </motion.div>

              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[1.15rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#bf953f] before:via-[#bf953f]/30 before:to-transparent">
                {experiences.map((exp, index) => (
                  <motion.div
                    variants={fadeUp}
                    key={index}
                    className="relative flex items-start space-x-4 mb-8"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-0 mt-1.5 w-3.5 h-3.5 ml-[1.15rem] -translate-x-1/2 bg-[#0a0f1a] border-[3px] border-[#d4af37] rounded-full shadow-[0_0_10px_rgba(191,149,63,0.8)]"></div>

                    {/* Experience Card */}
                    <div className="pl-10 w-full">
                      <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-[#bf953f]/20 shadow-lg hover:border-[#bf953f]/50 hover:shadow-[0_0_25px_rgba(191,149,63,0.15)] transition-all duration-300 group">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                          <h4 className="text-xl font-bold text-white group-hover:text-[#fcf6ba] transition-colors">
                            {exp.title}
                          </h4>
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#bf953f]/10 text-[#fcf6ba] border border-[#bf953f]/30 mt-2 sm:mt-0 whitespace-nowrap shadow-inner">
                            {exp.duration}
                          </span>
                        </div>
                        <p className="text-[#d4af37] font-medium mb-4">
                          {exp.company}
                        </p>
                        <ul className="space-y-3">
                          {exp.points.map((point, i) => (
                            <li key={i} className="flex items-start">
                              <ChevronRight className="w-4 h-4 text-[#bf953f] mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-300 text-sm font-light leading-relaxed">
                                {point}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="pt-4">
              <motion.div
                variants={fadeUp}
                className="flex items-center space-x-4 mb-8"
              >
                <div className="p-3 bg-white/5 border border-[#bf953f]/30 rounded-xl text-[#d4af37] shadow-[0_0_15px_rgba(191,149,63,0.1)]">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </motion.div>

              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[1.15rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#bf953f] before:via-[#bf953f]/30 before:to-transparent">
                {education.map((edu, index) => (
                  <motion.div
                    variants={fadeUp}
                    key={index}
                    className="relative flex items-start space-x-4"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-0 mt-1.5 w-3.5 h-3.5 ml-[1.15rem] -translate-x-1/2 bg-[#0a0f1a] border-[3px] border-[#d4af37] rounded-full shadow-[0_0_10px_rgba(191,149,63,0.8)]"></div>

                    {/* Education Card */}
                    <div className="pl-10 w-full">
                      <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-[#bf953f]/20 shadow-lg hover:border-[#bf953f]/50 hover:shadow-[0_0_25px_rgba(191,149,63,0.15)] transition-all duration-300 group">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                          <h4 className="text-xl font-bold text-white group-hover:text-[#fcf6ba] transition-colors">
                            {edu.degree}
                          </h4>
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#bf953f]/10 text-[#fcf6ba] border border-[#bf953f]/30 mt-2 sm:mt-0 whitespace-nowrap shadow-inner">
                            {edu.duration}
                          </span>
                        </div>
                        <p className="text-[#d4af37] font-medium">
                          {edu.institution}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-[#bf953f]/20 shadow-[0_10px_30px_rgba(0,0,0,0.4)] sticky top-28">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <BadgeCheck className="text-[#d4af37] mr-3" size={28} />
                Technical Expertise
              </h3>

              <div className="space-y-8">
                {skills.map((skillGroup, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <h4 className="text-xs font-semibold text-[#b38728] uppercase tracking-wider mb-4">
                      {skillGroup.category}
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {skillGroup.items.map((skill, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-[#0a0f1a]/50 border border-[#bf953f]/30 rounded-xl text-slate-300 font-medium shadow-sm hover:border-[#fcf6ba] hover:text-[#fcf6ba] hover:shadow-[0_0_15px_rgba(191,149,63,0.3)] hover:-translate-y-1 transition-all duration-300 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

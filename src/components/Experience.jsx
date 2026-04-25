import React from "react";
import {
  Briefcase,
  GraduationCap,
  Terminal,
  Code2,
  ChevronRight,
  MonitorSmartphone,
  Cpu,
  Database,
} from "lucide-react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "MERN Stack Developer Intern",
      company: "Athenura",
      duration: "April 2026 - Present",
      points: [
        "Developing scalable and robust full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
        "Collaborating with the team to design and deploy RESTful APIs and modern user interfaces.",
        "Enhancing database architecture and optimizing backend performance.",
      ],
    },
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
    {
      category: "Frameworks & Libraries",
      icon: <Code2 size={16} />,
      items: ["React.js", "Node.js", "Express.js", "Tailwind CSS"],
    },
    {
      category: "Databases",
      icon: <Database size={16} />,
      items: ["MongoDB", "Mongoose"],
    },
    {
      category: "Languages",
      icon: <Terminal size={16} />,
      items: ["JavaScript", "HTML5", "CSS3"],
    },
    {
      category: "Core Concepts",
      icon: <MonitorSmartphone size={16} />,
      items: [
        "RESTful APIs",
        "Component-Based Architecture",
        "Web Performance Optimization",
      ],
    },
    {
      category: "Tools",
      icon: <Cpu size={16} />,
      items: ["Git", "GitHub", "VS Code", "Postman"],
    },
  ];

  // Professional Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <section
      id="experience"
      className="py-24 bg-[#020817] relative border-t border-slate-800/50" // Syncs with the slate-950 theme
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Experience & <span className="text-indigo-400">Skills</span>
          </h2>
          <p className="text-base text-slate-400">
            My professional journey and the technical tools I use to build
            scalable web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left Column: Timeline (Experience & Education) - Takes 7 columns */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="lg:col-span-7 space-y-12"
          >
            {/* Work Experience */}
            <div>
              <motion.div
                variants={fadeUp}
                className="flex items-center gap-3 mb-8"
              >
                <div className="p-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-indigo-400">
                  <Briefcase size={20} />
                </div>
                <h3 className="text-2xl font-semibold text-slate-100">
                  Work Experience
                </h3>
              </motion.div>

              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[1.2rem] md:before:translate-x-0 before:h-full before:w-px before:bg-slate-800">
                {experiences.map((exp, index) => (
                  <motion.div
                    variants={fadeUp}
                    key={index}
                    className="relative flex items-start gap-4 mb-8"
                  >
                    {/* Timeline Dot (Subtle Ring) */}
                    <div className="absolute left-0 mt-2 w-3 h-3 ml-[1.2rem] -translate-x-1/2 bg-[#020817] ring-4 ring-slate-800 rounded-full border-2 border-indigo-500"></div>

                    {/* Experience Card */}
                    <div className="pl-10 w-full">
                      <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors group">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                          <h4 className="text-lg font-semibold text-slate-200 group-hover:text-indigo-300 transition-colors">
                            {exp.title}
                          </h4>
                          <span className="inline-flex items-center px-2.5 py-1 rounded text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700 mt-2 sm:mt-0 whitespace-nowrap">
                            {exp.duration}
                          </span>
                        </div>
                        <p className="text-indigo-400/80 text-sm font-medium mb-4">
                          {exp.company}
                        </p>
                        <ul className="space-y-2.5">
                          {exp.points.map((point, i) => (
                            <li
                              key={i}
                              className="flex items-start text-sm text-slate-400"
                            >
                              <ChevronRight className="w-4 h-4 text-slate-600 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="leading-relaxed">{point}</span>
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
                className="flex items-center gap-3 mb-8"
              >
                <div className="p-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-cyan-400">
                  <GraduationCap size={20} />
                </div>
                <h3 className="text-2xl font-semibold text-slate-100">
                  Education
                </h3>
              </motion.div>

              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[1.2rem] md:before:translate-x-0 before:h-full before:w-px before:bg-slate-800">
                {education.map((edu, index) => (
                  <motion.div
                    variants={fadeUp}
                    key={index}
                    className="relative flex items-start gap-4"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-0 mt-2 w-3 h-3 ml-[1.2rem] -translate-x-1/2 bg-[#020817] ring-4 ring-slate-800 rounded-full border-2 border-cyan-500"></div>

                    {/* Education Card */}
                    <div className="pl-10 w-full">
                      <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                          <h4 className="text-base font-semibold text-slate-200">
                            {edu.degree}
                          </h4>
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-800 text-slate-400 mt-2 sm:mt-0 whitespace-nowrap">
                            {edu.duration}
                          </span>
                        </div>
                        <p className="text-cyan-400/80 text-sm font-medium">
                          {edu.institution}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Skills Grid - Takes 5 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="bg-slate-900/30 border border-slate-800/80 rounded-2xl p-6 lg:sticky lg:top-28">
              <div className="mb-6 pb-4 border-b border-slate-800/50">
                <h3 className="text-xl font-semibold text-slate-100">
                  Technical Arsenal
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Tools and technologies I work with.
                </p>
              </div>

              <div className="space-y-6">
                {skills.map((skillGroup, index) => (
                  <div key={index}>
                    <h4 className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-3">
                      <span className="text-indigo-400/70">
                        {skillGroup.icon}
                      </span>
                      {skillGroup.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-slate-800/50 border border-slate-700/50 rounded-md text-slate-300 text-xs font-medium hover:bg-slate-700 hover:text-white transition-colors cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
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

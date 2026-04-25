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
      className="py-24 bg-[#f4f1ea] relative border-t-4 border-slate-900 font-['Old_Standard_TT']"
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
          <h2 className="text-3xl md:text-4xl font-black font-['Playfair_Display'] text-slate-900 mb-4 uppercase">
            Experience AND <span className="text-slate-600">Skills</span>
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
                <div className="p-2.5 bg-slate-900 border border-slate-900 rounded-lg text-[#f4f1ea]">
                  <Briefcase size={20} />
                </div>
                <h3 className="text-2xl font-black font-['Playfair_Display'] text-slate-900 uppercase">
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
                    <div className="absolute left-0 mt-2 w-3 h-3 ml-[1.2rem] -translate-x-1/2 bg-slate-900 ring-4 ring-[#f4f1ea] rounded-full border-2 border-slate-900"></div>

                    {/* Experience Card */}
                    <div className="pl-10 w-full">
                      <div className="p-6 rounded-none bg-transparent border-2 border-slate-900 hover:bg-slate-200 transition-colors group shadow-[4px_4px_0_0_rgba(15,23,42,1)]">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                          <h4 className="text-lg font-bold font-['Playfair_Display'] text-slate-900 group-hover:text-slate-700 transition-colors uppercase">
                            {exp.title}
                          </h4>
                          <span className="inline-flex items-center px-2.5 py-1 text-xs font-bold bg-slate-900 text-[#f4f1ea] border border-slate-900 mt-2 sm:mt-0 whitespace-nowrap uppercase">
                            {exp.duration}
                          </span>
                        </div>
                        <p className="text-slate-700 text-sm font-bold mb-4 italic">
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
                <div className="p-2.5 bg-slate-900 border border-slate-900 rounded-lg text-[#f4f1ea]">
                  <GraduationCap size={20} />
                </div>
                <h3 className="text-2xl font-black font-['Playfair_Display'] text-slate-900 uppercase">
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
                    <div className="absolute left-0 mt-2 w-3 h-3 ml-[1.2rem] -translate-x-1/2 bg-slate-900 ring-4 ring-[#f4f1ea] rounded-full border-2 border-slate-900"></div>

                    {/* Education Card */}
                    <div className="pl-10 w-full">
                      <div className="p-5 rounded-none bg-transparent border-2 border-slate-900 hover:bg-slate-200 transition-colors shadow-[4px_4px_0_0_rgba(15,23,42,1)]">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                          <h4 className="text-base font-bold font-['Playfair_Display'] text-slate-900 uppercase">
                            {edu.degree}
                          </h4>
                          <span className="inline-flex items-center px-2 py-0.5 text-xs font-bold bg-slate-900 text-[#f4f1ea] mt-2 sm:mt-0 whitespace-nowrap uppercase">
                            {edu.duration}
                          </span>
                        </div>
                        <p className="text-slate-700 text-sm font-bold italic">
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
            <div className="bg-transparent border-2 border-slate-900 rounded-none p-6 lg:sticky lg:top-28 shadow-[8px_8px_0_0_rgba(15,23,42,1)]">
              <div className="mb-6 pb-4 border-b-2 border-slate-900">
                <h3 className="text-xl font-black font-['Playfair_Display'] text-slate-900 uppercase">
                  Technical Arsenal
                </h3>
                <p className="text-sm text-slate-700 mt-1 italic">
                  Tools and technologies I work with.
                </p>
              </div>

              <div className="space-y-6">
                {skills.map((skillGroup, index) => (
                  <div key={index}>
                    <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">
                      <span className="text-slate-900">
                        {skillGroup.icon}
                      </span>
                      {skillGroup.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-transparent border border-slate-900 text-slate-900 text-xs font-bold hover:bg-slate-900 hover:text-[#f4f1ea] transition-colors cursor-default uppercase"
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

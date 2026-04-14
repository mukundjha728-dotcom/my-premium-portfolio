import React, { useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCommentDots,
  FaCheckCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = {
      ...formData,
      access_key: "5433ac65-63bf-43c8-8b46-b90077e35aa9",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => {
          setIsSuccess(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Modern Cyan-to-Purple Gradient Reusable Class
  const techGradientText =
    "bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent";

  // Scroll Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
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
      id="contact"
      className="py-24 bg-slate-950 relative overflow-hidden font-sans"
    >
      {/* Abstract Neon Background Glows */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-cyan-600/10 blur-[120px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[50%] h-[50%] rounded-full bg-purple-700/10 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Let's <span className={techGradientText}>Connect</span>
          </h2>
          <p className="text-lg text-slate-400 font-medium">
            Have a project in mind or want to discuss opportunities? I'd love to
            hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Left Column: Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="lg:col-span-2 space-y-8"
          >
            <motion.div
              variants={fadeUp}
              className="bg-slate-900/40 backdrop-blur-xl p-8 rounded-3xl border border-slate-800 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-slate-100 mb-8">
                Contact Info
              </h3>

              <div className="space-y-8">
                <a
                  href="mailto:mukundjha728@gmail.com"
                  className="flex items-center space-x-5 group"
                >
                  <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-2xl shadow-inner group-hover:border-cyan-400/50 group-hover:text-cyan-300 group-hover:bg-cyan-500/20 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300">
                    <FaEnvelope size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-1.5">
                      Email
                    </p>
                    <p className="text-slate-300 font-medium group-hover:text-cyan-300 transition-colors">
                      mukundjha728@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-center space-x-5 group cursor-default">
                  <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-2xl shadow-inner group-hover:border-cyan-400/50 group-hover:text-cyan-300 group-hover:bg-cyan-500/20 transition-all duration-300">
                    <FaMapMarkerAlt size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-1.5">
                      Location
                    </p>
                    <p className="text-slate-300 font-medium group-hover:text-cyan-300 transition-colors">
                      India
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-3xl text-white shadow-lg border border-slate-800 relative overflow-hidden group"
            >
              {/* Subtle tech glow effect behind card */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                  </span>
                  <h4 className="font-semibold text-lg text-cyan-400">
                    Available for work
                  </h4>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  I'm currently looking for new opportunities as a Frontend
                  Developer.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-3"
          >
            <div className="bg-slate-900/40 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-slate-800 shadow-xl">
              <div className="flex items-center space-x-4 mb-10">
                <FaCommentDots className="text-cyan-400" size={28} />
                <h3 className="text-2xl font-bold text-slate-100">
                  Send me a message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-slate-400 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-slate-950/50 border border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 text-white placeholder-slate-600 transition-all duration-300 shadow-inner"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-slate-400 mb-2"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-slate-950/50 border border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 text-white placeholder-slate-600 transition-all duration-300 shadow-inner"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-slate-400 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-5 py-4 bg-slate-950/50 border border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 text-white placeholder-slate-600 transition-all duration-300 resize-none shadow-inner"
                    placeholder="Hi Mukund, I'd like to talk about..."
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-4 sm:space-y-0 pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`group w-full sm:w-auto flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:shadow-[0_0_25px_rgba(34,211,238,0.35)] transition-all duration-300 ${isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:-translate-y-1"}`}
                  >
                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                    {!isSubmitting && (
                      <FaPaperPlane
                        size={16}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                      />
                    )}
                  </button>

                  {/* Success Message Pop-up */}
                  {isSuccess && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center text-cyan-400 font-semibold"
                    >
                      <FaCheckCircle size={20} className="mr-2" /> Message Sent!
                    </motion.span>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

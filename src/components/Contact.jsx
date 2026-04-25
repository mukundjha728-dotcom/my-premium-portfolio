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
      className="py-24 bg-[#f4f1ea] border-t-4 border-slate-900 relative overflow-hidden font-['Old_Standard_TT'] text-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black font-['Playfair_Display'] text-slate-900 mb-6 tracking-tight uppercase border-b-2 border-slate-900 inline-block pb-2">
            Letters to the Editor
          </h2>
          <p className="text-lg text-slate-700 font-bold italic mt-4">
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
              className="bg-transparent p-8 rounded-none border-2 border-slate-900 shadow-[8px_8px_0_0_rgba(15,23,42,1)]"
            >
              <h3 className="text-2xl font-black font-['Playfair_Display'] text-slate-900 mb-8 uppercase border-b-2 border-slate-900 pb-2 inline-block">
                Contact Details
              </h3>

              <div className="space-y-8">
                <a
                  href="mailto:mukundjha728@gmail.com"
                  className="flex items-center space-x-5 group"
                >
                  <div className="p-4 bg-slate-900 border-2 border-slate-900 text-[#f4f1ea] rounded-none shadow-[2px_2px_0_0_rgba(15,23,42,1)] group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:shadow-[4px_4px_0_0_rgba(15,23,42,1)] transition-all duration-300">
                    <FaEnvelope size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5">
                      Direct Line
                    </p>
                    <p className="text-slate-900 font-bold font-['Playfair_Display'] text-lg hover:underline transition-colors">
                      mukundjha728@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-center space-x-5 group cursor-default">
                  <div className="p-4 bg-slate-900 border-2 border-slate-900 text-[#f4f1ea] rounded-none shadow-[2px_2px_0_0_rgba(15,23,42,1)] transition-all duration-300">
                    <FaMapMarkerAlt size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5">
                      Headquarters
                    </p>
                    <p className="text-slate-900 font-bold font-['Playfair_Display'] text-lg">
                      India
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="bg-slate-900 p-8 rounded-none text-[#f4f1ea] shadow-[8px_8px_0_0_rgba(15,23,42,0.5)] border-2 border-slate-900 relative overflow-hidden group"
            >
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-3 border-b border-slate-700 pb-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f4f1ea] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                  </span>
                  <h4 className="font-bold text-lg text-[#f4f1ea] uppercase tracking-widest">
                    Classified: Available
                  </h4>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed font-bold italic mt-4">
                  "I'm currently looking for new opportunities as a MERN Stack
                  Developer. Wire me a message for business inquiries."
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
            <div className="bg-transparent p-8 md:p-10 rounded-none border-4 border-slate-900 shadow-[12px_12px_0_0_rgba(15,23,42,1)] bg-white">
              <div className="flex items-center space-x-4 mb-10 border-b-2 border-slate-900 pb-4">
                <FaCommentDots className="text-slate-900" size={32} />
                <h3 className="text-3xl font-black font-['Playfair_Display'] text-slate-900 uppercase">
                  Telegram Form
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-bold text-slate-900 mb-2 uppercase tracking-wider"
                    >
                      Given Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-[#f4f1ea] border-2 border-slate-900 rounded-none focus:outline-none focus:ring-0 focus:bg-white text-slate-900 placeholder-slate-500 font-bold transition-all duration-300 shadow-[inset_4px_4px_0_0_rgba(15,23,42,0.1)]"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold text-slate-900 mb-2 uppercase tracking-wider"
                    >
                      Electronic Mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-[#f4f1ea] border-2 border-slate-900 rounded-none focus:outline-none focus:ring-0 focus:bg-white text-slate-900 placeholder-slate-500 font-bold transition-all duration-300 shadow-[inset_4px_4px_0_0_rgba(15,23,42,0.1)]"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold text-slate-900 mb-2 uppercase tracking-wider"
                  >
                    The Dispatch
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-5 py-4 bg-[#f4f1ea] border-2 border-slate-900 rounded-none focus:outline-none focus:ring-0 focus:bg-white text-slate-900 placeholder-slate-500 font-bold transition-all duration-300 resize-none shadow-[inset_4px_4px_0_0_rgba(15,23,42,0.1)]"
                    placeholder="STOP. Write your message here. STOP."
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-4 sm:space-y-0 pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`group w-full sm:w-auto flex items-center justify-center space-x-3 px-8 py-4 bg-slate-900 text-[#f4f1ea] border-2 border-slate-900 font-black font-['Playfair_Display'] tracking-widest uppercase rounded-none hover:bg-white hover:text-slate-900 shadow-[4px_4px_0_0_rgba(15,23,42,1)] transition-all duration-300 ${isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:-translate-y-1 hover:shadow-[6px_6px_0_0_rgba(15,23,42,1)]"}`}
                  >
                    <span>{isSubmitting ? "Transmitting..." : "Send Dispatch"}</span>
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
                      className="flex items-center text-slate-900 font-bold bg-white border-2 border-slate-900 px-4 py-2"
                    >
                      <FaCheckCircle size={20} className="mr-2" /> Message Sent Successfully!
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

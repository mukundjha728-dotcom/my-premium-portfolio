import React, { useState } from "react";
import { Mail, MapPin, Send, MessageSquare, CheckCircle } from "lucide-react";
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

  // Metallic Gold Gradient Reusable Class
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
      id="contact"
      className="py-20 bg-[#0a0f1a] relative overflow-hidden"
    >
      {/* Abstract Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[40%] rounded-full bg-[#bf953f]/5 blur-[120px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[40%] h-[30%] rounded-full bg-blue-900/10 blur-[150px]" />
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
            Let's <span className={goldGradientText}>Connect</span>
          </h2>
          <p className="text-lg text-slate-400 font-light">
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
              className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-[#bf953f]/20 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Info
              </h3>

              <div className="space-y-6">
                <a
                  href="mailto:mukundjha728@gmail.com"
                  className="flex items-start space-x-4 group"
                >
                  <div className="p-3 bg-[#0a0f1a]/50 border border-[#bf953f]/30 text-[#d4af37] rounded-xl shadow-inner group-hover:border-[#fcf6ba] group-hover:text-[#fcf6ba] group-hover:shadow-[0_0_15px_rgba(191,149,63,0.3)] transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#b38728] uppercase tracking-wider mb-1">
                      Email
                    </p>
                    <p className="text-slate-300 font-medium group-hover:text-[#fcf6ba] transition-colors">
                      mukundjha728@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start space-x-4 group cursor-default">
                  <div className="p-3 bg-[#0a0f1a]/50 border border-[#bf953f]/30 text-[#d4af37] rounded-xl shadow-inner group-hover:border-[#fcf6ba] group-hover:text-[#fcf6ba] transition-all duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#b38728] uppercase tracking-wider mb-1">
                      Location
                    </p>
                    <p className="text-slate-300 font-medium group-hover:text-[#fcf6ba] transition-colors">
                      India
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="bg-gradient-to-br from-[#0f172a] to-[#0a0f1a] p-8 rounded-3xl text-white shadow-lg border border-[#bf953f]/30 relative overflow-hidden group"
            >
              {/* Gold glow effect behind card */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#bf953f]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fcf6ba] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#e5c158]"></span>
                  </span>
                  <h4 className="font-semibold text-lg text-[#fcf6ba]">
                    Available for work
                  </h4>
                </div>
                <p className="text-slate-400 text-sm font-light leading-relaxed">
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
            <div className="bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-[#bf953f]/20 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
              <div className="flex items-center space-x-3 mb-8">
                <MessageSquare className="text-[#d4af37]" size={28} />
                <h3 className="text-2xl font-bold text-white">
                  Send me a message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-300 mb-2"
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
                      className="w-full px-5 py-3 bg-[#0a0f1a]/50 border border-[#bf953f]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#bf953f]/50 focus:border-[#bf953f] text-white placeholder-slate-500 transition-all duration-300 shadow-inner"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-300 mb-2"
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
                      className="w-full px-5 py-3 bg-[#0a0f1a]/50 border border-[#bf953f]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#bf953f]/50 focus:border-[#bf953f] text-white placeholder-slate-500 transition-all duration-300 shadow-inner"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-300 mb-2"
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
                    className="w-full px-5 py-3 bg-[#0a0f1a]/50 border border-[#bf953f]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#bf953f]/50 focus:border-[#bf953f] text-white placeholder-slate-500 transition-all duration-300 resize-none shadow-inner"
                    placeholder="Hi Mukund, I'd like to talk about..."
                  ></textarea>
                </div>

                <div className="flex items-center space-x-4 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`group w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-3.5 bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728] text-[#0a0f1a] font-bold rounded-xl hover:shadow-[0_0_20px_rgba(191,149,63,0.4)] transition-all duration-300 ${isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:-translate-y-0.5"}`}
                  >
                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                    {!isSubmitting && (
                      <Send
                        size={18}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                      />
                    )}
                  </button>

                  {/* Success Message Pop-up */}
                  {isSuccess && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center text-[#fcf6ba] font-medium"
                    >
                      <CheckCircle size={20} className="mr-2" /> Message Sent!
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

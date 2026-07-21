import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "./Icons";
import { profile } from "../data/profile";
import SuccessModal from "./SuccessModal";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <section id="contact" className="py-24 relative overflow-hidden">
        {/* Glow circle behind contact */}
        <div className="absolute bottom-[10%] right-[-15%] h-140 w-140 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none -z-10" />

        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <span className="text-xs font-bold tracking-[0.25em] text-slate-400 dark:text-slate-500 uppercase">
              LET&apos;S CONNECT
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-slate-800 dark:text-white leading-tight">
              Get In <span className="bg-linear-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-400">Touch</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-slate-500 dark:text-slate-400">
              Ready to start your next project? Let&apos;s discuss how we can bring your ideas to life.
            </p>
          </motion.div>

          {/* Top Section: 3-Column Info Cards (Location, Email, Phone) */}
          <div className="grid gap-6 md:grid-cols-3 mb-12">
            
            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 rounded-2xl border border-(--color-card-border) bg-(--color-card-bg) p-5 backdrop-blur-md"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50/80 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Location
                </h4>
                <p className="mt-0.5 text-sm font-semibold text-slate-700 dark:text-slate-300">
                  {profile.location}
                </p>
              </div>
            </motion.div>

            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="flex items-center gap-4 rounded-2xl border border-(--color-card-border) bg-(--color-card-bg) p-5 backdrop-blur-md"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50/80 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                <Mail size={20} />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Email
                </h4>
                <a
                  href={profile.social.email}
                  className="mt-0.5 block text-sm font-semibold text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 truncate"
                >
                  {profile.email}
                </a>
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="flex items-center gap-4 rounded-2xl border border-(--color-card-border) bg-(--color-card-bg) p-5 backdrop-blur-md"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50/80 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Phone
                </h4>
                <a
                  href={`tel:${profile.phoneTel}`}
                  className="mt-0.5 block text-sm font-semibold text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                >
                  {profile.phone}
                </a>
              </div>
            </motion.div>
            
          </div>

          {/* Bottom Section: Message Form & Socials/Availability */}
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 items-stretch">
            
            {/* Left Column: Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col h-full"
            >
              <div className="flex-1 rounded-[2.25rem] border border-(--color-card-border) bg-(--color-card-bg) p-8 shadow-(--color-card-shadow) backdrop-blur-xl flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6">
                    Send me a message
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="flex flex-col">
                        <input
                          name="name"
                          type="text"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Your Name"
                          className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-900 rounded-2xl px-4 py-3.5 text-sm focus:border-blue-600 dark:focus:border-blue-500 outline-none transition text-slate-700 dark:text-slate-300"
                        />
                      </div>
                      <div className="flex flex-col">
                        <input
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="Email Address"
                          className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-900 rounded-2xl px-4 py-3.5 text-sm focus:border-blue-600 dark:focus:border-blue-500 outline-none transition text-slate-700 dark:text-slate-300"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Your Message"
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-900 rounded-2xl px-4 py-3.5 text-sm focus:border-blue-600 dark:focus:border-blue-500 outline-none resize-none transition text-slate-700 dark:text-slate-300"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 w-full rounded-full bg-blue-600 dark:bg-blue-500 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/10 transition hover:bg-blue-700 dark:hover:bg-blue-600"
                    >
                      <Send size={16} />
                      <span>SEND MESSAGE</span>
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Socials & Availability Card */}
            <div className="flex flex-col gap-8 justify-between h-full">
              
              {/* Follow Me Socials Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-3xl border border-(--color-card-border) bg-(--color-card-bg) p-8 shadow-(--color-card-shadow) backdrop-blur-xl space-y-6 flex-1 flex flex-col justify-center"
              >
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                  Follow Me
                </h3>

                <div className="grid gap-4 grid-cols-2">
                  <a
                    href={profile.social.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-2xl border border-(--color-card-border) bg-(--color-card-bg) p-4 shadow-(--color-card-shadow) backdrop-blur-md transition duration-300 hover:bg-slate-950 hover:text-white dark:hover:bg-white dark:hover:text-slate-950 text-slate-700 dark:text-slate-300"
                  >
                    <Github size={20} />
                    <span className="text-sm font-semibold">GitHub</span>
                  </a>

                  <a
                    href={profile.social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-2xl border border-(--color-card-border) bg-(--color-card-bg) p-4 shadow-(--color-card-shadow) backdrop-blur-md transition duration-300 hover:bg-blue-600 hover:text-white dark:hover:bg-[#0077b5] dark:hover:text-white text-slate-700 dark:text-slate-300"
                  >
                    <Linkedin size={20} />
                    <span className="text-sm font-semibold">LinkedIn</span>
                  </a>

                  <a
                    href={profile.social.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-2xl border border-(--color-card-border) bg-(--color-card-bg) p-4 shadow-(--color-card-shadow) backdrop-blur-md transition duration-300 hover:bg-sky-500 hover:text-white dark:hover:bg-[#1da1f2] dark:hover:text-white text-slate-700 dark:text-slate-300"
                  >
                    <Twitter size={20} />
                    <span className="text-sm font-semibold">Twitter</span>
                  </a>

                  <a
                    href={profile.social.email}
                    className="flex items-center gap-3 rounded-2xl border border-(--color-card-border) bg-(--color-card-bg) p-4 shadow-(--color-card-shadow) backdrop-blur-md transition duration-300 hover:bg-rose-500 hover:text-white dark:hover:bg-rose-600 dark:hover:text-white text-slate-700 dark:text-slate-300"
                  >
                    <Mail size={20} />
                    <span className="text-sm font-semibold">Email</span>
                  </a>
                </div>
              </motion.div>

              {/* Single Available for Work Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="border border-emerald-200/60 bg-emerald-50/30 px-6 py-5 rounded-2xl flex items-start gap-3.5 dark:border-emerald-950/40 dark:bg-emerald-950/10 shadow-sm animate-fade-in"
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.2)] animate-pulse" />
                <div>
                  <h4 className="text-sm font-bold text-emerald-800 dark:text-emerald-400">
                    Available for work
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-emerald-600 dark:text-emerald-500/80 leading-relaxed font-medium">
                    I&apos;m currently available for freelance projects and full-time opportunities.
                  </p>
                </div>
              </motion.div>

            </div>
            
          </div>
        </div>
      </section>

      <SuccessModal open={showSuccess} onClose={() => setShowSuccess(false)} />
    </>
  );
}

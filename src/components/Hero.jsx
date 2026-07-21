import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "./Icons";
import { profile } from "../data/profile";
import heroPhoto from "../assets/2 (1).jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-24 pb-16 sm:px-10 lg:flex-row lg:items-center lg:gap-12"
    >
      {/* Background glow overlay */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] h-140 w-140 rounded-full bg-blue-500/10 blur-[100px] dark:bg-blue-500/5" />
        <div className="absolute bottom-[20%] right-[-10%] h-140 w-140 rounded-full bg-indigo-500/10 blur-[100px] dark:bg-indigo-500/5" />
      </div>

      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center w-full mt-10 lg:mt-0">
        
        {/* Left Side: Headline & Buttons */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center text-left"
        >
          <span className="text-xs font-bold tracking-[0.25em] text-slate-400 dark:text-slate-500 uppercase mb-4">
            FULL STACK DEVELOPER
          </span>
          
          <h1 className="text-[2.75rem] sm:text-5xl lg:text-[4.25rem] font-extrabold tracking-tight leading-[1.08] text-slate-800 dark:text-white">
            Building digital{" "}
            <span className="bg-linear-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-400">
              experiences
            </span>{" "}
            that matter
          </h1>
          
          <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-slate-500 dark:text-slate-400">
            I craft beautiful, functional web applications with modern technologies and thoughtful user experiences.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-700 hover:-translate-y-0.5 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              VIEW WORK
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/50 px-8 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:border-slate-300 hover:-translate-y-0.5 dark:border-slate-800/80 dark:bg-slate-900/40 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:border-slate-700"
            >
              GET IN TOUCH
            </a>
          </div>

          {/* Social icons at bottom-left */}
          <div className="mt-16 flex items-center gap-6">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-blue-600 transition dark:text-slate-500 dark:hover:text-blue-400"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-blue-600 transition dark:text-slate-500 dark:hover:text-blue-400"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={profile.social.email}
              className="text-slate-400 hover:text-blue-600 transition dark:text-slate-500 dark:hover:text-blue-400"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        {/* Right Side: Portrait image & surrounding text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center lg:items-end justify-center"
        >
          <div className="relative w-full max-w-sm sm:max-w-md aspect-4/5 flex flex-col justify-end">
            
            {/* Tech keywords right above the photo */}
            <div className="absolute -top-14 right-0 flex gap-1.5 sm:gap-2.5 text-[0.68rem] font-bold tracking-[0.15em] text-slate-400/80 dark:text-slate-500/80 uppercase">
              <span>REACT</span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span>NODE.JS</span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span>TYPESCRIPT</span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span>MONGODB</span>
            </div>

            {/* Rotated decorative outline frames */}
            <div className="absolute inset-0 rounded-4xl border border-slate-200/50 dark:border-slate-800/30 rotate-3 scale-105 pointer-events-none -z-10" />
            <div className="absolute inset-0 rounded-4xl border border-slate-200/20 dark:border-slate-800/10 -rotate-6 scale-110 pointer-events-none -z-10" />

            {/* Photo frame container */}
            <div className="h-full w-full overflow-hidden rounded-4xl bg-white border border-slate-200/40 p-2.5 shadow-2xl shadow-slate-100 dark:bg-slate-950 dark:border-slate-900/60 dark:shadow-none">
              <img
                src={heroPhoto}
                alt={profile.name}
                className="h-full w-full rounded-3xl object-cover bg-slate-100 dark:bg-slate-900"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bounce animating down arrow */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 cursor-pointer text-slate-400 hover:text-blue-600 dark:text-slate-600 dark:hover:text-blue-400 hidden lg:block"
      >
        <a href="#skills" aria-label="Scroll down">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}

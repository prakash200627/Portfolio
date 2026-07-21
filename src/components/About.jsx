import { motion } from "framer-motion";
import { Code2, BookOpen, Briefcase, GraduationCap, Rocket, Heart, Coffee } from "./Icons";
import { timeline, loves } from "../data/timeline";

const iconMap = {
  Code2,
  BookOpen,
  Briefcase,
  GraduationCap,
  Rocket,
  Heart,
  Coffee,
};

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-[40%] left-[-10%] h-120 w-120 rounded-full bg-violet-500/5 blur-[100px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-bold tracking-[0.25em] text-slate-400 dark:text-slate-500 uppercase">
            GET TO KNOW ME
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-slate-800 dark:text-white leading-tight">
            About <span className="bg-linear-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-400">Me</span>
          </h2>
        </motion.div>

        {/* Top Grid: Mission & What I Love Building */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-stretch">
          
          {/* Left Column: Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col h-full"
          >
            <div className="flex-1 rounded-4xl border border-(--color-card-border) bg-(--color-card-bg) p-8 shadow-(--color-card-shadow) backdrop-blur-xl flex flex-col justify-center">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                My Mission
              </h3>
              <p className="mt-4 text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                I believe technology should be a bridge that connects people and solves real-world problems. My passion lies in crafting digital experiences that are not just functional, but delightful and accessible to everyone.
              </p>
              <p className="mt-4 text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me exploring new frameworks, contributing to open source, or mentoring aspiring developers. I love the constant evolution of web technologies and the endless possibilities they bring to create meaningful digital experiences.
              </p>
            </div>
          </motion.div>

          {/* Right Column: What I Love Building */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col h-full"
          >
            <div className="flex-1 rounded-4xl border border-(--color-card-border) bg-(--color-card-bg) p-8 shadow-(--color-card-shadow) backdrop-blur-xl flex flex-col justify-center">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                What I Love Building
              </h3>
              
              <div className="mt-6 space-y-4">
                {loves.map((item, i) => {
                  const LoveIcon = iconMap[item.iconName] || Heart;
                  return (
                    <div
                      key={item.title}
                      className="flex items-center gap-4 rounded-2xl border border-(--color-card-border) bg-(--color-card-bg) p-5 backdrop-blur-md"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50/80 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                        <LoveIcon size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 dark:text-white text-sm sm:text-base">
                          {item.title}
                        </h4>
                        <p className="mt-0.5 text-xs sm:text-sm text-slate-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
          
        </div>

        {/* Bottom Section: Center Heading + Alternating Timeline */}
        <div className="mt-28 space-y-16">
          <div className="text-center">
            <span className="text-xs font-bold tracking-[0.25em] text-slate-500 uppercase">
              THE JOURNEY
            </span>
            <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-800 dark:text-white">
              My Developer Journey
            </h3>
          </div>

          {/* Centered alternating timeline layout */}
          <div className="relative">
            {/* Centered vertical axis line (left-aligned on mobile, perfectly centered on md+) */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 -translate-x-1/2" />

            <div className="space-y-12 relative">
              {timeline.map((item, i) => {
                const TimelineIcon = iconMap[item.iconName] || Code2;
                const isLeft = i % 2 === 0;

                return (
                  <div
                    key={`${item.year}-${item.title}`}
                    className={`flex flex-col md:flex-row relative items-stretch ${
                      isLeft ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Timeline card column */}
                    <motion.div
                      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.05 }}
                      className="w-full md:w-1/2 pl-14 md:pl-0 md:px-8 flex"
                    >
                      <div className="flex-1 rounded-2xl border border-(--color-card-border) bg-(--color-card-bg) p-6 shadow-(--color-card-shadow) backdrop-blur-xl">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="rounded-md bg-slate-100 dark:bg-slate-950 px-2.5 py-1 font-mono text-[0.68rem] font-bold text-slate-500">
                            {item.year}
                          </span>
                          {item.org && (
                            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                              {item.org}
                            </span>
                          )}
                        </div>

                        <h4 className="mt-3 text-base sm:text-lg font-bold text-slate-800 dark:text-white">
                          {item.title}
                        </h4>
                        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>

                    {/* Timeline Node Column (Floating center icon) */}
                    <div className="absolute left-6 md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 flex items-center justify-center z-10">
                      <motion.span
                        initial={{ scale: 0.5, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 200, delay: i * 0.08 }}
                        className={`flex h-10 w-10 items-center justify-center rounded-full text-white shadow-md ${item.colorClass}`}
                      >
                        <TimelineIcon size={18} />
                      </motion.span>
                    </div>

                    {/* Empty spacer column to keep grid symmetric on desktop */}
                    <div className="hidden md:block w-1/2" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

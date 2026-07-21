import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "./Icons";
import { projects, categories } from "../data/projects";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category.includes(activeCategory));

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[20%] left-[-15%] h-140 w-140 rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[10%] right-[-10%] h-100 w-100 rounded-full bg-blue-500/5 blur-[100px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-6 sm:px-10">

        {/* Headers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <span className="text-xs font-bold tracking-[0.25em] text-slate-400 dark:text-slate-500 uppercase">
            FEATURED WORK
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-slate-800 dark:text-white leading-tight">
            All{" "}
            <span className="bg-linear-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-400">
              Projects
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-500 dark:text-slate-400">
            {projects.length} projects spanning AI/ML, DevOps, full-stack development, and more.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mb-12 flex flex-wrap justify-center gap-2"
        >
          {categories.map((cat) => {
            const count =
              cat === "All"
                ? projects.length
                : projects.filter((p) => p.category.includes(cat)).length;
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                    : "border border-slate-200/60 bg-white/60 text-slate-500 hover:border-blue-300 hover:text-blue-600 dark:border-slate-800/60 dark:bg-slate-900/40 dark:text-slate-400 dark:hover:border-blue-600/50 dark:hover:text-blue-400 backdrop-blur-sm"
                }`}
              >
                {cat}
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[0.6rem] font-extrabold ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="group flex flex-col rounded-4xl border border-(--color-card-border) bg-(--color-card-bg) p-4 shadow-(--color-card-shadow) backdrop-blur-xl transition duration-300 hover:shadow-xl hover:-translate-y-1 dark:shadow-none"
              >
                {/* Image Container with Badges & Hover Action Overlay */}
                <div className="relative aspect-video w-full overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Floating Badges */}
                  {project.badges && project.badges.length > 0 && (
                    <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-1.5">
                      {project.badges.map((badge) => {
                        const isFeatured = badge === "Featured";
                        const isAI = badge === "AI";
                        const isDevOps = badge === "DevOps";
                        const isHackathon = badge === "Hackathon";
                        const colorClass = isFeatured
                          ? "bg-blue-600 text-white"
                          : isAI
                          ? "bg-purple-600 text-white"
                          : isDevOps
                          ? "bg-emerald-600 text-white"
                          : isHackathon
                          ? "bg-amber-500 text-white"
                          : "bg-white/80 dark:bg-slate-950/80 backdrop-blur-xs text-slate-700 dark:text-slate-300 border border-slate-200/20 dark:border-slate-800/20";
                        return (
                          <span
                            key={badge}
                            className={`rounded-full px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-wider shadow-xs ${colorClass}`}
                          >
                            {badge}
                          </span>
                        );
                      })}
                    </div>
                  )}

                  {/* Centered Action Hover Backdrop Overlay */}
                  <div className="absolute inset-0 z-10 flex items-center justify-center gap-3 bg-slate-950/65 opacity-0 backdrop-blur-xs transition-opacity duration-300 group-hover:opacity-100">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex scale-90 items-center gap-1.5 rounded-full bg-blue-600 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-blue-500/20 transition duration-300 hover:bg-blue-700 hover:-translate-y-0.5 group-hover:scale-100"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={14} />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex scale-90 items-center gap-1.5 rounded-full border border-white/80 bg-white/10 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition duration-300 hover:bg-white hover:text-slate-950 hover:-translate-y-0.5 group-hover:scale-100"
                    >
                      <span>GitHub</span>
                      <Github size={14} />
                    </a>
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col pt-5 px-2 pb-2">
                  <h3 className="text-lg font-bold tracking-tight text-slate-800 transition duration-200 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 leading-snug">
                    {project.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {project.description}
                  </p>

                  {/* Tech Pills */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-slate-200/50 bg-slate-50/50 px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-wider text-slate-400 dark:border-slate-800/80 dark:bg-slate-950/30 dark:text-slate-500"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="py-20 text-center text-slate-400 dark:text-slate-600">
            No projects in this category yet.
          </div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 text-center"
        >
          <a
            href="https://github.com/prakash200627"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200/60 bg-white/60 px-6 py-3 text-sm font-bold text-slate-600 backdrop-blur-sm transition duration-200 hover:border-blue-400 hover:text-blue-600 dark:border-slate-800/60 dark:bg-slate-900/40 dark:text-slate-400 dark:hover:border-blue-600/50 dark:hover:text-blue-400"
          >
            <Github size={16} />
            View all repositories on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}

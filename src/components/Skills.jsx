import { motion } from "framer-motion";
import { Laptop, Server, Database, Rocket } from "./Icons";
import { skillCategories } from "../data/skills";

const iconMap = {
  Laptop: Laptop,
  Server: Server,
  Database: Database,
  Rocket: Rocket,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Subtle light glow behind skills */}
      <div className="absolute top-[30%] right-[-10%] h-120 w-120 rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        
        {/* Section Headers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-bold tracking-[0.25em] text-slate-400 dark:text-slate-500 uppercase">
            TECHNICAL EXPERTISE
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-slate-800 dark:text-white leading-tight">
            Skills & <span className="bg-linear-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-400">Technologies</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-slate-500 dark:text-slate-400">
            A comprehensive toolkit for building modern, scalable web applications from concept to deployment.
          </p>
        </motion.div>

        {/* 2x2 Grid of Category Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
          {skillCategories.map((group, gi) => {
            const CategoryIcon = iconMap[group.iconName] || Laptop;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: gi * 0.1 }}
                className="rounded-4xl border border-(--color-card-border) bg-(--color-card-bg) p-8 shadow-(--color-card-shadow) backdrop-blur-xl"
              >
                
                {/* Card Header: Icon + Title + Subtitle */}
                <div className="mb-8 flex items-start gap-4">
                  <div className="rounded-2xl bg-blue-50/80 dark:bg-blue-500/10 p-3 text-blue-600 dark:text-blue-400">
                    <CategoryIcon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                      {group.category}
                    </h3>
                    <p className="mt-1 text-sm text-slate-400 dark:text-slate-500">
                      {group.subtitle}
                    </p>
                  </div>
                </div>

                {/* Skill Bars List */}
                <div className="space-y-6">
                  {group.skills.map((skill, si) => (
                    <div key={skill.name}>
                      <div className="mb-2 flex justify-between text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                        <span>{skill.name}</span>
                        <span className="font-mono text-slate-400 dark:text-slate-500">{skill.level}%</span>
                      </div>
                      <div className="h-2.5 w-full rounded-full bg-slate-100 dark:bg-slate-950 overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full ${skill.colorClass}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.1,
                            delay: 0.2 + si * 0.08,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

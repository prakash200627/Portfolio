import { motion } from "framer-motion";
import { Calendar, Code2, Rocket } from "./Icons";

const stats = [
  { label: "LeetCode Solved", value: "117" },
  { label: "Codeforces Solved", value: "62" },
  { label: "Primary Language", value: "C++" },
];

const focusAreas = ["Arrays", "Strings", "Hash Maps", "Trees", "Recursion", "Backtracking", "Dynamic Programming"];

export default function CodingPractice() {
  return (
    <section id="practice" className="py-24 relative overflow-hidden">
      <div className="absolute top-[50%] left-[-10%] h-120 w-120 rounded-full bg-blue-500/5 blur-[100px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        
        {/* Headers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-bold tracking-[0.25em] text-slate-400 dark:text-slate-500 uppercase">
            PROBLEM SOLVING
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-slate-800 dark:text-white leading-tight">
            Coding Practice & <span className="bg-linear-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-400">DSA</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-500 dark:text-slate-400">
            Active training on Codeforces and LeetCode focused on building strong problem-solving habits and mastering algorithms.
          </p>
        </motion.div>

        {/* 2-Column Grid */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 items-stretch">
          
          {/* Left Column: Problem Solving Focus & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col h-full"
          >
            <div className="flex-1 rounded-4xl border border-(--color-card-border) bg-(--color-card-bg) p-8 shadow-(--color-card-shadow) backdrop-blur-xl flex flex-col justify-between gap-8 h-full">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-blue-50/80 dark:bg-blue-500/10 p-3 text-blue-600 dark:text-blue-400">
                    <Code2 size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                      Problem Solving Focus
                    </h3>
                    <p className="mt-1 text-sm text-slate-400 dark:text-slate-500">
                      Daily & weekly practice stats
                    </p>
                  </div>
                </div>
                
                <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  Consistent algorithmic training is key to mastering data structures. My focus is on writing clean, optimal code, analyzing time and space complexities, and refining my analytical approach to solving complex problems.
                </p>
              </div>

              {/* Separated stats cards */}
              <div className="grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-(--color-card-border) bg-(--color-card-bg) p-5 text-center shadow-(--color-card-shadow) backdrop-blur-md"
                  >
                    <p className="text-3xl font-black text-blue-600 dark:text-blue-400">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Core DSA topics & patterns */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col h-full"
          >
            <div className="flex-1 rounded-4xl border border-(--color-card-border) bg-(--color-card-bg) p-8 shadow-(--color-card-shadow) backdrop-blur-xl flex flex-col justify-between gap-8 h-full">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-emerald-50/80 dark:bg-emerald-500/10 p-3 text-emerald-600 dark:text-emerald-400">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                      What I Practice
                    </h3>
                    <p className="mt-1 text-sm text-slate-400 dark:text-slate-500">
                      Core algorithms & patterns
                    </p>
                  </div>
                </div>

                {/* Focus areas tags */}
                <div className="flex flex-wrap gap-2.5">
                  {focusAreas.map((area) => (
                    <span
                      key={area}
                      className="rounded-full border border-slate-200/50 bg-slate-50/50 px-4 py-1.5 text-xs font-semibold text-slate-500 dark:border-slate-800/80 dark:bg-slate-950/30 dark:text-slate-400"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Current Target Focus description */}
              <div className="rounded-2xl border border-blue-100/50 bg-linear-to-br from-blue-500/5 to-indigo-500/5 p-5 dark:border-blue-950/30">
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                  <Rocket size={18} />
                  <p className="text-xs font-bold uppercase tracking-wider">Current Target</p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  Strengthening speed, accuracy, and pattern recognition through consistent problem solving in arrays, hash maps, recursion, and dynamic programming.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

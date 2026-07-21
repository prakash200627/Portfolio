import { motion } from "framer-motion";
import { profile } from "../data/profile";

export default function ScheduleCall() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl rounded-4xl border border-(--color-card-border) bg-(--color-card-bg) p-8 sm:p-12 text-center shadow-(--color-card-shadow) backdrop-blur-xl"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white">
            Prefer a quick call?
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-sm sm:text-base leading-relaxed text-slate-500 dark:text-slate-400">
            Sometimes a conversation is worth a thousand messages. Feel free to schedule a call to discuss your project.
          </p>
          <a
            href={profile.social.email}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-300 hover:border-blue-600 dark:border-slate-800 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 bg-transparent px-8 py-3 text-sm font-semibold text-slate-700 dark:text-slate-300 transition hover:-translate-y-0.5"
          >
            Schedule a Call
          </a>
        </motion.div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "./Icons";
import { useTheme } from "../context/ThemeContext";

const links = [
  { href: "#home", label: "HOME" },
  { href: "#skills", label: "SKILLS" },
  { href: "#projects", label: "WORK" },
  { href: "#about", label: "ABOUT" },
  { href: "#contact", label: "CONTACT" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 w-full border-b border-gray-200/40 bg-white/80 py-4 backdrop-blur-md dark:border-gray-800/40 dark:bg-[#050811]/80"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-10">
        <a href="#home" className="flex items-center gap-2 text-lg font-bold tracking-tight text-slate-800 dark:text-white">
          <span className="font-mono text-xl font-extrabold text-blue-600">&lt;/&gt;</span>
          <span>Prakash</span>
        </a>

        <div className="flex items-center gap-8">
          <ul className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-xs font-semibold tracking-wider text-slate-500 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="rounded-full p-2 text-slate-600 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              type="button"
              className="rounded-md p-2 text-slate-600 dark:text-slate-400 md:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="w-full border-t border-gray-200/40 bg-white dark:border-gray-800/40 dark:bg-[#050811] md:hidden"
          >
            <ul className="flex flex-col gap-4 px-6 py-5">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block text-xs font-semibold tracking-wider text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

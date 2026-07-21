import { Github, Linkedin, Twitter, Mail, Heart } from "./Icons";
import { profile } from "../data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-slate-200/40 bg-white/20 py-16 backdrop-blur-xl dark:border-slate-900/40 dark:bg-[#050811]/10">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 text-center flex flex-col items-center">
        
        {/* Branding Logo Stacked */}
        <div className="flex flex-col items-center gap-2.5">
          <span className="font-mono text-3xl font-extrabold text-blue-600">&lt;/&gt;</span>
          <h4 className="text-xl font-bold text-slate-800 dark:text-white tracking-tight">
            Bhavani Prakash Kajuluri
          </h4>
        </div>

        {/* Short bio */}
        <p className="mt-4 max-w-md text-sm text-slate-400 dark:text-slate-500 leading-relaxed font-medium">
          Crafting digital experiences with passion, precision, and a touch of magic.
        </p>

        {/* Simple Social Row */}
        <div className="mt-8 flex items-center justify-center gap-6">
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
            href={profile.social.twitter}
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-blue-600 transition dark:text-slate-500 dark:hover:text-blue-400"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </a>
          <a
            href={profile.social.email}
            className="text-slate-400 hover:text-blue-600 transition dark:text-slate-500 dark:hover:text-blue-400"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Red Heart Divider */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <span className="h-px w-20 bg-slate-200 dark:bg-slate-900/60" />
          <Heart size={16} fill={true} className="text-rose-500 animate-pulse" />
          <span className="h-px w-20 bg-slate-200 dark:bg-slate-900/60" />
        </div>

        {/* Credentials & Copyrights */}
        <div className="mt-8 text-xs font-semibold tracking-wide text-slate-400 dark:text-slate-500 uppercase flex flex-col items-center">
          <p>© {year} Bhavani Prakash Kajuluri. All rights reserved.</p>
          <p className="mt-1.5 font-medium tracking-normal text-slate-400/70 dark:text-slate-600 text-[0.68rem] lowercase">
            built with react & framer motion · designed with care
          </p>
          
          <div className="mt-6 pt-4 border-t border-slate-200/40 dark:border-slate-800/40 w-48 text-center">
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-slate-500">
              Crafted with passion by
            </span>
            <span className="font-serif italic text-xl font-bold tracking-wide mt-1.5 block bg-linear-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-400">
              Bhavani Prakash Kajuluri
            </span>
          </div>
        </div>

        {/* Sleek Back to Top pill */}
        <button
          onClick={scrollToTop}
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/30 px-5 py-2.5 text-[0.68rem] font-bold uppercase tracking-wider text-slate-400 hover:text-blue-600 dark:border-slate-800/80 dark:bg-slate-950/20 dark:text-slate-500 dark:hover:border-blue-500 dark:hover:text-blue-400 transition hover:-translate-y-0.5 hover:shadow-xs"
        >
          <span>Back to top</span>
          <svg
            className="h-3 w-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>

      </div>
    </footer>
  );
}

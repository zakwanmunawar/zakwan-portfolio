"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const links = [
  { href: "#timeline", label: "TIMELINE" },
  { href: "#work", label: "PROJECTS" },
  { href: "#stack", label: "STACK" },
  { href: "#about", label: "ABOUT" },
];

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      aria-label="Main navigation"
      className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#08090A]/85 backdrop-blur-xl supports-[backdrop-filter]:bg-[#08090A]/75"
    >
      <div className="mx-auto flex h-[68px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a
          href="#top"
          onClick={closeMenu}
          className="group inline-flex items-center gap-3 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[#08090A]"
          aria-label="Zakwan — back to top"
        >
          <span className="relative grid h-8 w-8 place-items-center border border-blue-400/40 bg-blue-400/[0.08] font-mono text-sm font-bold text-blue-300 transition-colors duration-300 group-hover:border-cyan-300/60 group-hover:text-cyan-200">
            Z<span className="absolute -bottom-px -right-px h-2 w-2 bg-blue-400" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-mono text-[13px] font-bold tracking-[0.12em] text-white">
              ZAKWAN<span className="text-blue-400">.</span>
            </span>
            <span className="mt-1.5 font-mono text-[8px] tracking-[0.19em] text-white/35">
              COMPUTER VISION
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex xl:gap-9">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative py-2 font-mono text-[10px] tracking-[0.14em] text-white/55 transition-colors duration-300 hover:text-white focus-visible:text-white focus-visible:outline-none"
            >
              {link.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-cyan-300 transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100" />
            </a>
          ))}
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 border border-blue-400/45 bg-blue-500/[0.09] px-4 py-3 font-mono text-[10px] font-semibold tracking-[0.12em] text-blue-200 transition-all duration-300 hover:border-blue-300 hover:bg-blue-400/[0.16] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
          >
            LET&apos;S CONNECT
            <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
          </a>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center border border-white/10 text-white/80 transition hover:border-cyan-300/40 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 lg:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="flex w-[17px] flex-col gap-[5px]">
            <span className={`h-px w-full bg-current transition-transform duration-300 ${menuOpen ? "translate-y-[3px] rotate-45" : ""}`} />
            <span className={`h-px bg-current transition-all duration-300 ${menuOpen ? "w-0 opacity-0" : "w-3/4 opacity-100"}`} />
            <span className={`h-px w-full bg-current transition-transform duration-300 ${menuOpen ? "-translate-y-[9px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.22, ease: "easeOut" }}
            className="overflow-hidden border-t border-white/[0.07] bg-[#08090A]/95 lg:hidden"
          >
            <div className="mx-auto max-w-[1440px] px-5 py-3 sm:px-8">
              {links.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: reduceMotion ? 0 : 0.2, delay: reduceMotion ? 0 : index * 0.035 }}
                  className="flex items-center justify-between border-b border-white/[0.06] py-4 font-mono text-xs tracking-[0.13em] text-white/65 transition-colors hover:text-cyan-200 focus-visible:outline-none focus-visible:text-cyan-200"
                >
                  {link.label}
                  <span className="text-cyan-300/60">↗</span>
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-3 flex items-center justify-between border border-blue-400/35 bg-blue-400/[0.08] px-4 py-4 font-mono text-xs tracking-[0.13em] text-blue-200 transition hover:bg-blue-400/[0.14]"
              >
                LET&apos;S CONNECT <span>↗</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

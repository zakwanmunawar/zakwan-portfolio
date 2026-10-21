
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const links = [
  { href: "#timeline", label: "YOLO" },
  { href: "#work", label: "PROJECTS" },
  { href: "#stack", label: "STACK" },
  { href: "#about", label: "ABOUT" },
];

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const updateHeader = () => {
      setScrolled(window.scrollY > 24);
    };

    updateHeader();

    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateHeader);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled
          ? "border-white/[0.09] bg-[#111b2b]/85 shadow-[0_8px_30px_rgba(0,0,0,0.16)] backdrop-blur-xl"
          : "border-transparent bg-transparent shadow-none backdrop-blur-0"
      }`}
    >
      <div className="mx-auto grid h-[68px] max-w-[1440px] grid-cols-[1fr_auto] items-center px-5 sm:px-8 lg:grid-cols-[1fr_auto_1fr] lg:px-12">
        {/* Logo — left */}
        <a
          href="#top"
          onClick={closeMenu}
          className="group inline-flex w-fit items-center gap-3 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
          aria-label="Zakwan — back to top"
        >
          <span className="relative grid h-8 w-8 place-items-center border border-blue-400/40 bg-blue-400/[0.08] font-mono text-sm font-bold text-blue-300 transition-colors duration-300 group-hover:border-cyan-300/60 group-hover:text-cyan-200">
            Z
            <span className="absolute -bottom-px -right-px h-2 w-2 bg-blue-400" />
          </span>

          <span className="flex flex-col leading-none">
            <span className="font-mono text-[13px] font-bold tracking-[0.12em] text-white">
              ZAKWAN<span className="text-blue-400">.</span>
            </span>
            <span className="mt-1.5 font-mono text-[8px] tracking-[0.19em] text-white/45">
              COMPUTER VISION
            </span>
          </span>
        </a>

        {/* Navigation — centered */}
        <div className="hidden items-center justify-center gap-7 lg:col-start-2 lg:flex xl:gap-9">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative whitespace-nowrap py-2 font-mono text-[10px] tracking-[0.14em] text-white/65 transition-colors duration-300 hover:text-white focus-visible:text-white focus-visible:outline-none"
            >
              {link.label}

              <span
                aria-hidden="true"
                className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-cyan-300 transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100"
              />
            </a>
          ))}
        </div>

        {/* Let's Connect — right */}
        <a
          href="#contact"
          className="group relative isolate hidden min-h-11 items-center justify-center gap-3 overflow-hidden rounded-lg border border-blue-400/40 px-5 py-3 font-mono text-[10px] font-semibold tracking-[0.12em] text-blue-100 transition-colors duration-300 hover:border-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 lg:col-start-3 lg:ml-auto lg:inline-flex"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 -translate-x-full rounded-[inherit] bg-blue-500 transition-transform duration-500 ease-out group-hover:translate-x-0 group-focus-visible:translate-x-0 motion-reduce:transition-none"
          />

          <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
            LET&apos;S CONNECT
          </span>

          <span
            aria-hidden="true"
            className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 motion-reduce:transition-none"
          >
            ↗
          </span>
        </a>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="col-start-2 grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-white/80 transition hover:border-cyan-300/40 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 lg:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="flex w-[17px] flex-col gap-[5px]">
            <span
              className={`h-px w-full bg-current transition-transform duration-300 ${
                menuOpen ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px bg-current transition-all duration-300 ${
                menuOpen ? "w-0 opacity-0" : "w-3/4 opacity-100"
              }`}
            />
            <span
              className={`h-px w-full bg-current transition-transform duration-300 ${
                menuOpen ? "-translate-y-[9px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.22,
              ease: "easeOut",
            }}
            className="overflow-hidden border-t border-white/[0.08] bg-[#111b2b]/95 backdrop-blur-xl lg:hidden"
          >
            <div className="mx-auto max-w-[1440px] px-5 py-3 sm:px-8">
              {links.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.2,
                    delay: reduceMotion ? 0 : index * 0.035,
                  }}
                  className="flex items-center justify-between border-b border-white/[0.06] py-4 font-mono text-xs tracking-[0.13em] text-white/70 transition-colors hover:text-cyan-200 focus-visible:outline-none focus-visible:text-cyan-200"
                >
                  {link.label}
                  <span className="text-cyan-300/60">↗</span>
                </motion.a>
              ))}

              {/* Mobile Let's Connect */}
              <a
                href="#contact"
                onClick={closeMenu}
                className="group relative isolate mt-3 flex items-center justify-between overflow-hidden rounded-lg border border-blue-400/35 px-4 py-4 font-mono text-xs tracking-[0.13em] text-blue-100 transition-colors duration-300"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-0 -translate-x-full rounded-[inherit] bg-blue-500 transition-transform duration-500 ease-out group-hover:translate-x-0 motion-reduce:transition-none"
                />

                <span className="relative z-10">
                  LET&apos;S CONNECT
                </span>

                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

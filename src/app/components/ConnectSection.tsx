"use client";

import { motion } from "motion/react";

const contactLinks = [
  {
    title: "RESUME",
    description: "View or download my latest CV.",
    href: "/resume.pdf",
    external: true,
    featured: true,
  },
  {
    title: "GITHUB",
    description: "Explore my projects and source code.",
    href: "https://github.com/zakwanmunawar",
    external: true,
    featured: false,
  },
  {
    title: "LINKEDIN",
    description: "Connect with me professionally.",
    href: "https://www.linkedin.com/in/mohammed-zakwan-m/",
    external: true,
    featured: false,
  },
  {
    title: "EMAIL",
    description: "Get in touch about computer vision and AI.",
    href: "mailto:zakwan1292003@gmail.com",
    external: false,
    featured: false,
  },
];

export default function ConnectSection() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden border-t border-white/10 bg-[#08090A] px-6 py-24 sm:py-32"
    >
      {/* Soft blue ambient lighting — matching YOLO and Stack */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(
              ellipse at 82% 38%,
              rgba(37, 99, 235, 0.28) 0%,
              rgba(37, 99, 235, 0.16) 35%,
              rgba(37, 99, 235, 0.06) 58%,
              transparent 76%
            ),
            radial-gradient(
              ellipse at 8% 76%,
              rgba(59, 130, 246, 0.16) 0%,
              rgba(59, 130, 246, 0.07) 38%,
              transparent 65%
            ),
            radial-gradient(
              ellipse at 50% 100%,
              rgba(29, 78, 216, 0.12) 0%,
              transparent 62%
            )
          `,
        }}
      />

      <div className="mx-auto max-w-7xl">
        {/* Main layout: introduction left, contact cards right */}
        <div className="grid items-center gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16 xl:gap-20">
          {/* LEFT: Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10 max-w-xl"
          >
            <h2 className="font-sans text-[clamp(2.7rem,5vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.065em] text-[#F2F3F5]">
              LET&apos;S BUILD
              <br />
              <span className="text-blue-500">SOMETHING</span>
            </h2>

            <p className="mt-7 max-w-lg text-lg leading-8 text-white/80 sm:text-xl sm:leading-9">
              Interested in computer vision, AI systems, or building
              something interesting together? Find me through the links
              here.
            </p>

            {/* Professional details */}
            <div className="mt-9 border-t border-white/10 pt-6">
              <h3 className="font-mono text-sm font-semibold tracking-[0.08em] text-white">
                MOHAMMED ZAKWAN M.
              </h3>

              <p className="mt-3 font-mono text-xs leading-6 text-blue-200/90 sm:text-sm">
                COMPUTER VISION ENGINEER IN TRAINING
              </p>

              <p className="mt-4 text-sm leading-6 text-white/65">
                Bangalore, India
                <span className="mx-3 text-white/25">/</span>
                Computer Vision
              </p>
            </div>
          </motion.div>

          {/* RIGHT: Four equal-sized access cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 [grid-auto-rows:minmax(160px,1fr)]">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.title}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={
                  link.external
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  scale: 1.035,
                  y: -5,
                  zIndex: 20,
                }}
                className={`
                  group
                  relative
                  isolate
                  flex
                  h-full
                  min-h-[160px]
                  min-w-0
                  flex-col
                  justify-between
                  overflow-hidden
                  border
                  p-6
                  transition-colors
                  duration-300
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-blue-300/70
                  ${
                    link.featured
                      ? "border-blue-300/35 hover:border-blue-300/65"
                      : "border-blue-200/15 hover:border-blue-300/45"
                  }
                `}
                style={{
                  transformOrigin: "center center",
                  background: link.featured
                    ? "radial-gradient(ellipse at 82% 0%, rgba(37,99,235,0.26) 0%, rgba(17,31,53,0.35) 36%, rgba(9,11,14,0.96) 80%)"
                    : "radial-gradient(ellipse at 82% 0%, rgba(37,99,235,0.18) 0%, rgba(17,31,53,0.24) 36%, rgba(9,11,14,0.96) 80%)",
                }}
              >
                {/* Soft blue illumination */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-20 -z-10 h-48 w-48 bg-blue-500/[0.07] blur-3xl transition-colors duration-500 group-hover:bg-blue-400/[0.15]"
                />

                {/* Subtle illuminated top edge */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/20 to-transparent transition-colors duration-300 group-hover:via-blue-300/60"
                />

                {/* Card title and arrow */}
                <div className="relative flex items-center justify-between gap-4">
                  <h3
                    className={`font-mono text-sm font-bold tracking-[0.08em] transition-colors duration-300 group-hover:text-blue-200 ${
                      link.featured
                        ? "text-blue-300"
                        : "text-white"
                    }`}
                  >
                    {link.title}
                  </h3>

                  <span
                    aria-hidden="true"
                    className={`shrink-0 font-mono text-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                      link.featured
                        ? "text-blue-300"
                        : "text-cyan-200/75"
                    }`}
                  >
                    ↗
                  </span>
                </div>

                {/* Card description */}
                <p className="relative mt-6 max-w-[32ch] text-sm leading-6 text-white/75 transition-colors duration-300 group-hover:text-white">
                  {link.description}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
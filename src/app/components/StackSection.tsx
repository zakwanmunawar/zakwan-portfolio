"use client";

import { motion } from "motion/react";

const stack = [
  {
    number: "01",
    title: "COMPUTER VISION",
    description:
      "I work with YOLO architectures, image processing, and object tracking to build real-time detection systems.",
    placement: "lg:col-start-1 lg:row-start-1 lg:row-span-2",
    tall: true,
  },
  {
    number: "02",
    title: "AI / MACHINE LEARNING",
    description:
      "I train and evaluate deep-learning models using PyTorch for practical computer vision applications.",
    placement: "lg:col-start-2 lg:row-start-1",
    tall: false,
  },
  {
    number: "03",
    title: "PROGRAMMING",
    description:
      "I use Python, C, Java, SQL, and JavaScript to develop models and solve engineering problems.",
    placement: "lg:col-start-2 lg:row-start-2",
    tall: false,
  },
  {
    number: "04",
    title: "DEVELOPMENT",
    description:
      "I build interactive applications with React and Next.js, connect REST APIs, and manage code with Git.",
    placement: "lg:col-start-1 lg:row-start-3",
    tall: false,
  },
];

export default function StackSection() {
  return (
    <section
      id="stack"
      className="relative isolate overflow-hidden border-t border-white/10 bg-[#08090A] px-6 py-24 sm:py-32"
    >
      {/* Soft blue ambient lighting across the entire section */}
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
        {/* Left text, right staggered cards */}
        <div className="grid items-center gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16 xl:gap-20">
          {/* LEFT: Heading and introduction */}
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
              WHAT I
              <br />
              <span className="text-blue-500">WORK WITH</span>
            </h2>

            <p className="mt-7 max-w-lg text-lg leading-8 text-white/80 sm:text-xl sm:leading-9">
              Technologies and engineering tools I use to build
              computer vision systems, machine learning models,
              and interactive applications.
            </p>

            {/* YOLO progression */}
            <div className="mt-9 border-t border-white/10 pt-6">
              <p className="font-mono text-xs tracking-[0.13em] text-blue-200/90 sm:text-sm">
                YOLOv1
                <span className="mx-3 text-blue-400">→</span>
                YOLOv8
                <span className="mx-3 text-blue-400">→</span>
                YOLO26
              </p>

              <p className="mt-3 max-w-md text-sm leading-7 text-white/70 sm:text-base sm:leading-7">
                From implementing YOLOv1 from scratch to exploring
                YOLOv8 tracking and using YOLO26 in AeroDrop-Tracker.
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-5">
              {/* White fill flows from left to right */}
              <a
                href="#timeline"
                className="group relative isolate inline-flex min-h-12 items-center justify-center gap-3 overflow-hidden rounded-lg border border-blue-400/50 bg-blue-500 px-5 py-3.5 font-mono text-xs font-bold tracking-[0.08em] text-white transition-colors duration-300 hover:border-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090A] sm:px-6 sm:text-sm"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-0 -translate-x-full rounded-[inherit] bg-white transition-transform duration-500 ease-out group-hover:translate-x-0 group-focus-visible:translate-x-0 motion-reduce:transition-none"
                />

                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#08090A]">
                  EXPLORE YOLO TIMELINE
                </span>

                <span className="relative z-10 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#08090A] motion-reduce:transition-none">
                  →
                </span>
              </a>

              <a
                href="#work"
                className="group inline-flex items-center gap-2 font-mono text-xs tracking-[0.1em] text-white/80 transition-colors duration-300 hover:text-blue-200 focus-visible:outline-none focus-visible:text-blue-200 sm:text-sm"
              >
                VIEW PROJECTS
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            </div>
          </motion.div>

          {/* RIGHT: Four staggered category cards */}
          <div className="grid gap-4 lg:grid-cols-2 lg:grid-rows-[190px_190px_190px]">
            {stack.map((category, index) => (
              <motion.article
                key={category.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
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
                  min-w-0
                  flex-col
                  justify-end
                  overflow-hidden
                  border
                  border-blue-200/20
                  p-5
                  transition-colors
                  duration-300
                  hover:border-blue-300/50
                  sm:p-6
                  lg:p-5
                  xl:p-6
                  ${
                    category.tall
                      ? "min-h-[340px] lg:min-h-0"
                      : "min-h-[190px]"
                  }
                  ${category.placement}
                `}
                style={{
                  transformOrigin: "center center",
                  background:
                    "radial-gradient(ellipse at 82% 0%, rgba(37,99,235,0.18) 0%, rgba(17,31,53,0.24) 36%, rgba(9,11,14,0.94) 80%)",
                }}
              >
                {/* Soft blue card lighting */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-20 -z-10 h-56 w-56 rounded-full bg-blue-500/[0.08] blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />

                {/* Subtle blue top edge */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/20 to-transparent transition-colors duration-300 group-hover:via-blue-300/60"
                />

                {/* Only the category title and its short description */}
                <div className="relative z-10">
                  <h3
                    className={`font-sans font-semibold leading-snug tracking-tight text-white ${
                      category.tall
                        ? "text-xl sm:text-2xl"
                        : "text-lg sm:text-xl"
                    }`}
                  >
                    {category.title}
                  </h3>

                  <p className="mt-3 max-w-[38ch] text-xs leading-5 text-white/75 sm:text-[13px] sm:leading-[1.6]">
                    {category.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
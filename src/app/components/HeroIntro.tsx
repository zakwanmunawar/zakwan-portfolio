"use client";

import { motion, useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";

const highlights = ["BANGALORE, INDIA", "AI & ML", "COMPUTER VISION"];

export default function HeroIntro() {
  const reduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0, x: 72 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
        delayChildren: 0.12,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial={reduceMotion ? false : "hidden"}
      animate="show"
      className="w-full max-w-[760px] py-8 lg:pr-5 xl:pr-10 2xl:pr-14"
    >
      <motion.div
        variants={itemVariants}
        className="mb-7 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[10px] tracking-[0.18em] text-cyan-200/90 sm:text-xs"
      >
        <span className="h-px w-7 bg-cyan-300" />
        <span className="text-cyan-100">$ whoami</span>
        <span className="text-white/20">/</span>
        <span className="text-white/40">COMPUTER VISION</span>
      </motion.div>

      <motion.h1
        variants={itemVariants}
        className="font-sans text-[clamp(3.15rem,6.05vw,6.35rem)] font-semibold leading-[0.88] tracking-[-0.075em] text-[#F2F3F5]"
      >
        <span className="block whitespace-nowrap">MOHAMMED</span>
        <span className="mt-2 block whitespace-nowrap">ZAKWAN M<span className="text-blue-400">.</span></span>
      </motion.h1>

      <motion.div
        variants={itemVariants}
        className="mt-7 flex items-center gap-3"
      >
        <span className="h-5 w-[2px] bg-blue-400" />
        <p className="font-mono text-[11px] tracking-[0.12em] text-blue-200/90 sm:text-xs">
          COMPUTER VISION ENGINEER IN TRAINING
        </p>
      </motion.div>

      <motion.p
        variants={itemVariants}
        className="mt-6 max-w-[620px] text-[16px] leading-7 text-white/65 sm:text-lg sm:leading-8"
      >
        I build <span className="font-medium text-white">object detection systems from scratch</span>,
        study how modern vision models work under the hood, and deploy{" "}
        <span className="font-medium text-white">real-time inference on edge devices</span>.
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="mt-7 flex flex-wrap gap-2.5"
      >
        {highlights.map((highlight) => (
          <span
            key={highlight}
            className="inline-flex items-center gap-2 border border-white/[0.10] bg-white/[0.025] px-3 py-2.5 font-mono text-[9px] tracking-[0.1em] text-white/55 transition-colors duration-300 hover:border-cyan-200/30 hover:text-white/80 sm:text-[10px]"
          >
            <span className="h-1 w-1 bg-cyan-300/70" />
            {highlight}
          </span>
        ))}
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4"
      >
        <a
          href="#work"
          className="group inline-flex min-h-12 items-center gap-4 border border-blue-400/40 bg-blue-500 px-5 py-3 font-mono text-[10px] font-bold tracking-[0.13em] text-[#06080D] transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090A] sm:px-6 sm:text-xs"
        >
          VIEW PROJECTS
          <span className="transition-transform duration-300 group-hover:translate-x-1">⟶</span>
        </a>

        <a
          href="mailto:zakwan1292003@gmail.com"
          className="group inline-flex min-h-12 items-center gap-3 border border-white/15 px-5 py-3 font-mono text-[10px] tracking-[0.13em] text-white/75 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-200/50 hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090A] sm:px-6 sm:text-xs"
        >
          GET IN TOUCH
          <span className="text-cyan-200/75 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
        </a>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="mt-10 flex max-w-[560px] items-center gap-4 border-t border-white/[0.08] pt-4 font-mono text-[9px] tracking-[0.12em] text-white/35 sm:text-[10px]"
      >
        <span className="flex items-center gap-2 whitespace-nowrap text-white/55">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
          BUILDING IN PUBLIC
        </span>
        <span className="h-3 w-px bg-white/10" />
        <span className="min-w-0">DETECTION · TRACKING · EDGE AI</span>
      </motion.div>
    </motion.div>
  );
}

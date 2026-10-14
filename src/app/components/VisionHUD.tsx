"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export default function VisionHUD() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, x: -72 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: reduceMotion ? 0 : 1.1,
        delay: reduceMotion ? 0 : 0.04,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative h-[min(68vh,760px)] min-h-[450px] w-full overflow-hidden bg-transparent sm:h-[min(74vh,820px)] lg:absolute lg:inset-0 lg:h-full lg:min-h-0"
    >
      <motion.div
        className="absolute inset-0"
        animate={reduceMotion ? { scale: 1 } : { scale: [1, 1.014, 1], x: [0, -1, 0] }}
        transition={{ duration: 22, repeat: reduceMotion ? 0 : Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/ZV-hero.png"
          alt="Portrait of Zakwan with a blue cybernetic visual treatment"
          fill
          priority
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 90vw, 44vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Let the portrait dissolve naturally into the page instead of reading as a card. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(8,9,10,0.02)_0%,transparent_38%,rgba(8,9,10,0.22)_72%,#08090A_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#08090A_0%,rgba(8,9,10,0.02)_15%,rgba(8,9,10,0.02)_72%,#08090A_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_42%_40%,rgba(37,99,235,0.07),transparent_57%)]"
      />

      {/* Small interface details; no scanning line or heavy neon frame. */}
      <div className="pointer-events-none absolute left-5 top-5 z-20 h-7 w-7 border-l border-t border-cyan-200/55 sm:left-7 sm:top-7" />
      <div className="pointer-events-none absolute bottom-7 left-5 z-20 h-7 w-7 border-b border-l border-cyan-200/45 sm:bottom-9 sm:left-7" />

      <div className="absolute bottom-10 right-5 z-20 text-right font-mono text-[8px] leading-5 tracking-[0.08em] text-cyan-100/75 sm:bottom-12 sm:right-7 sm:text-[9px]">
        <div>STATUS: TRACKING_TARGET</div>
        <div className="text-cyan-100/45">VISION_SYSTEM: ACTIVE</div>
      </div>
      <div className="absolute bottom-5 right-5 z-20 flex items-center justify-end gap-2 font-mono text-[8px] tracking-[0.13em] text-white/55 sm:bottom-7 sm:right-7 sm:text-[9px]">
        <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
        LIVE VISION
      </div>
    </motion.div>
  );
}

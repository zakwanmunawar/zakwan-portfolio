"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import type { MouseEvent } from "react";

export default function VisionHUD() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Subtle movement for the HUD itself
  const hudX = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-8, 8]),
    {
      stiffness: 120,
      damping: 20,
    }
  );

  const hudY = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [-8, 8]),
    {
      stiffness: 120,
      damping: 20,
    }
  );

  // Reticle follows the cursor more noticeably
  const reticleX = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-22, 22]),
    {
      stiffness: 90,
      damping: 18,
    }
  );

  const reticleY = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [-22, 22]),
    {
      stiffness: 90,
      damping: 18,
    }
  );

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      className="relative aspect-[4/5] w-full max-w-[420px] justify-self-center overflow-hidden border border-white/10 bg-black lg:justify-self-end"
      style={{
        x: hudX,
        y: hudY,
        transformPerspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Original photograph — untouched */}
      <Image
        src="/images/zakwan-suit.jpeg"
        alt="Mohammed Zakwan M."
        fill
        priority
        className="object-cover object-center"
        sizes="(max-width: 1024px) 90vw, 420px"
      />

      {/* Cinematic overlay */}
      <div className="pointer-events-none absolute inset-0 bg-black/10" />

      {/* Subtle cyan tint */}
      <div className="pointer-events-none absolute inset-0 bg-cyan-300/[0.025]" />

      {/* HUD corners */}
      <div className="absolute left-4 top-4 h-6 w-6 border-l-2 border-t-2 border-cyan-300" />

      <div className="absolute right-4 top-4 h-6 w-6 border-r-2 border-t-2 border-cyan-300" />

      <div className="absolute bottom-4 left-4 h-6 w-6 border-b-2 border-l-2 border-cyan-300" />

      <div className="absolute bottom-4 right-4 h-6 w-6 border-b-2 border-r-2 border-cyan-300" />

      {/* Detection box */}
      <div className="detection-box absolute left-[16%] top-[12%] h-[62%] w-[68%] border border-orange-500/90">
        <div className="absolute bottom-0 right-0 bg-orange-500 px-2 py-1 font-mono text-[10px] font-bold text-black">
          HUMAN // 99.8%
        </div>

        {/* Detection corners */}
        <div className="absolute -left-px -top-px h-4 w-4 border-l-2 border-t-2 border-orange-400" />
        <div className="absolute -right-px -top-px h-4 w-4 border-r-2 border-t-2 border-orange-400" />
        <div className="absolute -bottom-px -left-px h-4 w-4 border-b-2 border-l-2 border-orange-400" />
        <div className="absolute -bottom-px -right-px h-4 w-4 border-b-2 border-r-2 border-orange-400" />
      </div>

      {/* Cursor-reactive reticle */}
      <motion.div
        className="absolute left-1/2 top-[42%] h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/50"
        style={{
          x: reticleX,
          y: reticleY,
        }}
      >
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-cyan-300/20" />

        <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-cyan-300/20" />

        <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/70 shadow-[0_0_12px_rgba(103,232,249,0.8)]" />
      </motion.div>

      {/* Animated scan line */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-cyan-300/80 shadow-[0_0_14px_#7fb8c4]"
        animate={{
          top: ["8%", "92%", "8%"],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Scan glow */}
      <motion.div
        className="absolute left-0 right-0 h-8 bg-cyan-300/[0.025]"
        animate={{
          top: ["5%", "89%", "5%"],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Telemetry */}
      <div className="absolute bottom-5 left-6 font-mono text-[10px] leading-5 text-cyan-300">
        <div>MODEL: YOLO26</div>
        <div>STATUS: TRACKING_TARGET</div>
        <div>CONFIDENCE: 99.8%</div>
      </div>

      {/* Model label */}
      <div className="absolute right-5 top-5 border border-cyan-300/30 bg-black/70 px-3 py-2 font-mono text-[9px] text-cyan-300">
        CV_SYSTEM
        <br />
        YOLOv1 → YOLO26
      </div>

      {/* Live indicator */}
      <div className="absolute bottom-5 right-5 flex items-center gap-2 font-mono text-[9px] text-white/60">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-500" />
        LIVE VISION
      </div>
    </motion.div>
  );
}
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

  // Subtle movement for the image panel
  const hudX = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-6, 6]),
    {
      stiffness: 120,
      damping: 20,
    }
  );

  const hudY = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [-6, 6]),
    {
      stiffness: 120,
      damping: 20,
    }
  );

  const handleMouseMove = (
    event: MouseEvent<HTMLDivElement>
  ) => {
    const rect =
      event.currentTarget.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) / rect.width - 0.5;

    const y =
      (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      className="
        relative
        h-[520px]
        w-full
        overflow-hidden
        border border-white/10
        bg-black
        lg:h-[calc(100vh-5rem)]
        lg:min-h-[680px]
        lg:max-h-[860px]
        lg:w-[88%]
        lg:justify-self-end
      "
      style={{
        x: hudX,
        y: hudY,
        transformPerspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main image */}
      <Image
        src="/images/ZakVision.png"
        alt="Zakwan — AI vision portrait"
        fill
        priority
        unoptimized
        sizes="(max-width: 1024px) 100vw, 45vw"
        className="object-cover object-center"
      />

      {/* Very subtle cinematic layer */}
      <div className="pointer-events-none absolute inset-0 bg-black/5" />

      {/* Minimal HUD corners */}
      <div className="pointer-events-none absolute left-4 top-4 z-20 h-6 w-6 border-l border-t border-cyan-300/70" />

      <div className="pointer-events-none absolute right-4 top-4 z-20 h-6 w-6 border-r border-t border-cyan-300/70" />

      <div className="pointer-events-none absolute bottom-4 left-4 z-20 h-6 w-6 border-b border-l border-cyan-300/70" />

      <div className="pointer-events-none absolute bottom-4 right-4 z-20 h-6 w-6 border-b border-r border-cyan-300/70" />

      {/* Minimal status */}
      <div className="absolute bottom-5 left-6 z-20 font-mono text-[9px] leading-5 text-cyan-300">
        <div>STATUS: TRACKING_TARGET</div>
        <div className="text-cyan-300/50">
          VISION_SYSTEM: ACTIVE
        </div>
      </div>

      {/* Live indicator */}
      <div className="absolute bottom-5 right-5 z-20 flex items-center gap-2 font-mono text-[9px] text-white/70">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.7)]" />
        LIVE VISION
      </div>
    </motion.div>
  );
}
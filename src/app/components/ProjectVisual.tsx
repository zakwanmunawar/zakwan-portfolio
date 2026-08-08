"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import type { MouseEvent } from "react";

type ProjectVisualProps = {
  src: string;
  alt: string;
  number: string;
};

export default function ProjectVisual({
  src,
  alt,
  number,
}: ProjectVisualProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [4, -4]),
    {
      stiffness: 180,
      damping: 20,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-4, 4]),
    {
      stiffness: 180,
      damping: 20,
    }
  );

  const imageX = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-6, 6]),
    {
      stiffness: 180,
      damping: 20,
    }
  );

  const imageY = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [-6, 6]),
    {
      stiffness: 180,
      damping: 20,
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
      className="relative overflow-hidden border border-white/10 bg-black"
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative"
        style={{
          x: imageX,
          y: imageY,
          scale: 1.02,
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={900}
          className="h-auto w-full object-cover"
        />
      </motion.div>

      {/* Cinematic overlay */}
      <div className="pointer-events-none absolute inset-0 bg-black/5" />

      {/* HUD corners */}
      <div className="pointer-events-none absolute left-3 top-3 h-5 w-5 border-l border-t border-cyan-300/70" />

      <div className="pointer-events-none absolute right-3 top-3 h-5 w-5 border-r border-t border-cyan-300/70" />

      <div className="pointer-events-none absolute bottom-3 left-3 h-5 w-5 border-b border-l border-cyan-300/70" />

      <div className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 border-b border-r border-cyan-300/70" />

      {/* Scan line */}
      <motion.div
        className="pointer-events-none absolute left-0 right-0 h-px bg-cyan-300/60"
        animate={{
          top: ["15%", "85%", "15%"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Project identifier */}
      <div className="absolute bottom-4 left-5 font-mono text-[9px] text-cyan-300/80">
        CV_SYSTEM // {number}
      </div>

      {/* Target indicator */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/40"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.35, 0.7, 0.35],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-cyan-300/30" />
        <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-cyan-300/30" />
      </motion.div>
    </motion.div>
  );
}
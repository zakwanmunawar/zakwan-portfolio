"use client";

import { motion } from "motion/react";

const focusAreas = [
  {
    number: "01",
    title: "COMPUTER VISION",
    description:
      "Object detection, tracking, image processing, and real-time vision systems.",
  },
  {
    number: "02",
    title: "DEEP LEARNING",
    description:
      "Understanding model architectures, training pipelines, losses, inference, and evaluation.",
  },
  {
    number: "03",
    title: "REAL-TIME SYSTEMS",
    description:
      "Connecting computer vision models with tracking, telemetry, alerts, and interactive interfaces.",
  },
  {
    number: "04",
    title: "SYSTEM THINKING",
    description:
      "Moving from individual models toward complete, practical AI applications.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="border-t border-white/10 px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-3xl"
        >
          <p className="font-mono text-xs text-cyan-300">
            04 // ENGINEERING PROFILE
          </p>

          <h2 className="mt-4 font-mono text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            BUILDING
            <br />
            <span className="text-blue-500">
              FROM THE INSIDE OUT
            </span>
          </h2>
        </motion.div>

        {/* Main content */}
        <div className="mt-20 grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">

          {/* Story */}
          <div>
            <p className="max-w-3xl text-xl leading-9 text-white/70">
              I am a Computer Vision Engineer in training focused on
              building real-time AI systems and understanding the
              architectures behind them.
            </p>

            <p className="mt-8 max-w-3xl text-base leading-8 text-white/40">
              I prefer understanding models from the inside out rather
              than treating them as black boxes. My work spans model
              architectures, training pipelines, losses, inference,
              tracking, and the engineering required to turn vision
              models into practical systems.
            </p>

            <p className="mt-8 max-w-3xl text-base leading-8 text-white/40">
              My computer vision journey includes implementing YOLOv1
              from scratch, working with YOLOv8 and ByteTrack for
              worker-safety monitoring, and building AeroDrop-Tracker
              around YOLO26 for real-time aerial target detection.
            </p>

            {/* Focus areas */}
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {focusAreas.map((focus) => (
                <motion.div
                  key={focus.number}
                  whileHover={{
                    y: -5,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 24,
                  }}
                  className="group border border-white/10 bg-white/[0.02] p-5 transition-colors duration-300 hover:border-cyan-300/30"
                >
                  <p className="font-mono text-[10px] text-blue-500">
                    FOCUS_{focus.number}
                  </p>

                  <h3 className="mt-3 font-mono text-sm font-bold">
                    {focus.title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-white/40">
                    {focus.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Engineering status panel */}
          <motion.div
            whileHover={{
              y: -5,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 24,
            }}
            className="group relative border border-white/10 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-cyan-300/30 sm:p-8"
          >
            {/* HUD corners */}
            <div className="absolute left-0 top-0 h-8 w-8 border-l border-t border-cyan-300/50 transition-colors duration-300 group-hover:border-cyan-300/80" />

            <div className="absolute right-0 top-0 h-8 w-8 border-r border-t border-cyan-300/50 transition-colors duration-300 group-hover:border-cyan-300/80" />

            <div className="absolute bottom-0 left-0 h-8 w-8 border-b border-l border-cyan-300/50 transition-colors duration-300 group-hover:border-cyan-300/80" />

            <div className="absolute bottom-0 right-0 h-8 w-8 border-b border-r border-cyan-300/50 transition-colors duration-300 group-hover:border-cyan-300/80" />

            <div className="font-mono text-[10px] text-cyan-300">
              ENGINEERING_PROFILE.exe
            </div>

            <div className="mt-8 space-y-5">

              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-mono text-[10px] text-white/30">
                  PRIMARY_DOMAIN
                </span>

                <span className="font-mono text-xs text-white/70">
                  COMPUTER VISION
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-mono text-[10px] text-white/30">
                  YOLO_FOUNDATION
                </span>

                <span className="font-mono text-xs text-blue-500">
                  YOLOv1
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-mono text-[10px] text-white/30">
                  TRACKING
                </span>

                <span className="font-mono text-xs text-cyan-300">
                  BYTETRACK
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-mono text-[10px] text-white/30">
                  MODERN_VISION
                </span>

                <span className="font-mono text-xs text-blue-500">
                  YOLOv8 / YOLO26
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-mono text-[10px] text-white/30">
                  FRAMEWORK
                </span>

                <span className="font-mono text-xs text-white/70">
                  PYTORCH
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-mono text-[10px] text-white/30">
                  LANGUAGE
                </span>

                <span className="font-mono text-xs text-white/70">
                  PYTHON
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-white/30">
                  CURRENT_STATE
                </span>

                <span className="flex items-center gap-2 font-mono text-xs text-blue-500">
                  <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.7)]" />
                  BUILDING
                </span>
              </div>

            </div>

            {/* Bottom system readout */}
            <div className="mt-12 border-t border-white/10 pt-5 font-mono text-[9px] leading-5 text-white/25">
              <div>MODEL_KNOWLEDGE: EXPANDING</div>
              <div>VISION_SYSTEMS: ACTIVE</div>
              <div>LEARNING_LOOP: CONTINUOUS</div>
            </div>
          </motion.div>
        </div>

        {/* Closing statement */}
        <div className="mt-20 border-t border-white/10 pt-8">
          <p className="max-w-4xl font-mono text-sm leading-7 text-white/30">
            The goal is simple: understand the model, build the system,
            measure the result, and keep improving it.
          </p>
        </div>

      </div>
    </section>
  );
}
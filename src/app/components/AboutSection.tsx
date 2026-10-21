
"use client";

import { motion } from "motion/react";

const focusAreas = [
  {
    title: "COMPUTER VISION",
    description:
      "Object detection, tracking, image processing, and real-time vision systems.",
  },
  {
    title: "DEEP LEARNING",
    description:
      "Understanding model architectures, training pipelines, losses, inference, and evaluation.",
  },
  {
    title: "REAL-TIME SYSTEMS",
    description:
      "Connecting computer vision models with tracking, telemetry, alerts, and interactive interfaces.",
  },
  {
    title: "SYSTEM THINKING",
    description:
      "Moving from individual models toward complete, practical AI applications.",
  },
];

const profileDetails = [
  { label: "PRIMARY_DOMAIN", value: "COMPUTER VISION", color: "text-white" },
  { label: "YOLO_FOUNDATION", value: "YOLOv1", color: "text-blue-400" },
  { label: "TRACKING", value: "BYTETRACK", color: "text-cyan-200" },
  { label: "MODERN_VISION", value: "YOLOv8 / YOLO26", color: "text-blue-400" },
  { label: "FRAMEWORK", value: "PYTORCH", color: "text-white" },
  { label: "LANGUAGE", value: "PYTHON", color: "text-white" },
];

const ambientCardStyle = {
  background:
    "radial-gradient(ellipse at 85% 0%, rgba(37,99,235,0.22) 0%, rgba(20,42,78,0.15) 34%, rgba(9,11,15,0.96) 78%)",
};

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden border-t border-white/10 bg-[#08090A] px-6 py-24 sm:py-32"
    >
      {/* Soft blue ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(
              ellipse at 78% 38%,
              rgba(37,99,235,0.23) 0%,
              rgba(37,99,235,0.12) 34%,
              rgba(37,99,235,0.045) 57%,
              transparent 76%
            ),
            radial-gradient(
              ellipse at 8% 78%,
              rgba(59,130,246,0.13) 0%,
              transparent 58%
            )
          `,
        }}
      />

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-3xl"
        >
          <h2 className="font-mono text-4xl font-bold tracking-tight text-[#F2F3F5] sm:text-5xl lg:text-6xl">
            BUILDING
            <br />
            <span className="text-blue-500">FROM THE INSIDE OUT</span>
          </h2>
        </motion.div>

        {/* Main content */}
        <div className="mt-16 grid items-start gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          {/* Story and focus cards */}
          <div>
            <p className="max-w-3xl text-lg leading-8 text-white/85 sm:text-xl sm:leading-9">
              I am a Computer Vision Engineer in training focused on
              building real-time AI systems and understanding the
              architectures behind them.
            </p>

            <p className="mt-7 max-w-3xl text-base leading-8 text-white/65">
              I prefer understanding models from the inside out rather
              than treating them as black boxes. My work spans model
              architectures, training pipelines, losses, inference,
              tracking, and the engineering required to turn vision
              models into practical systems.
            </p>

            <p className="mt-7 max-w-3xl text-base leading-8 text-white/65">
              My computer vision journey includes implementing YOLOv1
              from scratch, working with YOLOv8 and ByteTrack for
              worker-safety monitoring, and building AeroDrop-Tracker
              around YOLO26 for real-time aerial target detection.
            </p>

            {/* Four matching focus cards */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {focusAreas.map((focus, index) => (
                <motion.article
                  key={focus.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    scale: 1.035,
                    y: -4,
                    zIndex: 10,
                  }}
                  style={{
                    ...ambientCardStyle,
                    transformOrigin: "center center",
                  }}
                  className="group relative isolate flex min-h-[165px] flex-col justify-end overflow-hidden border border-blue-200/15 p-5 transition-colors duration-300 hover:border-blue-300/45 sm:p-6"
                >
                  {/* Blue ambient glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-12 -top-16 -z-10 h-40 w-40 bg-blue-500/[0.08] blur-3xl transition-colors duration-500 group-hover:bg-blue-400/[0.18]"
                  />

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/20 to-transparent transition-colors duration-300 group-hover:via-blue-300/60"
                  />

                  <h3 className="font-sans text-lg font-semibold tracking-tight text-white sm:text-xl">
                    {focus.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/80">
                    {focus.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Engineering profile panel */}
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -4 }}
            style={ambientCardStyle}
            className="group relative isolate overflow-hidden border border-blue-200/15 p-6 transition-colors duration-300 hover:border-blue-300/40 sm:p-8"
          >
            {/* Square HUD corners */}
            <div className="pointer-events-none absolute left-0 top-0 h-8 w-8 border-l border-t border-cyan-300/45 transition-colors group-hover:border-cyan-300/80" />
            <div className="pointer-events-none absolute right-0 top-0 h-8 w-8 border-r border-t border-cyan-300/45 transition-colors group-hover:border-cyan-300/80" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-8 w-8 border-b border-l border-cyan-300/45 transition-colors group-hover:border-cyan-300/80" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-8 w-8 border-b border-r border-cyan-300/45 transition-colors group-hover:border-cyan-300/80" />

            <div className="font-mono text-[10px] tracking-wide text-cyan-200">
              ENGINEERING_PROFILE.exe
            </div>

            <div className="mt-8 space-y-0">
              {profileDetails.map((detail) => (
                <div
                  key={detail.label}
                  className="flex items-center justify-between gap-4 border-b border-white/10 py-4 last:border-b-0"
                >
                  <span className="font-mono text-[9px] text-white/45 sm:text-[10px]">
                    {detail.label}
                  </span>

                  <span
                    className={`text-right font-mono text-[10px] sm:text-xs ${detail.color}`}
                  >
                    {detail.value}
                  </span>
                </div>
              ))}

              <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-5">
                <span className="font-mono text-[9px] text-white/45 sm:text-[10px]">
                  CURRENT_STATE
                </span>

                <span className="flex items-center gap-2 font-mono text-[10px] text-blue-300 sm:text-xs">
                  <span className="h-2 w-2 shrink-0 bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.7)]" />
                  BUILDING
                </span>
              </div>
            </div>

            {/* Compact bottom detail */}
            <div className="mt-8 border-t border-white/10 pt-5">
              <p className="text-sm leading-7 text-white/65">
                Learning through implementation, testing, and continuous
                improvement.
              </p>
            </div>
          </motion.aside>
        </div>

        {/* Closing statement */}
        <div className="mt-16 border-t border-white/10 pt-7">
          <p className="max-w-4xl font-mono text-xs leading-7 text-white/65 sm:text-sm">
            The goal is simple: understand the model, build the system,
            measure the result, and keep improving it.
          </p>
        </div>
      </div>
    </section>
  );
}

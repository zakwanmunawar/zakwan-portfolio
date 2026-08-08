"use client";

import { motion } from "motion/react";

const stack = [
  {
    number: "01",
    title: "COMPUTER VISION",
    items: [
      "YOLOv1 — From Scratch",
      "YOLOv8",
      "YOLO26",
      "OpenCV",
      "Object Detection",
      "Multi-Object Tracking",
      "ByteTrack",
    ],
  },
  {
    number: "02",
    title: "AI / MACHINE LEARNING",
    items: [
      "PyTorch",
      "Deep Learning",
      "Model Training",
      "Model Evaluation",
      "Computer Vision",
    ],
  },
  {
    number: "03",
    title: "PROGRAMMING",
    items: [
      "Python",
      "C",
      "Java",
      "SQL",
      "JavaScript",
    ],
  },
  {
    number: "04",
    title: "DEVELOPMENT",
    items: [
      "React",
      "Next.js",
      "Git",
      "GitHub",
      "REST APIs",
    ],
  },
];

export default function StackSection() {
  return (
    <section
      id="stack"
      className="relative overflow-hidden border-t border-white/10 px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
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
            03 // ENGINEERING STACK
          </p>

          <h2 className="mt-4 font-mono text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            WHAT I
            <br />
            <span className="text-orange-500">WORK WITH</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/50">
            Technologies and engineering tools I use to build computer
            vision systems, machine learning models, and interactive
            applications.
          </p>
        </motion.div>

        {/* Stack grid */}
        <div className="mt-20 grid gap-5 md:grid-cols-2">

          {stack.map((category, categoryIndex) => (
            <motion.article
              key={category.number}
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
                amount: 0.15,
              }}
              transition={{
                duration: 0.6,
                delay: categoryIndex * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden border border-white/10 bg-white/[0.02] p-6 transition-all duration-500 hover:border-cyan-300/30 hover:bg-white/[0.035] sm:p-8"
            >

              {/* Decorative corner */}
              <div className="absolute right-0 top-0 h-10 w-10 border-r border-t border-cyan-300/20 transition-colors duration-500 group-hover:border-cyan-300/60" />

              <div className="flex items-start justify-between">

                <div>
                  <p className="font-mono text-[10px] text-orange-500">
                    SYSTEM_{category.number}
                  </p>

                  <h3 className="mt-3 font-mono text-xl font-bold">
                    {category.title}
                  </h3>
                </div>

                <div className="h-3 w-3 rounded-full border border-cyan-300/60 transition-all duration-500 group-hover:bg-cyan-300 group-hover:shadow-[0_0_12px_rgba(103,232,249,0.6)]" />
              </div>

              {/* Skills */}
              <div className="mt-8 grid gap-3 sm:grid-cols-2">

                {category.items.map((item, index) => {

                  const isMajorModel =
                    item.includes("YOLOv1") ||
                    item === "YOLO26";

                  return (
                    <div
                      key={item}
                      className={`flex items-center gap-3 border-b border-white/5 pb-3 font-mono text-xs transition-colors duration-300 ${
                        isMajorModel
                          ? "text-orange-500"
                          : "text-white/50 group-hover:text-white/70"
                      }`}
                    >
                      <span
                        className={`text-[9px] ${
                          isMajorModel
                            ? "text-orange-500/70"
                            : "text-cyan-300/50"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span>{item}</span>

                      {isMajorModel && (
                        <span className="ml-auto text-[8px] text-orange-500/60">
                          CORE
                        </span>
                      )}
                    </div>
                  );
                })}

              </div>

              {/* Bottom status */}
              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4 font-mono text-[9px]">
                <span className="text-white/20">
                  MODULE_STATUS
                </span>

                <span className="text-cyan-300/60">
                  ACTIVE
                </span>
              </div>

            </motion.article>
          ))}

        </div>

        {/* YOLO connection */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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
            duration: 0.6,
            delay: 0.2,
          }}
          className="mt-10 border border-orange-500/20 bg-orange-500/[0.025] p-6 sm:p-8"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <p className="font-mono text-[10px] text-orange-500">
                VISION_PIPELINE
              </p>

              <p className="mt-3 font-mono text-sm leading-7 text-white/60">
                YOLOv1
                <span className="mx-2 text-orange-500">→</span>
                YOLOv8
                <span className="mx-2 text-orange-500">→</span>
                YOLO26
              </p>

              <p className="mt-2 max-w-2xl text-xs leading-6 text-white/35">
                From implementing YOLOv1 from scratch to using YOLOv8 for
                worker tracking and YOLO26 in AeroDrop-Tracker.
              </p>
            </div>

            <div className="shrink-0 font-mono text-[9px] text-cyan-300/60">
              DETECTION_SYSTEMS: ACTIVE
            </div>

          </div>
        </motion.div>

        {/* Bottom statement */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-white/30">
            FOCUS: COMPUTER VISION // AI // REAL-TIME SYSTEMS
          </p>

          <p className="font-mono text-xs text-orange-500">
            SYSTEM STATUS: ONLINE
          </p>
        </div>

      </div>
    </section>
  );
}
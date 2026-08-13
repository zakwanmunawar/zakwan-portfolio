"use client";

import { motion } from "motion/react";
import { useEffect, useRef } from "react";

const yoloVersions = [
  "YOLOv1",
  "YOLOv2",
  "YOLOv3",
  "YOLOv4",
  "YOLOv5",
  "YOLOv6",
  "YOLOv7",
  "YOLOv8",
  "YOLOv9",
  "YOLOv10",
  "YOLO11",
  "YOLO12",
  "YOLO13",
  "YOLO26",
];

export default function YoloTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = timelineRef.current;

    if (!container) return;

    const handleWheel = (event: WheelEvent) => {
      const maxScrollLeft =
        container.scrollWidth - container.clientWidth;

      const currentScrollLeft = container.scrollLeft;

      const scrollingRight = event.deltaY > 0;
      const scrollingLeft = event.deltaY < 0;

      const canScrollRight =
        scrollingRight && currentScrollLeft < maxScrollLeft;

      const canScrollLeft =
        scrollingLeft && currentScrollLeft > 0;

      if (canScrollRight || canScrollLeft) {
        event.preventDefault();

        container.scrollLeft += event.deltaY;
      }
    };

    container.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section
      id="timeline"
      className="relative overflow-hidden border-t border-white/10 px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
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
            01 // VISION EVOLUTION
          </p>

          <h2 className="mt-4 font-mono text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            YOLOv1
            <span className="text-blue-500"> → </span>
            YOLO26
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/50">
            Following the evolution of real-time object detection — from the
            original YOLO architecture to the modern YOLO26 generation.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-20">

          {/* Main timeline line */}
          <div className="absolute left-0 right-0 top-1/2 h-px bg-white/10" />

          {/* Horizontally scrolling timeline */}
          <div
            ref={timelineRef}
            className="relative flex gap-10 overflow-x-auto overscroll-x-contain pb-8 pt-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {yoloVersions.map((version, index) => {
              const isFirst = index === 0;
              const isLast = index === yoloVersions.length - 1;

              return (
                <motion.div
                  key={version}
                  className="group relative min-w-[150px] shrink-0"
                  initial={{
                    opacity: 0,
                    y: 24,
                    scale: 0.96,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.35,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: Math.min(index * 0.035, 0.25),
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {/* Timeline node */}
                  <div className="relative z-10 flex justify-center">
                    <motion.div
                      className={`h-4 w-4 rounded-full border-2 ${
                        isFirst || isLast
                          ? "border-blue-500 bg-blue-500 shadow-[0_0_18px_rgba(59,130,246,0.5)]"
                          : "border-cyan-300/50 bg-[#08090a]"
                      }`}
                      whileHover={{
                        scale: 1.2,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    />
                  </div>

                  {/* Version card */}
                  <motion.div
                    className={`mt-8 border p-4 ${
                      isFirst || isLast
                        ? "border-blue-500/40 bg-blue-500/[0.04]"
                        : "border-white/10 bg-white/[0.02] group-hover:border-cyan-300/40"
                    }`}
                    whileHover={{
                      y: -5,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 24,
                    }}
                  >
                    <div className="font-mono text-[10px] text-white/30">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="mt-2 font-mono text-sm font-semibold">
                      {version}
                    </div>

                    <div className="mt-2 font-mono text-[9px] text-cyan-300/50">
                      {isFirst
                        ? "FOUNDATION"
                        : isLast
                          ? "CURRENT"
                          : "GENERATION"}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom statement */}
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
            delay: 0.4,
          }}
          className="mt-10 flex flex-col justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center"
        >
          <p className="max-w-2xl font-mono text-sm leading-6 text-white/40">
            Not just using detection models — understanding how the
            architecture evolved.
          </p>

          <div className="font-mono text-xs text-blue-500">
            REAL-TIME OBJECT DETECTION // 2015 → 2026
          </div>
        </motion.div>

      </div>
    </section>
  );
}
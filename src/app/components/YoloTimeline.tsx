"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type YoloInfo = {
  year: string;
  type: "IMPLEMENTED" | "REFERENCE";
  description: string;
  backbone: string;
  neck: string;
  head: string;
  image: string;
};

const yoloData: Record<string, YoloInfo> = {
  YOLOv1: {
    year: "2015",
    type: "IMPLEMENTED",
    description:
      "The original YOLO formulation treated object detection as a single regression problem, establishing the foundation for real-time single-stage detection.",
    backbone: "Darknet-24",
    neck: "None",
    head: "YOLO Detection Head",
    image: "/yolo/yolo-v1.png",
  },

  YOLOv2: {
    year: "2016",
    type: "IMPLEMENTED",
    description:
      "YOLOv2 improved the original system with batch normalization, anchor boxes, higher-resolution training and multi-scale training.",
    backbone: "Darknet-19",
    neck: "Passthrough",
    head: "Anchor-based Detection Head",
    image: "/yolo/yolo-v2.jpg",
  },

  YOLOv3: {
    year: "2018",
    type: "IMPLEMENTED",
    description:
      "YOLOv3 introduced a deeper Darknet-53 backbone and predictions at multiple scales to improve detection across different object sizes.",
    backbone: "Darknet-53",
    neck: "FPN-style",
    head: "Multi-scale Detection Head",
    image: "/yolo/yolo-v3.webp",
  },

  YOLOv4: {
    year: "2020",
    type: "REFERENCE",
    description:
      "YOLOv4 focused heavily on improving detection accuracy and training efficiency through a combination of architectural and training techniques.",
    backbone: "CSPDarknet53",
    neck: "SPP + PAN",
    head: "YOLO Detection Head",
    image: "/yolo/yolo-v4.jpg",
  },

  YOLOv5: {
    year: "2020",
    type: "REFERENCE",
    description:
      "YOLOv5 became a highly practical PyTorch-based implementation widely used for real-time object detection experiments and applications.",
    backbone: "CSP-based",
    neck: "PANet",
    head: "Detect Head",
    image: "/yolo/yolo-v5.png",
  },

  YOLOv6: {
    year: "2022",
    type: "REFERENCE",
    description:
      "YOLOv6 was designed with strong emphasis on industrial deployment, inference efficiency and practical real-time performance.",
    backbone: "EfficientRep",
    neck: "Rep-PAN",
    head: "Efficient Decoupled Head",
    image: "/yolo/yolo-v6.png",
  },

  YOLOv7: {
    year: "2022",
    type: "IMPLEMENTED",
    description:
      "YOLOv7 introduced architectural and training improvements aimed at maximizing real-time detection performance.",
    backbone: "E-ELAN",
    neck: "PAN",
    head: "YOLO Detection Head",
    image: "/yolo/yolo-v7.jpg",
  },

  YOLOv8: {
    year: "2023",
    type: "IMPLEMENTED",
    description:
      "YOLOv8 modernized the YOLO design with an anchor-free detection approach and an updated C2f-based architecture.",
    backbone: "C2f-based Backbone",
    neck: "PAN-FPN",
    head: "Anchor-free Decoupled Head",
    image: "/yolo/yolo-v8.jpeg",
  },

  YOLOv9: {
    year: "2024",
    type: "IMPLEMENTED",
    description:
      "YOLOv9 introduced GELAN and Programmable Gradient Information to improve feature learning and information flow through the network.",
    backbone: "GELAN",
    neck: "GELAN-based Feature Aggregation",
    head: "Detection Head",
    image: "/yolo/yolo-v9.jpg",
  },

  YOLOv10: {
    year: "2024",
    type: "IMPLEMENTED",
    description:
      "YOLOv10 explored end-to-end object detection with a focus on reducing post-processing overhead and enabling NMS-free inference.",
    backbone: "YOLO-based Backbone",
    neck: "PAN-style",
    head: "End-to-End Detection Head",
    image: "/yolo/yolo-v10.jpg",
  },

  YOLO11: {
    year: "2024",
    type: "IMPLEMENTED",
    description:
      "YOLO11 continued improving the accuracy-efficiency tradeoff with updated feature extraction and aggregation components.",
    backbone: "C3k2-based",
    neck: "PAN-FPN",
    head: "Anchor-free Head",
    image: "/yolo/yolo-11.jpg",
  },

  YOLO12: {
    year: "2025",
    type: "IMPLEMENTED",
    description:
      "YOLO12 explores attention-centric improvements for real-time object detection while maintaining efficient inference.",
    backbone: "Attention-enhanced",
    neck: "Feature Aggregation",
    head: "Detection Head",
    image: "/yolo/yolo-12.jpg",
  },

  YOLO26: {
    year: "2026",
    type: "IMPLEMENTED",
    description:
      "YOLO26 represents the current endpoint of this architecture study, extending the evolution toward modern end-to-end real-time detection.",
    backbone: "Modern YOLO Backbone",
    neck: "Modern Feature Pyramid",
    head: "End-to-End Detection Head",
    image: "/yolo/yolo-26.png",
  },
};

const yoloVersions = Object.keys(yoloData);

export default function YoloTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);

  const [selectedVersion, setSelectedVersion] =
    useState<string | null>(null);

  // Convert vertical wheel input into horizontal timeline scrolling.
  useEffect(() => {
    const container = timelineRef.current;

    if (!container) return;

    const handleWheel = (event: WheelEvent) => {
      const maxScrollLeft =
        container.scrollWidth - container.clientWidth;

      const currentScrollLeft = container.scrollLeft;

      const canScrollRight =
        event.deltaY > 0 && currentScrollLeft < maxScrollLeft;

      const canScrollLeft =
        event.deltaY < 0 && currentScrollLeft > 0;

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

  // Close the modal with Escape.
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedVersion(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <section
      id="timeline"
      className="relative isolate overflow-hidden border-t border-white/10 bg-[#08090A] px-6 py-32"
    >
      {/* Soft blue ambient background */}
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
        {/* Section heading — simplified */}
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
          <h2 className="mt-0 font-mono text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            YOLOv1
            <span className="text-blue-500">
              {" "}→{" "}
            </span>
            YOLO26
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/50">
            Explore the evolution of real-time object detection through
            architecture, implementation, and engineering.
          </p>
        </motion.div>

        {/* Horizontal timeline */}
        <div className="relative mt-20">
          <div className="pointer-events-none absolute left-0 right-0 top-1/2 h-px bg-blue-300/10" />

          <div
            ref={timelineRef}
            className="
              relative
              flex
              gap-10
              overflow-x-auto
              overscroll-x-contain
              px-2
              pb-10
              pt-10
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {yoloVersions.map((version, index) => {
              const isFirst = index === 0;
              const isLast = index === yoloVersions.length - 1;
              const data = yoloData[version];

              return (
                <motion.button
                  key={version}
                  type="button"
                  onClick={() => setSelectedVersion(version)}
                  whileHover={{ zIndex: 30 }}
                  className="
                    group
                    relative
                    w-[188px]
                    min-w-[188px]
                    shrink-0
                    cursor-pointer
                    text-left
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-blue-300/70
                    focus-visible:ring-offset-4
                    focus-visible:ring-offset-[#08090A]
                  "
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
                      className={`
                        h-4
                        w-4
                        rounded-full
                        border-2
                        transition-all
                        duration-300
                        ${
                          isFirst || isLast
                            ? `
                              border-blue-400
                              bg-blue-400
                              shadow-[0_0_18px_rgba(59,130,246,0.55)]
                            `
                            : `
                              border-cyan-300/50
                              bg-[#08090A]
                              group-hover:border-blue-300
                              group-hover:bg-blue-400/70
                            `
                        }
                      `}
                      whileHover={{ scale: 1.3 }}
                    />
                  </div>

                  {/* Uniform square card with a visible hover zoom */}
                  <motion.div
                    className="
                      relative
                      mt-8
                      h-[174px]
                      w-full
                      origin-center
                      transform-gpu
                      overflow-hidden
                      border
                      border-blue-300/20
                      bg-[#08090A]/90
                      p-4
                      shadow-[inset_0_1px_0_rgba(147,197,253,0.06)]
                      transition-[border-color,box-shadow]
                      duration-300
                      group-hover:border-blue-300/80
                      group-hover:shadow-[0_0_32px_rgba(37,99,235,0.28),inset_0_1px_0_rgba(147,197,253,0.16)]
                    "
                    style={{
                      background:
                        "radial-gradient(ellipse at 78% 0%, rgba(37,99,235,0.26) 0%, rgba(23,45,80,0.22) 34%, rgba(8,9,10,0.97) 78%)",
                    }}
                    whileHover={{
                      scale: 1.12,
                      y: -8,
                      zIndex: 30,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 22,
                    }}
                  >
                    {/* Subtle blue light inside the card */}
                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        -z-10
                        bg-[radial-gradient(ellipse_at_80%_0%,rgba(59,130,246,0.16),transparent_62%)]
                        opacity-80
                        transition-opacity
                        duration-300
                        group-hover:opacity-100
                      "
                    />

                    <div className="relative z-10 flex h-full flex-col">
                      <div className="font-mono text-[10px] text-white/40">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div className="mt-2 font-mono text-sm font-semibold text-white/95">
                        {version}
                      </div>

                      <div
                        className={`
                          mt-2
                          font-mono
                          text-[9px]
                          tracking-[0.08em]
                          ${
                            data.type === "IMPLEMENTED"
                              ? "text-blue-300/90"
                              : "text-cyan-200/70"
                          }
                        `}
                      >
                        {data.type}
                      </div>

                      <div className="mt-1 font-mono text-[9px] text-white/40">
                        {data.year}
                      </div>

                      <div className="mt-auto pt-2 font-mono text-[8px] tracking-[0.04em] text-blue-200/0 transition-colors duration-300 group-hover:text-blue-200/90">
                        CLICK TO EXPLORE →
                      </div>
                    </div>
                  </motion.div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Bottom statement — secondary label removed */}
        <div className="mt-10 border-t border-white/10 pt-8">
          <p className="max-w-2xl font-mono text-sm leading-6 text-white/50">
            Not just using detection models — understanding how the
            architecture evolved.
          </p>
        </div>
      </div>

      {/* Architecture detail modal */}
      <AnimatePresence>
        {selectedVersion && (
          <motion.div
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              bg-black/80
              p-4
              backdrop-blur-sm
              sm:p-6
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVersion(null)}
          >
            <motion.div
              className="
                max-h-[90vh]
                w-full
                max-w-5xl
                overflow-y-auto
                border
                border-blue-300/20
                bg-[#08090A]
                p-6
                shadow-[0_0_50px_rgba(37,99,235,0.12)]
                sm:p-8
              "
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.96,
              }}
              onClick={(event) => event.stopPropagation()}
            >
              {(() => {
                const data = yoloData[selectedVersion];

                return (
                  <>
                    {/* Modal header */}
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <p
                          className={`
                            font-mono
                            text-xs
                            ${
                              data.type === "IMPLEMENTED"
                                ? "text-blue-400"
                                : "text-cyan-300"
                            }
                          `}
                        >
                          {data.type}
                        </p>

                        <h3 className="mt-2 font-mono text-3xl font-bold sm:text-4xl">
                          {selectedVersion}
                        </h3>

                        <p className="mt-2 font-mono text-sm text-white/40">
                          {data.year}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => setSelectedVersion(null)}
                        className="
                          border
                          border-white/10
                          px-3
                          py-2
                          font-mono
                          text-sm
                          text-white/50
                          transition
                          hover:border-blue-400/50
                          hover:text-white
                          focus-visible:outline-none
                          focus-visible:ring-2
                          focus-visible:ring-blue-300/70
                        "
                      >
                        ESC
                      </button>
                    </div>

                    {/* Description */}
                    <p className="mt-8 max-w-3xl text-base leading-7 text-white/60">
                      {data.description}
                    </p>

                    {/* Architecture image */}
                    <div className="mt-8 overflow-hidden border border-blue-300/15 bg-black/60">
                      <div className="border-b border-blue-300/10 px-4 py-3 font-mono text-[10px] text-blue-200/75">
                        ARCHITECTURE // {selectedVersion}
                      </div>

                      <div className="flex min-h-[240px] items-center justify-center bg-black/50 p-4 sm:min-h-[300px]">
                        <Image
                          src={data.image}
                          alt={`${selectedVersion} architecture`}
                          width={1400}
                          height={800}
                          className="h-auto max-h-[520px] w-full object-contain"
                        />
                      </div>
                    </div>

                    {/* Architecture breakdown */}
                    <div className="mt-8 grid gap-4 md:grid-cols-3">
                      <InfoBox
                        title="BACKBONE"
                        value={data.backbone}
                      />

                      <InfoBox
                        title="NECK"
                        value={data.neck}
                      />

                      <InfoBox
                        title="HEAD"
                        value={data.head}
                      />
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function InfoBox({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div
      className="
        border
        border-blue-300/15
        bg-[radial-gradient(ellipse_at_80%_0%,rgba(37,99,235,0.12),rgba(8,9,10,0.96)_76%)]
        p-5
        shadow-[inset_0_1px_0_rgba(147,197,253,0.05)]
      "
    >
      <div className="font-mono text-[10px] text-blue-200/60">
        {title}
      </div>

      <div className="mt-2 font-mono text-sm text-white/80">
        {value}
      </div>
    </div>
  );
}
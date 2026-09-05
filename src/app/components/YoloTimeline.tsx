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
  github: string;
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
    github:
      "https://github.com/zakwanmunawar/YOLO-Evolution-PyTorch/blob/master/models/yolov01.py",
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
    github:
      "https://github.com/zakwanmunawar/YOLO-Evolution-PyTorch/blob/master/models/yolov02.py",
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
    github:
      "https://github.com/zakwanmunawar/YOLO-Evolution-PyTorch/blob/master/models/yolov03.py",
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
    github:
      "https://github.com/zakwanmunawar/YOLO-Evolution-PyTorch/tree/master/external_repos/yolov4_darknet",
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
    github:
      "https://github.com/zakwanmunawar/YOLO-Evolution-PyTorch/tree/master/external_repos/yolov5",
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
    github:
      "https://github.com/zakwanmunawar/YOLO-Evolution-PyTorch/tree/master/external_repos/yolov6",
  },

  YOLOv7: {
    year: "2022",
    type: "IMPLEMENTED",
    description:
      "YOLOv7 introduced architectural and training improvements aimed at maximizing real-time detection performance.",
    backbone: "E-ELAN",
    neck: "PAN",
    head: "YOLO Detection Head",
    image: "/yolo/yolo-v7.png",
    github:
      "https://github.com/zakwanmunawar/YOLO-Evolution-PyTorch/blob/master/models/yolov07.py",
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
    github:
      "https://github.com/zakwanmunawar/YOLO-Evolution-PyTorch/blob/master/models/yolov08.py",
  },

  YOLOv9: {
    year: "2024",
    type: "IMPLEMENTED",
    description:
      "YOLOv9 introduced GELAN and Programmable Gradient Information to improve feature learning and information flow through the network.",
    backbone: "GELAN",
    neck: "GELAN-based Feature Aggregation",
    head: "Detection Head",
    image: "/yolo/yolo-v9.png",
    github:
      "https://github.com/zakwanmunawar/YOLO-Evolution-PyTorch/blob/master/models/yolov09.py",
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
    github:
      "https://github.com/zakwanmunawar/YOLO-Evolution-PyTorch/blob/master/models/yolov10.py",
  },

  YOLO11: {
    year: "2024",
    type: "IMPLEMENTED",
    description:
      "YOLO11 continued improving the accuracy-efficiency tradeoff with updated feature extraction and aggregation components.",
    backbone: "C3k2-based",
    neck: "PAN-FPN",
    head: "Anchor-free Head",
    image: "/yolo/yolo-11.png",
    github:
      "https://github.com/zakwanmunawar/YOLO-Evolution-PyTorch/blob/master/models/yolov11.py",
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
    github:
      "https://github.com/zakwanmunawar/YOLO-Evolution-PyTorch/blob/master/models/yolov12.py",
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
    github:
      "https://github.com/zakwanmunawar/YOLO-Evolution-PyTorch/blob/master/models/yolo26.py",
  },
};

const yoloVersions = Object.keys(yoloData);

export default function YoloTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);

  const [selectedVersion, setSelectedVersion] =
    useState<string | null>(null);

  useEffect(() => {
    const container = timelineRef.current;

    if (!container) return;

    const handleWheel = (event: WheelEvent) => {
      const maxScrollLeft =
        container.scrollWidth -
        container.clientWidth;

      const currentScrollLeft =
        container.scrollLeft;

      const scrollingRight =
        event.deltaY > 0;

      const scrollingLeft =
        event.deltaY < 0;

      const canScrollRight =
        scrollingRight &&
        currentScrollLeft < maxScrollLeft;

      const canScrollLeft =
        scrollingLeft &&
        currentScrollLeft > 0;

      if (canScrollRight || canScrollLeft) {
        event.preventDefault();

        container.scrollLeft += event.deltaY;
      }
    };

    container.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      container.removeEventListener(
        "wheel",
        handleWheel
      );
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedVersion(null);
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );
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

        {/* Timeline */}
        <div className="relative mt-20">

          {/* Timeline line */}
          <div className="absolute left-0 right-0 top-1/2 h-px bg-white/10" />

          {/* Horizontal timeline */}
          <div
            ref={timelineRef}
            className="
              relative
              flex
              gap-10
              overflow-x-auto
              overscroll-x-contain
              pb-8
              pt-8
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {yoloVersions.map(
              (version, index) => {
                const isFirst =
                  index === 0;

                const isLast =
                  index ===
                  yoloVersions.length - 1;

                const data =
                  yoloData[version];

                return (
                  <motion.button
                    key={version}
                    type="button"
                    onClick={() =>
                      setSelectedVersion(
                        version
                      )
                    }
                    className="
                      group
                      relative
                      min-w-[150px]
                      shrink-0
                      cursor-pointer
                      text-left
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
                      delay: Math.min(
                        index * 0.035,
                        0.25
                      ),
                      ease: [
                        0.22,
                        1,
                        0.36,
                        1,
                      ],
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
                                border-blue-500
                                bg-blue-500
                                shadow-[0_0_18px_rgba(59,130,246,0.5)]
                              `
                              : `
                                border-cyan-300/50
                                bg-[#08090a]
                              `
                          }
                        `}
                        whileHover={{
                          scale: 1.3,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                      />
                    </div>

                    {/* Timeline card */}
                    <motion.div
                      className={`
                        mt-8
                        border
                        p-4
                        transition-colors
                        duration-300
                        ${
                          isFirst || isLast
                            ? `
                              border-blue-500/40
                              bg-blue-500/[0.04]
                            `
                            : `
                              border-white/10
                              bg-white/[0.02]
                              group-hover:border-cyan-300/40
                            `
                        }
                      `}
                      whileHover={{
                        y: -6,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 24,
                      }}
                    >
                      <div className="font-mono text-[10px] text-white/30">
                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </div>

                      <div className="mt-2 font-mono text-sm font-semibold">
                        {version}
                      </div>

                      <div
                        className={`
                          mt-2
                          font-mono
                          text-[9px]
                          ${
                            data.type ===
                            "IMPLEMENTED"
                              ? "text-blue-500/70"
                              : "text-cyan-300/50"
                          }
                        `}
                      >
                        {data.type}
                      </div>

                      <div className="mt-1 font-mono text-[9px] text-white/30">
                        {data.year}
                      </div>

                      <div className="mt-3 font-mono text-[8px] text-blue-500/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        CLICK TO EXPLORE →
                      </div>
                    </motion.div>
                  </motion.button>
                );
              }
            )}
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-10 flex flex-col justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="max-w-2xl font-mono text-sm leading-6 text-white/40">
            Not just using detection models — understanding how the
            architecture evolved.
          </p>

          <div className="font-mono text-xs text-blue-500">
            YOLO EVOLUTION // ARCHITECTURE → IMPLEMENTATION
          </div>
        </div>
      </div>

      {/* Detail modal */}
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
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() =>
              setSelectedVersion(null)
            }
          >
            <motion.div
              className="
                max-h-[90vh]
                w-full
                max-w-5xl
                overflow-y-auto
                border
                border-white/10
                bg-[#08090a]
                p-6
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
              onClick={(event) =>
                event.stopPropagation()
              }
            >
              {(() => {
                const data =
                  yoloData[selectedVersion];

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
                              data.type ===
                              "IMPLEMENTED"
                                ? "text-blue-500"
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
                        onClick={() =>
                          setSelectedVersion(
                            null
                          )
                        }
                        className="
                          border
                          border-white/10
                          px-3
                          py-2
                          font-mono
                          text-sm
                          text-white/50
                          transition
                          hover:border-blue-500/50
                          hover:text-white
                        "
                      >
                        ESC
                      </button>
                    </div>

                    {/* Description */}
                    <p className="mt-8 max-w-3xl text-base leading-7 text-white/60">
                      {data.description}
                    </p>

                    {/* Architecture */}
                    <div className="mt-8 overflow-hidden border border-white/10 bg-black">
                      <div className="border-b border-white/10 px-4 py-3 font-mono text-[10px] text-cyan-300/70">
                        ARCHITECTURE //{" "}
                        {selectedVersion}
                      </div>

                      <div className="flex min-h-[240px] items-center justify-center bg-black p-4 sm:min-h-[300px]">
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

                    {/* Code */}
                    <div className="mt-8 border border-white/10 bg-white/[0.02] p-5">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <div className="font-mono text-[10px] text-cyan-300/60">
                            {data.type ===
                            "IMPLEMENTED"
                              ? "IMPLEMENTATION"
                              : "REFERENCE IMPLEMENTATION"}
                          </div>

                          <div className="mt-2 font-mono text-sm text-white/70">
                            YOLO-Evolution-PyTorch
                          </div>
                        </div>

                        <a
                          href={data.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            inline-flex
                            w-fit
                            bg-blue-500
                            px-5
                            py-3
                            font-mono
                            text-xs
                            font-semibold
                            text-black
                            transition
                            hover:bg-blue-400
                          "
                        >
                          VIEW CODE →
                        </a>
                      </div>
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
    <div className="border border-white/10 bg-white/[0.02] p-5">
      <div className="font-mono text-[10px] text-cyan-300/50">
        {title}
      </div>

      <div className="mt-2 font-mono text-sm text-white/80">
        {value}
      </div>
    </div>
  );
}
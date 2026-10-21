
"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import type { MouseEvent } from "react";

import Reveal from "./Reveal";

const projects = [
  {
    number: "01",
    category: "AUTONOMOUS VISION",
    title: "AeroDrop-Tracker",
    image: "/images/aerodrop.png",
    description:
      "An AI-powered drone vision system for real-time aerial target detection, X/Y spatial offset calculation, and stable target lock-on.",
    features: [
      "Aerial target detection",
      "Spatial offset calculation",
      "5-frame lock-on stability",
    ],
    technologies: ["COMPUTER VISION", "PYTHON", "AI"],
    github: "https://github.com/zakwanmunawar/AeroDrop-Tracker",
  },
  {
    number: "02",
    category: "INDUSTRIAL SAFETY",
    title: "Worker Safety System",
    image: "/images/worker-safety.jpeg",
    description:
      "A real-time safety monitoring system combining YOLOv8, ByteTrack, PPE violation detection, and hazard-zone monitoring.",
    features: [
      "PPE violation detection",
      "Multi-object tracking",
      "Hazard-zone monitoring",
    ],
    technologies: ["YOLOv8", "BYTETRACK", "REACT"],
    github: "https://github.com/zakwanmunawar/worker-safety-system",
  },
  {
    number: "03",
    category: "AGRICULTURAL AI",
    title: "AgriVision AI",
    subtitle: "Pest Surveillance",
    image: "/images/pest-detector.png",
    description:
      "An agricultural pest surveillance system using YOLO26 Nano, ByteTrack, MQTT telemetry, and a React monitoring console.",
    features: [
      "Pest detection and tracking",
      "MQTT detection telemetry",
      "Surveillance dashboard",
    ],
    technologies: ["YOLO26 NANO", "FASTAPI", "MQTT"],
    github:
      "https://github.com/zakwanmunawar/agrivision-pest-surveillance",
  },
  {
    number: "04",
    category: "SMART CITY AI",
    title: "Manhole Detection",
    subtitle: "& Open Drain Detection",
    image: "/images/prj96-manhole.png",
    description:
      "An AI-assisted urban hazard reporting prototype with YOLO inference, geographic tagging, and repair-priority scoring.",
    features: [
      "Manhole and drain detection",
      "Geographic coordinate tagging",
      "Hazard repair prioritization",
    ],
    technologies: ["YOLO", "FASTAPI", "OPENCV"],
    github: "https://github.com/zakwanmunawar/Manhole-Detection",
  },
];

type Project = (typeof projects)[number];

const stackOffsets = ["160%", "54%", "-54%", "-160%"];
const stackRotations = [-6, -3, 3, 6];

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [2, -2]),
    { stiffness: 180, damping: 23 }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-2, 2]),
    { stiffness: 180, damping: 23 }
  );

  function handleMouseMove(event: MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();

    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.article
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{
  x: 0,
  y: 24,
  scale: 0.94,
  rotate: 0,
  opacity: 1,
  zIndex: 40 - index,
}}
      whileInView={{
        x: "0%",
        y: 0,
        scale: 1,
        rotate: 0,
        zIndex: index + 1,
      }}
      whileHover={{
        scale: 1.09,
        y: -13,
        zIndex: 50,
        transition: {
          type: "spring",
          stiffness: 280,
          damping: 22,
        },
      }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 21,
        mass: 0.8,
        delay: index * 0.065,
      }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1200,
        transformStyle: "preserve-3d",
      }}
      className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0b1220] shadow-[0_12px_40px_rgba(0,0,0,0.22)] transition-[border-color,box-shadow] duration-300 hover:border-blue-300/50 hover:shadow-[0_24px_65px_rgba(37,99,235,0.24)]"
    >
      {/* Card header */}
      <div className="flex items-center justify-between gap-2 border-b border-white/[0.07] px-4 py-3.5">
        <div className="flex min-w-0 items-center gap-2">
          <span className="shrink-0 font-mono text-xs text-blue-300">
            {project.number}
          </span>

          <span className="h-3 w-px shrink-0 bg-white/15" />

          <span className="truncate font-mono text-[9px] tracking-wider text-white/45">
            {project.category}
          </span>
        </div>

        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400 transition-all duration-300 group-hover:scale-150 group-hover:bg-cyan-300" />
      </div>

      {/* Project image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#070c16]">
        <Image
          src={project.image}
          alt={`${project.title} project preview`}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070c16]/65 via-transparent to-blue-950/10" />

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(37,99,235,0.25),transparent_70%)] opacity-40 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Image corner markers */}
        <div className="pointer-events-none absolute inset-3 rounded-xl border border-white/10 transition-colors duration-300 group-hover:border-blue-300/30" />

        <span className="absolute bottom-5 left-5 font-mono text-[9px] tracking-widest text-white/70">
          PROJECT_{project.number}
        </span>
      </div>

      {/* Details */}
      <div className="flex flex-1 flex-col p-4 ">
        <div className="flex-1">
          <h3 className="font-mono text-lg font-semibold leading-snug tracking-tight text-white transition-colors duration-300 group-hover:text-blue-200">
            {project.title}
          </h3>

          {project.subtitle && (
            <p className="mt-1 font-mono text-[10px] text-blue-300/70">
              {project.subtitle}
            </p>
          )}

          <p className="mt-3 text-xs leading-5 text-white/50">
            {project.description}
          </p>

          <div className="mt-4 space-y-2">
            {project.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-2 text-[10px] leading-5 text-white/60"
              >
                <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-blue-400 transition-colors group-hover:bg-cyan-300" />
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Technology tags */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-blue-300/15 bg-blue-400/[0.04] px-2 py-1.5 font-mono text-[8px] tracking-wide text-blue-100/70 transition-colors duration-300 group-hover:border-blue-300/30"
            >
              {technology}
            </span>
          ))}
        </div>

        
      </div>

      {/* Blue highlight on hover */}
      <div className="pointer-events-none absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-400/0 to-transparent transition-all duration-300 group-hover:via-cyan-300/80" />
    </motion.article>
  );
}

export default function ProjectSection() {
  return (
    <section
      id="work"
      className="relative isolate border-t border-white/[0.08] bg-[#0b1220] px-5 py-24 sm:px-6 sm:py-28 lg:py-32"
    >
      {/* Background lighting and grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 10% 20%, rgba(37,99,235,0.18), transparent 35%), radial-gradient(ellipse at 90% 55%, rgba(14,165,233,0.10), transparent 35%), linear-gradient(rgba(148,163,184,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.035) 1px, transparent 1px)",
          backgroundSize: "auto, auto, 48px 48px, 48px 48px",
        }}
      />

      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-12 max-w-3xl sm:mb-16">
          <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.18em] text-cyan-300 sm:text-xs">
            <span className="h-px w-8 bg-cyan-300/70" />
            SELECTED WORK
            <span className="text-white/30">// 04 PROJECTS</span>
          </div>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.055em] text-white sm:text-5xl lg:text-7xl">
            Systems built
            <span className="text-blue-400">.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/50 sm:text-base sm:leading-8">
            Computer vision and AI systems engineered for detection,
            tracking, automation, and real-world monitoring.
          </p>
        </Reveal>

        {/* Four cards: one row on desktop */}
        <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 xl:gap-6">
          {projects.map((project, index) => (
            <div key={project.number} className="relative h-full min-w-0">
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}

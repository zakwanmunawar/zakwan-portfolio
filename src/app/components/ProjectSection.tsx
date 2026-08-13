"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import type { MouseEvent } from "react";

import Reveal from "./Reveal";
import ProjectVisual from "./ProjectVisual";

const projects = [
  {
    number: "01",
    title: "AeroDrop-Tracker",
    image: "/images/aerodrop.png",
    description:
      "An AI-powered autonomous drone software system that uses computer vision to detect ground targets from an aerial perspective in real time. The system tracks the target's relative position, calculates X/Y spatial offset errors against a central crosshair, and requires five consecutive frames of lock-on stability before dispatch.",
    highlights: [
      "Real-time aerial target detection",
      "X/Y spatial offset calculation",
      "5-frame lock-on stability",
      "Automated payload dispatch signal",
      "Visual and audio telemetry alarms",
    ],
    technologies: [
      "COMPUTER VISION",
      "PYTHON",
      "AI",
      "REAL-TIME DETECTION",
    ],
    github: "https://github.com/zakwanmunawar/AeroDrop-Tracker",
  },
  {
    number: "02",
    title: "worker-safety-system",
    image: "/images/worker-safety.png",
    description:
      "A real-time worker safety system using YOLOv8 and ByteTrack to detect and track workers, identify PPE violations, and determine whether workers enter a predefined hazard zone. A React dashboard visualizes violations, hazard breaches, snapshots, processed video, and real-time audio alerts.",
    highlights: [
      "YOLOv8 worker detection",
      "ByteTrack multi-object tracking",
      "PPE violation detection",
      "Hazard zone / geofence monitoring",
      "React monitoring dashboard",
      "Real-time audio alerts",
    ],
    technologies: [
      "YOLOv8",
      "BYTETRACK",
      "COMPUTER VISION",
      "REACT",
      "PYTHON",
    ],
    github: "https://github.com/zakwanmunawar/worker-safety-system",
  },
];

function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [2.5, -2.5]),
    {
      stiffness: 180,
      damping: 22,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-2.5, 2.5]),
    {
      stiffness: 180,
      damping: 22,
    }
  );

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
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
    <motion.article
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1200,
      }}
      className="group relative overflow-hidden border border-white/10 bg-white/[0.02] transition-colors duration-500 hover:border-cyan-300/30"
    >
      {/* Project header */}
      <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 font-mono text-[10px]">
        <span className="text-white/30">
          PROJECT_{project.number}
        </span>

        <span className="text-cyan-300/70">
          COMPLETED
        </span>
      </div>

      <div className="grid gap-10 p-6 lg:grid-cols-[1.1fr_1fr] lg:p-10">
        {/* Project visual */}
        <ProjectVisual
          src={project.image}
          alt={`${project.title} project`}
          number={project.number}
        />

        {/* Project information */}
        <div className="flex flex-col justify-center">
          {/* BLUE PROJECT NUMBER */}
          <div className="font-mono text-xs text-blue-500">
            {project.number} / 02
          </div>

          <h3 className="mt-3 font-mono text-2xl font-bold tracking-tight sm:text-3xl">
            {project.title}
          </h3>

          <p className="mt-5 max-w-xl text-sm leading-7 text-white/50">
            {project.description}
          </p>

          {/* Capabilities */}
          <div className="mt-7">
            <p className="font-mono text-[10px] text-white/30">
              SYSTEM CAPABILITIES
            </p>

            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {project.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-start gap-2 font-mono text-[10px] text-white/50"
                >
                  {/* BLUE CAPABILITY MARKER */}
                  <span className="mt-1 h-1 w-1 shrink-0 bg-blue-500" />
                  {highlight}
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mt-8 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="border border-cyan-300/20 px-3 py-1.5 font-mono text-[9px] text-cyan-300/70 transition-colors duration-300 hover:border-cyan-300/50 hover:text-cyan-300"
              >
                {technology}
              </span>
            ))}
          </div>

          {/* GitHub */}
          <div className="mt-10">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex border border-white/20 px-5 py-3 font-mono text-[10px] text-white/70 transition-all duration-300 hover:border-blue-500 hover:text-blue-500"
            >
              VIEW SOURCE →
            </a>
          </div>
        </div>
      </div>

      {/* Subtle cinematic edge glow */}
      <div className="pointer-events-none absolute inset-0 border border-cyan-300/0 transition-colors duration-500 group-hover:border-cyan-300/[0.06]" />
    </motion.article>
  );
}

export default function ProjectSection() {
  return (
    <section
      id="work"
      className="border-t border-white/10 px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <Reveal className="max-w-3xl">
          <p className="font-mono text-xs text-cyan-300">
            02 // FEATURED PROJECTS
          </p>

          <h2 className="mt-4 font-mono text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            SYSTEMS
            <br />
            {/* BLUE BUILT */}
            <span className="text-blue-500">
              BUILT
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/50">
            Real-world AI and computer vision systems designed, implemented,
            and tested through hands-on engineering.
          </p>
        </Reveal>

        {/* Projects */}
        <div className="mt-20 space-y-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.number}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
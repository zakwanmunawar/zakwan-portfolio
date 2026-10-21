"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

type VisionState =
  | "SCANNING"
  | "TARGET_ACQUIRED"
  | "TRACKING"
  | "SYSTEM_ONLINE";

function VisionScene({
  progressRef,
}: {
  progressRef: React.MutableRefObject<number>;
}) {
  const group = useRef<THREE.Group>(null);
  const target = useRef<THREE.Group>(null);
  const box = useRef<THREE.Group>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    const progress = progressRef.current;

    if (group.current) {
      group.current.rotation.y = Math.sin(time * 0.25) * 0.08;
      group.current.rotation.x = Math.sin(time * 0.18) * 0.025;
    }

    if (target.current) {
      target.current.rotation.z = time * 0.35;
      target.current.scale.setScalar(
        1 + Math.sin(time * 2) * 0.05
      );
    }

    if (box.current) {
      const x = THREE.MathUtils.lerp(-0.7, 0.7, progress);
      const y = THREE.MathUtils.lerp(0.3, -0.3, progress);

      box.current.position.x = THREE.MathUtils.lerp(
        box.current.position.x,
        x,
        0.05
      );

      box.current.position.y = THREE.MathUtils.lerp(
        box.current.position.y,
        y,
        0.05
      );
    }
  });

  return (
    <group ref={group}>
      {/* Spatial grids */}
      <gridHelper args={[8, 16, "#234d83", "#12233d"]} />

      <gridHelper
        args={[8, 16, "#234d83", "#12233d"]}
        rotation={[Math.PI / 2, 0, 0]}
      />

      {/* Detection volume */}
      <group ref={box}>
        <lineSegments>
          <edgesGeometry
            args={[new THREE.BoxGeometry(2.8, 2.8, 2.8)]}
          />
          <lineBasicMaterial color="#3b82f6" />
        </lineSegments>

        {[
          [-1.4, 1.4, 1.4],
          [1.4, 1.4, 1.4],
          [-1.4, -1.4, 1.4],
          [1.4, -1.4, 1.4],
          [-1.4, 1.4, -1.4],
          [1.4, 1.4, -1.4],
          [-1.4, -1.4, -1.4],
          [1.4, -1.4, -1.4],
        ].map((position, index) => (
          <mesh
            key={index}
            position={position as [number, number, number]}
          >
            <sphereGeometry args={[0.045, 12, 12]} />
            <meshBasicMaterial color="#93c5fd" />
          </mesh>
        ))}
      </group>

      {/* Targeting reticle */}
      <group ref={target}>
        <mesh>
          <torusGeometry args={[0.55, 0.025, 12, 48]} />
          <meshBasicMaterial color="#93e7ff" />
        </mesh>

        <mesh>
          <ringGeometry args={[0.12, 0.16, 32]} />
          <meshBasicMaterial color="#93e7ff" />
        </mesh>

        <mesh>
          <boxGeometry args={[1.5, 0.012, 0.012]} />
          <meshBasicMaterial color="#93e7ff" />
        </mesh>

        <mesh>
          <boxGeometry args={[0.012, 1.5, 0.012]} />
          <meshBasicMaterial color="#93e7ff" />
        </mesh>
      </group>
    </group>
  );
}

function getVisionState(progress: number): VisionState {
  if (progress < 0.25) return "SCANNING";
  if (progress < 0.5) return "TARGET_ACQUIRED";
  if (progress < 0.75) return "TRACKING";
  return "SYSTEM_ONLINE";
}

export default function VisionCore3D() {
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const [visionState, setVisionState] =
    useState<VisionState>("SCANNING");

  useEffect(() => {
    return scrollYProgress.on("change", (value) => {
      progressRef.current = value;

      const nextState = getVisionState(value);

      setVisionState((current) =>
        current === nextState ? current : nextState
      );
    });
  }, [scrollYProgress]);

  return (
    <section
      ref={sectionRef}
      id="vision-core"
      className="relative isolate overflow-hidden border-t border-blue-300/10 px-6 py-24 sm:py-32"
    >
      {/* Ambient blue lighting — same visual language as the YOLO section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_85%_90%,rgba(37,99,235,0.20),transparent_48%),radial-gradient(ellipse_at_12%_10%,rgba(37,99,235,0.09),transparent_42%),linear-gradient(180deg,#0a1020_0%,#080b13_55%,#08090a_100%)]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section introduction */}
        <div className="mb-10 max-w-3xl">
          <h2 className="font-mono text-4xl font-bold leading-tight tracking-tight text-[#F2F3F5] sm:text-5xl lg:text-6xl">
            VISION CORE
            <br />
            <span className="text-blue-500">SPATIAL DETECTION</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
            Explore how a computer vision system can represent an
            object in three-dimensional space. The wireframe illustrates
            a detection volume, while the central reticle marks a target
            reference point. Rotate the scene to explore the spatial
            layout and watch the visualization respond as you scroll.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] tracking-[0.12em] text-blue-100/80 sm:text-xs">
            <span>3D SPATIAL VIEW</span>
            <span className="text-white/25">/</span>
            <span>OBJECT LOCALIZATION</span>
            <span className="text-white/25">/</span>
            <span>INTERACTIVE MODEL</span>
          </div>
        </div>

        {/* 3D visualization panel — sharp corners, blue ambient glow */}
        <div className="relative h-[420px] w-full overflow-hidden border border-blue-300/20 bg-[radial-gradient(ellipse_at_75%_15%,rgba(37,99,235,0.16),transparent_48%),radial-gradient(ellipse_at_20%_100%,rgba(37,99,235,0.12),transparent_50%),linear-gradient(145deg,rgba(12,22,42,0.97),rgba(5,8,14,0.98))] shadow-[0_0_70px_rgba(37,99,235,0.08)] sm:h-[500px] lg:h-[560px]">
          <Canvas
            camera={{
              position: [5, 4, 5],
              fov: 45,
            }}
            dpr={[1, 1.5]}
          >
            <ambientLight intensity={0.6} />
            <VisionScene progressRef={progressRef} />

            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.35}
              minPolarAngle={Math.PI / 2.5}
              maxPolarAngle={Math.PI / 1.8}
            />
          </Canvas>

          {/* HUD overlay */}
          <div className="pointer-events-none absolute inset-0">
            {/* Sharp corner brackets */}
            <div className="absolute left-4 top-4 h-7 w-7 border-l border-t border-blue-300/70" />
            <div className="absolute right-4 top-4 h-7 w-7 border-r border-t border-blue-300/70" />
            <div className="absolute bottom-4 left-4 h-7 w-7 border-b border-l border-blue-300/70" />
            <div className="absolute bottom-4 right-4 h-7 w-7 border-b border-r border-blue-300/70" />

            {/* System identification */}
            <div className="absolute left-7 top-7 font-mono text-[10px] leading-5 text-blue-100/85 sm:text-xs">
              <div>VISION_CORE</div>
              <div className="text-white/50">SPATIAL_DETECTION</div>
            </div>

            {/* Live state */}
            <div className="absolute right-7 top-7 border border-blue-300/25 bg-[#080d18]/80 px-4 py-3 font-mono text-[10px] text-blue-200 sm:text-xs">
              <div className="text-white/50">SYSTEM STATE</div>
              <div className="mt-2 text-blue-300">{visionState}</div>
            </div>

            {/* Bottom telemetry */}
            <div className="absolute bottom-7 left-7 space-y-1 font-mono text-[10px] leading-5 text-white/55 sm:text-xs">
              <div>SYSTEM: ONLINE</div>
              <div>MODE: 3D_ANALYSIS</div>
              <div className="text-blue-200">TARGET: LOCKED</div>
            </div>

            <div className="absolute bottom-7 right-7 font-mono text-[10px] text-blue-300 sm:text-xs">
              YOLO26
            </div>

            {/* Center-bottom caption */}
            <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 whitespace-nowrap font-mono text-[9px] tracking-[0.2em] text-white/40 sm:block">
              REAL-TIME VISION CORE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
    const progress = progressRef.current;

    if (group.current) {
      group.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.25) * 0.08;

      group.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.18) * 0.025;
    }

    if (target.current) {
      target.current.rotation.z =
        state.clock.elapsedTime * 0.35;

      const targetScale = 1 + Math.sin(
        state.clock.elapsedTime * 2
      ) * 0.05;

      target.current.scale.setScalar(targetScale);
    }

    if (box.current) {
      /*
       * The detection box gradually shifts as the
       * user progresses through the section.
       */
      const x = THREE.MathUtils.lerp(
        -0.7,
        0.7,
        progress
      );

      const y = THREE.MathUtils.lerp(
        0.3,
        -0.3,
        progress
      );

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

      {/* Main horizontal grid */}
      <gridHelper
        args={[8, 16, "#17343a", "#0b1c20"]}
      />

      {/* Vertical spatial grid */}
      <gridHelper
        args={[8, 16, "#17343a", "#0b1c20"]}
        rotation={[Math.PI / 2, 0, 0]}
      />

      {/* Detection box */}
      <group ref={box}>

        <lineSegments>
          <edgesGeometry
            args={[
              new THREE.BoxGeometry(
                2.8,
                2.8,
                2.8
              ),
            ]}
          />

          <lineBasicMaterial
            color="#f97316"
          />
        </lineSegments>

        {/* Detection points */}
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
            position={
              position as [
                number,
                number,
                number
              ]
            }
          >
            <sphereGeometry
              args={[0.045, 12, 12]}
            />

            <meshBasicMaterial
              color="#67e8f9"
            />
          </mesh>
        ))}

      </group>

      {/* Central targeting system */}
      <group ref={target}>

        {/* Outer reticle */}
        <mesh>
          <torusGeometry
            args={[
              0.55,
              0.025,
              12,
              48,
            ]}
          />

          <meshBasicMaterial
            color="#67e8f9"
          />
        </mesh>

        {/* Inner reticle */}
        <mesh>
          <ringGeometry
            args={[
              0.12,
              0.16,
              32,
            ]}
          />

          <meshBasicMaterial
            color="#67e8f9"
          />
        </mesh>

        {/* Horizontal targeting line */}
        <mesh>
          <boxGeometry
            args={[
              1.5,
              0.012,
              0.012,
            ]}
          />

          <meshBasicMaterial
            color="#67e8f9"
          />
        </mesh>

        {/* Vertical targeting line */}
        <mesh>
          <boxGeometry
            args={[
              0.012,
              1.5,
              0.012,
            ]}
          />

          <meshBasicMaterial
            color="#67e8f9"
          />
        </mesh>

      </group>

    </group>
  );
}

function getVisionState(
  progress: number
): VisionState {
  if (progress < 0.25) {
    return "SCANNING";
  }

  if (progress < 0.5) {
    return "TARGET_ACQUIRED";
  }

  if (progress < 0.75) {
    return "TRACKING";
  }

  return "SYSTEM_ONLINE";
}

export default function VisionCore3D() {
  const sectionRef =
    useRef<HTMLDivElement>(null);

  const progressRef = useRef(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: [
      "start end",
      "end start",
    ],
  });

  const [visionState, setVisionState] =
    useState<VisionState>("SCANNING");

  useEffect(() => {
    const unsubscribe =
      scrollYProgress.on("change", (value) => {
        progressRef.current = value;

        const nextState =
          getVisionState(value);

        setVisionState((current) =>
          current === nextState
            ? current
            : nextState
        );
      });

    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <section
      ref={sectionRef}
      className="px-6 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* 3D container */}
        <div className="relative h-[420px] w-full overflow-hidden border border-white/10 bg-[#050708] sm:h-[500px]">

          <Canvas
            camera={{
              position: [5, 4, 5],
              fov: 45,
            }}
            dpr={[1, 1.5]}
          >
            <ambientLight intensity={0.4} />

            <VisionScene
              progressRef={progressRef}
            />

            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.35}
              minPolarAngle={
                Math.PI / 2.5
              }
              maxPolarAngle={
                Math.PI / 1.8
              }
            />
          </Canvas>

          {/* HUD overlay */}
          <div className="pointer-events-none absolute inset-0">

            {/* Top-left corners */}
            <div className="absolute left-4 top-4 h-7 w-7 border-l border-t border-cyan-300/70" />

            {/* Top-right corners */}
            <div className="absolute right-4 top-4 h-7 w-7 border-r border-t border-cyan-300/70" />

            {/* Bottom-left corners */}
            <div className="absolute bottom-4 left-4 h-7 w-7 border-b border-l border-cyan-300/70" />

            {/* Bottom-right corners */}
            <div className="absolute bottom-4 right-4 h-7 w-7 border-b border-r border-cyan-300/70" />

            {/* System identification */}
            <div className="absolute left-6 top-6 font-mono text-[9px] leading-4 text-cyan-300/80">
              <div>VISION_CORE</div>
              <div>SPATIAL_DETECTION</div>
            </div>

            {/* Live state */}
            <div className="absolute right-6 top-6 border border-cyan-300/20 bg-black/40 px-3 py-2 font-mono text-[9px] text-cyan-300">
              <div className="text-white/30">
                SYSTEM_STATE
              </div>

              <div className="mt-1">
                {visionState}
              </div>
            </div>

            {/* Bottom telemetry */}
            <div className="absolute bottom-6 left-6 font-mono text-[9px] leading-5 text-white/40">
              <div>
                SYSTEM: ONLINE
              </div>

              <div>
                MODE: 3D_ANALYSIS
              </div>

              <div className="text-cyan-300/60">
                TARGET: LOCKED
              </div>
            </div>

            {/* Model */}
            <div className="absolute bottom-6 right-6 font-mono text-[9px] text-orange-500">
              YOLO26
            </div>

          </div>

          {/* State indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[8px] tracking-[0.25em] text-white/25">
            REAL-TIME VISION CORE
          </div>

        </div>

      </div>
    </section>
  );
}
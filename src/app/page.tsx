import SiteNav from "./components/SiteNav";
import VisionHUD from "./components/VisionHUD";
import HeroIntro from "./components/HeroIntro";
import YoloTimeline from "./components/YoloTimeline";
import ProjectSection from "./components/ProjectSection";
import StackSection from "./components/StackSection";
import AboutSection from "./components/AboutSection";
import ConnectSection from "./components/ConnectSection";
import VisionCore3D from "./components/VisionCore3D";

export default function Home() {
  return (
    <main
      id="top"
      className="relative min-h-screen overflow-x-hidden bg-[#08090A] text-[#E9E7E1]"
    >
      {/* Subtle ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_18%,rgba(22,45,72,0.10),transparent_40%)]"
      />

      <SiteNav />

      {/* Hero */}
      <section
        id="hero"
        className="relative isolate min-h-screen overflow-hidden pt-[68px]"
      >
        {/* Technical grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: `
              linear-gradient(#25282c 1px, transparent 1px),
              linear-gradient(90deg, #25282c 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse 82% 70% at 34% 42%, black 18%, transparent 82%)",
          }}
        />

        {/* Ambient hero lighting — brighter blue glow only at bottom-right */}
<div
  aria-hidden="true"
  className="pointer-events-none absolute inset-0"
  style={{
    background: `
      radial-gradient(
        ellipse at 100% 100%,
        rgba(37, 99, 235, 0.28) 0%,
        rgba(37, 99, 235, 0.16) 20%,
        rgba(37, 99, 235, 0.06) 38%,
        transparent 58%
      )
    `,
  }}
/>

        {/* New soft blue glow — bottom-right of hero */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -right-32 z-0 h-[420px] w-[420px] rounded-full opacity-90 blur-3xl lg:-bottom-48 lg:-right-40 lg:h-[680px] lg:w-[680px]"
          style={{
            background:
              "radial-gradient(circle, rgba(37, 99, 235, 0.22) 0%, rgba(37, 99, 235, 0.11) 32%, rgba(29, 78, 216, 0.04) 52%, transparent 72%)",
          }}
        />

        {/* Hero layout: portrait left, animated introduction right */}
        <div className="relative grid min-h-[calc(100svh-68px)] w-full grid-cols-1 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)]">
          {/* LEFT: Cinematic portrait */}
          <div className="relative z-10 min-h-[min(68vh,760px)] w-full sm:min-h-[min(74vh,820px)] lg:min-h-[calc(100svh-68px)]">
            <VisionHUD />
          </div>

          {/* RIGHT: Animated introduction */}
          <div className="relative z-10 flex min-w-0 items-center px-6 pb-20 pt-10 sm:px-10 sm:pb-24 lg:min-h-[calc(100svh-68px)] lg:px-8 lg:py-16 xl:px-10 2xl:px-14">
            <HeroIntro />
          </div>
        </div>
      </section>

      {/* YOLO Evolution */}
      <YoloTimeline />

      {/* Interactive 3D Vision Core */}
      <VisionCore3D />

      {/* Featured Projects */}
      <ProjectSection />

      {/* Engineering Stack */}
      <StackSection />

      {/* About */}
      <AboutSection />

      {/* Contact */}
      <ConnectSection />
    </main>
  );
}
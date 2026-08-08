import VisionHUD from "./components/VisionHUD";
import YoloTimeline from "./components/YoloTimeline";
import ProjectSection from "./components/ProjectSection";
import StackSection from "./components/StackSection";
import AboutSection from "./components/AboutSection";
import ConnectSection from "./components/ConnectSection";
import VisionCore3D from "./components/VisionCore3D";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08090a] text-[#e9e7e1]">

      {/* Navigation */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#08090a]/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

          <a
            href="#top"
            className="flex items-center gap-2 font-mono text-sm font-bold"
          >
            <span className="h-2 w-2 bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.7)]" />
            ZAKWAN. M
          </a>

          <div className="hidden items-center gap-8 font-mono text-xs text-white/50 md:flex">
            <a
              href="#work"
              className="transition hover:text-orange-500"
            >
              PROJECTS
            </a>

            <a
              href="#stack"
              className="transition hover:text-orange-500"
            >
              STACK
            </a>

            <a
              href="#about"
              className="transition hover:text-orange-500"
            >
              ABOUT
            </a>

            <a
              href="#contact"
              className="bg-orange-500 px-4 py-2 font-semibold text-black transition hover:bg-orange-400"
            >
              CONTACT
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="top"
        className="relative flex min-h-screen items-center overflow-hidden pt-16"
      >
        {/* Background grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(#25282c 1px, transparent 1px),
              linear-gradient(90deg, #25282c 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 85%)",
          }}
        />

        <div className="relative mx-auto grid w-full max-w-7xl gap-16 px-6 py-32 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

          {/* Left */}
          <div>
            <div className="mb-6 flex items-center gap-3 font-mono text-xs text-cyan-300">
              <span className="h-px w-5 bg-cyan-300" />
              $ whoami
            </div>

            <h1 className="font-mono text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              MOHAMMED
              <br />
              ZAKWAN M
              <span className="text-orange-500">.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60 sm:text-xl">
              Computer Vision Engineer in training. I build{" "}
              <span className="font-semibold text-white">
                object detection systems
              </span>{" "}
              and explore how modern vision models work from the inside out.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="border border-white/10 bg-white/[0.03] px-3 py-2 font-mono text-xs text-white/60">
                BANGALORE, INDIA
              </span>

              <span className="border border-white/10 bg-white/[0.03] px-3 py-2 font-mono text-xs text-white/60">
                AI & ML
              </span>

              <span className="border border-white/10 bg-white/[0.03] px-3 py-2 font-mono text-xs text-white/60">
                COMPUTER VISION
              </span>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#work"
                className="bg-orange-500 px-6 py-3 font-mono text-sm font-semibold text-black transition hover:-translate-y-1 hover:bg-orange-400"
              >
                VIEW PROJECTS →
              </a>

              <a
                href="mailto:zakwan1292003@gmail.com"
                className="border border-white/10 px-6 py-3 font-mono text-sm transition hover:border-cyan-300 hover:text-cyan-300"
              >
                GET IN TOUCH
              </a>
            </div>
          </div>

          {/* Right — Interactive Vision HUD */}
          <VisionHUD />
        </div>
      </section>

      {/* YOLO Timeline */}
      <YoloTimeline />

      <VisionCore3D />

      {/* Projects */}
      <ProjectSection />

      {/* Engineering Stack */}
      <StackSection />

      {/* Engineering Profile */}
      <AboutSection />
      
      {/* Resume / GitHub / LinkedIn / Email */}
      <ConnectSection />

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 font-mono text-[10px] text-white/25 sm:flex-row">
          <span>
            MOHAMMED ZAKWAN M. // COMPUTER VISION
          </span>

          <span>
            © 2026
          </span>

          <span className="text-orange-500">
            SYSTEM_STATUS: ONLINE
          </span>
        </div>
      </footer>

    </main>
  );
}
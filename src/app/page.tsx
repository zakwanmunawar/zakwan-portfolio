import VisionHUD from "./components/VisionHUD";
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
      className="min-h-screen overflow-x-hidden bg-[#08090A] text-[#E9E7E1]"
    >
      {/* Navigation */}
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#08090A]/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <a
            href="#top"
            className="font-mono text-sm font-bold tracking-tight text-white"
          >
            {/* 1. Small square before ZAKWAN. M */}
            <span className="mr-2 inline-block h-2 w-2 bg-blue-500" />
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

            {/* 3. CONTACT */}
            <a
              href="#contact"
              className="bg-blue-500 px-4 py-2 font-semibold text-black transition hover:bg-blue-400"
            >
              CONTACT
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="hero"
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

        <div className="relative mx-auto grid min-h-screen w-full max-w-[1600px] gap-12 px-8 pb-24 pt-20 lg:grid-cols-[1fr_1fr] lg:items-start xl:px-12">
          {/* Left */}
          <div className="mt-0">
            <div className="mb-6 flex items-center gap-3 font-mono text-xs text-cyan-300">
              <span className="h-px w-5 bg-cyan-300" />
              $ whoami
            </div>

            <h1 className="font-mono text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              MOHAMMED
              <br />
              ZAKWAN M
              {/* 2. Small square/dot after Mohammed Zakwan M */}
              <span className="text-blue-500">.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white sm:text-xl">
              <span className="font-semibold text-white">
                Computer Vision
              </span>{" "}
              Engineer in training. I build{" "}
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
              {/* 4. VIEW PROJECTS */}
              <a
                href="#work"
                className="bg-blue-500 px-6 py-3 font-mono text-sm font-semibold text-black transition hover:-translate-y-1 hover:bg-blue-400"
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

          {/* Right — Vision HUD */}
          <div className="lg:-mr-6 lg:-mt-28">
            <VisionHUD />
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
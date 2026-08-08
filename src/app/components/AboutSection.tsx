export default function AboutSection() {
  return (
    <section
      id="about"
      className="border-t border-white/10 px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="max-w-3xl">
          <p className="font-mono text-xs text-cyan-300">
            04 // ENGINEERING PROFILE
          </p>

          <h2 className="mt-4 font-mono text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            BUILDING
            <br />
            <span className="text-orange-500">
              FROM THE INSIDE OUT
            </span>
          </h2>
        </div>

        {/* Main content */}
        <div className="mt-20 grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">

          {/* Story */}
          <div>

            <p className="max-w-3xl text-xl leading-9 text-white/70">
              I am a Computer Vision Engineer in training focused on
              building real-time AI systems and understanding the
              architectures behind them.
            </p>

            <p className="mt-8 max-w-3xl text-base leading-8 text-white/40">
              I prefer understanding models from the inside out rather
              than treating them as black boxes. My work spans model
              architectures, training pipelines, losses, inference,
              tracking, and the engineering required to turn vision
              models into practical systems.
            </p>

            <p className="mt-8 max-w-3xl text-base leading-8 text-white/40">
              My computer vision journey includes implementing YOLOv1
              from scratch, working with YOLOv8 and ByteTrack for
              worker-safety monitoring, and building AeroDrop-Tracker
              around YOLO26 for real-time aerial target detection.
            </p>

            {/* Focus areas */}
            <div className="mt-12 grid gap-4 sm:grid-cols-2">

              {/* Focus 01 */}
              <div className="border border-white/10 bg-white/[0.02] p-5 transition-colors duration-300 hover:border-cyan-300/30">
                <p className="font-mono text-[10px] text-orange-500">
                  FOCUS_01
                </p>

                <h3 className="mt-3 font-mono text-sm font-bold">
                  COMPUTER VISION
                </h3>

                <p className="mt-2 text-xs leading-6 text-white/40">
                  Object detection, tracking, image processing, and
                  real-time vision systems.
                </p>
              </div>

              {/* Focus 02 */}
              <div className="border border-white/10 bg-white/[0.02] p-5 transition-colors duration-300 hover:border-cyan-300/30">
                <p className="font-mono text-[10px] text-orange-500">
                  FOCUS_02
                </p>

                <h3 className="mt-3 font-mono text-sm font-bold">
                  DEEP LEARNING
                </h3>

                <p className="mt-2 text-xs leading-6 text-white/40">
                  Understanding model architectures, training pipelines,
                  losses, inference, and evaluation.
                </p>
              </div>

              {/* Focus 03 */}
              <div className="border border-white/10 bg-white/[0.02] p-5 transition-colors duration-300 hover:border-cyan-300/30">
                <p className="font-mono text-[10px] text-orange-500">
                  FOCUS_03
                </p>

                <h3 className="mt-3 font-mono text-sm font-bold">
                  REAL-TIME SYSTEMS
                </h3>

                <p className="mt-2 text-xs leading-6 text-white/40">
                  Connecting computer vision models with tracking,
                  telemetry, alerts, and interactive interfaces.
                </p>
              </div>

              {/* Focus 04 */}
              <div className="border border-white/10 bg-white/[0.02] p-5 transition-colors duration-300 hover:border-cyan-300/30">
                <p className="font-mono text-[10px] text-orange-500">
                  FOCUS_04
                </p>

                <h3 className="mt-3 font-mono text-sm font-bold">
                  SYSTEM THINKING
                </h3>

                <p className="mt-2 text-xs leading-6 text-white/40">
                  Moving from individual models toward complete,
                  practical AI applications.
                </p>
              </div>

            </div>
          </div>

          {/* Engineering status panel */}
          <div className="relative border border-white/10 bg-white/[0.02] p-6 sm:p-8">

            {/* HUD corners */}
            <div className="absolute left-0 top-0 h-8 w-8 border-l border-t border-cyan-300/50" />
            <div className="absolute right-0 top-0 h-8 w-8 border-r border-t border-cyan-300/50" />
            <div className="absolute bottom-0 left-0 h-8 w-8 border-b border-l border-cyan-300/50" />
            <div className="absolute bottom-0 right-0 h-8 w-8 border-b border-r border-cyan-300/50" />

            <div className="font-mono text-[10px] text-cyan-300">
              ENGINEERING_PROFILE.exe
            </div>

            <div className="mt-8 space-y-5">

              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-mono text-[10px] text-white/30">
                  PRIMARY_DOMAIN
                </span>

                <span className="font-mono text-xs text-white/70">
                  COMPUTER VISION
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-mono text-[10px] text-white/30">
                  YOLO_FOUNDATION
                </span>

                <span className="font-mono text-xs text-orange-500">
                  YOLOv1
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-mono text-[10px] text-white/30">
                  TRACKING
                </span>

                <span className="font-mono text-xs text-cyan-300">
                  BYTETRACK
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-mono text-[10px] text-white/30">
                  MODERN_VISION
                </span>

                <span className="font-mono text-xs text-orange-500">
                  YOLOv8 / YOLO26
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-mono text-[10px] text-white/30">
                  FRAMEWORK
                </span>

                <span className="font-mono text-xs text-white/70">
                  PYTORCH
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-mono text-[10px] text-white/30">
                  LANGUAGE
                </span>

                <span className="font-mono text-xs text-white/70">
                  PYTHON
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-white/30">
                  CURRENT_STATE
                </span>

                <span className="flex items-center gap-2 font-mono text-xs text-orange-500">
                  <span className="h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.7)]" />
                  BUILDING
                </span>
              </div>

            </div>

            {/* Bottom system readout */}
            <div className="mt-12 border-t border-white/10 pt-5 font-mono text-[9px] leading-5 text-white/25">
              <div>MODEL_KNOWLEDGE: EXPANDING</div>
              <div>VISION_SYSTEMS: ACTIVE</div>
              <div>LEARNING_LOOP: CONTINUOUS</div>
            </div>

          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-20 border-t border-white/10 pt-8">
          <p className="max-w-4xl font-mono text-sm leading-7 text-white/30">
            The goal is simple: understand the model, build the system,
            measure the result, and keep improving it.
          </p>
        </div>

      </div>
    </section>
  );
}
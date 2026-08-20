export default function ConnectSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/10 px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="max-w-3xl">
          <p className="font-mono text-xs text-cyan-300">
            05 // CONNECT
          </p>

          <h2 className="mt-4 font-mono text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            LET&apos;S BUILD
            <br />
            <span className="text-blue-500">SOMETHING</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/50">
            Interested in computer vision, AI systems, or building something
            interesting together? Find me through the links below.
          </p>
        </div>

        {/* Main panel */}
        <div className="relative mt-16 overflow-hidden border border-white/10 bg-white/[0.02]">

          {/* HUD corners */}
          <div className="absolute left-0 top-0 h-10 w-10 border-l border-t border-cyan-300/50" />
          <div className="absolute right-0 top-0 h-10 w-10 border-r border-t border-cyan-300/50" />
          <div className="absolute bottom-0 left-0 h-10 w-10 border-b border-l border-cyan-300/50" />
          <div className="absolute bottom-0 right-0 h-10 w-10 border-b border-r border-cyan-300/50" />

          <div className="grid lg:grid-cols-[1fr_1.4fr]">

            {/* Identity */}
            <div className="border-b border-white/10 p-8 lg:border-b-0 lg:border-r lg:p-12">

              <p className="font-mono text-[10px] text-white/30">
                ENGINEER_ID
              </p>

              <h3 className="mt-4 font-mono text-2xl font-bold">
                MOHAMMED
                <br />
                ZAKWAN M.
              </h3>

              <p className="mt-5 font-mono text-xs leading-6 text-cyan-300/70">
                COMPUTER VISION
                <br />
                ENGINEER IN TRAINING
              </p>

              <div className="mt-10 space-y-4 border-t border-white/10 pt-6">

                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-white/30">
                    LOCATION
                  </span>

                  <span className="font-mono text-xs text-white/60">
                    BANGALORE, INDIA
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-white/30">
                    DOMAIN
                  </span>

                  <span className="font-mono text-xs text-white/60">
                    COMPUTER VISION
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-white/30">
                    STATUS
                  </span>

                  <span className="flex items-center gap-2 font-mono text-xs text-blue-500">
                    <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.7)]" />
                    OPEN TO OPPORTUNITIES
                  </span>
                </div>

              </div>
            </div>

            {/* Links */}
            <div className="p-8 lg:p-12">

              <p className="font-mono text-[10px] text-white/30">
                ACCESS_POINTS
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">

                {/* Resume */}
                <a
                  href="/zak's_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border border-blue-500/40 bg-blue-500/[0.04] p-5 transition-all duration-300 hover:border-blue-500 hover:bg-blue-500/10"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-blue-500">
                      RESUME
                    </span>

                    <span className="font-mono text-xs text-blue-500 transition-transform duration-300 group-hover:translate-x-1">
                      ↗
                    </span>
                  </div>

                  <p className="mt-3 font-mono text-[10px] text-white/40">
                    VIEW / DOWNLOAD CV
                  </p>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/zakwanmunawar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border border-white/10 p-5 transition-all duration-300 hover:border-cyan-300/40"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold">
                      GITHUB
                    </span>

                    <span className="font-mono text-xs text-cyan-300 transition-transform duration-300 group-hover:translate-x-1">
                      ↗
                    </span>
                  </div>

                  <p className="mt-3 font-mono text-[10px] text-white/40">
                    PROJECTS / SOURCE CODE
                  </p>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/mohammed-zakwan-m/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border border-white/10 p-5 transition-all duration-300 hover:border-cyan-300/40"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold">
                      LINKEDIN
                    </span>

                    <span className="font-mono text-xs text-cyan-300 transition-transform duration-300 group-hover:translate-x-1">
                      ↗
                    </span>
                  </div>

                  <p className="mt-3 font-mono text-[10px] text-white/40">
                    PROFESSIONAL PROFILE
                  </p>
                </a>

                {/* Email */}
                <a
                  href="mailto:zakwan1292003@gmail.com"
                  className="group border border-white/10 p-5 transition-all duration-300 hover:border-cyan-300/40"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold">
                      EMAIL
                    </span>

                    <span className="font-mono text-xs text-cyan-300 transition-transform duration-300 group-hover:translate-x-1">
                      ↗
                    </span>
                  </div>

                  <p className="mt-3 break-all font-mono text-[10px] text-white/40">
                    zakwan1292003@gmail.com
                  </p>
                </a>

              </div>

              {/* System readout */}
              <div className="mt-8 border-t border-white/10 pt-5 font-mono text-[9px] leading-5 text-white/25">
                <div>GITHUB_CONNECTION: AVAILABLE</div>
                <div>LINKEDIN_CONNECTION: AVAILABLE</div>
                <div>RESUME_DATABASE: ONLINE</div>
              </div>

            </div>
          </div>
        </div>

        {/* Footer statement */}
        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="font-mono text-[10px] text-white/25">
            MOHAMMED ZAKWAN M. // COMPUTER VISION
          </p>

          <p className="font-mono text-[10px] text-blue-500">
            CONNECTION_READY
          </p>
        </div>

      </div>
    </section>
  );
}
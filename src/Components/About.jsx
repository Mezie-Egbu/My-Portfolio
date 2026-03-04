import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function About() {
  useGSAP(() => {
    gsap.fromTo(
      ".ids",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.out" },
    );
  }, []);

  return (
    <section
      id="About"
      className="scroll-mt-24 bg-black text-white min-h-[calc(100vh-72px)]"
    >
      {/* HERO */}
      <div className="mx-auto max-w-6xl px-4 pt-14 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div className="w-full">
            <p className="ids text-white/60 text-sm mb-2">I am Chimezie</p>

            <h1 className="ids font-extrabold tracking-tight leading-[1.05] text-4xl sm:text-5xl">
              Front-End <br />
              Developer & Designer
            </h1>

            <p className="ids mt-4 text-white/60 leading-relaxed max-w-xl">
              Blending thoughtful UI design with clean, responsive development
              to create websites that look great and perform flawlessly.
            </p>

            <div className="ids mt-6 flex items-center gap-3">
              <button className="rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/15 transition">
                Download CV
              </button>

              {/* tiny icon buttons like the screenshot */}
              <a
                className="h-10 w-10 grid place-items-center rounded-xl bg-white/10 border border-white/10 hover:bg-white/15 transition"
                href="#Contacts"
                aria-label="Contact"
              >
                in
              </a>
              <a
                className="h-10 w-10 grid place-items-center rounded-xl bg-white/10 border border-white/10 hover:bg-white/15 transition"
                href="#Projects"
                aria-label="Projects"
              >
                ⌂
              </a>
            </div>

            {/* Skills list (styled as chips like modern portfolio UIs) */}
            <div className="ids mt-7">
              <p className="text-white/50 text-sm mb-3 font-semibold">
                Core stack
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "TailwindCSS",
                  "React JS",
                  "Next JS",
                  "GSAP",
                  "Three JS",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-xl bg-white/5 border border-white/10 px-3 py-1.5 text-xs font-semibold text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right image (same picture, just styled) */}
          <div className="w-full flex justify-center lg:justify-end">
            <div className="ids relative">
              <div className="absolute -inset-6 rounded-full bg-white/5 blur-2xl" />
              <div
                className="h-[320px] w-[320px] sm:h-[380px] sm:w-[380px]
                           rounded-full border border-white/10 overflow-hidden
                           bg-[url(/Meziepics.jpg)] bg-cover bg-center
                           shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_25px_80px_rgba(0,0,0,0.7)]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES (same page like screenshot sections) */}
      <div className="mx-auto max-w-6xl px-4 pb-14">
        <div className="text-center mb-8">
          <h2 className="ids text-3xl font-extrabold tracking-tight">
            Services
          </h2>
          <p className="ids text-white/55 mt-2 text-sm">
            Designing clean scalable responsive websites
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {[
            {
              title: "Frontend Development",
              body: "Responsive interfaces using HTML, CSS, and JavaScript for clean, consistent, reliable performance.",
              tags: ["Clean HTML/CSS", "Smooth interactions"],
            },
            {
              title: "Performance & Responsiveness",
              body: "Fast, mobile-first websites optimized for speed, accessibility, and dependable UX.",
              tags: ["Speed optimization", "Asset efficiency"],
            },
          ].map((s) => (
            <div
              key={s.title}
              className="ids rounded-2xl bg-white/5 border border-white/10 p-4
                         shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
            >
              <h3 className="font-bold text-sm mb-2">{s.title}</h3>
              <p className="text-white/60 text-xs leading-relaxed">{s.body}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-xl bg-black/40 border border-white/10 px-3 py-1 text-[11px] text-white/75"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT ME */}
      <div className="mx-auto max-w-6xl px-4 pb-16">
        <div className="text-center mb-6">
          <h2 className="ids text-3xl font-extrabold tracking-tight">
            About Me
          </h2>
          <p className="ids text-white/55 mt-3 text-sm max-w-3xl mx-auto leading-relaxed">
            I’m a front-end developer passionate about crafting clean,
            intuitive, and responsive digital experiences. I focus on turning
            ideas into seamless interfaces by understanding user needs and
            ensuring smooth interactions across devices.
          </p>
        </div>

        {/* Approach row */}
        <div className="ids mt-8 grid gap-4 sm:grid-cols-3">
          {[
            ["01", "Understand users & goals"],
            ["02", "Create clean UI layouts"],
            ["03", "Responsive experiences"],
          ].map(([n, txt]) => (
            <div
              key={n}
              className="rounded-2xl bg-white/5 border border-white/10 p-4 flex items-center gap-3"
            >
              <div className="h-10 w-10 rounded-xl bg-white/10 border border-white/10 grid place-items-center text-sm font-bold">
                {n}
              </div>
              <p className="text-sm font-semibold text-white/80">{txt}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="ids mt-10 grid grid-cols-3 gap-3 max-w-2xl mx-auto text-center">
          {[
            ["2+", "Years of Experience"],
            ["4+", "Projects Completed"],
            ["4+", "Clients Served"],
          ].map(([a, b]) => (
            <div
              key={a}
              className="rounded-2xl bg-white/5 border border-white/10 p-4"
            >
              <div className="text-2xl font-extrabold">{a}</div>
              <div className="text-xs text-white/55 mt-1">{b}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

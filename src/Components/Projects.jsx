import React from "react";
import ProjectInfo from "../Data.js";

export default function Projects() {
  return (
    <section id="Projects" className="scroll-mt-24 bg-black text-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold tracking-tight">Projects</h1>
          <p className="text-white/55 mt-2 text-sm">
            Selected work showcasing frontend UI, performance, and animation.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {ProjectInfo.map((info) => (
            <a
              key={info.title}
              href={info.hrefLink}
              className="group rounded-2xl bg-white/5 border border-white/10 overflow-hidden
                         shadow-[0_0_0_1px_rgba(255,255,255,0.04)]
                         hover:bg-white/10 transition"
            >
              <div className="overflow-hidden">
                <img
                  src={info.image}
                  alt={info.title}
                  className="w-full h-44 object-cover group-hover:scale-[1.03] transition duration-300"
                />
              </div>

              <div className="p-4">
                <h2 className="font-bold text-base">{info.title}</h2>
                <p className="text-white/60 text-sm mt-2 leading-relaxed">
                  {info.description}
                </p>

                <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-white/70">
                  <span className="rounded-xl bg-black/40 border border-white/10 px-3 py-1">
                    View project
                  </span>
                  <span className="opacity-60 group-hover:opacity-100 transition">
                    →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

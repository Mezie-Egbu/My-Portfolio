import React from "react";

export default function Contacts() {
  return (
    <section
      id="Contacts"
      className="scroll-mt-24 bg-black text-white py-20 h-dvh"
    >
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight">Let’s Talk</h1>
        <p className="text-white/55 mt-3 text-sm leading-relaxed">
          Want to build a clean, fast, modern website? Reach out — I respond
          quickly.
        </p>

        <div className="mt-10 grid gap-3">
          {[
            "Phone (call): 07065284207",
            "Phone (call): 08158320314",
            "WhatsApp: 07073990374",
            "Email: egbuchimezie7@gmail.com",
          ].map((t) => (
            <div
              key={t}
              className="rounded-2xl bg-white/5 border border-white/10 p-4 text-white/80 text-sm"
            >
              {t}
            </div>
          ))}
        </div>

        <div className="mt-8">
          <a
            href="https://www.linkedin.com/in/chimezie-cornelius-egbu-1009b2367?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=andriod_app"
            className="inline-flex items-center justify-center rounded-2xl bg-white/10 border border-white/10
                       px-6 py-3 font-bold hover:bg-white/15 transition"
          >
            LinkedIn Profile
          </a>
        </div>

        <p className="mt-10 text-xs text-white/35">
          © {new Date().getFullYear()} Egbu Chimezie Cornelius
        </p>
      </div>
    </section>
  );
}

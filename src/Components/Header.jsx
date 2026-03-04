import React from "react";
import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useGSAP(() => {
    if (open && menuRef.current) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 1, x: 450 },
        { opacity: 1, x: 0, duration: 0.45, ease: "power2.out" },
      );
    }
  }, [open]);

  return (
    <nav className="sticky top-0 z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 h-[72px] flex items-center justify-between">
        {/* left logo */}
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-white/10 border border-white/10 grid place-items-center font-bold text-white/80">
            vm
          </div>
        </div>

        {/* center pill menu (desktop) */}
        <div className="hidden sm:flex items-center rounded-2xl bg-white/5 border border-white/10 px-2 py-2 gap-1">
          <a
            href="#About"
            className="px-4 py-2 rounded-xl text-sm font-semibold text-white/75 hover:text-white hover:bg-white/10 transition"
          >
            Home
          </a>
          <a
            href="#Projects"
            className="px-4 py-2 rounded-xl text-sm font-semibold text-white/75 hover:text-white hover:bg-white/10 transition"
          >
            Projects
          </a>
          <a
            href="#Contacts"
            className="px-4 py-2 rounded-xl text-sm font-semibold text-white/75 hover:text-white hover:bg-white/10 transition"
          >
            Contact
          </a>
        </div>

        {/* right button */}
        <div className="hidden sm:block">
          <a
            href="#Contacts"
            className="rounded-2xl bg-white/10 border border-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/15 transition"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* mobile menu btn */}
        <div className="sm:hidden">
          {open ? (
            <button
              className="h-10 w-10 rounded-xl bg-white/10 border border-white/10 grid place-items-center"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          ) : (
            <button
              className="h-10 w-10 rounded-xl bg-white/10 border border-white/10 grid place-items-center"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* mobile drawer */}
      {open && (
        <div
          ref={menuRef}
          className="sm:hidden absolute right-0 top-[72px] w-[75%] bg-white/10 backdrop-blur-2xl border-l border-white/10"
        >
          <ul className="min-h-[calc(100vh-72px)] p-5 space-y-3 text-white">
            {[
              ["Home", "#About"],
              ["Projects", "#Projects"],
              ["Contact", "#Contacts"],
            ].map(([t, href]) => (
              <li key={t}>
                <a
                  href={href}
                  className="block rounded-2xl bg-black/30 border border-white/10 px-4 py-4 font-bold text-lg"
                  onClick={() => setOpen(false)}
                >
                  {t}
                </a>
              </li>
            ))}

            <li className="pt-2">
              <a
                href="#Contacts"
                className="block text-center rounded-2xl bg-white/15 border border-white/10 px-4 py-4 font-bold"
                onClick={() => setOpen(false)}
              >
                Let&apos;s Talk
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

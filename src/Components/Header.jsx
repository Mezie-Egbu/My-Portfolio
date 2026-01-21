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
        { opacity: 1, x: 650 },
        { opacity: 1, x: 0, duration: 0.5, ease: "easeIn" },
      );
    }
  }, [open]);

  return (
    <nav className="sticky top-0 w-full z-10">
      <div className="border p-3 flex justify-between sm:justify-around bg-black text-white">
        <h1 className=" text-2xl font-bold cursor-pointer">MY PORTFOLIO</h1>
        <ul className="gap-5 font-bold hidden sm:flex">
          <li className="cursor-pointer">
            <a href="#About">About</a>
          </li>
          <li className="cursor-pointer">
            <a href="#Projects">Projects</a>
          </li>
          <li className="cursor-pointer">
            <a href="#Contacts">Contacts</a>
          </li>
        </ul>
        <div className="sm:hidden">
          {open ? (
            <button
              onClick={() => {
                setOpen(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
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
              onClick={() => {
                setOpen(true);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
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
      {open && (
        <div
          ref={menuRef}
          className="bg-white/20 backdrop-blur-2xl top-[58px] absolute right-0 w-1/2 text-white"
        >
          <ul className="text-right border text-3xl font-bold h-[calc(100vh-58px)]">
            <li
              className="cursor-pointer p-5"
              onClick={() => {
                setOpen(false);
              }}
            >
              <a href="#About">About</a>
            </li>
            <li
              className="cursor-pointer p-5"
              onClick={() => {
                setOpen(false);
              }}
            >
              <a href="#Projects">Projects</a>
            </li>
            <li
              className="cursor-pointer p-5"
              onClick={() => {
                setOpen(false);
              }}
            >
              <a href="#Contacts">Contacts</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

import React, { use } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function About() {
  useGSAP(() => {
    gsap.fromTo(
      ".ids",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "easeOut" },
    );
  }, []);

  return (
    <div
      id="About"
      className="flex h-[calc(100vh-58px)] text-white bg-black scroll-mt-17 -z-10"
    >
      <div className="w-7/10 sm:w-1/2 p-2">
        <h1 className="ids font-bold text-3xl py-2">EGBU CHIMEZIE CORNELIUS</h1>
        <h1 className="ids font-bold text-3xl py-2">
          Frontend React Developer
        </h1>
        <p className="ids py-2 sm:w-8/10">
          <i>
            Crafting seamless user experience by turning your designs and ideas
            into an interactive reality
          </i>
        </p>
        <ul className="ids py-2 text-xl font-bold">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>TailwindCSS</li>
          <li>React JS</li>
          <li>Next JS</li>
          <li>GSAP</li>
          <li>Three JS</li>
        </ul>
      </div>
      <div className="w-3/10 sm:w-1/2 bg-[url(/Meziepics.jpg)] bg-cover bg-center"></div>
    </div>
  );
}

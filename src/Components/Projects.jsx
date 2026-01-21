import React from "react";
import ProjectInfo from "../Data.js";

export default function Projects() {
  return (
    <div
      id="Projects"
      className="h-[calc(100vh-58px)] p-5 bg-black text-white scroll-mt-14"
    >
      <h1 className="p-5 text-center text-3xl font-bold">PROJECTS</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
        {ProjectInfo.map((info) => (
          <div
            key={info.title}
            className="border-2 p-3 rounded-2xl mb-6 hover:text-black hover:bg-white cursor-pointer  sm:col-span-1 col-span-2"
          >
            <a href={info.hrefLink}>
              <div>
                <img src={info.image} alt={info.title} />
              </div>
              <div className="py-2">
                <h1 className="font-bold">{info.title}</h1>
                <p>{info.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

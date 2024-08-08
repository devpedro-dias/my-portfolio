"use client";

import React from "react";

import { icons } from "@/data";

const Tools = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        <span className="text-blue-400">Ferramentas</span>
        {""} que utilizo
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10 mt-16">
        {icons.map((icon) => (
          <React.Fragment key={icon.id}>
            <div className="flex md:max-w-60 max-w-32 gap-2">
              <img src={icon.img} alt={icon.name} className="md:w-10 w-5" />
              <img
                src={icon.nameImg}
                alt={icon.name}
                width={icon.id === 4 || icon.id === 5 ? 100 : 150}
                className="md:w-24 w-20"
              />
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Tools;

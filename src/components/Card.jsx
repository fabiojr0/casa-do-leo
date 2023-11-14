/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

function  Card({ title, desc, icon }) {
  return (
    <div className="flex flex-col gap-2 items-center md:my-4 lg:px-4">
      <div className="flex align-center justify-center px-6 py-2 rounded-full bg-green-600/20 text-zinc-600  sm:text-lg lg:px-10 lg:py-4 lg:text-3xl">
        {icon}
      </div>
      <h3 className="font-medium text-sm text-center text-black final-mobile:text-base sm:text-lg lg:text-xl">
        {title}
      </h3>
      <span className="font-normal text-xs text-center w-10/12 text-black final-mobile:text-xs final-mobile2:text-sm sm:text-lg lg:text-lg">
        {desc}
      </span>
    </div>
  );
}

export default Card;


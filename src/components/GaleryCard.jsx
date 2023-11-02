/* eslint-disable react/prop-types */

// eslint-disable-next-line no-unused-vars
import React from "react";

function GaleryCard({ date, img, title }) {
  return (
    <div className="relative flex flex-col h-full w-full shadow-md">
      <img className="h-full w-full " src={img} />
      <div className="absolute h-full w-full flex flex-col justify-between top-0 left-0 gradientePreto pb-2 ">
        <div className="bg-verde text-xs w-1/4 text-center text-zinc-100 mt-2 sm:text-base lg:text-2xl">
          {date}
        </div>
        <h2 className="text-zinc-100 text-xs text-center sm:text-base lg:text-xl">
          {title}
        </h2>
      </div>
    </div>
  );
}

export default GaleryCard;

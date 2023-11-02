/* eslint-disable react/prop-types */

// eslint-disable-next-line no-unused-vars
import React from "react";

function Button({ children, cancel , click }) {
  return (
    <span>
      <button
        className={
          cancel
            ? "bg-zinc-200 p-1.5 text-zinc-900 rounded-md text-sm hover:bg-zinc-300 transition-all flex items-center sm:text-lg lg:text-xl active:translate-y-1"
            : "bg-verde p-1.5 text-zinc-100 rounded-md text-sm hover:bg-green-700 transition-all flex items-center sm:text-lg lg:text-lg active:translate-y-1"
        }
        onClick={() => click()}
      >
        {children}
      </button>
    </span>
  );
}

export default Button;

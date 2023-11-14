/* eslint-disable react/prop-types */

// eslint-disable-next-line no-unused-vars
import React from "react";

function Button({ children, cancel, click, disabled = false }) {
  return (
    <span>
      <button
        className={
          cancel
            ? "bg-zinc-200 px-4 py-2 text-zinc-900 rounded-md text-sm hover:bg-zinc-300 transition-all flex items-center sm:text-lg lg:text-xl active:translate-y-1"
            : "bg-verde px-2 py-1 text-white rounded text-xs hover:bg-green-700 transition-all flex items-center sm:text-lg active:translate-y-1 final-mobile:text-sm disabled:bg-green-800 lg:text-xl"
        }
        onClick={() => click()}
        type="submit"
        disabled={disabled}
      >
        {children}
      </button>
    </span>
  );
}

export default Button;

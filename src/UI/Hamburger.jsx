import React from "react";

const Hamburger = ({ isOpen }) => {
  return (
    <button className="relative z-[120]  w-6 h-6 focus:outline-none" aria-label="Toggle menu">
      <span
        className={`block w-6 h-[1px] bg-neutral-50 transform transition-transform origin-center duration-300 ${
          isOpen ? "rotate-45 translate-y-[7px]" : ""
        }`}
      ></span>
      <span
        className={`block w-6 h-[1px] bg-neutral-50 transform transition-transform origin-center duration-300 mt-[6px] ${
          isOpen ? "opacity-0" : ""
        }`}
      ></span>
      <span
        className={`block w-6 h-[1px] bg-neutral-50 transform transition-transform origin-center duration-300 mt-[6px] ${
          isOpen ? "-rotate-45 -translate-y-[7px]" : ""
        }`}
      ></span>
    </button>
  );
};

export default Hamburger;

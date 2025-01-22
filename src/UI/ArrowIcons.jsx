import React from "react";

export const ArrowRightIcon = ({ size = 21, stroke = "#E5E7EB" }) => {
  return (
    <svg
      width={(size / 21) * 12} // Пропорциональная ширина
      height={size}
      viewBox="0 0 12 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L10.2368 9.775C10.6518 10.1693 10.6518 10.8308 10.2368 11.225L0.999997 20"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const ArrowLeftIcon = ({ size = 21, stroke = "#E5E7EB" }) => {
  return (
    <svg
      width={(size / 21) * 12} // Пропорциональная ширина
      height={size}
      viewBox="0 0 12 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 20L1.76316 11.225C1.34816 10.8307 1.34816 10.1693 1.76316 9.775L11 1"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

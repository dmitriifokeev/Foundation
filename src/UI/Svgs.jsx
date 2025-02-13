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

export const ButtonArrowIcon = ({ size = 14 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.3137 1.84315C13.3137 1.29087 12.866 0.843152 12.3137 0.843152L3.31371 0.843152C2.76142 0.843152 2.31371 1.29087 2.31371 1.84315C2.31371 2.39544 2.76142 2.84315 3.31371 2.84315L11.3137 2.84315L11.3137 10.8432C11.3137 11.3954 11.7614 11.8432 12.3137 11.8432C12.866 11.8432 13.3137 11.3954 13.3137 10.8432L13.3137 1.84315ZM1.70711 13.864L13.0208 2.55026L11.6066 1.13605L0.292893 12.4498L1.70711 13.864Z"
        className="fill-current"
      />
    </svg>
  );
};

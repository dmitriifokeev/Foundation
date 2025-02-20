import React from "react";

function Star({ isFilled, size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 21"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      <path
        d="M9.83426 1.04893C10.0438 0.404017 10.9562 0.404018 11.1657 1.04894L13.1493 7.1536C13.243 7.44202 13.5117 7.63729 13.815 7.63729H20.2338C20.9119 7.63729 21.1939 8.50502 20.6453 8.9036L15.4523 12.6765C15.207 12.8547 15.1043 13.1707 15.1981 13.4591L17.1816 19.5638C17.3911 20.2087 16.653 20.745 16.1044 20.3464L10.9114 16.5735C10.6661 16.3953 10.3339 16.3953 10.0886 16.5735L4.89561 20.3464C4.34701 20.745 3.60888 20.2087 3.81842 19.5638L5.80195 13.4591C5.89566 13.1707 5.793 12.8547 5.54766 12.6765L0.354721 8.9036C-0.193879 8.50502 0.0880656 7.63729 0.766172 7.63729H7.185C7.48825 7.63729 7.75702 7.44201 7.85073 7.1536L9.83426 1.04893Z"
        fill={isFilled ? "#C99A68" : "#ccc"}
      />
    </svg>
  );
}

function StarRating({ rating = 5 }) {
  // Ограничим рейтинг от 0 до 5
  const validRating = Math.max(0, Math.min(rating, 5));

  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {Array.from({ length: 5 }, (_, i) => {
        const starNumber = i + 1;
        const isFilled = starNumber <= validRating;
        return <Star key={starNumber} isFilled={isFilled} />;
      })}
    </div>
  );
}

export default StarRating;

import React from "react";

const Vector = ({media}) => {
  return (
    <>
      <svg
        width={media ? '150' : '280'} 
        height={media ? "110" : "255"}
        viewBox="0 0 274 205"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M68.7011 204.23L0.293091 102.336L68.7011 0.441101H205.551L273.959 102.336L205.551 204.23H68.7011Z"
          fill="url(#paint0_radial_91_583)"
        />
        <defs>
          <radialGradient
            id="paint0_radial_91_583"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(137.126 102.336) rotate(90) scale(101.895 136.833)"
          >
            <stop stop-color="#1F1F1F" />
            <stop offset="1" stop-color="#0D0D0D" />
          </radialGradient>
        </defs>
      </svg>
    </>
  );
};

export default Vector;

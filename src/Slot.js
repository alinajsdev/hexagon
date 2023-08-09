import React from "react";

const Slot = ({media}) => {
  return (
    <>
      <svg
      width={media ? '150' : '194'} 
      height={media ? "110" : "150"}
        viewBox="0 0 264 208"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M70.4699 6.77208H70.3087L8.63552 103.985H0L65.991 0H66.1198L70.4699 6.77208Z"
          fill="#124D6F"
        />
        <path
          d="M264 103.985H255.397L193.756 6.83068L197.977 0H198.009L264 103.985Z"
          fill="#17324A"
        />
        <path
          d="M197.973 0L193.752 6.83068L193.687 6.77208H70.4699L66.1198 0H197.973Z"
          fill="#136FA3"
        />
        <path
          d="M198.006 207.97V208H66.0566L70.3422 201.198H193.689L198.006 207.97Z"
          fill="#00213F"
        />
        <path
          d="M70.3411 201.199L66.0556 208H65.9911L12.8246 124.214L0.000152588 103.986H8.63567L21.4601 124.214L70.3089 201.199H70.3411Z"
          fill="#001D38"
        />
        <path
          d="M263.997 103.986L251.141 124.214L198.006 207.971L193.688 201.199L242.537 124.214L255.394 103.986H263.997Z"
          fill="#001D38"
        />
        <path
          d="M69.7661 201.199L8.0928 103.986L69.7661 6.77283H193.145L254.85 103.986L193.145 201.199H69.7661Z"
          fill="url(#paint0_radial_93_1710)"
        />
        <defs>
          <radialGradient
            id="paint0_radial_93_1710"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(131.471 103.986) rotate(90) scale(97.2132 123.379)"
          >
            <stop stop-color="#09447A" />
            <stop offset="1" stop-color="#092F53" />
          </radialGradient>
        </defs>
      </svg>
    </>
  );
};

export default Slot;

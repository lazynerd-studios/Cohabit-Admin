import { Icon } from "./types";

const BackArrow = ({ className }: Icon) => {
  return (
    <svg
      className={className}
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1303_12486)">
        <path d="M10.225 3.22509L8.75 1.75009L0.5 10.0001L8.75 18.2501L10.225 16.7751L3.45 10.0001L10.225 3.22509Z" />
      </g>
      <defs>
        <clipPath id="clip0_1303_12486">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BackArrow;

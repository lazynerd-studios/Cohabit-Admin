import { Icon } from "./types";

const NextArrow = ({ className }: Icon) => {
  return (
    <svg
      className={className}
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1303_12581)">
        <path d="M10.775 16.7749L12.25 18.2499L20.5 9.99991L12.25 1.74991L10.775 3.22491L17.55 9.99991L10.775 16.7749Z" />
      </g>
      <defs>
        <clipPath id="clip0_1303_12581">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="matrix(-1 0 0 -1 20.5 20)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default NextArrow;

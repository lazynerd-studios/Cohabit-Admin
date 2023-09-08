import { Icon } from "./types";

const ArrowUp = ({ className }: Icon) => {
  return (
    <svg
      className={className}
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 8.70349V18.2895H13V8.70349L17.293 12.9965L18.707 11.5825L12 4.87549L5.293 11.5825L6.707 12.9965L11 8.70349Z"
        fill="#1AD48E"
      />
    </svg>
  );
};

export default ArrowUp;

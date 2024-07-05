interface Props {
  size?: string;
  color?: string;
}
const Location = ({ size = "1rem", color = "#000" }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 12a7 7 0 01-7 7m7-7a7 7 0 00-7-7m7 7h2m-9 7a7 7 0 01-7-7m7 7v2m-7-9a7 7 0 017-7m-7 7H3m9-7V3m3 9a3 3 0 11-6 0 3 3 0 016 0z"
      ></path>
    </svg>
  );
};

export default Location;

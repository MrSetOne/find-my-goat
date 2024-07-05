interface Props {
  size?: string;
  color?: string;
}
const Pin = ({ size = "1rem", color = "#000" }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} viewBox="-3 0 20 20">
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g fill={color} transform="translate(-223 -5399)">
          <g transform="translate(56 160)">
            <path d="M174 5248.219a2 2 0 11-.001-3.999 2 2 0 01.001 3.999m0-9.219a7 7 0 00-7 7c0 3.866 7 13 7 13s7-9.134 7-13a7 7 0 00-7-7"></path>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Pin;

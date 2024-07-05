interface Props {
  size?: string;
  color?: string;
}
const Eye = ({ size = "1rem", color = "#000" }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      fill={color}
      viewBox="0 0 32 32"
    >
      <path d="M0 16q.064.128.16.352t.48.928.832 1.344T2.72 20.16t1.664 1.696 2.144 1.568 2.624 1.344 3.136.896 3.712.352 3.712-.352 3.168-.928 2.592-1.312 2.144-1.6 1.664-1.632 1.248-1.6.832-1.312.48-.928L32 16q-.032-.128-.16-.352t-.48-.896-.832-1.344-1.248-1.568-1.664-1.664-2.144-1.568-2.624-1.344-3.136-.896T16 6.016t-3.712.352-3.168.896-2.592 1.344-2.144 1.568T2.72 11.84t-1.248 1.568-.832 1.344-.48.928zm10.016 0q0-2.464 1.728-4.224T16 10.016t4.256 1.76T22.016 16t-1.76 4.256T16 22.016t-4.256-1.76T10.016 16zM12 16q0 1.664 1.184 2.848T16 20t2.816-1.152T20 16t-1.184-2.816T16 12t-2.816 1.184L16 16h-4z"></path>
    </svg>
  );
};

export default Eye;

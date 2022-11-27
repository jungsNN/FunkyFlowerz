interface DragEdgeProps {
  className?: string;
  bg?: string;
  color?: string;
  height?: string;
  stroke?: string;
  width?: string;
}

const DragEdge: React.FC<DragEdgeProps> = (props) => {
  const { bg, stroke, ...rest } = props;
  return (
    <svg
      width="4"
      height="16"
      viewBox="0 0 4 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M2 16C0.895431 16 0 15.1046 0 14L0 2C0 0.895431 0.895431 0 2 0V0C3.10457 0 4 0.895431 4 2L4 14C4 15.1046 3.10457 16 2 16V16Z"
        fill={bg ?? "#292929"}
      />
      <path
        d="M2 3L2 13"
        stroke={stroke ?? "#BEDFFF"}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DragEdge;

import { CSSProperties } from "react";
import { MdCancel } from "react-icons/md";

export type Color = "#F44336" | "#FF9800" | "#2196F3" | "#BDBDBD";

type CircleProps = {
  backgroundColor?: Color;
  hasCancel?: boolean;
};

const Circle = ({
  backgroundColor = "#BDBDBD",
  hasCancel = false,
}: CircleProps) => {
  const style: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "10px",
    backgroundColor,
    borderRadius: "50%",
    width: "16px",
    height: "16px",
  };
  const iconStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  };

  return (
    <div style={style}>
      <span style={iconStyle}>{hasCancel ? <MdCancel /> : null}</span>
    </div>
  );
};

export default Circle;

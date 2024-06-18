import { CSSProperties } from "react";
import Circle, { Color } from "./Circle";
import PillText, { TextProps } from "./PillText";

type PillProps = {
  CircleColor: Color;
  TextContent: TextProps;
};
const Pill = ({ CircleColor, TextContent }: PillProps) => {
  const PillStyle: CSSProperties = {
    border: "1px solid #E0E0E0",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    gap: "3px",
    width: "fit-content",
    padding: "10px;",
  };
  return (
    <div style={PillStyle}>
      <Circle backgroundColor={CircleColor} />
      <PillText text={TextContent.text} />
      <Circle hasCancel={true} />
    </div>
  );
};

export default Pill;

import { CSSProperties } from "react";

export type Color = "#71717A";

export type PillButtonProps = {
  content?: string;
  backgroundColor?: Color;
};

const PillButton = ({
  backgroundColor = "#71717A",
  content = "중복 확인",
}: PillButtonProps) => {
  const duplicationStyle: CSSProperties = {
    backgroundColor: backgroundColor,
    color: "white",
    padding: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "20px",
    height: "30px",
    width: "100px",
  };

  return (
    <div style={duplicationStyle}>
      <span>{content}</span>
    </div>
  );
};
export default PillButton;

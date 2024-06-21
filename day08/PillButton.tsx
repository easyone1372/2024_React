import { CSSProperties, ChangeEvent, MouseEvent } from "react";

export type Color = "#71717A";

export type PillButtonProps = {
  content?: string;
  backgroundColor?: Color;
  handleClick: (e: ChangeEvent<HTMLInputElement>) => void;
};

const PillButton = ({
  backgroundColor = "#71717A",
  content = "중복 확인",
  handleClick,
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

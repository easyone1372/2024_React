import React, { CSSProperties } from "react";

type ButtonProps = {
  content: String;
  backgroundColor: string;
  color: string;
};
const Button = ({ backgroundColor, content, color }: ButtonProps) => {
  const buttonStyle: CSSProperties = {
    backgroundColor: backgroundColor,
    color: color,
    width: "200px",
    textAlign: "center",
    padding: "10px",
    borderRadius: "10px",
    marginBottom: "5px",
    fontWeight: "600",
    fontSize: "14px",
  };

  return (
    <>
      <div style={buttonStyle}>{content}</div>
    </>
  );
};

export default Button;

import { CSSProperties } from "react";

export type InputProps = {
  placeHolder?: string;
  inputType?: "text" | "password";
};

const Input = ({ placeHolder = "", inputType = "text" }: InputProps) => {
  const style: CSSProperties = {
    border: "none",
    outline: "none",
    backgroundColor: "#f5f5f5",
    color: "#242424",
    padding: "16px",
    fontSize: "16px",
  };
  return <input placeholder={placeHolder} style={style} type={inputType} />;
};

export default Input;

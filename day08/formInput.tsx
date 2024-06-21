import { CSSProperties } from "react";
import PillButton from "./PillButton";
import Input, { InputProps } from "./Input";

type FormInputProps = {
  getInputProps?: InputProps;
  Component?: React.ComponentType;
  ComponentProps?: any;
};

const FormInput = ({
  getInputProps,
  Component,
  ComponentProps,
}: FormInputProps) => {
  const style: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px",
    backgroundColor: "#f5f5f5",
    width: "fit-content",
  };

  return (
    <div style={style}>
      <Input {...getInputProps} />
      {Component && <Component {...ComponentProps} />}
    </div>
  );
};

export default FormInput;

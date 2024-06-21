import { CSSProperties, ChangeEvent, useState } from "react";
import PillButton from "./PillButton";

export type InputProps = {
  placeHolder?: string;
  inputType?: "text" | "password";
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  placeHolder = "",
  inputType = "text",
  handleChange,
}: InputProps) => {
  const style: CSSProperties = {
    border: "1px solid #bdbdbd",

    outline: "none",
    backgroundColor: "#f5f5f5",
    color: "#242424",
    padding: "16px",
    fontSize: "16px",
  };

  const [inputValue, setInputValue] = useState<string>("");

  //인풋에 글을 쓰면 콘솔에 나오도록
  //20240621 추가
  //addevnetListner('input',(e)=>)
  // const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setInputValue((prev) => e.target.value);
  //   // console.log(e.target.value);
  // };

  return (
    <div>
      <input
        // onChange={handleOnchange}
        placeholder={placeHolder}
        style={style}
        type={inputType}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;

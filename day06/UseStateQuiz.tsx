import { useState } from "react";

type RenameProps = {
  name: string;
};
const Rename = ({ name }: RenameProps) => {
  const [str, setName] = useState(name);

  //handle+이벤트 - 이벤트 관련 이름 규칙

  const nameClick = () => {
    setName((prev) => "살아있음");
  };

  return (
    <>
      <div onClick={nameClick}>{str}</div>
    </>
  );
};

export default Rename;

import { CSSProperties } from "react";

type SetGrayProps = {
  backgroundColor?: string;
  content?: string;
};
const SetGray = ({ backgroundColor = "#bdbdbd", content }: SetGrayProps) => {
  const grayStyle: CSSProperties = {
    backgroundColor: backgroundColor,
    color: "gray",
  };
  return <div style={grayStyle}>{content}</div>;
};

export default SetGray;

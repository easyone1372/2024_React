import { CSSProperties } from "react";

type LoginProps = {
  content: string;
  boxContent: string;
  duplicationBox?: boolean;
};

const LoginBox = ({
  content,
  boxContent,
  duplicationBox = false,
}: LoginProps) => {
  const titleStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "550px",
  };

  const boxStyle: CSSProperties = {
    display: "flex",
    backgroundColor: "#dbdbdb",
    color: "gray",
    justifyContent: "center",
    alignItems: "center",
    width: "450px",
    height: "30px",
  };

  const duplicationStyle: CSSProperties = {
    backgroundColor: "black",
    color: "white",
    padding: "5px",
    display: "flex",
    textAlign: "center",
    borderRadius: "20px",
    height: "30px",
  };

  return (
    <div style={titleStyle}>
      <span>{content}</span>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <input style={boxStyle} placeholder={boxContent} />
        {duplicationBox ? (
          <span style={duplicationStyle}>중복 확인</span>
        ) : null}
      </div>
    </div>
  );
};

export default LoginBox;

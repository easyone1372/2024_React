import { CSSProperties } from "react";

const Navigation1 = () => {
  const navStyle: CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    margin: "0 auto",

    padding: "15px",
    gap: "5px",
    color: "#bdbdbd",
    fontSize: "15px",
    fontWeight: "600",
  };
  const red: CSSProperties = {
    color: "red",
  };

  const selectMenu: CSSProperties = {
    color: "black",
    borderBottom: "1px solid black",
  };
  return (
    <>
      <div style={navStyle}>
        <div style={red}>530데이</div>
        <div style={selectMenu}>추천</div>
        <div>뷰티</div>
        <div>랭킹</div>
        <div>세일</div>
        <div>스타일</div>
        <div>이벤트</div>
      </div>
    </>
  );
};

export default Navigation1;

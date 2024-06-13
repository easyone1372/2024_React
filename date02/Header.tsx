import { CSSProperties } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBell } from "@fortawesome/free-solid-svg-icons";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

const Header1 = () => {
  const headerStyle: CSSProperties = {
    maxWidth: "768px",
    width: "100%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
    padding: "5px",
  };

  const boxStyle: CSSProperties = {
    display: "flex",
    gap: "15px",
  };

  const musinsaWeight: CSSProperties = {
    fontWeight: "700",
  };

  return (
    <>
      <header style={headerStyle}>
        <div>알림</div>
        <span style={musinsaWeight}>MUSINSA</span>
        <div style={boxStyle}>
          <span>검색</span>
          <span>장바구니</span>
        </div>
      </header>
    </>
  );
};

export default Header1;

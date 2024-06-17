import React, { CSSProperties } from "react";
import { ReactElement } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

type SnsProps = {
  snsName: string;
  snsLogo: ReactElement;
  snsBgColor: string;
  snsTextColor?: string;
};

export const buttonList = [
  {
    snsName: "Facebook",
    snsLogo: <FaFacebook />,
    snsBgColor: "#1877F2",
  },
  {
    snsName: "Google",
    snsLogo: <FaGoogle />,
    snsBgColor: "#ffffff",
    snsTextColor: "#bdbdbd",
  },
  { snsName: "apple", snsLogo: <FaApple />, snsBgColor: "#000000" },
];

export const SnsButton = ({
  snsName,
  snsLogo,
  snsBgColor,
  snsTextColor = "white",
}: SnsProps) => {
  const snsBtnStyle: CSSProperties = {
    backgroundColor: snsBgColor,
    color: snsTextColor,
    padding: "10px",
    fontWeight: "500",
    width: "250px",
    borderRadius: "10px",
  };

  return (
    <div style={snsBtnStyle}>
      {snsLogo} <span>Continue with </span>
      {snsName}
    </div>
  );
};

// import React, { CSSProperties } from "react";
// import { SnsButton, buttonList } from "./SnsButton";

import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

import { icon } from "@fortawesome/fontawesome-svg-core";
import SNSText from "./sns/SNSText";
import SNSLogin from "./sns/SNSLogin";

function App() {
  return (
    <div className="App">
      {/* <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <SnsButton
          snsName="Facebook"
          snsLogo={<FaFacebook />}
          snsBgColor="#1877F2"
        />
        <SnsButton
          snsName="Google"
          snsLogo={<FaGoogle />}
          snsBgColor="#ffffff"
          snsTextColor="#bdbdbd"
        />
        <SnsButton snsName="apple" snsLogo={<FaApple />} snsBgColor="#000000" />
      </div> */}

      {/* 강사님 코드 */}
      <SNSLogin
        SNSTextP={{ sns: "Apple" }}
        SNSIconP={{ Icon: FaApple }}
        SNSColorP="apple"
      />
      <SNSLogin
        SNSTextP={{ sns: "Facebook" }}
        SNSIconP={{ Icon: FaFacebook }}
        SNSColorP="FaceBook"
      />
    </div>
  );
}

export default App;

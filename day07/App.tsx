// import React, { CSSProperties } from "react";

import { Component } from "react";
import PillButton from "./day07/formInput/PillButton";
import FormInput from "./day07/formInput/formInput";
import { MESSAGE } from "./day07/formInput/message";
import LoginBox from "./day07/register";

function App() {
  const FormInputComponents = [
    {
      getInputProps: { placeholder: MESSAGE.ID },
      Component: PillButton,
      ComponentProps: { content: "중복확인" },
    },
    { getInputProps: { placeholder: MESSAGE.PW } },
    { getInputProps: { placeholder: MESSAGE.PWCHECK } },
  ];

  return (
    <div className="App">
      {/* <LoginBox
        duplicationBox={true}
        content="아이디"
        boxContent="사용하시는 이메일을 입력해주세요"
      />
      <LoginBox
        content="비밀번호"
        boxContent="특수문자, 숫자, 영문 3가지 조합으로 8자 이상 15이하로 입력해주세요"
      />
      <LoginBox
        content="비밀번호 확인"
        boxContent="동일한 비밀번호를 입력해주세요"
      />

      <FormInput
        getInputProps={{
          placeHolder: MESSAGE.PW,
        }}
      />
      <FormInput
        getInputProps={{
          placeHolder: MESSAGE.PWCHECK,
        }}
      /> */}

      {FormInputComponents.map((v) => (
        <FormInput {...v} />
      ))}
    </div>
  );
}

export default App;

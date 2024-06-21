// import React, { CSSProperties } from "react";

import { ChangeEvent, Component, useState } from "react";
import PillButton from "./day07/formInput/PillButton";
import FormInput from "./day07/formInput/formInput";
import { MESSAGE } from "./day07/formInput/message";
import LoginBox from "./day07/register";
import Input from "./day07/formInput/Input";

function App() {
  //name,age,address

  type StudentType = {
    name: string;
    age: string;
    address: string;
  };
  const [studentData, setStudentData] = useState<StudentType>({
    name: "",
    age: "",
    address: "",
  });

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStudentData((prev) => ({ ...prev, name: e.target.value }));
  };
  const handleAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStudentData((prev) => ({ ...prev, age: e.target.value }));
  };
  const handleAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStudentData((prev) => ({ ...prev, address: e.target.value }));
  };

  const handleClick = () => {
    const { name } = studentData;
    fetch("http://localhost:3001/api/student", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
  };

  return (
    // <div className="App">
    <div>
      <Input handleChange={handleNameChange} />
      <Input handleChange={handleAgeChange} />
      <Input handleChange={handleAddressChange} />
      <PillButton handleClick={handleClick} content="등록하기" />
    </div>
  );
}

export default App;

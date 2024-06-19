import { useState } from "react";

type Student = {
  name: string;
  age: number;
};

const Counter = () => {
  //무언가 컴포넌트 내에서 상태가 변화하는 것을 하려면 단순 변수 선언으로는 적용되지 않는다.
  //이때 사용하는 것이 useState다.
  //재렌더링 - state
  //useState(초기값)
  //const: 주소값 불변
  //let: 주소값 가변=> let을 쓸 이유가 없음.
  //   const [num, setNum] = useState(0);
  //   const handleClick = () => {
  //     setNum((prev) => prev + 1);
  //   };
  //---quiz: -누르면 감소 +누르면 증가 함수 제작
  const [num, setNum] = useState<number>(0); //제너릭
  const handleClickMinus = () => {
    setNum((prev) => prev - 1);
  };
  const handleClickPlus = () => {
    setNum((prev) => prev + 1);
  };
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <button onClick={handleClickMinus}> - </button>
      {num}
      <button onClick={handleClickPlus}> + </button>
    </div>
  );

  // student 나이 변경
  //   const [student, setStudent] = useState<Student>({ age: 20, name: "엄준식" });
  //   const handleClick = () => {
  //     setStudent((prev) => {
  //       const newPrev = { ...prev };
  //       return prev;
  //     });
  //   };
};

export default Counter;

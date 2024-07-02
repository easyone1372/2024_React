// import React, { CSSProperties } from "react";

import { useEffect, useState } from "react";
import SetGray from "./day10/GraySkellton";
import DataResult from "./day10/DataResult";
import Skeleton from "./day10/Skeleton";
import Commander from "./day11/commander";
import { useBearStore, useEmergencyStore } from "./day11/store/useStore";
import axios from "axios";

function App() {
  //useState---------------------------------------------
  // //1. 데이터 가져오기
  // //2. 비동기 관련 코드
  // //3. DOM 조작

  // const [num, setNum] = useState<number>(0);
  // const [test, setTest] = useState<number>(0);

  // //[]의 것이 변화가 생기면 다시 랜더링함
  // //useEffect 여러번 사용해도 ㄱㅊ음
  // useEffect(() => {
  //   console.log("시작함");
  // }, [num]); //의존성 배열(trigger -> renderer -> dom )
  // useEffect(() => {
  //   console.log("시작함");
  // }, [test]);

  // return (
  //   <div>
  //     <div onClick={() => setNum((v) => v + 1)}>{num}</div>
  //     <div onClick={() => setTest((v) => v + 1)}>{test}</div>
  //   </div>
  // );

  //zustand----------
  // const { increase } = useBearStore();
  // const { bell } = useEmergencyStore();
  // return (
  //   <div>
  //     <button onClick={increase}>곰 늘리기</button>
  //     <button onClick={bell}>비상</button>
  //     <Commander msg="군기 유지" />
  //   </div>
  // );

  //axios------------------
  //url입력
  const [id, setId] = useState<number | null>(null);
  const URL = "http://localhost:3000/api/get/student/all";

  // get방식
  useEffect(() => {
    axios
      .get(URL, {
        params: {
          studentID: id,
        },
      })
      .then((v) => console.log);
  }, []);

  // post방식
  useEffect(() => {
    axios.post(URL, {
      id: "홍길동",
      pw: "qwer1234",
    });
  });
  return (
    <div>
      {/* get방식 */}
      <div onClick={() => setId(() => 1)}>1</div>
    </div>
  );
}

export default App;

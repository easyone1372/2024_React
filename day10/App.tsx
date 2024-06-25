// import React, { CSSProperties } from "react";

import { useEffect, useState } from "react";
import SetGray from "./day10/GraySkellton";
import DataResult from "./day10/DataResult";
import Skeleton from "./day10/Skeleton";

function App() {
  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   fetch("https://fakerapi.it/api/v1/addresses?_quantity=10")
  //     .then((res) => res.json())
  //     .then((v) => setData(v));
  // }, []);

  // return (
  //   // <div>{data ?  : <SetGray content="Loading..." />}</div>
  //   <div>{data ? <DataResult /> : <SetGray content="Loading..." />}</div>
  // );

  const [data, setData] = useState<any[] | null>(null);
  const getAddress = async () => {
    const data = await fetch(
      "https://fakerapi.it/api/v1/addresses?_quantity=10"
    );
    const jsonData = await data.json();
    const getData = await [...jsonData.data];
    setData((prev) => [...getData.map((v) => v.street)]);
  };

  useEffect(() => {
    getAddress();
  }, []);

  return (
    <div>
      {data ? (
        <div>
          {data.map((v, i) => (
            <span key={i}>{v}</span>
          ))}
        </div>
      ) : (
        <Skeleton />
      )}
    </div>
  );
}

export default App;

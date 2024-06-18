// import React, { CSSProperties } from "react";

import Circle from "./day04/Circle";
import Pill from "./day04/Pill";
import NewButton from "./day04/newButton";

function App() {
  return (
    <div className="App">
      {/* <Pill CircleColor="#2196F3" TextContent={{ text: "JavaScript" }} />
      <Pill CircleColor="#FF9800" TextContent={{ text: "JavaScript" }} />
      <Pill CircleColor="#F44336" TextContent={{ text: "React" }} /> */}

      <NewButton click={() => alert("리액트 너무 어려움")} />
      <NewButton click={() => alert("근데 해야지 어떡해")} />
    </div>
  );
}

export default App;

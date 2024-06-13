import React, { CSSProperties } from "react";
import Button from "./Button";
import Header1 from "./Header";
// import Navigation1 from "./nav";

import BigBanner from "./bigBanner";
import CategoryButton from "./CategoryButton";
import { categoryBtn } from "./constants/category";

function App() {
  return (
    <div className="App">
      <Header1 />
      {/* <Navigation1 /> */}
      {categoryBtn.map((v) => (
        <CategoryButton {...v} />
      ))}
      {/* <BigBanner /> */}
    </div>
  );
}

export default App;

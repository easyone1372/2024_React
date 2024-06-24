// import React, { CSSProperties } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Button1 from "./day08/deleteButton";
import Main from "./day08/main";
import Home from "./day08/home";
import Goods from "./day08/Goods";

function App() {
  // return <div className="text-blue-700 text-lg">hello</div>;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Main} />
        <Route path="/home" Component={Home} />
        <Route path="/goods/:id" Component={Goods} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

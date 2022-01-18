import React from "react";
import { useState } from "react";
import smallBox from "./assets/img/smallCircle.png";
import "./App.css";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div className="relative page_body min-h-screen">
      {/* small boxx div  */}
      <img src={smallBox} alt="smallBox" className="absolute w-52 imgBg" />
      {/* small boxx div  */}

      <div className="container mx-auto z-10">
        <Nav />
      </div>
    </div>
  );
};

export default App;

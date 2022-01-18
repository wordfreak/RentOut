import React from "react";
import { useState } from "react";
import smallBox from "./assets/img/smallCircle.png";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="relative page_body min-h-screen">
      {/* small boxx div  */}
      <img src={smallBox} alt="smallBox" className="hidden md:block absolute w-52 imgBg" />
      {/* small boxx div  */}

      <div className="px-8">
        <div className="content">
          <Nav />
          <Header />
        </div>
      </div>
    </div>
  );
};

export default App;

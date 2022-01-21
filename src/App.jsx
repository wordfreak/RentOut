import React from "react";
import { useState } from "react";
import smallBox from "./assets/img/smallCircle.png";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Account from "./components/Account";
import Platform from "./components/Platform";
import Ar from "./components/Ar";
import Offers from "./components/Offers";
import Social from "./components/Social";

const App = () => {
  return (
    <div className="relative page_body min-h-screen ">
      {/* small boxx div  */}
      <img
        src={smallBox}
        alt="smallBox"
        className="hidden md:block absolute w-52 imgBg"
      />
      {/* small box div  */}

      <div className="px-4">
        <div className="content">
          <Nav />
          <Header />
          <Platform />
          <Account />
          <Ar />
          <Offers />
          <Social />
        </div>
      </div>
    </div>
  );
};

export default App;

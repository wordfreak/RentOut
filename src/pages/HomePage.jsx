import React from "react";
import smallBox from "../assets/img/smallCircle.png";
import "../App.css";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Account from "../components/Account";
import Platform from "../components/Platform";
import Ar from "../components/Ar";
import Offers from "../components/Offers";
import Social from "../components/Social";
import Club from "../components/Club";
import GetAccess from "../components/GetAccess";
import Partners from "../components/Partners";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="relative page_body min-h-screen ">
      {/* small boxx div  */}
      <img
        src={smallBox}
        alt="smallBox"
        className=" md:block absolute w-52 imgBg"
      />
      {/* small box div  */}

      <div className="">
        <div className="content">
          <div className="px-4">
            <Nav />
          </div>
          <div className="px-4">
            <Header />
          </div>
          <div className="px-4">  
            <Account />
          </div>
          <div className="px-4">
            <Club />
          </div>

          <div className="px-4">
            <Platform />
          </div>

          <div className="px-4">
            <Ar />
          </div>
          <div className="">
            <Offers />
          </div>

          <div className="px-4">
            <GetAccess />
          </div>

          <div className="px-4">
            <Partners />
          </div>

          <div className="px-4">
            <Social />
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

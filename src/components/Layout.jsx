import React from "react";
import smallBox from "../assets/img/smallCircle.png";
import Footer from "./Footer";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className="relative page_body min-h-screen ">
      {/* small boxx div  */}
      <img
        src={smallBox}
        alt="smallBox"
        className="hidden md:block absolute w-52 imgBg"
      />
      {/* small box div  */}

      <div className="">
        <div className="content">
          <div className="px-4">
            <Nav />
          </div>
        </div>
        <div className="">{children}</div>
      </div>
    
    </div>
  );
};

export default Layout;

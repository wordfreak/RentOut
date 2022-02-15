import React from "react";
import Nav from "../components/Nav";
import smallBox from "../assets/img/smallCircle.png";
import MoreInfo from "../components/MoreInfo";
import Footer from "../components/Footer";

const FormContd = () => {
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
          <div className="px-4">
            <MoreInfo />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FormContd;
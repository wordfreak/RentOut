import React from "react";
import Screen from "../assets/img/phone.png";
import YellowBox from "../assets/img/smallCircle2.png";
import BlueBox from "../assets/img/blueBox.png";
import OrangeBox from "../assets/img/bigOrange.png";
import smallBox from "../assets/img/smallbox.png";
import BigBlue from "../assets/img/bigBlue.png";

const Ar = () => {
  return (
    <div className="mt-44 relative">
      <img
        src={OrangeBox}
        alt="Orange Box"
        className="absolute right-2 -top-28"
      />
      <div className="ar flex flex-wrap">
        <div className="w-full md:w-1/2 relative flex items-center justify-center md:px-12 text-center md:text-left">
          <div>
            <h1 className="font-bold text-1xl md:text-6xl">
              Experience products in AR
            </h1>

            <div className="text-2xl leading-9 pt-6 text-center md:text-left">
              Have you tried Augmented Reality? Stop looking at boring galleries
              and start experiences each item just as they would be.
            </div>
            <img
              src={YellowBox}
              alt="yellow Box"
              className="absolute -bottom-14 left-64"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center relative ">
          <img src={Screen} alt="Mobile pic" className="block z-50" />
          <img src={BigBlue} alt="BigBlue" className="absolute" />
          <img
            src={BlueBox}
            alt="Blue Box"
            className="absolute  -left-8 top-20"
          />

          <img
            src={smallBox}
            alt="small Box"
            className="absolute right-5 top-32"
          />
        </div>
      </div>
    </div>
  );
};

export default Ar;

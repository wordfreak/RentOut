import React from "react";
import Saly from "../assets/img/saly-10.png";
import mobileSaly from "../assets/img/mobileSaly.png";
import bigMan from "../assets/img/bigMan.png";
import OrangeBox from "../assets/img/OrangeEllipse.png";
import YellowBox from "../assets/img/smallEllipse.png";
import MobileBigMan from "../assets/img/mobileBigMan.png";
import MediumCircle from "../assets/img/MeduimCircle.png";
const Header = () => {
  return (
    <div>
      <div className="block md:flex items-center mt-16 md:mt-28  justify-between">
        <div className="w-full md:w-1/2 ">
          <div className="relative">
            {/* pink box  */}
            <img
              src={OrangeBox}
              alt="pink box"
              className="hidden md:inline-block absolute bottom-20 -left-40"
            />

            <h1 className="text-primary text-4xl md:text-6xl font-bold mb-8 text-center md:text-left">
              Now everything is yours!
            </h1>
            <p className="text-xl md:w-10/12 text-center md:text-left leading-9 text-text">
              We're making it possible to rent anything, from wigs, gadgets,
              cars down to shortlet homes we have it! just for you
            </p>
            <p className="text-center md:text-left">
              <a
                href="#"
                className="btn bg-orange text-white mx-auto md:mx-0  inline-block mt-5 btn_shadow"
              >
                Get exclusive access
              </a>
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2  relative  bigMan overflow-hidden md:overflow-visible ">
          <div className="relative -top-24">
            <img
              src={YellowBox}
              alt="yellow box"
              className="absolute top-56 right-60  md:-top-32 md:left-5"
            />

            <img
              src={Saly}
              alt="saly svg"
              className=" hidden md:block absolute w-28 top-64 md:top-0 md:-left-6"
            />
            <img
              src={bigMan}
              alt="Big Man pic"
              className="bigMan hidden md:block top-32 absolute md:-top-60 md:-right-24"
            />
            {/* mobile view  */}
            <img
              src={mobileSaly}
              alt="sally svg"
              className="md:hidden absolute top-96  sm:pt-16 right-64 sm:right-72"
            />
            <img
              src={MobileBigMan}
              alt="Big Man pic"
              className="md:hidden w-72  absolute top-60 -right-8"
            />

            <img
              src={MediumCircle}
              alt="meduim circle"
              className=" top-96 pt-36 right-32 md:-left-28 md:-bottom-96 md:top-auto absolute"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

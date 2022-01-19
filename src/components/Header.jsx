import React from "react";
import Saly from "../assets/img/saly-10.png";
import bigMan from "../assets/img/bigMan.png";
const Header = () => {
  return (
    <div>
      <div className="block md:flex items-center mt-16 md:mt-28 justify-between">
        <div className="w-full md:w-1/2 ">
          <div>
            <h1 className="text-primary text-4xl md:text-6xl font-bold mb-8 text-center md:text-left">
              Now everything is yours!
            </h1>
            <p className="text-xl text-center md:text-left leading-9 text-text">
              We're making it possible to rent anything, from wigs, gadgets,
              cars down to shortlet homes we have it! just for you
            </p>
            <p className="text-center md:text-left">
              <a
                href=""
                className="btn bg-orange text-white mx-auto md:mx-0  inline-block mt-5 btn_shadow"
              >
                Get exclusive access
              </a>
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2  relative bigMan border-2">
          <div className="relative -top-24">
            <img
              src={Saly}
              alt="saly svg"
              className="absolute w-28 top-64 md:top-0 md:-left-6"
            />
            <img
              src={bigMan}
              alt="Big Man pic"
              className="bigMan right-  top-32 absolute md:-top-60 md:-right-24"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

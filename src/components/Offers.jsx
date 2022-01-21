import React from "react";
import MobileHand from "../assets/img/MobileHand.png";
import smallHand from "../assets/img/smallHand.png";

const Offers = () => {
  return (
    <div className="mt-44 ">
      <div className="offer flex flex-col md:flex-row  relative  px-4 ">
        <div className="w-full md:w-1/2 flex items-center justify-center md:px-12 text-center md:text-left">
          <div className="font-bold text-1xl leading-10 tracking-normal md:tracking-wide text-primary pt-12 ">
            Save time & money with exclusive offers from top renters{" "}
            <span className="hidden md:inline">when we launch</span>
            <p>
              <button className="access hidden md:block text-xl mt-4 text-yellow py-4 px-8 w-72 ">
                Get Access
              </button>
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2  ">
          <img
            src={MobileHand}
            alt="Mobile hand pic"
            className="absolute bottom-0 hidden md:inline-block max-w-full"
          />

          <img src={smallHand} alt="mobile hand pic" className="md:hidden" />
        </div>
      </div>
    </div>
  );
};

export default Offers;

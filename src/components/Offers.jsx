import React from "react";
import MobileHand from "../assets/img/MobileHand.png";

const Offers = () => {
  return (
    <div className="mt-44">
      <div className="ar flex flex-col-reverse md:flex-row  relative">
        <div className="w-full md:w-1/2 flex items-center justify-center md:px-12 text-center md:text-left">
          <div className="font-bold text-1xl leading-10 tracking-widest text-primary ">
            Save time & money with exclusive offers from top renters when we
            launch
            <p>
              <button className="access text-xl text-yellow py-4 px-8 w-72 ">
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
        </div>
      </div>
    </div>
  );
};

export default Offers;

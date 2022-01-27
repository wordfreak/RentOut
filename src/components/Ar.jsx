import React from "react";
import Ship from "../assets/img/ship.png";

const Ar = () => {
  return (
    <div className="mt-56 relative">
      <div className="ar md:py-12 rounded-3xl flex flex-wrap">
        <div className="w-full md:w-1/2 relative flex items-center justify-center md:px-12 text-center md:text-left">
          <div>
            <h1 className="font-bold text-1xl md:text-6xl">
              Experience products in AR
            </h1>

            <div className="text-2xl leading-9 pt-6 text-center md:text-left">
              Have you tried Augmented Reality? Stop looking at boring galleries
              and start experiences each item just as they would be.
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center relative ">
          <img src={Ship} alt="Mobile pic" className="md:absolute block z-50" />
        </div>
      </div>
    </div>
  );
};

export default Ar;

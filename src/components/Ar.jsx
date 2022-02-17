import React from "react";
import Ship from "../assets/img/ship.png";

const Ar = () => {
  return (
    <div className=" mt-16 md:mt-56 relative">
      <div className="ar px-8 py-12 rounded-3xl flex flex-wrap">
        <div className="w-full md:w-1/2 relative flex items-center justify-center md:px-12 text-center md:text-left">
          <div>
            <div className="hidden md:block w-14 h-14 bg-orange rounded-full absolute right-0 -top-16"></div>
            <h1 className="font-bold text-primary text-3xl md:text-1xl">
              Experience <br className="md:hidden" /> products in AR
            </h1>

            <div className=" info_text leading-9 pt-6  text-center md:text-left">
              Have you tried Augmented Reality? Stop looking at boring galleries
              and start experiences each item just as they would be.
            </div>

            <div className=" hidden md:block w-28 h-28 bg-yellow rounded-full absolute left-48 -bottom-32"></div>
          </div>
        </div>

        <div className="w-full md:w-1/2 md:mt-0 mt-8 flex items-center justify-center relative ">
          <img src={Ship} alt="Mobile pic" className="md:absolute block z-50" />
          <div className=" hidden md:block w-14 h-14 bg-yellow rounded-full absolute right-10 -top-10"></div>

          {/* <div className=" hidden md:block w-14 h-14 bg-yellow rounded-full absolute -right-64 -bottom-10"></div> */}
        </div>
      </div>
      
    </div>
  );
};

export default Ar;

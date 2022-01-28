import React from "react";
import offer from "../assets/img/offer.png";

const Offers = () => {
  return (
    <div className=" mt-16 md:mt-56 ">
      <div className=" flex flex-col md:flex-row  relative  px-4 ">
        <div className="w-full md:w-1/2 flex items-center justify-center md:px-12 text-center md:text-left">
          <div className="font-bold text-1xl leading-10 tracking-normal md:tracking-wide text-primary pt-12 ">
            Save time & money with exclusive offers from top renters{" "}
            <span className="hidden md:inline">when we launch</span>
            <p>
              <button className="access hidden md:block text-xl mt-4 text-orange py-4 px-8 w-72 ">
                Get Access Now!
              </button>
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 mt-8 md:mt-0  ">
          <img src={offer} alt="Mobile hand pic" className="" />

        </div>
      </div>
    </div>
  );
};

export default Offers;

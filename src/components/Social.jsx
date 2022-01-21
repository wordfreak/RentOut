import React from "react";
import Man from "../assets/img/Man.png";
const Social = () => {
  return (
    <div className="mt-16">
      <div className="flex flex-col md:flex-row social ">
        <div className="flex items-center justify-center w-full md:w-1/2">
          <h1 className="font-bold text-center md:text-left text-1xl leading-10 tracking-normal  md:tracking-wide">
            Hey! Follow us on social media so you don’t miss any offer.
          </h1>
        </div>
        <div className="flex items-center justify-center w-full md:w-1/2">
          <img src={Man} alt="Social Image " />
        </div>
      </div>
    </div>
  );
};

export default Social;

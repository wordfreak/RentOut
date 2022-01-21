import React from "react";
import Screen from "../assets/img/phone.png";

const Platform = () => {
  return (
    <div className=" mt-16 md:mt-64">
      <div className="flex flex-col-reverse md:flex-row  ">
        <div className="wfull md:w-1/2">
          {/* <img src="" alt="" /> */}
          <img src={Screen} alt="srceens" className="block  mx-auto" />
          {/* <img src="" alt="" /> */}
        </div>

        {/* second row   */}
        <div className="w-full md:w-1/2 md:flex md:justify-center md:items-center  ">
          <div className="">
            <h1 className="text-orange text-2xl text-center md:text-left md:text-2xl leading-9 font-bold">
              Original platform
            </h1>
            <div className="pt-4 text-center md:text-left text-1xl font-bold leading-10">
              Insure your items <br /> and Be at peace
            </div>
            <div className=" text-lg md:text-2xl leading-9 pt-5 text-center md:text-left text-text ">
              Rentout offers security and insurance of up to $500 on every item
              you rent out. This allows you to rent and rent out your items with
              peace of mind
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;

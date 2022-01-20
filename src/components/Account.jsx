import React from "react";
import Screen from "../assets/img/phone.png";

const Account = () => {
  return (
    <div className="mt-64">
      <div className="block md:flex  ">
        <div className="wfull md:w-1/2">
          <img src={Screen} alt="srceens" className="block  mx-auto" />
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

export default Account;

import React from "react";
import insurance from "../assets/img/insurance.png";
import Plants from "../assets/img/Plant.svg";
const Platform = () => {
  return (
    <div className=" mt-16 md:mt-44 relative ">
      {/* <div className="w-44 h-44 -right-80 bg-orange rounded-full absolute top-0 -z-10  "></div> */}

      {/* mobile view start  */}
      <div className="flex justify-between items-center">
        <h1 className="md:hidden text-primary text-2xl md:text-6xl font-bold mb-8  md:text-left">
          <span className="text-orange">Security</span> <br />
          is a priority, <br /> Be
          <span className="text-yellow"> at peace</span>
          <div className="mt-4">
            <img src={Plants} alt="Plant Frame" />
          </div>
        </h1>

        <div className="md:hidden my-4">
          <img src={insurance} alt="Big Man pic" className="w-40" />
        </div>
      </div>
      {/* mobile viw end  */}

      <div className="flex flex-col-reverse md:flex-row-reverse  ">
        <div className=" hidden md:block w-full  md:w-1/2 relative">
          <img src={insurance} alt="srceens" className="block  mx-auto" />
        </div>

        {/* second row   */}
        <div className="w-full md:w-1/2 md:flex md:justify-center md:items-center  ">
          <div className="">
            {/* <h1 className="text-orange text-2xl text-center md:text-left md:text-2xl leading-9 font-bold">
              Original platform
            </h1> */}
            <div className="hidden md:block pt-4 text-primary text-center md:text-left text-3xl md:text-1xl font-bold leading-10">
              <span className="text-orange">Security</span> is a priority,
              <br className="hidden md:block" /> and Be at{" "}
              <span className="text-yellow">peace</span>
            </div>
            <div className="rentOut info_text leading-9 pt-5 text-center md:text-left text-text tracking-wide ">
              Rentout offers security and insurance of up to N500,000 on every
              item you rent out. This allows you to rent and rent out your items
              with peace of mind
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;

import React from "react";
import inventory from "../assets/img/inventory.png";

const Account = () => {
  return (
    <div className="md:mt-44">
      <div className=" flex md:flex-row flex-col-reverse ">
        <div className="wfull md:w-1/2 relative">
          <img src={inventory} alt="srceens" className="block  mx-auto" />
          <div className="w-16 h-16 bg-orange rounded-full absolute -top-20 -z-10 right-20 "></div>

          <div className="w-16 h-16 bg-primary rounded-full absolute bottom-20 -z-10 right-28 "></div>
          <div className="w-16 h-16 bg-yellow rounded-full absolute top-28 -z-10 left-28 "></div>
        </div>

        {/* second row   */}
        <div className="w-full md:w-1/2 md:flex md:justify-center md:items-center  ">
          <div className="">
            <h1 className="text-orange text-2xl text-center md:text-left md:text-2xl leading-9 font-bold">
              Create an account today
            </h1>
            <div className="pt-4 text-center md:text-left text-1xl font-bold leading-10">
              Everyday Items, by <br /> the hour.
            </div>
            <div className=" text-lg md:text-2xl leading-9 pt-5 text-center md:text-left text-text ">
              Rentout offers an easy way to bring in extra cash by renting out
              the things you don't use! We'll handle all the requests and
              negotiate payments on your behalf.
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Account;

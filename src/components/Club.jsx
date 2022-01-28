import React from "react";
import memeber from "../assets/img/memeber.png";

const Club = () => {
  return (
    <div className="md:mt-44">
      <div className=" flex md:flex-row flex-col-reverse ">
        <div className="wfull md:w-1/2 relative">
          <img
            src={memeber}
            alt="Members picture"
            className="block mt-10 mx-auto"
          />
          <div className=" hidden md:inline-block w-14 h-14 bg-orange rounded-full absolute -top-20 -z-10 right-0 "></div>

          <div className="  hidden md:inline-block w-14 h-14 bg-primary rounded-full absolute -bottom-32  -left-5 "></div>
          <div className="  hidden md:inline-block w-4 h-4 bg-yellow rounded-full absolute -bottom-28 right-6   "></div>
        </div>

        {/* second row   */}
        <div className="w-full md:w-1/2 md:flex md:justify-center md:items-center   ">
          <div className="">
            <div className="pt-4 text-center md:text-right text-3xl  md:text-1xl font-bold leading-10">
              500+ Club members <br /> and counting
            </div>
            <div className=" text-2xl md:text-2xl leading-9 pt-5 text-center md:text-right text-text ">
              stay in the loop and get a front row seat{" "}
              <br className="hidden md:block" /> with exclusive offers when we
              launch
            </div>
            <p className=" text-center md:text-right mt-5">
              <button className="spot text-primary font-bold text-xl">
                Book your spot
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Club;

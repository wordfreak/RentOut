import React from "react";
import Screen from "../assets/img/phone.png";

const Account = () => {
  return (
    <div className="mt-20">
      <div className=" flex md:flex-row flex-col-reverse ">
        <div className="w-full md:w-1/2">
          {/* <img src="" alt="" /> */}
          <img src={Screen} alt="srceens" className="block  mx-auto" />
          {/* <img src="" alt="" /> */}
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
      <div className="hidden md:block font-bold text-center md:text-4xl">
        Join our waitlist and stay in the loop{" "}
        <button
          aria-label="book spot"
          className=" text-2xl font-bold px-4 py-2 rounded-xl bg-yellow"
        >
          Book your spot
        </button>{" "}
      </div>
    </div>
  );
};

export default Account;

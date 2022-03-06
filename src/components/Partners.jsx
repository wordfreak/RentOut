import React from "react";
import partner1 from "../assets/img/p1.svg";
import partner2 from "../assets/img/p2.svg";
import partner3 from "../assets/img/p3.svg";
import partner4 from "../assets/img/p4.svg";

const Partners = () => {
  return (
    <div className="mt-20">
      <div className=" hidden md:block w-14 h-14 bg-primary rounded-full absolute left-0 "></div>
      <h1 className="text-2xl md:text-5xl font-bold text-primary text-center">
        Our Partners
      </h1>
      <div className="mt-8">
        <div className="flex md:max-w-2xl justify-between flex-wrap mx-auto ">
          <img
            src={partner1}
            alt="First Partner"
            className="grayscale-0 w-20"
          />
          <img src={partner2} alt="First Partner" />
          <img
            src={partner3}
            alt="First Partner"
            className="grayscale-0 w-14"
          />
          <img src={partner4} alt="First Partner" className="hidden md:block" />
        </div>
      </div>
    </div>
  );
};

export default Partners;

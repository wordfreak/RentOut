import React from "react";
import partner1 from "../assets/img/p1.svg";
import partner2 from "../assets/img/p2.svg";
import partner3 from "../assets/img/p3.svg";
import partner4 from "../assets/img/p4.svg";

const Partners = () => {
  return (
    <div className="mt-20">
      <h1 className="text-5xl font-bold text-primary text-center">
        Our Partners
      </h1>
      <div className="mt-8">
        <div className="flex max-w-4xl justify-between mx-auto">
          <img src={partner1} alt="First Partner" />
          <img src={partner2} alt="First Partner" />
          <img src={partner3} alt="First Partner" />
          <img src={partner4} alt="First Partner" />
        </div>
      </div>
    </div>
  );
};

export default Partners;

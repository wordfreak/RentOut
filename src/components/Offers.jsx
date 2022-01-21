import React from "react";

const Offers = () => {
  return (
    <div className="mt-44">
      <div className="ar flex flex-wrap">
        <div className="w-full md:w-1/2 flex items-center justify-center md:px-12 text-center md:text-left">
          <div>
            <h1 className="font-bold text-1xl md:text-6xl">
              Experience products in AR
            </h1>

            <div className="text-2xl leading-9 pt-6 text-center md:text-left">
              Have you tried Augmented Reality? Stop looking at boring galleries
              and start experiences each item just as they would be.
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2  ">
          <img src={Screen} alt="Mobile pic" />
        </div>
      </div>
    </div>
  );
};

export default Offers;

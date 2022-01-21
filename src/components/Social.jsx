import React from "react";
import Man from "../assets/img/Man.png";
const Social = () => {
  return (
    <div>
      <div className="flex items-center justify-center w-full md:w-1/2">
        <div className="">
          Save time & money with exclusive offers from top renters when we
          launch Get Access
        </div>
      </div>
      <div className="flex items-center justify-center w-full md:w-1/2">
        <img src={Man} alt="Social Image " />
      </div>
    </div>
  );
};

export default Social;

import React from "react";
import { FaTimes } from "react-icons/fa";
import Finish from "../../assets/img/finish.svg";

const ExitWarning = ({ setBack, setError }) => {
  return (
    <div
      className="  fixed top-0 bottom-0 left-0 w-full modal"
      onClick={() => setBack(false)}
    >
      <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-6/12 bg-white rounded-3xl p-4 md:px-9 md:py-12 ">
        <div className="text-right">
          <FaTimes
            className="inline text-dim cursor-pointer "
            onClick={() => setError(false)}
          />
        </div>
        <div className="relative">
          <div
            className="absolute bottom-6 left-20 text-primary md:leading-9 md:text-2xl font-bold text-center
                 "
          >
            You for finish am <br />{" "}
            <span className="md:text-4xl">join our club o!</span>
          </div>
          <img src={Finish} alt="" className="block mx-auto" />
        </div>
        <div className="text-center mt-10">
          <button className="back-button finish">Let’s finish this</button>
          <button className="back-button out">Take me out</button>
        </div>
      </div>
    </div>
  );
};

export default ExitWarning;

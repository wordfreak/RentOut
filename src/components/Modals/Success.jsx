import React from "react";
import { FaTimes } from "react-icons/fa";
import Done from "../../assets/img/done.svg";

const Success = ({ submittion }) => {
  return (
    <div
      className="  fixed top-0 bottom-0 left-0 w-full modal"
      onClick={submittion}
    >
      <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-6/12 bg-white rounded-3xl p-4 md:px-9 md:py-12 ">
        <div className="text-right">
          <FaTimes
            className="inline text-dim cursor-pointer "
            onClick={submittion}
          />
        </div>
        <img src={Done} alt="" className="block mx-auto" />

        <div className="text-center md:text-xl font-bold mt-4 md:mt-8">
          <span className="text-orange"> Correct guy!</span> welcome to the club
        </div>

        <div className="text-center mt-8">
          <button className="text-lg  font-bold text-primary rounded-md border-2 py-1 px-8 border-primary ">
            {" "}
            Done{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;

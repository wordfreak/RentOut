import React from "react";
import { FaRegTimesCircle, FaTimes } from "react-icons/fa";

const Failed = ({ setError, error }) => {
  return (
    <div>
      <div
        className="fixed top-0 bottom-0 left-0 w-full modal"
        onClick={() => setError(!error)}
      >
        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-4/12 bg-white rounded-3xl p-4 md:px-9 md:py-12 ">
          <div className="text-right">
            <FaTimes
              className="inline text-dim cursor-pointer "
              onClick={() => setError(false)}
            />
          </div>
          {/* <img src={Done} alt="" className="block mx-auto" /> */}

          <FaRegTimesCircle className="block mx-auto  text-4xl" />

          <div className="text-center md:text-xl font-bold mt-4 md:mt-8">
            <span className="text-orange"> Unable To upload !</span> Pls Try
            again.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Failed;

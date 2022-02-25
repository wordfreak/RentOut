import React from "react";
import inventory from "../assets/img/inventory.svg";

const Account = () => {
  return (
    <div className="md:mt-44 mt-20 mb-32 relative">
      <div className=" flex md:flex-row flex-col-reverse ">
        <div className="w-full md:w-1/2 relative">
          <img
            src={inventory}
            alt="srceens"
            className=" hidden md:block  mx-auto"
          />
        </div>

        {/* second row   */}
        <div className="  w-full md:w-1/2 md:flex md:justify-center md:items-center  ">
          <div className="">
            <div className=" hidden md:block pt-4 text-primary text-center md:text-left text-3xl md:text-1xl font-bold leading-10">
              Everyday Items, by <br /> the <span className="text-yellow">hour.</span>
            </div>

            {/* Mobile screen Start */}
            <div className="flex justify-between items-center">
              <div>
                <img
                  src={inventory}
                  alt="srceens"
                  className="md:hidden  w-44"
                />
              </div>

              <div className=" md:hidden text-primary  font-bold text-xl ">
                Everyday Items, <br /> by the{" "}
                <span className="text-yellow">hour</span>.
              </div>
            </div>

            {/* Mobile screen End */}

            <div className="info_text  leading-9 pt-5 text-center md:text-left  ">
              Rentout offers an easy way to bring in extra cash by renting out
              the things you don't use! <br className="md:hidden" />
              We'll process all your requests down to delivery.
            </div>
          </div>
        </div>
      </div>

      {/* small box */}

      <div className="md:hidden bg-yellow w-8 h-8 rounded-full absolute -bottom-20 right-32"></div>
    </div>
  );
};

export default Account;

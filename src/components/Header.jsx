import React from "react";
import { Link } from "react-router-dom";
import Camera from "../assets/img/camera.svg";
const Header = () => {
  return (
    <div>
      <div className="block md:flex items-center mt-20 md:mt-36  justify-between">
        <div className="w-full md:w-1/2  ">
          <div className="relative">
            {/* pink box  */}
            <div className="hidden md:inline-block absolute bottom-20 -top-5 -left-48 border bg-orange w-14 h-14 rounded-full"></div>

            {/* MObile view   code  */}
            <div className="flex justify-between items-center">
              <h1 className="md:hidden text-primary text-xl md:text-6xl font-bold mb-8  md:text-left">
                Now <span className="text-orange">everything</span> <br /> is{" "}
                <span className="text-yellow">yours!</span>
              </h1>

              <div className="md:hidden my-4">
                <img src={Camera} alt="Big Man pic" className="w-40" />
              </div>
            </div>
            {/* MObile view   code end */}

            <h1 className="hidden md:block text-primary text-4xl md:text-6xl font-bold mb-8 text-center md:text-left">
              Now <span className="text-orange">everything</span> <br /> is{" "}
              <span className="text-yellow">yours!</span>
            </h1>

            <p className=" info_text  md:w-10/12 text-center md:text-left leading-9 ">
              We're making it possible to rent anything, from wigs, gadgets,
              cars down to shortlet homes we have it! just for you
            </p>
            <p className="text-center md:text-left">
              <Link to="/moreinfo" href="#" className="">
                <button className="text-xs md:text-lg mt-6 font-bold text-white bg-orange py-3 px-4 rounded-ten">
                  Get access Now!
                </button>
              </Link>
            </p>
            <div className="w-24 h-24 hidden md:inline-block -z-10 bg-yellow rounded-full absolute -bottom-4 right-28"></div>
          </div>
        </div>

        <div className=" hidden md:block w-full md:w-1/2 mt-16 md:mt-0 relative    ">
          <div className="">
            <div className="hidden md:block absolute -top-56 right-60  md:-top-24 md:left-5 bg-orange w-12 h-12 rounded-full"></div>

            <img src={Camera} alt="Big Man pic" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

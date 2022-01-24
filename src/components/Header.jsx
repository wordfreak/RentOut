import React from "react";
import Camera from "../assets/img/camera.png";
const Header = () => {
  return (
    <div>
      <div className="block md:flex items-center mt-20 md:mt-36  justify-between">
        <div className="w-full md:w-1/2  ">
          <div className="relative">
            {/* pink box  */}
            <div className="hidden md:inline-block absolute bottom-20 -top-5 -left-48 border bg-orange w-14 h-14 rounded-full">
              {" "}
            </div>

            <h1 className="text-primary text-4xl md:text-6xl font-bold mb-8 text-center md:text-left">
              Now everything <br /> is yours!
            </h1>
            <p className="text-xl md:w-10/12 text-center md:text-left leading-9 text-text">
              We're making it possible to rent anything, from wigs, gadgets,
              cars down to shortlet homes we have it! just for you
            </p>
            <p className="text-center md:text-left">
              <a
                href="#"
                className="btn bg-orange text-white mx-auto md:mx-0  inline-block mt-5 btn_shadow"
              >
                Get access Now!
              </a>
            </p>
            <div className="w-24 h-24 hidden md:inline-block bg-yellow rounded-full absolute -bottom-4 right-28"></div>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-16 md:mt-0 relative  bigMan overflow-hidden md:overflow-visible ">
          <div className="">
            <div className="absolute -top-56 right-60  md:-top-24 md:left-5 bg-orange w-12 h-12 rounded-full"></div>

            <img src={Camera} alt="Big Man pic" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

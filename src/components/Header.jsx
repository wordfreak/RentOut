import React from "react";

const Header = () => {
  return (
    <div>
      <div className="block md:flex items-center mt-20 md:mt-28 justify-between">
        <div className="w-full md:w-1/2">
          <div>
            <h1 className="text-primary text-5xl md:text-6xl font-bold mb-8 text-center md:text-left">
              Now everything is yours!
            </h1>
            <p className="text-2xl text-center md:text-left leading-9 text-text">
              We're making it possible to rent anything, from wigs, gadgets,
              cars down to shortlet homes we have it! just for you
            </p>
            <p className="text-center md:text-left">
              <a
                href=""
                className="btn bg-orange text-white inline-block mt-5 btn_shadow"
              >
                Join our waitlist
              </a>
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2">lorem 2</div>
      </div>
    </div>
  );
};

export default Header;

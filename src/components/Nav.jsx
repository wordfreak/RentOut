import React from "react";

import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/img/AppLogo.svg";

const Nav = () => {
  return (
    <nav className="bg-transparent md:pt-9 pt-9 ">
      <div className=" mx-auto ">
        <div className="flex justify-between items-center">
          <div>
            {/* <!-- Website Logo --> */}
            <Link to="/">
              <img src={Logo} alt="Logo" className="w-24 md:w-40 mr-2" />
            </Link>
          </div>

          <div className=" md:flex items-center md:gap-8">
            <NavLink
              to="/contact"
              className="text-sm md:text-2xl bg-primary text-orange font-bold py-2 px-4 md:px-8 rounded-md"
            >
              Contact us
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

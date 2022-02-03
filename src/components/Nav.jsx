import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/img/AppLogo.png";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);

  const handleNAv = () => {
    setShowNav(!showNav);
  };

  return (
    <nav className="bg-transparent md:pt-9 pt-9 ">
      <div className=" mx-auto ">
        <div className="flex justify-between items-center">
          {/* <div className="flex space-x-20 h-16 items-center"> */}
          <div>
            {/* <!-- Website Logo --> */}
            <Link to="/" className="">
              <img src={Logo} alt="Logo" className=" mr-2" />
            </Link>
          </div>
          {/* <!-- Primary Navbar items --> */}
          <div className=" md:flex items-center md:gap-8">
            <NavLink
              to="/contact"
              // activeClassName="active"
              className="py-3 inline-block w-24 md:w-48 px-2 bg-primary text-orange font-semibold md:font-bold md:text-2xl text-center rounded-xl hover:text-orange transition duration-300"
            >
              Contact us
            </NavLink>
          </div>
          {/* </div> */}

          {/* <!-- Mobile menu button --> */}
          {/* <div className="md:hidden flex items-center">
            <FaBars className="cursor-pointer" onClick={handleNAv} />
          </div> */}
        </div>
      </div>
      {/* <!-- mobile menu --> */}
      {/* <div className={showNav ? "block" : "hidden"}>
        <ul className="absolute bg-yellow w-full left-0 text-primary">
          <li className="active">
            <a
              href="index.html"
              className="block text-sm px-2 py-4 text-orange  font-semibold"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="block text-sm px-2 py-4  transition duration-300"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block text-sm px-2 py-4  transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block text-sm px-2 py-4  transition duration-300"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div> */}
    </nav>
  );
};

export default Nav;

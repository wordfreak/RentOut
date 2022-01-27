import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
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
              <a href="#" className="">
                <img src={Logo} alt="Logo" className=" mr-2" />
              </a>
            </div>
            {/* <!-- Primary Navbar items --> */}
            <div className="hidden md:flex items-center space-x-16">
              <a href="" className="py-4 px-2 text-orange  font-semibold ">
                Home
              </a>

              <a
                href=""
                className="py-4 px-2 text-gray-500 font-semibold hover:text-orange transition duration-300"
              >
                Contact us
              </a>
            </div>
          {/* </div> */}

          {/* <!-- Secondary Navbar items --> */}
          <div className="hidden md:flex items-center space-x-3 ">
            <a href="" className="btn bg-primary text-yellow btn_shadow ">
              Join the club
            </a>
          </div>

          {/* <!-- Mobile menu button --> */}
          <div className="md:hidden flex items-center">
            <FaBars className="cursor-pointer" onClick={handleNAv} />
          </div>
        </div>
      </div>
      {/* <!-- mobile menu --> */}
      <div className={showNav ? "block" : "hidden"}>
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
      </div>
    </nav>
  );
};

export default Nav;

import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import Logo from "../assets/img/AppLogo.svg";

const Footer = () => {
  return (
    <div className="bg-footer md:mt-20 mt-20 py-4 md:py-10 md:px-32">
      <div className="flex justify-between items-center text-center text-very_dim md:text-left md:flex-row flex-col md:text-2xl md:text-primary font-bold">
        <div className="text-center md:text-left mt-5">
          <img src={Logo} alt="" className="w-40  md:w-40  mx-auto md:mx-0" />
          <div className="mt-4 md:text-2xl text-very_dim md:text-primary">
            Lekki Phase 2, 
            Lagos Nigeria
          </div>
        </div>

        <div className=" md:hidden my-4 text-center text-lg md:text-2xl text-primary md:text-right ">
          <a href="mailto:hello@rentout.app">hello@rentout.app</a>
        </div>

        <div className="mx-auto md:mx-0  md:mt-5 ">
          <div className="text-2xl text-very_dim md:text-orange flex justify-center md:justify-end mb-4">
            <a href="#" className="footer_link">
              <FaInstagram />
            </a>

            <a href="#" className="footer_link">
              <FaTwitter />
            </a>

            <a href="#" className="footer_link">
              <FaFacebookF />
            </a>

            <a href="#" className="footer_link">
              <FaLinkedin />
            </a>
          </div>

          <div className="hidden md:block text-center text-lg text-primary md:text-right ">
            <a href="mailto:hello@rentout.app">hello@rentout.app</a>
          </div>

          <div className=" md:text-right">
            <span> Copyright 2022 </span>
            <a href="#" className="inline-block    md:text-primary">
              rentout.app
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

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
    <div className="bg-dim md:mt-20 mt-20 py-4 md:py-10 md:px-32">
      <div className="flex justify-between items-center text-center md:text-left md:flex-row flex-col md:text-2xl text-primary font-bold">
        <div className="text-center md:text-left mt-5">
          <img src={Logo} alt="" className="w-40  md:w-56  mx-auto md:mx-0" />
          <div className="mt-4">
            Elegant court , Lekki Phase 2, <br /> Lagos Nigeria
          </div>
        </div>
        <div className="mx-auto md:mx-0  mt-5 ">
          <div className="social_icons flex justify-center md:justify-end mb-4">
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

          <div className=" text-center  md:text-right ">
            <a href="mailto:hello@rentout.app">hello@rentout.app</a>
          </div>

          <div>
            Copyright 2021
            <span>
              <a href="#" className="inline-block  text-primary">
                rentout.app
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

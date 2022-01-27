import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import Logo from "../assets/img/footerLogo.png";

const Footer = () => {
  return (
    <div className="bg-dim md:mt-20 py-16 md:px-32">
      <div className="flex justify-between md:flex-row flex-col md:text-2xl text-primary font-bold">
        <div>
          <img src={Logo} alt="" />
          <div>
            Elegant court , Lekki Phase 2, <br /> Lagos Nigeria
          </div>
        </div>
        <div>
          <div className="social_icons flex md:justify-end gap-7">
            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaTwitter />
            </a>

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaLinkedin />
            </a>
          </div>
          <div>
            Copyright 2021{" "}
            <a href="#" className="text-primary">
              rentout.app
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

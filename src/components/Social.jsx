import React from "react";
import social from "../assets/img/social.svg";
import chair from "../assets/img/chair.svg";
import {
  FaBars,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Social = () => {
  return (
    <div className="mt-16">
      <div className="flex flex-col md:flex-row social gap-10 md:gap-0 ">
        <div className="flex items-center  justify-center w-full text-center md:w-1/2">
          <img src={social} alt="Social Image" className="w-9/12" />
        </div>

        <div className="flex items-center justify-center w-full md:w-1/2">
          <div>
            <h1 className="font-bold text-center  text-1xl leading-10 tracking-normal  md:tracking-wide">
              Hey! Follow us on social media so you don’t miss any offer.
            </h1>
            <div className="flex justify-center items-center   pt-8 social_icons">
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
          </div>
        </div>
        <div className="flex items-center justify-center w-full md:w-1/2">
          <img src={chair} alt="Social Image" />
        </div>
      </div>
    </div>
  );
};

export default Social;

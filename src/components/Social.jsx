import React from "react";
import social from "../assets/img/social.png";
import chair from "../assets/img/chair.svg";
import { FaBars, FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Social = () => {
  return (
    <div className="mt-16">
      <div className="flex flex-col md:flex-row social ">
        <div className="flex items-center justify-center w-full md:w-1/2">
          <img src={social} alt="Social Image" className="w-9/12" />
        </div>

        <div className="flex items-center justify-center w-full md:w-1/2">
          <div>
            <h1 className="font-bold text-center  text-1xl leading-10 tracking-normal  md:tracking-wide">
              Hey! Follow us on social media so you don’t miss any offer.
            </h1>
            <div className="flex justify-center items-center gap-8 pt-8 social_icons">
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

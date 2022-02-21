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
      <div className="flex flex-col-reverse md:flex-row social gap-10 md:gap-0 ">
        <div className="flex md:justify-center w-full -mt-16 text-left md:text-center md:w-1/2">
          <img
            src={social}
            alt="Social Image"
            className=" w-60 md:w-9/12 inline"
          />
        </div>

        <div className="hidden md:flex items-center justify-center w-full md:w-1/2">
          <div>
            <h1 className="font-bold text-center  text-3xl leading-10 tracking-normal  md:tracking-wide">
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
        <div className=" relativeflex text-right md:items-center justify-center w-full md:w-1/2">
          {/* mobile text start */}

          <h1 className=" md:hidden w-full absolute left-1/2 transform -translate-x-1/2 text-2xl text-center text-primary leading-10 font-semibold">
            Hey! don’t miss the hot offers, <br /> Follow us on social media
          </h1>

          {/* mobile text end */}
          <img
            src={chair}
            alt="Social Image"
            className="w-72 md:w-full inline"
          />
        </div>
      </div>
      {/* mobile icon start */}
      <div className="md:hidden flex justify-between  items-center mx-auto   pt-8 social_icons">
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
      {/* mobile icon end */}
    </div>
  );
};

export default Social;

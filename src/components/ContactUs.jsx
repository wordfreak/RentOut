import React from "react";
import Girl from "../assets/img/SocialGirl.svg";
import Boy from "../assets/img/SocialBoy.svg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const ContactUs = () => {
  return (
    <div className="">
      <div className=" mt-16 md:mt-36 ">
        {/* Fist colum  */}
        <div className=" flex flex-col md:flex-row  relative  px-4 ">
          {/* first row  */}
          <div className="w-full relative md:w-1/2 flex items-center">
            <div className="absolute top-10 left-0 md:relative">
              <div className="  text-xl md:text-4xl text-primary  font-semibold">
                Connect with us <br className="md:hidden" /> on our socials
              </div>
              <div className=" -ml-4 md:ml-0 text-2xl md:text-4xl mt-6 text-orange flex mb-4 md:mt-4">
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
          {/* second row */}

          <div className="w-full md:w-1/2 mt-8 md:mt-0  text-right ">
            <img
              src={Boy}
              alt="connect with us pic"
              className="w-72 md:w-full inline"
            />
          </div>
        </div>

        {/* Second colum  */}
        <div className=" flex flex-col md:flex-row  relative mt-20  px-4 ">
          {/* first row  */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0  text-right ">
            <img
              src={Girl}
              alt="connect with us pic"
              className="w-60 md:w-full"
            />
          </div>
          {/* second row */}
          <div className=" absolute md:relative right-1 top-24 w-full md:w-1/2 text-lg md:text-4xl font-bold flex items-center justify-end">
            <div>
              <div className=" text-orange  text-right ">Don’t be shy</div>
              <div className="text-primary">
                say{" "}
                <a href="mailto:hello@rentout.app" className="text-dim">
                  hello@rentout.app
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <Link to="/">
            <button className="border rounded-ten border-primary py-3 px-4 font-bold text-lg ">
              Take me home{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

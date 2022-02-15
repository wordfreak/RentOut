import React from "react";
import Girl from "../assets/img/SocialGirl.svg";
import Boy from "../assets/img/SocialBoy.svg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
const ContactUs = () => {
  return (
    <div className="">
      <div className=" mt-16 md:mt-36 ">
        {/* Fist colum  */}
        <div className=" flex flex-col md:flex-row  relative  px-4 ">
          {/* first row  */}
          <div className="w-full md:w-1/2 flex items-center">
            <div>
              <div className="md:text-4xl text-primary  font-semibold">
                Connect with us on our socials
              </div>
              <div className="text-3xl text-orange flex mb-4 md:mt-4">
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
            <img src={Boy} alt="connect with us pic" />
          </div>
        </div>

        {/* Second colum  */}
        <div className=" flex flex-col md:flex-row  relative md:mt-20  px-4 ">
          {/* first row  */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0  text-right ">
            <img src={Girl} alt="connect with us pic" />
          </div>
          {/* second row */}
          <div className="w-full md:w-1/2 md:text-4xl font-bold flex items-center justify-end">
            <div>
              <div className=" text-orange  text-right ">Don’t be shy</div>
              <div className="text-primary">
                say <a href="mailto:hello@rentout.app" className="text-dim" >hello@rentout.app</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

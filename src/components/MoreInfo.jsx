import React, { useEffect, useState } from "react";
import { FaTimes, FaTimesCircle } from "react-icons/fa";
import book from "../assets/img/book.svg";
import Done from "../assets/img/done.svg";
import sticker from "../assets/img/sticker.svg";
import Bgsticker from "../assets/img/bgsticker.svg";
import { useNavigate } from "react-router-dom";
import smallSticker from "../assets/img/SmallbgSticker.png";
import smallSticker2 from "../assets/img/SmallbgSticker2.png";
import Footer from "./Footer";

const MoreInfo = () => {
  const navigate = useNavigate();
  const initialData = {
    name: "",
    email: "",
    number: "",
    medium: "",
    review: "",
  };

  const [client, setClient] = useState(initialData);
  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [submited, setSubmited] = useState(false);

  // destructuring the client data
  const { name, email, number, medium, review } = client;

  // function is checking if the localstorage have any data in it already!

  useEffect(() => {
    let me = JSON.parse(window.localStorage.getItem("client"));
    me ? setClient(me) : setClient(initialData);
  }, []);

  // function is checking if the form have been submmitted
  const submittion = () => {
    setSubmited(!submited);
    submited ? navigate("/") : null;
  };

  // form component functions

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClient({ ...client, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (client.name === "" || client.email == "") {
      name.length === 0 ? setNameErr(true) : setNameErr(false);
      email.length === 0 ? setEmailErr(true) : setEmailErr(false);
    } else {
      console.log(client);
      window.localStorage.removeItem("client");
      setSubmited(!submited);
    }
  };

  return (
    <div>
      <form className="py-8" onSubmit={handleSubmit}>
        {/* sticker background  */}
        <div className=" flex flex-col-reverse md:flex-row items-center  justify-between">
          <h1 className="  header mb-8 ">
            We are excited to have you
            <span className="text-orange"> onboard</span>
          </h1>
          <div>
            <img src={sticker} alt="" />
          </div>
        </div>

        {/* form components  */}

        {/* first row */}
        <div className="md:pb-72 formSticker">
          <div className="flex flex-col md:flex-row justify-between ">
            {/* first column */}
            <div className="w-full md:w-1/2">
              <div className="formGroup">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Ciroma Adekunle Chukwudi"
                  value={name}
                  onChange={handleChange}
                />
                {nameErr ? (
                  <p className="text-red-600 pl-7 ">Field is Required</p>
                ) : null}
              </div>
            </div>
            {/* second column  */}
            <div className="w-full md:w-1/2  mt-10 md:mt-0">
              <div className="formGroup">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="@gmail.com"
                  onChange={handleChange}
                  value={email}
                />

                {emailErr ? (
                  <p className="text-red-600 pl-7 ">Field is Required</p>
                ) : null}
              </div>
            </div>
          </div>

          {/* Second Column  */}

          <div className="flex flex-col md:flex-row justify-between mt-10 ">
            {/* first column */}
            <div className="w-full md:w-1/2">
              <div className="formGroup">
                <label htmlFor="number">Phone Number</label>
                <input
                  type="text"
                  name="number"
                  placeholder="+234"
                  value={number}
                  onChange={handleChange}
                />
              </div>
            </div>
            {/* second column  */}
            <div className="w-full md:w-1/2 mt-10 md:mt-0">
              <div className="formGroup">
                <label htmlFor="medium ">How did you get the gist?</label>

                {/* Medium radio button  container  */}

                <div className="gist relative">
                  <img
                    src={smallSticker}
                    alt="small sticker"
                    className=" hidden md:block absolute -right-16 -top-3"
                  />

                  <img
                    src={smallSticker2}
                    alt="small sticker"
                    className=" hidden md:block absolute left-36 -bottom-32"
                  />

                  <div className="form-group">
                    <label
                      className="text-primary border-primary"
                      htmlFor="friend"
                    >
                      A friend
                    </label>
                    <input
                      type="radio"
                      className="hidden"
                      name="medium"
                      id="friend"
                      value="friend"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label
                      className="text-orange border-orange"
                      htmlFor="SocialMedia"
                    >
                      Social media
                    </label>
                    <input
                      type="radio"
                      className="hidden"
                      name="medium"
                      id="SocialMedia"
                      value="social media"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label
                      className="text-yellow border-yellow"
                      htmlFor="google"
                    >
                      Google
                    </label>
                    <input
                      type="radio"
                      className="hidden"
                      name="medium"
                      id="google"
                      value="Google"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="text-dim border-dim" htmlFor="others">
                      Others
                    </label>
                    <input
                      type="radio"
                      className="hidden"
                      name="medium"
                      id="others"
                      value="Others"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* sticker backgroung coponent  */}
        <div className="h-56 hidden"></div>

        <div className="flex md:flex-row justify-between flex-col">
          {/* FIRST COL  */}
          <div className="w-full md:w-1/2 ">
            <img
              src={book}
              alt="Book Ilustration"
              className=" w-full md:w-3/4"
            />
          </div>

          <div className="w-full md:w-1/2 text-right ">
            <div>
              <h1 className="header mt-8">
                A little bit of more info &
                <span className="text-yellow "> you’re in!</span>
              </h1>

              <div className="mt-8">
                <div className="que my-4 ">
                  What feature is a no brainer for you?
                </div>

                <input
                  type="text"
                  name="review"
                  placeholder="we’d love to hear more from you.."
                  className="px-7 py-2 md:py-4 w-full focus:outline-none input"
                  value={review}
                  onChange={handleChange}
                />
              </div>

              <div className="">
                <div className="que mt-4">
                  Which of these are you most likely to do?
                </div>
                <div className="space-x-7 mt-5">
                  <button
                    type="button"
                    className="pollButton text-primary border-primary"
                  >
                    Renting Items
                  </button>
                  <button
                    type="button"
                    className="pollButton mt-8 md:mt-0 text-orange "
                  >
                    Renting out my Items
                  </button>
                </div>
              </div>
              <div>
                <button className="mt-10 px-5 py-3 bg-yellow text-primary text-xl rounded-3xl">
                  Get access
                </button>
              </div>
            </div>
          </div>

          {/* MODAL CODE  */}

          <div
            className={` ${
              submited ? "block" : "hidden"
            }  fixed top-0 bottom-0 left-0 w-full modal`}
            onClick={submittion}
          >
            <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-4/12 bg-white rounded-3xl p-4 md:px-9 md:py-12 ">
              <div className="text-right">
                <FaTimes
                  className="inline text-dim cursor-pointer "
                  onClick={submittion}
                />
              </div>
              <img src={Done} alt="" className="block mx-auto" />

              <div className="text-center md:text-xl font-bold mt-4 md:mt-8">
                <span className="text-orange"> Correct guy!</span> welcome to
                the club
              </div>
            </div>
          </div>
        </div>
      </form>

     
    </div>
  );
};

export default MoreInfo;

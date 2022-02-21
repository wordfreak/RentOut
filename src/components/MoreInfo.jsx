import React, { useEffect, useState } from "react";
import {
  FaCheck,
  FaMarker,
  FaRegTimesCircle,
  FaTimes,
  FaTimesCircle,
} from "react-icons/fa";
import book from "../assets/img/book.svg";
import Done from "../assets/img/done.svg";
import sticker from "../assets/img/sticker.svg";
import Bgsticker from "../assets/img/bgsticker.svg";
import { useNavigate } from "react-router-dom";
import smallSticker from "../assets/img/SmallbgSticker.png";
import smallSticker2 from "../assets/img/SmallbgSticker2.png";
import Finish from "../assets/img/finish.svg";
import Poll from "./Poll";

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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [back, setBack] = useState(false);

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
      setIsLoading(true);
      fetch(
        "https://sheet.best/api/sheets/4e64ad38-2195-46b8-9fac-6ed5e98088a1",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(client),
        }
      )
        .then((r) => r.json())
        .then((res) => {
          // The response comes here
          setIsLoading(false);

          res ? setSubmited(!submited) : console.log("unable to upload");
        })
        .catch((error) => {
          // Errors are reported there
          console.log("gate way eror");
          setIsLoading(false);
          setError(true);
        });

      console.log(client);
      window.localStorage.removeItem("client");
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
                      className="text-primary  border-primary friend"
                      htmlFor="friend"
                    >
                      A friend
                    </label>
                    <input
                      type="radio"
                      className="hidden checkbox"
                      name="medium"
                      id="friend"
                      value="friend"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label
                      className="text-orange border-orange social"
                      htmlFor="SocialMedia"
                    >
                      Social media
                    </label>
                    <input
                      type="radio"
                      className="hidden checkbox"
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
                      className="hidden checkbox"
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
                      className="hidden checkbox"
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
              className=" w-full md:w-3/4 md:mt-20"
            />
          </div>

          <div className="w-full md:w-1/2 text-right ">
            <div>
              <h1 className="header mt-8">
                A little bit of more info &
                <span className="text-yellow "> you’re in!</span>
              </h1>

              <div className="md:mt-20">
                <div className="que my-2 ">
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

              {/* The  Poll component  */}
              <Poll />

              <div>
                <button className="mt-10 px-5 py-3 bg-yellow text-primary text-xl rounded-3xl">
                  Get access
                </button>
              </div>
            </div>
          </div>

          {/* SUCCESS MODAL CODE  */}

          <div
            className={` ${
              submited ? "block" : "hidden"
            }  fixed top-0 bottom-0 left-0 w-full modal`}
            onClick={submittion}
          >
            <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-6/12 bg-white rounded-3xl p-4 md:px-9 md:py-12 ">
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

              <div className="text-center mt-8">
                <button className="text-lg  font-bold text-primary rounded-md border-2 py-1 px-8 border-primary ">
                  {" "}
                  Done{" "}
                </button>
              </div>
            </div>
          </div>

          {/* upload Fail MODAL CODE  */}

          <div
            className={` ${
              error ? "block" : "hidden"
            }  fixed top-0 bottom-0 left-0 w-full modal`}
            onClick={() => setError(!error)}
          >
            <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-4/12 bg-white rounded-3xl p-4 md:px-9 md:py-12 ">
              <div className="text-right">
                <FaTimes
                  className="inline text-dim cursor-pointer "
                  onClick={() => setError(false)}
                />
              </div>
              {/* <img src={Done} alt="" className="block mx-auto" /> */}

              <FaRegTimesCircle className="block mx-auto  text-4xl" />

              <div className="text-center md:text-xl font-bold mt-4 md:mt-8">
                <span className="text-orange"> Unable To upload !</span> Pls Try
                again.
              </div>
            </div>
          </div>
          {/* Loading MODAL CODE  */}

          <div
            className={` ${
              isLoading ? "block" : "hidden"
            }  fixed top-0 bottom-0 left-0 w-full modal`}
          >
            <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-4/12 bg-white rounded-3xl p-4 md:px-9 md:py-12 ">
              <div className="text-right">
                {/* <FaTimes className="inline text-dim cursor-pointer " /> */}
              </div>

              <div className="bg-white flex space-x-2 p-5 rounded-full justify-center items-center">
                <div className="bg-primary p-2  w-4 h-4 rounded-full animate-bounce blue-circle"></div>
                <div className="bg-yellow p-2 w-4 h-4 rounded-full animate-bounce green-circle"></div>
                <div className="bg-orange p-2  w-4 h-4 rounded-full animate-bounce red-circle"></div>
               
              </div>
              {/* <img src={Done} alt="" className="block mx-auto" /> */}

              {/* <FaRegTimesCircle className="block mx-auto  text-4xl" /> */}

              <div className="text-center md:text-xl font-bold mt-4 md:mt-8">
                <span className="text-orange"> Loading...</span> Pls wait!
              </div>
            </div>
          </div>

          {/* Client going  Back MOdal  */}

          <div
            className={` ${
              back ? "block" : "hidden"
            }  fixed top-0 bottom-0 left-0 w-full modal`}
            onClick={() => setBack(false)}
          >
            <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-6/12 bg-white rounded-3xl p-4 md:px-9 md:py-12 ">
              <div className="text-right">
                <FaTimes
                  className="inline text-dim cursor-pointer "
                  onClick={() => setError(false)}
                />
              </div>
              <div className="relative">
                <div
                  className="absolute bottom-6 left-20 text-primary md:leading-9 md:text-2xl font-bold text-center
                 "
                >
                  You for finish am <br />{" "}
                  <span className="md:text-4xl">join our club o!</span>
                </div>
                <img src={Finish} alt="" className="block mx-auto" />
              </div>
              <div className="text-center mt-10">
                <button className="back-button finish">
                  Let’s finish this
                </button>
                <button className="back-button out">Take me out</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MoreInfo;

import React, { useEffect, useState } from "react";

import book from "../assets/img/book.svg";
import sticker from "../assets/img/sticker.svg";
import bgsticker from "../assets/img/bgsticker.svg";
import bookTwo from "../assets/img/bookTwo.svg";
import stickerhead from "../assets/img/stickerhead.svg";
import { useNavigate } from "react-router-dom";
import Poll from "./Poll";
import Failed from "./Modals/Failed";
import Loading from "./Modals/Loading";
import ExitWarning from "./Modals/ExitWarning";
import Success from "./Modals/Success";

const MoreInfo = () => {
  const navigate = useNavigate();
  const initialData = {
    name: "",
    email: "",
    number: "",
    medium: "",
    review: "",
    mission: "",
  };

  const [client, setClient] = useState(initialData);
  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [submited, setSubmited] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [back, setBack] = useState(false);

  // destructuring the client data
  const { name, email, number, medium, review, mission } = client;

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

                <div className="gist">
                  <div className="form-group">
                    <input
                      type="radio"
                      name="medium"
                      id="friend"
                      value="friend"
                      className="hidden"
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="friend"
                      className="text-primary border-primary  label-checked:bg-primary label-checked:text-orange"
                    >
                      A Friend
                    </label>
                  </div>

                  <div className="form-group">
                    <input
                      type="radio"
                      className="hidden"
                      name="medium"
                      id="SocialMedia"
                      value="Social Media"
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="SocialMedia"
                      className="text-orange border-orange  label-checked:bg-orange label-checked:text-white"
                    >
                      Social media
                    </label>
                  </div>

                  <div className="form-group">
                    <input
                      type="radio"
                      className="hidden "
                      name="medium"
                      id="google"
                      value="Google"
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="google"
                      className="text-yellow border-yellow  label-checked:bg-yellow label-checked:text-primary"
                    >
                      Google
                    </label>
                  </div>

                  <div className="form-group">
                    <input
                      type="radio"
                      className="hidden "
                      name="medium"
                      id="others"
                      value="Others"
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="others"
                      className="text-dim border-dim  label-checked:bg-dim label-checked:text-very_dim"
                    >
                      Others
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* sticker backgroung coponent  */}
        <div className="h-56 hidden"></div>

        {/* Mobile view Start  */}

        <div className="flex md:hidden py-32 justify-evenly items-center relative">
          {/* background effect images start */}
          <div className="-z-10">
            <img
              src={stickerhead}
              alt="background stickers"
              className="absolute bottom-20 right-8"
            />
            <img
              src={bgsticker}
              alt="sticker pictures"
              className=" w-56 absolute -top-10 right-8  "
            />
            <div className="bg-orange w-3 h-3 rounded-full absolute bottom-10 left-10"></div>
          </div>
          {/* background effect images end */}

          <div>
            <img src={bookTwo} alt="Book Image" />
          </div>
          <div>
            <h1 className="text-primary text-base font-bold">
              A little bit <br /> of more info & <br />
              <span className="text-yellow">you’re in!</span>
            </h1>
          </div>
        </div>
        {/* Mobile view End  */}

        <div className="flex md:flex-row justify-between flex-col">
          {/* FIRST COL  */}
          <div className="w-full md:w-1/2 ">
            <img
              src={book}
              alt="Book Ilustration"
              className="hidden md:block w-full md:w-3/4 md:mt-20"
            />
          </div>

          <div className="w-full md:w-1/2 text-right ">
            <div>
              <h1 className="hidden md:block header mt-8">
                A little bit of more info &
                <span className="text-yellow "> you’re in!</span>
              </h1>

              <div className="md:mt-20 ">
                <div className="que my-2 ">
                  What feature is a no brainer for you?
                </div>

                <input
                  type="text"
                  name="review"
                  placeholder="we’d love to hear more from you.."
                  className="px-7 py-2 md:py-4 text-sm  md:w-full focus:outline-none input"
                  value={review}
                  onChange={handleChange}
                />
              </div>

              {/* The  Poll component  */}
              <Poll mission={mission} handleChange={handleChange} />

              <div>
                <button className="mt-10 px-5 py-3 bg-yellow text-primary text-sm md:text-xl rounded-3xl">
                  Get access
                </button>
              </div>
            </div>
          </div>

          {/* SUCCESS MODAL CODE  */}

          <div className={submited ? "block" : "hidden"}>
            <Success submittion={submittion} />
          </div>

          {/* upload Fail MODAL CODE  */}

          <div className={`${error ? "block" : "hidden"}`}>
            <Failed setError={setError} error={error} />
          </div>
          {/* Loading MODAL CODE  */}

          <div className={isLoading ? "block" : "hidden"}>
            <Loading />
          </div>

          {/* Client going  Back MOdal  */}
          <div className={back ? "block" : "hidden"}>
            <ExitWarning setBack={setBack} setError={setError} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default MoreInfo;

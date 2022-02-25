import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Form = ({ button }) => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClient({ ...client, [name]: value });
  };
  const { name, email, number, medium } = client;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (client.name === "" || client.email == "") {
      name.length === 0 ? setNameErr(true) : setNameErr(false);
      email.length === 0 ? setEmailErr(true) : setEmailErr(false);
    } else {
      // fetch(
      //   "https://sheet.best/api/sheets/4e64ad38-2195-46b8-9fac-6ed5e98088a1",
      //   {
      //     method: "POST",
      //     mode: "cors",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(client),
      //   }
      // )
      //   .then((r) => r.json())
      //   .then((res) => {
      //     // The response comes here
      //     // console.log(res);
      //     res ? setModal(true) : console.log("unable to upload");
      //   })
      //   .catch((error) => {
      //     // Errors are reported there
      //     console.log(error);
      //   });
      localStorage.setItem("client", JSON.stringify(client));

      navigate("/moreinfo");
      // console.log(client);
    }
  };
  // this function check the button medium button

  return (
    <div>
      <form>
        {/* first row */}
        <div className="flex flex-col md:flex-row justify-between ">
          {/* first column */}
          <div className="w-full md:w-1/2">
            <div className="formGroup">
              <label htmlFor="name">
                Full Name <sup className="text-orange">*</sup>{" "}
              </label>
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
              <label htmlFor="email">
                Email <sup className="text-orange">*</sup>
              </label>
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
              <label
                htmlFor="medium"
                className="text-lg font-bold text-orange md:text-primary"
              >
                How did you get the gist?
              </label>

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
                    className="hidden checkbox"
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
                    className="hidden checkbox"
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

        {button ? (
          <div className="text-center">
            <button
              onClick={handleSubmit}
              className="bg-orange text-white text-lg font-bold md:text-2xl  mt-16 rounded-2xl py-2 px-4 "
            >
              Let’s do this
            </button>
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default Form;

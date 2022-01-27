import React, { useState } from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
const GetAccess = () => {
  const initialData = {
    name: "",
    email: "",
    number: "",
    medium: "",
  };

  const [client, setClient] = useState(initialData);
  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [modal, setModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClient({ ...client, [name]: value });
  };
  const { name, email, number, medium } = client;

  const handleModal = () => {
    setModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (client.name === "" || client.email == "") {
      // console.log(name.length);
      // console.log(email.length);
      name.length === 0 ? setNameErr(true) : setNameErr(false);
      email.length === 0 ? setEmailErr(true) : setEmailErr(false);
    } else {
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
          // console.log(res);
          res ? setModal(true) : console.log("unable to upload");
        })
        .catch((error) => {
          // Errors are reported there
          console.log(error);
        });

      // console.log(client);
    }
  };

  return (
    <div className="mt-56 ">
      <h1 className=" md:text-4xl leading-10 -tracking-wide text-primary text-center font-bold">
        Take the first step to{" "}
        <span className="text-orange ">living your best life!</span>
      </h1>

      {/* Form code  */}
      <div className="mt-20">
        <form>
          {/* first row */}
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
            <div className="w-full md:w-1/2">
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
            <div className="w-full md:w-1/2">
              <div className="formGroup">
                <label htmlFor="medium">How did you get the gist?</label>
                <input
                  type="text"
                  name="medium"
                  placeholder="A friend"
                  value={medium}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={handleSubmit}
              className="bg-orange text-white text-2xl w-60 mt-28 "
            >
              Let’s do this
            </button>
          </div>
        </form>
      </div>

      {/* Done Modal box  */}

      <div
        className={`fixed top-0 bottom-0 left-0  modal w-full bg-dim z-50 h-screen ${
          modal ? "" : "hidden"
        }  `}
      >
        <div className="modal-box w-11/12 p-8 transition-all ease-out duration-700 ">
          <div className="modal_content">
            <div className=" text-9xl  flex justify-center">
              <IoCheckmarkCircleOutline />
            </div>

            <h1 className="text-xl font-bold text-orange text-center">
              Thanks for joining us.
            </h1>

            <div className="text-center ">
              <button
                onClick={handleModal}
                type="reset"
                className="bg-primary text-orange py-2 mt-4 px-8 rounded-lg"
              >
                {" "}
                Done
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* unsuccessful modal  */}
    </div>
  );
};

export default GetAccess;

import React, { useState } from "react";

const GetAccess = () => {
  const initialData = {
    name: "",
    email: "",
    number: "",
    medium: "",
  };

  const [client, setClient] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClient({ ...client, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (client.name === "" || client.email == "") {
    } else {
      console.log(client);
    }
  };

  const { name, email, number, medium } = client;

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
              </div>
            </div>
          </div>

          {/* Second Column  */}

          <div className="flex flex-col md:flex-row justify-between mt-10 ">
            {/* first column */}
            <div className="w-full md:w-1/2">
              <div className="formGroup">
                <label htmlFor="fullName">Phone Number</label>
                <input
                  type="text"
                  name="number"
                  placeholder="+234"
                  name={number}
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
              className="bg-orange text-white text-2xl  w-60 mt-28 "
            >
              Let’s do this
            </button>
          </div>
        </form>
      </div>

      {/* Done Modal box  */}

      {/* unsuccessful modal  */}

      {/* <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong className="font-bold">Holy smokes!</strong>
        <span className="block sm:inline">
          Something seriously bad happened.
        </span>
        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg
            className="fill-current h-6 w-6 text-red-500"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </span>
      </div> */}
    </div>
  );
};

export default GetAccess;

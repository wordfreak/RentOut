import React from "react";

import Form from "./Form";
const GetAccess = () => {
  return (
    <div className=" mt-16 md:mt-52 relative">
      {/* Circle boxes  */}
      {/* <div className=" hidden md:block w-14 h-14 bg-orange rounded-full absolute -top-28 -left-28"></div>
      <div className=" hidden md:block w-36 h-36 bg-primary rounded-full absolute -right-72 top-10"></div> */}
      {/* <div className=" hidden md:block w-14 h-14 bg-yellow rounded-full absolute -right-64 -bottom-10"></div> */}

      {/* <div className=" hidden md:block w-16 h-16 bg-yellow rounded-full absolute right-6 bottom-20"></div> */}

      {/* Circle boxes end  */}

      <h1 className=" md:text-4xl text-2xl leading-10 -tracking-wide text-primary text-center font-bold">
        Take the first step to <br className="md:hidden" />
        <span className="text-orange ">living your best life!</span>
      </h1>

      {/* Form code  */}
      <div className="mt-12">
        <Form button={true} />
      </div>
    </div>
  );
};

export default GetAccess;

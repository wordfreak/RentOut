import React from "react";
import Layout from "./Layout";
import Err from "../assets/img/err.svg";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Layout>
      <div className=" w-11/12 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <h1 className=" text-center  md:text-3xl text-primary font-bold">
          Oh Oh we can’t seem to find what you’re looking for
        </h1>
        <div className="text-center mt-4">
          <img src={Err} alt="error page " className="inline" />
        </div>

        <div className="text-center mt-8">
          <Link to="/">
            <button className="font-bold border-2 border-primary rounded-full w-36 py-2">
              Go back home
            </button>
          </Link>
        </div>
      </div>
      
    </Layout>
  );
};

export default Error;

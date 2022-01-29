import React, { useState } from "react";
import { FaTimes, FaTimesCircle } from "react-icons/fa";
import book from "../assets/img/book.svg";
import Done from "../assets/img/done.svg";
import { useNavigate } from "react-router-dom";

const MoreInfo = () => {
  const navigate = useNavigate();
  const [review, setReview] = useState("");
  const [submited, setSubmited] = useState(false);

  const handleChange = (e) => {
    setReview(e.target.value);
  };

  const submittion = () => {
    setSubmited(!submited);
    // setTimeout(navigate("/"), 4000);
    submited ? () => setTimeout(navigate("/"), 1) : null;
  };

  return (
    <div className="py-10">
      <h1 className=" text-center md:text-left text-2xl font-bold mt-14 text-primary md:text-4xl">
        A little bit of more info &{" "}
        <span className="text-yellow ">you’re in!</span>
      </h1>

      <div className="flex md:flex-row justify-between flex-col-reverse">
        <div className="w-full md:w-1/2 ">
          <div>
            <div className="mt-14">
              <div className="que">What feature is a no brainer for you?</div>
              <textarea
                name="review"
                className="review"
                placeholder="we’d love to hear more from you.."
                onChange={handleChange}
                value={review}
              ></textarea>
            </div>

            <div className="">
              <div className="que">
                Which of these are you most likely to do?
              </div>
              <div className="md:space-x-7 mt-5">
                <button className="pollButton text-primary border-primary">
                  Renting Items
                </button>
                <button className="pollButton mt-8 md:mt-0 text-orange ">
                  Renting out my Items
                </button>
              </div>

              <div className="pollResult mt-8">
                <div className=" gap-8 flex items-center text-primary">
                  <div className="w-6/12 text-lg">Renting Items</div>
                  <span
                    className="progress inline-block rounded-lg bg-primary"
                    style={{ width: "100%" }}
                  ></span>
                </div>
                <div className=" gap-8 flex items-center   text-orange">
                  <div className=" text-lg">Renting out my Items</div>
                  <span
                    className="progress inline-block rounded-lg bg-orange"
                    style={{ width: "50%" }}
                  ></span>
                </div>
              </div>
            </div>
            <div>
              <button
                className="mt-10 px-5 py-3 bg-yellow text-primary text-xl rounded-3xl"
                onClick={submittion}
              >
                Get access
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2  text-center ">
          <div className="h-full flex items-center justify-end">
            <img
              src={book}
              alt="Book Ilustration"
              className=" w-full md:w-3/4"
            />
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
              <span className="text-orange"> Correct guy!</span> welcome to the
              club{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;

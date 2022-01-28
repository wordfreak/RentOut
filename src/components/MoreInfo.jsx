import React from "react";
import book from "../assets/img/book.svg";

const MoreInfo = () => {
  const details = {
    review: "",
  };

  return (
    <div>
      <h1 className="font-bold mt-14 text-primary md:text-4xl">
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
                <button className="pollButton text-orange ">
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
                <div className=" gap-8 flex items-center  text-orange">
                  <div className=" text-lg">Renting out my Items</div>
                  <span
                    className="progress inline-block rounded-lg bg-orange"
                    style={{ width: "50%" }}
                  ></span>
                </div>
              </div>
            </div>
            <div>
              <button className="mt-10 px-5 py-3 bg-yellow text-primary text-xl rounded-3xl">
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
      </div>
    </div>
  );
};

export default MoreInfo;

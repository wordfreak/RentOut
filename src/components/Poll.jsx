import React, { useState } from "react";

const Poll = ({ handleChange }) => {
  const [poll, SetPoll] = useState(false);
  const handlePollResult = () => {
    SetPoll(true);
  };

  return (
    <div>
      <div>
        <div className="mt-10">
          <div className="que mt-4">
            Which of these are you most likely to do?
          </div>
          <div className=" flex gap-5 items-center justify-end flex-wrap ">
            <div className="">
              <input
                type="radio"
                className="hidden"
                name="mission"
                id="renting"
                value="Renting Items"
                onChange={handleChange}
                onClick={handlePollResult}
              />
              <label
                htmlFor="renting"
                className="pollButton text-primary mt-3 border-primary label-checked:bg-primary label-checked:text-white"
              >
                Renting Items
              </label>
            </div>

            <div className="">
              <input
                type="radio"
                className="hidden "
                name="mission"
                id="rentingOut"
                value="Renting out my Items"
                onChange={handleChange}
                onClick={handlePollResult}
              />
              <label
                htmlFor="rentingOut"
                className=" pollButton mt-3 md:mt-0 text-orange label-checked:bg-orange label-checked:text-white"
              >
                Renting out my Items
              </label>
            </div>
          </div>
        </div>

        <div
          className={`${
            !poll ? "hidden" : "block"
          }  mt-6 md:mt-10 flex items-end flex-col`}
        >
          <div className="progress">
            <div className="progress_indicator">
              <div className="bg-primary" style={{ width: "90%" }}></div>
            </div>
            <div className="progress_title">Renting Items</div>
          </div>

          <div className="progress">
            <div className="progress_indicator">
              <div className="bg-orange" style={{ width: "40%" }}></div>
            </div>
            <div className="progress_title">Renting out my Items</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poll;

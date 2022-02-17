import React, { useState } from "react";


const Poll = () => {
  const [poll, SetPoll] = useState(false)
const handlePollResult = () =>{
SetPoll(true)
} 

  return (
    <div>
      <div>
        <div className="mt-10">
          <div className="que mt-4">
            Which of these are you most likely to do?
          </div>
          <div className="space-x-7  mt-5">
            <button
              type="button"
              className="pollButton text-primary border-primary"
              onClick={handlePollResult}
            >
              Renting Items
            </button>
            <button
              type="button"
              className="pollButton mt-3 md:mt-0 text-orange "
              onClick={handlePollResult}

            >
              Renting out my Items
            </button>
          </div>
        </div>

        <div className={`${!poll ? "hidden": "block" }  mt-6 md:mt-10 flex items-end flex-col` }  >
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

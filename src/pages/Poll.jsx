import React, { useState } from "react";

const Poll = () => {
  const que = [
    {
      id: "1",
      que: "Which of these are you most likely to do?",
      vote: 0,
    },
    {
      id: "2",
      que: "Which of these are you most likely to do?",
      vote: 0,
    },
    {
      id: "3",
      que: "Which of these are you most likely to do?",
      vote: 0,
    },
    {
      id: "4",
      que: "Which of these are you most likely to do?",
      vote: 0,
    },
  ];
  const [questions, setQuestions] = useState([]);

  return (
    <div>
      <div className="">
        <div className="que">Which of these are you most likely to do?</div>
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
            {/* <span
              className="progress inline-block rounded-lg bg-primary"
              style={{ width: "100%" }}
            ></span> */}
          </div>
          <div className=" gap-8 flex items-center  text-orange">
            <div className=" text-lg">Renting out my Items</div>
            {/* <span
              className="progress inline-block rounded-lg bg-orange"
              style={{ width: "50%" }}
            ></span> */}
          </div>
        </div>
      </div>
      <div>
        <button className="mt-10 px-5 py-3 bg-yellow text-primary text-xl rounded-3xl">
          Get access
        </button>
      </div>
    </div>
  );
};

export default Poll;

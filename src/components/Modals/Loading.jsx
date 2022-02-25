import React from 'react'

const Loading = ({}) => {
  return (
    <div>
      <div
        className="  fixed top-0 bottom-0 left-0 w-full modal"
      >
        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-4/12 bg-white rounded-3xl p-4 md:px-9 md:py-12 ">
          <div className="text-right">
          </div>

          <div className="bg-white flex space-x-2 p-5 rounded-full justify-center items-center">
            <div className="bg-primary p-2  w-4 h-4 rounded-full animate-bounce blue-circle"></div>
            <div className="bg-yellow p-2 w-4 h-4 rounded-full animate-bounce green-circle"></div>
            <div className="bg-orange p-2  w-4 h-4 rounded-full animate-bounce red-circle"></div>
          </div>
  

          <div className="text-center md:text-xl font-bold mt-4 md:mt-8">
            <span className="text-orange"> Loading...</span> Pls wait!
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading
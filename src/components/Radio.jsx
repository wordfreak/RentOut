import React from "react";

// const raido = [
//   {
//     id: "friend",
//     title: "A Friend",
//     name: "medium",
//     value: "friend",
//     htmlFor: "friend",
//     className: "text-primary border-primary",
//   },
//   {
//     id: "Social media",
//     title: "Social media",
//     name: "medium",
//     htmlFor: "social",
//     value: "Social media",
//     className: "text-orange border-orange",
//   },
//   {
//     id: "",
//     title: "Social media",
//     name: "medium",
//     htmlFor: "social",
//     value: "Social media",
//     className: "text-yellow border-yellow",
//   },
// ];



const cliked = () =>{

}

const Radio = ({
  id,
  title,
  name,
  value,
  htmlFor,
  className,
  handleChange,
}) => {
  return (
    <div className="form-group">
      <label className={`${className}`} htmlFor="friend">
        {title}
      </label>
      <input
        type="radio"
        className={`hidden checkbox`}
        name={name}
        id={id}
        value={value}
        onChange={handleChange}
        onClick={cliked}
      
      />
    </div>
  );
};

export default Radio;

import React from "react";

const Checkbox = ({ selected }) => {
  return (
    <div className="form-group">
      <label className="text-primary border-primary" htmlFor="friend">
        A friend
      </label>
      <input
        type="radio"
        className="hidden"
        name="medium"
        id="friend"
        value="friend"
        onChange={handleChange}
        checked={selected}
      />
      {selected && <FaMarker className="" />}
    </div>
  );
};

export default Checkbox;

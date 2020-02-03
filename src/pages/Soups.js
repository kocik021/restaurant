import React from "react";

const Soups = props => {
  return (
    <div className="soup">
      <h2 className="soup-name">{props.name}</h2>

      <h2 className="ingridients">{props.price}</h2>
    </div>
  );
};

export default Soups;

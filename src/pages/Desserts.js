import React from "react";

const Desserts = props => {
  return (
    <div className="dessert">
      <h2 className="dessert-name">{props.name}</h2>

      <h2 className="ingridients">{props.price}</h2>
    </div>
  );
};

export default Desserts;

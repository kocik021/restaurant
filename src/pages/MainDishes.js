import React from "react";
const MainDishes = props => {
  return (
    <div className="dish">
      <h2 className="dish-name">{props.name}</h2>
      <h2 className="ingridients">{props.price}</h2>
    </div>
  );
};

export default MainDishes;

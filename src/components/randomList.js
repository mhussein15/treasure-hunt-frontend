import React from "react";
import { useSelector } from "react-redux";

export const randomList = () => {
    const random = useSelector((state) => state.thingReducer.random);
    const randomList = random.map((randomItem) => {
        randomItem.name
                 <img  src={randomItem.image} alt={randomItem.name} />

             );
}
  return <div>{randomList}</div>;
};

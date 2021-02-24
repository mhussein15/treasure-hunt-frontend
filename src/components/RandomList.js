import React from "react";
import { useSelector,useEffect } from "react-redux";
import RandomItem from "./RandomItem";
export default function RandomList() {
  const randomThings = useSelector((state) => state.thingReducer.random);
  const loading = useSelector((state) => state.thingReducer.randomLoader);
  console.log(randomThings)
  let randomList = randomThings.map((random) => (<RandomItem random={random} />));
  return (
    <div className="container mt-2">
        {(loading)?randomList:"Loading..."}
    </div>
  );
}

import React from "react";
import { useSelector,useEffect } from "react-redux";
import TreasureItem from "./TreasureItem";
export default function RandomList() {
  const treasurethings = useSelector((state) => state.thingReducer.treasure);
  const loading = useSelector((state) => state.thingReducer.treasureLoader);
  let treasureList = treasurethings.map((treasure) => (<TreasureItem treasure={treasure} />));
  return (
    <div className="container mt-2">
        {(loading)?treasureList:"Loading..."}
    </div>
  );
}

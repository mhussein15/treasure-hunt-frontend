import React from "react";

export default function TreasureItem(props) {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <img src={props.treasure.image} class="card-img-top" alt="..." />
      <div class="card-body">
        <p class="card-text">{props.treasure.name}</p>
      </div>
    </div>
  );
}

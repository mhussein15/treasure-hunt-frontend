import React from "react";

export default function RandomItem(props) {
  console.log("ss")
  return (
    <div class="card" style={{width:"18rem"}}>
      <img src={props.random.image} class="card-img-top" alt="..." />
      <div class="card-body">
        <p class="card-text">
         {props.random.name}
        </p>
      </div>
    </div>
  );
}

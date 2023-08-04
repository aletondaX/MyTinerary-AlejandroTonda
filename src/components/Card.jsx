import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img src={props.img} alt="Image Not Found"/>
      <div className="dim">
        <h3>{props.city}</h3>
        <p>{props.country}</p>
      </div>
    </div>
  );
}

export default Card;

import React from "react";


function House(props){
  return (
    <div>
      <img alt="pic"></img>
      <p>{props.category} - {props.beds}</p>
      <h5>{props.title}</h5>
      <p>${props.price} per person</p>
      <p>{props.rating}</p>
    </div>
  );
}

export default House;

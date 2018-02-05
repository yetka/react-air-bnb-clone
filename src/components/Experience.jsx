import React from "react";


function Experience(props){
  return (
    <div>
      <img alt="pic"></img>
      <p>{props.category} - {props.location}</p>
      <h5>{props.title}</h5>
      <p>${props.price} per person</p>
      <p>{props.rating}</p>
    </div>
  );
}

export default Experience;

import React from "react";
import PropTypes from "prop-types";


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

Experience.propTypes = {
  category: PropTypes.string,
  location: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.string
};

export default Experience;

import React from 'react';
import PropTypes from 'prop-types';

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

House.propTypes = {
  category: PropTypes.string,
  beds: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.string
};

export default House;

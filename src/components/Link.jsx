import React from 'react';
import PropTypes from 'prop-types';
import airbnb_logo from '../assets/images/airbnb_logo.png';



function Link(props){
  return (
    <div className="row">
      <div className="col-md-4">
        <img style={{width: '70px', marginLeft: '0px'}}  src={airbnb_logo} alt="logo"></img>
      </div>
      <div className="col-md-8">
        <br></br>
        <h6><strong>{props.title}</strong></h6>
      </div>
    </div>
  );
}

Link.propTypes = {
  title: PropTypes.string
};

export default Link;

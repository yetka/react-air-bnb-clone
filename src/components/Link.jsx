import React from 'react';
import PropTypes from 'prop-types';



function Link(props){
  return (
    <div>
      <img alt="pic"></img>
      <p>{props.title}</p>
    </div>
  );
}

Link.propTypes = {
  title: PropTypes.string
};

export default Link;

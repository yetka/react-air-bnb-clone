import React from 'react';


function NavBar(){
  var anchorStyles = {
    fontSize: '14'
  };
  return (
    <div className="row">
      <div className="col-md-1">
        <img alt="airbnb logo"></img>
      </div>
      <div className="col-md-6">

      </div>
      <div className="col-md-2">
        <a style={anchorStyles}>Become a host</a>
      </div>
      <div className="col-md-1">
        <a style={anchorStyles}>Help</a>
      </div>
      <div className="col-md-1">
        <a style={anchorStyles}>Sign-up</a>
      </div>
      <div className="col-md-1">
        <a style={anchorStyles}>Log In</a>
      </div>
    </div>
  );
}

export default NavBar;

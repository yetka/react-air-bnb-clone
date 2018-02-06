import React from 'react';


function NavBar(){
  return (
    <div className="row">
      <div className="col-md-1">
        <img alt="airbnb logo"></img>
      </div>
      <div className="col-md-7">
      
      </div>
      <div className="col-md-1">
        <a>Become a host</a>
      </div>
      <div className="col-md-1">
        <a>Help</a>
      </div>
      <div className="col-md-1">
        <a>Sign-up</a>
      </div>
      <div className="col-md-1">
        <a>Log In</a>
      </div>
    </div>
  );
}

export default NavBar;

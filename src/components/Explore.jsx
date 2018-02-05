import React from "react";
import Link from "./Link";


function Explore(){
  return (
    <div className="row">
      <div className="col-md-3">
        <Link
          title="Homes"/>
      </div>
      <div className="col-md-3">
        <Link
          title="Experiences"/>
      </div>
      <div className="col-md-3">
        <Link
          title="Restaurants"/>
      </div>
    </div>
  );
}

export default Explore;

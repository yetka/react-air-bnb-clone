import React from "react";
import House from "./House";

function HomesList(){
  return (
    <div>
      <h2>Homes</h2>
      <div className="row">
        <div className="col-md-3">
          <House
            category="Entire House"
            beds={2}
            title="Unique Cob Cottage"
            price={12}
            rating="Five Stars"/>
        </div>
        <div className="col-md-3">
          <House
            category="Surf Lesson"
            beds={2}
            title="Amazing View"
            price={12}
            rating="Five Stars"/>
        </div>
        <div className="col-md-3">
          <House
            category="Surf Lesson"
            beds={2}
            title="Amazing View"
            price={12}
            rating="Five Stars"/>
        </div>
        <div className="col-md-3">
          <House
            category="Surf Lesson"
            beds={2}
            title="Amazing View"
            price={12}
            rating="Five Stars"/>
        </div>
      </div>
      <hr></hr>
      <div className="row">
        <div className="col-md-3">
          <House
            category="Surf Lesson"
            beds={2}
            title="Amazing View"
            price={12}
            rating="Five Stars"/>
        </div>
        <div className="col-md-3">
          <House
            category="Surf Lesson"
            beds={2}
            title="Amazing View"
            price={12}
            rating="Five Stars"/>
        </div>
        <div className="col-md-3">
          <House
            category="Surf Lesson"
            beds={2}
            title="Amazing View"
            price={12}
            rating="Five Stars"/>
        </div>
        <div className="col-md-3">
          <House
            category="Surf Lesson"
            beds={2}
            title="Amazing View"
            price={12}
            rating="Five Stars"/>
        </div>
      </div>
    </div>
  );
}

export default HomesList;

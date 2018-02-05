import React from "react";
import Experience from "./Experience";


function ExperienceList(){
  return (
    <div>
      <h2>Experiences</h2>
      <div className="row">
        <div className="col-md-3">
          <Experience
            category="Surf Lesson"
            location="Bali"
            title="The Surf Champion"
            price="12"
            rating="Five Stars"/>
        </div>
        <div className="col-md-3">
          <Experience
            category="Surf Lesson"
            location="Bali"
            title="The Surf Champion"
            price="12"
            rating="Five Stars"/>
        </div>
        <div className="col-md-3">
          <Experience
            category="Surf Lesson"
            location="Bali"
            title="The Surf Champion"
            price="12"
            rating="Five Stars"/>
        </div>
        <div className="col-md-3">
          <Experience
            category="Surf Lesson"
            location="Bali"
            title="The Surf Champion"
            price="12"
            rating="Five Stars"/>
        </div>
      </div>
      <hr></hr>
      <div className="row">
        <div className="col-md-3">
          <Experience
            category="Surf Lesson"
            location="Bali"
            title="The Surf Champion"
            price="12"
            rating="Five Stars"/>
        </div>
        <div className="col-md-3">
          <Experience
            category="Surf Lesson"
            location="Bali"
            title="The Surf Champion"
            price="12"
            rating="Five Stars"/>
        </div>
        <div className="col-md-3">
          <Experience
            category="Surf Lesson"
            location="Bali"
            title="The Surf Champion"
            price="12"
            rating="Five Stars"/>
        </div>
        <div className="col-md-3">
          <Experience
            category="Surf Lesson"
            location="Bali"
            title="The Surf Champion"
            price="12"
            rating="Five Stars"/>
        </div>
      </div>
    </div>
  );
}

export default ExperienceList;

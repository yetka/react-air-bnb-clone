import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import Search from "./Search";
import Explore from "./Explore";
import ExperienceList from "./ExperienceList";
import HomesList from "./HomesList";

function App(){
  return (
    <div className="container">
      <NavBar/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Header/>
      <Search/>
      <br></br>
      <br></br>
      <br></br>
      <Explore/>
      <ExperienceList/>
      <hr></hr>
      <HomesList/>
    </div>

  );
}

export default App;

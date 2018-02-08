import React from 'react';
import NavBar from './NavBar';
import Header from './Header';
import Search from './Search';
import Explore from './Explore';
import ExperienceList from './ExperienceList';
import HomesList from './HomesList';

function App(){
  return (
    <div className="container">
      <style jsx global>{`
        body {
          font-family: Helvetica;
          padding: 30px;
        }
      `}</style>
      <NavBar/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div style={{padding: '150px'}}>
        <Header/>
        <Search/>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <Explore/>
      <br></br>
      <br></br>
      <br></br>
      <ExperienceList/>
      <hr></hr>
      <HomesList/>
    </div>

  );
}

export default App;

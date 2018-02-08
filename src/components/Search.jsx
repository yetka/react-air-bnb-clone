import React from 'react';


function Search(){
  var searchStyles = {
    borderStyle: 'solid',
    borderWidth: '2px',
    borderColor: 'lightGray',
    padding: '20px'
  };
  return (
    <div style={searchStyles}>
      <input style={{border: 'none', width: '680px', height: '50px', fontSize: '20px'}} type="text" placeholder='   Try "Orlando"'></input>
      <button style={{fontSize: '18px'}} className="btn btn-danger">Search</button>
    </div>
  );
}

export default Search;

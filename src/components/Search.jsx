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
      <input type="text" placeholder='Try "Orlando"'></input>
      <button className="btn btn-danger">Search</button>
    </div>
  );
}

export default Search;

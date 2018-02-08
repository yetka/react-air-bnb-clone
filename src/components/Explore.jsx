import React from 'react';
import Link from './Link';


function Explore(){

  var masterLinkList = [
    {
      title: 'Homes',
    },
    {
      title: 'Experiences',
    },
    {
      title: 'Restaurants',
    }
  ];

  return (
    <div>
      <h3 style={{fontSize: '26px', fontWeight: 'bold' }} >Explore Airbnb</h3>
      <div className="row">
        {masterLinkList.map((link, index) =>
          <div style={{borderStyle: 'solid',
          borderWidth: '2px',
          borderColor: 'lightGray', margin: '10px'}} className="col-md-3">
            <Link
              title={link.title}
              key={index}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Explore;

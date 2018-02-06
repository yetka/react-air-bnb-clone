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
    <div className="row">
      {masterLinkList.map((link, index) =>
        <div className="col-md-3">
          <Link
            title={link.title}
            key={index}
          />
        </div>
      )}
    </div>
  );
}

export default Explore;

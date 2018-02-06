import React from 'react';
import House from './House';

function HomesList(){
  var masterHomesList = [
    {
      category: 'Entire House',
      beds: 2,
      title: 'Unique Cob Cottage',
      price: 12,
      rating: 'Five Stars'
    },
    {
      category: 'Entire House',
      beds: 2,
      title: 'Unique Cob Cottage',
      price: 12,
      rating: 'Five Stars'
    },
    {
      category: 'Entire House',
      beds: 2,
      title: 'Unique Cob Cottage',
      price: 12,
      rating: 'Five Stars'
    },
    {
      category: 'Entire House',
      beds: 2,
      title: 'Unique Cob Cottage',
      price: 12,
      rating: 'Five Stars'
    },
    {
      category: 'Entire House',
      beds: 2,
      title: 'Unique Cob Cottage',
      price: 12,
      rating: 'Five Stars'
    },
    {
      category: 'Entire House',
      beds: 2,
      title: 'Unique Cob Cottage',
      price: 12,
      rating: 'Five Stars'
    }
  ];

  return (
    <div>
      <h2>Homes</h2>
      <div className="row">
        {masterHomesList.map((home, index) =>
          <div className="col-md-4">
            <House
              category={home.category}
              beds={home.beds}
              title={home.title}
              price={home.price}
              rating={home.rating}
              key={index} />
          </div>
        )}
      </div>
    </div>
  );
}

export default HomesList;

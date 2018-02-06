import React from 'react';
import Experience from './Experience';

var masterExperienceList = [
  {
    category: 'Surf Lesson',
    location: 'Bali',
    title: 'The Surf Champion',
    price:  12,
    rating: 'Five Stars'
  },
  {
    category: 'Surf Lesson',
    location: 'Bali',
    title: 'The Surf Champion',
    price:  12,
    rating: 'Five Stars'
  },
  {
    category: 'Surf Lesson',
    location: 'Bali',
    title: 'The Surf Champion',
    price:  12,
    rating: 'Five Stars'
  },
  {
    category: 'Surf Lesson',
    location: 'Bali',
    title: 'The Surf Champion',
    price:  12,
    rating: 'Five Stars'
  },
  {
    category: 'Surf Lesson',
    location: 'Bali',
    title: 'The Surf Champion',
    price:  12,
    rating: 'Five Stars'
  },
  {
    category: 'Surf Lesson',
    location: 'Bali',
    title: 'The Surf Champion',
    price:  12,
    rating: 'Five Stars'
  }
];

function ExperienceList(){
  return (
    <div>
      <h2>Experiences</h2>
      <div className="row">
        {masterExperienceList.map((experience, index) =>
          <div className="col-md-4">
            <Experience
              category={experience.category}
              location={experience.location}
              title={experience.title}
              price={experience.price}
              rating={experience.rating}
              key={index}/>
          </div>
        )}
      </div>
    </div>
  );
}

export default ExperienceList;

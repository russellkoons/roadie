import React from 'react';

const Reviews = (props) => {
  let total = 0;
  
  props.reviews.forEach(rev => {
    total += parseInt(rev.rating);
  });

  const score = total / props.reviews.length;

  return (
    <div>
      <h1>CUSTOMER REVIEWS</h1>
      <div>
        <p>{score} out of 5</p>
        <p>{props.reviews.length} reviews</p>
      </div>
      <div>

      </div>
      <div>

      </div>
    </div>
  );
}

export default Reviews;
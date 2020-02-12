import React from 'react';

const Reviews = (props) => {
  return (
    <div>
      <h1>CUSTOMER REVIEWS</h1>
      <p>{props.reviews.length} reviews</p>
    </div>
  );
}

export default Reviews;
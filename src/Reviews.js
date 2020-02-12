import React from 'react';

const Reviews = (props) => {
  let total = 0;
  let fives = [];
  let fours = [];
  let threes = [];
  let twos = [];
  let ones = [];
  
  props.reviews.forEach(rev => {
    total += parseInt(rev.rating);

    if (rev.rating === '5') {
      fives.push(rev);
    } else if (rev.rating === '4') {
      fours.push(rev);
    } else if (rev.rating === '3') {
      threes.push(rev);
    } else if (rev.rating === '2') {
      twos.push(rev);
    } else {
      ones.push(rev);
    }
  });

  const score = total / props.reviews.length;

  const fiveStar = (fives.length / props.reviews.length * 100).toString() + '%';
  const fourStar = (fours.length / props.reviews.length * 100).toString() + '%';
  const threeStar = (threes.length / props.reviews.length * 100).toString() + '%';
  const twoStar = (twos.length / props.reviews.length * 100).toString() + '%';
  const oneStar = (ones.length / props.reviews.length * 100).toString() + '%';

  const showRatings = num => {
    console.log(num);
  }

  return (
    <div className="flexbox">
      <div className="col-1">
        <p>{score} out of 5</p>
        <p>{props.reviews.length} reviews</p>
        <div className="row">
          <div className="side">
            <button onClick={() => showRatings('5')}>5 star</button>
          </div>
          <div className="middle">
            <div className="bar-container">
              <div className="bar" style={{width: fiveStar}}></div>
            </div>
          </div>
          <div className="side">
            <button onClick={() => showRatings('4')}>4 star</button>
          </div>
          <div className="middle">
            <div className="bar-container">
              <div className="bar" style={{width: fourStar}}></div>
            </div>
          </div>
          <div className="side">
            <button onClick={() => showRatings('3')}>3 star</button>
          </div>
          <div className="middle">
            <div className="bar-container">
              <div className="bar" style={{width: threeStar}}></div>
            </div>
          </div>
          <div className="side">
            <button onClick={() => showRatings('2')}>2 star</button>
          </div>
          <div className="middle">
            <div className="bar-container">
              <div className="bar" style={{width: twoStar}}></div>
            </div>
          </div>
          <div className="side">
            <button onClick={() => showRatings('1')}>1 star</button>
          </div>
          <div className="middle">
            <div className="bar-container">
              <div className="bar" style={{width: oneStar}}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-1">

      </div>
      <div className="col-1">

      </div>
    </div>
  );
}

export default Reviews;
import React, { useEffect } from 'react';

const Reviews = props => {
  useEffect(() => {
    sortReviews(props.reviews);
  }, [props])

  let col1 = [];
  let col2 = [];

  const sortReviews = reviews => {
    for (let i = 0; i < reviews.length; i++) {
      if (i % 2 !== 0) {
        col1.push(
          <div key={i}>
            <h2>{reviews[i].title}</h2>
            <p>By {reviews[i].user} on {reviews[i].date}</p>
            <p>{reviews[i].review}</p>
          </div>
        )
      } else {
        col2.push(
          <div key={i}>
            <h2>{reviews[i].title}</h2>
            <p>By {reviews[i].user} on {reviews[i].date}</p>
            <p>{reviews[i].review}</p>
          </div>
        )
      }
    }
  }

  return (
    <div className="flexbox">
      <div className="col-1">
        <p>{props.score} out of 5</p>
        <p>{props.reviews.length} reviews</p>
        <div>
          <div className="flexbox">
            <div className="side">
              <button onClick={() => props.display(props.fives)}>5 star</button>
            </div>
            <div className="middle">
              <div className="bar-container">
                <div className="bar" style={{width: props.percentages[0]}}></div>
              </div>
            </div>
          </div>
          <div className="flexbox">
            <div className="side">
              <button onClick={() => props.display(props.fours)}>4 star</button>
            </div>
            <div className="middle">
              <div className="bar-container">
                <div className="bar" style={{width: props.percentages[1]}}></div>
              </div>
            </div>
          </div>
          <div className="flexbox">
            <div className="side">
              <button onClick={() => props.display(props.threes)}>3 star</button>
            </div>
            <div className="middle">
              <div className="bar-container">
                <div className="bar" style={{width: props.percentages[2]}}></div>
              </div>
            </div>
          </div>
          <div className="flexbox">
            <div className="side">
              <button onClick={() => props.display(props.twos)}>2 star</button>
            </div>
            <div className="middle">
              <div className="bar-container">
                <div className="bar" style={{width: props.percentages[3]}}></div>
              </div>
            </div>
          </div>
          <div className="flexbox">
            <div className="side">
              <button onClick={() => props.display(props.ones)}>1 star</button>
            </div>
            <div className="middle">
              <div className="bar-container">
                <div className="bar" style={{width: props.percentages[4]}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-1">
        {col1}
      </div>
      <div className="col-1">
        {col2}
      </div>
    </div>
  );
}

export default Reviews;
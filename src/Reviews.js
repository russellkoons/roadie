import React from 'react';
import StarRatings from 'react-star-ratings';

const Reviews = props => {
  // The StarRatings component was throwing an error because it tried to render before
  // the fetch, so this is here to subvert the error
  let score;

  if (!props.score) {
    score = 0;
  } else {
    score = props.score
  }

  return (
    <div className="col-1">
      <div>          
        <StarRatings 
          rating={score}
          name="rating"
          starRatedColor="goldenrod"
          starDimension="15px"
        />
        <span style={{float: 'right'}}>
          {props.score} out of 5 
        </span>
      </div>
      <button className="sort-button" onClick={() => props.display(props.revs[5])}>{props.length} reviews</button>
      <div>
        <div className="flexbox">
          <div className="side">
            <button className="sort-button" onClick={() => props.display(props.revs[0])}>5 star</button>
          </div>
          <div className="middle">
            <div className="bar-container">
              <div className="bar" style={{width: props.percentages[0]}}></div>
            </div>
          </div>
        </div>
        <div className="flexbox">
          <div className="side">
            <button className="sort-button" onClick={() => props.display(props.revs[1])}>4 star</button>
          </div>
          <div className="middle">
            <div className="bar-container">
              <div className="bar" style={{width: props.percentages[1]}}></div>
            </div>
          </div>
        </div>
        <div className="flexbox">
          <div className="side">
            <button className="sort-button" onClick={() => props.display(props.revs[2])}>3 star</button>
          </div>
          <div className="middle">
            <div className="bar-container">
              <div className="bar" style={{width: props.percentages[2]}}></div>
            </div>
          </div>
        </div>
        <div className="flexbox">
          <div className="side">
            <button className="sort-button" onClick={() => props.display(props.revs[3])}>2 star</button>
          </div>
          <div className="middle">
            <div className="bar-container">
              <div className="bar" style={{width: props.percentages[3]}}></div>
            </div>
          </div>
        </div>
        <div className="flexbox">
          <div className="side">
            <button className="sort-button" onClick={() => props.display(props.revs[4])}>1 star</button>
          </div>
          <div className="middle">
            <div className="bar-container">
              <div className="bar" style={{width: props.percentages[4]}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
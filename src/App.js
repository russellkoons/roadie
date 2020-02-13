import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Product from './Product.js'
import Reviews from './Reviews.js';
import StarRatings from 'react-star-ratings';

function App() {
  const isInitial = useRef(true);
  const [reviews, setReviews] = useState([]);
  const [column1, setCol1] = useState([]);
  const [column2, setCol2] = useState([]);

  useEffect(() => {
    // Checks if this is the first render and fetches if so
    if (isInitial.current) {
      isInitial.current = false;

      // I made a GET endpoint for an old API I built to fetch the reviews
      fetch('https://pawlist-api.herokuapp.com/roadie', {
        method: 'get'
      })
        .then(res => res.json())
        .then(res => {
          setReviews(res);
          sortReviews(res);
        })
        .catch(() => console.warn('Uh oh'));
    } else {
      sortReviews(reviews);
    }
  }, [reviews]);

  // I used two columns to display the reviews so this function sorts them into columns based on date
  const sortReviews = revs => {
    let col1 = [];
    let col2 = [];

    if (revs.length % 2 === 0) {
      for (let i = 0; i < revs.length; i++) {
        if (i % 2 !== 0) {
          col1.unshift(
            <div key={i} className="review">
              <p><strong>{revs[i].title}</strong></p>
              <StarRatings 
                rating={parseInt(revs[i].rating)}
                starRatedColor="goldenrod"
                starDimension="15px"
              />
              <p><sub>By {revs[i].user} on {revs[i].date}</sub></p>
              <p>{revs[i].review}</p>
            </div>
          )
        } else {
          col2.unshift(
            <div key={i} className="review">
              <p><strong>{revs[i].title}</strong></p>
              <StarRatings 
                rating={parseInt(revs[i].rating)}
                starRatedColor="goldenrod"
                starDimension="15px"
              />
              <p><sub>By {revs[i].user} on {revs[i].date}</sub></p>
              <p>{revs[i].review}</p>
            </div>
          )
        }
      }
    } else {
      for (let i = 0; i < revs.length; i++) {
        if (i % 2 === 0) {
          col1.unshift(
            <div key={i} className="review">
              <p><strong>{revs[i].title}</strong></p>
              <StarRatings 
                rating={parseInt(revs[i].rating)}
                starRatedColor="goldenrod"
                starDimension="15px"
              />
              <p><sub>By {revs[i].user} on {revs[i].date}</sub></p>
              <p>{revs[i].review}</p>
            </div>
          )
        } else {
          col2.unshift(
            <div key={i} className="review">
              <p><strong>{revs[i].title}</strong></p>
              <StarRatings 
                rating={parseInt(revs[i].rating)}
                starRatedColor="goldenrod"
                starDimension="15px"
              />
              <p><sub>By {revs[i].user} on {revs[i].date}</sub></p>
              <p>{revs[i].review}</p>
            </div>
          )
        }
      }
    }

    setCol1(col1);
    setCol2(col2);
  }

  // Adds review and closes modal popup
  const addReview = (rev, close) => {
    setReviews([...reviews, rev]);
    close();
  }

  // Gets the total of the ratings and sorts the reviews by ratings
  let total = 0;
  let fives = [];
  let fours = [];
  let threes = [];
  let twos = [];
  let ones = [];
  
  reviews.forEach(rev => {
    const rating = rev.rating;
    total += parseInt(rating);

    if (rating === '5') {
      fives.push(rev);
    } else if (rating === '4') {
      fours.push(rev);
    } else if (rating === '3') {
      threes.push(rev);
    } else if (rating === '2') {
      twos.push(rev);
    } else {
      ones.push(rev);
    }
  });

  // Calculates the score to 1 decimal place
  const score = Math.round(total / reviews.length * 10) / 10;

  // Gets the percentages of all the ratings to pass down to Reviews component
  const fiveStar = (fives.length / reviews.length * 100).toString() + '%';
  const fourStar = (fours.length / reviews.length * 100).toString() + '%';
  const threeStar = (threes.length / reviews.length * 100).toString() + '%';
  const twoStar = (twos.length / reviews.length * 100).toString() + '%';
  const oneStar = (ones.length / reviews.length * 100).toString() + '%';

  return (
    <div className="App">
      <header></header>
      <Product add={addReview} />
      <h1>CUSTOMER REVIEWS</h1>
      <div className="flexbox">
        <Reviews score={score} length={reviews.length} display={sortReviews} percentages={[fiveStar, fourStar, threeStar, twoStar, oneStar]} revs={[fives, fours, threes, twos, ones, reviews]} />
        <div className="col-1">
          {column1}
        </div>
        <div className="col-1">
          {column2}
        </div>
      </div>
    </div>
  );
}

export default App;
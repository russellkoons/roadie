import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Product from './Product.js'
import Reviews from './Reviews.js';

function App() {
  const isInitial = useRef(true);
  const [reviews, setReviews] = useState([]);
  const [hasErrors, setErrors] = useState(false);
  let revs = reviews

  useEffect(() => {
    if (isInitial.current) {
      isInitial.current = false;
      fetchReviews();
    } else {
      displayReviews(reviews);
    }
  }, [reviews]);

  async function fetchReviews() {
    await fetch('https://pawlist-api.herokuapp.com/roadie', {
      method: 'get'
    })
    .then(res => res.json())
    .then(res => {
      setReviews(res);
      setErrors(false);
    })
    .catch(() => setErrors(true));
  }

  const displayReviews = list => {
    revs = list;
  }

  let total = 0;
  let fives = [];
  let fours = [];
  let threes = [];
  let twos = [];
  let ones = [];
  
  reviews.forEach(rev => {
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

  const score = total / reviews.length;

  const fiveStar = (fives.length / reviews.length * 100).toString() + '%';
  const fourStar = (fours.length / reviews.length * 100).toString() + '%';
  const threeStar = (threes.length / reviews.length * 100).toString() + '%';
  const twoStar = (twos.length / reviews.length * 100).toString() + '%';
  const oneStar = (ones.length / reviews.length * 100).toString() + '%';

  return (
    <div className="App">
      <header></header>
      <Product />
      <h1>CUSTOMER REVIEWS</h1>
      <Reviews score={score} reviews={revs} display={displayReviews} percentages={[fiveStar, fourStar, threeStar, twoStar, oneStar]} ratings={[fives, fours, threes, twos, ones]} />
    </div>
  );
}

export default App;

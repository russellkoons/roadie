import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Product from './Product.js'
import Reviews from './Reviews.js';

function App() {
  const isInitial = useRef(true);
  const [reviews, setReviews] = useState([]);
  const [hasErrors, setErrors] = useState(false);

  useEffect(() => {
    if (isInitial.current) {
      isInitial.current = false;
      fetchReviews();
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

  return (
    <div className="App">
      <header></header>
      <Product />
      <Reviews reviews={reviews}/>
    </div>
  );
}

export default App;

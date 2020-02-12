import React from 'react';
import Mockup from './assets/Software-Box-Mock-Up.jpg'

const Product = () => {
  return (
    <div className="flexbox">
      <div className="image">
        <img src={Mockup} alt="Roadie"/>
      </div>
      <div className="desc">
        <h1>ROADIE COMMUNICATOR - INCLUDES INSTALLATION SOFTWARE</h1>
        <p>by <strong>Roadie</strong></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <ul>
          <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
        </ul>
        <div id="buttons">
          <button id="review-button" className="upperbutton">LEAVE REVIEW</button>
          <button id="cart-button" className="upperbutton">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
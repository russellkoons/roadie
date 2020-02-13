import React from 'react';
import Mockup from './assets/Software-Box-Mock-Up.jpg'
import Popup from 'reactjs-popup';
import moment from 'moment';

const Product = props => {
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
          <Popup 
            trigger={
              <button className="upperbutton leftbutton">LEAVE REVIEW</button>
            } 
            modal
            closeOnDocumentClick
          >
            {close => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <h2 style={{textAlign: 'center'}}>ADD REVIEW</h2>
                <form>
                  <label for="rating">Rating</label><br />
                  <select id="rating">
                    <option value="1">One star</option>
                    <option value="2">Two stars</option>
                    <option value="3">Three stars</option>
                    <option value="4">Four stars</option>
                    <option value="5">Five stars</option>
                  </select><br /><br />
                  <label for="user">Your name</label><br />
                  <input id="user" type="text" /><br /><br />
                  <label for="title">Review title</label><br />
                  <input id="title" type="text" /><br /><br />
                  <label for="review">Write your review below</label><br />
                  <input type="textarea" id="review" />
                </form>
                <button class="rightbutton" onClick={() => props.add({
                  user: 'Test',
                  title: 'Test',
                  rating: '5',
                  review: 'Blah blah blah blah blah',
                  date: moment().format('LL')
                }, close)}>Click me</button>
              </div>
            )}
            </Popup>
          <button className="upperbutton rightbutton">ADD TO CART</button>
        </div>
        
      </div>
    </div>
  );
}

export default Product;
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
                <form style={{textAlign: 'left'}}>
                  <div className="forminput">
                    <label for="rating">Rating</label>
                    <select id="rating" className="greyborder">
                      <option value="1">One star</option>
                      <option value="2">Two stars</option>
                      <option value="3">Three stars</option>
                      <option value="4">Four stars</option>
                      <option value="5">Five stars</option>
                    </select>
                  </div>
                  <div className="forminput">
                    <label for="user">Your name</label>
                    <input id="user" type="text" className="full greyborder" placeholder="Enter text here..." required />
                  </div>
                  <div className="forminput">
                    <label for="title">Review title</label>
                    <input id="title" type="text" className="full greyborder" placeholder="Enter text here..." required />
                  </div>
                  <div className="forminput">
                    <label for="review">Write your review below</label>
                    <textarea id="review" className="full greyborder" placeholder="Enter text here..." required />
                  </div>
                  <div style={{textAlign: "right"}}>
                    <button className="leftbutton upperbutton" onClick={close}>CANCEL</button>
                    <input type="submit" className="rightbutton upperbutton" onClick={() => props.add({
                      user: 'Test',
                      title: 'Test',
                      rating: '5',
                      review: 'Blah blah blah blah blah',
                      date: moment().format('LL')
                    }, close)} value="SUBMIT" />
                  </div>
                </form>
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
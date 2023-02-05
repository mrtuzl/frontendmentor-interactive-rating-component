import React from 'react'
import './rated.css';
import thankyou from './illustration-thank-you.svg';

function Rated({rating}) {
    console.log(rating);
  return (

    <div className="container">
        <div className="box"> 
            <img src={thankyou} alt="thank-you"/>
            <div className={rating ? "info-box" : "false-box"}> <p>You selected {rating} out of 5 </p></div>
            {
                rating ?  <h1>  Thank you!</h1> : <h1>  Opps! </h1>
            }
            {
                 rating ?  <p> 
                 We appreciate you taking the time to give a rating. If you ever need more support, 
                 don’t hesitate to get in touch!</p> 
                 : <p>Something went wrong, please make a choice. </p>
            }
         
           
        </div>
    </div>
  );
}

export default Rated;

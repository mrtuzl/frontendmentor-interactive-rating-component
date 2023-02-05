import React from 'react'
import icon_star from './icon-star.svg';
import {useState } from 'react';
import './rating.css';

function Rating({rating, setRating, setShowRated}) {

  const [activeRatings, setActiveRatings] = useState({
    oneS: false,
    twoS: false,
    threeS: false,
    fourS: false,
    fiveS: false,
  });

  const onClickSubmit = () => {
        if(!rating) return;

        setShowRated(true);       
  };

  return (

    <div className="container">
        <div className="rating-box"> 
            <div className="star"> 
               <img src={icon_star} alt="Logo" />
            </div>
              <h1>How did we do? </h1>
              <p> Please let us know how we did with your support request. All feedback is appreciated 
               to help us improve our offering!</p>

               <div className="circles"> 
                  <div 
                   className={activeRatings.oneS ? "c_active" : "rating-circle"}
                   onClick={() => {
                    setActiveRatings({
                      oneS: true,
                      twoS: false,
                      threeS: false,
                      fourS: false,
                      fiveS: false,
                    });
                    setRating(1);
                   }}> 1 </div>
                  <div 
                  className={activeRatings.twoS ? "c_active" : "rating-circle"}
                     onClick={() => {
                    setActiveRatings({
                      oneS: false,
                      twoS: true,
                      threeS: false,
                      fourS: false,
                      fiveS: false,
                    });
                    setRating(2);
                   }} >2 </div>
                  <div 
                  className={activeRatings.threeS ? "c_active" : "rating-circle"}
                  onClick={() => {
                    setActiveRatings({
                      oneS: false,
                      twoS: false,
                      threeS: true,
                      fourS: false,
                      fiveS: false,
                    });
                    setRating(3);
                   }}> 3 </div>
                  <div 
                  className={activeRatings.fourS ? "c_active" : "rating-circle"}
                  onClick={() => {
                    setActiveRatings({
                      oneS: false,
                      twoS: false,
                      threeS: false,
                      fourS: true,
                      fiveS: false,
                    });
                    setRating(4);
                   }}> 4 </div>
                  <div 
                  className={activeRatings.fiveS ? "c_active" : "rating-circle"}
                  onClick={() => {
                    setActiveRatings({
                      oneS: false,
                      twoS: false,
                      threeS: false,
                      fourS: false,
                      fiveS: true,
                    });
                    setRating(5);
                   }}> 5 </div>
               </div>
               <button className="btn" onClick={onClickSubmit}> Submit </button>



        </div>
    </div>
  );
}

export default Rating;

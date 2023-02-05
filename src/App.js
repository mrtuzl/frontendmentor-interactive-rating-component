import Rating from "./Rating";
import Rated from "./Rated";
import { useState } from "react";

function App() {
  
  const [showRated, setShowRated] = useState(false);
  const [rating, setRating] = useState(false);

  return (
    <> 
        {
          showRated ? <Rated rating={rating}/> 
                    : 
                      <Rating rating={Rating} 
                              setRating={setRating}
                              setShowRated={setShowRated}/>
        }
    </>
   
  );
}

export default App;

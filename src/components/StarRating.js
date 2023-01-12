import React from "react";
// import { FaStar } from "react-icons/fa";
import { useState } from "react";
import "../assets/css/testimonials.css"

function StarRating() {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    // const handleChange = (e) => {
    //   let { name, value } = e.target;

    //   setInputs({
    //     ...inputs,
    //     [name]: value,
    //   });
    // };


  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
            value={rating}
            // onChange={handleChange}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
}

export default StarRating;

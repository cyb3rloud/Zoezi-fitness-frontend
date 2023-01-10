import React from "react";
import StarRating from "./Star-rating";

function Testimonials() {
  return (
    <div>
      <h1>Testimonials</h1>
      <div>
        <div>
          <img src="src/images/push-up.jpg" alt="avatar" />
          <img src="src/images/star.svg" alt="rating" />
          <p>
            “Excellent training exercises and trainers who are dedicated to
            ensuring that your dreams are achieved ”
          </p>
          <h3> ~ Stewart Wanyoike ~ </h3>
        </div>
      </div>
      <div>
        <h1>Tell us your story</h1>
        <form>
          <div>
            <div>
              <label> Your Name </label>
              <input type="text" name="name" placeholder="Name" />
              <label> Your Story </label>
              <input type="text" name="story" placeholder="Story" />
            </div>
            <div>
              <label> Your Email </label>
              <input type="text" name="email" placeholder="Email" />
              <label> Rating </label>
              {/* <StarRating /> */}
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Testimonials;

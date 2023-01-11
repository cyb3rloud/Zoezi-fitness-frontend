import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar"
import StarRating from "../components/StarRating";
import "../assets/css/testimonials.css"

function Testimonials() {
  return (
    <div className="testimonials-page">
      <Navbar />
      <h1>Testimonials</h1>
      <div className="testimonials">
        <div className="testimony">
          <img src="" alt="" />
          <StarRating />
          <p>
            “Excellent training exercises and trainers who are dedicated to
            ensuring that your dreams are achieved ”
          </p>
          <h5> ~ Stewart Wanyoike ~ </h5>
        </div>
        <div className="testimony">
          <img src="" alt="" />
          <StarRating />
          <p>
            “Excellent training exercises and trainers who are dedicated to
            ensuring that your dreams are achieved ”
          </p>
          <h5> ~ Stewart Wanyoike ~ </h5>
        </div>
        <div className="testimony">
          <img src="" alt="" />
          <StarRating />
          <p>
            “Excellent training exercises and trainers who are dedicated to
            ensuring that your dreams are achieved ”
          </p>
          <h5> ~ Stewart Wanyoike ~ </h5>
        </div>
        <div className="testimony">
          <img src="" alt="" />
          <StarRating />
          <p>
            “Excellent training exercises and trainers who are dedicated to
            ensuring that your dreams are achieved ”
          </p>
          <h5> ~ Stewart Wanyoike ~ </h5>
        </div>
      </div>
      <div className="testimony-form">
        <h1>Tell us your story</h1>
        <form>
          <div className="form-table">
            <div>
              <label for="name"> Your Name </label> <br />
              <input type="text" name="name" />
              <label for="story"> Your Story </label> <br />
              <input type="text" name="story" />
            </div>
            <div>
              <label for="e,mail"> Your Email </label> <br />
              <input type="text" name="email" /> <br />
              <label for="rating"> Rating </label> <br />
              <StarRating />
            </div>
          </div>
          <button className="form-button" type="submit">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Testimonials;

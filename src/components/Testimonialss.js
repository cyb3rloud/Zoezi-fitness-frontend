import Footer from "./Footer";
import Navbar from "./Navbar";
import StarRating from "../components/StarRating";
import "../assets/css/testimonials.css";
import avatar from "../images/6.jpg";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";



function Testimonialss() {

  const [testimonies, setTestimonies] = useState([]);

  useEffect (() => {
    fetch("http://localhost:4000/comments")
      .then((res) => res.json())
      .then((data) => setTestimonies(data));
  }, [])

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    story: "",
    rating: "off",
  });

  const { name, email, story, rating } = formData;

  const handleChange = (e) => {
    let { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !story || !rating) {
      toast.error("please fill all input fields");
    } else {

      // post comment to our api endpoint
      axios.post("http://localhost:4000/comments", formData);

      // // show success message after post to the db
      // toast.success("Added successfully");

      // restore input fields to default
      setFormData({
        name: "",
        email: "",
        story: "",
        rating: "off",
      });

      // navigate back to testimonials page
      navigate("/Testimonialss");

      // call testimonial render function
      // setTimeout(() => loadRecipes(), 500);
    }
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="testimonials-page">
        <h1>Testimonials</h1>
        <div className="testimonials">
          <div className="testimony">
            <img src={avatar} alt="avatar" />
            <StarRating />
            <p>
              “Excellent training exercises and trainers who are dedicated to
              ensuring that your dreams are achieved ”
            </p>
            <h5> ~ Stewart Wanyoike ~ </h5>
          </div>
          <div className="testimony">
            <img src={avatar} alt="avatar" />
            <StarRating />
            <p>
              “Excellent training exercises and trainers who are dedicated to
              ensuring that your dreams are achieved ”
            </p>
            <h5> ~ Stewart Wanyoike ~ </h5>
          </div>
          <div className="testimony">
            <img src={avatar} alt="avatar" />
            <StarRating />
            <p>
              “Excellent training exercises and trainers who are dedicated to
              ensuring that your dreams are achieved ”
            </p>
            <h5> ~ Stewart Wanyoike ~ </h5>
          </div>
          <div className="testimony">
            <img src={avatar} alt="avatar" />
            <StarRating />
            <p>
              “Excellent training exercises and trainers who are dedicated to
              ensuring that your dreams are achieved ”
            </p>
            <h5> ~ Stewart Wanyoike ~ </h5>
          </div>
          <div className="testimony">
            <img src={testimonies.avatar} alt="avatar" />
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
          <form onSubmit={handleSubmit}>
            <div className="form-table">
              <div>
                <label for="name"> Your Name </label> <br />
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                />
                <label for="story"> Your Story </label> <br />
                <input
                  type="text"
                  name="story"
                  value={story}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label for="e,mail"> Your Email </label> <br />
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />{" "}
                <br />
                <label for="rating"> Rating </label> <br />
                <StarRating />
              </div>
            </div>
            <button
              className="form-button"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Testimonialss;

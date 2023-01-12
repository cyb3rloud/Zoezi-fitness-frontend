import Footer from "./Footer";
import Navbar from "./Navbar";
import StarRating from "../components/StarRating";
import "../assets/css/testimonials.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";

function Testimonialss() {
  const [testimonies, setTestimonies] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4001/comments")
      .then((res) => res.json())
      .then((data) => {
        setTestimonies(data);
        setIsLoaded(true);
      });
  }, []);

  function addTestimony(newTestimony) {
    const updatedTestimonies = [...testimonies, newTestimony];
    setTestimonies(updatedTestimonies);
  }

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
      console.log("please fill all input fields");
      // toast.error("please fill all input fields");
    } else {
      // post comment to our api endpoint
      // axios.post("http://localhost:4000/comments", formData);
      fetch("http://localhost:4001/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => addTestimony(data));

      // // show success message after post to the db
      // toast.success("Added successfully");

      // restore input fields to default
      setFormData({
        name: "",
        email: "",
        story: "",
        rating: "off",
      });
      console.log("hello");
      // navigate back to testimonials page
      navigate("/Testimonialss");

      // call testimonial render function
      // setTimeout(() => loadRecipes(), 500);
    }
  };

  if (!isLoaded) return <h3>Loading...</h3>;

  return (
    <>
      <Navbar></Navbar>
      <div className="testimonials-page">
        <h1>Testimonials</h1>
        <div>
          <div className="testimonials">
            {testimonies.length ? (
              testimonies.map((testimony) => (
                <div className="testimony" key={testimony.id}>
                  <img src={testimony.avatar} alt="avatar" />
                  <StarRating />
                  <p>{testimony.story}</p>
                  <h5> ~ {testimony.name} ~ </h5>
                </div>
              ))
            ) : (
              <h2>There are no testimonies at the moment</h2>
            )}
          </div>
        </div>
        <div className="testimony-form">
          <h1>Tell us your story</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-table">
              <div>
                <label> Your Name </label> <br />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />{" "}
                <br />
                <label> Your Story </label> <br />
                <input
                  type="text"
                  name="story"
                  value={formData.story}
                  onChange={handleChange}
                />{" "}
                <br />
              </div>
              <div>
                <label> Your Email </label> <br />
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />{" "}
                <br />
                <label> Rating </label> <br />
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

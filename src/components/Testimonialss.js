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
    fetch("/testimonials")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

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
    username: "",
    email: "",
    testimony: "",
    rating: "off",
    image_url: "",
  });

  const { username, email, testimony, rating, image_url } = formData;

  const handleChange = (e) => {
    let { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // console.log(formData)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !testimony || !rating || !image_url ) {
      console.log("please fill all input fields");
    } else {
      // axios.post("http://localhost:4000/comments", formData);
      fetch("/testimonials", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => {
        // console.log(data)
        addTestimony(data)
    }
        );

      setFormData({
        client_name: "",
        email: "",
        testimony: "",
        rating: "off",
        avatar: "",
      });
      // navigate back to testimonials page
      navigate("/Testimonialss");
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
                  <img src={testimony.client.image_url} alt="avatar" />
                  <StarRating />
                  <p>{testimony.testimony}</p>
                  <h5> ~ {testimony.client.username} ~ </h5>
                  <h6></h6>
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
                <label> Your Username </label> <br />
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
                <br />
                <label> Your Story </label> <br />
                <input
                  type="text"
                  name="testimony"
                  value={formData.testimony}
                  onChange={handleChange}
                />{" "}
                <br />
                <label> Rating </label> <br />
                <StarRating />
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
                <div>
                  <label>Your Avatar:</label> <br />
                  <input
                    type="text"
                    name="avatar"
                    value={formData.avatar}
                    placeholder="Paste image url/link"
                    onChange={handleChange}
                  />
                </div>
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

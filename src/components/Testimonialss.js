import Footer from './Footer';
import Navbar from './Navbar';
import StarRating from '../components/StarRating';
import '../assets/css/testimonials.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useUser } from '../Dashboards/auth';

function Testimonialss() {
  const [testimonies, setTestimonies] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    fetch('/testimonials')
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
    testimony: '',
    rating: 'off',
  });

  const { testimony, rating } = formData;

  const handleRating = (index) => {
    setFormData((state) => ({ ...state, rating: index }));
  };

  const handleChange = (e) => {
    let { name, value } = e.target;

    setFormData((state) => ({ ...state, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      toast.error('You must be logged in to add a testimony');
      return;
    }
    if (!testimony || !rating) {
      toast.error('please fill all input fields');
    } else {
      fetch('/testimonials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success('Testimony added successfully');
          addTestimony(data);
        });

      setFormData({
        testimony: '',
        rating: 'off',
      });
      // navigate back to testimonials page
      navigate('/Testimonialss');
    }
  };

  if (!isLoaded) return <h3>Loading...</h3>;

  return (
    <>
      <Navbar />
      <div className="testimonials-page">
        <h1>Testimonials</h1>
        <div>
          <div className="testimonials">
            {testimonies.length ? (
              testimonies.map((testimony) => (
                <div className="testimony" key={testimony.id}>
                  <StarRating ratings={testimony.rating} />
                  <p>{testimony.testimony}</p>
                  <h5> ~ {testimony.user.firstname} ~ </h5>
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
                <label> Your Story </label> <br />
                <input type="text" name="testimony" value={formData.testimony} onChange={handleChange} /> <br />
              </div>
              <div>
                <label> Rating </label> <br />
                <StarRating callback={handleRating} />
              </div>
            </div>
            <button className="form-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Testimonialss;

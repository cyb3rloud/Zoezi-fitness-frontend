import Footer from './Footer';
import Navbar from './Navbar';
import StarRating from '../components/StarRating';
import '../assets/css/testimonials.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Testimonialss() {
  const [testimonies, setTestimonies] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

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
    client_username: '',
    testimony: '',
    rating: 'off',
    client_image_url: '',
  });

  const { client_username, testimony, rating, client_image_url } = formData;

  const handleChange = (e) => {
    let { name, value } = e.target;

    setFormData((state) => ({ ...state, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!client_username || !testimony || !client_image_url || !rating) {
      toast.error('please fill all input fields');
    } else {
      // axios.post("http://localhost:4000/comments", formData);
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
        client_username: '',
        testimony: '',
        rating: 'off',
        client_image_url: '',
      });
      // navigate back to testimonials page
      navigate('/Testimonialss');
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
                  <img src={testimony.client_image_url} alt="avatar" />
                  <StarRating />
                  <p>{testimony.testimony}</p>
                  <h5> ~ {testimony.client_username} ~ </h5>
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
                <input type="text" name="client_username" value={formData.client_username} onChange={handleChange} />
                <br />
                <label> Your Story </label> <br />
                <input type="text" name="testimony" value={formData.testimony} onChange={handleChange} /> <br />
              </div>
              <div>
                <div>
                  <label>Your image_url:</label> <br />
                  <input
                    type="text"
                    name="client_image_url"
                    value={formData.client_image_url}
                    placeholder="Paste image url/link"
                    onChange={handleChange}
                  />
                </div>
                <label> Rating </label> <br />
                <StarRating />
              </div>
            </div>
            <button
              className="form-button"
              type="submit"
              // onClick={handleSubmit}
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

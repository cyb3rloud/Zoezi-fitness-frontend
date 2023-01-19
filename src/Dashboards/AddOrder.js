import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Input } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from './Sidebar';

// initial data state
const initialState = {
  product: '',
  tracking_id: '',
  date: '',
  status: '',
};

const AddOrder = ({ AddOrder }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);

  const { product, tracking_id, date, status } = formData;

  const handleChange = (e) => {
    let { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!product || !tracking_id || !date || !status) {
      console.log('please fill all input fields');
      // toast.error("please fill all input fields");
    } else {
      // post comment to our api endpoint
      // axios.post("http://localhost:4000/comments", formData);
      fetch('url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => AddOrder(data));

      // // show success message after post to the db
      // toast.success("Added successfully");

      // restore input fields to default
      setFormData({
        product: '',
        tracking_id: '',
        date: '',
        status: '',
      });
      console.log('hello');
      // navigate back to testimonials page
      navigate('/AdminDashboard');

      // call product render function
      //   setTimeout(() => loadProduct(), 500);
    }
  };

  return (
    <>
      <Navbar />
      <div className="forms">
        <Sidebar />
        <div className="AddItem">
          <Container>
            <div className="AddContainer">
              <h1>Add Order</h1>
              <form onSubmit={handleSubmit}>
                <div>
                  <label> Product </label> <br />
                  <input type="text" name="product" value={formData.product} onChange={handleChange} />
                  <br />
                  <label>Tracking ID:</label>
                  <textarea type="number" name="tracking_id" value={formData.tracking_id} onChange={handleChange} />
                  <br />
                  <label>Date:</label>
                  <br />
                  <input type="date" name="date" value={formData.date} onChange={handleChange} />
                  <br />
                  <label>Status:</label>
                  <select className="drop-down" name="status">
                    <option value="approved"></option>
                    <option value="approved">Approved</option>
                    <option value="pending">Pending</option>
                  </select>
                  <br />
                </div>
                <div className="add-button">
                  <button className="p-button" type="submit">
                    Add
                  </button>
                </div>
              </form>
            </div>
          </Container>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddOrder;

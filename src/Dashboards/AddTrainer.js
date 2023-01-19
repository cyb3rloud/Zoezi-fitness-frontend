import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { toast } from 'react-toastify';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from './Sidebar';

// initial data state
const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  expertise: '',
  clients: '',
  sessions: '',
  contact: '',
};

const AddTrainer = ({ AddTrainer }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);

  const { firstname, email, lastname, expertise, clients, sessions, contact } = formData;

  const handleChange = (e) => {
    let { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstname || !email || !lastname || !expertise || !clients || !sessions || !contact) {
      toast.error('please fill all input fields');
    } else {
      fetch('/trainers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => AddTrainer(data));
      // // show success message after post to the db
      toast.success('Added successfully');

      // restore input fields to default
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        expertise: '',
        clients: '',
        sessions: '',
        contact: '',
      });

      navigate('/AdminDashboard');
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
              <h1>Add Trainer</h1>
              <form onSubmit={handleSubmit}>
                <div>
                  <label> First Name </label> <br />
                  <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} />
                  <br />
                  <label> Last Name </label> <br />
                  <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} />
                  <br />
                  <label> Email </label> <br />
                  <input type="email" name="email" value={formData.email} onChange={handleChange} />
                  <br />
                  <label>Expertise:</label> <br />
                  <input type="text" name="expertise" value={formData.expertise} onChange={handleChange} />
                  <br />
                  <label>Number of clients:</label>
                  <br />
                  <input type="number" name="clients" value={formData.clients} onChange={handleChange} />
                  <br />
                  <label>Sessions:</label>
                  <br />
                  <input type="number" name="sessions" value={formData.sessions} onChange={handleChange} />
                  <br />
                  <label>Contact:</label>
                  <br />
                  <input type="text" name="contact" value={formData.client_goal} onChange={handleChange} />
                  <br />
                </div>
                <div className="product-button">
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

export default AddTrainer;

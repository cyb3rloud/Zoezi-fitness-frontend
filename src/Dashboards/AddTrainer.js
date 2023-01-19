import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { toast } from 'react-toastify';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from './Sidebar';
import './add.css';

// initial data state
const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  expertise: '',
  clients: '',
  sessions: '',
  phone: '',
};

const AddTrainer = ({ AddTrainer }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);

  const { firstname, email, lastname, expertise, clients, sessions, phone } = formData;

  const handleChange = (e) => {
    let { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstname || !email || !lastname || !expertise || !clients || !sessions || !phone) {
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
        phone: '',
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
                  <div className="form-group">
                    <label htmlFor="fname" className="form-label">
                      {' '}
                      First Name{' '}
                    </label>{' '}
                    <input
                      id="fname"
                      type="text"
                      className="form-control"
                      name="firstname"
                      value={formData.firstname}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="lname">
                      {' '}
                      Last Name{' '}
                    </label>
                    <input
                      className="form-control"
                      id="lname"
                      type="text"
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">
                      {' '}
                      Email{' '}
                    </label>
                    <input
                      className="form-control"
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="expertise">
                      Expertise:
                    </label>
                    <input
                      className="form-control"
                      id="expertise"
                      type="text"
                      name="expertise"
                      value={formData.expertise}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="clients">
                      Number of clients:
                    </label>

                    <input
                      className="form-control"
                      id="clients"
                      type="number"
                      name="clients"
                      value={formData.clients}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="sessions">
                      Sessions:
                    </label>

                    <input
                      className="form-control"
                      id="sessions"
                      type="number"
                      name="sessions"
                      value={formData.sessions}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">
                      Contact:
                    </label>

                    <input
                      className="form-control"
                      id="phone"
                      type="text"
                      name="phone"
                      value={formData.client_goal}
                      onChange={handleChange}
                    />
                  </div>
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

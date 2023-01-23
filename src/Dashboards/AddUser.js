import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { toast } from 'react-toastify';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from './Sidebar';
import '../App.css';

// initial data state
const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  contact: '',
  age: 0,
  height: 0,
  current_weight: 0,
  goal: '',
};

const AddUser = ({ addUser }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);

  const { firstname, lastname, email, password, contact, age, height, current_weight, goal } = formData;

  const handleChange = (e) => {
    let { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstname || !lastname || !email || !password || !contact || !age || !height || !current_weight || !goal) {
      toast.error('please fill all input fields');
    } else {
      fetch('http://206.189.63.140:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => addUser(data))
        .then(() => toast.success('User added successfully'))
        .catch(() => toast.error('Operation failed. Please try again later'));

      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        contact: '',
        age: '',
        height: '',
        current_weight: '',
        goal: '',
      });
      // navigate back to testimonials page
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
              <h1>Add User</h1>
              <form onSubmit={handleSubmit}>
                <div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="fname">
                      {' '}
                      First Name{' '}
                    </label>
                    <input
                      className="form-control"
                      id="fname"
                      type="text"
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
                      Email
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
                    <label className="form-label" htmlFor="pass">
                      {' '}
                      Password
                    </label>
                    <input
                      className="form-control"
                      id="pass"
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact">
                      Phone number:
                    </label>
                    <input
                      className="form-control"
                      id="contact"
                      type="value"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="age">
                      Age:
                    </label>
                    <input
                      className="form-control"
                      id="age"
                      type="value"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="height">
                      Height:
                    </label>
                    <input
                      className="form-control"
                      id="height"
                      type="value"
                      name="height"
                      value={formData.height}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="weight">
                      Weight:
                    </label>
                    <input
                      className="form-control"
                      id="weight"
                      type="value"
                      name="current_weight"
                      value={formData.current_weight}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="goal">
                      User Goal:
                    </label>
                    <select className="form-control" id="goal" name="goal" onChange={handleChange}>
                      <option value=""></option>
                      <option value="weight loss">Weight Loss</option>
                      <option value="weight gain">Weight Gain</option>
                      <option value="muscle gain">Muscle Gain</option>
                      <option value="keep fit">Keep Fit</option>
                    </select>
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

export default AddUser;

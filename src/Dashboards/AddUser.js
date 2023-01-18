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
  client_goal: '',
};

const AddUser = ({ addUser }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);

  const { firstname, lastname, email, password, contact, age, height, current_weight, client_goal } = formData;

  const handleChange = (e) => {
    let { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !firstname ||
      !lastname ||
      !email ||
      !password ||
      !contact ||
      !age ||
      !height ||
      !current_weight ||
      !client_goal
    ) {
      toast.error('please fill all input fields');
    } else {
      fetch('/clients', {
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
        client_goal: '',
      });

      navigate('/Dashboard');
    }
  };

  return (
    <>
      <Navbar />
      <div className="forms">
        <Sidebar />
        <div className="AddItem">
          <div className="AddItem">
            <Container>
              <div className="AddContainer">
                <h1>Add User</h1>
                <form onSubmit={handleSubmit}>
                  <div>
                    <label> First Name </label> <br />
                    <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} />
                    <br />
                    <label> Last Name </label> <br />
                    <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} />
                    <br />
                    <label> Email</label> <br />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    <br />
                    <label> Password</label> <br />
                    <input type="password" name="password" value={formData.password} onChange={handleChange} />
                    <br />
                    <label>Phone number:</label>
                    <input type="value" name="contact" value={formData.contact} onChange={handleChange} />
                    <br />
                    <label>Age:</label> <br />
                    <input type="value" name="age" value={formData.age} onChange={handleChange} />
                    <br />
                    <label>Height:</label> <br />
                    <input type="value" name="height" value={formData.height} onChange={handleChange} />
                    <br />
                    <label>Weight:</label>
                    <br />
                    <input type="value" name="current_weight" value={formData.current_weight} onChange={handleChange} />
                    <br />
                    <label>User Goal:</label>
                    <select name="client_goal" className="drop-down" onChange={handleChange}>
                      <option value=""></option>
                      <option value="weight loss">Weight Loss</option>
                      <option value="weight gain">Weight Gain</option>
                      <option value="muscle gain">Muscle Gain</option>
                      <option value="keep fit">Keep Fit</option>
                    </select>
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
      </div>
      <Footer />
    </>
  );
};

export default AddUser;

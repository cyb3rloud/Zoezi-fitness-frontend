import React from 'react';
// import { Form, Button } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useFormik } from 'formik';
import { signupSchema } from '../schemas/register';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const initialValues = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  contact: '',
  age: '',
  height: '',
  current_weight: '',
  client_goal: '',
};

function Register({ handleClose, show, handleLoginShow }) {
  // const [formData, setFormData] = useState(initialValues);

  const navigate = useNavigate();

  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: signupSchema,
    onSubmit: (values, actions) => {
      actions.resetForm();

      fetch('/clients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          firstname: values.firstname,
          lastname: values.lastname,
          email: values.email,
          password: values.password,
          contact: values.contact,
          age: values.age,
          height: values.height,
          current_weight: values.current_weight,
          client_goal: values.client_goal,
          // username: values.username,
          // password_confirmation: values.password_confirmation,
        }),
      });

      toast.success('Registration Successfully');
      // alert("Registration Successfully");
      handleClose();
      navigate('/UserDashboard');
    },
  });

  // const handleChange = (event) => {
  //   setFormData({
  //     ...formData,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   fetch("/clients", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(formData),
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("An error occurred while registering");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       // handle successful registration
  //     })
  //     .catch((error) => {
  //       // handle error
  //     });
  //   navigate("/Dashboard");
  // };

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} className="login">
        <Form className="m-3">
          <Modal.Header closeButton>
            <Modal.Title className="abril">
              <h1>Register</h1>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstname"
                value={values.firstname}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="First Name"
              />
              {/* <div className="error_container">
                {errors.firstname && touched.firstname && (
                  <p className="form_error">{errors.firstname}</p>
                )}
              </div> */}
            </Form.Group>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastname"
                value={values.lastname}
                onChange={handleChange}
                placeholder="Last Name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Email"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="value"
                name="contact"
                value={values.contact}
                onChange={handleChange}
                placeholder="Phone Number"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Age</Form.Label>
              <Form.Control type="value" name="age" value={values.age} onChange={handleChange} placeholder="Age" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Height</Form.Label>
              <Form.Control
                type="value"
                name="height"
                value={values.height}
                onChange={handleChange}
                placeholder="Height"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Current Weight</Form.Label>
              <Form.Control
                type="value"
                name="current_weight"
                value={values.current_weight}
                onChange={handleChange}
                placeholder="Current Weight"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Client Goal</Form.Label>
              <Form.Control as="select" onChange={handleChange}>
                <option name="weight loss" value="weight loss">
                  Weight Loss
                </option>
                <option name="weight gain" value="weight gain">
                  Weight Gain
                </option>
                <option name="muscle gain" value="muscle gain">
                  Muscle Gain
                </option>
                <option name="keep fit" value="keep fit">
                  Keep Fit
                </option>
              </Form.Control>
              {/* <Form.Control
          type="text"
          name="client_goal"
          value={formData.client_goal}
          onChange={handleChange}
        /> */}
            </Form.Group>
          </Modal.Body>
          <Modal.Footer className="submit__btn">
            <Button type="submit" onSubmit={handleSubmit}>
              Register
            </Button>
            <div className="d-flex align-items-left justify-content-left m-auto mt-3">
              <span className="me-3">Already have an account ?</span>
              <span onClick={handleClose}>
                <Link className="registerLogin" onClick={handleLoginShow}>
                  Log In
                </Link>
              </span>
            </div>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default Register;

{
  /* <Form onSubmit={handleSubmit}>
  <Form.Group>
    <Form.Label>First Name</Form.Label>
    <Form.Control
      type="text"
      name="firstname"
      value={formData.firstname}
      onChange={handleChange}
    />
  </Form.Group>
  <Form.Group>
    <Form.Label>Last Name</Form.Label>
    <Form.Control
      type="text"
      name="lastname"
      value={formData.lastname}
      onChange={handleChange}
    />
  </Form.Group>
  <Form.Group>
    <Form.Label>Email</Form.Label>
    <Form.Control
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
    />
  </Form.Group>
  <Form.Group>
    <Form.Label>Password</Form.Label>
    <Form.Control
      type="password"
      name="password"
      value={formData.password}
      onChange={handleChange}
    />
  </Form.Group>
  <Form.Group>
    <Form.Label>Phone Number</Form.Label>
    <Form.Control
      type="value"
      name="contact"
      value={formData.contact}
      onChange={handleChange}
    />
  </Form.Group>
  <Form.Group>
    <Form.Label>Age</Form.Label>
    <Form.Control
      type="value"
      name="age"
      value={formData.age}
      onChange={handleChange}
    />
  </Form.Group>
  <Form.Group>
    <Form.Label>Height</Form.Label>
    <Form.Control
      type="value"
      name="height"
      value={formData.height}
      onChange={handleChange}
    />
  </Form.Group>
  <Form.Group>
    <Form.Label>Current Weight</Form.Label>
    <Form.Control
      type="value"
      name="current_weight"
      value={formData.current_weight}
      onChange={handleChange}
    />
  </Form.Group>
  <Form.Group>
    <Form.Label>Client Goal</Form.Label>
    <Form.Control as="select" onChange={handleChange}>
      <option value="weight loss">Weight Loss</option>
      <option value="weight gain">Weight Gain</option>
      <option value="muscle gain">Muscle Gain</option>
      <option value="keep fit">Keep Fit</option>
    </Form.Control>
    {/* <Form.Control
          type="text"
          name="client_goal"
          value={formData.client_goal}
          onChange={handleChange}
        /> */
}
//   </Form.Group>

//   <Button variant="primary" type="submit">
//     Register
//   </Button>
// </Form>;

/*
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "/..index.css";

function Register(){
  const [formData,setData] = useState({});
  const[data,setUser]=useState('');
  const navigate = useNavigate()

  useEffect(()=>{

    fetch('url/users')
    .then(res=>res.json())
    .then(data=>setUser(data))
   },[])
    
    function handleChange(event) {
    const name=event.target.name;
    const value=event.target.value;
    setData({
    ...formData,
    [name]: value,
    })
    }

    function handleSubmit(event) {
        if (data.find(item=>item.email===formData.email)){
        alert('This user Alredy Exist!');
        event.preventDefault();
        } else {     
          fetch("url/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
        },
          body: JSON.stringify(formData),
        })
        
          event.target.reset()
          navigate('/UserHome')
          alert(`User Account Created succesfully`)
        }
    }


  return (
    <div className="join">
            <form action="" onSubmit={handleSubmit}>
              <div className="form-inner reg">
                <h2>Register to get started</h2> 
                <div className="form-group">
                  <label htmlFor="firstname">First Name:</label>
                  <input type="text" name="firstname" id="firstname-field" className="input-field" placeholder="First Name" onChange={handleChange} required></input>        
                </div>
                <div className="form-group">
                  <label htmlFor="lastname">Last Name:</label>
                  <input type="text" name="lastname" id="lastname-field" className="input-field" placeholder="Last Name" onChange={handleChange} required></input>        
                </div>
                <div className="form-group">
                  <label htmlFor="age">Age:</label>
                  <input type="value" name="age" id="age-field" className="input-field" placeholder="Age" onChange={handleChange} required></input>        
                </div>
                <div className="form-group">
                  <label htmlFor="contact">Contact:</label>
                  <input type="value" name="contact" id="contact-field" className="input-field" placeholder="Contact" onChange={handleChange} required></input>        
                </div>
                <div className="form-group">
                  <label htmlFor="gender">Gender:</label>
                  <input type="text" name="gender" id="gender-field" className="input-field" placeholder="Gender" onChange={handleChange} required></input>        
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" name="email" id="usermail-field"  className="input-field" placeholder="Email" onChange={handleChange} required></input> 
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password-field"  className="input-field" placeholder="Set Password" onChange={handleChange} required></input> 
                </div>
                <div className="form-group">
                    <label htmlFor="confirm-password">Confirm Password:</label>            
                    <input type="password" name="confirm-password" id="password-field2" className="input-field" placeholder="Confirm Password" onChange={handleChange} required></input> 
                </div>
                <button type='submit' className='log' id='logIn'>Sign Up</button>
              </div>

            </form>
    </div>
  );
}


export default Register;

//

*/

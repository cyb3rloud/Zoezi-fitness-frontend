import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function Register() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    contact: '',
    age: '',
    height: '',
    current_weight: '',
    client_goal: ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('backend-url/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('An error occurred while registering');
      }
      return response.json();
    })
    .then((data) => {
      // handle successful registration
    })
    .catch((error) => {
      // handle error
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" name="firstname" value={formData.firstname} onChange={handleChange} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" name="lastname" value={formData.lastname} onChange={handleChange} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Contact</Form.Label>
        <Form.Control type="value" name="contact" value={formData.contact} onChange={handleChange} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Age</Form.Label>
        <Form.Control type="value" name="age" value={formData.age} onChange={handleChange} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Height</Form.Label>
        <Form.Control type="value" name="height" value={formData.height} onChange={handleChange} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Current Weight</Form.Label>
        <Form.Control type="value" name="current_weight" value={formData.current_weight} onChange={handleChange} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Client Goal</Form.Label>
        <Form.Control type="text" name="client_goal" value={formData.client_goal} onChange={handleChange} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
}

export default Register;




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

import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'


function Login({ onLogin, error }){

const [action,setAction] = useState(true);
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [errors, setErrors] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const navigate=useNavigate();

function handleAction(){
  setAction(!action)
}


function submitHandler(e){
  e.preventDefault();
  setIsLoading(true);
  fetch("url/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((r) => {
    setIsLoading(false);
    if (r.ok) {
      r.json().then((user) =>  localStorage.setItem('user', JSON.stringify(user)))
      
      navigate('/UserHome')
      alert('Login Successfull !...')
    } else {
      r.json().then((err) => setErrors(err.errors));
    }
  });
    
}

    return(
     <div className="join">
            <form onSubmit={submitHandler}>
                <div className="form-inner">
                    <h2>Login to Enroll For Gym</h2>
                    {(error !== "") ? (<div className="error">{error}</div>) : ""}
               
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="username-field" className="input-field" placeholder="Email"  onChange={(e) => setEmail(e.target.value)} required></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password-field" className="input-field" placeholder="Password"  onChange={(e) => setPassword(e.target.value)} required></input>
                    </div>

                  <button type='submit' className='log' id='logIn'>{action?'Login' :'Delete'}</button>
       
                <h3 id="account">Don't have an account? <Link to="/register" className="register">{isLoading ? "Loading..." : "Sign Up"}</Link></h3>  
                    {errors.map((err) => (
                    <error key={err}>{err}</error>
                     ))}    
                  <h3 id="account">Do you want to {action ?'Delete':'Login'} Account? <Link to="/login" className="register" onClick={handleAction}>{action?'Delete':'Login'}</Link></h3>
              </div>
          </form>
      </div>
     );
    }
    
export default Login;

//

/*
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function Login() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [age, setAge] = useState('');
    const [contact, setContact] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegister, setIsRegister] = useState(false);
    const [error, setError] = useState(null);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      let url = '/api/login';
      let method = 'POST';
      if (isRegister) {
        url = '/api/register';
      }
      try {
        const response = await fetch(url, {
          method: method,
          body: JSON.stringify({firstname, lastname, age, contact,gender,email, password }),
          headers: { 'Content-Type': 'application/json' },
        });
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message);
        }
      } catch (err) {
        setError(err.message);
      }
    };
  
    return (
      <div className="Login">
        <h1>{isRegister ? 'Register' : 'Login'}</h1>
        {error && <p className="error">{error}</p>}
        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="firstname"
              placeholder="Enter Your First Name"
              value={firstname}
              onChange={(event) => setFirstname(event.target.value)}
            />
          </Form.Group>
  
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="lastname"
              placeholder="Enter Your Last Name"
              value={lastname}
              onChange={(event) => setLastname(event.target.value)}
            />
          </Form.Group>
  
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="age"
              placeholder="Enter Your Age"
              value={age}
              onChange={(event) => setAge(event.target.value)}
            />
          </Form.Group>
  
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Contact</Form.Label>
            <Form.Control
              type="contact"
              placeholder="Enter Your Contact"
              value={contact}
              onChange={(event) => setContact(event.target.value)}
            />
          </Form.Group>
  
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Gender</Form.Label>
            <Form.Control
              type="gender"
              placeholder="Enter Your Gender"
              value={email}
              onChange={(event) => setGender(event.target.value)}
            />
          </Form.Group>
  
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Form.Group>
  
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <p>
          {isRegister ? 'Already have an account?' : "Don't have an account?"}
          <Button
            variant="link"
            onClick={() => setIsRegister(!isRegister)}
          >
            {isRegister ? 'Login' : 'Register'}
          </Button>
        </p>
      </div>
    );
  }
  
  export default Login;
  
  */


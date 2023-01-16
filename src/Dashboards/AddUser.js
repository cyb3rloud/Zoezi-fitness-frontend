import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { toast } from "react-toastify";
import axios from "axios";
import { Input } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "./Sidebar";


// initial data state
const initialState = {
  name: "",
  age: "",
  weight: "",
  contact: "",
    client_goal: "",
};

const AddUser = ({ AddUser }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);

  const { name, age, weight, contact, client_goal } = formData;

  const handleChange = (e) => {
    let { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !age || !weight || !contact || !client_goal) {
      console.log("please fill all input fields");
      // toast.error("please fill all input fields");
    } else {
      // post comment to our api endpoint
      // axios.post("http://localhost:4000/comments", formData);
      fetch("url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => AddUser(data));

      // // show success message after post to the db
      // toast.success("Added successfully");

      // restore input fields to default
      setFormData({
        name: "",
        age: "",
        weight: "",
        contact: "",
        client_goal: "",
      });
      console.log("hello");
      // navigate back to testimonials page
      navigate("/Dashboard");

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
          <div className="AddItem">
            <Container>
              <div className="AddContainer">
                <h1>Add User</h1>
                <form onSubmit={handleSubmit}>
                  <div>
                    <label> Full Name </label> <br />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <br />
                    <label>Age:</label> <br />
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                    />
                    <br />
                    <label>Weight:</label>
                    <br />
                    <input
                      type="number"
                      name="weight"
                      value={formData.weight}
                      onChange={handleChange}
                    />
                    <br />
                    <label>Phone number:</label>
                    <input
                      type="number"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                    />
                    <br />
                    <label>User Goal:</label>
                    <input
                      type="text"
                      name="client_goal"
                      value={formData.client_goal}
                      onChange={handleChange}
                    />
                    <br />
                  </div>
                  <div className="product-button">
                    <button
                      className="p-button"
                      variant="contained"
                      type="submit"
                    >
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

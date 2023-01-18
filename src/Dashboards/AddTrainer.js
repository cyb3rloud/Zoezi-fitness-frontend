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
  expertise: "",
  // bio: "",
  clients: "",
  sessions: "",
  contact: "",
};

const AddTrainer = ({ AddTrainer }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);

  const { name, expertise, clients, sessions, contact } = formData;

  const handleChange = (e) => {
    let { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !expertise || !clients || !sessions || !contact) {
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
        .then((data) => AddTrainer(data));

      // // show success message after post to the db
      // toast.success("Added successfully");

      // restore input fields to default
      setFormData({
        name: "",
        expertise: "",
        clients: "",
        sessions: "",
        contact: "",
      });
      // navigate back to testimonials page
      navigate("/AdminDashboard");

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
              <h1>Add Trainer</h1>
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
                  <label>Expertise:</label> <br />
                  <input
                    type="text"
                    name="expertise"
                    value={formData.expertise}
                    onChange={handleChange}
                  />
                  <br />
                  <label>Number of clients:</label>
                  <br />
                  <input
                    type="number"
                    name="clients"
                    value={formData.clients}
                    onChange={handleChange}
                  />
                  <br />
                  <label>Sessions:</label>
                  <input
                    type="number"
                    name="sessions"
                    value={formData.sessions}
                    onChange={handleChange}
                  />
                  <br />
                  <label>Contact:</label>
                  <input
                    type="text"
                    name="contact"
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
      <Footer />
    </>
  );
};

export default AddTrainer;

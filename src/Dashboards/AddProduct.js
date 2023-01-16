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
  pname: "",
  description: "",
    price: "",
  imageUrl: "",
  quantity: "",
  status: "",
};

const AddProduct = ({AddProduct}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState(initialState);

    const { pname, description, price, imageUrl, quantity, status } = formData;

  const handleChange = (e) => {
    let { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

  };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!pname || !description || !price || !imageUrl || !quantity || !status) {
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
            .then((data) => AddProduct(data));

          // // show success message after post to the db
          // toast.success("Added successfully");

          // restore input fields to default
          setFormData({
            image: "",
            pname: "",
            description: "",
            imageUrl: "",
            quantity: "",
            status: "",
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
            <Container>
              <div className="AddContainer">
                <h1>Add Product</h1>
                <form onSubmit={handleSubmit}>
                  <div>
                    <label> Product Name </label> <br />
                    <input
                      type="text"
                      name="pname"
                      value={formData.pname}
                      onChange={handleChange}
                    />
                    <br />
                    <label>Description:</label>
                    <textarea
                      type="text"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                    />
                    <br />
                    <label>Price:</label>
                    <br />
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                    />
                    <br />
                    <label>Image URL:</label>
                    <input
                      type="text"
                      name="imageUrl"
                      value={formData.imageUrl}
                      onChange={handleChange}
                    />
                    <br />
                    <label>Quantity:</label>
                    <input
                      type="number"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                    />
                    <br />
                    <label>Status:</label>
                    <select className="drop-down" name="status">
                      <option value=""></option>
                      <option value="in-stock">In Stock</option>
                      <option value="out-of-stock">Out of Stock</option>
                    </select>
                    <br />
                  </div>
                  <div className="add-button">
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

export default AddProduct;

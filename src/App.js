//import logo from './logo.svg';
import "./App.css";
import Home from "./components/Home";
import ScrollButton from "./components/ScrollButton";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import Navbar from './components/Navbar';
//import { useState } from 'react';
import Products from "./components/Products";
import Trainers from "./components/Trainer";
import About from "./components/About";
import Login from "./components/Login";
import Register from "./components/Register";
import Testimonialss from "./components/Testimonialss";
import Dashboard  from "./components/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollButton></ScrollButton>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Products" element={<Products />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/Trainers" element={<Trainers />} />
          <Route exact path="/Testimonialss" element={<Testimonialss />} />  
          <Route exact path="/Dashboard" element={<Dashboard />} />

        </Routes>

        {/* <div style={{overflowY:"scroll", height:"800px"}}></div>  */}
      </BrowserRouter>
    </>
  );
}

export default App;

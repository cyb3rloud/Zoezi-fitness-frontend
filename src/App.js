import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import ScrollButton from './components/ScrollButton';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Products from './components/Products';
import AllTrainers from './components/Trainer';
import About from './components/About';
import Login from './components/Login';

function App() {
  
  return (<>
      <BrowserRouter>
      <ScrollButton></ScrollButton>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Products" element={<Products />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Trainers" element={<AllTrainers />} />




      </Routes>
    
           {/* <div style={{overflowY:"scroll", height:"800px"}}></div>  */}
           </BrowserRouter>
       </>
  );
}

export default App;

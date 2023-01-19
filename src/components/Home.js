import React, { useState } from "react";
import "../App.css";

import pic from "../images/11.jpg";
import trainer1 from "../images/1.jpg";
import Navbar from "./Navbar";
import Testimonials from "./Testimonial";
import Footer from "./Footer";
import Services from "./Services";
import Hero from "./Hero/Hero";
import About from "./About/About";

function Home() {
  return (
<>
    
         <Navbar/>
        <Hero/>
        <About/>
        <Services/>
        <Testimonials/>
      <Footer />
    </>
  );
}
export default Home;

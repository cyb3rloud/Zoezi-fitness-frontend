import React from 'react';
import '../App.css';

import Navbar from './Navbar';
import Footer from './Footer';
import Services from './Services';
import Hero from './Hero/Hero';
import About from './About/About';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Footer />
    </>
  );
}
export default Home;

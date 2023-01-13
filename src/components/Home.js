import React, { useState } from "react";
import "../App.css";
import logo from "../images/6.jpg";
import pic from "../images/11.jpg";
import trainer1 from "../images/1.jpg";
import Navbar from "./Navbar";
import Testimonials from "./Testimonial";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <div className="wrapper">
        <div className="fixed one">
          <Navbar></Navbar>
        </div>
        <div className="scroll">
          <h3>scroll</h3>
        </div>
        <div className="fixed two">
          <div className="get-started">
            <div className="get-started-child">
              <p className="p1">Simple fitness experience for everyone</p>
              <button className="get-started-button">Get Started now</button>
            </div>
            <img
              className="get-started-img"
              src={logo}
              width="700"
              height="250"
            />
          </div>

          <div className="learn-more">
            <img
              className="get-started-img"
              src={pic}
              width="700"
              height="250"
            />

            <div className="get-started-child">
              <p className="p1">Simple fitness experience for everyone</p>
              <button className="get-started-button">Learn more</button>
            </div>
          </div>
        </div>
        <div className="scroll">
          <h3>
            "So that the monotonous fall of the waves on the beach, which for
            the most part beat a measured and soothing tattoo to her thoughts
            seemed consolingly to repeat over and over again."
          </h3>
        </div>
        <div className="fixed three">
          <div className="box">
            <div className="box-div">
              Our Trainers
              <br />
              <button className="offer-button">Explore {">"}</button>
            </div>
            <div className="box-div">
              Workout Programs
              <img
                className="get-started-img"
                src={trainer1}
                width="700"
                height="200"
              />
              <br />
              <button className="offer-button">Explore {">"}</button>
            </div>
            <div className="box-div">
              Nutrition(Meal Plans) <br />
              <button className="offer-button">Explore {">"}</button>
            </div>
            <div className="box-div">
              Gym Location <br />
              <button className="offer-button">Explore {">"}</button>
            </div>
            <div className="box-div">
              Training Gear <br />
              <button className="offer-button">Explore {">"}</button>
            </div>
            <div className="box-div">
              Expert Consultation <br />
              <button className="offer-button">Explore {">"}</button>
            </div>
          </div>
        </div>
        <div className="fixed four">
          <div>
            <h1>Testimonials</h1>
            <Testimonials />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Home;

import React from 'react';
import './AboutUs.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function About() {
  function Section({ heading, body }) {
    return (
      <div className="about-us-section">
        <span>{heading}</span>
        <p>{body}</p>
      </div>
    );
  }
  function Stat({ h, b }) {
    return (
      <div className="stat">
        <span>{h}</span>
        <p>{b}</p>
      </div>
    );
  }

  function Stats() {
    return (
      <div className="about-us-stats">
        <Stat h="150K+" b="Users" />
        <Stat h="350+" b="Training Exercises" />
        <Stat h="20+" b="Trainers" />
        <Stat h="50K+" b="Fitness Gear" />
      </div>
    );
  }
  return (
    <>
      <Navbar />
      <div className="about-us">
        <h1 className='main-h'>Find out more</h1>
        <div className='cont'>
          <div className='about-info1'><h1>About Us</h1>

            <p>"We are an online  fitness and health company dedicated to helping individuals achieve  their desired body size and fitness so that they can face all the other everyday challenges confidently."
            </p>
          </div>
          <div className='about-info1'><h1>Our Mission</h1><p>          "Assist our members attain the body they dream of in the comfort of their homes aor even at their fitness centers of choice "
          </p></div>
        </div>

        <div className='about-info2'><h1>"Why Choose Us"</h1><p>          "Our training exercises and trainers are the best in the industry and so far we have had excellent results from all individuals who have decided to choose us as their partner in their fitness journey."
        </p><Stats /></div>

      </div>
      <Footer />
    </>
  );
}

export default About;

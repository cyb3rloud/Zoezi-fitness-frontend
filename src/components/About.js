import React    from "react";
import './AboutUs.css'
import Navbar from "./Navbar";
import Footer from "./Footer"


function Section({ heading, body }) {
    return (
          <div className="about-us-section">
                <span>{heading}</span>
                <p>{body}</p>
          </div>
    )
}
function Stat({ h, b }) {
    return (
          <div className="stat">
                <span>{h}</span>
                <p>{b}</p>
          </div>
    )
}

function Stats() {
    return (
          <div className="about-us-stats">
                <Stat h="150K+" b="Users" />
                <Stat h="350+" b="Training Exercises" />
                <Stat h="20+" b="Trainers" />
                <Stat h="50K+" b="Fitness Gear" />
          </div>
    )
}
function About() {
    return (
      <>
      <Navbar/>
        <div>
          <div className="about-us">
            <Section
              heading="About Us"
              body="We are an online  fitness and health company dedicated to helping individuals achieve  their desired body size and fitness so that they can face all the other everyday challenges confidently."
            />
            <Section
              heading="Our Mission"
              body="Assist our members attain the body they dream of in the comfort of their homes aor even at their fitness centers of choice "
            />
            <Section
              heading="Why Choose Us"
              body="Our training exercises and trainers are the best in the industry and so far we have had excellent results from all individuals who have decided to choose us as their partner in their fitness journey."
            />
            <Stats />
          </div>
        </div>
        <Footer/>
      </>
    );
}

export default About


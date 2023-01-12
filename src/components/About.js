import React    from "react";
import './AboutUs.css'

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

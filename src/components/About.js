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

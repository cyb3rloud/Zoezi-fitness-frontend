import React from "react";  
import './AllTrainers.css'
import { useEffect, useState } from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";

function Profile({ trainer, handleClick }) {
      const [isLoggedIn, setIsLoggedIn] = useState(true);
    
      return (
        <div className="all-trainers-profile" onClick={handleClick}>
          <div className="all-trainers-profile-img">
            <img src={trainer.image} alt="trainer" />
          </div>
          <span>{trainer.name}</span>
          <div>
            <ul className="workouts">
              {trainer.workouts.map((workout, index) => (
                <li className="workouttype" key={index}>{workout}</li>
              ))}
            </ul>
          </div>
          {isLoggedIn && <div className="dash-btn" onClick={handleClick} data-id={trainer.id}>Add to Dashboard</div>}
        </div>
      );
    }

    function Trainers() {
      const [trainers, setTrainers] = useState([]);
      const [error, setError] = useState(null);
      useEffect(() => {
        fetch("api/trainers")
          .then(res => {
            if (!res.ok) {
              throw new Error("Error occured while fetching the data!");
            }
            return res.json();
          })
          .then(data => {
            setTrainers(data);
          })
          .catch(error => {
            setError(error.message);
          });
      }, []);
    
      function handleClick(id) {
      
            console.log(id)
            
            fetch('api/add', {
               method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
            body: JSON.stringify({ id: id /*,userid: user_id */ })
              })
              .then(res => res.json())
              .then(data => {
               console.log(data)
              })
          }
        
          if (error) {
            return (
              <div>
                <p>An error occured: {error}</p>
              </div>
            );
          }
      
        if (error) {
          return (
            <div>
              <p>An error occured: {error}</p>
            </div>
          );
        }

      return (
        <>
        <Navbar/>
          <div className="all-trainers">
            <span>Trainers:</span>
            <div className="all-trainers-list">
              {trainers.map((trainer) => {
                return <Profile trainer={trainer} handleClick={handleClick} />;
              })}
            </div>
          </div>
          <Footer/>
        </>
      );
}

export default Trainers

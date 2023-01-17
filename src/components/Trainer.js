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
      const [trainers, setTrainers] = useState([])
      const trainerss = [
            {
                  image: "https://unsplash.com/photos/mEZ3PoFGs_k/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHx8fDE2NzM0NDMzNTM&force=true",
                  name: "Trainer's Name",
                  workouts: ["Bicep Curl", "Lat Pull", "Lateral Raise", "Bent-Over Rows"],
            },
            {
                  image: "https://unsplash.com/photos/mEZ3PoFGs_k/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHx8fDE2NzM0NDMzNTM&force=true",
                  name: "Trainer's Name",
                  workouts: ["Bench Press", "Squats", "Deadlift", "Shoulder Press", "Jump Rope"],
            },
            {
                  image: "https://unsplash.com/photos/mEZ3PoFGs_k/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHx8fDE2NzM0NDMzNTM&force=true",
                  name: "Trainer's Name",
                  workouts: ["Leg Raises", "Jump Rope", "Lateral Raise", "Bench Press"],
            },
            {
                  image: "https://unsplash.com/photos/mEZ3PoFGs_k/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHx8fDE2NzM0NDMzNTM&force=true",
                  name: "Trainer's Name",
                  workouts: ["Deadlift", "Lat Pull", "Bicep Curl", "Squats"],
            },
            {
                  image: "https://unsplash.com/photos/mEZ3PoFGs_k/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHx8fDE2NzM0NDMzNTM&force=true",
                  name: "Trainer's Name",
                  workouts: ["Leg Raises", "Shoulder Press", "Bent-Over Rows", "Deadlift", "Jump Rope"],
            },
            {
                  image: "https://unsplash.com/photos/mEZ3PoFGs_k/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHx8fDE2NzM0NDMzNTM&force=true",
                  name: "Trainer's Name",
                  workouts: ["Lat Pull", "Bent-Over Rows", "Bench Press", "Squats"],
            },
            {
                  image: "https://unsplash.com/photos/mEZ3PoFGs_k/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHx8fDE2NzM0NDMzNTM&force=true",
                  name: "Trainer's Name",
                  workouts: ["Lateral Raise", "Bicep Curl", "Shoulder Press", "Bench Press"],
            },

      ]
      useEffect(() => {
            // fetch("/trainers")
            //       .then((res) => res.json())
            //       .then((data) => {
            //             setTrainers(data)
            //       })
            setTrainers(trainerss)
      }, [])

      function handleClick() {
            return (
                  <div>
                  </div>

            )

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

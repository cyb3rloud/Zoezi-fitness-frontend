import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import './Trainerinfo.css'
// import Navbar from "./Navbar";
// import Footer from "./Footer"


function User({ trainer, workouts, exercises }) {
  return (
    <div className="main">
      <div className="entry-container">
      </div>
      <div className="e-container">
        <div className="top-header">
          <div>
            <img className="image" src="https://racheltrotta.com/wp-content/uploads/2019/10/extraLR6A0475-1024x683.jpg"/>
          </div>
          <div className="name">{trainer.firstname} {trainer.lastname}</div>
          <div className="sub-name">Pro Trainer</div>
          <div className="sub-name">{trainer.email}</div>
          <div className="btn-container">
            <button className="btnx">Add to Dashboard</button> 
            <div className="tags">
              {workouts.map((workout, index) => (
                <button className="btns" key={index}>{workout.workout_name}</button>
              ))}
            </div>
          </div>
          <div className="cards">
            {exercises.map((exercise, index) => (
              <div class="exercises">
                <div class="card-header">Exercise</div>
                <div class="card-text">{exercise.exercise_name}</div> 
                <div class="card-header">Activity</div>
                <div class="card-text">{exercise.activity}</div>
                <div class="card-header">Muscle Group</div>
                <div class="card-text">{exercise.muscle_group}</div> 
                <div class="card-header">Time</div>
                <div class="card-text">{exercise.time_start} to {exercise.time_end}</div> 
              </div>
            ))}
          </div>
        </div>  
      </div>
    </div>
  );
}

function Trainerinfo() {
  const { id } = useParams();
  const [trainers, setTrainers] = useState([]);
  const [workouts, setWorkouts] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch trainer data
    fetch("https://8b3e76f0-d564-4e08-a73c-2eca5d1665d2.mock.pstmn.io/trainers")
      .then(res => {
        if (!res.ok) {
          throw new Error("Error occured while fetching the trainer data!");
        }
        return res.json();
      })
      .then(data => {
        setTrainers(data[0]);
        // Fetch workout data
        return fetch(`https://fe1d58d4-b2fe-46b6-a2e7-941a9003218c.mock.pstmn.io/workouts`)
      })
      .then(res => {
        if (!res.ok) {
          throw new Error("Error occured while fetching the workout data!");
        }
        return res.json();
      })
      .then(workoutData => {
        setWorkouts(workoutData);
        // Fetch exercise data
        return fetch('https://7aa1a781-6a90-42da-b382-7e585c7da80a.mock.pstmn.io/exercises')
      })
      .then(res => {
        if (!res.ok) {
          throw new Error("Error occured while fetching the exercise data!");
        }
        return res.json();
      })
      .then(exerciseData => {
        setExercises(exerciseData);
      })
      .catch(error => {
        setError(error);
      });
    }, []);
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    
    if (!trainers) {
      return <div>Loading...</div>;
    }
    
    return (
      <div>
        {/* <Navbar /> */}
        <User trainer={trainers} workouts={workouts} exercises={exercises} />
        {/* <Footer /> */}
      </div>
    );
    }
    
    export default Trainerinfo;
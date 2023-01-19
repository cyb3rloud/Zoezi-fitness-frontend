import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import './Trainerinfo.css'
// import Navbar from "./Navbar";
// import Footer from "./Footer"


function User({ trainer, workouts, schedules }) {
  return (
    <div className="main">
      <div className="entry-container">
      </div>
      <div className="e-container">
        <div className="top-header">
          <div>
            <img className="image" src={trainer.image_url}/>
          </div>
          <div className="name">{trainer.firstname} {trainer.lastname}</div>
          <div className="sub-name">Pro Trainer</div>
          <div className="sub-name">{trainer.email}</div>
          <div className="btn-container">
            <button className="btnx">Add to Dashboard</button> 
            <div className="tags">
              {workouts?.map((workout, index) => (
                <button className="btns" key={index}>{workout.workout_name}</button>
              ))}
            </div>
          </div>
          <div className="cards">
            {schedules?.map((schedule, index) => (
              <div class="exercises">
                <div class="card-header">session</div>
                <div class="card-text">{schedule.session}</div> 
                <div class="card-header">From:</div>
                <div class="card-text">{schedule.session_start}</div>
                <div class="card-header">To:</div>
                <div class="card-text">{schedule.session_end}</div> 
                <div class="card-header">Date</div>
                <div class="card-text">{schedule.date}</div> 
                {/* <div class="card-header">Exercises</div>
                <div class="card-text">{console.log(schedule.exercises)}</div>  */}
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
    fetch(`/trainers/${id}`)
      .then(res => {
        if (!res.ok) {
          throw new Error("Error occured while fetching the trainer data!");
        }
        return res.json();
      })
      .then(data => {
        setTrainers(data);
      })
  
      // .then(data => {
      //   console.log(data);
      //   setTrainers(data);
      //   // Fetch workout data
      //   return fetch(`/workouts`)
      // })
      // .then(res => {
      //   if (!res.ok) {
      //     throw new Error("Error occured while fetching the workout data!");
      //   }
      //   return res.json();
      // })
      // .then(workoutData => {
      //   setWorkouts(workoutData);
      //   // Fetch exercise data
      //   return fetch('/exercises')
      // })
      // .then(res => {
      //   if (!res.ok) {
      //     throw new Error("Error occured while fetching the exercise data!");
      //   }
      //   return res.json();
      // })
      // .then(exerciseData => {
      //   setExercises(exerciseData);
      // })
      // .catch(error => {
      //   setError(error);
      // });
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
        <User trainer={trainers} workouts={ trainers.workouts} schedules={trainers.schedules} />
        {/* <Footer /> */}
      </div>
    );
    }
    
    export default Trainerinfo;
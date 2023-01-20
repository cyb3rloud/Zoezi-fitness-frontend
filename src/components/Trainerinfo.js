import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Trainerinfo.css';
import Navbar from './Navbar';
import Footer from './Footer';

function User({ trainer, workouts, exercises }) {
  const navigate = useNavigate();

  const addToUserDashboard = useCallback(() => {
    fetch('/dashboard_trainers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...trainer }),
    }).then(() => {
      navigate('/UserDashboard');
      console.log('added to dashboard');
    });
  }, [trainer]);

  return (
    <div className="main">
      <div className="entry-container"></div>
      <div className="e-container">
        <div className="top-header">
          <div>
            <img className="image" src={trainer.image_url} alt="trainer" />
          </div>
          <div className="name">
            {trainer.firstname} {trainer.lastname}
          </div>
          <div className="sub-name">Pro Trainer</div>
          <div className="sub-name">{trainer.email}</div>
          <div className="btn-container">
            <button className="btnx" onClick={addToUserDashboard}>
              Add to Dashboard
            </button>
            <div className="tags">
              {workouts.map((workout, index) => (
                <button className="btns" key={index}>
                  {workout.workout_name}
                </button>
              ))}
            </div>
          </div>
          <div className="cards">
            {exercises.map((exercise, index) => (
              <div className="exercises" key={index}>
                <div className="card-header">Exercise</div>
                <div className="card-text">{exercise.exercise_name}</div>
                <div className="card-header">Activity</div>
                <div className="card-text">{exercise.activity}</div>
                <div className="card-header">Muscle Group</div>
                <div className="card-text">{exercise.muscle_group}</div>
                <div className="card-header">Time</div>
                <div className="card-text">
                  {exercise.time_start} to {exercise.time_end}
                </div>
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
    fetch(`https://96bc6907-158d-4bc3-b7b5-d11c8857a5e0.mock.pstmn.io/trainer?id=${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Error occured while fetching the trainer data!');
        }
        return res.json();
      })
      .then((data) => {
        setTrainers(data[0]);
        // Fetch workout data
        return fetch(`https://8bea2a28-579d-41b1-a33d-0a000c01b030.mock.pstmn.io/workouts/${data[0].id}`);
      })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Error occured while fetching the workout data!');
        }
        return res.json();
      })
      .then((workoutData) => {
        setWorkouts(workoutData);
        // Fetch exercise data
        return fetch(`https://017f5c62-6e69-40fe-81a9-769d4203e796.mock.pstmn.io/exercise`);
      })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Error occured while fetching the exercise data!');
        }
        return res.json();
      })
      .then((exerciseData) => {
        setExercises(exerciseData);
      })
      .catch((error) => {
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
      <Navbar />
      <User trainer={trainers} workouts={workouts} exercises={exercises} />
      <Footer />
    </div>
  );
}

export default Trainerinfo;

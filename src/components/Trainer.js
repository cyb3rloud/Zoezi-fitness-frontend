import React from 'react';
import './AllTrainers.css';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { useUser } from '../Dashboards/auth';

function Profile({ trainer, handleClick }) {
  const [isLoggedIn] = useState(true);
  const { user } = useUser();

  return (
    <div className="all-trainers-profile" onClick={handleClick}>
      <div className="all-trainers-profile-img">
        <h1>
          {trainer.firstname.slice(0, 1).toUpperCase()} {trainer.lastname.slice(0, 1).toUpperCase()}
        </h1>
        <span>
          {trainer.firstname} {trainer.lastname}
        </span>
      </div>
      <div>
        {/* <ul className="workouts">
              {trainer.workouts.map((workout, index) => (
                <li className="workouttype" key={index}>{workout}</li>
              ))}
            </ul> */}
      </div>

      <div className="btn-trainer">
        <Link className="dash-btn" to={`/trainer/${trainer.id}`}>
          View Profile
        </Link>
        {isLoggedIn && (
          <div className="dash-btn" onClick={() => handleClick(user.id)} data-id={trainer.id}>
            Add to Dashboard
          </div>
        )}
      </div>
    </div>
  );
}

function Trainers({ trainers }) {
  // const [trainers, setTrainers] = useState([]);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetch('/trainers')
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error('Error occured while fetching the data!');
  //       }
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setTrainers(data);
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //     });
  // }, []);

  function handleClick(id) {
    if (!id) return;
    fetch('/trainers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: id /*,userid: user_id */ }),
    })
      .then((res) => res.json())
      .then(() => {});
  }

  return (
    <>
      <Navbar />
      <div className="all-trainers">
        <span>Trainers:</span>
        <div className="all-trainers-list">
          {/* {trainers.length ? (
                trainers.map((trainer) => <TrainerCard key={trainer.id}  trainer={trainer}/>)
              ) : (
                <h1>Currently there are no trainers available</h1>
              )} */}
          {trainers.map((trainer) => {
            return <Profile key={trainer.id} trainer={trainer} handleClick={handleClick} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Trainers;

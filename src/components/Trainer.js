import React from 'react';
import './AllTrainers.css';
import { useState } from 'react';
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
        <h1 >
          {trainer.firstname.slice(0, 1).toUpperCase()} {trainer.lastname.slice(0, 1).toUpperCase()}
        </h1>
        <span>
          {trainer.firstname} {trainer.lastname}
        </span>
      </div>

      <div className="btn-trainer">
        <Link className="dash-btn" to={`/trainer/${trainer.id}`}>
          View Profile
        </Link>
        {isLoggedIn && (
          <div className="dash-btn-add" onClick={() => handleClick(user.id)} data-id={trainer.id}>
            Add to Dashboard
          </div>
        )}
      </div>
    </div>
  );
}

function Trainers({ trainers }) {
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
      .then(() => { });
  }

  return (
    <>
      <Navbar />
      <div className="all-trainers">
        <span className='train'>Trainers</span>
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

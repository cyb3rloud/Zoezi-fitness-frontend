import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './user-dashboard.css';
import Sidebar from './Sidebar';
import { useUser } from '../Dashboards/auth';

function UserDashboard() {
  const navigate = useNavigate();
  const { user } = useUser();
  const [trainersList, setTrainersList] = useState([]);

<<<<<<< HEAD
  // const fetchTrainers = useCallback(async () => {
  //   const response = await fetch("http://localhost:5000/trainers");
  //   const responseData = await response.json();
  //   if (!response.ok) {
  //     throw new Error(responseData.message);
  //   }
  //   setTrainersList(responseData.trainers);
  // }, []);

 useEffect(() => {
    fetch("/trainers")
=======
  useEffect(() => {
    fetch('/trainers')
>>>>>>> f6abee5c69fc7c2a1161ed5801995ea0e862b505
      .then((res) => res.json())
      .then((data) => {
        setTrainersList(data);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="dashboard">
        <div className="grid-row-one">
          <Sidebar />
          <div className="grid-one">
            <div>
              <div className="sect">
                <h1>Hello {user?.username}!</h1>
              </div>
              <div className="sect">
                <h2>Today&apos;s workout</h2>
                <div>
                  <p>morning run </p>
                  <p>morning run </p>
                  <p>morning run </p>
                  <p>morning run </p>
                </div>
              </div>
            </div>
            <div className="sect">
              <h2> Trainers</h2>
              <div className="trainers">
                <div className="trainer-details">
                  <img src="" alt="" />
                  <h5>jesse maccartney</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-two">
            <div className="sect2">
              <div className="">
                {/* <NavLink className="profile__edit" to="/profile">
              Profile
            </NavLink> */}
                <h1> Profile </h1>
              </div>
              <div className="profile-details">
                {/* <img src={user.avatar} alt="profile_picture" />
                <h5>{user.name}</h5> */}
              </div>
              <div className="profile-details">
                <h3>Current</h3>
                <div className="details">
                  <div>
                    <h5>52 kg</h5>
                    <p>Weight</p>
                  </div>
                  <div>
                    <h5>183cm</h5>
                    <p>Height</p>
                  </div>
                  <div>
                    <h5>26</h5>
                    <p>Age</p>
                  </div>
                </div>
              </div>
              <div className="profile-details">
                <h3>Target/ Goal</h3>
                <div className="detail">
                  <h5> Lose weight</h5>
                  <p>Target weight : 48 kg</p>
                </div>
              </div>
              <div className="edit-button">
                <button> Edit </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-row-two">
          <div className="sect">
            <h2> Current Workout</h2>
            <div className="trainers">
              <div>
                <h5>Abs workout </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UserDashboard;

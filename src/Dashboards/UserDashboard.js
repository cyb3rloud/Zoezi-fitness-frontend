import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './user-dashboard.css';
import Sidebar from './Sidebar';
import { useUser } from '../Dashboards/auth';
import { toast } from 'react-toastify';

function UserDashboard() {
  const navigate = useNavigate();
  const { user } = useUser();
  const [setTrainersList] = useState([]);
  const [dashboardTrainers, setDashboardTrainers] = useState([]);

  useLayoutEffect(() => {
    if (user) return;
    toast.error('You must be logged in to visit dashboard');
    navigate(-1);
  }, [user, navigate]);

  useEffect(() => {
    fetch('http://206.189.63.140:3000/trainers')
      .then((res) => res.json())
      .then((data) => {
        setTrainersList(data);
      });
  }, []);

  useEffect(() => {
    fetch('http://206.189.63.140:3000/dashboard_trainers')
      .then((res) => res.json())
      .then((data) => {
        setDashboardTrainers(data);
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
                <h1>Hello {user?.firstname}!</h1>
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
              {dashboardTrainers?.map((trainer, i) => (
                <div key={i} className="trainers">
                  <div className="trainer-details" onClick={() => navigate(`/trainer/${trainer?.id}`)}>
                    <h1>
                      {trainer?.firstname.slice(0, 1)} {trainer?.lastname.slice(0, 1)}
                    </h1>
                    <h5>{`${trainer?.firstname} ${trainer?.lastname}`}</h5>
                  </div>
                </div>
              ))}
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
                <h1>
                  {user?.firstname.slice(0, 1).toUpperCase()} {user?.lastname.slice(0, 1).toUpperCase()}
                </h1>
                <h5>
                  {user.firstname} {user.lastname}
                </h5>
              </div>
              <div className="profile-details">
                <h3>Current</h3>
                <div className="details">
                  <div>
                    <h5>{user?.current_weight} kg</h5>
                    <p>Weight</p>
                  </div>
                  <div>
                    <h5>{user?.height}cm</h5>
                    <p>Height</p>
                  </div>
                  <div>
                    <h5>{user?.age}</h5>
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

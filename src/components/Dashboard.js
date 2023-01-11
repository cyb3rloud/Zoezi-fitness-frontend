import React, { useCallback, useEffect } from "react";
import "../assets/css/dashboard.css";
// import {
//   faArrowRight,
//   faBookmark,
//   faHeart,
//   faMinus,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useNavigate } from "react-router-dom";
import { useUser } from "../context/auth";

function Dashboard() {
  const navigate = useNavigate();
  const { user } = useUser();

  const avatars = [
    "https://t3.ftcdn.net/jpg/04/91/73/76/360_F_491737640_tzzQnoHBICFQmY5ZdBOicUHzQEyW0CDo.jpg",
    "https://img.favpng.com/4/6/8/corn-on-the-cob-maize-sweet-corn-cartoon-png-favpng-QaEd3CLgQhWnVzmV5LRKsn11b.jpg",
    "https://www.citypng.com/public/uploads/preview/cartoon-potato-character-holding-a-fries-cup-11646751276cbft8zfryd.png",
    "https://www.kindpng.com/picc/m/36-361215_object-redundancy-chicken-leg-clipart-png-download-animated.png",
  ];

  return (
    <div className="dashboard">
      <div className="grid-row-one">
        <div className="grid-one">
          <div>
            <div className="sect">
              <h1>Hello {user?.username}!</h1>
            </div>
            <div className="sect">
              <h2>Today's workout</h2>
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
          <div className="sect">
            <div className="">
              {/* <NavLink className="profile__edit" to="/profile">
              Profile
            </NavLink> */}
              <h1> Profile </h1>
            </div>
            <div className="profile-details">
              <img src="" alt="" />
              <h5>jesse maccartney</h5>
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
  );
}

export default Dashboard;
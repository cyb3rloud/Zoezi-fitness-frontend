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
import Navbar from "./Navbar";
import Footer from "./Footer";
// import { useUser } from "../context/auth";

function Dashboard() {
  const navigate = useNavigate();
  // const { user } = useUser();


  return (
    <>
      <Navbar />
      <div className="dashboard">
        <div className="grid-row-one">
          <div className="grid-one">
            <div>
              <div className="sect">
                {/* <h1>Hello {user?.username}!</h1> */}
                <h1>Hello Member!</h1>
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
            <div className="sect2">
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
      <Footer />
    </>
  );
}

export default Dashboard;

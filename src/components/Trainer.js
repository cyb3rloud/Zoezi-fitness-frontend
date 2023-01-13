import React from "react";  
import './AllTrainers.css'
import { useEffect, useState } from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";

function Profile({ trainer ,handleClick}) {
      return (
            <div className="all-trainers-profile" onClick={handleClick}>
                  <div className="all-trainers-profile-img">
                        <img src={trainer.image} alt="trainer" />
                  </div>
                  <span>{trainer.name}</span>
            </div>

      )
}

function Trainers() {
      const [trainers, setTrainers] = useState([])
      const trainerss = [
            {
                  image: "https://unsplash.com/photos/mEZ3PoFGs_k/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHx8fDE2NzM0NDMzNTM&force=true",
                  name: "Trainer's Name",
                  workouts: ["Swimming", "Running", "Cycling", "Yoga", "Pilates", "Weight Lifting", "Boxing", "Dancing", "Martial Arts", "Climbing", "Hiking", "Skiing", "Soccer", "Basketball", "Football", "Baseball", "Tennis", "Volleyball", "Golf", "Badminton", "Rugby", "Cricket", "Hockey", "Table Tennis", "Archery", "Fencing", "Skating", "Surfing", "Kayaking", "Rowing", "Wrestling", "Gymnastics", "Diving", "Squash", "Racquetball", "Softball", "Handball", "Lacrosse", "Canoeing", "Curling", "Shooting", "Bobsleigh", "Biathlon", "Bobsleigh", "Skeleton", "Snowboarding", "Cross Country Skiing", "Freestyle Skiing", "Luge", "Nordic Combined", "Alpine Skiing", "Figure Skating", "Short Track Speed Skating", "Speed Skating", "Synchronized Swimming", "Trampoline", "Water Polo", "Weightlifting", "Wrestling", "Artistic Gymnastics", "Rhythmic Gymnastics", "Trampoline Gymnastics", "Beach Volleyball"],
            },
            {
                  image: "https://unsplash.com/photos/mEZ3PoFGs_k/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHx8fDE2NzM0NDMzNTM&force=true",
                  name: "Trainer's Name",
                  workouts: ["ityut", "utyityu"],
            },
            {
                  image: "https://unsplash.com/photos/mEZ3PoFGs_k/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHx8fDE2NzM0NDMzNTM&force=true",
                  name: "Trainer's Name",
                  workouts: ["ityut", "utyityu"],
            },
            {
                  image: "https://unsplash.com/photos/mEZ3PoFGs_k/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHx8fDE2NzM0NDMzNTM&force=true",
                  name: "Trainer's Name",
                  workouts: ["ityut", "utyityu"],
            },
            {
                  image: "https://unsplash.com/photos/mEZ3PoFGs_k/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHx8fDE2NzM0NDMzNTM&force=true",
                  name: "Trainer's Name",
                  workouts: ["ityut", "utyityu"],
            },
            {
                  image: "https://unsplash.com/photos/mEZ3PoFGs_k/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHx8fDE2NzM0NDMzNTM&force=true",
                  name: "Trainer's Name",
                  workouts: ["ityut", "utyityu"],
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

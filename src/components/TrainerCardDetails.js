import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const columnDetails = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1vw 15vw 0vw 2vw',
  margin: '0px 0px 30px 0px',
};

const rowDetails = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'left',
  padding: '1vw 10vw 0vw 2vw',
  margin: '0px 0px 0px 0px',
};

const categories = {
  border: '1px solid white',
  borderRadius: '8px',
  padding: '5px 10px',
  margin: '0px 10px',
};
const categoriesContainer = {
  display: 'flex',
  justifyContent: 'space-between',
};

const item = {
  border: '1px solid white',
  borderRadius: '8px',
  padding: '20px 50px',
};

// const img = {
//   width: '30vw',
//   height: 'auto',
// };

const button = {
  border: '1px solid white',
  borderRadius: '8px',
  padding: '10px 20px',
  margin: '0px 10px',
  width: '35%',
  cursor: 'pointer',
  textDecoration: 'none',
};

function TrainerCardDetails({ trainer: prop }) {
  const history = useHistory();
  const { trainer_id } = useParams();
  const [trainer, setTrainer] = useState(prop);

  useEffect(() => {
    fetch(`/api/trainers/${trainer_id}`)
      .then((res) => res.json())
      .then((data) => {
        setTrainer(data);
      });
  }, [trainer_id]);

  const addToUserDashboard = useCallback(() => {
    fetch('/api/dashboard_trainers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...trainer }),
    }).then(() => {
      history.push('/UserDashboard');
    });
  }, [history, trainer]);

  return (
    <div>
      <Navbar />
      <div>
        <div>
          <div style={columnDetails}>
            {trainer && (
              <>
                <div style={rowDetails}>
                  <h1 style={item}>{trainer.name}</h1>
                  <div style={categoriesContainer}>
                    <h3 style={categories}>Sessions: {trainer.sessions}</h3>
                    <h3 style={categories}>Workouts : {trainer.workouts}</h3>
                  </div>
                  <h4 style={item}>{trainer.bio}</h4>
                  <div>
                    <button style={button} onClick={addToUserDashboard}>
                      Add Trainer
                    </button>
                    {/* <button style={button} onClick={addToUserDashboard}>
                      Remove from Dashboard
                    </button> */}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TrainerCardDetails;

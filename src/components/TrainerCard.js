import React from 'react';
import { useHistory } from 'react-router-dom';

const images = {
  width: '16.8vw',
  height: '35vh',
  margin: '0 ',
  padding: '0',
};

const details = {
  backgroundColor: 'rgba(94, 151, 255, 0.4)',
  width: '16.8vw',
  height: 'auto',
};

const text = {
  padding: '0em 1em',
};

function TrainerCard({ trainer }) {
  const history = useHistory();

  const handleClick = () => {
    history.push({
      pathname: `/${trainer.id}`,
    });
  };

  return (
    <div style={details} onClick={handleClick}>
      <img style={images} src={trainer.image} alt={trainer.image} />
      <h2 style={text}>{trainer.name} </h2>
      <p style={text}>Bio:{trainer.bio} </p>
      <p style={text}>Expertise:{trainer.expertise} </p>
      <p style={text}>Current number of clients:{trainer.clients} </p>
      <p style={text}>Available workouts :{trainer.workouts} </p>
    </div>
  );
}

export default TrainerCard;

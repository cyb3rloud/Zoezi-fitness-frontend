import React from 'react';
import './Dashboard.css';
// import { cardsData } from "./Data";
import { UilUsersAlt, UilUserMd, UilPackage } from '@iconscout/react-unicons';

import Card from './Card';

const color = {
  background: 'linear-gradient(180deg, #4bb49b 0%, #6cf6d6 100%)',
  boxShadow: '0px 10px 20px 0px #6cf6d6',
};

const Cards = ({ users, trainers }) => {
  const cardItems = [users, trainers];

  return (
    <div className="Cards">
      {cardItems.map((cardItem, index) => {
        return (
          <div className="parentContainer" key={index}>
            {console.log(cardItem)}
            <Card title={index === 1 ? 'Trainers' : 'Users'} count={cardItem.length} style={color} />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;

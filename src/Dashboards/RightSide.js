import React from 'react';
import CustomerReview from './CustomerReview';
import Updates from './Updates';
import './Dashboards.css';

const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
        <h3>Latest Updates</h3>
        <Updates />
      </div>
      <div>
        {/* <h3>Customer Review</h3>
        <CustomerReview /> */}
        <div></div>
      </div>
    </div>
  );
};

export default RightSide;

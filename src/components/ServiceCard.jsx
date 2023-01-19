import React from 'react';

const ServiceCard = (props) => {
  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div className="card p-0overflow-hidden-100 shadow">
        <div className="card-body" style={{ background: '#4BB49B4D' }}>
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.desc}</p>
          <p className="text-center" style={{ mouse: 'pointer', fontweight: 'bold' }}>
            Learn More
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

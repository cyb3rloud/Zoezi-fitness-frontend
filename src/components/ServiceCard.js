import React from 'react';

const ServiceCard = (props) => {
  return (
    <div className=" col-11 col-md-6 col-lg-3 mx-0 mb-4" style={{ backgroud: 'red' }}>
      <div className="card-a" >
        <div className="card-body" style={{ background: 'rgba(0,0,0,0.2)', borderLeft: '12px solid #DFBD69', textAlign: 'center' }}>
          <h5 className="card-title" style={{ textDecoration: 'underline' }}>{props.title}</h5>
          <p className="card-text" style={{ background: 'rgba(0,0,0,0.3)', borderLeft: '1px solid #DFBD69', color: 'white', padding: '10px', borderTopRightRadius: '20px', borderBottomRightRadius: '20px', textAlign: 'left' }}>{props.desc}</p>
          <hr></hr>
          <p className="text-center" style={{ mouse: 'pointer', fontweight: 'bold', color: '#DFBD69' }}>
            Learn More
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

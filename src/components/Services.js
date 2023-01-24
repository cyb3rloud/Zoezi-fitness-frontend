import React from 'react';
import ServiceCard from './ServiceCard';
import data from '../data';
import './servicecard.css'

const Services = () => {
  return (
    <div className='main-offer' >
      <div className="py" style={{ background: 'transparent', borderTopLeftRadius: '24px', borderTopRightRadius: '24px' }}>
        <h2 className="text-center ">What We offer</h2>

        <hr style={{ color: 'white' }} />
        <div className="row justify-content-center" style={{ padding: '20px', borderTopLeftRadius: '124px' }}>
          {data.servicedata.map((service, index) => {
            return <ServiceCard key={index} title={service.title} desc={service.desc} />;
          })}
        </div>
        <hr style={{ color: 'white' }} />
      </div>
    </div>
  );
};

export default Services;

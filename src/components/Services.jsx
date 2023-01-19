import React from 'react';
import ServiceCard from './ServiceCard';
import data from '../data';

const Services = () => {
  return (
    <>
      <h2 className="text-center mt-3">What We offer</h2>
      <section className="py-4 container" style={{ background: '#fff' }}>
        <div className="row justify-content-center">
          {data.servicedata.map((service, index) => {
            return <ServiceCard title={service.title} desc={service.desc} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Services;

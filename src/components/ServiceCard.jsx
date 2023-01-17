import React from 'react';

const ServiceCard = (props) => {
    return (
        <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
        <div class="card p-0overflow-hidden-100 shadow">
        <div class="card-body" style={{background:'#4BB49B4D'}}>
        <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.desc}</p>
          <text class="text-center"style={{mouse:'pointer',fontweight:"bold"}}>Learn More</text>
        </div>
      </div>
        </div>
    );
};

export default ServiceCard;
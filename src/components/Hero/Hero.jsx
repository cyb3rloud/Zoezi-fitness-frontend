import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './hero.css';
import heroImg from '../../images/logo2.png';
import lowerImg from '../../images/logo.png';
import { useNavigate } from 'react-router-dom';
import star from '../../images/star.svg';
import flip from '../../images/flip.jpg'
import flit from '../../images/flit.jpg'

const Hero = () => {

  const navigate = useNavigate();

  return (<>
    <div className="fixed">
      <div className='fixed-hold'>


        <div className='star1'>
          <img src={star} height='250' width='250' />

        </div>
        <div id="content">
          <div class="flip-container floatL" ontouchstart="this.classList.toggle('hover');"><span className='hover-me'>hover over Image for more!</span></div>
          <div class="flip-container bookflip-container floatR" ontouchstart="this.classList.toggle('hover');">
            <div class="flipper">
              <div class="front">
                <img src={flip} height='315' width='200' />
              </div>
              <div class="back">
                <img src={flit} height='315' width='200' />
              </div>
              <div class="clear"></div>
            </div>
          </div>
          <div class="clear"></div>
        </div>
        <div class="typewriter">
          <h1>Once upon a time...</h1>
          <p>Once upon a time...<br />
            Once upon a time...<br />
            Once upon a time...<br />
            Once upon a time...<br />
            Once upon a time...</p>


        </div>
      </div>
    </div>
    <div className="hero-section" >
      <div className='who-we'>Who we are</div>
      <hr></hr>
      <div className='hero-main'>
        <Row>
          <Col lg="2" className='hero-container'>
            <div className="hero_content">
              <img src={heroImg} height='100' width='200' /><br></br>

              <p style={{ borderLeft: '1px solid #d4b485', color: 'white', paddingLeft: '4px' }}>
                Begin your fitness journey with BeFit! We help you find the best workouts for you to reach your desired
                goal.
              </p>

              <div className="hero_btns d-flex align-items-center gap-4">
                <button
                  className="my-button "
                  onClick={() => {
                    console.log('clicked');
                    navigate('/Register');
                  }}
                >
                  Get Started Now
                </button>
              </div>
            </div>
          </Col>
          <Col lg="2" className='hero-container'>
            <div className="hero_content">
              <img src={heroImg} height='100' width='200' /><br></br>

              <p style={{ borderLeft: '2px solid #d4b485', color: 'white', paddingLeft: '4px' }}>

                Begin your fitness journey with BeFit! We help you find the best workouts for you to reach your desired
                goal.
              </p>

              <div className="hero_btns d-flex align-items-center gap-4">
                <button
                  className="my-button "
                  onClick={() => {
                    console.log('clicked');
                    navigate('/Register');
                  }}
                >
                  Get Started Now
                </button>
              </div>
            </div>
          </Col>
          <Col lg="2" className='hero-container'>
            <div className="hero_content">
              <img src={heroImg} height='100' width='200' /><br></br>

              <p style={{ borderLeft: '2px solid #d4b485', color: 'white', paddingLeft: '4px' }}>

                Begin your fitness journey with BeFit! We help you find the best workouts for you to reach your desired
                goal.
              </p>

              <div className="hero_btns d-flex align-items-right gap-4">
                <button
                  className="my-button "
                  onClick={() => {
                    console.log('clicked');
                    navigate('/Register');
                  }}
                >
                  Get Started Now
                </button>
              </div>
            </div>
          </Col>
          <Col lg="2" className='hero-container'>
            <div className="hero_content">
              <img src={heroImg} height='100' width='200' /><br></br>

              <p style={{ borderLeft: '2px solid #d4b485', color: 'white', paddingLeft: '4px' }}>

                Begin your fitness journey with BeFit! We help you find the best workouts for you to reach your desired
                goal.
              </p>

              <div className="hero_btns d-flex align-items-center gap-4">
                <button
                  className="my-button "
                  onClick={() => {
                    console.log('clicked');
                    navigate('/Register');
                  }}
                >
                  Get Started Now
                </button>
              </div>
            </div>
          </Col>
          <Col lg="2" className='hero-container'>
            <div className="hero_content">
              <img src={heroImg} height='100' width='200' /><br></br>

              <p style={{ borderLeft: '2px solid #d4b485', color: 'white', paddingLeft: '4px' }}>

                Begin your fitness   journey with BeFit! We help you find the best workouts for you to reach your desired
                goal
              </p>

              <div className="hero_btns d-flex align-items-center gap-4">
                <button
                  className="my-button "
                  onClick={() => {
                    console.log('clicked');
                    navigate('/Register');
                  }}
                >
                  Get Started Now
                </button>
              </div>
            </div>

          </Col>

          <div className='lower-div'>
            <img src={lowerImg} height='170' width='200' />
          </div>
        </Row>




      </div>
    </div>
  </>
  );
};
export default Hero;

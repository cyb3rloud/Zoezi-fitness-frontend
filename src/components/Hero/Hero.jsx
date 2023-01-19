import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './hero.css';
import heroImg from '../../images/hero.jpg';

const Hero = () => {
  return (
    <section className="hero_section">
      <Container className="py-4" style={{ background: '#D9D9D9' }}>
        <Row>
          <Col lg="6" md="6">
            <div className="hero_content">
              <h2>
                Simple fitness experience <span>for everyone.</span>
              </h2>
              <p>
                Begin your fitness journey with BeFit! We help you find the best workouts for you to reach your desired
                goal.
              </p>

              <div className="hero_btns d-flex align-items-center gap-4">
                <button className="explore_btn d-flex btn btn-success align-items-center gap-2 ">
                  Get Started Now
                </button>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="hero_img">
              <img src={heroImg} alt="" />
            </div>
          </Col>
        </Row>
        <div></div>
      </Container>
    </section>
  );
};
export default Hero;

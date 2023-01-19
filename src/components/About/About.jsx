import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './about.css';
import aboutImg from '../../images/about.jpg';

const About = () => {
  return (
    <section className="hero_section">
      <Container className="py-4" style={{ background: '#D9D9D9' }}>
        <Row>
          <Col lg="6" md="6">
            <div className="about_img">
              <img src={aboutImg} alt="" />
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="hero_content">
              <h2>Who are we ?</h2>
              <p>
                BeFit is an online health and fitness company which provides workouts, customized plans, and other
                resources such as training videos, consultation with experts as well as location of gyms in one’s
                locality that allows people to adopt and maintain healthy habits for life. With a custom combination of
                strength, cardio, yoga, and stretching workouts, we make it simple for millions of people to get in the
                best shape of their lives and stay in the best shape of their lives anytime, anywhere.
              </p>

              <div className="hero_btns d-flex align-items-center gap-4">
                <button className="create_btn d-flex btn btn-success align-items-center gap-2">Learn more</button>
              </div>
            </div>
          </Col>
        </Row>
        <div></div>
      </Container>
    </section>
  );
};
export default About;

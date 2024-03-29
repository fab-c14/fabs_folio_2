import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import sample_resume from '../Assets/fabs_resume_latest.pdf';
import { Slide, Fade } from 'react-awesome-reveal';
import back from '../Assets/back.jpg';
import { Tilt } from "react-tilt";

// ... (previous imports)

class About extends Component {

  render() {
    const { style } = this.props;
    return (
      <>
        <div className="f3 shadow-5 tc w-100 mt3" color={this.style} id="about_back">
          <h1 className="ttu shadow-1 hover-bg-green br3"> Get to Know Me </h1>
          <Container>
            <Row className="w-100">
              <Col xs={12} md={6}>
                <Container className="w-100">
                  <Row>
                    <Col xs={12} sm={6}>
                      <div className="pa2 ma1 right">
                        <Slide
                          direction="right"
                          cascade
                          duration={1000} // Specify the duration of the slide effect in milliseconds
                          triggerOnce // Only trigger the slide effect once
                          damping={0.5} // Adjust the damping of the animation
                          delay={100} // Introduce a delay before the animation starts
                        >
                          <Container>
                            <Tilt tilt={24}>
                              <img
                                src={back}
                                alt="My Photo"
                                className="img-fluid grow rounded-circle tr shadow-4 black br-50 v-mid center"
                                style={{ width: "100%", height: "auto" }} // Adjust the width and height as needed
                              />
                            </Tilt>
                          </Container>
                        </Slide>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Col>

              <Col xs={12} md={6}>
                <Row className="w-100">
                  <Col>
                    <Fade left cascade duration={2000}>
                      <div className="code left mt3 mb4 v-mid b fw6 f2">
                        <p className="f5">Hey there! I'm a Full Stack Web Developer and Programming Enthusiast.</p>
                        <p className="f5">Self-taught and always curious, I thrive on challenges and love learning new things.</p>
                        <p className="f5">Passionate about creating innovative solutions and exploring cutting-edge technologies.</p>
                        <Button
                          variant="outline-primary"
                          target="_new"
                          rel="noopener noreferrer"
                          href={sample_resume}
                          className="btnFillup liquidbg f5 mt3 b"
                        >
                          <Tilt tilt={24}>
                            Check Out My Resume
                          </Tilt>
                        </Button>
                      </div>
                    </Fade>
                  </Col>
                </Row>
              </Col>
            </Row>
            <br />
          </Container>
        </div>
      </>
    );
  }
}

export default About;


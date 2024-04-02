import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import sample_resume from '../Assets/fabs_resume_latest.pdf';
import { Slide, Fade } from 'react-awesome-reveal';
import back from '../Assets/back.png';
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
              <Col xs={12} md={12} className="center">
                <Container className="w-100 text-center">
                  <Row>
                    <Col xs={12} sm={6}  className="center ">
                      <div className="pa2 ma1">
                        <Slide
                          direction="top"
                          cascade
                          duration={1000} 
                          
                          damping={0.8} 
                          delay={100} 
                        >
                          <Container>
                            <Tilt tilt={24}>
                              <img
                                src={back}
                                alt="My Photo"
                                className="br2  shadow-4 black  rounded-circle"
                                
                              />
                            </Tilt>
                          </Container>
                        </Slide>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Col>

              <Col xs={12} md={6} className="center">
                <Row className="w-100">
                  <Col>
                    <Fade left cascade duration={2000} className="">
                      <div className="code left mt3 mb4 v-mid b fw6 f2 ">
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


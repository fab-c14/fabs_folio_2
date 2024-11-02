import React from "react";
import { Component } from "react";
import Row from 'react-bootstrap/Row';
import {
  FaCopyright,
  FaFacebook,
  FaGithub,
  FaGithubSquare,
  FaInstagram,
  FaLinkedin,
  FaStar
} from "react-icons/fa";
import 'tachyons';
import { Fade, Zoom } from 'react-awesome-reveal';

class Footer extends Component {
  render() {
    return (
      <>
        <Row className="text-center mt-5">
          <div className="fw3 white bg-black b--green b3 br4">
            <Zoom>
              <h1 className="fw4 bg-light-green br2 pa2 ma3 near-black">Contact Me</h1>
            </Zoom>

            <Fade cascade damping={0.3}>
              <div className="glow">
                <a href="https://instagram.com/_fabc14?igshid=ZDc4ODBmNjlmNQ==" target="_new" className="red dim">
                  <FaInstagram size={35} />
                </a>&nbsp;&nbsp;&nbsp;
                <a href="https://github.com/fab-c14" target="_new" className="white dim">
                  <FaGithub size={35} />
                </a>&nbsp;&nbsp;&nbsp;
                <a href="https://www.facebook.com/fabc.love.to.thunder" target="_new" className="dim light-blue">
                  <FaFacebook size={35} />
                </a>&nbsp;&nbsp;&nbsp;
                <a href="https://www.linkedin.com/in/faisal-ahmad-bhat-aaba29229" target="_new" className="dim">
                  <FaLinkedin size={35} />
                </a>
              </div>
            </Fade>

            <Fade duration={1000}>
              <hr width={'50%'} style={{ margin: '1rem auto', border: 'solid red 2px' }} />
            </Fade>

            <Fade delay={500}>
              <div className="code f6 fw5">
                <h6>
                  <strong><FaCopyright /> 2024 </strong> - Made With Acknowledgement Of Heart By Faisal Farooq
                </h6>
                <p>
                  Come On Give Me A Star&nbsp;
                  <FaStar /> <a href="https://github.com/fab-c14" target="_new" className="dim green">
                    <FaGithubSquare size={33} />
                  </a>
                </p>
                <hr />
                <br />
              </div>
            </Fade>
          </div>
        </Row>
      </>
    )
  }
}

export default Footer;

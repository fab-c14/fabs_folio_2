import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Bounce, Fade } from "react-reveal";

class Header extends Component {
  render() {
    return (
      <>
        <div className="bg-light-gray tc shadow-1 lh-title helvetica hover-bg-moon-gray" style={{ marginTop: `-28px` }}>
          <Fade left duration={1500}>
            <h1 className="bg-washed-yellow f1 f-subheadline tracked br3 avenir wrap green b">
              Hi, My Name Is{" "}
              <strong className="blue hover-light-blue">`Faisal`</strong> | Full Stack Web Developer
            </h1>
            <Bounce duration={1000} left cascade>
              <div className="bg-washed-red ttu br4 f2 code tracked-mega pa1 hover-bg-light-red">
                <span className="pointer">simple but different</span>
              </div>
            </Bounce>
            <hr />
            <a className="btnFillup liquidbg f6 b link dim br2 ph3 pv2 mb2 dib white bg-blue" href="#">
              Know More
            </a>
          </Fade>
        </div>
      </>
    );
  }
}

export default Header;

import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Bounce, Fade } from "react-reveal";

class Header extends Component {
  render() {
    return (
      <Container fluid className="tc shadow-5 lh-title helvetica white wrap pa-5 " id="About">
        <Row>
          <Col xs={12}>
            <h1 className="f1 f-subheadline tracked br3 avenir wrap b">
              Hello, I'm <strong className="blue hover-light-blue">Faisal</strong> | Creative Developer
            </h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className="ttu br4 f4 code tracked-mega pa1">
              <span className="pointer hover-bg-light-blue pa1 br2">Innovative and Passionate</span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <hr />
            <hr />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Header;

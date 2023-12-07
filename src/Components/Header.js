import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Bounce, Fade } from "react-reveal";

class Header extends Component {
  render() {
    return (
      <>
        <div className=" tc shadow-5 lh-title helvetica white wrap pa5">
          
            <h1 className=" f1 f-subheadline tracked br3 avenir wrap b">
              Hi, My Name Is{" "}
              <strong className="blue hover-light-blue">`Faisal`</strong> | Full Stack Web Developer
            </h1>
           
              <div className=" ttu br4 f4 code tracked-mega pa1 ">
                <span className="pointer hover-bg-light-blue pa1 br2 ">simple but different</span>
              </div>
           
            <hr />
            <hr />
        </div>
      </>
    );
  }
}

export default Header;

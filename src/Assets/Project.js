import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import "tachyons";
import "./Project.css";

const Project = ({
  name,
  pic,
  sourceCode,
  liveLink,
  desc,
  picAlt,
  skills,
  date,
}) => {
  if (pic === "" || pic === " ") {
    pic = picAlt; // choosing a random picture from the web
  }
  return (
    <div className="">
      <Row className="w-95 d-flex justify-content-center my-3">
        <Col md={8} className="">
          <article className="georgia shadow-4 pa3 ">
            <h2 className="f2 mb-3 tc">{name}</h2>
            <hr />
            {skills && (
              <div className="mb-3">
                <strong>Skills Used: </strong>
                {skills}
              </div>
            )}
            <p>{desc}</p>
            <p className="mt-3">
              <strong>Date: </strong>
              {date}
            </p>
            {liveLink && (
              <Button
                variant="primary"
                target="_new"
                className="btnFillup2 liquidbg f5 mr-2 b"
                href={liveLink}
              >
                See Live
              </Button>
            )}
            {"      "}
            <Button
              variant="outline-light"
              target="_new"
              className="btnFillup2 l f5 red b"
              href={sourceCode}
            >
              Source Code
            </Button>
          </article>
        </Col>
       
      </Row>
      <hr />
    </div>
  );
};

export default Project;

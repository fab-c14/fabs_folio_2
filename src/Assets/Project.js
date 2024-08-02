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
    <>
      <Row className='w-100 my-4 mx-2'>
        <Col md={6} style={{ position: "relative" }}>
          <article className='georgia w-90 h-90 shadow-4 pa3 linear-bg'>
            <h2 className='f2 mb-3'>{name}</h2>
            {skills && (
              <div className='mb-3'>
                <strong>Skills Used: </strong>
                {skills}
              </div>
            )}
            <p>{desc}</p>
            <p className='mt-3'>
              <strong>Date: </strong>
              {date}
            </p>
            {liveLink && (
              <Button
                variant='primary'
                target='_new'
                className='btnFillup2 liquidbg f5 mr-2 b'
                href={liveLink}
              >
                See Live
              </Button>
            )}
            {"      "}
            <Button
              variant='outline-light'
              target='_new'
              className='btnFillup2 l f5 black b'
              href={sourceCode}
            >
              Source Code
            </Button>
          </article>
        </Col>

        <Col
          md={6}
          className='d-flex align-items-center justify-content-center'
        >
          <img
            src={pic}
            alt='Beautiful Image'
            className='br3 shadow-3 grow w-75 h-75'
          />
        </Col>
      </Row>

      <hr />
    </>
  );
};

export default Project;

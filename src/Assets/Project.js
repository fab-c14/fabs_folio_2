import React from 'react';
import { Row, Col, Card, Button } from "react-bootstrap";
import { Tilt } from 'react-tilt';
import 'tachyons';

const Project = ({ name, pic, sourceCode, liveLink, desc, picAlt }) => {
  if (pic === "" || pic === " ") {
    pic = picAlt; // choosing a random picture from the web
  }

  return (
    <>
      <Row className="w-100 my-4 mx-2">
        <Col md={6} style={{ position: 'relative' }}>
          <Card className="georgia w-100 h-100">
            <Card.Body style={{ background: 'linear-gradient(to right, #87CEEB, #9370DB)' }}>
              <Card.Title className='f2'>{name}</Card.Title>
              <Card.Text>
                {desc}
              </Card.Text>
              {liveLink && (
                <Button variant="primary" target='_new' className="btnFillup2 liquidbg f5 mr-2 b" href={liveLink}>See Live</Button>
              )}
              {"      "}
              <Button variant="outline-light" target='_new' className="btnFillup2 l f5 black b" href={sourceCode}>Source Code</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="d-flex align-items-center justify-content-center">
          <img src={pic} alt="Beautiful Image" className='br3 shadow-3 grow w-75 h-75' />
        </Col>
      </Row>

      <hr />
    </>
  );
};

export default Project;

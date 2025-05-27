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
  stackIcons = [],
}) => {
  if (!pic || pic.trim() === "") {
    pic = picAlt;
  }
  return (
    <div className="card project-card">
      <Row className="w-100 d-flex align-items-center">
        <Col md={5} className="p-0">
          <img
            src={pic}
            alt={name}
            className="img-fluid rounded shadow-sm project-img"
            style={{ width: "100%", height: "180px", objectFit: "cover" }}
          />
        </Col>
        <Col md={7}>
          <h2 className="f3 mb-2">{name}</h2>
          <div className="d-flex flex-wrap mb-2">
            {stackIcons.map((icon, idx) => (
              <img
                key={idx}
                src={icon}
                alt="stack"
                style={{ height: "28px", marginRight: "8px" }}
              />
            ))}
          </div>
          {skills && (
            <div className="mb-2">
              <strong>Skills: </strong>
              {skills}
            </div>
          )}
          <p className="mb-2">{desc}</p>
          <p className="mb-3" style={{ color: "var(--muted)" }}>
            <strong>Date:</strong> {date}
          </p>
          <div>
            {liveLink && (
              <Button
                variant="primary"
                target="_blank"
                className="me-2"
                href={liveLink}
              >
                Live
              </Button>
            )}
            {sourceCode && (
              <Button
                variant="outline-light"
                target="_blank"
                href={sourceCode}
              >
                Code
              </Button>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Project;
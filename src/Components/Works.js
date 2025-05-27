import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Fade from "react-awesome-reveal";
import Project from "../Assets/Project";

const projects = [
  {
    name: "React Node Auth App",
    desc: "A full-stack authentication app built with React and Node.",
    sourceCode: "https://github.com/your-github-username/react-node-auth-app-repo",
    liveLink: "https://reactauthapp1.netlify.app",
    picAlt: "https://picsum.photos/370/160?random=6",
    date: "2024-04-12",
    stackIcons: [
      "https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white&style=for-the-badge",
      "https://img.shields.io/badge/Node.js-43853D?logo=node.js&logoColor=white&style=for-the-badge",
    ],
  },
  // ...add your other project objects with stackIcons
];

const Works = () => (
  <Container>
    <h1 className="f1 ttu tc b mb-4">Projects</h1>
    <Row className="g-4">
      {projects.map((project, idx) => (
        <Col xs={12} md={6} key={project.name}>
          <Fade direction={idx % 2 === 0 ? "left" : "right"} duration={1500}>
            <Project {...project} />
          </Fade>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Works;
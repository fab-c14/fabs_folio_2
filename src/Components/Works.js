import React from "react";
import { Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import Project from "../Assets/Project";

// Example projects array - add as many as you like!
const projects = [
  {
    name: "React Node Auth App",
    desc: "A full-stack authentication app built with React and Node.",
    sourceCode: "https://github.com/your-github-username/react-node-auth-app-repo",
    liveLink: "https://reactauthapp1.netlify.app",
    pic: "https://picsum.photos/370/160?random=6",
    date: "2024-04-12",
    skills: "React, Node, Express",
    stackIcons: [
      "https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white&style=for-the-badge",
      "https://img.shields.io/badge/Node.js-43853D?logo=node.js&logoColor=white&style=for-the-badge",
    ],
  },
  {
    name: "Review Scrapper",
    desc: "Web scraping tool built using Python/Flask. Extracts and analyzes reviews from websites.",
    sourceCode: "https://github.com/fab-c14/review-scrapper.git",
    liveLink: "",
    pic: "https://picsum.photos/370/160?random=2",
    date: "2024-02-28",
    skills: "Python, Flask, BeautifulSoup",
    stackIcons: [
      "https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white&style=for-the-badge",
      "https://img.shields.io/badge/Flask-000000?logo=flask&logoColor=white&style=for-the-badge",
    ],
  },
  {
    name: "CSS Linear Gradient Generator",
    desc: "A CSS linear gradient code generator with live preview.",
    sourceCode: "https://github.com/fab-c14/fab-c14.github.io/tree/master/igb",
    liveLink: "https://fab-c14.github.io/igb/index.html",
    pic: "https://picsum.photos/370/160?random=3",
    date: "2023-11-18",
    skills: "HTML, CSS, JavaScript",
    stackIcons: [
      "https://img.shields.io/badge/HTML-E34F26?logo=html5&logoColor=white&style=for-the-badge",
      "https://img.shields.io/badge/CSS-1572B6?logo=css3&logoColor=white&style=for-the-badge",
      "https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=for-the-badge",
    ],
  },
  // Add more projects here...
];

export default function Works() {
  return (
    <Container sx={{ py: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Projects</h1>
        <Grid container spacing={4}>
          {projects.map((project, i) => (
            <Grid item xs={12} sm={6} md={6} key={project.name}>
              <Project {...project} />
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
}
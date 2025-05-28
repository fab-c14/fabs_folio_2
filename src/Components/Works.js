import React from "react";
import { Box, Typography, Grid, Paper, Button, Stack, Container, Divider } from "@mui/material";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    name: "FLAME",
    desc: "Foundation for Learning Assistance and Management Environment. A robust educational platform built with the MERN stack.",
    sourceCode: "https://github.com/fab-c14/FLAME",
    liveLink: "",
    pic: "https://picsum.photos/370/160?random=24",
    date: "2025-05-04",
    skills: "React, Node, Express, MongoDB",
    stackIcons: [
      "https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white&style=for-the-badge",
      "https://img.shields.io/badge/Node.js-43853D?logo=node.js&logoColor=white&style=for-the-badge",
      "https://img.shields.io/badge/Express-000000?logo=express&logoColor=white&style=for-the-badge",
      "https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white&style=for-the-badge"
    ]
  },
  {
    name: "tic-tac-toe",
    desc: "A simple and fun tic-tac-toe game built with React JS. Play and challenge your logic!",
    sourceCode: "https://github.com/fab-c14/tic-tac-toe",
    liveLink: "",
    pic: "https://picsum.photos/370/160?random=25",
    date: "2024-09-02",
    skills: "React, JavaScript",
    stackIcons: [
      "https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white&style=for-the-badge",
      "https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=for-the-badge"
    ]
  },
  {
    name: "RatherHoney",
    desc: "E-commerce site for selling honey online. Modern, responsive, and easy to use.",
    sourceCode: "https://github.com/fab-c14/RatherHoney",
    liveLink: "https://rather-honey.vercel.app",
    pic: "https://picsum.photos/370/160?random=26",
    date: "2025-01-29",
    skills: "JavaScript",
    stackIcons: [
      "https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=for-the-badge"
    ]
  },
  {
    name: "FabsBlog",
    desc: "My personal blog application where I share thoughts and tutorials. Built with JavaScript.",
    sourceCode: "https://github.com/fab-c14/FabsBlog",
    liveLink: "",
    pic: "https://picsum.photos/370/160?random=27",
    date: "2025-01-06",
    skills: "JavaScript",
    stackIcons: [
      "https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=for-the-badge"
    ]
  },
  // Add more projects here if desired
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13 }
  }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

export default function Works() {
  return (
    <Box sx={{ bgcolor: "background.paper", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="md">
        <Typography
          variant="h3"
          align="center"
          sx={{ fontWeight: 800, mb: 5, color: "#eb144c", letterSpacing: 2 }}
        >
          Projects
        </Typography>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={5}>
            {projects.map((project, i) => (
              <Grid item xs={12} sm={6} key={project.name}>
                <motion.div variants={item}>
                  <Paper
                    elevation={5}
                    sx={{
                      borderRadius: 5,
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      minHeight: 440,
                      maxHeight: 440,
                      background: "linear-gradient(120deg, #23263a 60%, #2e3251 100%)",
                      boxShadow: "0 8px 40px 0 rgba(235, 20, 76, 0.10)",
                      transition: "box-shadow 0.2s, transform 0.2s",
                      "&:hover": {
                        boxShadow: "0 12px 48px 0 #eb144c44",
                        transform: "translateY(-5px) scale(1.025)"
                      }
                    }}
                  >
                    <Box
                      component="img"
                      src={project.pic}
                      alt={project.name}
                      sx={{
                        width: "100%",
                        height: 170,
                        objectFit: "cover",
                        borderRadius: "5px 5px 0 0",
                        mb: 0.5,
                        flexShrink: 0
                      }}
                    />
                    <Box sx={{ flex: 1, p: 3, display: "flex", flexDirection: "column" }}>
                      <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
                        {project.stackIcons.map((icon, idx) => (
                          <Box
                            component="img"
                            key={idx}
                            src={icon}
                            alt=""
                            sx={{ height: 26, borderRadius: 1 }}
                          />
                        ))}
                      </Stack>
                      <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                        {project.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          mb: 2,
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden"
                        }}
                      >
                        {project.desc}
                      </Typography>
                      <Divider sx={{ my: 1, bgcolor: "#eb144c55" }} />
                      <Typography variant="caption" color="text.secondary" sx={{ mb: 2, fontWeight: 500 }}>
                        {project.skills} | {project.date}
                      </Typography>
                      <Stack direction="row" spacing={1} sx={{ mt: "auto" }}>
                        {project.liveLink && (
                          <Button
                            variant="contained"
                            color="primary"
                            href={project.liveLink}
                            target="_blank"
                            size="small"
                            startIcon={<FaExternalLinkAlt />}
                            sx={{ borderRadius: 2, fontWeight: 700 }}
                          >
                            Live
                          </Button>
                        )}
                        {project.sourceCode && (
                          <Button
                            variant="outlined"
                            color="secondary"
                            href={project.sourceCode}
                            target="_blank"
                            size="small"
                            startIcon={<FaGithub />}
                            sx={{ borderRadius: 2, fontWeight: 700 }}
                          >
                            Code
                          </Button>
                        )}
                      </Stack>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}
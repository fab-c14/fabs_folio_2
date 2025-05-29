import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Chip,
  Container,
  Stack,
  Button,
  Divider,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    name: "Flame",
    desc: "🔥 Flame (foundation for learning assistance and management environment",
    sourceCode: "https://github.com/fab-c14/flame",
    liveLink: "https://flame-portfolio.vercel.app",
    date: "2025-04-18",
    skills: ["React", "Vite", "javascript","node","mongodb","express"],
    tags: ["Portfolio", "Open Source"],
    image: "https://raw.githubusercontent.com/fab-c14/flame/main/public/preview.jpg",
  },
  {
    name: "RatherHoney",
    desc: "E-commerce site for selling honey online. Modern, responsive, and easy to use.",
    sourceCode: "https://github.com/fab-c14/RatherHoney",
    liveLink: "https://rather-honey.vercel.app",
    date: "2024-12-29",
    skills: ["JavaScript", "React", "Node.js"],
    tags: ["E-commerce", "Frontend"],
    image: "https://raw.githubusercontent.com/fab-c14/RatherHoney/main/public/og-image.jpg",
  },
  {
    name: "FabsBlog",
    desc: "Personal blog application where I share thoughts and tutorials. Built with JavaScript and Next.js.",
    sourceCode: "https://github.com/fab-c14/FabsBlog",
    liveLink: "",
    date: "2024-11-06",
    skills: ["JavaScript", "Next.js", "MongoDB"],
    tags: ["Blog", "Frontend"],
    image: "https://picsum.photos/370/160?random=27",
  },

];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.17,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 48, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 70, damping: 16 },
  },
};

export default function Works() {
  return (
    <Box sx={{ bgcolor: "background.paper", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: 800,
            mb: 2,
            color: "#eb144c",
            letterSpacing: 2,
            textShadow: "0 4px 16px #eb144c1a",
          }}
        >
          Projects
        </Typography>
        <Typography
          align="center"
          sx={{ color: "#b0b4c1", mb: 6, fontSize: "1.1rem" }}
        >
          Minimal, elegant, and functional. The best of my web development work.
        </Typography>
        <AnimatePresence>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            exit="hidden"
          >
            <Grid container spacing={5} justifyContent="center">
              {projects.map((project, i) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={project.name}
                  sx={{
                    display: "flex",
                  }}
                >
                  <motion.div style={{ width: "100%" }} variants={cardVariant}>
                    <Paper
                      elevation={4}
                      sx={{
                        borderRadius: 5,
                        background:
                          "linear-gradient(120deg,#23263a 65%,#2e3251 100%)",
                        color: "#fff",
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        minWidth: 0,
                        maxWidth: "100%",
                        height: 430,
                        boxShadow: "0 6px 32px 0 #8ED1FC22",
                        transition: "box-shadow 0.2s, transform 0.2s",
                        "&:hover": {
                          transform: "translateY(-6px) scale(1.035)",
                          boxShadow: "0 16px 56px 0 #eb144ca7, 0 2px 8px #000a",
                        },
                        p: 0,
                        overflow: "hidden",
                      }}
                    >
                      <Box
                        component="img"
                        src={project.image}
                        alt={project.name}
                        sx={{
                          width: "100%",
                          height: 160,
                          objectFit: "cover",
                          background: "#181c27",
                          borderRadius: "20px 20px 0 0",
                        }}
                      />
                      <Box
                        sx={{
                          flex: 1,
                          p: { xs: 2, md: 3 },
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Stack
                          direction="row"
                          spacing={1}
                          useFlexGap
                          sx={{ mb: 1, flexWrap: "wrap" }}
                        >
                          {project.skills.map((skill) => (
                            <Chip
                              key={skill}
                              label={skill}
                              size="small"
                              sx={{
                                bgcolor: "#181c27",
                                color: "#8ED1FC",
                                fontWeight: 600,
                                fontSize: "0.82rem",
                              }}
                            />
                          ))}
                        </Stack>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 700,
                            mb: 1,
                            color: "#fff",
                          }}
                        >
                          {project.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#b0b8d9",
                            mb: 2,
                            fontSize: "1rem",
                            lineHeight: 1.6,
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            minHeight: "70px",
                            maxHeight: "70px",
                          }}
                        >
                          {project.desc}
                        </Typography>
                        <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
                          {project.tags.map((tag) => (
                            <Chip
                              key={tag}
                              label={`#${tag}`}
                              size="small"
                              variant="outlined"
                              sx={{
                                bgcolor: "transparent",
                                color: "#eb144c",
                                fontWeight: 500,
                                borderColor: "#eb144c99",
                                fontSize: "0.79rem",
                              }}
                            />
                          ))}
                        </Stack>
                        <Divider sx={{ my: 1, bgcolor: "#eb144c55" }} />
                        <Typography
                          variant="caption"
                          sx={{
                            color: "#8ED1FC",
                            mb: 2,
                            fontWeight: 600,
                            letterSpacing: 1,
                          }}
                        >
                          {project.date}
                        </Typography>
                        <Stack direction="row" spacing={1} sx={{ mt: "auto", pt: 1 }}>
                          <Button
                            variant="contained"
                            color="primary"
                            href={project.liveLink || "#"}
                            target="_blank"
                            size="small"
                            startIcon={<FaExternalLinkAlt />}
                            sx={{
                              borderRadius: 2,
                              fontWeight: 700,
                              background: project.liveLink ? "#8ED1FC" : "#23263a",
                              color: project.liveLink ? "#23263a" : "#8ED1FC",
                              pointerEvents: project.liveLink ? "auto" : "none",
                              opacity: project.liveLink ? 1 : 0,
                              minWidth: 80,
                              "&:hover": {
                                background: "#eb144c",
                                color: "#fff",
                              },
                            }}
                          >
                            Live
                          </Button>
                          <Button
                            variant="outlined"
                            color="secondary"
                            href={project.sourceCode}
                            target="_blank"
                            size="small"
                            startIcon={<FaGithub size={18} />}
                            sx={{
                              borderRadius: 2,
                              fontWeight: 700,
                              borderColor: "#8ED1FC",
                              color: "#8ED1FC",
                              minWidth: 80,
                              "&:hover": {
                                borderColor: "#eb144c",
                                color: "#eb144c",
                              },
                            }}
                          >
                            Code
                          </Button>
                        </Stack>
                      </Box>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </AnimatePresence>
        <Divider sx={{ mt: 8, mb: 3, bgcolor: "#eb144c44" }} />
        <Box sx={{ textAlign: "center" }}>
          <Chip
            label="🌱 More projects always coming soon!"
            color="secondary"
            sx={{
              fontWeight: 600,
              fontSize: "1.06rem",
              px: 2.5,
              py: 2,
              bgcolor: "#181c27",
              color: "#8ED1FC",
              borderRadius: 2,
              mt: 1,
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
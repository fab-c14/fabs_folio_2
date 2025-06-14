import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import Project from "../Assets/Project";


const projects = [
  {
    name: "Flame",
    desc: "🔥 Flame is a modern learning management platform built with the MERN stack for students and educators.",
    sourceCode: "https://github.com/fab-c14/FLAME",
    liveLink: "https://flame-portfolio.vercel.app",
    date: "2025-05-04",
    skills: ["React", "Node.js", "Express", "MongoDB"],
    tags: ["Education", "Fullstack", "MERN"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "RatherHoney",
    desc: "E-commerce site for selling honey online. Modern, responsive, and easy to use.",
    sourceCode: "https://github.com/fab-c14/RatherHoney",
    liveLink: "https://rather-honey.vercel.app",
    date: "2025-01-29",
    skills: ["JavaScript", "React", "Node.js"],
    tags: ["E-commerce", "Frontend"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "FabsBlog",
    desc: "Personal blog application where I share thoughts and tutorials. Built with JavaScript and Next.js.",
    sourceCode: "https://github.com/fab-c14/FabsBlog",
    liveLink: "",
    date: "2025-01-06",
    skills: ["JavaScript", "Next.js", "MongoDB"],
    tags: ["Blog", "Frontend"],
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Tic-Tac-Toe",
    desc: "A minimal, interactive tic-tac-toe game built with React.",
    sourceCode: "https://github.com/fab-c14/tic-tac-toe",
    liveLink: "",
    date: "2024-09-02",
    skills: ["React", "JavaScript"],
    tags: ["Game", "Frontend"],
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "CoAssignment",
    desc: "CoAssignment is a code-to-assignment generator that helps automate the creation of assignments from code submissions. It streamlines the process for educators and students, making assignment management efficient and organized.",
    sourceCode: "https://github.com/fab-c14/CoAssignment",
    liveLink: "https://fab-c14.github.io/CoAssignment",
    date: "2025-06-06",
    skills: ["JavaScript", "HTML", "CSS"],
    tags: ["Automation", "Education", "Generator"],
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80"
  }
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
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
    <Box sx={{ bgcolor: "#101012", py: { xs: 6, md: 10 } }}>
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
        <Typography align="center" sx={{ color: "#b0b4c1", mb: 6, fontSize: "1.1rem" }}>
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
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 4,
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              {projects.map((project, i) => (
                <motion.div
                  key={project.name}
                  variants={cardVariant}
                  style={{
                    flex: "1 1 320px",
                    maxWidth: "340px",
                    minWidth: "280px",
                    display: "flex",
                  }}
                >
                  <Project project={project} />
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </AnimatePresence>
      </Container>
    </Box>
  );
}
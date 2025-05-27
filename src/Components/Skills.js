import React from "react";
import { Container, Grid, Chip, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiBootstrap, SiRedux, SiDjango } from "react-icons/si";

const skills = [
  { icon: <FaReact color="#61dafb" />, label: "React" },
  { icon: <FaNodeJs color="#3c873a" />, label: "Node.js" },
  { icon: <SiExpress color="#000" />, label: "Express" },
  { icon: <SiMongodb color="#47a248" />, label: "MongoDB" },
  { icon: <FaPython color="#3776ab" />, label: "Python" },
  { icon: <SiDjango color="#092e20" />, label: "Django" },
  { icon: <FaJs color="#f7df1e" />, label: "JavaScript" },
  { icon: <FaHtml5 color="#e44d26" />, label: "HTML5" },
  { icon: <FaCss3Alt color="#1572b6" />, label: "CSS3" },
  { icon: <SiBootstrap color="#563d7c" />, label: "Bootstrap" },
  { icon: <SiRedux color="#764abc" />, label: "Redux" },
  { icon: <FaGitAlt color="#f34f29" />, label: "Git" },
  { icon: <FaGithub color="#24292e" />, label: "GitHub" },
];

export default function Skills() {
  return (
    <Container sx={{ py: 6 }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h3" align="center" sx={{ fontWeight: 700, mb: 4, color: "#eb144c" }}>
          My Tech Stack
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {skills.map((skill, idx) => (
            <Grid item key={skill.label}>
              <motion.div
                whileHover={{ scale: 1.12, boxShadow: "0 0 16px #eb144c" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Chip
                  icon={skill.icon}
                  label={skill.label}
                  sx={{
                    px: 2,
                    py: 1,
                    fontSize: "1.1rem",
                    bgcolor: "#23263a",
                    color: "#f7f7fa",
                    boxShadow: "0 4px 12px rgba(31,38,135,0.15)",
                    borderRadius: 2,
                  }}
                />
              </motion.div>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mt: 4, textAlign: "center", color: "#b0b4c1" }}>
          <Typography variant="body1">
            Always learning and building with new tools!
          </Typography>
        </Box>
      </motion.div>
    </Container>
  );
}
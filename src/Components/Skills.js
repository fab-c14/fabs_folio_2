import React from "react";
import { Box, Typography, Grid, Paper, Chip, Container } from "@mui/material";
import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaGitAlt
} from "react-icons/fa";
import {
  SiMongodb, SiExpress, SiBootstrap, SiRedux, SiDjango
} from "react-icons/si";

const skills = [
  { icon: <FaReact size={38} color="#61dafb" />, label: "React" },
  { icon: <FaNodeJs size={38} color="#3c873a" />, label: "Node.js" },
  { icon: <SiExpress size={38} color="#000" />, label: "Express" },
  { icon: <SiMongodb size={38} color="#47a248" />, label: "MongoDB" },
  { icon: <FaPython size={38} color="#3776ab" />, label: "Python" },
  { icon: <SiDjango size={38} color="#092e20" />, label: "Django" },
  { icon: <FaJs size={38} color="#f7df1e" />, label: "JavaScript" },
  { icon: <FaHtml5 size={38} color="#e44d26" />, label: "HTML5" },
  { icon: <FaCss3Alt size={38} color="#1572b6" />, label: "CSS3" },
  { icon: <SiBootstrap size={38} color="#563d7c" />, label: "Bootstrap" },
  { icon: <SiRedux size={38} color="#764abc" />, label: "Redux" },
  { icon: <FaGitAlt size={38} color="#f34f29" />, label: "Git" },
  { icon: <FaGithub size={38} color="#24292e" />, label: "GitHub" }
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

export default function Skills() {
  return (
    <Box sx={{ bgcolor: "background.default", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="md">
        <Typography
          variant="h3"
          align="center"
          sx={{ fontWeight: 800, mb: 4, color: "#eb144c", letterSpacing: 2 }}
        >
          My Tech Stack
        </Typography>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={4} justifyContent="center">
            {skills.map((skill, idx) => (
              <Grid item xs={6} sm={4} md={3} key={skill.label}>
                <motion.div variants={item}>
                  <Paper
                    elevation={4}
                    sx={{
                      p: 3,
                      borderRadius: 5,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 1.5,
                      bgcolor: "#23263a",
                      transition: "transform 0.2s, box-shadow 0.2s",
                      "&:hover": {
                        transform: "scale(1.09)",
                        boxShadow: "0 4px 18px #eb144c55"
                      }
                    }}
                  >
                    {skill.icon}
                    <Typography variant="subtitle1" sx={{ color: "#b0b4c1", fontWeight: 700 }}>
                      {skill.label}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
        <Box sx={{ mt: 6, textAlign: "center" }}>
          <Chip
            label="Always learning and building with new tools!"
            color="secondary"
            sx={{
              fontWeight: 600,
              fontSize: "1.09rem",
              px: 2.5,
              py: 2,
              bgcolor: "#181c27",
              color: "#8ED1FC",
              borderRadius: 2,
              mt: 2
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
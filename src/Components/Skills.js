import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Chip,
  Container,
  LinearProgress,
  Stack,
  Divider
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaGitAlt
} from "react-icons/fa";
import {
  SiMongodb, SiExpress, SiBootstrap, SiRedux, SiDjango, SiTypescript, SiNextdotjs
} from "react-icons/si";

const skillGroups = [
  {
    label: "Frontend",
    skills: [
      {
        icon: <FaReact size={36} color="#61dafb" />,
        label: "React",
        level: 90,
        gradient: "linear-gradient(135deg, #23263a 60%, #61dafb 100%)"
      },
      {
        icon: <SiNextdotjs size={36} color="#fff" />,
        label: "Next.js",
        level: 70,
        gradient: "linear-gradient(135deg, #23263a 60%, #000 100%)",
        learning: true
      },
      {
        icon: <FaJs size={36} color="#f7df1e" />,
        label: "JavaScript",
        level: 95,
        gradient: "linear-gradient(135deg, #23263a 60%, #f7df1e 100%)"
      },
      {
        icon: <SiTypescript size={36} color="#3178c6" />,
        label: "TypeScript",
        level: 60,
        gradient: "linear-gradient(135deg, #23263a 60%, #3178c6 100%)",
        learning: true
      },
      {
        icon: <FaHtml5 size={36} color="#e44d26" />,
        label: "HTML5",
        level: 90,
        gradient: "linear-gradient(135deg, #23263a 60%, #e44d26 100%)"
      },
      {
        icon: <FaCss3Alt size={36} color="#1572b6" />,
        label: "CSS3",
        level: 85,
        gradient: "linear-gradient(135deg, #23263a 60%, #1572b6 100%)"
      },
      {
        icon: <SiBootstrap size={36} color="#563d7c" />,
        label: "Bootstrap",
        level: 80,
        gradient: "linear-gradient(135deg, #23263a 60%, #563d7c 100%)"
      },
      {
        icon: <SiRedux size={36} color="#764abc" />,
        label: "Redux",
        level: 75,
        gradient: "linear-gradient(135deg, #23263a 60%, #764abc 100%)"
      }
    ]
  },
  {
    label: "Backend",
    skills: [
      {
        icon: <FaNodeJs size={36} color="#3c873a" />,
        label: "Node.js",
        level: 80,
        gradient: "linear-gradient(135deg, #23263a 60%, #3c873a 100%)"
      },
      {
        icon: <SiExpress size={36} color="#000" />,
        label: "Express.js",
        level: 75,
        gradient: "linear-gradient(135deg, #23263a 60%, #000 100%)"
      },
      {
        icon: <SiMongodb size={36} color="#47a248" />,
        label: "MongoDB",
        level: 70,
        gradient: "linear-gradient(135deg, #23263a 60%, #47a248 100%)"
      },
      {
        icon: <FaPython size={36} color="#3776ab" />,
        label: "Python",
        level: 60,
        gradient: "linear-gradient(135deg, #23263a 60%, #3776ab 100%)"
      },
      {
        icon: <SiDjango size={36} color="#092e20" />,
        label: "Django",
        level: 55,
        gradient: "linear-gradient(135deg, #23263a 60%, #092e20 100%)"
      }
    ]
  },
  {
    label: "Tools",
    skills: [
      {
        icon: <FaGitAlt size={36} color="#f34f29" />,
        label: "Git",
        level: 85,
        gradient: "linear-gradient(135deg, #23263a 60%, #f34f29 100%)"
      },
      {
        icon: (
          <FaGithub
            size={36}
            color="#fff"
            style={{
              background: "#181c27",
              borderRadius: "50%",
              padding: 3,
              border: "2px solid #8ED1FC"
            }}
          />
        ),
        label: "GitHub",
        level: 90,
        gradient: "linear-gradient(135deg, #23263a 60%, #24292e 100%)"
      }
    ]
  }
];

// Framer Motion variants for entrance and hover
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15
    }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 60, scale: 0.92 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 80, damping: 15 } }
};

export default function Skills() {
  return (
    <Box sx={{ bgcolor: "background.default", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: 800,
            mb: 2,
            color: "#eb144c",
            letterSpacing: 2,
            textShadow: "0 4px 16px #eb144c22"
          }}
        >
          My Skills & Tech Stack
        </Typography>
        <Typography
          align="center"
          sx={{ color: "#b0b4c1", mb: 6, fontSize: "1.1rem" }}
        >
          Modern web development with a focus on clean code, performance, and great UX.<br />
          <span style={{ color: "#8ED1FC" }}>Always learning, always building.</span>
        </Typography>
        <AnimatePresence>
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.label}
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              exit="hidden"
              transition={{ staggerChildren: 0.18 }}
            >
              <Box sx={{ mt: idx === 0 ? 3 : 7, mb: 5 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    color: "#8ED1FC",
                    mb: 3,
                    letterSpacing: 1.5
                  }}
                >
                  {group.label}
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                  {group.skills.map((skill) => (
                    <Grid item xs={6} sm={4} md={3} key={skill.label}>
                      <motion.div
                        variants={cardVariant}
                        whileHover={{
                          scale: 1.08,
                          rotate: -3,
                          boxShadow: "0 12px 40px #8ED1FC99",
                          transition: { type: "spring", stiffness: 300 }
                        }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <Paper
                          elevation={6}
                          sx={{
                            p: 3,
                            borderRadius: 5,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 1.2,
                            background: skill.gradient,
                            boxShadow: "0 8px 32px #eb144c22",
                            minHeight: 170,
                            transition: "background 0.2s"
                          }}
                        >
                          <Stack direction="row" alignItems="center" spacing={1}>
                            {skill.icon}
                            {skill.learning && (
                              <Chip
                                label="Learning"
                                size="small"
                                sx={{
                                  bgcolor: "#181c27",
                                  color: "#eb144c",
                                  fontWeight: 700,
                                  fontSize: "0.72rem"
                                }}
                              />
                            )}
                          </Stack>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              color: "#fff",
                              fontWeight: 700,
                              mt: 0.7,
                              lineHeight: 1.2,
                              textShadow: "0 2px 6px #000a"
                            }}
                          >
                            {skill.label}
                          </Typography>
                          <LinearProgress
                            value={skill.level}
                            variant="determinate"
                            sx={{
                              width: "82%",
                              height: 7,
                              mt: 1.2,
                              borderRadius: 5,
                              bgcolor: "#23263a",
                              "& .MuiLinearProgress-bar": {
                                bgcolor: "#8ED1FC"
                              }
                            }}
                          />
                          <Typography
                            variant="caption"
                            sx={{
                              color: "#b0b4c1",
                              fontWeight: 500,
                              mt: 0.5
                            }}
                          >
                            Proficiency: {skill.level}%
                          </Typography>
                        </Paper>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </motion.div>
          ))}
        </AnimatePresence>
        <Divider sx={{ mt: 8, mb: 3, bgcolor: "#eb144c55" }} />
        <Box sx={{ textAlign: "center" }}>
          <Chip
            label="🧑‍💻 Always exploring new frameworks, tools, & best practices!"
            color="secondary"
            sx={{
              fontWeight: 600,
              fontSize: "1.06rem",
              px: 2.5,
              py: 2,
              bgcolor: "#181c27",
              color: "#8ED1FC",
              borderRadius: 2,
              mt: 1
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
import React from "react";
import { Box, Typography, Button, Stack, Container } from "@mui/material";
import { motion } from "framer-motion";
import { FaArrowDown, FaGithub } from "react-icons/fa";

const MotionBox = motion(Box);

export default function HeroSection() {
  return (
    <Box sx={{
      minHeight: "70vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      bgcolor: "background.default",
      py: 10,
      position: "relative",
      overflow: "hidden"
    }}>
      <Container maxWidth="md">
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 800 }}>
            Faisal Ahmad Bhat
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#8ED1FC",
              fontWeight: 600,
              mb: 2,
              letterSpacing: 2
            }}
          >
            Creative Developer & Problem Solver
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
            I build robust, delightful web apps and love exploring new technologies, side projects, and open-source. Let’s create something awesome together!
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ borderRadius: 3, fontWeight: 700, px: 4 }}
              href="/resume.pdf"
              target="_blank"
            >
              Resume
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              sx={{ borderRadius: 3, fontWeight: 700, px: 4 }}
              href="mailto:your@email.com"
            >
              Contact
            </Button>
            <Button
              variant="text"
              color="inherit"
              size="large"
              sx={{ borderRadius: 3, px: 3 }}
              href="https://github.com/fab-c14"
              target="_blank"
              startIcon={<FaGithub />}
            >
              GitHub
            </Button>
          </Stack>
        </MotionBox>
        <MotionBox
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 32,
            display: "flex",
            justifyContent: "center"
          }}
        >
          <FaArrowDown size={32} style={{ color: "#eb144c" }} />
        </MotionBox>
      </Container>
    </Box>
  );
}
import React from "react";
import { Box, Typography, Stack, IconButton, Container, Divider } from "@mui/material";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    url: "https://github.com/fab-c14",
    label: "GitHub"
  },
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/faisal-ahmad-bhat-aaba29229",
    label: "LinkedIn"
  },
  {
    icon: <FaTwitter />,
    url: "https://twitter.com/your_handle",
    label: "Twitter"
  }
];

const iconVariants = {
  initial: { scale: 1, color: "#8ED1FC" },
  hover: (i) => ({
    scale: 1.2,
    color: "#eb144c",
    rotate: i % 2 === 0 ? -12 : 12,
    transition: { type: "spring", stiffness: 400 }
  })
};

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "#181c27", pt: 7, pb: 3, mt: 8 }}>
      <Container maxWidth="md">
        <Divider sx={{ mb: 4, bgcolor: "#eb144c55" }} />
        <Stack direction="row" justifyContent="center" spacing={4} mb={1}>
          {socials.map((s, idx) => (
            <motion.div
              key={s.label}
              custom={idx}
              variants={iconVariants}
              initial="initial"
              whileHover="hover"
              style={{ display: "inline-block" }}
            >
              <IconButton
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                sx={{
                  fontSize: 32,
                  color: "#8ED1FC",
                  transition: "color 0.2s",
                  mx: 1
                }}
              >
                {s.icon}
              </IconButton>
            </motion.div>
          ))}
        </Stack>
        <Typography
          align="center"
          variant="body2"
          sx={{
            color: "#b0b8d9",
            fontWeight: 500,
            letterSpacing: 1,
            fontSize: "1.1rem",
            userSelect: "none",
            mt: 1.5
          }}
        >
          &copy; {new Date().getFullYear()} Faisal Ahmad Bhat. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
import React from "react";
import { Box, Typography, Container, Stack, IconButton, Tooltip } from "@mui/material";
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  {
    name: "GitHub",
    icon: <FaGithub size={22} color="#fff" />,
    url: "https://github.com/fab-c14",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={22} color="#fff" />,
    url: "https://linkedin.com/in/fab-c14",
  },
  {
    name: "Twitter",
    icon: <FaTwitter size={22} color="#fff" />,
    url: "https://twitter.com/fab14c",
  },
  {
    name: "Email",
    icon: <FaEnvelope size={22} color="#fff" />,
    url: "mailto:your@email.com",
  },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#181c27",
        py: 4,
        mt: 10,
        borderTop: "1.5px solid #23263a",
        boxShadow: "0 -8px 24px 0 #eb144c11",
      }}
    >
      <Container maxWidth="md">
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 1 }}>
          {socialLinks.map((link) => (
            <Tooltip title={link.name} key={link.name}>
              <IconButton
                component="a"
                href={link.url}
                target="_blank"
                rel="noopener"
                sx={{
                  bgcolor: "#23263a",
                  color: "#8ED1FC",
                  borderRadius: "50%",
                  transition: "all 0.2s",
                  "&:hover": {
                    bgcolor: "#eb144c",
                    color: "#fff",
                    transform: "scale(1.13) rotate(-10deg)",
                  },
                  m: 0.5,
                }}
              >
                {link.icon}
              </IconButton>
            </Tooltip>
          ))}
        </Stack>
        <Typography
          variant="body2"
          align="center"
          sx={{
            color: "#b0b4c1",
            fontFamily: "'Fira Mono', monospace",
            letterSpacing: 1,
            fontSize: "1rem",
          }}
        >
          © {new Date().getFullYear()} Faisal Ahmad &mdash; Built with ❤️ using React & Material UI
        </Typography>
      </Container>
    </Box>
  );
}
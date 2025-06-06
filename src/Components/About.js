import React from "react";
import { Box, Typography, Stack, Paper, Chip, Button, Container, Divider, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const highlights = [
  "React & Next.js",
  "Node.js & MongoDB",
  "Material UI",
  "Open-source & collaboration"
];

export default function About() {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "background.default" }}>
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <Paper elevation={3} sx={{ p: { xs: 3, md: 5 }, borderRadius: 6, bgcolor: "#101012", mb: 2 }}>
            <Stack direction={{ xs: "column", md: "row" }} spacing={5} alignItems="center">
              <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Avatar
                  src="/back.png"
                  alt="Faisal Ahmad"
                  sx={{
                    width: 150,
                    height: 150,
                    bgcolor: "#eb144c22",
                    boxShadow: "0 4px 32px #eb144c33, 0 2px 8px #0004",
                    border: "4px solid #eb144c"
                  }}
                />
              </Box>
              <Box sx={{ flex: 3 }}>
                <Typography
                  variant="h3"
                  sx={{
                    color: "#eb144c",
                    fontWeight: 800,
                    mb: 2,
                    letterSpacing: 2
                  }}
                >
                  About Me
                </Typography>
                <Typography variant="body1" sx={{ color: "#b0b4c1", mb: 2, fontSize: "1.15rem" }}>
                  I'm Faisal, a web developer focused on building clean and modern apps with React, Next.js, Node.js, and MongoDB. I like simple design, open-source, and creative projects.
                </Typography>
                <Divider sx={{ my: 2, bgcolor: "#eb144c55" }} />
                <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    endIcon={<FaArrowRight />}
                    href="/resume.pdf"
                    target="_blank"
                    sx={{ borderRadius: 3, fontWeight: 700 }}
                  >
                    View Resume
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    href="mailto:your@email.com"
                    sx={{ borderRadius: 3, fontWeight: 700 }}
                  >
                    Contact Me
                  </Button>
                </Stack>
                <Box sx={{ mt: 3 }}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "#8ED1FC",
                      fontWeight: 600,
                      mb: 1.5,
                      letterSpacing: 1
                    }}
                  >
                    Highlights
                  </Typography>
                  <Stack spacing={1}>
                    {highlights.map((item) => (
                      <Chip
                        key={item}
                        label={item}
                        sx={{
                          bgcolor: "#181c27",
                          color: "#eb144c",
                          fontWeight: 600,
                          fontSize: "1.04rem",
                          px: 2.5,
                          py: 1.2,
                          borderRadius: 2,
                          textAlign: "left"
                        }}
                      />
                    ))}
                  </Stack>
                </Box>
              </Box>
            </Stack>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
}
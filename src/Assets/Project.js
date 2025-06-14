import React from "react";
import { Box, Typography, Chip, Button } from "@mui/material";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Project({ project }) {
  return (
    <Box
      sx={{
        bgcolor: "#101012",
        borderRadius: 4,
        boxShadow: "0 8px 40px 0 rgba(235,20,76,0.12), 0 2px 8px #000a",
        display: "flex",
        flexDirection: "column",
        height: 430,
        width: "100%",
        transition: "box-shadow 0.2s, transform 0.2s",
        "&:hover": { transform: "scale(1.025) translateY(-4px)" },
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: 160,
          borderRadius: "16px 16px 0 0",
          overflow: "hidden",
          background: "#181c27",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={project.image}
          alt={project.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
          loading="lazy"
        />
      </Box>
      <Box
        sx={{
          p: 3,
          display: "flex",
          flexDirection: "column",
          flex: 1,
          minHeight: 0,
        }}
      >
        {/* Title with line clamp */}
        <Typography
          variant="h6"
          fontWeight={800}
          color="#fff"
          gutterBottom
          sx={{
            mb: 1,
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            minHeight: "48px",
            maxHeight: "48px",
          }}
        >
          {project.name}
        </Typography>
        {/* Description with line clamp */}
        <Typography
          variant="body2"
          color="#b0b8d9"
          sx={{
            mb: 2,
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            minHeight: "54px",
            maxHeight: "54px",
          }}
        >
          {project.desc}
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 1 }}>
          {project.skills.map((skill) => (
            <Chip
              key={skill}
              label={skill}
              size="small"
              sx={{
                bgcolor: "#181c27",
                color: "#8ED1FC",
                fontWeight: 700,
                fontFamily: "Fira Mono, monospace",
                fontSize: "0.92rem",
              }}
            />
          ))}
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
          {project.tags.map((tag) => (
            <Chip
              key={tag}
              label={`#${tag}`}
              size="small"
              sx={{
                bgcolor: "#eb144c22",
                color: "#eb144c",
                fontWeight: 700,
                fontFamily: "Fira Mono, monospace",
                fontSize: "0.89rem",
              }}
            />
          ))}
        </Box>
        <Box
          sx={{
            mt: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ color: "#8ED1FC", fontSize: "0.96em" }}>
            {project.date}
          </Typography>
          <Box>
            {project.liveLink && (
              <Button
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                size="small"
                sx={{
                  bgcolor: "#eb144c",
                  color: "#fff",
                  minWidth: 0,
                  px: 1.5,
                  mr: 1,
                  fontWeight: 700,
                  textTransform: "none",
                  borderRadius: 2,
                  boxShadow: "none",
                }}
                startIcon={<FaExternalLinkAlt size={16} />}
              >
                Live
              </Button>
            )}
            {project.sourceCode && (
              <Button
                href={project.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                size="small"
                sx={{
                  borderColor: "#8ED1FC",
                  color: "#8ED1FC",
                  minWidth: 0,
                  px: 1.5,
                  fontWeight: 700,
                  textTransform: "none",
                  borderRadius: 2,
                  ml: project.liveLink ? 0 : 1,
                }}
                startIcon={<FaGithub size={16} />}
              >
                Code
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
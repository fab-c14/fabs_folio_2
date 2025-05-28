import React from "react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, type: "spring" }}
      style={{
        width: "96vw",
        maxWidth: 1300,
        margin: "2.2rem auto 1.8rem auto",
        borderRadius: "2.4rem",
        background: "rgba(35,38,58,0.82)",
        boxShadow: "0 8px 32px #eb144c44, 0 1.5px 12px #8ED1FC22",
        border: "1.5px solid #eb144c33",
        position: "relative",
        zIndex: 10,
        backdropFilter: "blur(12px)",
      }}
    >
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1.45rem 3vw",
          gap: "1.5rem",
          flexWrap: "wrap"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
          <span
            style={{
              fontWeight: 900,
              fontSize: "2.25rem",
              color: "#eb144c",
              letterSpacing: "2px",
              textShadow: "0 2px 8px #eb144c40, 0 1px 0 #23263a",
              background:
                "linear-gradient(90deg, #eb144c 20%, #8ED1FC 80%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
              lineHeight: "1"
            }}
          >
            Faisal Bhat
          </span>
          <span
            style={{
              display: "inline-block",
              width: 42,
              height: 6,
              borderRadius: 8,
              background: "linear-gradient(90deg, #eb144c, #8ED1FC)",
              marginLeft: 10,
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            gap: "2.1rem",
            alignItems: "center",
            flexWrap: "wrap"
          }}
        >
          <a
            href="#about"
            style={navLinkStyle}
          >
            About
          </a>
          <a
            href="#skills"
            style={navLinkStyle}
          >
            Skills
          </a>
          <a
            href="#works"
            style={navLinkStyle}
          >
            Works
          </a>
          <a
            href="#footer"
            style={navLinkStyle}
          >
            Contact
          </a>
        </div>
      </nav>
    </motion.header>
  );
}

const navLinkStyle = {
  color: "#e2e7fa",
  fontWeight: 600,
  fontSize: "1.08rem",
  letterSpacing: "0.5px",
  textDecoration: "none",
  position: "relative",
  transition: "color 0.19s",
  padding: "0.2rem 0.2rem",
  borderRadius: "7px",
  lineHeight: 1.3,
  background: "transparent"
};
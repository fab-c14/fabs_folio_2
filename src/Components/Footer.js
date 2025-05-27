import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

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

export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        padding: "2.2rem 0 1.2rem 0",
        background: "linear-gradient(90deg, #23263a, #181c27 50%, #eb144c22 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        marginTop: "4rem",
        boxShadow: "0 -2px 18px #eb144c33",
        position: "relative",
        zIndex: 2
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ display: "flex", gap: "1.6rem", marginBottom: "1rem" }}
      >
        {socials.map((s, idx) => (
          <motion.a
            key={idx}
            href={s.url}
            aria-label={s.label}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.17,
              color: "#eb144c",
              rotate: idx % 2 === 0 ? -9 : 9
            }}
            style={{
              color: "#8ED1FC",
              fontSize: "2rem",
              transition: "color 0.3s, transform 0.21s",
              display: "inline-block"
            }}
          >
            {s.icon}
          </motion.a>
        ))}
      </motion.div>
      <div
        style={{
          color: "#b0b8d9",
          fontSize: "1.05rem",
          fontWeight: 500,
          letterSpacing: "1px",
          textAlign: "center",
          userSelect: "none"
        }}
      >
        &copy; {new Date().getFullYear()} Faisal Ahmad Bhat. All rights reserved.
      </div>
    </footer>
  );
}
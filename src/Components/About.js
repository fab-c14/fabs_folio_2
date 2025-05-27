import React from "react";
import { motion } from "framer-motion";
import sample_resume from "../Assets/fabs_resume_latest.pdf";
import back from "../Assets/back.png";

export default function About() {
  return (
    <section
      id="about"
      style={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle at 65% 40%, #eb144c22 0%, #23263a 100%)",
        position: "relative",
        zIndex: 1,
        overflow: "hidden",
      }}
    >
      {/* Animated background glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1.3 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          left: "60%",
          top: "10%",
          pointerEvents: "none",
          zIndex: 0,
          background: "radial-gradient(circle, #eb144c88 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: "rgba(35,38,58,0.88)",
          boxShadow: "0 8px 42px 0 #eb144c44, 0 2px 8px #0004",
          borderRadius: "38px",
          maxWidth: 1200,
          width: "94vw",
          minHeight: 450,
          padding: "3.5rem 3vw",
          display: "flex",
          gap: "3.5rem",
          alignItems: "center",
          flexWrap: "wrap",
          backdropFilter: "blur(12px)",
          border: "1.5px solid #eb144c44",
          zIndex: 1,
        }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{
            flex: "0 0 320px",
            minWidth: 220,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 1,
          }}
        >
          <img
            src={back}
            alt="Faisal Ahmad Bhat"
            style={{
              width: 220,
              height: 220,
              objectFit: "cover",
              borderRadius: "50%",
              border: "5px solid #eb144c",
              boxShadow: "0 4px 32px #eb144c55, 0 2px 8px #0006",
              marginBottom: "2rem",
              background: "#181c27",
            }}
          />
          <a
            href={sample_resume}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "1rem 2.7rem",
              background: "linear-gradient(90deg, #eb144c 30%, #8ED1FC 100%)",
              color: "#fff",
              borderRadius: "28px",
              fontWeight: "600",
              fontSize: "1.15rem",
              letterSpacing: "1.2px",
              textDecoration: "none",
              boxShadow: "0 2px 12px #eb144c44",
              marginTop: "0.5rem",
              transition: "transform 0.18s, box-shadow 0.18s",
              border: "none",
              outline: "none",
              cursor: "pointer",
            }}
            onMouseOver={e => {
              e.currentTarget.style.transform = "scale(1.07)";
              e.currentTarget.style.boxShadow = "0 4px 22px #eb144c99";
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 2px 12px #eb144c44";
            }}
          >
            Resume
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.9 }}
          style={{ flex: "1 1 420px", zIndex: 1 }}
        >
          <h2 style={{
            color: "#eb144c",
            fontWeight: 800,
            fontSize: "2.45rem",
            marginBottom: "1.3rem",
            letterSpacing: "2px",
            textShadow: "0 2px 8px #eb144c66"
          }}>
            About Me
          </h2>
          <p style={{
            color: "#e2e7fa",
            fontSize: "1.35rem",
            lineHeight: 1.8,
            marginBottom: "1.2rem",
            fontFamily: "Poppins, Roboto, Arial, sans-serif",
            textShadow: "0 1px 6px #0003"
          }}>
            Hi! I'm <span style={{ color: "#8ED1FC", fontWeight: 700 }}>Faisal Ahmad Bhat</span>, a passionate, self-taught Full Stack Developer
            from Kashmir, India. I turn ideas into reality through code and creativity.
          </p>
          <p style={{
            color: "#b0b8d9",
            fontSize: "1.13rem",
            marginBottom: "1.2rem",
            fontWeight: 500
          }}>
            I specialize in building robust web applications with delightful user experiences. I thrive on learning new technologies, building side projects, and collaborating with creative minds. My work is driven by curiosity and a love for clean, maintainable code.
          </p>
          <ul style={{
            color: "#8ED1FC",
            marginTop: "1.4rem",
            paddingLeft: "1.4rem",
            fontSize: "1.08rem",
            fontWeight: 600,
            listStyle: "'✨ '",
            textShadow: "0 1px 6px #0002"
          }}>
            <li>Always exploring new stacks & tools</li>
            <li>Passionate about web, AI, and open-source</li>
            <li>Open for collaboration & freelance work</li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
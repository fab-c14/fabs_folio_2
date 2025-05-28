import React from "react";
import "./Project.css";

const projects = [
  {
    name: "FLAME",
    desc: "Foundation for Learning Assistance and Management Environment. A robust educational platform built with the MERN stack.",
    sourceCode: "https://github.com/fab-c14/FLAME",
    liveLink: "",
    date: "2025-05-04",
    skills: ["React", "Node", "Express", "MongoDB"],
    tags: ["Education", "Fullstack", "MERN"],
    image: "https://picsum.photos/370/160?random=24"
  },
  {
    name: "tic-tac-toe",
    desc: "A simple and fun tic-tac-toe game built with React JS. Play and challenge your logic!",
    sourceCode: "https://github.com/fab-c14/tic-tac-toe",
    liveLink: "",
    date: "2024-09-02",
    skills: ["React", "JavaScript"],
    tags: ["Game", "Frontend"],
    image: "https://picsum.photos/370/160?random=25"
  },
  {
    name: "RatherHoney",
    desc: "E-commerce site for selling honey online. Modern, responsive, and easy to use.",
    sourceCode: "https://github.com/fab-c14/RatherHoney",
    liveLink: "https://rather-honey.vercel.app",
    date: "2025-01-29",
    skills: ["JavaScript"],
    tags: ["E-commerce", "Frontend"],
    image: "https://picsum.photos/370/160?random=26"
  },
  {
    name: "FabsBlog",
    desc: "My personal blog application where I share thoughts and tutorials. Built with JavaScript.",
    sourceCode: "https://github.com/fab-c14/FabsBlog",
    liveLink: "",
    date: "2025-01-06",
    skills: ["JavaScript"],
    tags: ["Blog", "Frontend"],
    image: "https://picsum.photos/370/160?random=27"
  }
];

const Project = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div className="project-card" key={project.name}>
            <img className="project-img" src={project.image} alt={project.name} />
            <div className="project-body">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="project-skills">
                {project.skills.map(skill => (
                  <span className="project-skill" key={skill}>{skill}</span>
                ))}
              </div>
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span className="project-tag" key={tag}>#{tag}</span>
                ))}
              </div>
              <div className="project-footer">
                <span className="project-date">{project.date}</span>
                <div className="project-links">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn project-btn-live"
                    >
                      Live
                    </a>
                  )}
                  {project.sourceCode && (
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn project-btn-code"
                    >
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
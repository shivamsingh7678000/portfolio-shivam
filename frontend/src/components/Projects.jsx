import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiGithub, FiExternalLink, FiStar } from "react-icons/fi";
import { projects } from "../data/portfolioData";
import "./Projects.css";

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="projects" className="section projects">
      <div className="container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
          <h2 className="section-title">PROJECTS</h2>
          <p className="section-subtitle">Things I've built</p>
        </motion.div>

        {/* Featured Projects */}
        <div className="projects__featured">
          {projects
            .filter((p) => p.featured)
            .map((p, i) => (
              <motion.div
                key={p.name}
                className="projects__featured-card card"
                style={{ "--project-color": p.color }}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15 }}
              >
                <div className="projects__card-top">
                  <div className="projects__card-icon">{p.icon}</div>
                  <div className="projects__card-links">
                    <a href={p.github} target="_blank" rel="noreferrer" className="btn btn-outline projects__icon-btn">
                      <FiGithub size={18} />
                    </a>
                    <a href={p.github} target="_blank" rel="noreferrer" className="btn btn-outline projects__icon-btn">
                      <FiExternalLink size={18} />
                    </a>
                  </div>
                </div>

                <div className="badge projects__featured-badge">FEATURED</div>

                <h3 className="projects__card-name">{p.name.toUpperCase()}</h3>
                <p className="projects__card-year">{p.year}</p>
                <p className="projects__card-desc">{p.description}</p>

                <div className="projects__tech">
                  {p.techStack.map((t) => (
                    <span key={t} className="badge projects__tech-tag">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
        </div>

        {/* Other Projects */}
        <motion.h3
          className="projects__other-title"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          MORE WORK
        </motion.h3>

        <div className="projects__others">
          {projects
            .filter((p) => !p.featured)
            .map((p, i) => (
              <motion.div
                key={p.name}
                className="projects__other-card card"
                style={{ "--project-color": p.color }}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <div className="projects__other-top">
                  <span className="projects__other-icon">{p.icon}</span>
                  <a href={p.github} target="_blank" rel="noreferrer" className="btn btn-outline projects__icon-btn">
                    <FiGithub size={16} />
                  </a>
                </div>
                <h4 className="projects__other-name">{p.name.toUpperCase()}</h4>
                <p className="projects__other-desc">{p.description}</p>
                <div className="projects__tech" style={{ marginTop: "auto" }}>
                  {p.techStack.map((t) => (
                    <span key={t} className="badge projects__tech-tag">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          className="projects__cta"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <a
            href="https://github.com/shivamsingh7678000"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            VIEW ALL GITHUB REPOS
          </a>
        </motion.div>
      </div>
    </section>
  );
}

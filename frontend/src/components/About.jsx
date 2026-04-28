import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { personal, education, stats } from "../data/portfolioData";
import "./About.css";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
};

function AnimatedCount({ end, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    const startTime = performance.now();
    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration]);

  return <>{count}{suffix}</>;
}

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" className="section about">
      <div className="container" ref={ref}>
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="about__header"
        >
          <h2 className="section-title">ABOUT ME</h2>
          <p className="section-subtitle">
            Turning caffeine into code since 2023.
          </p>
        </motion.div>

        <div className="about__grid">
          {/* Left — Bio */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            transition={{ delay: 0.1 }}
            className="about__bio card"
          >
            <div className="about__bio-top">
              <div className="about__bio-avatar">SS</div>
              <div>
                <h3 className="about__bio-name">{personal.name.toUpperCase()}</h3>
                <p className="about__bio-role">{personal.title}</p>
              </div>
            </div>

            <p className="about__bio-text">{personal.summary}</p>

            <div className="about__bio-links">
              <a href={personal.github} target="_blank" rel="noreferrer" className="btn btn-outline">
                <FiGithub size={18} /> GITHUB
              </a>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline">
                <FiLinkedin size={18} /> LINKEDIN
              </a>
            </div>
          </motion.div>

          {/* Right — Education + Stats */}
          <div className="about__right">
            {/* Stats */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              transition={{ delay: 0.2 }}
              className="about__stats"
            >
              {stats.map((s, i) => (
                <div key={s.label} className="about__stat-card card">
                  <span className="about__stat-icon">{s.icon}</span>
                  <span className="about__stat-val">
                    {inView ? (
                      <AnimatedCount end={s.value} suffix={s.suffix} duration={2000} />
                    ) : (
                      `0${s.suffix}`
                    )}
                  </span>
                  <span className="about__stat-label">{s.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Education */}
            <motion.div
              className="card about__edu-card"
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              transition={{ delay: 0.3 }}
            >
              <h3 className="about__edu-title">EDUCATION</h3>
              <div className="about__edu-list">
                {education.map((edu, i) => (
                  <div key={i} className="about__edu-item">
                    <div className="about__edu-meta">
                      <span className="badge">{edu.period}</span>
                      {edu.current && <span className="badge" style={{background: 'var(--accent-primary)', color: 'black'}}>CURRENT</span>}
                    </div>
                    <p className="about__edu-degree">{edu.degree}</p>
                    <p className="about__edu-inst">{edu.institution}</p>
                    {(edu.cgpa || edu.percentage) && (
                      <p className="about__edu-score">Score: {edu.cgpa || edu.percentage}</p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

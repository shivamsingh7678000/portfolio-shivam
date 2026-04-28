import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { certifications, achievements } from "../data/portfolioData";
import "./Achievements.css";

export default function Achievements() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="achievements" className="section achievements">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
          <h2 className="section-title">RECOGNITION</h2>
          <p className="section-subtitle">Certifications & Honors</p>
        </motion.div>

        <div className="ach__grid">
          {/* Certifications */}
          <div>
            <h3 className="ach__section-title">CERTIFICATIONS</h3>
            <div className="ach__cert-list">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  className="ach__cert-card card"
                  style={{ "--cert-color": cert.color }}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="ach__cert-icon">{cert.icon}</div>
                  <div>
                    <p className="ach__cert-name">{cert.name.toUpperCase()}</p>
                    <p className="ach__cert-issuer">{cert.issuer}</p>
                  </div>
                  <div className="ach__cert-badge">✓</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Honors & Stats */}
          <div>
            <h3 className="ach__section-title">HONORS</h3>
            <div className="ach__honors-list">
              {achievements.map((ach, i) => (
                <motion.div
                  key={ach.title}
                  className="ach__honor-card card"
                  style={{ "--honor-color": ach.color }}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className="ach__honor-icon">{ach.icon}</span>
                  <div>
                    <h4 className="ach__honor-title">{ach.title.toUpperCase()}</h4>
                    <p className="ach__honor-sub">{ach.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* LeetCode strip */}
            <motion.div
              className="ach__leetcode card"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <div className="ach__leetcode-left">
                <span className="ach__leetcode-icon">💻</span>
                <div>
                  <p className="ach__leetcode-title">COMPETITIVE PROGRAMMING</p>
                  <p className="ach__leetcode-sub">LeetCode & GFG</p>
                </div>
              </div>
              <div className="ach__leetcode-stat">
                <span className="ach__leetcode-count">400+</span>
                <span className="ach__leetcode-label">SOLVED</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

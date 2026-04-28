import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experience } from "../data/portfolioData";
import "./Experience.css";

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="experience" className="section experience">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
          <h2 className="section-title">EXPERIENCE</h2>
          <p className="section-subtitle">Where I've worked and what I've done</p>
        </motion.div>

        <div className="exp__timeline">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              className="exp__item"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.2 }}
            >
              {/* Timeline graphic */}
              <div className="exp__graphic">
                <div className="exp__dot" style={{ background: exp.color || "var(--text-primary)" }} />
                {i !== experience.length - 1 && <div className="exp__line" />}
              </div>

              {/* Content Card */}
              <div className="exp__content card" style={{ "--exp-color": exp.color }}>
                <div className="exp__header">
                  <div>
                    <h3 className="exp__role">{exp.role.toUpperCase()}</h3>
                    <p className="exp__company">{exp.company}</p>
                  </div>
                  <div className="badge exp__period">{exp.period}</div>
                </div>

                <ul className="exp__desc">
                  {(exp.highlights || exp.description || []).map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>

                <div className="exp__tech">
                  {(exp.techStack || []).map((t) => (
                    <span key={t} className="badge exp__tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

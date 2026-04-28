import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FiArrowDownRight } from "react-icons/fi";
import { personal } from "../data/portfolioData";
import "./Hero.css";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
  };

  return (
    <section id="hero" className="hero">
      <div className="container">
        <motion.div
          className="hero__content"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className="hero__top-meta">
            <div className="hero__status-indicator" />
            <span className="hero__status-text">OPEN FOR INTERNSHIPS</span>
          </motion.div>

          <motion.h1 variants={item} className="hero__name">
            {personal.name.toUpperCase()}
          </motion.h1>

          <motion.h2 variants={item} className="hero__role">
            DATA ENGINEER &<br />FULL STACK DEV.
          </motion.h2>

          <motion.p variants={item} className="hero__summary">
            {personal.summary}
          </motion.p>

          <motion.div variants={item} className="hero__actions">
            <Link to="projects" smooth duration={600} offset={-80}>
              <button className="btn btn-primary hero__btn">
                VIEW PROJECTS <FiArrowDownRight size={20} />
              </button>
            </Link>
            <a
              href="https://drive.google.com/file/d/your-resume-link/view"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline hero__btn"
            >
              RESUME
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Brutalist Marquee */}
      <motion.div 
        className="hero__marquee-container"
        initial={{ opacity: 0, rotate: -2 }}
        animate={{ opacity: 1, rotate: -2 }}
        transition={{ delay: 0.6 }}
      >
        <div className="hero__marquee">
          <div className="hero__marquee-inner">
            {[...Array(4)].map((_, i) => (
              <span key={i}>
                DATA SCIENCE <span className="hero__marquee-star">*</span> MACHINE LEARNING <span className="hero__marquee-star">*</span> FULL STACK <span className="hero__marquee-star">*</span> PYTHON <span className="hero__marquee-star">*</span> REACT <span className="hero__marquee-star">*</span>
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

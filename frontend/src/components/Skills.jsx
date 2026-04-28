import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skillCategories } from "../data/portfolioData";
import "./Skills.css";

// Flatten categories into a list of skills for the brutalist layout
const skills = skillCategories.flatMap((cat) =>
  cat.items.map((item) => ({
    name: item,
    category: cat.label,
    color: cat.color,
    icon: "✦", // default brutalist icon
  }))
);

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...new Set(skills.map((s) => s.category))];

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="section skills">
      <div className="container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="skills__header"
        >
          <h2 className="section-title">SKILLS</h2>
          <p className="section-subtitle">
            My tech stack and tools
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="skills__filters"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className={`skills__filter-btn ${
                activeCategory === cat ? "active" : ""
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="skills__grid">
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="skills__card card"
                style={{ "--skill-color": skill.color }}
              >
                <div className="skills__card-icon">{skill.icon}</div>
                <h3 className="skills__card-name">{skill.name}</h3>
                <span className="badge skills__card-level">{skill.level}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

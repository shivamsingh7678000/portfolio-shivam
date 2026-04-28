const express = require("express");
const router = express.Router();
const portfolioData = require("../data/portfolio");

// GET /api/portfolio - full portfolio data
router.get("/", (req, res) => {
  res.json({
    success: true,
    data: portfolioData,
  });
});

// GET /api/portfolio/personal
router.get("/personal", (req, res) => {
  res.json({ success: true, data: portfolioData.personal });
});

// GET /api/portfolio/skills
router.get("/skills", (req, res) => {
  res.json({ success: true, data: portfolioData.skills });
});

// GET /api/portfolio/projects
router.get("/projects", (req, res) => {
  res.json({ success: true, data: portfolioData.projects });
});

// GET /api/portfolio/experience
router.get("/experience", (req, res) => {
  res.json({ success: true, data: portfolioData.experience });
});

// GET /api/portfolio/education
router.get("/education", (req, res) => {
  res.json({ success: true, data: portfolioData.education });
});

// GET /api/portfolio/achievements
router.get("/achievements", (req, res) => {
  res.json({
    success: true,
    data: {
      certifications: portfolioData.certifications,
      achievements: portfolioData.achievements,
      stats: portfolioData.stats,
    },
  });
});

// GET /api/portfolio/stats
router.get("/stats", (req, res) => {
  res.json({ success: true, data: portfolioData.stats });
});

module.exports = router;

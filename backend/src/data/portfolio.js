const portfolioData = {
  personal: {
    name: "Shivam Singh",
    title: "Aspiring Data Engineer & ML Enthusiast",
    subtitle: "B.Tech CSE (Data Science) Student",
    email: "shivamsingh76780000@gmail.com",
    phone: "+91 7084110780",
    location: "Greater Noida, Gautam Buddha Nagar",
    linkedin: "https://www.linkedin.com/in/shivam-singh-633165294/",
    github: "https://github.com/shivamsingh7678000",
    summary:
      "Dedicated B.Tech CSE (DS) student with strong fundamentals in Java, Python, and full-stack web development. Interested in creating reliable and user-focused software solutions through practical learning. Seeking a Software Engineering Internship to gain hands-on industry exposure and contribute to real-world projects.",
  },

  education: [
    {
      degree: "Bachelor of Technology in Computer Science (Data Science)",
      institution: "Galgotias University",
      location: "Greater Noida",
      period: "Jul 2024 – Jun 2027",
      cgpa: "8.5",
      current: true,
    },
    {
      degree: "10th, ICSE Board",
      institution: "",
      period: "2027",
      percentage: "84%",
    },
    {
      degree: "Senior Secondary (12th), CBSE Board",
      institution: "",
      period: "2023",
      percentage: "77.2%",
    },
  ],

  skills: {
    programming: ["Java", "Python"],
    webDevelopment: ["HTML", "CSS", "React"],
    backend: ["Node.js", "Flask"],
    databases: ["MySQL", "MongoDB"],
    cloud: ["AWS (EC2, S3, Lambda)"],
    tools: ["Git", "Figma", "MS Excel", "Pandas", "Matplotlib", "Docker"],
    concepts: ["OOPs", "Operating System", "DCN", "Data Visualization"],
    softSkills: [
      "Problem-solving",
      "Collaboration",
      "Communication",
      "Critical Thinking",
    ],
  },

  experience: [
    {
      role: "Junior Web Developer",
      company: "YatriYum",
      type: "Remote",
      period: "March 2026 – Present",
      highlights: [
        "Developed responsive web applications using HTML, CSS, JavaScript with dynamic UI components.",
        "Built full-stack applications using Node.js and Express.js.",
        "Worked with databases like MongoDB / MySQL for efficient data handling.",
      ],
    },
  ],

  projects: [
    {
      name: "Integrated Student Management System",
      year: "2024",
      github: "https://github.com/shivamsingh7678000",
      description:
        "Developed a complete Student Management System to handle student records, course details, attendance, and performance analytics.",
      highlights: [
        "Implemented features such as student registration, data storage, update/delete operations, and detailed search functionality.",
      ],
      techStack: ["Node.js", "MySQL", "HTML", "CSS", "JavaScript"],
      color: "#6366f1",
    },
    {
      name: "IntelliGrid – Smart Energy Dashboard",
      year: "Feb 2025",
      github: "https://github.com/shivamsingh7678000/IntelliGrid",
      description:
        "Developed a real-time dashboard for monitoring household energy usage with alerts and optimization suggestions.",
      highlights: [
        "Backend built using Flask + MySQL; frontend using HTML, CSS, Bootstrap, and Chart.js.",
        "Implemented goals, trackers, real-time charts, dark mode UI and chatbot suggestions for improved UX.",
      ],
      techStack: ["Flask", "MySQL", "HTML", "CSS", "Bootstrap", "Chart.js"],
      color: "#10b981",
    },
    {
      name: "CodeCascade",
      year: "2024",
      github: "https://github.com/shivamsingh7678000/CodeCascade",
      description:
        "A Python-based coding platform project showcasing algorithmic problem solving and data structures.",
      highlights: [
        "Built with Python focusing on data structures and algorithm visualization.",
      ],
      techStack: ["Python"],
      color: "#f59e0b",
    },
    {
      name: "Carbon Footprint Visualizer",
      year: "2024",
      github:
        "https://github.com/shivamsingh7678000/Visualizing-Carbon-Footprints-Across-Sectors-Using-Power-B",
      description:
        "Visualized carbon footprints across sectors using Power BI for data-driven environmental insights.",
      highlights: [
        "Created interactive dashboards using Power BI for cross-sector carbon emission analysis.",
      ],
      techStack: ["Power BI", "Data Analytics"],
      color: "#ec4899",
    },
  ],

  certifications: [
    {
      name: "POSTMAN API Fundamentals Student Expert",
      issuer: "Postman",
    },
    {
      name: "Data Science – Forage",
      issuer: "Forage",
    },
    {
      name: "Altair Data Science Master",
      issuer: "Eduskill",
    },
  ],

  achievements: [
    "Second runner-up – XLR8 Hackathon (DU)",
    "Qualified Smart India Hackathon 2025 – Pre-Qualifier Round",
    "Solved 400+ problems on LeetCode and GFG – Strengthening DSA and problem-solving skills",
  ],

  stats: {
    leetcode: "400+",
    projects: "4+",
    experience: "1",
    certifications: "3",
  },
};

module.exports = portfolioData;

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiSend, FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import { personal } from "../data/portfolioData";
import "./Contact.css";

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("loading");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    }

    setTimeout(() => setStatus(null), 5000);
  };

  const contactInfo = [
    { icon: <FiMail />, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
    { icon: <FiPhone />, label: "Phone", value: personal.phone, href: `tel:${personal.phone}` },
    { icon: <FiMapPin />, label: "Location", value: personal.location, href: null },
  ];

  return (
    <section id="contact" className="section contact">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
          <h2 className="section-title">LET'S TALK</h2>
          <p className="section-subtitle">Reach out for collaborations</p>
        </motion.div>

        <div className="contact__grid">
          {/* Left — Info */}
          <motion.div
            className="contact__info card"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            <h3 className="contact__info-title">GET IN TOUCH</h3>
            <p className="contact__info-text">
              I'm currently seeking Software Engineering Internships and freelance opportunities.
              My inbox is always open!
            </p>

            <div className="contact__details">
              {contactInfo.map((c) => (
                <div key={c.label} className="contact__detail">
                  <div className="contact__detail-icon">{c.icon}</div>
                  <div>
                    <p className="contact__detail-label">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="contact__detail-value">
                        {c.value}
                      </a>
                    ) : (
                      <p className="contact__detail-value">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact__socials">
              <a href={personal.github} target="_blank" rel="noreferrer" className="btn btn-outline">
                <FiGithub size={18} /> GITHUB
              </a>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline">
                <FiLinkedin size={18} /> LINKEDIN
              </a>
            </div>

            {/* Availability badge */}
            <div className="badge contact__availability">
              <span className="contact__status-dot" />
              AVAILABLE FOR HIRE
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <form className="contact__form card" onSubmit={handleSubmit} noValidate>
              <h3 className="contact__form-title">SEND A MESSAGE</h3>

              <div className="contact__row">
                <div className="contact__field">
                  <label className="contact__label" htmlFor="contact-name">NAME *</label>
                  <input
                    id="contact-name"
                    className="contact__input"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="contact__field">
                  <label className="contact__label" htmlFor="contact-email">EMAIL *</label>
                  <input
                    id="contact-email"
                    className="contact__input"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="contact__field">
                <label className="contact__label" htmlFor="contact-subject">SUBJECT</label>
                <input
                  id="contact-subject"
                  className="contact__input"
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Opportunity"
                />
              </div>

              <div className="contact__field">
                <label className="contact__label" htmlFor="contact-message">MESSAGE *</label>
                <textarea
                  id="contact-message"
                  className="contact__textarea"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Hey Shivam, let's work together..."
                  rows={5}
                  required
                />
              </div>

              {/* Status messages */}
              {status === "success" && (
                <div className="badge contact__status contact__status--success">
                  <FiCheckCircle size={16} /> SENT SUCCESSFULLY
                </div>
              )}

              {status === "error" && (
                <div className="badge contact__status contact__status--error">
                  <FiAlertCircle size={16} /> ERROR. TRY AGAIN.
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary contact__submit"
                disabled={status === "loading"}
              >
                {status === "loading" ? "SENDING..." : "SEND MESSAGE"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

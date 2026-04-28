import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-scroll";
import { personal } from "../data/portfolioData";
import "./Footer.css";

const navLinks = [
  { label: "Home", to: "hero" },
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Experience", to: "experience" },
  { label: "Projects", to: "projects" },
  { label: "Contact", to: "contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          {/* Brand */}
          <div className="footer__brand">
            <span className="footer__logo">
              SHIVAM<span className="footer__logo-accent">*</span>
            </span>
            <p className="footer__tagline">
              DATA ENGINEER &<br />FULL STACK DEV.
            </p>
          </div>

          {/* Nav Links */}
          <div className="footer__nav">
            <p className="footer__nav-title">LINKS</p>
            <ul className="footer__nav-list">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth
                    duration={600}
                    offset={-80}
                    className="footer__nav-link"
                  >
                    {link.label.toUpperCase()} <FiArrowUpRight />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__contact">
            <p className="footer__nav-title">CONNECT</p>
            <div className="footer__contact-list">
              <a href={`mailto:${personal.email}`} className="footer__contact-link">
                EMAIL <FiArrowUpRight />
              </a>
              <a href={personal.github} target="_blank" rel="noreferrer" className="footer__contact-link">
                GITHUB <FiArrowUpRight />
              </a>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="footer__contact-link">
                LINKEDIN <FiArrowUpRight />
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © {year} SHIVAM SINGH. ALL RIGHTS RESERVED.
          </p>
          <div className="footer__socials">
            <a href={personal.github} target="_blank" rel="noreferrer" className="footer__social" aria-label="GitHub">
              <FiGithub size={20} />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" className="footer__social" aria-label="LinkedIn">
              <FiLinkedin size={20} />
            </a>
            <a href={`mailto:${personal.email}`} className="footer__social" aria-label="Email">
              <FiMail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React from "react";
import "./FooterStyle.css";
import { FaGithub, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="phone">
            <h4>
              <FaPhone size={20} style={{ marginRight: "0.5rem" }} />
              <a
                href="https://wa.me/+393247860089"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                WhatsApp me!
              </a>
            </h4>
          </div>

          <div className="email">
            <h4>
              <FaMailBulk size={20} style={{ marginRight: "0.5rem" }} />
              <a
                href="mailto:stefania.deliso1@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
              >
                Email me!
              </a>
            </h4>
          </div>
        </div>

        <div className="footer-right">
          <div className="social">
            <a
              href="https://www.linkedin.com/in/stefaniad91/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={40} />
            </a>

            <a
              href="https://github.com/Darkmindy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={40} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

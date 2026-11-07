"use client";

import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText("contact.mohiuddinshanto@gmail.com")
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="section-label">Contact</div>
        <div className="section-title">
          Get in <span className="hl">Touch</span>
        </div>

        <div className="contact-grid">
          <div className="reveal">
            <div className="contact-info">
              <h3>
                Let&apos;s work
                <br />
                together
              </h3>
              <p>
                Have a project in mind? I&apos;d love to hear about it. Send me a
                message and let&apos;s create something great.
              </p>
            </div>

            <div className="contact-item">
              <i className="fas fa-envelope" />
              <div>
                <div className="contact-item-text">Email</div>
                <div className="contact-item-value">
                  contact.mohiuddinshanto@gmail.com
                </div>
              </div>
            </div>

            <div className="contact-item">
              <i className="fas fa-phone-alt" />
              <div>
                <div className="contact-item-text">Phone / WhatsApp</div>
                <div className="contact-item-value">+880 1620 044069</div>
              </div>
            </div>

            <div className="contact-item">
              <i className="fas fa-map-marker-alt" />
              <div>
                <div className="contact-item-text">Location</div>
                <div className="contact-item-value">Dhaka, Bangladesh</div>
              </div>
            </div>

            <div className="social-row">
              <a
                href="https://www.facebook.com/mohiuddinshanto4u"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook" />
              </a>
              <a
                href="https://www.linkedin.com/in/mohiuddin-shanto/"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin" />
              </a>
              <a
                href="https://github.com/mohiuddinshanto"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                aria-label="GitHub"
              >
                <i className="fab fa-github" />
              </a>
              <a
                href="https://wa.me/8801620044069"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp" />
              </a>
            </div>
          </div>

          <div className="glass-card contact-cta-card reveal reveal-delay-1">
            <div style={{ fontSize: 48, marginBottom: 16 }}>✉️</div>
            <h4>Drop a message</h4>
            <p>
              Ready to start a project? Click below to email directly or copy the
              address.
            </p>
            <a
              href="mailto:contact.mohiuddinshanto@gmail.com"
              className="big-email"
            >
              contact.mohiuddinshanto@gmail.com
            </a>
            <div
              style={{
                display: "flex",
                gap: 12,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <button
                className={`copy-btn ${copied ? "copied" : ""}`}
                id="copyBtn"
                onClick={handleCopyEmail}
              >
                {copied ? (
                  <>
                    <i className="fas fa-check" /> Copied!
                  </>
                ) : (
                  <>
                    <i className="fas fa-copy" /> Copy Email
                  </>
                )}
              </button>
              <a
                href="mailto:contact.mohiuddinshanto@gmail.com"
                className="btn-primary"
              >
                <i className="fas fa-paper-plane" /> Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#wordpress", label: "WP Demos" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [activeId, setActiveId] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const saved = (localStorage.getItem("theme") as "dark" | "light") || "dark";
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "home";
      sections.forEach((s) => {
        const el = s as HTMLElement;
        if (window.scrollY >= el.offsetTop - 150) {
          current = el.id;
        }
      });
      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "";
  };

  const openMenu = () => {
    setIsMenuOpen(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`} id="mobileMenu">
        <button
          className="mobile-menu-close"
          id="mobileMenuClose"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <i className="fas fa-times" />
        </button>
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="mob-link"
            onClick={closeMenu}
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Main Navbar */}
      <nav id="navbar">
        <a href="#home" className="nav-logo">
          Shanto<span>.</span>
        </a>

        {/* Desktop links */}
        <ul className="nav-links">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={activeId === item.href.substring(1) ? "active" : ""}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Toggle + Hamburger */}
        <div className="nav-right">
          <button
            className="theme-toggle"
            id="themeToggle"
            title="Toggle theme"
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            <div className="toggle-track">
              <i className="t-sun fas fa-sun" />
              <div className="toggle-pill" />
              <i className="t-moon fas fa-moon" />
            </div>
          </button>

          <button
            className={`nav-hamburger ${isMenuOpen ? "open" : ""}`}
            id="hamburger"
            aria-label="Open menu"
            onClick={() => (isMenuOpen ? closeMenu() : openMenu())}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    </>
  );
}

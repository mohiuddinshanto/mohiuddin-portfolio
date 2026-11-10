"use client";

import Image from "next/image";
import { useEffect, useState, type PointerEvent } from "react";
import { A11y, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  educationData,
  experienceData,
  hobbiesAndSkillsChips,
  projectsData,
  skillsData,
} from "@/data/portfolioData";
import type { Project } from "@/types";
import Cursor from "@/components/Cursor";
import Effects3D from "@/components/Effects3D";
import ParticlesCanvas from "@/components/ParticlesCanvas";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const stack = [
  { letter: "M", name: "MongoDB", description: "Database" },
  { letter: "E", name: "Express.js", description: "Backend framework" },
  { letter: "R", name: "React.js", description: "Frontend library" },
  { letter: "N", name: "Node.js", description: "Runtime" },
];

const learningHighlights = [
  {
    title: "Public speaking",
    description: "Led in speech competitions at the institutions I studied at.",
  },
  {
    title: "Peer tutoring",
    description: "Tutored fellow students and ran revision sessions.",
  },
  {
    title: "Teacher recognition",
    description: "Consistently held in high regard by teachers throughout my studies.",
  },
];

function getProjectInitials(name: string) {
  return name
    .split(/[\s-]+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 2);
}

export default function PortfolioPage() {
  const [activeId, setActiveId] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeSkillCategory, setActiveSkillCategory] = useState("All");
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const visibleSkillCategories =
    activeSkillCategory === "All"
      ? skillsData
      : skillsData.filter((category) => category.category === activeSkillCategory);

  const handleHeroPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (
      event.pointerType !== "mouse" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;

    event.currentTarget.style.setProperty("--hero-pointer-x", `${x}%`);
    event.currentTarget.style.setProperty("--hero-pointer-y", `${y}%`);
    event.currentTarget.style.setProperty("--hero-parallax-x", `${(x - 50) * -0.08}px`);
    event.currentTarget.style.setProperty("--hero-parallax-y", `${(y - 50) * -0.05}px`);
  };

  const handleHeroPointerLeave = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.style.removeProperty("--hero-pointer-x");
    event.currentTarget.style.removeProperty("--hero-pointer-y");
    event.currentTarget.style.removeProperty("--hero-parallax-x");
    event.currentTarget.style.removeProperty("--hero-parallax-y");
  };

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
      const progressBar = document.getElementById("prog");
      if (progressBar) progressBar.style.width = `${progress}%`;

      let current = "home";
      document.querySelectorAll("main section[id]").forEach((section) => {
        const element = section as HTMLElement;
        if (window.scrollY >= element.offsetTop - 180) current = element.id;
      });
      setActiveId(current);
      const nav = document.querySelector(".nv");
      const topButton = document.getElementById("back-to-top");
      if (nav) {
        nav.classList.toggle("hide", window.scrollY > 240 && window.scrollY > lastScrollY + 4);
        if (window.scrollY < 120 || window.scrollY < lastScrollY - 4) nav.classList.remove("hide");
      }
      topButton?.classList.toggle("show", window.scrollY > 640);
      lastScrollY = window.scrollY;
    };

    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const revealElements = document.querySelectorAll<HTMLElement>(".rv");
    if (window.matchMedia("(max-width: 760px), (pointer: coarse)").matches) {
      revealElements.forEach((element) => {
        element.classList.add("in");
        element.style.transitionDelay = "0ms";
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 },
    );

    revealElements.forEach((element, index) => {
      element.style.transitionDelay = `${(index % 3) * 70}ms`;
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const target = document.getElementById("tw");
    if (!target) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const roles = ["MERN Developer", "Next.js Builder", "Full-stack Developer", "React Developer"];
    if (reduce) return;
    let roleIndex = 0;
    let letterIndex = roles[0].length;
    let deleting = false;
    let timer = 0;
    const tick = () => {
      const role = roles[roleIndex];
      target.textContent = role.slice(0, letterIndex);
      if (!deleting && letterIndex === role.length) {
        deleting = true;
        timer = window.setTimeout(tick, 1500);
        return;
      }
      if (deleting && letterIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      } else {
        letterIndex += deleting ? -1 : 1;
      }
      timer = window.setTimeout(tick, deleting ? 34 : 72);
    };
    timer = window.setTimeout(tick, 1500);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!activeProject) return;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveProject(null);
    };
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeProject]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <ParticlesCanvas />
      <Cursor />
      <Effects3D />
      <div id="prog" />
      <header className="nv">
        <a href="#home" className="logo">
          <Image
            src="/assets/Mohiuddin%20Shanto%20Developer%20Brand%20Logo.png"
            alt="Mohiuddin Shanto — MERN Stack Developer"
            width={1536}
            height={1024}
            priority
          />
        </a>
        <ul className={`pillnav${isMenuOpen ? " open" : ""}`} id="nav">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={activeId === item.href.slice(1) ? "on" : ""}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="btn p">
          Let&apos;s Talk
        </a>
        <button
          id="burger"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <i className={`fas ${isMenuOpen ? "fa-xmark" : "fa-bars"}`} />
        </button>
      </header>

      <main>
        <section id="home">
          <div className="wrap">
            <div
              className="stage"
              onPointerMove={handleHeroPointerMove}
              onPointerLeave={handleHeroPointerLeave}
            >
              <div className="ph" id="ph">
                <span className="fg">
                  <Image
                    src="/assets/hero.png"
                    alt="Mohiuddin Shanto, portfolio portrait"
                    width={586}
                    height={735}
                    priority
                  />
                </span>
              </div>
              <div className="ht">
                <a className="av" href="#contact">
                  <b aria-hidden="true" /> Available for projects
                </a>
                <h1>
                  Hi, I&apos;m <em>Mohiuddin.</em>
                </h1>
                <div className="roles">
                  <span id="tw" aria-label="MERN Developer, Next.js Builder, Full-stack Developer, React Developer">MERN Developer</span><i /> Next.js <i /> Builder
                </div>
                <p className="hp">
                  I craft fast, secure and user-friendly web applications — from
                  clean interfaces to REST APIs and databases — with React,
                  Next.js, Node.js and MongoDB.
                </p>
                <div className="cta">
                  <a className="btn p" href="#projects">
                    View Projects <i className="fas fa-arrow-right" />
                  </a>
                  <a className="btn" href="#contact">
                    <i className="far fa-envelope" /> Contact Me
                  </a>
                  <a
                    className="btn"
                    href="/assets/Mohiuddin_Shanto_Full-Stack_Resume.pdf"
                    download
                  >
                    <i className="fas fa-download" /> Resume
                  </a>
                </div>
                <div className="hs">
                  <div>
                    <b>Full-stack</b>End-to-end development
                  </div>
                  <div>
                    <b>MERN</b>Modern web applications
                  </div>
                  <div>
                    <b>
                      UI to API
                    </b>
                    Complete product builds
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="wrap">
            <div className="gh rv">
              <h2>
                About<i>.</i>
              </h2>
              <p>
                A developer who <b>obsesses</b> over the details.
              </p>
              <span className="vt">MERN Stack Developer</span>
            </div>
            <div className="ab">
              <div className="gc dna rv">
                <h3>Build DNA</h3>
                <div className="nums">
                  <div>
                    <b>Full-stack</b> Product development.
                  </div>
                  <div>
                    <b>End-to-end</b> From interface to API.
                  </div>
                  <div>
                    <b>∞</b> Curious about how things work.
                  </div>
                </div>
                <p>
                  I&apos;m a self-taught <b>MERN stack developer</b> who turns
                  ideas into production-ready products: responsive interfaces,
                  REST APIs, role-based authentication, payment integrations
                  and database design.
                </p>
                <p>
                  Beside code I study Islamic jurisprudence, and I enjoy
                  reading Islamic history, football and travelling.
                </p>
                <div className="chips">
                  {hobbiesAndSkillsChips.map((chip) => (
                    <span key={chip}>{chip.replace(/^[^\w]+/, "")}</span>
                  ))}
                </div>
              </div>
              <figure className="fig" aria-hidden="true">
                <Image
                  src="/assets/contact.png"
                  alt=""
                  width={586}
                  height={735}
                />
                <svg className="ring" viewBox="0 0 120 120" aria-hidden="true">
                  <defs>
                    <path
                      id="ring-path"
                      d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0"
                    />
                  </defs>
                  <text
                    fontSize="10.5"
                    fontFamily="Montserrat"
                    fontWeight="600"
                    letterSpacing="3.2"
                    fill="#ff5a00"
                  >
                    <textPath href="#ring-path">
                      • MERN DEVELOPER • FULL-STACK •
                    </textPath>
                  </text>
                </svg>
              </figure>
              <div className="rt">
                <div className="gc sk rv">
                  <h3>Skills</h3>
                  <ul className="sl">
                    {[
                      "React.js & Next.js",
                      "TypeScript",
                      "Zustand",
                      "Node.js & Express.js",
                      "MongoDB & Mongoose",
                      "REST API Design",
                      "JWT, OAuth & Better Auth",
                      "Tailwind CSS & HeroUI",
                      "Stripe & SSLCommerz",
                    ].map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
                <div className="gc tools rv">
                  <h3>Tools</h3>
                  {[
                    ["fab fa-github", "Git & GitHub"],
                    ["fas fa-pen-ruler", "Figma"],
                    ["fas fa-cloud", "Vercel"],
                    ["fas fa-server", "Hostinger"],
                  ].map(([icon, label]) => (
                    <div className="tool" key={label}>
                      <i className={icon} />
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="gc exp rv">
              <h3>Experience</h3>
              <ul className="tl">
                {experienceData.map((item) => (
                  <li key={item.title}>
                    <small>{item.date}</small>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="skills" className="section-tight">
          <div className="wrap">
            <div className="gh rv">
              <h2>
                Stack<i>.</i>
              </h2>
              <p>
                The <b>MERN</b> core, with modern tooling around it.
              </p>
            </div>
            <Swiper
              className="mern-swiper"
              modules={[Keyboard, A11y]}
              slidesPerView={1.35}
              spaceBetween={12}
              keyboard={{ enabled: true }}
              speed={360}
              breakpoints={{
                560: { slidesPerView: 2, spaceBetween: 16 },
                760: { slidesPerView: 2.5, spaceBetween: 18 },
                1001: { slidesPerView: 4, spaceBetween: 18 },
              }}
              a11y={{ prevSlideMessage: "Previous stack item", nextSlideMessage: "Next stack item" }}
            >
              {stack.map((item) => (
                <SwiperSlide key={item.letter}>
                  <div className="gc mt">
                    <b>{item.letter}</b>
                    <h4>{item.name}</h4>
                    <span>{item.description}</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="skill-filters" role="group" aria-label="Filter skills by category">
              <button
                type="button"
                className={`skill-filter${activeSkillCategory === "All" ? " active" : ""}`}
                aria-pressed={activeSkillCategory === "All"}
                onClick={() => setActiveSkillCategory("All")}
              >
                <i className="fas fa-layer-group" aria-hidden="true" /> All skills
              </button>
              {skillsData.map((category) => (
                <button
                  type="button"
                  className={`skill-filter${activeSkillCategory === category.category ? " active" : ""}`}
                  aria-pressed={activeSkillCategory === category.category}
                  key={category.category}
                  onClick={() => setActiveSkillCategory(category.category)}
                >
                  <i className={category.icon} aria-hidden="true" /> {category.category}
                </button>
              ))}
            </div>
            <div className={`cats${activeSkillCategory === "All" ? "" : " filtered"}`} aria-live="polite">
              {visibleSkillCategories.map((category) => (
                <div className="gc sk skill-category" key={category.category}>
                  <h3>
                    <i className={category.icon} aria-hidden="true" /> {category.category}
                  </h3>
                  <ul className="sl">
                    {category.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section-tight">
          <div className="wrap">
            <div className="gh rv">
              <h2>
                Work<i>.</i>
              </h2>
              <p>
                Full-stack builds with <b>live demos</b> and source code.
              </p>
            </div>
            <Swiper
              className="pg project-swiper"
              modules={[Navigation, Pagination, Keyboard, A11y]}
              navigation
              pagination={{ clickable: true }}
              keyboard={{ enabled: true }}
              watchOverflow
              speed={420}
              spaceBetween={14}
              slidesPerView={1.08}
              breakpoints={{
                480: { slidesPerView: 1.4, spaceBetween: 16 },
                760: { slidesPerView: 2, spaceBetween: 20 },
                1001: { slidesPerView: 3, spaceBetween: 24 },
              }}
              a11y={{ prevSlideMessage: "Previous project", nextSlideMessage: "Next project" }}
            >
              {projectsData.map((project) => (
                <SwiperSlide key={project.id}>
                <article className="gc pc">
                  <div className="pi">
                    <em>{getProjectInitials(project.name)}</em>
                    {!imageErrors[project.id] && (
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        sizes="(max-width: 760px) 100vw, (max-width: 1000px) 50vw, 33vw"
                        onError={() =>
                          setImageErrors((errors) => ({
                            ...errors,
                            [project.id]: true,
                          }))
                        }
                      />
                    )}
                  </div>
                  <div className="pb">
                    <h3>{project.name}</h3>
                    <p>{project.desc}</p>
                    <div className="project-meta">
                      <span className="project-role">
                        <i className="fas fa-code" aria-hidden="true" />
                        <span>Role:</span>
                        <strong>{project.role}</strong>
                      </span>
                      <div className="project-stack" aria-label={`Tech stack: ${project.tags.join(", ")}`}>
                        <span className="project-stack-label">Stack</span>
                        <div className="project-stack-tags">
                          {project.tags.map((tag) => (
                            <span className="project-tag" key={tag}>{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="pl">
                      <a
                        className="pr"
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-arrow-up-right-from-square" aria-hidden="true" /> Live demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-github" aria-hidden="true" /> Code
                      </a>
                      <button type="button" onClick={() => setActiveProject(project)}>
                        <i className="fas fa-circle-info" aria-hidden="true" /> Details
                      </button>
                    </div>
                  </div>
                </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        <section id="education" className="section-tight">
          <div className="wrap">
            <div className="gh rv">
              <h2>
                Learning<i>.</i>
              </h2>
              <p>
                Traditional scholarship and modern web development,{" "}
                <b>side by side</b>.
              </p>
            </div>
            <div className="eg">
              {educationData.map((item) => (
                <div className="gc ei rv" key={item.title}>
                  <small>{item.level}</small>
                  <h4>{item.title}</h4>
                  <p>{item.institution}</p>
                </div>
              ))}
            </div>
            <div className="lg">
              {learningHighlights.map((item) => (
                <div className="gc rv" key={item.title}>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-tight">
          <div className="wrap">
            <div className="cstage rv">
              <div className="cbody">
                <div className="clabel">Contact</div>
                <h3>
                  Let&apos;s work <em>together</em>
                </h3>
                <p>
                  Ready to build something amazing together? Tell me about your
                  project.
                </p>
                <a
                  className="btn p"
                  href="mailto:contact.mohiuddinshanto@gmail.com"
                >
                  Start a Project <i className="fas fa-arrow-right" />
                </a>
                <div className="tiles">
                  <a
                    className="tile"
                    href="mailto:contact.mohiuddinshanto@gmail.com"
                  >
                    <i className="far fa-envelope" />
                    <div>
                      <small>Email</small>
                      <span>contact.mohiuddinshanto@gmail.com</span>
                    </div>
                  </a>
                  <a
                    className="tile"
                    href="https://wa.me/8801620044069"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-whatsapp" />
                    <div>
                      <small>WhatsApp</small>
                      <span>+880 1620 044069</span>
                    </div>
                  </a>
                  <a
                    className="tile"
                    href="https://www.linkedin.com/in/mohiuddin-shanto/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin-in" />
                    <div>
                      <small>LinkedIn</small>
                      <span>/in/mohiuddin-shanto</span>
                    </div>
                  </a>
                  <a
                    className="tile"
                    href="https://github.com/mohiuddinshanto"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github" />
                    <div>
                      <small>GitHub</small>
                      <span>@mohiuddinshanto</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="cph">
                <span className="fg">
                  <Image
                    src="/assets/about.png"
                    alt="Mohiuddin Shanto, contact portrait"
                    width={686}
                    height={835}
                    sizes="(max-width: 900px) 100vw, 46vw"
                  />
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">© 2026 Mohiuddin Shanto · Built in Dhaka</div>
      </footer>

      <button
        id="back-to-top"
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" })}
      >
        <i className="fas fa-arrow-up" aria-hidden="true" />
      </button>

      <div
        className={`md${activeProject ? " open" : ""}`}
        id="md"
        role="dialog"
        aria-modal="true"
        aria-label={activeProject?.name ?? "Project details"}
        onClick={(event) => {
          if (event.target === event.currentTarget) setActiveProject(null);
        }}
      >
        {activeProject && (
          <div className="mb">
            <button
              className="mx"
              aria-label="Close project details"
              onClick={() => setActiveProject(null)}
            >
              <i className="fas fa-xmark" />
            </button>
            <h2>{activeProject.name}</h2>
            <h5>Tech stack</h5>
            <p>{activeProject.stack}</p>
            <h5>About</h5>
            <p>{activeProject.desc}</p>
            {activeProject.challenges && (
              <>
                <h5>Challenges</h5>
                <p>{activeProject.challenges}</p>
              </>
            )}
            {activeProject.improvements && (
              <>
                <h5>Next improvements</h5>
                <p>{activeProject.improvements}</p>
              </>
            )}
            <div className="pl">
              <a
                className="pr"
                href={activeProject.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live demo
              </a>
              <a
                href={activeProject.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                View code
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

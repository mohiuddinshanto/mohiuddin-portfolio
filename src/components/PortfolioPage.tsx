"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  educationData,
  experienceData,
  hobbiesAndSkillsChips,
  projectsData,
  skillsData,
} from "@/data/portfolioData";
import type { Project } from "@/types";

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
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

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
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
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

    document.querySelectorAll(".rv").forEach((element, index) => {
      (element as HTMLElement).style.transitionDelay = `${(index % 3) * 70}ms`;
      observer.observe(element);
    });

    return () => observer.disconnect();
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
      <div id="prog" />
      <header className="nv">
        <a href="#home" className="logo">
          <i>M</i>Shanto
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
            <div className="stage">
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
                <div className="av">
                  <b /> Available for projects
                </div>
                <h1>
                  Hi, I&apos;m <em>Mohiuddin.</em>
                </h1>
                <div className="roles">
                  MERN Developer <i /> Next.js <i /> Builder
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
            <div className="mern">
              {stack.map((item) => (
                <div className="gc mt rv" key={item.letter}>
                  <b>{item.letter}</b>
                  <h4>{item.name}</h4>
                  <span>{item.description}</span>
                </div>
              ))}
            </div>
            <div className="cats">
              {skillsData.map((category) => (
                <div className="gc sk rv" key={category.category}>
                  <h3>{category.category}</h3>
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
            <div className="pg">
              {projectsData.map((project) => (
                <article className="gc pc rv" key={project.id}>
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
                    <div className="tg">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="pb">
                    <h3>{project.name}</h3>
                    <p>{project.desc}</p>
                    <div className="pl">
                      <a
                        className="pr"
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View code
                      </a>
                      <button onClick={() => setActiveProject(project)}>
                        Details
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
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

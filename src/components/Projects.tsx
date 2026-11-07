"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { projectsData } from "@/data/portfolioData";
import { Project } from "@/types";

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveProject(null);
      }
    };
    if (activeProject) {
      window.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  const handleImageError = (id: number) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="projects">
      <div className="container">
        <div className="section-label">Work</div>
        <div className="section-title">
          My <span className="hl">Projects</span>
        </div>

        <div className="projects-grid stagger" id="projectsContainer">
          {projectsData.map((proj) => {
            const hasImgError = imageErrors[proj.id];

            return (
              <div key={proj.id} className="project-card">
                <div className="project-img">
                  {!hasImgError && (
                    <div style={{ position: "relative", width: "100%", height: "100%" }}>
                      <Image
                        src={proj.image}
                        alt={proj.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: "cover" }}
                        onError={() => handleImageError(proj.id)}
                      />
                    </div>
                  )}
                  <div className="project-img-overlay" />
                  <div className="tags">
                    {proj.tags.map((t) => (
                      <span key={t} className="project-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-body">
                  <h3>{proj.name}</h3>
                  <p>{proj.desc.slice(0, 90)}…</p>
                  <div className="project-links">
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link primary"
                    >
                      <i className="fas fa-external-link-alt" /> Live
                    </a>
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      <i className="fab fa-github" /> Code
                    </a>
                    <button
                      className="project-link view-details"
                      onClick={() => setActiveProject(proj)}
                    >
                      🔍 Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* MODAL */}
      <div
        className={`modal ${activeProject ? "open" : ""}`}
        id="projectModal"
        onClick={(e) => {
          if (e.target === e.currentTarget) setActiveProject(null);
        }}
      >
        {activeProject && (
          <div className="modal-box">
            <button
              className="modal-close"
              id="modalClose"
              aria-label="Close modal"
              onClick={() => setActiveProject(null)}
            >
              <i className="fas fa-times" />
            </button>

            <div id="modalBody">
              {!imageErrors[activeProject.id] && (
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: 220,
                    borderRadius: 12,
                    marginBottom: 20,
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={activeProject.image}
                    alt={activeProject.name}
                    fill
                    style={{ objectFit: "cover" }}
                    onError={() => handleImageError(activeProject.id)}
                  />
                </div>
              )}
              <h2>{activeProject.name}</h2>
              <div className="stack-label">Tech Stack</div>
              <div className="stack-val">{activeProject.stack}</div>
              <div className="desc-label">Description</div>
              <div className="desc-val">{activeProject.desc}</div>

              {activeProject.challenges && (
                <>
                  <div className="desc-label">Challenges</div>
                  <div className="desc-val">{activeProject.challenges}</div>
                </>
              )}

              {activeProject.improvements && (
                <>
                  <div className="desc-label">Future Improvements</div>
                  <div className="desc-val">{activeProject.improvements}</div>
                </>
              )}

              <div className="modal-links">
                <a
                  href={activeProject.live}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  <i className="fas fa-external-link-alt" /> Live Demo
                </a>
                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost"
                >
                  <i className="fab fa-github" /> View Code
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

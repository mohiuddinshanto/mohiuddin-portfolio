import { experienceData, hobbiesAndSkillsChips } from "@/data/portfolioData";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-label">About</div>
        <div className="section-title">
          Who I <span className="hl">Am</span>
        </div>
        <div className="about-grid">
          <div className="glass-card reveal">
            <p className="about-text">
              I started my journey as a <strong>self‑taught developer</strong>, blending
              Islamic studies with modern tech. From <strong>2022–2024 I focused on WordPress</strong> —
              building WooCommerce stores, sales funnels, and Elementor sites for real clients.
            </p>
            <p className="about-text" style={{ marginTop: 16 }}>
              Now I&apos;m fully invested in the <strong>MERN stack</strong> — <strong>MongoDB, Express.js, React.js &amp; Node.js</strong> — along with <strong>Next.js, TypeScript &amp; Tailwind CSS</strong>. I build end-to-end products: responsive interfaces, REST APIs, authentication systems, third-party integrations, and database design.
            </p>
            <p className="about-text" style={{ marginTop: 16 }}>
              Outside programming, I enjoy <strong>Qira&apos;ah (Quran recitation), reading Islamic history, and football</strong>.
            </p>
            <div className="about-chips">
              {hobbiesAndSkillsChips.map((chip) => (
                <span key={chip} className="chip">
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-card reveal reveal-delay-1">
            <h3
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 15,
                fontWeight: 700,
                marginBottom: 24,
              }}
            >
              Work Experience
            </h3>
            <ul className="timeline">
              {experienceData.map((item) => (
                <li key={item.title}>
                  <div className="timeline-date">{item.date}</div>
                  <div className="timeline-title">{item.title}</div>
                  <div className="timeline-sub">{item.desc}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

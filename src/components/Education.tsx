import { educationData } from "@/data/portfolioData";

export default function Education() {
  return (
    <section id="education" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="section-label">Education</div>
        <div className="section-title">
          Education &amp; <span className="hl">Certifications</span>
        </div>
        <div className="edu-grid stagger">
          {educationData.map((item) => (
            <div key={item.title} className="edu-item">
              <div className="level">{item.level}</div>
              <h4>{item.title}</h4>
              <p>{item.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

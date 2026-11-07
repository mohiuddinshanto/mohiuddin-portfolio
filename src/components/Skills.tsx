import { skillsData } from "@/data/portfolioData";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-label">Expertise</div>
        <div className="section-title">
          Technical <span className="hl">Skills</span>
        </div>

        {/* MERN 3D Strip */}
        <div className="mern-strip stagger">
          <div className="mern-tile">
            <div className="mern-letter">M</div>
            <h4>MongoDB</h4>
            <p>Database</p>
          </div>
          <div className="mern-tile">
            <div className="mern-letter">E</div>
            <h4>Express.js</h4>
            <p>Backend framework</p>
          </div>
          <div className="mern-tile">
            <div className="mern-letter">R</div>
            <h4>React.js</h4>
            <p>Frontend library</p>
          </div>
          <div className="mern-tile">
            <div className="mern-letter">N</div>
            <h4>Node.js</h4>
            <p>Runtime</p>
          </div>
        </div>

        {/* Skills Sheet */}
        <div className="glass-card skills-sheet reveal" id="skillsContainer">
          {skillsData.map((cat) => (
            <div key={cat.category} className="skill-row">
              <div className="skill-category-title">
                <i className={cat.icon} />
                {cat.category}
              </div>
              <div className="skill-chips">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

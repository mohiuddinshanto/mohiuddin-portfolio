import { wpSites } from "@/data/portfolioData";

export default function WordPressDemos() {
  return (
    <section id="wordpress">
      <div className="container">
        <div className="section-label">Live Sites</div>
        <div className="section-title">
          WordPress <span className="hl">Demos</span>
        </div>

        <div className="wp-grid stagger" id="wpGrid">
          {wpSites.map((site) => (
            <div key={site.name} className="wp-card">
              <div className="wp-card-header">
                <span className="wp-badge-pill">{site.badge}</span>
                <i
                  className="fas fa-globe"
                  style={{ color: "var(--text-dim)", fontSize: 18 }}
                />
              </div>
              <div className="wp-card-body">
                <h3>{site.name}</h3>
                <p>{site.unique}</p>
                <a
                  href={site.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost"
                  style={{ fontSize: 12, padding: "8px 16px" }}
                >
                  <i className="fas fa-eye" /> Preview
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

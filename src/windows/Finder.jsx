import { useState } from "react";
import { Award, Briefcase, GraduationCap, User } from "lucide-react";
import { FINDER_GROUP_LABEL, FINDER_NAVIGATION, RESUME_DATA } from "#constants";

const ICONS = {
  user: User,
  briefcase: Briefcase,
  graduation: GraduationCap,
  award: Award,
};

const Finder = () => {
  const [activeTab, setActiveTab] = useState("experience");
  const activeItems = RESUME_DATA[activeTab] ?? [];

  return (
    <div className="finder-app">
      <aside className="finder-sidebar">
        <p className="finder-sidebar-title">{FINDER_GROUP_LABEL}</p>
        {FINDER_NAVIGATION.map((item) => {
          const Icon = ICONS[item.icon];

          return (
            <button
              type="button"
              key={item.id}
              className={`finder-nav-item ${activeTab === item.id ? "is-active" : ""}`}
              onClick={() => setActiveTab(item.id)}
            >
              <Icon size={18} aria-hidden="true" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </aside>

      <div className="finder-content">
        {activeTab === "about" && (
          <section className="finder-panel">
            <p className="window-eyebrow">
              {FINDER_NAVIGATION.find((item) => item.id === activeTab)?.label}
            </p>
            <h3>{RESUME_DATA.profile.name}</h3>
            <p className="finder-profile-role">{RESUME_DATA.profile.role}</p>
            <p>{RESUME_DATA.profile.summary}</p>
            <section className="finder-section">
              <h4>What I Do</h4>
              <div className="finder-specialties">
                {RESUME_DATA.profile.specialties.map((specialty) => (
                  <article key={specialty.title}>
                    <h5>{specialty.title}</h5>
                    <p>{specialty.description}</p>
                  </article>
                ))}
              </div>
            </section>
            <section className="finder-section">
              <h4>Career Highlights</h4>
              <ul>{RESUME_DATA.profile.careerHighlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
            </section>
            <section className="finder-section">
              <h4>Beyond Coding</h4>
              <ul>{RESUME_DATA.profile.beyondCoding.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>
          </section>
        )}

        {activeTab !== "about" && (
          <div className={`finder-list finder-${activeTab}`}>
            {activeItems.map((item) => (
              <article className="finder-entry" key={`${activeTab}-${item.title ?? item.company}`}>
                <h3>{item.role ?? item.title ?? item.qualification}</h3>
                <p className="finder-entry-meta">
                  {item.company ?? item.issuer ?? item.institution}{item.period ? ` · ${item.period}` : ""}
                </p>
                {item.location && <p className="finder-entry-location">Location: {item.location}</p>}
                {item.overview && <p className="finder-entry-overview">{item.overview}</p>}
                {item.strengths && (
                  <div className="finder-section"><strong>Core Academic & Technical Strengths</strong><ul>{item.strengths.map((strength) => <li key={strength}>{strength}</li>)}</ul></div>
                )}
                {item.capstone && (
                  <section className="finder-capstone">
                    <h4>Key Capstone Project</h4>
                    <h5>{item.capstone.title}</h5>
                    <p className="finder-entry-meta">{item.capstone.period}</p>
                    <p>{item.capstone.description}</p>
                    <div className="finder-tech-list">{item.capstone.tech.map((technology) => <span key={technology}>{technology}</span>)}</div>
                    <ul>{item.capstone.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
                  </section>
                )}
                {item.achievements && (
                  <div className="finder-section"><strong>Leadership & Academic Achievements</strong><ul>{item.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}</ul></div>
                )}
                {item.points && (
                  <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
                )}
                {item.tech && (
                  <div className="finder-tech-list">
                    {item.tech.map((technology) => <span key={technology}>{technology}</span>)}
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Finder;

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
            <p>{RESUME_DATA.profile.summary}</p>
          </section>
        )}

        {activeTab !== "about" && (
          <div className="finder-list">
            {activeItems.map((item) => (
              <article className="finder-entry" key={`${activeTab}-${item.title ?? item.company}`}>
                <h3>{item.role ?? item.title ?? item.qualification}</h3>
                <p className="finder-entry-meta">
                  {item.company ?? item.issuer ?? item.institution} · {item.period}
                </p>
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
import { useState } from "react";
import { spotlightItems } from "#constants/spotlight";
import { useWindowStore } from "#store/windowStore";

const Spotlight = () => {
  const [search, setSearch] = useState("");
  const isOpen = useWindowStore((state) => state.isSpotlightOpen);
  const closeSpotlight = useWindowStore((state) => state.closeSpotlight);
  const openWindow = useWindowStore((state) => state.openWindow);
  const filteredItems = spotlightItems.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <section className="spotlight-overlay" role="dialog" aria-label="Spotlight Search" onClick={closeSpotlight}>
      <div className="spotlight-panel" onClick={(event) => event.stopPropagation()}>
        <div className="spotlight-search-row">
          <img src="/icons/search.svg" alt="" />
          <input
            autoFocus
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search this portfolio..."
            aria-label="Search this portfolio"
          />
          <button type="button" onClick={closeSpotlight} aria-label="Close Spotlight">Esc</button>
        </div>
        <div className="spotlight-results">
          {filteredItems.map((item) => (
            <button
              type="button"
              className="spotlight-result"
              key={item.id}
              onClick={() => {
                if (item.id === "resume") {
                  window.open("/files/resume.pdf", "_blank", "noopener,noreferrer");
                } else {
                  openWindow(item.id);
                }
                closeSpotlight();
              }}
            >
              <img src={item.icon} alt="" />
              <span><strong>{item.title}</strong><small>{item.description}</small></span>
              <b>↵</b>
            </button>
          ))}
          {!filteredItems.length && <p className="spotlight-empty">No matching applications.</p>}
        </div>
      </div>
    </section>
  );
};

export default Spotlight;
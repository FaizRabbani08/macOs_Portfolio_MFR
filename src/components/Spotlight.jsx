import { useState } from "react";
import { spotlightItems } from "#constants/spotlight";

const Spotlight = ({ isOpen, onClose, onOpen }) => {
  const [search, setSearch] = useState("");
  const filteredItems = spotlightItems.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <section className="spotlight-overlay" role="dialog" aria-label="Spotlight Search">
      <div className="spotlight-panel">
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
          <button type="button" onClick={onClose} aria-label="Close Spotlight">Esc</button>
        </div>
        <div className="spotlight-results">
          {filteredItems.map((item) => (
            <button
              type="button"
              className="spotlight-result"
              key={item.id}
              onClick={() => {
                onOpen(item.id);
                onClose();
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
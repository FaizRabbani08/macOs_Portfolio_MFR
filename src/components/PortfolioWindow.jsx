import { blogPosts, gallery, socials, techStack } from "#constants";

const PortfolioWindow = ({ type, onClose }) => {
  const title = {
    finder: "Portfolio",
    safari: "Articles",
    photos: "Gallery",
    contact: "Contact",
    terminal: "Skills",
    search: "Spotlight Search",
  }[type];

  return (
    <section className={`portfolio-window window-${type}`} aria-label={`${title} window`}>
      <header className="window-header">
        <div id="window-controls">
          <button className="close" type="button" aria-label="Close window" onClick={onClose} />
          <button className="minimize" type="button" aria-label="Minimize window" onClick={onClose} />
          <span className="maximize" aria-hidden="true" />
        </div>
        <h2>{title}</h2>
        <span className="window-meta">portfolio.app</span>
      </header>

      <div className="window-content">
        {type === "finder" && (
          <>
            <p className="window-eyebrow">Selected work</p>
            <h3>Digital products with a little personality.</h3>
            <div className="project-grid">
              {["project-1.png", "project-2.png", "project-3.png"].map((image, index) => (
                <article className="project-card" key={image}>
                  <img src={`/images/${image}`} alt={`Project ${index + 1}`} />
                  <strong>{["E-commerce experience", "Interactive dashboard", "Creative web system"][index]}</strong>
                  <span>React / GSAP / UI design</span>
                </article>
              ))}
            </div>
          </>
        )}

        {type === "safari" && (
          <div className="article-list">
            <p className="window-eyebrow">From the notebook</p>
            {blogPosts.map((post) => (
              <a className="article-row" href={post.link} target="_blank" rel="noreferrer" key={post.id}>
                <img src={post.image} alt="" />
                <span><small>{post.date}</small><strong>{post.title}</strong></span>
                <b>↗</b>
              </a>
            ))}
          </div>
        )}

        {type === "photos" && (
          <div className="gallery-grid">
            {gallery.map((photo) => <img src={photo.img} alt="Portfolio memory" key={photo.id} />)}
          </div>
        )}

        {type === "contact" && (
          <div className="contact-content">
            <p className="window-eyebrow">Have a project in mind?</p>
            <h3>Let&apos;s make something people remember.</h3>
            <a className="email-link" href="mailto:hello@example.com">hello@example.com</a>
            <div className="social-row">{socials.map((social) => <a href={social.link} target="_blank" rel="noreferrer" key={social.id}>{social.text} ↗</a>)}</div>
          </div>
        )}

        {type === "terminal" && (
          <div className="skills-content"><p className="window-eyebrow">Currently exploring</p>{techStack.map((group) => <div className="skill-row" key={group.category}><strong>{group.category}</strong><span>{group.items.join("  /  ")}</span></div>)}</div>
        )}

        {type === "search" && <div className="search-content"><input autoFocus type="search" placeholder="Search this portfolio..." aria-label="Search this portfolio" /><p>Try Projects, Articles, Gallery, Contact, or Skills.</p></div>}
      </div>
    </section>
  );
};

export default PortfolioWindow;
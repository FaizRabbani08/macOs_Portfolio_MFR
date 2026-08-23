import { blogPosts } from "#constants/projects";
import { CONTACT_NUMBERS, socials } from "#constants/socials";
import { gallery } from "#constants/gallery";
import { techStack } from "#constants/skills";

const PortfolioWindow = ({ type }) => {
  return (
    <div>
      {/* Portfolio / Finder */}
      {type === "finder" && (
        <>
          <p className="window-eyebrow">
            Selected work
          </p>

          <h3>
            Digital products with a little personality.
          </h3>

          <div className="project-grid">
            {[
              "project-1.png",
              "project-2.png",
              "project-3.png",
            ].map((image, index) => (
              <article
                className="project-card"
                key={image}
              >
                <img
                  src={`/images/${image}`}
                  alt={`Project ${index + 1}`}
                />

                <strong>
                  {
                    [
                      "E-commerce experience",
                      "Interactive dashboard",
                      "Creative web system",
                    ][index]
                  }
                </strong>

                <span>
                  React / GSAP / UI design
                </span>
              </article>
            ))}
          </div>
        </>
      )}

      {/* Articles / Safari */}
      {type === "safari" && (
        <div className="article-list">
          <p className="window-eyebrow">
            Career highlights
          </p>

          {blogPosts.map((post) => (
            <article
              className="article-row"
              key={post.id}
            >
              <img
                src={post.image}
                alt=""
              />

              <span>
                <small>{post.date}</small>
                <strong>{post.title}</strong>
                <p>{post.summary}</p>
              </span>

            </article>
          ))}
        </div>
      )}

      {/* Gallery */}
      {type === "photos" && (
        <div className="gallery-grid">
          {gallery.map((photo) => (
            photo.img.endsWith(".mp4") ? (
              <video autoPlay muted loop playsInline key={photo.id}>
                <source src={photo.img} type="video/mp4" />
              </video>
            ) : (
              <img
                src={photo.img}
                alt="Portfolio memory"
                key={photo.id}
              />
            )
          ))}
        </div>
      )}

      {/* Contact */}
      {type === "contact" && (
        <div className="contact-content">
          <p className="window-eyebrow">
            Have a project in mind?
          </p>

          <h3>
            Let&apos;s make something people remember.
          </h3>

          <a
            className="email-link"
            href="mailto:faizrabbani08n@gmail.com"
          >
            faizrabbani08n@gmail.com
          </a>

          <div className="phone-list" aria-label="Phone and WhatsApp contact options">
            {CONTACT_NUMBERS.map((number) => (
              <div className="phone-row" key={number.tel}>
                <span>{number.label}</span>
                <a href={`tel:${number.tel}`}>{number.display}</a>
                <a href={number.whatsapp} target="_blank" rel="noreferrer">WhatsApp ↗</a>
              </div>
            ))}
          </div>

          <div className="social-row">
            {socials.map((social) => (
              <a
                href={social.link}
                target="_blank"
                rel="noreferrer"
                key={social.id}
              >
                {social.text} ↗
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Skills / Terminal */}
      {type === "terminal" && (
        <div className="skills-content">
          <p className="window-eyebrow">
            Currently exploring
          </p>

          {techStack.map((group) => (
            <div
              className="skill-row"
              key={group.category}
            >
              <strong>{group.category}</strong>

              <span>
                {group.items.join("  /  ")}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Spotlight */}
      {type === "search" && (
        <div className="search-content">
          <input
            autoFocus
            type="search"
            placeholder="Search this portfolio..."
            aria-label="Search this portfolio"
          />

          <p>
            Try Projects, Articles, Gallery,
            Contact, or Skills.
          </p>
        </div>
      )}
    </div>
  );
};

export default PortfolioWindow;

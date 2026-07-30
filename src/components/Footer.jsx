import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <p className="eyebrow">START A CONVERSATION</p>
        <h2>
          Where ideas
          <br />
          take shape.
        </h2>
        <Link className="round-link" to="/contact">
          Say Hello
        </Link>
      </div>
      <div className="footer-bottom">
        <span>© 2026 beMore Design Studio</span>
        <div>
          <a
            className="social-icon"
            href="https://www.instagram.com/bemoredesignstudio/"
            target="_blank"
            rel="noreferrer"
            aria-label="beMore Design Studio on Instagram"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle className="instagram-dot" cx="17.5" cy="6.5" r="1" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

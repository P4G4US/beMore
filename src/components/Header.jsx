import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoImage from "../../asset/finallogo.png";

const links = [
  ["/", "Home"],
  ["/about", "About Us"],
  ["/projects", "Projects"],
  ["/contact", "Contact Us"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <Link to="/" className="logo" aria-label="beMore home">
        <img src={logoImage} alt="beMore Design Studio" />
      </Link>
      <nav className="desktop-nav">
        {links.map(([to, label]) => (
          <NavLink key={to} to={to} end={to === "/"}>
            {label}
          </NavLink>
        ))}
      </nav>
      <button
        className="menu-button"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X /> : <Menu />}
      </button>
      {open && (
        <div className="mobile-menu">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} onClick={() => setOpen(false)}>
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}

import { useEffect, useState } from "react";

const homeLinks = [
  { title: "About", href: "/#features" },
  { title: "Facilities", href: "/facilities" },
  { title: "Memberships", href: "/#pricing" },
  { title: "Coaches", href: "/#coaches" },
  { title: "Schedule", href: "/#schedule" },
  { title: "FAQ", href: "/#faq" },
  { title: "Contact", href: "/#contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const page = window.location.pathname.replace(/\/+$/, "") === "/facilities"
    ? "facilities"
    : "home";
  const navLinks = homeLinks;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="site-header__inner">
        <a href="/" className="brand-lockup">
          <img src="/images/BJJ_logo.JPG" alt="Lewisburg BJJ" />
          <span>Lewisburg BJJ</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              key={`${link.title}-${link.href}`}
              href={link.href}
              className={page === "facilities" && link.title === "Facilities" ? "is-active" : undefined}
            >
              {link.title}
            </a>
          ))}
        </nav>

        <a
          className="header-cta"
          href="https://lewisburg-bjj.gymdesk.com/signup"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start training
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </div>

      <div className={`mobile-nav ${menuOpen ? "mobile-nav--open" : ""}`}>
        {navLinks.map((link) => (
          <a
            key={`${link.title}-${link.href}`}
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.title}
          </a>
        ))}
        <a
          href="https://lewisburg-bjj.gymdesk.com/signup"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start training
        </a>
      </div>
    </header>
  );
};

export default Header;

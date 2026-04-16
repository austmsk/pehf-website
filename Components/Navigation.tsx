"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navigation.module.css";

// TODO: replace with CMS data or site.config.ts
const NAV_LINKS = [
  { label: "Our Work", href: "/our-work" },
  { label: "Programs", href: "/programs" },
  { label: "Impact",   href: "/#impact" },
  { label: "Stories",  href: "/#stories" },
  { label: "About",    href: "/about" },
  { label: "Contact",  href: "/contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`} role="navigation" aria-label="Main navigation">
        <div className={styles.navInner}>
          <Link href="/" className={styles.navLogo} onClick={closeMenu}>
            <div className={styles.navLogoIcon} aria-hidden="true">P</div>
            Premier Foundation
          </Link>

          <div className={styles.navLinks}>
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
            <Link href="/donate" className={styles.navDonate}>
              Donate Now
            </Link>
          </div>

          <button
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.mobileLink}
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/donate"
            className={styles.mobileDonate}
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
          >
            Donate Now
          </Link>
        </nav>
      </div>

      {menuOpen && (
        <div
          className={styles.mobileOverlay}
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
}
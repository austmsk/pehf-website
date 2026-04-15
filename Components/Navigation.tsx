"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navigation.module.css";

// TODO: replace with CMS data or site.config.ts
const NAV_LINKS = [
  { label: "Our Work", href: "/our-work" },
  { label: "Impact",   href: "/#impact" },
  { label: "Stories",  href: "/#stories" },
  { label: "About",    href: "/about" },
  { label: "Contact",  href: "/contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`} role="navigation" aria-label="Main navigation">
      <div className={styles.navInner}>
        <Link href="/" className={styles.navLogo}>
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

        <button className={styles.hamburger} aria-label="Open menu" aria-expanded="false">
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
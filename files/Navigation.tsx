"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navigation.module.css";

// TODO: replace with CMS data or site.config.ts
// IA: mission-first pillars. Money language lives only on /donate and
// the transparency page — see CLAUDE.md "Tone & Money Language" rules.
type NavChild = { label: string; href: string };
type NavItem = { label: string; href: string; children?: NavChild[] };

const NAV_LINKS: NavItem[] = [
  {
    label: "What We Do",
    href: "/what-we-do",
    children: [
      { label: "Scholarships & Bursaries", href: "/what-we-do/scholarships" },
      { label: "Safe Motherhood", href: "/what-we-do/safe-motherhood" },
      { label: "Adult Literacy", href: "/what-we-do/adult-literacy" },
      { label: "Quality Education", href: "/what-we-do/education" },
      { label: "Medical Care", href: "/what-we-do/medical-care" },
    ],
  },
  { label: "Where We Work", href: "/where-we-work" },
  {
    label: "Get Involved",
    href: "/get-involved",
    children: [
      { label: "Volunteer", href: "/volunteer" },
      { label: "Partner With Us", href: "/partner" },
      { label: "Events", href: "/events" },
      { label: "Sponsor a Child", href: "/donate" },
    ],
  },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Our Mission", href: "/about" },
      { label: "Our Team", href: "/about/team" },
      { label: "Impact & Accountability", href: "/about/transparency" },
      { label: "Contact", href: "/contact" },
    ],
  },
  { label: "Stories", href: "/blog" },
];

function ChevronDown() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      aria-hidden="true"
      className={styles.chevron}
    >
      <path
        d="M2 3.5L5 6.5L8 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    setExpandedGroup(null);
  };

  const toggleGroup = (label: string) =>
    setExpandedGroup((prev) => (prev === label ? null : label));

  return (
    <>
      <nav
        className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className={styles.navInner}>
          <Link href="/" className={styles.navLogo} onClick={closeMenu}>
            <div className={styles.navLogoIcon} aria-hidden="true">
              P
            </div>
            Premier Foundation
          </Link>

          <div className={styles.navLinks}>
            {NAV_LINKS.map((item) =>
              item.children ? (
                <div key={item.href} className={styles.navGroup}>
                  <Link href={item.href} className={styles.navGroupTrigger}>
                    {item.label}
                    <ChevronDown />
                  </Link>
                  <div className={styles.dropdown} role="menu">
                    <Link
                      href={item.href}
                      className={styles.dropdownOverview}
                      role="menuitem"
                    >
                      {item.label} — Overview
                    </Link>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={styles.dropdownLink}
                        role="menuitem"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              )
            )}
            <Link href="/donate" className={styles.navDonate}>
              Donate
            </Link>
          </div>

          <button
            className={`${styles.hamburger} ${
              menuOpen ? styles.hamburgerOpen : ""
            }`}
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
        className={`${styles.mobileMenu} ${
          menuOpen ? styles.mobileMenuOpen : ""
        }`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          {NAV_LINKS.map((item) =>
            item.children ? (
              <div key={item.href} className={styles.mobileGroup}>
                <button
                  className={styles.mobileGroupToggle}
                  aria-expanded={expandedGroup === item.label}
                  onClick={() => toggleGroup(item.label)}
                  tabIndex={menuOpen ? 0 : -1}
                >
                  {item.label}
                  <span
                    className={`${styles.mobileChevron} ${
                      expandedGroup === item.label
                        ? styles.mobileChevronOpen
                        : ""
                    }`}
                    aria-hidden="true"
                  >
                    <ChevronDown />
                  </span>
                </button>
                <div
                  className={`${styles.mobileSubLinks} ${
                    expandedGroup === item.label
                      ? styles.mobileSubLinksOpen
                      : ""
                  }`}
                >
                  <Link
                    href={item.href}
                    className={styles.mobileSubLink}
                    onClick={closeMenu}
                    tabIndex={menuOpen && expandedGroup === item.label ? 0 : -1}
                  >
                    Overview
                  </Link>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={styles.mobileSubLink}
                      onClick={closeMenu}
                      tabIndex={
                        menuOpen && expandedGroup === item.label ? 0 : -1
                      }
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={styles.mobileLink}
                onClick={closeMenu}
                tabIndex={menuOpen ? 0 : -1}
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/donate"
            className={styles.mobileDonate}
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
          >
            Donate
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

import Link from "next/link";
import styles from "./Footer.module.css";

// TODO: replace with CMS data
const PROGRAMS_LINKS = [
  { label: "Healthcare Access",   href: "/programs#healthcare" },
  { label: "Education Programs",  href: "/programs#education" },
  { label: "Community Wellness",  href: "/programs#wellness" },
  { label: "Global Outreach",     href: "/programs#global" },
];

const ORG_LINKS = [
  { label: "About Us",       href: "/about" },
  { label: "Our Team",       href: "/about#team" },
  { label: "Annual Reports", href: "/about#reports" },
  { label: "Careers",        href: "/about#careers" },
];

const CONNECT_LINKS = [
  { label: "Contact Us",      href: "/contact" },
  { label: "Newsletter",      href: "/contact#newsletter" },
  { label: "Press",           href: "/contact#press" },
  { label: "Partner With Us", href: "/contact#partner" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        {/* Brand column */}
        <div>
          <div className={styles.footerBrand}>
            Premier Health &amp;<br />Education Foundation
          </div>
          {/* TODO: replace with CMS data */}
          <p className={styles.footerDesc}>
            Empowering communities through healthcare access and educational
            opportunity since 2008.
          </p>
        </div>

        {/* Programs column */}
        <div className={styles.footerCol}>
          <h4>Programs</h4>
          {PROGRAMS_LINKS.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
        </div>

        {/* Organization column */}
        <div className={styles.footerCol}>
          <h4>Organization</h4>
          {ORG_LINKS.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
        </div>

        {/* Connect column */}
        <div className={styles.footerCol}>
          <h4>Connect</h4>
          {CONNECT_LINKS.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
        </div>
      </div>

      <div className={styles.footerBottom}>
        <span>© {new Date().getFullYear()} Premier Health and Education Foundation. All rights reserved.</span>
        <div className={styles.footerBottomLinks}>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
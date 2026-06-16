import Link from "next/link";
import styles from "./Footer.module.css";

// TODO: replace with CMS data
const PROGRAMS_LINKS = [
  { label: "Scholarships & Bursaries",  href: "/what-we-do/scholarships" },
  { label: "Safe Motherhood",           href: "/what-we-do/safe-motherhood" },
  { label: "Adult Literacy",            href: "/what-we-do/adult-literacy" },
  { label: "Quality Education",         href: "/what-we-do/education" },
  { label: "Quality Medical Care",      href: "/what-we-do/medical-care" },
];

// TODO: replace with CMS data
const ORG_LINKS = [
  { label: "About Us",                  href: "/about" },
  { label: "Our Team",                  href: "/about/team" },
  { label: "Impact & Accountability",   href: "/about/transparency" },
  { label: "Annual Reports",            href: "/about/transparency" },
];

// Connect — Donate sits here as one quiet link, not a repeated CTA.
// TODO: replace with CMS data
const CONNECT_LINKS = [
  { label: "Contact Us",              href: "/contact" },
  { label: "Newsletter",              href: "/contact#newsletter" },
  { label: "Volunteer",               href: "/volunteer" },
  { label: "Partner With Us",         href: "/partner" },
  { label: "Donate",                  href: "/donate" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        {/* Brand column */}
        <div>
          <div className={styles.footerBrand}>
            {/* TODO: replace with CMS data */}
            Premier Education and Health Foundation
          </div>
          {/* TODO: replace with CMS data */}
          <p className={styles.footerDesc}>
            Transforming lives in Uganda through scholarships, safe motherhood,
            and quality education &amp; healthcare. Incorporated 14 March 2024.
          </p>
          <p className={styles.footerTrust}>
            Registered with Uganda Registration Services Bureau
          </p>

          {/* Contact info block */}
          {/* TODO: replace with CMS data */}
          <address className={styles.footerAddress}>
            <span>Premier Preparatory School Campus</span>
            <span>P.O. Box 335, Masaka, Uganda</span>
            <a href="tel:+256742693000">Tel: +256 742 693 000</a>
            <a href="mailto:premier.prep.sch@gmail.com">premier.prep.sch@gmail.com</a>
            <a href="mailto:partnerships@pehfuganda.org">partnerships@pehfuganda.org</a>
          </address>
        </div>

        {/* What We Do column */}
        <div className={styles.footerCol}>
          <h4>What We Do</h4>
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
        <span>
          &copy; {new Date().getFullYear()} Premier Education and Health Foundation.
          All rights reserved.
        </span>
        <div className={styles.footerBottomLinks}>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
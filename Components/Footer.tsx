import Link from "next/link";
import styles from "./Footer.module.css";

// TODO: replace with CMS data
const PROGRAMS_LINKS = [
  { label: "Scholarships & Bursaries",  href: "/programs#scholarships" },
  { label: "Safe Motherhood",           href: "/programs#safe-motherhood" },
  { label: "Adult Literacy",            href: "/programs#adult-literacy" },
  { label: "Quality Education",         href: "/programs#quality-education" },
  { label: "Quality Medical Care",      href: "/programs#medical-care" },
  { label: "Partnerships",              href: "/programs#partnerships" },
];

// TODO: replace with CMS data
const ORG_LINKS = [
  { label: "About Us",         href: "/about" },
  { label: "Transparency",     href: "/about#transparency" },
  { label: "Annual Reports",   href: "/about#reports" },
  { label: "Governance",       href: "/about#governance" },
];

// TODO: replace with CMS data
const CONNECT_LINKS = [
  { label: "Contact Us",              href: "/contact" },
  { label: "Partner With Us",         href: "/contact#partner" },
  { label: "Newsletter",              href: "/contact#newsletter" },
  { label: "Apply for Sponsorship",   href: "/apply" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        {/* Brand column */}
        <div>
          <div className={styles.footerBrand}>
            {/* TODO: replace with CMS data */}
            Premier Education and Health<br />Foundation Ltd
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
        <span>
          &copy; {new Date().getFullYear()} Premier Education and Health Foundation Ltd.
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
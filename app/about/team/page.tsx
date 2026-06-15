import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import styles from "./page.module.css";

// TODO: SEO agent — add OG image, canonical URL, and JSON-LD Organization schema
export const metadata: Metadata = {
  title: "Our Team | Premier Education and Health Foundation",
  description:
    "The educators, healthcare professionals, and community advocates who lead Premier Education and Health Foundation in Masaka, Uganda.",
};

// TODO: replace with CMS data — content agent owns this block
const TEAM = [
  {
    name: "Name Pending",
    role: "Founder & Executive Director",
    bio: "Leads PEHF's strategy and oversees its scholarship and safe-motherhood programmes across Masaka.",
    initials: "ED",
    colorClass: "avForest",
  },
  {
    name: "Name Pending",
    role: "Director of Education",
    bio: "Coordinates scholarships, bursaries, and quality-education investment with Premier Education Institute.",
    initials: "DE",
    colorClass: "avGold",
  },
  {
    name: "Name Pending",
    role: "Director of Health Programmes",
    bio: "Oversees safe motherhood and medical care within the Premier Health Care system.",
    initials: "DH",
    colorClass: "avSage",
  },
  {
    name: "Name Pending",
    role: "Finance & Accountability Lead",
    bio: "Maintains the financial records and reporting behind our 85%-to-programs commitment.",
    initials: "FA",
    colorClass: "avCoral",
  },
  {
    name: "Name Pending",
    role: "Community & Partnerships",
    bio: "Builds relationships with families, partners, and donors nationally and internationally.",
    initials: "CP",
    colorClass: "avForest",
  },
  {
    name: "Name Pending",
    role: "Programmes Coordinator",
    bio: "Runs day-to-day delivery, including the adult-literacy programmes during school holidays.",
    initials: "PC",
    colorClass: "avGold",
  },
];

export default function TeamPage() {
  return (
    <>
      <Navigation />

      {/* ═══ Hero ═══ */}
      <section className={styles.hero} aria-label="Our team hero">
        <div className={styles.heroInner}>
          <FadeIn>
            <div className={styles.sectionTag}>Our Team</div>
          </FadeIn>
          <FadeIn delay={0.1}>
            {/* TODO: replace with CMS data */}
            <h1 className={styles.heroTitle}>
              The people behind<br />
              <em>the work</em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            {/* TODO: replace with CMS data */}
            <p className={styles.heroDesc}>
              Educators, healthcare professionals, and community advocates,
              brought together by a shared conviction: that education and
              healthcare are rights, not privileges.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══ Team Grid ═══ */}
      <section className={styles.grid} aria-label="Team members">
        <div className={styles.gridInner}>
          <div className={styles.cards}>
            {TEAM.map((member, i) => (
              <FadeIn key={member.role} delay={i * 0.07}>
                <article className={styles.card}>
                  {/* Photo placeholder — TODO: replace with next/image when portraits are available */}
                  <div
                    className={`${styles.avatar} ${styles[member.colorClass]}`}
                    aria-hidden="true"
                  >
                    <span>{member.initials}</span>
                  </div>
                  {/* TODO: replace with CMS data */}
                  <h2 className={styles.cardName}>{member.name}</h2>
                  <div className={styles.cardRole}>{member.role}</div>
                  <p className={styles.cardBio}>{member.bio}</p>
                </article>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <p className={styles.note}>
              {/* TODO: CMS — replace placeholder names and add board/governance roster */}
              Full names, portraits, and biographies will be published as the
              team roster is confirmed.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className={styles.cta} aria-label="Join us">
        <FadeIn>
          <div className={styles.ctaInner}>
            <div className={styles.ctaDecor} aria-hidden="true" />
            {/* TODO: replace with CMS data */}
            <h2 className={styles.ctaTitle}>
              Want to stand alongside this team?
            </h2>
            <div className={styles.ctaBtns}>
              <Link href="/get-involved" className={styles.btnGold}>
                Get Involved <span aria-hidden="true">→</span>
              </Link>
              <Link href="/contact" className={styles.btnGhost}>
                Contact Us
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </>
  );
}

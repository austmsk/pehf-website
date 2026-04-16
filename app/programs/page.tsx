import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import styles from "./page.module.css";

// TODO: SEO agent — add OG image, canonical URL, and JSON-LD WebPage schema
export const metadata: Metadata = {
  title: "Programs | Premier Health & Education Foundation",
  description:
    "Explore PEHF's four program pillars — Healthcare Access, Education Programs, Community Wellness, and Global Outreach — each designed to create lasting change in underserved communities.",
};

// TODO: replace with CMS data — content agent owns this block
const PROGRAMS = [
  {
    id: "healthcare",
    tag: "Healthcare",
    title: "Healthcare Access",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. We dismantle barriers to medical care by funding community clinics, mobile health units, and preventive-care screenings — ensuring every person can access the services they need regardless of income or geography.",
    stat: { value: "48K+", label: "Lives Impacted" },
    initials: "HA",
    colorClass: "imageForest",
    initialsOnGold: false,
    href: "/programs/healthcare",
  },
  {
    id: "education",
    tag: "Education",
    title: "Education Programs",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Through scholarships, mentorship, and after-school enrichment, we level the playing field for students whose potential far outpaces their available resources, building clear pathways into higher education.",
    stat: { value: "2,400", label: "Scholarships Awarded" },
    initials: "EP",
    colorClass: "imageGold",
    initialsOnGold: true,
    href: "/programs/education",
  },
  {
    id: "wellness",
    tag: "Community",
    title: "Community Wellness",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Building healthier neighborhoods through nutrition education, mental health support, and community wellness workshops that strengthen the social fabric and create lasting resilience from within.",
    stat: { value: "9", label: "Active Wellness Hubs" },
    initials: "CW",
    colorClass: "imageSage",
    initialsOnGold: false,
    href: "/programs/wellness",
  },
  {
    id: "global",
    tag: "Global",
    title: "Global Outreach",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Partnering with organizations worldwide to improve health literacy and educational equity, reaching communities across 15 countries and growing — because inequity does not stop at borders.",
    stat: { value: "15", label: "Countries Reached" },
    initials: "GO",
    colorClass: "imageCoral",
    initialsOnGold: false,
    href: "/programs/global",
  },
];

export default function ProgramsPage() {
  return (
    <>
      <Navigation />

      {/* ═══ Hero ═══ */}
      <section className={styles.hero} aria-label="Programs overview">
        <div className={styles.heroInner}>
          <FadeIn>
            <div className={styles.sectionTag}>What We Do</div>
          </FadeIn>
          <FadeIn delay={0.1}>
            {/* TODO: replace with CMS data */}
            <h1 className={styles.heroTitle}>
              Programs that create<br />
              <em>lasting change</em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            {/* TODO: replace with CMS data */}
            <p className={styles.heroDesc}>
              Every programme we run flows from a single conviction: that access
              to healthcare and education is a right, not a privilege. Explore
              our four pillars below.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══ Program Feature Sections ═══ */}
      {PROGRAMS.map((program, i) => (
        <section
          key={program.id}
          id={program.id}
          className={`${styles.programSection} ${i % 2 === 0 ? styles.bgCream : styles.bgWarm}`}
          aria-label={program.title}
        >
          <div className={`${styles.programRow} ${i % 2 === 1 ? styles.programRowReversed : ""}`}>
            {/* Image placeholder — TODO: replace with next/image when photography is available */}
            <FadeIn delay={0.05} className={styles.imageWrapper}>
              <div
                className={`${styles.imagePlaceholder} ${styles[program.colorClass]}`}
                aria-hidden="true"
              >
                <span style={{ color: program.initialsOnGold ? "var(--forest)" : "white" }}>
                  {program.initials}
                </span>
              </div>
            </FadeIn>

            {/* Content */}
            <FadeIn delay={0.18} className={styles.contentWrapper}>
              <div className={styles.programContent}>
                <div className={styles.sectionTag}>{program.tag}</div>
                {/* TODO: replace with CMS data */}
                <h2 className={styles.programTitle}>{program.title}</h2>
                <p className={styles.programDesc}>{program.desc}</p>
                <div className={styles.programStat} aria-label={`${program.stat.value} ${program.stat.label}`}>
                  <span className={styles.programStatValue} aria-hidden="true">
                    {program.stat.value}
                  </span>
                  <span className={styles.programStatLabel} aria-hidden="true">
                    {program.stat.label}
                  </span>
                </div>
                <Link href={program.href} className={styles.programLink}>
                  Explore {program.title}{" "}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      ))}

      {/* ═══ CTA ═══ */}
      <section className={styles.cta} aria-label="Take action">
        <FadeIn>
          <div className={styles.ctaInner}>
            {/* Decorative gold rule — no radial glows, differentiated from homepage/our-work CTA */}
            <div className={styles.ctaDecor} aria-hidden="true" />
            {/* TODO: replace with CMS data */}
            <h2 className={styles.ctaTitle}>Ready to make a difference?</h2>
            <div className={styles.ctaBtns}>
              <Link href="/donate" className={styles.btnGold}>
                Make a Donation <span aria-hidden="true">♥</span>
              </Link>
              <Link href="/contact#partner" className={styles.btnGhost}>
                Partner With Us
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </>
  );
}
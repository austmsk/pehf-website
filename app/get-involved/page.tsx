import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import styles from "./page.module.css";

// TODO: SEO agent — add OG image, canonical URL, and JSON-LD WebPage schema
export const metadata: Metadata = {
  title: "Get Involved | Premier Education and Health Foundation",
  description:
    "Ways to take part in PEHF's work in Masaka, Uganda — volunteer, partner with us, join an event, or sponsor a child.",
};

// TODO: replace with CMS data — content agent owns this block.
// Participation options first; giving (Sponsor a Child) deliberately last.
const WAYS = [
  {
    title: "Volunteer",
    desc: "Lend your time and skills — teaching, mentoring, healthcare, or operations — alongside our team in Masaka and remotely.",
    href: "/volunteer",
    cta: "Volunteer with us",
    initials: "V",
    colorClass: "tileForest",
  },
  {
    title: "Partner With Us",
    desc: "Schools, clinics, companies, and organisations: cooperate with us to multiply impact across education and health.",
    href: "/partner",
    cta: "Explore partnership",
    initials: "P",
    colorClass: "tileSage",
  },
  {
    title: "Events",
    desc: "Join a fundraiser, community day, or open house — in Masaka and beyond — and meet the people behind the work.",
    href: "/events",
    cta: "See upcoming events",
    initials: "E",
    colorClass: "tileGold",
  },
  {
    title: "Sponsor a Child",
    desc: "Build an ongoing relationship with a learner: fund a named place at Premier Preparatory School for the year.",
    href: "/donate",
    cta: "Sponsor a child",
    initials: "S",
    colorClass: "tileCoral",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <Navigation theme="light" />

      {/* ═══ Hero ═══ */}
      <section className={styles.hero} aria-label="Get involved hero">
        <div className={styles.heroInner}>
          <FadeIn>
            <div className={styles.sectionTag}>Get Involved</div>
          </FadeIn>
          <FadeIn delay={0.1}>
            {/* TODO: replace with CMS data */}
            <h1 className={styles.heroTitle}>
              There's more than one way<br />
              <em>to make a difference</em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            {/* TODO: replace with CMS data */}
            <p className={styles.heroDesc}>
              Time, skills, partnership, or support — every contribution
              strengthens education and health in Masaka. Find the way that fits
              you.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══ Ways to help ═══ */}
      <section className={styles.ways} aria-label="Ways to get involved">
        <div className={styles.waysInner}>
          <div className={styles.tiles}>
            {WAYS.map((way, i) => (
              <FadeIn key={way.title} delay={i * 0.08}>
                <article className={styles.tile}>
                  <div
                    className={`${styles.tileIcon} ${styles[way.colorClass]}`}
                    aria-hidden="true"
                  >
                    {way.initials}
                  </div>
                  {/* TODO: replace with CMS data */}
                  <h2 className={styles.tileTitle}>{way.title}</h2>
                  <p className={styles.tileDesc}>{way.desc}</p>
                  <Link href={way.href} className={styles.tileLink}>
                    {way.cta} <span aria-hidden="true">→</span>
                  </Link>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className={styles.cta} aria-label="Stay in touch">
        <FadeIn>
          <div className={styles.ctaInner}>
            <div className={styles.ctaDecor} aria-hidden="true" />
            {/* TODO: replace with CMS data */}
            <h2 className={styles.ctaTitle}>
              Not sure where you fit? Let's talk.
            </h2>
            <div className={styles.ctaBtns}>
              <Link href="/contact" className={styles.btnGold}>
                Contact Us <span aria-hidden="true">→</span>
              </Link>
              <Link href="/what-we-do" className={styles.btnGhost}>
                See Our Work
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </>
  );
}

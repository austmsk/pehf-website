import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import styles from "./page.module.css";

// TODO: SEO agent — add OG image, canonical URL, and JSON-LD Place schema
export const metadata: Metadata = {
  title: "Where We Work | Premier Education and Health Foundation",
  description:
    "PEHF works in Masaka, Uganda, through Premier Preparatory School and the Premier Health Care system — deep, local, and accountable rather than spread thin.",
};

// TODO: replace with CMS data — content agent owns this block
const INSTITUTIONS = [
  {
    name: "Premier Preparatory School",
    kind: "Education",
    desc: "The Masaka school at the heart of our scholarship and bursary work — Top Class through Primary Five — where sponsored pupils learn, eat, and are cared for.",
    initials: "PP",
    colorClass: "imageForest",
  },
  {
    name: "Premier Health Care System",
    kind: "Health",
    desc: "The network of care behind our safe-motherhood and medical-care objectives, serving destitute mothers and patients across the surrounding community.",
    initials: "PH",
    colorClass: "imageGold",
  },
];

export default function WhereWeWorkPage() {
  return (
    <>
      <Navigation />

      {/* ═══ Hero ═══ */}
      <section className={styles.hero} aria-label="Where we work hero">
        <div className={styles.heroInner}>
          <FadeIn>
            <div className={styles.sectionTag}>Where We Work</div>
          </FadeIn>
          <FadeIn delay={0.1}>
            {/* TODO: replace with CMS data */}
            <h1 className={styles.heroTitle}>
              Rooted in<br />
              <em>Masaka, Uganda</em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            {/* TODO: replace with CMS data */}
            <p className={styles.heroDesc}>
              We work in one place, deeply. Rather than spreading thin across
              many countries, PEHF concentrates on the community around Premier
              Education Institute and the Premier Health Care system in Masaka —
              where we can see, measure, and be held accountable for every result.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══ Map / Place ═══ */}
      <section className={styles.mapSection} aria-label="Our location">
        <div className={styles.mapInner}>
          <FadeIn className={styles.mapMedia}>
            {/* Map placeholder — TODO: replace with an embedded map or next/image */}
            <div className={styles.mapPlaceholder} aria-hidden="true">
              <span className={styles.mapPin}>◉</span>
              <span className={styles.mapLabel}>Masaka, Uganda</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.15} className={styles.mapText}>
            <div className={styles.sectionTag}>The Place</div>
            {/* TODO: replace with CMS data */}
            <h2 className={styles.sectionTitle}>A city, a community, a focus</h2>
            <p className={styles.bodyText}>
              Masaka is a regional hub in central Uganda, south-west of Kampala.
              It is home to the families we serve and the institutions we work
              through — close enough to walk between, which is exactly the point.
            </p>
            <p className={styles.bodyText}>
              Concentrating our work here means a scholarship, a safe delivery,
              and a literacy class can reinforce one another in the same
              households. Local presence is what makes our reporting honest and
              our impact verifiable.
            </p>
            <div className={styles.factRow}>
              <div className={styles.fact}>
                <span className={styles.factValue}>1</span>
                <span className={styles.factLabel}>Community, served deeply</span>
              </div>
              <div className={styles.fact}>
                <span className={styles.factValue}>2</span>
                <span className={styles.factLabel}>Partner institutions</span>
              </div>
              <div className={styles.fact}>
                <span className={styles.factValue}>2024</span>
                <span className={styles.factLabel}>Working since</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ Institutions ═══ */}
      <section className={styles.institutions} aria-label="Partner institutions">
        <div className={styles.instInner}>
          <FadeIn>
            <div className={styles.sectionTag}>On the Ground</div>
            <h2 className={styles.sectionTitle}>Where the work happens</h2>
            <p className={styles.sectionDesc}>
              Two institutions anchor everything we do in Masaka.
            </p>
          </FadeIn>
          <div className={styles.instGrid}>
            {INSTITUTIONS.map((inst, i) => (
              <FadeIn key={inst.name} delay={i * 0.1}>
                <article className={styles.instCard}>
                  <div
                    className={`${styles.instImage} ${styles[inst.colorClass]}`}
                    aria-hidden="true"
                  >
                    <span>{inst.initials}</span>
                  </div>
                  <div className={styles.instBody}>
                    <div className={styles.instKind}>{inst.kind}</div>
                    {/* TODO: replace with CMS data */}
                    <h3 className={styles.instName}>{inst.name}</h3>
                    <p className={styles.instDesc}>{inst.desc}</p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className={styles.cta} aria-label="Explore further">
        <FadeIn>
          <div className={styles.ctaInner}>
            <div className={styles.ctaDecor} aria-hidden="true" />
            {/* TODO: replace with CMS data */}
            <h2 className={styles.ctaTitle}>See what we do in Masaka</h2>
            <div className={styles.ctaBtns}>
              <Link href="/what-we-do" className={styles.btnGold}>
                Our Work <span aria-hidden="true">→</span>
              </Link>
              <Link href="/get-involved" className={styles.btnGhost}>
                Get Involved
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import styles from "./page.module.css";

// TODO: SEO agent — add OG image, canonical URL, and JSON-LD WebPage schema
export const metadata: Metadata = {
  title: "Our Programs | Premier Education and Health Foundation",
  description:
    "PEHF's six core objectives: scholarships & bursaries, safe motherhood, adult literacy, quality education investment, quality medical care, and international partnerships.",
};

// TODO: replace with CMS data — content agent owns this block
const PROGRAMS = [
  {
    id: "scholarships",
    tag: "Education",
    title: "Scholarships & Bursaries",
    desc: "We provide monetary and scholastic support to financially needy learners at institutions aligned with Premier Education Institute. This includes full sponsorship for Top Class & P.1–P.3 pupils and partial bursaries for P.4–P.5 at Premier Preparatory School, Masaka.",
    stat: { value: "$1,200", label: "Full Annual Sponsorship" },
    initials: "SB",
    colorClass: "imageForest",
  },
  {
    id: "safe-motherhood",
    tag: "Health",
    title: "Safe Motherhood",
    desc: "Through moral and monetary support, we ensure safe delivery of babies within the Premier Health Care system for destitute mothers who cannot afford care.",
    stat: { value: "$150", label: "Safe Delivery Kit + Care" },
    initials: "SM",
    colorClass: "imageGold",
  },
  {
    id: "adult-literacy",
    tag: "Education",
    title: "Adult Literacy Programs",
    desc: "We sponsor illiteracy eradication programs for adults, run during school holidays, to break cycles of poverty through education.",
    stat: { value: "Holidays", label: "Program Schedule" },
    initials: "AL",
    colorClass: "imageSage",
  },
  {
    id: "quality-education",
    tag: "Education",
    title: "Quality Education Investment",
    desc: "We optimize teacher salaries to retain highly qualified, dedicated instructors. We also construct and equip state-of-the-art classrooms, lecture theaters, laboratories, and research units.",
    stat: { value: "$25K", label: "Builds a Classroom Block" },
    initials: "QE",
    colorClass: "imageForest",
  },
  {
    id: "medical-care",
    tag: "Health",
    title: "Quality Medical Care",
    desc: "We support the provision of quality medical care to patients within Premier Health Care system and the surrounding community in Masaka.",
    stat: { value: "$5,000", label: "Funds 10 Safe Deliveries" },
    initials: "QM",
    colorClass: "imageGold",
  },
  {
    id: "partnerships",
    tag: "Fundraising",
    title: "Partnerships & Fundraising",
    desc: "We solicit donations nationally and internationally and cooperate with like-minded organizations to fund these objectives and multiply impact.",
    stat: { value: "Global", label: "Donor Network" },
    initials: "PF",
    colorClass: "imageSage",
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
              Six objectives.<br />
              <em>One mission.</em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            {/* TODO: replace with CMS data */}
            <p className={styles.heroDesc}>
              Every programme we run flows from a single conviction: that
              quality education and healthcare are rights, not privileges.
              Explore our six core objectives below.
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
                <span>{program.initials}</span>
              </div>
            </FadeIn>

            {/* Content */}
            <FadeIn delay={0.18} className={styles.contentWrapper}>
              <div className={styles.programContent}>
                <div className={styles.sectionTag}>{program.tag}</div>
                {/* TODO: replace with CMS data */}
                <h2 className={styles.programTitle}>{program.title}</h2>
                <p className={styles.programDesc}>{program.desc}</p>
                <div
                  className={styles.programStat}
                  aria-label={`${program.stat.value} — ${program.stat.label}`}
                >
                  <span className={styles.programStatValue} aria-hidden="true">
                    {program.stat.value}
                  </span>
                  <span className={styles.programStatLabel} aria-hidden="true">
                    {program.stat.label}
                  </span>
                </div>
                <Link href="/apply" className={styles.programLink}>
                  Apply for Support <span aria-hidden="true">→</span>
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
            <div className={styles.ctaDecor} aria-hidden="true" />
            {/* TODO: replace with CMS data */}
            <h2 className={styles.ctaTitle}>
              Your Gift Educates a Child. Saves a Mother. Builds a Nation.
            </h2>
            <div className={styles.ctaBtns}>
              <Link href="/donate" className={styles.btnGold}>
                Donate Now <span aria-hidden="true">♥</span>
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

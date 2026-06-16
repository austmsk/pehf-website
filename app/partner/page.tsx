import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import styles from "../_styles/listing.module.css";

// TODO: SEO agent — add OG image, canonical URL, and JSON-LD WebPage schema
export const metadata: Metadata = {
  title: "Partner With Us | Premier Education and Health Foundation",
  description:
    "Organisations, schools, clinics, and companies: cooperate with PEHF to multiply impact across education and health in Masaka, Uganda.",
};

// TODO: replace with CMS data — content agent owns this block
const PARTNERS = [
  {
    title: "Institutions & Schools",
    desc: "Twin with Premier Preparatory School, share curriculum and teaching expertise, or co-run programmes.",
  },
  {
    title: "Healthcare Partners",
    desc: "Clinics, hospitals, and health NGOs can strengthen our safe-motherhood and medical-care work.",
  },
  {
    title: "Corporate Partners",
    desc: "Companies can sponsor objectives, match employee giving, or contribute skills and resources.",
  },
  {
    title: "Foundations & NGOs",
    desc: "Like-minded organisations can co-fund objectives and share evaluation and reporting.",
  },
];

export default function PartnerPage() {
  return (
    <>
      <Navigation theme="light" />

      <section className={styles.hero} aria-label="Partner hero">
        <div className={styles.heroInner}>
          <FadeIn>
            <div className={styles.sectionTag}>Partner With Us</div>
          </FadeIn>
          <FadeIn delay={0.1}>
            {/* TODO: replace with CMS data */}
            <h1 className={styles.heroTitle}>
              Multiply impact,<br />
              <em>together</em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            {/* TODO: replace with CMS data */}
            <p className={styles.heroDesc}>
              We solicit support nationally and internationally and cooperate
              with like-minded organisations. A partnership lets us reach further
              than either of us could alone.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className={styles.section} aria-label="Partnership types">
        <div className={styles.inner}>
          <FadeIn>
            <div className={styles.sectionTag}>Ways to Partner</div>
            <h2 className={styles.sectionTitle}>Find your fit</h2>
            <p className={styles.sectionDesc}>
              Whatever your sector, there is a way to work alongside us.
            </p>
          </FadeIn>
          <div className={`${styles.grid} ${styles.gridTwo}`}>
            {PARTNERS.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.08}>
                <article className={styles.card}>
                  <div className={styles.cardNum} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  {/* TODO: replace with CMS data */}
                  <h3 className={styles.cardTitle}>{p.title}</h3>
                  <p className={styles.cardDesc}>{p.desc}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta} aria-label="Start a conversation">
        <FadeIn>
          <div className={styles.ctaInner}>
            <div className={styles.ctaDecor} aria-hidden="true" />
            {/* TODO: replace with CMS data */}
            <h2 className={styles.ctaTitle}>Let's explore what we could build</h2>
            <div className={styles.ctaBtns}>
              <Link href="/contact" className={styles.btnGold}>
                Start a Conversation <span aria-hidden="true">→</span>
              </Link>
              <Link href="/about/transparency" className={styles.btnGhost}>
                See Our Accountability
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </>
  );
}

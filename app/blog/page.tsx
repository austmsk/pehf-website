import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import styles from "../_styles/listing.module.css";

// TODO: SEO agent — add OG image, canonical URL, and JSON-LD Blog schema
export const metadata: Metadata = {
  title: "Stories | Premier Education and Health Foundation",
  description:
    "Updates, field notes, and stories from PEHF's work in Masaka, Uganda — scholarships, safe motherhood, and quality education and healthcare.",
};

// TODO: CMS — stories/blog index. Placeholder entries until the blog is live.
const STORIES = [
  {
    tag: "Scholarships",
    title: "Why we sponsor the earliest years first",
    excerpt:
      "The case for concentrating full sponsorship on Top Class through Primary Three — and what it means for a child's whole education.",
    meta: "Coming soon",
  },
  {
    tag: "Safe Motherhood",
    title: "What a safe delivery actually costs",
    excerpt:
      "A breakdown of the antenatal care, delivery kit, and follow-up behind every supported birth in the Premier Health Care system.",
    meta: "Coming soon",
  },
  {
    tag: "Accountability",
    title: "How we get to 85% to programmes",
    excerpt:
      "A plain-language look at where every shilling goes and how we keep overhead low without cutting corners.",
    meta: "Coming soon",
  },
];

export default function StoriesPage() {
  return (
    <>
      <Navigation />

      <section className={styles.hero} aria-label="Stories hero">
        <div className={styles.heroInner}>
          <FadeIn>
            <div className={styles.sectionTag}>Stories</div>
          </FadeIn>
          <FadeIn delay={0.1}>
            {/* TODO: replace with CMS data */}
            <h1 className={styles.heroTitle}>
              Field notes from<br />
              <em>Masaka</em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            {/* TODO: replace with CMS data */}
            <p className={styles.heroDesc}>
              The people, decisions, and results behind our work — told plainly.
              Our first stories are on the way.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className={styles.section} aria-label="Latest stories">
        <div className={styles.inner}>
          <FadeIn>
            <div className={styles.sectionTag}>Latest</div>
            <h2 className={styles.sectionTitle}>Recent stories</h2>
          </FadeIn>
          <div className={styles.grid}>
            {STORIES.map((post, i) => (
              <FadeIn key={post.title} delay={i * 0.08}>
                <article className={styles.card}>
                  <div className={styles.cardNum} aria-hidden="true">
                    {post.tag}
                  </div>
                  {/* TODO: replace with CMS data */}
                  <h3 className={styles.cardTitle}>{post.title}</h3>
                  <p className={styles.cardDesc}>{post.excerpt}</p>
                  <span className={styles.link} aria-hidden="true">
                    {post.meta}
                  </span>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta} aria-label="Stay in touch">
        <FadeIn>
          <div className={styles.ctaInner}>
            <div className={styles.ctaDecor} aria-hidden="true" />
            {/* TODO: replace with CMS data */}
            <h2 className={styles.ctaTitle}>Follow the work as it unfolds</h2>
            <div className={styles.ctaBtns}>
              <Link href="/contact" className={styles.btnGold}>
                Get Updates <span aria-hidden="true">→</span>
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

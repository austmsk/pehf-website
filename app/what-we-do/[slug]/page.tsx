import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import { PROGRAMS, getProgram } from "../programs";
import styles from "./page.module.css";

// Only the objectives that have a detail page get statically generated.
export function generateStaticParams() {
  return PROGRAMS.filter((p) => p.hasDetail).map((p) => ({ slug: p.slug }));
}

// TODO: SEO agent — add OG image, canonical URL, and JSON-LD WebPage schema
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program || !program.hasDetail) {
    return { title: "What We Do | Premier Education and Health Foundation" };
  }
  return {
    title: `${program.title} | Premier Education and Health Foundation`,
    description: program.lead,
  };
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = getProgram(slug);

  if (!program || !program.hasDetail) {
    notFound();
  }

  const others = PROGRAMS.filter((p) => p.hasDetail && p.slug !== program.slug);

  return (
    <>
      <Navigation />

      {/* ═══ Hero ═══ */}
      <section className={styles.hero} aria-label={program.title}>
        <div className={styles.heroInner}>
          <FadeIn>
            <Link href="/what-we-do" className={styles.breadcrumb}>
              <span aria-hidden="true">←</span> What We Do
            </Link>
          </FadeIn>
          <FadeIn delay={0.05}>
            <div className={styles.sectionTag}>{program.tag}</div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className={styles.heroTitle}>{program.title}</h1>
          </FadeIn>
          <FadeIn delay={0.18}>
            <p className={styles.heroDesc}>{program.lead}</p>
          </FadeIn>
        </div>
      </section>

      {/* ═══ Body ═══ */}
      <section className={styles.body} aria-label="About this objective">
        <div className={styles.bodyInner}>
          <FadeIn className={styles.imageSide}>
            <div
              className={`${styles.imagePlaceholder} ${styles[program.colorClass]}`}
              aria-hidden="true"
            >
              <span>{program.initials}</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statValue}>{program.stat.value}</span>
              <span className={styles.statLabel}>{program.stat.label}</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.12} className={styles.textSide}>
            {/* TODO: replace with CMS data */}
            {program.body?.map((para, i) => (
              <p key={i} className={styles.para}>
                {para}
              </p>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* ═══ How it works ═══ */}
      {program.points && (
        <section className={styles.points} aria-label="How it works">
          <div className={styles.pointsInner}>
            <FadeIn>
              <div className={styles.sectionTag}>How It Works</div>
              <h2 className={styles.pointsTitle}>The essentials</h2>
            </FadeIn>
            <div className={styles.pointsGrid}>
              {program.points.map((point, i) => (
                <FadeIn key={point.title} delay={i * 0.1}>
                  <div className={styles.pointCard}>
                    <div className={styles.pointNum} aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3>{point.title}</h3>
                    {/* TODO: replace with CMS data */}
                    <p>{point.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ Other objectives ═══ */}
      <section className={styles.others} aria-label="Other objectives">
        <div className={styles.othersInner}>
          <FadeIn>
            <div className={styles.sectionTag}>Explore More</div>
            <h2 className={styles.othersTitle}>Other objectives</h2>
          </FadeIn>
          <div className={styles.othersList}>
            {others.map((p, i) => (
              <FadeIn key={p.slug} delay={i * 0.06}>
                <Link href={`/what-we-do/${p.slug}`} className={styles.otherLink}>
                  <span className={styles.otherTag}>{p.tag}</span>
                  <span className={styles.otherName}>{p.title}</span>
                  <span className={styles.otherArrow} aria-hidden="true">→</span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA — involvement first; sponsorship is the quieter option ═══ */}
      <section className={styles.cta} aria-label="Take action">
        <FadeIn>
          <div className={styles.ctaInner}>
            <div className={styles.ctaDecor} aria-hidden="true" />
            {/* TODO: replace with CMS data */}
            <h2 className={styles.ctaTitle}>Help carry this work forward</h2>
            <div className={styles.ctaBtns}>
              <Link href="/get-involved" className={styles.btnGold}>
                Get Involved <span aria-hidden="true">→</span>
              </Link>
              <Link href="/donate" className={styles.btnGhost}>
                Sponsor a Child
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </>
  );
}

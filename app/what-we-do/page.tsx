import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import { PROGRAMS } from "./programs";
import styles from "./page.module.css";

// TODO: SEO agent — add OG image, canonical URL, and JSON-LD WebPage schema
export const metadata: Metadata = {
  title: "What We Do | Premier Education and Health Foundation",
  description:
    "PEHF's core objectives: scholarships & bursaries, safe motherhood, adult literacy, quality education, quality medical care, and partnerships — serving Masaka, Uganda.",
};

export default function WhatWeDoPage() {
  return (
    <>
      <Navigation />

      {/* ═══ Hero ═══ */}
      <section className={styles.hero} aria-label="What we do overview">
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
              Every programme we run flows from a single conviction: that quality
              education and healthcare are rights, not privileges. Here is the
              work, objective by objective.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══ Objectives Grid ═══ */}
      <section className={styles.grid} aria-label="Our objectives">
        <div className={styles.gridInner}>
          <div className={styles.cards}>
            {PROGRAMS.map((program, i) => {
              const href = program.hasDetail
                ? `/what-we-do/${program.slug}`
                : program.externalHref ?? "/get-involved";
              return (
                <FadeIn key={program.slug} delay={i * 0.07}>
                  <article className={styles.card}>
                    <div className={styles.cardNum} aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className={styles.cardTag}>{program.tag}</div>
                    <h2 className={styles.cardTitle}>{program.title}</h2>
                    <p className={styles.cardDesc}>{program.short}</p>
                    <div
                      className={styles.cardStat}
                      aria-label={`${program.stat.value} — ${program.stat.label}`}
                    >
                      <span className={styles.cardStatValue} aria-hidden="true">
                        {program.stat.value}
                      </span>
                      <span className={styles.cardStatLabel} aria-hidden="true">
                        {program.stat.label}
                      </span>
                    </div>
                    <Link href={href} className={styles.cardLink}>
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ CTA — work-first, no donation ask (see Tone & Money rules) ═══ */}
      <section className={styles.cta} aria-label="Explore further">
        <FadeIn>
          <div className={styles.ctaInner}>
            <div className={styles.ctaDecor} aria-hidden="true" />
            {/* TODO: replace with CMS data */}
            <h2 className={styles.ctaTitle}>
              See where this work happens — and how to be part of it.
            </h2>
            <div className={styles.ctaBtns}>
              <Link href="/where-we-work" className={styles.btnGold}>
                Where We Work <span aria-hidden="true">→</span>
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

import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import styles from "../_styles/listing.module.css";

// TODO: SEO agent — add OG image, canonical URL, and JSON-LD Event schema
export const metadata: Metadata = {
  title: "Events | Premier Education and Health Foundation",
  description:
    "Fundraisers, community days, and open houses with Premier Education and Health Foundation in Masaka, Uganda, and beyond.",
};

// TODO: CMS — events listing. Empty until the schedule is published.
const EVENTS: { day: string; month: string; title: string; meta: string }[] = [];

export default function EventsPage() {
  return (
    <>
      <Navigation theme="light" />

      <section className={styles.hero} aria-label="Events hero">
        <div className={styles.heroInner}>
          <FadeIn>
            <div className={styles.sectionTag}>Events</div>
          </FadeIn>
          <FadeIn delay={0.1}>
            {/* TODO: replace with CMS data */}
            <h1 className={styles.heroTitle}>
              Gather, learn,<br />
              <em>and give back</em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            {/* TODO: replace with CMS data */}
            <p className={styles.heroDesc}>
              From community days in Masaka to fundraisers abroad, our events are
              where supporters meet the people behind the work. Here is what's
              coming up.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className={styles.section} aria-label="Upcoming events">
        <div className={styles.inner}>
          <FadeIn>
            <div className={styles.sectionTag}>Upcoming</div>
            <h2 className={styles.sectionTitle}>What's on</h2>
          </FadeIn>

          {EVENTS.length > 0 ? (
            <div className={styles.rows}>
              {EVENTS.map((evt, i) => (
                <FadeIn key={`${evt.title}-${i}`} delay={i * 0.07}>
                  <article className={styles.row}>
                    <div className={styles.rowDate} aria-hidden="true">
                      <span className={styles.rowDateDay}>{evt.day}</span>
                      <span className={styles.rowDateMonth}>{evt.month}</span>
                    </div>
                    <div className={styles.rowBody}>
                      <h3 className={styles.rowTitle}>{evt.title}</h3>
                      <p className={styles.rowMeta}>{evt.meta}</p>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          ) : (
            <FadeIn>
              {/* TODO: CMS — replace empty state once events are scheduled */}
              <div className={styles.empty}>
                <p className={styles.emptyTitle}>No events scheduled just yet</p>
                <p className={styles.emptyDesc}>
                  Our 2025 calendar is being planned. Get in touch to hear about
                  community days, open houses, and fundraisers as they're
                  announced.
                </p>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      <section className={styles.cta} aria-label="Stay informed">
        <FadeIn>
          <div className={styles.ctaInner}>
            <div className={styles.ctaDecor} aria-hidden="true" />
            {/* TODO: replace with CMS data */}
            <h2 className={styles.ctaTitle}>Be the first to know</h2>
            <div className={styles.ctaBtns}>
              <Link href="/contact" className={styles.btnGold}>
                Get Updates <span aria-hidden="true">→</span>
              </Link>
              <Link href="/get-involved" className={styles.btnGhost}>
                Other Ways to Help
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </>
  );
}

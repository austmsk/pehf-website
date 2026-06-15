import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import styles from "./page.module.css";

// TODO: SEO agent — add OG image, canonical URL, and JSON-LD WebPage schema
export const metadata: Metadata = {
  title: "Impact & Accountability | Premier Education and Health Foundation",
  description:
    "Where the money goes. PEHF publishes its results and financials: 85% of funds direct to programs, audited figures, and concrete outcomes in Masaka, Uganda.",
};

// TODO: replace with CMS data — content agent owns this block — update with real data once collected
const STATS = [
  { value: "85%", label: "Funds Direct to Programs" },
  { value: "2024", label: "Year Founded" },
  { value: "6", label: "Core Objectives Funded" },
  { value: "Masaka", label: "Uganda — Home Base" },
];

// TODO: replace with CMS data — content agent owns this block
const STORIES = [
  {
    quote:
      "Before PEHF, I thought I'd drop out in P.3. Now I'm top of my class and want to be a doctor. The scholarship paid for everything — books, uniform, and my medical check-up. I don't have to worry about being sent home for fees.",
    name: "Mary",
    role: "Age 9, PEHF Scholar — Premier Preparatory School, Masaka",
    initials: "M",
  },
  {
    quote:
      "PEHF paid for my delivery. My baby and I are alive because of you. I had nothing — no money, no family nearby — and they came and made sure I was safe. No other organisation was there for me.",
    name: "Nakato",
    role: "Mother, Masaka",
    initials: "N",
  },
];

// TODO: replace with CMS data — content agent owns this block — update with real data
const TRANSPARENCY_POINTS = [
  {
    stat: "85%",
    label: "To Programs",
    desc: "85 cents of every dollar contributed goes directly to scholarships, safe deliveries, teacher salaries, and facility construction.",
  },
  {
    stat: "100%",
    label: "Transparency",
    desc: "PEHF publishes annual financial and impact reports. Every donor receives a summary of how their gift was deployed.",
  },
  {
    stat: "URSB",
    label: "Regulated",
    desc: "Registered with the Uganda Registration Services Bureau. Certificate of Incorporation issued 14 March 2024.",
  },
];

export default function TransparencyPage() {
  return (
    <>
      <Navigation />

      {/* ═══ Hero ═══ */}
      <section className={styles.hero} aria-label="Impact and accountability hero">
        <div className={styles.heroInner}>
          <FadeIn>
            <div className={styles.sectionTag}>Impact &amp; Accountability</div>
          </FadeIn>
          <FadeIn delay={0.1}>
            {/* TODO: replace with CMS data */}
            <h1 className={styles.heroTitle}>
              Where the money goes &mdash;<br />
              <em>in full view</em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            {/* TODO: replace with CMS data */}
            <p className={styles.heroDesc}>
              Trust is earned with numbers, not slogans. Founded in 2024, PEHF
              publishes what it raises, where it went, and the outcomes it
              produced. This is our public ledger.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══ Stats Band ═══ */}
      <section className={styles.statsBand} aria-label="Accountability statistics">
        <div className={styles.statsInner}>
          {STATS.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1}>
              <div className={styles.statItem}>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
                {/* TODO: update with real data when available */}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ═══ Allocation / Transparency ═══ */}
      <section className={styles.transparency} aria-label="How funds are allocated">
        <div className={styles.inner}>
          <FadeIn>
            <div className={styles.sectionTag}>Allocation</div>
            {/* TODO: replace with CMS data */}
            <h2 className={styles.sectionTitle}>Every shilling accounted for</h2>
            <p className={styles.sectionDesc}>
              85% of funds go directly to programs. We are regulated by the
              Uganda Registration Services Bureau and report on every objective.
            </p>
          </FadeIn>

          <div className={styles.transGrid}>
            {TRANSPARENCY_POINTS.map((point, i) => (
              <FadeIn key={point.label} delay={i * 0.1}>
                <div className={styles.transCard}>
                  <div className={styles.transStat}>{point.stat}</div>
                  <div className={styles.transLabel}>{point.label}</div>
                  {/* TODO: replace with CMS data */}
                  <p className={styles.transDesc}>{point.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Outcomes / Stories ═══ */}
      <section className={styles.stories} aria-label="Outcomes from Masaka">
        <div className={styles.inner}>
          <FadeIn>
            <div className={styles.sectionTag}>Outcomes</div>
            {/* TODO: replace with CMS data */}
            <h2 className={styles.sectionTitle}>What the figures funded</h2>
            <p className={styles.sectionDesc}>
              Behind every statistic is a name, a face, a life changed. These are
              the results the numbers above paid for.
            </p>
          </FadeIn>

          <div className={styles.storiesGrid}>
            {STORIES.map((story, i) => (
              <FadeIn key={story.name} delay={i * 0.12}>
                <article className={styles.storyCard}>
                  <div className={styles.storyQuoteMark} aria-hidden="true">&ldquo;</div>
                  <blockquote>
                    <p className={styles.storyQuote}>{story.quote}</p>
                    <footer className={styles.storyAuthor}>
                      <div className={styles.storyAvatar} aria-hidden="true">
                        {story.initials}
                      </div>
                      <div>
                        <div className={styles.storyName}>{story.name}</div>
                        <div className={styles.storyRole}>{story.role}</div>
                      </div>
                    </footer>
                  </blockquote>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Annual Report ═══ */}
      <section className={styles.annualReport} aria-label="Annual report">
        <div className={styles.reportInner}>
          <FadeIn>
            <div className={styles.sectionTagLight}>Annual Report</div>
            {/* TODO: replace with CMS data / link to actual PDF when available */}
            <h2 className={styles.reportTitle}>2024 Impact &amp; Financial Report</h2>
            <p className={styles.reportDesc}>
              Our first annual report will be published in early 2025, covering
              all program activity, financial statements, and donor impact
              summaries since incorporation on 14 March 2024.
            </p>
            <button
              className={styles.reportBtn}
              disabled
              aria-label="Annual report download — coming soon"
            >
              Download Annual Report (Coming Soon)
            </button>
          </FadeIn>
        </div>
      </section>

      {/* ═══ CTA — accountability is evidence, not an ask (Tone & Money rules) ═══ */}
      <section className={styles.cta} aria-label="Explore further">
        <FadeIn>
          <div className={styles.ctaInner}>
            <div className={styles.ctaTag} aria-hidden="true">✦ See It For Yourself</div>
            {/* TODO: replace with CMS data */}
            <h2>The work behind the numbers</h2>
            <p>
              These results come from six concrete objectives in Masaka. Explore
              the programmes, or find a way to take part.
            </p>
            <div className={styles.ctaBtns}>
              <Link href="/what-we-do" className={styles.btnGold}>
                See Our Work <span aria-hidden="true">→</span>
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

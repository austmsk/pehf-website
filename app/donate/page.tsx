import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import styles from "./page.module.css";

// TODO: SEO agent — add OG image, canonical URL, and JSON-LD
export const metadata: Metadata = {
  title: "Donate | Premier Education and Health Foundation",
  description:
    "Support PEHF's scholarships, safe motherhood, and quality education & healthcare programs in Uganda. 85% of funds go directly to programs.",
};

// TODO: replace with CMS data — content agent owns this block
const VALUE_PROPS = [
  {
    icon: "📍",
    title: "Locally Rooted",
    desc: "We operate directly in Masaka, Uganda — no distant headquarters or layers of bureaucracy between your gift and the child or mother it reaches.",
  },
  {
    icon: "⚡",
    title: "Dual Impact",
    desc: "One gift strengthens both education (scholarships, classrooms, teachers) and healthcare (safe deliveries, medical care) in the same communities.",
  },
  {
    icon: "📊",
    title: "85% Direct to Programs",
    desc: "85 cents of every dollar contributed goes directly to program delivery. We publish annual financial and impact reports for full accountability.",
  },
  {
    icon: "✅",
    title: "Verifiable Impact",
    desc: "We track outcomes rigorously — pupil academic results, delivery outcomes, adult literacy completions — and share results with every donor.",
  },
];

// TODO: replace with CMS data — content agent owns this block
const GIVING_TIERS = [
  {
    amount: "$50 / €45 / £40",
    impact: "Scholastic materials for 1 pupil for a term",
    highlight: false,
  },
  {
    amount: "$150 / €135 / £120",
    impact: "Safe delivery kit + postpartum care for 1 mother",
    highlight: false,
  },
  {
    amount: "$500 / €450 / £400",
    impact: "Annual partial bursary for a P.4–P.5 pupil",
    highlight: false,
  },
  {
    amount: "$1,200 / €1,080 / £950",
    impact: "Full annual sponsorship: tuition, uniform, medical check-up",
    highlight: true,
  },
  {
    amount: "$5,000 / €4,500 / £4,000",
    impact: "Equip a primary science lab OR fund 10 safe deliveries",
    highlight: false,
  },
  {
    amount: "$25,000 / €22,500 / £20,000",
    impact: "Construct a classroom block OR 5 teachers' salaries for a year",
    highlight: false,
  },
];

export default function DonatePage() {
  return (
    <>
      <Navigation />

      {/* ═══ Hero ═══ */}
      <section className={styles.hero} aria-label="Donate hero">
        <div className={styles.heroInner}>
          <FadeIn>
            <div className={styles.sectionTag}>Make a Difference</div>
          </FadeIn>
          <FadeIn delay={0.1}>
            {/* TODO: replace with CMS data */}
            <h1 className={styles.heroTitle}>
              Your Gift Educates a Child.<br />
              <em>Saves a Mother. Builds a Nation.</em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            {/* TODO: replace with CMS data */}
            <p className={styles.heroDesc}>
              Every contribution strengthens both education and healthcare in
              the same Ugandan communities. 85% of funds go straight to programs.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className={styles.heroBtns}>
              <a href="#give" className={styles.btnGold}>
                Give Once
              </a>
              <a href="#give-monthly" className={styles.btnPrimary}>
                Give Monthly
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ Why Partner With PEHF ═══ */}
      <section className={styles.valueProps} aria-label="Why partner with PEHF">
        <div className={styles.inner}>
          <FadeIn>
            <div className={styles.sectionTag}>Why PEHF</div>
            {/* TODO: replace with CMS data */}
            <h2 className={styles.sectionTitle}>Four reasons to partner with us</h2>
            <p className={styles.sectionDesc}>
              Your gift is an investment in measurable, transparent, locally
              rooted change.
            </p>
          </FadeIn>

          <div className={styles.valueGrid}>
            {VALUE_PROPS.map((vp, i) => (
              <FadeIn key={vp.title} delay={i * 0.1}>
                <article className={styles.valueCard}>
                  <div className={styles.valueIcon} aria-hidden="true">{vp.icon}</div>
                  {/* TODO: replace with CMS data */}
                  <h3>{vp.title}</h3>
                  <p>{vp.desc}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Ways to Give ═══ */}
      <section className={styles.givingTable} id="give" aria-label="Ways to give">
        <div className={styles.inner}>
          <FadeIn>
            <div className={styles.sectionTag}>Your Impact</div>
            {/* TODO: replace with CMS data */}
            <h2 className={styles.sectionTitle}>See what your gift does</h2>
            <p className={styles.sectionDesc}>
              Choose a giving level below and see exactly how your support
              reaches children and mothers in Masaka, Uganda.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className={styles.tierTable} role="table" aria-label="Giving tiers">
              <div className={styles.tierHeader} role="row">
                <div role="columnheader">Amount</div>
                <div role="columnheader">Impact</div>
              </div>
              {GIVING_TIERS.map((tier) => (
                <div
                  key={tier.amount}
                  className={`${styles.tierRow} ${tier.highlight ? styles.tierHighlight : ""}`}
                  role="row"
                >
                  <div className={styles.tierAmount} role="cell">{tier.amount}</div>
                  <div className={styles.tierImpact} role="cell">{tier.impact}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ Donation Actions ═══ */}
      <section className={styles.donationActions} id="give-monthly" aria-label="Donation options">
        <div className={styles.inner}>
          {/* TODO: Stripe agent — wire up Payment Element here */}
          <FadeIn>
            <div className={styles.stripeBox}>
              <div className={styles.sectionTag}>Secure Giving</div>
              {/* TODO: replace with CMS data */}
              <h2 className={styles.sectionTitle}>Ready to give?</h2>
              <p className={styles.bodyText}>
                Online payment processing is coming soon. In the meantime,
                please contact our partnerships team to arrange a bank
                transfer, cheque, or wire donation.
              </p>
              <div className={styles.actionBtns}>
                <Link href="/contact" className={styles.btnForest}>
                  Contact Our Partnerships Team <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ US & Europe Donors Note ═══ */}
      <section className={styles.intlDonors} aria-label="International donors information">
        <div className={styles.inner}>
          <FadeIn>
            <div className={styles.infoBox}>
              <div className={styles.infoBoxIcon} aria-hidden="true">🌍</div>
              <div>
                <h3>US &amp; European Donors</h3>
                {/* TODO: replace with CMS data */}
                <p>
                  We can provide documentation for tax-deductible giving through
                  our fiscal sponsor partners. Contact us to discuss wire
                  transfer, stock gifts, or DAF (Donor-Advised Fund) grants.
                </p>
                <Link href="/contact" className={styles.infoLink}>
                  Get in touch <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className={styles.cta} aria-label="Final call to action">
        <FadeIn>
          <div className={styles.ctaInner}>
            <div className={styles.ctaTag} aria-hidden="true">✦ Every Gift Matters</div>
            {/* TODO: replace with CMS data */}
            <h2>Join our community of supporters</h2>
            <p>
              Whether you give $50 or $50,000 — you are part of a growing
              movement transforming lives in Uganda.
            </p>
            <div className={styles.ctaBtns}>
              <Link href="/contact" className={styles.btnGold}>
                Contact Partnerships Team <span aria-hidden="true">→</span>
              </Link>
              <Link href="/apply" className={styles.btnGhost}>
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

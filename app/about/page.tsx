import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import styles from "./page.module.css";

// TODO: SEO agent — add OG image, canonical URL, and JSON-LD Organization schema
export const metadata: Metadata = {
  title: "About Us | Premier Education and Health Foundation",
  description:
    "PEHF is a Ugandan non-profit company limited by guarantee, incorporated 14 March 2024, dedicated to scholarships, safe motherhood, quality education, and healthcare in Masaka, Uganda.",
};

// TODO: replace with CMS data — content agent owns this block
const GOVERNANCE_POINTS = [
  {
    title: "Company Limited by Guarantee",
    desc: "PEHF is incorporated as a Company Limited by Guarantee Without Share Capital under the Companies Act 2012 of Uganda. The liability of each member is limited.",
  },
  {
    title: "No Private Benefit",
    desc: "No part of the income or property of the Foundation may be paid or transferred to any member or director except as permitted by law for services genuinely rendered.",
  },
  {
    title: "Regulated & Registered",
    desc: "PEHF is registered with the Uganda Registration Services Bureau. Our certificate of incorporation was issued on 14 March 2024.",
  },
  {
    title: "Annual Reporting",
    desc: "PEHF publishes annual financial and impact reports to maintain full transparency with donors, partners, and the communities we serve.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navigation />

      {/* ═══ Hero ═══ */}
      <section className={styles.hero} aria-label="About us hero">
        <div className={styles.heroInner}>
          <FadeIn>
            <div className={styles.sectionTag}>Who We Are</div>
          </FadeIn>
          <FadeIn delay={0.1}>
            {/* TODO: replace with CMS data */}
            <h1 className={styles.heroTitle}>
              About Premier Education and<br />
              <em>Health Foundation</em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            {/* TODO: replace with CMS data */}
            <p className={styles.heroDesc}>
              A Ugandan non-profit company limited by guarantee, incorporated
              14 March 2024, working at the intersection of education and
              healthcare in Masaka, Uganda.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══ Who We Are ═══ */}
      <section className={styles.whoWeAre} aria-label="Who we are">
        <div className={styles.inner}>
          <div className={styles.twoCol}>
            <FadeIn className={styles.imageSide}>
              <div className={styles.imagePlaceholder} aria-hidden="true">
                <span>PE</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.15} className={styles.contentSide}>
              <div className={styles.sectionTag}>Our Story</div>
              {/* TODO: replace with CMS data */}
              <h2 className={styles.sectionTitle}>Rooted in Masaka, Uganda</h2>
              <p className={styles.bodyText}>
                Premier Education and Health Foundation (PEHF) is a Ugandan
                non-profit company limited by guarantee. We are incorporated
                under the Companies Act 2012 of Uganda, with our registered
                office in Uganda.
              </p>
              <p className={styles.bodyText}>
                We exist to serve the communities around Premier Education
                Institute and the Premier Health Care system in Masaka — two
                institutions whose reach we extend by providing scholarships,
                bursaries, safe motherhood support, adult literacy programmes,
                and investment in quality education and medical care.
              </p>
              <p className={styles.bodyText}>
                PEHF was formally incorporated on 14 March 2024, bringing
                together educators, healthcare professionals, and community
                advocates committed to breaking cycles of poverty through
                targeted, verifiable support.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ Mission ═══ */}
      <section className={styles.mission} aria-label="Our mission">
        <div className={styles.missionInner}>
          <FadeIn>
            <div className={styles.sectionTagLight}>Our Mission</div>
            {/* TODO: replace with CMS data */}
            <blockquote className={styles.missionQuote}>
              &ldquo;To enhance quality of life and well-being by providing
              educational and health support to financially vulnerable children,
              mothers, and communities served by Premier Education Institute and
              Premier Health Care system.&rdquo;
            </blockquote>
            <p className={styles.missionCaption}>
              Premier Education and Health Foundation — Founding Mission Statement
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══ Legal Status ═══ */}
      <section className={styles.legal} aria-label="Legal status">
        <div className={styles.inner}>
          <FadeIn>
            <div className={styles.sectionTag}>Legal Structure</div>
            {/* TODO: replace with CMS data */}
            <h2 className={styles.sectionTitle}>How we are constituted</h2>
            <p className={styles.sectionDesc}>
              Full transparency begins with a clear legal foundation.
            </p>
          </FadeIn>

          <div className={styles.legalGrid}>
            <FadeIn delay={0.1} className={styles.legalCard}>
              <div className={styles.legalNum} aria-hidden="true">01</div>
              <h3>Company Limited by Guarantee Without Share Capital</h3>
              {/* TODO: replace with CMS data */}
              <p>
                PEHF is incorporated under the Companies Act 2012 of Uganda as
                a company limited by guarantee. There are no shareholders.
                The liability of each member is limited to a nominal guarantee
                amount.
              </p>
            </FadeIn>
            <FadeIn delay={0.2} className={styles.legalCard}>
              <div className={styles.legalNum} aria-hidden="true">02</div>
              <h3>Certificate of Incorporation</h3>
              {/* TODO: replace with CMS data */}
              <p>
                Issued by the Uganda Registration Services Bureau on
                14 March 2024. Our registration confirms full compliance with
                Ugandan company law and non-profit governance requirements.
              </p>
            </FadeIn>
            <FadeIn delay={0.3} className={styles.legalCard}>
              <div className={styles.legalNum} aria-hidden="true">03</div>
              <h3>Non-Distribution Constraint</h3>
              {/* TODO: replace with CMS data */}
              <p>
                No income or property of PEHF may be paid or distributed to
                members or directors except for genuine services rendered.
                All surplus is reinvested directly into our six core objectives.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ Transparency & Governance ═══ */}
      <section className={styles.governance} id="transparency" aria-label="Transparency and governance">
        <div className={styles.inner}>
          <FadeIn>
            <div className={styles.sectionTag}>Transparency &amp; Governance</div>
            {/* TODO: replace with CMS data */}
            <h2 className={styles.sectionTitle}>Built on accountability</h2>
            <p className={styles.sectionDesc}>
              PEHF publishes annual financial and impact reports. 85% of funds
              go directly to programs. We are regulated by the Uganda
              Registration Services Bureau.
            </p>
          </FadeIn>

          <div className={styles.govGrid}>
            {GOVERNANCE_POINTS.map((point, i) => (
              <FadeIn key={point.title} delay={i * 0.1}>
                <article className={styles.govCard}>
                  <div className={styles.govCardNum} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3>{point.title}</h3>
                  {/* TODO: replace with CMS data */}
                  <p>{point.desc}</p>
                </article>
              </FadeIn>
            ))}
          </div>

          {/* Annual Report placeholder */}
          <FadeIn delay={0.4}>
            <div className={styles.reportBanner} id="reports">
              <div>
                <p className={styles.reportLabel}>Annual Report</p>
                {/* TODO: replace with CMS data / link to actual PDF when available */}
                <p className={styles.reportNote}>2024 Impact &amp; Financial Report — Coming Soon</p>
              </div>
              <span className={styles.reportComingSoon} aria-label="Report coming soon">
                Coming Soon
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className={styles.cta} aria-label="Take action">
        <FadeIn>
          <div className={styles.ctaInner}>
            <div className={styles.ctaTag} aria-hidden="true">✦ Get Involved</div>
            {/* TODO: replace with CMS data */}
            <h2>Stand with us for education and health in Uganda</h2>
            <p>
              Your support — financial or through partnership — directly funds
              scholarships, safe deliveries, and quality education in Masaka.
            </p>
            <div className={styles.ctaBtns}>
              <Link href="/donate" className={styles.btnGold}>
                Donate Now <span aria-hidden="true">♥</span>
              </Link>
              <Link href="/contact" className={styles.btnGhost}>
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
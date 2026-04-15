import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import styles from "./page.module.css";

// TODO: SEO agent — add OG image and JSON-LD WebPage schema
export const metadata: Metadata = {
  title: "Our Work | Premier Health & Education Foundation",
  description:
    "Discover how Premier Health & Education Foundation drives healthcare access and educational equity through targeted programs and community partnerships.",
};

// TODO: replace with CMS data — content agent owns this block
const FOCUS_AREAS = [
  {
    tag: "Pillar One",
    title: "Healthcare Access",
    desc: "We dismantle barriers to medical care by funding community clinics, mobile health units, and preventive-care screenings — ensuring every person can access the services they need regardless of income or geography.",
    stat: "120 partner clinics",
    initials: "HA",
    colorClass: "focusForest",
    href: "/programs#healthcare",
  },
  {
    tag: "Pillar Two",
    title: "Educational Equity",
    desc: "Through scholarships, mentorship, and after-school enrichment, we level the playing field for students whose potential outpaces their resources, building pathways into higher education and meaningful careers.",
    stat: "2,400 scholarships awarded",
    initials: "EE",
    colorClass: "focusGold",
    href: "/programs#education",
  },
  {
    tag: "Pillar Three",
    title: "Community Outreach",
    desc: "We meet communities where they are — hosting wellness fairs, nutrition workshops, and mental-health support groups that strengthen the social fabric and create lasting resilience from the ground up.",
    stat: "15 countries reached",
    initials: "CO",
    colorClass: "focusSage",
    href: "/programs#wellness",
  },
];

// TODO: replace with CMS data — content agent owns this block
const PROGRAMS = [
  {
    title: "Mobile Health Clinics",
    desc: "Fully equipped vans deliver primary care, dental, and vision screenings to rural and urban underserved areas on a rotating weekly schedule.",
    stat: "32K patients served",
    tag: "Healthcare",
    initials: "MH",
  },
  {
    title: "Preventive Care Initiative",
    desc: "Early-detection screenings for diabetes, hypertension, and cancer, paired with health literacy workshops that empower individuals to manage their own wellness.",
    stat: "18K screenings in 2024",
    tag: "Healthcare",
    initials: "PC",
  },
  {
    title: "STEM Scholarship Fund",
    desc: "Merit-and-need scholarships that place high-potential students in four-year science, technology, engineering, and mathematics degree programmes.",
    stat: "1,200 active scholars",
    tag: "Education",
    initials: "SS",
  },
  {
    title: "After-School Academy",
    desc: "Evening tutoring, coding clubs, and arts enrichment programmes operating in 40 Title-I schools, helping students build confidence and academic skills.",
    stat: "4,800 students enrolled",
    tag: "Education",
    initials: "AS",
  },
  {
    title: "Mentorship Network",
    desc: "A curated platform that pairs students from underserved communities with professionals in their fields of interest for year-long mentorship relationships.",
    stat: "620 active mentors",
    tag: "Education",
    initials: "MN",
  },
  {
    title: "Community Wellness Hub",
    desc: "Permanent and pop-up wellness centres offering mental-health counselling, nutrition coaching, and group fitness classes at no cost to participants.",
    stat: "9 active hubs",
    tag: "Outreach",
    initials: "CW",
  },
];

// TODO: replace with CMS data — content agent owns this block
const STATS = [
  { value: "48K+",  label: "Lives Impacted" },
  { value: "120",   label: "Partner Clinics" },
  { value: "2,400", label: "Scholarships Awarded" },
  { value: "15",    label: "Countries Reached" },
];

// TODO: replace with CMS data — content agent owns this block
const STEPS = [
  {
    number: "01",
    title: "Listen & Research",
    desc: "We begin every initiative by listening — conducting community needs assessments, reviewing public-health data, and consulting local leaders to understand exactly where help is needed most.",
  },
  {
    number: "02",
    title: "Partner & Design",
    desc: "We co-design programmes with existing community organisations, healthcare providers, and educators, ensuring our work builds on local strengths rather than replacing them.",
  },
  {
    number: "03",
    title: "Deliver & Measure",
    desc: "Programmes launch with clear success metrics. We track outcomes rigorously, publish annual impact reports, and refine our approach based on what the data tells us.",
  },
];

export default function OurWorkPage() {
  return (
    <>
      <Navigation />

      {/* ═══ Hero ═══ */}
      <section className={styles.hero} aria-label="Our Work hero">
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={styles.heroContent}>
          <FadeIn>
            <div className={styles.heroTag}>
              <span className={styles.heroTagDot} aria-hidden="true" />
              {/* TODO: replace with CMS data */}
              Healthcare &amp; Education Since 2008
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            {/* TODO: replace with CMS data */}
            <h1>
              Our Work,<br />Your <em>Community.</em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            {/* TODO: replace with CMS data */}
            <p className={styles.heroDesc}>
              From mobile health clinics to STEM scholarships, every programme
              we run is designed to create lasting, measurable change in the
              communities that need it most.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className={styles.heroBtns}>
              <Link href="#programs" className={styles.btnPrimary}>
                Explore Programmes <span aria-hidden="true">↓</span>
              </Link>
              <Link href="/donate" className={styles.btnGold}>
                Support Our Work
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ Focus Areas ═══ */}
      <section className={styles.focusAreas} id="focus-areas" aria-label="Focus areas">
        <div className={styles.inner}>
          <FadeIn>
            <div className={styles.sectionTag}>What We Stand For</div>
            {/* TODO: replace with CMS data */}
            <h2 className={styles.sectionTitle}>Three pillars, one mission</h2>
            <p className={styles.sectionDesc}>
              Every programme and partnership flows from three interlocking
              areas of focus that together address the root causes of
              inequity.
            </p>
          </FadeIn>

          <div className={styles.focusGrid}>
            {FOCUS_AREAS.map((area, i) => (
              <FadeIn key={area.title} delay={i * 0.12}>
                <article className={`${styles.focusCard} ${styles[area.colorClass]}`}>
                  <div className={styles.focusAvatar} aria-hidden="true">
                    {area.initials}
                  </div>
                  <div className={styles.focusCardTag}>{area.tag}</div>
                  <h3>{area.title}</h3>
                  <p>{area.desc}</p>
                  <div className={styles.focusStat}>{area.stat}</div>
                  <Link href={area.href} className={styles.focusLink}>
                    See programmes <span aria-hidden="true">→</span>
                  </Link>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Programs Grid ═══ */}
      <section className={styles.programs} id="programs" aria-label="Our programmes">
        <div className={styles.inner}>
          <FadeIn>
            <div className={styles.sectionTag}>Active Programmes</div>
            {/* TODO: replace with CMS data */}
            <h2 className={styles.sectionTitle}>Programmes that create lasting change</h2>
            <p className={styles.sectionDesc}>
              Each programme is built on evidence, co-designed with communities,
              and tracked against real-world outcomes.
            </p>
          </FadeIn>

          <div className={styles.programsGrid}>
            {PROGRAMS.map((program, i) => (
              <FadeIn key={program.title} delay={i * 0.08}>
                <article className={styles.programCard}>
                  <div className={styles.programCardHeader}>
                    <div className={styles.programAvatar} aria-hidden="true">
                      {program.initials}
                    </div>
                    <span className={styles.programTag}>{program.tag}</span>
                  </div>
                  <h3>{program.title}</h3>
                  <p>{program.desc}</p>
                  <div className={styles.programStat}>{program.stat}</div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Impact Numbers ═══ */}
      <section className={styles.stats} aria-label="Impact statistics">
        <div className={styles.statsInner}>
          <FadeIn>
            <div className={styles.sectionTagLight}>By the Numbers</div>
            {/* TODO: replace with CMS data */}
            <h2 className={styles.statsSectionTitle}>Impact that speaks for itself</h2>
          </FadeIn>
          <div className={styles.statsGrid}>
            {STATS.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ How We Work ═══ */}
      <section className={styles.approach} id="approach" aria-label="Our approach">
        <div className={styles.inner}>
          <FadeIn>
            <div className={styles.sectionTag}>Our Approach</div>
            {/* TODO: replace with CMS data */}
            <h2 className={styles.sectionTitle}>How we turn intention into impact</h2>
            <p className={styles.sectionDesc}>
              Rigorous methodology and deep community trust are the foundation
              of everything we do.
            </p>
          </FadeIn>

          <div className={styles.stepsGrid}>
            {STEPS.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.12}>
                <article className={styles.stepCard}>
                  <div className={styles.stepNumber} aria-hidden="true">{step.number}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className={styles.cta} aria-label="Call to action">
        <FadeIn>
          <div className={styles.ctaInner}>
            <div className={styles.ctaTag} aria-hidden="true">✦ Make a Difference Today</div>
            {/* TODO: replace with CMS data */}
            <h2>Ready to be part of the change?</h2>
            <p>
              Whether you give, volunteer, or spread the word — your support
              amplifies every programme we run and every life we touch.
            </p>
            <div className={styles.ctaBtns}>
              <Link href="/donate" className={styles.btnGold}>
                Donate Now <span aria-hidden="true">♥</span>
              </Link>
              <Link href="/volunteer" className={styles.btnGhost}>
                Become a Volunteer
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </>
  );
}

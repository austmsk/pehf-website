import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import styles from "../_styles/listing.module.css";

// TODO: SEO agent — add OG image, canonical URL, and JSON-LD WebPage schema
export const metadata: Metadata = {
  title: "Volunteer | Premier Education and Health Foundation",
  description:
    "Give your time and skills to PEHF — teaching, mentoring, healthcare, and operations roles supporting our work in Masaka, Uganda.",
};

// TODO: replace with CMS data — content agent owns this block
const ROLES = [
  {
    title: "Teaching & Tutoring",
    desc: "Support classroom learning and holiday programmes at Premier Preparatory School, or tutor remotely.",
  },
  {
    title: "Mentoring",
    desc: "Guide scholars and adult-literacy learners with encouragement, study skills, and role-modelling.",
  },
  {
    title: "Healthcare Support",
    desc: "Clinicians and health workers can assist safe-motherhood and medical-care programmes within the Premier Health Care system.",
  },
  {
    title: "Skills & Operations",
    desc: "Help behind the scenes — fundraising, design, writing, translation, IT, and reporting.",
  },
  {
    title: "Community Outreach",
    desc: "Help identify families in need and stay connected with the communities we serve in Masaka.",
  },
  {
    title: "Events & Fundraising",
    desc: "Lend a hand at community days, open houses, and fundraising events at home and abroad.",
  },
];

export default function VolunteerPage() {
  return (
    <>
      <Navigation />

      <section className={styles.hero} aria-label="Volunteer hero">
        <div className={styles.heroInner}>
          <FadeIn>
            <div className={styles.sectionTag}>Volunteer</div>
          </FadeIn>
          <FadeIn delay={0.1}>
            {/* TODO: replace with CMS data */}
            <h1 className={styles.heroTitle}>
              Give your time,<br />
              <em>change a future</em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            {/* TODO: replace with CMS data */}
            <p className={styles.heroDesc}>
              Skills matter as much as funds. Whether you can teach a class,
              mentor a learner, or lend a professional skill, there is a place
              for you in our work.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className={styles.section} aria-label="Volunteer roles">
        <div className={styles.inner}>
          <FadeIn>
            <div className={styles.sectionTag}>Roles</div>
            <h2 className={styles.sectionTitle}>Where you can help</h2>
            <p className={styles.sectionDesc}>
              On the ground in Masaka or remotely — here is where volunteers make
              the biggest difference.
            </p>
          </FadeIn>
          <div className={styles.grid}>
            {ROLES.map((role, i) => (
              <FadeIn key={role.title} delay={i * 0.07}>
                <article className={styles.card}>
                  <div className={styles.cardNum} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  {/* TODO: replace with CMS data */}
                  <h3 className={styles.cardTitle}>{role.title}</h3>
                  <p className={styles.cardDesc}>{role.desc}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta} aria-label="Register interest">
        <FadeIn>
          <div className={styles.ctaInner}>
            <div className={styles.ctaDecor} aria-hidden="true" />
            {/* TODO: replace with CMS data — wire a volunteer form when backend is ready */}
            <h2 className={styles.ctaTitle}>Ready to lend a hand?</h2>
            <div className={styles.ctaBtns}>
              <Link href="/contact" className={styles.btnGold}>
                Register Your Interest <span aria-hidden="true">→</span>
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

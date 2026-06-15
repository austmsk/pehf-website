import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import styles from "./page.module.css";

// TODO: SEO agent — add OG image, canonical URL, and JSON-LD
export const metadata: Metadata = {
  title: "Contact Us | Premier Education and Health Foundation",
  description:
    "Get in touch with PEHF. Reach us at Premier Preparatory School Campus, P.O. Box 335, Masaka, Uganda. Tel: +256 742 693 000.",
};

// TODO: replace with CMS data — content agent owns this block
const CONTACT_DETAILS = [
  { label: "Address",       value: "Premier Preparatory School Campus\nP.O. Box 335, Masaka, Uganda", isAddress: true },
  { label: "Phone",         value: "+256 742 693 000",             href: "tel:+256742693000",                        isAddress: false },
  { label: "General Email", value: "premier.prep.sch@gmail.com",   href: "mailto:premier.prep.sch@gmail.com",        isAddress: false },
  { label: "Partnerships",  value: "partnerships@pehfuganda.org",  href: "mailto:partnerships@pehfuganda.org",       isAddress: false },
];

// TODO: replace with CMS data — content agent owns this block
const SUBJECT_OPTIONS = [
  { value: "general",       label: "General Inquiry" },
  { value: "sponsorship",   label: "Sponsorship" },
  { value: "partnership",   label: "Partnership" },
  { value: "volunteering",  label: "Volunteering" },
  { value: "other",         label: "Other" },
];

export default function ContactPage() {
  return (
    <>
      <Navigation />

      {/* ═══ Hero ═══ */}
      <section className={styles.hero} aria-label="Contact hero">
        <div className={styles.heroInner}>
          <FadeIn>
            <div className={styles.sectionTag}>Reach Out</div>
          </FadeIn>
          <FadeIn delay={0.1}>
            {/* TODO: replace with CMS data */}
            <h1 className={styles.heroTitle}>Get In Touch</h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            {/* TODO: replace with CMS data */}
            <p className={styles.heroDesc}>
              Whether you want to donate, sponsor a child, become a partner,
              or simply learn more — we would love to hear from you.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══ Contact Details + Form ═══ */}
      <section className={styles.mainSection} aria-label="Contact details and form">
        <div className={styles.inner}>
          <div className={styles.twoCol}>

            {/* Left: Contact details */}
            <div>
              <FadeIn>
                <div className={styles.sectionTag}>Find Us</div>
                {/* TODO: replace with CMS data */}
                <h2 className={styles.colTitle}>Contact Details</h2>
              </FadeIn>

              <div className={styles.contactCards}>
                {CONTACT_DETAILS.map((detail, i) => (
                  <FadeIn key={detail.label} delay={i * 0.08}>
                    <div className={styles.contactCard}>
                      <p className={styles.contactCardLabel}>{detail.label}</p>
                      {detail.isAddress ? (
                        <address className={styles.contactCardValue}>
                          {/* TODO: replace with CMS data */}
                          {detail.value.split('\n').map((line, li) => (
                            <span key={li}>{line}</span>
                          ))}
                        </address>
                      ) : (
                        <a
                          href={detail.href}
                          className={styles.contactCardLink}
                        >
                          {/* TODO: replace with CMS data */}
                          {detail.value}
                        </a>
                      )}
                    </div>
                  </FadeIn>
                ))}
              </div>

              {/* Map placeholder */}
              <FadeIn delay={0.35}>
                <div className={styles.mapPlaceholder} aria-label="Map placeholder">
                  {/* TODO: Google Maps embed for Premier Preparatory School, Masaka, Uganda */}
                  <p className={styles.mapPlaceholderText}>
                    Map coming soon — Premier Preparatory School, Masaka, Uganda
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Right: Contact form */}
            <FadeIn delay={0.1}>
              <div className={styles.formBox}>
                <div className={styles.sectionTag}>Send a Message</div>
                {/* TODO: replace with CMS data */}
                <h2 className={styles.colTitle}>Write to Us</h2>

                {/* TODO: email agent — wire form submission to Resend / SendGrid */}
                <form
                  className={styles.form}
                  aria-label="Contact form"
                  noValidate
                >
                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="contactName">
                      Your Name <span className={styles.required} aria-label="required">*</span>
                    </label>
                    <input
                      id="contactName"
                      name="contactName"
                      type="text"
                      className={styles.input}
                      autoComplete="name"
                      required
                      aria-required="true"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="contactEmail">
                      Email Address <span className={styles.required} aria-label="required">*</span>
                    </label>
                    <input
                      id="contactEmail"
                      name="contactEmail"
                      type="email"
                      className={styles.input}
                      autoComplete="email"
                      required
                      aria-required="true"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="contactSubject">
                      Subject <span className={styles.required} aria-label="required">*</span>
                    </label>
                    <select
                      id="contactSubject"
                      name="contactSubject"
                      className={styles.select}
                      required
                      aria-required="true"
                    >
                      <option value="">Select a subject</option>
                      {SUBJECT_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {/* TODO: replace with CMS data */}
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="contactMessage">
                      Message <span className={styles.required} aria-label="required">*</span>
                    </label>
                    <textarea
                      id="contactMessage"
                      name="contactMessage"
                      className={styles.textarea}
                      rows={6}
                      required
                      aria-required="true"
                    />
                  </div>

                  <button type="submit" className={styles.submitBtn}>
                    Send Message <span aria-hidden="true">→</span>
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ International Donors ═══ */}
      <section className={styles.intlSection} id="partner" aria-label="International donors">
        <div className={styles.inner}>
          <FadeIn>
            <div className={styles.infoBox}>
              <div className={styles.infoIcon} aria-hidden="true">🌍</div>
              <div>
                <h2 className={styles.infoTitle}>US &amp; European Donors</h2>
                {/* TODO: replace with CMS data */}
                <p className={styles.infoText}>
                  We can provide documentation for tax-deductible giving through
                  our fiscal sponsor partners. Contact us to discuss wire
                  transfer, stock gifts, or DAF (Donor-Advised Fund) grants.
                  Email{" "}
                  <a href="mailto:partnerships@pehfuganda.org" className={styles.infoLink}>
                    partnerships@pehfuganda.org
                  </a>{" "}
                  to get started.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
}

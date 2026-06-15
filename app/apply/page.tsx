import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import styles from "./page.module.css";

// TODO: SEO agent — add OG image, canonical URL, and JSON-LD
export const metadata: Metadata = {
  title: "Apply for Sponsorship | Premier Education and Health Foundation",
  description:
    "Apply for a PEHF scholarship or bursary at Premier Preparatory School, Masaka. Full sponsorship for Top Class–P.3; partial bursaries for P.4–P.5. Deadline: 31 October 2025.",
};

// TODO: replace with CMS data — content agent owns this block
const ELIGIBILITY_CRITERIA = [
  "The pupil must be enrolled at Premier Preparatory School, Masaka.",
  "The family must demonstrate genuine financial hardship (low household income).",
  "The pupil must have a satisfactory academic or attendance record.",
  "The application must be completed in full and signed by a parent or guardian.",
  "Required supporting documents must be attached (see Section 5).",
  "The pupil must not already be in receipt of another full scholarship covering the same costs.",
];

// TODO: replace with CMS data — content agent owns this block
const DOCUMENT_CHECKLIST = [
  "Most recent end-of-term school report / academic transcript",
  "Parent or guardian national ID (photocopy)",
  "Proof of household income or financial hardship declaration",
  "Letter of recommendation from class teacher or head teacher",
  "Pupil birth certificate (photocopy)",
];

// TODO: replace with CMS data — content agent owns this block
const IMPORTANT_NOTES = [
  "Selection is competitive. Meeting eligibility criteria does not guarantee an award.",
  "PEHF reserves the right to verify all information provided. False declarations will disqualify the application.",
  "Successful applicants will be notified in writing by 30 November 2025.",
];

export default function ApplyPage() {
  return (
    <>
      <Navigation />

      {/* ═══ Hero ═══ */}
      <section className={styles.hero} aria-label="Apply for sponsorship">
        <div className={styles.heroInner}>
          <FadeIn>
            <div className={styles.sectionTag}>Sponsorship Applications</div>
          </FadeIn>
          <FadeIn delay={0.1}>
            {/* TODO: replace with CMS data */}
            <h1 className={styles.heroTitle}>
              Apply for PEHF Sponsorship<br />
              <em>2026 Academic Year</em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            {/* TODO: replace with CMS data */}
            <p className={styles.heroDesc}>
              We provide full sponsorships and partial bursaries to financially
              needy pupils at Premier Preparatory School, Masaka. Complete
              all sections below and attach the required documents.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══ Eligibility + Support Types ═══ */}
      <section className={styles.eligibility} aria-label="Eligibility and support types">
        <div className={styles.inner}>
          <div className={styles.twoCol}>
            {/* Eligibility */}
            <FadeIn>
              <div className={styles.sectionTag}>Who Can Apply</div>
              {/* TODO: replace with CMS data */}
              <h2 className={styles.colTitle}>Eligibility Criteria</h2>
              <ul className={styles.criteriaList} role="list">
                {ELIGIBILITY_CRITERIA.map((criterion, i) => (
                  <li key={i} className={styles.criteriaItem}>
                    <span className={styles.criteriaCheck} aria-hidden="true">✓</span>
                    {/* TODO: replace with CMS data */}
                    {criterion}
                  </li>
                ))}
              </ul>
            </FadeIn>

            {/* Support Types */}
            <FadeIn delay={0.15}>
              <div className={styles.sectionTag}>Available Support</div>
              {/* TODO: replace with CMS data */}
              <h2 className={styles.colTitle}>Support Types</h2>

              <div className={styles.supportCard}>
                <div className={styles.supportCardTag}>Full Sponsorship</div>
                <h3>Top Class &amp; P.1–P.3</h3>
                {/* TODO: replace with CMS data */}
                <p>
                  Covers 100% of tuition, scholastic materials, school uniform,
                  and annual medical check-up. Approximately $1,200 per year.
                </p>
              </div>

              <div className={styles.supportCard}>
                <div className={styles.supportCardTag}>Partial Bursary</div>
                <h3>P.4–P.5</h3>
                {/* TODO: replace with CMS data */}
                <p>
                  Subsidises tuition fees and scholastic materials. The family
                  contributes a means-tested co-payment. Approximately $500
                  per year.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ Application Form ═══ */}
      <section className={styles.formSection} aria-label="Application form">
        <div className={styles.inner}>
          <FadeIn>
            <div className={styles.sectionTag}>Application Form</div>
            {/* TODO: replace with CMS data */}
            <h2 className={styles.sectionTitle}>Complete all five sections</h2>
            <p className={styles.sectionDesc}>
              {/* TODO: update deadline with CMS data */}
              Submit by: <strong>Friday, 31 October 2025</strong>.
              Incomplete applications will not be considered.
            </p>
          </FadeIn>

          <form className={styles.form} aria-label="PEHF Sponsorship Application Form" noValidate>

            {/* ─── Section A: Support Type ─── */}
            <FadeIn delay={0.05}>
              <fieldset className={styles.fieldset}>
                <legend className={styles.legend}>
                  <span className={styles.legendLetter}>A</span>
                  Type of Support Requested
                </legend>
                <div className={styles.radioGroup} role="radiogroup" aria-label="Support type">
                  <label className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="supportType"
                      value="full"
                      className={styles.radioInput}
                    />
                    <span className={styles.radioCustom} aria-hidden="true" />
                    Full Sponsorship (Top Class / P.1–P.3)
                  </label>
                  <label className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="supportType"
                      value="partial"
                      className={styles.radioInput}
                    />
                    <span className={styles.radioCustom} aria-hidden="true" />
                    Partial Bursary (P.4–P.5)
                  </label>
                </div>
              </fieldset>
            </FadeIn>

            {/* ─── Section B: Pupil Details ─── */}
            <FadeIn delay={0.1}>
              <fieldset className={styles.fieldset}>
                <legend className={styles.legend}>
                  <span className={styles.legendLetter}>B</span>
                  Pupil Details
                </legend>

                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="pupilFullName">
                      Full Name <span className={styles.required} aria-label="required">*</span>
                    </label>
                    <input
                      id="pupilFullName"
                      name="pupilFullName"
                      type="text"
                      className={styles.input}
                      autoComplete="off"
                      required
                      aria-required="true"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="pupilDOB">
                      Date of Birth <span className={styles.required} aria-label="required">*</span>
                    </label>
                    <input
                      id="pupilDOB"
                      name="pupilDOB"
                      type="date"
                      className={styles.input}
                      required
                      aria-required="true"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="currentClass">
                      Current Class / Year <span className={styles.required} aria-label="required">*</span>
                    </label>
                    <select id="currentClass" name="currentClass" className={styles.select} required aria-required="true">
                      <option value="">Select class</option>
                      <option value="top">Top Class</option>
                      <option value="p1">P.1</option>
                      <option value="p2">P.2</option>
                      <option value="p3">P.3</option>
                      <option value="p4">P.4</option>
                      <option value="p5">P.5</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="admissionNumber">
                      Admission Number
                    </label>
                    <input
                      id="admissionNumber"
                      name="admissionNumber"
                      type="text"
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="yearsAtSchool">
                      Years at Premier Preparatory School <span className={styles.required} aria-label="required">*</span>
                    </label>
                    <input
                      id="yearsAtSchool"
                      name="yearsAtSchool"
                      type="number"
                      min="0"
                      max="10"
                      className={styles.input}
                      required
                      aria-required="true"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="boardingDay">
                      Boarding or Day Pupil <span className={styles.required} aria-label="required">*</span>
                    </label>
                    <select id="boardingDay" name="boardingDay" className={styles.select} required aria-required="true">
                      <option value="">Select</option>
                      <option value="boarding">Boarding</option>
                      <option value="day">Day</option>
                    </select>
                  </div>
                </div>

                <div className={styles.formGroupFull}>
                  <label className={styles.label} htmlFor="termPositions">
                    Last 3 End-of-Term Positions (e.g., &quot;Term 1: 4th out of 32, Term 2: 3rd out of 32, Term 3: 5th out of 30&quot;)
                  </label>
                  <input
                    id="termPositions"
                    name="termPositions"
                    type="text"
                    className={styles.input}
                    placeholder="Term 1: ___ of ___, Term 2: ___ of ___, Term 3: ___ of ___"
                  />
                </div>
              </fieldset>
            </FadeIn>

            {/* ─── Section C: Parent / Guardian Details ─── */}
            <FadeIn delay={0.12}>
              <fieldset className={styles.fieldset}>
                <legend className={styles.legend}>
                  <span className={styles.legendLetter}>C</span>
                  Parent / Guardian Details
                </legend>

                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="guardianName">
                      Full Name <span className={styles.required} aria-label="required">*</span>
                    </label>
                    <input
                      id="guardianName"
                      name="guardianName"
                      type="text"
                      className={styles.input}
                      autoComplete="name"
                      required
                      aria-required="true"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="relationship">
                      Relationship to Pupil <span className={styles.required} aria-label="required">*</span>
                    </label>
                    <select id="relationship" name="relationship" className={styles.select} required aria-required="true">
                      <option value="">Select</option>
                      <option value="mother">Mother</option>
                      <option value="father">Father</option>
                      <option value="guardian">Legal Guardian</option>
                      <option value="grandparent">Grandparent</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="guardianPhone">
                      Phone Number <span className={styles.required} aria-label="required">*</span>
                    </label>
                    <input
                      id="guardianPhone"
                      name="guardianPhone"
                      type="tel"
                      className={styles.input}
                      autoComplete="tel"
                      required
                      aria-required="true"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="occupation">
                      Occupation
                    </label>
                    <input
                      id="occupation"
                      name="occupation"
                      type="text"
                      className={styles.input}
                      autoComplete="organization-title"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="monthlyIncome">
                      Approximate Monthly Income (UGX)
                    </label>
                    <input
                      id="monthlyIncome"
                      name="monthlyIncome"
                      type="text"
                      className={styles.input}
                      placeholder="e.g. 350,000"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="village">
                      Village / Sub-county <span className={styles.required} aria-label="required">*</span>
                    </label>
                    <input
                      id="village"
                      name="village"
                      type="text"
                      className={styles.input}
                      required
                      aria-required="true"
                    />
                  </div>
                </div>
              </fieldset>
            </FadeIn>

            {/* ─── Section D: Eligibility Checklist ─── */}
            <FadeIn delay={0.14}>
              <fieldset className={styles.fieldset}>
                <legend className={styles.legend}>
                  <span className={styles.legendLetter}>D</span>
                  Eligibility Declaration (tick all that apply)
                </legend>

                <div className={styles.checkboxGroup}>
                  {[
                    "The pupil is currently enrolled at Premier Preparatory School, Masaka.",
                    "Our household income is below the threshold stated in the guidelines.",
                    "The pupil does not receive another full scholarship covering the same costs.",
                    "All information provided in this application is true and complete.",
                    "I consent to PEHF verifying the information provided with the school.",
                    "I understand that this application does not guarantee an award.",
                    "I agree to notify PEHF immediately if our financial circumstances change.",
                  ].map((item, i) => (
                    <label key={i} className={styles.checkboxLabel}>
                      <input
                        type="checkbox"
                        name={`eligibility_${i}`}
                        className={styles.checkboxInput}
                      />
                      <span className={styles.checkboxCustom} aria-hidden="true" />
                      {/* TODO: replace with CMS data */}
                      {item}
                    </label>
                  ))}
                </div>
              </fieldset>
            </FadeIn>

            {/* ─── Section E: Parental Declaration ─── */}
            <FadeIn delay={0.16}>
              <fieldset className={styles.fieldset}>
                <legend className={styles.legend}>
                  <span className={styles.legendLetter}>E</span>
                  Parental Declaration
                </legend>

                {/* TODO: replace with CMS data */}
                <p className={styles.declarationText}>
                  I, the undersigned parent or guardian, declare that the
                  information provided in this application is true and accurate
                  to the best of my knowledge. I understand that submitting
                  false information may result in immediate withdrawal of any
                  award and potential legal consequences under Ugandan law.
                </p>

                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    name="declaration"
                    className={styles.checkboxInput}
                    required
                    aria-required="true"
                  />
                  <span className={styles.checkboxCustom} aria-hidden="true" />
                  I agree to the declaration above. <span className={styles.required} aria-label="required">*</span>
                </label>

                <div className={styles.formGroupFull} style={{ marginTop: "24px" }}>
                  <label className={styles.label} htmlFor="signatureName">
                    Full Name (as signature) <span className={styles.required} aria-label="required">*</span>
                  </label>
                  <input
                    id="signatureName"
                    name="signatureName"
                    type="text"
                    className={styles.input}
                    autoComplete="name"
                    required
                    aria-required="true"
                  />
                </div>
              </fieldset>
            </FadeIn>

            {/* ─── Required Documents ─── */}
            <FadeIn delay={0.18}>
              <div className={styles.docsBox}>
                <h3 className={styles.docsTitle}>
                  Required Documents — attach with your submission
                </h3>
                <ul className={styles.docsList} role="list">
                  {DOCUMENT_CHECKLIST.map((doc, i) => (
                    <li key={i} className={styles.docsItem}>
                      <span className={styles.docsNum} aria-hidden="true">{i + 1}</span>
                      {/* TODO: replace with CMS data */}
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* ─── Important Notes ─── */}
            <FadeIn delay={0.2}>
              <div className={styles.notesBox}>
                <h3 className={styles.notesTitle}>Important Notes</h3>
                <ul className={styles.notesList} role="list">
                  {IMPORTANT_NOTES.map((note, i) => (
                    <li key={i} className={styles.notesItem}>
                      {/* TODO: replace with CMS data */}
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* ─── Deadline + Submit ─── */}
            <FadeIn delay={0.22}>
              <div className={styles.submitRow}>
                <div className={styles.deadlineBox}>
                  {/* TODO: replace with CMS data */}
                  <p className={styles.deadlineLabel}>Application Deadline</p>
                  <p className={styles.deadlineDate}>Friday, 31 October 2025</p>
                  <p className={styles.deadlineContact}>
                    Questions: PEHF Secretariat &mdash;{" "}
                    <a href="tel:+256742693000">0742 693 000</a>
                  </p>
                </div>
                <button type="submit" className={styles.submitBtn}>
                  Submit Application <span aria-hidden="true">→</span>
                </button>
              </div>
            </FadeIn>

          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}

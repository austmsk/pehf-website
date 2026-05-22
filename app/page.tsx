"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import {
  PlayIcon,
  PauseIcon,
  VolumeOnIcon,
  VolumeOffIcon,
  ChevronDownIcon,
} from "@/components/SvgIcons";
import styles from "./page.module.css";

// TODO: replace with CMS data — content agent owns this block
const PROGRAMS = [
  {
    icon: "🎓",
    title: "Scholarships & Bursaries",
    desc: "Full sponsorship for Top Class & P.1–P.3 pupils and partial bursaries for P.4–P.5 at Premier Preparatory School, Masaka.",
    href: "/programs#scholarships",
  },
  {
    icon: "🤰",
    title: "Safe Motherhood",
    desc: "Moral and monetary support to ensure safe delivery of babies within the Premier Health Care system for destitute mothers.",
    href: "/programs#safe-motherhood",
  },
  {
    icon: "📖",
    title: "Adult Literacy",
    desc: "Sponsoring illiteracy eradication programs for adults, run during school holidays, to break cycles of poverty through education.",
    href: "/programs#adult-literacy",
  },
  {
    icon: "🏫",
    title: "Quality Education Investment",
    desc: "Optimizing teacher salaries to retain qualified instructors. Constructing and equipping classrooms, labs, and research units.",
    href: "/programs#quality-education",
  },
  {
    icon: "🏥",
    title: "Quality Medical Care",
    desc: "Provisioning quality medical care to patients within Premier Health Care system and the surrounding community.",
    href: "/programs#medical-care",
  },
  {
    icon: "🤝",
    title: "Partnerships & Fundraising",
    desc: "Soliciting donations nationally and internationally and cooperating with like-minded organizations to multiply impact.",
    href: "/programs#partnerships",
  },
];

// TODO: replace with CMS data — content agent owns this block
const STATS = [
  { value: "85%",    label: "Funds Direct to Programs" },
  { value: "2024",   label: "Year Founded" },
  { value: "6",      label: "Core Objectives" },
  { value: "Masaka", label: "Uganda — Home Base" },
];

// TODO: replace with CMS data — content agent owns this block
const STORIES = [
  {
    quote: "Before PEHF, I thought I'd drop out in P.3. Now I'm top of my class and want to be a doctor.",
    name: "Mary",
    role: "Age 9, PEHF Scholar",
    initials: "M",
  },
  {
    quote: "PEHF paid for my delivery. My baby and I are alive because of you.",
    name: "Nakato",
    role: "Mother, Masaka",
    initials: "N",
  },
];

// TODO: replace with self-hosted video or CDN asset confirmed with client
const VIDEO_HERO_SRC =
  "https://cdn.coverr.co/videos/coverr-volunteers-stacking-hands-together-1089/1080p.mp4";

// TODO: replace with self-hosted video or CDN asset confirmed with client
const VIDEO_FEATURE_SRC =
  "https://cdn.coverr.co/videos/coverr-a-teacher-tutoring-a-student-1795/1080p.mp4";

export default function HomePage() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (isPlaying) {
      v.pause();
    } else {
      void v.play();
    }
    setIsPlaying((prev) => !prev);
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !isMuted;
    setIsMuted((prev) => !prev);
  };

  return (
    <>
      <Navigation />

      {/* ═══ Video Hero ═══ */}
      <section className={styles.videoHero} aria-label="Hero">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          onCanPlay={() => setVideoLoaded(true)}
          style={{ opacity: videoLoaded ? 1 : 0 }}
          src={VIDEO_HERO_SRC}
          aria-hidden="true"
        />
        <div className={styles.videoOverlay} aria-hidden="true" />

        <div className={styles.videoHeroContent}>
          <div className={styles.heroTag}>
            <span className={styles.heroTagDot} aria-hidden="true" />
            {/* TODO: replace with CMS data */}
            Achieving Excellence Together
          </div>

          <h1>
            Achieving <em>Excellence</em><br />Together
          </h1>

          {/* TODO: replace with CMS data */}
          <p className={styles.heroDesc}>
            Premier Education and Health Foundation Ltd transforms lives in Uganda
            through scholarships, safe motherhood, and quality education &amp; healthcare.
          </p>

          <div className={styles.heroBtns}>
            <Link href="/donate" className={styles.btnPrimary}>
              Donate Now <span aria-hidden="true">→</span>
            </Link>
            <Link href="/apply" className={styles.btnSecondary}>
              Sponsor a Child
            </Link>
            <Link href="/impact" className={styles.btnSecondary}>
              Our Impact
            </Link>
          </div>

          {/* TODO: replace with CMS data */}
          <p className={styles.heroTrustBadge}>
            Registered with Uganda Registration Services Bureau &mdash; Certificate of Incorporation: 14th March 2024
          </p>
        </div>

        {/* Video playback controls */}
        <div className={styles.videoControls}>
          <button
            className={styles.videoCtrlBtn}
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </button>
          <button
            className={styles.videoCtrlBtn}
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? <VolumeOffIcon /> : <VolumeOnIcon />}
          </button>
          <span className={styles.videoCtrlLabel} aria-hidden="true">
            {isPlaying ? "Playing" : "Paused"}
          </span>
        </div>

        <a href="#mission" className={styles.scrollIndicator} aria-label="Scroll to content">
          <span>Scroll</span>
          <ChevronDownIcon />
        </a>
      </section>

      {/* ═══ Mission Band ═══ */}
      <section className={styles.missionBand} id="mission" aria-label="Mission statement">
        <div className={styles.missionBandInner}>
          <FadeIn>
            {/* TODO: replace with CMS data */}
            <h2>
              We transform lives in Uganda through <em>scholarships,</em>{" "}
              <em>safe motherhood,</em> and{" "}
              <em>quality education &amp; healthcare.</em>
            </h2>
          </FadeIn>
        </div>
      </section>

      {/* ═══ Stats ═══ */}
      <section className={styles.stats} id="impact" aria-label="Impact statistics">
        <div className={styles.statsInner}>
          {STATS.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1}>
              <div>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ═══ Programs ═══ */}
      <section className={styles.programs} id="programs" aria-label="Our programs">
        <div className={styles.programsInner}>
          <FadeIn>
            <div className={styles.sectionTag}>What We Do</div>
            <h2 className={styles.sectionTitle}>Six objectives. One mission.</h2>
            {/* TODO: replace with CMS data */}
            <p className={styles.sectionDesc}>
              Every programme we run flows from our founding conviction: that
              quality education and healthcare are rights, not privileges.
            </p>
          </FadeIn>

          <div className={styles.programsGrid}>
            {PROGRAMS.map((program, i) => (
              <FadeIn key={program.title} delay={i * 0.08}>
                <article className={styles.programCard}>
                  <div className={styles.programNum} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3>{program.title}</h3>
                  <p>{program.desc}</p>
                  <Link href={program.href} className={styles.programLink}>
                    Learn More <span aria-hidden="true">→</span>
                  </Link>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Video Feature ═══ */}
      <section className={styles.videoFeature} aria-label="Featured story">
        <div className={styles.videoFeatureMedia}>
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            src={VIDEO_FEATURE_SRC}
            aria-hidden="true"
          />
        </div>
        <div className={styles.videoFeatureContent}>
          <FadeIn>
            <div className={styles.sectionTag} style={{ color: "var(--sage-light)" }}>
              Our Reach
            </div>
            {/* TODO: replace with CMS data */}
            <h2>Education is the most powerful tool for change</h2>
            <p>
              From Premier Preparatory School in Masaka to mothers across the
              community — our scholarships, bursaries, and safe motherhood
              programme build futures that last.
            </p>
            <Link href="/programs" className={styles.btnOutlineLight}>
              Explore All Programs <span aria-hidden="true">→</span>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ═══ Stories / Testimonials ═══ */}
      <section className={styles.stories} id="stories" aria-label="Community stories">
        <div className={styles.storiesInner}>
          <FadeIn>
            <div className={styles.sectionTag}>Real Stories</div>
            <h2 className={styles.sectionTitle}>Voices from our community</h2>
            {/* TODO: replace with CMS data */}
            <p className={styles.sectionDesc}>
              Every donation, every scholarship, every safe delivery creates
              ripple effects. Here are just a few of those stories.
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

      {/* ═══ CTA ═══ */}
      <section className={styles.cta} id="donate" aria-label="Call to action">
        <FadeIn>
          <div className={styles.ctaInner}>
            <div className={styles.ctaTag} aria-hidden="true">✦ Make a Difference Today</div>
            {/* TODO: replace with CMS data */}
            <h2>Your Gift Educates a Child. Saves a Mother. Builds a Nation.</h2>
            <p>
              Every contribution strengthens both education and healthcare in
              the same Ugandan communities. 85% of funds go straight to programs.
            </p>
            <div className={styles.ctaBtns}>
              <Link href="/donate" className={styles.btnGold}>
                Donate Now <span aria-hidden="true">♥</span>
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
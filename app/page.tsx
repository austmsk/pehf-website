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
    icon: "🏥",
    title: "Healthcare Access",
    desc: "Bringing essential medical services, screenings, and preventive care to underserved communities across the nation.",
    href: "/programs#healthcare",
  },
  {
    icon: "📚",
    title: "Education Programs",
    desc: "Scholarships, mentorship, and after-school programs that open doors for students who need it most.",
    href: "/programs#education",
  },
  {
    icon: "🤝",
    title: "Community Wellness",
    desc: "Building healthier neighborhoods through nutrition education, mental health support, and wellness workshops.",
    href: "/programs#wellness",
  },
  {
    icon: "🌍",
    title: "Global Outreach",
    desc: "Partnering with organizations worldwide to improve health literacy and educational equity.",
    href: "/programs#global",
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
const STORIES = [
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
    name: "Lorem Ipsum",
    role: "Lorem Ipsum, 2019",
    initials: "LI",
  },
  {
    quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure.",
    name: "Lorem Ipsum",
    role: "Lorem Ipsum Program",
    initials: "LI",
  },
  {
    quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.",
    name: "Lorem Ipsum",
    role: "Lorem & Ipsum",
    initials: "LI",
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
            Transforming Communities Since 2008
          </div>

          <h1>
            Better Health.<br />Brighter <em>Futures.</em>
          </h1>

          {/* TODO: replace with CMS data */}
          <p className={styles.heroDesc}>
            The Premier Health and Education Foundation empowers underserved
            communities through accessible healthcare and transformative
            educational programs.
          </p>

          <div className={styles.heroBtns}>
            <Link href="/donate" className={styles.btnPrimary}>
              Make a Donation <span aria-hidden="true">→</span>
            </Link>
            <Link href="/#programs" className={styles.btnSecondary}>
              See Our Impact
            </Link>
          </div>
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
              We are committed to <em>reducing health disparities</em> and
              expanding <em>educational opportunity</em> for communities
              that need it most.
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
            <h2 className={styles.sectionTitle}>Programs that create lasting change</h2>
            {/* TODO: replace with CMS data */}
            <p className={styles.sectionDesc}>
              We invest in four key areas where health and education intersect,
              creating holistic support systems for communities in need.
            </p>
          </FadeIn>

          <div className={styles.programsGrid}>
            {PROGRAMS.map((program, i) => (
              <FadeIn key={program.title} delay={i * 0.1}>
                <article className={styles.programCard}>
                  <div className={styles.programIcon} aria-hidden="true">
                    {program.icon}
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
              Featured Story
            </div>
            {/* TODO: replace with CMS data */}
            <h2>Education is the most powerful tool for change</h2>
            <p>
              Through our scholarship and mentorship programs, we&apos;ve helped
              over 2,400 students access higher education — creating ripple
              effects that lift entire communities.
            </p>
            <Link href="/about" className={styles.btnOutlineLight}>
              Watch Full Story <span aria-hidden="true">▶</span>
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
              Every donation, every volunteer hour, every program creates ripple
              effects that transform lives. Here are just a few of those stories.
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
            <h2>Your generosity changes lives</h2>
            <p>
              Every contribution, no matter the size, helps us expand access
              to healthcare and education for those who need it most.
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

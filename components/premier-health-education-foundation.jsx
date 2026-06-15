import { useState, useEffect, useRef } from "react";

const SECTIONS = [
  {
    icon: "🏥",
    title: "Healthcare Access",
    desc: "Bringing essential medical services, screenings, and preventive care to underserved communities across the nation.",
  },
  {
    icon: "📚",
    title: "Education Programs",
    desc: "Scholarships, mentorship, and after-school programs that open doors for students who need it most.",
  },
  {
    icon: "🤝",
    title: "Community Wellness",
    desc: "Building healthier neighborhoods through nutrition education, mental health support, and wellness workshops.",
  },
  {
    icon: "🌍",
    title: "Global Outreach",
    desc: "Partnering with organizations worldwide to improve health literacy and educational equity.",
  },
];

const STATS = [
  { value: "48K+", label: "Lives Impacted" },
  { value: "120", label: "Partner Clinics" },
  { value: "2,400", label: "Scholarships Awarded" },
  { value: "15", label: "Countries Reached" },
];

const STORIES = [
  {
    quote: "The scholarship I received changed the trajectory of my entire family. I'm now the first doctor in my community.",
    name: "Dr. Amara Osei",
    role: "Scholarship Recipient, 2019",
    img: "AO",
  },
  {
    quote: "Access to free health screenings helped us catch my condition early. I owe my life to the Foundation's mobile clinic.",
    name: "Marcus Rivera",
    role: "Community Health Program",
    img: "MR",
  },
  {
    quote: "The after-school tutoring program gave my daughter confidence she never had before. She's now thriving in college.",
    name: "Linda Chen",
    role: "Parent & Volunteer",
    img: "LC",
  },
];

const VIDEO_SRC = "https://cdn.coverr.co/videos/coverr-volunteers-stacking-hands-together-1089/1080p.mp4";

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s cubic-bezier(.22,1,.36,1) ${delay}s, transform 0.7s cubic-bezier(.22,1,.36,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function PlayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}
function PauseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" />
    </svg>
  );
}
function VolumeOnIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M15.54 8.46a5 5 0 010 7.07" /><path d="M19.07 4.93a10 10 0 010 14.14" />
    </svg>
  );
}
function VolumeOffIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <line x1="23" y1="9" x2="17" y2="15" /><line x1="17" y1="9" x2="23" y2="15" />
    </svg>
  );
}
function ChevronDown() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export default function PremierFoundation() {
  const [scrolled, setScrolled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (isPlaying) { v.pause(); } else { v.play(); }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", color: "#1a2a1a", background: "#faf8f4" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; }

        :root {
          --forest: #1a3c2a;
          --forest-light: #2a5e40;
          --sage: #7a9e7e;
          --sage-light: #b8ccba;
          --cream: #faf8f4;
          --warm: #f0ebe1;
          --gold: #c8a84e;
          --gold-light: #e8d48e;
          --coral: #d4715e;
          --text: #1a2a1a;
          --text-muted: #5a6e5a;
        }

        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          transition: all 0.4s ease;
        }
        .nav.scrolled {
          background: rgba(250, 248, 244, 0.95);
          backdrop-filter: blur(12px);
          box-shadow: 0 1px 20px rgba(26,60,42,0.08);
        }
        .nav.scrolled .nav-logo,
        .nav.scrolled .nav-links a { color: var(--forest); }
        .nav.scrolled .nav-links a:not(.nav-donate) { color: var(--text-muted); }
        .nav.scrolled .nav-links a:not(.nav-donate):hover { color: var(--forest); }
        .nav.scrolled .hamburger span { background: var(--forest); }
        .nav-inner {
          max-width: 1200px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
          padding: 18px 32px;
        }
        .nav-logo {
          font-family: 'Playfair Display', serif; font-weight: 700;
          font-size: 20px; color: white; text-decoration: none;
          display: flex; align-items: center; gap: 10px;
          transition: color 0.4s;
        }
        .nav-logo-icon {
          width: 36px; height: 36px; border-radius: 10px;
          background: linear-gradient(135deg, var(--forest), var(--forest-light));
          display: flex; align-items: center; justify-content: center;
          color: white; font-size: 16px; font-family: 'Playfair Display', serif;
        }
        .nav-links { display: flex; gap: 32px; align-items: center; }
        .nav-links a {
          text-decoration: none; color: rgba(255,255,255,0.8);
          font-size: 14px; font-weight: 500; letter-spacing: 0.3px;
          transition: color 0.3s;
        }
        .nav-links a:hover { color: white; }
        .nav-donate {
          background: var(--forest); color: white !important;
          padding: 10px 24px; border-radius: 50px;
          font-weight: 600 !important; font-size: 13px !important;
          letter-spacing: 0.5px; transition: all 0.3s !important;
          cursor: pointer; border: 1px solid rgba(255,255,255,0.15);
        }
        .nav.scrolled .nav-donate { border-color: transparent; }
        .nav-donate:hover { background: var(--forest-light) !important; transform: translateY(-1px); }
        .hamburger {
          display: none; background: none; border: none;
          cursor: pointer; padding: 4px;
        }
        .hamburger span {
          display: block; width: 22px; height: 2px;
          background: white; margin: 5px 0; transition: all 0.3s;
        }

        /* ─── Video Hero ─── */
        .video-hero {
          position: relative; width: 100%; height: 100vh;
          min-height: 600px; overflow: hidden; background: #0a1f12;
        }
        .video-hero video {
          position: absolute; top: 50%; left: 50%;
          min-width: 100%; min-height: 100%;
          width: auto; height: auto;
          transform: translate(-50%, -50%);
          object-fit: cover; transition: opacity 1.2s ease;
        }
        .video-overlay {
          position: absolute; inset: 0; z-index: 2;
          background: linear-gradient(180deg,
            rgba(10,31,18,0.55) 0%, rgba(10,31,18,0.2) 35%,
            rgba(10,31,18,0.3) 65%, rgba(10,31,18,0.75) 100%);
        }
        .video-hero-content {
          position: absolute; inset: 0; z-index: 3;
          display: flex; flex-direction: column;
          justify-content: center; align-items: center;
          text-align: center; padding: 120px 32px 80px;
        }
        .video-hero-tag {
          display: inline-flex; align-items: center; gap: 10px;
          background: rgba(255,255,255,0.1); backdrop-filter: blur(8px);
          padding: 8px 20px; border-radius: 50px;
          font-size: 11px; font-weight: 600;
          color: var(--gold-light); letter-spacing: 2px;
          text-transform: uppercase; margin-bottom: 32px;
          border: 1px solid rgba(255,255,255,0.08);
          animation: fadeSlideUp 1s ease 0.2s both;
        }
        .video-hero-tag-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--gold); animation: pulse 2s infinite;
        }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .video-hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(36px, 6vw, 72px);
          font-weight: 700; line-height: 1.08;
          color: white; margin-bottom: 24px; max-width: 800px;
          animation: fadeSlideUp 1s ease 0.4s both;
        }
        .video-hero h1 em { font-style: italic; color: var(--gold-light); }
        .video-hero-desc {
          font-size: clamp(15px, 2vw, 18px); line-height: 1.7;
          color: rgba(255,255,255,0.75); max-width: 560px;
          margin-bottom: 40px; animation: fadeSlideUp 1s ease 0.6s both;
        }
        .video-hero-btns {
          display: flex; gap: 16px; flex-wrap: wrap;
          justify-content: center; animation: fadeSlideUp 1s ease 0.8s both;
        }
        .video-controls {
          position: absolute; bottom: 32px; left: 32px;
          z-index: 5; display: flex; gap: 10px; align-items: center;
        }
        .video-ctrl-btn {
          width: 44px; height: 44px; border-radius: 50%;
          background: rgba(255,255,255,0.12); backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.12);
          color: white; display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all 0.3s;
        }
        .video-ctrl-btn:hover {
          background: rgba(255,255,255,0.22);
          border-color: rgba(255,255,255,0.25);
        }
        .video-ctrl-label {
          font-size: 12px; color: rgba(255,255,255,0.5);
          letter-spacing: 1px; text-transform: uppercase;
          font-weight: 500; margin-left: 6px;
        }
        .scroll-indicator {
          position: absolute; bottom: 32px;
          left: 50%; transform: translateX(-50%);
          z-index: 5; display: flex; flex-direction: column;
          align-items: center; gap: 6px;
          color: rgba(255,255,255,0.4);
          animation: bobble 2.5s ease-in-out infinite;
          cursor: pointer; text-decoration: none;
        }
        .scroll-indicator span {
          font-size: 10px; letter-spacing: 2px;
          text-transform: uppercase; font-weight: 500;
        }
        @keyframes bobble {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }

        /* ─── Mission Band ─── */
        .mission-band {
          background: var(--forest); padding: 56px 32px; text-align: center;
        }
        .mission-band-inner { max-width: 760px; margin: 0 auto; }
        .mission-band h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(22px, 3vw, 32px);
          font-weight: 600; color: white; line-height: 1.5;
        }
        .mission-band h2 em { font-style: normal; color: var(--gold-light); }

        /* ─── Buttons ─── */
        .btn-primary {
          background: white; color: var(--forest);
          padding: 16px 36px; border-radius: 50px;
          font-weight: 700; font-size: 15px;
          text-decoration: none; display: inline-flex;
          align-items: center; gap: 8px;
          transition: all 0.3s; cursor: pointer; border: none;
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(0,0,0,0.2); }
        .btn-secondary {
          background: transparent; color: white;
          padding: 16px 36px; border-radius: 50px;
          font-weight: 600; font-size: 15px;
          text-decoration: none; display: inline-flex;
          align-items: center; gap: 8px;
          border: 1.5px solid rgba(255,255,255,0.3);
          transition: all 0.3s; cursor: pointer;
        }
        .btn-secondary:hover { border-color: rgba(255,255,255,0.6); background: rgba(255,255,255,0.08); }

        /* ─── Stats ─── */
        .stats { background: var(--warm); padding: 60px 32px; }
        .stats-inner {
          max-width: 1200px; margin: 0 auto;
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 40px; text-align: center;
        }
        .stat-value {
          font-family: 'Playfair Display', serif;
          font-size: 42px; font-weight: 700;
          color: var(--forest); margin-bottom: 8px;
        }
        .stat-label {
          font-size: 13px; letter-spacing: 1px;
          text-transform: uppercase; color: var(--sage); font-weight: 500;
        }

        /* ─── Programs ─── */
        .programs { padding: 100px 32px; background: var(--cream); }
        .programs-inner { max-width: 1200px; margin: 0 auto; }
        .section-tag {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 12px; font-weight: 600; letter-spacing: 2px;
          text-transform: uppercase; color: var(--sage); margin-bottom: 16px;
        }
        .section-tag::before {
          content: ''; width: 24px; height: 1.5px; background: var(--gold);
        }
        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(30px, 4vw, 44px);
          font-weight: 700; color: var(--forest);
          margin-bottom: 16px; max-width: 560px;
        }
        .section-desc {
          font-size: 16px; color: var(--text-muted);
          line-height: 1.7; max-width: 520px; margin-bottom: 56px;
        }
        .programs-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px;
        }
        .program-card {
          background: white; border-radius: 20px;
          padding: 32px 28px; border: 1px solid rgba(26,60,42,0.06);
          transition: all 0.4s;
        }
        .program-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(26,60,42,0.1);
          border-color: var(--sage-light);
        }
        .program-icon {
          width: 52px; height: 52px; border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          font-size: 26px; margin-bottom: 20px; background: var(--warm);
        }
        .program-card h3 {
          font-family: 'Playfair Display', serif;
          font-size: 20px; font-weight: 600;
          color: var(--forest); margin-bottom: 12px;
        }
        .program-card p { font-size: 14px; line-height: 1.7; color: var(--text-muted); }
        .program-link {
          display: inline-flex; align-items: center; gap: 6px;
          margin-top: 20px; font-size: 13px; font-weight: 600;
          color: var(--forest); text-decoration: none; transition: gap 0.3s;
        }
        .program-link:hover { gap: 10px; }

        /* ─── Video Feature ─── */
        .video-feature {
          padding: 0; background: var(--forest);
          display: grid; grid-template-columns: 1fr 1fr; min-height: 500px;
        }
        .video-feature-media {
          position: relative; overflow: hidden; min-height: 400px;
        }
        .video-feature-media video {
          position: absolute; inset: 0;
          width: 100%; height: 100%; object-fit: cover;
        }
        .video-feature-content {
          padding: 72px 56px; display: flex;
          flex-direction: column; justify-content: center;
        }
        .video-feature-content .section-tag { color: var(--sage-light); }
        .video-feature-content .section-tag::before { background: var(--gold-light); }
        .video-feature-content h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(26px, 3vw, 38px);
          font-weight: 700; color: white;
          margin-bottom: 20px; line-height: 1.2;
        }
        .video-feature-content p {
          font-size: 15px; line-height: 1.8;
          color: var(--sage-light); margin-bottom: 32px; max-width: 440px;
        }
        .btn-outline-light {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 14px 28px; border-radius: 50px;
          border: 1.5px solid rgba(255,255,255,0.25);
          color: white; font-size: 14px; font-weight: 600;
          text-decoration: none; transition: all 0.3s;
          cursor: pointer; background: transparent; width: fit-content;
        }
        .btn-outline-light:hover {
          border-color: rgba(255,255,255,0.5);
          background: rgba(255,255,255,0.06);
        }

        /* ─── Stories ─── */
        .stories {
          padding: 100px 32px;
          background: linear-gradient(180deg, var(--warm) 0%, var(--cream) 100%);
        }
        .stories-inner { max-width: 1200px; margin: 0 auto; }
        .stories-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 28px; margin-top: 56px;
        }
        .story-card {
          background: white; border-radius: 20px;
          padding: 36px 28px; border: 1px solid rgba(26,60,42,0.06);
          transition: all 0.4s;
        }
        .story-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 50px rgba(26,60,42,0.08);
        }
        .story-quote-mark {
          font-family: 'Playfair Display', serif;
          font-size: 64px; color: var(--gold-light);
          line-height: 1; margin-bottom: -10px;
        }
        .story-quote {
          font-size: 15px; line-height: 1.75;
          color: var(--text); margin-bottom: 24px; font-style: italic;
        }
        .story-author {
          display: flex; align-items: center; gap: 12px;
          border-top: 1px solid rgba(26,60,42,0.08); padding-top: 20px;
        }
        .story-avatar {
          width: 42px; height: 42px; border-radius: 50%;
          background: linear-gradient(135deg, var(--forest), var(--sage));
          display: flex; align-items: center; justify-content: center;
          color: white; font-size: 13px; font-weight: 700;
        }
        .story-name { font-weight: 600; font-size: 14px; color: var(--forest); }
        .story-role { font-size: 12px; color: var(--text-muted); }

        /* ─── CTA ─── */
        .cta { padding: 100px 32px; background: var(--cream); }
        .cta-inner {
          max-width: 900px; margin: 0 auto;
          background: linear-gradient(145deg, var(--forest) 0%, #1a4a30 100%);
          border-radius: 32px; padding: 72px 60px;
          text-align: center; position: relative; overflow: hidden;
        }
        .cta-inner::before {
          content: ''; position: absolute; inset: 0;
          background:
            radial-gradient(circle 300px at 20% 30%, rgba(200,168,78,0.12), transparent),
            radial-gradient(circle 250px at 80% 70%, rgba(122,158,126,0.1), transparent);
          pointer-events: none;
        }
        .cta-tag {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 600; letter-spacing: 2px;
          text-transform: uppercase; color: var(--gold-light);
          margin-bottom: 24px; position: relative;
        }
        .cta h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 700; color: white;
          margin-bottom: 20px; position: relative;
        }
        .cta p {
          font-size: 16px; color: var(--sage-light);
          line-height: 1.7; max-width: 500px;
          margin: 0 auto 36px; position: relative;
        }
        .cta-btns {
          display: flex; gap: 16px; justify-content: center;
          flex-wrap: wrap; position: relative;
        }
        .btn-gold {
          background: var(--gold); color: var(--forest);
          padding: 16px 40px; border-radius: 50px;
          font-weight: 700; font-size: 15px;
          text-decoration: none; display: inline-flex;
          align-items: center; gap: 8px;
          transition: all 0.3s; cursor: pointer; border: none;
        }
        .btn-gold:hover { background: var(--gold-light); transform: translateY(-2px); box-shadow: 0 8px 30px rgba(200,168,78,0.3); }
        .btn-ghost {
          background: transparent; color: white;
          padding: 16px 36px; border-radius: 50px;
          font-weight: 600; font-size: 15px;
          text-decoration: none; display: inline-flex;
          align-items: center; gap: 8px;
          border: 1.5px solid rgba(255,255,255,0.25);
          transition: all 0.3s; cursor: pointer;
        }
        .btn-ghost:hover { border-color: rgba(255,255,255,0.5); background: rgba(255,255,255,0.05); }

        /* ─── Footer ─── */
        .footer {
          background: var(--forest); padding: 64px 32px 32px;
          color: var(--sage-light);
        }
        .footer-inner {
          max-width: 1200px; margin: 0 auto;
          display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px;
        }
        .footer-brand {
          font-family: 'Playfair Display', serif;
          font-size: 18px; font-weight: 700;
          color: white; margin-bottom: 16px;
        }
        .footer-desc {
          font-size: 14px; line-height: 1.7;
          color: var(--sage); max-width: 280px;
        }
        .footer h4 {
          font-size: 12px; letter-spacing: 1.5px;
          text-transform: uppercase; color: var(--sage);
          margin-bottom: 20px; font-weight: 600;
        }
        .footer a {
          display: block; text-decoration: none;
          color: var(--sage-light); font-size: 14px;
          margin-bottom: 12px; transition: color 0.3s;
        }
        .footer a:hover { color: white; }
        .footer-bottom {
          max-width: 1200px; margin: 48px auto 0;
          padding-top: 24px; border-top: 1px solid rgba(122,158,126,0.15);
          display: flex; justify-content: space-between;
          align-items: center; font-size: 13px; color: var(--sage);
        }

        @media (max-width: 900px) {
          .stats-inner { grid-template-columns: repeat(2, 1fr); }
          .programs-grid { grid-template-columns: repeat(2, 1fr); }
          .stories-grid { grid-template-columns: 1fr; }
          .footer-inner { grid-template-columns: 1fr 1fr; }
          .cta-inner { padding: 48px 32px; }
          .video-feature { grid-template-columns: 1fr; }
          .video-feature-media { min-height: 300px; }
          .video-feature-content { padding: 48px 32px; }
        }
        @media (max-width: 600px) {
          .nav-links { display: none; }
          .hamburger { display: block; }
          .programs-grid { grid-template-columns: 1fr; }
          .stats-inner { grid-template-columns: 1fr 1fr; gap: 24px; }
          .footer-inner { grid-template-columns: 1fr; }
          .footer-bottom { flex-direction: column; gap: 12px; text-align: center; }
          .video-hero-btns { flex-direction: column; align-items: center; }
          .video-controls { bottom: 16px; left: 16px; }
          .scroll-indicator { display: none; }
        }
      `}</style>

      {/* Navigation */}
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <a href="#" className="nav-logo">
            <div className="nav-logo-icon">P</div>
            Premier Foundation
          </a>
          <div className="nav-links">
            <a href="#programs">Our Work</a>
            <a href="#impact">Impact</a>
            <a href="#stories">Stories</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#donate" className="nav-donate">Donate Now</a>
          </div>
          <button className="hamburger" aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* ═══ Video Hero ═══ */}
      <section className="video-hero">
        <video
          ref={videoRef}
          autoPlay muted loop playsInline
          onCanPlay={() => setVideoLoaded(true)}
          style={{ opacity: videoLoaded ? 1 : 0 }}
          src={VIDEO_SRC}
        />
        <div className="video-overlay" />
        <div className="video-hero-content">
          <div className="video-hero-tag">
            <span className="video-hero-tag-dot" />
            Transforming Communities Since 2008
          </div>
          <h1>Better Health.<br />Brighter <em>Futures.</em></h1>
          <p className="video-hero-desc">
            The Premier Health and Education Foundation empowers underserved
            communities through accessible healthcare and transformative
            educational programs.
          </p>
          <div className="video-hero-btns">
            <a href="#donate" className="btn-primary">Make a Donation <span>→</span></a>
            <a href="#programs" className="btn-secondary">See Our Impact</a>
          </div>
        </div>
        <div className="video-controls">
          <button className="video-ctrl-btn" onClick={togglePlay} aria-label={isPlaying ? "Pause" : "Play"}>
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </button>
          <button className="video-ctrl-btn" onClick={toggleMute} aria-label={isMuted ? "Unmute" : "Mute"}>
            {isMuted ? <VolumeOffIcon /> : <VolumeOnIcon />}
          </button>
          <span className="video-ctrl-label">{isPlaying ? "Playing" : "Paused"}</span>
        </div>
        <a href="#mission" className="scroll-indicator">
          <span>Scroll</span>
          <ChevronDown />
        </a>
      </section>

      {/* ═══ Mission Band ═══ */}
      <section className="mission-band" id="mission">
        <div className="mission-band-inner">
          <FadeIn>
            <h2>
              We are committed to <em>reducing health disparities</em> and
              expanding <em>educational opportunity</em> for communities
              that need it most.
            </h2>
          </FadeIn>
        </div>
      </section>

      {/* ═══ Stats ═══ */}
      <section className="stats" id="impact">
        <div className="stats-inner">
          {STATS.map((s, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div>
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ═══ Programs ═══ */}
      <section className="programs" id="programs">
        <div className="programs-inner">
          <FadeIn>
            <div className="section-tag">What We Do</div>
            <h2 className="section-title">Programs that create lasting change</h2>
            <p className="section-desc">
              We invest in four key areas where health and education intersect,
              creating holistic support systems for communities in need.
            </p>
          </FadeIn>
          <div className="programs-grid">
            {SECTIONS.map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="program-card">
                  <div className="program-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <a href="#" className="program-link">Learn More <span>→</span></a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Video Feature Section ═══ */}
      <section className="video-feature">
        <div className="video-feature-media">
          <video autoPlay muted loop playsInline
            src="https://cdn.coverr.co/videos/coverr-a-teacher-tutoring-a-student-1795/1080p.mp4"
          />
        </div>
        <div className="video-feature-content">
          <FadeIn>
            <div className="section-tag">Featured Story</div>
            <h2>Education is the most powerful tool for change</h2>
            <p>
              Through our scholarship and mentorship programs, we've helped
              over 2,400 students access higher education — creating ripple
              effects that lift entire communities.
            </p>
            <a href="#" className="btn-outline-light">Watch Full Story <span>▶</span></a>
          </FadeIn>
        </div>
      </section>

      {/* ═══ Stories ═══ */}
      <section className="stories" id="stories">
        <div className="stories-inner">
          <FadeIn>
            <div className="section-tag">Real Stories</div>
            <h2 className="section-title">Voices from our community</h2>
            <p className="section-desc">
              Every donation, every volunteer hour, every program creates ripple
              effects that transform lives. Here are just a few of those stories.
            </p>
          </FadeIn>
          <div className="stories-grid">
            {STORIES.map((s, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <div className="story-card">
                  <div className="story-quote-mark">"</div>
                  <p className="story-quote">{s.quote}</p>
                  <div className="story-author">
                    <div className="story-avatar">{s.img}</div>
                    <div>
                      <div className="story-name">{s.name}</div>
                      <div className="story-role">{s.role}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="cta" id="donate">
        <FadeIn>
          <div className="cta-inner">
            <div className="cta-tag">✦ Make a Difference Today</div>
            <h2>Your generosity changes lives</h2>
            <p>
              Every contribution, no matter the size, helps us expand access
              to healthcare and education for those who need it most.
            </p>
            <div className="cta-btns">
              <a href="#" className="btn-gold">Donate Now <span>♥</span></a>
              <a href="#" className="btn-ghost">Become a Volunteer</a>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ═══ Footer ═══ */}
      <footer className="footer">
        <div className="footer-inner">
          <div>
            <div className="footer-brand">Premier Health &<br />Education Foundation</div>
            <p className="footer-desc">
              Empowering communities through healthcare access and educational
              opportunity since 2008.
            </p>
          </div>
          <div>
            <h4>Programs</h4>
            <a href="#">Healthcare Access</a>
            <a href="#">Education Programs</a>
            <a href="#">Community Wellness</a>
            <a href="#">Global Outreach</a>
          </div>
          <div>
            <h4>Organization</h4>
            <a href="#">About Us</a>
            <a href="#">Our Team</a>
            <a href="#">Annual Reports</a>
            <a href="#">Careers</a>
          </div>
          <div>
            <h4>Connect</h4>
            <a href="#">Contact Us</a>
            <a href="#">Newsletter</a>
            <a href="#">Press</a>
            <a href="#">Partner With Us</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 Premier Health and Education Foundation. All rights reserved.</span>
          <span>
            <a href="#" style={{ display: "inline", marginRight: 16 }}>Privacy Policy</a>
            <a href="#" style={{ display: "inline" }}>Terms of Service</a>
          </span>
        </div>
      </footer>
    </div>
  );
}

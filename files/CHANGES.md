# Navigation & Tone Restructure — Change Notes

## 1. What changed in Navigation.tsx / Navigation.module.css

- Flat 6-link nav replaced with 5 mission-first pillars:
  **What We Do · Where We Work · Get Involved · About Us · Stories** + Donate pill.
- "What We Do", "Get Involved", and "About Us" are dropdown groups on desktop
  (hover + keyboard focus-within) and accordions in the mobile menu.
- Parent tabs are clickable landing pages; each dropdown also includes an
  explicit "Overview" link so the landing page is reachable on touch devices.
- Donate label softened from "Donate Now" → "Donate". Still the styled pill —
  wayfinding, not urgency.
- "Sponsor a Child" moved to the *last* item under Get Involved (participation
  options first, giving last).
- "Impact & Accountability" added under About Us — this is where money talk
  belongs: funds raised, where they went, 85%-to-programs, URSB registration.
- Mobile breakpoint moved from 600px → 900px: five groups plus the Donate pill
  don't fit comfortably below ~900px.
- Added `prefers-reduced-motion` handling and a max-height/scroll on the
  mobile panel (it's taller now with accordions).

### Routes the nav now expects (update CLAUDE.md page table)

| Route | Notes |
|---|---|
| /what-we-do | Overview landing page — 6 objectives as cards |
| /what-we-do/scholarships | Include eligibility + application info from parent letter |
| /what-we-do/safe-motherhood | |
| /what-we-do/adult-literacy | |
| /what-we-do/education | Teacher salaries, classrooms, labs |
| /what-we-do/medical-care | |
| /where-we-work | Masaka, Uganda — map, Premier Prep School, Premier Health Care system. Replace the placeholder "15 countries" copy. |
| /get-involved | Overview landing page |
| /about/team | |
| /about/transparency | "Impact & Accountability" — see tone rules below |
| /donate | The ONE page where ask-language is appropriate |

(Old /programs and /our-work routes should redirect to /what-we-do.)

## 2. Hero CTA patch (homepage)

In `premier-health-education-foundation.jsx` (or `app/page.jsx` once extracted),
swap the button hierarchy in the video hero:

```jsx
// BEFORE
<div className="video-hero-btns">
  <a href="#donate" className="btn-primary">Make a Donation <span>→</span></a>
  <a href="#programs" className="btn-secondary">See Our Impact</a>
</div>

// AFTER
<div className="video-hero-btns">
  <a href="/what-we-do" className="btn-primary">See Our Work <span>→</span></a>
  <a href="/get-involved" className="btn-secondary">Get Involved</a>
</div>
```

The donation path remains one click away via the nav pill.

## 3. Add to CLAUDE.md

### Under "Do Not (Non-Negotiable)", append:

```
- No donation asks outside /donate and the nav/footer Donate links.
  Specifically: no "Donate" banners or CTA bands between page sections,
  no "Give Now" buttons in heroes, no urgency language ("Now", "Today",
  "Urgent") on giving CTAs anywhere. The nav pill is labeled "Donate",
  not "Donate Now".
- Money may be discussed prominently ONLY as accountability: funds raised,
  allocation breakdowns, % to programs, audited figures, and concrete
  outcomes ("X scholarships funded in 2025"). This content lives on
  /about/transparency and may be referenced elsewhere as evidence,
  never as an ask.
```

### New section to add (suggested placement: after Component Patterns):

```
### Tone & Money Language

PEHF's site leads with the work, not the ask. Rules of thumb:

- Heroes and landing pages: mission and evidence first. Primary CTAs point
  to work/involvement ("See Our Work", "Get Involved"), never to giving.
- /donate is the single ask-appropriate page. Headlines like "Your Gift
  Educates a Child. Saves a Mother." belong there and only there.
- Sponsorship ("Sponsor a Child") may appear in Get Involved menus and on
  /donate — it reads as a relationship, not a cash request — but is never
  the first or most prominent item.
- Accountability content (where money went) is encouraged everywhere as
  trust-building: stats bands, transparency callouts, annual report links.
- Footer: Donate is one quiet link under a "Connect"/"Support" column,
  not a repeated CTA block.
```

## 4. Footer follow-up (not yet done)

Update the 4-column footer to mirror the new pillars:
**What We Do** (5 program links) · **Organization** (About, Team,
Impact & Accountability, Annual Reports) · **Connect** (Contact, Newsletter,
Volunteer, Partner With Us, Donate). Happy to produce this next.

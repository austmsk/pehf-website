// TODO: replace with CMS data — content agent owns this block.
// Shared source of truth for the What We Do overview and the
// /what-we-do/[slug] detail pages. Slugs match the navigation.

export type ProgramPoint = { title: string; desc: string };

export type Program = {
  slug: string;
  tag: "Education" | "Health" | "Fundraising";
  title: string;
  // Short copy used on overview cards.
  short: string;
  stat: { value: string; label: string };
  initials: string;
  colorClass: "imageForest" | "imageGold" | "imageSage" | "imageCoral";
  // When false, the overview card links out (e.g. partnerships → /partner)
  // instead of to a /what-we-do/[slug] detail page.
  hasDetail: boolean;
  externalHref?: string;
  // Detail-page content (only required when hasDetail is true).
  lead?: string;
  body?: string[];
  points?: ProgramPoint[];
};

export const PROGRAMS: Program[] = [
  {
    slug: "scholarships",
    tag: "Education",
    title: "Scholarships & Bursaries",
    short:
      "Monetary and scholastic support for financially needy learners at institutions affiliated with Premier Education Institute.",
    stat: { value: "$1,200", label: "Full Annual Sponsorship" },
    initials: "SB",
    colorClass: "imageForest",
    hasDetail: true,
    lead:
      "Full sponsorship for Top Class & P.1–P.3 pupils and partial bursaries for P.4–P.5 at Premier Preparatory School, Masaka — so no child is sent home for fees.",
    body: [
      "We provide monetary and scholastic support to financially needy learners at institutions affiliated with Premier Education Institute. A scholarship covers far more than tuition: it pays for books, uniforms, scholastic materials, and routine medical checks so that a place at school is a place a child can actually keep.",
      "Full sponsorship is reserved for our youngest learners — Top Class through Primary Three — where early, uninterrupted schooling has the greatest long-term effect. From Primary Four to Primary Five we offer partial bursaries, sharing the cost with families as their circumstances allow.",
    ],
    points: [
      {
        title: "Who qualifies",
        desc: "Financially vulnerable pupils at Premier Preparatory School, Masaka, identified through a needs assessment with families and teachers.",
      },
      {
        title: "What it covers",
        desc: "Tuition, books, uniform, scholastic materials, and a medical check — the full cost of staying enrolled, not just attending.",
      },
      {
        title: "How to apply",
        desc: "Families request support through the school office; sponsors fund a named place for the academic year.",
      },
    ],
  },
  {
    slug: "safe-motherhood",
    tag: "Health",
    title: "Safe Motherhood",
    short:
      "Moral and monetary support ensuring safe delivery for destitute mothers within the Premier Health Care system.",
    stat: { value: "$150", label: "Safe Delivery Kit + Care" },
    initials: "SM",
    colorClass: "imageGold",
    hasDetail: true,
    lead:
      "Through moral and monetary support, we ensure the safe delivery of babies within the Premier Health Care system for mothers who cannot afford care.",
    body: [
      "No mother in our community should face childbirth alone or unattended because she cannot pay. We cover the cost of supervised, facility-based delivery for destitute mothers within the Premier Health Care system — including antenatal checks, a safe-delivery kit, skilled attendance, and post-natal follow-up.",
      "Safe motherhood is where a small, timely contribution prevents an irreversible loss. Every supported delivery is a mother and a child who come home healthy.",
    ],
    points: [
      {
        title: "Who qualifies",
        desc: "Expectant mothers in and around Masaka who cannot afford supervised care within the Premier Health Care system.",
      },
      {
        title: "What it covers",
        desc: "Antenatal visits, a safe-delivery kit, skilled birth attendance, and post-natal follow-up for mother and baby.",
      },
      {
        title: "The outcome",
        desc: "Supervised deliveries that protect both mother and child — the simplest, most direct way to save two lives at once.",
      },
    ],
  },
  {
    slug: "adult-literacy",
    tag: "Education",
    title: "Adult Literacy",
    short:
      "Sponsoring illiteracy-eradication programmes for adults, run during school holidays, to break cycles of poverty.",
    stat: { value: "Holidays", label: "Program Schedule" },
    initials: "AL",
    colorClass: "imageSage",
    hasDetail: true,
    lead:
      "We sponsor illiteracy-eradication programmes for adults — run during school holidays — to break cycles of poverty one household at a time.",
    body: [
      "Education does not stop at childhood. We run adult literacy programmes during school holidays, using classrooms and teachers that would otherwise sit idle, to reach parents and carers who never had the chance to finish school.",
      "When an adult learns to read, write, and count, the effect compounds: they manage a household budget, follow a health instruction, support a child's homework, and pass literacy on. It is one of the most cost-effective investments we make.",
    ],
    points: [
      {
        title: "Who it's for",
        desc: "Adults in the Masaka community who missed formal schooling, especially parents and carers of pupils we support.",
      },
      {
        title: "When it runs",
        desc: "During school holidays, making full use of existing classrooms and teaching staff.",
      },
      {
        title: "Why it matters",
        desc: "Literacy in one generation lifts the next — better health decisions, household budgeting, and support for children's learning.",
      },
    ],
  },
  {
    slug: "education",
    tag: "Education",
    title: "Quality Education",
    short:
      "Optimising teacher salaries and building state-of-the-art classrooms, laboratories, and research units.",
    stat: { value: "$25K", label: "Builds a Classroom Block" },
    initials: "QE",
    colorClass: "imageForest",
    hasDetail: true,
    lead:
      "We invest in the conditions that make good teaching possible: fair teacher salaries and well-equipped classrooms, laboratories, and research units.",
    body: [
      "Scholarships open the door; quality education is what waits on the other side. We optimise teacher salaries to attract and retain highly qualified, dedicated instructors — because a school is only ever as good as the people in front of its pupils.",
      "Alongside staffing, we construct and equip state-of-the-art classrooms, lecture theatres, laboratories, and research units, giving learners the physical environment that modern education requires.",
    ],
    points: [
      {
        title: "Teacher retention",
        desc: "Competitive salaries that keep qualified, committed teachers in the classroom year after year.",
      },
      {
        title: "Facilities",
        desc: "Construction and equipping of classrooms, lecture theatres, laboratories, and research units.",
      },
      {
        title: "Standards",
        desc: "An environment designed so that every sponsored place leads to a genuinely good education.",
      },
    ],
  },
  {
    slug: "medical-care",
    tag: "Health",
    title: "Medical Care",
    short:
      "Supporting quality medical care for patients within the Premier Health Care system and the surrounding community.",
    stat: { value: "$5,000", label: "Funds 10 Safe Deliveries" },
    initials: "QM",
    colorClass: "imageGold",
    hasDetail: true,
    lead:
      "We support the provision of quality medical care to patients within the Premier Health Care system and the surrounding Masaka community.",
    body: [
      "Health and education reinforce each other: a child who is well learns, and a family that can reach care stays out of poverty. We support quality medical care for patients within the Premier Health Care system and the wider Masaka community.",
      "From routine treatment to the safe-motherhood services at the heart of our health work, this objective keeps the door to care open for people who would otherwise be turned away by cost.",
    ],
    points: [
      {
        title: "Who it reaches",
        desc: "Patients within the Premier Health Care system and the surrounding community in Masaka.",
      },
      {
        title: "What we support",
        desc: "Quality treatment, supplies, and the facilities that make reliable care possible.",
      },
      {
        title: "Connected care",
        desc: "Works hand in hand with our safe-motherhood programme to protect the most vulnerable.",
      },
    ],
  },
  {
    slug: "partnerships",
    tag: "Fundraising",
    title: "Partnerships & Fundraising",
    short:
      "Soliciting donations nationally and internationally and cooperating with like-minded organisations to multiply impact.",
    stat: { value: "Global", label: "Donor Network" },
    initials: "PF",
    colorClass: "imageSage",
    hasDetail: false,
    externalHref: "/partner",
  },
];

export function getProgram(slug: string): Program | undefined {
  return PROGRAMS.find((p) => p.slug === slug);
}

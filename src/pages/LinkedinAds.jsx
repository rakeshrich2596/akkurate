import React, { useState } from "react";
import { Link } from "react-router-dom";

/* =========================================================
   LINKEDIN ADS PAGE
   ---------------------------------------------------------
   Design / Layout / Colours:
   Distinct LinkedIn-first visual language

   Content:
   LinkedIn Ads content

   Tech:
   React.js + Tailwind CSS only
========================================================= */

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    number: "01",
    title: "B2B Audience Strategy",
    description:
      "Define target account, industry, role, seniority and professional audience criteria based on the sales strategy.",
  },
  {
    number: "02",
    title: "Company & Role Targeting",
    description:
      "Build campaigns around the people and organizations most relevant to the offer.",
  },
  {
    number: "03",
    title: "Campaign Architecture",
    description:
      "Develop campaigns for awareness, consideration, lead generation or event/content promotion as required.",
  },
  {
    number: "04",
    title: "Thought-Leadership Promotion",
    description:
      "Promote useful expertise-led content rather than relying only on direct sales messaging.",
  },
  {
    number: "05",
    title: "Lead Generation",
    description:
      "Create focused lead journeys and qualification criteria that help sales teams act on the right enquiries.",
  },
  {
    number: "06",
    title: "Measurement & Optimization",
    description:
      "Measure audience quality, engagement, leads and downstream signals where data is available.",
  },
];

/* =========================================================
   OUTCOMES
========================================================= */

const outcomes = [
  "More precise B2B audience definition",
  "Stronger professional relevance",
  "Better content distribution",
  "Focused lead journeys",
  "Sales-aligned measurement",
  "Integrated B2B marketing",
];

/* =========================================================
   PROCESS
========================================================= */

const processSteps = [
  {
    number: "01",
    title: "Audience & Account Research",
    description:
      "Understand the business objective, audience, current assets, constraints and success criteria before recommending the work.",
  },
  {
    number: "02",
    title: "Campaign Strategy",
    description:
      "Translate the objective into a practical strategy, scope, content/creative direction and measurement plan.",
  },
  {
    number: "03",
    title: "Creative & Offer Development",
    description:
      "Create, optimize, design, develop or launch the agreed work with brand and user requirements in mind.",
  },
  {
    number: "04",
    title: "Launch & Lead Tracking",
    description:
      "Test the experience, tracking, messaging and key conversion paths before considering the work complete.",
  },
  {
    number: "05",
    title: "Optimization & Sales Feedback",
    description:
      "Review performance, feedback and business signals and use those learnings to prioritize the next improvement.",
  },
];

/* =========================================================
   WHY CHOOSE
========================================================= */

const whyChoose = [
  {
    number: "01",
    title: "Business-First Strategy",
    description:
      "We start with what the business needs to achieve and then choose the right digital activity.",
  },
  {
    number: "02",
    title: "Integrated Expertise",
    description:
      "SEO, AEO, GEO, paid media, web, content and branding capabilities can work together when the project requires them.",
  },
  {
    number: "03",
    title: "Clear Communication",
    description:
      "The team should understand what is being done, why it matters and what the next priority is.",
  },
  {
    number: "04",
    title: "Continuous Improvement",
    description:
      "Launch is not the end. Performance, feedback and changing customer behavior should guide the next iteration.",
  },
];

/* =========================================================
   FAQ
========================================================= */

const faqs = [
  {
    question: "What is included in your LinkedIn Ads service?",
    answer:
      "The scope is customized around the objective. The six capability areas above form the standard framework, while the actual deliverables depend on the project.",
  },
  {
    question: "How do you decide the right scope?",
    answer:
      "We look at the business goal, audience, current performance, competition, assets, timeline and budget before recommending priorities.",
  },
  {
    question:
      "Can your LinkedIn Ads service be combined with SEO, paid media or website development?",
    answer:
      "Yes. Connected services are often more effective when the customer journey crosses discovery, content, website experience and conversion.",
  },
  {
    question: "How do you measure success?",
    answer:
      "KPIs depend on the objective and may include qualified traffic, engagement, leads, enquiries, conversions, product usage or other agreed business signals.",
  },
  {
    question: "Do you guarantee results?",
    answer:
      "No responsible agency can guarantee platform rankings, algorithmic distribution, exact lead volume or a fixed commercial outcome. We can commit to a clear process, quality execution and transparent measurement.",
  },
  {
    question: "Can you work with an existing website, campaign or brand?",
    answer:
      "Yes. We can audit and improve existing assets instead of rebuilding everything when that is the more practical approach.",
  },
];

/* =========================================================
   RELATED SERVICES
========================================================= */

const relatedServices = [
  {
    number: "01",
    short: "SOCIAL",
    title: "Social Media Marketing",
    description:
      "Build a stronger social presence with connected content, campaigns and audience engagement.",
    href: "/social-media-marketing",
    glow: "bg-violet-600/10",
  },
  {
    number: "02",
    short: "YOUTUBE",
    title: "YouTube Marketing",
    description:
      "Use video-led marketing to build awareness, engagement and meaningful customer journeys.",
    href: "/youtube-marketing",
    glow: "bg-blue-600/10",
  },
  {
    number: "03",
    short: "GOOGLE",
    title: "Google My Business",
    description:
      "Strengthen local visibility and make your business easier to discover across Google.",
    href: "/google-my-business",
    glow: "bg-cyan-500/10",
  },
];

/* =========================================================
   HERO VISUAL
   LINKEDIN-FIRST CAMPAIGN VISUAL
========================================================= */

function LinkedinHeroVisual() {
  return (
    <div className="relative mx-auto min-h-[500px] w-full max-w-[720px] overflow-visible sm:min-h-[570px]">
      {/* =====================================================
          BACKGROUND — LINKEDIN BRAND ATMOSPHERE
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Blue glow */}
        <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0a66c2]/10 blur-[100px] animate-pulse" />

        {/* Small glow */}
        <div className="absolute right-[8%] top-[12%] h-[120px] w-[120px] rounded-full bg-blue-300/20 blur-[50px]" />

        <div className="absolute bottom-[8%] left-[5%] h-[150px] w-[150px] rounded-full bg-[#0a66c2]/10 blur-[60px]" />
      </div>

      {/* =====================================================
          LINKEDIN WATERMARK
      ===================================================== */}

      <div className="pointer-events-none absolute right-[-3%] top-[-5%] select-none text-[190px] font-black leading-none tracking-[-.15em] text-[#0a66c2]/[.045] animate-pulse sm:text-[270px]">
        in
      </div>

      {/* =====================================================
          FLOATING LINKEDIN LOGOS
      ===================================================== */}

      {/* Left logo */}
      <div className="absolute left-[5%] top-[16%] z-30 flex h-[58px] w-[58px] rotate-[-8deg] items-center justify-center rounded-[18px] border border-blue-100 bg-white text-[22px] font-black text-[#0a66c2] shadow-[0_20px_50px_rgba(10,102,194,.15)] transition duration-500 hover:rotate-0 hover:scale-110 sm:left-[7%] animate-bounce">
        in
      </div>

      {/* Right logo */}
      <div className="absolute right-[6%] top-[20%] z-30 flex h-[50px] w-[50px] rotate-[8deg] items-center justify-center rounded-[16px] bg-[#0a66c2] text-[17px] font-black text-white shadow-[0_20px_45px_rgba(10,102,194,.25)] transition duration-500 hover:rotate-0 hover:scale-110 animate-pulse">
        in
      </div>

      {/* =====================================================
          FLOATING TARGETING TAGS
      ===================================================== */}

      <div className="absolute left-[0%] top-[45%] z-40 hidden items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-2 shadow-[0_15px_40px_rgba(15,23,42,.08)] sm:flex animate-bounce">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#e8f3ff] text-[8px] font-black text-[#0a66c2]">
          ✓
        </span>

        <span className="text-[8px] font-bold uppercase tracking-[.1em] text-gray-500">
          Decision makers
        </span>
      </div>

      <div className="absolute right-[0%] bottom-[27%] z-40 hidden items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-2 shadow-[0_15px_40px_rgba(15,23,42,.08)] sm:flex animate-pulse">
        <span className="h-2 w-2 rounded-full bg-emerald-500" />

        <span className="text-[8px] font-bold uppercase tracking-[.1em] text-gray-500">
          High-intent audience
        </span>
      </div>

      {/* =====================================================
          MAIN LINKEDIN CAMPAIGN WINDOW
      ===================================================== */}

      <div className="absolute left-1/2 top-1/2 z-20 w-[315px] -translate-x-1/2 -translate-y-1/2 animate-[bounce_6s_ease-in-out_infinite] sm:w-[405px]">
        {/* Outer glow */}
        <div className="absolute -inset-5 rounded-[38px] bg-[#0a66c2]/10 blur-2xl" />

        {/* Main window */}
        <div className="relative overflow-hidden rounded-[30px] border border-gray-200 bg-white shadow-[0_35px_100px_rgba(15,23,42,.17)]">
          {/* =================================================
              LINKEDIN HEADER
          ================================================= */}

          <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3.5 sm:px-5">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#0a66c2] text-[13px] font-black text-white">
                in
              </div>

              <div>
                <p className="m-0 text-[9px] font-bold text-[#101828]">
                  Campaign Manager
                </p>

                <p className="m-0 mt-0.5 text-[7px] text-gray-400">
                  LinkedIn Ads
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />

              <span className="text-[7px] font-bold uppercase tracking-[.12em] text-emerald-600">
                Active
              </span>
            </div>
          </div>

          {/* =================================================
              CAMPAIGN BODY
          ================================================= */}

          <div className="p-4 sm:p-5">
            {/* Campaign title */}

            <div className="rounded-[22px] bg-[#0b1f33] p-5 sm:p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="m-0 text-[7px] font-bold uppercase tracking-[.2em] text-blue-300">
                    Campaign objective
                  </p>

                  <h3 className="mt-3 max-w-[270px] text-[22px] font-bold leading-[1.08] tracking-[-.04em] text-white sm:text-[26px]">
                    Reach the people behind the decisions.
                  </h3>
                </div>

                {/* Small LinkedIn logo */}
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border border-white/10 bg-white/5 text-[11px] font-black text-blue-300">
                  in
                </div>
              </div>

              {/* Targeting chips */}

              <div className="mt-5 flex flex-wrap gap-1.5">
                <span className="rounded-full border border-white/10 bg-white/[.07] px-2.5 py-1.5 text-[7px] font-semibold text-blue-100">
                  CEOs
                </span>

                <span className="rounded-full border border-white/10 bg-white/[.07] px-2.5 py-1.5 text-[7px] font-semibold text-blue-100">
                  Directors
                </span>

                <span className="rounded-full border border-white/10 bg-white/[.07] px-2.5 py-1.5 text-[7px] font-semibold text-blue-100">
                  Decision Makers
                </span>
              </div>

              {/* Targeting pulse */}

              <div className="mt-5 flex items-center gap-2">
                <span className="h-1.5 w-1.5 animate-ping rounded-full bg-blue-300" />

                <span className="text-[7px] font-medium text-blue-200/60">
                  Finding relevant professional audiences...
                </span>
              </div>
            </div>

            {/* =================================================
                AUDIENCE TARGETING
            ================================================= */}

            <div className="mt-4">
              <div className="flex items-center justify-between">
                <p className="m-0 text-[8px] font-bold uppercase tracking-[.14em] text-gray-400">
                  Audience targeting
                </p>

                <span className="text-[8px] font-bold text-[#0a66c2]">
                  82% fit
                </span>
              </div>

              {/* Segmented targeting bar */}

              <div className="mt-2 flex h-2 gap-1 overflow-hidden rounded-full bg-gray-100">
                <span className="w-[34%] animate-pulse rounded-full bg-[#0a66c2]" />

                <span className="w-[25%] rounded-full bg-blue-400" />

                <span className="w-[18%] rounded-full bg-blue-200" />

                <span className="flex-1 rounded-full bg-gray-100" />
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2">
                {[
                  ["Role", "Director+"],
                  ["Industry", "B2B"],
                  ["Company", "Mid-Market"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-[14px] border border-gray-100 bg-[#f8fbff] p-2.5 transition duration-300 hover:-translate-y-1 hover:border-blue-100"
                  >
                    <p className="m-0 text-[7px] font-medium text-gray-400">
                      {label}
                    </p>

                    <p className="mt-1 m-0 text-[9px] font-bold text-[#101828]">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* =================================================
                CAMPAIGN FLOW
            ================================================= */}

            <div className="mt-4 flex items-center justify-between rounded-[18px] border border-blue-100 bg-[#eef6ff] p-3">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-[#0a66c2] text-[9px] font-black text-white">
                  in
                </div>

                <div>
                  <p className="m-0 text-[7px] font-bold uppercase tracking-[.12em] text-blue-500">
                    Campaign flow
                  </p>

                  <p className="mt-1 m-0 text-[9px] font-bold text-[#101828]">
                    Audience → Lead
                  </p>
                </div>
              </div>

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[12px] font-bold text-[#0a66c2] shadow-sm">
                →
              </span>
            </div>
          </div>
        </div>

        {/* =================================================
            FLOATING PROFILE MATCH
        ================================================= */}

        <div className="absolute -left-12 top-[23%] z-40 w-[155px] -rotate-3 rounded-[18px] border border-blue-100 bg-white p-3 shadow-[0_20px_50px_rgba(15,23,42,.12)] transition duration-500 hover:rotate-0 hover:-translate-y-2 animate-[bounce_5s_ease-in-out_infinite] sm:-left-24">
          <div className="flex items-center gap-2.5">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#e8f3ff] text-[10px] font-black text-[#0a66c2]">
              in
              <span className="absolute -right-0.5 -top-0.5 h-2 w-2 animate-ping rounded-full bg-emerald-500" />
            </div>

            <div>
              <p className="m-0 text-[8px] font-bold text-[#101828]">
                Profile matched
              </p>

              <p className="m-0 mt-0.5 text-[7px] text-gray-400">
                Senior decision maker
              </p>
            </div>
          </div>
        </div>

        {/* =================================================
            FLOATING LEAD CARD
        ================================================= */}

        <div className="absolute -right-12 bottom-[20%] z-40 w-[160px] rotate-3 rounded-[19px] bg-[#101828] p-3.5 shadow-[0_25px_55px_rgba(15,23,42,.20)] transition duration-500 hover:rotate-0 hover:-translate-y-2 animate-[bounce_6s_ease-in-out_infinite] sm:-right-24">
          <div className="flex items-center justify-between">
            <span className="text-[7px] font-bold uppercase tracking-[.14em] text-blue-300">
              Lead signal
            </span>

            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          </div>

          <div className="mt-3 flex items-end justify-between">
            <div>
              <p className="m-0 text-[23px] font-bold tracking-[-.04em] text-white">
                +31%
              </p>

              <p className="mt-1 m-0 text-[7px] text-gray-500">
                qualified lead actions
              </p>
            </div>

            <div className="flex h-8 items-end gap-1">
              {[30, 45, 38, 55, 68].map((height, index) => (
                <span
                  key={index}
                  className="w-1.5 rounded-full bg-blue-300/70 transition duration-500"
                  style={{ height: `${height / 2}px` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          FLOATING DECORATIVE DOTS
      ===================================================== */}

      <span className="absolute left-[15%] top-[31%] h-2 w-2 animate-ping rounded-full bg-[#0a66c2] opacity-60" />

      <span className="absolute right-[17%] top-[36%] h-1.5 w-1.5 animate-pulse rounded-full bg-blue-300" />

      <span className="absolute bottom-[19%] left-[18%] h-1.5 w-1.5 animate-pulse rounded-full bg-[#0a66c2]" />

      <span className="absolute bottom-[12%] right-[20%] h-2 w-2 animate-ping rounded-full bg-blue-200 opacity-60" />

      {/* =====================================================
          BOTTOM JOURNEY
      ===================================================== */}

      <div className="absolute bottom-[1%] left-1/2 z-40 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-blue-100 bg-white/95 px-4 py-2.5 shadow-[0_15px_40px_rgba(15,23,42,.08)] backdrop-blur-md">
        <span className="flex h-5 w-5 items-center justify-center rounded-md bg-[#0a66c2] text-[7px] font-black text-white">
          01
        </span>

        <span className="text-[7px] font-bold uppercase tracking-[.12em] text-gray-500">
          Target
        </span>

        <span className="text-blue-300">→</span>

        <span className="flex h-5 w-5 items-center justify-center rounded-md bg-[#0a66c2] text-[7px] font-black text-white">
          02
        </span>

        <span className="text-[7px] font-bold uppercase tracking-[.12em] text-gray-500">
          Engage
        </span>

        <span className="text-blue-300">→</span>

        <span className="flex h-5 w-5 items-center justify-center rounded-md bg-emerald-500 text-[7px] font-black text-white">
          03
        </span>

        <span className="text-[7px] font-bold uppercase tracking-[.12em] text-gray-500">
          Lead
        </span>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

function LinkedinAds() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="w-full overflow-hidden bg-white text-[#111827]">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#f7faff] px-5 pb-16 pt-8 sm:px-8 sm:pb-20 sm:pt-10 lg:px-14 lg:pb-24 lg:pt-12">
        {/* =================================================
      BACKGROUND GLOW
  ================================================= */}

        <div className="pointer-events-none absolute -right-48 -top-48 h-[520px] w-[520px] rounded-full bg-blue-100/70 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-48 -left-48 h-[420px] w-[420px] rounded-full bg-indigo-100/50 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1600px] px-1 sm:px-2 lg:px-4 xl:px-6">
          {/* =================================================
        EQUAL LEFT + RIGHT
    ================================================= */}

          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-10 xl:gap-14">
            {/* =================================================
          LEFT CONTENT
      ================================================= */}

            <div className="max-w-[760px]">
              {/* =================================================
            BREADCRUMB
        ================================================= */}

              <div className="mb-5 flex flex-wrap items-center gap-2 text-[10px] font-medium text-gray-500 sm:mb-6 sm:text-[11px]">
                <Link to="/" className="transition hover:text-[#1455d9]">
                  Home
                </Link>

                <span>/</span>

                <span>Services</span>

                <span>/</span>

                <span className="text-[#1455d9]">LinkedIn Ads</span>
              </div>

              {/* =================================================
            SERVICE BADGE
        ================================================= */}

              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[.16em] text-[#1455d9] shadow-sm sm:text-[11px]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#1455d9]" />
                LinkedIn Ads
              </div>

              {/* =================================================
            HEADING
        ================================================= */}

              <h1 className="m-0 max-w-[760px] text-[35px] font-bold leading-[1.04] tracking-[-.045em] text-[#101828] sm:text-[44px] md:text-[45px] lg:text-[45px] xl:text-[45px]">
                Reach the People Behind
                <span className="block text-[#1455d9]">
                  the Business Decisions.
                </span>
              </h1>

              {/* =================================================
            DESCRIPTION
        ================================================= */}

              <p className="mt-6 max-w-[660px] text-[14px] leading-7 text-gray-600 sm:text-[15px] lg:text-[16px]">
                Reach decision-makers and professional audiences with LinkedIn
                Ads strategies built for B2B awareness and lead generation —
                built around your audience, business objective and measurable
                customer journey.
              </p>

              {/* =================================================
            CTA
        ================================================= */}

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#073b91] px-6 py-3 text-[13px] font-bold text-white shadow-[0_12px_30px_rgba(7,59,145,.18)] transition duration-300 hover:-translate-y-1 hover:bg-[#052f75]"
                >
                  Talk to Our Team
                  <span className="ml-2">→</span>
                </Link>

                <a
                  href="#linkedin-services"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-gray-200 bg-white px-6 py-3 text-[13px] font-semibold text-gray-700 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:text-[#1455d9]"
                >
                  Explore Services
                </a>
              </div>

              {/* =================================================
            TRUST ROW
        ================================================= */}

              <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 border-t border-gray-200/80 pt-5 text-[11px] font-medium text-gray-500">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Strategy-led
                </span>

                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-500" />
                  B2B-focused
                </span>

                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-violet-500" />
                  Measurable
                </span>
              </div>
            </div>

            {/* =================================================
          RIGHT CONTENT — LINKEDIN NETWORK VISUAL
      ================================================= */}

            <div className="relative mx-auto min-h-[440px] w-full max-w-[680px] sm:min-h-[520px]">
              {/* =================================================
            AMBIENT GLOW
        ================================================= */}

              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[110px]" />

              <div className="pointer-events-none absolute left-[20%] top-[25%] h-32 w-32 rounded-full bg-cyan-400/10 blur-[80px]" />

              {/* =================================================
            MAIN NETWORK CARD
        ================================================= */}

              <div className="absolute left-1/2 top-1/2 z-10 w-[94%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[26px] border border-white/10 bg-[#080b19]/95 p-4 shadow-[0_30px_90px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-5">
                {/* =================================================
              HEADER
          ================================================= */}

                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-500/10 ring-1 ring-blue-400/20">
                      <span className="text-[11px] font-bold text-blue-300">
                        in
                      </span>
                    </div>

                    <div>
                      <p className="text-[7px] uppercase tracking-[0.18em] text-white/25">
                        B2B Advertising
                      </p>

                      <h3 className="mt-0.5 text-sm font-semibold text-white/75 sm:text-base">
                        Professional Network
                      </h3>
                    </div>
                  </div>

                  {/* Live Status */}

                  <div className="flex items-center gap-1.5 rounded-full border border-blue-400/15 bg-blue-400/[0.035] px-2.5 py-1.5">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />

                    <span className="text-[7px] text-blue-300/70">
                      Targeting Live
                    </span>
                  </div>
                </div>

                {/* =================================================
              NETWORK VISUAL
          ================================================= */}

                <div className="relative mx-auto h-[275px] overflow-hidden rounded-2xl border border-white/10 bg-[#060914]">
                  {/* Background Grid */}

                  <div
                    className="pointer-events-none absolute inset-0 opacity-[0.035]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
                      backgroundSize: "28px 28px",
                    }}
                  />

                  {/* =================================================
                SVG CONNECTION NETWORK
            ================================================= */}

                  <svg
                    viewBox="0 0 650 275"
                    className="absolute inset-0 h-full w-full"
                    preserveAspectRatio="none"
                    fill="none"
                  >
                    <defs>
                      <filter id="linkedinGlow">
                        <feGaussianBlur stdDeviation="4" result="blur" />

                        <feMerge>
                          <feMergeNode in="blur" />

                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>

                      <radialGradient id="linkedinParticle">
                        <stop offset="0%" stopColor="#93c5fd" />

                        <stop offset="60%" stopColor="#60a5fa" />

                        <stop
                          offset="100%"
                          stopColor="#60a5fa"
                          stopOpacity="0"
                        />
                      </radialGradient>
                    </defs>

                    {/* Center → Founder */}

                    <path
                      d="M325 135 C325 105 325 75 325 48"
                      stroke="rgba(96,165,250,0.25)"
                      strokeWidth="1.5"
                      strokeDasharray="5 7"
                    />

                    {/* Center → Manager */}

                    <path
                      d="M295 135 C255 115 210 100 160 92"
                      stroke="rgba(96,165,250,0.22)"
                      strokeWidth="1.5"
                      strokeDasharray="5 7"
                    />

                    {/* Center → Decision Maker */}

                    <path
                      d="M355 135 C395 115 440 100 490 92"
                      stroke="rgba(96,165,250,0.22)"
                      strokeWidth="1.5"
                      strokeDasharray="5 7"
                    />

                    {/* Center → Business */}

                    <path
                      d="M295 160 C255 180 210 195 160 208"
                      stroke="rgba(34,211,238,0.22)"
                      strokeWidth="1.5"
                      strokeDasharray="5 7"
                    />

                    {/* Center → Enterprise */}

                    <path
                      d="M355 160 C395 180 440 195 490 208"
                      stroke="rgba(139,92,246,0.22)"
                      strokeWidth="1.5"
                      strokeDasharray="5 7"
                    />

                    {/* Outer Network Lines */}

                    <path
                      d="M325 48 C260 55 205 70 160 92"
                      stroke="rgba(255,255,255,0.08)"
                      strokeWidth="1"
                    />

                    <path
                      d="M325 48 C390 55 445 70 490 92"
                      stroke="rgba(255,255,255,0.08)"
                      strokeWidth="1"
                    />

                    <path
                      d="M160 92 C145 140 145 170 160 208"
                      stroke="rgba(255,255,255,0.06)"
                      strokeWidth="1"
                    />

                    <path
                      d="M490 92 C505 140 505 170 490 208"
                      stroke="rgba(255,255,255,0.06)"
                      strokeWidth="1"
                    />

                    {/* =================================================
                  ANIMATED PARTICLES
              ================================================= */}

                    {/* Target → Center */}

                    <circle
                      r="3"
                      fill="url(#linkedinParticle)"
                      filter="url(#linkedinGlow)"
                    >
                      <animateMotion
                        dur="2.2s"
                        repeatCount="indefinite"
                        path="M325 48 C325 105 325 115 325 135"
                      />
                    </circle>

                    {/* Center → Manager */}

                    <circle r="3" fill="url(#linkedinParticle)">
                      <animateMotion
                        dur="2.4s"
                        begin="0.3s"
                        repeatCount="indefinite"
                        path="M295 135 C255 115 210 100 160 92"
                      />
                    </circle>

                    {/* Center → Decision Maker */}

                    <circle r="3" fill="url(#linkedinParticle)">
                      <animateMotion
                        dur="2.4s"
                        begin="0.7s"
                        repeatCount="indefinite"
                        path="M355 135 C395 115 440 100 490 92"
                      />
                    </circle>

                    {/* Center → Business */}

                    <circle r="3" fill="url(#linkedinParticle)">
                      <animateMotion
                        dur="2.6s"
                        begin="1s"
                        repeatCount="indefinite"
                        path="M295 160 C255 180 210 195 160 208"
                      />
                    </circle>

                    {/* Center → Enterprise */}

                    <circle r="3" fill="url(#linkedinParticle)">
                      <animateMotion
                        dur="2.6s"
                        begin="1.3s"
                        repeatCount="indefinite"
                        path="M355 160 C395 180 440 195 490 208"
                      />
                    </circle>
                  </svg>

                  {/* =================================================
                FOUNDER NODE
            ================================================= */}

                  <div className="absolute left-1/2 top-3 -translate-x-1/2">
                    <div className="flex flex-col items-center">
                      <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-blue-400/25 bg-blue-400/[0.08] shadow-[0_0_25px_rgba(96,165,250,0.12)]">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-400/15">
                          <span className="text-[8px] font-bold text-blue-200">
                            F
                          </span>
                        </div>

                        <span className="absolute -right-1 -top-1 h-2.5 w-2.5 animate-ping rounded-full bg-blue-400/60" />
                      </div>

                      <span className="mt-1.5 text-[7px] font-medium text-white/50">
                        Founder
                      </span>
                    </div>
                  </div>

                  {/* =================================================
                MANAGER NODE
            ================================================= */}

                  <div className="absolute left-[17%] top-[65px]">
                    <div className="flex flex-col items-center">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/[0.06]">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400/10">
                          <span className="text-[8px] font-bold text-cyan-200">
                            M
                          </span>
                        </div>
                      </div>

                      <span className="mt-1.5 text-[7px] font-medium text-white/45">
                        Manager
                      </span>
                    </div>
                  </div>

                  {/* =================================================
                DECISION MAKER NODE
            ================================================= */}

                  <div className="absolute right-[17%] top-[65px]">
                    <div className="flex flex-col items-center">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-violet-400/20 bg-violet-400/[0.06]">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-400/10">
                          <span className="text-[7px] font-bold text-violet-200">
                            DM
                          </span>
                        </div>
                      </div>

                      <span className="mt-1.5 text-[7px] font-medium text-white/45">
                        Decision Maker
                      </span>
                    </div>
                  </div>

                  {/* =================================================
                CENTER TARGET NODE
            ================================================= */}

                  <div className="absolute left-1/2 top-[128px] -translate-x-1/2">
                    <div className="absolute -inset-5 animate-ping rounded-full border border-blue-400/10" />

                    <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/30 bg-gradient-to-br from-blue-500/20 to-violet-500/15 shadow-[0_0_40px_rgba(96,165,250,0.18)]">
                      <span className="text-[10px] font-bold text-blue-200">
                        TARGET
                      </span>
                    </div>
                  </div>

                  {/* =================================================
                BUSINESS NODE
            ================================================= */}

                  <div className="absolute bottom-[20px] left-[17%]">
                    <div className="flex flex-col items-center">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06]">
                        <span className="text-[11px] text-cyan-300">◈</span>
                      </div>

                      <span className="mt-1.5 text-[7px] font-medium text-white/45">
                        Business
                      </span>
                    </div>
                  </div>

                  {/* =================================================
                ENTERPRISE NODE
            ================================================= */}

                  <div className="absolute bottom-[20px] right-[17%]">
                    <div className="flex flex-col items-center">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-400/[0.06]">
                        <span className="text-[11px] text-violet-300">◆</span>
                      </div>

                      <span className="mt-1.5 text-[7px] font-medium text-white/45">
                        Enterprise
                      </span>
                    </div>
                  </div>

                  {/* Floating Connection Indicator */}

                  <div className="absolute left-1/2 top-[53%] -translate-x-1/2 rounded-full border border-blue-400/15 bg-[#090c1b]/90 px-3 py-1.5 backdrop-blur-xl">
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />

                      <span className="text-[6px] text-blue-300/60">
                        5 profiles matched
                      </span>
                    </div>
                  </div>
                </div>

                {/* =================================================
              CAMPAIGN FLOW
          ================================================= */}

                <div className="mt-4">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-[7px] uppercase tracking-[0.18em] text-white/25">
                      Lead Generation
                    </span>

                    <span className="text-[7px] text-blue-300/50">
                      Network active
                    </span>
                  </div>

                  <div className="relative">
                    <div className="absolute left-[10%] right-[10%] top-5 hidden h-px bg-gradient-to-r from-blue-400/30 via-cyan-400/30 via-violet-400/30 to-emerald-400/30 sm:block" />

                    <div className="grid grid-cols-4 gap-2">
                      {/* Target */}

                      <div className="relative z-10 flex flex-col items-center">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/[0.06]">
                          <span className="text-[10px] text-blue-300">◎</span>
                        </div>

                        <p className="mt-2 text-[7px] font-medium text-white/55">
                          Target
                        </p>

                        <span className="mt-0.5 text-[6px] text-white/20">
                          Audience
                        </span>
                      </div>

                      {/* Connect */}

                      <div className="relative z-10 flex flex-col items-center">
                        <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06]">
                          <span className="text-[10px] text-cyan-300">↔</span>
                        </div>

                        <p className="mt-2 text-[7px] font-medium text-white/55">
                          Connect
                        </p>

                        <span className="mt-0.5 text-[6px] text-cyan-300/40">
                          Reach
                        </span>
                      </div>

                      {/* Engage */}

                      <div className="relative z-10 flex flex-col items-center">
                        <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-400/[0.06]">
                          <span className="text-[10px] text-violet-300">♥</span>

                          <span className="absolute -right-1 -top-1 h-2 w-2 animate-ping rounded-full bg-violet-400/60" />
                        </div>

                        <p className="mt-2 text-[7px] font-medium text-white/55">
                          Engage
                        </p>

                        <span className="mt-0.5 text-[6px] text-violet-300/40">
                          Interact
                        </span>
                      </div>

                      {/* Lead */}

                      <div className="relative z-10 flex flex-col items-center">
                        <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/[0.06] shadow-[0_0_20px_rgba(52,211,153,0.08)]">
                          <span className="text-[10px] text-emerald-300">
                            ✓
                          </span>

                          <span className="absolute -right-1 -top-1 h-2 w-2 animate-ping rounded-full bg-emerald-400/60" />
                        </div>

                        <p className="mt-2 text-[7px] font-medium text-white/55">
                          Lead
                        </p>

                        <span className="mt-0.5 text-[6px] text-emerald-300/40">
                          Convert
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* =================================================
              LIVE METRICS
          ================================================= */}

                <div className="mt-4 grid grid-cols-3 gap-2">
                  {/* Reach */}

                  <div className="rounded-xl border border-white/10 bg-white/[0.018] p-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[6px] text-white/25">Reach</span>

                      <span className="text-[8px] text-blue-300">◉</span>
                    </div>

                    <p className="mt-1 text-[11px] font-semibold text-white/70">
                      18.6K
                    </p>

                    <span className="text-[6px] text-emerald-300/50">
                      +16.2%
                    </span>
                  </div>

                  {/* Engagement */}

                  <div className="rounded-xl border border-white/10 bg-white/[0.018] p-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[6px] text-white/25">
                        Engagement
                      </span>

                      <span className="text-[8px] text-violet-300">♥</span>
                    </div>

                    <p className="mt-1 text-[11px] font-semibold text-white/70">
                      2.4K
                    </p>

                    <span className="text-[6px] text-emerald-300/50">
                      +12.8%
                    </span>
                  </div>

                  {/* Leads */}

                  <div className="rounded-xl border border-emerald-400/10 bg-emerald-400/[0.025] p-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[6px] text-white/25">Leads</span>

                      <span className="text-[8px] text-emerald-300">✓</span>
                    </div>

                    <p className="mt-1 text-[11px] font-semibold text-white/70">
                      84
                    </p>

                    <span className="text-[6px] text-emerald-300/60">
                      +21.4%
                    </span>
                  </div>
                </div>

                {/* =================================================
              BOTTOM STATUS
          ================================================= */}

                <div className="mt-4 flex items-center justify-center">
                  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />

                    <span className="text-[7px] text-white/30">
                      Target → Connect → Engage → Lead
                    </span>
                  </div>
                </div>
              </div>

              {/* =================================================
            LEFT FLOATING CARD
        ================================================= */}

              <div className="absolute bottom-10 left-0 z-30 hidden rounded-xl border border-white/10 bg-[#090c1b]/95 px-3 py-2 shadow-xl backdrop-blur-xl sm:block">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-400/10">
                    <span className="text-[10px] text-blue-300">in</span>
                  </div>

                  <div>
                    <p className="text-[8px] font-medium text-white/60">
                      Audience Matched
                    </p>

                    <p className="text-[7px] text-blue-300/50">
                      18.6K professionals
                    </p>
                  </div>
                </div>
              </div>

              {/* =================================================
            RIGHT FLOATING CARD
        ================================================= */}

              <div className="absolute bottom-8 right-0 z-30 hidden rounded-xl border border-white/10 bg-[#090c1b]/95 px-3 py-2 shadow-xl backdrop-blur-xl sm:block">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-400/10">
                    <span className="text-[10px] text-emerald-300">✓</span>
                  </div>

                  <div>
                    <p className="text-[8px] font-medium text-white/60">
                      Qualified Leads
                    </p>

                    <p className="text-[7px] text-emerald-300/50">
                      84 leads generated
                    </p>
                  </div>
                </div>
              </div>

              {/* =================================================
            FLOATING PARTICLES
        ================================================= */}

              <div className="pointer-events-none absolute inset-0">
                <span className="absolute left-[16%] top-[25%] h-1 w-1 animate-ping rounded-full bg-blue-400/60" />

                <span className="absolute right-[19%] top-[31%] h-1 w-1 animate-pulse rounded-full bg-cyan-400/60" />

                <span className="absolute left-[25%] bottom-[23%] h-1 w-1 animate-pulse rounded-full bg-violet-400/60" />

                <span className="absolute right-[26%] bottom-[25%] h-1 w-1 animate-ping rounded-full bg-emerald-400/60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-15">
        <div className="pointer-events-none absolute right-0 top-0 h-[320px] w-[320px] rounded-full bg-blue-50 blur-3xl" />

        <div className="relative mx-auto grid w-full max-w-[1500px] gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-end lg:gap-20">
          <div className="mb-10">
            <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9] sm:text-[11px]">
              Introduction
            </p>

            <h2 className="mt-4 m-0 max-w-[600px] text-[31px] font-bold leading-[1.08] tracking-[-.04em] text-[#101828] sm:text-[38px] lg:text-[40px]">
              LinkedIn Ads Built Around Business Growth
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-[24px] border border-gray-200 bg-[#f8faff] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,.07)]">
              <span className="text-[11px] font-bold text-[#1455d9]">
                01 / STRATEGY
              </span>

              <h3 className="mt-5 m-0 text-[20px] font-bold tracking-[-.025em] text-[#101828]">
                Start with the business objective.
              </h3>

              <p className="mt-3 m-0 text-[13px] leading-6 text-gray-500">
                Akkurate Digital Solutions provides LinkedIn Ads as part of an
                integrated digital growth system. We begin with the business
                objective, audience and customer journey before deciding what
                should be created, optimized or measured.
              </p>
            </div>

            <div className="rounded-[24px] border border-gray-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,.08)]">
              <span className="text-[11px] font-bold text-[#1455d9]">
                02 / BUSINESS VALUE
              </span>

              <h3 className="mt-5 m-0 text-[20px] font-bold tracking-[-.025em] text-[#101828]">
                Make B2B advertising useful.
              </h3>

              <p className="mt-3 m-0 text-[13px] leading-6 text-gray-500">
                The goal is not simply to deliver an asset or run a channel; it
                is to make the work useful to the business.
              </p>
            </div>
          </div>
        </div>

        {/* Akkurate approach */}

        <div className="relative mx-auto mt-10 max-w-[1500px] rounded-[28px] border border-gray-200 bg-[#101828] p-6 shadow-[0_25px_70px_rgba(15,23,42,.12)] sm:p-8 lg:p-10">
          <div className="grid gap-7 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div>
              <p className="m-0 text-[10px] font-bold uppercase tracking-[.18em] text-blue-300">
                The Akkurate approach
              </p>

              <h3 className="mt-3 m-0 max-w-[650px] text-[25px] font-bold leading-tight tracking-[-.03em] text-white sm:text-[24px]">
                Audience first. Campaign second. Measurement throughout.
              </h3>

              <p className="mt-4 max-w-[650px] text-[13px] leading-7 text-gray-300 sm:text-[14px]">
                We start with the business objective, audience and customer
                journey, then decide what should be created, optimized and
                measured.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                ["01", "Understand", "Business + audience"],
                ["02", "Build", "Campaign + creative"],
                ["03", "Improve", "Data + sales feedback"],
              ].map(([num, title, copy]) => (
                <div
                  key={num}
                  className="rounded-2xl border border-white/10 bg-white/[.05] p-4"
                >
                  <span className="text-[10px] font-bold text-blue-300">
                    {num}
                  </span>

                  <p className="mt-5 m-0 text-[13px] font-bold text-white">
                    {title}
                  </p>

                  <p className="mt-1 m-0 text-[9px] leading-4 text-gray-400">
                    {copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BUSINESS PROBLEM
      ===================================================== */}

      <section className="bg-[#101828] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-15">
        <div className="mx-auto w-full max-w-[1200px] px-4 text-center sm:px-6 lg:px-8">
          <p className="m-0 text-[10px] font-bold uppercase tracking-[.18em] text-blue-300 sm:text-[11px]">
            The Business Problem We Solve
          </p>

          <h2 className="mt-4 m-0 text-[27px] font-bold leading-tight tracking-[-.03em] text-white sm:text-[34px] lg:text-[42px]">
            LinkedIn Ads With a Clear Commercial Purpose
          </h2>

          <p className="mx-auto mt-5 max-w-[900px] text-[14px] leading-7 text-gray-300 sm:text-[15px]">
            B2B buyers rarely move from an ad directly to a purchase. LinkedIn
            strategy works better when campaigns support a longer journey
            involving awareness, credibility, education and sales conversations.
            Akkurate builds campaigns around this reality.
          </p>
          <div className="mt-8 grid gap-3 text-left sm:grid-cols-3">
            {[
              ["01", "Clarity", "Help the audience understand what matters."],
              [
                "02",
                "Confidence",
                "Make the experience feel credible and relevant.",
              ],
              ["03", "Action", "Make the next meaningful step easier."],
            ].map(([n, t, c]) => (
              <div
                key={n}
                className="rounded-[20px] border border-white/10 bg-white/[.045] p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/[.07]"
              >
                <span className="text-[9px] font-black tracking-[.15em] text-blue-300">
                  {n}
                </span>
                <h3 className="mt-4 m-0 text-[16px] font-bold text-white">
                  {t}
                </h3>
                <p className="mt-2 m-0 text-[11px] leading-5 text-gray-400">
                  {c}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PERFORMANCE / AUDIENCE INTELLIGENCE
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#f7faff] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-15">
        <div className="pointer-events-none absolute right-[-140px] top-[-100px] h-[360px] w-[360px] rounded-full bg-[#0a66c2]/10 blur-[90px]" />
        <div className="pointer-events-none absolute bottom-[-160px] left-[-100px] h-[330px] w-[330px] rounded-full bg-blue-100/60 blur-[90px]" />

        <div className="relative mx-auto w-full max-w-[1500px]">
          <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-center lg:gap-16">
            {/* LEFT */}

            <div>
              <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-[#0a66c2]">
                Performance / Analytics
              </p>

              <h2 className="mt-3 m-0 text-[30px] font-bold leading-[1.08] tracking-[-.04em] text-[#101828] sm:text-[38px] lg:text-[37px]">
                Turn professional audience signals into useful insights.
              </h2>

              <p className="mt-5 max-w-[560px] text-[14px] leading-7 text-gray-600">
                LinkedIn Ads should be evaluated through audience quality,
                engagement, leads and downstream business signals where data is
                available.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3">
                {[
                  ["82%", "Audience signal"],
                  ["126", "Target accounts"],
                  ["384", "Lead actions"],
                  ["91%", "Sales alignment"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-[18px] border border-gray-200 bg-white p-4 shadow-[0_8px_28px_rgba(15,23,42,.04)] transition duration-300 hover:-translate-y-1 hover:border-blue-100"
                  >
                    <p className="m-0 text-[22px] font-bold tracking-[-.03em] text-[#101828]">
                      {value}
                    </p>

                    <p className="mt-1 m-0 text-[10px] font-medium text-gray-400">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* DIFFERENT PERFORMANCE VISUAL */}

            <div className="relative min-h-[470px] overflow-hidden rounded-[32px] border border-blue-100 bg-[#0b1f33] p-5 shadow-[0_30px_80px_rgba(15,23,42,.13)] sm:p-7">
              {/* LinkedIn watermark */}
              <div className="pointer-events-none absolute -right-6 -top-12 text-[190px] font-black leading-none tracking-[-.14em] text-white/[.035]">
                in
              </div>

              {/* Decorative circles */}
              <div className="pointer-events-none absolute -bottom-28 -left-20 h-[260px] w-[260px] rounded-full border border-white/[.06]" />
              <div className="pointer-events-none absolute -bottom-20 -left-12 h-[180px] w-[180px] rounded-full border border-white/[.06]" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0a66c2] text-[13px] font-black text-white shadow-[0_10px_25px_rgba(10,102,194,.25)]">
                      in
                    </div>

                    <div>
                      <p className="m-0 text-[9px] font-bold text-white">
                        Campaign intelligence
                      </p>

                      <p className="m-0 mt-1 text-[7px] text-blue-200/50">
                        Professional audience signals
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-[7px] font-bold uppercase tracking-[.12em] text-emerald-300">
                    Live signal
                  </span>
                </div>

                {/* Audience composition */}
                <div className="mt-7 rounded-[24px] border border-white/10 bg-white/[.045] p-5">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="m-0 text-[8px] font-bold uppercase tracking-[.16em] text-blue-300">
                        Audience quality
                      </p>

                      <p className="mt-2 m-0 text-[38px] font-bold tracking-[-.05em] text-white">
                        82%
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="m-0 text-[8px] text-gray-500">Target fit</p>

                      <p className="mt-1 m-0 text-[11px] font-bold text-emerald-300">
                        Strong
                      </p>
                    </div>
                  </div>

                  {/* Segmented signal bar */}
                  <div className="mt-5 flex h-3 gap-1 overflow-hidden rounded-full">
                    <span className="w-[42%] rounded-full bg-[#0a66c2]" />
                    <span className="w-[24%] rounded-full bg-blue-400" />
                    <span className="w-[16%] rounded-full bg-blue-200" />
                    <span className="flex-1 rounded-full bg-white/10" />
                  </div>

                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                    <span className="flex items-center gap-1.5 text-[8px] text-gray-400">
                      <i className="h-2 w-2 rounded-full bg-[#0a66c2]" />
                      Decision makers
                    </span>

                    <span className="flex items-center gap-1.5 text-[8px] text-gray-400">
                      <i className="h-2 w-2 rounded-full bg-blue-400" />
                      Target accounts
                    </span>

                    <span className="flex items-center gap-1.5 text-[8px] text-gray-400">
                      <i className="h-2 w-2 rounded-full bg-blue-200" />
                      Engaged users
                    </span>
                  </div>
                </div>

                {/* Signal cards */}
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div className="rounded-[20px] border border-white/10 bg-white/[.045] p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[7px] font-bold uppercase tracking-[.14em] text-gray-500">
                        Target accounts
                      </span>

                      <span className="text-[10px] text-blue-300">↗</span>
                    </div>

                    <p className="mt-3 m-0 text-[25px] font-bold tracking-[-.04em] text-white">
                      126
                    </p>

                    <div className="mt-3 flex gap-1">
                      {[1, 2, 3, 4, 5].map((item, index) => (
                        <span
                          key={item}
                          className={`h-1.5 flex-1 rounded-full ${
                            index < 4 ? "bg-[#0a66c2]" : "bg-white/10"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[20px] border border-white/10 bg-white/[.045] p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[7px] font-bold uppercase tracking-[.14em] text-gray-500">
                        Lead actions
                      </span>

                      <span className="text-[10px] text-emerald-300">✓</span>
                    </div>

                    <p className="mt-3 m-0 text-[25px] font-bold tracking-[-.04em] text-white">
                      384
                    </p>

                    <p className="mt-2 m-0 text-[7px] text-emerald-300">
                      +31% qualified activity
                    </p>
                  </div>
                </div>

                {/* Sales alignment */}
                <div className="mt-3 rounded-[20px] border border-white/10 bg-gradient-to-r from-[#0a66c2]/20 to-white/[.045] p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="m-0 text-[7px] font-bold uppercase tracking-[.14em] text-blue-300">
                        Sales alignment
                      </p>

                      <p className="mt-1.5 m-0 text-[12px] font-bold text-white">
                        Marketing → Sales
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0a66c2] text-[9px] font-black text-white">
                        M
                      </span>

                      <span className="text-blue-300">→</span>

                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/10 text-[9px] font-black text-white">
                        S
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom insight */}
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-[8px] font-medium text-gray-500">
                    Insight generated from agreed business signals
                  </span>

                  <span className="text-[8px] font-bold text-blue-300">
                    LinkedIn
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section
        id="linkedin-services"
        className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-15"
      >
        <div className="mx-auto w-full max-w-[1500px]">
          <div className="text-center">
            <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9] sm:text-[11px]">
              Our Services
            </p>

            <h2 className="mt-3 m-0 text-[30px] font-bold leading-[1.08] tracking-[-.04em] text-[#101828] sm:text-[38px]">
              Our LinkedIn Ads Services
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="group relative overflow-hidden rounded-[24px] border border-gray-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,.035)] transition-all duration-500 hover:-translate-y-2 hover:border-blue-100 hover:shadow-[0_25px_60px_rgba(15,23,42,.09)] sm:p-7"
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-blue-50 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

                <div className="relative flex items-start justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f0f5ff] text-[10px] font-black text-[#1455d9]">
                    {service.number}
                  </span>

                  <span className="text-[20px] text-gray-300 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#1455d9]">
                    ↗
                  </span>
                </div>

                <h3 className="relative mt-7 m-0 text-[20px] font-bold leading-snug tracking-[-.02em] text-[#101828]">
                  {service.title}
                </h3>

                <p className="relative mt-3 m-0 text-[13px] leading-6 text-gray-500 sm:text-[14px]">
                  {service.description}
                </p>

                <div className="relative mt-6 h-px overflow-hidden bg-gray-100">
                  <div className="h-full w-1/3 bg-[#1455d9] transition-all duration-500 group-hover:w-full" />
                </div>

                <p className="relative mt-4 m-0 text-[9px] font-bold uppercase tracking-[.14em] text-gray-400 transition group-hover:text-[#1455d9]">
                  Explore capability →
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          OUTCOMES
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#f7faff] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-15">
        <div className="mx-auto w-full max-w-[1500px]">
          <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-center lg:gap-20">
            <div>
              <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9]">
                What You Get
              </p>

              <h2 className="mt-3 m-0 text-[31px] font-bold leading-[1.08] tracking-[-.04em] text-[#101828] sm:text-[40px] lg:text-[48px]">
                What You Get From Akkurate
              </h2>

              <p className="mt-5 m-0 max-w-[540px] text-[14px] leading-7 text-gray-600">
                The exact outcome depends on the starting point, competition,
                audience, budget, implementation and business model. Our job is
                to create the conditions for measurable improvement and to
                report honestly on what is working.
              </p>

              <Link
                to="/contact"
                className="mt-7 inline-flex items-center rounded-full bg-[#073b91] px-5 py-3 text-[12px] font-bold text-white transition hover:-translate-y-1 hover:bg-[#052f75]"
              >
                Discuss your growth goal
                <span className="ml-2">→</span>
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {outcomes.map((outcome, index) => (
                <div
                  key={outcome}
                  className="group flex items-center gap-4 rounded-[18px] border border-gray-200 bg-white p-5 shadow-[0_7px_25px_rgba(15,23,42,.035)] transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-[0_18px_40px_rgba(15,23,42,.07)]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f0f5ff] text-[10px] font-black text-[#1455d9] transition group-hover:bg-[#073b91] group-hover:text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-[13px] font-bold leading-5 text-[#101828] sm:text-[14px]">
                    {outcome}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHO THIS SERVICE IS FOR
      ===================================================== */}

      <section className="relative px-5 py-16 sm:px-8 sm:py-20 lg:py-15">
        <div className="mx-auto w-full max-w-[950px] px-4 text-center sm:px-6 lg:px-8">
          <p className="m-0 text-[10px] font-bold uppercase tracking-[.18em] text-[#1455d9]">
            Who This Service Is For
          </p>

          <h2 className="mt-3 m-0 text-[29px] font-bold leading-tight tracking-[-.03em] text-[#101828] sm:text-[36px] lg:text-[42px]">
            LinkedIn Ads Should Fit Your Business
          </h2>

          <p className="mt-5 m-0 text-[14px] leading-7 text-gray-600 sm:text-[15px]">
            LinkedIn Ads is relevant to businesses that have a clear reason to
            improve their digital presence, customer journey or growth engine.
            The page should qualify visitors rather than promise that every
            business needs the same package.
          </p>

          <p className="mt-4 m-0 text-[14px] leading-7 text-gray-600 sm:text-[15px]">
            Akkurate can recommend a focused scope, a broader integrated program
            or a different service when that is more appropriate.
          </p>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#101828] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-15">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-900/20 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1500px]">
          <div className="mx-auto max-w-[800px] text-center">
            <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-blue-300">
              Our Process
            </p>

            <h2 className="mt-3 m-0 text-[31px] font-bold leading-[1.08] tracking-[-.04em] text-white sm:text-[40px] lg:text-[48px]">
              A Practical LinkedIn Ads Process
            </h2>

            <p className="mt-5 text-[13px] leading-7 text-gray-400 sm:text-[14px]">
              A structured process keeps audience strategy, campaigns, creatives
              and measurement connected.
            </p>
          </div>

          <div className="relative mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {/* Connecting line */}

            <div className="pointer-events-none absolute left-[10%] right-[10%] top-[42px] hidden h-px bg-gradient-to-r from-blue-500/10 via-blue-400/50 to-blue-500/10 lg:block" />

            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className="group relative rounded-[22px] border border-white/10 bg-white/[.045] p-5 transition duration-500 hover:-translate-y-2 hover:border-blue-400/30 hover:bg-white/[.07] sm:p-6"
              >
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-blue-400/20 bg-[#101b31] text-[10px] font-black text-blue-300 shadow-[0_0_0_7px_rgba(20,85,217,.04)]">
                  {step.number}
                </div>

                <h3 className="mt-6 m-0 text-[18px] font-bold leading-snug text-white">
                  {step.title}
                </h3>

                <p className="mt-3 m-0 text-[12px] leading-6 text-gray-400">
                  {step.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.12em] text-blue-300 opacity-60 transition group-hover:opacity-100">
                  Step {String(index + 1).padStart(2, "0")}
                  <span className="h-px w-8 bg-blue-400/40" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY CHOOSE AKKURATE
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#f7faff] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-15">
        <div className="pointer-events-none absolute -right-32 top-10 h-[360px] w-[360px] rounded-full bg-blue-100/50 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 -left-32 h-[320px] w-[320px] rounded-full bg-indigo-100/40 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1500px]">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#1455d9]" />

                <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9] sm:text-[11px]">
                  Why Choose Akkurate
                </p>
              </div>

              <h2 className="m-0 max-w-[650px] text-[32px] font-bold leading-[1.05] tracking-[-.045em] text-[#101828] sm:text-[40px] lg:text-[50px]">
                A Business-First
                <span className="block text-[#1455d9]">Approach.</span>
              </h2>
            </div>

            <div>
              <p className="m-0 max-w-[650px] text-[14px] leading-7 text-gray-600 sm:text-[15px]">
                Digital growth rarely depends on one channel. We bring strategy,
                search, content, web and technology together when the customer
                journey needs a connected approach.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Strategy", "B2B", "Paid Media", "Content", "Digital"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.12em] text-gray-500"
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((item) => (
              <article
                key={item.number}
                className="group relative overflow-hidden rounded-[24px] border border-gray-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,.035)] transition-all duration-500 hover:-translate-y-2 hover:border-[#1455d9] hover:bg-[#1455d9] hover:shadow-[0_25px_55px_rgba(20,85,217,.18)]"
              >
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f0f5ff] text-[10px] font-black text-[#1455d9] transition group-hover:bg-white/15 group-hover:text-white">
                      {item.number}
                    </span>

                    <span className="text-[20px] text-gray-300 transition group-hover:text-white">
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-7 m-0 text-[19px] font-bold leading-snug text-[#101828] transition group-hover:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 m-0 text-[12px] leading-6 text-gray-500 transition group-hover:text-white/90 sm:text-[13px]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom strip */}

          <div className="mt-6 flex flex-col gap-4 rounded-[22px] border border-gray-200 bg-white px-6 py-5 shadow-[0_8px_30px_rgba(15,23,42,.035)] sm:flex-row sm:items-center sm:justify-between sm:px-7">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#073b91] text-white">
                ✓
              </span>

              <p className="m-0 text-[12px] font-semibold text-[#101828] sm:text-[13px]">
                Every recommendation starts with the business objective.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center text-[11px] font-bold text-[#1455d9]"
            >
              Talk to our team
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          RELATED SERVICES
      ===================================================== */}

      {/* =====================================================
    RELATED SERVICES
===================================================== */}

      <section className="relative overflow-hidden bg-[#050713] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-5">
        {/* Background glow */}
        <div className="pointer-events-none absolute -left-40 top-10 h-[350px] w-[350px] rounded-full bg-violet-600/10 blur-[110px]" />

        <div className="pointer-events-none absolute -right-40 top-[30%] h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="pointer-events-none absolute left-[42%] bottom-0 h-[300px] w-[300px] rounded-full bg-cyan-500/5 blur-[100px]" />

        <div className="relative mx-auto w-full max-w-[1500px]">
          {/* HEADER */}
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-500 shadow-[0_0_12px_rgba(139,92,246,.8)]" />

                <p className="m-0 text-[10px] font-bold uppercase tracking-[0.22em] text-gray-400 sm:text-[11px]">
                  Related Services
                </p>
              </div>
            </div>

            <p className="max-w-[470px] text-[12px] leading-6 text-gray-400 sm:text-[13px] lg:pb-1">
              Extend your digital presence with connected marketing solutions
              designed to improve visibility, engagement and business growth.
            </p>
          </div>

          {/* CARDS */}
          <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* =====================================================
          SOCIAL MEDIA MARKETING CARD
      ===================================================== */}

            <Link
              to="/social-media-marketing"
              className="
          group
          relative
          h-[175px]
          overflow-hidden
          rounded-[20px]
          border
          border-white/10
          bg-gradient-to-br
          from-[#151d2b]
          via-[#101724]
          to-[#0b111c]
          p-5
          transition-all
          duration-500
          hover:-translate-y-1.5
          hover:border-cyan-400/30
          hover:shadow-[0_25px_60px_rgba(6,182,212,.15)]
          sm:h-[180px]
          sm:p-6
        "
            >
              {/* Cyan glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-[190px] w-[190px] rounded-full bg-cyan-500/15 blur-[65px] transition duration-700 group-hover:bg-cyan-400/25" />

              {/* Content */}
              <div className="relative z-20 flex h-full w-[58%] flex-col justify-between">
                <div>
                  <h3 className="mt-4 m-0 text-[17px] font-bold tracking-[-.025em] text-white sm:text-[18px]">
                    Social Media Marketing
                  </h3>

                  <p className="mt-2 m-0 max-w-[270px] text-[10px] leading-[1.6] text-gray-400 sm:text-[11px]">
                    Build a strong social presence with strategic content,
                    audience engagement and campaigns that grow your brand.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[.12em] text-cyan-300/60 transition group-hover:text-cyan-300">
                  Explore service
                  <span className="h-px w-5 bg-cyan-400/30 transition-all duration-300 group-hover:w-8" />
                </div>
              </div>

              {/* SOCIAL MEDIA MARKETING ORBIT */}
              <div className="pointer-events-none absolute right-[-4px] top-1/2 h-[150px] w-[150px] -translate-y-1/2 transition duration-700 group-hover:scale-110">
                {/* Glow */}
                <div className="absolute left-1/2 top-1/2 h-[110px] w-[110px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-2xl" />

                {/* Main orbit */}
                <div className="absolute left-1/2 top-1/2 h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 animate-[spin_8s_linear_infinite] rounded-full border border-cyan-400/20 border-t-cyan-400/80">
                  <span className="absolute -right-1 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,.9)]" />
                </div>

                {/* Inner orbit */}
                <div className="absolute left-1/2 top-1/2 h-[82px] w-[82px] -translate-x-1/2 -translate-y-1/2 animate-[spin_5s_linear_infinite_reverse] rounded-full border border-dashed border-cyan-300/20">
                  <span className="absolute -top-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cyan-300" />
                </div>

                {/* Center */}
                <div className="absolute left-1/2 top-1/2 flex h-[56px] w-[56px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[17px] border border-cyan-300/25 bg-[#10202b] shadow-[0_0_35px_rgba(6,182,212,.25)]">
                  <span className="text-[9px] font-bold uppercase tracking-[.04em] text-cyan-300/70">
                    SMM
                  </span>
                </div>
              </div>

              {/* Arrow */}
              <div className="absolute bottom-4 right-4 z-30 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-500/10 text-[13px] text-cyan-300 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-cyan-500 group-hover:text-white">
                →
              </div>
            </Link>

            {/* =====================================================
          YOUTUBE MARKETING CARD
      ===================================================== */}

            <Link
              to="/youtube-marketing"
              className="
          group
          relative
          h-[175px]
          overflow-hidden
          rounded-[20px]
          border
          border-white/10
          bg-gradient-to-br
          from-[#17192a]
          via-[#121525]
          to-[#0c101d]
          p-5
          transition-all
          duration-500
          hover:-translate-y-1.5
          hover:border-violet-400/30
          hover:shadow-[0_25px_60px_rgba(124,58,237,.16)]
          sm:h-[180px]
          sm:p-6
        "
            >
              {/* Violet glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-[190px] w-[190px] rounded-full bg-violet-600/15 blur-[65px] transition duration-700 group-hover:bg-violet-500/25" />

              {/* Content */}
              <div className="relative z-20 flex h-full w-[58%] flex-col justify-between">
                <div>
                  <h3 className="mt-4 m-0 text-[17px] font-bold tracking-[-.025em] text-white sm:text-[18px]">
                    YouTube Marketing
                  </h3>

                  <p className="mt-2 m-0 max-w-[270px] text-[10px] leading-[1.6] text-gray-400 sm:text-[11px]">
                    Grow your YouTube presence with strategic video promotion,
                    audience targeting and content-focused marketing campaigns.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[.12em] text-violet-300/60 transition group-hover:text-violet-300">
                  Explore service
                  <span className="h-px w-5 bg-violet-400/30 transition-all duration-300 group-hover:w-8" />
                </div>
              </div>

              {/* YOUTUBE MARKETING ORBIT */}
              <div className="pointer-events-none absolute right-[-4px] top-1/2 h-[150px] w-[150px] -translate-y-1/2 transition duration-700 group-hover:scale-110">
                {/* Outer glow */}
                <div className="absolute left-1/2 top-1/2 h-[115px] w-[115px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-2xl" />

                {/* Rotating orbit */}
                <div className="absolute left-1/2 top-1/2 h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 animate-[spin_9s_linear_infinite] rounded-full border border-violet-400/20 border-t-violet-400/80">
                  <span className="absolute -right-1 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-violet-400 shadow-[0_0_14px_rgba(167,139,250,.9)]" />
                </div>

                {/* Reverse orbit */}
                <div className="absolute left-1/2 top-1/2 h-[88px] w-[88px] -translate-x-1/2 -translate-y-1/2 animate-[spin_6s_linear_infinite_reverse] rounded-full border border-dashed border-violet-300/20">
                  <span className="absolute -top-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-purple-300" />
                </div>

                {/* Center */}
                <div className="absolute left-1/2 top-1/2 flex h-[55px] w-[68px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-violet-300/30 bg-[#17152b] shadow-[0_0_35px_rgba(139,92,246,.3)]">
                  <span className="text-[8px] font-black uppercase tracking-[.04em] text-violet-300">
                    YouTube
                  </span>
                </div>
              </div>

              {/* Arrow */}
              <div className="absolute bottom-4 right-4 z-30 flex h-8 w-8 items-center justify-center rounded-full border border-violet-400/20 bg-violet-500/10 text-[13px] text-violet-300 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-violet-500 group-hover:text-white">
                →
              </div>
            </Link>

            {/* =====================================================
          GOOGLE MY BUSINESS CARD
      ===================================================== */}

            <Link
              to="/google-my-business"
              className="
          group
          relative
          h-[175px]
          overflow-hidden
          rounded-[20px]
          border
          border-white/10
          bg-gradient-to-br
          from-[#1c1920]
          via-[#15151d]
          to-[#0e1018]
          p-5
          transition-all
          duration-500
          hover:-translate-y-1.5
          hover:border-orange-400/30
          hover:shadow-[0_25px_60px_rgba(249,115,22,.14)]
          sm:h-[180px]
          sm:p-6
        "
            >
              {/* Orange glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-[190px] w-[190px] rounded-full bg-orange-500/15 blur-[65px] transition duration-700 group-hover:bg-orange-400/25" />

              {/* Content */}
              <div className="relative z-20 flex h-full w-[58%] flex-col justify-between">
                <div>
                  <h3 className="mt-4 m-0 text-[17px] font-bold tracking-[-.025em] text-white sm:text-[18px]">
                    Google My Business
                  </h3>

                  <p className="mt-2 m-0 max-w-[275px] text-[10px] leading-[1.6] text-gray-400 sm:text-[11px]">
                    Optimize your Google Business Profile to improve local
                    visibility, customer discovery and business enquiries.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[.12em] text-orange-300/60 transition group-hover:text-orange-300">
                  Explore service
                  <span className="h-px w-5 bg-orange-400/30 transition-all duration-300 group-hover:w-8" />
                </div>
              </div>

              {/* GOOGLE MY BUSINESS ORBIT */}
              <div className="pointer-events-none absolute right-[-4px] top-1/2 h-[150px] w-[150px] -translate-y-1/2 transition duration-700 group-hover:scale-110">
                {/* Glow */}
                <div className="absolute left-1/2 top-1/2 h-[110px] w-[110px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-400/10 blur-2xl" />

                {/* Orbit */}
                <div className="absolute left-1/2 top-1/2 h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 animate-[spin_10s_linear_infinite] rounded-full border border-orange-400/20 border-t-orange-400/80">
                  <span className="absolute -right-1 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-orange-400 shadow-[0_0_14px_rgba(251,146,60,.9)]" />
                </div>

                {/* Reverse orbit */}
                <div className="absolute left-1/2 top-1/2 h-[85px] w-[85px] -translate-x-1/2 -translate-y-1/2 animate-[spin_6s_linear_infinite_reverse] rounded-full border border-dashed border-orange-300/20">
                  <span className="absolute -top-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-orange-300" />
                </div>

                {/* Center */}
                <div className="absolute left-1/2 top-1/2 flex h-[58px] w-[65px] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-xl border border-orange-300/25 bg-[#1a1719] shadow-[0_0_35px_rgba(249,115,22,.22)]">
                  <span className="text-[9px] font-black uppercase tracking-[.04em] text-orange-300">
                    GMB
                  </span>
                </div>
              </div>

              {/* Arrow */}
              <div className="absolute bottom-4 right-4 z-30 flex h-8 w-8 items-center justify-center rounded-full border border-orange-400/20 bg-orange-500/10 text-[13px] text-orange-300 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-orange-500 group-hover:text-white">
                →
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#f7faff] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-15">
        <div className="pointer-events-none absolute -left-32 top-20 h-[300px] w-[300px] rounded-full bg-blue-100/60 blur-3xl" />

        <div className="pointer-events-none absolute -right-32 bottom-0 h-[350px] w-[350px] rounded-full bg-indigo-100/50 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1250px]">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            {/* LEFT */}

            <div className="lg:sticky lg:top-24 lg:self-start">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1455d9] shadow-[0_0_12px_rgba(20,85,217,.5)]" />

                <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9]">
                  Frequently Asked Questions
                </p>
              </div>

              <h2 className="mt-4 m-0 max-w-[430px] text-[32px] font-bold leading-[1.05] tracking-[-.045em] text-[#101828] sm:text-[40px] lg:text-[40px]">
                Everything you need
                <span className="block text-[#1455d9]">
                  to know about LinkedIn Ads.
                </span>
              </h2>

              <p className="mt-5 max-w-[430px] text-[12px] leading-6 text-gray-500 sm:text-[13px] sm:leading-7">
                Have questions about B2B audience strategy, campaign planning,
                lead generation, measurement or how LinkedIn Ads fits into your
                digital strategy? Find the answers below.
              </p>

              <div className="mt-8 overflow-hidden rounded-[20px] border border-gray-200 bg-white p-5 shadow-[0_10px_35px_rgba(15,23,42,.04)]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#073b91] text-white">
                      <span className="text-[15px] font-bold">in</span>
                    </div>

                    <div>
                      <p className="m-0 text-[11px] font-bold text-[#101828]">
                        LinkedIn Ads
                      </p>

                      <p className="mt-1 m-0 text-[9px] text-gray-400">
                        B2B advertising
                      </p>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="group flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-[13px] text-gray-500 transition-all duration-300 hover:border-[#1455d9] hover:bg-[#1455d9] hover:text-white"
                  >
                    →
                  </Link>
                </div>

                <div className="mt-5 border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] font-bold uppercase tracking-[.15em] text-gray-400">
                      Professional audience
                    </span>

                    <span className="flex items-center gap-1.5 text-[8px] font-semibold text-emerald-500">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                      Available
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-[18px] border border-gray-200 bg-white px-4 py-4">
                  <p className="m-0 text-[20px] font-bold tracking-[-.03em] text-[#101828]">
                    B2B
                  </p>

                  <p className="mt-1 m-0 text-[8px] font-medium uppercase tracking-[.12em] text-gray-400">
                    Audience
                  </p>
                </div>

                <div className="rounded-[18px] border border-gray-200 bg-white px-4 py-4">
                  <p className="m-0 text-[20px] font-bold tracking-[-.03em] text-[#1455d9]">
                    ROI
                  </p>

                  <p className="mt-1 m-0 text-[8px] font-medium uppercase tracking-[.12em] text-gray-400">
                    Business Focus
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT */}

            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    key={faq.question}
                    className={`group overflow-hidden rounded-[20px] border transition-all duration-500 ${
                      isOpen
                        ? "border-[#1455d9] bg-[#073b91] shadow-[0_18px_45px_rgba(20,85,217,.15)]"
                        : "border-gray-200 bg-white hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_12px_35px_rgba(15,23,42,.05)]"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6 sm:py-6"
                    >
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-[9px] font-black transition-all duration-300 ${
                          isOpen
                            ? "bg-white/10 text-blue-100"
                            : "bg-[#f0f5ff] text-[#1455d9]"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className={`flex-1 text-[12px] font-bold leading-6 transition-colors duration-300 sm:text-[13px] ${
                          isOpen ? "text-white" : "text-[#101828]"
                        }`}
                      >
                        {faq.question}
                      </span>

                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-[17px] transition-all duration-300 ${
                          isOpen
                            ? "rotate-45 border-white/20 bg-white/10 text-white"
                            : "border-gray-200 bg-gray-50 text-gray-500 group-hover:border-[#1455d9] group-hover:text-[#1455d9]"
                        }`}
                      >
                        +
                      </span>
                    </button>

                    {/* Answer */}

                    <div
                      className={`grid transition-all duration-500 ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-5 pb-6 pl-[68px] pr-6 sm:px-6 sm:pb-7 sm:pl-[77px]">
                          <div className="mb-4 h-px bg-white/10" />

                          <p className="m-0 max-w-[680px] text-[11px] leading-6 text-blue-100/85 sm:text-[12px] sm:leading-7">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom strip */}

          <div className="mt-10 flex flex-col gap-4 rounded-[20px] border border-gray-200 bg-white px-5 py-4 shadow-[0_8px_30px_rgba(15,23,42,.035)] sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f0f5ff] text-[#1455d9]">
                ✓
              </div>

              <p className="m-0 text-[10px] font-semibold text-gray-600 sm:text-[11px]">
                Can&apos;t find the answer you&apos;re looking for?
              </p>
            </div>

            <Link
              to="/contact"
              className="group inline-flex items-center text-[10px] font-bold text-[#1455d9]"
            >
              Talk to our team
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="px-5 pb-14 sm:px-8 sm:pb-16 lg:px-14 lg:pb-20">
        <div className="relative mt-20 overflow-hidden rounded-[26px] bg-gradient-to-r from-[#0b2443] via-[#7434e8] to-[#245fe5] px-6 py-9 shadow-[0_25px_80px_rgba(91,45,190,.22)] sm:px-9 sm:py-10 lg:px-11 lg:py-11">
          <div className="pointer-events-none absolute -right-20 -top-28 h-[260px] w-[260px] rounded-full bg-white/10 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="m-0 text-[9px] font-bold uppercase tracking-[.18em] text-white/70">
                Ready to Grow?
              </p>

              <h3 className="mt-2 m-0 max-w-[700px] text-[26px] font-bold leading-[1.12] tracking-[-.035em] text-white sm:text-[32px]">
                Give your B2B campaigns a strategy that connects professional
                audiences with action.
              </h3>

              <p className="mt-3 m-0 max-w-[700px] text-[12px] text-white/75 sm:text-[13px]">
                Tell us what you are trying to achieve, what you have already
                tried and what outcome matters most. Akkurate can then recommend
                the most practical next step.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex w-fit items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-[11px] font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#073b91]"
            >
              Talk to Our Team
              <span className="ml-2 text-[15px]">→</span>
            </Link>
          </div>

          <div className="relative mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-4">
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[8px] text-blue-200">
                01
              </span>

              <span className="text-[9px] font-medium text-white/55">
                Audience
              </span>
            </div>

            <span className="h-3 w-px bg-white/10" />

            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[8px] text-blue-200">
                02
              </span>

              <span className="text-[9px] font-medium text-white/55">
                Campaign
              </span>
            </div>

            <span className="h-3 w-px bg-white/10" />

            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[8px] text-blue-200">
                03
              </span>

              <span className="text-[9px] font-medium text-white/55">
                Optimize
              </span>
            </div>

            <div className="ml-auto hidden items-center gap-2 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,.7)]" />

              <span className="text-[9px] font-medium text-white/45">
                Let&apos;s talk about your next campaign
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LinkedinAds;

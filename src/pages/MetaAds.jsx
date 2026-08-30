import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

/* =========================================================
   META ADS PAGE
   ---------------------------------------------------------
   Design / Layout / Colour:
   Meta / paid-social visual language with platform-specific UI

   Content:
   Meta Ads source content

   Tech:
   React.js + Tailwind CSS only
========================================================= */

/* =========================================================
   META ADS SERVICES
========================================================= */

const metaAdsServices = [
  {
    number: "01",
    title: "Audience & Funnel Strategy",
    description:
      "Define prospecting, consideration and retargeting audiences around the customer's buying journey.",
  },
  {
    number: "02",
    title: "Campaign Architecture",
    description:
      "Build campaign structures that separate objectives, audiences, offers and creative hypotheses.",
  },
  {
    number: "03",
    title: "Creative Testing",
    description:
      "Test hooks, formats, messages, visuals and calls to action instead of relying on one creative.",
  },
  {
    number: "04",
    title: "Lead Generation",
    description:
      "Create lead-generation journeys that connect ads to forms, landing pages, WhatsApp or other agreed conversion paths.",
  },
  {
    number: "05",
    title: "Retargeting",
    description:
      "Reconnect with people who engaged with content, visited pages or interacted with the brand where appropriate.",
  },
  {
    number: "06",
    title: "Performance Optimization",
    description:
      "Use performance data to identify stronger audiences, creative patterns, offers and budget opportunities.",
  },
];

/* =========================================================
   OUTCOMES
========================================================= */

const outcomes = [
  "Stronger audience-message fit",
  "More systematic creative testing",
  "Better retargeting journeys",
  "Clearer lead tracking",
  "Faster learning cycles",
  "Better connection between social and website",
];

/* =========================================================
   PROCESS
========================================================= */

const processSteps = [
  {
    number: "01",
    title: "Audience Discovery",
    description:
      "Understand the business objective, audience, current assets, constraints and success criteria before recommending the work.",
  },
  {
    number: "02",
    title: "Funnel & Campaign Planning",
    description:
      "Translate the objective into a practical strategy, scope, content/creative direction and measurement plan.",
  },
  {
    number: "03",
    title: "Creative Production",
    description:
      "Create, optimize, design, develop or launch the agreed work with brand and user requirements in mind.",
  },
  {
    number: "04",
    title: "Launch & Tracking",
    description:
      "Test the experience, tracking, messaging and key conversion paths before considering the work complete.",
  },
  {
    number: "05",
    title: "Testing & Optimization",
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
    question: "What is included in your meta ads service?",
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
      "Can your meta ads service be combined with SEO, paid media or website development?",
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
    title: "LinkedIn Ads",
    short: "in",
    description:
      "Reach professional audiences with targeted campaigns built around industries, roles, businesses and B2B objectives.",
    href: "/linkedin-ads",
    glow: "bg-cyan-500/10",
  },
  {
    number: "02",
    title: "Social Media Marketing",
    short: "SOCIAL",
    description:
      "Build an integrated social presence with content, campaigns and community-focused digital marketing.",
    href: "/social-media-marketing",
    glow: "bg-violet-500/10",
  },
  {
    number: "03",
    title: "YouTube Marketing",
    short: "▶",
    description:
      "Use video-led marketing to build awareness, engagement and meaningful customer journeys.",
    href: "/youtube-marketing",
    glow: "bg-blue-500/10",
  },
];

/* =========================================================
   HERO VISUAL
========================================================= */

function MetaAdsHeroVisual() {
  return (
    <div className="relative mx-auto min-h-[470px] w-full max-w-[680px] sm:min-h-[540px]">
      {/* Meta-inspired background */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-100 via-violet-100 to-pink-100 blur-3xl" />

      <div className="pointer-events-none absolute -right-5 top-8 h-24 w-24 rounded-full bg-pink-200/30 blur-2xl" />
      <div className="pointer-events-none absolute -left-5 bottom-16 h-28 w-28 rounded-full bg-blue-200/30 blur-2xl" />

      {/* Top platform badge */}
      <div className="absolute left-[3%] top-[4%] z-30 flex items-center gap-2 rounded-full border border-gray-200 bg-white/90 px-3 py-2 shadow-[0_10px_30px_rgba(15,23,42,.07)] backdrop-blur-md">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-[#1877f2] via-[#8b3dff] to-[#f13c72] text-[8px] font-black text-white">
          M
        </span>
        <span className="text-[8px] font-bold uppercase tracking-[.14em] text-gray-500">
          Meta Ads Studio
        </span>
      </div>

      {/* Main creative composition */}
      <div className="absolute left-1/2 top-1/2 z-20 h-[370px] w-[330px] -translate-x-1/2 -translate-y-1/2 sm:h-[430px] sm:w-[390px]">
        {/* Orbit */}
        <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-violet-200/70 sm:h-[390px] sm:w-[390px]" />

        <div className="absolute left-1/2 top-1/2 h-[275px] w-[275px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-100/80 sm:h-[325px] sm:w-[325px]" />

        {/* Floating platform nodes */}
        <div className="absolute left-[-4%] top-[18%] z-30 flex h-11 w-11 rotate-[-8deg] items-center justify-center rounded-[15px] border border-white bg-white shadow-[0_15px_35px_rgba(15,23,42,.12)] transition duration-500 hover:rotate-0 hover:scale-110 sm:left-[-7%]">
          <span className="text-[18px] font-black text-[#1877f2]">f</span>
        </div>

        <div className="absolute right-[-4%] top-[12%] z-30 flex h-11 w-11 rotate-[8deg] items-center justify-center rounded-[15px] border border-white bg-white shadow-[0_15px_35px_rgba(15,23,42,.12)] transition duration-500 hover:rotate-0 hover:scale-110 sm:right-[-7%]">
          <span className="text-[15px] font-black text-[#d946ef]">@</span>
        </div>

        <div className="absolute bottom-[15%] left-[-7%] z-30 flex h-10 w-10 rotate-[7deg] items-center justify-center rounded-[14px] border border-white bg-white shadow-[0_15px_35px_rgba(15,23,42,.12)] transition duration-500 hover:rotate-0 hover:scale-110">
          <span className="text-[13px] font-black text-[#8b5cf6]">✦</span>
        </div>

        <div className="absolute bottom-[11%] right-[-6%] z-30 flex h-10 w-10 rotate-[-7deg] items-center justify-center rounded-[14px] border border-white bg-white shadow-[0_15px_35px_rgba(15,23,42,.12)] transition duration-500 hover:rotate-0 hover:scale-110">
          <span className="text-[13px] font-black text-[#1877f2]">↗</span>
        </div>

        {/* Main social ad creative */}
        <div className="absolute left-1/2 top-1/2 z-20 w-[250px] -translate-x-1/2 -translate-y-1/2 rotate-[-2deg] overflow-hidden rounded-[28px] border border-white bg-white shadow-[0_30px_90px_rgba(15,23,42,.18)] transition duration-500 hover:rotate-0 hover:shadow-[0_35px_100px_rgba(15,23,42,.22)] sm:w-[285px]">
          {/* Ad header */}
          <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#1877f2] via-[#8b3dff] to-[#f13c72] text-[9px] font-black text-white">
                A
              </div>

              <div>
                <p className="m-0 text-[9px] font-bold text-[#101828]">
                  Akkurate
                </p>
                <p className="m-0 mt-0.5 text-[7px] text-gray-400">Sponsored</p>
              </div>
            </div>

            <span className="text-[16px] font-bold tracking-widest text-gray-300">
              ···
            </span>
          </div>

          {/* Creative area */}
          <div className="relative mx-3 mt-3 h-[170px] overflow-hidden rounded-[20px] bg-gradient-to-br from-[#073b91] via-[#5b35d5] to-[#e83f83] p-4 sm:h-[195px]">
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full border border-white/20" />
            <div className="absolute -bottom-12 -left-8 h-32 w-32 rounded-full border border-white/15" />

            <div className="relative z-10">
              <span className="inline-flex rounded-full bg-white/15 px-2.5 py-1 text-[7px] font-bold uppercase tracking-[.12em] text-white backdrop-blur-md">
                Meta Campaign
              </span>

              <p className="mt-5 max-w-[190px] text-[21px] font-bold leading-[1.05] tracking-[-.04em] text-white sm:text-[24px]">
                Turn attention
                <span className="block text-blue-100">into action.</span>
              </p>

              <div className="mt-4 flex items-center gap-2">
                <span className="rounded-full bg-white px-3 py-1.5 text-[7px] font-bold text-[#073b91]">
                  Learn More
                </span>
                <span className="text-[8px] font-medium text-white/60">
                  → conversion
                </span>
              </div>
            </div>

            {/* Decorative creative blocks */}
            <div className="absolute bottom-4 right-4 grid grid-cols-2 gap-1.5 opacity-80">
              <span className="h-5 w-5 rounded-md bg-white/20" />
              <span className="h-5 w-5 rounded-md bg-white/10" />
              <span className="h-5 w-5 rounded-md bg-white/10" />
              <span className="h-5 w-5 rounded-md bg-white/25" />
            </div>
          </div>

          {/* Engagement row */}
          <div className="px-4 pb-4 pt-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-gray-400">
                <span className="text-[13px]">♡</span>
                <span className="text-[13px]">◯</span>
                <span className="text-[13px]">↗</span>
              </div>

              <span className="text-[8px] font-semibold text-gray-400">
                2.8K interactions
              </span>
            </div>

            <div className="mt-3 flex items-center justify-between rounded-[13px] bg-[#f7faff] px-3 py-2.5">
              <div>
                <p className="m-0 text-[7px] font-bold uppercase tracking-[.1em] text-gray-400">
                  Campaign signal
                </p>

                <p className="mt-1 m-0 text-[11px] font-bold text-[#101828]">
                  High-intent audience
                </p>
              </div>

              <span className="rounded-full bg-emerald-50 px-2 py-1 text-[7px] font-bold text-emerald-600">
                Strong
              </span>
            </div>
          </div>
        </div>

        {/* Audience floating card */}
        <div className="absolute -left-[13%] top-[43%] z-30 w-[145px] rotate-[-3deg] rounded-[20px] border border-white bg-white/95 p-3 shadow-[0_20px_45px_rgba(15,23,42,.12)] backdrop-blur-md transition duration-500 hover:rotate-0 hover:-translate-y-2 sm:-left-[17%] sm:w-[160px]">
          <div className="flex items-center justify-between">
            <span className="text-[7px] font-bold uppercase tracking-[.13em] text-gray-400">
              Audience
            </span>

            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
          </div>

          <div className="mt-3 flex items-center gap-2">
            <div className="flex -space-x-2">
              <span className="h-6 w-6 rounded-full border-2 border-white bg-blue-200" />
              <span className="h-6 w-6 rounded-full border-2 border-white bg-violet-200" />
              <span className="h-6 w-6 rounded-full border-2 border-white bg-pink-200" />
            </div>

            <div>
              <p className="m-0 text-[11px] font-bold text-[#101828]">84.2K</p>
              <p className="m-0 mt-0.5 text-[7px] text-gray-400">
                matched users
              </p>
            </div>
          </div>

          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-gray-100">
            <div className="h-full w-[84%] rounded-full bg-gradient-to-r from-[#1877f2] via-[#8b3dff] to-[#f13c72]" />
          </div>
        </div>

        {/* Performance floating card */}
        <div className="absolute -right-[12%] bottom-[25%] z-30 w-[150px] rotate-[3deg] rounded-[20px] bg-[#101828] p-3.5 shadow-[0_25px_55px_rgba(15,23,42,.2)] transition duration-500 hover:rotate-0 hover:-translate-y-2 sm:-right-[16%] sm:w-[165px]">
          <div className="flex items-center justify-between">
            <span className="text-[7px] font-bold uppercase tracking-[.13em] text-blue-300">
              Performance
            </span>

            <span className="text-[10px] text-emerald-300">↗</span>
          </div>

          <div className="mt-2 flex items-end justify-between">
            <div>
              <p className="m-0 text-[22px] font-bold tracking-[-.04em] text-white">
                4.6x
              </p>
              <p className="m-0 mt-0.5 text-[7px] text-gray-500">ROAS</p>
            </div>

            <div className="flex h-8 items-end gap-1">
              {[30, 45, 35, 58, 50, 72].map((height, index) => (
                <span
                  key={index}
                  className="w-1.5 rounded-full bg-blue-300/70"
                  style={{ height: `${height / 2}px` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Creative testing chip */}
        <div className="absolute bottom-[5%] left-[19%] z-30 rounded-full border border-blue-100 bg-white px-3 py-2 shadow-[0_12px_35px_rgba(15,23,42,.09)] sm:left-[15%]">
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#f0f5ff] text-[9px] font-black text-[#1455d9]">
              A/B
            </span>

            <span className="text-[7px] font-bold uppercase tracking-[.1em] text-gray-500">
              Creative testing
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </div>
        </div>
      </div>

      {/* Small decorative dots */}
      <span className="absolute left-[13%] top-[25%] h-2 w-2 animate-pulse rounded-full bg-[#1877f2]" />
      <span className="absolute right-[14%] top-[19%] h-1.5 w-1.5 animate-pulse rounded-full bg-[#d946ef]" />
      <span className="absolute bottom-[22%] left-[12%] h-1.5 w-1.5 animate-pulse rounded-full bg-[#8b5cf6]" />
      <span className="absolute bottom-[15%] right-[13%] h-2 w-2 animate-pulse rounded-full bg-[#f13c72]" />

      {/* Bottom Meta ecosystem label */}
      <div className="absolute bottom-[1%] left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 rounded-full border border-gray-200 bg-white/90 px-4 py-2 shadow-md backdrop-blur-md">
        <span className="h-1.5 w-1.5 rounded-full bg-[#1877f2]" />

        <span className="text-[7px] font-bold uppercase tracking-[.12em] text-gray-500">
          Audience
        </span>

        <span className="text-gray-300">+</span>

        <span className="h-1.5 w-1.5 rounded-full bg-[#8b5cf6]" />

        <span className="text-[7px] font-bold uppercase tracking-[.12em] text-gray-500">
          Creative
        </span>

        <span className="text-gray-300">+</span>

        <span className="h-1.5 w-1.5 rounded-full bg-[#f13c72]" />

        <span className="text-[7px] font-bold uppercase tracking-[.12em] text-gray-500">
          Conversion
        </span>
      </div>
    </div>
  );
}

function MetaAds() {
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
        EQUAL LEFT + RIGHT GRID
    ================================================= */}

          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-10 xl:gap-14">
            {/* =================================================
          LEFT CONTENT
      ================================================= */}

            <div className="max-w-[760px]">
              {/* =================================================
            BREADCRUMB — INSIDE LEFT CONTENT
        ================================================= */}

              <div className="mb-5 flex flex-wrap items-center gap-2 text-[10px] font-medium text-gray-500 sm:mb-6 sm:text-[11px]">
                <Link to="/" className="transition hover:text-[#1455d9]">
                  Home
                </Link>

                <span>/</span>

                <span>Services</span>

                <span>/</span>

                <span className="text-[#1455d9]">Meta Ads</span>
              </div>

              {/* =================================================
            SERVICE BADGE
        ================================================= */}

              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[.16em] text-[#1455d9] shadow-sm sm:text-[11px]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#1455d9]" />
                Meta Ads
              </div>

              {/* =================================================
            HEADING
        ================================================= */}

              <h1 className="m-0 max-w-[760px] text-[35px] font-bold leading-[1.04] tracking-[-.045em] text-[#101828] sm:text-[44px] md:text-[45px] lg:text-[45px] xl:text-[45px]">
                Turn Social Attention Into
                <span className="block text-[#1455d9]">
                  Measurable Business Action.
                </span>
              </h1>

              {/* =================================================
            DESCRIPTION
        ================================================= */}

              <p className="mt-6 max-w-[660px] text-[14px] leading-7 text-gray-600 sm:text-[15px] lg:text-[16px]">
                Build and optimize Facebook and Instagram advertising with
                audience strategy, creative testing, retargeting and conversion
                tracking — built around your audience, business objective and
                measurable customer journey.
              </p>

              {/* =================================================
            CTA BUTTONS
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
                  href="#meta-ads-services"
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
                  Performance-focused
                </span>

                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-violet-500" />
                  Measurable
                </span>
              </div>
            </div>

            {/* =================================================
          RIGHT CONTENT — META ADS VISUAL
      ================================================= */}

            <div className="relative mx-auto min-h-[370px] w-full max-w-[540px] sm:min-h-[410px] sm:max-w-[590px]">
              {/* =================================================
            AMBIENT GLOW
        ================================================= */}

              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[75px]" />

              <div className="pointer-events-none absolute right-8 top-6 h-24 w-24 rounded-full bg-pink-400/10 blur-[55px]" />

              {/* =================================================
            MAIN SOCIAL CARD
        ================================================= */}

              <div className="absolute left-1/2 top-1/2 z-10 w-[92%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[22px] border border-white/10 bg-[#080b19]/95 p-3 shadow-[0_25px_70px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-4">
                {/* =================================================
              HEADER
          ================================================= */}

                <div className="mb-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-pink-400/15 via-violet-400/15 to-blue-400/10 ring-1 ring-pink-400/20">
                      <span className="text-[9px] font-bold text-pink-300">
                        ◎
                      </span>
                    </div>

                    <div>
                      <p className="text-[6px] uppercase tracking-[0.16em] text-white/25">
                        Social Advertising
                      </p>

                      <h3 className="text-xs font-semibold text-white/70">
                        Social Feed Ads
                      </h3>
                    </div>
                  </div>

                  {/* Live */}

                  <div className="flex items-center gap-1.5 rounded-full border border-emerald-400/15 bg-emerald-400/[0.035] px-2 py-1">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

                    <span className="text-[6px] text-emerald-300/70">Live</span>
                  </div>
                </div>

                {/* =================================================
              SOCIAL FEED
          ================================================= */}

                <div className="relative mx-auto h-[205px] max-w-[400px] overflow-hidden rounded-xl border border-white/10 bg-[#060914] sm:h-[220px]">
                  {/* Top Feed Bar */}

                  <div className="absolute left-0 right-0 top-0 z-30 flex h-8 items-center justify-between border-b border-white/10 bg-[#080b19]/95 px-2.5 backdrop-blur-xl">
                    <div className="flex items-center gap-1.5">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-pink-400/40 to-violet-400/30">
                        <span className="text-[5px] font-bold text-white">
                          A
                        </span>
                      </div>

                      <span className="text-[6px] font-medium text-white/50">
                        Social Feed
                      </span>
                    </div>

                    <div className="flex gap-1">
                      <span className="h-1 w-1 rounded-full bg-white/20" />

                      <span className="h-1 w-1 rounded-full bg-white/20" />

                      <span className="h-1 w-1 rounded-full bg-white/20" />
                    </div>
                  </div>

                  {/* =================================================
                MOVING FEED
            ================================================= */}

                  <div className="absolute inset-x-0 top-8 animate-[metaFeedCompact_11s_linear_infinite]">
                    {/* =================================================
                  POST
              ================================================= */}

                    <div className="mx-2 mb-2 rounded-lg border border-white/10 bg-white/[0.025] p-2.5">
                      <div className="flex items-center gap-1.5">
                        <div className="h-6 w-6 rounded-full bg-blue-400/15 ring-1 ring-blue-400/15" />

                        <div className="flex-1">
                          <div className="h-1.5 w-16 rounded-full bg-white/10" />

                          <div className="mt-1 h-1 w-10 rounded-full bg-white/5" />
                        </div>

                        <span className="text-[5px] text-white/20">2h</span>
                      </div>

                      <div className="mt-2 space-y-1">
                        <div className="h-1 w-[88%] rounded-full bg-white/8" />

                        <div className="h-1 w-[68%] rounded-full bg-white/5" />
                      </div>

                      <div className="mt-2 h-16 rounded-md bg-gradient-to-br from-blue-400/10 via-violet-400/10 to-pink-400/10">
                        <div className="flex h-full items-center justify-center">
                          <div className="h-8 w-14 rounded-md border border-white/10 bg-white/[0.03]" />
                        </div>
                      </div>

                      <div className="mt-1.5 flex justify-between">
                        <span className="text-[5px] text-white/25">♡ 842</span>

                        <span className="text-[5px] text-white/25">💬 86</span>

                        <span className="text-[5px] text-white/25">
                          ↗ Share
                        </span>
                      </div>
                    </div>

                    {/* =================================================
                  AD
              ================================================= */}

                    <div className="mx-2 mb-2 rounded-lg border border-pink-400/20 bg-pink-400/[0.035] p-2.5 shadow-[0_0_25px_rgba(236,72,153,0.08)]">
                      <div className="mb-1.5 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-pink-400/30 to-violet-400/30">
                            <span className="text-[6px] font-bold text-white">
                              A
                            </span>
                          </div>

                          <div>
                            <p className="text-[6px] font-semibold text-white/60">
                              Your Brand
                            </p>

                            <p className="text-[5px] text-white/25">
                              Sponsored
                            </p>
                          </div>
                        </div>

                        <span className="rounded-full border border-pink-400/15 bg-pink-400/5 px-1.5 py-0.5 text-[5px] text-pink-300/60">
                          AD
                        </span>
                      </div>

                      {/* Creative */}

                      <div className="relative flex h-16 items-center justify-center overflow-hidden rounded-md bg-gradient-to-br from-blue-500/15 via-violet-500/15 to-pink-500/15">
                        <div className="absolute -left-5 top-0 h-16 w-16 rounded-full bg-blue-400/15 blur-2xl animate-pulse" />

                        <div className="absolute -right-5 bottom-0 h-16 w-16 rounded-full bg-pink-400/15 blur-2xl animate-pulse" />

                        <div className="relative text-center">
                          <div className="mx-auto h-6 w-16 rounded-md border border-white/10 bg-white/[0.06]" />

                          <div className="mx-auto mt-1.5 h-1 w-20 rounded-full bg-white/15" />

                          <div className="mx-auto mt-1 h-1 w-12 rounded-full bg-white/8" />
                        </div>
                      </div>

                      {/* Ad Text */}

                      <p className="mt-1.5 text-[7px] font-semibold text-white/65">
                        Build. Grow. Connect.
                      </p>

                      <p className="mt-0.5 text-[5px] text-white/30">
                        Digital solutions designed for your business.
                      </p>

                      {/* Actions */}

                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-[6px] text-pink-300/70 animate-pulse">
                            ♥ 3.8K
                          </span>

                          <span className="text-[6px] text-white/30">
                            💬 420
                          </span>

                          <span className="text-[6px] text-white/30">
                            ↗ 1.2K
                          </span>
                        </div>

                        <div className="rounded-md bg-pink-500/20 px-2 py-1 ring-1 ring-pink-400/20">
                          <span className="text-[5px] font-medium text-pink-200">
                            Learn More
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* =================================================
                  STORY
              ================================================= */}

                    <div className="mx-2 mb-2 rounded-lg border border-violet-400/15 bg-violet-400/[0.03] p-2.5">
                      <div className="flex items-center gap-1.5">
                        <div className="relative flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-pink-400/30 via-violet-400/30 to-blue-400/20 ring-1 ring-violet-400/20">
                          <span className="text-[6px] font-bold text-white">
                            A
                          </span>

                          <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-pink-400 animate-pulse" />
                        </div>

                        <div>
                          <p className="text-[6px] font-medium text-white/55">
                            Your Brand
                          </p>

                          <p className="text-[5px] text-white/20">
                            Story · 15m
                          </p>
                        </div>
                      </div>

                      <div className="mt-2 h-16 rounded-md bg-gradient-to-br from-violet-400/15 to-pink-400/10">
                        <div className="flex h-full flex-col items-center justify-center">
                          <span className="text-[7px] font-semibold text-white/50">
                            NEW STORY
                          </span>

                          <div className="mt-1.5 h-1 w-12 rounded-full bg-white/10" />
                        </div>
                      </div>
                    </div>

                    {/* =================================================
                  REEL
              ================================================= */}

                    <div className="mx-2 mb-2 rounded-lg border border-cyan-400/15 bg-cyan-400/[0.025] p-2.5">
                      <div className="flex items-center gap-1.5">
                        <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-cyan-400/10">
                          <span className="text-[7px] text-cyan-300">▶</span>
                        </div>

                        <div>
                          <p className="text-[6px] font-medium text-white/55">
                            Your Brand
                          </p>

                          <p className="text-[5px] text-white/20">
                            Reel · Sponsored
                          </p>
                        </div>
                      </div>

                      <div className="mt-2 flex h-16 items-center justify-center rounded-md bg-cyan-400/[0.05]">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 animate-pulse">
                          <span className="ml-0.5 text-[8px] text-cyan-300">
                            ▶
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* =================================================
                  DUPLICATE ITEM FOR SMOOTH LOOP
              ================================================= */}

                    <div className="mx-2 mb-2 rounded-lg border border-white/10 bg-white/[0.025] p-2.5">
                      <div className="flex items-center gap-1.5">
                        <div className="h-6 w-6 rounded-full bg-blue-400/15" />

                        <div className="flex-1">
                          <div className="h-1.5 w-16 rounded-full bg-white/10" />

                          <div className="mt-1 h-1 w-10 rounded-full bg-white/5" />
                        </div>
                      </div>

                      <div className="mt-2 h-14 rounded-md bg-white/[0.025]" />
                    </div>
                  </div>

                  {/* Feed Fade */}

                  <div className="pointer-events-none absolute inset-x-0 top-8 z-20 h-8 bg-gradient-to-b from-[#060914] to-transparent" />

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-10 bg-gradient-to-t from-[#060914] to-transparent" />
                </div>

                {/* =================================================
              CONTENT FLOW
          ================================================= */}

                <div className="mt-2.5 flex items-center justify-center">
                  <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.02] px-2.5 py-1.5">
                    <span className="rounded-full bg-blue-400/10 px-1.5 py-0.5 text-[5px] text-blue-300/60">
                      Post
                    </span>

                    <span className="text-[6px] text-white/20">↓</span>

                    <span className="rounded-full bg-pink-400/10 px-1.5 py-0.5 text-[5px] text-pink-300/60 animate-pulse">
                      Ad
                    </span>

                    <span className="text-[6px] text-white/20">↓</span>

                    <span className="rounded-full bg-violet-400/10 px-1.5 py-0.5 text-[5px] text-violet-300/60">
                      Story
                    </span>

                    <span className="text-[6px] text-white/20">↓</span>

                    <span className="rounded-full bg-cyan-400/10 px-1.5 py-0.5 text-[5px] text-cyan-300/60">
                      Reel
                    </span>
                  </div>
                </div>

                {/* =================================================
              LIVE METRICS
          ================================================= */}

                <div className="mt-2.5 grid grid-cols-4 gap-1.5">
                  {/* Views */}

                  <div className="rounded-lg border border-blue-400/10 bg-blue-400/[0.025] p-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[5px] text-white/25">Views</span>

                      <span className="text-[7px] text-blue-300">👁</span>
                    </div>

                    <p className="mt-0.5 text-[9px] font-semibold text-white/70">
                      24K
                    </p>

                    <span className="text-[5px] text-emerald-300/60">+18%</span>
                  </div>

                  {/* Likes */}

                  <div className="rounded-lg border border-pink-400/10 bg-pink-400/[0.025] p-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[5px] text-white/25">Likes</span>

                      <span className="text-[7px] text-pink-300 animate-pulse">
                        ♥
                      </span>
                    </div>

                    <p className="mt-0.5 text-[9px] font-semibold text-white/70">
                      3.8K
                    </p>

                    <span className="text-[5px] text-emerald-300/60">+12%</span>
                  </div>

                  {/* Comments */}

                  <div className="rounded-lg border border-violet-400/10 bg-violet-400/[0.025] p-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[5px] text-white/25">Comments</span>

                      <span className="text-[7px] text-violet-300">💬</span>
                    </div>

                    <p className="mt-0.5 text-[9px] font-semibold text-white/70">
                      420
                    </p>

                    <span className="text-[5px] text-emerald-300/60">+9%</span>
                  </div>

                  {/* Clicks */}

                  <div className="rounded-lg border border-emerald-400/10 bg-emerald-400/[0.025] p-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[5px] text-white/25">Clicks</span>

                      <span className="text-[7px] text-emerald-300 animate-pulse">
                        ↗
                      </span>
                    </div>

                    <p className="mt-0.5 text-[9px] font-semibold text-white/70">
                      1.2K
                    </p>

                    <span className="text-[5px] text-emerald-300/60">+21%</span>
                  </div>
                </div>

                {/* =================================================
              ENGAGEMENT BAR
          ================================================= */}

                <div className="mt-2.5">
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-[5px] text-white/25">
                      Audience Engagement
                    </span>

                    <span className="text-[6px] text-pink-300/60">82%</span>
                  </div>

                  <div className="h-1 overflow-hidden rounded-full bg-white/5">
                    <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-blue-400/50 via-violet-400/60 to-pink-400/70 animate-[metaProgress_2.5s_ease-in-out_infinite]" />
                  </div>
                </div>

                {/* =================================================
              BOTTOM FLOW
          ================================================= */}

                <div className="mt-2.5 flex justify-center">
                  <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-pink-400" />

                    <span className="text-[5px] text-white/30">
                      Reach → Engage → Click → Convert
                    </span>
                  </div>
                </div>
              </div>

              {/* =================================================
            LEFT FLOATING CARD
        ================================================= */}

              <div className="absolute bottom-4 left-0 z-30 hidden rounded-lg border border-white/10 bg-[#090c1b]/95 px-2.5 py-1.5 shadow-xl backdrop-blur-xl sm:block">
                <div className="flex items-center gap-1.5">
                  <span className="text-[8px] text-pink-300 animate-pulse">
                    ♥
                  </span>

                  <div>
                    <p className="text-[6px] text-white/55">Engagement</p>

                    <p className="text-[5px] text-pink-300/40">3.8K likes</p>
                  </div>
                </div>
              </div>

              {/* =================================================
            RIGHT FLOATING CARD
        ================================================= */}

              <div className="absolute bottom-4 right-0 z-30 hidden rounded-lg border border-white/10 bg-[#090c1b]/95 px-2.5 py-1.5 shadow-xl backdrop-blur-xl sm:block">
                <div className="flex items-center gap-1.5">
                  <span className="text-[8px] text-emerald-300 animate-pulse">
                    ↗
                  </span>

                  <div>
                    <p className="text-[6px] text-white/55">Ad Clicks</p>

                    <p className="text-[5px] text-emerald-300/40">
                      1.2K clicks
                    </p>
                  </div>
                </div>
              </div>

              {/* =================================================
            PARTICLES
        ================================================= */}

              <div className="pointer-events-none absolute inset-0">
                <span className="absolute left-[14%] top-[22%] h-1 w-1 animate-ping rounded-full bg-pink-400/60" />

                <span className="absolute right-[16%] top-[27%] h-1 w-1 animate-pulse rounded-full bg-violet-400/60" />

                <span className="absolute left-[21%] bottom-[20%] h-1 w-1 animate-pulse rounded-full bg-blue-400/60" />

                <span className="absolute right-[23%] bottom-[21%] h-1 w-1 animate-ping rounded-full bg-emerald-400/60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-10">
        <div className="pointer-events-none absolute right-0 top-0 h-[320px] w-[320px] rounded-full bg-blue-50 blur-3xl" />

        <div className="relative mx-auto grid w-full max-w-[1500px] gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-end lg:gap-20">
          <div className="mb-10">
            <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9] sm:text-[11px]">
              Introduction
            </p>

            <h2 className="mt-4 m-0 max-w-[600px] text-[31px] font-bold leading-[1.08] tracking-[-.04em] text-[#101828] sm:text-[38px] lg:text-[40px]">
              Meta Ads Built Around Business Growth.
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
                Akkurate Digital Solutions provides meta ads as part of an
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
                Make paid social useful.
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
                Audience first. Creative second. Measurement throughout.
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
                ["02", "Build", "Funnel + creative"],
                ["03", "Improve", "Data + iteration"],
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

      <section className="bg-[#101828] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-10">
        <div className="mx-auto w-full max-w-[1200px] px-4 text-center sm:px-6 lg:px-8">
          <p className="m-0 text-[10px] font-bold uppercase tracking-[.18em] text-blue-300 sm:text-[11px]">
            The Business Problem We Solve
          </p>

          <h2 className="mt-4 m-0 text-[27px] font-bold leading-tight tracking-[-.03em] text-white sm:text-[34px] lg:text-[42px]">
            Meta Ads With a Clear Commercial Purpose.
          </h2>

          <p className="mx-auto mt-5 max-w-[900px] text-[14px] leading-7 text-gray-300 sm:text-[15px]">
            Social advertising becomes expensive when there is no clear
            audience, offer or conversion journey. Akkurate treats Meta as a
            creative-performance system: the message earns attention, the offer
            gives a reason to act, and the landing or lead experience completes
            the journey.
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
          PERFORMANCE / ANALYTICS
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#f7faff] px-5 py-10 sm:px-8 sm:py-20 lg:px-14 lg:py-10">
        <div className="mx-auto w-full max-w-[1500px]">
          <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-center lg:gap-16">
            {/* LEFT */}

            <div>
              <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9]">
                Performance / Analytics
              </p>

              <h2 className="mt-3 m-0 text-[30px] font-bold leading-[1.08] tracking-[-.04em] text-[#101828] sm:text-[38px] lg:text-[37px]">
                Turn social signals into useful performance insights.
              </h2>

              <p className="mt-5 max-w-[560px] text-[14px] leading-7 text-gray-600">
                Meta Ads should be evaluated through audience quality, creative
                performance, lead tracking and the customer journey — not simply
                through impressions or clicks.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3">
                {[
                  ["78%", "Audience signal"],
                  ["126", "Creative tests"],
                  ["92", "Lead quality"],
                  ["84%", "Optimization"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-[18px] border border-gray-200 bg-white p-4 shadow-[0_8px_28px_rgba(15,23,42,.04)]"
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

            {/* GRAPH */}

            <div className="rounded-[28px] border border-gray-200 bg-white p-4 shadow-[0_25px_70px_rgba(15,23,42,.08)] sm:p-6">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-5">
                <div>
                  <p className="m-0 text-[13px] font-bold text-[#101828]">
                    Meta campaign journey
                  </p>

                  <p className="mt-1 m-0 text-[10px] text-gray-400">
                    From first impression to conversion
                  </p>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#1877f2] via-[#8b3dff] to-[#f13c72] text-[12px] font-black text-white">
                  M
                </div>
              </div>

              {/* Journey */}
              <div className="relative mt-7">
                {/* Connecting path */}
                <div className="pointer-events-none absolute left-[36px] top-[34px] h-[calc(100%-68px)] w-px bg-gradient-to-b from-blue-200 via-violet-200 to-pink-200" />

                {/* Step 01 */}
                <div className="group relative flex gap-4">
                  <div className="relative z-10 flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-[22px] bg-[#eef5ff] transition duration-500 group-hover:scale-105 group-hover:bg-[#e5efff]">
                    <div className="text-center">
                      <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-[#1877f2] text-[13px] font-bold text-white">
                        👁
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 rounded-[20px] border border-gray-100 bg-[#fbfdff] p-4 transition duration-500 group-hover:-translate-y-1 group-hover:border-blue-100 group-hover:shadow-[0_15px_35px_rgba(15,23,42,.06)]">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="m-0 text-[8px] font-bold uppercase tracking-[.14em] text-blue-500">
                          Step 01
                        </p>

                        <p className="mt-1 m-0 text-[14px] font-bold text-[#101828]">
                          Audience sees your ad
                        </p>
                      </div>

                      <span className="text-[9px] font-bold text-gray-400">
                        Awareness
                      </span>
                    </div>

                    <div className="mt-3 flex items-center gap-2">
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-100">
                        <div className="h-full w-[88%] rounded-full bg-[#1877f2]" />
                      </div>

                      <span className="text-[9px] font-bold text-gray-500">
                        88%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Step 02 */}
                <div className="group relative mt-4 flex gap-4">
                  <div className="relative z-10 flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-[22px] bg-[#f4efff] transition duration-500 group-hover:scale-105 group-hover:bg-[#eee6ff]">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8b5cf6] text-[14px] font-bold text-white">
                      ♡
                    </div>
                  </div>

                  <div className="flex-1 rounded-[20px] border border-gray-100 bg-[#fbfdff] p-4 transition duration-500 group-hover:-translate-y-1 group-hover:border-violet-100 group-hover:shadow-[0_15px_35px_rgba(15,23,42,.06)]">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="m-0 text-[8px] font-bold uppercase tracking-[.14em] text-violet-500">
                          Step 02
                        </p>

                        <p className="mt-1 m-0 text-[14px] font-bold text-[#101828]">
                          Audience engages
                        </p>
                      </div>

                      <span className="text-[9px] font-bold text-gray-400">
                        Engagement
                      </span>
                    </div>

                    <div className="mt-3 flex gap-1.5">
                      <span className="h-6 flex-1 rounded-lg bg-violet-100" />
                      <span className="h-6 w-[22%] rounded-lg bg-violet-200" />
                      <span className="h-6 w-[12%] rounded-lg bg-violet-300" />
                    </div>
                  </div>
                </div>

                {/* Step 03 */}
                <div className="group relative mt-4 flex gap-4">
                  <div className="relative z-10 flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-[22px] bg-[#fff0f6] transition duration-500 group-hover:scale-105 group-hover:bg-[#ffe7f0]">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#e83f83] text-[13px] font-bold text-white">
                      ↗
                    </div>
                  </div>

                  <div className="flex-1 rounded-[20px] border border-gray-100 bg-[#fbfdff] p-4 transition duration-500 group-hover:-translate-y-1 group-hover:border-pink-100 group-hover:shadow-[0_15px_35px_rgba(15,23,42,.06)]">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="m-0 text-[8px] font-bold uppercase tracking-[.14em] text-pink-500">
                          Step 03
                        </p>

                        <p className="mt-1 m-0 text-[14px] font-bold text-[#101828]">
                          User takes action
                        </p>
                      </div>

                      <span className="text-[9px] font-bold text-gray-400">
                        Intent
                      </span>
                    </div>

                    <div className="mt-3 flex items-center gap-2">
                      <span className="rounded-full bg-pink-50 px-2.5 py-1 text-[8px] font-bold text-pink-500">
                        Click
                      </span>

                      <span className="text-gray-300">→</span>

                      <span className="rounded-full bg-violet-50 px-2.5 py-1 text-[8px] font-bold text-violet-500">
                        Visit
                      </span>

                      <span className="text-gray-300">→</span>

                      <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[8px] font-bold text-blue-500">
                        Enquire
                      </span>
                    </div>
                  </div>
                </div>

                {/* Step 04 */}
                <div className="group relative mt-4 flex gap-4">
                  <div className="relative z-10 flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-[22px] bg-[#ecfdf5] transition duration-500 group-hover:scale-105 group-hover:bg-[#dcfce7]">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-[14px] font-bold text-white">
                      ✓
                    </div>
                  </div>

                  <div className="flex-1 rounded-[20px] border border-emerald-100 bg-emerald-50/40 p-4 transition duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_15px_35px_rgba(16,185,129,.08)]">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="m-0 text-[8px] font-bold uppercase tracking-[.14em] text-emerald-600">
                          Step 04
                        </p>

                        <p className="mt-1 m-0 text-[14px] font-bold text-[#101828]">
                          Conversion captured
                        </p>
                      </div>

                      <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[8px] font-bold text-emerald-600">
                        Success
                      </span>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-[9px] text-gray-500">
                        Lead / enquiry / purchase
                      </span>

                      <span className="text-[13px] font-bold text-emerald-600">
                        +31%
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom summary */}
              <div className="mt-6 grid grid-cols-3 gap-2 border-t border-gray-100 pt-5">
                <div className="rounded-[15px] bg-[#f7faff] p-3 text-center">
                  <p className="m-0 text-[15px] font-bold text-[#101828]">
                    84K
                  </p>

                  <p className="mt-1 m-0 text-[7px] font-bold uppercase tracking-[.1em] text-gray-400">
                    Audience
                  </p>
                </div>

                <div className="rounded-[15px] bg-[#f8f5ff] p-3 text-center">
                  <p className="m-0 text-[15px] font-bold text-[#101828]">
                    2.8K
                  </p>

                  <p className="mt-1 m-0 text-[7px] font-bold uppercase tracking-[.1em] text-gray-400">
                    Engaged
                  </p>
                </div>

                <div className="rounded-[15px] bg-[#effdf6] p-3 text-center">
                  <p className="m-0 text-[15px] font-bold text-[#101828]">
                    31%
                  </p>

                  <p className="mt-1 m-0 text-[7px] font-bold uppercase tracking-[.1em] text-gray-400">
                    Growth
                  </p>
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
        id="meta-ads-services"
        className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-10"
      >
        <div className="mx-auto w-full max-w-[1500px]">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[760px]">
              <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9] sm:text-[11px]">
                Our Services
              </p>

              <h2 className="mt-3 m-0 text-[30px] font-bold leading-[1.08] tracking-[-.04em] text-[#101828] sm:text-[38px]">
                Our Meta Ads Services
              </h2>
            </div>

            <p className="max-w-[420px] text-[13px] leading-6 text-gray-500">
              Build and optimize Facebook and Instagram campaigns around
              audience strategy, creative testing, retargeting and measurable
              business outcomes.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {metaAdsServices.map((service) => (
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

      <section className="relative overflow-hidden bg-[#f7faff] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-10">
        <div className="mx-auto w-full max-w-[1500px]">
          <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-center lg:gap-20">
            <div>
              <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9]">
                What You Get
              </p>

              <h2 className="mt-3 m-0 text-[31px] font-bold leading-[1.08] tracking-[-.04em] text-[#101828] sm:text-[40px] lg:text-[48px]">
                What You Get From Akkurate.
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

      <section className="relative px-5 py-16 sm:px-8 sm:py-20 lg:py-10">
        <div className="mx-auto w-full max-w-[950px] px-4 text-center sm:px-6 lg:px-8">
          <p className="m-0 text-[10px] font-bold uppercase tracking-[.18em] text-[#1455d9]">
            Who This Service Is For
          </p>

          <h2 className="mt-3 m-0 text-[29px] font-bold leading-tight tracking-[-.03em] text-[#101828] sm:text-[36px] lg:text-[42px]">
            Meta Ads Should Fit Your Business.
          </h2>

          <p className="mt-5 m-0 text-[14px] leading-7 text-gray-600 sm:text-[15px]">
            Meta Ads is relevant to businesses that have a clear reason to
            improve their digital presence, customer journey or growth engine.
          </p>

          <p className="mt-4 m-0 text-[14px] leading-7 text-gray-600 sm:text-[15px]">
            The right approach depends on the starting point. Akkurate can
            recommend a focused scope, a broader integrated program or a
            different service when that is more appropriate.
          </p>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#101828] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-10">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-900/20 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1500px]">
          <div className="mx-auto max-w-[800px] text-center">
            <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-blue-300">
              Our Process
            </p>

            <h2 className="mt-3 m-0 text-[31px] font-bold leading-[1.08] tracking-[-.04em] text-white sm:text-[40px] lg:text-[48px]">
              A Practical Meta Ads Process.
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
          WHY AKKURATE
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#f7faff] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-10">
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
                Paid Social With a
                <span className="block text-[#1455d9]">
                  Business-First Approach.
                </span>
              </h2>
            </div>

            <div>
              <p className="m-0 max-w-[650px] text-[14px] leading-7 text-gray-600 sm:text-[15px]">
                Digital growth rarely depends on one channel. We bring strategy,
                search, content, web and technology together when the customer
                journey needs a connected approach.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "Strategy",
                  "Paid Social",
                  "Creative",
                  "Content",
                  "Digital",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.12em] text-gray-500"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-[0.7fr_1.3fr]">
            {/* LEFT DARK PANEL */}

            <div className="relative min-h-[420px] overflow-hidden rounded-[28px] bg-[#101828] p-7 shadow-[0_25px_70px_rgba(15,23,42,.12)] sm:p-9">
              <div className="pointer-events-none absolute -right-24 -top-24 h-[260px] w-[260px] rounded-full border border-white/10" />

              <div className="pointer-events-none absolute -right-12 -top-12 h-[180px] w-[180px] rounded-full border border-white/10" />

              <div className="pointer-events-none absolute -bottom-28 -left-24 h-[250px] w-[250px] rounded-full bg-blue-600/10 blur-3xl" />

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.14em] text-blue-300">
                      Akkurate Method
                    </span>

                    <span className="flex items-center gap-2 text-[9px] font-semibold text-white/40">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Connected
                    </span>
                  </div>

                  <h3 className="mt-8 max-w-[390px] text-[27px] font-bold leading-tight tracking-[-.035em] text-white sm:text-[32px]">
                    One strategy.
                    <br />
                    Multiple growth levers.
                  </h3>

                  <p className="mt-4 max-w-[400px] text-[12px] leading-6 text-gray-400 sm:text-[13px]">
                    Instead of treating every digital activity separately, we
                    connect the right capabilities around your business
                    objective and customer journey.
                  </p>
                </div>

                {/* Strategy diagram */}

                <div className="relative mt-10 h-[180px]">
                  <div className="absolute left-[22%] top-[50%] h-px w-[58%] bg-gradient-to-r from-blue-400/20 via-blue-400/70 to-blue-400/20" />

                  <div className="absolute left-[50%] top-[15%] h-[70%] w-px bg-gradient-to-b from-transparent via-blue-400/50 to-transparent" />

                  {/* Center */}

                  <div className="absolute left-1/2 top-1/2 flex h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-blue-300/30 bg-[#15233d] shadow-[0_0_40px_rgba(20,85,217,.2)]">
                    <div className="text-center">
                      <p className="m-0 text-[8px] font-bold uppercase tracking-[.12em] text-blue-300">
                        Growth
                      </p>

                      <p className="mt-1 m-0 text-[11px] font-bold text-white">
                        Core
                      </p>
                    </div>
                  </div>

                  {[
                    ["ADS", "top-[5%] left-[15%]"],
                    ["CREATIVE", "top-[5%] right-[15%]"],
                    ["CONTENT", "bottom-[5%] left-[15%]"],
                    ["DATA", "bottom-[5%] right-[15%]"],
                  ].map(([label, position]) => (
                    <div
                      key={label}
                      className={`absolute ${position} rounded-xl border border-white/10 bg-white/[0.06] px-3 py-2 backdrop-blur-md`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />

                        <span className="text-[8px] font-bold tracking-[.08em] text-white/80">
                          {label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-3 border-t border-white/10 pt-5">
                  <div className="flex -space-x-1.5">
                    <span className="h-6 w-6 rounded-full border-2 border-[#101828] bg-blue-200" />

                    <span className="h-6 w-6 rounded-full border-2 border-[#101828] bg-indigo-200" />

                    <span className="h-6 w-6 rounded-full border-2 border-[#101828] bg-violet-200" />
                  </div>

                  <p className="m-0 text-[9px] leading-4 text-white/40">
                    Strategy connects the right
                    <br />
                    digital capabilities.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT CARDS */}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {whyChoose.map((item) => (
                <article
                  key={item.number}
                  className="group relative overflow-hidden rounded-[24px] border border-gray-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,.035)] transition-all duration-500 hover:-translate-y-2 hover:border-[#1455d9] hover:shadow-[0_25px_55px_rgba(20,85,217,.14)]"
                >
                  <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-blue-50 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

                  <div className="relative flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f0f5ff] text-[10px] font-black text-[#1455d9] transition duration-300 group-hover:bg-[#1455d9] group-hover:text-white">
                      {item.number}
                    </div>

                    <span className="text-[20px] text-gray-300 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#1455d9]">
                      ↗
                    </span>
                  </div>

                  <h3 className="relative mt-7 m-0 text-[19px] font-bold leading-snug tracking-[-.02em] text-[#101828]">
                    {item.title}
                  </h3>

                  <p className="relative mt-3 m-0 text-[12px] leading-6 text-gray-500 sm:text-[13px]">
                    {item.description}
                  </p>

                  <div className="relative mt-7 flex items-center justify-between border-t border-gray-100 pt-4">
                    <span className="text-[8px] font-bold uppercase tracking-[.14em] text-gray-400 transition group-hover:text-[#1455d9]">
                      Akkurate capability
                    </span>

                    <span className="h-1.5 w-1.5 rounded-full bg-gray-200 transition group-hover:bg-[#1455d9]" />
                  </div>
                </article>
              ))}
            </div>
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
          01 LinkedIn Ads
          02 Social Media Marketing
          03 YouTube Marketing
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
        Extend your digital marketing efforts with connected advertising and
        social media solutions that strengthen reach, engagement and growth.
      </p>

    </div>


    {/* CARDS */}
    <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">


      {/* =====================================================
          LINKEDIN ADS CARD
      ===================================================== */}

      <Link
        to="/linkedin-ads"
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
              LinkedIn Ads
            </h3>

            <p className="mt-2 m-0 max-w-[270px] text-[10px] leading-[1.6] text-gray-400 sm:text-[11px]">
              Reach the right professional audience with targeted LinkedIn
              advertising campaigns built to generate quality leads.
            </p>

          </div>

          <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[.12em] text-cyan-300/60 transition group-hover:text-cyan-300">
            Explore service

            <span className="h-px w-5 bg-cyan-400/30 transition-all duration-300 group-hover:w-8" />
          </div>

        </div>


        {/* LINKEDIN ADS ORBIT */}
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
          <div className="absolute left-1/2 top-1/2 flex h-[56px] w-[65px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[17px] border border-cyan-300/25 bg-[#10202b] shadow-[0_0_35px_rgba(6,182,212,.25)]">

            <span className="text-[8px] font-bold uppercase tracking-[.04em] text-cyan-300/70">
              LinkedIn
            </span>

          </div>

        </div>


        {/* Arrow */}
        <div className="absolute bottom-4 right-4 z-30 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-500/10 text-[13px] text-cyan-300 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-cyan-500 group-hover:text-white">
          →
        </div>

      </Link>



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
              Social Media Marketing
            </h3>

            <p className="mt-2 m-0 max-w-[270px] text-[10px] leading-[1.6] text-gray-400 sm:text-[11px]">
              Build a strong social presence with strategic content, audience
              engagement and campaigns that grow your brand.
            </p>

          </div>

          <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[.12em] text-violet-300/60 transition group-hover:text-violet-300">

            Explore service

            <span className="h-px w-5 bg-violet-400/30 transition-all duration-300 group-hover:w-8" />

          </div>

        </div>


        {/* SOCIAL MEDIA MARKETING ORBIT */}
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
              SMM
            </span>

          </div>

        </div>


        {/* Arrow */}
        <div className="absolute bottom-4 right-4 z-30 flex h-8 w-8 items-center justify-center rounded-full border border-violet-400/20 bg-violet-500/10 text-[13px] text-violet-300 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-violet-500 group-hover:text-white">
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
              YouTube Marketing
            </h3>

            <p className="mt-2 m-0 max-w-[275px] text-[10px] leading-[1.6] text-gray-400 sm:text-[11px]">
              Grow your YouTube presence with strategic video promotion,
              audience targeting and content-focused marketing campaigns.
            </p>

          </div>

          <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[.12em] text-orange-300/60 transition group-hover:text-orange-300">

            Explore service

            <span className="h-px w-5 bg-orange-400/30 transition-all duration-300 group-hover:w-8" />

          </div>

        </div>


        {/* YOUTUBE MARKETING ORBIT */}
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
          <div className="absolute left-1/2 top-1/2 flex h-[58px] w-[75px] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-xl border border-orange-300/25 bg-[#1a1719] shadow-[0_0_35px_rgba(249,115,22,.22)]">

            <span className="text-[8px] font-black uppercase tracking-[.04em] text-orange-300">
              YouTube
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

      <section className="relative overflow-hidden bg-[#f7faff] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-14">
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
                  to know about Meta Ads.
                </span>
              </h2>

              <p className="mt-5 max-w-[430px] text-[12px] leading-6 text-gray-500 sm:text-[13px] sm:leading-7">
                Have questions about audience strategy, creative testing,
                retargeting, measurement or how Meta Ads fits into your digital
                strategy? Find the answers below.
              </p>

              {/* Question card */}

              <div className="mt-8 overflow-hidden rounded-[20px] border border-gray-200 bg-white p-5 shadow-[0_10px_35px_rgba(15,23,42,.04)]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#073b91] text-white">
                      <span className="text-[16px] font-bold">?</span>
                    </div>

                    <div>
                      <p className="m-0 text-[11px] font-bold text-[#101828]">
                        Still have questions?
                      </p>

                      <p className="mt-1 m-0 text-[9px] text-gray-400">
                        Our team can help.
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
                      Meta Ads
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
                    META
                  </p>

                  <p className="mt-1 m-0 text-[8px] font-medium uppercase tracking-[.12em] text-gray-400">
                    Paid Social
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
                Give your social campaigns a strategy that connects attention
                with action.
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
                Creative
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

export default MetaAds;

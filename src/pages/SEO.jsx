import React, { useState } from "react";
import { Link } from "react-router-dom";

/* =========================================================
   SEO PAGE
   Search Engine Optimization
   GEO DESIGN + SEO CONTENT
========================================================= */

const seoServices = [
  {
    number: "01",
    title: "Technical SEO",
    description:
      "Improve crawlability, indexation, site architecture, redirects, canonicals, performance and other technical foundations.",
  },
  {
    number: "02",
    title: "Keyword Research & Search Intent",
    description:
      "Map search terms to customer intent and the pages that best satisfy informational, commercial and transactional needs.",
  },
  {
    number: "03",
    title: "On-Page SEO",
    description:
      "Optimize titles, headings, content, internal links, URLs, images and calls to action around search intent.",
  },
  {
    number: "04",
    title: "Content SEO & Topical Authority",
    description:
      "Build topic clusters, pillar pages and supporting resources that demonstrate useful depth instead of thin keyword pages.",
  },
  {
    number: "05",
    title: "Local SEO",
    description:
      "Strengthen local relevance through business information consistency, location content, reviews and local landing-page strategy where appropriate.",
  },
  {
    number: "06",
    title: "Authority & Digital PR Support",
    description:
      "Pursue relevant authority opportunities through useful assets, digital PR and credible outreach rather than low-quality link volume.",
  },
];

const outcomes = [
  "More qualified organic discovery",
  "Better search-intent coverage",
  "Stronger service and industry relevance",
  "Improved crawlability and usability",
  "A content system that compounds",
  "Clearer connection between search and business goals",
];

const processSteps = [
  {
    number: "01",
    title: "Audit & Baseline",
    description:
      "Understand the business objective, audience, current assets, constraints and success criteria before recommending the work.",
  },
  {
    number: "02",
    title: "Opportunity Mapping",
    description:
      "Translate the objective into a practical strategy, scope, content/creative direction and measurement plan.",
  },
  {
    number: "03",
    title: "Strategy & Architecture",
    description:
      "Create, optimize, design, develop or launch the agreed work with brand and user requirements in mind.",
  },
  {
    number: "04",
    title: "Optimization & Production",
    description:
      "Test the experience, tracking, messaging and key conversion paths before considering the work complete.",
  },
  {
    number: "05",
    title: "Measurement & Iteration",
    description:
      "Review performance, feedback and business signals and use those learnings to prioritize the next improvement.",
  },
];

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

const faqs = [
  {
    question:
      "What is included in your search engine optimization (SEO) service?",
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
      "Can this service be combined with SEO, paid media or website development?",
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

function SEO() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="w-full overflow-hidden bg-white text-[#111827]">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#f7faff] px-5 pb-16 pt-8 sm:px-8 sm:pb-20 sm:pt-12 lg:px-14 lg:pb-24 lg:pt-14">
        <div className="pointer-events-none absolute -right-48 -top-48 h-[520px] w-[520px] rounded-full bg-blue-100/70 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-48 -left-48 h-[420px] w-[420px] rounded-full bg-indigo-100/50 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1600px] px-1 sm:px-2 lg:px-4 xl:px-6">
          {/* Breadcrumb */}

          <div className="mb-8 flex items-center gap-2 text-[11px] font-medium text-gray-500 sm:mb-10 sm:text-[12px]">
            <Link to="/" className="transition hover:text-[#1455d9]">
              Home
            </Link>

            <span>/</span>
            <span>Services</span>
            <span>/</span>

            <span className="text-[#1455d9]">SEO</span>
          </div>

          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[.9fr_1.1fr] lg:gap-12 xl:gap-20">
            {/* LEFT CONTENT */}

            <div className="max-w-[760px]">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[.16em] text-[#1455d9] shadow-sm sm:text-[11px]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#1455d9]" />
                Search Engine Optimization
              </div>

              <h1 className="m-0 max-w-[800px] text-[35px] font-bold leading-[1.04] tracking-[-.045em] text-[#101828] sm:text-[37px] lg:text-[36px]">
                SEO That Drives Visibility,
                <span className="inline-block text-[#1455d9]">
                  Qualified Traffic & Business Growth.
                </span>
              </h1>

              <p className="mt-6 max-w-[660px] text-[14px] leading-7 text-gray-600 sm:text-[15px] lg:text-[16px]">
                Grow qualified organic traffic, search visibility and leads with
                technical SEO, content strategy, on-page optimization, local SEO
                and authority building — built around your audience, business
                objective and measurable customer journey.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#073b91] px-6 py-3 text-[13px] font-bold text-white shadow-[0_12px_30px_rgba(7,59,145,.18)] transition duration-300 hover:-translate-y-1 hover:bg-[#052f75]"
                >
                  Talk to Our Team
                  <span className="ml-2">→</span>
                </Link>

                <a
                  href="#seo-services"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-gray-200 bg-white px-6 py-3 text-[13px] font-semibold text-gray-700 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:text-[#1455d9]"
                >
                  Explore Services
                </a>
              </div>

              <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 border-t border-gray-200/80 pt-5 text-[11px] font-medium text-gray-500">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Strategy-led
                </span>

                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-500" />
                  Search-ready
                </span>

                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-violet-500" />
                  Measurable
                </span>
              </div>
            </div>

            {/* RIGHT — SEARCH ENGINE / SERP VISUAL */}

            <div className="relative mx-auto min-h-[450px] w-full max-w-[720px] sm:min-h-[520px]">
              {/* Ambient Glow */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[110px]" />

              <div className="pointer-events-none absolute left-[30%] top-[25%] h-32 w-32 rounded-full bg-violet-500/10 blur-[80px]" />

              {/* Main Ranking Dashboard */}
              <div className="absolute left-1/2 top-1/2 z-10 w-[94%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[26px] border border-white/10 bg-[#080b19]/95 p-4 shadow-[0_30px_90px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-5">
                {/* Header */}
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-500/10 ring-1 ring-blue-400/20">
                      <span className="text-[12px] text-blue-300">↗</span>
                    </div>

                    <div>
                      <p className="text-[7px] uppercase tracking-[0.18em] text-white/25">
                        Search Visibility
                      </p>

                      <h3 className="mt-0.5 text-sm font-semibold text-white/75 sm:text-base">
                        Ranking Climb
                      </h3>
                    </div>
                  </div>

                  {/* Ranking Status */}
                  <div className="flex items-center gap-1.5 rounded-full border border-emerald-400/15 bg-emerald-400/[0.035] px-2.5 py-1.5">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

                    <span className="text-[7px] text-emerald-300/70">
                      Ranking Up
                    </span>
                  </div>
                </div>

                {/* =========================
        MAIN RANKING AREA
    ========================== */}
                <div className="grid grid-cols-[90px_1fr] gap-3 sm:grid-cols-[120px_1fr] sm:gap-5">
                  {/* Ranking Scale */}
                  <div className="relative h-[300px] rounded-2xl border border-white/10 bg-white/[0.018] p-3">
                    <div className="flex h-full flex-col justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-[8px] font-semibold text-emerald-300">
                          #1
                        </span>
                        <div className="h-px flex-1 bg-emerald-400/20" />
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[7px] text-white/30">#10</span>
                        <div className="h-px flex-1 bg-white/5" />
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[7px] text-white/30">#25</span>
                        <div className="h-px flex-1 bg-white/5" />
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[7px] text-white/30">#50</span>
                        <div className="h-px flex-1 bg-white/5" />
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[7px] text-white/30">#75</span>
                        <div className="h-px flex-1 bg-white/5" />
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[7px] text-white/20">#100</span>
                        <div className="h-px flex-1 bg-white/5" />
                      </div>
                    </div>
                  </div>

                  {/* Ranking Graph */}
                  <div className="relative h-[300px] overflow-hidden rounded-2xl border border-white/10 bg-[#060914]">
                    {/* Grid */}
                    <div
                      className="pointer-events-none absolute inset-0 opacity-[0.035]"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                      }}
                    />

                    {/* SVG Ranking Path */}
                    <svg
                      viewBox="0 0 470 300"
                      className="absolute inset-0 h-full w-full"
                      preserveAspectRatio="none"
                      fill="none"
                    >
                      <defs>
                        <linearGradient
                          id="seoRankingLine"
                          x1="0"
                          y1="1"
                          x2="1"
                          y2="0"
                        >
                          <stop
                            offset="0%"
                            stopColor="#60a5fa"
                            stopOpacity="0.25"
                          />

                          <stop
                            offset="50%"
                            stopColor="#8b5cf6"
                            stopOpacity="0.75"
                          />

                          <stop
                            offset="100%"
                            stopColor="#34d399"
                            stopOpacity="1"
                          />
                        </linearGradient>

                        <linearGradient
                          id="seoRankingArea"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#60a5fa"
                            stopOpacity="0.16"
                          />

                          <stop
                            offset="100%"
                            stopColor="#60a5fa"
                            stopOpacity="0"
                          />
                        </linearGradient>

                        <filter id="seoGlow">
                          <feGaussianBlur stdDeviation="4" result="blur" />

                          <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>

                      {/* Ranking Area */}
                      <path
                        d="
              M20 260
              C75 245 90 225 135 205
              C175 187 190 165 235 145
              C275 125 300 100 335 78
              C375 55 405 35 450 20
              L450 300
              L20 300
              Z
            "
                        fill="url(#seoRankingArea)"
                      />

                      {/* Ranking Line */}
                      <path
                        d="
              M20 260
              C75 245 90 225 135 205
              C175 187 190 165 235 145
              C275 125 300 100 335 78
              C375 55 405 35 450 20
            "
                        stroke="url(#seoRankingLine)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        pathLength="1"
                        strokeDasharray="1"
                        className="animate-[seoDraw_4s_ease-in-out_infinite]"
                      />

                      {/* Rank Points */}

                      {/* 78 */}
                      <circle
                        cx="20"
                        cy="260"
                        r="5"
                        fill="#60a5fa"
                        filter="url(#seoGlow)"
                      />

                      {/* 54 */}
                      <circle
                        cx="135"
                        cy="205"
                        r="5"
                        fill="#60a5fa"
                        filter="url(#seoGlow)"
                      />

                      {/* 31 */}
                      <circle
                        cx="235"
                        cy="145"
                        r="5"
                        fill="#8b5cf6"
                        filter="url(#seoGlow)"
                      />

                      {/* 12 */}
                      <circle
                        cx="335"
                        cy="78"
                        r="5"
                        fill="#a78bfa"
                        filter="url(#seoGlow)"
                      />

                      {/* #1 */}
                      <circle
                        cx="450"
                        cy="20"
                        r="7"
                        fill="#34d399"
                        filter="url(#seoGlow)"
                        className="animate-pulse"
                      />

                      <circle
                        cx="450"
                        cy="20"
                        r="13"
                        fill="none"
                        stroke="#34d399"
                        strokeOpacity="0.25"
                        className="animate-ping"
                      />

                      {/* Moving Particle */}
                      <circle r="4" fill="#93c5fd" filter="url(#seoGlow)">
                        <animateMotion
                          dur="3.5s"
                          repeatCount="indefinite"
                          path="
                M20 260
                C75 245 90 225 135 205
                C175 187 190 165 235 145
                C275 125 300 100 335 78
                C375 55 405 35 450 20
              "
                        />
                      </circle>
                    </svg>

                    {/* Rank Labels */}
                    <div className="absolute bottom-3 left-3 rounded-lg border border-blue-400/15 bg-[#090c1b]/90 px-2 py-1 backdrop-blur-xl">
                      <span className="text-[7px] text-blue-300/70">#78</span>
                    </div>

                    <div className="absolute left-[30%] top-[62%] rounded-lg border border-blue-400/15 bg-[#090c1b]/90 px-2 py-1 backdrop-blur-xl">
                      <span className="text-[7px] text-blue-300/70">#54</span>
                    </div>

                    <div className="absolute left-[52%] top-[43%] rounded-lg border border-violet-400/15 bg-[#090c1b]/90 px-2 py-1 backdrop-blur-xl">
                      <span className="text-[7px] text-violet-300/70">#31</span>
                    </div>

                    <div className="absolute right-[23%] top-[18%] rounded-lg border border-violet-400/15 bg-[#090c1b]/90 px-2 py-1 backdrop-blur-xl">
                      <span className="text-[7px] text-violet-300/70">#12</span>
                    </div>

                    {/* #1 Result */}
                    <div className="absolute right-2 top-2 rounded-xl border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-2 shadow-[0_0_25px_rgba(52,211,153,0.12)] backdrop-blur-xl">
                      <div className="flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-400/10 text-[9px] font-bold text-emerald-300">
                          #1
                        </span>

                        <div>
                          <p className="text-[7px] font-semibold text-white/65">
                            Top Result
                          </p>

                          <p className="text-[6px] text-emerald-300/60">
                            Ranking achieved
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* =========================
        SEARCH RESULT CARDS
    ========================== */}
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {/* Result 1 */}
                  <div className="animate-[seoResult1_5s_ease-in-out_infinite] rounded-xl border border-white/10 bg-white/[0.018] p-2.5">
                    <div className="flex items-center gap-1.5">
                      <span className="flex h-5 w-5 items-center justify-center rounded-md bg-blue-400/10 text-[7px] text-blue-300">
                        01
                      </span>

                      <span className="text-[7px] text-white/45">
                        Search Result
                      </span>
                    </div>

                    <div className="mt-2 h-1.5 w-[85%] rounded-full bg-white/10" />
                    <div className="mt-1 h-1.5 w-[60%] rounded-full bg-white/5" />

                    <div className="mt-2 flex items-center gap-1">
                      <span className="h-1 w-1 rounded-full bg-emerald-400" />

                      <span className="text-[6px] text-emerald-300/50">
                        Ranking ↑
                      </span>
                    </div>
                  </div>

                  {/* Result 2 */}
                  <div className="animate-[seoResult2_5s_ease-in-out_infinite] rounded-xl border border-violet-400/10 bg-violet-400/[0.025] p-2.5">
                    <div className="flex items-center gap-1.5">
                      <span className="flex h-5 w-5 items-center justify-center rounded-md bg-violet-400/10 text-[7px] text-violet-300">
                        02
                      </span>

                      <span className="text-[7px] text-white/45">
                        Keyword Match
                      </span>
                    </div>

                    <div className="mt-2 h-1.5 w-[75%] rounded-full bg-white/10" />
                    <div className="mt-1 h-1.5 w-[55%] rounded-full bg-white/5" />

                    <div className="mt-2 flex items-center gap-1">
                      <span className="h-1 w-1 rounded-full bg-violet-400" />

                      <span className="text-[6px] text-violet-300/50">
                        Optimized
                      </span>
                    </div>
                  </div>

                  {/* Result 3 */}
                  <div className="animate-[seoResult3_5s_ease-in-out_infinite] rounded-xl border border-emerald-400/10 bg-emerald-400/[0.025] p-2.5">
                    <div className="flex items-center gap-1.5">
                      <span className="flex h-5 w-5 items-center justify-center rounded-md bg-emerald-400/10 text-[7px] text-emerald-300">
                        03
                      </span>

                      <span className="text-[7px] text-white/45">
                        Your Website
                      </span>
                    </div>

                    <div className="mt-2 h-1.5 w-[90%] rounded-full bg-white/10" />
                    <div className="mt-1 h-1.5 w-[65%] rounded-full bg-white/5" />

                    <div className="mt-2 flex items-center gap-1">
                      <span className="h-1 w-1 animate-pulse rounded-full bg-emerald-400" />

                      <span className="text-[6px] text-emerald-300/60">
                        Moving to #1
                      </span>
                    </div>
                  </div>
                </div>

                {/* =========================
        KEYWORD CHIPS
    ========================== */}
                <div className="mt-4 flex items-center justify-center">
                  <div className="relative h-9 w-full max-w-[480px]">
                    {/* Chip 1 */}
                    <div className="absolute left-[2%] top-0 animate-[keywordOrbit1_6s_ease-in-out_infinite] rounded-full border border-blue-400/15 bg-blue-400/[0.04] px-3 py-1.5">
                      <span className="text-[6px] text-blue-300/60">
                        web development
                      </span>
                    </div>

                    {/* Chip 2 */}
                    <div className="absolute left-[29%] top-2 animate-[keywordOrbit2_5s_ease-in-out_infinite] rounded-full border border-violet-400/15 bg-violet-400/[0.04] px-3 py-1.5">
                      <span className="text-[6px] text-violet-300/60">
                        digital agency
                      </span>
                    </div>

                    {/* Chip 3 */}
                    <div className="absolute right-[28%] top-0 animate-[keywordOrbit3_6s_ease-in-out_infinite] rounded-full border border-cyan-400/15 bg-cyan-400/[0.04] px-3 py-1.5">
                      <span className="text-[6px] text-cyan-300/60">
                        SEO services
                      </span>
                    </div>

                    {/* Chip 4 */}
                    <div className="absolute right-[2%] top-2 animate-[keywordOrbit4_5s_ease-in-out_infinite] rounded-full border border-emerald-400/15 bg-emerald-400/[0.04] px-3 py-1.5">
                      <span className="text-[6px] text-emerald-300/60">
                        top agency
                      </span>
                    </div>
                  </div>
                </div>

                {/* =========================
        BOTTOM STATUS
    ========================== */}
                <div className="mt-3 flex items-center justify-center">
                  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />

                    <span className="text-[7px] text-white/30">
                      Position 78 → 54 → 31 → 12 → #1
                    </span>
                  </div>
                </div>
              </div>

              {/* =========================
      LEFT FLOATING CARD
  ========================== */}
              <div className="absolute bottom-10 left-0 z-30 hidden rounded-xl border border-white/10 bg-[#090c1b]/95 px-3 py-2 shadow-xl backdrop-blur-xl sm:block">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-400/10">
                    <span className="text-[10px] text-violet-300">↑</span>
                  </div>

                  <div>
                    <p className="text-[8px] font-medium text-white/60">
                      Ranking Improved
                    </p>

                    <p className="text-[7px] text-violet-300/50">
                      +77 positions
                    </p>
                  </div>
                </div>
              </div>

              {/* =========================
      RIGHT FLOATING CARD
  ========================== */}
              <div className="absolute bottom-8 right-0 z-30 hidden rounded-xl border border-white/10 bg-[#090c1b]/95 px-3 py-2 shadow-xl backdrop-blur-xl sm:block">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-400/10">
                    <span className="text-[10px] text-emerald-300">#1</span>
                  </div>

                  <div>
                    <p className="text-[8px] font-medium text-white/60">
                      Search Position
                    </p>

                    <p className="text-[7px] text-emerald-300/50">
                      First page achieved
                    </p>
                  </div>
                </div>
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
          <div className="mb-20">
            <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9] sm:text-[11px]">
              Introduction
            </p>

            <h2 className="mt-4 m-0 max-w-[600px] text-[31px] font-bold leading-[1.08] tracking-[-.04em] text-[#101828] sm:text-[36px] lg:text-[36px]">
              Search Engine Optimization Built Around Business Growth.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-[24px] border border-gray-200 bg-[#f8faff] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,.07)]">
              <span className="text-[11px] font-bold text-[#1455d9]">
                01 / STRATEGY
              </span>

              <h3 className="mt-5 m-0 text-[20px] font-bold tracking-[-.025em] text-[#101828]">
                Build SEO around the business objective.
              </h3>

              <p className="mt-3 m-0 text-[13px] leading-6 text-gray-500">
                Akkurate Digital Solutions provides SEO as part of an integrated
                digital growth system. We begin with the business objective,
                audience and customer journey before deciding what should be
                created, optimized or measured.
              </p>
            </div>

            <div className="rounded-[24px] border border-gray-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,.08)]">
              <span className="text-[11px] font-bold text-[#1455d9]">
                02 / BUSINESS VALUE
              </span>

              <h3 className="mt-5 m-0 text-[20px] font-bold tracking-[-.025em] text-[#101828]">
                Make search work useful to the business.
              </h3>

              <p className="mt-3 m-0 text-[13px] leading-6 text-gray-500">
                The goal is not simply to deliver an asset or run a channel; it
                is to make the work useful to the business and connect search
                visibility with meaningful customer journeys.
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

              <h3 className="mt-3 m-0 max-w-[650px] text-[25px] font-bold leading-tight tracking-[-.03em] text-white sm:text-[25px]">
                Strategy first. Search second. Measurement throughout.
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
                ["02", "Build", "Search + content"],
                ["03", "Improve", "Signals + iteration"],
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
          <p className="m-0 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-300">
            The Business Problem We Solve
          </p>

          <h2 className="mt-4 m-0 text-[27px] font-bold leading-tight tracking-[-0.03em] text-white sm:text-[34px] lg:text-[42px]">
            SEO Should Support Business Growth, Not Rankings Alone.
          </h2>

          <p className="mx-auto mt-5 max-w-[900px] text-[14px] leading-7 text-gray-300 sm:text-[15px]">
            Many businesses publish content, redesign pages and build links
            without a unified search strategy. This can produce impressions
            without enquiries, traffic to low-value pages, keyword
            cannibalization, weak internal linking or technical barriers.
          </p>

          <p className="mx-auto mt-4 max-w-[900px] text-[14px] leading-7 text-gray-300 sm:text-[15px]">
            Akkurate connects technical foundations, content, intent, authority
            and conversion so SEO supports business growth rather than rankings
            alone.
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
          ANALYTICS
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#f7faff] px-5 py-12 sm:px-8 sm:py-20 lg:px-14 lg:py-15">
        <div className="pointer-events-none absolute -right-32 top-0 h-[380px] w-[380px] rounded-full bg-blue-100/60 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-[300px] w-[300px] rounded-full bg-violet-100/50 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1500px]">
          <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-center lg:gap-16">
            {/* LEFT */}

            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.15em] text-[#1455d9] shadow-sm">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#1455d9]" />
                Search Visibility
              </div>

              <h2 className="mt-5 m-0 text-[30px] font-bold leading-[1.08] tracking-[-.04em] text-[#101828] sm:text-[38px]">
                SEO is more than a
                <span className="block text-[#1455d9]">ranking position.</span>
              </h2>

              <p className="mt-5 max-w-[560px] text-[14px] leading-7 text-gray-600">
                A stronger search presence comes from the right mix of technical
                health, keyword relevance, useful content and pages that satisfy
                real customer intent.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3">
                {[
                  ["92", "Technical health"],
                  ["84%", "Content readiness"],
                  ["126", "Keywords mapped"],
                  ["78%", "Visibility signal"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-[18px] border border-gray-200 bg-white p-4 shadow-[0_8px_28px_rgba(15,23,42,.04)]"
                  >
                    <p className="m-0 text-[21px] font-bold tracking-[-.03em] text-[#101828]">
                      {value}
                    </p>

                    <p className="mt-1 m-0 text-[9px] font-medium uppercase tracking-[.1em] text-gray-400">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — SEO VISIBILITY MAP */}

            <div className="relative overflow-hidden rounded-[30px] border border-gray-200 bg-white p-5 shadow-[0_25px_70px_rgba(15,23,42,.09)] sm:p-7">
              <div className="flex flex-col gap-4 border-b border-gray-100 pb-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#073b91] text-white">
                      <span className="text-[12px] font-black">S</span>
                    </span>

                    <div>
                      <p className="m-0 text-[13px] font-bold text-[#101828]">
                        SEO Visibility Map
                      </p>

                      <p className="mt-1 m-0 text-[9px] text-gray-400">
                        Illustrative search performance view
                      </p>
                    </div>
                  </div>
                </div>

                <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-[8px] font-bold text-emerald-600">
                  Healthy
                </span>
              </div>

              <div className="mt-7 grid gap-6 md:grid-cols-[.85fr_1.15fr] md:items-center">
                {/* Donut */}

                <div className="relative mx-auto h-[220px] w-[220px]">
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background:
                        "conic-gradient(#1455d9 0deg 150deg, #8b7cf6 150deg 250deg, #60a5fa 250deg 315deg, #34d399 315deg 360deg)",
                    }}
                  />

                  <div className="absolute inset-[18px] rounded-full bg-white shadow-inner" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="m-0 text-[9px] font-bold uppercase tracking-[.14em] text-gray-400">
                        Visibility
                      </p>

                      <p className="mt-1 m-0 text-[36px] font-bold tracking-[-.05em] text-[#101828]">
                        78%
                      </p>

                      <p className="mt-1 m-0 text-[8px] font-semibold text-emerald-500">
                        ↑ improving
                      </p>
                    </div>
                  </div>

                  {/* orbit dots */}

                  <span className="absolute right-[12%] top-[17%] h-2.5 w-2.5 animate-pulse rounded-full bg-[#1455d9] shadow-[0_0_12px_rgba(20,85,217,.45)]" />
                  <span className="absolute bottom-[17%] left-[14%] h-2 w-2 animate-pulse rounded-full bg-violet-400" />
                  <span className="absolute left-[9%] top-[38%] h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                </div>

                {/* Legend / ranking distribution */}

                <div className="space-y-3">
                  <p className="m-0 text-[8px] font-bold uppercase tracking-[.14em] text-gray-400">
                    Ranking distribution
                  </p>

                  {[
                    ["Top 3", "42%", "bg-[#1455d9]"],
                    ["Top 10", "28%", "bg-violet-400"],
                    ["Top 20", "18%", "bg-blue-300"],
                    ["Beyond", "12%", "bg-emerald-400"],
                  ].map(([label, value, bar]) => (
                    <div
                      key={label}
                      className="rounded-xl border border-gray-100 bg-[#fbfdff] p-3"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className={`h-2 w-2 rounded-full ${bar}`} />

                          <span className="text-[9px] font-semibold text-[#101828]">
                            {label}
                          </span>
                        </div>

                        <span className="text-[9px] font-bold text-gray-500">
                          {value}
                        </span>
                      </div>

                      <div className="mt-2 h-1.5 rounded-full bg-gray-100">
                        <div
                          className={`h-full rounded-full ${bar}`}
                          style={{ width: value }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Search journey strip */}

              <div className="mt-6 rounded-[20px] bg-[#101828] p-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  {[
                    ["01", "Crawl", "Accessible"],
                    ["02", "Understand", "Relevant"],
                    ["03", "Rank", "Visible"],
                    ["04", "Convert", "Useful"],
                  ].map(([num, title, copy], index) => (
                    <React.Fragment key={num}>
                      <div className="flex items-center gap-2">
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-[7px] font-black text-blue-200">
                          {num}
                        </span>

                        <div>
                          <p className="m-0 text-[8px] font-bold text-white">
                            {title}
                          </p>

                          <p className="mt-0.5 m-0 text-[7px] text-gray-500">
                            {copy}
                          </p>
                        </div>
                      </div>

                      {index < 3 && (
                        <span className="hidden h-px w-5 bg-white/10 sm:block" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Bottom metrics */}

              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  ["Organic", "+32.8%"],
                  ["Relevance", "+18%"],
                  ["Depth", "+31%"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-xl bg-[#f7faff] p-3">
                    <p className="m-0 text-[8px] font-medium text-gray-400">
                      {label}
                    </p>

                    <p className="mt-1 m-0 text-[13px] font-bold text-[#1455d9]">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section
        id="seo-services"
        className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-20"
      >
        <div className="pointer-events-none absolute right-0 top-20 h-[320px] w-[320px] rounded-full bg-blue-50 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1500px]">
          <div className="grid gap-7 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#1455d9]" />

                <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9]">
                  SEO Services
                </p>
              </div>

              <h2 className="mt-4 m-0 max-w-[680px] text-[31px] font-bold leading-[1.06] tracking-[-.04em] text-[#101828] sm:text-[25px]">
                Build a search system that covers
                <span className="text-[#1455d9]"> the full journey.</span>
              </h2>
            </div>

            <p className="max-w-[520px] text-[13px] leading-7 text-gray-500 lg:justify-self-end">
              From technical foundations and keyword intent to content depth,
              local relevance and authority, each capability strengthens a
              different part of your organic search presence.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {seoServices.map((service, index) => (
              <article
                key={service.number}
                className="group relative overflow-hidden rounded-[26px] border border-gray-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,.035)] transition-all duration-500 hover:-translate-y-2 hover:border-blue-100 hover:shadow-[0_25px_60px_rgba(15,23,42,.09)] sm:p-7"
              >
                {/* SEO background motif */}

                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full border border-blue-100 opacity-60 transition duration-500 group-hover:scale-125" />

                <div className="pointer-events-none absolute right-3 top-3 h-20 w-20 rounded-full border border-dashed border-blue-100/80 transition duration-700 group-hover:rotate-90" />

                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f0f5ff] text-[10px] font-black text-[#1455d9] transition duration-300 group-hover:bg-[#073b91] group-hover:text-white">
                      {service.number}
                    </span>

                    <span className="text-[8px] font-bold uppercase tracking-[.13em] text-gray-400">
                      SEO / {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <span className="text-[18px] text-gray-300 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#1455d9]">
                    ↗
                  </span>
                </div>

                <h3 className="relative mt-7 m-0 max-w-[300px] text-[20px] font-bold leading-snug tracking-[-.02em] text-[#101828]">
                  {service.title}
                </h3>

                <p className="relative mt-3 m-0 text-[13px] leading-6 text-gray-500 sm:text-[14px]">
                  {service.description}
                </p>

                {/* SEO signal */}

                {/* <div className="relative mt-7 rounded-[18px] bg-[#f7faff] p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[7px] font-bold uppercase tracking-[.12em] text-gray-400">
                      Search signal
                    </span>

                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>

                  <div className="mt-3 flex items-end gap-1">
                    {[28, 42, 35, 52, 46, 64, 58, 72].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm bg-blue-100 transition-all duration-500 group-hover:bg-[#1455d9]"
                        style={{ height: `${height / 2}px` }}
                      />
                    ))}
                  </div>
                </div> */}

                <div className="relative mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
                  <span className="text-[8px] font-bold uppercase tracking-[.13em] text-gray-400 transition group-hover:text-[#1455d9]">
                    Explore capability
                  </span>

                  <span className="text-[11px] font-bold text-[#1455d9]">
                    →
                  </span>
                </div>
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
                Business outcomes
              </p>

              <h2 className="mt-3 m-0 text-[31px] font-bold leading-[1.08] tracking-[-.04em] text-[#101828] sm:text-[40px] lg:text-[48px]">
                Build the conditions for better discovery.
              </h2>

              <p className="mt-5 m-0 max-w-[540px] text-[14px] leading-7 text-gray-600">
                The exact outcome depends on the starting point, competition,
                audience, implementation and business model. We focus on
                building a stronger digital foundation and measuring the signals
                that matter.
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
          <p className="m-0 text-[10px] font-bold uppercase tracking-[0.18em] text-[#1455d9]">
            Who This Service Is For
          </p>

          <h2 className="mt-3 m-0 text-[29px] font-bold leading-tight tracking-[-0.03em] text-[#101828] sm:text-[36px] lg:text-[36px]">
            Search Engine Optimization Should Fit Your Business.
          </h2>

          <p className="mt-5 m-0 text-[14px] leading-7 text-gray-600 sm:text-[15px]">
            Search Engine Optimization (SEO) is relevant to businesses that have
            a clear reason to improve their digital presence, customer journey
            or growth engine. The page should qualify visitors rather than
            promise that every business needs the same package.
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

      <section className="relative overflow-hidden bg-[#0b1220] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-15">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-900/20 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1500px]">
          <div className="mx-auto max-w-[800px] text-center">
            <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-blue-300">
              How we work
            </p>

            <h2 className="mt-3 m-0 text-[31px] font-bold leading-[1.08] tracking-[-.04em] text-white sm:text-[40px] lg:text-[46px]">
              A clear path from discovery to iteration.
            </h2>

            <p className="mt-5 text-[13px] leading-7 text-gray-400 sm:text-[14px]">
              A structured process keeps strategy, creative, development and
              measurement connected.
            </p>
          </div>

          <div className="relative mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
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

      <section className="relative overflow-hidden bg-[#f7faff] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-15">
        <div className="pointer-events-none absolute -right-32 top-10 h-[360px] w-[360px] rounded-full bg-blue-100/50 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 -left-32 h-[320px] w-[320px] rounded-full bg-indigo-100/40 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1500px]">
          {/* Heading */}

          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#1455d9]" />

                <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1455d9] sm:text-[11px]">
                  Why Akkurate
                </p>
              </div>

              <h2 className="m-0 max-w-[650px] text-[32px] font-bold leading-[1.05] tracking-[-0.045em] text-[#101828] sm:text-[40px] lg:text-[50px]">
                More than a service.
                <span className="block text-[#1455d9]">A growth system.</span>
              </h2>
            </div>

            <div className="lg:pb-1">
              <p className="m-0 max-w-[650px] text-[14px] leading-7 text-gray-600 sm:text-[15px]">
                Digital growth rarely depends on one channel. We bring strategy,
                search, content, web and technology together when the customer
                journey needs a connected approach.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Strategy", "Search", "Content", "Digital"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-gray-500"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Capability area */}

          <div className="mt-12 grid gap-5 lg:grid-cols-[0.7fr_1.3fr]">
            {/* Left dark panel */}

            <div className="relative min-h-[420px] overflow-hidden rounded-[28px] bg-[#101828] p-7 shadow-[0_25px_70px_rgba(15,23,42,0.12)] sm:p-9">
              <div className="pointer-events-none absolute -right-24 -top-24 h-[260px] w-[260px] rounded-full border border-white/10" />

              <div className="pointer-events-none absolute -right-12 -top-12 h-[180px] w-[180px] rounded-full border border-white/10" />

              <div className="pointer-events-none absolute -bottom-28 -left-24 h-[250px] w-[250px] rounded-full bg-blue-600/10 blur-3xl" />

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-blue-300">
                      Akkurate Method
                    </span>

                    <span className="flex items-center gap-2 text-[9px] font-semibold text-white/40">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Connected
                    </span>
                  </div>

                  <h3 className="mt-8 max-w-[390px] text-[27px] font-bold leading-tight tracking-[-0.035em] text-white sm:text-[32px]">
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
                      <p className="m-0 text-[8px] font-bold uppercase tracking-[0.12em] text-blue-300">
                        Growth
                      </p>

                      <p className="mt-1 m-0 text-[11px] font-bold text-white">
                        Core
                      </p>
                    </div>
                  </div>

                  {[
                    ["SEO", "top-[5%] left-[15%]"],
                    ["CONTENT", "top-[5%] right-[15%]"],
                    ["WEB", "bottom-[5%] left-[15%]"],
                    ["LOCAL", "bottom-[5%] right-[15%]"],
                  ].map(([label, position]) => (
                    <div
                      key={label}
                      className={`absolute ${position} rounded-xl border border-white/10 bg-white/[0.06] px-3 py-2 backdrop-blur-md`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />

                        <span className="text-[8px] font-bold tracking-[0.08em] text-white/80">
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

            {/* Right cards */}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {whyChoose.map((item) => (
                <article
                  key={item.number}
                  className="group relative overflow-hidden rounded-[24px] border border-gray-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.035)] transition-all duration-500 hover:-translate-y-2 hover:border-[#1455d9] hover:shadow-[0_25px_55px_rgba(20,85,217,0.14)]"
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

                  <h3 className="relative mt-7 m-0 text-[19px] font-bold leading-snug tracking-[-0.02em] text-[#101828]">
                    {item.title}
                  </h3>

                  <p className="relative mt-3 m-0 text-[12px] leading-6 text-gray-500 sm:text-[13px]">
                    {item.description}
                  </p>

                  <div className="relative mt-7 flex items-center justify-between border-t border-gray-100 pt-4">
                    <span className="text-[8px] font-bold uppercase tracking-[0.14em] text-gray-400 transition group-hover:text-[#1455d9]">
                      Akkurate capability
                    </span>

                    <span className="h-1.5 w-1.5 rounded-full bg-gray-200 transition group-hover:bg-[#1455d9]" />
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Bottom statement */}

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
              className="inline-flex items-center text-[11px] font-bold text-[#1455d9] transition hover:gap-2"
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
              Expand your digital advertising reach with connected platforms
              that help you reach the right audience and drive meaningful
              results.
            </p>
          </div>

          {/* CARDS */}
          <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* =====================================================
          GOOGLE ADS CARD
      ===================================================== */}

            <Link
              to="/google-ads"
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
                    Google Ads
                  </h3>

                  <p className="mt-2 m-0 max-w-[270px] text-[10px] leading-[1.6] text-gray-400 sm:text-[11px]">
                    Reach high-intent customers with targeted Google advertising
                    campaigns designed to generate traffic, leads and
                    conversions.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[.12em] text-cyan-300/60 transition group-hover:text-cyan-300">
                  Explore service
                  <span className="h-px w-5 bg-cyan-400/30 transition-all duration-300 group-hover:w-8" />
                </div>
              </div>

              {/* GOOGLE ADS ORBIT */}
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
                <div className="absolute left-1/2 top-1/2 flex h-[56px] w-[72px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[17px] border border-cyan-300/25 bg-[#10202b] shadow-[0_0_35px_rgba(6,182,212,.25)]">
                  <span className="text-[8px] font-bold uppercase tracking-[.04em] text-cyan-300/70">
                    Google Ads
                  </span>
                </div>
              </div>

              {/* Arrow */}
              <div className="absolute bottom-4 right-4 z-30 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-500/10 text-[13px] text-cyan-300 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-cyan-500 group-hover:text-white">
                →
              </div>
            </Link>

            {/* =====================================================
          META ADS CARD
      ===================================================== */}

            <Link
              to="/meta-ads"
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
                    Meta Ads
                  </h3>

                  <p className="mt-2 m-0 max-w-[270px] text-[10px] leading-[1.6] text-gray-400 sm:text-[11px]">
                    Connect with your ideal audience through targeted Meta ad
                    campaigns built for awareness, engagement and conversions.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[.12em] text-violet-300/60 transition group-hover:text-violet-300">
                  Explore service
                  <span className="h-px w-5 bg-violet-400/30 transition-all duration-300 group-hover:w-8" />
                </div>
              </div>

              {/* META ADS ORBIT */}
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
                <div className="absolute left-1/2 top-1/2 flex h-[55px] w-[62px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-violet-300/30 bg-[#17152b] shadow-[0_0_35px_rgba(139,92,246,.3)]">
                  <span className="text-[8px] font-black uppercase tracking-[.04em] text-violet-300">
                    Meta Ads
                  </span>
                </div>
              </div>

              {/* Arrow */}
              <div className="absolute bottom-4 right-4 z-30 flex h-8 w-8 items-center justify-center rounded-full border border-violet-400/20 bg-violet-500/10 text-[13px] text-violet-300 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-violet-500 group-hover:text-white">
                →
              </div>
            </Link>

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
                    LinkedIn Ads
                  </h3>

                  <p className="mt-2 m-0 max-w-[275px] text-[10px] leading-[1.6] text-gray-400 sm:text-[11px]">
                    Reach decision-makers and professional audiences with
                    focused LinkedIn advertising campaigns built for quality
                    leads.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[.12em] text-orange-300/60 transition group-hover:text-orange-300">
                  Explore service
                  <span className="h-px w-5 bg-orange-400/30 transition-all duration-300 group-hover:w-8" />
                </div>
              </div>

              {/* LINKEDIN ADS ORBIT */}
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
                <div className="absolute left-1/2 top-1/2 flex h-[58px] w-[72px] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-xl border border-orange-300/25 bg-[#1a1719] shadow-[0_0_35px_rgba(249,115,22,.22)]">
                  <span className="text-[8px] font-black uppercase tracking-[.04em] text-orange-300">
                    LinkedIn
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

                <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
                  Frequently Asked Questions
                </p>
              </div>

              <h2 className="mt-4 m-0 max-w-[430px] text-[32px] font-bold leading-[1.05] tracking-[-.045em] text-[#101828] sm:text-[40px] lg:text-[40px]">
                Everything you need
                <span className="block text-[#1455d9]">to know about SEO.</span>
              </h2>

              <p className="mt-5 max-w-[430px] text-[12px] leading-6 text-gray-500 sm:text-[13px] sm:leading-7">
                Have questions about Search Engine Optimization, implementation
                or how it fits into your existing digital strategy? Find the
                answers below.
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
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                      →
                    </span>
                  </Link>
                </div>

                <div className="mt-5 border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] font-bold uppercase tracking-[.15em] text-gray-400">
                      SEO Strategy
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
                    SEO
                  </p>

                  <p className="mt-1 m-0 text-[8px] font-medium uppercase tracking-[.12em] text-gray-400">
                    Organic Visibility
                  </p>
                </div>

                <div className="rounded-[18px] border border-gray-200 bg-white px-4 py-4">
                  <p className="m-0 text-[20px] font-bold tracking-[-.03em] text-[#1455d9]">
                    SERP
                  </p>

                  <p className="mt-1 m-0 text-[8px] font-medium uppercase tracking-[.12em] text-gray-400">
                    Search Ready
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT FAQ */}

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
                <span className="text-[13px]">✓</span>
              </div>

              <p className="m-0 text-[10px] font-semibold text-gray-600 sm:text-[11px]">
                Can't find the answer you're looking for?
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

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto_auto] lg:items-center">
            <div>
              <p className="m-0 text-[9px] font-bold uppercase tracking-[.18em] text-white/70">
                Ready to grow?
              </p>

              <h3 className="mt-2 m-0 max-w-[600px] text-[26px] font-bold leading-[1.12] tracking-[-.035em] text-white sm:text-[32px]">
                Let's build your search growth system.
              </h3>

              <p className="mt-3 m-0 text-[12px] text-white/75 sm:text-[13px]">
                Strategy, SEO and digital growth — connected.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex w-fit items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-[11px] font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#073b91]"
            >
              Start Your Project
              <span className="ml-2 text-[15px]">→</span>
            </Link>

            <div className="flex items-center gap-6 border-t border-white/20 pt-5 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
              <div>
                <p className="m-0 text-[22px] font-bold text-white">500+</p>

                <p className="mt-1 m-0 text-[8px] text-white/65">Projects</p>
              </div>

              <div className="h-9 w-px bg-white/20" />

              <div>
                <p className="m-0 text-[22px] font-bold text-white">100+</p>

                <p className="mt-1 m-0 text-[8px] text-white/65">Clients</p>
              </div>

              <div className="h-9 w-px bg-white/20" />

              <div>
                <p className="m-0 text-[22px] font-bold text-white">24/7</p>

                <p className="mt-1 m-0 text-[8px] text-white/65">Support</p>
              </div>
            </div>
          </div>

          <div className="relative mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-4">
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[8px] text-blue-200">
                01
              </span>

              <span className="text-[9px] font-medium text-white/55">
                Discovery
              </span>
            </div>

            <span className="h-3 w-px bg-white/10" />

            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[8px] text-blue-200">
                02
              </span>

              <span className="text-[9px] font-medium text-white/55">
                Strategy
              </span>
            </div>

            <span className="h-3 w-px bg-white/10" />

            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[8px] text-blue-200">
                03
              </span>

              <span className="text-[9px] font-medium text-white/55">
                Growth
              </span>
            </div>

            <div className="ml-auto hidden items-center gap-2 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,.7)]" />

              <span className="text-[9px] font-medium text-white/45">
                Let's talk about your next move
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SEO;

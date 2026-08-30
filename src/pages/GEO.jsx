import React, { useState } from "react";
import { Link } from "react-router-dom";

/* =========================================================
   GEO PAGE
   Generative Engine Optimization
========================================================= */

const geoServices = [
  {
    number: "01",
    title: "AI Search Visibility Audit",
    description:
      "Understand how your business, services and expertise are represented across the website and wider digital presence.",
  },
  {
    number: "02",
    title: "Entity & Brand Clarity",
    description:
      "Clarify the relationships between your brand, services, industries, locations, expertise and customer questions.",
  },
  {
    number: "03",
    title: "Topic & Question Mapping",
    description:
      "Build useful content that directly explains concepts, answers questions and demonstrates first-hand knowledge.",
  },
  {
    number: "04",
    title: "Answer-Ready Content",
    description:
      "Connect pillar pages, service pages, industry pages, FAQs, guides and case studies into a coherent topic system.",
  },
  {
    number: "05",
    title: "Topical Authority Architecture",
    description:
      "Strengthen consistency of important business information across relevant digital properties.",
  },
  {
    number: "06",
    title: "Digital Presence Consistency",
    description:
      "Measure organic discovery, content performance and available AI-search visibility signals without promising guaranteed mentions.",
  },
];

const outcomes = [
  "Clearer brand and service context",
  "Stronger topical depth",
  "Better question coverage",
  "Connected content architecture",
  "More useful customer journeys",
  "A durable foundation for evolving search",
];

const processSteps = [
  {
    number: "01",
    title: "Discovery & Entity Mapping",
    description:
      "Understand the business objective, audience, current assets, constraints and success criteria before recommending the work.",
  },
  {
    number: "02",
    title: "Content & Topic Strategy",
    description:
      "Translate the objective into a practical strategy, scope, content/creative direction and measurement plan.",
  },
  {
    number: "03",
    title: "Page and Content Optimization",
    description:
      "Create, optimize, design, develop or launch the agreed work with brand and user requirements in mind.",
  },
  {
    number: "04",
    title: "Authority & Digital Presence",
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
      "What is included in your generative engine optimization (GEO) service?",
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

function GEO() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="w-full overflow-hidden bg-white text-[#111827]">
      {/* =====================================================
          HERO — PREMIUM ANIMATED VISUAL
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#f7faff] px-5 pb-16 pt-8 sm:px-8 sm:pb-20 sm:pt-10 lg:px-14 lg:pb-24 lg:pt-12">
        {/* Background */}
        <div className="pointer-events-none absolute -right-48 -top-48 h-[520px] w-[520px] rounded-full bg-blue-100/70 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-48 -left-48 h-[420px] w-[420px] rounded-full bg-indigo-100/50 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1600px] px-1 sm:px-2 lg:px-4 xl:px-6">
          {/* =================================================
        HERO GRID
        LEFT + RIGHT = EQUAL WIDTH
    ================================================= */}
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-10 xl:gap-14">
            {/* =================================================
          LEFT
      ================================================= */}
            <div className="max-w-[760px]">
              {/* Breadcrumb — MOVED INSIDE LEFT */}
              <div className="mb-5 flex flex-wrap items-center gap-2 text-[10px] font-medium text-gray-500 sm:mb-6 sm:text-[11px]">
                <Link to="/" className="transition hover:text-[#1455d9]">
                  Home
                </Link>

                <span>/</span>

                <span>Services</span>

                <span>/</span>

                <span className="text-[#1455d9]">GEO</span>
              </div>

              {/* Service Badge */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[.16em] text-[#1455d9] shadow-sm sm:text-[11px]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#1455d9]" />
                Generative Engine Optimization
              </div>

              {/* Heading */}
              <h1
                data-delay="1"
                className="m-0 max-w-[760px] text-[35px] font-bold leading-[1.04] tracking-[-.045em] text-[#101828] sm:text-[44px] md:text-[45px] lg:text-[45px] xl:text-[45px]"
              >
                Make Your Brand
                <span className="block text-[#1455d9]">
                  Easier for AI to Understand.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-[660px] text-[14px] leading-7 text-gray-600 sm:text-[15px] lg:text-[16px]">
                Improve your brand's visibility across generative search with
                original content, entity clarity, topical authority and strong
                SEO foundations — built around your audience, business objective
                and measurable customer journey.
              </p>

              {/* CTA */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#073b91] px-6 py-3 text-[13px] font-bold text-white shadow-[0_12px_30px_rgba(7,59,145,.18)] transition duration-300 hover:-translate-y-1 hover:bg-[#052f75]"
                >
                  Talk to Our Team
                  <span className="ml-2">→</span>
                </Link>

                <a
                  href="#geo-services"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-gray-200 bg-white px-6 py-3 text-[13px] font-semibold text-gray-700 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:text-[#1455d9]"
                >
                  Explore Services
                </a>
              </div>

              {/* Trust Row */}
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

            {/* =================================================
          RIGHT — ILLUSTRATED AI NETWORK / SEARCH VISIBILITY
      ================================================= */}
            <div className="relative mx-auto flex min-h-[440px] w-full max-w-[700px] items-center justify-center sm:min-h-[520px]">
              {/* Ambient Glow */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[100px]" />

              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[80px]" />

              {/* =================================================
            MAIN AI NETWORK
        ================================================= */}
              <div className="relative z-10 h-[400px] w-full sm:h-[470px]">
                {/* =================================================
              SVG NETWORK PATHS
          ================================================= */}
                <svg
                  viewBox="0 0 700 470"
                  className="absolute inset-0 h-full w-full"
                  fill="none"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    {/* Blue Glow */}
                    <filter id="geoBlueGlow">
                      <feGaussianBlur stdDeviation="4" result="blur" />

                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>

                    {/* Violet Glow */}
                    <filter id="geoVioletGlow">
                      <feGaussianBlur stdDeviation="5" result="blur" />

                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>

                    {/* Particle Gradient */}
                    <radialGradient id="geoParticle">
                      <stop offset="0%" stopColor="#93c5fd" />

                      <stop offset="60%" stopColor="#60a5fa" />

                      <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* User Query → AI */}
                  <path
                    d="M350 92 C350 115 350 128 350 148"
                    stroke="rgba(96,165,250,0.25)"
                    strokeWidth="1.5"
                    strokeDasharray="5 7"
                  />

                  {/* AI → ChatGPT */}
                  <path
                    d="M350 205 C300 225 235 245 170 275"
                    stroke="rgba(96,165,250,0.25)"
                    strokeWidth="1.5"
                    strokeDasharray="5 7"
                  />

                  {/* AI → Gemini */}
                  <path
                    d="M350 205 C350 230 350 245 350 275"
                    stroke="rgba(139,92,246,0.3)"
                    strokeWidth="1.5"
                    strokeDasharray="5 7"
                  />

                  {/* AI → AI Search */}
                  <path
                    d="M350 205 C400 225 465 245 530 275"
                    stroke="rgba(34,211,238,0.25)"
                    strokeWidth="1.5"
                    strokeDasharray="5 7"
                  />

                  {/* ChatGPT → Brand */}
                  <path
                    d="M170 320 C205 350 260 370 315 382"
                    stroke="rgba(96,165,250,0.3)"
                    strokeWidth="1.5"
                    strokeDasharray="5 7"
                  />

                  {/* Gemini → Brand */}
                  <path
                    d="M350 320 C350 345 350 355 350 382"
                    stroke="rgba(139,92,246,0.3)"
                    strokeWidth="1.5"
                    strokeDasharray="5 7"
                  />

                  {/* AI Search → Brand */}
                  <path
                    d="M530 320 C495 350 440 370 385 382"
                    stroke="rgba(34,211,238,0.3)"
                    strokeWidth="1.5"
                    strokeDasharray="5 7"
                  />

                  {/* =================================================
                ANIMATED PARTICLES
            ================================================= */}

                  {/* Query → AI */}
                  <circle
                    r="3"
                    fill="url(#geoParticle)"
                    filter="url(#geoBlueGlow)"
                  >
                    <animateMotion
                      dur="2.5s"
                      repeatCount="indefinite"
                      path="M350 92 C350 115 350 128 350 148"
                    />
                  </circle>

                  {/* AI → ChatGPT */}
                  <circle r="3" fill="url(#geoParticle)">
                    <animateMotion
                      dur="2.8s"
                      begin="0.4s"
                      repeatCount="indefinite"
                      path="M350 205 C300 225 235 245 170 275"
                    />
                  </circle>

                  {/* AI → Gemini */}
                  <circle r="3" fill="url(#geoParticle)">
                    <animateMotion
                      dur="2.4s"
                      begin="0.8s"
                      repeatCount="indefinite"
                      path="M350 205 C350 230 350 245 350 275"
                    />
                  </circle>

                  {/* AI → Search */}
                  <circle r="3" fill="url(#geoParticle)">
                    <animateMotion
                      dur="2.8s"
                      begin="1.1s"
                      repeatCount="indefinite"
                      path="M350 205 C400 225 465 245 530 275"
                    />
                  </circle>

                  {/* ChatGPT → Brand */}
                  <circle r="3" fill="url(#geoParticle)">
                    <animateMotion
                      dur="2.2s"
                      begin="0.5s"
                      repeatCount="indefinite"
                      path="M170 320 C205 350 260 370 315 382"
                    />
                  </circle>

                  {/* Gemini → Brand */}
                  <circle r="3" fill="url(#geoParticle)">
                    <animateMotion
                      dur="2s"
                      begin="1s"
                      repeatCount="indefinite"
                      path="M350 320 C350 345 350 355 350 382"
                    />
                  </circle>

                  {/* Search → Brand */}
                  <circle r="3" fill="url(#geoParticle)">
                    <animateMotion
                      dur="2.2s"
                      begin="1.5s"
                      repeatCount="indefinite"
                      path="M530 320 C495 350 440 370 385 382"
                    />
                  </circle>
                </svg>

                {/* =================================================
              USER QUERY CARD
          ================================================= */}
                <div className="absolute left-1/2 top-2 w-[220px] -translate-x-1/2">
                  <div className="rounded-2xl border border-blue-400/20 bg-[#090c1b]/95 p-3 shadow-[0_0_35px_rgba(59,130,246,0.12)] backdrop-blur-xl">
                    <div className="mb-2 flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-400/10">
                        <span className="text-[10px] text-blue-300">?</span>
                      </div>

                      <div>
                        <p className="text-[7px] uppercase tracking-[0.16em] text-white/25">
                          User Query
                        </p>

                        <p className="text-[9px] font-medium text-white/65">
                          Searching with AI...
                        </p>
                      </div>
                    </div>

                    {/* Typing Query */}
                    <div className="rounded-lg border border-white/5 bg-white/[0.025] px-3 py-2">
                      <div className="flex items-center gap-1">
                        <span className="text-[8px] text-white/50">
                          best digital agency for
                        </span>

                        <span className="h-3 w-px animate-pulse bg-blue-400" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* =================================================
              AI CORE
          ================================================= */}
                <div className="absolute left-1/2 top-[150px] -translate-x-1/2">
                  <div className="absolute -inset-5 animate-ping rounded-full border border-blue-400/10" />

                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/30 bg-gradient-to-br from-blue-500/20 to-violet-500/20 shadow-[0_0_45px_rgba(96,165,250,0.2)] backdrop-blur-xl">
                    <div className="absolute inset-2 rounded-xl bg-blue-400/5" />

                    <span className="relative text-[13px] font-bold tracking-tight text-blue-200">
                      AI
                    </span>
                  </div>

                  <div className="mt-2 text-center">
                    <span className="text-[7px] font-medium uppercase tracking-[0.2em] text-white/30">
                      Generative Engine
                    </span>
                  </div>
                </div>

                {/* =================================================
              CHATGPT NODE
          ================================================= */}
                <div className="absolute left-[4%] top-[270px] w-[145px] sm:left-[8%]">
                  <div className="rounded-2xl border border-blue-400/15 bg-[#090c1b]/95 p-3 shadow-xl backdrop-blur-xl">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-400/10 ring-1 ring-blue-400/15">
                        <span className="text-[11px] text-blue-300">✦</span>
                      </div>

                      <div>
                        <p className="text-[9px] font-semibold text-white/65">
                          ChatGPT
                        </p>

                        <p className="text-[7px] text-blue-300/50">
                          Answer generated
                        </p>
                      </div>
                    </div>

                    <div className="mt-3 space-y-1.5">
                      <div className="h-1.5 w-full rounded-full bg-white/7" />

                      <div className="h-1.5 w-[75%] rounded-full bg-white/5" />
                    </div>

                    <div className="mt-2 flex items-center gap-1">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />

                      <span className="text-[6px] text-white/25">
                        Processing
                      </span>
                    </div>
                  </div>
                </div>

                {/* =================================================
              GEMINI NODE
          ================================================= */}
                <div className="absolute left-1/2 top-[270px] w-[145px] -translate-x-1/2">
                  <div className="rounded-2xl border border-violet-400/15 bg-[#090c1b]/95 p-3 shadow-xl backdrop-blur-xl">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-violet-400/10 ring-1 ring-violet-400/15">
                        <span className="text-[11px] text-violet-300">✦</span>
                      </div>

                      <div>
                        <p className="text-[9px] font-semibold text-white/65">
                          Gemini
                        </p>

                        <p className="text-[7px] text-violet-300/50">
                          Answer generated
                        </p>
                      </div>
                    </div>

                    <div className="mt-3 space-y-1.5">
                      <div className="h-1.5 w-full rounded-full bg-white/7" />

                      <div className="h-1.5 w-[68%] rounded-full bg-white/5" />
                    </div>

                    <div className="mt-2 flex items-center gap-1">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />

                      <span className="text-[6px] text-white/25">
                        Processing
                      </span>
                    </div>
                  </div>
                </div>

                {/* =================================================
              AI SEARCH NODE
          ================================================= */}
                <div className="absolute right-[4%] top-[270px] w-[145px] sm:right-[8%]">
                  <div className="rounded-2xl border border-cyan-400/15 bg-[#090c1b]/95 p-3 shadow-xl backdrop-blur-xl">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-400/10 ring-1 ring-cyan-400/15">
                        <span className="text-[11px] text-cyan-300">◉</span>
                      </div>

                      <div>
                        <p className="text-[9px] font-semibold text-white/65">
                          AI Search
                        </p>

                        <p className="text-[7px] text-cyan-300/50">
                          Answer generated
                        </p>
                      </div>
                    </div>

                    <div className="mt-3 space-y-1.5">
                      <div className="h-1.5 w-full rounded-full bg-white/7" />

                      <div className="h-1.5 w-[80%] rounded-full bg-white/5" />
                    </div>

                    <div className="mt-2 flex items-center gap-1">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />

                      <span className="text-[6px] text-white/25">
                        Processing
                      </span>
                    </div>
                  </div>
                </div>

                {/* =================================================
              YOUR BRAND CENTER
          ================================================= */}
                <div className="absolute bottom-[18px] left-1/2 w-[220px] -translate-x-1/2">
                  <div className="relative rounded-2xl border border-emerald-400/25 bg-[#09120f]/95 p-3 shadow-[0_0_45px_rgba(52,211,153,0.15)] backdrop-blur-xl">
                    <div className="pointer-events-none absolute -inset-1 -z-10 rounded-2xl bg-emerald-400/5 blur-xl" />

                    <div className="flex items-center gap-3">
                      <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 ring-1 ring-emerald-400/20">
                        <span className="text-[12px] font-bold text-emerald-300">
                          A
                        </span>

                        <span className="absolute -right-1 -top-1 h-2.5 w-2.5 animate-ping rounded-full bg-emerald-400/60" />
                      </div>

                      <div className="flex-1">
                        <p className="text-[7px] uppercase tracking-[0.18em] text-emerald-300/45">
                          AI Recommended
                        </p>

                        <p className="mt-0.5 text-[11px] font-semibold text-white/75">
                          Your Brand
                        </p>

                        <p className="mt-0.5 text-[7px] text-white/30">
                          Mentioned across AI answers
                        </p>
                      </div>

                      <div className="rounded-full border border-emerald-400/15 bg-emerald-400/5 px-2 py-1">
                        <span className="text-[6px] font-medium text-emerald-300/70">
                          TOP
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* =================================================
              FLOATING AI ANSWER CARD
          ================================================= */}
                <div className="absolute -right-1 bottom-[120px] z-30 hidden animate-[bounce_4s_ease-in-out_infinite] rounded-xl border border-white/10 bg-[#090c1b]/95 p-2.5 shadow-xl backdrop-blur-xl sm:block">
                  <div className="flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-blue-400/10">
                      <span className="text-[9px] text-blue-300">AI</span>
                    </div>

                    <div>
                      <p className="text-[7px] font-medium text-white/60">
                        Answer Card
                      </p>

                      <p className="text-[6px] text-emerald-300/50">
                        Brand found ✓
                      </p>
                    </div>
                  </div>
                </div>

                {/* =================================================
              LEFT FLOATING STATUS
          ================================================= */}
                <div className="absolute -left-1 bottom-[125px] z-30 hidden animate-[bounce_5s_ease-in-out_infinite] rounded-xl border border-white/10 bg-[#090c1b]/95 p-2.5 shadow-xl backdrop-blur-xl sm:block">
                  <div className="flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-violet-400/10">
                      <span className="text-[9px] text-violet-300">↗</span>
                    </div>

                    <div>
                      <p className="text-[7px] font-medium text-white/60">
                        Visibility
                      </p>

                      <p className="text-[6px] text-violet-300/50">
                        Increasing
                      </p>
                    </div>
                  </div>
                </div>

                {/* =================================================
              PARTICLE FIELD
          ================================================= */}
                <div className="pointer-events-none absolute inset-0">
                  <span className="absolute left-[22%] top-[35%] h-1 w-1 animate-ping rounded-full bg-blue-400/60" />

                  <span className="absolute left-[72%] top-[43%] h-1 w-1 animate-pulse rounded-full bg-violet-400/60" />

                  <span className="absolute left-[31%] top-[68%] h-1 w-1 animate-ping rounded-full bg-cyan-400/60" />

                  <span className="absolute right-[28%] top-[65%] h-1 w-1 animate-pulse rounded-full bg-emerald-400/60" />

                  <span className="absolute left-[48%] top-[18%] h-1 w-1 animate-pulse rounded-full bg-blue-300/50" />
                </div>

                {/* =================================================
              BOTTOM LABEL
          ================================================= */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#090c1b]/90 px-4 py-2 backdrop-blur-xl">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

                    <span className="text-[7px] text-white/30">
                      AI visibility network active
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION — BUSINESS VALUE
      ===================================================== */}
      <section className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-15">
        <div className="pointer-events-none absolute right-0 top-0 h-[320px] w-[320px] rounded-full bg-blue-50 blur-3xl" />

        <div className="relative mx-auto grid w-full max-w-[1500px] gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-end lg:gap-20">
          <div className="mb-9">
            <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9] sm:text-[11px]">
              Built for the new search landscape
            </p>
            <h2 className="mt-4 m-0 max-w-[600px] text-[31px] font-bold leading-[1.08] tracking-[-.04em] text-[#101828] sm:text-[38px] lg:text-[40px]">
              GEO that connects visibility with business growth.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-[24px] border border-gray-200 bg-[#f8faff] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,.07)]">
              <span className="text-[11px] font-bold text-[#1455d9]">
                01 / CLARITY
              </span>
              <h3 className="mt-5 m-0 text-[20px] font-bold tracking-[-.025em] text-[#101828]">
                Make your expertise easy to understand.
              </h3>
              <p className="mt-3 m-0 text-[13px] leading-6 text-gray-500">
                Build clearer relationships between your brand, services,
                topics, industries and the questions customers actually ask.
              </p>
            </div>

            <div className="rounded-[24px] border border-gray-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,.08)]">
              <span className="text-[11px] font-bold text-[#1455d9]">
                02 / AUTHORITY
              </span>
              <h3 className="mt-5 m-0 text-[20px] font-bold tracking-[-.025em] text-[#101828]">
                Turn content into a connected system.
              </h3>
              <p className="mt-3 m-0 text-[13px] leading-6 text-gray-500">
                Connect service pages, guides, FAQs, case studies and supporting
                content into a deeper topical architecture.
              </p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto mt-10 max-w-[1500px] rounded-[28px] border border-gray-200 bg-[#101828] p-6 shadow-[0_25px_70px_rgba(15,23,42,.12)] sm:p-8 lg:p-10">
          <div className="grid gap-7 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div>
              <p className="m-0 text-[10px] font-bold uppercase tracking-[.18em] text-blue-300">
                The Akkurate approach
              </p>
              <h3 className="mt-3 m-0 max-w-[650px] text-[25px] font-bold leading-tight tracking-[-.03em] text-white sm:text-[25px]">
                Strategy first. Content second. Measurement throughout.
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
                ["02", "Build", "Topics + content"],
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

      <section
        className="
          bg-[#101828]

          px-14
          py-16

          sm:py-20

          lg:py-20
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-[1200px]

            px-4

            text-center

            sm:px-6

            lg:px-8
          "
        >
          <p
            className="
              m-0

              text-[10px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-blue-300

              sm:text-[11px]
            "
          >
            The Business Problem We Solve
          </p>

          <h2
            className="
              mt-4
              m-0

              text-[27px]
              font-bold
              leading-tight
              tracking-[-0.03em]
              text-white

              sm:text-[34px]

              lg:text-[42px]
            "
          >
            Help AI Systems and Customers Understand Your Business
          </h2>

          <p
            className="
              mx-auto
              mt-5

              max-w-[850px]

              text-[14px]
              leading-7
              text-gray-300

              sm:text-[15px]
              sm:leading-7
            "
          >
            Generative search can synthesize information from multiple sources.
            A business with thin service pages, unclear terminology,
            inconsistent brand information or weak topical depth can be harder
            for systems and customers to understand.
          </p>

          <p
            className="
              mx-auto
              mt-4

              max-w-[850px]

              text-[14px]
              leading-7
              text-gray-300

              sm:text-[15px]
              sm:leading-7
            "
          >
            Akkurate approaches GEO as a practical extension of SEO, content
            strategy, brand clarity and digital authority — not as a shortcut or
            ranking hack.
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
          ANALYTICS — MID PAGE GRAPH
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#f7faff] px-5 py-10 sm:px-8 sm:py-20 lg:px-14 lg:py-15">
        <div className="mx-auto w-full max-w-[1500px]">
          <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-center lg:gap-16">
            <div>
              <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9]">
                Performance / Analytics
              </p>
              <h2 className="mt-3 m-0 text-[30px] font-bold leading-[1.08] tracking-[-.04em] text-[#101828] sm:text-[38px] lg:text-[37px]">
                See how your digital presence is getting stronger.
              </h2>
              <p className="mt-5 max-w-[560px] text-[14px] leading-7 text-gray-600">
                GEO should not be treated as a one-time content task. Track the
                signals that matter — topic coverage, entity clarity, content
                depth and qualified discovery — then use them to prioritize the
                next move.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3">
                {[
                  ["78%", "Visibility signal"],
                  ["126", "Topics mapped"],
                  ["92", "Entity clarity"],
                  ["84%", "Content readiness"],
                ].map(([value, label], index) => (
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

            <div className="rounded-[28px] border border-gray-200 bg-white p-4 shadow-[0_25px_70px_rgba(15,23,42,.08)] sm:p-6">
              {/* HEADER */}
              <div className="flex flex-col gap-3 border-b border-gray-100 pb-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="m-0 text-[13px] font-bold text-[#101828]">
                    AI Search Visibility Trend
                  </p>

                  <p className="mt-1 m-0 text-[10px] text-gray-400">
                    Illustrative GEO performance view
                  </p>
                </div>

                <div className="flex items-center gap-4 text-[9px] font-semibold text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <i className="h-2 w-2 rounded-full bg-[#1455d9]" />
                    AI Visibility
                  </span>

                  <span className="flex items-center gap-1.5">
                    <i className="h-2 w-2 rounded-full bg-violet-400" />
                    Brand Mentions
                  </span>
                </div>
              </div>

              {/* =================================================
      GEO ANIMATED CHART
  ================================================= */}

              <div className="relative mt-6 h-[260px] overflow-hidden rounded-2xl bg-[#fbfdff] p-2">
                {/* GRID */}

                <div className="absolute inset-x-4 top-[20%] border-t border-dashed border-gray-200" />

                <div className="absolute inset-x-4 top-[45%] border-t border-dashed border-gray-200" />

                <div className="absolute inset-x-4 top-[70%] border-t border-dashed border-gray-200" />

                <div className="absolute inset-x-4 top-[95%] border-t border-dashed border-gray-200" />

                {/* CHART */}

                <svg
                  viewBox="0 0 760 260"
                  className="absolute inset-0 h-full w-full"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient
                      id="geoVisibilityFill"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#1455d9" stopOpacity=".18" />

                      <stop offset="100%" stopColor="#1455d9" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* AI VISIBILITY AREA */}

                  <path
                    d="
          M0 215
          C45 208 70 198 110 202
          S165 181 205 188
          S255 165 300 170
          S355 142 395 151
          S445 125 490 132
          S540 105 580 112
          S640 82 680 90
          S725 55 760 42
          L760 260
          L0 260
          Z
        "
                    fill="url(#geoVisibilityFill)"
                  />

                  {/* AI VISIBILITY LINE */}

                  <path
                    d="
          M0 215
          C45 208 70 198 110 202
          S165 181 205 188
          S255 165 300 170
          S355 142 395 151
          S445 125 490 132
          S540 105 580 112
          S640 82 680 90
          S725 55 760 42
        "
                    fill="none"
                    stroke="#1455d9"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="1000"
                    strokeDashoffset="1000"
                    className="animate-[geoDraw_3s_ease-out_forwards]"
                  />

                  {/* BRAND MENTION LINE */}

                  <path
                    d="
          M0 230
          C45 224 75 215 115 220
          S175 202 215 208
          S265 190 310 195
          S365 175 410 181
          S465 158 505 165
          S555 145 595 151
          S650 125 695 132
          S735 112 760 104
        "
                    fill="none"
                    stroke="#8b7cf6"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="8 8"
                    opacity=".8"
                    className="animate-[geoDash_2.5s_linear_infinite]"
                  />

                  {/* MOVING AI SIGNAL */}

                  <circle r="6" fill="#1455d9">
                    <animateMotion
                      dur="4s"
                      repeatCount="indefinite"
                      path="
            M0 215
            C45 208 70 198 110 202
            S165 181 205 188
            S255 165 300 170
            S355 142 395 151
            S445 125 490 132
            S540 105 580 112
            S640 82 680 90
            S725 55 760 42
          "
                    />
                  </circle>

                  {/* END SIGNAL */}

                  <circle
                    cx="760"
                    cy="42"
                    r="6"
                    fill="#073b91"
                    className="animate-pulse"
                  />
                </svg>

                {/* LIVE STATUS */}

                <div className="absolute left-5 top-5 flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1.5 shadow-sm backdrop-blur">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

                  <span className="text-[7px] font-semibold text-gray-500">
                    AI SEARCH SIGNALS
                  </span>
                </div>

                {/* CURRENT SCORE */}

                <div className="absolute right-5 top-5 rounded-xl border border-blue-100 bg-white/90 px-3 py-2 shadow-sm backdrop-blur">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-[#1455d9]" />

                    <span className="text-[10px] font-bold text-[#1455d9]">
                      +42.8%
                    </span>
                  </div>

                  <p className="mt-1 text-[7px] text-gray-400">AI visibility</p>
                </div>

                {/* WEEK LABELS */}

                <div className="absolute bottom-3 left-4 right-4 flex justify-between text-[9px] font-medium text-gray-400">
                  <span>W1</span>
                  <span>W2</span>
                  <span>W3</span>
                  <span>W4</span>
                  <span>W5</span>
                  <span>W6</span>
                  <span>W7</span>
                  <span>W8</span>
                </div>
              </div>

              {/* =================================================
      GEO METRICS
  ================================================= */}

              <div className="mt-4 grid grid-cols-3 gap-3">
                {/* AI MENTIONS */}

                <div className="rounded-xl bg-[#f7faff] p-3">
                  <p className="m-0 text-[9px] font-medium text-gray-400">
                    AI Mentions
                  </p>

                  <p className="mt-1 m-0 text-[14px] font-bold text-[#1455d9]">
                    184
                  </p>

                  <p className="mt-1 m-0 text-[7px] font-semibold text-emerald-500">
                    ↑ 32.4%
                  </p>
                </div>

                {/* PROMPT COVERAGE */}

                <div className="rounded-xl bg-[#f7faff] p-3">
                  <p className="m-0 text-[9px] font-medium text-gray-400">
                    Prompt Coverage
                  </p>

                  <p className="mt-1 m-0 text-[14px] font-bold text-[#1455d9]">
                    76%
                  </p>

                  <p className="mt-1 m-0 text-[7px] font-semibold text-emerald-500">
                    ↑ 18.6%
                  </p>
                </div>

                {/* AI VISIBILITY */}

                <div className="rounded-xl bg-[#f7faff] p-3">
                  <p className="m-0 text-[9px] font-medium text-gray-400">
                    AI Visibility
                  </p>

                  <p className="mt-1 m-0 text-[14px] font-bold text-[#1455d9]">
                    68%
                  </p>

                  <p className="mt-1 m-0 text-[7px] font-semibold text-emerald-500">
                    ↑ 24.8%
                  </p>
                </div>
              </div>

              {/* =================================================
      GEO SIGNAL FLOW
  ================================================= */}

              <div className="mt-4 flex items-center justify-between rounded-xl bg-[#f7faff] px-4 py-3">
                <div>
                  <p className="m-0 text-[8px] font-semibold text-gray-500">
                    Generative Search Performance
                  </p>

                  <p className="mt-1 m-0 text-[7px] text-gray-400">
                    Visibility → Mentions → Citations → Brand Discovery
                  </p>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

                  <span className="text-[8px] font-bold text-emerald-500">
                    Improving
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES — CAPABILITY SYSTEM
      ===================================================== */}
      <section
        id="geo-services"
        className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-15"
      >
        <div className="mx-auto w-full max-w-[1500px]">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[760px]">
              <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9] sm:text-[11px]">
                Our services
              </p>
              <h2 className="mt-3 m-0 text-[30px] font-bold leading-[1.08] tracking-[-.04em] text-[#101828] sm:text-[38px] lg:text-[37px]">
                A complete GEO capability, not a single tactic.
              </h2>
            </div>
            <p className="max-w-[420px] text-[13px] leading-6 text-gray-500">
              Each capability is designed to work independently or as part of a
              connected search, content and digital-growth program.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {geoServices.map((service, index) => (
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
                Discuss your growth goal <span className="ml-2">→</span>
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

      <section
        className="
          relative
          px-5
          py-16
          sm:px-8

          sm:py-20

          lg:py-15
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-[950px]

            px-4

            text-center

            sm:px-6

            lg:px-8
          "
        >
          <p
            className="
              m-0

              text-[10px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-[#1455d9]
            "
          >
            Who This Service Is For
          </p>

          <h2
            className="
              mt-3
              m-0

              text-[29px]
              font-bold
              leading-tight
              tracking-[-0.03em]
              text-[#101828]

              sm:text-[36px]

              lg:text-[42px]
            "
          >
            GEO Should Fit Your Business
          </h2>

          <p
            className="
              mt-5
              m-0

              text-[14px]
              leading-7
              text-gray-600

              sm:text-[15px]
              sm:leading-7
            "
          >
            Generative Engine Optimization (GEO) is relevant to businesses that
            have a clear reason to improve their digital presence, customer
            journey or growth engine.
          </p>

          <p
            className="
              mt-4
              m-0

              text-[14px]
              leading-7
              text-gray-600

              sm:text-[15px]
              sm:leading-7
            "
          >
            The right approach depends on the starting point. Akkurate can
            recommend a focused scope, a broader integrated program or a
            different service when that is more appropriate.
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
            <h2 className="mt-3 m-0 text-[31px] font-bold leading-[1.08] tracking-[-.04em] text-white sm:text-[40px] lg:text-[40px]">
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
        {/* Background decoration */}
        <div className="pointer-events-none absolute -right-32 top-10 h-[360px] w-[360px] rounded-full bg-blue-100/50 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 h-[320px] w-[320px] rounded-full bg-indigo-100/40 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1500px]">
          {/* Section heading */}
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#1455d9]" />
                <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1455d9] sm:text-[11px]">
                  Why Akkurate
                </p>
              </div>

              <h2
                className="
            m-0
            max-w-[650px]
            text-[32px]
            font-bold
            leading-[1.05]
            tracking-[-0.045em]
            text-[#101828]
            sm:text-[40px]
            lg:text-[50px]
          "
              >
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
                <span className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-gray-500">
                  Strategy
                </span>

                <span className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-gray-500">
                  Search
                </span>

                <span className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-gray-500">
                  Content
                </span>

                <span className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-gray-500">
                  Digital
                </span>
              </div>
            </div>
          </div>

          {/* Main capability area */}
          <div className="mt-12 grid gap-5 lg:grid-cols-[0.7fr_1.3fr]">
            {/* Left visual panel */}
            <div
              className="
          relative
          min-h-[420px]
          overflow-hidden
          rounded-[28px]
          bg-[#101828]
          p-7
          shadow-[0_25px_70px_rgba(15,23,42,0.12)]
          sm:p-9
        "
            >
              {/* Decorative circles */}
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
                  {/* Lines */}
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

                  {/* Nodes */}
                  {[
                    ["SEO", "top-[5%] left-[15%]"],
                    ["GEO", "top-[5%] right-[15%]"],
                    ["WEB", "bottom-[5%] left-[15%]"],
                    ["CONTENT", "bottom-[5%] right-[15%]"],
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
              {whyChoose.map((item, index) => (
                <article
                  key={item.number}
                  className="
              group
              relative
              overflow-hidden
              rounded-[24px]
              border
              border-gray-200
              bg-white
              p-6
              shadow-[0_8px_30px_rgba(15,23,42,0.035)]
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-[#1455d9]
              hover:shadow-[0_25px_55px_rgba(20,85,217,0.14)]
            "
                >
                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-blue-50 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

                  {/* Number + arrow */}
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

                  {/* Bottom indicator */}
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

      <section className="relative overflow-hidden bg-[#050713] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-5">
        {/* Background glow */}
        <div className="pointer-events-none absolute -left-40 top-10 h-[350px] w-[350px] rounded-full bg-violet-600/10 blur-[110px]" />

        <div className="pointer-events-none absolute -right-40 top-[30%] h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="pointer-events-none absolute left-[42%] bottom-0 h-[300px] w-[300px] rounded-full bg-cyan-500/5 blur-[100px]" />

        <div className="relative mx-auto w-full max-w-[1500px]">
          {/* =====================================================
        HEADER
    ===================================================== */}

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
              Extend your GEO strategy with connected digital capabilities that
              strengthen discovery, engagement and conversion.
            </p>
          </div>

          {/* =====================================================
        CARDS
    ===================================================== */}

          <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* =====================================================
          AEO CARD
      ===================================================== */}

            <Link
              to="/aeo"
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
                    AEO
                  </h3>

                  <p className="mt-2 m-0 max-w-[270px] text-[10px] leading-[1.6] text-gray-400 sm:text-[11px]">
                    Structure your content to answer high-intent questions
                    across answer experiences.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[.12em] text-cyan-300/60 transition group-hover:text-cyan-300">
                  Explore service
                  <span className="h-px w-5 bg-cyan-400/30 transition-all duration-300 group-hover:w-8" />
                </div>
              </div>

              {/* =================================================
            AEO ORBIT VISUAL
        ================================================= */}

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

                {/* Center answer box */}
                <div className="absolute left-1/2 top-1/2 flex h-[56px] w-[56px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[17px] border border-cyan-300/25 bg-[#10202b] shadow-[0_0_35px_rgba(6,182,212,.25)]">
                  <div className="text-center">
                    <span className="text-[14px] font-bold uppercase tracking-[.1em] text-cyan-300/70">
                      AEO
                    </span>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="absolute bottom-4 right-4 z-30 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-500/10 text-[13px] text-cyan-300 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-cyan-500 group-hover:text-white">
                →
              </div>
            </Link>

            {/* =====================================================
          SEO CARD
      ===================================================== */}

            <Link
              to="/seo"
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
              {/* Glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-[190px] w-[190px] rounded-full bg-violet-600/15 blur-[65px] transition duration-700 group-hover:bg-violet-500/25" />

              {/* LEFT CONTENT */}
              <div className="relative z-20 flex h-full w-[58%] flex-col justify-between">
                <div>
                  <h3 className="mt-4 m-0 text-[17px] font-bold tracking-[-.025em] text-white sm:text-[18px]">
                    SEO
                  </h3>

                  <p className="mt-2 m-0 max-w-[270px] text-[10px] leading-[1.6] text-gray-400 sm:text-[11px]">
                    Build stronger organic visibility with technical, content
                    and authority-led search strategies.
                  </p>
                </div>

                {/* Bottom label */}
                <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[.12em] text-violet-300/60 transition group-hover:text-violet-300">
                  Explore service
                  <span className="h-px w-5 bg-violet-400/30 transition-all duration-300 group-hover:w-8" />
                </div>
              </div>

              {/* =================================================
            SEO ORBIT VISUAL
        ================================================= */}

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
                <div className="absolute left-1/2 top-1/2 flex h-[55px] w-[55px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-violet-300/30 bg-[#17152b] shadow-[0_0_35px_rgba(139,92,246,.3)]">
                  <span className="text-[14px] font-black text-violet-300">
                    SEO
                  </span>
                </div>
              </div>

              {/* Arrow */}
              <div className="absolute bottom-4 right-4 z-30 flex h-8 w-8 items-center justify-center rounded-full border border-violet-400/20 bg-violet-500/10 text-[13px] text-violet-300 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-violet-500 group-hover:text-white">
                →
              </div>
            </Link>

            {/* =====================================================
          Google ADS
      ===================================================== */}

            <Link
              to="/GoogleAds"
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
                    Google ADS
                  </h3>

                  <p className="mt-2 m-0 max-w-[275px] text-[10px] leading-[1.6] text-gray-400 sm:text-[11px]">
                    Build fast, scalable digital experiences designed for
                    visibility, usability and conversion.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[.12em] text-orange-300/60 transition group-hover:text-orange-300">
                  Explore service
                  <span className="h-px w-5 bg-orange-400/30 transition-all duration-300 group-hover:w-8" />
                </div>
              </div>

              {/* =================================================
            WEBSITE ORBIT VISUAL
        ================================================= */}

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

                {/* Website window */}
                <div className="absolute left-1/2 top-1/2 h-[58px] w-[75px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border border-orange-300/25 bg-[#1a1719] shadow-[0_0_35px_rgba(249,115,22,.22)]">
                  {/* browser top */}
                  <div className="flex h-3.5 items-center gap-1 border-b border-white/10 px-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-300/70" />
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-300/40" />
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-300/20" />
                  </div>

                  {/* page content */}
                  <div className="p-2">
                    <div className="h-1.5 w-8 rounded-full bg-orange-300/50" />

                    <div className="mt-2 h-1 w-12 rounded-full bg-white/10" />

                    <div className="mt-1 h-1 w-9 rounded-full bg-white/10" />

                    <div className="mt-3 h-3 w-10 rounded-md bg-orange-400/20" />
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="absolute bottom-4 right-4 z-30 flex h-8 w-8 items-center justify-center rounded-full border border-orange-400/20 bg-orange-500/10 text-[13px] text-orange-300 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-orange-500 group-hover:text-white">
                →
              </div>
            </Link>
          </div>

          {/* =====================================================
        COMPACT CTA
    ===================================================== */}
        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#f7faff] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
        {/* Background decoration */}
        <div className="pointer-events-none absolute -left-32 top-20 h-[300px] w-[300px] rounded-full bg-blue-100/60 blur-3xl" />

        <div className="pointer-events-none absolute -right-32 bottom-0 h-[350px] w-[350px] rounded-full bg-indigo-100/50 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1250px]">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            {/* =====================================================
          LEFT CONTENT
      ===================================================== */}

            <div className="lg:sticky lg:top-24 lg:self-start">
              {/* Label */}
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1455d9] shadow-[0_0_12px_rgba(20,85,217,.5)]" />

                <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
                  Frequently Asked Questions
                </p>
              </div>

              {/* Heading */}
              <h2
                className="
            mt-4
            m-0
            max-w-[430px]
            text-[32px]
            font-bold
            leading-[1.05]
            tracking-[-.045em]
            text-[#101828]
            sm:text-[40px]
            lg:text-[40px]
          "
              >
                Everything you need
                <span className="block text-[#1455d9]">to know about GEO.</span>
              </h2>

              {/* Description */}
              <p className="mt-5 max-w-[430px] text-[12px] leading-6 text-gray-500 sm:text-[13px] sm:leading-7">
                Have questions about Generative Engine Optimization,
                implementation or how it fits into your existing digital
                strategy? Find the answers below.
              </p>

              {/* Mini information card */}
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

                {/* Bottom line */}
                <div className="mt-5 border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] font-bold uppercase tracking-[.15em] text-gray-400">
                      GEO Strategy
                    </span>

                    <span className="flex items-center gap-1.5 text-[8px] font-semibold text-emerald-500">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                      Available
                    </span>
                  </div>
                </div>
              </div>

              {/* Small stats */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-[18px] border border-gray-200 bg-white px-4 py-4">
                  <p className="m-0 text-[20px] font-bold tracking-[-.03em] text-[#101828]">
                    GEO
                  </p>

                  <p className="mt-1 m-0 text-[8px] font-medium uppercase tracking-[.12em] text-gray-400">
                    AI Visibility
                  </p>
                </div>

                <div className="rounded-[18px] border border-gray-200 bg-white px-4 py-4">
                  <p className="m-0 text-[20px] font-bold tracking-[-.03em] text-[#1455d9]">
                    AI
                  </p>

                  <p className="mt-1 m-0 text-[8px] font-medium uppercase tracking-[.12em] text-gray-400">
                    Search Ready
                  </p>
                </div>
              </div>
            </div>

            {/* =====================================================
          RIGHT FAQ LIST
      ===================================================== */}

            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    key={faq.question}
                    className={`
                group
                overflow-hidden
                rounded-[20px]
                border
                transition-all
                duration-500
                ${
                  isOpen
                    ? "border-[#1455d9] bg-[#073b91] shadow-[0_18px_45px_rgba(20,85,217,.15)]"
                    : "border-gray-200 bg-white hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_12px_35px_rgba(15,23,42,.05)]"
                }
              `}
                  >
                    {/* Question */}
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6 sm:py-6"
                    >
                      {/* Number */}
                      <span
                        className={`
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    text-[9px]
                    font-black
                    transition-all
                    duration-300
                    ${
                      isOpen
                        ? "bg-white/10 text-blue-100"
                        : "bg-[#f0f5ff] text-[#1455d9]"
                    }
                  `}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* Question */}
                      <span
                        className={`
                    flex-1
                    text-[12px]
                    font-bold
                    leading-6
                    transition-colors
                    duration-300
                    sm:text-[13px]
                    ${isOpen ? "text-white" : "text-[#101828]"}
                  `}
                      >
                        {faq.question}
                      </span>

                      {/* Icon */}
                      <span
                        className={`
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    text-[17px]
                    transition-all
                    duration-300
                    ${
                      isOpen
                        ? "rotate-45 border-white/20 bg-white/10 text-white"
                        : "border-gray-200 bg-gray-50 text-gray-500 group-hover:border-[#1455d9] group-hover:text-[#1455d9]"
                    }
                  `}
                      >
                        +
                      </span>
                    </button>

                    {/* Answer */}
                    <div
                      className={`
                  grid
                  transition-all
                  duration-500
                  ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
                `}
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

          {/* =====================================================
        BOTTOM FAQ STRIP
    ===================================================== */}

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
      {/* =====================================================
    FINAL CTA — COMPACT PREMIUM CARD
===================================================== */}

      <section className="px-5 pb-14 sm:px-8 sm:pb-16 lg:px-14 lg:pb-20">
        <div
          className="
        relative
        mt-20
        overflow-hidden
        rounded-[26px]
        bg-gradient-to-r
        from-[#0b2443]
        via-[#7434e8]
        to-[#245fe5]
        px-6
        py-9
        shadow-[0_25px_80px_rgba(91,45,190,.22)]
        sm:px-9
        sm:py-10
        lg:px-11
        lg:py-11
      "
        >
          {/* CTA glow */}
          <div
            className="
        pointer-events-none
        absolute
        -right-20
        -top-28
        h-[260px]
        w-[260px]
        rounded-full
        bg-white/10
        blur-3xl
      "
          />

          <div
            className="
        relative
        grid
        gap-8
        lg:grid-cols-[1fr_auto_auto]
        lg:items-center
      "
          >
            {/* CTA text */}
            <div>
              <p
                className="
            m-0
            text-[9px]
            font-bold
            uppercase
            tracking-[.18em]
            text-white/70
          "
              >
                Ready to grow?
              </p>

              <h3
                className="
            mt-2
            m-0
            max-w-[600px]
            text-[26px]
            font-bold
            leading-[1.12]
            tracking-[-.035em]
            text-white
            sm:text-[32px]
          "
              >
                Let's build your digital growth system.
              </h3>

              <p
                className="
            mt-3
            m-0
            text-[12px]
            text-white/75
            sm:text-[13px]
          "
              >
                Strategy, technology and digital growth — connected.
              </p>
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="
            inline-flex
            w-fit
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            bg-white/10
            px-6
            py-3
            text-[11px]
            font-bold
            text-white
            backdrop-blur-md
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-white
            hover:text-[#073b91]
          "
            >
              Start Your Project
              <span className="ml-2 text-[15px]">→</span>
            </Link>

            {/* Stats */}
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

          <div
            className="
      relative
      mt-7
      flex
      flex-wrap
      items-center
      gap-x-6
      gap-y-3
      border-t
      border-white/10
      pt-4
    "
          >
            <div className="flex items-center gap-2">
              <span
                className="
          flex
          h-5
          w-5
          items-center
          justify-center
          rounded-full
          bg-white/10
          text-[8px]
          text-blue-200
        "
              >
                01
              </span>

              <span className="text-[9px] font-medium text-white/55">
                Discovery
              </span>
            </div>

            <span className="h-3 w-px bg-white/10" />

            <div className="flex items-center gap-2">
              <span
                className="
          flex
          h-5
          w-5
          items-center
          justify-center
          rounded-full
          bg-white/10
          text-[8px]
          text-blue-200
        "
              >
                02
              </span>

              <span className="text-[9px] font-medium text-white/55">
                Strategy
              </span>
            </div>

            <span className="h-3 w-px bg-white/10" />

            <div className="flex items-center gap-2">
              <span
                className="
          flex
          h-5
          w-5
          items-center
          justify-center
          rounded-full
          bg-white/10
          text-[8px]
          text-blue-200
        "
              >
                03
              </span>

              <span className="text-[9px] font-medium text-white/55">
                Growth
              </span>
            </div>

            {/* Right status */}
            <div className="ml-auto hidden items-center gap-2 sm:flex">
              <span
                className="
          h-1.5
          w-1.5
          rounded-full
          bg-emerald-400
          shadow-[0_0_10px_rgba(52,211,153,.7)]
        "
              />

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

export default GEO;

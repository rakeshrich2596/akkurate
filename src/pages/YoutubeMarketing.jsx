import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

const youtubeServices = [
  {
    number: "01",
    title: "YouTube Strategy",
    description:
      "Define your audience, positioning, content pillars and the role YouTube should play in your wider marketing funnel.",
    icon: "▶",
  },
  {
    number: "02",
    title: "Topic & Keyword Research",
    description:
      "Identify topics around viewer questions, search intent, commercial relevance and your brand expertise.",
    icon: "⌕",
  },
  {
    number: "03",
    title: "Video SEO",
    description:
      "Improve discoverability through relevant titles, descriptions, structure and supporting content.",
    icon: "SEO",
  },
  {
    number: "04",
    title: "Titles & Thumbnails",
    description:
      "Create stronger video packaging with clear titles, compelling thumbnails and effective opening hooks.",
    icon: "✦",
  },
  {
    number: "05",
    title: "Shorts Strategy",
    description:
      "Use Shorts as strategic entry points that extend reach and introduce audiences to deeper content.",
    icon: "S",
  },
  {
    number: "06",
    title: "Performance Optimization",
    description:
      "Review retention, click-through, watch behavior and conversions to improve future content decisions.",
    icon: "↗",
  },
];

const outcomes = [
  "Consistent channel strategy",
  "Better topic selection",
  "Improved video discoverability",
  "Stronger titles and thumbnails",
  "More useful video content",
  "Data-led content decisions",
];

const processSteps = [
  {
    number: "01",
    title: "Channel Audit",
    description:
      "Understand the business objective, audience, existing channel, assets and current performance.",
  },
  {
    number: "02",
    title: "Audience Research",
    description:
      "Identify audience questions, content opportunities, search intent and relevant topic clusters.",
  },
  {
    number: "03",
    title: "Content Planning",
    description:
      "Turn the research into a practical video roadmap covering topics, formats and publishing priorities.",
  },
  {
    number: "04",
    title: "Production & Optimization",
    description:
      "Create and optimize the agreed content while improving titles, thumbnails, structure and discoverability.",
  },
  {
    number: "05",
    title: "Measurement",
    description:
      "Review performance signals and use the learnings to improve the next content cycle.",
  },
];

const whyChoose = [
  {
    number: "01",
    title: "Business-First Strategy",
    description:
      "We start with what the business needs to achieve and then choose the right YouTube activity.",
  },
  {
    number: "02",
    title: "Integrated Expertise",
    description:
      "SEO, AEO, GEO, paid media, web, content and branding can work together when the project requires it.",
  },
  {
    number: "03",
    title: "Clear Communication",
    description:
      "Understand what is being done, why it matters and what the next priority should be.",
  },
  {
    number: "04",
    title: "Continuous Improvement",
    description:
      "Performance, feedback and changing audience behavior guide the next iteration.",
  },
];

const faqs = [
  {
    question: "What is included in your YouTube Marketing service?",
    answer:
      "The scope is customized around the objective. The standard framework covers YouTube strategy, topic and keyword research, video SEO, titles and thumbnails, Shorts strategy and performance optimization.",
  },
  {
    question: "How do you decide the right YouTube Marketing scope?",
    answer:
      "We look at your business goal, audience, existing channel, content assets, competition, timeline and budget before recommending priorities.",
  },
  {
    question:
      "Can YouTube Marketing be combined with SEO, paid media or website development?",
    answer:
      "Yes. YouTube can work alongside search, paid campaigns and website experiences when the customer journey crosses multiple digital channels.",
  },
  {
    question: "How do you measure YouTube Marketing success?",
    answer:
      "The KPIs depend on the objective and may include discoverability, qualified traffic, engagement, retention, leads, enquiries, conversions or other agreed business signals.",
  },
  {
    question: "Do you guarantee YouTube results?",
    answer:
      "No responsible agency can guarantee algorithmic distribution, rankings, exact view counts or a fixed commercial outcome. We can commit to a clear process, quality execution and transparent measurement.",
  },
  {
    question:
      "Can you improve an existing YouTube channel instead of starting from scratch?",
    answer:
      "Yes. We can audit the existing channel and improve the areas that need attention rather than rebuilding everything.",
  },
];

const relatedServices = [
  {
    number: "01",
    title: "Google My Business",
    type: "LOCAL",
    description:
      "Strengthen local visibility and help customers discover and connect with your business.",
    href: "/google-my-business",
    accent: "cyan",
  },
  {
    number: "02",
    title: "App Development",
    type: "MOBILE",
    description:
      "Create practical mobile experiences designed around usability, performance and business needs.",
    href: "/app-development",
    accent: "violet",
  },
  {
    number: "03",
    title: "Website Development",
    type: "WEB",
    description:
      "Build fast, user-focused websites that support your content, brand and conversion journey.",
    href: "/website-development",
    accent: "orange",
  },
];

function YoutubeMarketing() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <div className="w-full overflow-hidden bg-white text-[#101828]">
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
        LEFT + RIGHT — EQUAL WIDTH
    ================================================= */}

            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-10 xl:gap-14">
              {/* =================================================
          LEFT CONTENT
      ================================================= */}

              <div className="max-w-[740px]">
                {/* =================================================
            BREADCRUMB
            MOVED INSIDE LEFT CONTENT
        ================================================= */}

                <div className="mb-5 flex flex-wrap items-center gap-2 text-[10px] font-medium text-gray-500 sm:mb-6 sm:text-[11px]">
                  <Link to="/" className="transition hover:text-[#1455d9]">
                    Home
                  </Link>

                  <span>/</span>

                  <span>Services</span>

                  <span>/</span>

                  <span className="text-[#1455d9]">YouTube Marketing</span>
                </div>

                {/* =================================================
            SERVICE BADGE
        ================================================= */}

                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[.16em] text-[#1455d9] shadow-sm sm:text-[11px]">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
                  YouTube Marketing
                </div>

                {/* =================================================
            HEADING
        ================================================= */}

                <h1 className="m-0 max-w-[760px] text-[35px] font-bold leading-[1.04] tracking-[-.045em] text-[#101828] sm:text-[44px] md:text-[45px] lg:text-[48px] xl:text-[42px]">
                  Build a YouTube Channel
                  <span className="block text-[#1455d9]">
                    People Want to Watch.
                  </span>
                </h1>

                {/* =================================================
            DESCRIPTION
        ================================================= */}

                <p className="mt-6 max-w-[650px] text-[14px] leading-7 text-gray-600 sm:text-[15px] lg:text-[16px]">
                  Grow your YouTube presence with strategy, content planning,
                  video SEO, titles, thumbnails, Shorts and performance
                  optimization — built around your audience and business goals.
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
                    href="#youtube-services"
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
                    <span className="h-2 w-2 rounded-full bg-red-500" />
                    Video-first
                  </span>

                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-500" />
                    Strategy-led
                  </span>

                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-violet-500" />
                    Data-informed
                  </span>
                </div>
              </div>

              {/* =================================================
          RIGHT CONTENT — YOUTUBE VISUAL
      ================================================= */}

              <div className="relative mx-auto min-h-[470px] w-full max-w-[680px] sm:min-h-[540px]">
                {/* =================================================
            AMBIENT GLOW
        ================================================= */}

                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/10 blur-[110px]" />

                <div className="pointer-events-none absolute right-10 top-16 h-36 w-36 rounded-full bg-red-400/10 blur-[80px]" />

                {/* =================================================
            MAIN YOUTUBE ANALYTICS CARD
        ================================================= */}

                <div className="absolute left-1/2 top-1/2 z-10 w-[94%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[26px] border border-white/10 bg-[#080b19]/95 p-4 shadow-[0_30px_90px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-5">
                  {/* =================================================
              HEADER
          ================================================= */}

                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-red-500/10 ring-1 ring-red-400/20">
                        <span className="text-[10px] font-bold text-red-300">
                          ▶
                        </span>
                      </div>

                      <div>
                        <p className="text-[7px] uppercase tracking-[0.18em] text-white/25">
                          Video Marketing
                        </p>

                        <h3 className="mt-0.5 text-sm font-semibold text-white/75 sm:text-base">
                          Video → Views
                        </h3>
                      </div>
                    </div>

                    {/* Live Status */}

                    <div className="flex items-center gap-1.5 rounded-full border border-red-400/15 bg-red-400/[0.035] px-2.5 py-1.5">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-400" />

                      <span className="text-[7px] text-red-300/70">
                        Video Live
                      </span>
                    </div>
                  </div>

                  {/* =================================================
              VIDEO PLAYER
          ================================================= */}

                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#050711]">
                    {/* Video Area */}

                    <div className="relative h-[205px] sm:h-[220px]">
                      {/* Video Background */}

                      <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.08] via-violet-500/[0.06] to-blue-500/[0.05]" />

                      {/* Video Light */}

                      <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-400/10 blur-[60px]" />

                      {/* Abstract Video Thumbnail */}

                      <div className="absolute inset-5 overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.02]">
                        {/* Thumbnail Content */}

                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <div className="relative">
                            <div className="absolute -inset-5 animate-ping rounded-full bg-red-400/5" />

                            {/* Play Button */}

                            <button
                              type="button"
                              className="relative flex h-14 w-14 items-center justify-center rounded-full bg-red-500/90 shadow-[0_0_35px_rgba(239,68,68,0.28)] transition-transform duration-300 hover:scale-110"
                              aria-label="Play video"
                            >
                              <span className="ml-1 text-lg text-white">▶</span>
                            </button>
                          </div>

                          <p className="mt-4 text-[9px] font-semibold text-white/65 sm:text-[10px]">
                            Grow Your Digital Presence
                          </p>

                          <p className="mt-1 text-[6px] text-white/25">
                            Marketing strategy • Content • Growth
                          </p>
                        </div>

                        {/* Video Progress */}

                        <div className="absolute bottom-3 left-3 right-3">
                          <div className="h-1 overflow-hidden rounded-full bg-white/10">
                            <div className="h-full w-[46%] rounded-full bg-red-400/70 animate-pulse" />
                          </div>

                          <div className="mt-1.5 flex items-center justify-between">
                            <span className="text-[5px] text-white/25">
                              02:18
                            </span>

                            <span className="text-[5px] text-white/25">
                              05:42
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Floating Live Badge */}

                      <div className="absolute left-7 top-7 rounded-full border border-red-400/20 bg-red-500/10 px-2 py-1 backdrop-blur-xl">
                        <div className="flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-400" />

                          <span className="text-[6px] font-medium text-red-300/70">
                            PROMOTED VIDEO
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* =================================================
                VIDEO INFO
            ================================================= */}

                    <div className="border-t border-white/10 bg-white/[0.015] p-3">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-400/10 ring-1 ring-red-400/15">
                          <span className="text-[8px] font-bold text-red-300">
                            A
                          </span>
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="truncate text-[9px] font-semibold text-white/65">
                            Your Brand — Digital Growth Strategy
                          </p>

                          <p className="mt-0.5 text-[6px] text-white/25">
                            20K views • 2 days ago
                          </p>
                        </div>

                        <div className="rounded-lg bg-red-500/10 px-2.5 py-1.5 ring-1 ring-red-400/15">
                          <span className="text-[6px] font-medium text-red-300/70">
                            Subscribe
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* =================================================
              VIEWS GROWTH
          ================================================= */}

                  <div className="mt-4">
                    <div className="mb-3 flex items-center justify-between">
                      <div>
                        <span className="text-[7px] uppercase tracking-[0.18em] text-white/25">
                          Views Growth
                        </span>

                        <p className="mt-1 text-[8px] text-white/30">
                          Video reach is accelerating
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-400" />

                        <span className="text-[7px] text-red-300/60">Live</span>
                      </div>
                    </div>

                    {/* View Steps */}

                    <div className="relative">
                      {/* Connecting Line */}

                      <div className="absolute left-[8%] right-[8%] top-5 h-px bg-gradient-to-r from-red-400/15 via-red-400/40 to-red-400/70" />

                      <div className="grid grid-cols-4 gap-2">
                        {/* 1K */}

                        <div className="relative z-10 flex flex-col items-center">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#090c1b]">
                            <span className="text-[8px] font-semibold text-white/45">
                              1K
                            </span>
                          </div>

                          <span className="mt-2 text-[6px] text-white/25">
                            Launch
                          </span>
                        </div>

                        {/* 5K */}

                        <div className="relative z-10 flex flex-col items-center">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-red-400/15 bg-red-400/[0.04]">
                            <span className="text-[8px] font-semibold text-red-300/65">
                              5K
                            </span>
                          </div>

                          <span className="mt-2 text-[6px] text-white/25">
                            Reach
                          </span>
                        </div>

                        {/* 20K */}

                        <div className="relative z-10 flex flex-col items-center">
                          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-red-400/20 bg-red-400/[0.07]">
                            <span className="text-[8px] font-semibold text-red-300">
                              20K
                            </span>

                            <span className="absolute -right-1 -top-1 h-2 w-2 animate-ping rounded-full bg-red-400/60" />
                          </div>

                          <span className="mt-2 text-[6px] text-white/25">
                            Growth
                          </span>
                        </div>

                        {/* 100K */}

                        <div className="relative z-10 flex flex-col items-center">
                          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-red-400/30 bg-red-400/10 shadow-[0_0_25px_rgba(239,68,68,0.12)]">
                            <span className="text-[8px] font-bold text-red-200">
                              100K
                            </span>

                            <span className="absolute -right-1 -top-1 h-2 w-2 animate-pulse rounded-full bg-red-400" />
                          </div>

                          <span className="mt-2 text-[6px] text-red-300/60">
                            Viral Reach
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* =================================================
              ANALYTICS
          ================================================= */}

                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {/* Views */}

                    <div className="rounded-xl border border-red-400/10 bg-red-400/[0.025] p-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[6px] text-white/25">Views</span>

                        <span className="text-[8px] text-red-300">▶</span>
                      </div>

                      <p className="mt-1 text-[11px] font-semibold text-white/70">
                        100K
                      </p>

                      <span className="text-[6px] text-emerald-300/60">
                        +38.4%
                      </span>
                    </div>

                    {/* Subscribers */}

                    <div className="rounded-xl border border-white/10 bg-white/[0.018] p-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[6px] text-white/25">
                          Subscribers
                        </span>

                        <span className="text-[8px] text-red-300">+</span>
                      </div>

                      <p className="mt-1 text-[11px] font-semibold text-white/70">
                        +2.8K
                      </p>

                      <span className="text-[6px] text-emerald-300/60">
                        +24.6%
                      </span>
                    </div>

                    {/* Watch Time */}

                    <div className="rounded-xl border border-white/10 bg-white/[0.018] p-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[6px] text-white/25">
                          Watch Time
                        </span>

                        <span className="text-[8px] text-violet-300">◷</span>
                      </div>

                      <p className="mt-1 text-[11px] font-semibold text-white/70">
                        842h
                      </p>

                      <span className="text-[6px] text-emerald-300/60">
                        +31.2%
                      </span>
                    </div>
                  </div>

                  {/* =================================================
              WATCH TIME GRAPH
          ================================================= */}

                  <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.018] p-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[7px] font-medium text-white/45">
                          Watch-time performance
                        </p>

                        <p className="mt-0.5 text-[6px] text-white/20">
                          Audience retention over time
                        </p>
                      </div>

                      <span className="text-[7px] text-emerald-300/60">
                        ↑ 31.2%
                      </span>
                    </div>

                    {/* Graph */}

                    <div className="relative mt-3 h-14 overflow-hidden">
                      {/* Grid */}

                      <div className="absolute inset-0">
                        <div className="absolute left-0 right-0 top-1/4 h-px bg-white/[0.04]" />

                        <div className="absolute left-0 right-0 top-2/4 h-px bg-white/[0.04]" />

                        <div className="absolute left-0 right-0 top-3/4 h-px bg-white/[0.04]" />
                      </div>

                      {/* SVG Graph */}

                      <svg
                        viewBox="0 0 500 70"
                        className="absolute inset-0 h-full w-full"
                        preserveAspectRatio="none"
                        fill="none"
                      >
                        <defs>
                          <linearGradient
                            id="youtubeGraph"
                            x1="0"
                            y1="0"
                            x2="1"
                            y2="0"
                          >
                            <stop
                              offset="0%"
                              stopColor="#ef4444"
                              stopOpacity="0.2"
                            />

                            <stop
                              offset="100%"
                              stopColor="#ef4444"
                              stopOpacity="0.8"
                            />
                          </linearGradient>
                        </defs>

                        <path
                          d="M0 58 C45 55 55 50 90 52 C125 54 145 42 175 45 C205 48 220 34 250 38 C280 42 300 27 330 31 C360 35 380 18 410 22 C445 26 460 8 500 10"
                          stroke="url(#youtubeGraph)"
                          strokeWidth="2"
                          strokeLinecap="round"
                          className="animate-[youtubeGraph_4s_ease-in-out_infinite]"
                        />

                        <path
                          d="M0 58 C45 55 55 50 90 52 C125 54 145 42 175 45 C205 48 220 34 250 38 C280 42 300 27 330 31 C360 35 380 18 410 22 C445 26 460 8 500 10 L500 70 L0 70 Z"
                          fill="url(#youtubeGraph)"
                          opacity="0.08"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* =================================================
              BOTTOM FLOW
          ================================================= */}

                  <div className="mt-4 flex items-center justify-center">
                    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2">
                      <span className="text-[6px] text-red-300/60">VIDEO</span>

                      <span className="text-[7px] text-white/20">→</span>

                      <span className="text-[6px] text-white/35">VIEWS</span>

                      <span className="text-[7px] text-white/20">→</span>

                      <span className="text-[6px] text-violet-300/60">
                        WATCH TIME
                      </span>

                      <span className="text-[7px] text-white/20">→</span>

                      <span className="text-[6px] text-emerald-300/60">
                        SUBSCRIBERS
                      </span>
                    </div>
                  </div>
                </div>

                {/* =================================================
            LEFT FLOATING CARD
        ================================================= */}

                <div className="absolute bottom-9 left-0 z-30 hidden rounded-xl border border-white/10 bg-[#090c1b]/95 px-3 py-2 shadow-xl backdrop-blur-xl sm:block">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-400/10">
                      <span className="text-[10px] text-red-300">▶</span>
                    </div>

                    <div>
                      <p className="text-[8px] font-medium text-white/60">
                        Video Reach
                      </p>

                      <p className="text-[7px] text-red-300/50">100K views</p>
                    </div>
                  </div>
                </div>

                {/* =================================================
            RIGHT FLOATING CARD
        ================================================= */}

                <div className="absolute bottom-8 right-0 z-30 hidden rounded-xl border border-white/10 bg-[#090c1b]/95 px-3 py-2 shadow-xl backdrop-blur-xl sm:block">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-400/10">
                      <span className="text-[10px] text-emerald-300">+</span>
                    </div>

                    <div>
                      <p className="text-[8px] font-medium text-white/60">
                        Subscribers
                      </p>

                      <p className="text-[7px] text-emerald-300/50">
                        +2.8K gained
                      </p>
                    </div>
                  </div>
                </div>

                {/* =================================================
            FLOATING PARTICLES
        ================================================= */}

                <div className="pointer-events-none absolute inset-0">
                  <span className="absolute left-[14%] top-[25%] h-1 w-1 animate-ping rounded-full bg-red-400/60" />

                  <span className="absolute right-[18%] top-[28%] h-1 w-1 animate-pulse rounded-full bg-violet-400/60" />

                  <span className="absolute left-[23%] bottom-[22%] h-1 w-1 animate-pulse rounded-full bg-red-400/60" />

                  <span className="absolute right-[24%] bottom-[24%] h-1 w-1 animate-ping rounded-full bg-emerald-400/60" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
          INTRO
      ===================================================== */}
        {/* INTRODUCTION — YOUTUBE MARKETING */}
        <section className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
          <div className="mx-auto grid w-full max-w-[1500px] gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-end lg:gap-20">
            {/* LEFT CONTENT */}
            <div className="mb-1">
              <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9]">
                Introduction
              </p>

              <h2 className="mt-4 max-w-[620px] text-[31px] font-bold leading-[1.06] tracking-[-.045em] text-[#101828] sm:text-[32px]">
                YouTube Marketing That Turns
                <span className="block text-[#1455d9]">
                  Videos Into Business Growth.
                </span>
              </h2>
            </div>

            {/* RIGHT DESCRIPTION */}
            <div className="max-w-[650px] lg:ml-auto">
              <p className="text-[14px] leading-7 text-gray-500 sm:text-[15px]">
                Build a stronger YouTube presence with the right content,
                audience-focused strategy and continuous optimization. We help
                turn your videos into a consistent channel for visibility,
                engagement and business growth.
              </p>
            </div>
          </div>

          {/* SIMPLE CARDS */}
          <div className="mx-auto mt-10 grid w-full max-w-[1500px] gap-4 sm:grid-cols-2">
            {/* CARD 01 */}
            <article
              className="
        rounded-[24px]
        border
        border-gray-200
        bg-[#f8fbff]
        p-6
        transition
        duration-500
        hover:-translate-y-1
        hover:shadow-[0_20px_50px_rgba(15,23,42,.07)]
      "
            >
              <span className="text-[10px] font-bold text-[#1455d9]">
                01 / CONTENT
              </span>

              <h3 className="mt-5 text-[20px] font-bold tracking-[-.025em] text-[#101828]">
                Create Videos People Want to Watch.
              </h3>

              <p className="mt-3 text-[13px] leading-6 text-gray-500">
                Develop useful and engaging video content around audience needs,
                relevant topics, strong hooks, clear messaging and consistent
                content themes.
              </p>
            </article>

            {/* CARD 02 */}
            <article
              className="
        rounded-[24px]
        border
        border-gray-200
        bg-[#f8fbff]
        p-6
        transition
        duration-500
        hover:-translate-y-1
        hover:shadow-[0_20px_50px_rgba(15,23,42,.07)]
      "
            >
              <span className="text-[10px] font-bold text-[#1455d9]">
                02 / GROWTH
              </span>

              <h3 className="mt-5 text-[20px] font-bold tracking-[-.025em] text-[#101828]">
                Turn Every Video Into an Opportunity.
              </h3>

              <p className="mt-3 text-[13px] leading-6 text-gray-500">
                Improve titles, thumbnails, discoverability, audience retention
                and engagement to build a YouTube channel that grows over time.
              </p>
            </article>
          </div>

          {/* SIMPLE APPROACH BAR */}
          <div className="mx-auto mt-10 max-w-[1500px] rounded-[28px] bg-[#0b1220] p-6 shadow-[0_25px_70px_rgba(15,23,42,.12)] sm:p-9">
            <div className="grid gap-7 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
              {/* TEXT */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[.18em] text-red-300">
                  The YouTube Approach
                </p>

                <h3 className="mt-3 max-w-[650px] text-[26px] font-bold leading-tight text-white sm:text-[24px]">
                  Strategy first. Content second. Growth throughout.
                </h3>

                <p className="mt-4 max-w-[650px] text-[13px] leading-7 text-gray-400">
                  We start with your business objective and audience, then build
                  content around what people actually want to watch. Performance
                  signals help us improve every content cycle.
                </p>
              </div>

              {/* 3 SIMPLE POINTS */}
              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/[.05] p-4">
                  <span className="text-[10px] font-bold text-blue-300">
                    01
                  </span>

                  <p className="mt-5 text-[13px] font-bold text-white">
                    Strategy
                  </p>

                  <p className="mt-1 text-[9px] leading-4 text-gray-400">
                    Audience + goals
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[.05] p-4">
                  <span className="text-[10px] font-bold text-red-300">02</span>

                  <p className="mt-5 text-[13px] font-bold text-white">
                    Content
                  </p>

                  <p className="mt-1 text-[9px] leading-4 text-gray-400">
                    Videos + creative
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[.05] p-4">
                  <span className="text-[10px] font-bold text-emerald-300">
                    03
                  </span>

                  <p className="mt-5 text-[13px] font-bold text-white">
                    Growth
                  </p>

                  <p className="mt-1 text-[9px] leading-4 text-gray-400">
                    Data + optimization
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
          BUSINESS PROBLEM
      ===================================================== */}

        <section className="bg-[#101828] px-5 py-16 text-center sm:px-8 sm:py-10 lg:px-14">
          <p className="text-[10px] font-bold uppercase tracking-[.18em] text-blue-300">
            The Business Problem We Solve
          </p>
          <h2 className="mx-auto mt-4 max-w-[900px] text-[28px] font-bold leading-tight tracking-[-.035em] text-white sm:text-[35px]">
            Youtube Marketing With a Clear Commercial Purpose
          </h2>
          <p className="mx-auto mt-5 max-w-[850px] text-[13px] leading-7 text-gray-300 sm:text-[15px]">
            A YouTube channel becomes difficult to grow when every video is
            created independently. Akkurate builds a connected content system so
            videos answer real questions, strengthen expertise and support the
            wider brand journey.
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
        </section>

        {/* =====================================================
          UNIQUE YOUTUBE ANALYTICS — VIEWER SIGNAL LAB
      ===================================================== */}

        <section className="relative overflow-hidden bg-[#f7faff] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-10">
          <div className="pointer-events-none absolute -right-40 top-0 h-[450px] w-[450px] rounded-full bg-red-50 blur-3xl" />
          <div className="pointer-events-none absolute -left-40 bottom-0 h-[380px] w-[380px] rounded-full bg-violet-50 blur-3xl" />

          <div className="relative mx-auto w-full max-w-[1500px]">
            <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:items-center lg:gap-20">
              {/* LEFT */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-white px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.15em] text-red-500 shadow-sm">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
                  Performance / Analytics
                </div>

                <h2 className="mt-5 m-0 text-[30px] font-bold leading-[1.08] tracking-[-.04em] text-[#101828] sm:text-[38px] lg:text-[35px]">
                  Views are the signal.
                  <span className="block text-[#1455d9]">
                    Viewer behavior is the story.
                  </span>
                </h2>

                <p className="mt-5 max-w-[560px] text-[14px] leading-7 text-gray-600 sm:text-[15px]">
                  We connect discovery, watch behavior, engagement and business
                  intent so every content decision has a reason behind it.
                </p>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  {[
                    [
                      "01",
                      "Discovery",
                      "Where viewers arrive",
                      "text-blue-600",
                      "bg-blue-50",
                    ],
                    [
                      "02",
                      "Watch",
                      "What keeps attention",
                      "text-red-500",
                      "bg-red-50",
                    ],
                    [
                      "03",
                      "Engage",
                      "How viewers respond",
                      "text-violet-500",
                      "bg-violet-50",
                    ],
                    [
                      "04",
                      "Action",
                      "What happens next",
                      "text-emerald-500",
                      "bg-emerald-50",
                    ],
                  ].map(([num, title, label, color, bg]) => (
                    <div
                      key={num}
                      className="group rounded-[18px] border border-gray-200 bg-white p-4 shadow-[0_8px_28px_rgba(15,23,42,.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,.08)]"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`flex h-9 w-9 items-center justify-center rounded-xl ${bg} text-[9px] font-black ${color} transition group-hover:scale-110`}
                        >
                          {num}
                        </span>
                        <div>
                          <p className="m-0 text-[12px] font-bold text-[#101828]">
                            {title}
                          </p>
                          <p className="mt-1 m-0 text-[8px] leading-4 text-gray-400">
                            {label}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT — animated performance console */}
              <div className="relative min-h-[500px] overflow-hidden rounded-[34px] bg-[#0b1220] p-4 shadow-[0_35px_90px_rgba(15,23,42,.16)] sm:p-6 lg:p-8">
                <div className="pointer-events-none absolute -right-28 -top-28 h-[300px] w-[300px] rounded-full bg-red-500/10 blur-[90px]" />
                <div className="pointer-events-none absolute -left-20 bottom-0 h-[260px] w-[260px] rounded-full bg-blue-500/10 blur-[80px]" />

                <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <p className="m-0 text-[8px] font-bold uppercase tracking-[.18em] text-red-300">
                      Performance Console
                    </p>
                    <h3 className="mt-2 m-0 text-[20px] font-bold text-white sm:text-[23px]">
                      Viewer Signal Map
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                    <span className="text-[7px] font-bold uppercase tracking-[.14em] text-emerald-300">
                      Live
                    </span>
                  </div>
                </div>

                {/* score cards */}
                <div className="relative z-10 mt-6 grid grid-cols-3 gap-2">
                  {[
                    ["Reach", "82", "bg-blue-400"],
                    ["Watch", "74", "bg-red-400"],
                    ["Intent", "68", "bg-emerald-400"],
                  ].map(([label, value, bar]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/10 bg-white/[.045] p-3"
                    >
                      <p className="m-0 text-[7px] font-bold uppercase tracking-[.12em] text-gray-500">
                        {label}
                      </p>
                      <p className="mt-1 m-0 text-[22px] font-black text-white">
                        {value}
                      </p>
                      <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
                        <div
                          className={`h-full rounded-full ${bar} animate-[pulse_2.4s_ease-in-out_infinite]`}
                          style={{ width: `${value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* animated signal graph */}
                <div className="relative z-10 mt-4 rounded-[22px] border border-white/10 bg-white/[.035] p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="m-0 text-[8px] font-bold uppercase tracking-[.15em] text-gray-500">
                        8-week viewer response
                      </p>
                      <p className="mt-1 m-0 text-[11px] font-semibold text-white">
                        Content momentum
                      </p>
                    </div>
                    <span className="text-[8px] font-bold text-emerald-300">
                      ↑ positive trend
                    </span>
                  </div>

                  <div className="relative mt-5 h-[175px] overflow-hidden rounded-xl bg-[#0a101c]">
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
                        backgroundSize: "34px 34px",
                      }}
                    />
                    <svg
                      viewBox="0 0 600 190"
                      className="absolute inset-0 h-full w-full"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient
                          id="ytSignalFill"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#ef4444"
                            stopOpacity=".22"
                          />
                          <stop
                            offset="100%"
                            stopColor="#ef4444"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0 150 C45 142 65 126 105 134 S170 112 205 118 S260 92 300 105 S355 77 395 88 S450 62 490 70 S550 35 600 42 L600 190 L0 190 Z"
                        fill="url(#ytSignalFill)"
                      />
                      <path
                        d="M0 150 C45 142 65 126 105 134 S170 112 205 118 S260 92 300 105 S355 77 395 88 S450 62 490 70 S550 35 600 42"
                        fill="none"
                        stroke="#ef4444"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeDasharray="900"
                        strokeDashoffset="900"
                        className="animate-[dash_3s_ease-out_forwards]"
                      />
                      <circle
                        cx="600"
                        cy="42"
                        r="6"
                        fill="#ef4444"
                        className="animate-pulse"
                      />
                    </svg>
                    <div className="absolute bottom-3 left-4 right-4 flex justify-between text-[6px] font-bold uppercase tracking-[.1em] text-gray-600">
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
                </div>

                {/* behavior matrix */}
                <div className="relative z-10 mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {[
                    [
                      "Discovery",
                      "Search + Browse",
                      "bg-blue-400",
                      "text-blue-300",
                    ],
                    [
                      "Retention",
                      "Watch + Return",
                      "bg-red-400",
                      "text-red-300",
                    ],
                    [
                      "Intent",
                      "Click + Enquire",
                      "bg-emerald-400",
                      "text-emerald-300",
                    ],
                  ].map(([title, sub, dot, text]) => (
                    <div
                      key={title}
                      className="rounded-2xl border border-white/10 bg-white/[.035] p-3 transition duration-300 hover:bg-white/[.06]"
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`h-2 w-2 rounded-full ${dot} animate-pulse`}
                        />
                        <span
                          className={`text-[7px] font-bold uppercase tracking-[.12em] ${text}`}
                        >
                          {title}
                        </span>
                      </div>
                      <p className="mt-2 m-0 text-[9px] font-semibold text-gray-300">
                        {sub}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="relative z-10 mt-5 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="m-0 text-[9px] leading-5 text-gray-500">
                    The next video gets smarter because the previous one was
                    measured.
                  </p>
                  <span className="shrink-0 rounded-full border border-red-400/20 bg-red-500/5 px-3 py-1.5 text-[7px] font-bold uppercase tracking-[.13em] text-red-300">
                    Measure → Learn → Repeat
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
          SERVICES
      ===================================================== */}

        <section
          id="youtube-services"
          className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-15"
        >
          <div className="mx-auto w-full max-w-[1500px]">
            {/* HEADER */}
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-[760px]">
                <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9] sm:text-[11px]">
                  Our YouTube Services
                </p>

                <h2 className="mt-3 m-0 text-[30px] font-bold leading-[1.08] tracking-[-.04em] text-[#101828] sm:text-[38px] lg:text-[37px]">
                  Everything Your Channel Needs
                  <span className="block text-[#1455d9]">
                    to Grow With Purpose.
                  </span>
                </h2>
              </div>

              <p className="max-w-[420px] text-[13px] leading-6 text-gray-500">
                From channel strategy and content planning to video SEO,
                creative packaging and performance optimization, every service
                is designed to support meaningful YouTube growth.
              </p>
            </div>

            {/* SERVICES GRID */}
            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  number: "01",
                  tag: "STRATEGY",
                  title: "YouTube Strategy",
                  description:
                    "Build a clear channel direction around your audience, business goals, content pillars and customer journey.",
                },
                {
                  number: "02",
                  tag: "DISCOVERY",
                  title: "Topic & Keyword Research",
                  description:
                    "Discover relevant viewer questions, search opportunities and content topics that align with your expertise.",
                },
                {
                  number: "03",
                  tag: "OPTIMIZATION",
                  title: "Video SEO",
                  description:
                    "Improve video discoverability through relevant titles, descriptions, structure and supporting optimization.",
                },
                {
                  number: "04",
                  tag: "PACKAGING",
                  title: "Titles & Thumbnails",
                  description:
                    "Make the value of every video clearer with stronger titles, thumbnail concepts and opening hooks.",
                },
                {
                  number: "05",
                  tag: "SHORT FORM",
                  title: "Shorts Strategy",
                  description:
                    "Use short-form video strategically to extend content reach and introduce audiences to deeper channel content.",
                },
                {
                  number: "06",
                  tag: "PERFORMANCE",
                  title: "Performance Optimization",
                  description:
                    "Review content performance and audience signals to understand what works and improve future videos.",
                },
              ].map((service) => (
                <article
                  key={service.number}
                  className="
            group
            relative
            overflow-hidden
            rounded-[24px]
            border
            border-gray-200
            bg-white
            p-6
            shadow-[0_8px_30px_rgba(15,23,42,.035)]
            transition-all
            duration-500
            hover:-translate-y-2
            hover:border-blue-100
            hover:shadow-[0_25px_60px_rgba(15,23,42,.09)]
            sm:p-7
          "
                >
                  {/* HOVER GLOW */}
                  <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-blue-50 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

                  {/* TOP ROW */}
                  <div className="relative flex items-start justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f0f5ff] text-[10px] font-black text-[#1455d9]">
                      {service.number}
                    </span>

                    <span className="text-[20px] text-gray-300 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#1455d9]">
                      ↗
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="relative mt-7 m-0 text-[20px] font-bold leading-snug tracking-[-.02em] text-[#101828]">
                    {service.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="relative mt-3 m-0 text-[13px] leading-6 text-gray-500 sm:text-[14px]">
                    {service.description}
                  </p>

                  {/* DIVIDER */}
                  <div className="relative mt-6 h-px overflow-hidden bg-gray-100">
                    <div className="h-full w-1/3 bg-[#1455d9] transition-all duration-500 group-hover:w-full" />
                  </div>

                  {/* TAG + LINK */}
                  <div className="relative mt-4 flex items-center justify-between">
                    <p className="m-0 text-[9px] font-bold uppercase tracking-[.14em] text-gray-400 transition group-hover:text-[#1455d9]">
                      {service.tag}
                    </p>

                    <span className="text-[9px] font-semibold text-gray-400 transition group-hover:text-[#1455d9]">
                      Explore →
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

        <section className="relative overflow-hidden bg-[#f7faff] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-10">
          <div className="mx-auto w-full max-w-[1500px]">
            <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-center lg:gap-20">
              <div>
                <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-red-500">
                  What You Get
                </p>

                <h2 className="mt-3 m-0 text-[31px] font-bold leading-[1.08] tracking-[-.04em] text-[#101828] sm:text-[40px] lg:text-[48px]">
                  What You Get From Akkurate
                </h2>

                <p className="mt-5 m-0 max-w-[540px] text-[14px] leading-7 text-gray-600">
                  The exact outcome depends on the starting point, competition,
                  audience, implementation and business model. Our job is to
                  create the conditions for measurable improvement.
                </p>

                <Link
                  to="/contact"
                  className="mt-7 inline-flex items-center rounded-full bg-[#073b91] px-5 py-3 text-[12px] font-bold text-white transition hover:-translate-y-1 hover:bg-[#052f75]"
                >
                  Discuss your YouTube goal
                  <span className="ml-2">→</span>
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {outcomes.map((outcome, index) => (
                  <div
                    key={outcome}
                    className="group flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-100 hover:shadow-md"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#073b91] text-[10px] font-bold text-white transition group-hover:bg-red-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-[13px] font-semibold text-[#101828] sm:text-[14px]">
                      {outcome}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-4 rounded-[22px] border border-gray-200 bg-white px-6 py-5 shadow-[0_8px_30px_rgba(15,23,42,.035)] sm:flex-row sm:items-center sm:justify-between sm:px-7">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-500 text-white">
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
          WHO THIS IS FOR
      ===================================================== */}

        <section className="relative px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-10">
          <div className="mx-auto w-full max-w-[950px] px-4 text-center sm:px-6 lg:px-8">
            <p className="m-0 text-[10px] font-bold uppercase tracking-[.18em] text-[#1455d9]">
              Who This Service Is For
            </p>

            <h2 className="mt-3 m-0 text-[29px] font-bold leading-tight tracking-[-.03em] text-[#101828] sm:text-[36px] lg:text-[42px]">
              YouTube Marketing Should Fit Your Business
            </h2>

            <p className="mt-5 m-0 text-[14px] leading-7 text-gray-600 sm:text-[15px]">
              YouTube Marketing is relevant to businesses that have a clear
              reason to improve their digital presence, customer journey or
              growth engine.
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
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-900/10 blur-3xl" />

          <div className="relative mx-auto w-full max-w-[1500px]">
            <div className="mx-auto max-w-[800px] text-center">
              <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-red-300">
                Our Process
              </p>

              <h2 className="mt-3 m-0 text-[31px] font-bold leading-[1.08] tracking-[-.04em] text-white sm:text-[40px] lg:text-[35px]">
                A Practical YouTube Marketing Process
              </h2>

              <p className="mt-5 text-[13px] leading-7 text-gray-400 sm:text-[14px]">
                A structured process keeps strategy, content, optimization and
                measurement connected.
              </p>
            </div>

            {/* Timeline */}

            <div className="relative mt-12">
              <div className="absolute left-[8%] right-[8%] top-[32px] hidden h-px bg-gradient-to-r from-red-500/10 via-red-400/50 to-red-500/10 lg:block" />

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {processSteps.map((step, index) => (
                  <div
                    key={step.number}
                    className="group relative rounded-[22px] border border-white/10 bg-white/[.045] p-5 transition duration-500 hover:-translate-y-2 hover:border-red-400/30 hover:bg-white/[.07] sm:p-6"
                  >
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-red-400/30 bg-[#101828] text-[10px] font-black text-red-300 shadow-[0_0_0_7px_rgba(239,68,68,.04)]">
                      {index === 0 && "⌕"}
                      {index === 1 && "◎"}
                      {index === 2 && "▶"}
                      {index === 3 && "✦"}
                      {index === 4 && "↗"}
                    </div>

                    <p className="mt-6 m-0 text-[8px] font-bold uppercase tracking-[.16em] text-red-300">
                      Step {step.number}
                    </p>

                    <h3 className="mt-2 m-0 text-[18px] font-bold leading-snug text-white">
                      {step.title}
                    </h3>

                    <p className="mt-3 m-0 text-[12px] leading-6 text-gray-400">
                      {step.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.12em] text-red-300 opacity-60 transition group-hover:opacity-100">
                      <span className="h-px w-6 bg-red-400/40" />

                      {index === 0 && "Discover"}
                      {index === 1 && "Research"}
                      {index === 2 && "Plan"}
                      {index === 3 && "Create"}
                      {index === 4 && "Improve"}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
          WHY AKKURATE
      ===================================================== */}

        <section className="relative overflow-hidden bg-[#f7faff] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-10">
          <div className="pointer-events-none absolute -right-32 top-10 h-[360px] w-[360px] rounded-full bg-blue-100/50 blur-3xl" />

          <div className="relative mx-auto w-full max-w-[1500px]">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#1455d9]" />

                  <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9]">
                    Why Choose Akkurate
                  </p>
                </div>

                <h2 className="m-0 max-w-[650px] text-[32px] font-bold leading-[1.05] tracking-[-.045em] text-[#101828] sm:text-[40px] lg:text-[50px]">
                  More than a service.
                  <span className="block text-[#1455d9]">
                    A video growth system.
                  </span>
                </h2>
              </div>

              <div>
                <p className="m-0 max-w-[650px] text-[14px] leading-7 text-gray-600 sm:text-[15px]">
                  Digital growth rarely depends on one channel. We bring
                  strategy, search, content, web and technology together when
                  the customer journey needs a connected approach.
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-[0.7fr_1.3fr]">
              {/* Content ecosystem */}

              <div className="relative min-h-[420px] overflow-hidden rounded-[28px] bg-[#101828] p-7 shadow-[0_25px_70px_rgba(15,23,42,.12)] sm:p-9">
                <div className="pointer-events-none absolute inset-0 opacity-20">
                  <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/40" />

                  <div className="absolute left-1/2 top-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-300/30" />
                </div>

                <div className="relative z-10">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.14em] text-red-300">
                    Content Ecosystem
                  </span>

                  <h3 className="mt-7 max-w-[400px] text-[28px] font-bold leading-tight tracking-[-.035em] text-white">
                    One video can connect multiple growth channels.
                  </h3>

                  <p className="mt-4 max-w-[400px] text-[12px] leading-6 text-gray-400">
                    YouTube content can support discovery, search, website
                    journeys, social distribution and customer education.
                  </p>

                  {/* Diagram */}

                  <div className="relative mt-9 h-[180px]">
                    {/* lines */}

                    <div className="absolute left-1/2 top-1/2 h-px w-[75%] -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

                    <div className="absolute left-1/2 top-[15%] h-[70%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-blue-400/50 to-transparent" />

                    {/* center */}

                    <div className="absolute left-1/2 top-1/2 flex h-[74px] w-[74px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-red-300/30 bg-[#241b22] shadow-[0_0_45px_rgba(239,68,68,.15)]">
                      <div className="text-center">
                        <span className="text-[17px] text-red-300">▶</span>

                        <p className="mt-1 m-0 text-[7px] font-bold uppercase tracking-[.12em] text-white/60">
                          YouTube
                        </p>
                      </div>
                    </div>

                    {[
                      ["SEARCH", "left-[7%] top-[5%]"],
                      ["WEBSITE", "right-[7%] top-[5%]"],
                      ["SOCIAL", "left-[7%] bottom-[5%]"],
                      ["LEADS", "right-[7%] bottom-[5%]"],
                    ].map(([label, position]) => (
                      <div
                        key={label}
                        className={`absolute ${position} rounded-xl border border-white/10 bg-white/[.06] px-3 py-2`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-red-400" />

                          <span className="text-[8px] font-bold tracking-[.08em] text-white/80">
                            {label}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Why cards */}

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
          </div>
        </section>

        {/* =====================================================
          RELATED SERVICES — DIGITAL ECOSYSTEM
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
                Strengthen your online presence with connected digital solutions
                designed to improve visibility, functionality and business
                growth.
              </p>
            </div>

            {/* CARDS */}
            <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {/* =====================================================
          GOOGLE MY BUSINESS PAGE CARD
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
                      Google My Business Page
                    </h3>

                    <p className="mt-2 m-0 max-w-[270px] text-[10px] leading-[1.6] text-gray-400 sm:text-[11px]">
                      Improve your local visibility with an optimized Google
                      Business Profile that helps customers discover and connect
                      with you.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[.12em] text-cyan-300/60 transition group-hover:text-cyan-300">
                    Explore service
                    <span className="h-px w-5 bg-cyan-400/30 transition-all duration-300 group-hover:w-8" />
                  </div>
                </div>

                {/* GOOGLE MY BUSINESS ORBIT */}
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
                  <div className="absolute left-1/2 top-1/2 flex h-[56px] w-[62px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[17px] border border-cyan-300/25 bg-[#10202b] shadow-[0_0_35px_rgba(6,182,212,.25)]">
                    <span className="text-[8px] font-bold uppercase tracking-[.04em] text-cyan-300/70">
                      GMB
                    </span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="absolute bottom-4 right-4 z-30 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-500/10 text-[13px] text-cyan-300 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-cyan-500 group-hover:text-white">
                  →
                </div>
              </Link>

              {/* =====================================================
          APP DEVELOPMENT CARD
      ===================================================== */}

              <Link
                to="/app-development"
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
                      App Development
                    </h3>

                    <p className="mt-2 m-0 max-w-[270px] text-[10px] leading-[1.6] text-gray-400 sm:text-[11px]">
                      Build reliable and user-friendly mobile applications that
                      deliver smooth experiences and support your digital
                      business goals.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[.12em] text-violet-300/60 transition group-hover:text-violet-300">
                    Explore service
                    <span className="h-px w-5 bg-violet-400/30 transition-all duration-300 group-hover:w-8" />
                  </div>
                </div>

                {/* APP DEVELOPMENT ORBIT */}
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
                      App
                    </span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="absolute bottom-4 right-4 z-30 flex h-8 w-8 items-center justify-center rounded-full border border-violet-400/20 bg-violet-500/10 text-[13px] text-violet-300 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-violet-500 group-hover:text-white">
                  →
                </div>
              </Link>

              {/* =====================================================
          WEBSITE DEVELOPMENT CARD
      ===================================================== */}

              <Link
                to="/website-development"
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
                      Website Development
                    </h3>

                    <p className="mt-2 m-0 max-w-[275px] text-[10px] leading-[1.6] text-gray-400 sm:text-[11px]">
                      Develop fast, responsive and scalable websites that
                      deliver seamless user experiences and support long-term
                      growth.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[.12em] text-orange-300/60 transition group-hover:text-orange-300">
                    Explore service
                    <span className="h-px w-5 bg-orange-400/30 transition-all duration-300 group-hover:w-8" />
                  </div>
                </div>

                {/* WEBSITE DEVELOPMENT ORBIT */}
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
                      Website
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

        <section className="relative overflow-hidden bg-[#f7faff] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-10">
          <div className="pointer-events-none absolute -left-32 top-20 h-[300px] w-[300px] rounded-full bg-blue-100/60 blur-3xl" />

          <div className="pointer-events-none absolute -right-32 bottom-0 h-[350px] w-[350px] rounded-full bg-red-100/40 blur-3xl" />

          <div className="relative mx-auto w-full max-w-[1250px]">
            <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
              {/* LEFT */}

              <div className="lg:sticky lg:top-24 lg:self-start">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#1455d9] shadow-[0_0_12px_rgba(20,85,217,.5)]" />

                  <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9]">
                    Frequently Asked Questions
                  </p>
                </div>

                <h2 className="mt-4 m-0 max-w-[430px] text-[32px] font-bold leading-[1.05] tracking-[-.045em] text-[#101828] sm:text-[40px]">
                  Everything you need
                  <span className="block text-[#1455d9]">
                    to know about YouTube.
                  </span>
                </h2>

                <p className="mt-5 max-w-[430px] text-[12px] leading-6 text-gray-500 sm:text-[13px] sm:leading-7">
                  Have questions about YouTube strategy, content planning, video
                  SEO, thumbnails, Shorts or performance measurement?
                </p>

                <div className="mt-8 overflow-hidden rounded-[20px] border border-gray-200 bg-white p-5 shadow-[0_10px_35px_rgba(15,23,42,.04)]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500 text-white">
                        ▶
                      </div>

                      <div>
                        <p className="m-0 text-[11px] font-bold text-[#101828]">
                          YouTube Marketing
                        </p>

                        <p className="mt-1 m-0 text-[9px] text-gray-400">
                          Strategy • Content • Growth
                        </p>
                      </div>
                    </div>

                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                  </div>

                  <div className="mt-5 border-t border-gray-100 pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[8px] font-bold uppercase tracking-[.15em] text-gray-400">
                        Need help?
                      </span>

                      <Link
                        to="/contact"
                        className="text-[9px] font-bold text-[#1455d9]"
                      >
                        Talk to our team →
                      </Link>
                    </div>
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
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6 sm:py-6"
                      >
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

                          ${
                            isOpen
                              ? "bg-white/10 text-blue-100"
                              : "bg-[#f0f5ff] text-[#1455d9]"
                          }
                        `}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span
                          className={`
                          flex-1
                          text-[12px]
                          font-bold
                          leading-6
                          sm:text-[13px]

                          ${isOpen ? "text-white" : "text-[#101828]"}
                        `}
                        >
                          {faq.question}
                        </span>

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
          </div>
        </section>

        {/* =====================================================
          FINAL CTA
      ===================================================== */}

        <section className="px-5 pb-14 sm:px-8 sm:pb-16 lg:px-14 lg:pb-15">
          <div className="relative mt-20 overflow-hidden rounded-[26px] bg-gradient-to-r from-[#0b2443] via-[#7434e8] to-[#245fe5] px-6 py-9 shadow-[0_25px_80px_rgba(91,45,190,.22)] sm:px-9 sm:py-10 lg:px-11 lg:py-11">
            <div className="pointer-events-none absolute -right-20 -top-28 h-[260px] w-[260px] rounded-full bg-white/10 blur-3xl" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto_auto] lg:items-center">
              <div>
                <p className="m-0 text-[9px] font-bold uppercase tracking-[.18em] text-white/70">
                  Ready to grow?
                </p>

                <h3 className="mt-2 m-0 max-w-[600px] text-[26px] font-bold leading-[1.12] tracking-[-.035em] text-white sm:text-[32px]">
                  Let&apos;s build your answer growth system.
                </h3>

                <p className="mt-3 m-0 text-[12px] text-white/75 sm:text-[13px]">
                  Strategy, Marketing and digital growth — connected.
                </p>
              </div>

              <a
                href="/contact"
                className="inline-flex w-fit items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-[11px] font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#073b91]"
              >
                Start Your Project
                <span className="ml-2 text-[15px]">→</span>
              </a>

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
                  Answers
                </span>
              </div>

              <div className="ml-auto hidden items-center gap-2 sm:flex">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,.7)]" />

                <span className="text-[9px] font-medium text-white/45">
                  Let&apos;s talk about your next move
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default YoutubeMarketing;

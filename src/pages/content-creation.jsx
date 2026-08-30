import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
/* =========================================================
   Content Creation PAGE
   React JS + Tailwind CSS ONLY
   Same premium design system as web_app.jsx / web-design.jsx.
   No external chart or animation libraries. No custom CSS.
   ========================================================= */

function Reveal({ children, direction = "up", delay = 0 }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const movement = {
    up: visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
    down: visible ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0",
    left: visible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0",
    right: visible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0",
    center: visible ? "scale-100 opacity-100" : "scale-[.96] opacity-0",
  }[direction];

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${movement}`}
      style={{ transitionDelay: `${delay * 100}ms` }}
    >
      {children}
    </div>
  );
}

const services = [
  [
    "Content Strategy",
    "Define audiences, messages, content pillars and the role each asset should play.",
  ],
  [
    "Website Copy",
    "Write website content that explains services, differentiators, proof and next steps clearly.",
  ],
  [
    "Social Content",
    "Develop platform-appropriate posts, captions, carousels and short-form content.",
  ],
  [
    "Campaign Content",
    "Create campaign assets around a clear offer, audience and action.",
  ],
  [
    "Thought Leadership",
    "Turn real expertise and experience into useful educational and authority-building content.",
  ],
  [
    "Editorial Planning",
    "Build an editorial calendar so content is consistent and connected rather than random.",
  ],
];
const outcomes = [
  "Clearer brand voice",
  "More useful website content",
  "Consistent social presence",
  "Stronger campaign messaging",
  "Expertise-led content",
  "Connected editorial planning",
];
const audienceCards = [
  [
    "Growing brands",
    "When content needs to support more audiences, channels or offers without losing a clear voice.",
  ],
  [
    "Expert-led businesses",
    "When real knowledge and experience can become useful educational or authority-building content.",
  ],
  [
    "Inconsistent publishers",
    "When content exists but lacks a connected strategy, editorial rhythm or measurable purpose.",
  ],
];
const processSteps = [
  [
    "Discovery & Voice",
    "Understand the business objective, audience, current assets, constraints and success criteria before recommending the work.",
  ],
  [
    "Content Strategy",
    "Translate the objective into a practical strategy, scope, content direction and measurement plan.",
  ],
  [
    "Writing & Production",
    "Create, optimize and produce the agreed work with brand and audience requirements in mind.",
  ],
  [
    "Review & Publishing",
    "Test the experience, messaging and key content paths before considering the work complete.",
  ],
  [
    "Performance & Refresh",
    "Review performance, feedback and business signals and use those learnings to prioritize the next improvement.",
  ],
];
const metrics = [
  ["72K", "Reach"],
  ["8.4%", "Engagement"],
  ["3.1K", "Shares"],
  ["64%", "Content performance"],
];
const relatedServices = [
  [
    "SEO",
    "/seo",
    "Connect useful content with organic discovery and search intent.",
  ],
  [
    "Social Media",
    "/social-media",
    "Turn content strategy into a consistent social presence.",
  ],
  [
    "Reels Making",
    "/reels-production",
    "Adapt ideas into short-form video content.",
  ],
];

const whyChoose = [
  [
    "01",
    "Business-First Strategy",
    "We start with what the business needs to achieve and then choose the right digital activity.",
  ],
  [
    "02",
    "Integrated Expertise",
    "SEO, AEO, GEO, paid media, web, content and branding capabilities can work together when the project requires them.",
  ],
  [
    "03",
    "Clear Communication",
    "The team should understand what is being done, why it matters and what the next priority is.",
  ],
  [
    "04",
    "Continuous Improvement",
    "Launch is not the end. Performance, feedback and changing customer behavior should guide the next iteration.",
  ],
];

const faqs = [
  [
    "What is included in your content creation service?",
    "The scope is customized around the objective. The six capability areas above form the standard framework, while the actual deliverables depend on the project.",
  ],
  [
    "How do you decide the right scope?",
    "We look at the business goal, audience, current performance, competition, assets, timeline and budget before recommending priorities.",
  ],
  [
    "Can this service be combined with SEO, paid media or website development?",
    "Yes. Connected services are often more effective when the customer journey crosses discovery, content, website experience and conversion.",
  ],
  [
    "How do you measure success?",
    "KPIs depend on the objective and may include qualified traffic, engagement, leads, enquiries, conversions, product usage or other agreed business signals.",
  ],
  [
    "Do you guarantee results?",
    "No responsible agency can guarantee platform rankings, algorithmic distribution, exact lead volume or a fixed commercial outcome. We can commit to a clear process, quality execution and transparent measurement.",
  ],
  [
    "Can you work with an existing website, campaign or brand?",
    "Yes. We can audit and improve existing assets instead of rebuilding everything when that is the more practical approach.",
  ],
];

function PerformanceChart() {
  return (
    <div className="mt-5 w-full overflow-hidden rounded-[20px] bg-[#fbfcff] p-2 sm:p-4">
      <svg
        viewBox="0 0 430 266"
        className="h-auto w-full"
        role="img"
        aria-label="Content contribution by category"
      >
        <g key="0">
          <rect
            x="4"
            y="4"
            width="245"
            height="112"
            rx="12"
            className="fill-[#1455d9]"
          />
          <text x="14" y="27" className="fill-white text-[9px] font-bold">
            Educational
          </text>
          <text x="14" y="46" className="fill-blue-100 text-[8px]">
            28%
          </text>
        </g>
        <g key="1">
          <rect
            x="253"
            y="4"
            width="173"
            height="112"
            rx="12"
            className="fill-indigo-400"
          />
          <text x="263" y="27" className="fill-white text-[9px] font-bold">
            Product
          </text>
          <text x="263" y="46" className="fill-blue-100 text-[8px]">
            22%
          </text>
        </g>
        <g key="2">
          <rect
            x="4"
            y="120"
            width="156"
            height="78"
            rx="12"
            className="fill-violet-300"
          />
          <text x="14" y="143" className="fill-[#101828] text-[9px] font-bold">
            Social
          </text>
          <text x="14" y="162" className="fill-gray-500 text-[8px]">
            18%
          </text>
        </g>
        <g key="3">
          <rect
            x="164"
            y="120"
            width="128"
            height="78"
            rx="12"
            className="fill-blue-200"
          />
          <text x="174" y="143" className="fill-[#101828] text-[9px] font-bold">
            Campaign
          </text>
          <text x="174" y="162" className="fill-gray-500 text-[8px]">
            14%
          </text>
        </g>
        <g key="4">
          <rect
            x="296"
            y="120"
            width="130"
            height="78"
            rx="12"
            className="fill-indigo-200"
          />
          <text x="306" y="143" className="fill-[#101828] text-[9px] font-bold">
            Thought Leadership
          </text>
          <text x="306" y="162" className="fill-gray-500 text-[8px]">
            10%
          </text>
        </g>
        <g key="5">
          <rect
            x="4"
            y="202"
            width="422"
            height="60"
            rx="12"
            className="fill-slate-100"
          />
          <text x="14" y="225" className="fill-[#101828] text-[9px] font-bold">
            Case Studies
          </text>
          <text x="14" y="244" className="fill-gray-500 text-[8px]">
            8%
          </text>
        </g>
      </svg>
    </div>
  );
}

function RelatedOrbit() {
  return (
    <div className="relative mx-auto h-[555px] w-full max-w-[760px] overflow-hidden sm:h-[610px]">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-100/80" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-100/80 border-dashed animate-[spin_22s_linear_infinite]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-100/80 animate-[spin_15s_linear_infinite_reverse]" />

      <div className="absolute left-1/2 top-1/2 z-20 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-blue-100 bg-white text-center shadow-[0_20px_60px_rgba(15,23,42,.10)]">
        <span className="text-[8px] font-bold uppercase tracking-[.16em] text-[#1455d9]">
          Akkurate
        </span>
        <span className="mt-2 text-[13px] font-black text-[#101828]">
          Connected
        </span>
        <span className="mt-0.5 text-[7px] uppercase tracking-[.12em] text-gray-400">
          Services
        </span>
      </div>

      {relatedServices.map((service, index) => {
        const positions = [
          "absolute left-1/2 top-[4%] z-30 w-[220px] -translate-x-1/2 sm:w-[245px]",
          "absolute bottom-[5%] left-[2%] z-30 w-[220px] sm:w-[245px]",
          "absolute bottom-[5%] right-[2%] z-30 w-[220px] sm:w-[245px]",
        ];
        return (
          <div key={service[0]} className={positions[index]}>
            <a
              href={service[1]}
              className="group block rounded-[24px] border border-gray-200 bg-white p-5 text-left shadow-[0_15px_45px_rgba(15,23,42,.08)] transition-all duration-500 hover:-translate-y-2 hover:border-blue-100 hover:shadow-[0_25px_60px_rgba(15,23,42,.13)]"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-blue-100 bg-blue-50 px-2.5 py-1 text-[7px] font-bold uppercase tracking-[.13em] text-[#1455d9]">
                  RELATED
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-100 text-gray-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#1455d9]">
                  →
                </span>
              </div>
              <h3 className="mt-5 text-[16px] font-bold tracking-[-.02em] text-[#101828]">
                {service[0]}
              </h3>
              <p className="mt-2 text-[10px] leading-5 text-gray-500">
                {service[2]}
              </p>
              <div className="mt-4 h-px bg-gray-100" />
              <div className="mt-3 flex items-center gap-2 text-[8px] font-semibold uppercase tracking-[.12em] text-gray-400">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />{" "}
                Related journey
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
}

function ContentCreation() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="w-full overflow-hidden bg-white text-[#111827]">
      {/* HERO */}
      {/* =========================================================
    HERO — CONTENT CREATION
========================================================= */}

      <section className="relative overflow-hidden bg-[#f7faff] px-5 pb-14 pt-7 sm:px-8 sm:pb-16 sm:pt-9 lg:px-14 lg:pb-20 lg:pt-10">
        {/* Background Glow */}

        <div className="pointer-events-none absolute -right-48 -top-48 h-[520px] w-[520px] rounded-full bg-blue-100/70 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-48 -left-48 h-[420px] w-[420px] rounded-full bg-indigo-100/50 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1600px] px-1 sm:px-2 lg:px-4 xl:px-6">
          {/* =====================================================
        BREADCRUMB
        ABOVE LEFT CONTENT
    ===================================================== */}

          <div className="mb-5 flex items-center gap-2 text-[11px] font-medium text-gray-500 sm:mb-6 sm:text-[12px]">
            <a
              href="/"
              className="transition-colors duration-200 hover:text-[#1455d9]"
            >
              Home
            </a>

            <span>/</span>

            <span>Services</span>

            <span>/</span>

            <span className="font-medium text-[#1455d9]">Content Creation</span>
          </div>

          {/* =====================================================
        HERO GRID
        LEFT + RIGHT START AT EXACT SAME TOP LINE
    ===================================================== */}

          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[.92fr_1.08fr] lg:gap-10 xl:gap-12">
            {/* ===================================================
          LEFT CONTENT
      =================================================== */}

            <Reveal direction="left">
              <div className="max-w-[760px] pt-10">
                {/* SERVICE LABEL */}

                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[.16em] text-[#1455d9] shadow-sm sm:text-[11px]">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#1455d9]" />
                  Content Creation
                </div>

                {/* HEADING */}

                <h1 className="m-0 max-w-[760px] text-[35px] font-bold leading-[1.04] tracking-[-.045em] text-[#101828] sm:text-[44px] md:text-[45px] lg:text-[45px] xl:text-[35px]">
                  Content That Gives Your Brand Something Worth Saying
                </h1>

                {/* DESCRIPTION */}

                <p className="mt-5 max-w-[660px] text-[14px] leading-7 text-gray-600 sm:text-[15px] lg:text-[16px]">
                  Create useful, engaging brand content for websites, social
                  media, campaigns and digital marketing — built around your
                  audience, business objective and measurable customer journey.
                </p>

                {/* BUTTONS */}

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="/contact"
                    className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#073b91] px-6 py-3 text-[13px] font-bold text-white shadow-[0_12px_30px_rgba(7,59,145,.18)] transition duration-300 hover:-translate-y-1 hover:bg-[#052f75]"
                  >
                    Talk to Our Team
                    <span className="ml-2">→</span>
                  </a>

                  <a
                    href="#content-creation-services"
                    className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-gray-200 bg-white px-6 py-3 text-[13px] font-semibold text-gray-700 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:text-[#1455d9]"
                  >
                    Explore Services
                  </a>
                </div>

                {/* FEATURE POINTS */}

                <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 border-t border-gray-200/80 pt-5 text-[11px] font-medium text-gray-500">
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Business-first
                  </span>

                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-500" />
                    Purposeful
                  </span>

                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-violet-500" />
                    Measurable
                  </span>
                </div>
              </div>
            </Reveal>

            {/* ===================================================
          RIGHT — CREATIVE CANVAS
          KEEP YOUR EXISTING ANIMATION
      =================================================== */}

            <Reveal direction="right" delay={2}>
              <div className="relative mx-auto -mt-1 h-[500px] w-full max-w-[680px] overflow-visible">
                {/* =================================================
              AMBIENT BACKGROUND
          ================================================= */}

                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/60 blur-[100px]" />

                <div className="pointer-events-none absolute left-[12%] top-[10%] h-24 w-24 rounded-full bg-indigo-100/40 blur-2xl" />

                <div className="pointer-events-none absolute bottom-[12%] right-[10%] h-28 w-28 rounded-full bg-violet-100/40 blur-2xl" />

                {/* =================================================
              CREATIVE PARTICLES
          ================================================= */}

                <span className="absolute left-[18%] top-[18%] h-2 w-2 rounded-full bg-blue-400 animate-ping" />

                <span className="absolute right-[19%] top-[27%] h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />

                <span className="absolute bottom-[25%] left-[22%] h-1.5 w-1.5 rounded-full bg-violet-400 animate-ping" />

                <span className="absolute bottom-[17%] right-[26%] h-2 w-2 rounded-full bg-blue-300 animate-pulse" />

                {/* =================================================
              TOP LABEL
          ================================================= */}

                <div className="absolute left-1/2 top-[3%] z-40 -translate-x-1/2 whitespace-nowrap rounded-full border border-blue-100 bg-white/90 px-4 py-2 text-[7px] font-bold uppercase tracking-[.16em] text-[#1455d9] shadow-[0_12px_30px_rgba(15,23,42,.08)] backdrop-blur-md">
                  <span className="mr-2 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                  Creative Studio
                </div>

                {/* =================================================
              FLOATING IDEA CARD
          ================================================= */}

                <div className="absolute left-[3%] top-[19%] z-30 w-[145px] rotate-[-7deg] rounded-[22px] border border-white bg-white p-3.5 shadow-[0_22px_55px_rgba(15,23,42,.13)] animate-[floatIdea_6s_ease-in-out_infinite] sm:w-[165px]">
                  <div className="flex items-center justify-between">
                    <span className="text-[7px] font-bold uppercase tracking-[.15em] text-gray-400">
                      Idea
                    </span>

                    <span className="text-[13px] text-[#1455d9] animate-pulse">
                      ✦
                    </span>
                  </div>

                  <p className="mt-3 m-0 text-[11px] font-black leading-4 text-[#101828]">
                    Give your audience
                    <br />
                    something to remember.
                  </p>

                  <div className="mt-3 flex gap-1.5">
                    <span className="h-1.5 w-10 rounded-full bg-blue-100" />

                    <span className="h-1.5 w-6 rounded-full bg-indigo-100" />

                    <span className="h-1.5 w-4 rounded-full bg-violet-100" />
                  </div>
                </div>

                {/* =================================================
              FLOATING VISUAL CARD
          ================================================= */}

                <div className="absolute right-[3%] top-[18%] z-30 w-[145px] rotate-[7deg] overflow-hidden rounded-[22px] border border-white bg-white p-2.5 shadow-[0_22px_55px_rgba(15,23,42,.14)] animate-[floatVisual_7s_ease-in-out_infinite] sm:w-[165px]">
                  <div className="relative h-[92px] overflow-hidden rounded-[16px] bg-gradient-to-br from-blue-100 via-indigo-50 to-violet-100">
                    <div className="absolute left-4 top-5 h-12 w-12 rounded-full bg-white/80 blur-[1px]" />

                    <div className="absolute right-3 top-3 h-7 w-7 rotate-12 rounded-xl bg-[#1455d9]/80" />

                    <div className="absolute bottom-3 left-7 h-5 w-16 rotate-[-8deg] rounded-full bg-white/70" />

                    <div className="absolute bottom-2 right-5 h-10 w-10 rounded-full border-4 border-white/70" />

                    <div className="absolute inset-x-3 bottom-3 h-px bg-white/60" />
                  </div>

                  <div className="flex items-center justify-between px-1 pt-2">
                    <span className="text-[7px] font-bold text-[#101828]">
                      Visual Story
                    </span>

                    <span className="text-[8px] text-[#1455d9]">↗</span>
                  </div>
                </div>

                {/* =================================================
              MAIN CREATIVE CANVAS
          ================================================= */}

                <div className="absolute left-1/2 top-[52%] z-20 w-[82%] max-w-[470px] -translate-x-1/2 -translate-y-1/2">
                  <div className="relative rounded-[32px] border border-white bg-white/90 p-3 shadow-[0_35px_100px_rgba(15,23,42,.16)] backdrop-blur-xl">
                    {/* CANVAS HEADER */}

                    <div className="flex items-center justify-between px-2 pb-3">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#101828] text-sm text-white">
                          ✦
                        </div>

                        <div>
                          <p className="m-0 text-[7px] font-bold uppercase tracking-[.14em] text-[#1455d9]">
                            Creative Canvas
                          </p>

                          <p className="m-0 mt-0.5 text-[10px] font-bold text-[#101828]">
                            Building a story
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />

                        <span className="text-[6px] font-bold uppercase tracking-[.1em] text-emerald-600">
                          Live
                        </span>
                      </div>
                    </div>

                    {/* CREATIVE ARTBOARD */}

                    <div className="relative h-[245px] overflow-hidden rounded-[25px] bg-[#101828]">
                      {/* glowing circles */}

                      <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl animate-pulse" />

                      <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl animate-pulse" />

                      {/* grid */}

                      <div
                        className="absolute inset-0 opacity-[.08]"
                        style={{
                          backgroundImage:
                            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
                          backgroundSize: "28px 28px",
                        }}
                      />

                      {/* BIG TYPOGRAPHY */}

                      <div className="absolute left-7 top-8 z-10">
                        <p className="m-0 text-[8px] font-bold uppercase tracking-[.25em] text-blue-300">
                          Content Creation
                        </p>

                        <div className="mt-3 overflow-hidden">
                          <p className="m-0 text-[30px] font-black leading-[.92] tracking-[-.06em] text-white sm:text-[35px]">
                            IDEAS
                          </p>

                          <p className="m-0 text-[30px] font-black leading-[.92] tracking-[-.06em] text-blue-300 sm:text-[35px]">
                            BECOME
                          </p>

                          <p className="m-0 text-[30px] font-black leading-[.92] tracking-[-.06em] text-white sm:text-[35px]">
                            STORIES.
                          </p>
                        </div>
                      </div>

                      {/* ABSTRACT CREATIVE SHAPES */}

                      <div className="absolute right-[13%] top-[18%] h-24 w-24 animate-[spin_15s_linear_infinite]">
                        <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[20px] border border-blue-300/50" />

                        <div className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/20 blur-md" />

                        <div className="absolute right-0 top-0 h-4 w-4 rounded-full bg-blue-300" />
                      </div>

                      {/* MOVING CONTENT STRIP */}

                      <div className="absolute bottom-[34px] left-0 flex w-max animate-[contentSlide_12s_linear_infinite]">
                        {[
                          "BLOG",
                          "SOCIAL",
                          "VIDEO",
                          "CAMPAIGN",
                          "STORY",
                          "CREATIVE",
                          "BLOG",
                          "SOCIAL",
                          "VIDEO",
                          "CAMPAIGN",
                        ].map((item, index) => (
                          <div
                            key={`${item}-${index}`}
                            className="mx-1.5 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[6px] font-bold tracking-[.12em] text-white/70 backdrop-blur-md"
                          >
                            {item}
                          </div>
                        ))}
                      </div>

                      {/* TOOLBAR */}

                      <div className="absolute bottom-0 left-0 right-0 flex h-8 items-center justify-between border-t border-white/10 bg-white/5 px-4">
                        <div className="flex gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-white/30" />

                          <span className="h-1.5 w-1.5 rounded-full bg-white/30" />

                          <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                        </div>

                        <span className="text-[6px] font-bold uppercase tracking-[.15em] text-white/40">
                          Creative Mode
                        </span>
                      </div>
                    </div>

                    {/* =================================================
                  CONTENT OUTPUT CARDS
              ================================================= */}

                    <div className="mt-3 grid grid-cols-3 gap-2">
                      {/* COPY */}

                      <div className="rounded-[17px] border border-gray-100 bg-[#f8faff] p-2.5">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-100 text-[10px] text-[#1455d9]">
                          Aa
                        </div>

                        <p className="mt-2 m-0 text-[8px] font-bold text-[#101828]">
                          Copy
                        </p>

                        <div className="mt-2 space-y-1">
                          <div className="h-1.5 w-full rounded-full bg-gray-200" />

                          <div className="h-1.5 w-[75%] rounded-full bg-gray-100" />
                        </div>
                      </div>

                      {/* VISUAL */}

                      <div className="rounded-[17px] border border-blue-100 bg-blue-50/60 p-2.5">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-[10px] text-[#1455d9]">
                          ◈
                        </div>

                        <p className="mt-2 m-0 text-[8px] font-bold text-[#101828]">
                          Visual
                        </p>

                        <div className="mt-2 flex gap-1">
                          <span className="h-1.5 w-5 rounded-full bg-blue-200" />

                          <span className="h-1.5 w-3 rounded-full bg-indigo-200" />
                        </div>
                      </div>

                      {/* PUBLISH */}

                      <div className="rounded-[17px] border border-gray-100 bg-[#f8faff] p-2.5">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-100 text-[10px] text-violet-600">
                          ↗
                        </div>

                        <p className="mt-2 m-0 text-[8px] font-bold text-[#101828]">
                          Publish
                        </p>

                        <div className="mt-2 flex items-center gap-1">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

                          <span className="text-[6px] text-gray-400">
                            Ready
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* =================================================
              FLOATING SOCIAL POST
          ================================================= */}

                <div className="absolute bottom-[16%] left-[4%] z-30 w-[150px] rotate-[5deg] rounded-[20px] border border-white bg-white p-3 shadow-[0_22px_55px_rgba(15,23,42,.13)] animate-[floatPost_8s_ease-in-out_infinite] sm:w-[170px]">
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-full bg-gradient-to-br from-blue-100 to-violet-100" />

                    <div>
                      <p className="m-0 text-[7px] font-bold text-[#101828]">
                        Your Brand
                      </p>

                      <p className="m-0 text-[6px] text-gray-400">Just now</p>
                    </div>
                  </div>

                  <div className="mt-2 rounded-xl bg-[#f3f6ff] p-2">
                    <p className="m-0 text-[7px] leading-3 text-gray-500">
                      Turning ideas into content people actually want to see.
                    </p>
                  </div>

                  <div className="mt-2 flex justify-between text-[7px] text-gray-400">
                    <span>♡ 1.2K</span>

                    <span>↗ 284</span>

                    <span>💬 96</span>
                  </div>
                </div>

                {/* =================================================
              PUBLISHED CARD
          ================================================= */}

                <div className="absolute bottom-[14%] right-[3%] z-30 w-[145px] rotate-[-6deg] rounded-[20px] bg-[#101828] p-3 shadow-[0_25px_60px_rgba(15,23,42,.2)] animate-[floatPublish_7s_ease-in-out_infinite] sm:w-[165px]">
                  <div className="flex items-center justify-between">
                    <span className="text-[7px] font-bold uppercase tracking-[.14em] text-blue-300">
                      Published
                    </span>

                    <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-400/10 text-[9px] text-emerald-300">
                      ✓
                    </span>
                  </div>

                  <p className="mt-3 m-0 text-[11px] font-bold text-white">
                    Content is live.
                  </p>

                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-full origin-left rounded-full bg-blue-300 animate-[scaleX_3s_ease-in-out_infinite]" />
                  </div>

                  <p className="mt-2 m-0 text-[6px] uppercase tracking-[.12em] text-white/40">
                    Ready to reach your audience
                  </p>
                </div>

                {/* =================================================
              BOTTOM CREATIVE FLOW
          ================================================= */}

                <div className="absolute bottom-[1%] left-1/2 z-40 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-blue-100 bg-white/95 px-4 py-2.5 text-[7px] font-bold uppercase tracking-[.13em] text-gray-500 shadow-[0_12px_35px_rgba(15,23,42,.1)] backdrop-blur-md sm:text-[8px]">
                  <span className="text-[#1455d9]">Imagine</span>

                  <span className="text-gray-300">→</span>

                  <span>Create</span>

                  <span className="text-gray-300">→</span>

                  <span className="text-[#1455d9]">Connect</span>
                </div>

                {/* =================================================
              SPARKS
          ================================================= */}

                <div className="absolute left-[36%] top-[10%] text-[13px] text-blue-300 animate-[sparkle_3s_ease-in-out_infinite]">
                  ✦
                </div>

                <div className="absolute right-[34%] bottom-[11%] text-[11px] text-violet-300 animate-[sparkle_4s_ease-in-out_infinite]">
                  ✧
                </div>

                {/* =================================================
              ANIMATIONS
          ================================================= */}

                <style>{`

            @keyframes floatIdea {

              0%, 100% {
                transform: translateY(0) rotate(-7deg);
              }

              50% {
                transform: translateY(-14px) rotate(-4deg);
              }

            }


            @keyframes floatVisual {

              0%, 100% {
                transform: translateY(0) rotate(7deg);
              }

              50% {
                transform: translateY(16px) rotate(4deg);
              }

            }


            @keyframes floatPost {

              0%, 100% {
                transform: translateY(0) rotate(5deg);
              }

              50% {
                transform: translateY(-13px) rotate(2deg);
              }

            }


            @keyframes floatPublish {

              0%, 100% {
                transform: translateY(0) rotate(-6deg);
              }

              50% {
                transform: translateY(12px) rotate(-3deg);
              }

            }


            @keyframes contentSlide {

              0% {
                transform: translateX(0);
              }

              100% {
                transform: translateX(-45%);
              }

            }


            @keyframes sparkle {

              0%, 100% {
                opacity: .3;
                transform: scale(.8) rotate(0deg);
              }

              50% {
                opacity: 1;
                transform: scale(1.3) rotate(20deg);
              }

            }

          `}</style>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-20">
        <div className="pointer-events-none absolute right-0 top-0 h-[320px] w-[320px] rounded-full bg-blue-50 blur-3xl" />
        <div className="relative mx-auto grid w-full max-w-[1500px] gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-end lg:gap-20">
          <Reveal direction="left">
            <div className="mb-15">
              <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9] sm:text-[11px]">
                Introduction
              </p>
              <h2 className="mt-4 m-0 max-w-[600px] text-[31px] font-bold leading-[1.08] tracking-[-.04em] text-[#101828] sm:text-[38px] lg:text-[30px]">
                Create Content With a Job to Do.
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            <Reveal direction="up">
              <div className="h-full rounded-[24px] border border-gray-200 bg-[#f8faff] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,.07)]">
                <span className="text-[11px] font-bold text-[#1455d9]">
                  01 / STRATEGY
                </span>
                <h3 className="mt-5 m-0 text-[20px] font-bold text-[#101828]">
                  Start with the business objective.
                </h3>
                <p className="mt-3 m-0 text-[13px] leading-6 text-gray-500">
                  Akkurate Digital Solutions provides content creation as part
                  of an integrated digital growth system. We begin with the
                  business objective, audience and customer journey before
                  deciding what should be created, optimized or measured.
                </p>
              </div>
            </Reveal>
            <Reveal direction="up" delay={1}>
              <div className="h-full rounded-[24px] border border-gray-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,.08)]">
                <span className="text-[11px] font-bold text-[#1455d9]">
                  02 / SYSTEM
                </span>
                <h3 className="mt-5 m-0 text-[20px] font-bold text-[#101828]">
                  Make the work useful to the business.
                </h3>
                <p className="mt-3 m-0 text-[13px] leading-6 text-gray-500">
                  The goal is not simply to deliver an asset or run a channel.
                  It is to create useful work that supports the customer journey
                  and can be evaluated against agreed business signals.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
        <Reveal direction="up">
          <div className="relative mx-auto mt-10 max-w-[1500px] rounded-[28px] border border-gray-200 bg-[#101828] p-6 shadow-[0_25px_70px_rgba(15,23,42,.12)] sm:p-8 lg:p-10">
            <div className="grid gap-7 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
              <div>
                <p className="m-0 text-[10px] font-bold uppercase tracking-[.18em] text-blue-300">
                  The Akkurate approach
                </p>
                <h3 className="mt-3 m-0 max-w-[650px] text-[25px] font-bold leading-tight tracking-[-.03em] text-white sm:text-[26px]">
                  Understand first. Create second. Improve continuously.
                </h3>
                <p className="mt-4 max-w-[650px] text-[13px] leading-7 text-gray-300 sm:text-[14px]">
                  We connect business objectives, audience needs, messages and
                  measurement so every content asset has a clear role.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  ["01", "Understand", "Business + audience"],
                  ["02", "Create", "Purpose + expression"],
                  ["03", "Improve", "Data + iteration"],
                ].map(([n, t, c]) => (
                  <div
                    key={n}
                    className="rounded-2xl border border-white/10 bg-white/[.05] p-4"
                  >
                    <span className="text-[10px] font-bold text-blue-300">
                      {n}
                    </span>
                    <p className="mt-5 m-0 text-[13px] font-bold text-white">
                      {t}
                    </p>
                    <p className="mt-1 m-0 text-[9px] leading-4 text-gray-400">
                      {c}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* BUSINESS PROBLEM */}
      <section className="bg-[#101828] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-20">
        <Reveal direction="up">
          <div className="mx-auto w-full max-w-[1200px] px-4 text-center sm:px-6 lg:px-8">
            <p className="m-0 text-[10px] font-bold uppercase tracking-[.18em] text-blue-300 sm:text-[11px]">
              The Business Problem We Solve
            </p>
            <h2 className="mt-4 m-0 text-[27px] font-bold leading-tight tracking-[-.03em] text-white sm:text-[34px] lg:text-[42px]">
              Content Should Do More Than Fill a Calendar.
            </h2>
            <p className="mx-auto mt-5 max-w-[850px] text-[14px] leading-7 text-gray-300 sm:text-[15px]">
              Akkurate creates content around customer questions, business
              expertise, brand positioning and measurable journeys, while
              keeping the writing natural and useful.
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
        </Reveal>
      </section>

      {/* ANALYTICS / PERFORMANCE */}
      <section className="relative overflow-hidden bg-[#f7faff] px-5 py-10 sm:px-8 sm:py-20 lg:px-14 lg:py-20">
        <div className="pointer-events-none absolute -right-32 top-0 h-[360px] w-[360px] rounded-full bg-blue-100/60 blur-3xl" />
        <div className="mx-auto w-full max-w-[1500px]">
          <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-center lg:gap-16">
            <Reveal direction="left">
              <div>
                <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9]">
                  Analytics / Performance
                </p>
                <h2 className="mt-3 m-0 text-[30px] font-bold leading-[1.08] tracking-[-.04em] text-[#101828] sm:text-[38px] lg:text-[37px]">
                  See Which Content Themes Carry the Most Weight.
                </h2>
                <p className="mt-5 max-w-[560px] text-[14px] leading-7 text-gray-600">
                  Reach, engagement, shares and content performance can show
                  which content categories contribute most to the overall
                  content system. Values are illustrative.
                </p>
                <div className="mt-7 grid grid-cols-2 gap-3">
                  {metrics.map(([value, label]) => (
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
                <div className="mt-6 rounded-[20px] border border-blue-100 bg-blue-50/60 p-4">
                  <div className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[12px] font-bold text-[#1455d9] shadow-sm">
                      ↗
                    </span>
                    <div>
                      <p className="m-0 text-[9px] font-bold uppercase tracking-[.12em] text-[#1455d9]">
                        Why this chart?
                      </p>
                      <p className="mt-1 m-0 text-[11px] font-bold text-[#101828]">
                        The visualization matches the main performance signals
                        for Content Creation.
                      </p>
                      <p className="mt-1 m-0 text-[8px] leading-5 text-gray-500">
                        Use these values as a measurement framework, not a
                        promise of fixed commercial results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal direction="right">
              <div className="relative overflow-hidden rounded-[30px] border border-gray-200 bg-white p-4 shadow-[0_25px_70px_rgba(15,23,42,.08)] sm:p-6">
                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-100/50 blur-3xl" />
                <div className="relative">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-5">
                    <div>
                      <p className="m-0 text-[13px] font-bold text-[#101828]">
                        Content contribution by category
                      </p>
                      <p className="mt-1 m-0 text-[10px] text-gray-400">
                        Illustrative performance view for content creation
                      </p>
                    </div>
                    <span className="rounded-full bg-emerald-50 px-2.5 py-1.5 text-[7px] font-bold uppercase tracking-[.1em] text-emerald-600">
                      Performance
                    </span>
                  </div>
                  <PerformanceChart />
                  <div className="mt-5 grid grid-cols-3 gap-2">
                    <div className="rounded-[16px] border border-gray-100 bg-[#fbfcff] p-3">
                      <p className="m-0 text-[14px] font-bold text-[#101828]">
                        Track
                      </p>
                      <p className="mt-1 text-[7px] uppercase tracking-[.08em] text-gray-400">
                        Signals
                      </p>
                    </div>
                    <div className="rounded-[16px] border border-gray-100 bg-[#fbfcff] p-3">
                      <p className="m-0 text-[14px] font-bold text-[#101828]">
                        Compare
                      </p>
                      <p className="mt-1 text-[7px] uppercase tracking-[.08em] text-gray-400">
                        Patterns
                      </p>
                    </div>
                    <div className="rounded-[16px] border border-gray-100 bg-[#fbfcff] p-3">
                      <p className="m-0 text-[14px] font-bold text-[#101828]">
                        Improve
                      </p>
                      <p className="mt-1 text-[7px] uppercase tracking-[.08em] text-gray-400">
                        Next step
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="content-creation-services"
        className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-20"
      >
        <div className="mx-auto w-full max-w-[1500px]">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[760px]">
              <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9] sm:text-[11px]">
                Our Services
              </p>
              <h2 className="mt-3 m-0 text-[30px] font-bold leading-[1.08] tracking-[-.04em] text-[#101828] sm:text-[38px]">
                Our Content Creation Services
              </h2>
            </div>
            <p className="max-w-[420px] text-[13px] leading-6 text-gray-500">
              The six capability areas form the working framework. Scope and
              deliverables are shaped around the actual business objective.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map(([title, description], index) => (
              <Reveal key={title} direction="up" delay={index % 3}>
                <article className="group relative h-full overflow-hidden rounded-[24px] border border-gray-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,.035)] transition-all duration-500 hover:-translate-y-2 hover:border-blue-100 hover:shadow-[0_25px_60px_rgba(15,23,42,.09)] sm:p-7">
                  <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-blue-50 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />
                  <div className="relative flex items-start justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f0f5ff] text-[10px] font-black text-[#1455d9]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[20px] text-gray-300 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#1455d9]">
                      {["◎", "⌗", "◈", "◇", "▣", "↗"][index]}
                    </span>
                  </div>
                  <p className="relative mt-6 m-0 text-[9px] font-bold uppercase tracking-[.16em] text-[#1455d9]">
                    CAPABILITY
                  </p>
                  <h3 className="relative mt-3 m-0 text-[19px] font-bold leading-snug tracking-[-.025em] text-[#101828]">
                    {title}
                  </h3>
                  <p className="relative mt-3 m-0 text-[12px] leading-6 text-gray-500">
                    {description}
                  </p>
                  <div className="relative mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
                    <span className="text-[8px] font-bold uppercase tracking-[.12em] text-gray-400">
                      Business value
                    </span>
                    <span className="rounded-full bg-[#f7faff] px-2.5 py-1 text-[8px] font-bold text-[#1455d9]">
                      Purposeful
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="relative overflow-hidden bg-[#f7faff] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-15">
        <div className="mx-auto w-full max-w-[1500px]">
          <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-center lg:gap-20">
            {/* LEFT CONTENT */}
            <Reveal direction="up">
              <div>
                <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9]">
                  Business Outcomes
                </p>

                <h2 className="mt-3 m-0 text-[31px] font-bold leading-[1.08] tracking-[-.04em] text-[#101828] sm:text-[40px] lg:text-[40px]">
                  Content That
                  <span className="block text-[#1455d9]">
                    Moves Your Brand Forward.
                  </span>
                </h2>

                <p className="mt-5 m-0 max-w-[540px] text-[14px] leading-7 text-gray-600">
                  Great content should do more than fill a content calendar. We
                  create purposeful content that communicates your brand,
                  connects with your audience and supports your wider marketing
                  and business goals.
                </p>

                <Link
                  to="/contact"
                  className="mt-7 inline-flex items-center rounded-full bg-[#073b91] px-5 py-3 text-[12px] font-bold text-white transition hover:-translate-y-1 hover:bg-[#052f75]"
                >
                  Discuss Your Content Goal
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </Reveal>

            {/* RIGHT OUTCOME CARDS */}
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Stronger and more consistent brand communication",
                "Content aligned with audience interests",
                "More engaging digital experiences",
                "Clearer brand voice and messaging",
                "Consistent content across marketing channels",
                "More opportunities for audience engagement",
              ].map((item, index) => (
                <Reveal key={item} direction="up" delay={index % 3}>
                  <div
                    className="
                group
                flex
                items-center
                gap-4
                rounded-[18px]
                border
                border-gray-200
                bg-white
                p-5
                shadow-[0_7px_25px_rgba(15,23,42,.035)]
                transition
                duration-300
                hover:-translate-y-1
                hover:border-blue-100
                hover:shadow-[0_18px_40px_rgba(15,23,42,.07)]
              "
                  >
                    {/* NUMBER */}
                    <span
                      className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#f0f5ff]
                  text-[10px]
                  font-black
                  text-[#1455d9]
                  transition
                  group-hover:bg-[#073b91]
                  group-hover:text-white
                "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* OUTCOME TEXT */}
                    <span className="text-[13px] font-bold leading-5 text-[#101828] sm:text-[14px]">
                      {item}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS SERVICE IS FOR */}
      <section className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-20">
        <div className="mx-auto w-full max-w-[1500px]">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start lg:gap-20">
            <Reveal direction="left">
              <div>
                <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9]">
                  Who This Service Is For
                </p>
                <h2 className="mt-3 m-0 max-w-[560px] text-[31px] font-bold leading-[1.08] tracking-[-.04em] text-[#101828] sm:text-[40px]">
                  Scope the work around the reason you need it.
                </h2>
                <p className="mt-5 max-w-[520px] text-[13px] leading-7 text-gray-500">
                  Content Creation is relevant to businesses that have a clear
                  reason to improve their digital presence, customer journey or
                  growth engine. Akkurate can recommend a focused scope, a
                  broader integrated program or a different service when that is
                  more appropriate.
                </p>
              </div>
            </Reveal>
            <div className="grid gap-3 md:grid-cols-3">
              {audienceCards.map(([title, text], index) => (
                <Reveal key={title} direction="up" delay={index}>
                  <article className="h-full rounded-[22px] border border-gray-200 bg-[#f8faff] p-5 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_45px_rgba(15,23,42,.07)]">
                    <span className="text-[9px] font-black tracking-[.15em] text-[#1455d9]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-5 text-[16px] font-bold text-[#101828]">
                      {title}
                    </h3>
                    <p className="mt-2 text-[11px] leading-5 text-gray-500">
                      {text}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      {/* =====================================================
    OUR PROCESS
===================================================== */}

<section className="relative overflow-hidden bg-[#101828] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-20">

  {/* Background glow */}
  <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-900/20 blur-3xl" />

  <div className="relative mx-auto w-full max-w-[1500px]">

    {/* HEADER */}
    <Reveal direction="up">
      <div className="mx-auto max-w-[800px] text-center">

        <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-blue-300">
          Our Process
        </p>

        <h2 className="mt-3 m-0 text-[31px] font-bold leading-[1.08] tracking-[-.04em] text-white sm:text-[40px] lg:text-[35px]">
          A clear path from objective to improvement.
        </h2>

      </div>
    </Reveal>


    {/* PROCESS STEPS */}
    <div className="relative mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">

      {/* Connecting line */}
      <div className="pointer-events-none absolute left-[10%] right-[10%] top-[42px] hidden h-px bg-gradient-to-r from-blue-500/10 via-blue-400/50 to-blue-500/10 lg:block" />

      {processSteps.map(([title, description], index) => (

        <Reveal
          key={title}
          direction="up"
          delay={index}
        >

          <div className="group relative h-full rounded-[22px] border border-white/10 bg-white/[.045] p-5 transition duration-500 hover:-translate-y-2 hover:border-blue-400/30 hover:bg-white/[.07] sm:p-6">

            {/* Number */}
            <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-blue-400/20 bg-[#101b31] text-[10px] font-black text-blue-300 shadow-[0_0_0_7px_rgba(20,85,217,.04)]">
              {String(index + 1).padStart(2, "0")}
            </div>


            {/* Title */}
            <h3 className="mt-6 m-0 text-[18px] font-bold leading-snug text-white">
              {title}
            </h3>


            {/* Description */}
            <p className="mt-3 m-0 text-[12px] leading-6 text-gray-400">
              {description}
            </p>


            {/* Step */}
            <div className="mt-6 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.12em] text-blue-300 opacity-60 transition group-hover:opacity-100">

              Step {String(index + 1).padStart(2, "0")}

              <span className="h-px w-8 bg-blue-400/40" />

            </div>

          </div>

        </Reveal>

      ))}

    </div>

  </div>

</section>

      {/* WHY AKKURATE */}
      <section className="bg-[#f7faff] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-20">
        <div className="mx-auto w-full max-w-[1500px]">
          <Reveal direction="up">
            <div className="max-w-[700px]">
              <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9]">
                Why Akkurate
              </p>
              <h2 className="mt-3 m-0 text-[31px] font-bold tracking-[-.04em] text-[#101828] sm:text-[40px]">
                A business-first partner, not just a production vendor.
              </h2>
            </div>
          </Reveal>
          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map(([n, title, description], index) => (
              <Reveal key={n} direction="up" delay={index}>
                <article className="h-full rounded-[22px] border border-gray-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,.07)]">
                  <span className="text-[9px] font-black tracking-[.15em] text-[#1455d9]">
                    {n}
                  </span>
                  <h3 className="mt-5 text-[16px] font-bold text-[#101828]">
                    {title}
                  </h3>
                  <p className="mt-2 text-[11px] leading-5 text-gray-500">
                    {description}
                  </p>
                </article>
              </Reveal>
            ))}
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
              Extend your creative capabilities with connected design and visual
              communication services that strengthen your digital presence.
            </p>
          </div>

          {/* CARDS */}
          <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* =====================================================
          UI/UX DESIGN CARD
      ===================================================== */}

            <Link
              to="/ui-ux-design"
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
                    UI/UX Design
                  </h3>

                  <p className="mt-2 m-0 max-w-[270px] text-[10px] leading-[1.6] text-gray-400 sm:text-[11px]">
                    Design intuitive digital experiences that combine usability,
                    visual clarity and seamless user interactions.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[.12em] text-cyan-300/60 transition group-hover:text-cyan-300">
                  Explore service
                  <span className="h-px w-5 bg-cyan-400/30 transition-all duration-300 group-hover:w-8" />
                </div>
              </div>

              {/* UI/UX DESIGN ORBIT */}
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
                  <div className="text-center">
                    <span className="text-[9px] font-bold uppercase tracking-[.04em] text-cyan-300/70">
                      UI/UX
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
          MOTION GRAPHICS CARD
      ===================================================== */}

            <Link
              to="/motion-graphics"
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
                    Motion Graphics
                  </h3>

                  <p className="mt-2 m-0 max-w-[270px] text-[10px] leading-[1.6] text-gray-400 sm:text-[11px]">
                    Bring ideas to life with engaging motion graphics that
                    capture attention and communicate your message clearly.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[.12em] text-violet-300/60 transition group-hover:text-violet-300">
                  Explore service
                  <span className="h-px w-5 bg-violet-400/30 transition-all duration-300 group-hover:w-8" />
                </div>
              </div>

              {/* MOTION GRAPHICS ORBIT */}
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
                  <span className="text-[9px] font-black uppercase tracking-[.04em] text-violet-300">
                    Motion
                  </span>
                </div>
              </div>

              {/* Arrow */}
              <div className="absolute bottom-4 right-4 z-30 flex h-8 w-8 items-center justify-center rounded-full border border-violet-400/20 bg-violet-500/10 text-[13px] text-violet-300 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-violet-500 group-hover:text-white">
                →
              </div>
            </Link>

            {/* =====================================================
          EXPLAINER VIDEO CARD
      ===================================================== */}

            <Link
              to="/explainer-video"
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
                    Explainer Video
                  </h3>

                  <p className="mt-2 m-0 max-w-[275px] text-[10px] leading-[1.6] text-gray-400 sm:text-[11px]">
                    Simplify complex ideas with clear, engaging explainer videos
                    that educate audiences and drive understanding.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[.12em] text-orange-300/60 transition group-hover:text-orange-300">
                  Explore service
                  <span className="h-px w-5 bg-orange-400/30 transition-all duration-300 group-hover:w-8" />
                </div>
              </div>

              {/* EXPLAINER VIDEO ORBIT */}
              <div className="pointer-events-none absolute right-[-4px] top-1/2 h-[150px] w-[150px] -translate-y-1/2 transition duration-700 group-hover:scale-110">
                {/* Glow */}
                <div className="absolute left-1/2 top-1/2 h-[110px] w-[110px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-400/10 blur-2xl" />

                {/* Orbit */}
                <div className="absolute left-1/2 top-1/2 h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 animate-[spin_10s_linear_infinite] rounded-full border border-orange-400/20 border-t-orange-400/80">
                  <span className="absolute -right-1 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-orange-400 shadow-[0_0_14px_rgba(251,146,60,.9)]" />
                </div>

                {/* Reverse orbit */}
                <div className="absolute left-1/2 top-1/2 h-[85px] w-[85px] -translate-x-1/2 -translate-y-1/2 animate-[spin_6s_linear_infinite_reverse] rounded-full border border-dashed border-orange-300/20">
                  <span className="absolute -top-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-300" />
                </div>

                {/* Center */}
                <div className="absolute left-1/2 top-1/2 flex h-[58px] w-[75px] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-xl border border-orange-300/25 bg-[#1a1719] shadow-[0_0_35px_rgba(249,115,22,.22)]">
                  <span className="text-[9px] font-black uppercase tracking-[.05em] text-orange-300">
                    Video
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

      {/* FAQ */}
      <section className="bg-[#f7faff] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-20">
        <div className="mx-auto w-full max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
            <Reveal direction="left">
              <div>
                <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9]">
                  Frequently Asked Questions
                </p>
                <h2 className="mt-3 m-0 text-[31px] font-bold leading-[1.08] tracking-[-.04em] text-[#101828] sm:text-[40px]">
                  Questions worth answering before you start.
                </h2>
                <p className="mt-5 text-[13px] leading-6 text-gray-500">
                  The scope should reflect your objective, current assets,
                  audience, timeline and budget.
                </p>
              </div>
            </Reveal>
            <div className="space-y-3">
              {faqs.map(([question, answer], index) => {
                const isOpen = openFaq === index;
                return (
                  <Reveal key={question} direction="right" delay={index % 2}>
                    <div
                      className={`group overflow-hidden rounded-[20px] border transition-all duration-500 ${isOpen ? "border-[#1455d9] bg-[#073b91] shadow-[0_18px_45px_rgba(20,85,217,.15)]" : "border-gray-200 bg-white hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_12px_35px_rgba(15,23,42,.05)]"}`}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6 sm:py-6"
                      >
                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-[9px] font-black ${isOpen ? "bg-white/10 text-blue-100" : "bg-[#f0f5ff] text-[#1455d9]"}`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={`flex-1 text-[12px] font-bold leading-6 sm:text-[13px] ${isOpen ? "text-white" : "text-[#101828]"}`}
                        >
                          {question}
                        </span>
                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-[17px] transition-all duration-300 ${isOpen ? "rotate-45 border-white/20 bg-white/10 text-white" : "border-gray-200 bg-gray-50 text-gray-500 group-hover:border-[#1455d9] group-hover:text-[#1455d9]"}`}
                        >
                          +
                        </span>
                      </button>
                      <div
                        className={`grid transition-all duration-500 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                      >
                        <div className="overflow-hidden">
                          <div className="px-5 pb-6 pl-[68px] pr-6 sm:px-6 sm:pb-7 sm:pl-[77px]">
                            <div className="mb-4 h-px bg-white/10" />
                            <p
                              className={`m-0 max-w-[680px] text-[11px] leading-6 sm:text-[12px] sm:leading-7 ${isOpen ? "text-blue-100/85" : "text-gray-500"}`}
                            >
                              {answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
          <Reveal direction="up">
            <div className="mt-10 flex flex-col gap-4 rounded-[20px] border border-gray-200 bg-white px-5 py-4 shadow-[0_8px_30px_rgba(15,23,42,.035)] sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f0f5ff] text-[#1455d9]">
                  ✓
                </div>
                <p className="m-0 text-[10px] font-semibold text-gray-600 sm:text-[11px]">
                  Can't find the answer you're looking for?
                </p>
              </div>
              <a
                href="/contact"
                className="group inline-flex items-center text-[10px] font-bold text-[#1455d9]"
              >
                Talk to our team
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 pb-14 sm:px-8 sm:pb-16 lg:px-14 lg:pb-20">
        <Reveal direction="up">
          <div className="relative mt-20 overflow-hidden rounded-[26px] bg-gradient-to-r from-[#0b2443] via-[#7434e8] to-[#245fe5] px-6 py-9 shadow-[0_25px_80px_rgba(91,45,190,.22)] sm:px-9 sm:py-10 lg:px-11 lg:py-11">
            <div className="pointer-events-none absolute -right-20 -top-28 h-[260px] w-[260px] rounded-full bg-white/10 blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto_auto] lg:items-center">
              <div>
                <p className="m-0 text-[9px] font-bold uppercase tracking-[.18em] text-white/70">
                  Ready to start?
                </p>
                <h3 className="mt-2 m-0 max-w-[650px] text-[26px] font-bold leading-[1.12] tracking-[-.035em] text-white sm:text-[32px]">
                  Give your brand a clear voice and content with a purpose.
                </h3>
                <p className="mt-3 m-0 max-w-[650px] text-[12px] leading-6 text-white/75 sm:text-[13px]">
                  Tell us what you are trying to achieve, what you have already
                  tried and what outcome matters most. Akkurate can then
                  recommend the most practical next step.
                </p>
              </div>
              <a
                href="/contact"
                className="inline-flex w-fit items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-[11px] font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#073b91]"
              >
                Start Your Content Plan
                <span className="ml-2 text-[15px]">→</span>
              </a>
              <div className="flex items-center gap-6 border-t border-white/20 pt-5 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
                <div>
                  <p className="m-0 text-[18px] font-bold text-white">UX</p>
                  <p className="mt-1 m-0 text-[8px] text-white/65">Clear</p>
                </div>
                <div className="h-9 w-px bg-white/20" />
                <div>
                  <p className="m-0 text-[18px] font-bold text-white">Brand</p>
                  <p className="mt-1 m-0 text-[8px] text-white/65">Useful</p>
                </div>
                <div className="h-9 w-px bg-white/20" />
                <div>
                  <p className="m-0 text-[18px] font-bold text-white">Data</p>
                  <p className="mt-1 m-0 text-[8px] text-white/65">Measured</p>
                </div>
              </div>
            </div>
            <div className="relative mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-4">
              {["Strategy", "Create", "Improve"].map((item, index) => (
                <React.Fragment key={item}>
                  {index > 0 && <span className="h-3 w-px bg-white/10" />}
                  <div className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[8px] text-blue-200">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[9px] font-medium text-white/55">
                      {item}
                    </span>
                  </div>
                </React.Fragment>
              ))}
              <div className="ml-auto hidden items-center gap-2 sm:flex">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,.7)]" />
                <span className="text-[9px] font-medium text-white/45">
                  Let's build something useful
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

export default ContentCreation;

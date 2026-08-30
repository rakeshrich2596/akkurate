import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
/* =========================================================
   Reels Making PAGE
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
    "Reels Strategy",
    "Define content pillars, audience and the role of short-form video in the marketing journey.",
  ],
  [
    "Hooks & Scripts",
    "Develop hooks and scripts designed to communicate one idea quickly.",
  ],
  [
    "Shot Planning",
    "Plan shots, talking points, b-roll and visual requirements before editing.",
  ],
  ["Editing", "Edit for pacing, clarity and platform-native viewing behavior."],
  [
    "Captions & Motion",
    "Use captions, text overlays and motion elements to improve comprehension without clutter.",
  ],
  [
    "Content Testing",
    "Review performance patterns and use learnings to guide future concepts.",
  ],
];
const outcomes = [
  "Consistent short-form output",
  "Stronger hooks",
  "Better brand recall",
  "Platform-ready editing",
  "Repeatable content system",
  "Performance-led learning",
];
const audienceCards = [
  [
    "Active social brands",
    "When the business needs a consistent short-form presence rather than occasional random posts.",
  ],
  [
    "Expert-led creators",
    "When knowledge, demonstrations or opinions can become repeatable short-form concepts.",
  ],
  [
    "Campaign teams",
    "When launches and offers need a steady stream of platform-ready short-form assets.",
  ],
];
const processSteps = [
  [
    "Content Strategy",
    "Understand the business objective, audience, current assets, constraints and success criteria before recommending the work.",
  ],
  [
    "Concept & Script",
    "Translate the objective into a practical strategy, scope, creative direction and measurement plan.",
  ],
  [
    "Production Planning",
    "Plan the agreed shots, talking points, b-roll and production requirements.",
  ],
  [
    "Editing & Publishing",
    "Test pacing, messaging and key viewer paths before considering the content complete.",
  ],
  [
    "Performance & Iteration",
    "Review performance, feedback and business signals and use those learnings to prioritize the next improvement.",
  ],
];
const metrics = [
  ["420K", "Views"],
  ["14.2K", "Likes"],
  ["4.8K", "Shares"],
  ["8.6K", "Saves"],
];

const relatedServices = [
  [
    "Social Media",
    "/social-media",
    "Build the broader social strategy around short-form content.",
  ],
  [
    "Meta Ads",
    "/meta-ads",
    "Use paid distribution when a content concept needs targeted reach.",
  ],
  [
    "Content Creation",
    "/content-creation",
    "Build the ideas, scripts and editorial system behind the reels.",
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
    "What is included in your reels making service?",
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
        viewBox="0 0 430 285"
        className="h-auto w-full"
        role="img"
        aria-label="Reel performance comparison"
      >
        <line x1="30" y1="255" x2="415" y2="255" className="stroke-gray-200" />
        <line x1="30" y1="25" x2="30" y2="255" className="stroke-gray-200" />
        <text
          x="415"
          y="273"
          textAnchor="end"
          className="fill-gray-400 text-[8px] font-bold"
        >
          REACH →
        </text>
        <text x="8" y="28" className="fill-gray-400 text-[8px] font-bold">
          ENGAGEMENT
        </text>
        <g key="0">
          <circle
            cx="72.89999999999999"
            cy="76.1"
            r="13"
            className="fill-blue-100 stroke-[#1455d9] stroke-2 transition-all duration-300 hover:fill-blue-200"
          />
          <text
            x="72.89999999999999"
            y="80.1"
            textAnchor="middle"
            className="fill-[#101828] text-[7px] font-bold"
          >
            Hook A
          </text>
        </g>
        <g key="1">
          <circle
            cx="141.75"
            cy="106.65"
            r="18"
            className="fill-blue-100 stroke-[#1455d9] stroke-2 transition-all duration-300 hover:fill-blue-200"
          />
          <text
            x="141.75"
            y="110.65"
            textAnchor="middle"
            className="fill-[#101828] text-[7px] font-bold"
          >
            Demo B
          </text>
        </g>
        <g key="2">
          <circle
            cx="210.6"
            cy="47.900000000000006"
            r="24"
            className="fill-blue-100 stroke-[#1455d9] stroke-2 transition-all duration-300 hover:fill-blue-200"
          />
          <text
            x="210.6"
            y="51.900000000000006"
            textAnchor="middle"
            className="fill-[#101828] text-[7px] font-bold"
          >
            Story C
          </text>
        </g>
        <g key="3">
          <circle
            cx="275.4"
            cy="85.5"
            r="20"
            className="fill-blue-100 stroke-[#1455d9] stroke-2 transition-all duration-300 hover:fill-blue-200"
          />
          <text
            x="275.4"
            y="89.5"
            textAnchor="middle"
            className="fill-[#101828] text-[7px] font-bold"
          >
            Tip D
          </text>
        </g>
        <g key="4">
          <circle
            cx="319.95"
            cy="36.150000000000006"
            r="28"
            className="fill-blue-100 stroke-[#1455d9] stroke-2 transition-all duration-300 hover:fill-blue-200"
          />
          <text
            x="319.95"
            y="40.150000000000006"
            textAnchor="middle"
            className="fill-[#101828] text-[7px] font-bold"
          >
            Offer E
          </text>
        </g>
        <g key="5">
          <circle
            cx="356.4"
            cy="120.75"
            r="15"
            className="fill-blue-100 stroke-[#1455d9] stroke-2 transition-all duration-300 hover:fill-blue-200"
          />
          <text
            x="356.4"
            y="124.75"
            textAnchor="middle"
            className="fill-[#101828] text-[7px] font-bold"
          >
            Behind F
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

function ReelsMaking() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="w-full overflow-hidden bg-white text-[#111827]">
      {/* HERO */}
      {/* =========================================================
    HERO — REELS MAKING
========================================================= */}

      <section className="relative overflow-hidden bg-[#f7faff] px-5 pb-14 pt-7 sm:px-8 sm:pb-16 sm:pt-9 lg:px-14 lg:pb-20 lg:pt-10">
        {/* BACKGROUND GLOW */}

        <div className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-blue-100/70 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[380px] w-[380px] rounded-full bg-indigo-100/50 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1600px] px-1 sm:px-2 lg:px-4 xl:px-6">
          {/* =====================================================
        BREADCRUMB
    ===================================================== */}

          <div className="mb-5 flex items-center gap-2 text-[11px] font-medium text-gray-500 sm:mb-6 sm:text-[12px]">
            <a href="/" className="transition hover:text-[#1455d9]">
              Home
            </a>

            <span>/</span>

            <span>Services</span>

            <span>/</span>

            <span className="font-medium text-[#1455d9]">Reels Making</span>
          </div>

          {/* =====================================================
        HERO GRID
    ===================================================== */}

          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[.92fr_1.08fr] lg:gap-10 xl:gap-12">
            {/* ===================================================
          LEFT CONTENT
      =================================================== */}

            <Reveal direction="left">
              <div className="max-w-[760px] pt-1">
                {/* SERVICE LABEL */}

                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[.16em] text-[#1455d9] shadow-sm sm:text-[11px]">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#1455d9]" />
                  Reels Making
                </div>

                {/* HEADING */}

                <h1 className="m-0 max-w-[760px] text-[35px] font-bold leading-[1.04] tracking-[-.045em] text-[#101828] sm:text-[44px] md:text-[45px] lg:text-[45px] xl:text-[45px]">
                  Short Videos. Stronger Attention. Better Brand Recall
                </h1>

                {/* DESCRIPTION */}

                <p className="mt-6 max-w-[660px] text-[14px] leading-7 text-gray-600 sm:text-[15px] lg:text-[16px]">
                  Create engaging short-form videos for Instagram, Facebook and
                  YouTube Shorts with strategy, scripting and editing — built
                  around your audience, business objective and measurable
                  customer journey.
                </p>

                {/* BUTTONS */}

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="/contact"
                    className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#073b91] px-6 py-3 text-[13px] font-bold text-white shadow-[0_12px_30px_rgba(7,59,145,.18)] transition duration-300 hover:-translate-y-1 hover:bg-[#052f75]"
                  >
                    Talk to Our Team
                    <span className="ml-2">→</span>
                  </a>

                  <a
                    href="#reels-making-services"
                    className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-gray-200 bg-white px-6 py-3 text-[13px] font-semibold text-gray-700 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:text-[#1455d9]"
                  >
                    Explore Services
                  </a>
                </div>

                {/* FEATURE POINTS */}

                <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 border-t border-gray-200/80 pt-5 text-[11px] font-medium text-gray-500">
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
          RIGHT — REELS VISUAL
      =================================================== */}

            <Reveal direction="right" delay={2}>
              <div className="relative mx-auto mt-0 h-[500px] w-full max-w-[620px] overflow-hidden sm:h-[510px] md:overflow-visible">
                {/* =================================================
              BACKGROUND GLOW
          ================================================= */}

                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/60 blur-[100px]" />

                {/* =================================================
              DECORATIVE CIRCLES
          ================================================= */}

                <div className="pointer-events-none absolute left-[10%] top-[12%] h-20 w-20 rounded-full border border-blue-100/60" />

                <div className="pointer-events-none absolute bottom-[15%] right-[10%] h-24 w-24 rounded-full border border-violet-100/60" />

                {/* =================================================
              FLOATING PARTICLES
          ================================================= */}

                <span className="absolute left-[18%] top-[21%] h-2 w-2 rounded-full bg-blue-400 animate-ping" />

                <span className="absolute right-[19%] top-[23%] h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />

                <span className="absolute left-[24%] bottom-[23%] h-1.5 w-1.5 rounded-full bg-indigo-300 animate-ping" />

                <span className="absolute right-[25%] bottom-[20%] h-2 w-2 rounded-full bg-blue-300 animate-pulse" />

                {/* =================================================
              TOP LABEL
          ================================================= */}

                <div className="absolute left-1/2 top-[3%] z-50 -translate-x-1/2 whitespace-nowrap rounded-full border border-blue-100 bg-white/95 px-4 py-2 text-[7px] font-bold uppercase tracking-[.18em] text-[#1455d9] shadow-[0_15px_40px_rgba(15,23,42,.08)] backdrop-blur-xl">
                  <span className="mr-2 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                  Reels Studio
                </div>

                {/* =================================================
              MAIN REEL STACK
          ================================================= */}

                <div className="absolute left-1/2 top-[75%] z-30 h-[370px] w-[250px] -translate-x-1/2 -translate-y-1/2">
                  {/* =================================================
                BACK REEL
            ================================================= */}

                  <div className="absolute left-1/2 top-1/2 h-[330px] w-[180px] -translate-x-1/2 -translate-y-1/2 translate-x-[38px] rotate-[8deg] overflow-hidden rounded-[27px] border-[5px] border-white bg-[#101828] opacity-60 shadow-[0_25px_60px_rgba(15,23,42,.16)] animate-[reelBack_8s_ease-in-out_infinite]">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-900 via-indigo-900 to-blue-900" />

                    <div className="absolute left-1/2 top-[30%] h-24 w-24 -translate-x-1/2 rounded-full bg-violet-400/30 blur-2xl" />

                    <div className="absolute bottom-[22%] left-5 right-5">
                      <div className="h-2 w-[75%] rounded-full bg-white/20" />

                      <div className="mt-2 h-1.5 w-[55%] rounded-full bg-white/10" />
                    </div>
                  </div>

                  {/* =================================================
                MIDDLE REEL
            ================================================= */}

                  <div className="absolute left-1/2 top-1/2 h-[350px] w-[190px] -translate-x-1/2 -translate-y-1/2 -translate-x-[30px] rotate-[-6deg] overflow-hidden rounded-[28px] border-[5px] border-white bg-[#101828] opacity-80 shadow-[0_30px_70px_rgba(15,23,42,.18)] animate-[reelMiddle_8s_ease-in-out_infinite]">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-[#101828] to-indigo-900" />

                    <div className="absolute right-[-20px] top-[15%] h-28 w-28 rounded-full bg-blue-400/20 blur-2xl" />

                    <div className="absolute left-[15%] top-[35%] h-20 w-20 rotate-12 rounded-[22px] border border-blue-300/20 bg-blue-300/10" />

                    <div className="absolute bottom-[20%] left-5 right-5">
                      <p className="m-0 text-[10px] font-black text-white">
                        STOP SCROLLING.
                      </p>

                      <div className="mt-2 h-1.5 w-[70%] rounded-full bg-blue-300/40" />
                    </div>
                  </div>

                  {/* =================================================
                ACTIVE CENTER REEL
            ================================================= */}

                  <div className="absolute left-1/2 top-1/2 z-30 h-[370px] w-[200px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[30px] border-[6px] border-[#101828] bg-[#101828] shadow-[0_40px_90px_rgba(15,23,42,.25)] animate-[activeReel_8s_ease-in-out_infinite]">
                    {/* REEL BACKGROUND */}

                    <div className="absolute inset-0 bg-gradient-to-b from-blue-400 via-indigo-500 to-[#101828]" />

                    {/* LIGHT EFFECTS */}

                    <div className="absolute -left-10 top-20 h-28 w-28 rounded-full bg-white/10 blur-3xl animate-pulse" />

                    <div className="absolute -right-10 bottom-20 h-32 w-32 rounded-full bg-blue-300/20 blur-3xl animate-pulse" />

                    {/* PROFILE */}

                    <div className="absolute left-3 right-3 top-4 z-20 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-7 w-7 rounded-full border-2 border-white/80 bg-white/30" />

                        <div>
                          <p className="m-0 text-[7px] font-bold text-white">
                            @yourbrand
                          </p>

                          <p className="m-0 mt-0.5 text-[5px] text-white/60">
                            Original Reel
                          </p>
                        </div>
                      </div>

                      <span className="rounded-full bg-white/10 px-2 py-1 text-[6px] font-bold text-white backdrop-blur-md">
                        Follow
                      </span>
                    </div>

                    {/* CENTER VISUAL */}

                    <div className="absolute left-1/2 top-[38%] h-[140px] w-[140px] -translate-x-1/2 -translate-y-1/2">
                      <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-[30px] border border-white/30 bg-white/10 animate-[reelShape_4s_ease-in-out_infinite]" />

                      <div className="absolute left-1/2 top-1/2 h-18 w-18 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/50 animate-[reelShape2_5s_ease-in-out_infinite]" />

                      <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-white text-[#101828] shadow-2xl">
                        <span className="text-[20px] font-black">▶</span>
                      </div>
                    </div>

                    {/* TEXT */}

                    <div className="absolute bottom-[21%] left-4 right-4 z-20">
                      <span className="rounded-full bg-white/10 px-2.5 py-1 text-[5px] font-bold uppercase tracking-[.15em] text-white backdrop-blur-md">
                        New Drop
                      </span>

                      <p className="mt-3 m-0 text-[18px] font-black leading-[.95] tracking-[-.04em] text-white">
                        MAKE THEM
                        <br />
                        STOP.
                      </p>

                      <p className="mt-2 m-0 text-[6px] leading-3 text-white/60">
                        Short-form stories designed to capture attention.
                      </p>
                    </div>

                    {/* SOCIAL ACTIONS */}

                    <div className="absolute bottom-[19%] right-2.5 z-30 flex flex-col items-center gap-3">
                      <div className="flex flex-col items-center">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
                          <span className="text-[12px] text-white animate-[heartPop_2s_ease-in-out_infinite]">
                            ♥
                          </span>
                        </div>

                        <span className="mt-1 text-[5px] font-bold text-white">
                          12.8K
                        </span>
                      </div>

                      <div className="flex flex-col items-center">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
                          <span className="text-[11px] text-white">💬</span>
                        </div>

                        <span className="mt-1 text-[5px] font-bold text-white">
                          846
                        </span>
                      </div>

                      <div className="flex flex-col items-center">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
                          <span className="text-[11px] text-white">↗</span>
                        </div>

                        <span className="mt-1 text-[5px] font-bold text-white">
                          2.4K
                        </span>
                      </div>
                    </div>

                    {/* PROGRESS */}

                    <div className="absolute bottom-3 left-3 right-3 z-40">
                      <div className="h-1 overflow-hidden rounded-full bg-white/20">
                        <div className="h-full w-[65%] rounded-full bg-white animate-[reelProgress_8s_linear_infinite]" />
                      </div>
                    </div>

                    {/* MUSIC */}

                    <div className="absolute bottom-8 left-3 z-30 flex items-center gap-1.5">
                      <span className="text-[7px] text-white">♫</span>

                      <span className="max-w-[100px] truncate text-[5px] text-white/60">
                        Trending Audio · Original Sound
                      </span>
                    </div>
                  </div>

                  {/* =================================================
                SWIPE ARROWS
            ================================================= */}

                  {/* <div className="pointer-events-none absolute left-1/2 top-[47%] z-50 flex w-[285px] -translate-x-1/2 -translate-y-1/2 items-center justify-between">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white bg-white/90 text-[12px] text-[#1455d9] shadow-lg animate-[swipeLeft_3s_ease-in-out_infinite]">
                      ←
                    </div>

                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white bg-white/90 text-[12px] text-[#1455d9] shadow-lg animate-[swipeRight_3s_ease-in-out_infinite]">
                      →
                    </div>
                  </div> */}
                </div>

                {/* =================================================
              LEFT FLOATING ANALYTICS
          ================================================= */}

                <div className="absolute left-[2%] top-[30%] z-50 w-[135px] rotate-[-6deg] rounded-[20px] border border-white bg-white/95 p-3 shadow-[0_22px_55px_rgba(15,23,42,.13)] backdrop-blur-md animate-[reelAnalyticsLeft_6s_ease-in-out_infinite] sm:w-[150px]">
                  <div className="flex items-center justify-between">
                    <span className="text-[6px] font-bold uppercase tracking-[.15em] text-gray-400">
                      Reel Performance
                    </span>

                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                  </div>

                  <div className="mt-3 flex items-end gap-2">
                    <p className="m-0 text-[21px] font-black tracking-[-.05em] text-[#101828]">
                      284K
                    </p>

                    <span className="mb-1 text-[7px] font-bold text-emerald-500">
                      ↗ 38%
                    </span>
                  </div>

                  <p className="mt-1 m-0 text-[6px] uppercase tracking-[.1em] text-gray-400">
                    Views this week
                  </p>

                  {/* MINI CHART */}

                  <div className="mt-3 flex h-7 items-end gap-1">
                    {[20, 32, 24, 45, 36, 52, 42, 65, 55, 75].map(
                      (height, index) => (
                        <span
                          key={index}
                          className="w-1.5 rounded-full bg-blue-200 animate-[analyticsBars_2s_ease-in-out_infinite]"
                          style={{
                            height: `${height / 2}px`,
                            animationDelay: `${index * 90}ms`,
                          }}
                        />
                      ),
                    )}
                  </div>
                </div>

                {/* =================================================
              RIGHT FLOATING ENGAGEMENT
          ================================================= */}

                <div className="absolute right-[2%] bottom-[25%] z-50 w-[135px] rotate-[5deg] rounded-[20px] bg-[#101828] p-3 shadow-[0_28px_65px_rgba(15,23,42,.2)] animate-[reelAnalyticsRight_7s_ease-in-out_infinite] sm:w-[150px]">
                  <div className="flex items-center justify-between">
                    <span className="text-[6px] font-bold uppercase tracking-[.15em] text-blue-300">
                      Engagement
                    </span>

                    <span className="text-[10px] text-blue-300">♥</span>
                  </div>

                  <div className="mt-3 grid grid-cols-3 gap-1.5">
                    <div>
                      <p className="m-0 text-[12px] font-black text-white">
                        12.8K
                      </p>

                      <p className="mt-1 m-0 text-[5px] uppercase tracking-[.1em] text-white/35">
                        Likes
                      </p>
                    </div>

                    <div>
                      <p className="m-0 text-[12px] font-black text-white">
                        2.4K
                      </p>

                      <p className="mt-1 m-0 text-[5px] uppercase tracking-[.1em] text-white/35">
                        Shares
                      </p>
                    </div>

                    <div>
                      <p className="m-0 text-[12px] font-black text-white">
                        846
                      </p>

                      <p className="mt-1 m-0 text-[5px] uppercase tracking-[.1em] text-white/35">
                        Comments
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center gap-1">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

                    <span className="text-[6px] text-white/40">
                      Audience is engaging
                    </span>
                  </div>
                </div>

                {/* =================================================
              SWIPE INDICATOR
          ================================================= */}

                {/* <div className="absolute bottom-[4%] left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-blue-100 bg-white/95 px-4 py-2.5 shadow-[0_15px_40px_rgba(15,23,42,.1)] backdrop-blur-md">
                  <span className="text-[7px] font-bold uppercase tracking-[.13em] text-gray-400">
                    Swipe
                  </span>

                  <div className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#1455d9]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-200" />
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-200" />
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-200" />
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-200" />
                  </div>

                  <span className="text-[7px] font-bold text-[#1455d9]">
                    1 → 5
                  </span>
                </div> */}

                {/* =================================================
              ANIMATIONS
          ================================================= */}

                <style>{`

            @keyframes activeReel {

              0%, 12% {
                transform: translate(-50%, -50%) translateX(0) scale(1);
              }

              20%, 35% {
                transform: translate(-50%, -50%) translateX(-18px) scale(.96);
              }

              43%, 58% {
                transform: translate(-50%, -50%) translateX(0) scale(1);
              }

              66%, 78% {
                transform: translate(-50%, -50%) translateX(18px) scale(.96);
              }

              86%, 100% {
                transform: translate(-50%, -50%) translateX(0) scale(1);
              }

            }


            @keyframes reelMiddle {

              0%, 20% {
                transform: translate(-50%, -50%) translateX(-30px) rotate(-6deg);
              }

              32%, 48% {
                transform: translate(-50%, -50%) translateX(0) rotate(0deg);
              }

              60%, 78% {
                transform: translate(-50%, -50%) translateX(-30px) rotate(-6deg);
              }

              90%, 100% {
                transform: translate(-50%, -50%) translateX(-30px) rotate(-6deg);
              }

            }


            @keyframes reelBack {

              0%, 25% {
                transform: translate(-50%, -50%) translateX(38px) rotate(8deg);
              }

              38%, 54% {
                transform: translate(-50%, -50%) translateX(0) rotate(0deg);
              }

              65%, 100% {
                transform: translate(-50%, -50%) translateX(38px) rotate(8deg);
              }

            }


            @keyframes reelShape {

              0%, 100% {
                transform: translate(-50%, -50%) rotate(12deg) scale(1);
              }

              50% {
                transform: translate(-50%, -50%) rotate(-12deg) scale(1.12);
              }

            }


            @keyframes reelShape2 {

              0%, 100% {
                transform: translate(-50%, -50%) scale(.85);
                opacity: .5;
              }

              50% {
                transform: translate(-50%, -50%) scale(1.1);
                opacity: 1;
              }

            }


            @keyframes reelProgress {

              0% {
                width: 0%;
              }

              80% {
                width: 100%;
              }

              100% {
                width: 0%;
              }

            }


            @keyframes heartPop {

              0%, 70%, 100% {
                transform: scale(1);
              }

              75% {
                transform: scale(1.35);
              }

              80% {
                transform: scale(.95);
              }

            }


            @keyframes swipeLeft {

              0%, 100% {
                opacity: .35;
                transform: translateX(0);
              }

              50% {
                opacity: 1;
                transform: translateX(-6px);
              }

            }


            @keyframes swipeRight {

              0%, 100% {
                opacity: .35;
                transform: translateX(0);
              }

              50% {
                opacity: 1;
                transform: translateX(6px);
              }

            }


            @keyframes reelAnalyticsLeft {

              0%, 100% {
                transform: translateY(0) rotate(-6deg);
              }

              50% {
                transform: translateY(-12px) rotate(-3deg);
              }

            }


            @keyframes reelAnalyticsRight {

              0%, 100% {
                transform: translateY(0) rotate(5deg);
              }

              50% {
                transform: translateY(12px) rotate(2deg);
              }

            }


            @keyframes analyticsBars {

              0%, 100% {
                transform: scaleY(.55);
                transform-origin: bottom;
              }

              50% {
                transform: scaleY(1.25);
                transform-origin: bottom;
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
                Build a Repeatable Short-Form Content System.
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
                  Akkurate Digital Solutions provides reels making as part of an
                  integrated digital growth system. We begin with the business
                  objective, audience and customer journey before deciding what
                  should be created, optimized or measured.
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
                <h3 className="mt-3 m-0 max-w-[650px] text-[25px] font-bold leading-tight tracking-[-.03em] text-white sm:text-[25px]">
                  Understand first. Create second. Improve continuously.
                </h3>
                <p className="mt-4 max-w-[650px] text-[13px] leading-7 text-gray-300 sm:text-[14px]">
                  We connect content pillars, hooks, production planning,
                  editing and performance learning so short-form becomes a
                  repeatable system.
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
              Short-Form Video Rewards Clarity and Speed.
            </h2>
            <p className="mx-auto mt-5 max-w-[850px] text-[14px] leading-7 text-gray-300 sm:text-[15px]">
              Akkurate focuses on the idea, hook, delivery, edit and repeatable
              production system rather than chasing every trend without
              relevance to the brand.
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
                <h2 className="mt-3 m-0 text-[30px] font-bold leading-[1.08] tracking-[-.04em] text-[#101828] sm:text-[38px] lg:text-[33px]">
                  Compare Reels Across Multiple Performance Signals.
                </h2>
                <p className="mt-5 max-w-[560px] text-[14px] leading-7 text-gray-600">
                  Views, likes, shares, saves and reach can be considered
                  together when comparing short-form concepts. Bubble size and
                  position below are illustrative.
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
                        for Reels Making.
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
                        Reel performance comparison
                      </p>
                      <p className="mt-1 m-0 text-[10px] text-gray-400">
                        Illustrative performance view for reels making
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
        id="reels-making-services"
        className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-20"
      >
        <div className="mx-auto w-full max-w-[1500px]">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[760px]">
              <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9] sm:text-[11px]">
                Our Services
              </p>
              <h2 className="mt-3 m-0 text-[30px] font-bold leading-[1.08] tracking-[-.04em] text-[#101828] sm:text-[38px]">
                Our Reels Making Services
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
            <div>
              <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9]">
                Reels Making Outcomes
              </p>

              <h2 className="mt-3 m-0 text-[31px] font-bold leading-[1.08] tracking-[-.04em] text-[#101828] sm:text-[40px] lg:text-[35px]">
                Create Reels That
                <span className="block text-[#1455d9]">
                  Get Attention & Drive Action.
                </span>
              </h2>

              <p className="mt-5 m-0 max-w-[540px] text-[14px] leading-7 text-gray-600">
                The right Reel can turn a simple idea into attention, engagement
                and brand discovery. We focus on creating short-form content
                that is visually engaging, easy to understand and aligned with
                your audience and business goals.
              </p>

              <Link
                to="/contact"
                className="mt-7 inline-flex items-center rounded-full bg-[#073b91] px-5 py-3 text-[12px] font-bold text-white transition hover:-translate-y-1 hover:bg-[#052f75]"
              >
                Discuss Your Content Goal
                <span className="ml-2">→</span>
              </Link>
            </div>

            {/* RIGHT OUTCOME CARDS */}
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Stronger audience attention",
                "More engaging short-form content",
                "Consistent brand presence",
                "Better content discoverability",
                "Higher social engagement",
                "More opportunities for brand reach",
              ].map((outcome, index) => (
                <div
                  key={outcome}
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

                  <span className="text-[13px] font-bold leading-5 text-[#101828] sm:text-[14px]">
                    {outcome}
                  </span>
                </div>
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
                  Reels Making is relevant to businesses that have a clear
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
      {/* =====================================================
    OUR PROCESS
===================================================== */}

      <section className="relative overflow-hidden bg-[#101828] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-20">
        {/* Background Glow */}
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

          {/* PROCESS CARDS */}
          <div className="relative mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {/* Connecting Line */}
            <div className="pointer-events-none absolute left-[10%] right-[10%] top-[42px] hidden h-px bg-gradient-to-r from-blue-500/10 via-blue-400/50 to-blue-500/10 lg:block" />

            {processSteps.map(([title, description], index) => (
              <Reveal key={title} direction="up" delay={index}>
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

                  {/* Step Indicator */}
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

      {/* RELATED SERVICES */}
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
              Strengthen your online visibility with connected search and
              discovery solutions that help your brand reach the right audience.
            </p>
          </div>

          {/* CARDS */}
          <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* =====================================================
          GEO CARD
      ===================================================== */}

            <Link
              to="/geo"
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
                    GEO
                  </h3>

                  <p className="mt-2 m-0 max-w-[270px] text-[10px] leading-[1.6] text-gray-400 sm:text-[11px]">
                    Improve your brand visibility across AI-powered search and
                    discovery platforms so your business can be found more
                    easily.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[.12em] text-cyan-300/60 transition group-hover:text-cyan-300">
                  Explore service
                  <span className="h-px w-5 bg-cyan-400/30 transition-all duration-300 group-hover:w-8" />
                </div>
              </div>

              {/* GEO ORBIT */}
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
                  <span className="text-[8px] font-bold uppercase tracking-[.04em] text-cyan-300/70">
                    GEO
                  </span>
                </div>
              </div>

              {/* Arrow */}
              <div className="absolute bottom-4 right-4 z-30 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-500/10 text-[13px] text-cyan-300 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-cyan-500 group-hover:text-white">
                →
              </div>
            </Link>

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
                    AEO
                  </h3>

                  <p className="mt-2 m-0 max-w-[270px] text-[10px] leading-[1.6] text-gray-400 sm:text-[11px]">
                    Optimize your content for answer engines so your brand can
                    appear in relevant AI-generated answers and search results.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[.12em] text-violet-300/60 transition group-hover:text-violet-300">
                  Explore service
                  <span className="h-px w-5 bg-violet-400/30 transition-all duration-300 group-hover:w-8" />
                </div>
              </div>

              {/* AEO ORBIT */}
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
                  <span className="text-[8px] font-black uppercase tracking-[.04em] text-violet-300">
                    AEO
                  </span>
                </div>
              </div>

              {/* Arrow */}
              <div className="absolute bottom-4 right-4 z-30 flex h-8 w-8 items-center justify-center rounded-full border border-violet-400/20 bg-violet-500/10 text-[13px] text-violet-300 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-violet-500 group-hover:text-white">
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
                    SEO
                  </h3>

                  <p className="mt-2 m-0 max-w-[275px] text-[10px] leading-[1.6] text-gray-400 sm:text-[11px]">
                    Improve your website's organic search visibility with
                    strategic SEO that drives relevant traffic and long-term
                    growth.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[.12em] text-orange-300/60 transition group-hover:text-orange-300">
                  Explore service
                  <span className="h-px w-5 bg-orange-400/30 transition-all duration-300 group-hover:w-8" />
                </div>
              </div>

              {/* SEO ORBIT */}
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
                <div className="absolute left-1/2 top-1/2 flex h-[58px] w-[55px] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-xl border border-orange-300/25 bg-[#1a1719] shadow-[0_0_35px_rgba(249,115,22,.22)]">
                  <span className="text-[9px] font-black uppercase tracking-[.04em] text-orange-300">
                    SEO
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
                  Create short-form content with a repeatable strategy instead
                  of random videos.
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
                Start Your Reels Strategy
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
              {["Strategy", "Produce", "Learn"].map((item, index) => (
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

export default ReelsMaking;

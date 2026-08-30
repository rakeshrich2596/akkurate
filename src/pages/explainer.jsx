import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
/* =========================================================
   Explainer Video PAGE
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
    "Message & Script",
    "Clarify the single idea the video needs to communicate and write a concise script around the audience.",
  ],
  [
    "Storyboard",
    "Translate the script into a visual sequence so the story is easy to follow.",
  ],
  [
    "Visual Style",
    "Create a visual language that supports the brand and subject matter.",
  ],
  [
    "Animation",
    "Animate the approved story with pacing that maintains attention without sacrificing clarity.",
  ],
  [
    "Voice & Sound",
    "Coordinate narration, music and sound elements where included in scope.",
  ],
  [
    "Platform Delivery",
    "Deliver versions suitable for websites, presentations, social media or campaigns as required.",
  ],
];
const outcomes = [
  "Clearer product explanation",
  "Better audience understanding",
  "Stronger campaign assets",
  "Reusable sales content",
  "Consistent brand storytelling",
  "Multi-platform delivery",
];
const audienceCards = [
  [
    "Complex products",
    "When the value proposition is difficult to explain through text or static visuals alone.",
  ],
  [
    "Sales and marketing teams",
    "When a reusable visual story can support presentations, campaigns or digital journeys.",
  ],
  [
    "New offers",
    "When an audience needs a concise explanation of what the product or service does and why it matters.",
  ],
];
const processSteps = [
  [
    "Discovery & Messaging",
    "Understand the business objective, audience, current assets, constraints and success criteria before recommending the work.",
  ],
  [
    "Script",
    "Translate the objective into a practical strategy, scope, content direction and measurement plan.",
  ],
  [
    "Storyboard & Style",
    "Create the agreed story structure and visual language with brand and audience requirements in mind.",
  ],
  [
    "Animation & Sound",
    "Test pacing, narration, messaging and key comprehension moments before considering the work complete.",
  ],
  [
    "Review & Delivery",
    "Review feedback and business signals, then deliver the required platform versions.",
  ],
];
const metrics = [
  ["84K", "Views"],
  ["3.8m", "Watch time"],
  ["71%", "Completion"],
  ["8.2%", "Engagement"],
];
const relatedServices = [
  [
    "Motion Graphics",
    "/motion-graphics",
    "Create the animated visual language that supports the story.",
  ],
  [
    "Content Creation",
    "/content-creation",
    "Build scripts and supporting content around the core message.",
  ],
  [
    "Corporate Video",
    "/corporate-video",
    "Extend explanation into company and stakeholder storytelling.",
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
    "What is included in your explainer video service?",
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
        viewBox="0 0 430 260"
        className="h-auto w-full"
        role="img"
        aria-label="Viewer retention over video duration"
      >
        <path
          d="M 20 225 L 20 53 L 85 77 L 150 101 L 215 125 L 280 146 L 345 170 L 410 188 L 410 225 Z"
          className="fill-blue-100/70"
        />
        <path
          d="M 20 53 L 85 77 L 150 101 L 215 125 L 280 146 L 345 170 L 410 188"
          fill="none"
          className="stroke-[#1455d9] stroke-[3]"
        />
        <circle key="0" cx="20" cy="53" r="4" className="fill-[#1455d9]" />
        <circle key="1" cx="85" cy="77" r="4" className="fill-[#1455d9]" />
        <circle key="2" cx="150" cy="101" r="4" className="fill-[#1455d9]" />
        <circle key="3" cx="215" cy="125" r="4" className="fill-[#1455d9]" />
        <circle key="4" cx="280" cy="146" r="4" className="fill-[#1455d9]" />
        <circle key="5" cx="345" cy="170" r="4" className="fill-[#1455d9]" />
        <circle key="6" cx="410" cy="188" r="4" className="fill-[#1455d9]" />
        <text
          key="l0"
          x="20"
          y="247"
          textAnchor="middle"
          className="fill-gray-400 text-[8px]"
        >
          0s
        </text>
        <text
          key="l1"
          x="85"
          y="247"
          textAnchor="middle"
          className="fill-gray-400 text-[8px]"
        >
          10s
        </text>
        <text
          key="l2"
          x="150"
          y="247"
          textAnchor="middle"
          className="fill-gray-400 text-[8px]"
        >
          20s
        </text>
        <text
          key="l3"
          x="215"
          y="247"
          textAnchor="middle"
          className="fill-gray-400 text-[8px]"
        >
          30s
        </text>
        <text
          key="l4"
          x="280"
          y="247"
          textAnchor="middle"
          className="fill-gray-400 text-[8px]"
        >
          40s
        </text>
        <text
          key="l5"
          x="345"
          y="247"
          textAnchor="middle"
          className="fill-gray-400 text-[8px]"
        >
          50s
        </text>
        <text
          key="l6"
          x="410"
          y="247"
          textAnchor="middle"
          className="fill-gray-400 text-[8px]"
        >
          60s
        </text>
        <line x1="20" y1="225" x2="410" y2="225" className="stroke-gray-200" />
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

function ExplainerVideo() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="w-full overflow-hidden bg-white text-[#111827]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#f7faff] px-5 pb-14 pt-7 sm:px-8 sm:pb-16 sm:pt-9 lg:px-14 lg:pb-20 lg:pt-10">
        {/* =====================================================
      BACKGROUND
  ===================================================== */}

        <div className="pointer-events-none absolute -right-48 -top-48 h-[520px] w-[520px] rounded-full bg-blue-100/70 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-48 -left-48 h-[420px] w-[420px] rounded-full bg-indigo-100/50 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1600px] px-1 sm:px-2 lg:px-4 xl:px-6">
          {/* =====================================================
        BREADCRUMB
        HOME / SERVICES / EXPLAINER VIDEO
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

            <span className="font-medium text-[#1455d9]">Explainer Video</span>
          </div>

          {/* =====================================================
        HERO GRID
        LEFT + RIGHT START AT SAME TOP LINE
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
                  Explainer Video
                </div>

                {/* HEADING */}

                <h1 className="m-0 max-w-[760px] text-[35px] font-bold leading-[1.04] tracking-[-.045em] text-[#101828] sm:text-[44px] md:text-[45px] lg:text-[45px] xl:text-[40px]">
                  Explain What You Do in a Way People Remember
                </h1>

                {/* DESCRIPTION */}

                <p className="mt-5 max-w-[660px] text-[14px] leading-7 text-gray-600 sm:text-[15px] lg:text-[16px]">
                  Explain products, services and complex ideas with clear,
                  engaging explainer videos built around your audience — built
                  around your audience, business objective and measurable
                  customer journey.
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
                    href="#explainer-video-services"
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
          RIGHT — STORYBOARD → MOTION → FINAL
      =================================================== */}

            <Reveal direction="right" delay={2}>
              <div className="relative mx-auto -mt-1 h-[500px] w-full max-w-[640px] overflow-visible">
                {/* =================================================
              AMBIENT BACKGROUND
          ================================================= */}

                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/60 blur-[100px]" />

                {/* Decorative rings */}

                <div className="pointer-events-none absolute left-[8%] top-[12%] h-24 w-24 rounded-full border border-blue-100/70" />

                <div className="pointer-events-none absolute bottom-[12%] right-[8%] h-20 w-20 rounded-full border border-violet-100/70" />

                {/* =================================================
              FLOATING PARTICLES
          ================================================= */}

                <span className="absolute left-[17%] top-[19%] h-1.5 w-1.5 rounded-full bg-blue-300 animate-[particleFloat_7s_ease-in-out_infinite]" />

                <span className="absolute left-[29%] top-[11%] h-1 w-1 rounded-full bg-indigo-300 animate-[particleFloat_9s_ease-in-out_infinite_1s]" />

                <span className="absolute right-[17%] top-[23%] h-1.5 w-1.5 rounded-full bg-blue-200 animate-[particleFloat_8s_ease-in-out_infinite_2s]" />

                <span className="absolute right-[25%] bottom-[20%] h-1 w-1 rounded-full bg-violet-300 animate-[particleFloat_10s_ease-in-out_infinite_1.5s]" />

                {/* =================================================
              TOP LABEL
          ================================================= */}

                <div className="absolute left-1/2 top-[3%] z-50 -translate-x-1/2 whitespace-nowrap rounded-full border border-blue-100 bg-white/95 px-4 py-2 text-[7px] font-bold uppercase tracking-[.18em] text-[#1455d9] shadow-[0_12px_35px_rgba(15,23,42,.08)] backdrop-blur-md">
                  <span className="mr-2 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                  Motion Story Studio
                </div>

                {/* =================================================
              MAIN STORYBOARD
          ================================================= */}

                <div className="absolute left-1/2 top-[52%] z-30 w-[90%] max-w-[550px] -translate-x-1/2 -translate-y-1/2">
                  <div className="relative rounded-[30px] border border-white bg-white/95 p-3 shadow-[0_35px_100px_rgba(15,23,42,.16)] backdrop-blur-xl">
                    {/* =================================================
                  HEADER
              ================================================= */}

                    <div className="flex items-center justify-between px-2 pb-3">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#101828] text-sm text-white">
                          ▶
                        </div>

                        <div>
                          <p className="m-0 text-[7px] font-bold uppercase tracking-[.15em] text-[#1455d9]">
                            Explainer Video
                          </p>

                          <p className="m-0 mt-0.5 text-[10px] font-bold text-[#101828]">
                            Storyboard to Motion
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-1">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#1455d9]" />

                        <span className="text-[6px] font-bold uppercase tracking-[.12em] text-[#1455d9]">
                          Animating
                        </span>
                      </div>
                    </div>

                    {/* =================================================
                  THREE STORYBOARD PANELS
              ================================================= */}

                    <div className="relative grid grid-cols-3 gap-2">
                      {/* SCENE 01 */}

                      <div className="scene-card relative overflow-hidden rounded-[19px] border border-gray-200 bg-[#f8faff] p-2">
                        <div className="mb-2 flex items-center justify-between">
                          <span className="text-[6px] font-black uppercase tracking-[.13em] text-[#1455d9]">
                            Scene 01
                          </span>

                          <span className="text-[7px] text-gray-300">
                            00:00
                          </span>
                        </div>

                        <div className="relative h-[140px] overflow-hidden rounded-[14px] border border-dashed border-blue-200 bg-white">
                          {/* SUN */}

                          <div className="absolute right-3 top-3 h-8 w-8 rounded-full border-2 border-blue-200 animate-[sunPulse_4s_ease-in-out_infinite]" />

                          {/* MOUNTAINS */}

                          <div className="absolute bottom-8 left-3 h-16 w-24 rotate-[-12deg] border-l-2 border-b-2 border-blue-200" />

                          <div className="absolute bottom-8 right-2 h-14 w-20 rotate-[14deg] border-r-2 border-b-2 border-indigo-200" />

                          {/* CHARACTER */}

                          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-[characterSketch_4s_ease-in-out_infinite]">
                            <div className="mx-auto h-7 w-7 rounded-full border-2 border-[#101828]" />

                            <div className="mx-auto mt-1 h-12 w-7 rounded-t-full border-2 border-[#101828]" />
                          </div>

                          <div className="absolute left-3 top-3 h-px w-12 bg-gray-200" />

                          <div className="absolute left-3 top-6 h-px w-8 bg-gray-100" />
                        </div>

                        <p className="mt-2 m-0 text-[7px] font-bold text-[#101828]">
                          The idea begins.
                        </p>
                      </div>

                      {/* SCENE 02 */}

                      <div className="scene-card relative overflow-hidden rounded-[19px] border border-blue-100 bg-blue-50/50 p-2">
                        <div className="mb-2 flex items-center justify-between">
                          <span className="text-[6px] font-black uppercase tracking-[.13em] text-[#1455d9]">
                            Scene 02
                          </span>

                          <span className="text-[7px] text-gray-300">
                            00:04
                          </span>
                        </div>

                        <div className="relative h-[140px] overflow-hidden rounded-[14px] bg-[#101828]">
                          {/* GLOW */}

                          <div className="absolute -left-5 -top-5 h-24 w-24 rounded-full bg-blue-500/20 blur-2xl animate-pulse" />

                          <div className="absolute -bottom-5 -right-5 h-24 w-24 rounded-full bg-violet-500/20 blur-2xl animate-pulse" />

                          {/* MOVING CIRCLE */}

                          <div className="absolute left-[12%] top-[22%] h-9 w-9 rounded-full bg-blue-300 animate-[motionCircle_4s_ease-in-out_infinite]" />

                          {/* CHARACTER */}

                          <div className="absolute bottom-6 left-[50%] animate-[characterMove_4s_ease-in-out_infinite]">
                            <div className="mx-auto h-7 w-7 rounded-full bg-white" />

                            <div className="mx-auto mt-1 h-11 w-7 rounded-t-full bg-blue-300" />
                          </div>

                          {/* PARTICLES */}

                          <span className="absolute left-[25%] top-[50%] text-[11px] text-white/70 animate-[particleMove_3s_linear_infinite]">
                            ✦
                          </span>

                          <span className="absolute left-[55%] top-[25%] text-[8px] text-blue-300 animate-[particleMove_3.5s_linear_infinite]">
                            ✧
                          </span>

                          <span className="absolute right-[18%] top-[60%] text-[9px] text-violet-300 animate-[particleMove_4s_linear_infinite]">
                            •
                          </span>

                          {/* MOTION LINE */}

                          <div className="absolute left-[10%] top-[47%] h-px w-[70%] overflow-hidden bg-white/10">
                            <div className="h-full w-[35%] bg-blue-300 animate-[motionLine_2s_linear_infinite]" />
                          </div>

                          {/* PLAY */}

                          <div className="absolute bottom-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
                            <span className="ml-0.5 text-[8px] text-white">
                              ▶
                            </span>
                          </div>
                        </div>

                        <p className="mt-2 m-0 text-[7px] font-bold text-[#101828]">
                          The story comes alive.
                        </p>
                      </div>

                      {/* SCENE 03 */}

                      <div className="scene-card relative overflow-hidden rounded-[19px] border border-gray-200 bg-[#f8faff] p-2">
                        <div className="mb-2 flex items-center justify-between">
                          <span className="text-[6px] font-black uppercase tracking-[.13em] text-[#1455d9]">
                            Scene 03
                          </span>

                          <span className="text-[7px] text-gray-300">
                            00:08
                          </span>
                        </div>

                        <div className="relative h-[140px] overflow-hidden rounded-[14px] bg-gradient-to-br from-blue-100 via-indigo-50 to-violet-100">
                          {/* FINAL OBJECT */}

                          <div className="absolute left-1/2 top-[38%] h-14 w-14 -translate-x-1/2 rounded-[18px] rotate-12 bg-white shadow-xl animate-[finalObject_4s_ease-in-out_infinite]" />

                          <div className="absolute left-[16%] top-[18%] h-5 w-5 rounded-full bg-blue-200 animate-pulse" />

                          <div className="absolute right-[15%] bottom-[20%] h-7 w-7 rounded-full border-2 border-white/80 animate-pulse" />

                          {/* FINAL TEXT */}

                          <div className="absolute bottom-4 left-0 right-0 text-center">
                            <p className="m-0 text-[9px] font-black tracking-[.12em] text-[#101828]">
                              YOUR STORY
                            </p>

                            <p className="mt-1 m-0 text-[5px] uppercase tracking-[.2em] text-[#1455d9]">
                              Made memorable
                            </p>
                          </div>
                        </div>

                        <p className="mt-2 m-0 text-[7px] font-bold text-[#101828]">
                          The message is ready.
                        </p>
                      </div>
                    </div>

                    {/* =================================================
                  TIMELINE
              ================================================= */}

                    <div className="mt-3 rounded-[18px] border border-gray-100 bg-[#f8faff] p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="m-0 text-[6px] font-bold uppercase tracking-[.15em] text-gray-400">
                            Timeline
                          </p>

                          <p className="mt-1 m-0 text-[10px] font-black text-[#101828]">
                            Storyboard → Motion → Final
                          </p>
                        </div>

                        <div className="rounded-full bg-white px-2.5 py-1 text-[6px] font-bold text-[#1455d9] shadow-sm">
                          00:12
                        </div>
                      </div>

                      <div className="relative mt-3 h-2 overflow-hidden rounded-full bg-gray-200">
                        <div className="absolute left-0 top-0 h-full w-[32%] rounded-full bg-[#1455d9] animate-[timelineProgress_6s_ease-in-out_infinite]" />

                        <div className="absolute left-[32%] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-white bg-[#1455d9] shadow-sm animate-[timelineCursor_6s_linear_infinite]" />
                      </div>

                      <div className="mt-2 flex justify-between">
                        <span className="text-[5px] font-bold uppercase tracking-[.1em] text-gray-400">
                          Sketch
                        </span>

                        <span className="text-[5px] font-bold uppercase tracking-[.1em] text-gray-400">
                          Animate
                        </span>

                        <span className="text-[5px] font-bold uppercase tracking-[.1em] text-gray-400">
                          Final
                        </span>
                      </div>
                    </div>

                    {/* =================================================
                  FINAL OUTPUT
              ================================================= */}

                    <div className="mt-3 flex items-center justify-between rounded-[17px] bg-[#101828] px-3 py-2.5">
                      <div className="flex items-center gap-2">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-300/10 text-[10px] text-blue-300">
                          ▶
                        </div>

                        <div>
                          <p className="m-0 text-[6px] font-bold uppercase tracking-[.13em] text-blue-300">
                            Final Output
                          </p>

                          <p className="m-0 mt-0.5 text-[8px] font-bold text-white">
                            Explainer_Story.mp4
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

                        <span className="text-[6px] font-bold uppercase tracking-[.1em] text-emerald-300">
                          Ready
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* =================================================
              LEFT FLOATING STORYBOARD CARD
          ================================================= */}

                <div className="absolute left-[1%] top-[32%] z-50 w-[120px] rotate-[-7deg] rounded-[19px] border border-white bg-white p-2.5 shadow-[0_20px_50px_rgba(15,23,42,.12)] animate-[floatStoryboard_6s_ease-in-out_infinite] sm:w-[140px]">
                  <div className="flex items-center justify-between">
                    <span className="text-[6px] font-bold uppercase tracking-[.14em] text-gray-400">
                      Storyboard
                    </span>

                    <span className="text-[9px] text-[#1455d9]">✦</span>
                  </div>

                  <div className="mt-2 grid grid-cols-3 gap-1">
                    <div className="h-9 rounded-lg border border-dashed border-blue-200 bg-blue-50" />

                    <div className="h-9 rounded-lg border border-dashed border-indigo-200 bg-indigo-50" />

                    <div className="h-9 rounded-lg border border-dashed border-violet-200 bg-violet-50" />
                  </div>

                  <p className="mt-2 m-0 text-[6px] leading-3 text-gray-400">
                    Plan every frame before the motion begins.
                  </p>
                </div>

                {/* =================================================
              RIGHT FLOATING MOTION CARD
          ================================================= */}

                <div className="absolute right-[1%] bottom-[26%] z-50 w-[130px] rotate-[6deg] rounded-[19px] bg-[#101828] p-3 shadow-[0_25px_60px_rgba(15,23,42,.2)] animate-[floatMotion_7s_ease-in-out_infinite] sm:w-[150px]">
                  <div className="flex items-center justify-between">
                    <span className="text-[6px] font-bold uppercase tracking-[.14em] text-blue-300">
                      Motion
                    </span>

                    <span className="text-[10px] text-white">↗</span>
                  </div>

                  <div className="mt-3 flex items-end gap-1">
                    {[20, 35, 25, 48, 38, 60, 52, 72].map((height, index) => (
                      <span
                        key={index}
                        className="w-1.5 rounded-full bg-blue-300/70 animate-[barMotion_2s_ease-in-out_infinite]"
                        style={{
                          height: `${height / 2}px`,
                          animationDelay: `${index * 100}ms`,
                        }}
                      />
                    ))}
                  </div>

                  <p className="mt-2 m-0 text-[6px] uppercase tracking-[.12em] text-white/40">
                    Every frame has purpose
                  </p>
                </div>

                {/* =================================================
              BOTTOM PROCESS
          ================================================= */}

                <div className="absolute bottom-[1%] left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-blue-100 bg-white/95 px-4 py-2.5 text-[7px] font-bold uppercase tracking-[.14em] text-gray-500 shadow-[0_12px_35px_rgba(15,23,42,.1)] backdrop-blur-md sm:text-[8px]">
                  <span className="text-[#1455d9]">Storyboard</span>

                  <span className="text-gray-300">→</span>

                  <span>Animate</span>

                  <span className="text-gray-300">→</span>

                  <span className="text-[#1455d9]">Final Video</span>
                </div>

                {/* =================================================
              ANIMATIONS
          ================================================= */}

                <style>{`

            @keyframes particleFloat {

              0%, 100% {
                opacity: .2;
                transform: translateY(0) scale(.7);
              }

              50% {
                opacity: 1;
                transform: translateY(-16px) scale(1.25);
              }

            }


            @keyframes sunPulse {

              0%, 100% {
                transform: scale(1);
                opacity: .5;
              }

              50% {
                transform: scale(1.15);
                opacity: 1;
              }

            }


            @keyframes characterSketch {

              0%, 100% {
                transform: translateX(-50%) translateY(0);
              }

              50% {
                transform: translateX(-50%) translateY(-8px);
              }

            }


            @keyframes motionCircle {

              0%, 100% {
                transform: translate(0, 0) scale(1);
              }

              50% {
                transform: translate(72px, 45px) scale(1.25);
              }

            }


            @keyframes characterMove {

              0%, 100% {
                transform: translateX(-50%) translateY(0);
              }

              50% {
                transform: translateX(-50%) translateY(-12px);
              }

            }


            @keyframes particleMove {

              0% {
                transform: translate(0, 0) scale(.7);
                opacity: 0;
              }

              25% {
                opacity: 1;
              }

              75% {
                opacity: 1;
              }

              100% {
                transform: translate(35px, -25px) scale(1.3);
                opacity: 0;
              }

            }


            @keyframes motionLine {

              0% {
                transform: translateX(-100%);
              }

              100% {
                transform: translateX(300%);
              }

            }


            @keyframes finalObject {

              0%, 100% {
                transform: translateX(-50%) rotate(12deg) scale(1);
              }

              50% {
                transform: translateX(-50%) rotate(-8deg) scale(1.1);
              }

            }


            @keyframes timelineProgress {

              0%, 10% {
                width: 5%;
              }

              50% {
                width: 62%;
              }

              85% {
                width: 95%;
              }

              100% {
                width: 5%;
              }

            }


            @keyframes timelineCursor {

              0% {
                left: 3%;
              }

              50% {
                left: 62%;
              }

              85% {
                left: 95%;
              }

              100% {
                left: 3%;
              }

            }


            @keyframes floatStoryboard {

              0%, 100% {
                transform: translateY(0) rotate(-7deg);
              }

              50% {
                transform: translateY(-14px) rotate(-3deg);
              }

            }


            @keyframes floatMotion {

              0%, 100% {
                transform: translateY(0) rotate(6deg);
              }

              50% {
                transform: translateY(13px) rotate(3deg);
              }

            }


            @keyframes barMotion {

              0%, 100% {
                transform: scaleY(.5);
                transform-origin: bottom;
              }

              50% {
                transform: scaleY(1.35);
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
                Turn Complexity Into a Story People Can Follow.
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
                  Akkurate Digital Solutions provides explainer video as part of
                  an integrated digital growth system. We begin with the
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
                  We connect the core message, visual sequence, pacing and
                  delivery requirements so the video has a clear communication
                  job.
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
              Explain From the Audience's Problem, Not the Inside Out.
            </h2>
            <p className="mx-auto mt-5 max-w-[850px] text-[14px] leading-7 text-gray-300 sm:text-[15px]">
              Complex products often fail to communicate because businesses
              explain them from the inside out. Akkurate starts with the
              audience's problem, then builds the explanation around the value
              and action that matter.
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
                  See How Viewer Retention Changes Over Time.
                </h2>
                <p className="mt-5 max-w-[560px] text-[14px] leading-7 text-gray-600">
                  Views, watch time, completion and engagement can reveal where
                  an explainer holds attention or loses viewers. The retention
                  curve below is illustrative.
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
                        for Explainer Video.
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
                        Viewer retention over video duration
                      </p>
                      <p className="mt-1 m-0 text-[10px] text-gray-400">
                        Illustrative performance view for explainer video
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
        id="explainer-video-services"
        className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-20"
      >
        <div className="mx-auto w-full max-w-[1500px]">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[760px]">
              <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9] sm:text-[11px]">
                Our Services
              </p>
              <h2 className="mt-3 m-0 text-[30px] font-bold leading-[1.08] tracking-[-.04em] text-[#101828] sm:text-[38px]">
                Our Explainer Video Services
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

                <h2 className="mt-3 m-0 text-[31px] font-bold leading-[1.08] tracking-[-.04em] text-[#101828] sm:text-[40px] lg:text-[39px]">
                  Explainer Videos That
                  <span className="block text-[#1455d9]">
                    Make Complex Ideas Simple.
                  </span>
                </h2>

                <p className="mt-5 m-0 max-w-[540px] text-[14px] leading-7 text-gray-600">
                  A good explainer video turns complicated ideas, products or
                  services into a message people can quickly understand and
                  remember. We create clear, engaging stories that help your
                  audience understand what you offer and why it matters.
                </p>

                <Link
                  to="/contact"
                  className="mt-7 inline-flex items-center rounded-full bg-[#073b91] px-5 py-3 text-[12px] font-bold text-white transition hover:-translate-y-1 hover:bg-[#052f75]"
                >
                  Discuss Your Video Goal
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </Reveal>

            {/* RIGHT OUTCOME CARDS */}
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Clearer explanation of complex products or services",
                "Faster understanding of your core message",
                "More engaging audience communication",
                "Stronger product and service awareness",
                "Better brand storytelling",
                "Reusable video content across digital channels",
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

                    {/* OUTCOME */}
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
                  Explainer Video is relevant to businesses that have a clear
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
          {/* Header */}
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

          {/* Process Cards */}
          <div className="relative mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {/* Connecting Line */}
            <div className="pointer-events-none absolute left-[10%] right-[10%] top-[42px] hidden h-px bg-gradient-to-r from-blue-500/10 via-blue-400/50 to-blue-500/10 lg:block" />

            {processSteps.map(([title, description], index) => (
              <Reveal key={title} direction="up" delay={index}>
                <div className="group relative h-full rounded-[22px] border border-white/10 bg-white/[.045] p-5 transition duration-500 hover:-translate-y-2 hover:border-blue-400/30 hover:bg-white/[.07] sm:p-6">
                  {/* Number Circle */}
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
              Extend your video and digital strategy with connected creative and
              search services that improve visibility, engagement and growth.
            </p>
          </div>

          {/* CARDS */}
          <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* =====================================================
          CORPORATE VIDEO CARD
      ===================================================== */}

            <Link
              to="/corporate-video"
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
                    Corporate Video
                  </h3>

                  <p className="mt-2 m-0 max-w-[270px] text-[10px] leading-[1.6] text-gray-400 sm:text-[11px]">
                    Create professional corporate videos that communicate your
                    brand story, values and business message with impact.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[.12em] text-cyan-300/60 transition group-hover:text-cyan-300">
                  Explore service
                  <span className="h-px w-5 bg-cyan-400/30 transition-all duration-300 group-hover:w-8" />
                </div>
              </div>

              {/* CORPORATE VIDEO ORBIT */}
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
                    <span className="text-[8px] font-bold uppercase tracking-[.04em] text-cyan-300/70">
                      Corporate
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
          REELS MAKING CARD
      ===================================================== */}

            <Link
              to="/reels-making"
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
                    Reels Making
                  </h3>

                  <p className="mt-2 m-0 max-w-[270px] text-[10px] leading-[1.6] text-gray-400 sm:text-[11px]">
                    Create engaging short-form reels that capture attention,
                    communicate your message and grow audience reach.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[.12em] text-violet-300/60 transition group-hover:text-violet-300">
                  Explore service
                  <span className="h-px w-5 bg-violet-400/30 transition-all duration-300 group-hover:w-8" />
                </div>
              </div>

              {/* REELS ORBIT */}
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
                    Reels
                  </span>
                </div>
              </div>

              {/* Arrow */}
              <div className="absolute bottom-4 right-4 z-30 flex h-8 w-8 items-center justify-center rounded-full border border-violet-400/20 bg-violet-500/10 text-[13px] text-violet-300 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-violet-500 group-hover:text-white">
                →
              </div>
            </Link>

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
                    GEO
                  </h3>

                  <p className="mt-2 m-0 max-w-[275px] text-[10px] leading-[1.6] text-gray-400 sm:text-[11px]">
                    Optimize your brand for AI-driven search experiences so your
                    business can appear in relevant generative answers.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[.12em] text-orange-300/60 transition group-hover:text-orange-300">
                  Explore service
                  <span className="h-px w-5 bg-orange-400/30 transition-all duration-300 group-hover:w-8" />
                </div>
              </div>

              {/* GEO ORBIT */}
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
                  <span className="text-[10px] font-black uppercase tracking-[.05em] text-orange-300">
                    GEO
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
                  Turn complex ideas into simple stories people can understand
                  and remember.
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
                Start Your Explainer<span className="ml-2 text-[15px]">→</span>
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
              {["Message", "Story", "Deliver"].map((item, index) => (
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

export default ExplainerVideo;

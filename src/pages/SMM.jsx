import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

/*
  SOCIAL MEDIA MARKETING — refreshed visual direction
  - Completely different hero visual: animated social-content command center
  - Completely different performance/analytics visual: animated content funnel + signal bars
  - Lightweight CSS/Tailwind animations only; no animation library required
  - Related services: YouTube Marketing, Google My Business, App Development
*/

const smmServices = [
  [
    "01",
    "Social Media Strategy",
    "Define the role of each platform around audience, positioning and business objectives.",
  ],
  [
    "02",
    "Content Pillars",
    "Build recurring themes that balance education, credibility, offers and brand personality.",
  ],
  [
    "03",
    "Creative & Copy",
    "Create platform-ready captions, carousels, graphics, short-form videos and campaign assets.",
  ],
  [
    "04",
    "Publishing & Community",
    "Keep publishing consistent while supporting meaningful audience interaction.",
  ],
  [
    "05",
    "Campaign Support",
    "Connect organic social with launches, campaigns, offers and paid media where appropriate.",
  ],
  [
    "06",
    "Performance Reporting",
    "Review reach, engagement, traffic and business signals to improve the next content cycle.",
  ],
];

const outcomes = [
  "Consistent brand presence",
  "Clearer content strategy",
  "Better platform fit",
  "Stronger audience engagement",
  "Campaign-ready content",
  "Continuous content learning",
];

const processSteps = [
  [
    "01",
    "Discovery & Brand Voice",
    "Understand the business, audience, assets, constraints and success criteria.",
  ],
  [
    "02",
    "Content Planning",
    "Turn objectives into a practical strategy, scope, creative direction and measurement plan.",
  ],
  [
    "03",
    "Production & Review",
    "Create and refine the agreed content with brand and audience requirements in mind.",
  ],
  [
    "04",
    "Publishing & Community",
    "Check messaging, tracking, publishing and key customer paths before launch.",
  ],
  [
    "05",
    "Measurement & Iteration",
    "Use performance and feedback to prioritize the next improvement.",
  ],
];

const whyChoose = [
  [
    "01",
    "Business-First Strategy",
    "We start with what the business needs to achieve, then select the right digital activity.",
  ],
  [
    "02",
    "Integrated Expertise",
    "Social can connect with SEO, AEO, GEO, paid media, web, content and branding when needed.",
  ],
  [
    "03",
    "Clear Communication",
    "You should know what is being done, why it matters and what the next priority is.",
  ],
  [
    "04",
    "Continuous Improvement",
    "Launch is a starting point; performance and customer behavior guide the next iteration.",
  ],
];

const faqs = [
  [
    "What is included in your social media marketing service?",
    "The scope is customized around the objective. Strategy, content, creative, publishing, community and measurement form the core framework.",
  ],
  [
    "How do you decide the right scope?",
    "We consider the business goal, audience, current performance, competition, assets, timeline and budget before recommending priorities.",
  ],
  [
    "Can SMM be combined with SEO, paid media or website development?",
    "Yes. Connected services can support the customer journey across discovery, content, website experience and conversion.",
  ],
  [
    "How do you measure success?",
    "KPIs depend on the objective and may include qualified traffic, engagement, leads, enquiries, conversions or other agreed business signals.",
  ],
  [
    "Do you guarantee results?",
    "No responsible agency can guarantee algorithmic distribution, exact lead volume or a fixed commercial outcome. We commit to clear process, execution and transparent measurement.",
  ],
  [
    "Can you work with an existing website, campaign or brand?",
    "Yes. We can audit and improve existing assets instead of rebuilding everything when that is the practical approach.",
  ],
];

const relatedServices = [
  {
    title: "YouTube Marketing",
    type: "VIDEO",
    icon: "▶",
    href: "/youtube-marketing",
    tone: "from-red-500/15 via-[#10121d] to-[#090b12]",
    accent: "text-red-300",
    ring: "border-red-400/30",
  },
  {
    title: "Google My Business",
    type: "LOCAL",
    icon: "G",
    href: "/google-my-business",
    tone: "from-cyan-500/15 via-[#101722] to-[#090b12]",
    accent: "text-cyan-300",
    ring: "border-cyan-400/30",
  },
  {
    title: "App Development",
    type: "MOBILE",
    icon: "⌘",
    href: "/app-development",
    tone: "from-violet-500/15 via-[#121022] to-[#090b12]",
    accent: "text-violet-300",
    ring: "border-violet-400/30",
  },
];

function FloatingPost({ className, icon, title, meta }) {
  return (
    <div
      className={`absolute z-20 w-[150px] rounded-2xl border border-white/10 bg-[#111827]/90 p-3 shadow-2xl backdrop-blur-xl ${className}`}
    >
      <div className="flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-[12px] text-white">
          {icon}
        </span>
        <div className="min-w-0">
          <p className="truncate text-[8px] font-bold uppercase tracking-[.12em] text-white/40">
            {meta}
          </p>
          <p className="truncate text-[10px] font-bold text-white">{title}</p>
        </div>
      </div>
      <div className="mt-3 flex gap-1.5">
        <span className="h-1.5 flex-1 rounded-full bg-white/10" />
        <span className="h-1.5 w-6 rounded-full bg-white/20" />
      </div>
    </div>
  );
}

function HeroVisual() {
  const [active, setActive] = useState(0);
  const tabs = ["Instagram", "LinkedIn", "YouTube"];
  const metrics = [
    ["Reach", "126K", "+24%"],
    ["Engagement", "78%", "+31%"],
    ["Clicks", "8.4K", "+18%"],
  ];

  useEffect(() => {
    const timer = setInterval(
      () => setActive((v) => (v + 1) % tabs.length),
      2600,
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mx-auto min-h-[470px] w-full max-w-[690px] sm:min-h-[560px]">
      <div className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-200/50" />
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-indigo-200/50 animate-[spin_28s_linear_infinite]" />
      <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300/20 blur-[80px] animate-pulse" />

      <FloatingPost
        className="left-[1%] top-[17%] animate-[float_6s_ease-in-out_infinite]"
        icon="◉"
        title="New post ready"
        meta="Content"
      />
      <FloatingPost
        className="right-[1%] top-[23%] animate-[float_7s_ease-in-out_infinite_1s]"
        icon="↗"
        title="Audience spike"
        meta="Signal"
      />
      <FloatingPost
        className="bottom-[14%] left-[3%] animate-[float_7s_ease-in-out_infinite_2s]"
        icon="✦"
        title="Brand aligned"
        meta="Creative"
      />

      <div className="absolute left-1/2 top-1/2 z-10 w-[285px] -translate-x-1/2 -translate-y-1/2 rotate-[-3deg] rounded-[28px] border border-white bg-white p-3 shadow-[0_35px_90px_rgba(15,23,42,.18)] transition-transform duration-700 hover:rotate-0 sm:w-[335px]">
        <div className="rounded-[21px] bg-[#0b1220] p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[8px] font-bold uppercase tracking-[.2em] text-blue-300">
                Social command center
              </p>
              <p className="mt-1 text-[15px] font-bold text-white">
                Today&apos;s content pulse
              </p>
            </div>
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 text-white">
              ✦
            </span>
          </div>

          <div className="mt-4 flex gap-1.5 rounded-xl bg-white/5 p-1">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActive(i)}
                className={`flex-1 rounded-lg px-2 py-2 text-[8px] font-bold transition ${active === i ? "bg-white text-[#0b1220]" : "text-white/40 hover:text-white"}`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {metrics.map(([label, value, delta], i) => (
              <div
                key={label}
                className="rounded-xl border border-white/10 bg-white/[.045] p-2.5 transition-all duration-500"
                style={{
                  transform:
                    active === i ? "translateY(-4px)" : "translateY(0)",
                }}
              >
                <p className="text-[7px] font-semibold uppercase tracking-[.12em] text-white/35">
                  {label}
                </p>
                <p className="mt-1 text-[15px] font-bold text-white">{value}</p>
                <p className="mt-1 text-[7px] font-bold text-emerald-300">
                  {delta}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/[.035] p-3">
            <div className="flex items-center justify-between">
              <span className="text-[8px] font-bold text-white/50">
                CONTENT MOMENTUM
              </span>
              <span className="text-[8px] font-bold text-blue-300">LIVE</span>
            </div>
            <div className="mt-4 flex h-[105px] items-end gap-2">
              {[35, 48, 43, 66, 58, 78, 70, 92, 82, 100].map((height, i) => (
                <div key={i} className="group relative flex-1">
                  <div
                    className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 rounded-t-md bg-gradient-to-t from-blue-700 to-cyan-300 transition-all duration-700 group-hover:scale-x-110"
                    style={{ height: `${height}%`, opacity: 0.35 + i / 18 }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between rounded-xl bg-blue-500/10 px-3 py-2">
            <span className="text-[8px] font-semibold text-blue-200">
              Next best action
            </span>
            <span className="text-[8px] font-bold text-white">Publish →</span>
          </div>
        </div>
      </div>

      <div className="absolute left-1/2 top-1/2 h-[14px] w-[14px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500 shadow-[0_0_35px_12px_rgba(59,130,246,.28)] animate-ping" />
    </div>
  );
}

function AnalyticsVisual() {
  const [active, setActive] = useState(1);
  const stages = [
    ["DISCOVERY", "126K", 88],
    ["ENGAGEMENT", "78%", 72],
    ["TRAFFIC", "8.4K", 58],
    ["ACTION", "1.9K", 39],
  ];

  useEffect(() => {
    const timer = setInterval(
      () => setActive((v) => (v + 1) % stages.length),
      1800,
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-[30px] border border-gray-200 bg-[#0b1220] p-5 shadow-[0_30px_90px_rgba(15,23,42,.12)] sm:p-7">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
      <div className="absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative z-10 flex items-center justify-between">
        <div>
          <p className="text-[9px] font-bold uppercase tracking-[.2em] text-blue-300">
            Social performance map
          </p>
          <h3 className="mt-1 text-[19px] font-bold text-white">
            From attention to action
          </h3>
        </div>
        <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[8px] font-bold text-emerald-300">
          LIVE SIGNALS
        </span>
      </div>

      <div className="relative z-10 mt-7 space-y-3">
        {stages.map(([label, value, width], i) => (
          <button
            key={label}
            type="button"
            onClick={() => setActive(i)}
            className="group block w-full text-left"
          >
            <div className="mb-1.5 flex items-center justify-between">
              <span
                className={`text-[8px] font-bold tracking-[.15em] transition ${active === i ? "text-white" : "text-white/40"}`}
              >
                {label}
              </span>
              <span
                className={`text-[10px] font-bold transition ${active === i ? "text-blue-300" : "text-white/45"}`}
              >
                {value}
              </span>
            </div>
            <div className="h-8 overflow-hidden rounded-xl bg-white/[.055] p-1">
              <div
                className="relative h-full overflow-hidden rounded-lg bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-300 transition-all duration-700"
                style={{
                  width: `${active === i ? width : Math.max(width - 15, 18)}%`,
                }}
              >
                <span className="absolute inset-y-0 right-0 w-12 bg-white/25 blur-md animate-pulse" />
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="relative z-10 mt-6 grid grid-cols-3 gap-2">
        {[
          ["Reach", "↑ 24%"],
          ["Engagement", "↑ 31%"],
          ["Content", "↑ 18%"],
        ].map(([label, value]) => (
          <div
            key={label}
            className="rounded-xl border border-white/10 bg-white/[.045] p-3"
          >
            <p className="text-[8px] text-white/35">{label}</p>
            <p className="mt-1 text-[12px] font-bold text-white">{value}</p>
          </div>
        ))}
      </div>

      <div className="relative z-10 mt-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[.035] p-4">
        <div className="flex items-center justify-between">
          <span className="text-[8px] font-bold uppercase tracking-[.14em] text-white/40">
            8-week signal
          </span>
          <span className="text-[8px] font-bold text-cyan-300">+42.6%</span>
        </div>
        <svg
          viewBox="0 0 720 120"
          className="mt-3 h-[110px] w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 100 C55 94 80 78 125 84 S190 70 235 76 S300 48 345 58 S405 39 450 46 S510 29 555 36 S625 10 720 18"
            fill="none"
            stroke="#60a5fa"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="8 9"
            className="animate-[dash_8s_linear_infinite]"
          />
          <circle
            cx="720"
            cy="18"
            r="6"
            fill="#67e8f9"
            className="animate-pulse"
          />
        </svg>
      </div>
    </div>
  );
}

function SMM() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="w-full overflow-hidden bg-white text-[#111827]">
      <style>{`
        @keyframes float { 0%,100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-10px) rotate(1deg); } }
        @keyframes dash { to { stroke-dashoffset: -100; } }
        @keyframes smmOrbit { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important; scroll-behavior: auto !important; } }
      `}</style>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#eef5ff] px-5 pb-14 pt-6 sm:px-8 sm:pb-16 sm:pt-8 lg:px-14 lg:pb-20 lg:pt-10">
        <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(20,85,217,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(20,85,217,.06)_1px,transparent_1px)] [background-size:42px_42px]" />
        <div className="absolute right-[-15%] top-[-20%] h-[420px] w-[420px] rounded-full bg-cyan-200/50 blur-[100px]" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[360px] w-[360px] rounded-full bg-violet-200/40 blur-[100px]" />

        <div className="relative mx-auto w-full max-w-[1500px]">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-10 xl:gap-14">
            {/* LEFT CONTENT */}
            <div className="relative z-20 min-w-0">
              {/* BREADCRUMB IS NOW DIRECTLY ABOVE LEFT CONTENT */}
              <nav className="mb-5 flex flex-wrap items-center gap-2 text-[10px] font-medium text-gray-500 sm:mb-6 sm:text-[11px]">
                <Link to="/" className="transition hover:text-[#1455d9]">
                  Home
                </Link>
                <span>/</span>
                <span>Services</span>
                <span>/</span>
                <span className="font-bold text-[#1455d9]">
                  Social Media Marketing
                </span>
              </nav>

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[.18em] text-[#1455d9] shadow-sm backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
                </span>
                Social Media Marketing
              </div>

              <h1 className="m-0 max-w-[720px] text-[38px] font-bold leading-[1.01] tracking-[-.055em] text-[#0b1220] sm:text-[50px] lg:text-[56px] xl:text-[60px]">
                Make your brand part of the{" "}
                <span className="text-[#1455d9]">conversation.</span>
              </h1>

              <p className="mt-6 max-w-[650px] text-[14px] leading-7 text-gray-600 sm:text-[15px] lg:text-[16px]">
                Build a social presence with strategy, content, creative,
                publishing, community engagement and performance reporting — all
                connected to the customer journey and business objective.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex min-h-[49px] items-center justify-center rounded-full bg-[#073b91] px-7 py-3 text-[13px] font-bold text-white shadow-[0_15px_35px_rgba(7,59,145,.2)] transition duration-300 hover:-translate-y-1 hover:bg-[#052f75]"
                >
                  Talk to Our Team <span className="ml-2">→</span>
                </Link>
                <a
                  href="#smm-services"
                  className="inline-flex min-h-[49px] items-center justify-center rounded-full border border-gray-200 bg-white/80 px-7 py-3 text-[13px] font-semibold text-gray-700 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:text-[#1455d9]"
                >
                  Explore Services
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 border-t border-blue-100 pt-5 text-[10px] font-semibold text-gray-500">
                <span>● Strategy-led</span>
                <span>● Content-focused</span>
                <span>● Measurable</span>
                <span>● Platform-aware</span>
              </div>
            </div>

            {/* RIGHT VISUAL — EQUAL GRID COLUMN */}
            <div className="relative mx-auto min-h-[450px] w-full max-w-[620px] sm:min-h-[510px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-[400px] w-[400px] sm:h-[460px] sm:w-[460px]">
                  {/* ORBIT RINGS */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-[370px] w-[370px] rounded-full border border-blue-200/60 sm:h-[430px] sm:w-[430px]" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-[285px] w-[285px] rounded-full border border-dashed border-indigo-200/70 animate-[spin_24s_linear_infinite] sm:h-[335px] sm:w-[335px]" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-[210px] w-[210px] rounded-full bg-blue-300/20 blur-[70px] animate-pulse sm:h-[250px] sm:w-[250px]" />
                  </div>

                  {/* ROTATING SOCIAL NODES */}
                  <div className="absolute inset-0 animate-[smmOrbit_18s_linear_infinite]">
                    <div className="absolute left-1/2 top-0 -translate-x-1/2">
                      <div className="flex flex-col items-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-pink-400/25 bg-[#090c1b]/95 text-xl font-bold text-pink-300 shadow-xl backdrop-blur-xl">
                          ◎
                        </div>
                        <span className="mt-2 text-[7px] text-gray-500">
                          Instagram
                        </span>
                      </div>
                    </div>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2">
                      <div className="flex flex-col items-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/25 bg-[#090c1b]/95 text-xl font-bold text-blue-300 shadow-xl backdrop-blur-xl">
                          f
                        </div>
                        <span className="mt-2 text-[7px] text-gray-500">
                          Facebook
                        </span>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                      <div className="flex flex-col items-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/25 bg-[#090c1b]/95 text-[11px] font-bold text-cyan-300 shadow-xl backdrop-blur-xl">
                          in
                        </div>
                        <span className="mt-2 text-[7px] text-gray-500">
                          LinkedIn
                        </span>
                      </div>
                    </div>
                    <div className="absolute left-0 top-1/2 -translate-y-1/2">
                      <div className="flex flex-col items-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/25 bg-[#090c1b]/95 text-xl font-bold text-violet-300 shadow-xl backdrop-blur-xl">
                          ♪
                        </div>
                        <span className="mt-2 text-[7px] text-gray-500">
                          TikTok
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* CENTER CORE */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative flex h-[138px] w-[138px] flex-col items-center justify-center rounded-[30px] border border-white/15 bg-[#090c1b]/95 shadow-[0_0_60px_rgba(59,130,246,.18)] backdrop-blur-xl">
                      <div className="absolute -inset-6 rounded-full border border-blue-400/10 animate-ping" />
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-400/15 via-violet-400/15 to-blue-400/15 ring-1 ring-white/10">
                        <span className="text-[14px] font-bold text-white/80">
                          A
                        </span>
                      </div>
                      <p className="mt-2 text-[8px] font-semibold uppercase tracking-[.2em] text-white/70">
                        Your Brand
                      </p>
                      <p className="mt-1 text-[6px] text-blue-300/60">
                        Content Hub
                      </p>
                      <div className="mt-2 flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                        <span className="text-[6px] text-emerald-300/60">
                          Active
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* FLOATING LABELS */}
                  <span className="absolute left-[12%] top-[25%] rounded-full border border-pink-300/20 bg-white/80 px-2.5 py-1 text-[7px] font-bold text-pink-500 shadow-sm backdrop-blur">
                    Reels
                  </span>
                  <span className="absolute right-[12%] top-[28%] rounded-full border border-blue-300/20 bg-white/80 px-2.5 py-1 text-[7px] font-bold text-blue-500 shadow-sm backdrop-blur">
                    Posts
                  </span>
                  <span className="absolute bottom-[25%] left-[12%] rounded-full border border-violet-300/20 bg-white/80 px-2.5 py-1 text-[7px] font-bold text-violet-500 shadow-sm backdrop-blur">
                    Stories
                  </span>
                  <span className="absolute bottom-[25%] right-[12%] rounded-full border border-cyan-300/20 bg-white/80 px-2.5 py-1 text-[7px] font-bold text-cyan-500 shadow-sm backdrop-blur">
                    Videos
                  </span>
                </div>
              </div>

              <div className="absolute left-1/2 top-1 z-20 -translate-x-1/2">
                <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white/90 px-3 py-1.5 text-[7px] font-semibold text-gray-500 shadow-sm backdrop-blur">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-pink-400" />
                  Content Orbit Active
                </div>
              </div>

              <FloatingPost
                className="bottom-7 left-0 hidden animate-[float_6s_ease-in-out_infinite] sm:block"
                icon="♥"
                title="Engagement"
                meta="+28.4%"
              />
              <FloatingPost
                className="bottom-7 right-0 hidden animate-[float_7s_ease-in-out_infinite_1s] sm:block"
                icon="↗"
                title="Social Reach"
                meta="42.8K people"
              />
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1500px] gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-end lg:gap-20">
          <div className="mb-10">
            <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9]">
              Introduction
            </p>
            <h2 className="mt-4 max-w-[620px] text-[31px] font-bold leading-[1.06] tracking-[-.045em] text-[#101828] sm:text-[32px]">
              Social Media Marketing That Connects With Business Growth.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              [
                "01 / STRATEGY",
                "Give every platform a clear purpose.",
                "Define the role of each platform based on audience, positioning and business objectives.",
              ],
              [
                "02 / CONTENT",
                "Turn content into a repeatable system.",
                "Build recurring themes that balance education, credibility, product/service communication and brand personality.",
              ],
            ].map(([tag, title, copy]) => (
              <article
                key={tag}
                className="rounded-[24px] border border-gray-200 bg-[#f8fbff] p-6 transition duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,.07)]"
              >
                <span className="text-[10px] font-bold text-[#1455d9]">
                  {tag}
                </span>
                <h3 className="mt-5 text-[20px] font-bold tracking-[-.025em] text-[#101828]">
                  {title}
                </h3>
                <p className="mt-3 text-[13px] leading-6 text-gray-500">
                  {copy}
                </p>
              </article>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-[1500px] rounded-[28px] bg-[#0b1220] p-6 shadow-[0_25px_70px_rgba(15,23,42,.12)] sm:p-9">
          <div className="grid gap-7 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.18em] text-blue-300">
                The Akkurate approach
              </p>
              <h3 className="mt-3 max-w-[650px] text-[26px] font-bold leading-tight text-white sm:text-[24px]">
                Strategy first. Content second. Measurement throughout.
              </h3>
              <p className="mt-4 max-w-[650px] text-[13px] leading-7 text-gray-400">
                We start with the business objective, audience and customer
                journey, then decide what should be created, optimized and
                measured.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                ["01", "Understand", "Business + audience"],
                ["02", "Build", "Content + creative"],
                ["03", "Improve", "Signals + iteration"],
              ].map(([n, t, c]) => (
                <div
                  key={n}
                  className="rounded-2xl border border-white/10 bg-white/[.05] p-4"
                >
                  <span className="text-[10px] font-bold text-blue-300">
                    {n}
                  </span>
                  <p className="mt-5 text-[13px] font-bold text-white">{t}</p>
                  <p className="mt-1 text-[9px] leading-4 text-gray-400">{c}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-[#101828] px-5 py-16 text-center sm:px-8 sm:py-10 lg:px-14">
        <p className="text-[10px] font-bold uppercase tracking-[.18em] text-blue-300">
          The Business Problem We Solve
        </p>
        <h2 className="mx-auto mt-4 max-w-[900px] text-[28px] font-bold leading-tight tracking-[-.035em] text-white sm:text-[35px]">
          Social Media Marketing With a Clear Commercial Purpose
        </h2>
        <p className="mx-auto mt-5 max-w-[850px] text-[14px] leading-7 text-gray-300">
          Posting regularly is not the same as having a social strategy.
          Akkurate creates a content system with a purpose: each content pillar
          can build awareness, demonstrate expertise, strengthen trust, support
          a campaign or move the audience toward the next step.
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
              <h3 className="mt-4 m-0 text-[16px] font-bold text-white">{t}</h3>
              <p className="mt-2 m-0 text-[11px] leading-5 text-gray-400">
                {c}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PERFORMANCE / ANALYTICS — completely different right content */}
      <section className="relative overflow-hidden bg-[#f4f8ff] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-10">
        <div className="mx-auto grid w-full max-w-[1500px] gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-center lg:gap-16">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9]">
              Performance / Analytics
            </p>
            <h2 className="mt-3 text-[31px] font-bold leading-[1.06] tracking-[-.045em] text-[#101828] sm:text-[40px]">
              Don&apos;t just count likes. Read the journey.
            </h2>
            <p className="mt-5 max-w-[560px] text-[14px] leading-7 text-gray-600">
              Social performance becomes useful when signals are connected. See
              how attention moves through engagement, traffic and action — then
              use the pattern to shape the next content decision.
            </p>
            <div className="mt-7 grid grid-cols-2 gap-3">
              {[
                ["126K", "Reach"],
                ["78%", "Engagement"],
                ["8.4K", "Traffic"],
                ["1.9K", "Actions"],
              ].map(([v, l]) => (
                <div
                  key={l}
                  className="rounded-[18px] border border-gray-200 bg-white p-4 shadow-sm"
                >
                  <p className="text-[22px] font-bold tracking-[-.03em] text-[#101828]">
                    {v}
                  </p>
                  <p className="mt-1 text-[9px] font-medium uppercase tracking-[.12em] text-gray-400">
                    {l}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <AnalyticsVisual />
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="smm-services"
        className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-20"
      >
        <div className="mx-auto w-full max-w-[1500px]">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[760px]">
              <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9]">
                What we do
              </p>
              <h2 className="mt-3 text-[30px] font-bold leading-[1.08] tracking-[-.04em] text-[#101828] sm:text-[32px]">
                A complete social media capability, not a single tactic.
              </h2>
            </div>
            <p className="max-w-[420px] text-[13px] leading-6 text-gray-500">
              Each capability can work independently or as part of a connected
              social media and digital-growth program.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {smmServices.map(([num, title, desc]) => (
              <article
                key={num}
                className="group relative overflow-hidden rounded-[25px] border border-gray-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,.035)] transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_25px_60px_rgba(15,23,42,.09)] sm:p-7"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-100/60 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="relative flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef4ff] text-[10px] font-black text-[#1455d9]">
                    {num}
                  </span>
                  <span className="text-[20px] text-gray-300 transition group-hover:translate-x-1 group-hover:text-[#1455d9]">
                    ↗
                  </span>
                </div>
                <h3 className="relative mt-7 text-[20px] font-bold text-[#101828]">
                  {title}
                </h3>
                <p className="relative mt-3 text-[13px] leading-6 text-gray-500">
                  {desc}
                </p>
                <div className="relative mt-6 h-1 overflow-hidden rounded-full bg-gray-100">
                  <div className="h-full w-1/4 rounded-full bg-[#1455d9] transition-all duration-500 group-hover:w-full" />
                </div>
                <p className="mt-4 text-[9px] font-bold uppercase tracking-[.14em] text-gray-400 group-hover:text-[#1455d9]">
                  Explore capability →
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="bg-[#f7faff] px-5 py-16 sm:px-8 sm:py-10 lg:px-14">
        <div className="mx-auto grid w-full max-w-[1500px] gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-center lg:gap-20">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9]">
              Business outcomes
            </p>
            <h2 className="mt-3 text-[31px] font-bold leading-[1.08] tracking-[-.04em] text-[#101828] sm:text-[42px]">
              Build a social presence that supports growth.
            </h2>
            <p className="mt-5 max-w-[540px] text-[14px] leading-7 text-gray-600">
              The exact outcome depends on the starting point, competition,
              audience, implementation and business model. We focus on
              measurable improvement and honest reporting.
            </p>
            <Link
              to="/contact"
              className="mt-7 inline-flex rounded-full bg-[#073b91] px-5 py-3 text-[12px] font-bold text-white transition hover:-translate-y-1"
            >
              Discuss your growth goal →
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {outcomes.map((x, i) => (
              <div
                key={x}
                className="group flex items-center gap-4 rounded-[18px] border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eef4ff] text-[10px] font-black text-[#1455d9] group-hover:bg-[#073b91] group-hover:text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[13px] font-bold text-[#101828]">
                  {x}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO */}
      <section className="px-5 py-16 text-center sm:px-8 sm:py-10 lg:px-14">
        <div className="mx-auto max-w-[950px]">
          <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#1455d9]">
            Who This Service Is For
          </p>
          <h2 className="mt-3 text-[30px] font-bold leading-tight tracking-[-.035em] text-[#101828] sm:text-[42px]">
            Social Media Marketing Should Fit Your Business
          </h2>
          <p className="mt-5 text-[14px] leading-7 text-gray-600">
            Social Media Marketing is relevant to businesses that have a clear
            reason to improve their digital presence, customer journey or growth
            engine.
          </p>
          <p className="mt-4 text-[14px] leading-7 text-gray-600">
            The right approach depends on the starting point. Akkurate can
            recommend a focused scope, broader integrated program or a different
            service when appropriate.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative overflow-hidden bg-[#0b1220] px-5 py-16 sm:px-8 sm:py-10 lg:px-14">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-700/10 blur-3xl" />
        <div className="relative mx-auto max-w-[1500px]">
          <div className="mx-auto max-w-[800px] text-center">
            <p className="text-[10px] font-bold uppercase tracking-[.2em] text-blue-300">
              How we work
            </p>
            <h2 className="mt-3 text-[31px] font-bold leading-[1.08] tracking-[-.04em] text-white sm:text-[42px]">
              A clear path from discovery to iteration.
            </h2>
            <p className="mt-5 text-[13px] leading-7 text-gray-400">
              A structured process keeps strategy, creative, publishing,
              community and measurement connected.
            </p>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map(([num, title, desc]) => (
              <article
                key={num}
                className="group rounded-[22px] border border-white/10 bg-white/[.045] p-5 transition duration-500 hover:-translate-y-2 hover:border-blue-400/30 hover:bg-white/[.07] sm:p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-400/20 bg-[#101b31] text-[10px] font-black text-blue-300">
                  {num}
                </div>
                <h3 className="mt-6 text-[18px] font-bold text-white">
                  {title}
                </h3>
                <p className="mt-3 text-[12px] leading-6 text-gray-400">
                  {desc}
                </p>
                <p className="mt-6 text-[9px] font-bold uppercase tracking-[.12em] text-blue-300">
                  Step {num}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-[#f7faff] px-5 py-16 sm:px-8 sm:py-10 lg:px-14">
        <div className="mx-auto w-full max-w-[1500px]">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end lg:gap-20">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9]">
                Why Akkurate
              </p>
              <h2 className="mt-3 max-w-[650px] text-[34px] font-bold leading-[1.04] tracking-[-.045em] text-[#101828] sm:text-[48px]">
                More than a service.{" "}
                <span className="text-[#1455d9] block">A growth system.</span>
              </h2>
            </div>
            <div>
              <p className="max-w-[650px] text-[14px] leading-7 text-gray-600">
                Digital growth rarely depends on one channel. We bring strategy,
                search, content, web and technology together when the customer
                journey needs a connected approach.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Strategy", "Social", "Content", "Digital"].map((x) => (
                  <span
                    key={x}
                    className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.12em] text-gray-500"
                  >
                    {x}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-[.7fr_1.3fr]">
            <div className="relative overflow-hidden rounded-[28px] bg-[#101828] p-7 shadow-[0_25px_70px_rgba(15,23,42,.12)] sm:p-9">
              <p className="text-[9px] font-bold uppercase tracking-[.14em] text-blue-300">
                Akkurate Method
              </p>
              <h3 className="mt-7 max-w-[390px] text-[28px] font-bold leading-tight text-white sm:text-[32px]">
                One strategy. Multiple growth levers.
              </h3>
              <p className="mt-4 max-w-[400px] text-[12px] leading-6 text-gray-400">
                Connect the right capabilities around your business objective
                and customer journey instead of treating every activity
                separately.
              </p>
              <div className="relative mx-auto mt-10 h-[170px] max-w-[360px]">
                <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/30 bg-[#15233d] shadow-[0_0_45px_rgba(20,85,217,.22)]">
                  <div className="flex h-full items-center justify-center text-center">
                    <div>
                      <p className="text-[8px] font-bold uppercase tracking-[.12em] text-blue-300">
                        Social
                      </p>
                      <p className="mt-1 text-[11px] font-bold text-white">
                        Core
                      </p>
                    </div>
                  </div>
                </div>
                {[
                  ["CONTENT", "left-[3%] top-[5%]"],
                  ["SOCIAL", "right-[3%] top-[5%]"],
                  ["VIDEO", "left-[3%] bottom-[5%]"],
                  ["WEB", "right-[3%] bottom-[5%]"],
                ].map(([label, pos]) => (
                  <div
                    key={label}
                    className={`absolute ${pos} rounded-xl border border-white/10 bg-white/[.06] px-3 py-2`}
                  >
                    <span className="text-[8px] font-bold tracking-[.08em] text-white/80">
                      ● {label}
                    </span>
                  </div>
                ))}
                <div className="absolute left-[20%] right-[20%] top-1/2 h-px bg-blue-400/50" />
                <div className="absolute bottom-[18%] left-1/2 top-[18%] w-px bg-blue-400/40" />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {whyChoose.map(([num, title, desc]) => (
                <article
                  key={num}
                  className="group rounded-[24px] border border-gray-200 bg-white p-6 shadow-sm transition duration-500 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef4ff] text-[10px] font-black text-[#1455d9] group-hover:bg-[#1455d9] group-hover:text-white">
                      {num}
                    </span>
                    <span className="text-[20px] text-gray-300 group-hover:text-[#1455d9]">
                      ↗
                    </span>
                  </div>
                  <h3 className="mt-7 text-[19px] font-bold text-[#101828]">
                    {title}
                  </h3>
                  <p className="mt-3 text-[12px] leading-6 text-gray-500">
                    {desc}
                  </p>
                </article>
              ))}
            </div>
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
              Extend your digital presence with connected marketing and
              technology solutions that strengthen visibility, engagement and
              growth.
            </p>
          </div>

          {/* =====================================================
        CARDS
    ===================================================== */}

          <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
                    YouTube Marketing
                  </h3>

                  <p className="mt-2 m-0 max-w-[270px] text-[10px] leading-[1.6] text-gray-400 sm:text-[11px]">
                    Grow your YouTube presence with strategic video promotion,
                    audience targeting and content-focused marketing campaigns.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[.12em] text-cyan-300/60 transition group-hover:text-cyan-300">
                  Explore service
                  <span className="h-px w-5 bg-cyan-400/30 transition-all duration-300 group-hover:w-8" />
                </div>
              </div>

              {/* =================================================
            YOUTUBE MARKETING ORBIT
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

                {/* Center */}
                <div className="absolute left-1/2 top-1/2 flex h-[56px] w-[68px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[17px] border border-cyan-300/25 bg-[#10202b] shadow-[0_0_35px_rgba(6,182,212,.25)]">
                  <span className="text-[8px] font-bold uppercase tracking-[.04em] text-cyan-300/70">
                    YouTube
                  </span>
                </div>
              </div>

              {/* Arrow */}
              <div className="absolute bottom-4 right-4 z-30 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-500/10 text-[13px] text-cyan-300 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-cyan-500 group-hover:text-white">
                →
              </div>
            </Link>

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
                    Google My Business Page
                  </h3>

                  <p className="mt-2 m-0 max-w-[270px] text-[10px] leading-[1.6] text-gray-400 sm:text-[11px]">
                    Strengthen your local presence with an optimized Google
                    Business profile that helps customers discover and connect
                    with you.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[.12em] text-violet-300/60 transition group-hover:text-violet-300">
                  Explore service
                  <span className="h-px w-5 bg-violet-400/30 transition-all duration-300 group-hover:w-8" />
                </div>
              </div>

              {/* =================================================
            GOOGLE MY BUSINESS ORBIT
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
                <div className="absolute left-1/2 top-1/2 flex h-[55px] w-[58px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-violet-300/30 bg-[#17152b] shadow-[0_0_35px_rgba(139,92,246,.3)]">
                  <span className="text-[8px] font-black uppercase tracking-[.04em] text-violet-300">
                    GMB
                  </span>
                </div>
              </div>

              {/* Arrow */}
              <div className="absolute bottom-4 right-4 z-30 flex h-8 w-8 items-center justify-center rounded-full border border-violet-400/20 bg-violet-500/10 text-[13px] text-violet-300 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-violet-500 group-hover:text-white">
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
                    App Development
                  </h3>

                  <p className="mt-2 m-0 max-w-[275px] text-[10px] leading-[1.6] text-gray-400 sm:text-[11px]">
                    Build fast, scalable and user-friendly mobile applications
                    designed to deliver seamless digital experiences.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[.12em] text-orange-300/60 transition group-hover:text-orange-300">
                  Explore service
                  <span className="h-px w-5 bg-orange-400/30 transition-all duration-300 group-hover:w-8" />
                </div>
              </div>

              {/* =================================================
            APP DEVELOPMENT ORBIT
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

                {/* Center app */}
                <div className="absolute left-1/2 top-1/2 flex h-[58px] w-[62px] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-xl border border-orange-300/25 bg-[#1a1719] shadow-[0_0_35px_rgba(249,115,22,.22)]">
                  <span className="text-[9px] font-black uppercase tracking-[.04em] text-orange-300">
                    App
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
      <section className="bg-[#f7faff] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-10">
        <div className="mx-auto grid w-full max-w-[1250px] gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9]">
              Frequently Asked Questions
            </p>
            <h2 className="mt-4 max-w-[430px] text-[32px] font-bold leading-[1.05] tracking-[-.045em] text-[#101828] sm:text-[35px]">
              Everything you need{" "}
              <span className="text-[#1455d9]">
                to know about social media.
              </span>
            </h2>
            <p className="mt-5 max-w-[430px] text-[12px] leading-7 text-gray-500">
              Have questions about strategy, content planning, creative,
              publishing, community or performance measurement? Find the answers
              below.
            </p>
            <div className="mt-8 rounded-[20px] border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-bold text-[#101828]">
                    Still have questions?
                  </p>
                  <p className="mt-1 text-[9px] text-gray-400">
                    Our team can help.
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-[#1455d9] hover:bg-[#1455d9] hover:text-white"
                >
                  →
                </Link>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            {faqs.map(([q, a], i) => {
              const open = openFaq === i;
              return (
                <div
                  key={q}
                  className={`overflow-hidden rounded-[20px] border transition-all duration-500 ${open ? "border-[#1455d9] bg-[#073b91] shadow-[0_18px_45px_rgba(20,85,217,.15)]" : "border-gray-200 bg-white hover:border-blue-200"}`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6 sm:py-6"
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-[9px] font-black ${open ? "bg-white/10 text-blue-100" : "bg-[#eef4ff] text-[#1455d9]"}`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`flex-1 text-[12px] font-bold leading-6 sm:text-[13px] ${open ? "text-white" : "text-[#101828]"}`}
                    >
                      {q}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-[17px] transition ${open ? "rotate-45 border-white/20 bg-white/10 text-white" : "border-gray-200 bg-gray-50 text-gray-500"}`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-500 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-6 pl-[68px] pr-6 text-[11px] leading-6 text-blue-100/85 sm:pl-[77px] sm:text-[12px]">
                        {a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 pb-14 sm:px-8 sm:pb-16 lg:px-14 lg:pb-20">
        <div className="relative mt-10 overflow-hidden rounded-[28px] bg-[#071a33] px-6 py-10 shadow-[0_25px_80px_rgba(20,85,217,.2)] sm:px-9 lg:px-11 lg:py-12">
          <div className="absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto_auto] lg:items-center">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[.18em] text-blue-300">
                Ready to grow?
              </p>
              <h3 className="mt-2 max-w-[650px] text-[26px] font-bold leading-[1.12] text-white sm:text-[32px]">
                Build a social presence that says something useful, looks
                consistent and supports business goals.
              </h3>
              <p className="mt-3 max-w-[650px] text-[12px] leading-6 text-white/60 sm:text-[13px]">
                Tell us what you are trying to achieve, what you have already
                tried and what outcome matters most.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex w-fit items-center justify-center rounded-full bg-white px-6 py-3 text-[11px] font-bold text-[#073b91] transition hover:-translate-y-1 hover:bg-blue-50"
            >
              Start Your Project →
            </Link>
            <div className="flex items-center gap-6 border-t border-white/10 pt-5 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
              <div>
                <p className="text-[22px] font-bold text-white">500+</p>
                <p className="text-[8px] text-white/50">Projects</p>
              </div>
              <div className="h-9 w-px bg-white/10" />
              <div>
                <p className="text-[22px] font-bold text-white">100+</p>
                <p className="text-[8px] text-white/50">Clients</p>
              </div>
              <div className="h-9 w-px bg-white/10" />
              <div>
                <p className="text-[22px] font-bold text-white">24/7</p>
                <p className="text-[8px] text-white/50">Support</p>
              </div>
            </div>
          </div>
          <div className="relative mt-7 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-4 text-[9px] font-medium text-white/45">
            <span>01 Discovery</span>
            <span>02 Strategy</span>
            <span>03 Content</span>
            <span>04 Growth</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SMM;

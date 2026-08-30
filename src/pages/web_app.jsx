import React, { useState } from "react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

/* =========================================================
   WEB APPLICATION SERVICES
========================================================= */

const webApplicationServices = [
  {
    number: "01",
    tag: "ARCHITECTURE",
    title: "Application Architecture",
    description:
      "Plan a maintainable application architecture around business requirements, workflows, security needs and expected growth.",
    icon: "◈",
  },
  {
    number: "02",
    tag: "WORKFLOWS",
    title: "User Roles & Workflows",
    description:
      "Define roles, permissions and practical workflows so different users can complete their tasks efficiently.",
    icon: "◎",
  },
  {
    number: "03",
    tag: "FRONTEND",
    title: "Frontend Development",
    description:
      "Create responsive interfaces around the application's real workflows, user needs and business objectives.",
    icon: "⌁",
  },
  {
    number: "04",
    tag: "BACKEND",
    title: "Backend & APIs",
    description:
      "Build backend services, APIs and business logic required to connect the application's core functionality.",
    icon: "⌘",
  },
  {
    number: "05",
    tag: "INTEGRATION",
    title: "Data & Integrations",
    description:
      "Connect required data sources, third-party systems and internal tools into a more unified digital workflow.",
    icon: "◇",
  },
  {
    number: "06",
    tag: "QUALITY",
    title: "Testing & Maintenance",
    description:
      "Test critical workflows and support iterative improvements after launch as usage, requirements and business needs evolve.",
    icon: "✓",
  },
];

/* =========================================================
   OUTCOMES
========================================================= */

const outcomes = [
  "Better workflow efficiency",
  "Centralized digital processes",
  "Scalable application structure",
  "Integrated systems",
  "Clear user permissions",
  "Maintainable technology",
];

/* =========================================================
   PROCESS
========================================================= */

const processSteps = [
  {
    number: "01",
    title: "Requirements & Architecture",
    description:
      "Understand the business objective, audience, current assets, constraints and success criteria before recommending the work.",
  },
  {
    number: "02",
    title: "UX & Workflow Design",
    description:
      "Translate the objective into practical workflows, scope, interface direction and a measurement plan.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Create, optimize, design and develop the agreed application with brand, technology and user requirements in mind.",
  },
  {
    number: "04",
    title: "Integration & Testing",
    description:
      "Test the experience, integrations, tracking, messaging and key workflows before considering the work complete.",
  },
  {
    number: "05",
    title: "Launch & Support",
    description:
      "Review performance, feedback and business signals and use those learnings to prioritize the next improvement.",
  },
];

/* =========================================================
   WHY AKKURATE
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
   FAQS
========================================================= */

const faqs = [
  {
    question: "What is included in your web application service?",
    answer:
      "The scope is customized around the objective. The six capability areas above form the standard framework, while the actual deliverables depend on the project.",
  },
  {
    question: "How do you decide the right scope?",
    answer:
      "We look at the business goal, audience, current performance, competition, existing assets, timeline and budget before recommending priorities.",
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
      "KPIs depend on the objective and may include qualified traffic, engagement, leads, enquiries, conversions, product usage, task completion or other agreed business signals.",
  },
  {
    question: "Do you guarantee results?",
    answer:
      "No responsible agency can guarantee a fixed commercial outcome. We can commit to a clear process, quality execution and transparent measurement.",
  },
  {
    question:
      "Can you work with an existing website, application or digital system?",
    answer:
      "Yes. We can audit and improve existing assets instead of rebuilding everything when that is the more practical approach.",
  },
];

/* =========================================================
   RELATED SERVICES
========================================================= */

const relatedServices = [
  {
    title: "CMS Development",
    shortTitle: "CMS",
    description:
      "Create flexible content management systems that make publishing, updating and organizing digital content easier.",
    href: "/cms-development",
    type: "CONTENT",
    accent: "blue",
  },
  {
    title: "E-Commerce Services",
    shortTitle: "E-COMMERCE",
    description:
      "Build connected commerce experiences around products, customers, payments, workflows and conversion journeys.",
    href: "/e-commerce",
    type: "COMMERCE",
    accent: "violet",
  },
  {
    title: "Website Design",
    shortTitle: "DESIGN",
    description:
      "Design purposeful digital experiences that connect brand, usability, content and customer journeys.",
    href: "/website-design",
    type: "EXPERIENCE",
    accent: "cyan",
  },
];

/* =========================================================
   HEATMAP DATA
   ---------------------------------------------------------
   Illustrative UI data only.
========================================================= */

const heatmapRows = [
  {
    label: "Dashboard",
    values: [20, 35, 48, 68, 82, 91, 76, 61, 44, 30],
  },
  {
    label: "Reports",
    values: [15, 24, 39, 52, 71, 83, 88, 65, 42, 27],
  },
  {
    label: "Tasks",
    values: [30, 44, 62, 78, 94, 86, 70, 54, 39, 22],
  },
  {
    label: "Profile",
    values: [8, 18, 27, 36, 52, 61, 55, 41, 26, 14],
  },
  {
    label: "Settings",
    values: [5, 12, 18, 29, 42, 48, 44, 32, 20, 10],
  },
  {
    label: "Support",
    values: [10, 21, 33, 46, 63, 72, 66, 49, 31, 18],
  },
];

/* =========================================================
   HEATMAP CELL
========================================================= */

function HeatmapCell({ value }) {
  let background = "bg-[#f5f8ff]";

  if (value >= 85) {
    background = "bg-[#1455d9]";
  } else if (value >= 70) {
    background = "bg-blue-400";
  } else if (value >= 55) {
    background = "bg-blue-300";
  } else if (value >= 40) {
    background = "bg-blue-200";
  } else if (value >= 25) {
    background = "bg-indigo-100";
  }

  return (
    <div
      className={`group relative h-7 min-w-0 flex-1 rounded-md ${background} transition-all duration-300 hover:scale-110 hover:shadow-[0_5px_20px_rgba(20,85,217,.2)]`}
      title={`${value}% activity`}
    >
      <span className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-[7px] font-bold text-white opacity-0 transition group-hover:opacity-100">
        {value}
      </span>
    </div>
  );
}

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

/* =========================================================
   MAIN COMPONENT
========================================================= */

function WebApplication() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="w-full overflow-hidden bg-white text-[#111827]">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#f7faff] px-5 pb-16 pt-8 sm:px-8 sm:pb-20 sm:pt-10 lg:px-14 lg:pb-24 lg:pt-12">
        {/* Background atmosphere */}
        <div className="pointer-events-none absolute -right-48 -top-48 h-[520px] w-[520px] rounded-full bg-blue-100/70 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-48 -left-48 h-[420px] w-[420px] rounded-full bg-indigo-100/60 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1600px] px-1 sm:px-2 lg:px-4 xl:px-6">
          {/* =================================================
        HERO GRID
    ================================================= */}
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-10 xl:gap-14">
            {/* =================================================
          LEFT HERO
      ================================================= */}
            <div className="max-w-[760px]">
              {/* Breadcrumb — moved above left content */}
              <div className="mb-5 flex flex-wrap items-center gap-2 text-[10px] font-medium text-gray-500 sm:mb-6 sm:text-[11px]">
                <a href="/" className="transition hover:text-[#1455d9]">
                  Home
                </a>

                <span>/</span>

                <span>Services</span>

                <span>/</span>

                <span className="text-[#1455d9]">Web Application</span>
              </div>

              {/* Service Badge */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[.16em] text-[#1455d9] shadow-sm sm:text-[11px]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#1455d9]" />
                Web Application
              </div>

              {/* Heading */}
              <h1 className="m-0 max-w-[760px] text-[35px] font-bold leading-[1.04] tracking-[-.045em] text-[#101828] sm:text-[44px] md:text-[45px] lg:text-[45px] xl:text-[45px]">
                Custom Web Applications for
                <span className="block text-[#1455d9]">
                  Complex Business Needs.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-[660px] text-[14px] leading-7 text-gray-600 sm:text-[15px] lg:text-[16px]">
                Build scalable web applications that simplify workflows, connect
                systems and create better digital experiences — built around
                your audience, business objective and measurable customer
                journey.
              </p>

              {/* Buttons */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/contact"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#073b91] px-6 py-3 text-[13px] font-bold text-white shadow-[0_12px_30px_rgba(7,59,145,.18)] transition duration-300 hover:-translate-y-1 hover:bg-[#052f75]"
                >
                  Talk to Our Team
                  <span className="ml-2">→</span>
                </a>

                <a
                  href="#web-application-services"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-gray-200 bg-white px-6 py-3 text-[13px] font-semibold text-gray-700 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:text-[#1455d9]"
                >
                  Explore Services
                </a>
              </div>

              {/* Trust Row */}
              <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 border-t border-gray-200/80 pt-5 text-[11px] font-medium text-gray-500">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Business-first
                </span>

                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-500" />
                  Scalable
                </span>

                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-violet-500" />
                  Measurable
                </span>
              </div>
            </div>

            {/* =================================================
          RIGHT HERO — WEB APP CONTROL CENTER
      ================================================= */}
            <div className="relative mx-auto min-h-[430px] w-full max-w-[680px] sm:min-h-[500px]">
              {/* Background Glow */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[100px]" />

              {/* Live Data Badge */}
              <div className="absolute right-2 top-3 z-30 hidden items-center gap-2 rounded-full border border-emerald-400/20 bg-[#090c1b]/90 px-3 py-1.5 backdrop-blur-xl sm:flex">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

                <span className="text-[8px] text-emerald-300/80">
                  Live Data
                </span>
              </div>

              {/* Dashboard */}
              <div className="absolute left-1/2 top-1/2 z-10 w-[94%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[24px] border border-white/10 bg-[#080b19]/95 shadow-[0_30px_90px_rgba(0,0,0,0.5)] backdrop-blur-xl">
                {/* Dashboard Header */}
                <div className="flex h-12 items-center justify-between border-b border-white/10 bg-white/[0.025] px-4">
                  <div className="flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-blue-500/15 ring-1 ring-blue-400/20">
                      <span className="text-[9px] font-bold text-blue-300">
                        A
                      </span>
                    </div>

                    <span className="text-[9px] font-semibold text-white/60">
                      Analytics Dashboard
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="hidden h-6 w-20 rounded-md border border-white/10 bg-white/[0.03] sm:block" />

                    <div className="flex h-6 w-6 items-center justify-center rounded-md border border-white/10">
                      <span className="text-[9px] text-white/40">⋮</span>
                    </div>
                  </div>
                </div>

                {/* Dashboard Layout */}
                <div className="grid min-h-[370px] grid-cols-[55px_1fr] sm:grid-cols-[90px_1fr]">
                  {/* Sidebar */}
                  <aside className="border-r border-white/10 bg-white/[0.015] p-2 sm:p-3">
                    <div className="space-y-2">
                      <div className="flex h-8 items-center justify-center rounded-lg bg-blue-500/10 ring-1 ring-blue-400/15">
                        <span className="text-[11px] text-blue-300">▦</span>
                      </div>

                      <div className="flex h-8 items-center justify-center rounded-lg">
                        <span className="text-[11px] text-white/25">◫</span>
                      </div>

                      <div className="flex h-8 items-center justify-center rounded-lg">
                        <span className="text-[11px] text-white/25">◎</span>
                      </div>

                      <div className="flex h-8 items-center justify-center rounded-lg">
                        <span className="text-[11px] text-white/25">□</span>
                      </div>

                      <div className="flex h-8 items-center justify-center rounded-lg">
                        <span className="text-[11px] text-white/25">⚙</span>
                      </div>
                    </div>

                    <div className="mt-10 hidden space-y-2 sm:block">
                      <div className="h-1.5 w-12 rounded-full bg-white/5" />
                      <div className="h-1.5 w-9 rounded-full bg-white/5" />
                      <div className="h-1.5 w-11 rounded-full bg-white/5" />
                    </div>
                  </aside>

                  {/* Main Content */}
                  <main className="min-w-0 p-3 sm:p-5">
                    {/* Heading */}
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <p className="text-[7px] uppercase tracking-[0.2em] text-white/25">
                          Overview
                        </p>

                        <h2 className="mt-1 text-base font-semibold text-white/80 sm:text-lg">
                          Performance
                        </h2>
                      </div>

                      <div className="rounded-lg border border-white/10 bg-white/[0.025] px-2.5 py-1.5">
                        <span className="text-[7px] text-white/35">Today</span>
                      </div>
                    </div>

                    {/* Metric Cards */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-3">
                      <div className="rounded-xl border border-blue-400/10 bg-blue-400/[0.035] p-2.5 sm:p-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[7px] text-white/35">
                            Revenue
                          </span>

                          <span className="text-[8px] text-blue-300">↗</span>
                        </div>

                        <p className="mt-2 text-sm font-bold text-white/85 sm:text-lg">
                          $84.2K
                        </p>

                        <span className="text-[7px] text-emerald-300">
                          +12.8%
                        </span>
                      </div>

                      <div className="rounded-xl border border-violet-400/10 bg-violet-400/[0.035] p-2.5 sm:p-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[7px] text-white/35">
                            Users
                          </span>

                          <span className="text-[8px] text-violet-300">●</span>
                        </div>

                        <p className="mt-2 text-sm font-bold text-white/85 sm:text-lg">
                          2,840
                        </p>

                        <span className="text-[7px] text-emerald-300">
                          +8.4%
                        </span>
                      </div>

                      <div className="rounded-xl border border-cyan-400/10 bg-cyan-400/[0.035] p-2.5 sm:p-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[7px] text-white/35">
                            Orders
                          </span>

                          <span className="text-[8px] text-cyan-300">□</span>
                        </div>

                        <p className="mt-2 text-sm font-bold text-white/85 sm:text-lg">
                          1,290
                        </p>

                        <span className="text-[7px] text-emerald-300">
                          +16.2%
                        </span>
                      </div>
                    </div>

                    {/* Revenue Chart */}
                    <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.018] p-3 sm:p-4">
                      <div className="mb-3 flex items-center justify-between">
                        <div>
                          <p className="text-[7px] text-white/30">
                            Revenue Growth
                          </p>

                          <p className="mt-1 text-xs font-semibold text-white/65">
                            $84,240
                          </p>
                        </div>

                        <div className="flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />

                          <span className="text-[7px] text-blue-300/60">
                            Updating
                          </span>
                        </div>
                      </div>

                      {/* Chart */}
                      <div className="relative h-[110px] overflow-hidden sm:h-[125px]">
                        <div className="absolute inset-0 flex flex-col justify-between">
                          <span className="h-px w-full bg-white/5" />
                          <span className="h-px w-full bg-white/5" />
                          <span className="h-px w-full bg-white/5" />
                          <span className="h-px w-full bg-white/5" />
                          <span className="h-px w-full bg-white/5" />
                        </div>

                        <svg
                          viewBox="0 0 600 150"
                          className="absolute inset-0 h-full w-full"
                          preserveAspectRatio="none"
                        >
                          <defs>
                            <linearGradient
                              id="webAppRevenueGradient"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1"
                            >
                              <stop
                                offset="0%"
                                stopColor="#60a5fa"
                                stopOpacity="0.22"
                              />

                              <stop
                                offset="100%"
                                stopColor="#60a5fa"
                                stopOpacity="0"
                              />
                            </linearGradient>
                          </defs>

                          <path
                            d="
                        M0 125
                        C40 118 55 110 90 113
                        C125 116 145 92 175 98
                        C210 104 220 78 255 85
                        C290 92 305 62 340 70
                        C375 78 390 48 425 57
                        C460 66 475 38 510 45
                        C545 52 565 28 600 22
                        L600 150
                        L0 150
                        Z
                      "
                            fill="url(#webAppRevenueGradient)"
                          />

                          <path
                            d="
                        M0 125
                        C40 118 55 110 90 113
                        C125 116 145 92 175 98
                        C210 104 220 78 255 85
                        C290 92 305 62 340 70
                        C375 78 390 48 425 57
                        C460 66 475 38 510 45
                        C545 52 565 28 600 22
                      "
                            fill="none"
                            stroke="#60a5fa"
                            strokeWidth="3"
                            strokeLinecap="round"
                            pathLength="1"
                            strokeDasharray="1"
                            className="animate-[dash_5s_ease-in-out_infinite]"
                          />

                          <circle
                            cx="600"
                            cy="22"
                            r="5"
                            fill="#60a5fa"
                            className="animate-pulse"
                          />

                          <circle
                            cx="600"
                            cy="22"
                            r="10"
                            fill="none"
                            stroke="#60a5fa"
                            strokeOpacity="0.25"
                            className="animate-ping"
                          />
                        </svg>
                      </div>

                      {/* Chart Labels */}
                      <div className="flex justify-between pl-1">
                        <span className="text-[6px] text-white/15">Mon</span>
                        <span className="text-[6px] text-white/15">Tue</span>
                        <span className="text-[6px] text-white/15">Wed</span>
                        <span className="text-[6px] text-white/15">Thu</span>
                        <span className="text-[6px] text-white/15">Fri</span>
                        <span className="text-[6px] text-white/15">Sat</span>
                        <span className="text-[6px] text-white/15">Sun</span>
                      </div>
                    </div>

                    {/* Bottom Analytics */}
                    <div className="mt-3 grid grid-cols-2 gap-3">
                      {/* Users Activity */}
                      <div className="rounded-xl border border-white/10 bg-white/[0.018] p-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[7px] text-white/30">
                            Users Activity
                          </span>

                          <span className="text-[7px] text-emerald-300">
                            +8.4%
                          </span>
                        </div>

                        <div className="mt-3 flex h-8 items-end gap-1">
                          <span className="h-3 flex-1 rounded-t bg-blue-400/15" />
                          <span className="h-5 flex-1 rounded-t bg-blue-400/20" />
                          <span className="h-4 flex-1 rounded-t bg-blue-400/15" />
                          <span className="h-6 flex-1 rounded-t bg-blue-400/25" />
                          <span className="h-5 flex-1 rounded-t bg-blue-400/20" />
                          <span className="h-7 flex-1 rounded-t bg-blue-400/30" />
                          <span className="h-8 flex-1 rounded-t bg-blue-400/40 animate-pulse" />
                        </div>
                      </div>

                      {/* Recent Orders */}
                      <div className="rounded-xl border border-white/10 bg-white/[0.018] p-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[7px] text-white/30">
                            Recent Orders
                          </span>

                          <span className="text-[7px] text-blue-300/60">
                            Live
                          </span>
                        </div>

                        <div className="mt-3 space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-[7px] text-white/40">
                              #ORD-2841
                            </span>

                            <span className="text-[7px] text-emerald-300">
                              $240
                            </span>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-[7px] text-white/40">
                              #ORD-2840
                            </span>

                            <span className="text-[7px] text-emerald-300">
                              $180
                            </span>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-[7px] text-white/40">
                              #ORD-2839
                            </span>

                            <span className="text-[7px] text-emerald-300">
                              $420
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </main>
                </div>
              </div>

              {/* Left Floating Data Card */}
              <div className="absolute bottom-10 left-0 z-30 hidden animate-bounce rounded-xl border border-white/10 bg-[#090c1b]/95 px-3 py-2 shadow-xl backdrop-blur-xl sm:block">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-400/10">
                    <span className="text-[10px] text-blue-300">↻</span>
                  </div>

                  <div>
                    <p className="text-[8px] font-medium text-white/60">
                      Data Updating
                    </p>

                    <p className="text-[7px] text-white/25">
                      Real-time analytics
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Floating Performance Card */}
              <div className="absolute bottom-4 right-0 z-30 hidden animate-pulse rounded-xl border border-white/10 bg-[#090c1b]/95 px-3 py-2 shadow-xl backdrop-blur-xl sm:block">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-400/10">
                    <span className="text-[10px] text-emerald-300">↑</span>
                  </div>

                  <div>
                    <p className="text-[8px] font-medium text-white/60">
                      Performance
                    </p>

                    <p className="text-[7px] text-emerald-300/60">
                      +24.6% growth
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

      <section className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-20">
        <div className="pointer-events-none absolute right-0 top-0 h-[320px] w-[320px] rounded-full bg-blue-50 blur-3xl" />

        <div className="relative mx-auto grid w-full max-w-[1500px] gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-end lg:gap-20">
          <div className="mb-10">
            <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9] sm:text-[11px]">
              Introduction
            </p>

            <h2 className="mt-4 m-0 max-w-[600px] text-[31px] font-bold leading-[1.08] tracking-[-.04em] text-[#101828] sm:text-[38px] lg:text-[30px]">
              Web Applications Built Around How Your Business Works.
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
                Akkurate begins with the business objective, audience and
                customer journey before deciding what should be created,
                optimized or measured.
              </p>
            </div>

            <div className="rounded-[24px] border border-gray-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,.08)]">
              <span className="text-[11px] font-bold text-[#1455d9]">
                02 / SYSTEM
              </span>

              <h3 className="mt-5 m-0 text-[20px] font-bold tracking-[-.025em] text-[#101828]">
                Make digital work simpler.
              </h3>

              <p className="mt-3 m-0 text-[13px] leading-6 text-gray-500">
                The goal is not simply to build another digital asset. It is to
                create a useful system that supports real users, workflows and
                measurable business needs.
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

              <h3 className="mt-3 m-0 max-w-[650px] text-[25px] font-bold leading-tight tracking-[-.03em] text-white sm:text-[26px]">
                Understand first. Build second. Improve continuously.
              </h3>

              <p className="mt-4 max-w-[650px] text-[13px] leading-7 text-gray-300 sm:text-[14px]">
                We connect business requirements, user workflows, application
                architecture, integrations and measurement so the product has a
                clear purpose.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                ["01", "Understand", "Business + users"],
                ["02", "Build", "Product + workflows"],
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

      <section className="bg-[#101828] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-20">
        <div className="mx-auto w-full max-w-[1200px] px-4 text-center sm:px-6 lg:px-8">
          <p className="m-0 text-[10px] font-bold uppercase tracking-[.18em] text-blue-300 sm:text-[11px]">
            The Business Problem We Solve
          </p>

          <h2 className="mt-4 m-0 text-[27px] font-bold leading-tight tracking-[-.03em] text-white sm:text-[34px] lg:text-[35px]">
            Replace Disconnected Processes With One Connected System.
          </h2>

          <p className="mx-auto mt-5 max-w-[850px] text-[14px] leading-7 text-gray-300 sm:text-[15px]">
            Web applications are often closer to internal products than
            traditional websites. They must balance usability, security, data,
            performance and maintainability. Akkurate scopes the application
            around the business process rather than starting with a generic
            template.
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
          ANALYTICS / PERFORMANCE
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#f7faff] px-5 py-10 sm:px-8 sm:py-20 lg:px-14 lg:py-20">
        <div className="mx-auto w-full max-w-[1500px]">
          <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-center lg:gap-16">
            {/* LEFT CONTENT */}

            <div>
              <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9]">
                Application Intelligence
              </p>

              <h2 className="mt-3 m-0 text-[30px] font-bold leading-[1.08] tracking-[-.04em] text-[#101828] sm:text-[30px] lg:text-[25px]">
                Measure how people actually use the application.
              </h2>

              <p className="mt-5 max-w-[560px] text-[14px] leading-7 text-gray-600">
                Web application performance should be evaluated against real
                usage and business outcomes.
              </p>

              {/* Metric cards */}

              <div className="mt-7 grid grid-cols-2 gap-3">
                {[
                  ["2.8K", "Users"],
                  ["18.4K", "Sessions"],
                  ["86%", "Task completion"],
                  ["180ms", "Response time"],
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

              {/* Legend */}

              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[9px] font-semibold uppercase tracking-[.1em] text-gray-400">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded bg-[#f5f8ff]" />
                  Low
                </span>

                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded bg-indigo-100" />
                  Moderate
                </span>

                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded bg-blue-300" />
                  High
                </span>

                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded bg-[#1455d9]" />
                  Peak
                </span>
              </div>
            </div>

            {/* RIGHT HEATMAP */}

            <div className="relative overflow-hidden rounded-[30px] border border-gray-200 bg-white p-4 shadow-[0_25px_70px_rgba(15,23,42,.08)] sm:p-6">
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-100/50 blur-3xl" />

              <div className="relative">
                {/* Header */}

                <div className="flex items-center justify-between border-b border-gray-100 pb-5">
                  <div>
                    <p className="m-0 text-[13px] font-bold text-[#101828]">
                      User activity heatmap
                    </p>

                    <p className="mt-1 m-0 text-[10px] text-gray-400">
                      Illustrative usage pattern across application areas
                    </p>
                  </div>

                  <span className="rounded-full bg-emerald-50 px-2.5 py-1.5 text-[7px] font-bold uppercase tracking-[.1em] text-emerald-600">
                    Usage view
                  </span>
                </div>

                {/* Heatmap */}

                <div className="mt-6">
                  {/* Time labels */}

                  <div className="mb-2 ml-[76px] flex gap-1">
                    {[
                      "08",
                      "09",
                      "10",
                      "11",
                      "12",
                      "13",
                      "14",
                      "15",
                      "16",
                      "17",
                    ].map((time) => (
                      <span
                        key={time}
                        className="min-w-0 flex-1 text-center text-[7px] font-bold text-gray-300"
                      >
                        {time}
                      </span>
                    ))}
                  </div>

                  {/* Rows */}

                  <div className="space-y-2">
                    {heatmapRows.map((row) => (
                      <div key={row.label} className="flex items-center gap-2">
                        <span className="w-[68px] shrink-0 text-right text-[8px] font-bold text-gray-500">
                          {row.label}
                        </span>

                        <div className="flex min-w-0 flex-1 gap-1">
                          {row.values.map((value, index) => (
                            <HeatmapCell
                              key={`${row.label}-${index}`}
                              value={value}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom insight */}

                <div className="mt-6 rounded-[22px] border border-blue-100 bg-blue-50/60 p-4">
                  <div className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[12px] font-bold text-[#1455d9] shadow-sm">
                      ↗
                    </span>

                    <div>
                      <p className="m-0 text-[9px] font-bold uppercase tracking-[.12em] text-[#1455d9]">
                        Usage insight
                      </p>

                      <p className="mt-1 m-0 text-[11px] font-bold text-[#101828]">
                        Task workflows show the strongest activity.
                      </p>

                      <p className="mt-1 m-0 text-[8px] leading-5 text-gray-500">
                        Usage patterns can help identify friction, high-value
                        workflows and areas that deserve further product
                        attention.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom stats */}

                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[
                    ["91%", "Workflow health"],
                    ["84%", "Engagement"],
                    ["96%", "API stability"],
                  ].map(([value, label]) => (
                    <div
                      key={label}
                      className="rounded-[16px] border border-gray-100 bg-[#fbfcff] p-3"
                    >
                      <p className="m-0 text-[15px] font-bold text-[#101828]">
                        {value}
                      </p>

                      <p className="mt-1 m-0 text-[7px] font-medium uppercase tracking-[.08em] text-gray-400">
                        {label}
                      </p>
                    </div>
                  ))}
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
        id="web-application-services"
        className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-20"
      >
        <div className="mx-auto w-full max-w-[1500px]">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[760px]">
              <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9] sm:text-[11px]">
                Our Services
              </p>

              <h2 className="mt-3 m-0 text-[30px] font-bold leading-[1.08] tracking-[-.04em] text-[#101828] sm:text-[38px] lg:text-[37px]">
                Our Web Application Services
              </h2>
            </div>

            <p className="max-w-[420px] text-[13px] leading-6 text-gray-500">
              Build, integrate and improve web applications around real
              workflows, users, systems and measurable business outcomes.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {webApplicationServices.map((service) => (
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
                    {service.icon}
                  </span>
                </div>

                <p className="relative mt-6 m-0 text-[9px] font-bold uppercase tracking-[.14em] text-[#1455d9]">
                  {service.tag}
                </p>

                <h3 className="relative mt-2 m-0 text-[20px] font-bold leading-snug tracking-[-.02em] text-[#101828]">
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

      <section className="relative overflow-hidden bg-[#f7faff] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-20">
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

              <a
                href="/contact"
                className="mt-7 inline-flex items-center rounded-full bg-[#073b91] px-5 py-3 text-[12px] font-bold text-white transition hover:-translate-y-1 hover:bg-[#052f75]"
              >
                Discuss your application goal
                <span className="ml-2">→</span>
              </a>
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

      <section className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-20">
        <div className="mx-auto w-full max-w-[1500px]">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start lg:gap-20">
            {/* LEFT CONTENT */}
            <Reveal direction="left">
              <div>
                <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9]">
                  Who This Service Is For
                </p>

                <h2 className="mt-3 m-0 max-w-[560px] text-[31px] font-bold leading-[1.08] tracking-[-.04em] text-[#101828] sm:text-[40px]">
                  Web Applications Should Fit Your Business.
                </h2>

                <p className="mt-5 max-w-[520px] text-[13px] leading-7 text-gray-500">
                  Web Application Development is relevant to businesses that
                  have a clear reason to improve their digital presence,
                  customer journey, internal workflow or growth engine.
                </p>

                <p className="mt-4 max-w-[520px] text-[13px] leading-7 text-gray-500">
                  The right approach depends on the starting point. Akkurate can
                  recommend a focused scope, a broader integrated program or a
                  different service when that is more appropriate.
                </p>
              </div>
            </Reveal>

            {/* RIGHT QUALIFICATION CARDS */}
            <div className="grid gap-3 md:grid-cols-3">
              {[
                [
                  "01",
                  "Existing Processes",
                  "When disconnected tools or manual workflows are slowing the business down.",
                ],
                [
                  "02",
                  "Growing Operations",
                  "When the application needs to support more users, workflows or integrations.",
                ],
                [
                  "03",
                  "Digital Products",
                  "When a business needs a purpose-built digital product rather than a traditional website.",
                ],
              ].map(([number, title, text], index) => (
                <Reveal key={number} direction="up" delay={index}>
                  <article
                    className="
                h-full
                rounded-[22px]
                border
                border-gray-200
                bg-[#f8faff]
                p-5
                transition
                duration-300
                hover:-translate-y-1
                hover:bg-white
                hover:shadow-[0_20px_45px_rgba(15,23,42,.07)]
              "
                  >
                    {/* NUMBER */}
                    <span className="text-[9px] font-black tracking-[.15em] text-[#1455d9]">
                      {number}
                    </span>

                    {/* TITLE */}
                    <h3 className="mt-5 text-[16px] font-bold text-[#101828]">
                      {title}
                    </h3>

                    {/* DESCRIPTION */}
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
          PROCESS
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#101828] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-20">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-900/20 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1500px]">
          <div className="mx-auto max-w-[800px] text-center">
            <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-blue-300">
              Our Process
            </p>

            <h2 className="mt-3 m-0 text-[31px] font-bold leading-[1.08] tracking-[-.04em] text-white sm:text-[40px] lg:text-[48px]">
              A Practical Web Application Process.
            </h2>

            <p className="mt-5 text-[13px] leading-7 text-gray-400 sm:text-[14px]">
              A structured process keeps business requirements, workflows,
              technology, integrations and measurement connected.
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

      <section className="relative overflow-hidden bg-[#f7faff] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-20">
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
                Web Technology With a
                <span className="block text-[#1455d9]">
                  Business-First Approach.
                </span>
              </h2>
            </div>

            <div>
              <p className="m-0 max-w-[650px] text-[14px] leading-7 text-gray-600 sm:text-[15px]">
                Digital growth rarely depends on one capability. We bring
                strategy, search, content, web and technology together when the
                customer journey or business process needs a connected approach.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Strategy", "Technology", "UX", "Data", "Growth"].map(
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
                    One system.
                    <br />
                    Multiple business workflows.
                  </h3>

                  <p className="mt-4 max-w-[400px] text-[12px] leading-6 text-gray-400 sm:text-[13px]">
                    Instead of treating every digital activity separately, we
                    connect the right capabilities around your business
                    objective, users and customer journey.
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
                        Business
                      </p>

                      <p className="mt-1 m-0 text-[11px] font-bold text-white">
                        Core
                      </p>
                    </div>
                  </div>

                  {[
                    ["UX", "top-[5%] left-[15%]"],
                    ["DATA", "top-[5%] right-[15%]"],
                    ["API", "bottom-[5%] left-[15%]"],
                    ["USERS", "bottom-[5%] right-[15%]"],
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

            <a
              href="/contact"
              className="inline-flex items-center text-[11px] font-bold text-[#1455d9]"
            >
              Talk to our team
              <span className="ml-2">→</span>
            </a>
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
              Build a stronger digital presence with connected website and
              commerce solutions designed to improve your online experience and
              growth.
            </p>
          </div>

          {/* CARDS */}
          <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* =====================================================
          CMS DEVELOPMENT CARD
      ===================================================== */}

            <Link
              to="/cms-development"
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
                    CMS Development
                  </h3>

                  <p className="mt-2 m-0 max-w-[270px] text-[10px] leading-[1.6] text-gray-400 sm:text-[11px]">
                    Build flexible and easy-to-manage websites with powerful CMS
                    solutions that simplify content updates and support business
                    growth.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[.12em] text-cyan-300/60 transition group-hover:text-cyan-300">
                  Explore service
                  <span className="h-px w-5 bg-cyan-400/30 transition-all duration-300 group-hover:w-8" />
                </div>
              </div>

              {/* CMS DEVELOPMENT ORBIT */}
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
                    CMS
                  </span>
                </div>
              </div>

              {/* Arrow */}
              <div className="absolute bottom-4 right-4 z-30 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-500/10 text-[13px] text-cyan-300 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-cyan-500 group-hover:text-white">
                →
              </div>
            </Link>

            {/* =====================================================
          E-COMMERCE CARD
      ===================================================== */}

            <Link
              to="/e-commerce"
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
                    E-commerce
                  </h3>

                  <p className="mt-2 m-0 max-w-[270px] text-[10px] leading-[1.6] text-gray-400 sm:text-[11px]">
                    Create seamless online stores with secure shopping
                    experiences, intuitive product journeys and scalable
                    e-commerce solutions.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[.12em] text-violet-300/60 transition group-hover:text-violet-300">
                  Explore service
                  <span className="h-px w-5 bg-violet-400/30 transition-all duration-300 group-hover:w-8" />
                </div>
              </div>

              {/* E-COMMERCE ORBIT */}
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
                <div className="absolute left-1/2 top-1/2 flex h-[55px] w-[76px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-violet-300/30 bg-[#17152b] shadow-[0_0_35px_rgba(139,92,246,.3)]">
                  <span className="text-[8px] font-black uppercase tracking-[.04em] text-violet-300">
                    E-Commerce
                  </span>
                </div>
              </div>

              {/* Arrow */}
              <div className="absolute bottom-4 right-4 z-30 flex h-8 w-8 items-center justify-center rounded-full border border-violet-400/20 bg-violet-500/10 text-[13px] text-violet-300 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-violet-500 group-hover:text-white">
                →
              </div>
            </Link>

            {/* =====================================================
          WEBSITE DESIGN CARD
      ===================================================== */}

            <Link
              to="/website-design"
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
                    Website Design
                  </h3>

                  <p className="mt-2 m-0 max-w-[275px] text-[10px] leading-[1.6] text-gray-400 sm:text-[11px]">
                    Design modern, responsive and user-focused websites that
                    create strong first impressions and deliver seamless digital
                    experiences.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[.12em] text-orange-300/60 transition group-hover:text-orange-300">
                  Explore service
                  <span className="h-px w-5 bg-orange-400/30 transition-all duration-300 group-hover:w-8" />
                </div>
              </div>

              {/* WEBSITE DESIGN ORBIT */}
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
                    Design
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

      <section className="relative overflow-hidden bg-[#f7faff] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
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
                  to know about Web Applications.
                </span>
              </h2>

              <p className="mt-5 max-w-[430px] text-[12px] leading-6 text-gray-500 sm:text-[13px] sm:leading-7">
                Have questions about application scope, development,
                integrations, measurement or how web applications fit into your
                digital strategy? Find the answers below.
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

                  <a
                    href="/contact"
                    className="group flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-[13px] text-gray-500 transition-all duration-300 hover:border-[#1455d9] hover:bg-[#1455d9] hover:text-white"
                  >
                    →
                  </a>
                </div>

                <div className="mt-5 border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] font-bold uppercase tracking-[.15em] text-gray-400">
                      Web Application
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
                    UX
                  </p>

                  <p className="mt-1 m-0 text-[8px] font-medium uppercase tracking-[.12em] text-gray-400">
                    User Experience
                  </p>
                </div>

                <div className="rounded-[18px] border border-gray-200 bg-white px-4 py-4">
                  <p className="m-0 text-[20px] font-bold tracking-[-.03em] text-[#1455d9]">
                    API
                  </p>

                  <p className="mt-1 m-0 text-[8px] font-medium uppercase tracking-[.12em] text-gray-400">
                    Connected Systems
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

          {/* FAQ bottom strip */}

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
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="px-5 pb-14 sm:px-8 sm:pb-16 lg:px-14 lg:pb-20">
        <div className="relative mt-20 overflow-hidden rounded-[26px] bg-gradient-to-r from-[#0b2443] via-[#7434e8] to-[#245fe5] px-6 py-9 shadow-[0_25px_80px_rgba(91,45,190,.22)] sm:px-9 sm:py-10 lg:px-11 lg:py-11">
          <div className="pointer-events-none absolute -right-20 -top-28 h-[260px] w-[260px] rounded-full bg-white/10 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto_auto] lg:items-center">
            {/* CTA content */}

            <div>
              <p className="m-0 text-[9px] font-bold uppercase tracking-[.18em] text-white/70">
                Ready to Build?
              </p>

              <h3 className="mt-2 m-0 max-w-[650px] text-[26px] font-bold leading-[1.12] tracking-[-.035em] text-white sm:text-[22px]">
                Replace disconnected manual processes with a web application
                designed around how your business actually works.
              </h3>
            </div>

            {/* CTA button */}

            <a
              href="/contact"
              className="inline-flex w-fit items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-[11px] font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#073b91]"
            >
              Start Your Application
              <span className="ml-2 text-[15px]">→</span>
            </a>

            {/* CTA stats */}

            <div className="flex items-center gap-6 border-t border-white/20 pt-5 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
              <div>
                <p className="m-0 text-[22px] font-bold text-white">UX</p>

                <p className="mt-1 m-0 text-[8px] text-white/65">Focus</p>
              </div>

              <div className="h-9 w-px bg-white/20" />

              <div>
                <p className="m-0 text-[22px] font-bold text-white">API</p>

                <p className="mt-1 m-0 text-[8px] text-white/65">Connected</p>
              </div>

              <div className="h-9 w-px bg-white/20" />

              <div>
                <p className="m-0 text-[22px] font-bold text-white">Data</p>

                <p className="mt-1 m-0 text-[8px] text-white/65">Measured</p>
              </div>
            </div>
          </div>

          {/* Bottom process strip */}

          <div className="relative mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-4">
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[8px] text-blue-200">
                01
              </span>

              <span className="text-[9px] font-medium text-white/55">
                Requirements
              </span>
            </div>

            <span className="h-3 w-px bg-white/10" />

            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[8px] text-blue-200">
                02
              </span>

              <span className="text-[9px] font-medium text-white/55">
                Development
              </span>
            </div>

            <span className="h-3 w-px bg-white/10" />

            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[8px] text-blue-200">
                03
              </span>

              <span className="text-[9px] font-medium text-white/55">
                Improve
              </span>
            </div>

            <div className="ml-auto hidden items-center gap-2 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,.7)]" />

              <span className="text-[9px] font-medium text-white/45">
                Let's build your next digital system
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WebApplication;

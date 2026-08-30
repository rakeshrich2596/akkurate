import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/* =========================================================
   APP DEVELOPMENT PAGE
   GEO DESIGN SYSTEM
   React JS + Tailwind CSS ONLY

   Content source:
   - App Development service content
   - App development capabilities
   - Architecture
   - Performance / analytics
   - Process
   - Why choose
   - Outcomes
   - Related services
   - FAQs

   Design direction:
   - GEO-inspired light premium layout
   - Blue / indigo / cyan palette
   - Animated product hero
   - Mid-page performance graph
   - Rich service cards
   - Orbit-style related services
   - No custom CSS
   - No Framer Motion / GSAP / external animation library
========================================================= */

const developmentServices = [
  {
    number: "01",
    tag: "STRATEGY",
    title: "Mobile App Strategy",
    description:
      "Define the product objective, target users, core journeys, feature priorities and technology direction before development begins.",
    icon: "⌁",
  },
  {
    number: "02",
    tag: "IOS",
    title: "iOS App Development",
    description:
      "Build polished iOS applications around the agreed user experience, business requirements and product goals.",
    icon: "◉",
  },
  {
    number: "03",
    tag: "ANDROID",
    title: "Android App Development",
    description:
      "Create responsive Android applications designed around usability, performance and the needs of the target audience.",
    icon: "◆",
  },
  {
    number: "04",
    tag: "CROSS PLATFORM",
    title: "Cross-Platform Development",
    description:
      "Develop efficient cross-platform experiences when a shared product architecture is the practical choice.",
    icon: "◈",
  },
  {
    number: "05",
    tag: "BACKEND",
    title: "API & Backend Integration",
    description:
      "Connect applications with APIs, databases, authentication, business systems and required digital workflows.",
    icon: "⌘",
  },
  {
    number: "06",
    tag: "QUALITY",
    title: "Testing & Optimization",
    description:
      "Test key journeys, interactions and performance and use the findings to improve the product before launch.",
    icon: "✓",
  },
];

const architectureItems = [
  {
    number: "01",
    title: "User Experience",
    text: "Clear journeys, useful interactions and interfaces designed around real users.",
  },
  {
    number: "02",
    title: "Application Layer",
    text: "Product functionality structured around maintainability, usability and future growth.",
  },
  {
    number: "03",
    title: "API & Data",
    text: "Connected services, APIs and data flows supporting the required business workflows.",
  },
  {
    number: "04",
    title: "Performance",
    text: "Testing and measurement used to identify opportunities for continuous improvement.",
  },
];

const performanceMetrics = [
  {
    label: "Active Usage",
    value: "2.8K",
    change: "+24%",
    width: "w-[82%]",
  },
  {
    label: "Engagement",
    value: "84%",
    change: "+18%",
    width: "w-[84%]",
  },
  {
    label: "Conversion",
    value: "6.8%",
    change: "+12%",
    width: "w-[68%]",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Understand the business objective, audience, existing assets, constraints and success criteria.",
  },
  {
    number: "02",
    title: "Product Planning",
    description:
      "Translate the objective into user journeys, feature scope, product structure and measurement priorities.",
  },
  {
    number: "03",
    title: "UI & Architecture",
    description:
      "Design the experience and technical architecture around the agreed business and user requirements.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "Build the application, connect required services and implement the agreed product functionality.",
  },
  {
    number: "05",
    title: "Testing & Launch",
    description:
      "Test key journeys, integrations, tracking and performance before launch and continued iteration.",
  },
];

const whyChoose = [
  {
    number: "01",
    title: "Business-First Approach",
    description:
      "We start with what the business needs to achieve and define the product scope around that objective.",
  },
  {
    number: "02",
    title: "Integrated Expertise",
    description:
      "App development can connect with websites, APIs, SEO, marketing, branding and other digital capabilities when required.",
  },
  {
    number: "03",
    title: "Clear Communication",
    description:
      "The team should understand what is being built, why it matters and what the next priority is.",
  },
  {
    number: "04",
    title: "Continuous Improvement",
    description:
      "Launch is not the end. Feedback, product usage and changing customer needs should guide the next iteration.",
  },
];

const outcomes = [
  "Clearer mobile customer journeys",
  "User-focused app experiences",
  "Scalable application architecture",
  "Connected business workflows",
  "Responsive and usable interfaces",
  "A practical foundation for future improvements",
];

const relatedServices = [
  {
    number: "01",
    title: "Website Development",
    description:
      "Build fast, responsive websites that support your brand and customer journey.",
    path: "/website-development",
    type: "WEB",
    tone: "blue",
  },
  {
    number: "02",
    title: "Web Application",
    description:
      "Create functional web-based products for complex workflows and digital operations.",
    path: "/web-application",
    type: "WEB APP",
    tone: "cyan",
  },
  {
    number: "03",
    title: "CMS Development",
    description:
      "Create manageable content systems that make publishing and updating digital experiences easier.",
    path: "/cms-development",
    type: "CMS",
    tone: "violet",
  },
];

const faqs = [
  {
    question: "What is included in your app development service?",
    answer:
      "The scope is customized around the objective. It can include strategy, UX, UI, application development, API integration, testing and launch support depending on the project.",
  },
  {
    question: "How do you decide the right app scope?",
    answer:
      "We look at the business goal, audience, current systems, product requirements, timeline and budget before recommending priorities.",
  },
  {
    question: "Can app development work with an existing website or backend?",
    answer:
      "Yes. We can connect the application with existing websites, APIs, databases and business systems when that is the more practical approach.",
  },
  {
    question: "How do you measure app performance?",
    answer:
      "KPIs depend on the objective and may include engagement, active usage, leads, enquiries, conversions, product usage or other agreed business signals.",
  },
  {
    question: "Can you improve an existing app?",
    answer:
      "Yes. We can audit and improve an existing application instead of rebuilding everything when that is the more practical approach.",
  },
  {
    question: "Do you guarantee app downloads or business results?",
    answer:
      "No responsible agency can guarantee a fixed commercial outcome. We can commit to a clear process, quality execution and transparent measurement.",
  },
];

function Reveal({ children, direction = "up", delay = 0 }) {
  const [visible, setVisible] = useState(false);
  const ref = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const hidden = {
    up: "translate-y-8 opacity-0",
    left: "-translate-x-8 opacity-0",
    right: "translate-x-8 opacity-0",
    center: "scale-95 opacity-0",
  };

  const shown = {
    up: "translate-y-0 opacity-100",
    left: "translate-x-0 opacity-100",
    right: "translate-x-0 opacity-100",
    center: "scale-100 opacity-100",
  };

  const safeDirection = hidden[direction] ? direction : "up";

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ${
        visible ? shown[safeDirection] : hidden[safeDirection]
      }`}
    >
      {children}
    </div>
  );
}

function HeroProductVisual() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % 3);
    }, 2200);

    return () => clearInterval(timer);
  }, []);

  const screens = [
    {
      title: "Home",
      metric: "2.8K",
      label: "Active users",
      change: "+24%",
    },
    {
      title: "Discover",
      metric: "84%",
      label: "Engagement",
      change: "+18%",
    },
    {
      title: "Insights",
      metric: "6.8%",
      label: "Conversion",
      change: "+12%",
    },
  ];

  const current = screens[active];

  return (
    <div className="relative mx-auto flex min-h-[420px] w-full max-w-[700px] items-center justify-center sm:min-h-[500px]">
      {/* =====================================================
          AMBIENT GLOWS
      ===================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[310px] w-[310px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-blue-100/70 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-50/70 blur-3xl" />

      {/* =====================================================
          OUTER ORBITS
      ===================================================== */}

      <div className="absolute left-1/2 top-1/2 h-[365px] w-[365px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-100" />

      <div className="absolute left-1/2 top-1/2 h-[445px] w-[445px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-blue-100/80" />

      {/* =====================================================
          ORBIT NODE 1
      ===================================================== */}

      <div className="absolute left-1/2 top-1/2 z-20 h-0 w-0 animate-[spin_12s_linear_infinite]">
        <div className="flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-blue-100 bg-white text-[9px] font-black text-[#1455d9] shadow-[0_10px_30px_rgba(20,85,217,.12)]">
          iOS
        </div>
      </div>

      {/* =====================================================
          ORBIT NODE 2
      ===================================================== */}

      <div className="absolute left-1/2 top-1/2 z-20 h-0 w-0 animate-[spin_9s_linear_infinite_reverse]">
        <div className="flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-100 bg-white text-[8px] font-black text-cyan-600 shadow-[0_10px_30px_rgba(6,182,212,.12)]">
          API
        </div>
      </div>

      {/* =====================================================
          CONNECTION LINES
      ===================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[500px] -translate-x-1/2 -translate-y-1/2 rotate-[25deg] border-t border-dashed border-blue-100/80" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[240px] w-[430px] -translate-x-1/2 -translate-y-1/2 -rotate-[32deg] border-t border-dashed border-cyan-100/70" />

      {/* =====================================================
          PHONE FRAME
      ===================================================== */}

      <div className="relative z-10 h-[360px] w-[220px] rotate-[-3deg] rounded-[34px] border-[7px] border-[#101828] bg-[#0b1020] p-2 shadow-[0_35px_90px_rgba(15,23,42,.24)] transition-all duration-700 hover:rotate-0 hover:scale-[1.03] sm:h-[390px] sm:w-[240px]">
        {/* Dynamic island / camera */}
        <div className="absolute left-1/2 top-1.5 z-40 h-4 w-16 -translate-x-1/2 rounded-full bg-[#050713]" />

        {/* =================================================
            MOBILE APP SCREEN
        ================================================= */}

        <div className="relative h-full overflow-hidden rounded-[25px] bg-[#f6f8fc]">
          {/* App background */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-[#f7f9fc]" />

          {/* Animated top glow */}
          <div
            className={`absolute -right-10 top-8 h-28 w-28 rounded-full blur-3xl transition-all duration-1000 ${
              active === 0
                ? "bg-blue-200/50"
                : active === 1
                  ? "bg-cyan-200/50"
                  : "bg-violet-200/50"
            }`}
          />

          {/* =================================================
              APP HEADER
          ================================================= */}

          <div className="relative z-10 flex items-center justify-between px-4 pb-2 pt-7">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#1455d9] to-cyan-400 text-[8px] font-black text-white shadow-sm">
                A
              </div>

              <div>
                <p className="m-0 text-[6px] font-medium text-gray-400">
                  Welcome back
                </p>

                <p className="mt-0.5 m-0 text-[10px] font-bold text-[#101828]">
                  Akkurate
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[9px] text-gray-500 shadow-sm">
                ⌕
              </div>

              <div className="relative flex h-6 w-6 items-center justify-center rounded-full bg-white text-[9px] text-gray-500 shadow-sm">
                ♡
                <span className="absolute right-0 top-0 h-1.5 w-1.5 rounded-full bg-red-400" />
              </div>
            </div>
          </div>

          {/* =================================================
              STORIES / CATEGORIES
          ================================================= */}

          <div className="relative z-10 mt-2 flex gap-2 overflow-hidden px-4">
            {[
              ["You", "A"],
              ["Design", "D"],
              ["Build", "B"],
              ["Growth", "G"],
              ["Ideas", "I"],
            ].map(([label, letter], index) => (
              <div key={label} className="flex shrink-0 flex-col items-center">
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-full border-2 bg-white text-[8px] font-black shadow-sm transition-all duration-500 ${
                    index === active
                      ? "border-[#1455d9] scale-105"
                      : "border-white"
                  }`}
                >
                  <span
                    className={
                      index === 0
                        ? "text-[#1455d9]"
                        : index === 1
                          ? "text-violet-500"
                          : index === 2
                            ? "text-cyan-500"
                            : index === 3
                              ? "text-emerald-500"
                              : "text-orange-500"
                    }
                  >
                    {letter}
                  </span>
                </div>

                <span className="mt-1 text-[6px] font-medium text-gray-400">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* =================================================
              MAIN APP CONTENT
          ================================================= */}

          <div className="relative z-10 px-4" key={active}>
            {/* Section title */}
            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="m-0 text-[6px] font-bold uppercase tracking-[.13em] text-[#1455d9]">
                  {current.title}
                </p>

                <p className="mt-1 m-0 text-[12px] font-bold text-[#101828]">
                  What's happening?
                </p>
              </div>

              <span className="text-[8px] font-semibold text-gray-400">
                View all
              </span>
            </div>

            {/* =================================================
                FEATURED POST / APP CARD
            ================================================= */}

            <div className="mt-3 overflow-hidden rounded-[17px] bg-white shadow-[0_10px_30px_rgba(15,23,42,.07)]">
              {/* Image / visual area */}
              <div className="relative h-[82px] overflow-hidden bg-gradient-to-br from-[#0c3c91] via-[#1455d9] to-cyan-400">
                {/* Decorative circles */}
                <div className="absolute -right-5 -top-10 h-28 w-28 rounded-full border border-white/20" />

                <div className="absolute right-4 top-3 h-16 w-16 rounded-full border border-dashed border-white/20 animate-[spin_8s_linear_infinite]" />

                <div className="absolute -left-5 bottom-[-30px] h-24 w-24 rounded-full bg-white/10 blur-xl" />

                {/* Mini UI */}
                <div className="absolute left-3 top-3">
                  <span className="rounded-full bg-white/15 px-2 py-1 text-[6px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                    Featured
                  </span>
                </div>

                {/* Center graphic */}
                <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-[11px] font-black text-white shadow-lg backdrop-blur-sm">
                  <span className="animate-pulse">
                    {active === 0 ? "A" : active === 1 ? "◎" : "↗"}
                  </span>
                </div>

                {/* Small floating dots */}
                <span className="absolute bottom-4 left-5 h-1.5 w-1.5 animate-ping rounded-full bg-cyan-200" />

                <span className="absolute right-8 bottom-5 h-1 w-1 rounded-full bg-white/70" />
              </div>

              {/* Post content */}
              <div className="p-3">
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 rounded-full bg-gradient-to-br from-violet-400 to-blue-500" />

                  <div>
                    <p className="m-0 text-[7px] font-bold text-[#101828]">
                      Product Update
                    </p>

                    <p className="m-0 text-[5px] text-gray-400">Just now</p>
                  </div>
                </div>

                <p className="mt-2 m-0 text-[8px] font-semibold leading-4 text-[#101828]">
                  Build experiences that move your customers forward.
                </p>

                {/* Actions */}
                <div className="mt-2 flex items-center justify-between border-t border-gray-100 pt-2">
                  <div className="flex items-center gap-3">
                    <span className="text-[8px] text-red-400">♡</span>

                    <span className="text-[7px] text-gray-400">248</span>

                    <span className="text-[8px] text-gray-400">○</span>

                    <span className="text-[7px] text-gray-400">32</span>
                  </div>

                  <span className="text-[8px] text-gray-400">↗</span>
                </div>
              </div>
            </div>

            {/* =================================================
                MINI ANALYTICS ROW
            ================================================= */}

            <div className="mt-2 grid grid-cols-2 gap-2">
              <div className="rounded-xl border border-gray-100 bg-white p-2 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[5px] font-bold uppercase tracking-wider text-gray-400">
                    {current.label}
                  </span>

                  <span className="text-[7px] text-emerald-500">↗</span>
                </div>

                <div className="mt-1 flex items-end justify-between">
                  <span className="text-[14px] font-bold text-[#101828]">
                    {current.metric}
                  </span>

                  <span className="text-[6px] font-bold text-emerald-500">
                    {current.change}
                  </span>
                </div>

                <div className="mt-2 flex h-5 items-end gap-0.5">
                  {["h-2", "h-3", "h-2.5", "h-4", "h-3", "h-5"].map(
                    (height, index) => (
                      <div
                        key={index}
                        className={`flex-1 rounded-t-sm ${
                          index === 5 ? "bg-[#1455d9]" : "bg-blue-100"
                        } ${height}`}
                      />
                    ),
                  )}
                </div>
              </div>

              <div className="rounded-xl bg-[#101828] p-2 text-white shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[5px] font-bold uppercase tracking-wider text-blue-300">
                    Health
                  </span>

                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                </div>

                <p className="mt-2 m-0 text-[14px] font-bold">98.6%</p>

                <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[86%] rounded-full bg-cyan-400" />
                </div>

                <p className="mt-1 m-0 text-[5px] text-gray-500">
                  Application health
                </p>
              </div>
            </div>
          </div>

          {/* =================================================
              BOTTOM NAVIGATION
          ================================================= */}

          <div className="absolute inset-x-0 bottom-0 z-20 border-t border-gray-100 bg-white/95 px-5 py-2 backdrop-blur-md">
            <div className="flex items-center justify-between">
              {[
                ["⌂", "Home"],
                ["◌", "Explore"],
                ["+", "Create"],
                ["♡", "Activity"],
                ["◉", "Profile"],
              ].map(([icon, label], index) => (
                <div key={label} className="flex flex-col items-center gap-0.5">
                  <div
                    className={`flex h-5 w-5 items-center justify-center rounded-full text-[9px] transition-all duration-300 ${
                      index === active + 1
                        ? "bg-[#073b91] text-white"
                        : "text-gray-400"
                    }`}
                  >
                    {icon}
                  </div>

                  <span
                    className={`text-[5px] font-semibold ${
                      index === active + 1 ? "text-[#1455d9]" : "text-gray-400"
                    }`}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* =================================================
              FLOATING NOTIFICATION
          ================================================= */}

          <div
            className="
              absolute
              right-2
              top-[42%]
              z-30
              animate-bounce
              rounded-xl
              border
              border-white
              bg-white/95
              px-2
              py-1.5
              shadow-[0_12px_30px_rgba(15,23,42,.12)]
              [animation-duration:5s]
            "
          >
            <div className="flex items-center gap-1.5">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-[7px] text-emerald-500">
                ✓
              </span>

              <div>
                <p className="m-0 text-[6px] font-bold text-[#101828]">
                  Updated
                </p>

                <p className="m-0 text-[5px] text-gray-400">Just now</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          FLOATING LEFT CARD
      ===================================================== */}

      <div className="absolute left-[3%] top-[19%] z-30 animate-bounce rounded-2xl border border-white bg-white/95 px-3 py-2.5 shadow-[0_18px_45px_rgba(15,23,42,.12)] [animation-duration:6s] sm:left-[4%]">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-[10px] font-black text-[#1455d9]">
            UX
          </span>

          <div>
            <p className="m-0 text-[8px] font-bold text-[#101828]">
              User first
            </p>

            <p className="mt-0.5 m-0 text-[7px] text-gray-400">
              Journey mapped
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          FLOATING RIGHT CARD
      ===================================================== */}

      <div className="absolute right-[1%] top-[13%] z-30 animate-bounce rounded-2xl bg-[#101828] px-3.5 py-3 shadow-[0_18px_45px_rgba(15,23,42,.18)] [animation-duration:5s] sm:right-[3%]">
        <p className="m-0 text-[7px] font-bold uppercase tracking-[.13em] text-blue-300">
          Performance
        </p>

        <p className="mt-1 m-0 text-[17px] font-bold text-white">+18%</p>
      </div>

      {/* =====================================================
          BOTTOM CARD
      ===================================================== */}

      <div className="absolute bottom-[5%] left-[7%] z-30 rounded-2xl border border-blue-100 bg-white/95 px-3 py-2.5 shadow-[0_15px_40px_rgba(15,23,42,.1)] sm:left-[11%]">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-50 text-[9px] font-bold text-emerald-600">
            ✓
          </span>

          <div>
            <p className="m-0 text-[8px] font-bold text-[#101828]">
              Ready to ship
            </p>

            <p className="mt-0.5 m-0 text-[7px] text-gray-400">QA checked</p>
          </div>
        </div>
      </div>

      {/* =====================================================
          LIVE PILL
      ===================================================== */}

      <div className="absolute bottom-[8%] right-[4%] z-30 rounded-full border border-white bg-white px-3 py-1.5 text-[7px] font-bold text-[#1455d9] shadow-lg">
        <span className="mr-1 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
        Product live
      </div>
    </div>
  );
}

function PerformanceAnalytics() {
  const [activeMetric, setActiveMetric] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveMetric((current) => (current + 1) % performanceMetrics.length);
    }, 2400);

    return () => clearInterval(timer);
  }, []);

  const graphBars = [
    "h-[36%]",
    "h-[46%]",
    "h-[43%]",
    "h-[59%]",
    "h-[55%]",
    "h-[72%]",
    "h-[66%]",
    "h-[81%]",
    "h-[77%]",
    "h-[91%]",
    "h-[87%]",
    "h-[100%]",
  ];

  return (
    <section className="relative overflow-hidden bg-[#f4f7fc] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
      <div className="pointer-events-none absolute -right-40 top-10 h-[400px] w-[400px] rounded-full bg-blue-100/70 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[350px] w-[350px] rounded-full bg-indigo-100/50 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1500px]">
        <Reveal direction="center">
          <div className="mx-auto max-w-[850px] text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.18em] text-[#1455d9] shadow-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#1455d9]" />
              Performance & Analytics
            </span>

            <h2 className="mt-5 text-[30px] font-bold leading-[1.05] tracking-[-.045em] text-[#101828] sm:text-[39px] lg:text-[46px]">
              Build it. Measure it. Improve it.
            </h2>

            <p className="mx-auto mt-5 max-w-[760px] text-[13px] leading-7 text-gray-600 sm:text-[14px]">
              App development should not stop at launch. Performance data,
              product usage and customer behaviour can help identify what is
              working and where the next improvement should happen.
            </p>
          </div>
        </Reveal>

        <Reveal direction="up">
          <div className="mt-11 overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,.08)]">
            <div className="flex flex-col gap-4 border-b border-gray-100 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
              <div>
                <p className="m-0 text-[8px] font-bold uppercase tracking-[.18em] text-gray-400">
                  Product analytics
                </p>
                <h3 className="mt-1 text-[17px] font-bold text-[#101828] sm:text-[20px]">
                  Application Overview
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-[8px] font-bold text-emerald-600">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                  Live tracking
                </span>
                <span className="hidden text-[9px] text-gray-400 sm:block">
                  Last 30 days
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 p-5 sm:grid-cols-3 sm:p-7">
              {performanceMetrics.map((metric, index) => (
                <button
                  key={metric.label}
                  type="button"
                  onClick={() => setActiveMetric(index)}
                  className={`group rounded-[18px] border p-4 text-left transition-all duration-300 ${
                    activeMetric === index
                      ? "border-blue-200 bg-blue-50/70 shadow-sm"
                      : "border-gray-200 bg-white hover:border-blue-100 hover:-translate-y-0.5"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-bold uppercase tracking-[.12em] text-gray-400">
                      {metric.label}
                    </span>
                    <span className="text-[13px] text-[#1455d9]">↗</span>
                  </div>

                  <div className="mt-3 flex items-end justify-between">
                    <span className="text-[25px] font-bold tracking-tight text-[#101828]">
                      {metric.value}
                    </span>
                    <span className="rounded-full bg-emerald-50 px-2 py-1 text-[8px] font-bold text-emerald-600">
                      {metric.change}
                    </span>
                  </div>

                  <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-gray-100">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${
                        index === 0
                          ? "bg-blue-500"
                          : index === 1
                            ? "bg-violet-500"
                            : "bg-emerald-500"
                      } ${metric.width}`}
                    />
                  </div>
                </button>
              ))}
            </div>

            <div className="grid gap-5 px-5 pb-5 sm:px-7 sm:pb-7 lg:grid-cols-[1.35fr_.65fr]">
              {/* Graph */}
              <div className="rounded-[22px] border border-gray-200 p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="m-0 text-[8px] font-bold uppercase tracking-[.15em] text-gray-400">
                      Usage trend
                    </p>
                    <p className="mt-1 m-0 text-[14px] font-bold text-[#101828]">
                      Weekly application activity
                    </p>
                  </div>
                  <span className="rounded-full bg-gray-50 px-3 py-1.5 text-[8px] font-semibold text-gray-500">
                    Updated
                  </span>
                </div>

                <div className="relative mt-8 h-[220px]">
                  <div className="absolute inset-0 flex flex-col justify-between">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <div key={item} className="h-px w-full bg-gray-100" />
                    ))}
                  </div>

                  <div className="absolute inset-x-2 bottom-0 top-2 flex items-end gap-2">
                    {graphBars.map((height, index) => (
                      <div
                        key={index}
                        className="group flex h-full flex-1 items-end"
                      >
                        <div
                          className={`w-full rounded-t-lg transition-all duration-700 group-hover:-translate-y-1 ${
                            index === graphBars.length - 1
                              ? "bg-[#073b91] shadow-[0_8px_20px_rgba(7,59,145,.18)]"
                              : index > 8
                                ? "bg-blue-300"
                                : "bg-blue-100"
                          } ${height}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-3 flex justify-between px-1 text-[8px] font-medium text-gray-400">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              </div>

              {/* Analysis */}
              <div className="rounded-[22px] bg-[#101828] p-5 text-white sm:p-6">
                <div className="flex items-center justify-between">
                  <p className="m-0 text-[8px] font-bold uppercase tracking-[.16em] text-blue-300">
                    Analysis
                  </p>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-[11px]">
                    ↗
                  </span>
                </div>

                <h4 className="mt-5 text-[18px] font-bold leading-tight">
                  Use product signals to decide what to improve next.
                </h4>

                <p className="mt-3 text-[10px] leading-5 text-gray-400 sm:text-[11px]">
                  Track agreed business signals and use the findings to guide
                  product decisions rather than relying only on assumptions.
                </p>

                <div className="mt-7 space-y-5">
                  {[
                    ["Engagement", "84%", "w-[84%]", "bg-blue-400"],
                    ["User activity", "76%", "w-[76%]", "bg-violet-400"],
                    ["Conversion", "68%", "w-[68%]", "bg-emerald-400"],
                  ].map(([label, value, width, color]) => (
                    <div key={label}>
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] text-gray-400">
                          {label}
                        </span>
                        <span className="text-[9px] font-bold text-white">
                          {value}
                        </span>
                      </div>
                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                        <div
                          className={`h-full rounded-full ${width} ${color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-7 rounded-xl border border-white/10 bg-white/[.04] p-3">
                  <p className="m-0 text-[7px] font-bold uppercase tracking-widest text-gray-500">
                    Next priority
                  </p>
                  <p className="mt-1 m-0 text-[10px] font-semibold leading-5 text-white">
                    Review customer behaviour and improve key journeys.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AppDev() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className="w-full overflow-hidden bg-white text-[#111827]">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#f7faff] px-5 pb-16 pt-8 sm:px-8 sm:pb-20 sm:pt-10 lg:px-14 lg:pb-24 lg:pt-12">
        <div className="pointer-events-none absolute -right-48 -top-48 h-[520px] w-[520px] rounded-full bg-blue-100/70 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-48 -left-48 h-[420px] w-[420px] rounded-full bg-indigo-100/60 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1600px]">
          {/* HERO GRID */}
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-8 xl:gap-8">
            {/* ================= LEFT CONTENT ================= */}
            <Reveal direction="left">
              <div className="max-w-[720px] lg:pl-10">
                {/* BREADCRUMB */}
                <div className="mb-5 flex flex-wrap items-center gap-2 text-[10px] font-medium text-gray-500 sm:mb-6 sm:text-[11px]">
                  <Link to="/" className="transition hover:text-[#1455d9]">
                    Home
                  </Link>

                  <span>/</span>

                  <span>Services</span>

                  <span>/</span>

                  <span className="text-[#1455d9]">App Development</span>
                </div>

                {/* BADGE */}
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-[9px] font-bold uppercase tracking-[.18em] text-[#1455d9] shadow-sm sm:text-[10px]">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-500" />
                  Product Engineering
                </div>

                {/* HEADING */}
                <h1 className="m-0 text-[38px] font-bold leading-[1.03] tracking-[-.05em] text-[#101828] sm:text-[48px] lg:text-[56px] xl:text-[40px]">
                  Build Digital Products That
                  <span className="block text-[#1455d9]">
                    Work Beyond the Screen.
                  </span>
                </h1>

                {/* DESCRIPTION */}
                <p className="mt-6 max-w-[660px] text-[14px] leading-7 text-gray-600 sm:text-[15px] lg:text-[16px]">
                  Build user-focused mobile applications designed around your
                  audience, business objective and measurable customer journey —
                  from product strategy and UX to development, integration,
                  testing and continuous improvement.
                </p>

                {/* BUTTONS */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    to="/contact"
                    className="group inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#073b91] px-6 py-3 text-[12px] font-bold text-white shadow-[0_14px_35px_rgba(7,59,145,.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#052f75]"
                  >
                    Talk to Our Project
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>

                  <a
                    href="#development-services"
                    className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-gray-200 bg-white px-6 py-3 text-[12px] font-semibold text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:text-[#1455d9]"
                  >
                    Explore Development
                  </a>
                </div>

                {/* FEATURES */}
                <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 border-t border-gray-200 pt-5 text-[10px] font-medium text-gray-500 sm:text-[11px]">
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Strategy-led
                  </span>

                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-500" />
                    User-first
                  </span>

                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-violet-500" />
                    Measurable
                  </span>
                </div>
              </div>
            </Reveal>

            {/* ================= RIGHT CONTENT ================= */}
            <Reveal direction="right">
              <div className="relative mx-auto flex w-full max-w-[520px] items-center justify-center py-4 sm:py-6">
                {/* Background Glow */}
                <div className="pointer-events-none absolute h-[330px] w-[330px] rounded-full bg-blue-500/10 blur-[90px]" />

                <div className="pointer-events-none absolute right-0 top-10 h-40 w-40 rounded-full bg-violet-500/10 blur-[70px]" />

                {/* LEFT FLOATING NOTIFICATION */}
                <div className="absolute left-0 top-12 z-30 hidden animate-bounce rounded-2xl border border-white/10 bg-[#0a0d1c]/90 p-3 shadow-xl backdrop-blur-xl sm:block">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-500/10 ring-1 ring-blue-400/20">
                      <span className="text-sm text-blue-300">↗</span>
                    </div>

                    <div>
                      <p className="text-[9px] font-semibold text-white/70">
                        New Activity
                      </p>

                      <p className="text-[7px] text-white/30">App updated</p>
                    </div>
                  </div>
                </div>

                {/* TOP RIGHT NOTIFICATION */}
                <div className="absolute right-0 top-4 z-30 hidden rounded-full border border-emerald-400/20 bg-[#0a0d1c]/95 px-3 py-2 shadow-lg backdrop-blur-xl sm:block">
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />

                    <span className="text-[8px] text-emerald-300/80">
                      Payment Successful
                    </span>
                  </div>
                </div>

                {/* PHONE SHADOW */}
                <div className="absolute bottom-4 h-10 w-56 rounded-full bg-black/60 blur-2xl" />

                {/* PHONE */}
                <div className="group relative z-10">
                  {/* PHONE BODY */}
                  <div className="relative h-[510px] w-[255px] rotate-[-6deg] rounded-[40px] border border-white/15 bg-gradient-to-br from-white/10 via-[#111529] to-[#050713] p-[7px] shadow-[0_35px_90px_rgba(0,0,0,0.6)] transition-all duration-1000 hover:rotate-0 hover:scale-[1.03]">
                    {/* PHONE SCREEN */}
                    <div className="relative h-full w-full overflow-hidden rounded-[33px] border border-white/10 bg-[#070a16]">
                      {/* SCREEN GLOW */}
                      <div className="pointer-events-none absolute -right-20 top-20 h-52 w-52 rounded-full bg-blue-500/10 blur-3xl" />
                      <div className="pointer-events-none absolute -left-20 bottom-20 h-52 w-52 rounded-full bg-violet-500/10 blur-3xl" />

                      {/* DYNAMIC ISLAND */}
                      <div className="absolute left-1/2 top-3 z-30 h-5 w-20 -translate-x-1/2 rounded-full bg-black/80 ring-1 ring-white/5" />

                      {/* APP SCREEN */}
                      <div className="relative h-full px-5 pb-5 pt-12">
                        {/* STATUS BAR */}
                        <div className="mb-5 flex items-center justify-between">
                          <span className="text-[8px] text-white/40">9:41</span>

                          <div className="flex items-center gap-1">
                            <span className="h-1.5 w-3 rounded-sm bg-white/20" />
                            <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
                          </div>
                        </div>

                        {/* APP HEADER */}
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-[8px] text-white/30">
                              Welcome back
                            </p>

                            <h3 className="mt-1 text-lg font-bold text-white/90">
                              Home
                            </h3>
                          </div>

                          {/* NOTIFICATION ICON */}
                          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                            <span className="text-sm text-white/50">♢</span>

                            <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
                          </div>
                        </div>

                        {/* BALANCE CARD */}
                        <div className="mt-6 overflow-hidden rounded-2xl border border-blue-400/15 bg-gradient-to-br from-blue-500/15 to-violet-500/10 p-4">
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="text-[7px] text-white/35">
                                Total Balance
                              </p>

                              <p className="mt-1 text-xl font-bold text-white/90">
                                $8,420
                              </p>
                            </div>

                            <div className="rounded-lg bg-white/[0.06] px-2 py-1">
                              <span className="text-[7px] text-emerald-300">
                                +12.8%
                              </span>
                            </div>
                          </div>

                          {/* MINI GRAPH */}
                          <div className="mt-5 flex h-12 items-end gap-1">
                            <span className="h-4 flex-1 rounded-t bg-blue-400/20" />
                            <span className="h-6 flex-1 rounded-t bg-blue-400/25" />
                            <span className="h-5 flex-1 rounded-t bg-blue-400/20" />
                            <span className="h-8 flex-1 rounded-t bg-blue-400/30" />
                            <span className="h-7 flex-1 rounded-t bg-violet-400/25" />
                            <span className="h-10 flex-1 rounded-t bg-violet-400/35" />
                            <span className="h-12 flex-1 rounded-t bg-blue-400/45" />
                          </div>
                        </div>

                        {/* PROFILE */}
                        <div className="mt-5 flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.025] px-3 py-2.5 transition-all duration-500 hover:translate-x-1 hover:border-blue-400/20">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-400/10">
                            <span className="text-[11px] text-violet-300">
                              ●
                            </span>
                          </div>

                          <div className="flex-1">
                            <p className="text-[8px] font-medium text-white/65">
                              Profile
                            </p>

                            <p className="text-[6px] text-white/25">
                              Manage account
                            </p>
                          </div>

                          <span className="text-[10px] text-white/20">→</span>
                        </div>

                        {/* ORDERS */}
                        <div className="mt-2 flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.025] px-3 py-2.5 transition-all duration-500 hover:translate-x-1 hover:border-blue-400/20">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-400/10">
                            <span className="text-[11px] text-blue-300">□</span>
                          </div>

                          <div className="flex-1">
                            <p className="text-[8px] font-medium text-white/65">
                              Orders
                            </p>

                            <p className="text-[6px] text-white/25">
                              12 active orders
                            </p>
                          </div>

                          <span className="rounded-full bg-blue-400/10 px-1.5 py-0.5 text-[6px] text-blue-300">
                            12
                          </span>
                        </div>

                        {/* PAYMENT */}
                        <div className="mt-2 flex items-center gap-3 rounded-xl border border-emerald-400/10 bg-emerald-400/[0.025] px-3 py-2.5">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-400/10">
                            <span className="text-[11px] text-emerald-300">
                              ✓
                            </span>
                          </div>

                          <div className="flex-1">
                            <p className="text-[8px] font-medium text-white/65">
                              Payment
                            </p>

                            <p className="text-[6px] text-emerald-300/45">
                              Secure payment
                            </p>
                          </div>

                          <span className="text-[10px] text-emerald-300/60">
                            ✓
                          </span>
                        </div>

                        {/* BOTTOM NAVIGATION */}
                        <div className="absolute bottom-4 left-5 right-5 flex items-center justify-around rounded-2xl border border-white/10 bg-white/[0.035] px-2 py-3 backdrop-blur-xl">
                          <div className="flex flex-col items-center gap-1">
                            <span className="text-[11px] text-blue-300">●</span>
                            <span className="text-[5px] text-blue-300/60">
                              Home
                            </span>
                          </div>

                          <div className="flex flex-col items-center gap-1">
                            <span className="text-[11px] text-white/25">○</span>
                            <span className="text-[5px] text-white/20">
                              Search
                            </span>
                          </div>

                          <div className="flex flex-col items-center gap-1">
                            <span className="text-[11px] text-white/25">□</span>
                            <span className="text-[5px] text-white/20">
                              Orders
                            </span>
                          </div>

                          <div className="flex flex-col items-center gap-1">
                            <span className="text-[11px] text-white/25">◯</span>
                            <span className="text-[5px] text-white/20">
                              Profile
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* PHONE SIDE BUTTONS */}
                    <div className="absolute -right-[3px] top-28 h-16 w-1 rounded-r-full bg-white/15" />
                    <div className="absolute -left-[3px] top-24 h-10 w-1 rounded-l-full bg-white/10" />
                    <div className="absolute -left-[3px] top-36 h-10 w-1 rounded-l-full bg-white/10" />
                  </div>

                  {/* TOUCH CURSOR */}
                  <div className="absolute -bottom-2 -right-10 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-blue-300/20 bg-blue-400/10 shadow-[0_0_30px_rgba(59,130,246,0.25)] backdrop-blur-xl animate-pulse">
                    <span className="text-sm text-blue-200">↖</span>
                  </div>
                </div>

                {/* RIGHT FLOATING APP CARD */}
                <div className="absolute bottom-16 right-0 z-30 hidden animate-bounce rounded-2xl border border-white/10 bg-[#0a0d1c]/90 p-3 shadow-xl backdrop-blur-xl sm:block">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-400/10 ring-1 ring-emerald-400/20">
                      <span className="text-sm text-emerald-300">✓</span>
                    </div>

                    <div>
                      <p className="text-[9px] font-semibold text-white/70">
                        App Ready
                      </p>

                      <p className="mt-0.5 text-[7px] text-emerald-300/50">
                        Build successful
                      </p>
                    </div>
                  </div>
                </div>

                {/* SWIPE INDICATOR */}
                <div className="absolute -bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-[#0a0d1c]/90 px-4 py-2 backdrop-blur-xl">
                  <span className="text-[8px] text-white/25">Swipe</span>

                  <span className="animate-pulse text-[10px] text-blue-300/70">
                    ← →
                  </span>

                  <span className="text-[8px] text-white/25">Explore</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO / BUSINESS VALUE
      ===================================================== */}
      <section className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-10">
        <div className="pointer-events-none absolute right-0 top-0 h-[320px] w-[320px] rounded-full bg-blue-50 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1500px]">
          <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:items-end lg:gap-20">
            <Reveal direction="left">
              <div className="mb-10">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#1455d9]" />
                  <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9]">
                    Built around the product
                  </p>
                </div>

                <h2 className="mt-4 m-0 max-w-[620px] text-[31px] font-bold leading-[1.08] tracking-[-.04em] text-[#101828] sm:text-[39px] lg:text-[32px]">
                  Technology should support the product, not become the product.
                </h2>
              </div>
            </Reveal>

            <Reveal direction="right">
              <div className="grid gap-4 sm:grid-cols-2">
                <article className="group rounded-[24px] border border-gray-200 bg-[#f8faff] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(15,23,42,.07)]">
                  <span className="text-[10px] font-bold tracking-[.18em] text-[#1455d9]">
                    01 / PRODUCT
                  </span>
                  <h3 className="mt-5 m-0 text-[19px] font-bold tracking-[-.025em] text-[#101828]">
                    Start with a useful customer journey.
                  </h3>
                  <p className="mt-3 m-0 text-[12px] leading-6 text-gray-500">
                    A strong application starts with a clear business problem,
                    audience and outcome before technology decisions are made.
                  </p>
                </article>

                <article className="group rounded-[24px] border border-gray-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,.04)] transition-all duration-500 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(15,23,42,.08)]">
                  <span className="text-[10px] font-bold tracking-[.18em] text-[#1455d9]">
                    02 / SYSTEM
                  </span>
                  <h3 className="mt-5 m-0 text-[19px] font-bold tracking-[-.025em] text-[#101828]">
                    Connect UX, architecture and measurement.
                  </h3>
                  <p className="mt-3 m-0 text-[12px] leading-6 text-gray-500">
                    Product thinking, integrations, testing and performance work
                    together as one digital foundation.
                  </p>
                </article>
              </div>
            </Reveal>
          </div>

          <Reveal direction="up">
            <div className="relative mt-10 overflow-hidden rounded-[28px] bg-[#101828] p-6 text-white shadow-[0_25px_70px_rgba(15,23,42,.13)] sm:p-8 lg:p-10">
              <div className="pointer-events-none absolute -right-24 -top-24 h-[280px] w-[280px] rounded-full bg-blue-500/10 blur-3xl" />

              <div className="relative grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
                <div>
                  <p className="m-0 text-[9px] font-bold uppercase tracking-[.2em] text-blue-300">
                    The Akkurate approach
                  </p>
                  <h3 className="mt-3 m-0 max-w-[680px] text-[25px] font-bold leading-tight tracking-[-.035em] sm:text-[25px]">
                    Strategy first. Experience second. Measurement throughout.
                  </h3>
                  <p className="mt-4 max-w-[650px] text-[12px] leading-6 text-gray-400 sm:text-[13px] sm:leading-7">
                    We connect product thinking, UX, application architecture,
                    integrations, testing and measurement around the business
                    objective.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {[
                    ["01", "Understand", "Business + users"],
                    ["02", "Build", "UX + technology"],
                    ["03", "Improve", "Signals + iteration"],
                  ].map(([num, title, copy]) => (
                    <div
                      key={num}
                      className="rounded-2xl border border-white/10 bg-white/[.04] p-4 transition duration-300 hover:-translate-y-1 hover:bg-white/[.07]"
                    >
                      <span className="text-[9px] font-bold text-blue-300">
                        {num}
                      </span>
                      <p className="mt-4 m-0 text-[12px] font-bold text-white">
                        {title}
                      </p>
                      <p className="mt-1 m-0 text-[8px] leading-4 text-gray-500">
                        {copy}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          BUSINESS PROBLEM
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#101828] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-14 lg:py-10">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[350px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-[1200px]">
          <Reveal direction="center">
            <div className="mx-auto max-w-[900px] text-center">
              <div className="flex items-center justify-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />
                <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-blue-300">
                  The Business Problem We Solve
                </p>
              </div>

              <h2 className="mt-4 text-[29px] font-bold leading-[1.08] tracking-[-.04em] sm:text-[38px] lg:text-[30px]">
                An application should solve a real customer or business problem.
              </h2>

              <p className="mx-auto mt-5 max-w-[850px] text-[13px] leading-7 text-gray-400 sm:text-[14px]">
                An application can have attractive screens and still fail to
                explain its value, guide users or support the business
                objective. We connect product strategy, UX, technology,
                integrations and measurement so development works as part of the
                wider customer journey.
              </p>
            </div>
          </Reveal>

          <Reveal direction="up">
            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                [
                  "01",
                  "Unclear Product",
                  "Users do not understand what the application helps them accomplish.",
                ],
                [
                  "02",
                  "Disconnected Systems",
                  "The application does not work smoothly with the existing digital ecosystem.",
                ],
                [
                  "03",
                  "No Feedback Loop",
                  "The team launches the product without knowing what should improve next.",
                ],
              ].map(([number, title, text]) => (
                <article
                  key={number}
                  className="group relative overflow-hidden rounded-[22px] border border-white/10 bg-white/[.04] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[.07]"
                >
                  <div className="absolute right-0 top-0 h-16 w-16 rounded-bl-[50px] bg-blue-500/5 transition group-hover:bg-blue-500/10" />
                  <span className="text-[9px] font-bold text-blue-300">
                    {number}
                  </span>
                  <h3 className="mt-5 text-[15px] font-bold text-white">
                    {title}
                  </h3>
                  <p className="mt-2 text-[10px] leading-5 text-gray-500">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          PERFORMANCE / GRAPH
      ===================================================== */}
      <PerformanceAnalytics />

      {/* =====================================================
          Outcomes
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#f7faff] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-15">
        <div className="mx-auto w-full max-w-[1500px]">
          <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-center lg:gap-20">
            {/* LEFT CONTENT */}
            <Reveal direction="up">
              <div>
                <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9]">
                  Business Outcomes
                </p>

                <h2 className="mt-3 m-0 text-[31px] font-bold leading-[1.08] tracking-[-.04em] text-[#101828] sm:text-[40px] lg:text-[38px]">
                  Apps That
                  <span className="block text-[#1455d9]">
                    Turn Ideas Into Experiences.
                  </span>
                </h2>

                <p className="mt-5 m-0 max-w-[540px] text-[14px] leading-7 text-gray-600">
                  A successful app should be more than functional. We create
                  mobile experiences that are easy to use, reliable, scalable
                  and aligned with your users and business objectives.
                </p>

                <Link
                  to="/contact"
                  className="mt-7 inline-flex items-center rounded-full bg-[#073b91] px-5 py-3 text-[12px] font-bold text-white transition hover:-translate-y-1 hover:bg-[#052f75]"
                >
                  Discuss Your App Goal
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </Reveal>

            {/* RIGHT OUTCOME CARDS */}
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "User-friendly and intuitive mobile experiences",
                "Faster and smoother app interactions",
                "Stronger user engagement and retention",
                "Reliable and scalable application architecture",
                "Consistent brand experience across app screens",
                "Digital experiences aligned with business goals",
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

      {/* =====================================================
          HOW WE BUILD
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#070b16] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-14 lg:py-10">
        <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-indigo-600/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-[320px] w-[320px] rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1500px]">
          <Reveal direction="center">
            <div className="mx-auto max-w-[900px] text-center">
              <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-blue-300">
                How We Build
              </p>
              <h2 className="mt-4 text-[31px] font-bold leading-[1.07] tracking-[-.04em] sm:text-[39px] lg:text-[40px]">
                A practical process from discovery to iteration.
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] text-[12px] leading-6 text-gray-500 sm:text-[13px]">
                Each stage connects to the next so product decisions remain tied
                to the original business objective.
              </p>
            </div>
          </Reveal>

          <div className="relative mt-12">
            <div className="absolute left-[8%] right-[8%] top-7 hidden h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent lg:block" />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {processSteps.map((step, index) => (
                <Reveal key={step.number} direction="up" delay={index * 80}>
                  <article className="group relative h-full rounded-[22px] border border-white/10 bg-white/[.035] p-5 transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/30 hover:bg-white/[.06]">
                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-blue-400/20 bg-[#070b16] text-[10px] font-bold text-blue-300 shadow-[0_0_0_8px_#070b16] transition duration-300 group-hover:border-blue-400/50">
                      {step.number}
                    </div>
                    <h3 className="mt-7 text-[16px] font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-[10px] leading-6 text-gray-500">
                      {step.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT YOU GET
      ===================================================== */}
      <section className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-10">
        <div className="pointer-events-none absolute left-0 top-20 h-[320px] w-[320px] rounded-full bg-blue-50 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1300px]">
          <Reveal direction="center">
            <div className="text-center">
              <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9]">
                What You Get
              </p>
              <h2 className="mt-4 m-0 text-[31px] font-bold leading-[1.08] tracking-[-.04em] text-[#101828] sm:text-[39px] lg:text-[44px]">
                A development foundation built for real use.
              </h2>
              <p className="mx-auto mt-4 max-w-[680px] text-[12px] leading-6 text-gray-500 sm:text-[13px]">
                The goal is not simply to ship an app, but to create a useful,
                maintainable and measurable product foundation.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-[1050px] grid-cols-1 gap-3 sm:grid-cols-2">
            {outcomes.map((outcome, index) => (
              <Reveal key={outcome} direction="up" delay={index * 60}>
                <div className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white px-5 py-4 transition-all duration-400 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_15px_35px_rgba(15,23,42,.06)]">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#101828] text-[10px] font-bold text-blue-300 transition duration-300 group-hover:bg-[#1455d9] group-hover:text-white">
                    ✓
                  </span>
                  <span className="text-[12px] font-semibold text-[#101828] sm:text-[13px]">
                    {outcome}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY CHOOSE AKKURATE
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#f5f8fd] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-10">
        <div className="pointer-events-none absolute right-[-120px] top-[-100px] h-[350px] w-[350px] rounded-full bg-blue-100/70 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1500px]">
          <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-center lg:gap-16">
            <Reveal direction="left">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#1455d9]" />
                  <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9]">
                    Why Choose Akkurate
                  </p>
                </div>

                <h2 className="mt-4 m-0 text-[31px] font-bold leading-[1.08] tracking-[-.04em] text-[#101828] sm:text-[39px] lg:text-[40px]">
                  Development with the business context included.
                </h2>

                <p className="mt-5 max-w-[550px] text-[13px] leading-7 text-gray-600 sm:text-[14px]">
                  Technology decisions are stronger when they are connected to
                  the customer, business model and wider digital ecosystem.
                </p>

                <Link
                  to="/contact"
                  className="group mt-7 inline-flex items-center rounded-full bg-[#101828] px-5 py-3 text-[11px] font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#1455d9]"
                >
                  Discuss Your Project
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {whyChoose.map((item, index) => (
                <Reveal key={item.number} direction="right" delay={index * 70}>
                  <article className="group h-full rounded-[22px] border border-gray-200 bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#1455d9] hover:bg-[#1455d9] hover:shadow-[0_25px_55px_rgba(20,85,217,.18)]">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-bold tracking-[.18em] text-[#1455d9] transition group-hover:text-blue-100">
                        {item.number}
                      </span>
                      <span className="text-gray-300 transition group-hover:text-white/60">
                        ↗
                      </span>
                    </div>

                    <h3 className="mt-6 text-[17px] font-bold text-[#101828] transition group-hover:text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[11px] leading-6 text-gray-500 transition group-hover:text-white/75">
                      {item.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          RELATED SERVICES — ORBIT CARDS
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
              Extend your GEO strategy with connected digital capabilities that
              strengthen discovery, engagement and conversion.
            </p>
          </div>

          {/* CARDS */}
          <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
                    Website Development
                  </h3>

                  <p className="mt-2 m-0 max-w-[270px] text-[10px] leading-[1.6] text-gray-400 sm:text-[11px]">
                    Build responsive, fast and conversion-focused websites that
                    deliver a strong digital presence.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[.12em] text-cyan-300/60 transition group-hover:text-cyan-300">
                  Explore service
                  <span className="h-px w-5 bg-cyan-400/30 transition-all duration-300 group-hover:w-8" />
                </div>
              </div>

              {/* WEBSITE DEVELOPMENT ORBIT */}
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
                    <span className="text-[9px] font-bold uppercase tracking-[.06em] text-cyan-300/70">
                      Website
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
          WEB APPLICATION CARD
      ===================================================== */}

            <Link
              to="/web-application"
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
                    Web Application
                  </h3>

                  <p className="mt-2 m-0 max-w-[270px] text-[10px] leading-[1.6] text-gray-400 sm:text-[11px]">
                    Develop powerful web applications with seamless
                    functionality, scalable architecture and intuitive
                    experiences.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[.12em] text-violet-300/60 transition group-hover:text-violet-300">
                  Explore service
                  <span className="h-px w-5 bg-violet-400/30 transition-all duration-300 group-hover:w-8" />
                </div>
              </div>

              {/* WEB APPLICATION ORBIT */}
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
                    Web App
                  </span>
                </div>
              </div>

              {/* Arrow */}
              <div className="absolute bottom-4 right-4 z-30 flex h-8 w-8 items-center justify-center rounded-full border border-violet-400/20 bg-violet-500/10 text-[13px] text-violet-300 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-violet-500 group-hover:text-white">
                →
              </div>
            </Link>

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
                    CMS Development
                  </h3>

                  <p className="mt-2 m-0 max-w-[275px] text-[10px] leading-[1.6] text-gray-400 sm:text-[11px]">
                    Create flexible content management systems that make
                    publishing, managing and scaling digital content simple.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[.12em] text-orange-300/60 transition group-hover:text-orange-300">
                  Explore service
                  <span className="h-px w-5 bg-orange-400/30 transition-all duration-300 group-hover:w-8" />
                </div>
              </div>

              {/* CMS DEVELOPMENT ORBIT */}
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
                  <span className="text-[9px] font-black uppercase tracking-[.05em] text-orange-300">
                    CMS
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
        <div className="pointer-events-none absolute -right-32 bottom-0 h-[350px] w-[350px] rounded-full bg-indigo-100/50 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1250px]">
          <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
            <Reveal direction="left">
              <div className="lg:sticky lg:top-24 lg:self-start">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#1455d9]" />
                  <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9]">
                    Frequently Asked Questions
                  </p>
                </div>

                <h2 className="mt-4 m-0 max-w-[430px] text-[32px] font-bold leading-[1.05] tracking-[-.045em] text-[#101828] sm:text-[40px] lg:text-[30px]">
                  Everything you need{" "}
                  <span className="inline-block text-[#1455d9]">
                    to know about app development.
                  </span>
                </h2>

                <p className="mt-5 max-w-[430px] text-[12px] leading-6 text-gray-500 sm:text-[13px] sm:leading-7">
                  Answers to common questions about app scope, integrations,
                  measurement and improving existing applications.
                </p>

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
                        App Development
                      </span>
                      <span className="flex items-center gap-1.5 text-[8px] font-semibold text-emerald-500">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                        Available
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <Reveal
                    key={faq.question}
                    direction="right"
                    delay={index * 40}
                  >
                    <div
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
                  </Reveal>
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
                Strategy, website and digital growth — connected.
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
    </main>
  );
}

export default AppDev;

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
/* =========================================================
   CMS DEVELOPMENT PAGE
   ---------------------------------------------------------
   React JS + Tailwind CSS ONLY

   Design system follows the supplied Web Application page:
   - Blue / indigo / cyan premium palette
   - Light premium sections + dark strategic sections
   - CMS control-center hero
   - CMS publishing performance chart
   - Rich capability cards
   - Animated orbit related services
   - FAQ accordion
   - Responsive layout
   - No external animation library
   - No custom CSS
========================================================= */

/* =========================================================
   REVEAL ANIMATION
========================================================= */

function Reveal({ children, direction = "up", delay = 0 }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const directionClass = {
    up: visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
    down: visible ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0",
    left: visible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0",
    right: visible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0",
    center: visible ? "scale-100 opacity-100" : "scale-[.96] opacity-0",
  }[direction];

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${directionClass}`}
      style={{ transitionDelay: `${delay * 100}ms` }}
    >
      {children}
    </div>
  );
}

/* =========================================================
   CMS DEVELOPMENT SERVICES
========================================================= */

const cmsServices = [
  {
    number: "01",
    tag: "ARCHITECTURE",
    title: "CMS Architecture",
    description:
      "Plan content types, reusable sections and publishing workflows around the organization's needs.",
    icon: "◈",
    value: "Structure",
  },
  {
    number: "02",
    tag: "TEMPLATES",
    title: "Custom Templates",
    description:
      "Build templates that preserve design consistency while allowing content teams to update pages.",
    icon: "◎",
    value: "Consistency",
  },
  {
    number: "03",
    tag: "CONTENT",
    title: "Content Models",
    description:
      "Create structured content models so information remains organized as the site grows.",
    icon: "⌁",
    value: "Scalability",
  },
  {
    number: "04",
    tag: "MIGRATION",
    title: "Migration",
    description:
      "Migrate existing content carefully while preserving important URLs and metadata where required.",
    icon: "◇",
    value: "Continuity",
  },
  {
    number: "05",
    tag: "EDITOR",
    title: "Editor Experience",
    description:
      "Make routine editing straightforward for the people who will actually manage the website.",
    icon: "⌘",
    value: "Efficiency",
  },
  {
    number: "06",
    tag: "SEO",
    title: "SEO-Ready Publishing",
    description:
      "Support clean URLs, headings, metadata, internal links and other SEO-ready publishing practices.",
    icon: "✓",
    value: "Visibility",
  },
];

/* =========================================================
   OUTCOMES
========================================================= */

const outcomes = [
  "Easier content management",
  "Reusable page components",
  "Better publishing control",
  "Cleaner content structure",
  "SEO-ready workflows",
  "Scalable website management",
];

/* =========================================================
   WHO THIS SERVICE IS FOR
========================================================= */

const audienceCards = [
  [
    "01",
    "Growing Content Teams",
    "When more people need to publish, edit or review website content without creating unnecessary technical dependency.",
  ],
  [
    "02",
    "Content-Heavy Websites",
    "When the website depends on repeatable pages, structured content, reusable components or frequent publishing.",
  ],
  [
    "03",
    "Existing Website Owners",
    "When an existing site needs a better editing experience, cleaner structure or a more practical publishing workflow.",
  ],
];

/* =========================================================
   PROCESS
========================================================= */

const processSteps = [
  {
    number: "01",
    title: "Content Audit",
    description:
      "Understand the business objective, audience, current assets, constraints and success criteria before recommending the work.",
  },
  {
    number: "02",
    title: "CMS Architecture",
    description:
      "Translate the objective into a practical strategy, scope, content direction and measurement plan.",
  },
  {
    number: "03",
    title: "Template & Component Design",
    description:
      "Create, optimize, design, develop or launch the agreed work with brand and user requirements in mind.",
  },
  {
    number: "04",
    title: "Migration & Build",
    description:
      "Test the experience, tracking, messaging and key conversion paths before considering the work complete.",
  },
  {
    number: "05",
    title: "Testing & Training",
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
    question: "What is included in your CMS development service?",
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

/* =========================================================
   RELATED SERVICES
========================================================= */

const relatedServices = [
  {
    title: "SEO",
    description:
      "Strengthen organic discovery with structured content, technical foundations and search-focused improvements.",
    href: "/seo",
    type: "DISCOVERY",
    accent: "cyan",
    icon: "S",
  },
  {
    title: "Website Development",
    description:
      "Connect content management with a purposeful website experience built around usability and conversion.",
    href: "/website-development",
    type: "EXPERIENCE",
    accent: "violet",
    icon: "W",
  },
  {
    title: "E-Commerce Services",
    description:
      "Connect content, products, customers and commerce workflows around the complete digital journey.",
    href: "/e-commerce",
    type: "COMMERCE",
    accent: "orange",
    icon: "E",
  },
];

/* =========================================================
   CMS PERFORMANCE DATA
   ---------------------------------------------------------
   Illustrative UI data only.
========================================================= */

const chartData = [
  {
    month: "JAN",
    published: "h-[54px]",
    traffic: "h-[74px]",
    engagement: "h-[42px]",
  },
  {
    month: "FEB",
    published: "h-[66px]",
    traffic: "h-[86px]",
    engagement: "h-[50px]",
  },
  {
    month: "MAR",
    published: "h-[78px]",
    traffic: "h-[98px]",
    engagement: "h-[61px]",
  },
  {
    month: "APR",
    published: "h-[94px]",
    traffic: "h-[116px]",
    engagement: "h-[72px]",
  },
  {
    month: "MAY",
    published: "h-[108px]",
    traffic: "h-[132px]",
    engagement: "h-[83px]",
  },
  {
    month: "JUN",
    published: "h-[122px]",
    traffic: "h-[148px]",
    engagement: "h-[94px]",
  },
  {
    month: "JUL",
    published: "h-[138px]",
    traffic: "h-[164px]",
    engagement: "h-[108px]",
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

function CmsDevelopment() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="w-full overflow-hidden bg-white text-[#111827]">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#f7faff] px-5 pb-16 pt-8 sm:px-8 sm:pb-20 sm:pt-10 lg:px-14 lg:pb-24 lg:pt-12">
        <div className="pointer-events-none absolute -right-48 -top-48 h-[520px] w-[520px] rounded-full bg-blue-100/70 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-48 -left-48 h-[420px] w-[420px] rounded-full bg-indigo-100/50 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1600px] px-1 sm:px-2 lg:px-4 xl:px-6">
          {/* =================================================
        HERO GRID
        LEFT + RIGHT START AT SAME HORIZONTAL LINE
    ================================================= */}
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-10 xl:gap-14">
            {/* =================================================
          LEFT HERO
      ================================================= */}
            <Reveal direction="left">
              <div className="max-w-[760px]">
                {/* Breadcrumb */}
                <div className="mb-5 flex flex-wrap items-center gap-2 text-[10px] font-medium text-gray-500 sm:mb-6 sm:text-[11px]">
                  <a href="/" className="transition hover:text-[#1455d9]">
                    Home
                  </a>

                  <span>/</span>

                  <span>Services</span>

                  <span>/</span>

                  <span className="text-[#1455d9]">CMS Development</span>
                </div>

                {/* Service Badge */}
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[.16em] text-[#1455d9] shadow-sm sm:text-[11px]">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#1455d9]" />
                  CMS Development
                </div>

                {/* Heading */}
                <h1 className="m-0 max-w-[760px] text-[35px] font-bold leading-[1.04] tracking-[-.045em] text-[#101828] sm:text-[44px] md:text-[45px] lg:text-[45px] xl:text-[45px]">
                  Make Your Website
                  <span className="block text-[#1455d9]">
                    Easier to Manage.
                  </span>
                </h1>

                {/* Description */}
                <p className="mt-6 max-w-[660px] text-[14px] leading-7 text-gray-600 sm:text-[15px] lg:text-[16px]">
                  Build flexible CMS websites that make publishing, editing and
                  managing content easier for your team — built around your
                  audience, business objective and measurable customer journey.
                </p>

                {/* CTA Buttons */}
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="/contact"
                    className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#073b91] px-6 py-3 text-[13px] font-bold text-white shadow-[0_12px_30px_rgba(7,59,145,.18)] transition duration-300 hover:-translate-y-1 hover:bg-[#052f75]"
                  >
                    Talk to Our Team
                    <span className="ml-2">→</span>
                  </a>

                  <a
                    href="#cms-development-services"
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
                    Structured
                  </span>

                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-violet-500" />
                    Scalable
                  </span>
                </div>
              </div>
            </Reveal>

            {/* =================================================
          RIGHT HERO — CMS CONTROL CENTER
      ================================================= */}
            <Reveal direction="right" delay={2}>
              <div className="relative mx-auto min-h-[430px] w-full max-w-[680px] sm:min-h-[500px]">
                {/* Background Glow */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[100px]" />

                <div className="pointer-events-none absolute right-10 top-10 h-40 w-40 rounded-full bg-violet-500/10 blur-[80px]" />

                {/* Floating CMS Status */}
                <div className="absolute right-0 top-5 z-30 hidden rounded-full border border-emerald-400/20 bg-[#090c1b]/90 px-3 py-1.5 backdrop-blur-xl sm:flex sm:items-center sm:gap-2">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />

                  <span className="text-[8px] font-medium text-emerald-300/80">
                    CMS Connected
                  </span>
                </div>

                {/* =================================================
              MAIN CMS PIPELINE
          ================================================= */}
                <div className="absolute left-1/2 top-1/2 z-10 w-[94%] -translate-x-1/2 -translate-y-1/2 rounded-[26px] border border-white/10 bg-[#080b19]/95 p-4 shadow-[0_30px_90px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-5">
                  {/* Header */}
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-500/10 ring-1 ring-blue-400/20">
                        <span className="text-[12px] text-blue-300">CMS</span>
                      </div>

                      <div>
                        <p className="text-[8px] uppercase tracking-[0.18em] text-white/25">
                          Content Management
                        </p>

                        <h3 className="mt-0.5 text-sm font-semibold text-white/75 sm:text-base">
                          Content Pipeline
                        </h3>
                      </div>
                    </div>

                    {/* Live Indicator */}
                    <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.025] px-2.5 py-1.5">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

                      <span className="text-[7px] text-white/35">Live</span>
                    </div>
                  </div>

                  {/* =================================================
                CONTENT CARDS
            ================================================= */}
                  <div className="mb-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {/* Blog */}
                    <div className="group relative overflow-hidden rounded-xl border border-blue-400/15 bg-blue-400/[0.035] p-3 transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/30">
                      <div className="flex items-center justify-between">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-400/10">
                          <span className="text-sm">📝</span>
                        </div>

                        <span className="text-[6px] text-blue-300/50">
                          BLOG
                        </span>
                      </div>

                      <p className="mt-2 text-[8px] font-medium text-white/60">
                        Blog Article
                      </p>

                      <div className="mt-2 space-y-1">
                        <div className="h-1.5 w-full rounded-full bg-white/10" />
                        <div className="h-1.5 w-[70%] rounded-full bg-white/5" />
                      </div>

                      <span className="absolute bottom-2 right-2 h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />
                    </div>

                    {/* Image */}
                    <div className="group relative overflow-hidden rounded-xl border border-violet-400/15 bg-violet-400/[0.035] p-3 transition-all duration-500 hover:-translate-y-1 hover:border-violet-400/30">
                      <div className="flex items-center justify-between">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-400/10">
                          <span className="text-sm">🖼️</span>
                        </div>

                        <span className="text-[6px] text-violet-300/50">
                          IMAGE
                        </span>
                      </div>

                      <p className="mt-2 text-[8px] font-medium text-white/60">
                        Creative Asset
                      </p>

                      <div className="mt-2 flex gap-1">
                        <div className="h-4 w-4 rounded bg-violet-400/10" />
                        <div className="h-4 flex-1 rounded bg-white/5" />
                      </div>

                      <span className="absolute bottom-2 right-2 h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
                    </div>

                    {/* Video */}
                    <div className="group relative overflow-hidden rounded-xl border border-cyan-400/15 bg-cyan-400/[0.035] p-3 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/30">
                      <div className="flex items-center justify-between">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400/10">
                          <span className="text-sm">🎥</span>
                        </div>

                        <span className="text-[6px] text-cyan-300/50">
                          VIDEO
                        </span>
                      </div>

                      <p className="mt-2 text-[8px] font-medium text-white/60">
                        Video Content
                      </p>

                      <div className="mt-2 flex items-center gap-1">
                        <span className="h-4 w-4 rounded bg-cyan-400/10" />
                        <div className="h-1.5 flex-1 rounded-full bg-white/10" />
                      </div>

                      <span className="absolute bottom-2 right-2 h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
                    </div>

                    {/* Page */}
                    <div className="group relative overflow-hidden rounded-xl border border-emerald-400/15 bg-emerald-400/[0.035] p-3 transition-all duration-500 hover:-translate-y-1 hover:border-emerald-400/30">
                      <div className="flex items-center justify-between">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-400/10">
                          <span className="text-sm">📄</span>
                        </div>

                        <span className="text-[6px] text-emerald-300/50">
                          PAGE
                        </span>
                      </div>

                      <p className="mt-2 text-[8px] font-medium text-white/60">
                        Web Page
                      </p>

                      <div className="mt-2 space-y-1">
                        <div className="h-1.5 w-[85%] rounded-full bg-white/10" />
                        <div className="h-1.5 w-[55%] rounded-full bg-white/5" />
                      </div>

                      <span className="absolute bottom-2 right-2 h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                    </div>
                  </div>

                  {/* =================================================
                PIPELINE
            ================================================= */}
                  <div className="relative">
                    {/* Connecting Line */}
                    <div className="absolute left-[9%] right-[9%] top-1/2 hidden h-px bg-gradient-to-r from-blue-400/20 via-violet-400/30 to-emerald-400/30 sm:block" />

                    <div className="grid grid-cols-4 gap-2">
                      {/* Draft */}
                      <div className="relative z-10 flex flex-col items-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-400/[0.07] shadow-[0_0_25px_rgba(96,165,250,0.08)]">
                          <span className="text-sm text-blue-300">📝</span>
                        </div>

                        <p className="mt-2 text-[8px] font-semibold text-white/60">
                          Draft
                        </p>

                        <p className="mt-0.5 text-[6px] text-white/25">
                          Create
                        </p>
                      </div>

                      {/* Review */}
                      <div className="relative z-10 flex flex-col items-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/[0.07] shadow-[0_0_25px_rgba(139,92,246,0.08)]">
                          <span className="text-sm text-violet-300">✓</span>
                        </div>

                        <p className="mt-2 text-[8px] font-semibold text-white/60">
                          Review
                        </p>

                        <p className="mt-0.5 text-[6px] text-white/25">
                          Approve
                        </p>
                      </div>

                      {/* Publish */}
                      <div className="relative z-10 flex flex-col items-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.07] shadow-[0_0_25px_rgba(34,211,238,0.08)]">
                          <span className="text-sm text-cyan-300">↑</span>
                        </div>

                        <p className="mt-2 text-[8px] font-semibold text-white/60">
                          Publish
                        </p>

                        <p className="mt-0.5 text-[6px] text-white/25">
                          Deploy
                        </p>
                      </div>

                      {/* Live Website */}
                      <div className="relative z-10 flex flex-col items-center">
                        <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.07] shadow-[0_0_30px_rgba(52,211,153,0.1)]">
                          <span className="text-sm text-emerald-300">✓</span>

                          <span className="absolute -right-1 -top-1 h-2 w-2 animate-ping rounded-full bg-emerald-400/60" />
                        </div>

                        <p className="mt-2 text-[8px] font-semibold text-white/60">
                          Live Website
                        </p>

                        <p className="mt-0.5 text-[6px] text-emerald-300/50">
                          Online
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* =================================================
                CMS → WEBSITE
            ================================================= */}
                  <div className="mt-6 flex items-center justify-center">
                    <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-4 py-2.5">
                      <div className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-400/10">
                        <span className="text-[8px] font-bold text-blue-300">
                          CMS
                        </span>
                      </div>

                      <div className="flex items-center gap-1">
                        <span className="h-px w-5 bg-blue-400/30" />

                        <span className="animate-pulse text-[10px] text-white/30">
                          →
                        </span>

                        <span className="h-px w-5 bg-emerald-400/30" />
                      </div>

                      <div className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-400/10">
                        <span className="text-[10px] text-emerald-300">◉</span>
                      </div>

                      <span className="text-[8px] font-medium text-white/50">
                        Website
                      </span>
                    </div>
                  </div>

                  {/* Processing Indicator */}
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <div className="flex gap-1">
                      <span className="h-1 w-1 animate-bounce rounded-full bg-blue-400" />

                      <span className="h-1 w-1 animate-bounce rounded-full bg-violet-400 [animation-delay:150ms]" />

                      <span className="h-1 w-1 animate-bounce rounded-full bg-emerald-400 [animation-delay:300ms]" />
                    </div>

                    <span className="text-[7px] text-white/25">
                      Content syncing...
                    </span>
                  </div>
                </div>

                {/* =================================================
              LEFT FLOATING STATUS
          ================================================= */}
                <div className="absolute bottom-10 left-0 z-30 hidden rounded-xl border border-white/10 bg-[#090c1b]/95 px-3 py-2 shadow-xl backdrop-blur-xl sm:block">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-400/10">
                      <span className="text-[10px] text-violet-300">↻</span>
                    </div>

                    <div>
                      <p className="text-[8px] font-medium text-white/60">
                        Content Sync
                      </p>

                      <p className="text-[7px] text-violet-300/50">
                        4 items processing
                      </p>
                    </div>
                  </div>
                </div>

                {/* =================================================
              RIGHT FLOATING STATUS
          ================================================= */}
                <div className="absolute bottom-8 right-0 z-30 hidden rounded-xl border border-white/10 bg-[#090c1b]/95 px-3 py-2 shadow-xl backdrop-blur-xl sm:block">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-400/10">
                      <span className="text-[10px] text-emerald-300">✓</span>
                    </div>

                    <div>
                      <p className="text-[8px] font-medium text-white/60">
                        Published
                      </p>

                      <p className="text-[7px] text-emerald-300/50">
                        Website updated
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-20">
        <div className="pointer-events-none absolute right-0 top-0 h-[320px] w-[320px] rounded-full bg-blue-50 blur-3xl" />

        <div className="relative mx-auto grid w-full max-w-[1500px] gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-end lg:gap-20">
          <Reveal direction="left">
            <div className="mb-11">
              <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9] sm:text-[11px]">
                Introduction
              </p>

              <h2 className="mt-4 m-0 max-w-[600px] text-[31px] font-bold leading-[1.08] tracking-[-.04em] text-[#101828] sm:text-[38px] lg:text-[30px]">
                A CMS Built Around How Your Team Works.
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            <Reveal direction="up">
              <div className="h-full rounded-[24px] border border-gray-200 bg-[#f8faff] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,.07)]">
                <span className="text-[11px] font-bold text-[#1455d9]">
                  01 / STRATEGY
                </span>

                <h3 className="mt-5 m-0 text-[20px] font-bold tracking-[-.025em] text-[#101828]">
                  Start with the business objective.
                </h3>

                <p className="mt-3 m-0 text-[13px] leading-6 text-gray-500">
                  Akkurate Digital Solutions provides CMS development as part of
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

                <h3 className="mt-5 m-0 text-[20px] font-bold tracking-[-.025em] text-[#101828]">
                  Make publishing useful to the business.
                </h3>

                <p className="mt-3 m-0 text-[13px] leading-6 text-gray-500">
                  The goal is not simply to deliver another website asset. It is
                  to make content work easier, more structured and more useful
                  to the people who manage the digital experience.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Akkurate approach */}

        <Reveal direction="up">
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
                  We connect business requirements, content structure, editor
                  workflows, website experience and measurement so the CMS has a
                  clear purpose.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  ["01", "Understand", "Business + users"],
                  ["02", "Build", "Content + structure"],
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
        </Reveal>
      </section>

      {/* =====================================================
          BUSINESS PROBLEM
      ===================================================== */}

      <section className="bg-[#101828] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-20">
        <Reveal direction="up">
          <div className="mx-auto w-full max-w-[1200px] px-4 text-center sm:px-6 lg:px-8">
            <p className="m-0 text-[10px] font-bold uppercase tracking-[.18em] text-blue-300 sm:text-[11px]">
              The Business Problem We Solve
            </p>

            <h2 className="mt-4 m-0 text-[27px] font-bold leading-tight tracking-[-.03em] text-white sm:text-[34px] lg:text-[42px]">
              A CMS Should Reduce Operational Friction.
            </h2>

            <p className="mx-auto mt-5 max-w-[850px] text-[14px] leading-7 text-gray-300 sm:text-[15px]">
              A CMS should reduce operational friction, not create another
              technical dependency. Akkurate focuses on the editor experience as
              well as the visitor experience so teams can publish confidently
              without compromising the site's structure.
            </p>

            <div className="mt-8 grid gap-3 text-left sm:grid-cols-3">
              {[
                [
                  "01",
                  "Too Much Dependency",
                  "Routine content updates should not always require a developer.",
                ],
                [
                  "02",
                  "Inconsistent Publishing",
                  "Teams need reusable structures that protect quality and consistency.",
                ],
                [
                  "03",
                  "Growing Complexity",
                  "Content should remain organized as pages, teams and publishing needs grow.",
                ],
              ].map(([num, title, text]) => (
                <div
                  key={num}
                  className="rounded-[20px] border border-white/10 bg-white/[.045] p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/[.07]"
                >
                  <span className="text-[9px] font-black tracking-[.15em] text-blue-300">
                    {num}
                  </span>
                  <h3 className="mt-4 m-0 text-[16px] font-bold text-white">
                    {title}
                  </h3>
                  <p className="mt-2 m-0 text-[11px] leading-5 text-gray-400">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* =====================================================
          ANALYTICS / PERFORMANCE
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#f7faff] px-5 py-10 sm:px-8 sm:py-20 lg:px-14 lg:py-20">
        <div className="pointer-events-none absolute -right-32 top-0 h-[360px] w-[360px] rounded-full bg-blue-100/60 blur-3xl" />

        <div className="mx-auto w-full max-w-[1500px]">
          <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-center lg:gap-16">
            {/* LEFT CONTENT */}

            <Reveal direction="left">
              <div>
                <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9]">
                  CMS Analytics / Performance
                </p>

                <h2 className="mt-3 m-0 text-[30px] font-bold leading-[1.08] tracking-[-.04em] text-[#101828] sm:text-[38px] lg:text-[37px]">
                  Measure whether content operations are getting easier.
                </h2>

                <p className="mt-5 max-w-[560px] text-[14px] leading-7 text-gray-600">
                  CMS performance should be evaluated against publishing
                  efficiency, content output, traffic and engagement. We look at
                  the signals that show whether the system is helping your team
                  create, manage and improve content.
                </p>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  {[
                    ["148", "Content published"],
                    ["96%", "SEO-ready pages"],
                    ["82%", "Editor efficiency"],
                    ["2.4m", "Avg. publish time"],
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

                <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[9px] font-semibold uppercase tracking-[.1em] text-gray-400">
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded bg-[#1455d9]" />
                    Published
                  </span>

                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded bg-blue-300" />
                    Organic traffic
                  </span>

                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded bg-indigo-100" />
                    Engagement
                  </span>
                </div>
              </div>
            </Reveal>

            {/* RIGHT CHART */}

            <Reveal direction="right" delay={1}>
              <div className="relative overflow-hidden rounded-[30px] border border-gray-200 bg-white p-4 shadow-[0_25px_70px_rgba(15,23,42,.08)] sm:p-6">
                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-100/50 blur-3xl" />

                <div className="relative">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-5">
                    <div>
                      <p className="m-0 text-[13px] font-bold text-[#101828]">
                        CMS publishing performance
                      </p>

                      <p className="mt-1 m-0 text-[10px] text-gray-400">
                        Illustrative monthly content and engagement trend
                      </p>
                    </div>

                    <span className="rounded-full bg-emerald-50 px-2.5 py-1.5 text-[7px] font-bold uppercase tracking-[.1em] text-emerald-600">
                      Performance view
                    </span>
                  </div>

                  {/* Chart */}

                  <div className="mt-6">
                    <div className="flex items-end gap-2">
                      {chartData.map((item) => (
                        <div
                          key={item.month}
                          className="flex min-w-0 flex-1 flex-col items-center"
                        >
                          <div className="flex h-[190px] w-full items-end justify-center gap-1 rounded-xl bg-[#f8faff] px-1 pt-3">
                            <div
                              className={`w-[27%] rounded-t-md bg-indigo-100 transition-all duration-700 hover:bg-indigo-200 ${item.engagement}`}
                              title={`${item.month} engagement`}
                            />
                            <div
                              className={`w-[27%] rounded-t-md bg-blue-300 transition-all duration-700 hover:bg-blue-400 ${item.traffic}`}
                              title={`${item.month} organic traffic`}
                            />
                            <div
                              className={`w-[27%] rounded-t-md bg-[#1455d9] transition-all duration-700 hover:bg-[#073b91] ${item.published}`}
                              title={`${item.month} published content`}
                            />
                          </div>

                          <span className="mt-2 text-[7px] font-bold text-gray-400">
                            {item.month}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Chart insight */}

                  <div className="mt-6 rounded-[22px] border border-blue-100 bg-blue-50/60 p-4">
                    <div className="flex items-start gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[12px] font-bold text-[#1455d9] shadow-sm">
                        ↗
                      </span>

                      <div>
                        <p className="m-0 text-[9px] font-bold uppercase tracking-[.12em] text-[#1455d9]">
                          Performance insight
                        </p>

                        <p className="mt-1 m-0 text-[11px] font-bold text-[#101828]">
                          Publishing output and audience signals trend upward.
                        </p>

                        <p className="mt-1 m-0 text-[8px] leading-5 text-gray-500">
                          The chart is illustrative UI data. Actual KPIs should
                          be selected around the business objective and agreed
                          measurement plan.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {[
                      ["82%", "Editor efficiency"],
                      ["91%", "Content health"],
                      ["88%", "Engagement"],
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
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          CMS DEVELOPMENT SERVICES
      ===================================================== */}

      <section
        id="cms-development-services"
        className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-20"
      >
        <div className="pointer-events-none absolute -left-32 top-20 h-[300px] w-[300px] rounded-full bg-blue-50 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1500px]">
          <Reveal direction="left">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-[760px]">
                <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9] sm:text-[11px]">
                  Our Services
                </p>

                <h2 className="mt-3 m-0 text-[30px] font-bold leading-[1.08] tracking-[-.04em] text-[#101828] sm:text-[38px] lg:text-[37px]">
                  Our CMS Development Services
                </h2>
              </div>

              <p className="max-w-[460px] text-[13px] leading-6 text-gray-500">
                Each capability is designed to communicate the purpose,
                execution and business value — not simply a list of technical
                tasks.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {cmsServices.map((service, index) => (
              <Reveal key={service.number} direction="up" delay={index % 3}>
                <article className="group relative h-full overflow-hidden rounded-[24px] border border-gray-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,.035)] transition-all duration-500 hover:-translate-y-2 hover:border-blue-100 hover:shadow-[0_25px_60px_rgba(15,23,42,.09)] sm:p-7">
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

                  {/* <div className="relative mt-6 rounded-[16px] border border-gray-100 bg-[#f8faff] px-4 py-3">
                    <p className="m-0 text-[8px] font-bold uppercase tracking-[.13em] text-gray-400">
                      Business value
                    </p>

                    <p className="mt-1 m-0 text-[12px] font-bold text-[#101828]">
                      {service.value}
                    </p>
                  </div> */}

                  <div className="relative mt-6 h-px overflow-hidden bg-gray-100">
                    <div className="h-full w-1/3 bg-[#1455d9] transition-all duration-500 group-hover:w-full" />
                  </div>

                  <p className="relative mt-4 m-0 text-[9px] font-bold uppercase tracking-[.14em] text-gray-400 transition group-hover:text-[#1455d9]">
                    Explore capability →
                  </p>
                </article>
              </Reveal>
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
            <Reveal direction="left">
              <div>
                <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9]">
                  What You Get
                </p>

                <h2 className="mt-3 m-0 text-[31px] font-bold leading-[1.08] tracking-[-.04em] text-[#101828] sm:text-[40px] lg:text-[48px]">
                  What You Get From Akkurate.
                </h2>

                <p className="mt-5 m-0 max-w-[540px] text-[14px] leading-7 text-gray-600">
                  The exact outcome depends on the starting point, competition,
                  audience, budget, implementation and business model. Our job
                  is to create the conditions for measurable improvement and to
                  report honestly on what is working.
                </p>

                <a
                  href="/contact"
                  className="mt-7 inline-flex items-center rounded-full bg-[#073b91] px-5 py-3 text-[12px] font-bold text-white transition hover:-translate-y-1 hover:bg-[#052f75]"
                >
                  Discuss your CMS goal
                  <span className="ml-2">→</span>
                </a>
              </div>
            </Reveal>

            <div className="grid gap-3 sm:grid-cols-2">
              {outcomes.map((outcome, index) => (
                <Reveal key={outcome} direction="right" delay={index % 2}>
                  <div className="group flex items-center gap-4 rounded-[18px] border border-gray-200 bg-white p-5 shadow-[0_7px_25px_rgba(15,23,42,.035)] transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-[0_18px_40px_rgba(15,23,42,.07)]">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f0f5ff] text-[10px] font-black text-[#1455d9] transition group-hover:bg-[#073b91] group-hover:text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-[13px] font-bold leading-5 text-[#101828] sm:text-[14px]">
                      {outcome}
                    </span>
                  </div>
                </Reveal>
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

                <h2 className="mt-3 m-0 max-w-[560px] text-[31px] font-bold leading-[1.08] tracking-[-.04em] text-[#101828] sm:text-[25px]">
                  CMS Development Should Fit Your Business.
                </h2>

                <p className="mt-5 max-w-[520px] text-[13px] leading-7 text-gray-500">
                  CMS Development is relevant to businesses that have a clear
                  reason to improve their digital presence, content management
                  workflow or growth engine.{" "}
                </p>

                <p className="mt-4 max-w-[520px] text-[13px] leading-7 text-gray-500">
                  Akkurate can recommend a focused CMS solution, a broader
                  integrated digital program or a different service when that is
                  more appropriate.
                </p>
              </div>
            </Reveal>

            {/* RIGHT AUDIENCE CARDS */}
            <div className="grid gap-3 md:grid-cols-3">
              {audienceCards.map(([number, title, text], index) => (
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
          <Reveal direction="up">
            <div className="mx-auto max-w-[800px] text-center">
              <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-blue-300">
                Our Process
              </p>

              <h2 className="mt-3 m-0 text-[31px] font-bold leading-[1.08] tracking-[-.04em] text-white sm:text-[40px] lg:text-[40px]">
                A Practical CMS Development Process.
              </h2>

              <p className="mt-5 text-[13px] leading-7 text-gray-400 sm:text-[14px]">
                A structured process keeps business requirements, content,
                templates, publishing workflows and measurement connected.
              </p>
            </div>
          </Reveal>

          <div className="relative mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
            <div className="pointer-events-none absolute left-[10%] right-[10%] top-[42px] hidden h-px bg-gradient-to-r from-blue-500/10 via-blue-400/50 to-blue-500/10 lg:block" />

            {processSteps.map((step, index) => (
              <Reveal key={step.number} direction="up" delay={index}>
                <div className="group relative h-full rounded-[22px] border border-white/10 bg-white/[.045] p-5 transition duration-500 hover:-translate-y-2 hover:border-blue-400/30 hover:bg-white/[.07] sm:p-6">
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
              </Reveal>
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
          <Reveal direction="left">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#1455d9]" />

                  <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9] sm:text-[11px]">
                    Why Choose Akkurate
                  </p>
                </div>

                <h2 className="m-0 max-w-[650px] text-[32px] font-bold leading-[1.05] tracking-[-.045em] text-[#101828] sm:text-[40px] lg:text-[50px]">
                  CMS Development With a
                  <span className="block text-[#1455d9]">
                    Business-First Approach.
                  </span>
                </h2>
              </div>

              <div>
                <p className="m-0 max-w-[650px] text-[14px] leading-7 text-gray-600 sm:text-[15px]">
                  Digital growth rarely depends on one capability. We bring
                  strategy, search, content, web and technology together when
                  the customer journey or business process needs a connected
                  approach.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {["Strategy", "Content", "CMS", "SEO", "Growth"].map(
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
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-[0.7fr_1.3fr]">
            {/* LEFT DARK PANEL */}

            <Reveal direction="left">
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
                      One content system.
                      <br />
                      Multiple business needs.
                    </h3>

                    <p className="mt-4 max-w-[400px] text-[12px] leading-6 text-gray-400 sm:text-[13px]">
                      Instead of treating content as a separate technical
                      problem, we connect the CMS to your business objective,
                      users and customer journey.
                    </p>
                  </div>

                  {/* Strategy diagram */}

                  <div className="relative mt-10 h-[180px]">
                    <div className="absolute left-[22%] top-[50%] h-px w-[58%] bg-gradient-to-r from-blue-400/20 via-blue-400/70 to-blue-400/20" />

                    <div className="absolute left-[50%] top-[15%] h-[70%] w-px bg-gradient-to-b from-transparent via-blue-400/50 to-transparent" />

                    <div className="absolute left-1/2 top-1/2 flex h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-blue-300/30 bg-[#15233d] shadow-[0_0_40px_rgba(20,85,217,.2)]">
                      <div className="text-center">
                        <p className="m-0 text-[8px] font-bold uppercase tracking-[.12em] text-blue-300">
                          Content
                        </p>
                        <p className="mt-1 m-0 text-[11px] font-bold text-white">
                          Core
                        </p>
                      </div>
                    </div>

                    {[
                      ["SEO", "top-[5%] left-[15%]"],
                      ["EDITOR", "top-[5%] right-[10%]"],
                      ["CONTENT", "bottom-[5%] left-[10%]"],
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
            </Reveal>

            {/* RIGHT CARDS */}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {whyChoose.map((item, index) => (
                <Reveal key={item.number} direction="right" delay={index}>
                  <article className="group relative h-full overflow-hidden rounded-[24px] border border-gray-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,.035)] transition-all duration-500 hover:-translate-y-2 hover:border-[#1455d9] hover:shadow-[0_25px_55px_rgba(20,85,217,.14)]">
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
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal direction="up" delay={1}>
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
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          RELATED SERVICES — ROUND ORBIT
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
                    E-commerce
                  </h3>

                  <p className="mt-2 m-0 max-w-[270px] text-[10px] leading-[1.6] text-gray-400 sm:text-[11px]">
                    Build scalable online stores with seamless shopping
                    experiences designed to drive sales and growth.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[.12em] text-cyan-300/60 transition group-hover:text-cyan-300">
                  Explore service
                  <span className="h-px w-5 bg-cyan-400/30 transition-all duration-300 group-hover:w-8" />
                </div>
              </div>

              {/* E-COMMERCE ORBIT */}
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
                      eCom
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

              {/* Content */}
              <div className="relative z-20 flex h-full w-[58%] flex-col justify-between">
                <div>
                  <h3 className="mt-4 m-0 text-[17px] font-bold tracking-[-.025em] text-white sm:text-[18px]">
                    Website Design
                  </h3>

                  <p className="mt-2 m-0 max-w-[270px] text-[10px] leading-[1.6] text-gray-400 sm:text-[11px]">
                    Create modern, intuitive website designs that combine strong
                    visuals, usability and engaging user experiences.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[.12em] text-violet-300/60 transition group-hover:text-violet-300">
                  Explore service
                  <span className="h-px w-5 bg-violet-400/30 transition-all duration-300 group-hover:w-8" />
                </div>
              </div>

              {/* WEBSITE DESIGN ORBIT */}
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
                    Design
                  </span>
                </div>
              </div>

              {/* Arrow */}
              <div className="absolute bottom-4 right-4 z-30 flex h-8 w-8 items-center justify-center rounded-full border border-violet-400/20 bg-violet-500/10 text-[13px] text-violet-300 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-violet-500 group-hover:text-white">
                →
              </div>
            </Link>

            {/* =====================================================
          LOGO DESIGN CARD
      ===================================================== */}

            <Link
              to="/logo-design"
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
                    Logo Design
                  </h3>

                  <p className="mt-2 m-0 max-w-[275px] text-[10px] leading-[1.6] text-gray-400 sm:text-[11px]">
                    Create distinctive logo identities that make your brand
                    recognizable, memorable and consistent.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[.12em] text-orange-300/60 transition group-hover:text-orange-300">
                  Explore service
                  <span className="h-px w-5 bg-orange-400/30 transition-all duration-300 group-hover:w-8" />
                </div>
              </div>

              {/* LOGO DESIGN ORBIT */}
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
                    Logo
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

            <Reveal direction="left">
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
                    to know about CMS Development.
                  </span>
                </h2>

                <p className="mt-5 max-w-[430px] text-[12px] leading-6 text-gray-500 sm:text-[13px] sm:leading-7">
                  Have questions about CMS scope, publishing workflows,
                  migration, SEO-ready content or how CMS development fits into
                  your digital strategy? Find the answers below.
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
                        CMS Development
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
                      Ready Publishing
                    </p>
                  </div>

                  <div className="rounded-[18px] border border-gray-200 bg-white px-4 py-4">
                    <p className="m-0 text-[20px] font-bold tracking-[-.03em] text-[#1455d9]">
                      CMS
                    </p>

                    <p className="mt-1 m-0 text-[8px] font-medium uppercase tracking-[.12em] text-gray-400">
                      Content System
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* RIGHT FAQ */}

            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <Reveal
                    key={faq.question}
                    direction="right"
                    delay={index % 2}
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

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="px-5 pb-14 sm:px-8 sm:pb-16 lg:px-14 lg:pb-20">
        <Reveal direction="up">
          <div className="relative mt-20 overflow-hidden rounded-[26px] bg-gradient-to-r from-[#0b2443] via-[#7434e8] to-[#245fe5] px-6 py-9 shadow-[0_25px_80px_rgba(91,45,190,.22)] sm:px-9 sm:py-10 lg:px-11 lg:py-11">
            <div className="pointer-events-none absolute -right-20 -top-28 h-[260px] w-[260px] rounded-full bg-white/10 blur-3xl" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto_auto] lg:items-center">
              {/* CTA content */}

              <div>
                <p className="m-0 text-[9px] font-bold uppercase tracking-[.18em] text-white/70">
                  Ready to Build?
                </p>

                <h3 className="mt-2 m-0 max-w-[650px] text-[26px] font-bold leading-[1.12] tracking-[-.035em] text-white sm:text-[22px]">
                  Give your team a CMS that makes publishing faster without
                  sacrificing quality or structure.
                </h3>

                <p className="mt-3 m-0 max-w-[650px] text-[12px] leading-6 text-white/75 sm:text-[13px]">
                  Tell us what you are trying to achieve, what you have already
                  tried and what outcome matters most. Akkurate can then
                  recommend the most practical next step.
                </p>
              </div>

              {/* CTA button */}

              <a
                href="/contact"
                className="inline-flex w-fit items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-[11px] font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#073b91]"
              >
                Start Your CMS Project
                <span className="ml-2 text-[15px]">→</span>
              </a>

              {/* CTA stats */}

              <div className="flex items-center gap-6 border-t border-white/20 pt-5 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
                <div>
                  <p className="m-0 text-[22px] font-bold text-white">CMS</p>
                  <p className="mt-1 m-0 text-[8px] text-white/65">
                    Structured
                  </p>
                </div>

                <div className="h-9 w-px bg-white/20" />

                <div>
                  <p className="m-0 text-[22px] font-bold text-white">SEO</p>
                  <p className="mt-1 m-0 text-[8px] text-white/65">Ready</p>
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
                  Audit
                </span>
              </div>

              <span className="h-3 w-px bg-white/10" />

              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[8px] text-blue-200">
                  02
                </span>

                <span className="text-[9px] font-medium text-white/55">
                  Build
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
                  Let's make publishing easier
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

export default CmsDevelopment;

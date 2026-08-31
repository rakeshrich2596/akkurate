import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../index.css";

/* =========================================================
   HEALTHCARE OPPORTUNITIES
========================================================= */

const opportunities = [
  {
    number: "01",
    title: "Healthcare Service SEO",
    description:
      "Build visibility around healthcare services, treatments and specialties that matter to people actively searching for the right provider.",
  },
  {
    number: "02",
    title: "Local Search Visibility",
    description:
      "Strengthen discovery for hospitals, clinics, healthcare providers and location-specific healthcare searches.",
  },
  {
    number: "03",
    title: "Healthcare Content",
    description:
      "Create useful content that answers genuine questions around services, treatments, conditions and the patient journey.",
  },
  {
    number: "04",
    title: "Trust & Reputation",
    description:
      "Build stronger digital trust through credible information, expertise signals, reviews and consistent communication.",
  },
  {
    number: "05",
    title: "Healthcare Landing Pages",
    description:
      "Create focused service and location pages that explain the offer clearly and guide visitors toward the right next step.",
  },
  {
    number: "06",
    title: "Enquiry Conversion",
    description:
      "Improve calls to action, enquiry forms and digital journeys so interested visitors can take the next step more easily.",
  },
];

/* =========================================================
   STRATEGY
========================================================= */

const strategy = [
  {
    number: "01",
    title: "Audience & Healthcare Research",
    description:
      "Understand audiences, search behaviour, healthcare needs, competitors and the decision criteria that influence action.",
  },
  {
    number: "02",
    title: "Positioning & Message",
    description:
      "Clarify the healthcare offer and communicate the value, expertise and proof that matter to the audience.",
  },
  {
    number: "03",
    title: "Discovery",
    description:
      "Build visibility through search, local, social and paid channels around high-value healthcare journeys.",
  },
  {
    number: "04",
    title: "Content & Authority",
    description:
      "Answer genuine questions through service pages, guides, FAQs, educational content and useful resources.",
  },
  {
    number: "05",
    title: "Conversion",
    description:
      "Improve landing pages, forms, calls to action, trust elements and enquiry or booking paths.",
  },
  {
    number: "06",
    title: "Measurement",
    description:
      "Track qualified traffic, enquiries, leads, conversion rate and other agreed healthcare marketing KPIs.",
  },
];

/* =========================================================
   WHY AKKURATE
========================================================= */

const whyChoose = [
  "Integrated SEO, AEO, GEO, paid media, web and creative capabilities.",
  "Healthcare-specific content architecture.",
  "Customer-journey-first strategy.",
  "Clear internal linking between industry and service pages.",
  "Transparent measurement and continuous optimization.",
];

/* =========================================================
   FAQ
========================================================= */

const faqs = [
  {
    question:
      "Why should a healthcare business use industry-specific digital marketing?",
    answer:
      "Healthcare customers often have a longer research and trust-building journey. An industry-specific strategy helps address relevant questions, communicate credibility and guide visitors toward appropriate next steps.",
  },
  {
    question:
      "Which digital channels should a healthcare business invest in?",
    answer:
      "There is no universal channel mix. Priorities should depend on services, audience, location, competition, customer journey and measurable business objectives.",
  },
  {
    question: "Can Akkurate manage multiple healthcare marketing channels?",
    answer:
      "Yes. SEO, AEO, GEO, paid advertising, social media, websites, content and branding can be coordinated when an integrated digital program is appropriate.",
  },
  {
    question: "Can Akkurate work with our existing healthcare website?",
    answer:
      "Yes. We can audit the existing website and identify opportunities for content, search visibility, user experience and conversion improvements before considering a complete rebuild.",
  },
  {
    question: "How do you measure healthcare marketing performance?",
    answer:
      "Performance can be measured using business-relevant indicators such as qualified traffic, enquiries, leads, conversion rate and other agreed KPIs.",
  },
  {
    question: "Do you guarantee leads or rankings?",
    answer:
      "No. We focus on strategy, execution, testing and transparent measurement rather than guaranteeing outcomes controlled by search engines, advertising platforms and market conditions.",
  },
];

/* =========================================================
   SCROLL ANIMATIONS
========================================================= */

function ScrollAnimations() {
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll("[data-animate]");

      if (!elements.length) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.05,
          rootMargin: "0px 0px 80px 0px",
        }
      );

      elements.forEach((element) => observer.observe(element));

      return () => observer.disconnect();
    }, 50);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
}

/* =========================================================
   HEALTHCARE HERO
   Search → Service → Trust → Enquiry → Appointment
========================================================= */

function HealthcareJourneyHero() {
  const steps = [
    {
      number: "01",
      title: "Search",
      icon: "⌕",
      description: "Find the right healthcare service",
    },
    {
      number: "02",
      title: "Healthcare Service",
      icon: "+",
      description: "Explore services & specialists",
    },
    {
      number: "03",
      title: "Trust",
      icon: "✓",
      description: "Build confidence through proof",
    },
    {
      number: "04",
      title: "Enquiry",
      icon: "↗",
      description: "Take the next digital step",
    },
    {
      number: "05",
      title: "Appointment",
      icon: "□",
      description: "Complete the patient journey",
    },
  ];

  return (
    <div className="healthcare-hero-visual relative w-full max-w-[610px]">
      {/* Background glow */}
      <div className="pointer-events-none absolute -inset-10 rounded-full bg-blue-100/60 blur-3xl" />

      {/* Decorative orbit */}
      <div className="healthcare-orbit healthcare-orbit-one pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-100/70" />

      <div className="healthcare-orbit healthcare-orbit-two pointer-events-none absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-blue-100" />

      {/* Main visual */}
      <div className="relative rounded-[32px] border border-blue-100 bg-white p-5 shadow-[0_30px_90px_rgba(15,23,42,.12)] sm:p-6">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <div>
            <p className="m-0 text-[9px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
              Patient Journey
            </p>

            <p className="mt-1 m-0 text-[16px] font-bold text-[#101828]">
              Healthcare Discovery
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5">
            <span className="healthcare-live-dot h-1.5 w-1.5 rounded-full bg-emerald-500" />

            <span className="text-[8px] font-bold uppercase tracking-wide text-emerald-700">
              Patient First
            </span>
          </div>
        </div>

        {/* Central search card */}
        <div className="relative mx-auto mt-7 max-w-[360px]">

          <div className="healthcare-search-glow pointer-events-none absolute -inset-3 rounded-[26px] bg-blue-100/50 blur-xl" />

          <div className="healthcare-search-card relative overflow-hidden rounded-[24px] border border-blue-100 bg-[#f8faff] p-4">

            <div className="flex items-center gap-3 rounded-[15px] border border-gray-200 bg-white px-3 py-3 shadow-sm">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[18px] font-bold text-[#1455d9]">
                ⌕
              </span>

              <div className="min-w-0 flex-1">
                <p className="m-0 text-[8px] font-bold uppercase tracking-[0.12em] text-gray-400">
                  Search healthcare
                </p>

                <p className="mt-1 truncate text-[12px] font-bold text-[#101828]">
                  Cardiology near me
                </p>
              </div>

              <span className="rounded-full bg-[#073b91] px-3 py-1.5 text-[8px] font-bold text-white">
                Search
              </span>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="rounded-[14px] border border-gray-100 bg-white p-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-[12px] font-bold text-[#1455d9]">
                  +
                </span>

                <p className="mt-2 m-0 text-[10px] font-bold text-[#101828]">
                  Cardiology
                </p>

                <p className="mt-1 m-0 text-[8px] text-gray-400">
                  Specialist care
                </p>
              </div>

              <div className="rounded-[14px] border border-gray-100 bg-white p-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-[12px] font-bold text-emerald-600">
                  ✓
                </span>

                <p className="mt-2 m-0 text-[10px] font-bold text-[#101828]">
                  Trusted Provider
                </p>

                <p className="mt-1 m-0 text-[8px] text-gray-400">
                  Verified signals
                </p>
              </div>
            </div>

            {/* Appointment CTA */}
            <div className="mt-3 flex items-center justify-between rounded-[14px] bg-[#073b91] px-4 py-3 text-white">
              <div>
                <p className="m-0 text-[8px] uppercase tracking-[0.12em] text-blue-200">
                  Next step
                </p>

                <p className="mt-1 m-0 text-[11px] font-bold">
                  Book an appointment
                </p>
              </div>

              <span className="text-[15px]">→</span>
            </div>
          </div>
        </div>

        {/* Journey steps */}
        <div className="relative mt-7">

          {/* Animated connecting line */}
          <div className="absolute left-[9%] right-[9%] top-[25px] hidden h-px bg-blue-100 sm:block" />

          <div className="healthcare-journey-progress absolute left-[9%] top-[24px] hidden h-[2px] bg-[#1455d9] sm:block" />

          <div className="grid grid-cols-5 gap-1.5">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative z-10 text-center"
                style={{
                  animationDelay: `${index * 0.15}s`,
                }}
              >
                <div className="healthcare-step-node mx-auto flex h-[50px] w-[50px] items-center justify-center rounded-full border border-blue-100 bg-white shadow-sm">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-[12px] font-bold text-[#1455d9]">
                    {step.icon}
                  </div>
                </div>

                <p className="mt-2 m-0 text-[8px] font-bold leading-tight text-[#101828] sm:text-[9px]">
                  {step.title}
                </p>

                <p className="mt-1 hidden text-[7px] leading-4 text-gray-400 sm:block">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom signal */}
        <div className="mt-6 flex items-center justify-between rounded-[14px] border border-blue-100 bg-[#f7faff] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="healthcare-signal-pulse flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-[10px] font-bold text-[#1455d9]">
              +
            </span>

            <span className="text-[9px] font-semibold text-gray-500">
              Search • Trust • Conversion
            </span>
          </div>

          <span className="text-[8px] font-bold uppercase tracking-[0.12em] text-[#1455d9]">
            AKKURATE
          </span>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   PATIENT JOURNEY LINE CHART
========================================================= */

function PatientJourneyChart() {
  const points = [
    { label: "Search", value: 32 },
    { label: "Service", value: 49 },
    { label: "Trust", value: 61 },
    { label: "Enquiry", value: 78 },
    { label: "Appointment", value: 92 },
  ];

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-gray-200 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,.06)] sm:p-7">

      <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-blue-50 blur-3xl" />

      <div className="relative">

        {/* Header */}
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="m-0 text-[9px] font-bold uppercase tracking-[0.18em] text-[#1455d9]">
              Performance View
            </p>

            <h3 className="mt-2 m-0 text-[20px] font-bold tracking-[-0.03em] text-[#101828] sm:text-[23px]">
              Patient Journey Line Chart
            </h3>

            <p className="mt-2 max-w-[530px] text-[12px] leading-6 text-gray-500 sm:text-[13px]">
              An illustrative view of how digital patient engagement can move
              from healthcare discovery through to appointment action.
            </p>
          </div>

          <span className="hidden shrink-0 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-[8px] font-bold text-[#1455d9] sm:block">
            ILLUSTRATIVE
          </span>
        </div>

        {/* Chart */}
        <div className="relative mt-8 h-[260px] overflow-hidden rounded-[20px] bg-[#f8faff]">

          {/* Grid */}
          <div className="absolute inset-x-5 top-5 bottom-10 flex flex-col justify-between">
            <span className="border-t border-dashed border-gray-200" />
            <span className="border-t border-dashed border-gray-200" />
            <span className="border-t border-dashed border-gray-200" />
            <span className="border-t border-dashed border-gray-200" />
            <span className="border-t border-dashed border-gray-200" />
          </div>

          {/* Y labels */}
          <div className="absolute bottom-10 left-2 top-5 flex flex-col justify-between text-[7px] font-medium text-gray-400">
            <span>100</span>
            <span>80</span>
            <span>60</span>
            <span>40</span>
            <span>20</span>
          </div>

          <svg
            viewBox="0 0 600 220"
            className="absolute inset-x-8 top-4 h-[205px] w-[calc(100%-64px)]"
            preserveAspectRatio="none"
          >
            {/* Soft area */}
            <path
              d="M0 180 C75 165 105 145 150 135 C205 123 245 105 300 95 C360 84 405 70 450 54 C505 40 550 30 600 18 L600 220 L0 220 Z"
              fill="rgba(20,85,217,0.06)"
            />

            {/* Main line */}
            <path
              className="healthcare-chart-line"
              d="M0 180 C75 165 105 145 150 135 C205 123 245 105 300 95 C360 84 405 70 450 54 C505 40 550 30 600 18"
              fill="none"
              stroke="#1455d9"
              strokeWidth="4"
              strokeLinecap="round"
            />

            {/* Points */}
            <circle
              className="healthcare-chart-point"
              cx="0"
              cy="180"
              r="5"
              fill="#1455d9"
            />

            <circle
              className="healthcare-chart-point"
              cx="150"
              cy="135"
              r="5"
              fill="#1455d9"
              style={{ animationDelay: "0.4s" }}
            />

            <circle
              className="healthcare-chart-point"
              cx="300"
              cy="95"
              r="5"
              fill="#1455d9"
              style={{ animationDelay: "0.8s" }}
            />

            <circle
              className="healthcare-chart-point"
              cx="450"
              cy="54"
              r="5"
              fill="#1455d9"
              style={{ animationDelay: "1.2s" }}
            />

            <circle
              className="healthcare-chart-point"
              cx="600"
              cy="18"
              r="6"
              fill="#073b91"
              style={{ animationDelay: "1.6s" }}
            />
          </svg>

          {/* Moving dot */}
          <span className="healthcare-chart-traveller absolute left-[8%] top-[74%] h-2.5 w-2.5 rounded-full bg-[#073b91] shadow-[0_0_0_6px_rgba(20,85,217,.10)]" />

          {/* X labels */}
          <div className="absolute bottom-3 left-8 right-8 flex justify-between text-[7px] font-semibold text-gray-400 sm:text-[8px]">
            {points.map((point) => (
              <span key={point.label}>{point.label}</span>
            ))}
          </div>
        </div>

        {/* Journey summary */}
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">

          <div className="rounded-[15px] border border-gray-100 bg-[#f8faff] p-3">
            <p className="m-0 text-[8px] uppercase tracking-[0.12em] text-gray-400">
              Discovery
            </p>

            <p className="mt-1 m-0 text-[18px] font-bold text-[#101828]">
              32
            </p>
          </div>

          <div className="rounded-[15px] border border-gray-100 bg-[#f8faff] p-3">
            <p className="m-0 text-[8px] uppercase tracking-[0.12em] text-gray-400">
              Trust
            </p>

            <p className="mt-1 m-0 text-[18px] font-bold text-[#101828]">
              61
            </p>
          </div>

          <div className="rounded-[15px] border border-gray-100 bg-[#f8faff] p-3">
            <p className="m-0 text-[8px] uppercase tracking-[0.12em] text-gray-400">
              Enquiry
            </p>

            <p className="mt-1 m-0 text-[18px] font-bold text-[#101828]">
              78
            </p>
          </div>

          <div className="rounded-[15px] border border-blue-100 bg-blue-50 p-3">
            <p className="m-0 text-[8px] uppercase tracking-[0.12em] text-[#1455d9]">
              Appointment
            </p>

            <p className="mt-1 m-0 text-[18px] font-bold text-[#073b91]">
              92
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-5 rounded-[15px] border border-blue-100 bg-[#f7faff] p-4">
          <div className="flex gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#073b91] text-[11px] font-bold text-white">
              i
            </span>

            <p className="m-0 text-[11px] leading-6 text-gray-500">
              These values are illustrative design data, not measured Akkurate
              client results. Replace them with verified business data when
              available.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   CUSTOMER JOURNEY
========================================================= */

function HealthcareCustomerJourney() {
  const stages = [
    {
      number: "01",
      title: "Search",
      description: "Patients discover relevant healthcare services.",
    },
    {
      number: "02",
      title: "Healthcare Service",
      description: "Explore treatments, specialists and information.",
    },
    {
      number: "03",
      title: "Trust",
      description: "Build confidence through expertise and proof.",
    },
    {
      number: "04",
      title: "Enquiry",
      description: "Take a clear digital next step.",
    },
    {
      number: "05",
      title: "Appointment",
      description: "Turn intent into an appointment opportunity.",
    },
  ];

  return (
    <div className="relative mt-10">

      <div className="hidden lg:block">
        <div className="absolute left-[9%] right-[9%] top-[43px] h-px bg-blue-100" />

        <div className="healthcare-flow-line absolute left-[9%] top-[42px] h-[2px] bg-[#1455d9]" />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
        {stages.map((stage, index) => (
          <div
            key={stage.number}
            data-animate="card"
            data-delay={index + 1}
            className="healthcare-journey-node relative rounded-[20px] border border-gray-200 bg-white p-5"
          >
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-bold tracking-[0.16em] text-[#1455d9]">
                {stage.number}
              </span>

              <span className="healthcare-journey-dot h-2 w-2 rounded-full bg-[#1455d9]" />
            </div>

            <h3 className="mt-6 m-0 text-[16px] font-bold text-[#101828]">
              {stage.title}
            </h3>

            <p className="mt-2 m-0 text-[11px] leading-5 text-gray-500">
              {stage.description}
            </p>

            {index < stages.length - 1 && (
              <span className="absolute -right-2 top-[39px] z-10 hidden h-4 w-4 items-center justify-center rounded-full bg-white text-[11px] text-[#1455d9] lg:flex">
                →
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function HealthCare() {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    document.title =
      "Healthcare Digital Marketing Services | SEO, Local Search & Content | Akkurate";

    const description =
      "Grow healthcare businesses with industry-focused SEO, content, paid media, websites and conversion strategies from Akkurate Digital Solutions.";

    let meta = document.querySelector('meta[name="description"]');

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.setAttribute("content", description);
  }, []);

  return (
    <>
      <ScrollAnimations />

      <div className="w-full overflow-hidden bg-white text-[#101828]">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="relative overflow-hidden bg-[#f7faff] px-5 py-12 sm:px-8 sm:py-16 lg:px-14 lg:py-20">

          <div className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-blue-100/60 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[320px] w-[320px] rounded-full bg-indigo-100/50 blur-3xl" />

          <div className="relative mx-auto w-full max-w-[1600px] px-2 sm:px-4 lg:px-8 xl:px-10">

            {/* Breadcrumb */}
            <div className="mb-8 flex flex-wrap items-center gap-2 text-[11px] font-medium text-gray-500">
              <Link
                to="/"
                className="transition hover:text-[#1455d9]"
              >
                Home
              </Link>

              <span>/</span>

              <span>Industries</span>

              <span>/</span>

              <span className="text-[#1455d9]">
                Healthcare
              </span>
            </div>

            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">

              {/* LEFT */}
              <div
                data-animate="left"
                className="max-w-[750px]"
              >
                <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1455d9] sm:text-[11px]">
                  Healthcare Digital Marketing
                </p>

                <h1
                  data-animate="center"
                  className="mt-4 m-0 max-w-[760px] text-[36px] font-bold leading-[1.06] tracking-[-0.04em] sm:text-[46px] md:text-[52px] lg:text-[50px] xl:text-[32px]"
                >
                  Digital Marketing for Healthcare Businesses That Need Better
                  Visibility, Trust &amp; Leads
                </h1>

                <p className="mt-6 max-w-[680px] text-[14px] leading-7 text-gray-600 sm:text-[16px]">
                  Healthcare customers have a specific buying journey.
                  Akkurate builds digital strategies around the questions,
                  comparisons, trust signals and conversion actions that
                  matter in this market.
                </p>

                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center rounded-full bg-[#073b91] px-6 py-3.5 text-[13px] font-bold text-white shadow-[0_10px_30px_rgba(7,59,145,.16)] transition duration-300 hover:-translate-y-1 hover:bg-[#052f75]"
                >
                  Build My Industry Growth Strategy

                  <span className="ml-2">
                    →
                  </span>
                </Link>
              </div>

              {/* RIGHT */}
              <div
                data-animate="right"
                className="relative flex items-center justify-center"
              >
                <HealthcareJourneyHero />
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            WHY HEALTHCARE MARKETING
        ===================================================== */}

        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-10">

          <div className="mx-auto grid w-full max-w-[1400px] gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">

            <div data-animate="left">
              <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
                The Business Problem
              </p>

              <h2
                data-animate="center"
                className="mt-4 m-0 text-[30px] font-bold leading-tight tracking-[-0.03em] sm:text-[30px]"
              >
                Why Healthcare Marketing Needs a Specialized Approach
              </h2>
            </div>

            <div data-animate="right">
              <p className="m-0 text-[14px] leading-7 text-gray-600 sm:text-[16px] sm:leading-8">
                A generic digital marketing package rarely reflects the way
                healthcare audiences search, compare and decide. The website
                should use relevant industry language, answer important
                questions, demonstrate credible expertise and connect discovery
                channels to a clear next step.
              </p>

              <p className="mt-5 text-[14px] leading-7 text-gray-600 sm:text-[16px] sm:leading-8">
                Akkurate maps the customer journey first and then selects the
                right mix of SEO, AEO, GEO, paid media, website, content and
                branding services.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            DIGITAL OPPORTUNITIES
        ===================================================== */}

        <section className="bg-[#f7faff] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-10">

          <div className="mx-auto w-full max-w-[1500px]">

            <div
              data-animate="center"
              className="text-center"
            >
              <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
                Digital Opportunities
              </p>

              <h2 className="mt-3 m-0 text-[30px] font-bold leading-tight tracking-[-0.03em] sm:text-[38px]">
                Key Digital Opportunities for Healthcare
              </h2>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {opportunities.map((item, index) => (
                <article
                  key={item.number}
                  data-animate="card"
                  data-delay={(index % 6) + 1}
                  className="group rounded-[22px] border border-gray-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,.04)] transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_22px_55px_rgba(15,23,42,.09)] sm:p-7"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-[11px] font-bold tracking-[0.15em] text-[#1455d9]">
                      {item.number}
                    </span>

                    <span className="text-[18px] text-gray-300 transition group-hover:text-[#1455d9]">
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-7 m-0 text-[18px] font-bold leading-snug text-[#101828] sm:text-[20px]">
                    {item.title}
                  </h3>

                  <p className="mt-3 m-0 text-[13px] leading-6 text-gray-500 sm:text-[14px] sm:leading-7">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            PERFORMANCE
        ===================================================== */}

        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-10">

          <div className="mx-auto grid w-full max-w-[1400px] items-center gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">

            <div data-animate="left">

              <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
                Performance Analysis
              </p>

              <h2
                data-animate="center"
                className="mt-4 m-0 text-[30px] font-bold leading-tight tracking-[-0.03em] sm:text-[38px]"
              >
                Understand the Patient Journey
              </h2>

              <p className="mt-5 max-w-[470px] text-[14px] leading-7 text-gray-600 sm:text-[15px]">
                Measure how healthcare audiences move from search and service
                discovery through trust, enquiry and appointment action.
              </p>

              <div className="mt-7 grid max-w-[420px] grid-cols-2 gap-3">

                <div className="rounded-[18px] border border-blue-100 bg-blue-50 p-4">
                  <p className="m-0 text-[8px] font-bold uppercase tracking-[0.12em] text-[#1455d9]">
                    Journey
                  </p>

                  <p className="mt-2 m-0 text-[13px] font-bold text-[#101828]">
                    Search → Appointment
                  </p>
                </div>

                <div className="rounded-[18px] border border-gray-200 bg-white p-4">
                  <p className="m-0 text-[8px] font-bold uppercase tracking-[0.12em] text-gray-400">
                    Focus
                  </p>

                  <p className="mt-2 m-0 text-[13px] font-bold text-[#101828]">
                    Patient intent
                  </p>
                </div>
              </div>
            </div>

            <div data-animate="right">
              <PatientJourneyChart />
            </div>

          </div>
        </section>

        {/* =====================================================
            CUSTOMER JOURNEY
        ===================================================== */}

        <section className="bg-[#f7faff] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-10">

          <div className="mx-auto w-full max-w-[1400px]">

            <div data-animate="center" className="text-center">

              <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
                Customer Journey
              </p>

              <h2 className="mt-3 m-0 text-[30px] font-bold leading-tight tracking-[-0.03em] sm:text-[38px]">
                From Healthcare Search to Appointment
              </h2>

            </div>

            <HealthcareCustomerJourney />

          </div>
        </section>

        {/* =====================================================
            RECOMMENDED STRATEGY
        ===================================================== */}

        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-10">

          <div className="mx-auto grid w-full max-w-[1400px] gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">

            <div data-animate="left">

              <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
                Our Approach
              </p>

              <h2
                data-animate="center"
                className="mt-4 m-0 text-[30px] font-bold leading-tight tracking-[-0.03em] sm:text-[38px]"
              >
                Recommended Strategy
              </h2>

              <p className="mt-5 max-w-[470px] text-[14px] leading-7 text-gray-600 sm:text-[15px]">
                A structured approach that connects healthcare audience
                research, discovery, content, trust, conversion and
                measurement.
              </p>
            </div>

            <div className="space-y-3">

              {strategy.map((item, index) => (
                <div
                  key={item.number}
                  data-animate="card"
                  data-delay={(index % 6) + 1}
                  className="flex gap-5 rounded-[18px] border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-6"
                >
                  <span className="shrink-0 pt-0.5 text-[11px] font-bold tracking-[0.14em] text-[#1455d9]">
                    {item.number}
                  </span>

                  <div>
                    <h3 className="m-0 text-[15px] font-bold text-[#101828] sm:text-[17px]">
                      {item.title}
                    </h3>

                    <p className="mt-2 m-0 text-[13px] leading-6 text-gray-600 sm:text-[14px] sm:leading-7">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* =====================================================
            WHY AKKURATE
        ===================================================== */}

        <section className="bg-[#101828] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-10">

          <div className="mx-auto grid w-full max-w-[1400px] items-center gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">

            <div data-animate="left">

              <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-300">
                Why Choose Akkurate
              </p>

              <h2
                data-animate="center"
                className="mt-4 m-0 text-[30px] font-bold leading-tight tracking-[-0.03em] text-white sm:text-[38px]"
              >
                Integrated Digital Growth for Healthcare
              </h2>

            </div>

            <div className="grid gap-3 sm:grid-cols-2">

              {whyChoose.map((item, index) => (
                <div
                  key={item}
                  data-animate="card"
                  data-delay={(index % 5) + 1}
                  className="flex gap-3 rounded-[16px] border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]"
                >
                  <span className="mt-0.5 text-[14px] text-blue-300">
                    ✓
                  </span>

                  <span className="text-[13px] leading-6 text-gray-300 sm:text-[14px]">
                    {item}
                  </span>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* =====================================================
            FAQ
        ===================================================== */}

        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-10">

          <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">

            <div className="lg:sticky lg:top-28 lg:self-start">

              <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1455d9] sm:text-[11px]">
                Frequently Asked Questions
              </p>

              <h2
                data-animate="center"
                className="mt-4 m-0 max-w-[450px] text-[30px] font-bold leading-tight tracking-[-0.03em] sm:text-[38px]"
              >
                Healthcare Marketing FAQs
              </h2>

              <p className="mt-5 max-w-[430px] text-[14px] leading-7 text-gray-600 sm:text-[15px]">
                Clear answers to common questions about healthcare marketing,
                channels, websites and performance.
              </p>

            </div>

            <div
              data-animate="right"
              className="space-y-3"
            >

              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    key={faq.question}
                    className="overflow-hidden rounded-[16px] border border-gray-200 bg-white transition-shadow duration-300 hover:shadow-[0_10px_35px_rgba(15,23,42,.05)]"
                  >

                    <button
                      type="button"
                      onClick={() =>
                        setOpenFaq(isOpen ? null : index)
                      }
                      className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                    >

                      <span className="pr-4 text-[14px] font-bold leading-6 text-[#101828] sm:text-[15px]">
                        {faq.question}
                      </span>

                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-blue-100 text-[20px] text-[#1455d9] transition-all duration-300 ${
                          isOpen
                            ? "rotate-45 bg-[#073b91] text-white"
                            : "bg-white"
                        }`}
                      >
                        +
                      </span>

                    </button>

                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">

                        <p className="m-0 px-5 pb-5 text-[13px] leading-6 text-gray-600 sm:px-6 sm:text-[14px] sm:leading-7">
                          {faq.answer}
                        </p>

                      </div>
                    </div>

                  </div>
                );
              })}

            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="relative overflow-hidden bg-[#073b91] px-5 py-10 sm:px-8 sm:py-12 lg:px-14 lg:py-14">

          <div className="pointer-events-none absolute -right-32 -top-32 h-[320px] w-[320px] rounded-full bg-white/10 blur-3xl" />

          <div
            data-animate="center"
            className="relative mx-auto max-w-[1050px] text-center"
          >

            <h2 className="m-0 text-[30px] font-bold leading-tight tracking-[-0.03em] text-white sm:text-[38px] lg:text-[40px]">
              Ready to grow your healthcare business online?
            </h2>

            <p className="mx-auto mt-4 max-w-[820px] text-[14px] leading-7 text-blue-100 sm:text-[15px]">
              Tell Akkurate what you offer, who you want to reach and what
              outcome matters most.
            </p>

            <Link
              to="/contact"
              className="mt-6 inline-flex items-center rounded-full bg-white px-7 py-3.5 text-[13px] font-bold text-[#073b91] transition duration-300 hover:-translate-y-1 hover:bg-gray-100"
            >
              Build My Industry Growth Strategy

              <span className="ml-2">
                →
              </span>
            </Link>

          </div>
        </section>

      </div>
    </>
  );
}
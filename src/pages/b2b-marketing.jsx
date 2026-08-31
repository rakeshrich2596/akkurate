import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../index.css";
/* =========================================================
   DATA
========================================================= */

const opportunities = [
  {
    number: "01",
    title: "B2B SEO & Topic Authority",
    description:
      "Build visibility around real B2B customer intent, commercial searches and topics that influence buying decisions.",
    visual: "search",
  },
  {
    number: "02",
    title: "LinkedIn & Account Targeting",
    description:
      "Reach relevant decision-makers with targeted content and campaigns built around priority accounts and audiences.",
    visual: "target",
  },
  {
    number: "03",
    title: "Lead-Generation Websites",
    description:
      "Create clear website journeys that turn research, comparison and commercial intent into qualified enquiries.",
    visual: "website",
  },
  {
    number: "04",
    title: "Thought Leadership",
    description:
      "Build authority through useful insights, guides, case studies and content that demonstrates practical expertise.",
    visual: "authority",
  },
  {
    number: "05",
    title: "Google Ads for High-Intent Searches",
    description:
      "Capture demand when prospects are actively searching for solutions, services and specialist providers.",
    visual: "ads",
  },
  {
    number: "06",
    title: "Sales-Ready Content",
    description:
      "Create content that supports sales conversations, answers objections and helps prospects move toward action.",
    visual: "content",
  },
];

const strategy = [
  {
    number: "01",
    title: "Industry & Audience Research",
    description:
      "Identify segments, buying triggers, search behavior, competitors, objections and decision criteria.",
  },
  {
    number: "02",
    title: "Positioning & Message",
    description:
      "Clarify what the business offers, who it serves, why it is different and what proof can support the claim.",
  },
  {
    number: "03",
    title: "Discovery",
    description:
      "Build search, social and paid visibility around high-value customer journeys.",
  },
  {
    number: "04",
    title: "Content & Authority",
    description:
      "Answer genuine questions and demonstrate practical knowledge through service pages, guides, case studies and useful resources.",
  },
  {
    number: "05",
    title: "Conversion",
    description:
      "Improve landing pages, forms, calls to action, trust elements and enquiry paths.",
  },
  {
    number: "06",
    title: "Measurement",
    description:
      "Track qualified traffic, leads, enquiries, conversions and other agreed business KPIs.",
  },
];

const whyChoose = [
  "Integrated SEO, AEO, GEO, paid media, web and creative capabilities.",
  "Industry-specific content architecture.",
  "Customer-journey-first strategy.",
  "Clear internal linking between industry and service pages.",
  "Transparent measurement and continuous optimization.",
];

const faqs = [
  {
    question:
      "Why should a B2B marketing business use industry-specific digital marketing?",
    answer:
      "Industry-specific strategy allows the website and campaigns to reflect the language, buying process and trust requirements of the market.",
  },
  {
    question: "Which digital channels should we invest in?",
    answer:
      "There is no universal mix. Priorities should depend on audience, competition, geography, offer, buying journey and measurable business value.",
  },
  {
    question: "Can Akkurate manage multiple channels?",
    answer:
      "Yes. SEO, AEO, GEO, paid advertising, social media, websites, content and branding can be coordinated when the business needs an integrated program.",
  },
  {
    question: "Can you work with our existing website?",
    answer:
      "Yes. We can audit the current website and recommend improvements before considering a full rebuild.",
  },
  {
    question: "How do you measure industry marketing performance?",
    answer:
      "We agree on business-relevant KPIs such as qualified traffic, enquiries, leads, conversion rate or other measurable outcomes.",
  },
  {
    question: "Do you guarantee leads or rankings?",
    answer:
      "No. We focus on strategy, execution, testing and transparent measurement rather than guaranteeing outcomes controlled by platforms and market conditions.",
  },
];

/* =========================================================
   SCROLL ANIMATION SYSTEM
========================================================= */

function ScrollAnimations() {
  const location = useLocation();

  useEffect(() => {
    let observer;

    const timer = setTimeout(() => {
      const elements = document.querySelectorAll("[data-animate]");

      if (!elements.length) return;

      observer = new IntersectionObserver(
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
        },
      );

      elements.forEach((element) => observer.observe(element));
    }, 50);

    return () => {
      clearTimeout(timer);

      if (observer) {
        observer.disconnect();
      }
    };
  }, [location.pathname]);

  return null;
}

/* =========================================================
   B2B LEAD JOURNEY HERO
========================================================= */

function B2BLeadJourney() {
  const stages = [
    {
      number: "01",
      title: "LEAD",
      description: "Initial demand",
    },
    {
      number: "02",
      title: "MQL",
      description: "Marketing qualified",
    },
    {
      number: "03",
      title: "SQL",
      description: "Sales qualified",
    },
    {
      number: "04",
      title: "OPPORTUNITY",
      description: "Active sales opportunity",
    },
    {
      number: "05",
      title: "DEAL",
      description: "Revenue outcome",
    },
  ];

  return (
    <div className="relative w-full max-w-[650px]">
      {/* Glow */}
      <div className="pointer-events-none absolute -inset-10 rounded-full bg-blue-200/40 blur-3xl" />

      <div className="relative overflow-hidden rounded-[30px] border border-blue-100 bg-white p-5 shadow-[0_30px_90px_rgba(15,23,42,.12)] sm:p-7">

        {/* Top label */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-5">
          <div>
            <p className="m-0 text-[9px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
              B2B Revenue Journey
            </p>

            <p className="mt-1 m-0 text-[17px] font-bold tracking-[-0.02em] text-[#101828]">
              Lead to Deal
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1455d9] b2b-live-dot" />

            <span className="text-[9px] font-bold text-[#1455d9]">
              LIVE FLOW
            </span>
          </div>
        </div>

        {/* Desktop journey */}
        <div className="relative mt-8 hidden lg:block">

          {/* Base connecting line */}
          <div className="absolute left-[10%] right-[10%] top-[47px] h-[2px] rounded-full bg-blue-100" />

          {/* Animated blue travelling line */}
          <div className="b2b-route-line absolute left-[10%] top-[46px] h-[4px] w-[20%] rounded-full bg-[#1455d9]" />

          {/* Travelling light */}
          <div className="b2b-route-light absolute left-[10%] top-[42px] h-3 w-3 rounded-full bg-[#1455d9]" />

          <div className="grid grid-cols-5 gap-3">
            {stages.map((stage, index) => (
              <div
                key={stage.title}
                className="b2b-stage-card relative"
                style={{
                  "--stage-delay": `${index * 1.05}s`,
                }}
              >
                <div className="b2b-stage-node mx-auto flex h-[94px] w-[94px] flex-col items-center justify-center rounded-[22px] border border-gray-200 bg-white">
                  <span className="text-[8px] font-bold tracking-[0.16em] text-[#1455d9]">
                    {stage.number}
                  </span>

                  <span className="mt-2 text-[12px] font-bold text-[#101828]">
                    {stage.title}
                  </span>

                  <span className="mt-1 text-[7px] text-gray-400">
                    {stage.description}
                  </span>
                </div>

                <div className="mt-4 text-center">
                  <span className="text-[8px] font-bold uppercase tracking-[0.12em] text-gray-400">
                    {index === 0
                      ? "Capture"
                      : index === 1
                        ? "Qualify"
                        : index === 2
                          ? "Validate"
                          : index === 3
                            ? "Close"
                            : "Revenue"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile journey */}
        <div className="relative mt-7 lg:hidden">

          {/* Vertical base line */}
          <div className="absolute bottom-7 left-[25px] top-7 w-[2px] bg-blue-100" />

          {/* Animated vertical line */}
          <div className="b2b-route-line-mobile absolute left-[24px] top-7 h-[20%] w-[4px] rounded-full bg-[#1455d9]" />

          {stages.map((stage, index) => (
            <div
              key={stage.title}
              className="b2b-mobile-stage relative flex items-center gap-4 pb-5 last:pb-0"
              style={{
                "--stage-delay": `${index * 1.05}s`,
              }}
            >
              <div className="b2b-stage-node relative z-10 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[16px] border border-gray-200 bg-white">
                <span className="text-[10px] font-bold text-[#1455d9]">
                  {stage.number}
                </span>
              </div>

              <div className="flex-1 rounded-[16px] border border-gray-100 bg-[#f8faff] p-3">
                <div className="flex items-center justify-between gap-3">
                  <p className="m-0 text-[12px] font-bold text-[#101828]">
                    {stage.title}
                  </p>

                  <span className="text-[8px] font-bold uppercase tracking-[0.1em] text-[#1455d9]">
                    {index === 0
                      ? "Capture"
                      : index === 1
                        ? "Qualify"
                        : index === 2
                          ? "Validate"
                          : index === 3
                            ? "Close"
                            : "Revenue"}
                  </span>
                </div>

                <p className="mt-1 m-0 text-[9px] text-gray-400">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-7 grid grid-cols-3 gap-2 border-t border-gray-100 pt-5">
          <div className="rounded-[14px] bg-[#f8faff] p-3">
            <p className="m-0 text-[8px] font-bold uppercase tracking-[0.1em] text-gray-400">
              Focus
            </p>

            <p className="mt-1 m-0 text-[10px] font-bold text-[#101828]">
              Demand
            </p>
          </div>

          <div className="rounded-[14px] bg-[#f8faff] p-3">
            <p className="m-0 text-[8px] font-bold uppercase tracking-[0.1em] text-gray-400">
              System
            </p>

            <p className="mt-1 m-0 text-[10px] font-bold text-[#101828]">
              Qualification
            </p>
          </div>

          <div className="rounded-[14px] bg-[#073b91] p-3">
            <p className="m-0 text-[8px] font-bold uppercase tracking-[0.1em] text-blue-200">
              Outcome
            </p>

            <p className="mt-1 m-0 text-[10px] font-bold text-white">
              Revenue
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   LEAD TO REVENUE FUNNEL
========================================================= */

function LeadRevenueFunnel() {
  const funnel = [
    {
      stage: "LEADS",
      value: "1,000",
      percentage: "100%",
      width: "100%",
    },
    {
      stage: "MQL",
      value: "620",
      percentage: "62%",
      width: "82%",
    },
    {
      stage: "SQL",
      value: "360",
      percentage: "36%",
      width: "64%",
    },
    {
      stage: "OPPORTUNITY",
      value: "180",
      percentage: "18%",
      width: "47%",
    },
    {
      stage: "DEAL",
      value: "72",
      percentage: "7.2%",
      width: "30%",
    },
  ];

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-gray-200 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,.06)] sm:p-7">

      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-50 blur-3xl" />

      <div className="relative">

        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="m-0 text-[9px] font-bold uppercase tracking-[0.18em] text-[#1455d9]">
              Performance View
            </p>

            <h3 className="mt-2 m-0 text-[20px] font-bold tracking-[-0.03em] text-[#101828] sm:text-[23px]">
              Lead-to-Revenue Funnel
            </h3>

            <p className="mt-2 max-w-[520px] text-[12px] leading-6 text-gray-500 sm:text-[13px]">
              An illustrative funnel showing how potential B2B demand can
              progress from initial leads toward revenue opportunities.
            </p>
          </div>

          <span className="hidden shrink-0 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-[8px] font-bold text-[#1455d9] sm:block">
            ILLUSTRATIVE
          </span>
        </div>

        {/* Funnel */}
        <div className="mt-8 space-y-3">

          {funnel.map((item, index) => (
            <div
              key={item.stage}
              className="b2b-funnel-row"
              style={{
                "--funnel-delay": `${index * 0.16}s`,
              }}
            >
              <div className="mb-1.5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f1f5ff] text-[8px] font-bold text-[#1455d9]">
                    0{index + 1}
                  </span>

                  <span className="text-[11px] font-bold text-[#101828] sm:text-[12px]">
                    {item.stage}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-gray-400">
                    {item.percentage}
                  </span>

                  <span className="text-[12px] font-bold text-[#1455d9]">
                    {item.value}
                  </span>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="h-9 w-full overflow-hidden rounded-[10px] bg-[#f1f5fb]">
                  <div
                    className="b2b-funnel-bar h-full rounded-[10px] bg-[#1455d9]"
                    style={{
                      width: item.width,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Funnel summary */}
        <div className="mt-7 grid grid-cols-3 gap-2.5">

          <div className="rounded-[16px] border border-gray-100 bg-[#f8faff] p-4">
            <p className="m-0 text-[8px] font-bold uppercase tracking-[0.12em] text-gray-400">
              Leads
            </p>

            <p className="mt-2 m-0 text-[18px] font-bold text-[#101828]">
              1,000
            </p>
          </div>

          <div className="rounded-[16px] border border-gray-100 bg-[#f8faff] p-4">
            <p className="m-0 text-[8px] font-bold uppercase tracking-[0.12em] text-gray-400">
              Opportunities
            </p>

            <p className="mt-2 m-0 text-[18px] font-bold text-[#101828]">
              180
            </p>
          </div>

          <div className="rounded-[16px] bg-[#073b91] p-4">
            <p className="m-0 text-[8px] font-bold uppercase tracking-[0.12em] text-blue-200">
              Deals
            </p>

            <p className="mt-2 m-0 text-[18px] font-bold text-white">
              72
            </p>
          </div>

        </div>

        <div className="mt-5 rounded-[14px] border border-blue-100 bg-[#f7faff] p-3">
          <p className="m-0 text-[10px] leading-5 text-gray-500">
            These figures are illustrative design examples, not measured
            Akkurate client results. Replace them with verified business data
            when available.
          </p>
        </div>

      </div>
    </div>
  );
}

/* =========================================================
   OPPORTUNITY MINI VISUAL
========================================================= */

function OpportunityVisual({ type }) {
  if (type === "search") {
    return (
      <div className="relative h-10 w-10 overflow-hidden rounded-[12px] bg-blue-50 p-2">
        <div className="h-full rounded-[8px] border border-blue-100 bg-white">
          <div className="mx-1.5 mt-1.5 h-1 rounded-full bg-blue-200" />
          <div className="mx-1.5 mt-1 h-1 rounded-full bg-[#1455d9]" />
          <div className="mx-1.5 mt-1 h-1 w-1/2 rounded-full bg-blue-100" />
        </div>
      </div>
    );
  }

  if (type === "target") {
    return (
      <div className="opportunity-icon relative flex h-10 w-10 items-center justify-center rounded-[12px] bg-indigo-50 text-indigo-600">
        <div className="h-5 w-5 rounded-full border-2 border-indigo-300 p-1">
          <div className="h-full w-full rounded-full border-2 border-indigo-500" />
        </div>
      </div>
    );
  }

  if (type === "website") {
    return (
      <div className="opportunity-icon h-10 w-10 rounded-[12px] bg-blue-50 p-2">
        <div className="h-full rounded-[7px] border border-blue-100 bg-white">
          <div className="h-1.5 rounded-t-[6px] bg-blue-100" />
          <div className="mx-1.5 mt-1.5 h-1 rounded-full bg-[#1455d9]" />
          <div className="mx-1.5 mt-1 h-1 w-2/3 rounded-full bg-gray-100" />
          <div className="mx-1.5 mt-1 h-1 w-1/2 rounded-full bg-gray-100" />
        </div>
      </div>
    );
  }

  if (type === "authority") {
    return (
      <div className="opportunity-icon relative flex h-10 w-10 items-center justify-center rounded-[12px] bg-violet-50 text-violet-600">
        <span className="text-[20px] font-bold">✦</span>
      </div>
    );
  }

  if (type === "ads") {
    return (
      <div className="opportunity-icon relative flex h-10 w-10 items-center justify-center rounded-[12px] bg-blue-50">
        <div className="flex items-end gap-1">
          <span className="h-2 w-1.5 rounded-sm bg-blue-200" />
          <span className="h-3.5 w-1.5 rounded-sm bg-blue-300" />
          <span className="h-5 w-1.5 rounded-sm bg-[#1455d9]" />
        </div>
      </div>
    );
  }

  return (
    <div className="opportunity-icon relative flex h-10 w-10 items-center justify-center rounded-[12px] bg-indigo-50">
      <div className="relative h-5 w-6">
        <div className="absolute left-0 top-1 h-1 w-4 rounded-full bg-indigo-200" />
        <div className="absolute left-0 top-3 h-1 w-6 rounded-full bg-indigo-300" />
        <div className="absolute left-0 top-5 h-1 w-3 rounded-full bg-indigo-500" />
      </div>
    </div>
  );
}

/* =========================================================
   CUSTOMER JOURNEY
========================================================= */

function CustomerJourney() {
  const stages = [
    {
      number: "01",
      title: "Discover",
      description: "Search, social & paid visibility",
    },
    {
      number: "02",
      title: "Explore",
      description: "Services, solutions & useful content",
    },
    {
      number: "03",
      title: "Trust",
      description: "Proof, authority & credibility",
    },
    {
      number: "04",
      title: "Enquire",
      description: "Clear commercial next step",
    },
    {
      number: "05",
      title: "Convert",
      description: "Sales-ready opportunity",
    },
  ];

  return (
    <div className="relative mt-10">
      <div className="hidden lg:block">
        <div className="absolute left-[9%] right-[9%] top-[43px] h-px bg-blue-100" />

        <div
          className="journey-flow-dot absolute left-[9%] top-[40px] h-1.5 w-1.5 rounded-full bg-[#1455d9]"
          style={{ animationDelay: "0s" }}
        />

        <div
          className="journey-flow-dot absolute left-[9%] top-[40px] h-1.5 w-1.5 rounded-full bg-[#1455d9]"
          style={{ animationDelay: "1.1s" }}
        />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
        {stages.map((stage, index) => (
          <div
            key={stage.number}
            data-animate="card"
            data-delay={index + 1}
            className="journey-node relative rounded-[20px] border border-gray-200 bg-white p-5"
          >
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-bold tracking-[0.16em] text-[#1455d9]">
                {stage.number}
              </span>

              <span className="journey-dot h-2 w-2 rounded-full bg-[#1455d9]" />
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

export default function B2BMarketing() {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    document.title =
      "B2B Digital Marketing Services | Lead Generation & Growth | Akkurate";

    const description =
      "Grow B2B marketing businesses with industry-focused SEO, content, paid media, websites and conversion strategies from Akkurate Digital Solutions.";

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

        <section className="relative overflow-hidden bg-[#f7faff] px-5 py-12 sm:px-8 sm:py-16 lg:px-14 lg:py-26">

          <div className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-blue-100/60 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[320px] w-[320px] rounded-full bg-indigo-100/50 blur-3xl" />

          <div className="relative mx-auto w-full max-w-[1600px] px-2 sm:px-4 lg:px-8 xl:px-10">

            {/* Breadcrumb */}

            <div className="mb-7 flex flex-wrap items-center gap-2 text-[10px] font-medium text-gray-500 sm:text-[11px]">

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
                B2B Marketing
              </span>

            </div>

            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-14">

              {/* LEFT */}

              <div
                data-animate="left"
                className="max-w-[760px] pt-2 lg:pt-5"
              >

                <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1455d9] sm:text-[11px]">
                  B2B Digital Marketing
                </p>

                <h1
                  data-animate="center"
                  className="mt-4 m-0 max-w-[760px] text-[34px] font-bold leading-[1.06] tracking-[-0.04em] sm:text-[44px] md:text-[50px] lg:text-[30px]"
                >
                  Digital Marketing for B2B Marketing Businesses That Need
                  Better Visibility, Trust &amp; Leads
                </h1>

                <p className="mt-6 max-w-[680px] text-[14px] leading-7 text-gray-600 sm:text-[16px]">
                  B2B marketing customers have a specific buying journey.
                  Akkurate builds digital strategies around the questions,
                  comparisons, trust signals and conversion actions that matter
                  in this market.
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-3">

                  <Link
                    to="/contact"
                    className="inline-flex items-center rounded-full bg-[#073b91] px-6 py-3.5 text-[13px] font-bold text-white shadow-[0_10px_30px_rgba(7,59,145,.16)] transition duration-300 hover:-translate-y-1 hover:bg-[#052f75]"
                  >
                    Build My Industry Growth Strategy

                    <span className="ml-2">
                      →
                    </span>
                  </Link>

                  <span className="text-[10px] font-medium text-gray-400">
                    Lead • Qualification • Revenue
                  </span>

                </div>
              </div>

              {/* RIGHT — LEAD JOURNEY */}

              <div
                data-animate="right"
                className="relative flex items-center justify-center"
              >
                <B2BLeadJourney />
              </div>

            </div>
          </div>
        </section>

        {/* =====================================================
            BUSINESS PROBLEM
        ===================================================== */}

        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-10">

          <div className="mx-auto grid w-full max-w-[1400px] gap-10 px-2 sm:px-4 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 lg:px-8 xl:px-10">

            <div data-animate="left">

              <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
                The Business Problem
              </p>

              <h2
                data-animate="center"
                className="mt-4 m-0 text-[30px] font-bold leading-tight tracking-[-0.03em] sm:text-[36px]"
              >
                Why B2B Marketing Needs a Specialized Approach
              </h2>

            </div>

            <div data-animate="right">

              <p className="m-0 text-[14px] leading-7 text-gray-600 sm:text-[16px] sm:leading-8">
                A generic digital marketing package rarely reflects the way
                B2B marketing buyers search, compare and decide. The website
                should use industry language, answer relevant questions,
                demonstrate credible expertise and connect discovery channels
                to a clear commercial next step.
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
            PERFORMANCE — LEAD TO REVENUE FUNNEL
        ===================================================== */}

        <section className="bg-[#f7faff] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-10">

          <div className="mx-auto w-full max-w-[1400px] px-2 sm:px-4 lg:px-8 xl:px-10">

            <div className="grid items-center gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">

              {/* LEFT */}

              <div data-animate="left">

                <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
                  Industry Performance
                </p>

                <h2
                  data-animate="center"
                  className="mt-4 m-0 text-[30px] font-bold leading-tight tracking-[-0.03em] sm:text-[36px]"
                >
                  Lead-to-Revenue Funnel
                </h2>

                <p className="mt-5 max-w-[480px] text-[14px] leading-7 text-gray-600 sm:text-[15px] sm:leading-8">
                  B2B growth is not only about generating leads. A strong
                  digital system helps move potential demand through
                  qualification, sales opportunity and ultimately revenue.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3">

                  <div className="rounded-[16px] border border-blue-100 bg-white p-4">

                    <span className="text-[20px] text-[#1455d9]">
                      ↗
                    </span>

                    <p className="mt-3 m-0 text-[12px] font-bold text-[#101828]">
                      Generate Demand
                    </p>

                    <p className="mt-1 m-0 text-[10px] leading-5 text-gray-400">
                      Create qualified B2B visibility.
                    </p>

                  </div>

                  <div className="rounded-[16px] border border-blue-100 bg-white p-4">

                    <span className="text-[20px] text-[#1455d9]">
                      ◎
                    </span>

                    <p className="mt-3 m-0 text-[12px] font-bold text-[#101828]">
                      Drive Revenue
                    </p>

                    <p className="mt-1 m-0 text-[10px] leading-5 text-gray-400">
                      Connect demand to commercial action.
                    </p>

                  </div>

                </div>

              </div>

              {/* RIGHT FUNNEL */}

              <div data-animate="right">
                <LeadRevenueFunnel />
              </div>

            </div>
          </div>
        </section>

        {/* =====================================================
            DIGITAL OPPORTUNITIES
        ===================================================== */}

        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-10">

          <div className="mx-auto w-full max-w-[1500px] px-2 sm:px-4 lg:px-8 xl:px-10">

            <div data-animate="center" className="text-center">

              <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
                Digital Opportunities
              </p>

              <h2 className="mt-3 m-0 text-[30px] font-bold leading-tight tracking-[-0.03em] sm:text-[38px]">
                Key Digital Opportunities for B2B Marketing
              </h2>

              <p className="mx-auto mt-4 max-w-[700px] text-[13px] leading-7 text-gray-500">
                Build the digital system around how B2B customers discover,
                evaluate and choose a provider.
              </p>

            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

              {opportunities.map((item) => (

                <article
                  key={item.number}
                  data-animate="card"
                  data-delay={Number(item.number)}
                  className="opportunity-card group relative overflow-hidden rounded-[22px] border border-gray-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,.04)] transition-all duration-300 hover:-translate-y-2 hover:border-blue-100 hover:shadow-[0_20px_50px_rgba(15,23,42,.09)] sm:p-7"
                >

                  <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-blue-50 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

                  <div className="relative flex items-start justify-between">

                    <span className="text-[11px] font-bold tracking-[0.15em] text-[#1455d9]">
                      {item.number}
                    </span>

                    <OpportunityVisual type={item.visual} />

                  </div>

                  <h3 className="relative mt-7 m-0 text-[18px] font-bold leading-snug text-[#101828] sm:text-[20px]">
                    {item.title}
                  </h3>

                  <p className="relative mt-3 m-0 text-[13px] leading-6 text-gray-500 sm:text-[14px] sm:leading-7">
                    {item.description}
                  </p>

                  <div className="relative mt-6 flex items-center justify-between border-t border-gray-100 pt-4">

                    <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400">
                      Strategic Opportunity
                    </span>

                    <span className="text-[18px] text-gray-300 transition duration-300 group-hover:translate-x-1 group-hover:text-[#1455d9]">
                      →
                    </span>

                  </div>

                </article>

              ))}

            </div>
          </div>
        </section>

        {/* =====================================================
            CUSTOMER JOURNEY
        ===================================================== */}

        <section className="bg-[#f7faff] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-10">

          <div className="mx-auto w-full max-w-[1400px] px-2 sm:px-4 lg:px-8 xl:px-10">

            <div
              className="text-center"
              data-animate="center"
            >

              <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
                The B2B Customer Journey
              </p>

              <h2 className="mt-3 m-0 text-[30px] font-bold leading-tight tracking-[-0.03em] sm:text-[38px]">
                Turn Discovery Into Commercial Action
              </h2>

              <p className="mx-auto mt-4 max-w-[720px] text-[13px] leading-7 text-gray-500">
                Every channel should have a role in moving the right audience
                from first discovery to a meaningful commercial conversation.
              </p>

            </div>

            <CustomerJourney />

          </div>
        </section>

        {/* =====================================================
            RECOMMENDED STRATEGY
        ===================================================== */}

        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-10">

          <div className="mx-auto grid w-full max-w-[1400px] gap-10 px-2 sm:px-4 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16 lg:px-8 xl:px-10">

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
                A structured approach that connects B2B audience research,
                discovery, content, conversion and measurement.
              </p>

              <div className="mt-7 rounded-[18px] border border-blue-100 bg-[#f7faff] p-5">

                <p className="m-0 text-[9px] font-bold uppercase tracking-[0.16em] text-[#1455d9]">
                  Strategy Principle
                </p>

                <p className="mt-2 m-0 text-[13px] font-bold leading-6 text-[#101828]">
                  Start with the customer journey. Then choose the channels.
                </p>

              </div>

            </div>

            <div data-animate="right" className="space-y-3">

              {strategy.map((item) => (

                <div
                  key={item.number}
                  data-animate="card"
                  data-delay={Number(item.number)}
                  className="group flex gap-5 rounded-[18px] border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-md sm:p-6"
                >

                  <span className="shrink-0 pt-0.5 text-[11px] font-bold tracking-[0.14em] text-[#1455d9]">
                    {item.number}
                  </span>

                  <div className="flex-1">

                    <div className="flex items-center justify-between gap-4">

                      <h3 className="m-0 text-[15px] font-bold text-[#101828] sm:text-[17px]">
                        {item.title}
                      </h3>

                      <span className="text-gray-300 transition group-hover:translate-x-1 group-hover:text-[#1455d9]">
                        →
                      </span>

                    </div>

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

        <section className="relative overflow-hidden bg-[#101828] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-10">

          <div className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[360px] w-[360px] rounded-full bg-indigo-500/10 blur-3xl" />

          <div className="relative mx-auto grid w-full max-w-[1400px] gap-10 px-2 sm:px-4 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-16 lg:px-8 xl:px-10">

            <div data-animate="left">

              <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-300">
                Why Choose Akkurate
              </p>

              <h2
                data-animate="center"
                className="mt-4 m-0 text-[30px] font-bold leading-tight tracking-[-0.03em] text-white sm:text-[38px]"
              >
                Integrated Digital Growth for B2B Marketing
              </h2>

              <p className="mt-5 max-w-[500px] text-[14px] leading-7 text-gray-400">
                Connect strategy, search, content, paid media, web and creative
                into one customer-journey-first system.
              </p>

            </div>

            <div data-animate="right" className="grid gap-3 sm:grid-cols-2">

              {whyChoose.map((item, index) => (

                <div
                  key={item}
                  data-animate="card"
                  data-delay={index + 1}
                  className="group flex gap-3 rounded-[16px] border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]"
                >

                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-400/10 text-[11px] font-bold text-blue-300">
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

          <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-10 px-2 sm:px-4 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 lg:px-8 xl:px-10">

            <div
              data-animate="left"
              className="lg:sticky lg:top-28 lg:self-start"
            >

              <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1455d9] sm:text-[11px]">
                Frequently Asked Questions
              </p>

              <h2
                data-animate="center"
                className="mt-4 m-0 max-w-[450px] text-[30px] font-bold leading-tight tracking-[-0.03em] sm:text-[38px]"
              >
                B2B Marketing FAQs
              </h2>

              <p className="mt-5 max-w-[430px] text-[14px] leading-7 text-gray-600 sm:text-[15px]">
                Clear answers to common questions about industry-specific B2B
                marketing, channels, websites and performance.
              </p>

            </div>

            <div data-animate="right" className="space-y-3">

              {faqs.map((faq, index) => {

                const isOpen = openFaq === index;

                return (
                  <div
                    key={faq.question}
                    data-animate="card"
                    data-delay={index + 1}
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

        <section className="relative overflow-hidden bg-[#073b91] px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-10">

          <div className="pointer-events-none absolute -right-32 -top-32 h-[320px] w-[320px] rounded-full bg-white/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-32 -left-32 h-[280px] w-[280px] rounded-full bg-blue-300/10 blur-3xl" />

          <div
            data-animate="center"
            className="relative mx-auto max-w-[1050px] px-2 text-center sm:px-6 lg:px-8"
          >

            <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-200">
              Ready to Grow?
            </p>

            <h2 className="mt-3 m-0 text-[30px] font-bold leading-tight tracking-[-0.03em] text-white sm:text-[38px] lg:text-[40px]">
              Ready to grow your B2B marketing business online?
            </h2>

            <p className="mx-auto mt-4 max-w-[820px] text-[14px] leading-7 text-blue-100 sm:text-[15px]">
              Tell Akkurate what you sell, who you want to reach and what
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
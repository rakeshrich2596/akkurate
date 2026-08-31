import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

const industryData = {
  travel: {
    slug: "travel",
    focus: "Travel Digital Marketing",
    hero: "Digital Marketing for Travel Businesses That Need Better Visibility, Trust & Leads",
    intro:
      "Travel customers have a specific buying journey. Akkurate builds digital strategies around the questions, comparisons, inspiration and booking actions that matter in this market.",
    problemTitle: "Why Travel Marketing Needs a Specialized Approach",
    problem:
      "Travel customers rarely move directly from search to booking. They discover destinations, compare options, explore experiences, plan itineraries and then decide where to book. Akkurate maps this journey first and builds the right mix of SEO, AEO, GEO, paid media, website, content and branding around it.",
    opportunities: [
      {
        title: "Destination SEO",
        description:
          "Build visibility around destination searches and real travel customer intent.",
      },
      {
        title: "Travel Guides",
        description:
          "Create useful guides that answer genuine planning and comparison questions.",
      },
      {
        title: "Google Ads",
        description:
          "Reach relevant audiences when travel demand is high and intent is clear.",
      },
      {
        title: "Travel Content",
        description:
          "Build useful content that supports inspiration, discovery, trust and planning.",
      },
      {
        title: "Social Visual Content",
        description:
          "Use visual content to communicate destinations, experiences and travel stories.",
      },
      {
        title: "Booking Journeys",
        description:
          "Connect inspiration and discovery with clear enquiry, booking or purchase paths.",
      },
    ],
    finalCta:
      "Ready to grow your travel business online? ",
  },
};

const travelRoute = [
  {
    label: "Inspiration",
    icon: "✦",
    description: "Discover ideas",
  },
  {
    label: "Explore",
    icon: "📍",
    description: "View destinations",
  },
  {
    label: "Plan",
    icon: "🗺",
    description: "Build itinerary",
  },
  {
    label: "Book",
    icon: "🎫",
    description: "Confirm journey",
  },
  {
    label: "Travel",
    icon: "✈",
    description: "Start the trip",
  },
];

const travelChart = [
  {
    label: "Inspiration",
    value: 82,
  },
  {
    label: "Destination Views",
    value: 68,
  },
  {
    label: "Itinerary",
    value: 51,
  },
  {
    label: "Booking",
    value: 34,
  },
];

const strategy = [
  [
    "Industry & Audience Research",
    "Identify segments, buying triggers, search behavior, competitors, objections and decision criteria.",
  ],
  [
    "Positioning & Message",
    "Clarify what the business offers, who it serves, why it is different and what proof can support the claim.",
  ],
  [
    "Discovery",
    "Build search, social and paid visibility around high-value travel customer journeys.",
  ],
  [
    "Content & Authority",
    "Answer genuine travel questions through destination pages, guides, itineraries, case studies and useful resources.",
  ],
  [
    "Conversion",
    "Improve landing pages, forms, calls to action, trust elements and enquiry or booking paths.",
  ],
  [
    "Measurement",
    "Track qualified traffic, destination views, enquiries, bookings and other agreed business KPIs.",
  ],
];

const whyChoose = [
  "Integrated SEO, AEO, GEO, paid media, web and creative capabilities.",
  "Travel-specific content architecture.",
  "Customer-journey-first strategy.",
  "Clear internal linking between industry and service pages.",
  "Transparent measurement and continuous optimization.",
];

const faqs = (industry) => [
  [
    `Why should a ${industry.toLowerCase()} business use industry-specific digital marketing?`,
    "Industry-specific strategy allows the website and campaigns to reflect the language, buying process and trust requirements of the travel market.",
  ],
  [
    "Which digital channels should we invest in?",
    "There is no universal mix. Priorities should depend on audience, destination, competition, geography, offer, buying journey and measurable business value.",
  ],
  [
    "Can Akkurate manage multiple channels?",
    "Yes. SEO, AEO, GEO, paid advertising, social media, websites, content and branding can be coordinated when the business needs an integrated program.",
  ],
  [
    "Can you work with our existing website?",
    "Yes. We can audit the current website and recommend improvements before considering a full rebuild.",
  ],
  [
    "How do you measure travel marketing performance?",
    "We can measure relevant indicators such as destination traffic, engagement, itinerary interactions, enquiries, leads, bookings and conversion rate.",
  ],
  [
    "Do you guarantee leads or rankings?",
    "No. We focus on strategy, execution, testing and transparent measurement rather than guaranteeing outcomes controlled by platforms and market conditions.",
  ],
];

export default function IndustryPage() {
  const data = industryData.travel;

  const [openFaq, setOpenFaq] = useState(null);
  const [activeRoute, setActiveRoute] = useState(0);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);

  /*
    Automatically move the active route point.
  */
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveRoute((current) => {
        return (current + 1) % travelRoute.length;
      });
    }, 1800);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-white text-[#151b2c]">
      {/* =========================================================
          HERO
          TRAVEL JOURNEY ROUTE
          ========================================================= */}
      <section className="px-5 py-14 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
        <div className="mx-auto w-full max-w-[1500px]">
          <div className="grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
            {/* LEFT CONTENT */}
            <div className="animate-[slideInLeft_.7s_ease-out_both]">
              {/* BREADCRUMB */}
              <div className="mb-5 flex flex-wrap items-center gap-2 text-[10px] font-medium text-gray-400">
                <Link
                  to="/"
                  className="transition-colors duration-200 hover:text-[#1455d9]"
                >
                  Home
                </Link>

                <span>/</span>

                <Link
                  to="/industries"
                  className="transition-colors duration-200 hover:text-[#1455d9]"
                >
                  Industries
                </Link>

                <span>/</span>

                <span className="font-semibold text-[#1455d9]">Travel</span>
              </div>

              <p className="mb-5 mt-25 text-[11px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
                {data.focus}
              </p>

              <h1 className="max-w-[680px] text-4xl font-bold leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-3xl">
                {data.hero}
              </h1>

              <p className="mt-7 max-w-[650px] text-base leading-7 text-gray-600 sm:text-lg">
                {data.intro}
              </p>

              <Link
                to="/contact"
                className="mt-8 inline-flex items-center rounded-full bg-[#073b91] px-7 py-3.5 text-sm font-bold text-white shadow-[0_10px_30px_rgba(7,59,145,.18)] transition duration-300 hover:-translate-y-1 hover:bg-[#052f75]"
              >
                Build My Industry Growth Strategy
                <span className="ml-2">→</span>
              </Link>
            </div>

            {/* RIGHT — MOVING TRAVEL ROUTE */}
            <div className="animate-[slideInRight_.7s_ease-out_both]">
              <div className="relative mx-auto max-w-[680px]">
                <div className="absolute -inset-8 rounded-[45px] bg-[#1455d9]/10 blur-3xl" />

                <div className="relative overflow-hidden rounded-[32px] border border-blue-100 bg-white p-5 shadow-[0_25px_80px_rgba(7,59,145,.10)] sm:p-7">
                  {/* HEADER */}
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="m-0 text-[10px] font-bold uppercase tracking-[0.18em] text-[#1455d9]">
                        Travel Journey
                      </p>

                      <p className="mt-1 m-0 text-[12px] text-gray-500">
                        From inspiration to the actual trip
                      </p>
                    </div>

                    <span className="rounded-full bg-green-50 px-3 py-1.5 text-[9px] font-bold text-green-700">
                      Journey Flow
                    </span>
                  </div>

                  {/* ROUTE MAP */}
                  <div className="relative mt-8 rounded-[26px] bg-gradient-to-br from-[#f5f8ff] to-[#eef5ff] px-4 py-8 sm:px-7">
                    {/* DECORATIVE MAP LINES */}
                    <div className="pointer-events-none absolute inset-0 opacity-50">
                      <div className="absolute left-[8%] top-[28%] h-px w-[84%] bg-blue-100" />

                      <div className="absolute left-[20%] top-[58%] h-px w-[55%] rotate-[-8deg] bg-blue-100" />

                      <div className="absolute right-[12%] top-[20%] h-24 w-24 rounded-full border border-blue-100" />

                      <div className="absolute bottom-[12%] left-[8%] h-20 w-20 rounded-full border border-blue-100" />
                    </div>

                    {/* ROUTE */}
                    <div className="relative z-10">
                      {/* CONNECTING LINE */}
                      <div className="absolute left-[10%] right-[10%] top-[43px] hidden h-[3px] rounded-full bg-blue-100 sm:block">
                        <div className="h-full w-full rounded-full bg-gradient-to-r from-[#1455d9] via-[#4f83df] to-[#1455d9] opacity-50" />
                      </div>

                      {/* MOVING DOT */}
                      <div
                        className="absolute top-[37px] z-30 hidden h-[15px] w-[15px] rounded-full border-4 border-white bg-[#1455d9] shadow-[0_0_0_5px_rgba(20,85,217,.12),0_0_20px_rgba(20,85,217,.35)] sm:block"
                        style={{
                          left: `calc(10% + ${activeRoute * 20}% - 7px)`,
                          transition: "left 700ms cubic-bezier(.4,0,.2,1)",
                        }}
                      />

                      {/* ROUTE ITEMS */}
                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-5 sm:gap-2">
                        {travelRoute.map((step, index) => {
                          const isActive = activeRoute === index;
                          const isCompleted = activeRoute > index;

                          return (
                            <button
                              key={step.label}
                              type="button"
                              onClick={() => setActiveRoute(index)}
                              className="group relative flex flex-col items-center text-center"
                            >
                              {/* MOBILE CONNECTOR */}
                              {index > 0 && (
                                <div className="absolute left-1/2 top-[-20px] h-5 w-px -translate-x-1/2 bg-blue-100 sm:hidden" />
                              )}

                              {/* ICON */}
                              <div
                                className={`relative z-20 flex h-[58px] w-[58px] items-center justify-center rounded-full border-2 bg-white text-xl shadow-sm transition-all duration-500 ${
                                  isActive
                                    ? "scale-110 border-[#1455d9] shadow-[0_10px_25px_rgba(20,85,217,.20)]"
                                    : isCompleted
                                      ? "border-blue-200 bg-blue-50"
                                      : "border-gray-200 group-hover:-translate-y-1 group-hover:border-blue-200"
                                }`}
                              >
                                {step.icon}
                              </div>

                              {/* LABEL */}
                              <p
                                className={`mt-4 text-[11px] font-bold transition-colors duration-300 ${
                                  isActive ? "text-[#073b91]" : "text-[#26344f]"
                                }`}
                              >
                                {step.label}
                              </p>

                              <p className="mt-1 text-[9px] text-gray-400">
                                {step.description}
                              </p>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* ACTIVE JOURNEY CARD */}
                  <div className="mt-4 rounded-[20px] border border-blue-100 bg-[#f8fbff] p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#073b91] text-lg text-white shadow-sm">
                          {travelRoute[activeRoute].icon}
                        </div>

                        <div>
                          <p className="m-0 text-[9px] font-bold uppercase tracking-[0.14em] text-[#1455d9]">
                            Current Stage
                          </p>

                          <p className="mt-0.5 m-0 text-[13px] font-bold text-[#101828]">
                            {travelRoute[activeRoute].label}
                          </p>
                        </div>
                      </div>

                      <span className="text-[10px] font-semibold text-gray-400">
                        {activeRoute + 1} / {travelRoute.length}
                      </span>
                    </div>

                    {/* PROGRESS */}
                    <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-blue-100">
                      <div
                        className="h-full rounded-full bg-[#1455d9] transition-all duration-700"
                        style={{
                          width: `${((activeRoute + 1) / travelRoute.length) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BUSINESS PROBLEM
          ========================================================= */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div className="animate-[slideInLeft_.7s_ease-out_both]">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
              The Business Problem
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              {data.problemTitle}
            </h2>
          </div>

          <div className="animate-[slideInRight_.7s_ease-out_both]">
            <p className="text-base leading-8 text-gray-600 sm:text-lg">
              {data.problem}
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          DIGITAL OPPORTUNITIES
          ========================================================= */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center animate-[scaleOut_.7s_ease-out_both]">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
              Digital Opportunities
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Key Digital Opportunities for Travel
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
              Build visibility, inspire travellers, support planning and create
              clearer paths toward enquiries and bookings.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {data.opportunities.map((item, index) => (
              <article
                key={item.title}
                className="animate-[cardIn_.65s_ease-out_both] rounded-3xl border border-gray-100 bg-white p-7 shadow-[0_15px_50px_rgba(0,0,0,.05)] transition duration-300 hover:-translate-y-2 hover:border-blue-100 hover:shadow-[0_25px_60px_rgba(7,59,145,.10)]"
                style={{
                  animationDelay: `${index * 70}ms`,
                }}
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef4ff] text-sm font-bold text-[#1455d9]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="text-xl font-bold">{item.title}</h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PERFORMANCE
          TRAVEL INTEREST LINE CHART
          ========================================================= */}
      <section className="bg-[#f7faff] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid items-center gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
            {/* LEFT */}
            <div className="animate-[slideInLeft_.7s_ease-out_both]">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
                Performance
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.03em] sm:text-4xl">
                Travel Interest Line Chart
              </h2>

              <p className="mt-5 max-w-[500px] text-base leading-8 text-gray-600 sm:text-lg">
                Illustrative journey-interest data showing how traveller
                engagement can move from inspiration through destination
                discovery and itinerary planning toward booking.
              </p>

              <div className="mt-7 rounded-[20px] border border-blue-100 bg-white p-5 shadow-sm">
                <p className="m-0 text-[9px] font-bold uppercase tracking-[0.15em] text-[#1455d9]">
                  Illustrative data only
                </p>

                <p className="mt-2 text-[12px] leading-6 text-gray-500">
                  Replace these values with real client analytics when
                  available.
                </p>
              </div>
            </div>

            {/* RIGHT CHART */}
            <div className="animate-[slideInRight_.7s_ease-out_both] rounded-[28px] border border-blue-100 bg-white p-6 shadow-[0_20px_60px_rgba(7,59,145,.07)] sm:p-8">
              {/* CHART HEADER */}
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="m-0 text-[12px] font-bold text-[#101828]">
                    Traveller Interest
                  </p>

                  <p className="mt-1 m-0 text-[10px] text-gray-400">
                    Inspiration → Destination Views → Itinerary → Booking
                  </p>
                </div>

                <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[9px] font-bold text-[#1455d9]">
                  Sample
                </span>
              </div>

              {/* CHART */}
              <div className="mt-8">
                {/* GRID */}
                <div className="relative h-[250px]">
                  <div className="absolute inset-0 flex flex-col justify-between">
                    {[100, 75, 50, 25, 0].map((value) => (
                      <div key={value} className="flex items-center gap-3">
                        <span className="w-7 text-right text-[9px] text-gray-400">
                          {value}
                        </span>

                        <div className="h-px flex-1 bg-gray-100" />
                      </div>
                    ))}
                  </div>

                  {/* SVG LINE */}
                  <svg
                    viewBox="0 0 600 220"
                    preserveAspectRatio="none"
                    className="absolute left-10 right-0 top-0 h-[220px] w-[calc(100%-40px)] overflow-visible"
                  >
                    {/* AREA */}
                    <path
                      d="M 20 40 L 200 78 L 390 112 L 580 150 L 580 220 L 20 220 Z"
                      fill="rgba(20,85,217,0.06)"
                    />

                    {/* LINE */}
                    <path
                      d="M 20 40 L 200 78 L 390 112 L 580 150"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#1455d9] animate-[travelLineDraw_1.4s_ease-out_both]"
                    />

                    {/* POINTS */}
                    {[
                      [20, 40],
                      [200, 78],
                      [390, 112],
                      [580, 150],
                    ].map(([cx, cy], index) => (
                      <g key={`${cx}-${cy}`}>
                        <circle
                          cx={cx}
                          cy={cy}
                          r="9"
                          fill="white"
                          stroke="currentColor"
                          strokeWidth="3"
                          className="text-[#1455d9]"
                        />

                        <circle
                          cx={cx}
                          cy={cy}
                          r="4"
                          fill="currentColor"
                          className="text-[#1455d9] animate-[chartPulse_2s_ease-in-out_infinite]"
                          style={{
                            animationDelay: `${index * 180}ms`,
                          }}
                        />
                      </g>
                    ))}
                  </svg>
                </div>

                {/* X AXIS LABELS */}
                <div className="ml-10 mt-3 grid grid-cols-4 gap-2">
                  {travelChart.map((item) => (
                    <div key={item.label} className="text-center">
                      <p className="m-0 text-[9px] font-bold leading-4 text-[#344054]">
                        {item.label}
                      </p>

                      <p className="mt-1 m-0 text-[10px] font-bold text-[#1455d9]">
                        {item.value}%
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CHART SUMMARY */}
              <div className="mt-6 grid grid-cols-3 gap-2">
                <div className="rounded-xl bg-[#f8fbff] px-3 py-3">
                  <p className="m-0 text-[8px] uppercase tracking-[0.1em] text-gray-400">
                    Discovery
                  </p>
                  <p className="mt-1 text-[12px] font-bold text-[#101828]">
                    82%
                  </p>
                </div>

                <div className="rounded-xl bg-[#f8fbff] px-3 py-3">
                  <p className="m-0 text-[8px] uppercase tracking-[0.1em] text-gray-400">
                    Planning
                  </p>
                  <p className="mt-1 text-[12px] font-bold text-[#101828]">
                    51%
                  </p>
                </div>

                <div className="rounded-xl bg-[#073b91] px-3 py-3 text-white">
                  <p className="m-0 text-[8px] uppercase tracking-[0.1em] text-blue-200">
                    Booking
                  </p>
                  <p className="mt-1 text-[12px] font-bold">34%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STRATEGY
          ========================================================= */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
            <div className="animate-[slideInLeft_.7s_ease-out_both]">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
                Our Approach
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                Recommended Strategy
              </h2>

              <p className="mt-5 max-w-md text-base leading-7 text-gray-600">
                A customer-journey-first framework that connects inspiration,
                discovery, planning, authority and booking.
              </p>
            </div>

            <div className="space-y-4 animate-[slideInRight_.7s_ease-out_both]">
              {strategy.map(([title, description], index) => (
                <div
                  key={title}
                  className="flex gap-5 rounded-2xl border border-gray-100 bg-[#fafcff] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <span className="shrink-0 text-sm font-bold text-[#1455d9]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="font-bold">{title}</h3>

                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY AKKURATE
          ========================================================= */}
      <section className="bg-[#101828] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-16">
          {/* Left Content */}

          <div className="animate-[slideInLeft_.7s_ease-out_both]">
            <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-300">
              Why Choose Akkurate
            </p>

            <h2 className="mt-4 text-[30px] font-bold leading-tight tracking-[-0.03em] text-white sm:text-[38px]">
              Integrated digital growth, built around your industry.
            </h2>
          </div>

          {/* Right Content */}

          <div className="grid gap-3 sm:grid-cols-2 animate-[slideInRight_.7s_ease-out_both]">
            {whyChoose.map((item, index) => (
              <div
                key={item}
                className="flex gap-3 rounded-[16px] border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07] hover:shadow-[0_15px_35px_rgba(0,0,0,.12)]"
                style={{
                  animationDelay: `${index * 80}ms`,
                }}
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

      {/* =========================================================
          FAQ
          ========================================================= */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[.65fr_1.35fr]">
          <div className="animate-[slideInLeft_.7s_ease-out_both]">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
              Frequently Asked Questions
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Questions, answered clearly.
            </h2>
          </div>

          <div className="space-y-3 animate-[slideInRight_.7s_ease-out_both]">
            {faqs(data.slug.replaceAll("-", " ")).map(
              ([question, answer], index) => (
                <div
                  key={question}
                  className="overflow-hidden rounded-2xl border border-gray-100"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="flex w-full items-center justify-between gap-5 p-5 text-left transition hover:bg-gray-50"
                  >
                    <span className="font-semibold">{question}</span>

                    <span className="text-xl text-[#1455d9]">
                      {openFaq === index ? "−" : "+"}
                    </span>
                  </button>

                  {openFaq === index && (
                    <div className="border-t border-gray-100 px-5 pb-5 pt-4">
                      <p className="text-sm leading-7 text-gray-600">
                        {answer}
                      </p>
                    </div>
                  )}
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
          ========================================================= */}
      <section className="px-5 pb-16 pt-8 sm:px-8 sm:pb-20 lg:px-14 lg:pb-24">
        <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[35px] bg-[#073b91] px-8 py-10 text-center text-white sm:px-12 lg:px-20 lg:py-10 animate-[scaleOut_.7s_ease-out_both]">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60">
            Let’s Build the Right Strategy
          </p>

          <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-bold leading-tight sm:text-4xl lg:text-4xl">
            {data.finalCta}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
            Tell Akkurate what you offer, who you want to reach and what outcome
            matters most.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#073b91] transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            Contact Akkurate →
          </Link>
        </div>
      </section>
    </div>
  );
}

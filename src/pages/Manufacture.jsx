import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

/* =========================================================
   MANUFACTURING DATA
   ========================================================= */

const opportunities = [
  {
    number: "01",
    title: "B2B Technical SEO",
    description:
      "Build search visibility around manufacturing services, products, capabilities and high-intent commercial searches.",
  },
  {
    number: "02",
    title: "Capability Pages",
    description:
      "Create clear pages that explain manufacturing capabilities, processes, specifications and areas of expertise.",
  },
  {
    number: "03",
    title: "LinkedIn & Google Ads",
    description:
      "Reach relevant decision-makers and high-intent buyers through targeted paid campaigns.",
  },
  {
    number: "04",
    title: "Technical Content",
    description:
      "Answer genuine technical questions and build authority with useful manufacturing-focused content.",
  },
  {
    number: "05",
    title: "Lead-Generation Websites",
    description:
      "Build conversion-focused websites that turn technical interest into qualified enquiries.",
  },
  {
    number: "06",
    title: "Sales Enquiry Journeys",
    description:
      "Connect product discovery, specifications, quotations and enquiry actions into a clearer digital journey.",
  },
];

/* =========================================================
   MANUFACTURING WORKFLOW
   ========================================================= */

const productionWorkflow = [
  {
    number: "01",
    label: "Enquiry",
    icon: "⌕",
    description: "Customer requirement",
  },
  {
    number: "02",
    label: "Specification",
    icon: "◇",
    description: "Technical details",
  },
  {
    number: "03",
    label: "Quotation",
    icon: "▤",
    description: "Commercial scope",
  },
  {
    number: "04",
    label: "Production",
    icon: "⚙",
    description: "Manufacturing",
  },
  {
    number: "05",
    label: "Order",
    icon: "✓",
    description: "Order confirmed",
  },
];

/* =========================================================
   PERFORMANCE DATA
   ILLUSTRATIVE DATA ONLY
   ========================================================= */

const manufacturingPerformance = [
  {
    month: "Jan",
    leads: 42,
    orders: 18,
  },
  {
    month: "Feb",
    leads: 55,
    orders: 24,
  },
  {
    month: "Mar",
    leads: 68,
    orders: 31,
  },
  {
    month: "Apr",
    leads: 61,
    orders: 36,
  },
  {
    month: "May",
    leads: 78,
    orders: 43,
  },
  {
    month: "Jun",
    leads: 92,
    orders: 51,
  },
];

/* =========================================================
   STRATEGY
   ========================================================= */

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
      "Build search, local, social and paid visibility around high-value customer journeys.",
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
      "Improve landing pages, forms, calls to action, trust elements and enquiry journeys.",
  },
  {
    number: "06",
    title: "Measurement",
    description:
      "Track qualified traffic, leads, enquiries, conversions and other agreed business KPIs.",
  },
];

/* =========================================================
   WHY AKKURATE
   ========================================================= */

const whyChoose = [
  "Integrated SEO, AEO, GEO, paid media, web and creative capabilities.",
  "Industry-specific content architecture.",
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
      "Why should a manufacturing business use industry-specific digital marketing?",
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
    question: "How do you measure manufacturing marketing performance?",
    answer:
      "We agree on business-relevant KPIs such as qualified traffic, enquiries, leads, conversion rate, quotation requests, orders or other measurable outcomes.",
  },
  {
    question: "Do you guarantee leads or rankings?",
    answer:
      "No. We focus on strategy, execution, testing and transparent measurement rather than guaranteeing outcomes controlled by platforms and market conditions.",
  },
];

/* =========================================================
   MAIN COMPONENT
   ========================================================= */

export default function Manufacture() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeWorkflow, setActiveWorkflow] = useState(0);
  const [activeBar, setActiveBar] = useState(null);

  /* =========================================================
     META
     ========================================================= */

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });

    document.title =
      "Manufacturing Digital Marketing Services | B2B SEO & Lead Generation | Akkurate";

    const description =
      "Grow manufacturing businesses with industry-focused SEO, content, paid media, websites and conversion strategies from Akkurate Digital Solutions.";

    let meta = document.querySelector(
      'meta[name="description"]'
    );

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.setAttribute("content", description);
  }, []);

  /* =========================================================
     AUTO WORKFLOW ANIMATION
     ========================================================= */

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveWorkflow((current) => {
        return (current + 1) % productionWorkflow.length;
      });
    }, 1800);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full overflow-hidden bg-white text-[#101828]">

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="relative overflow-hidden bg-[#f5f8fc] px-5 py-14 sm:px-8 sm:py-20 lg:px-14 lg:py-24">

        {/* Background system grid */}

        <div className="manufacture-grid pointer-events-none absolute inset-0 opacity-60" />

        {/* Decorative factory glow */}

        <div className="pointer-events-none absolute -right-48 -top-48 h-[520px] w-[520px] rounded-full bg-blue-100/70 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-48 -left-48 h-[420px] w-[420px] rounded-full bg-slate-200/70 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1500px]">

          {/* Breadcrumb */}

          <div className="mb-8 flex flex-wrap items-center gap-2 text-[10px] font-medium text-gray-400 sm:text-[11px]">

            <Link
              to="/"
              className="transition hover:text-[#1455d9]"
            >
              Home
            </Link>

            <span>/</span>

            <span>Industries</span>

            <span>/</span>

            <span className="font-semibold text-[#1455d9]">
              Manufacturing
            </span>

          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">

            {/* =================================================
                HERO LEFT
                ================================================= */}

            <div className="animate-[manufactureLeft_.7s_ease-out_both]">

              <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1455d9] sm:text-[11px]">
                Manufacturing Digital Marketing
              </p>

              <h1 className="mt-4 max-w-[720px] text-[35px] font-bold leading-[1.06] tracking-[-0.04em] sm:text-[45px] lg:text-[30px]">
                Digital Marketing for Manufacturing Businesses That Need Better Visibility, Trust & Leads
              </h1>

              <p className="mt-6 max-w-[650px] text-[14px] leading-7 text-gray-600 sm:text-[16px] sm:leading-8">
                Manufacturing customers have a specific buying journey.
                Akkurate builds digital strategies around the questions,
                comparisons, trust signals and conversion actions that matter
                in this market.
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

            {/* =================================================
                HERO RIGHT — FACTORY NETWORK
                ================================================= */}

            <div className="relative animate-[manufactureRight_.7s_ease-out_both]">

              <div className="absolute -inset-8 rounded-[45px] bg-[#1455d9]/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-[30px] border border-blue-100 bg-white p-4 shadow-[0_25px_80px_rgba(15,23,42,.10)] sm:p-6">

                {/* Header */}

                <div className="flex items-center justify-between gap-3">

                  <div>

                    <p className="m-0 text-[10px] font-bold uppercase tracking-[0.18em] text-[#1455d9]">
                      Production Network
                    </p>

                    <p className="mt-1 m-0 text-[11px] text-gray-400">
                      From enquiry to confirmed order
                    </p>

                  </div>

                  <span className="flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1.5 text-[9px] font-bold text-green-700">

                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />

                    System Active

                  </span>

                </div>

                {/* =================================================
                    FACTORY NETWORK
                    ================================================= */}

                <div className="relative mt-6 overflow-hidden rounded-[25px] bg-[#f6f9fd] p-4 sm:p-6">

                  {/* Network grid */}

                  <div className="manufacture-network-grid pointer-events-none absolute inset-0 opacity-70" />

                  {/* Moving network pulse */}

                  <div className="manufacture-network-pulse pointer-events-none absolute left-[8%] top-[50%] z-20" />

                  {/* Desktop connection line */}

                  <div className="pointer-events-none absolute left-[10%] right-[10%] top-[74px] hidden h-px bg-blue-100 sm:block" />

                  {/* Active connection */}

                  <div
                    className="manufacture-active-line pointer-events-none absolute left-[10%] top-[73px] hidden h-[3px] rounded-full bg-[#1455d9] transition-all duration-700 sm:block"
                    style={{
                      width: `${activeWorkflow * 20}%`,
                    }}
                  />

                  {/* Workflow */}

                  <div className="relative z-10 grid gap-3 sm:grid-cols-5 sm:gap-2">

                    {productionWorkflow.map(
                      (step, index) => {

                        const isActive =
                          activeWorkflow === index;

                        const isCompleted =
                          activeWorkflow > index;

                        return (
                          <button
                            key={step.label}
                            type="button"
                            onClick={() =>
                              setActiveWorkflow(index)
                            }
                            className="group relative flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-3 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-md sm:flex-col sm:items-center sm:bg-transparent sm:p-2 sm:text-center sm:shadow-none"
                          >

                            {/* Node */}

                            <span
                              className={`relative z-10 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl border text-[17px] transition-all duration-500 ${
                                isActive
                                  ? "scale-110 border-[#1455d9] bg-[#073b91] text-white shadow-[0_12px_30px_rgba(20,85,217,.25)]"
                                  : isCompleted
                                    ? "border-blue-100 bg-blue-50 text-[#1455d9]"
                                    : "border-gray-200 bg-white text-gray-400"
                              }`}
                            >
                              {step.icon}

                              {/* Node pulse */}

                              {isActive && (
                                <span className="manufacture-node-ring absolute inset-[-6px] rounded-[18px] border border-[#1455d9]/30" />
                              )}

                            </span>

                            {/* Text */}

                            <span className="min-w-0">

                              <span
                                className={`block text-[10px] font-bold ${
                                  isActive
                                    ? "text-[#1455d9]"
                                    : "text-[#344054]"
                                }`}
                              >
                                {step.label}
                              </span>

                              <span className="mt-1 block text-[8px] leading-4 text-gray-400">
                                {step.description}
                              </span>

                            </span>

                          </button>
                        );
                      }
                    )}

                  </div>

                  {/* Current system status */}

                  <div className="relative z-10 mt-5 flex items-center justify-between rounded-[17px] border border-blue-100 bg-white px-4 py-3 shadow-sm">

                    <div className="flex items-center gap-3">

                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-[12px] text-[#1455d9]">
                        {productionWorkflow[activeWorkflow].icon}
                      </div>

                      <div>

                        <p className="m-0 text-[8px] font-bold uppercase tracking-[0.12em] text-gray-400">
                          Current System Stage
                        </p>

                        <p className="mt-0.5 m-0 text-[11px] font-bold text-[#101828]">
                          {productionWorkflow[activeWorkflow].label}
                        </p>

                      </div>

                    </div>

                    <span className="text-[9px] font-bold text-[#1455d9]">
                      {String(activeWorkflow + 1).padStart(
                        2,
                        "0"
                      )}{" "}
                      / 05
                    </span>

                  </div>

                </div>

                {/* Factory status cards */}

                <div className="mt-4 grid grid-cols-3 gap-2">

                  <div className="rounded-[15px] bg-[#f8fafc] p-3">

                    <p className="m-0 text-[8px] uppercase tracking-wide text-gray-400">
                      Input
                    </p>

                    <p className="mt-1 text-[11px] font-bold text-[#101828]">
                      Enquiry
                    </p>

                  </div>

                  <div className="rounded-[15px] bg-[#f8fafc] p-3">

                    <p className="m-0 text-[8px] uppercase tracking-wide text-gray-400">
                      Process
                    </p>

                    <p className="mt-1 text-[11px] font-bold text-[#101828]">
                      Production
                    </p>

                  </div>

                  <div className="rounded-[15px] bg-[#073b91] p-3 text-white">

                    <p className="m-0 text-[8px] uppercase tracking-wide text-blue-200">
                      Output
                    </p>

                    <p className="mt-1 text-[11px] font-bold">
                      Order
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          BUSINESS PROBLEM
          ===================================================== */}

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">

        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">

          <div className="animate-[manufactureLeft_.7s_ease-out_both]">

            <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
              The Business Problem
            </p>

            <h2 className="mt-4 text-[30px] font-bold leading-tight tracking-[-0.03em] sm:text-[30px]">
              Why Manufacturing Marketing Needs a Specialized Approach
            </h2>

          </div>

          <div className="animate-[manufactureRight_.7s_ease-out_both]">

            <p className="m-0 text-[14px] leading-7 text-gray-600 sm:text-[16px] sm:leading-8">
              A generic digital marketing package rarely reflects the way
              manufacturing buyers search, compare and decide. The website
              should use industry language, answer relevant questions,
              demonstrate credible expertise and connect discovery channels to
              a clear commercial next step.
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

      <section className="bg-[#f7faff] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">

        <div className="mx-auto max-w-[1500px]">

          <div className="text-center animate-[manufactureUp_.7s_ease-out_both]">

            <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
              Digital Opportunities
            </p>

            <h2 className="mt-3 text-[30px] font-bold leading-tight tracking-[-0.03em] sm:text-[38px]">
              Key Digital Opportunities for Manufacturing
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-7 text-gray-500">
              Build a digital system that connects technical expertise,
              product discovery, buyer trust and sales enquiries.
            </p>

          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {opportunities.map((item, index) => (

              <article
                key={item.number}
                className="manufacture-card group rounded-[22px] border border-gray-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,.04)] transition-all duration-300 hover:-translate-y-2 hover:border-blue-100 hover:shadow-[0_20px_50px_rgba(15,23,42,.08)]"
                style={{
                  animationDelay: `${index * 80}ms`,
                }}
              >

                <div className="flex items-start justify-between">

                  <span className="text-[11px] font-bold tracking-[0.15em] text-[#1455d9]">
                    {item.number}
                  </span>

                  <span className="text-[18px] text-gray-300 transition duration-300 group-hover:-translate-y-1 group-hover:text-[#1455d9]">
                    ↗
                  </span>

                </div>

                <h3 className="mt-7 text-[18px] font-bold leading-snug text-[#101828] sm:text-[20px]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-gray-500 sm:text-[14px] sm:leading-7">
                  {item.description}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          PERFORMANCE
          MANUFACTURING LEAD / ORDER BAR CHART
          ===================================================== */}

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">

        <div className="mx-auto max-w-[1400px]">

          <div className="grid items-center gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">

            {/* LEFT CONTENT */}

            <div className="animate-[manufactureLeft_.7s_ease-out_both]">

              <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
                Performance
              </p>

              <h2 className="mt-4 text-[30px] font-bold leading-tight tracking-[-0.03em] sm:text-[38px]">
                Manufacturing Lead / Order Performance
              </h2>

              <p className="mt-5 text-[14px] leading-7 text-gray-600 sm:text-[16px] sm:leading-8">
                Manufacturing marketing should connect digital demand with
                meaningful commercial actions such as qualified leads,
                quotation requests and confirmed orders.
              </p>

              {/* Metrics */}

              <div className="mt-7 grid grid-cols-2 gap-3">

                <div className="rounded-[18px] border border-gray-100 bg-[#f8fbff] p-4">

                  <p className="m-0 text-[9px] font-bold uppercase tracking-[0.12em] text-gray-400">
                    Sample Leads
                  </p>

                  <p className="mt-2 text-2xl font-bold text-[#101828]">
                    92
                  </p>

                  <p className="mt-1 text-[9px] font-semibold text-green-600">
                    +18% example
                  </p>

                </div>

                <div className="rounded-[18px] bg-[#073b91] p-4 text-white">

                  <p className="m-0 text-[9px] font-bold uppercase tracking-[0.12em] text-blue-200">
                    Sample Orders
                  </p>

                  <p className="mt-2 text-2xl font-bold">
                    51
                  </p>

                  <p className="mt-1 text-[9px] font-semibold text-blue-200">
                    +16% example
                  </p>

                </div>

              </div>

              <div className="mt-6 rounded-[18px] border border-blue-100 bg-[#f8fbff] p-4">

                <p className="m-0 text-[9px] font-bold uppercase tracking-[0.14em] text-[#1455d9]">
                  Illustrative data only
                </p>

                <p className="mt-2 text-[12px] leading-6 text-gray-500">
                  The chart uses sample values for visual presentation. Replace
                  these with verified client analytics when available.
                </p>

              </div>

            </div>

            {/* RIGHT CHART */}

            <div className="animate-[manufactureRight_.7s_ease-out_both]">

              <div className="relative overflow-hidden rounded-[30px] border border-gray-100 bg-white p-5 shadow-[0_25px_70px_rgba(15,23,42,.08)] sm:p-7">

                {/* Chart Header */}

                <div className="flex items-center justify-between gap-4">

                  <div>

                    <p className="m-0 text-[12px] font-bold text-[#101828]">
                      Leads & Orders
                    </p>

                    <p className="mt-1 m-0 text-[10px] text-gray-400">
                      Monthly illustrative performance
                    </p>

                  </div>

                  <div className="flex items-center gap-4">

                    <div className="flex items-center gap-1.5">

                      <span className="h-2 w-2 rounded-full bg-[#1455d9]" />

                      <span className="text-[9px] font-medium text-gray-500">
                        Leads
                      </span>

                    </div>

                    <div className="flex items-center gap-1.5">

                      <span className="h-2 w-2 rounded-full bg-[#073b91]" />

                      <span className="text-[9px] font-medium text-gray-500">
                        Orders
                      </span>

                    </div>

                  </div>

                </div>

                {/* Chart */}

                <div className="relative mt-8 h-[310px]">

                  {/* Horizontal grid */}

                  <div className="pointer-events-none absolute inset-0 flex flex-col justify-between">

                    {[100, 75, 50, 25, 0].map(
                      (value) => (

                        <div
                          key={value}
                          className="flex items-center gap-3"
                        >

                          <span className="w-7 text-right text-[8px] text-gray-300">
                            {value}
                          </span>

                          <div className="h-px flex-1 bg-gray-100" />

                        </div>

                      )
                    )}

                  </div>

                  {/* Bars */}

                  <div className="absolute inset-x-0 bottom-0 left-[40px] top-0 flex items-end justify-between gap-2 px-1 sm:gap-4 sm:px-4">

                    {manufacturingPerformance.map(
                      (item, index) => {

                        const leadsHeight =
                          `${item.leads}%`;

                        const ordersHeight =
                          `${item.orders}%`;

                        const isActive =
                          activeBar === index;

                        return (
                          <button
                            key={item.month}
                            type="button"
                            onMouseEnter={() =>
                              setActiveBar(index)
                            }
                            onMouseLeave={() =>
                              setActiveBar(null)
                            }
                            onFocus={() =>
                              setActiveBar(index)
                            }
                            onBlur={() =>
                              setActiveBar(null)
                            }
                            className="group relative flex h-full flex-1 items-end justify-center gap-1 sm:gap-2"
                          >

                            {/* Tooltip */}

                            {isActive && (
                              <div className="absolute bottom-[105%] left-1/2 z-30 -translate-x-1/2 whitespace-nowrap rounded-xl bg-[#101828] px-3 py-2 text-left text-white shadow-xl">

                                <p className="m-0 text-[8px] font-bold uppercase tracking-wide text-gray-400">
                                  {item.month}
                                </p>

                                <p className="mt-1 text-[9px]">
                                  Leads:{" "}
                                  <strong>
                                    {item.leads}
                                  </strong>
                                </p>

                                <p className="mt-1 text-[9px]">
                                  Orders:{" "}
                                  <strong>
                                    {item.orders}
                                  </strong>
                                </p>

                              </div>
                            )}

                            {/* Leads bar */}

                            <div
                              className={`manufacture-bar relative w-[45%] rounded-t-[8px] bg-[#1455d9] transition-all duration-500 group-hover:brightness-110 ${
                                isActive
                                  ? "shadow-[0_8px_25px_rgba(20,85,217,.25)]"
                                  : ""
                              }`}
                              style={{
                                height: leadsHeight,
                                animationDelay: `${index * 100}ms`,
                              }}
                            >

                              <span className="manufacture-bar-shine pointer-events-none absolute inset-y-0 left-0 w-full overflow-hidden rounded-t-[8px]" />

                            </div>

                            {/* Orders bar */}

                            <div
                              className={`manufacture-bar relative w-[45%] rounded-t-[8px] bg-[#073b91] transition-all duration-500 group-hover:brightness-110 ${
                                isActive
                                  ? "shadow-[0_8px_25px_rgba(7,59,145,.28)]"
                                  : ""
                              }`}
                              style={{
                                height: ordersHeight,
                                animationDelay: `${index * 100 + 80}ms`,
                              }}
                            >

                              <span className="manufacture-bar-shine pointer-events-none absolute inset-y-0 left-0 w-full overflow-hidden rounded-t-[8px]" />

                            </div>

                            {/* Month */}

                            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] font-semibold text-gray-400">
                              {item.month}
                            </span>

                          </button>
                        );
                      }
                    )}

                  </div>

                </div>

                {/* Chart footer */}

                <div className="mt-10 flex items-center justify-between rounded-[16px] bg-[#f8fbff] px-4 py-3">

                  <div>

                    <p className="m-0 text-[8px] uppercase tracking-[0.12em] text-gray-400">
                      Lead → Order
                    </p>

                    <p className="mt-1 text-[12px] font-bold text-[#101828]">
                      Example conversion journey
                    </p>

                  </div>

                  <span className="rounded-full bg-white px-3 py-1.5 text-[9px] font-bold text-[#1455d9] shadow-sm">
                    55% sample
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          RECOMMENDED STRATEGY
          ===================================================== */}

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">

        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-16">

          <div className="animate-[manufactureLeft_.7s_ease-out_both]">

            <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
              Our Approach
            </p>

            <h2 className="mt-4 text-[30px] font-bold leading-tight tracking-[-0.03em] sm:text-[38px]">
              Recommended Strategy
            </h2>

            <p className="mt-5 max-w-[470px] text-[14px] leading-7 text-gray-600 sm:text-[15px]">
              A structured approach that connects manufacturing audience
              research, discovery, content, conversion and measurement.
            </p>

          </div>

          <div className="space-y-3">

            {strategy.map((item, index) => (

              <div
                key={item.number}
                className="manufacture-card flex gap-5 rounded-[18px] border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md sm:p-6"
                style={{
                  animationDelay: `${index * 70}ms`,
                }}
              >

                <span className="shrink-0 pt-0.5 text-[11px] font-bold tracking-[0.14em] text-[#1455d9]">
                  {item.number}
                </span>

                <div>

                  <h3 className="m-0 text-[15px] font-bold text-[#101828] sm:text-[17px]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[13px] leading-6 text-gray-600 sm:text-[14px] sm:leading-7">
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

      <section className="bg-[#101828] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">

        <div className="mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-16">

          <div className="animate-[manufactureLeft_.7s_ease-out_both]">

            <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-300">
              Why Choose Akkurate
            </p>

            <h2 className="mt-4 text-[30px] font-bold leading-tight tracking-[-0.03em] text-white sm:text-[38px]">
              Integrated Digital Growth for Manufacturing
            </h2>

          </div>

          <div className="grid gap-3 sm:grid-cols-2">

            {whyChoose.map((item, index) => (

              <div
                key={item}
                className="manufacture-card flex gap-3 rounded-[16px] border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]"
                style={{
                  animationDelay: `${index * 80}ms`,
                }}
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

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">

        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">

          <div className="animate-[manufactureLeft_.7s_ease-out_both] lg:sticky lg:top-28 lg:self-start">

            <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1455d9] sm:text-[11px]">
              Frequently Asked Questions
            </p>

            <h2 className="mt-4 max-w-[450px] text-[30px] font-bold leading-tight tracking-[-0.03em] sm:text-[38px]">
              Manufacturing Marketing FAQs
            </h2>

            <p className="mt-5 max-w-[430px] text-[14px] leading-7 text-gray-600 sm:text-[15px]">
              Clear answers to common questions about industry-specific
              manufacturing marketing, channels, websites and performance.
            </p>

          </div>

          <div className="space-y-3">

            {faqs.map((faq, index) => {

              const isOpen =
                openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="manufacture-card overflow-hidden rounded-[16px] border border-gray-200 bg-white transition-shadow duration-300 hover:shadow-[0_10px_35px_rgba(15,23,42,.05)]"
                  style={{
                    animationDelay: `${index * 70}ms`,
                  }}
                >

                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(
                        isOpen ? null : index
                      )
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

      <section className="px-5 pb-16 pt-8 sm:px-8 sm:pb-20 lg:px-14 lg:pb-24">
        <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[35px] bg-[#073b91] px-8 py-14 text-center text-white sm:px-12 lg:px-20 lg:py-10 animate-[clothingScale_.7s_ease-out_both]">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60">
            Let’s Build the Right Strategy
          </p>

          <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-bold leading-tight sm:text-4xl lg:text-3xl">
            Ready to grow your manufacturing business online?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
            Tell Akkurate what you sell, who you want to reach and what outcome
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
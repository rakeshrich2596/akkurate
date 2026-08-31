import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

/* =========================================================
   FOOD INDUSTRY DATA
   ========================================================= */

const industryData = {
  food: {
    slug: "food",
    focus: "Food Digital Marketing",

    hero: "Digital Marketing for Food Businesses That Need Better Visibility, Trust & Customers",

    intro:
      "Food customers discover visually, explore menus, compare options and decide quickly. Akkurate builds digital strategies around that journey to help food businesses turn discovery into orders and repeat customers.",

    problemTitle: "Why Food Marketing Needs a Specialized Approach",

    problem:
      "Food customers often make decisions quickly. They discover a restaurant, café, food brand or menu through search, maps, social media, reviews or recommendations, then move directly toward a menu, order or visit. Akkurate connects these discovery points with clear digital experiences built around visibility, trust and conversion.",

    opportunities: [
      [
        "Local SEO",
        "Improve visibility for relevant local food searches and customer intent.",
      ],
      [
        "Google Business Profile",
        "Strengthen the connection between local discovery, location and business information.",
      ],
      [
        "Reviews & Reputation",
        "Support a practical process for genuine customer feedback and professional responses.",
      ],
      [
        "Reels & Visual Content",
        "Use visual content to communicate food, brand personality, products and offers.",
      ],
      [
        "Local Paid Campaigns",
        "Reach relevant local audiences with focused paid campaigns and promotions.",
      ],
      [
        "Menu & Order Journeys",
        "Connect discovery with clear menu, enquiry, ordering or purchase actions.",
      ],
    ],

    finalCta: "Ready to grow your food business online?",
  },
};

/* =========================================================
   FOOD JOURNEY
   ========================================================= */

const foodJourney = [
  {
    label: "Discover",
    icon: "✦",
    description: "Find the food",
  },
  {
    label: "Menu",
    icon: "☰",
    description: "Explore choices",
  },
  {
    label: "Select",
    icon: "◉",
    description: "Choose items",
  },
  {
    label: "Order",
    icon: "🛍",
    description: "Place order",
  },
  {
    label: "Repeat",
    icon: "↻",
    description: "Come back",
  },
];

/* =========================================================
   MENU ITEMS
   ========================================================= */

const menuItems = [
  {
    name: "Signature Burger",
    category: "Popular",
    price: "₹349",
    icon: "🍔",
    accent: "from-orange-50 to-amber-100",
  },
  {
    name: "Creamy Pasta",
    category: "Chef's Pick",
    price: "₹429",
    icon: "🍝",
    accent: "from-yellow-50 to-orange-100",
  },
  {
    name: "Fresh Pizza",
    category: "Best Seller",
    price: "₹499",
    icon: "🍕",
    accent: "from-red-50 to-orange-100",
  },
];

/* =========================================================
   PERFORMANCE DATA
   ILLUSTRATIVE ONLY
   ========================================================= */

const menuEngagement = [
  {
    label: "Signature Burger",
    value: 88,
    short: "Burger",
  },
  {
    label: "Fresh Pizza",
    value: 76,
    short: "Pizza",
  },
  {
    label: "Creamy Pasta",
    value: 64,
    short: "Pasta",
  },
  {
    label: "Desserts",
    value: 52,
    short: "Desserts",
  },
  {
    label: "Drinks",
    value: 41,
    short: "Drinks",
  },
];

/* =========================================================
   STRATEGY
   ========================================================= */

const strategy = [
  [
    "Industry & Audience Research",
    "Identify customer segments, buying triggers, search behavior, competitors, objections and decision criteria.",
  ],
  [
    "Positioning & Message",
    "Clarify what the food business offers, who it serves, why it is different and what proof can support the claim.",
  ],
  [
    "Discovery",
    "Build search, local, social and paid visibility around high-value food customer journeys.",
  ],
  [
    "Content & Authority",
    "Answer genuine questions and demonstrate the food brand through useful content, visual storytelling and relevant resources.",
  ],
  [
    "Conversion",
    "Improve menus, landing pages, ordering paths, forms, calls to action and trust elements.",
  ],
  [
    "Measurement",
    "Track qualified traffic, menu engagement, enquiries, orders, conversions and other agreed business KPIs.",
  ],
];

/* =========================================================
   WHY AKKURATE
   ========================================================= */

const whyChoose = [
  "Integrated SEO, AEO, GEO, paid media, web and creative capabilities.",
  "Industry-specific food and local search strategy.",
  "Customer-journey-first digital planning.",
  "Clear connection between discovery, menu and ordering.",
  "Transparent measurement and continuous optimization.",
];

/* =========================================================
   FAQ
   ========================================================= */

const faqs = (industry) => [
  [
    `Why should a ${industry.toLowerCase()} business use industry-specific digital marketing?`,
    "Industry-specific strategy allows the website and campaigns to reflect the language, buying process and trust requirements of the food market.",
  ],
  [
    "Which digital channels should we invest in?",
    "There is no universal mix. Priorities should depend on audience, location, competition, offer, buying journey and measurable business value.",
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
    "How do you measure food marketing performance?",
    "We can measure relevant indicators such as local visibility, menu engagement, enquiries, orders, conversion rate and other agreed business outcomes.",
  ],
  [
    "Do you guarantee leads, orders or rankings?",
    "No. We focus on strategy, execution, testing and transparent measurement rather than guaranteeing outcomes controlled by platforms and market conditions.",
  ],
];

/* =========================================================
   MAIN COMPONENT
   ========================================================= */

export default function IndustryPage() {
  const data = industryData.food;

  const [openFaq, setOpenFaq] = useState(null);
  const [activeJourney, setActiveJourney] = useState(0);
  const [selectedMenu, setSelectedMenu] = useState(0);

  /* ---------------------------------------------------------
     Scroll to top
     --------------------------------------------------------- */

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);

  /* ---------------------------------------------------------
     Automatically move through:
     Discover → Menu → Select → Order → Repeat
     --------------------------------------------------------- */

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveJourney((current) => {
        return (current + 1) % foodJourney.length;
      });
    }, 1800);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-white text-[#151b2c]">
      {/* =====================================================
          HERO
          FOOD ORDER JOURNEY
          ===================================================== */}

      <section className="px-5 py-10 sm:px-8 sm:py-14 lg:px-14 lg:py-16">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[460px] w-[460px] rounded-full bg-[#e9edf8] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[350px] w-[350px] rounded-full bg-[#f3eee8] blur-3xl" />

        <div className="mx-auto w-full max-w-[1500px]">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
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

                <span className="font-semibold text-[#1455d9]">Food</span>
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

            {/* RIGHT — FOOD MENU / ORDER EXPERIENCE */}
            <div className="animate-[slideInRight_.7s_ease-out_both]">
              <div className="relative mx-auto max-w-[700px]">
                {/* SOFT GLOW */}
                <div className="absolute -inset-10 rounded-[50px] bg-orange-100/60 blur-3xl" />

                <div className="relative overflow-hidden rounded-[32px] border border-orange-100 bg-[#fffdfa] p-5 shadow-[0_25px_80px_rgba(120,70,20,.10)] sm:p-7">
                  {/* STEAM PARTICLES */}
                  <div className="pointer-events-none absolute right-[18%] top-[7%]">
                    <span className="food-steam food-steam-one" />
                    <span className="food-steam food-steam-two" />
                    <span className="food-steam food-steam-three" />
                  </div>

                  {/* HEADER */}
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="m-0 text-[10px] font-bold uppercase tracking-[0.18em] text-[#1455d9]">
                        Food Customer Journey
                      </p>

                      <p className="mt-1 m-0 text-[12px] text-gray-500">
                        From discovery to repeat order
                      </p>
                    </div>

                    <span className="rounded-full bg-orange-50 px-3 py-1.5 text-[9px] font-bold text-orange-600">
                      Live Journey
                    </span>
                  </div>

                  {/* JOURNEY */}
                  <div className="mt-7 rounded-[24px] bg-gradient-to-br from-[#fff8f0] to-[#f8fbff] p-4 sm:p-6">
                    <div className="relative">
                      {/* DESKTOP CONNECTING LINE */}
                      <div className="absolute left-[10%] right-[10%] top-[30px] hidden h-[2px] bg-orange-100 sm:block" />

                      {/* MOVING DOT */}
                      <div
                        className="absolute top-[25px] z-20 hidden h-3.5 w-3.5 rounded-full border-[3px] border-white bg-orange-500 shadow-[0_0_0_5px_rgba(249,115,22,.12),0_0_18px_rgba(249,115,22,.35)] sm:block"
                        style={{
                          left: `calc(10% + ${activeJourney * 20}% - 7px)`,
                          transition: "left 700ms cubic-bezier(.4,0,.2,1)",
                        }}
                      />

                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-5 sm:gap-2">
                        {foodJourney.map((step, index) => {
                          const isActive = activeJourney === index;
                          const isCompleted = activeJourney > index;

                          return (
                            <button
                              key={step.label}
                              type="button"
                              onClick={() => setActiveJourney(index)}
                              className="group relative flex flex-col items-center text-center"
                            >
                              {/* MOBILE CONNECTOR */}
                              {index > 0 && (
                                <div className="absolute left-1/2 top-[-20px] h-5 w-px -translate-x-1/2 bg-orange-100 sm:hidden" />
                              )}

                              {/* ICON */}
                              <div
                                className={`relative z-10 flex h-[58px] w-[58px] items-center justify-center rounded-full border-2 bg-white text-xl shadow-sm transition-all duration-500 ${
                                  isActive
                                    ? "scale-110 border-orange-400 shadow-[0_12px_28px_rgba(249,115,22,.18)]"
                                    : isCompleted
                                      ? "border-orange-200 bg-orange-50"
                                      : "border-gray-200 group-hover:-translate-y-1 group-hover:border-orange-200"
                                }`}
                              >
                                {step.icon}
                              </div>

                              {/* LABEL */}
                              <p
                                className={`mt-4 text-[11px] font-bold transition-colors duration-300 ${
                                  isActive
                                    ? "text-orange-600"
                                    : "text-[#26344f]"
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

                  {/* MENU → ORDER AREA */}
                  <div className="mt-5 grid gap-4 lg:grid-cols-[1.25fr_.75fr]">
                    {/* MENU */}
                    <div className="rounded-[22px] border border-gray-100 bg-white p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="m-0 text-[9px] font-bold uppercase tracking-[0.14em] text-gray-400">
                            Today's Menu
                          </p>

                          <p className="mt-1 m-0 text-[12px] font-bold text-[#101828]">
                            Discover something delicious
                          </p>
                        </div>

                        <span className="text-[10px] font-semibold text-gray-400">
                          3 items
                        </span>
                      </div>

                      <div className="mt-3 space-y-2">
                        {menuItems.map((item, index) => {
                          const selected = selectedMenu === index;

                          return (
                            <button
                              key={item.name}
                              type="button"
                              onClick={() => {
                                setSelectedMenu(index);
                                setActiveJourney(2);
                              }}
                              className={`food-menu-card flex w-full items-center gap-3 rounded-[16px] border p-2.5 text-left transition-all duration-300 ${
                                selected
                                  ? "border-orange-300 bg-orange-50/60 shadow-sm"
                                  : "border-gray-100 bg-white hover:-translate-y-0.5 hover:border-orange-200"
                              }`}
                            >
                              {/* FOOD IMAGE */}
                              <div
                                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-xl ${item.accent}`}
                              >
                                {item.icon}
                              </div>

                              {/* INFO */}
                              <div className="min-w-0 flex-1">
                                <div className="flex items-center justify-between gap-2">
                                  <p className="truncate text-[11px] font-bold text-[#101828]">
                                    {item.name}
                                  </p>

                                  <span className="shrink-0 text-[10px] font-bold text-[#1455d9]">
                                    {item.price}
                                  </span>
                                </div>

                                <p className="mt-1 text-[9px] text-gray-400">
                                  {item.category}
                                </p>
                              </div>

                              {/* SELECT */}
                              <span
                                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] transition ${
                                  selected
                                    ? "bg-[#073b91] text-white"
                                    : "bg-gray-50 text-gray-300"
                                }`}
                              >
                                {selected ? "✓" : "+"}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* ORDER PANEL */}
                    <div className="relative overflow-hidden rounded-[22px] bg-[#073b91] p-5 text-white">
                      {/* DECORATIVE DOTS */}
                      <div className="absolute right-4 top-4 h-2 w-2 rounded-full bg-orange-300/70" />

                      <div className="absolute bottom-8 right-8 h-1.5 w-1.5 rounded-full bg-white/30" />

                      <p className="relative text-[9px] font-bold uppercase tracking-[0.15em] text-blue-200">
                        Your Order
                      </p>

                      <div className="relative mt-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-xl">
                            {menuItems[selectedMenu].icon}
                          </div>

                          <div className="min-w-0">
                            <p className="truncate text-[11px] font-bold">
                              {menuItems[selectedMenu].name}
                            </p>

                            <p className="mt-1 text-[9px] text-blue-200">
                              Qty × 1
                            </p>
                          </div>
                        </div>

                        <div className="mt-5 border-t border-white/10 pt-4">
                          <div className="flex items-center justify-between text-[10px] text-blue-200">
                            <span>Item total</span>

                            <span className="font-bold text-white">
                              {menuItems[selectedMenu].price}
                            </span>
                          </div>

                          <div className="mt-2 flex items-center justify-between text-[10px] text-blue-200">
                            <span>Delivery</span>

                            <span className="font-bold text-white">Free</span>
                          </div>

                          <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-3">
                            <span className="text-[11px] font-bold">Total</span>

                            <span className="text-lg font-bold">
                              {menuItems[selectedMenu].price}
                            </span>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => setActiveJourney(3)}
                          className="mt-5 w-full rounded-xl bg-white px-4 py-3 text-[10px] font-bold text-[#073b91] transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                        >
                          Place Order →
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* CURRENT STAGE */}
                  <div className="mt-4 flex items-center justify-between rounded-[18px] border border-orange-100 bg-[#fffaf5] px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-sm">
                        {foodJourney[activeJourney].icon}
                      </div>

                      <div>
                        <p className="m-0 text-[8px] font-bold uppercase tracking-[0.13em] text-orange-500">
                          Current Stage
                        </p>

                        <p className="mt-0.5 m-0 text-[12px] font-bold text-[#101828]">
                          {foodJourney[activeJourney].label}
                        </p>
                      </div>
                    </div>

                    <span className="text-[9px] font-semibold text-gray-400">
                      {activeJourney + 1} / {foodJourney.length}
                    </span>
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

      {/* =====================================================
          DIGITAL OPPORTUNITIES
          ===================================================== */}

      <section className="bg-[#f7faff] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center animate-[scaleOut_.7s_ease-out_both]">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
              Digital Opportunities
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Key Digital Opportunities for Food
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
              Build visibility, trust, menu engagement and clearer paths toward
              visits, enquiries and orders.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {data.opportunities.map(([title, description], index) => (
              <article
                key={title}
                className="animate-[cardIn_.65s_ease-out_both] rounded-3xl border border-gray-100 bg-white p-7 shadow-[0_15px_50px_rgba(0,0,0,.05)] transition duration-300 hover:-translate-y-2 hover:border-blue-100 hover:shadow-[0_25px_60px_rgba(7,59,145,.10)]"
                style={{
                  animationDelay: `${index * 70}ms`,
                }}
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef4ff] text-sm font-bold text-[#1455d9]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="text-xl font-bold">{title}</h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PERFORMANCE
          MENU / PRODUCT ENGAGEMENT BAR CHART
          ===================================================== */}

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid items-center gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
            {/* LEFT */}

            <div className="animate-[slideInLeft_.7s_ease-out_both]">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
                Performance
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.03em] sm:text-4xl">
                Menu / Product Engagement
              </h2>

              <p className="mt-5 max-w-[500px] text-base leading-8 text-gray-600 sm:text-lg">
                Illustrative engagement data showing which menu and product
                categories attract more customer attention.
              </p>

              <div className="mt-7 rounded-[20px] border border-blue-100 bg-[#f8fbff] p-5">
                <p className="m-0 text-[9px] font-bold uppercase tracking-[0.15em] text-[#1455d9]">
                  Illustrative data only
                </p>

                <p className="mt-2 text-[12px] leading-6 text-gray-500">
                  These values are examples. Replace them with real menu,
                  product or analytics data when available.
                </p>
              </div>
            </div>

            {/* RIGHT — BAR CHART */}

            <div className="animate-[slideInRight_.7s_ease-out_both] rounded-[28px] border border-blue-100 bg-white p-6 shadow-[0_20px_60px_rgba(7,59,145,.07)] sm:p-8">
              {/* HEADER */}

              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="m-0 text-[12px] font-bold text-[#101828]">
                    Menu Engagement
                  </p>

                  <p className="mt-1 m-0 text-[10px] text-gray-400">
                    Illustrative customer interaction
                  </p>
                </div>

                <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[9px] font-bold text-[#1455d9]">
                  Sample
                </span>
              </div>

              {/* CHART */}

              <div className="mt-8">
                <div className="flex items-end gap-3 sm:gap-5">
                  {menuEngagement.map((item, index) => (
                    <div
                      key={item.label}
                      className="group flex flex-1 flex-col items-center"
                    >
                      {/* VALUE */}

                      <span className="mb-2 text-[9px] font-bold text-[#1455d9] opacity-0 transition duration-300 group-hover:opacity-100 sm:opacity-100">
                        {item.value}%
                      </span>

                      {/* BAR AREA */}

                      <div className="relative flex h-[230px] w-full items-end justify-center overflow-hidden rounded-t-xl bg-[#f7f9fd]">
                        {/* GRID */}

                        <div className="pointer-events-none absolute inset-0 flex flex-col justify-between">
                          {[0, 1, 2, 3, 4].map((line) => (
                            <div
                              key={line}
                              className="h-px w-full bg-gray-100"
                            />
                          ))}
                        </div>

                        {/* BAR */}

                        <div
                          className="food-chart-bar relative z-10 w-[55%] rounded-t-xl bg-[#1455d9] transition-all duration-500 group-hover:bg-[#073b91] sm:w-[48%]"
                          style={{
                            height: `${item.value}%`,
                            animationDelay: `${index * 130}ms`,
                          }}
                        >
                          <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] font-bold text-[#1455d9]">
                            {item.value}%
                          </span>
                        </div>
                      </div>

                      {/* LABEL */}

                      <p className="mt-3 text-center text-[9px] font-bold leading-4 text-[#344054] sm:text-[10px]">
                        {item.short}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* SUMMARY */}

              <div className="mt-7 grid grid-cols-3 gap-2">
                <div className="rounded-xl bg-[#f8fbff] px-3 py-3">
                  <p className="m-0 text-[8px] uppercase tracking-[0.1em] text-gray-400">
                    Highest
                  </p>

                  <p className="mt-1 text-[12px] font-bold text-[#101828]">
                    Burger
                  </p>
                </div>

                <div className="rounded-xl bg-[#f8fbff] px-3 py-3">
                  <p className="m-0 text-[8px] uppercase tracking-[0.1em] text-gray-400">
                    Engagement
                  </p>

                  <p className="mt-1 text-[12px] font-bold text-[#101828]">
                    88%
                  </p>
                </div>

                <div className="rounded-xl bg-[#073b91] px-3 py-3 text-white">
                  <p className="m-0 text-[8px] uppercase tracking-[0.1em] text-blue-200">
                    Data
                  </p>

                  <p className="mt-1 text-[12px] font-bold">Sample</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STRATEGY
          ===================================================== */}

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
                A customer-journey-first framework that connects food discovery,
                trust, menu engagement and conversion.
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

      {/* =====================================================
          WHY AKKURATE
          ===================================================== */}

      <section className="bg-[#101828] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-16">
          {/* Left Content */}

          <div className="animate-[slideInLeft_.7s_ease-out_both]">
            <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-300">
              Why Choose Akkurate
            </p>

            <h2 className="mt-4 text-[30px] font-bold leading-tight tracking-[-0.03em] text-white sm:text-[38px]">
              Integrated Digital Growth for Food Businesses
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

      {/* =====================================================
          FAQ
          ===================================================== */}

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
            {faqs("Food").map(([question, answer], index) => (
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
                    <p className="text-sm leading-7 text-gray-600">{answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
          ===================================================== */}

      <section className="px-5 pb-16 pt-8 sm:px-8 sm:pb-20 lg:px-14 lg:pb-24">
        <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[35px] bg-[#073b91] px-8 py-14 text-center text-white sm:px-12 lg:px-20 lg:py-10 animate-[scaleOut_.7s_ease-out_both]">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60">
            Let’s Build the Right Strategy
          </p>

          <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-bold leading-tight sm:text-4xl lg:text-4xl">
            {data.finalCta}
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

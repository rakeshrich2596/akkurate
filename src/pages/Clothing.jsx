import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

/* =========================================================
   CLOTHING INDUSTRY DATA
   ========================================================= */

const industryData = {
  clothing: {
    slug: "clothing",
    focus: "Clothing Brand Digital Marketing",

    hero: "Digital Marketing for Clothing Businesses That Need Better Visibility, Trust & Leads",

    intro:
      "Clothing customers have a specific buying journey. Akkurate builds digital strategies around the questions, comparisons, trust signals and conversion actions that matter in this market.",

    problemTitle: "Why Clothing Marketing Needs a Specialized Approach",

    problem:
      "A generic digital marketing package rarely reflects the way clothing buyers search, compare and decide. The website should use industry language, answer relevant questions, demonstrate credible expertise and connect discovery channels to a clear commercial next step. Akkurate maps the customer journey first and then selects the right mix of SEO, AEO, GEO, paid media, website, content and branding services.",

    opportunities: [
      [
        "E-Commerce SEO",
        "Build visibility around clothing searches and product intent.",
      ],
      [
        "Product Architecture",
        "Organize products and categories so customers can understand and navigate the offer.",
      ],
      [
        "Social Creative",
        "Create platform-appropriate visual content for clothing audiences.",
      ],
      [
        "Meta & Google Ads",
        "Support product discovery and campaigns through paid media.",
      ],
      [
        "Content & Influencer Support",
        "Use useful content and relevant creator support where appropriate.",
      ],
      [
        "Shopping UX",
        "Reduce friction across product discovery, evaluation and purchase journeys.",
      ],
    ],

    finalCta: "Ready to grow your clothing business online?",
  },
};

/* =========================================================
   FASHION JOURNEY
   ========================================================= */

const fashionJourney = [
  {
    label: "Collection",
    icon: "✦",
    description: "Discover the range",
  },
  {
    label: "Product",
    icon: "◇",
    description: "Explore a piece",
  },
  {
    label: "Wishlist",
    icon: "♡",
    description: "Save a favourite",
  },
  {
    label: "Cart",
    icon: "▱",
    description: "Prepare to buy",
  },
  {
    label: "Purchase",
    icon: "✓",
    description: "Complete order",
  },
];

/* =========================================================
   FASHION PRODUCTS
   ========================================================= */

const fashionProducts = [
  {
    name: "Linen Oversized Shirt",
    collection: "Summer Edit",
    category: "New Collection",
    price: "₹2,490",
    size: "S · M · L · XL",
    icon: "◌",
    accent: "from-[#f1e7da] via-[#fffaf4] to-[#e6eef7]",
  },
  {
    name: "Structured Midi Dress",
    collection: "Studio Collection",
    category: "Editor's Pick",
    price: "₹3,890",
    size: "XS · S · M · L",
    icon: "◇",
    accent: "from-[#e9e4f2] via-[#fffaff] to-[#eee8e2]",
  },
  {
    name: "Relaxed Wide-Leg Pants",
    collection: "Essential Edit",
    category: "Best Seller",
    price: "₹2,990",
    size: "S · M · L · XL",
    icon: "✧",
    accent: "from-[#e4e8df] via-[#ffffff] to-[#e9edf4]",
  },
  {
    name: "Minimal Tailored Blazer",
    collection: "Modern Form",
    category: "Featured",
    price: "₹4,590",
    size: "S · M · L",
    icon: "△",
    accent: "from-[#e2e6ec] via-[#ffffff] to-[#e8e1dc]",
  },
];

/* =========================================================
   SHOPPING CONVERSION FUNNEL
   ILLUSTRATIVE DATA
   ========================================================= */

const conversionFunnel = [
  {
    label: "Product Views",
    short: "Views",
    value: 100,
    count: "10,000",
  },
  {
    label: "Product Details",
    short: "Details",
    value: 76,
    count: "7,600",
  },
  {
    label: "Wishlist",
    short: "Wishlist",
    value: 52,
    count: "5,200",
  },
  {
    label: "Cart",
    short: "Cart",
    value: 34,
    count: "3,400",
  },
  {
    label: "Purchase",
    short: "Purchase",
    value: 18,
    count: "1,800",
  },
];

/* =========================================================
   STRATEGY
   ========================================================= */

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
    "Build search, local, social and paid visibility around high-value customer journeys.",
  ],
  [
    "Content & Authority",
    "Answer genuine questions and demonstrate practical knowledge through service pages, guides, case studies and useful resources.",
  ],
  [
    "Conversion",
    "Improve landing pages, forms, calls to action, trust elements and enquiry/booking/purchase paths.",
  ],
  [
    "Measurement",
    "Track qualified traffic, leads, enquiries, conversions and other agreed business KPIs.",
  ],
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

const faqs = (industry) => [
  [
    `Why should a ${industry.toLowerCase()} business use industry-specific digital marketing?`,
    "Industry-specific strategy allows the website and campaigns to reflect the language, buying process and trust requirements of the market.",
  ],
  [
    "Which digital channels should we invest in?",
    "There is no universal mix. Priorities should depend on audience, competition, geography, offer, buying journey and measurable business value.",
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
    "How do you measure industry marketing performance?",
    "We agree on business-relevant KPIs such as qualified traffic, enquiries, leads, conversion rate or other measurable outcomes.",
  ],
  [
    "Do you guarantee leads or rankings?",
    "No. We focus on strategy, execution, testing and transparent measurement rather than guaranteeing outcomes controlled by platforms and market conditions.",
  ],
];

/* =========================================================
   MAIN COMPONENT
   ========================================================= */

export default function Clothing() {
  const data = industryData.clothing;

  const [openFaq, setOpenFaq] = useState(null);
  const [activeJourney, setActiveJourney] = useState(0);
  const [activeProduct, setActiveProduct] = useState(0);
  const [wishlisted, setWishlisted] = useState(false);

  /* =========================================================
     PAGE META
     ========================================================= */

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });

    document.title =
      "Clothing & Fashion Digital Marketing Services | SEO, Social & Ads | Akkurate";

    const description =
      "Grow clothing businesses with industry-focused SEO, content, paid media, websites and conversion strategies from Akkurate Digital Solutions.";

    let meta = document.querySelector('meta[name="description"]');

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.setAttribute("content", description);
  }, []);

  /* =========================================================
     AUTO JOURNEY ANIMATION
     ========================================================= */

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveJourney((current) => {
        return (current + 1) % fashionJourney.length;
      });
    }, 1800);

    return () => clearInterval(timer);
  }, []);

  /* =========================================================
     AUTO CATALOGUE SLIDE
     ========================================================= */

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveProduct((current) => {
        return (current + 1) % fashionProducts.length;
      });
    }, 4200);

    return () => clearInterval(timer);
  }, []);

  const selectedProduct = fashionProducts[activeProduct];

  const selectProduct = (index) => {
    setActiveProduct(index);
    setActiveJourney(1);
    setWishlisted(false);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-white text-[#101828]">
      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="relative overflow-hidden bg-[#faf9f7] px-5 py-10 sm:px-8 sm:py-14 lg:px-14 lg:py-16">
        {/* Background decoration */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[460px] w-[460px] rounded-full bg-[#e9edf8] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[350px] w-[350px] rounded-full bg-[#f3eee8] blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1500px]">
          {/* Breadcrumb — directly above left content */}
          <div className="mb-5 flex flex-wrap items-center gap-2 text-[10px] font-medium text-gray-400">
            <Link
              to="/"
              className="transition-colors duration-200 hover:text-[#1455d9]"
            >
              Home
            </Link>

            <span>/</span>

            <span>Industries</span>

            <span>/</span>

            <span className="font-semibold text-[#1455d9]">Clothing</span>
          </div>

          {/* Main Hero — left & right aligned */}
          <div className="grid items-start gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-14">
            {/* LEFT CONTENT */}
            <div className="animate-[clothingSlideLeft_.7s_ease-out_both] lg:pt-1">
              <p className="mt-20 text-[11px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
                {data.focus}
              </p>

              <h1 className="mt-3 max-w-[720px] text-[35px] font-bold leading-[1.07] tracking-[-0.04em] sm:text-[46px] lg:text-[30px]">
                {data.hero}
              </h1>

              <p className="mt-6 max-w-[650px] text-[14px] leading-7 text-gray-600 sm:text-[16px]">
                {data.intro}
              </p>

              <Link
                to="/contact"
                className="mt-7 inline-flex items-center rounded-full bg-[#073b91] px-7 py-3.5 text-[13px] font-bold text-white shadow-[0_10px_30px_rgba(7,59,145,.16)] transition duration-300 hover:-translate-y-1 hover:bg-[#052f75]"
              >
                Build My Industry Growth Strategy
                <span className="ml-2">→</span>
              </Link>
            </div>

            {/* RIGHT — FASHION CATALOGUE */}
            <div className=" animate-[clothingSlideRight_.7s_ease-out_both]">
              <div className="relative mx-auto  max-w-[720px]">
                {/* Glow */}
                <div className="absolute -inset-8 rounded-[50px] bg-[#1455d9]/5 blur-3xl" />

                <div className="relative overflow-hidden rounded-[32px] border border-gray-200 bg-white p-4 shadow-[0_25px_80px_rgba(15,23,42,.10)] sm:p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="m-0 text-[10px] font-bold uppercase tracking-[0.18em] text-[#1455d9]">
                        Fashion Catalogue
                      </p>

                      <p className="mt-1 m-0 text-[11px] text-gray-400">
                        Collection to purchase journey
                      </p>
                    </div>

                    <span className="rounded-full bg-[#f5f7fb] px-3 py-1.5 text-[9px] font-bold text-[#1455d9]">
                      Live Collection
                    </span>
                  </div>

                  {/* JOURNEY */}
                  <div className="mt-5 rounded-[22px] bg-[#faf9f7] p-4 sm:p-5">
                    <div className="relative">
                      {/* Base connecting line */}
                      <div className="absolute left-[9%] right-[9%] top-[25px] hidden h-px bg-gray-200 sm:block" />

                      {/* Animated progress line */}
                      <div
                        className="absolute left-[9%] top-[24px] hidden h-[3px] rounded-full bg-[#1455d9] transition-all duration-700 sm:block"
                        style={{
                          width: `${activeJourney * 20}%`,
                        }}
                      />

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-5 sm:gap-2">
                        {fashionJourney.map((step, index) => {
                          const isActive = activeJourney === index;
                          const isDone = activeJourney > index;

                          return (
                            <button
                              key={step.label}
                              type="button"
                              onClick={() => setActiveJourney(index)}
                              className="group relative flex items-center gap-3 text-left sm:flex-col sm:items-center sm:text-center"
                            >
                              {/* Mobile connector */}
                              {index > 0 && (
                                <span className="absolute left-[17px] top-[-17px] h-4 w-px bg-gray-200 sm:hidden" />
                              )}

                              {/* Step icon */}
                              <span
                                className={`relative z-10 flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full border-2 bg-white text-[15px] shadow-sm transition-all duration-500 ${
                                  isActive
                                    ? "scale-110 border-[#1455d9] bg-[#073b91] text-white shadow-[0_10px_25px_rgba(20,85,217,.20)]"
                                    : isDone
                                      ? "border-blue-100 bg-blue-50 text-[#1455d9]"
                                      : "border-gray-200 text-gray-400 group-hover:-translate-y-1 group-hover:border-blue-200"
                                }`}
                              >
                                {step.icon}
                              </span>

                              <span>
                                <span
                                  className={`block text-[10px] font-bold ${
                                    isActive
                                      ? "text-[#1455d9]"
                                      : "text-[#344054]"
                                  }`}
                                >
                                  {step.label}
                                </span>

                                <span className="mt-1 block text-[8px] text-gray-400">
                                  {step.description}
                                </span>
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* CATALOGUE SLIDER */}
                  <div className="mt-5 overflow-hidden">
                    <div
                      className="flex gap-3 transition-transform duration-700 ease-out"
                      style={{
                        transform: `translateX(-${activeProduct * 38}%)`,
                      }}
                    >
                      {fashionProducts.map((product, index) => {
                        const selected = activeProduct === index;

                        return (
                          <button
                            key={product.name}
                            type="button"
                            onClick={() => selectProduct(index)}
                            className={`group relative w-[72%] shrink-0 rounded-[22px] border p-3 text-left transition-all duration-300 sm:w-[48%] ${
                              selected
                                ? "border-[#1455d9]/30 bg-white shadow-[0_15px_35px_rgba(7,59,145,.10)]"
                                : "border-gray-100 bg-white hover:-translate-y-1 hover:border-blue-100"
                            }`}
                          >
                            {/* Product visual */}
                            <div
                              className={`relative flex h-[190px] items-center justify-center overflow-hidden rounded-[17px] bg-gradient-to-br ${product.accent}`}
                            >
                              {/* Decorative fashion silhouette */}
                              <div className="relative flex h-[135px] w-[100px] items-center justify-center">
                                <div className="absolute h-[105px] w-[66px] rounded-[38%_38%_28%_28%] border border-gray-300/40 bg-white/70 shadow-sm" />

                                <div className="absolute top-0 h-[30px] w-[30px] rounded-full border border-gray-300/40 bg-white/80" />

                                <div className="absolute left-[8px] top-[30px] h-[70px] w-[22px] -rotate-[12deg] rounded-full border border-gray-300/30 bg-white/60" />

                                <div className="absolute right-[8px] top-[30px] h-[70px] w-[22px] rotate-[12deg] rounded-full border border-gray-300/30 bg-white/60" />

                                <span className="absolute text-3xl text-[#073b91]/40">
                                  {product.icon}
                                </span>
                              </div>

                              {/* Category */}
                              <span className="absolute left-3 top-3 rounded-full bg-white/80 px-2.5 py-1 text-[8px] font-bold uppercase tracking-wide text-[#344054] backdrop-blur">
                                {product.category}
                              </span>

                              {/* Wishlist */}
                              <span
                                onClick={(event) => {
                                  event.stopPropagation();
                                  setWishlisted(!wishlisted);
                                }}
                                className={`absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-sm shadow-sm transition ${
                                  wishlisted && selected
                                    ? "text-[#1455d9]"
                                    : "text-gray-400"
                                }`}
                              >
                                {wishlisted && selected ? "♥" : "♡"}
                              </span>
                            </div>

                            {/* Product details */}
                            <div className="px-1 pb-1 pt-3">
                              <p className="m-0 text-[9px] font-semibold uppercase tracking-[0.12em] text-gray-400">
                                {product.collection}
                              </p>

                              <p className="mt-1.5 text-[12px] font-bold text-[#101828]">
                                {product.name}
                              </p>

                              <div className="mt-2 flex items-center justify-between gap-2">
                                <span className="text-[11px] font-bold text-[#073b91]">
                                  {product.price}
                                </span>

                                <span className="text-[8px] text-gray-400">
                                  {product.size}
                                </span>
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* SELECTED PRODUCT */}
                  <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto]">
                    <div className="rounded-[18px] border border-gray-100 bg-[#fafbfe] px-4 py-3">
                      <p className="m-0 text-[8px] font-bold uppercase tracking-[0.14em] text-gray-400">
                        Selected Product
                      </p>

                      <div className="mt-1 flex items-center justify-between gap-3">
                        <p className="m-0 truncate text-[11px] font-bold text-[#101828]">
                          {selectedProduct.name}
                        </p>

                        <span className="shrink-0 text-[11px] font-bold text-[#1455d9]">
                          {selectedProduct.price}
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveJourney(3)}
                      className="rounded-[18px] bg-[#073b91] px-6 py-3 text-[10px] font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#052f75]"
                    >
                      Add to Cart →
                    </button>
                  </div>

                  {/* CURRENT STAGE */}
                  <div className="mt-4 flex items-center justify-between rounded-[18px] bg-[#f7f9fd] px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-[12px] text-[#1455d9]">
                        {fashionJourney[activeJourney].icon}
                      </div>

                      <div>
                        <p className="m-0 text-[8px] font-bold uppercase tracking-[0.12em] text-gray-400">
                          Shopping Stage
                        </p>

                        <p className="mt-0.5 m-0 text-[11px] font-bold text-[#101828]">
                          {fashionJourney[activeJourney].label}
                        </p>
                      </div>
                    </div>

                    <span className="text-[9px] font-bold text-gray-400">
                      {activeJourney + 1} / 5
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
          <div className="animate-[clothingSlideLeft_.7s_ease-out_both]">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
              The Business Problem
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              {data.problemTitle}
            </h2>
          </div>

          <div className="animate-[clothingSlideRight_.7s_ease-out_both]">
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
          <div className="text-center animate-[clothingScale_.7s_ease-out_both]">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
              Digital Opportunities
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Key Digital Opportunities for Clothing
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500">
              Connect product discovery, fashion content, shopping experiences
              and paid visibility around real customer intent.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {data.opportunities.map(([title, description], index) => (
              <article
                key={title}
                className="animate-[clothingCardIn_.65s_ease-out_both] rounded-3xl border border-gray-100 bg-white p-7 shadow-[0_15px_50px_rgba(0,0,0,.05)] transition duration-300 hover:-translate-y-2 hover:border-blue-100 hover:shadow-[0_25px_60px_rgba(7,59,145,.10)]"
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
          SHOPPING CONVERSION FUNNEL
          ===================================================== */}

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid items-center gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
            {/* LEFT */}

            <div className="animate-[clothingSlideLeft_.7s_ease-out_both]">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
                Performance
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.03em] sm:text-4xl">
                Shopping Conversion Funnel
              </h2>

              <p className="mt-5 max-w-[500px] text-base leading-8 text-gray-600 sm:text-lg">
                A fashion customer journey should show how shoppers move from
                product discovery toward an actual purchase.
              </p>

              <div className="mt-7 space-y-3">
                {[
                  "Product discovery",
                  "Product evaluation",
                  "Wishlist consideration",
                  "Cart intent",
                  "Purchase",
                ].map((item, index) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#eef4ff] text-[9px] font-bold text-[#1455d9]">
                      {index + 1}
                    </span>

                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-[20px] border border-blue-100 bg-[#f8fbff] p-5">
                <p className="m-0 text-[9px] font-bold uppercase tracking-[0.15em] text-[#1455d9]">
                  Illustrative data only
                </p>

                <p className="mt-2 text-[12px] leading-6 text-gray-500">
                  These numbers are examples for visual presentation and should
                  be replaced with real analytics data when available.
                </p>
              </div>
            </div>

            {/* RIGHT — FUNNEL */}

            <div className="relative overflow-hidden rounded-[30px] border border-gray-100 bg-white p-5 shadow-[0_25px_70px_rgba(15,23,42,.08)] sm:p-8">
              {/* Funnel header */}

              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="m-0 text-[12px] font-bold text-[#101828]">
                    Customer Shopping Funnel
                  </p>

                  <p className="mt-1 m-0 text-[10px] text-gray-400">
                    Illustrative conversion journey
                  </p>
                </div>

                <span className="rounded-full bg-[#f1f5ff] px-3 py-1.5 text-[9px] font-bold text-[#1455d9]">
                  Sample
                </span>
              </div>

              {/* Funnel */}

              <div className="relative mt-8">
                {/* Moving pulse */}

                <div className="pointer-events-none absolute left-1/2 top-0 z-30 -translate-x-1/2">
                  <div className="clothing-funnel-pulse" />
                </div>

                <div className="space-y-2">
                  {conversionFunnel.map((stage, index) => {
                    const nextStage = conversionFunnel[index + 1];

                    const width = index === 0 ? "100%" : `${stage.value}%`;

                    return (
                      <div
                        key={stage.label}
                        className="relative flex justify-center"
                      >
                        <div
                          className="clothing-funnel-stage group relative flex min-h-[70px] items-center justify-between overflow-hidden rounded-[16px] border border-blue-100 bg-gradient-to-r from-[#073b91] to-[#1455d9] px-5 text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(20,85,217,.18)]"
                          style={{
                            width,
                            animationDelay: `${index * 130}ms`,
                          }}
                        >
                          {/* Shine */}

                          <span className="clothing-funnel-shine pointer-events-none absolute inset-y-0 -left-[40%] w-[30%] skew-x-[-18deg] bg-white/20" />

                          <div className="relative z-10">
                            <p className="m-0 text-[11px] font-bold">
                              {stage.label}
                            </p>

                            <p className="mt-1 text-[8px] text-blue-100">
                              Stage {index + 1}
                            </p>
                          </div>

                          <div className="relative z-10 text-right">
                            <p className="m-0 text-[13px] font-bold">
                              {stage.count}
                            </p>

                            <p className="mt-1 text-[8px] text-blue-100">
                              {stage.value}%
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Drop arrows */}

                <div className="pointer-events-none absolute inset-x-0 top-[67px] hidden justify-center sm:flex">
                  <span className="text-[11px] text-blue-200">↓</span>
                </div>
              </div>

              {/* Funnel footer */}

              <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
                <div className="rounded-xl bg-[#f8fbff] p-3">
                  <p className="m-0 text-[8px] uppercase tracking-[0.1em] text-gray-400">
                    Start
                  </p>

                  <p className="mt-1 text-[13px] font-bold text-[#101828]">
                    10,000
                  </p>
                </div>

                <div className="rounded-xl bg-[#f8fbff] p-3">
                  <p className="m-0 text-[8px] uppercase tracking-[0.1em] text-gray-400">
                    Purchase
                  </p>

                  <p className="mt-1 text-[13px] font-bold text-[#101828]">
                    1,800
                  </p>
                </div>

                <div className="col-span-2 rounded-xl bg-[#073b91] p-3 text-white sm:col-span-1">
                  <p className="m-0 text-[8px] uppercase tracking-[0.1em] text-blue-200">
                    Sample Rate
                  </p>

                  <p className="mt-1 text-[13px] font-bold">18%</p>
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
            <div className="animate-[clothingSlideLeft_.7s_ease-out_both]">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
                Our Approach
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                Recommended Strategy
              </h2>

              <p className="mt-5 max-w-md text-base leading-7 text-gray-600">
                A customer-journey-first framework that connects discovery,
                authority and conversion.
              </p>
            </div>

            <div className="space-y-4 animate-[clothingSlideRight_.7s_ease-out_both]">
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

          <div className="animate-[clothingSlideLeft_.7s_ease-out_both]">
            <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-300">
              Why Choose Akkurate
            </p>

            <h2 className="mt-4 text-[30px] font-bold leading-tight tracking-[-0.03em] text-white sm:text-[38px]">
              Integrated Digital Growth for Clothing & Fashion Brands
            </h2>
          </div>

          {/* Right Content */}

          <div className="grid gap-3 sm:grid-cols-2 animate-[clothingSlideRight_.7s_ease-out_both]">
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
          <div className="animate-[clothingSlideLeft_.7s_ease-out_both]">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
              Frequently Asked Questions
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Questions, answered clearly.
            </h2>
          </div>

          <div className="space-y-3 animate-[clothingSlideRight_.7s_ease-out_both]">
            {faqs("Clothing").map(([question, answer], index) => (
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
        <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[35px] bg-[#073b91] px-8 py-14 text-center text-white sm:px-12 lg:px-20 lg:py-10 animate-[clothingScale_.7s_ease-out_both]">
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

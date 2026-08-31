import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

const industryData = {
  jewellery: {
    slug: "jewellery",
    focus: "Jewellery Digital Marketing",
    hero: "Digital Marketing for Jewellery Businesses That Need Better Visibility, Trust & Leads",
    intro:
      "Jewellery customers have a specific buying journey. Akkurate builds digital strategies around the questions, comparisons, trust signals and conversion actions that matter in this market.",
    problemTitle: "Why Jewellery Marketing Needs a Specialized Approach",
    problem:
      "A generic digital marketing package rarely reflects the way jewellery buyers search, compare and decide. The website should use industry language, answer relevant questions, demonstrate credible expertise and connect discovery channels to a clear commercial next step. Akkurate maps the customer journey first and then selects the right mix of SEO, AEO, GEO, paid media, website, content and branding services.",
    opportunities: [
      {
        title: "Product & Category SEO",
        description:
          "Build visibility around product categories and real jewellery customer intent.",
      },
      {
        title: "Social Visual Content",
        description:
          "Use visual content to communicate products, style and brand story.",
      },
      {
        title: "Google & Meta Ads",
        description: "Support product discovery and campaigns with paid media.",
      },
      {
        title: "E-Commerce UX",
        description:
          "Create a smoother online shopping journey that helps customers evaluate products.",
      },
      {
        title: "Trust & Product Storytelling",
        description:
          "Communicate product value, credibility and relevant brand stories.",
      },
      {
        title: "Local Discovery",
        description:
          "Strengthen discovery for customers seeking relevant jewellery businesses locally.",
      },
    ],
    finalCta:
      "Ready to grow your jewellery business online?",
  },
};

const jewelleryPieces = [
  {
    name: "Celeste Diamond Necklace",
    collection: "Celeste Collection",
    craft: "Hand-finished",
    category: "Diamond",
    price: "₹1,84,000",
    gem: "✦",
  },
  {
    name: "Aurelia Gold Pendant",
    collection: "Aurelia Collection",
    craft: "22K Gold",
    category: "Gold",
    price: "₹86,500",
    gem: "◇",
  },
  {
    name: "Serena Bridal Set",
    collection: "Serena Bridal",
    craft: "Artisan crafted",
    category: "Bridal",
    price: "₹2,42,000",
    gem: "✧",
  },
];

const categoryInterest = [
  { label: "Gold", value: 31 },
  { label: "Diamond", value: 27 },
  { label: "Bridal", value: 19 },
  { label: "Everyday", value: 14 },
  { label: "Custom", value: 9 },
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

const whyChoose = [
  "Integrated SEO, AEO, GEO, paid media, web and creative capabilities.",
  "Industry-specific content architecture.",
  "Customer-journey-first strategy.",
  "Clear internal linking between industry and service pages.",
  "Transparent measurement and continuous optimization.",
];

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

export default function IndustryPage() {
  const data = industryData.jewellery;

  const [openFaq, setOpenFaq] = useState(null);
  const [selectedPiece, setSelectedPiece] = useState(0);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedPiece((current) => {
        return (current + 1) % jewelleryPieces.length;
      });
    }, 3600);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-white text-[#151b2c]">
      {/* =========================================================
          HERO — PREMIUM JEWELLERY SHOWCASE
          ========================================================= */}
      <section className="px-5 py-14 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
        <div className="mx-auto w-full max-w-[1500px]">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
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

                <span className="font-semibold text-[#1455d9]">Jewellery</span>
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

            {/* RIGHT — JEWELLERY SHOWCASE */}
            <div className="animate-[slideInRight_.7s_ease-out_both]">
              <div className="relative mx-auto max-w-[620px]">
                <div className="absolute -inset-10 rounded-[45px] bg-[#d9b45b]/10 blur-3xl" />

                <div className="relative overflow-hidden rounded-[32px] border border-[#eee5d2] bg-[#fcfbf8] p-4 shadow-[0_25px_80px_rgba(76,58,24,.12)] sm:p-5">
                  {/* TOP LABEL */}
                  <div className="absolute left-7 top-7 z-30 rounded-full border border-[#e7dcc4] bg-white/85 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-[#8b6a2b] backdrop-blur">
                    Fine Jewellery
                  </div>

                  {/* SHOWCASE */}
                  <div className="relative flex min-h-[430px] items-center justify-center overflow-hidden rounded-[26px] bg-[radial-gradient(circle_at_50%_42%,#fffdf8_0%,#f7f2e7_44%,#eee7da_100%)]">
                    {/* GRID */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(139,106,43,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(139,106,43,.06)_1px,transparent_1px)] bg-[size:34px_34px] opacity-30" />

                    {/* ORBIT RINGS */}
                    <div className="absolute h-[245px] w-[245px] rounded-full border border-[#d6bd86]/30 animate-[jewelleryOrbit_12s_linear_infinite]" />

                    <div className="absolute h-[325px] w-[325px] rounded-full border border-[#d6bd86]/20 animate-[jewelleryOrbitReverse_16s_linear_infinite]" />

                    {/* ORBITING GEMS */}
                    {["✦", "◇", "✧", "◆", "·", "✦"].map((gem, index) => (
                      <span
                        key={`${gem}-${index}`}
                        className="absolute left-1/2 top-1/2 z-10 animate-[gemOrbit_8s_linear_infinite]"
                        style={{
                          "--orbit-angle": `${index * 60}deg`,
                        }}
                      >
                        <span className="block text-[13px] text-[#b99548] animate-[gemTwinkle_2s_ease-in-out_infinite]">
                          {gem}
                        </span>
                      </span>
                    ))}

                    {/* JEWELLERY PIECE */}
                    <div
                      key={jewelleryPieces[selectedPiece].name}
                      className="relative z-10 flex h-[220px] w-[220px] items-center justify-center animate-[productFloat_5s_ease-in-out_infinite]"
                    >
                      <div className="absolute inset-5 rounded-full bg-white/50 blur-2xl" />

                      <div className="relative flex h-[172px] w-[172px] items-center justify-center rounded-full border border-[#d7bd82]/50 bg-gradient-to-br from-[#fffdf8] via-[#f7ecd0] to-[#e4c77f] shadow-[0_20px_45px_rgba(139,106,43,.20)]">
                        {/* NECKLACE LOOP */}
                        <div className="absolute left-1/2 top-[-28px] h-[78px] w-[105px] -translate-x-1/2 rounded-b-[70px] border-b-[3px] border-l-[3px] border-r-[3px] border-[#c59d4c]" />

                        {/* CENTRAL GEM */}
                        <div className="relative mt-12 flex h-[72px] w-[72px] rotate-45 items-center justify-center rounded-[22px] border-2 border-[#c69c43] bg-gradient-to-br from-[#fffdf5] via-[#e9cf88] to-[#bd8e32] shadow-[0_10px_25px_rgba(139,106,43,.22)]">
                          <div className="h-9 w-9 rounded-[12px] border-2 border-white/80 bg-white/55 shadow-inner" />
                        </div>

                        {/* SHINE */}
                        <span className="absolute -left-20 top-0 h-full w-12 rotate-[20deg] bg-white/65 blur-md animate-[productShine_3.5s_ease-in-out_infinite]" />
                      </div>
                    </div>

                    {/* CATEGORY LABELS */}
                    {[
                      ["Gold", "left-[8%] top-[34%]"],
                      ["Diamond", "right-[7%] top-[29%]"],
                      ["Bridal", "left-[13%] bottom-[27%]"],
                      ["Custom", "right-[11%] bottom-[23%]"],
                    ].map(([label, position], index) => (
                      <span
                        key={label}
                        className={`absolute ${position} z-20 rounded-full border border-[#e4d7bb] bg-white/80 px-2.5 py-1.5 text-[8px] font-bold uppercase tracking-[0.12em] text-[#8b6a2b] shadow-sm backdrop-blur animate-[categoryReveal_.6s_ease-out_both]`}
                        style={{
                          animationDelay: `${0.4 + index * 0.14}s`,
                        }}
                      >
                        {label}
                      </span>
                    ))}

                    {/* PRODUCT NAME */}
                    <div className="absolute bottom-5 left-1/2 z-20 w-[82%] -translate-x-1/2 rounded-[18px] border border-white/80 bg-white/80 px-4 py-3 text-center shadow-sm backdrop-blur">
                      <p className="m-0 text-[8px] font-bold uppercase tracking-[0.18em] text-[#9b7a3b]">
                        {jewelleryPieces[selectedPiece].collection}
                      </p>

                      <p
                        key={jewelleryPieces[selectedPiece].name}
                        className="mt-1 m-0 text-[14px] font-bold text-[#272117] animate-[pieceNameIn_.4s_ease-out_both]"
                      >
                        {jewelleryPieces[selectedPiece].name}
                      </p>
                    </div>
                  </div>

                  {/* PRODUCT CARD */}
                  <div className="mt-4 rounded-[20px] border border-[#e8dfce] bg-white p-4 shadow-sm">
                    <div className="flex items-center justify-between gap-4">
                      <div className="min-w-0">
                        <p className="m-0 text-[9px] font-bold uppercase tracking-[0.16em] text-[#9b7a3b]">
                          Collection
                        </p>

                        <p className="mt-1 truncate text-[12px] font-bold text-[#272117]">
                          {jewelleryPieces[selectedPiece].collection}
                        </p>
                      </div>

                      <span className="shrink-0 text-[16px] text-[#b58a38] animate-[gemTwinkle_2.2s_ease-in-out_infinite]">
                        {jewelleryPieces[selectedPiece].gem}
                      </span>
                    </div>

                    <div className="mt-3 grid grid-cols-2 gap-2">
                      {/* CRAFT */}
                      <div className="rounded-xl border border-[#e8dfce] bg-[#fcfaf5] px-3 py-2.5">
                        <span className="block text-[8px] uppercase tracking-[0.12em] text-gray-400">
                          Craft
                        </span>

                        <span className="mt-0.5 block text-[10px] font-bold text-[#51452f]">
                          {jewelleryPieces[selectedPiece].craft}
                        </span>
                      </div>

                      {/* EXPLORE */}
                      <button
                        type="button"
                        className="rounded-xl bg-[#8b6a2b] px-3 py-2.5 text-left text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#745620] hover:shadow-[0_10px_25px_rgba(139,106,43,.20)]"
                      >
                        <span className="block text-[8px] uppercase tracking-[0.12em] text-white/60">
                          Explore
                        </span>

                        <span className="mt-0.5 block text-[10px] font-bold">
                          View Collection →
                        </span>
                      </button>
                    </div>

                    {/* PRODUCT SELECTORS */}
                    <div className="mt-3 flex items-center justify-center gap-1.5">
                      {jewelleryPieces.map((piece, index) => (
                        <button
                          key={piece.name}
                          type="button"
                          aria-label={`Show ${piece.name}`}
                          onClick={() => setSelectedPiece(index)}
                          className={`h-1.5 rounded-full transition-all duration-500 ${
                            selectedPiece === index
                              ? "w-7 bg-[#8b6a2b]"
                              : "w-1.5 bg-[#dfd5c1] hover:bg-[#bca56f]"
                          }`}
                        />
                      ))}
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
          IMPORTANT:
          data.opportunities contains OBJECTS,
          so use item.title and item.description.
          ========================================================= */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center animate-[scaleOut_.7s_ease-out_both]">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
              Digital Opportunities
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Key Digital Opportunities for {data.slug.replaceAll("-", " ")}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
              Practical opportunities that connect product discovery, visual
              storytelling, e-commerce experience, trust and local visibility.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {data.opportunities.map((item, index) => (
              <article
                key={item.title}
                className="animate-[cardIn_.65s_ease-out_both] rounded-3xl border border-gray-100 bg-white p-7 shadow-[0_15px_50px_rgba(0,0,0,.05)] transition duration-300 hover:-translate-y-2 hover:border-[#e5d8bd] hover:shadow-[0_25px_60px_rgba(76,58,24,.10)]"
                style={{
                  animationDelay: `${index * 70}ms`,
                }}
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f8f1e3] text-sm font-bold text-[#8b6a2b]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="text-xl font-bold text-[#272117]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PERFORMANCE — CATEGORY INTEREST DONUT
          ========================================================= */}
      <section className="bg-[#fcfaf6] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid items-center gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
            {/* LEFT */}
            <div className="animate-[slideInLeft_.7s_ease-out_both]">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9b7a3b]">
                Performance
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.03em] text-[#272117] sm:text-4xl">
                Category Interest
              </h2>

              <p className="mt-5 max-w-[500px] text-base leading-8 text-gray-600 sm:text-lg">
                Illustrative audience-interest data showing how different
                jewellery categories can be represented in a simple performance
                view.
              </p>

              <div className="mt-7 rounded-[20px] border border-[#e8dfce] bg-white p-5 shadow-sm">
                <p className="m-0 text-[9px] font-bold uppercase tracking-[0.15em] text-[#9b7a3b]">
                  Illustrative data only
                </p>

                <p className="mt-2 text-[12px] leading-6 text-gray-500">
                  Replace these values with real client analytics when
                  available.
                </p>
              </div>
            </div>

            {/* RIGHT DONUT */}
            <div className="animate-[slideInRight_.7s_ease-out_both] rounded-[28px] border border-[#e8dfce] bg-white p-6 shadow-[0_20px_60px_rgba(76,58,24,.07)] sm:p-8">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="m-0 text-[12px] font-bold text-[#272117]">
                    Category Interest
                  </p>

                  <p className="mt-1 m-0 text-[10px] text-gray-400">
                    Illustrative audience split
                  </p>
                </div>

                <span className="rounded-full bg-[#f8f1e3] px-2.5 py-1 text-[9px] font-bold text-[#8b6a2b]">
                  Sample
                </span>
              </div>

              <div className="mt-8 flex flex-col items-center gap-8 sm:flex-row sm:justify-center">
                {/* DONUT */}
                <div
                  className="relative flex h-[210px] w-[210px] shrink-0 items-center justify-center rounded-full animate-[donutIn_.9s_ease-out_both]"
                  style={{
                    background:
                      "conic-gradient(#8b6a2b 0% 31%, #c8a65b 31% 58%, #dfc98f 58% 77%, #eee2c2 77% 91%, #f5eedf 91% 100%)",
                  }}
                >
                  <div className="flex h-[126px] w-[126px] flex-col items-center justify-center rounded-full bg-white shadow-inner">
                    <span className="text-[25px] font-bold text-[#272117]">
                      100%
                    </span>

                    <span className="mt-1 text-[8px] font-bold uppercase tracking-[0.14em] text-gray-400">
                      Interest mix
                    </span>
                  </div>
                </div>

                {/* LEGEND */}
                <div className="w-full max-w-[240px] space-y-3">
                  {categoryInterest.map((item, index) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between gap-3 animate-[categoryLegendIn_.55s_ease-out_both]"
                      style={{
                        animationDelay: `${index * 90}ms`,
                      }}
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`h-2.5 w-2.5 rounded-full ${
                            index === 0
                              ? "bg-[#8b6a2b]"
                              : index === 1
                                ? "bg-[#c8a65b]"
                                : index === 2
                                  ? "bg-[#dfc98f]"
                                  : index === 3
                                    ? "bg-[#eee2c2]"
                                    : "bg-[#f5eedf]"
                          }`}
                        />

                        <span className="text-[11px] font-semibold text-[#51452f]">
                          {item.label}
                        </span>
                      </div>

                      <span className="text-[11px] font-bold text-[#8b6a2b]">
                        {item.value}%
                      </span>
                    </div>
                  ))}
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
                A customer-journey-first framework that connects discovery,
                authority and conversion.
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
        <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[35px] bg-[#073b91] px-8 py-14 text-center text-white sm:px-12 lg:px-20 lg:py-10 animate-[scaleOut_.7s_ease-out_both]">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60">
            Let’s Build the Right Strategy
          </p>

          <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-bold leading-tight sm:text-4xl lg:text-3xl">
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

import { useEffect } from "react";
import "../../index.css";

const pageTitle = "Happypique Case Study | Akkurate Digital Solutions";

const pageDescription =
  "How Akkurate Digital Solutions drove 400% organic growth for Happypique, an antique jewellery eCommerce brand, through a 2.5-year SEO strategy.";

export default function Happypique() {
  useEffect(() => {
    document.title = pageTitle;

    let meta = document.querySelector('meta[name="description"]');

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.setAttribute("content", pageDescription);
  }, []);

  const challenges = [
    {
      number: "01",
      title: "Competitive eCommerce market.",
      description:
        "Antique jewellery and fashion accessories is a crowded niche, with established sellers already occupying the high-intent search terms.",
    },
    {
      number: "02",
      title: "Low initial organic visibility.",
      description:
        "The site had minimal organic traffic relative to the size of its catalog, meaning most products were effectively invisible in search.",
    },
    {
      number: "03",
      title: "Weak product and category rankings.",
      description:
        "Product and category pages weren't structured or optimized to compete for the searches that actually drive purchases.",
    },
    {
      number: "04",
      title: "Limited keyword presence.",
      description:
        "The brand ranked for very few terms, leaving most of the relevant search demand uncaptured.",
    },
    {
      number: "05",
      title: "Heavy reliance on paid ads.",
      description:
        "Growth was largely paid-dependent, which caps margins and stops compounding once budget is pulled back.",
    },
  ];

  const solutions = [
    {
      title: "Technical SEO & schema foundation.",
      description:
        "Fixed crawl and indexing issues and implemented schema markup across product and category pages so search engines could read the catalog correctly.",
    },
    {
      title: "Category & product page optimization.",
      description:
        "Rebuilt category structure around real search demand and optimized product titles, descriptions, and internal linking to let high-intent pages actually compete.",
    },
    {
      title: "Keyword & content expansion.",
      description:
        "Steadily expanded coverage to over 1,000 optimized keywords, backed by content built around real buyer questions in the jewellery category.",
    },
    {
      title: "Shopping & Search Console optimization.",
      description:
        "Tuned shopping feed visibility and used Search Console data continuously to find and fix what was holding pages back.",
    },
  ];

  const scope = [
    "eCommerce SEO Strategy",
    "Product & Category SEO",
    "Technical SEO & Schema",
    "Internal Linking",
    "Search Console Optimization",
    "Shopping SEO",
  ];

  return (
    <main className="min-h-screen bg-white text-[#101a2e]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#031a46] via-[#062b72] to-[#1455d9] text-white">
        {/* Background decoration */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full border border-white/10 shadow-[0_0_0_80px_rgba(255,255,255,0.02),0_0_0_160px_rgba(255,255,255,0.01)]" />

        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#1455d9]/30 blur-3xl" />

        <div className="relative mx-auto grid w-full max-w-[1180px] grid-cols-1 items-center gap-12 px-4 pb-0 pt-14 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:gap-16 lg:px-8 lg:pt-20">
          {/* LEFT CONTENT */}
          <div className="relative z-10">
            <div className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-white/60">
              <span className="h-px w-7 bg-[#5da7ff]" />
              <a
                href="/"
                className="transition-colors duration-300 hover:text-white"
              >
                Home
              </a>
              <span>/</span>
              <a
                href="/our-work"
                className="transition-colors duration-300 hover:text-white"
              >
                Case Studies
              </a>
              <span>/</span>
              <span>Happypique</span>
            </div>

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white/70 backdrop-blur-md">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#5da7ff]" />
              eCommerce · Jewellery · SEO Growth
            </div>

            <h1 className="max-w-[720px] text-4xl font-bold leading-[1.03] tracking-[-0.045em] sm:text-5xl lg:text-[45px]">
              400% organic growth for an{" "}
              <span className="text-[#5da7ff]">antique jewellery brand</span>
            </h1>

            <p className="mt-6 max-w-[650px] text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              How a 2.5-year eCommerce SEO strategy took Happypique from low
              organic visibility to over a million monthly search impressions —
              without leaning on paid ads.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#results"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-[#062b72] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                View Results
                <span className="transition-transform duration-300 group-hover:translate-y-1">
                  ↓
                </span>
              </a>

              <a
                href="/register"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
              >
                Start a Project
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative min-h-[330px] sm:min-h-[400px] lg:min-h-[470px]">
            {/* Floating stat 1 */}
            <div className="absolute left-0 top-5 z-20 min-w-[125px] animate-bounce rounded-2xl border border-[#062b72]/10 bg-white/95 p-4 text-[#062b72] shadow-2xl [animation-duration:4s]">
              <div className="text-2xl font-bold leading-none text-[#1455d9]">
                400%
              </div>
              <div className="mt-1 text-[10px] font-medium leading-4 text-[#59677f]">
                Business growth
              </div>
            </div>

            {/* Image */}
            <div className="group absolute inset-0 overflow-hidden rounded-[28px] border border-white/20 bg-white/10 shadow-[0_30px_90px_rgba(3,26,70,0.35)] transition-transform duration-700 hover:rotate-0 lg:rotate-1">
              <img
                src="/assets/images/ourwork/happypique-hero.webp"
                alt="Happypique antique jewellery case study"
                className="h-full w-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#031a46]/75 via-[#031a46]/10 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                <div>
                  <div className="text-lg font-bold text-white">Happypique</div>
                  <div className="mt-1 text-[9px] font-medium uppercase tracking-[0.15em] text-white/60">
                    Antique Jewellery & Accessories
                  </div>
                </div>

                <div className="text-[9px] font-medium uppercase tracking-[0.15em] text-white/60">
                  Case Study
                </div>
              </div>
            </div>

            {/* Floating stat 2 */}
            <div className="absolute -bottom-2 right-0 z-20 min-w-[125px] animate-bounce rounded-2xl border border-[#062b72]/10 bg-white/95 p-4 text-[#062b72] shadow-2xl [animation-delay:1.5s] [animation-duration:4.5s]">
              <div className="text-2xl font-bold leading-none text-[#1455d9]">
                1M+
              </div>
              <div className="mt-1 text-[10px] font-medium leading-4 text-[#59677f]">
                Search impressions
              </div>
            </div>
          </div>
        </div>

        {/* META BAR */}
        <div className="relative z-30 mt-5 border-t border-white/10 bg-[#031234]/40 backdrop-blur-md">
          <div className="mx-auto grid w-full max-w-[1180px] grid-cols-2 lg:grid-cols-4">
            {[
              ["Category", "eCommerce SEO"],
              ["Industry", "Jewellery & Accessories"],
              ["Engagement", "2.5+ years, ongoing"],
              ["Platform", "Shopify eCommerce"],
            ].map(([label, value], index) => (
              <div
                key={label}
                className={`min-h-[82px] border-white/10 px-5 py-5 ${
                  index !== 1 ? "border-r" : "lg:border-r"
                } ${index > 1 ? "border-t lg:border-t-0" : ""}`}
              >
                <div className="text-[9px] uppercase tracking-[0.12em] text-white/40">
                  {label}
                </div>
                <div className="mt-1.5 text-xs font-semibold text-white">
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="border-b border-[#062b72]/10 py-16 sm:py-20 lg:py-10">
        <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16 lg:px-8">
          <div>
            <div className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#1455d9]">
              <span className="h-px w-7 bg-[#1455d9]" />
              About Happypique
            </div>

            <h2 className="max-w-[700px] text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-3xl">
              An eCommerce brand competing on visibility
            </h2>

            <p className="mt-5 max-w-[720px] text-[15px] leading-8 text-[#59677f]">
              Happypique sells antique jewellery and fashion accessories online
              — a category where buyers research extensively before purchasing
              and trust is built through search presence as much as product
              photography. The brand had a strong catalog but a thin organic
              footprint, in a market where established players already dominated
              the obvious keywords.
            </p>

            <p className="mt-5 max-w-[720px] text-[15px] leading-8 text-[#59677f]">
              Over a 2.5-year engagement, Akkurate Digital Solutions has run
              their full eCommerce SEO program — covering technical SEO, product
              and category optimization, content, and shopping search
              visibility.
            </p>
          </div>

          <div className="h-fit rounded-[22px] border border-[#062b72]/10 bg-gradient-to-br from-[#f8fbff] to-[#eef4ff] p-6 shadow-[0_8px_30px_rgba(7,35,82,0.06)] lg:sticky lg:top-24">
            <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.14em] text-[#59677f]">
              Project Scope
            </div>

            <div>
              {scope.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 border-b border-[#062b72]/10 py-3 text-sm text-[#101a2e] last:border-0"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#062b72] text-[10px] font-bold text-white">
                    ✓
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="border-b border-[#062b72]/10 bg-[#f8faff] py-16 sm:py-20 lg:py-10">
        <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-[800px]">
            <div className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#1455d9]">
              <span className="h-px w-7 bg-[#1455d9]" />
              Client&apos;s Challenges
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl">
              Starting from low visibility in a crowded market
            </h2>
          </div>

          <div className="space-y-3">
            {challenges.map((item) => (
              <div
                key={item.number}
                className="group grid grid-cols-[42px_1fr] gap-4 rounded-2xl border border-[#062b72]/10 bg-white p-5 shadow-[0_4px_18px_rgba(7,35,82,0.025)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1455d9]/25 hover:shadow-[0_12px_35px_rgba(7,35,82,0.08)] sm:grid-cols-[52px_1fr] sm:gap-5 sm:p-6"
              >
                <div className="text-lg font-bold text-[#1455d9]">
                  {item.number}
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[#101a2e] sm:text-base">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm leading-7 text-[#59677f]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="border-b border-[#062b72]/10 py-16 sm:py-20 lg:py-10">
        <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-[720px]">
            <div className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#1455d9]">
              <span className="h-px w-7 bg-[#1455d9]" />
              Our Solution
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl">
              A compounding eCommerce SEO program
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {solutions.map((item, index) => (
              <div
                key={item.title}
                className="group rounded-[20px] border border-[#062b72]/10 bg-[#f6f8fc] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_12px_35px_rgba(7,35,82,0.08)]"
              >
                <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-xl bg-[#062b72] text-xs font-bold text-white transition-transform duration-300 group-hover:scale-110">
                  0{index + 1}
                </div>

                <h3 className="text-base font-bold text-[#101a2e]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#59677f]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section
        id="results"
        className="border-b border-[#062b72]/10 bg-[#f8faff] py-16 sm:py-20 lg:py-10"
      >
        <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-[720px]">
            <div className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#1455d9]">
              <span className="h-px w-7 bg-[#1455d9]" />
              Results
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl">
              400% growth, sustained over 2.5 years
            </h2>
          </div>

          <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              ["400%", "Business growth"],
              ["1M+", "Search impressions, up from 10K"],
              ["600+", "Keywords ranked on page one"],
            ].map(([number, label]) => (
              <div
                key={number}
                className="group relative overflow-hidden rounded-[20px] bg-gradient-to-br from-[#062b72] to-[#1455d9] p-7 text-white shadow-[0_18px_55px_rgba(7,35,82,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(3,26,70,0.2)]"
              >
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-white/10 transition-transform duration-700 group-hover:scale-150" />

                <div className="relative z-10 text-4xl font-bold leading-none">
                  {number}
                </div>

                <div className="relative z-10 mt-2 text-xs leading-5 text-white/70">
                  {label}
                </div>
              </div>
            ))}
          </div>

          <ul className="space-y-3">
            {[
              <>
                <strong className="text-[#101a2e]">
                  10,000+ monthly organic users
                </strong>{" "}
                driven to the site, replacing what was previously a
                paid-traffic-dependent funnel.
              </>,
              <>
                <strong className="text-[#101a2e]">
                  1,000+ keywords optimized
                </strong>
                , with{" "}
                <strong className="text-[#101a2e]">
                  600+ ranking on the first page
                </strong>{" "}
                of search results.
              </>,
              <>
                Search Console impressions grew from{" "}
                <strong className="text-[#101a2e]">
                  10,000 to over 1,000,000
                </strong>{" "}
                across the engagement.
              </>,
              <>
                Significant increase in revenue and conversions, with sales
                growing without relying solely on paid ads.
              </>,
            ].map((item, index) => (
              <li
                key={index}
                className="relative pl-7 text-sm leading-7 text-[#59677f]"
              >
                <span className="absolute left-0 top-1 text-base font-bold text-[#1455d9]">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* GROWTH CHART */}
      <section className="border-b border-[#062b72]/10 py-16 sm:py-20 lg:py-10">
        <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="mb-10 max-w-[720px]">
            <div className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#1455d9]">
              <span className="h-px w-7 bg-[#1455d9]" />
              Growth Trajectory
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl">
              From 10K to 1M+ search impressions
            </h2>
          </div>

          {/* Chart Card */}
          <div className="rounded-[22px] border border-[#062b72]/10 bg-white p-5 shadow-[0_8px_30px_rgba(7,35,82,0.06)] sm:p-7">
            <div className="mb-5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#59677f]">
              Google Search Console impressions — over 2.5 years
            </div>

            {/* Animated Chart */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#f8fbff] to-white p-4 sm:p-6">
              {/* Chart Header */}
              <div className="mb-6 flex items-end justify-between">
                <div>
                  <p className="m-0 text-[9px] font-bold uppercase tracking-[0.12em] text-[#59677f]">
                    Search Impressions
                  </p>

                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-3xl font-bold tracking-[-0.04em] text-[#002C7D] sm:text-4xl">
                      1M+
                    </span>

                    <span className="text-[10px] font-bold text-[#1455d9]">
                      ↑ Growth
                    </span>
                  </div>
                </div>

                {/* Live Indicator */}
                <div className="flex items-center gap-2 rounded-full border border-[#1455d9]/10 bg-[#1455d9]/5 px-3 py-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1455d9] opacity-50" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1455d9]" />
                  </span>

                  <span className="font-mono text-[8px] font-bold uppercase tracking-[0.08em] text-[#1455d9]">
                    Trajectory
                  </span>
                </div>
              </div>

              {/* Chart */}
              <div className="relative h-[280px] w-full overflow-hidden rounded-xl bg-white">
                {/* Horizontal Grid */}
                <div className="pointer-events-none absolute inset-0 flex flex-col justify-between py-5">
                  <span className="h-px w-full bg-[#002C7D]/[.07]" />

                  <span className="h-px w-full border-t border-dashed border-[#002C7D]/[.07]" />

                  <span className="h-px w-full border-t border-dashed border-[#002C7D]/[.07]" />

                  <span className="h-px w-full border-t border-dashed border-[#002C7D]/[.07]" />

                  <span className="h-px w-full bg-[#002C7D]/[.10]" />
                </div>

                {/* Y Axis */}
                <div className="absolute left-0 top-0 flex h-full flex-col justify-between py-4 font-mono text-[8px] text-[#5b6477] sm:text-[9px]">
                  <span>1M+</span>
                  <span>750K</span>
                  <span>500K</span>
                  <span>250K</span>
                  <span>0</span>
                </div>

                {/* SVG */}
                <svg
                  viewBox="0 0 900 300"
                  preserveAspectRatio="none"
                  className="absolute inset-0 h-full w-full pl-7"
                  role="img"
                  aria-label="Search impressions climbing from 10,000 to over 1 million"
                >
                  <defs>
                    <linearGradient
                      id="impressionGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#1455d9"
                        stopOpacity="0.20"
                      />

                      <stop offset="100%" stopColor="#1455d9" stopOpacity="0" />
                    </linearGradient>

                    <filter id="chartGlow">
                      <feGaussianBlur stdDeviation="4" result="blur" />

                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Filled Area */}
                  <path
                    d="
                M0 275
                L130 268
                L260 250
                L390 220
                L520 165
                L650 90
                L780 45
                L900 20
                L900 300
                L0 300
                Z
              "
                    fill="url(#impressionGradient)"
                    className="animate-[chartArea_.8s_ease-out_forwards]"
                  />

                  {/* Main Growth Line */}
                  <path
                    d="
                M0 275
                L130 268
                L260 250
                L390 220
                L520 165
                L650 90
                L780 45
                L900 20
              "
                    fill="none"
                    stroke="#002C7D"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    pathLength="1"
                    strokeDasharray="1"
                    strokeDashoffset="1"
                    filter="url(#chartGlow)"
                    className="animate-[drawGrowthLine_2.8s_cubic-bezier(.65,0,.35,1)_forwards]"
                  />

                  {/* Chart Points */}
                  <g>
                    <circle
                      cx="0"
                      cy="275"
                      r="6"
                      fill="#1455d9"
                      className="animate-[chartPoint_.4s_ease-out_.2s_both]"
                    />

                    <circle
                      cx="130"
                      cy="268"
                      r="5"
                      fill="#1455d9"
                      className="animate-[chartPoint_.4s_ease-out_.5s_both]"
                    />

                    <circle
                      cx="260"
                      cy="250"
                      r="5"
                      fill="#1455d9"
                      className="animate-[chartPoint_.4s_ease-out_.8s_both]"
                    />

                    <circle
                      cx="390"
                      cy="220"
                      r="5"
                      fill="#1455d9"
                      className="animate-[chartPoint_.4s_ease-out_1.1s_both]"
                    />

                    <circle
                      cx="520"
                      cy="165"
                      r="5"
                      fill="#1455d9"
                      className="animate-[chartPoint_.4s_ease-out_1.4s_both]"
                    />

                    <circle
                      cx="650"
                      cy="90"
                      r="5"
                      fill="#1455d9"
                      className="animate-[chartPoint_.4s_ease-out_1.7s_both]"
                    />

                    <circle
                      cx="780"
                      cy="45"
                      r="5"
                      fill="#1455d9"
                      className="animate-[chartPoint_.4s_ease-out_2s_both]"
                    />

                    <circle
                      cx="900"
                      cy="20"
                      r="8"
                      fill="#002C7D"
                      className="animate-[finalPointPulse_2s_ease-in-out_infinite]"
                    />
                  </g>
                </svg>

                {/* Animated Final Glow */}
                <div className="pointer-events-none absolute right-[1%] top-[3%]">
                  <div className="relative">
                    <div className="absolute -inset-4 animate-ping rounded-full bg-[#1455d9]/10" />

                    <div className="relative flex h-4 w-4 items-center justify-center rounded-full bg-[#002C7D] shadow-[0_0_20px_rgba(20,85,125,.30)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    </div>
                  </div>
                </div>

                {/* X Axis Labels */}
                <div className="absolute bottom-1 left-9 right-0 grid grid-cols-4 text-center font-mono text-[8px] text-[#59677f] sm:text-[9px]">
                  <span>Month 1</span>
                  <span>Year 1</span>
                  <span>Year 2</span>
                  <span>Month 30</span>
                </div>
              </div>

              {/* Milestone Cards */}
              <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {[
                  ["01", "Starting Point", "10K"],
                  ["02", "First Growth", "250K"],
                  ["03", "Scale", "500K+"],
                  ["04", "Peak", "1M+"],
                ].map(([number, label, value], index) => (
                  <div
                    key={number}
                    className="group rounded-[14px] border border-[#062b72]/10 bg-[#f8fbff] p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#1455d9]/20 hover:shadow-[0_8px_20px_rgba(20,85,217,.08)]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[8px] font-bold text-[#1455d9]">
                        {number}
                      </span>

                      <span className="text-[10px] font-bold text-[#002C7D]">
                        {value}
                      </span>
                    </div>

                    <p className="mt-2 m-0 text-[9px] font-semibold text-[#59677f]">
                      {label}
                    </p>

                    <div className="mt-2 h-1 overflow-hidden rounded-full bg-[#002C7D]/[.07]">
                      <div
                        className="h-full rounded-full bg-[#1455d9]"
                        style={{
                          width:
                            value === "10K"
                              ? "8%"
                              : value === "250K"
                                ? "25%"
                                : value === "500K+"
                                  ? "55%"
                                  : "100%",
                          animation: `progressGrow 1.4s ease-out ${index * 0.15}s both`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Existing Description */}
              <div className="mt-5 border-t border-[#062b72]/10 pt-4 text-xs leading-6 text-[#59677f]">
                Trend line illustrates the overall trajectory reported by the
                client across the 2.5-year engagement. Share monthly export data
                and we&apos;ll plot the exact curve.
              </div>
            </div>
          </div>
        </div>

        
      </section>

      {/* TESTIMONIAL */}
      <section className="py-16 sm:py-20 lg:py-10">
        <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[24px] border border-[#1455d9]/15 bg-gradient-to-br from-[#f0f5ff] to-[#e6efff] p-7 shadow-[0_8px_30px_rgba(7,35,82,0.06)] sm:p-10 lg:p-12">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#1455d9]/10" />

            <div className="relative z-10">
              <div className="mb-4 font-serif text-7xl leading-none text-[#1455d9]">
                &quot;
              </div>

              <blockquote className="max-w-[900px] text-xl font-medium leading-relaxed tracking-[-0.02em] text-[#101a2e] sm:text-2xl lg:text-[29px]">
                The SEO growth achieved by Akkurate Digital Solutions has been
                phenomenal. The increase in visibility, traffic, and revenue has
                transformed our business.
              </blockquote>

              <div className="mt-5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#59677f]">
                — Happypique
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-6 border-t border-[#062b72]/10 pt-5 text-[11px] text-[#59677f]">
            <span>Reading duration: 4 min</span>
            <span>Category: eCommerce SEO</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#031a46] to-[#1455d9] p-7 shadow-[0_18px_55px_rgba(7,35,82,0.1)] sm:p-10 lg:p-12">
            <div className="absolute -right-24 -top-32 h-72 w-72 rounded-full bg-white/10" />

            <div className="relative z-10 flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
              <h3 className="max-w-[700px] text-2xl font-bold leading-tight tracking-[-0.035em] text-white sm:text-3xl">
                Want organic search to carry more of your store&apos;s revenue?
              </h3>

              <a
                href="/register"
                className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-white px-6 text-sm font-bold text-[#062b72] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                Book a Strategy Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED CASE STUDIES */}
      <section className="border-t border-[#062b72]/10 bg-[#f8faff] py-16 sm:py-20 lg:py-10">
        <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#1455d9]">
              <span className="h-px w-7 bg-[#1455d9]" />
              More Work
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl">
              Discover more case studies
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <a
              href="/our-work/dr-multi-speciality-hospital"
              className="group rounded-[20px] border border-[#062b72]/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1455d9]/25 hover:shadow-[0_18px_55px_rgba(7,35,82,0.1)]"
            >
              <span className="mb-4 inline-flex rounded-full border border-[#1455d9]/15 bg-[#1455d9]/5 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.08em] text-[#1455d9]">
                Healthcare · SEO & Social
              </span>

              <h3 className="text-base font-bold text-[#101a2e]">
                DR Multi Speciality Hospital
              </h3>

              <div className="mt-6 text-2xl font-bold text-[#1455d9]">10M+</div>

              <div className="mt-1 text-xs text-[#59677f]">
                Video reach generated
              </div>

              <div className="mt-5 text-xs font-bold text-[#1455d9] transition-transform duration-300 group-hover:translate-x-1">
                View Case Study →
              </div>
            </a>

            <a
              href="/our-work/alpine-coach-tree"
              className="group rounded-[20px] border border-[#062b72]/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1455d9]/25 hover:shadow-[0_18px_55px_rgba(7,35,82,0.1)]"
            >
              <span className="mb-4 inline-flex rounded-full border border-[#1455d9]/15 bg-[#1455d9]/5 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.08em] text-[#1455d9]">
                Education · Web & LMS
              </span>

              <h3 className="text-base font-bold text-[#101a2e]">
                Alpine Coach Tree
              </h3>

              <div className="mt-6 text-2xl font-bold text-[#1455d9]">0→1</div>

              <div className="mt-1 text-xs text-[#59677f]">
                Platform built from scratch
              </div>

              <div className="mt-5 text-xs font-bold text-[#1455d9] transition-transform duration-300 group-hover:translate-x-1">
                View Case Study →
              </div>
            </a>

            <a
              href="/our-work"
              className="group rounded-[20px] border border-[#062b72]/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1455d9]/25 hover:shadow-[0_18px_55px_rgba(7,35,82,0.1)]"
            >
              <span className="mb-4 inline-flex rounded-full border border-[#1455d9]/15 bg-[#1455d9]/5 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.08em] text-[#1455d9]">
                All Work
              </span>

              <h3 className="text-base font-bold text-[#101a2e]">
                Browse every case study
              </h3>

              <div className="mt-6 text-2xl font-bold text-[#1455d9]">5</div>

              <div className="mt-1 text-xs text-[#59677f]">Client stories</div>

              <div className="mt-5 text-xs font-bold text-[#1455d9] transition-transform duration-300 group-hover:translate-x-1">
                View All Work →
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

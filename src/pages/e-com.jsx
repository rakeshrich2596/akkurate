import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
/*
  E-Commerce Development
  Route: /ecommerce-development/

  React + Tailwind CSS only.
  No external chart, animation, or icon libraries.
*/

function Reveal({ children, direction = "up", delay = 0 }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const movement = {
    up: visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
    down: visible ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0",
    left: visible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0",
    right: visible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0",
    center: visible ? "scale-100 opacity-100" : "scale-[.96] opacity-0",
  }[direction];

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${movement}`}
      style={{ transitionDelay: `${delay * 100}ms` }}
    >
      {children}
    </div>
  );
}

const storeServices = [
  {
    number: "01",
    tag: "ARCHITECTURE",
    title: "Store Architecture",
    description:
      "Plan categories, collections, filters and navigation around how customers discover products.",
    value: "Discovery",
    icon: "◇",
  },
  {
    number: "02",
    tag: "PRODUCT UX",
    title: "Product & Category UX",
    description:
      "Create product pages that communicate value, specifications, trust and buying information clearly.",
    value: "Clarity",
    icon: "◎",
  },
  {
    number: "03",
    tag: "CHECKOUT",
    title: "Cart & Checkout",
    description:
      "Reduce friction from product selection through cart and checkout.",
    value: "Conversion",
    icon: "→",
  },
  {
    number: "04",
    tag: "INTEGRATIONS",
    title: "Payments & Integrations",
    description:
      "Connect payment, shipping, inventory and other required services where applicable.",
    value: "Operations",
    icon: "⌁",
  },
  {
    number: "05",
    tag: "SEO",
    title: "E-Commerce SEO",
    description:
      "Build crawlable product/category structures, useful content and internal links that support organic discovery.",
    value: "Visibility",
    icon: "S",
  },
  {
    number: "06",
    tag: "ANALYTICS",
    title: "Analytics & Optimization",
    description:
      "Track customer journeys and improve product pages, checkout and campaigns using real performance data.",
    value: "Growth",
    icon: "↗",
  },
];

const outcomes = [
  "Better product discovery",
  "Clearer shopping journeys",
  "SEO-ready store architecture",
  "Reduced conversion friction",
  "Integrated commerce workflows",
  "Measurable optimization",
];

const audienceCards = [
  {
    number: "01",
    title: "Growing Online Stores",
    text: "For businesses that need a stronger product discovery, shopping and conversion experience as their catalogue grows.",
  },
  {
    number: "02",
    title: "Product-Led Businesses",
    text: "For brands that need product information, categories, trust signals and buying paths to work together clearly.",
  },
  {
    number: "03",
    title: "Existing E-Commerce Teams",
    text: "For teams that need to improve an existing store instead of rebuilding everything when optimization is the more practical approach.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery & Catalogue Planning",
    description:
      "Understand the business objective, audience, current assets, constraints and success criteria before recommending the work.",
  },
  {
    number: "02",
    title: "UX & Store Architecture",
    description:
      "Translate the objective into a practical strategy, scope, content direction and measurement plan.",
  },
  {
    number: "03",
    title: "Development & Integration",
    description:
      "Create, optimize, design, develop or launch the agreed work with brand and user requirements in mind.",
  },
  {
    number: "04",
    title: "QA & Checkout Testing",
    description:
      "Test the experience, tracking, messaging and key conversion paths before considering the work complete.",
  },
  {
    number: "05",
    title: "Launch & Growth",
    description:
      "Review performance, feedback and business signals and use those learnings to prioritize the next improvement.",
  },
];

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

const faqs = [
  {
    question: "What is included in your e-commerce development service?",
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

const relatedServices = [
  {
    title: "SEO",
    description:
      "Strengthen product and category discovery with search-ready architecture and useful content.",
    href: "/seo",
    type: "DISCOVERY",
    tone: "cyan",
  },
  {
    title: "Website Development",
    description:
      "Connect commerce functionality with a purposeful website experience built around usability and conversion.",
    href: "/website-development",
    type: "EXPERIENCE",
    tone: "violet",
  },
  {
    title: "CMS Development",
    description:
      "Create structured content workflows for products, landing pages and ongoing website publishing.",
    href: "/cms-development",
    type: "CONTENT",
    tone: "orange",
  },
];

/* Illustrative e-commerce performance data.
   Bars are intentionally built from Tailwind height utilities. */
const performanceData = [
  {
    month: "JAN",
    orders: "h-[48px]",
    traffic: "h-[78px]",
    conversion: "h-[34px]",
  },
  {
    month: "FEB",
    orders: "h-[61px]",
    traffic: "h-[91px]",
    conversion: "h-[42px]",
  },
  {
    month: "MAR",
    orders: "h-[73px]",
    traffic: "h-[104px]",
    conversion: "h-[51px]",
  },
  {
    month: "APR",
    orders: "h-[87px]",
    traffic: "h-[121px]",
    conversion: "h-[59px]",
  },
  {
    month: "MAY",
    orders: "h-[101px]",
    traffic: "h-[139px]",
    conversion: "h-[67px]",
  },
  {
    month: "JUN",
    orders: "h-[118px]",
    traffic: "h-[155px]",
    conversion: "h-[78px]",
  },
  {
    month: "JUL",
    orders: "h-[132px]",
    traffic: "h-[171px]",
    conversion: "h-[89px]",
  },
];

function Ecom() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="w-full overflow-hidden bg-white text-[#111827]">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#f7faff] px-5 pb-16 pt-8 sm:px-8 sm:pb-20 sm:pt-10 lg:px-14 lg:pb-24 lg:pt-12">
        {/* Background */}
        <div className="pointer-events-none absolute -right-48 -top-48 h-[520px] w-[520px] rounded-full bg-blue-100/70 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-48 -left-48 h-[420px] w-[420px] rounded-full bg-violet-100/40 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1600px] px-1 sm:px-2 lg:px-4 xl:px-6">
          {/* =================================================
        HERO GRID
        LEFT + RIGHT = EQUAL WIDTH
    ================================================= */}
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-10 xl:gap-14">
            {/* =================================================
          LEFT CONTENT
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

                  <span className="text-[#1455d9]">E-Commerce Development</span>
                </div>

                {/* Service Badge */}
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[.16em] text-[#1455d9] shadow-sm sm:text-[11px]">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#1455d9]" />
                  E-Commerce Development
                </div>

                {/* Heading */}
                <h1 className="m-0 max-w-[760px] text-[35px] font-bold leading-[1.04] tracking-[-.045em] text-[#101828] sm:text-[44px] md:text-[45px] lg:text-[45px] xl:text-[45px]">
                  Build an Online Store
                  <span className="block text-[#1455d9]">
                    Designed to Sell.
                  </span>
                </h1>

                {/* Description */}
                <p className="mt-6 max-w-[660px] text-[14px] leading-7 text-gray-600 sm:text-[15px] lg:text-[16px]">
                  Build user-friendly e-commerce websites designed for product
                  discovery, trust, checkout and long-term growth — built around
                  your audience, business objective and measurable customer
                  journey.
                </p>

                {/* CTA Buttons */}
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="/contact"
                    className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#073b91] px-6 py-3 text-[13px] font-bold text-white shadow-[0_12px_30px_rgba(7,59,145,.18)] transition duration-300 hover:-translate-y-1 hover:bg-[#052f75]"
                  >
                    Talk to Our Project
                    <span className="ml-2">→</span>
                  </a>

                  <a
                    href="#ecommerce-services"
                    className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-gray-200 bg-white px-6 py-3 text-[13px] font-semibold text-gray-700 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:text-[#1455d9]"
                  >
                    Explore Services
                  </a>
                </div>

                {/* Trust Row */}
                <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 border-t border-gray-200/80 pt-5 text-[11px] font-medium text-gray-500">
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Product-first
                  </span>

                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-500" />
                    Conversion-focused
                  </span>

                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-violet-500" />
                    Scalable
                  </span>
                </div>
              </div>
            </Reveal>

            {/* =================================================
          RIGHT CONTENT — E-COMMERCE STOREFRONT
      ================================================= */}
            <Reveal direction="right" delay={2}>
              <div className="relative mx-auto min-h-[430px] w-full max-w-[680px] sm:min-h-[500px]">
                {/* Ambient Glow */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[100px]" />

                <div className="pointer-events-none absolute right-10 top-10 h-40 w-40 rounded-full bg-violet-500/10 blur-[80px]" />

                {/* Floating Order Badge */}
                <div className="absolute right-0 top-6 z-30 hidden rounded-full border border-emerald-400/20 bg-[#090c1b]/95 px-3 py-1.5 shadow-xl backdrop-blur-xl sm:flex sm:items-center sm:gap-2">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

                  <span className="text-[8px] font-medium text-emerald-300/80">
                    Order Confirmed
                  </span>
                </div>

                {/* =================================================
              MAIN SHOPPING JOURNEY
          ================================================= */}
                <div className="absolute left-1/2 top-1/2 z-10 w-[94%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[26px] border border-white/10 bg-[#080b19]/95 p-4 shadow-[0_30px_90px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-5">
                  {/* Header */}
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-500/10 ring-1 ring-blue-400/20">
                        <span className="text-sm text-blue-300">◈</span>
                      </div>

                      <div>
                        <p className="text-[7px] uppercase tracking-[0.18em] text-white/25">
                          E-Commerce
                        </p>

                        <h3 className="mt-0.5 text-sm font-semibold text-white/75 sm:text-base">
                          Shopping Journey
                        </h3>
                      </div>
                    </div>

                    {/* Cart */}
                    <div className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                      <span className="text-sm text-white/50">🛒</span>

                      <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500/80 text-[6px] font-bold text-white">
                        3
                      </span>
                    </div>
                  </div>

                  {/* =================================================
                PRODUCT CARDS
            ================================================= */}
                  <div className="relative mb-6">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-[7px] text-white/30">
                        Featured Products
                      </span>

                      <span className="text-[7px] text-blue-300/50">
                        View Store →
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      {/* Product 1 */}
                      <div className="group/product relative overflow-hidden rounded-xl border border-blue-400/15 bg-blue-400/[0.035] p-2.5 transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/30">
                        <div className="relative flex h-16 items-center justify-center rounded-lg bg-blue-400/[0.05]">
                          <div className="h-10 w-8 rotate-[-8deg] rounded-md border border-white/10 bg-gradient-to-br from-white/10 to-blue-400/10 shadow-lg" />

                          <span className="absolute -right-1 top-1 rounded-md bg-blue-400/10 px-1 py-0.5 text-[5px] text-blue-300">
                            NEW
                          </span>
                        </div>

                        <p className="mt-2 text-[7px] font-medium text-white/55">
                          Product A
                        </p>

                        <div className="mt-1 flex items-center justify-between">
                          <span className="text-[8px] font-semibold text-white/70">
                            ₹2,499
                          </span>

                          <span className="text-[7px] text-blue-300">+</span>
                        </div>
                      </div>

                      {/* Product 2 */}
                      <div className="group/product relative overflow-hidden rounded-xl border border-violet-400/15 bg-violet-400/[0.035] p-2.5 transition-all duration-500 hover:-translate-y-1 hover:border-violet-400/30">
                        <div className="relative flex h-16 items-center justify-center rounded-lg bg-violet-400/[0.05]">
                          <div className="h-9 w-12 rotate-[5deg] rounded-lg border border-white/10 bg-gradient-to-br from-white/10 to-violet-400/10 shadow-lg" />

                          <span className="absolute -right-1 top-1 rounded-md bg-violet-400/10 px-1 py-0.5 text-[5px] text-violet-300">
                            HOT
                          </span>
                        </div>

                        <p className="mt-2 text-[7px] font-medium text-white/55">
                          Product B
                        </p>

                        <div className="mt-1 flex items-center justify-between">
                          <span className="text-[8px] font-semibold text-white/70">
                            ₹3,299
                          </span>

                          <span className="text-[7px] text-violet-300">+</span>
                        </div>
                      </div>

                      {/* Product 3 */}
                      <div className="group/product relative overflow-hidden rounded-xl border border-cyan-400/15 bg-cyan-400/[0.035] p-2.5 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/30">
                        <div className="relative flex h-16 items-center justify-center rounded-lg bg-cyan-400/[0.05]">
                          <div className="h-10 w-10 rounded-full border border-white/10 bg-gradient-to-br from-white/10 to-cyan-400/10 shadow-lg" />

                          <span className="absolute -right-1 top-1 rounded-md bg-cyan-400/10 px-1 py-0.5 text-[5px] text-cyan-300">
                            SALE
                          </span>
                        </div>

                        <p className="mt-2 text-[7px] font-medium text-white/55">
                          Product C
                        </p>

                        <div className="mt-1 flex items-center justify-between">
                          <span className="text-[8px] font-semibold text-white/70">
                            ₹1,899
                          </span>

                          <span className="text-[7px] text-cyan-300">+</span>
                        </div>
                      </div>
                    </div>

                    {/* Flying Product */}
                    <div className="pointer-events-none absolute left-[27%] top-10 z-20 animate-[bounce_3s_ease-in-out_infinite]">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-blue-300/20 bg-blue-400/10 shadow-[0_0_20px_rgba(59,130,246,0.25)] backdrop-blur-xl">
                        <span className="text-[11px]">◈</span>
                      </div>
                    </div>
                  </div>

                  {/* =================================================
                SHOPPING STEPS
            ================================================= */}
                  <div className="relative">
                    {/* Connecting Line */}
                    <div className="absolute left-[8%] right-[8%] top-6 hidden h-px bg-gradient-to-r from-blue-400/25 via-violet-400/30 to-emerald-400/30 sm:block" />

                    <div className="grid grid-cols-4 gap-2">
                      {/* Product */}
                      <div className="relative z-10 flex flex-col items-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-400/[0.07]">
                          <span className="text-sm">◈</span>
                        </div>

                        <p className="mt-2 text-[8px] font-semibold text-white/60">
                          Product
                        </p>

                        <p className="mt-0.5 text-[6px] text-white/25">
                          Browse
                        </p>
                      </div>

                      {/* Cart */}
                      <div className="relative z-10 flex flex-col items-center">
                        <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/[0.07]">
                          <span className="text-sm">🛒</span>

                          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-violet-400/80 text-[6px] font-bold text-white">
                            3
                          </span>
                        </div>

                        <p className="mt-2 text-[8px] font-semibold text-white/60">
                          Cart
                        </p>

                        <p className="mt-0.5 text-[6px] text-white/25">
                          Add items
                        </p>
                      </div>

                      {/* Checkout */}
                      <div className="relative z-10 flex flex-col items-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.07]">
                          <span className="text-sm text-cyan-300">→</span>
                        </div>

                        <p className="mt-2 text-[8px] font-semibold text-white/60">
                          Checkout
                        </p>

                        <p className="mt-0.5 text-[6px] text-white/25">
                          Secure pay
                        </p>
                      </div>

                      {/* Order */}
                      <div className="relative z-10 flex flex-col items-center">
                        <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.07] shadow-[0_0_25px_rgba(52,211,153,0.1)]">
                          <span className="text-sm text-emerald-300">✓</span>

                          <span className="absolute -right-1 -top-1 h-2 w-2 animate-ping rounded-full bg-emerald-400/60" />
                        </div>

                        <p className="mt-2 text-[8px] font-semibold text-white/60">
                          Order
                        </p>

                        <p className="mt-0.5 text-[6px] text-emerald-300/50">
                          Confirmed
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* =================================================
                METRICS
            ================================================= */}
                  <div className="mt-6 grid grid-cols-3 gap-2">
                    {/* Orders */}
                    <div className="rounded-xl border border-white/10 bg-white/[0.018] p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[7px] text-white/30">Orders</span>

                        <span className="text-[8px] text-emerald-300">↗</span>
                      </div>

                      <div className="mt-2 flex items-end gap-1">
                        <span className="text-base font-bold text-white/80">
                          +1
                        </span>

                        <span className="mb-0.5 text-[6px] text-emerald-300/60">
                          today
                        </span>
                      </div>
                    </div>

                    {/* Revenue */}
                    <div className="rounded-xl border border-white/10 bg-white/[0.018] p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[7px] text-white/30">
                          Revenue
                        </span>

                        <span className="text-[8px] text-blue-300">₹</span>
                      </div>

                      <div className="mt-2 flex items-end gap-1">
                        <span className="text-base font-bold text-white/80">
                          +₹2.4K
                        </span>
                      </div>
                    </div>

                    {/* Customers */}
                    <div className="rounded-xl border border-white/10 bg-white/[0.018] p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[7px] text-white/30">
                          Customers
                        </span>

                        <span className="text-[8px] text-violet-300">●</span>
                      </div>

                      <div className="mt-2 flex items-end gap-1">
                        <span className="text-base font-bold text-white/80">
                          +1
                        </span>

                        <span className="mb-0.5 text-[6px] text-emerald-300/60">
                          new
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* =================================================
                CHECKOUT PROGRESS
            ================================================= */}
                  <div className="mt-4">
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-[6px] text-white/25">
                        Checkout Conversion
                      </span>

                      <span className="text-[7px] text-emerald-300/60">
                        86%
                      </span>
                    </div>

                    <div className="h-1 overflow-hidden rounded-full bg-white/5">
                      <div className="h-full w-[86%] rounded-full bg-gradient-to-r from-blue-400/60 via-violet-400/60 to-emerald-400/70 animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* =================================================
              LEFT FLOATING CART CARD
          ================================================= */}
                <div className="absolute bottom-12 left-0 z-30 hidden rounded-xl border border-white/10 bg-[#090c1b]/95 px-3 py-2 shadow-xl backdrop-blur-xl sm:block">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-400/10">
                      <span className="text-[10px]">🛒</span>
                    </div>

                    <div>
                      <p className="text-[8px] font-medium text-white/60">
                        Cart Updated
                      </p>

                      <p className="text-[7px] text-violet-300/50">
                        3 products added
                      </p>
                    </div>
                  </div>
                </div>

                {/* =================================================
              RIGHT FLOATING REVENUE CARD
          ================================================= */}
                <div className="absolute bottom-8 right-0 z-30 hidden rounded-xl border border-white/10 bg-[#090c1b]/95 px-3 py-2 shadow-xl backdrop-blur-xl sm:block">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-400/10">
                      <span className="text-[10px] text-emerald-300">₹</span>
                    </div>

                    <div>
                      <p className="text-[8px] font-medium text-white/60">
                        Revenue
                      </p>

                      <p className="text-[7px] text-emerald-300/60">+₹2,499</p>
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
            <div className="mb-20">
              <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9]">
                Introduction
              </p>
              <h2 className="mt-4 m-0 max-w-[600px] text-[31px] font-bold leading-[1.08] tracking-[-.04em] text-[#101828] sm:text-[38px] lg:text-[30px]">
                An Online Store Built Around the Customer Journey.
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
                  Akkurate Digital Solutions provides e-commerce development as
                  part of an integrated digital growth system. We begin with the
                  business objective, audience and customer journey before
                  deciding what should be created, optimized or measured.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={1}>
              <div className="h-full rounded-[24px] border border-gray-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,.08)]">
                <span className="text-[11px] font-bold text-[#1455d9]">
                  02 / COMMERCE
                </span>
                <h3 className="mt-5 m-0 text-[20px] font-bold tracking-[-.025em] text-[#101828]">
                  Connect catalogue, UX and conversion.
                </h3>
                <p className="mt-3 m-0 text-[13px] leading-6 text-gray-500">
                  The goal is not simply to create a catalogue. It is to make
                  product discovery, trust, checkout and measurement work as one
                  useful system for the business and its customers.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal direction="up">
          <div className="relative mx-auto mt-10 max-w-[1500px] rounded-[28px] border border-gray-200 bg-[#101828] p-6 shadow-[0_25px_70px_rgba(15,23,42,.12)] sm:p-8 lg:p-10">
            <div className="grid gap-7 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
              <div>
                <p className="m-0 text-[10px] font-bold uppercase tracking-[.18em] text-blue-300">
                  The Akkurate approach
                </p>
                <h3 className="mt-3 m-0 max-w-[650px] text-[25px] font-bold leading-tight tracking-[-.03em] text-white sm:text-[21px]">
                  Make every step from discovery to purchase easier to
                  understand.
                </h3>
                <p className="mt-4 max-w-[650px] text-[13px] leading-7 text-gray-300 sm:text-[14px]">
                  We connect store architecture, product information, UX,
                  technology, SEO, content and analytics so e-commerce is
                  treated as a complete customer journey.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  ["01", "Discover", "Find products"],
                  ["02", "Evaluate", "Build confidence"],
                  ["03", "Purchase", "Reduce friction"],
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
            <p className="m-0 text-[10px] font-bold uppercase tracking-[.18em] text-blue-300">
              The Business Problem We Solve
            </p>
            <h2 className="mt-4 m-0 text-[27px] font-bold leading-tight tracking-[-.03em] text-white sm:text-[34px] lg:text-[42px]">
              Great Products Still Need a Clear Buying Journey.
            </h2>
            <p className="mx-auto mt-5 max-w-[850px] text-[14px] leading-7 text-gray-300 sm:text-[15px]">
              Online stores lose sales through confusing navigation, weak
              product information, slow pages, trust gaps and checkout friction.
              Akkurate connects store architecture, UX, technology, content, SEO
              and conversion rather than treating e-commerce as only a
              catalogue.
            </p>

            <div className="mt-8 grid gap-3 text-left sm:grid-cols-3">
              {[
                [
                  "01",
                  "Discovery Friction",
                  "Customers should be able to move from categories and search to the right product without unnecessary confusion.",
                ],
                [
                  "02",
                  "Trust Gaps",
                  "Product information, value, specifications and buying signals need to be clear before customers commit.",
                ],
                [
                  "03",
                  "Checkout Friction",
                  "The final journey should be tested for usability, messaging, tracking and avoidable conversion barriers.",
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
            <Reveal direction="left">
              <div>
                <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9]">
                  E-Commerce Analytics / Performance
                </p>
                <h2 className="mt-3 m-0 text-[30px] font-bold leading-[1.08] tracking-[-.04em] text-[#101828] sm:text-[38px] lg:text-[31px]">
                  Measure the journey from product discovery to purchase.
                </h2>
                <p className="mt-5 max-w-[560px] text-[14px] leading-7 text-gray-600">
                  E-commerce performance should show where customers discover
                  products, how they engage with product pages, how often they
                  add items to cart and where the purchase journey needs
                  improvement.
                </p>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  {[
                    ["18.4K", "Qualified sessions"],
                    ["8.2%", "Add-to-cart rate"],
                    ["3.8%", "Conversion rate"],
                    ["₹4.8L", "Illustrative revenue"],
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
                    <span className="h-2 w-2 rounded bg-[#1455d9]" /> Orders
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded bg-blue-300" /> Traffic
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded bg-indigo-100" />{" "}
                    Conversion
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={1}>
              <div className="relative overflow-hidden rounded-[30px] border border-gray-200 bg-white p-4 shadow-[0_25px_70px_rgba(15,23,42,.08)] sm:p-6">
                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-100/50 blur-3xl" />

                <div className="relative">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-5">
                    <div>
                      <p className="m-0 text-[13px] font-bold text-[#101828]">
                        Store journey performance
                      </p>
                      <p className="mt-1 m-0 text-[10px] text-gray-400">
                        Illustrative monthly e-commerce trend
                      </p>
                    </div>
                    <span className="rounded-full bg-emerald-50 px-2.5 py-1.5 text-[7px] font-bold uppercase tracking-[.1em] text-emerald-600">
                      Performance view
                    </span>
                  </div>

                  <div className="mt-6 flex items-end gap-2">
                    {performanceData.map((item) => (
                      <div
                        key={item.month}
                        className="flex min-w-0 flex-1 flex-col items-center"
                      >
                        <div className="flex h-[190px] w-full items-end justify-center gap-1 rounded-xl bg-[#f8faff] px-1 pt-3">
                          <div
                            className={`w-[27%] rounded-t-md bg-indigo-100 transition-all duration-700 hover:bg-indigo-200 ${item.conversion}`}
                          />
                          <div
                            className={`w-[27%] rounded-t-md bg-blue-300 transition-all duration-700 hover:bg-blue-400 ${item.traffic}`}
                          />
                          <div
                            className={`w-[27%] rounded-t-md bg-[#1455d9] transition-all duration-700 hover:bg-[#073b91] ${item.orders}`}
                          />
                        </div>
                        <span className="mt-2 text-[7px] font-bold text-gray-400">
                          {item.month}
                        </span>
                      </div>
                    ))}
                  </div>

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
                          A stronger store connects traffic with a clearer path
                          to purchase.
                        </p>
                        <p className="mt-1 m-0 text-[8px] leading-5 text-gray-500">
                          The values shown are illustrative UI data. Actual KPIs
                          should be selected around the business objective.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {[
                      ["91%", "Product health"],
                      ["88%", "Journey clarity"],
                      ["84%", "Checkout health"],
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
          SERVICES
      ===================================================== */}
      <section
        id="ecommerce-services"
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
                  Our E-Commerce Development Services
                </h2>
              </div>
              <p className="max-w-[460px] text-[13px] leading-6 text-gray-500">
                Each capability communicates the purpose, execution and business
                value — not simply a list of technical tasks.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {storeServices.map((service, index) => (
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
                  Discuss your store goal
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

                <h2 className="mt-3 m-0 max-w-[560px] text-[31px] font-bold leading-[1.08] tracking-[-.04em] text-[#101828] sm:text-[20px]">
                  E-Commerce Development Should Fit Your Business.
                </h2>

                <p className="mt-5 max-w-[520px] text-[13px] leading-7 text-gray-500">
                  E-Commerce Development is relevant to businesses that have a
                  clear reason to improve their online store, customer journey
                  or digital sales experience.
                </p>

                <p className="mt-4 max-w-[520px] text-[13px] leading-7 text-gray-500">
                  Akkurate can recommend a focused e-commerce scope, a broader
                  integrated digital-growth program or a different service when
                  that is more appropriate.
                </p>
              </div>
            </Reveal>

            {/* RIGHT AUDIENCE CARDS */}
            <div className="grid gap-3 md:grid-cols-3">
              {audienceCards.map((card, index) => (
                <Reveal key={card.number} direction="up" delay={index}>
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
                      {card.number}
                    </span>

                    {/* TITLE */}
                    <h3 className="mt-5 text-[16px] font-bold text-[#101828]">
                      {card.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="mt-2 text-[11px] leading-5 text-gray-500">
                      {card.text}
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
              <h2 className="mt-3 m-0 text-[31px] font-bold leading-[1.08] tracking-[-.04em] text-white sm:text-[40px] lg:text-[35px]">
                A Practical E-Commerce Development Process.
              </h2>
              <p className="mt-5 text-[13px] leading-7 text-gray-400 sm:text-[14px]">
                A structured process keeps catalogue planning, UX, development,
                integrations, checkout testing and growth connected.
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
                  E-Commerce Development With a
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
                  {["Strategy", "Products", "UX", "SEO", "Growth"].map(
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
            <Reveal direction="left">
              <div className="relative min-h-[420px] overflow-hidden rounded-[28px] bg-[#101828] p-7 shadow-[0_25px_70px_rgba(15,23,42,.12)] sm:p-9">
                <div className="pointer-events-none absolute -right-24 -top-24 h-[260px] w-[260px] rounded-full border border-white/10" />
                <div className="pointer-events-none absolute -right-12 -top-12 h-[180px] w-[180px] rounded-full border border-white/10" />

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
                      One commerce system.
                      <br />
                      Multiple customer signals.
                    </h3>

                    <p className="mt-4 max-w-[400px] text-[12px] leading-6 text-gray-400 sm:text-[13px]">
                      Instead of treating e-commerce as a catalogue, we connect
                      products, content, UX, search, technology and conversion.
                    </p>
                  </div>

                  <div className="relative mt-10 h-[180px]">
                    <div className="absolute left-[22%] top-[50%] h-px w-[58%] bg-gradient-to-r from-blue-400/20 via-blue-400/70 to-blue-400/20" />
                    <div className="absolute left-[50%] top-[15%] h-[70%] w-px bg-gradient-to-b from-transparent via-blue-400/50 to-transparent" />

                    <div className="absolute left-1/2 top-1/2 flex h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-blue-300/30 bg-[#15233d] shadow-[0_0_40px_rgba(20,85,217,.2)]">
                      <div className="text-center">
                        <p className="m-0 text-[8px] font-bold uppercase tracking-[.12em] text-blue-300">
                          Commerce
                        </p>
                        <p className="mt-1 m-0 text-[11px] font-bold text-white">
                          Core
                        </p>
                      </div>
                    </div>

                    {[
                      ["PRODUCT", "top-[5%] left-[12%]"],
                      ["SEARCH", "top-[5%] right-[10%]"],
                      ["CART", "bottom-[5%] left-[10%]"],
                      ["DATA", "bottom-[5%] right-[15%]"],
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
                      commerce capabilities.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

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
        </div>
      </section>

      {/* =====================================================
          RELATED SERVICES / ORBIT
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
              Extend your brand with connected creative services that strengthen
              your visual identity, digital presence and audience engagement.
            </p>
          </div>

          {/* CARDS */}
          <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
                    Website Design
                  </h3>

                  <p className="mt-2 m-0 max-w-[270px] text-[10px] leading-[1.6] text-gray-400 sm:text-[11px]">
                    Create modern, responsive websites with clean visuals,
                    intuitive navigation and engaging user experiences.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[.12em] text-cyan-300/60 transition group-hover:text-cyan-300">
                  Explore service
                  <span className="h-px w-5 bg-cyan-400/30 transition-all duration-300 group-hover:w-8" />
                </div>
              </div>

              {/* WEBSITE DESIGN ORBIT */}
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
                      Design
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
              {/* Violet glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-[190px] w-[190px] rounded-full bg-violet-600/15 blur-[65px] transition duration-700 group-hover:bg-violet-500/25" />

              {/* Content */}
              <div className="relative z-20 flex h-full w-[58%] flex-col justify-between">
                <div>
                  <h3 className="mt-4 m-0 text-[17px] font-bold tracking-[-.025em] text-white sm:text-[18px]">
                    Logo Design
                  </h3>

                  <p className="mt-2 m-0 max-w-[270px] text-[10px] leading-[1.6] text-gray-400 sm:text-[11px]">
                    Build a memorable visual identity with distinctive logo
                    designs that make your brand instantly recognizable.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[.12em] text-violet-300/60 transition group-hover:text-violet-300">
                  Explore service
                  <span className="h-px w-5 bg-violet-400/30 transition-all duration-300 group-hover:w-8" />
                </div>
              </div>

              {/* LOGO DESIGN ORBIT */}
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
                    Logo
                  </span>
                </div>
              </div>

              {/* Arrow */}
              <div className="absolute bottom-4 right-4 z-30 flex h-8 w-8 items-center justify-center rounded-full border border-violet-400/20 bg-violet-500/10 text-[13px] text-violet-300 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-violet-500 group-hover:text-white">
                →
              </div>
            </Link>

            {/* =====================================================
          CONTENT CREATION CARD
      ===================================================== */}

            <Link
              to="/content-creation"
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
                    Content Creation
                  </h3>

                  <p className="mt-2 m-0 max-w-[275px] text-[10px] leading-[1.6] text-gray-400 sm:text-[11px]">
                    Create valuable and engaging content that connects with your
                    audience, builds trust and supports brand growth.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[.12em] text-orange-300/60 transition group-hover:text-orange-300">
                  Explore service
                  <span className="h-px w-5 bg-orange-400/30 transition-all duration-300 group-hover:w-8" />
                </div>
              </div>

              {/* CONTENT CREATION ORBIT */}
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
                    Content
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
                    to know about E-Commerce Development.
                  </span>
                </h2>

                <p className="mt-5 max-w-[430px] text-[12px] leading-6 text-gray-500 sm:text-[13px] sm:leading-7">
                  Have questions about store scope, product UX, integrations,
                  checkout, SEO or how e-commerce development fits into your
                  digital strategy? Find the answers below.
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
                        E-Commerce Development
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
              <div>
                <p className="m-0 text-[9px] font-bold uppercase tracking-[.18em] text-white/70">
                  Ready to Build?
                </p>
                <h3 className="mt-2 m-0 max-w-[650px] text-[26px] font-bold leading-[1.12] tracking-[-.035em] text-white sm:text-[22px]">
                  Build an online store that makes product discovery simple and
                  purchasing confident.
                </h3>
                <p className="mt-3 m-0 max-w-[650px] text-[12px] leading-6 text-white/75 sm:text-[13px]">
                  Tell us what you are trying to achieve, what you have already
                  tried and what outcome matters most. Akkurate can then
                  recommend the most practical next step.
                </p>
              </div>

              <a
                href="/contact"
                className="inline-flex w-fit items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-[11px] font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#073b91]"
              >
                Start Your E-Commerce Project
                <span className="ml-2 text-[15px]">→</span>
              </a>

              <div className="flex items-center gap-6 border-t border-white/20 pt-5 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
                <div>
                  <p className="m-0 text-[22px] font-bold text-white">UX</p>
                  <p className="mt-1 m-0 text-[8px] text-white/65">Clear</p>
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

            <div className="relative mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-4">
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[8px] text-blue-200">
                  01
                </span>
                <span className="text-[9px] font-medium text-white/55">
                  Discover
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
                  Grow
                </span>
              </div>

              <div className="ml-auto hidden items-center gap-2 sm:flex">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,.7)]" />
                <span className="text-[9px] font-medium text-white/45">
                  Let's make shopping easier
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

export default Ecom;

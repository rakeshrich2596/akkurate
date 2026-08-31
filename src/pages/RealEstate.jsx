import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../index.css";

const propertyCards = [
  {
    name: "Skyline Residences",
    location: "Kochi · 3 BHK",
    price: "₹82L",
    tag: "Featured",
    position: "top-[12%] left-[8%]",
    accent: "from-blue-100 to-indigo-100",
  },
  {
    name: "Palm Grove Villas",
    location: "Goa · 4 BHK",
    price: "₹1.24Cr",
    tag: "New",
    position: "top-[36%] right-[6%]",
    accent: "from-emerald-100 to-teal-100",
  },
  {
    name: "Urban Heights",
    location: "Chennai · 2 BHK",
    price: "₹58L",
    tag: "Popular",
    position: "bottom-[8%] left-[17%]",
    accent: "from-violet-100 to-purple-100",
  },
  {
    name: "Lakeview Enclave",
    location: "Coimbatore · 3 BHK",
    price: "₹74L",
    tag: "Verified",
    position: "bottom-[16%] right-[10%]",
    accent: "from-amber-100 to-orange-100",
  },
];

const propertyJourney = [
  { label: "Search", icon: "⌕" },
  { label: "Property View", icon: "↗" },
  { label: "Shortlist", icon: "♡" },
  { label: "Enquiry", icon: "→" },
];

const enquiryFunnel = [
  { label: "Property Searches", value: 100 },
  { label: "Property Views", value: 72 },
  { label: "Shortlists", value: 46 },
  { label: "Enquiries", value: 27 },
  { label: "Site Visits", value: 14 },
];

const opportunities = [
  {
    number: "01",
    title: "Location SEO",
    description:
      "Develop this around real real estate customer intent, commercial context and proof. The final page should include examples and evidence specific to Akkurate's actual experience rather than generic claims.",
  },
  {
    number: "02",
    title: "Property Landing Pages",
    description:
      "Develop this around real real estate customer intent, commercial context and proof. The final page should include examples and evidence specific to Akkurate's actual experience rather than generic claims.",
  },
  {
    number: "03",
    title: "Google & Meta Ads",
    description:
      "Develop this around real real estate customer intent, commercial context and proof. The final page should include examples and evidence specific to Akkurate's actual experience rather than generic claims.",
  },
  {
    number: "04",
    title: "Remarketing",
    description:
      "Develop this around real real estate customer intent, commercial context and proof. The final page should include examples and evidence specific to Akkurate's actual experience rather than generic claims.",
  },
  {
    number: "05",
    title: "Lead Qualification",
    description:
      "Develop this around real real estate customer intent, commercial context and proof. The final page should include examples and evidence specific to Akkurate's actual experience rather than generic claims.",
  },
  {
    number: "06",
    title: "Conversion UX",
    description:
      "Develop this around real real estate customer intent, commercial context and proof. The final page should include examples and evidence specific to Akkurate's actual experience rather than generic claims.",
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
      "Improve landing pages, forms, calls to action, trust elements and enquiry/booking/purchase paths.",
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
      "Why should a real estate business use industry-specific digital marketing?",
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
          threshold: 0.01,
          rootMargin: "0px 0px 80px 0px",
        }
      );

      elements.forEach((element) => observer.observe(element));
    }, 50);

    return () => {
      clearTimeout(timer);
      if (observer) observer.disconnect();
    };
  }, [location.pathname]);

  
}

export default function RealEstate() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeJourney, setActiveJourney] = useState(0);
  const [selectedProperty, setSelectedProperty] = useState(0);

  useEffect(() => {
    const journeyTimer = setInterval(() => {
      setActiveJourney((current) => (current + 1) % propertyJourney.length);
    }, 1700);

    return () => clearInterval(journeyTimer);
  }, []);

  useEffect(() => {
    document.title =
      "Real Estate Digital Marketing Services | SEO, Google Ads & Lead Generation | Akkurate";

    const description =
      "Grow real estate businesses with industry-focused SEO, content, paid media, websites and conversion strategies from Akkurate Digital Solutions.";

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
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#f7faff] px-14 py-14 sm:py-18 lg:py-20">
          <div className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-blue-100/60 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[320px] w-[320px] rounded-full bg-indigo-100/50 blur-3xl" />

          <div className="relative mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 xl:px-10">
            <div className="mb-8 flex flex-wrap items-center gap-2 text-[11px] font-medium text-gray-500">
              <Link to="/" className="transition hover:text-[#1455d9]">
                Home
              </Link>
              <span>/</span>
              <span>Industries</span>
              <span>/</span>
              <span className="text-[#1455d9]">Real Estate</span>
            </div>

            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
              {/* LEFT CONTENT */}
              <div data-animate="left" className="max-w-[760px] pt-8">
                <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1455d9] sm:text-[11px]">
                  Real Estate Digital Marketing
                </p>

                <h1 data-animate="center" className="mt-4 m-0 max-w-[760px] text-[34px] font-bold leading-[1.06] tracking-[-0.04em] sm:text-[44px] md:text-[50px] lg:text-[31px]">
                  Digital Marketing for Real Estate Businesses That Need Better
                  Visibility, Trust &amp; Leads
                </h1>

                <p className="mt-6 max-w-[680px] text-[14px] leading-7 text-gray-600 sm:text-[16px]">
                  Real Estate customers have a specific buying journey. Akkurate
                  builds digital strategies around the questions, comparisons,
                  trust signals and conversion actions that matter in this
                  market.
                </p>

                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center rounded-full bg-[#073b91] px-6 py-3.5 text-[13px] font-bold text-white shadow-[0_10px_30px_rgba(7,59,145,.16)] transition duration-300 hover:-translate-y-1 hover:bg-[#052f75]"
                >
                  Build My Industry Growth Strategy
                  <span className="ml-2">→</span>
                </Link>
              </div>

              {/* RIGHT HERO — PROPERTY SEARCH MAP */}
              <div data-animate="right" className="relative">
                <div className="absolute -inset-8 rounded-[40px] bg-[#1455d9]/10 blur-3xl" />

                <div className="relative w-full max-w-[650px] overflow-hidden rounded-[28px] border border-blue-100 bg-white p-4 shadow-[0_25px_70px_rgba(15,23,42,.10)] sm:p-5 animate-[realEstateFloat_6s_ease-in-out_infinite]">
                  {/* MAP / GRID */}
                  <div className="relative h-[390px] overflow-hidden rounded-[22px] border border-blue-100 bg-[#f4f8ff]">
                    {/* grid */}
                    <div className="absolute inset-0 opacity-60">
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,85,217,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(20,85,217,.07)_1px,transparent_1px)] bg-[size:34px_34px]" />
                      <div className="absolute left-[10%] top-[22%] h-[2px] w-[78%] rotate-[16deg] bg-blue-200/60" />
                      <div className="absolute left-[3%] top-[56%] h-[2px] w-[88%] rotate-[-11deg] bg-blue-200/60" />
                      <div className="absolute left-[30%] top-[4%] h-[88%] w-[2px] rotate-[17deg] bg-blue-200/50" />
                      <div className="absolute left-[67%] top-[3%] h-[92%] w-[2px] rotate-[-12deg] bg-blue-200/50" />
                    </div>

                    {/* map label */}
                    <div className="absolute left-4 top-4 z-20 rounded-full border border-white/80 bg-white/90 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-[#1455d9] shadow-sm backdrop-blur">
                      Property Search
                    </div>

                    {/* animated journey path */}
                    <div className="absolute left-[15%] top-[47%] z-10 h-[2px] w-[70%] overflow-hidden rounded-full bg-blue-200/70 rotate-[7deg]">
                      <div className="h-full w-1/4 bg-[#1455d9] animate-[mapPulseLine_2.2s_linear_infinite]" />
                    </div>

                    {/* property markers */}
                    {propertyCards.map((property, index) => {
                      const isSelected = selectedProperty === index;

                      return (
                        <button
                          key={property.name}
                          type="button"
                          onClick={() => setSelectedProperty(index)}
                          className={`absolute ${property.position} z-20 w-[155px] rounded-[16px] border bg-white p-2.5 text-left shadow-[0_12px_30px_rgba(15,23,42,.10)] transition-all duration-500 animate-[propertyCardIn_.7s_ease-out_both] ${
                            isSelected
                              ? "border-[#1455d9] -translate-y-1 scale-[1.03] shadow-[0_16px_35px_rgba(20,85,217,.18)]"
                              : "border-white/80 hover:-translate-y-1 hover:border-blue-200"
                          }`}
                          style={{ animationDelay: `${0.35 + index * 0.12}s` }}
                        >
                          <div className={`relative h-16 overflow-hidden rounded-xl bg-gradient-to-br ${property.accent}`}>
                            <div className="absolute left-3 top-3 h-7 w-9 rounded-md border border-white/70 bg-white/45" />
                            <div className="absolute right-3 top-2 h-9 w-11 rounded-md border border-white/70 bg-white/40" />
                            <div className="absolute bottom-0 left-0 h-5 w-full bg-white/40" />
                            <span className={`absolute right-2 top-2 rounded-full bg-white/90 px-1.5 py-0.5 text-[7px] font-bold text-[#1455d9] ${isSelected ? "animate-[softPulse_1.8s_ease-in-out_infinite]" : ""}`}>
                              {property.tag}
                            </span>
                          </div>

                          <div className="mt-2 flex items-start justify-between gap-2">
                            <div className="min-w-0">
                              <p className="m-0 truncate text-[10px] font-bold text-[#101828]">
                                {property.name}
                              </p>
                              <p className="mt-0.5 truncate text-[8px] text-gray-500">
                                {property.location}
                              </p>
                            </div>

                            {isSelected && (
                              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#073b91] text-[9px] text-white animate-[checkPop_.35s_ease-out_both]">
                                ✓
                              </span>
                            )}
                          </div>

                          <p className="mt-1.5 m-0 text-[10px] font-bold text-[#1455d9]">
                            {property.price}
                          </p>
                        </button>
                      );
                    })}

                    {/* center location pin */}
                    <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                      <div className="absolute -inset-4 rounded-full bg-[#1455d9]/10 animate-[pinRipple_2s_ease-out_infinite]" />
                      <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-[#073b91] text-sm text-white shadow-[0_8px_20px_rgba(7,59,145,.25)]">
                        ◆
                      </div>
                    </div>

                    {/* selected property mini panel */}
                    <div className="absolute bottom-4 left-4 right-4 z-30 flex items-center justify-between gap-3 rounded-[16px] border border-white/80 bg-white/95 px-3 py-2.5 shadow-[0_12px_30px_rgba(15,23,42,.10)] backdrop-blur animate-[panelRise_.6s_ease-out_both]">
                      <div className="min-w-0">
                        <p className="m-0 text-[8px] font-bold uppercase tracking-[0.12em] text-gray-400">
                          Selected Property
                        </p>
                        <p className="mt-0.5 truncate text-[11px] font-bold text-[#101828]">
                          {propertyCards[selectedProperty].name}
                        </p>
                      </div>
                      <span className="shrink-0 rounded-full bg-blue-50 px-2.5 py-1 text-[9px] font-bold text-[#1455d9]">
                        View Property →
                      </span>
                    </div>
                  </div>

                  {/* JOURNEY PULSE */}
                  <div className="mt-4 rounded-[18px] border border-gray-100 bg-[#f8fbff] p-3">
                    <div className="flex items-center justify-between gap-2">
                      <p className="m-0 text-[9px] font-bold uppercase tracking-[0.14em] text-[#1455d9]">
                        Customer Journey
                      </p>
                      <span className="text-[9px] text-gray-400">
                        Live flow
                      </span>
                    </div>

                    <div className="mt-3 grid grid-cols-4 gap-1.5">
                      {propertyJourney.map((step, index) => {
                        const active = index === activeJourney;

                        return (
                          <div key={step.label} className="relative flex items-center">
                            <div
                              className={`relative flex min-h-[48px] w-full flex-col items-center justify-center rounded-xl border px-1 text-center transition-all duration-500 ${
                                active
                                  ? "border-[#1455d9]/30 bg-blue-50 text-[#073b91] shadow-[0_8px_20px_rgba(20,85,217,.10)]"
                                  : "border-gray-100 bg-white text-gray-400"
                              }`}
                            >
                              {active && (
                                <span className="absolute -inset-1 rounded-xl border border-[#1455d9]/20 animate-[journeyRipple_1.7s_ease-out_infinite]" />
                              )}

                              <span className={`text-[13px] ${active ? "animate-[iconBounce_.8s_ease-in-out_infinite]" : ""}`}>
                                {step.icon}
                              </span>
                              <span className="mt-0.5 text-[7px] font-bold uppercase tracking-wide sm:text-[8px]">
                                {step.label}
                              </span>
                            </div>

                            {index < 3 && (
                              <span className={`px-0.5 text-[9px] transition-colors duration-500 ${active ? "text-[#1455d9]" : "text-gray-300"}`}>
                                →
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY REAL ESTATE MARKETING */}
        <section className="px-14 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto grid w-full max-w-[1400px] gap-10 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 lg:px-8 xl:px-10">
            <div data-animate="left">
              <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
                The Business Problem
              </p>

              <h2 data-animate="center" className="mt-4 m-0 text-[30px] font-bold leading-tight tracking-[-0.03em] sm:text-[33px]">
                Why Real Estate Marketing Needs a Specialized Approach
              </h2>
            </div>

            <div data-animate="right">
              <p className="m-0 text-[14px] leading-7 text-gray-600 sm:text-[16px] sm:leading-8">
                A generic digital marketing package rarely reflects the way real
                estate buyers search, compare and decide. The website should use
                industry language, answer relevant questions, demonstrate
                credible expertise and connect discovery channels to a clear
                commercial next step.
              </p>

              <p className="mt-5 text-[14px] leading-7 text-gray-600 sm:text-[16px] sm:leading-8">
                Akkurate maps the customer journey first and then selects the
                right mix of SEO, AEO, GEO, paid media, website, content and
                branding services.
              </p>
            </div>
          </div>
        </section>

        {/* DIGITAL OPPORTUNITIES */}
        <section className="bg-[#f7faff] px-14 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8 xl:px-10">
            <div data-animate="center" className="text-center">
              <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
                Digital Opportunities
              </p>

              <h2 className="mt-3 m-0 text-[30px] font-bold leading-tight tracking-[-0.03em] sm:text-[38px]">
                Key Digital Opportunities for Real Estate
              </h2>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {opportunities.map((item, index) => (
                <article
                  key={item.number}
                  data-animate="card"
                  data-delay={index + 1} className="group rounded-[22px] border border-gray-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,.04)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-[0_18px_45px_rgba(15,23,42,.08)] sm:p-7"
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


        {/* PERFORMANCE */}
        <section className="bg-[#f7faff] px-14 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 xl:px-10">
            <div className="grid items-center gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
              <div data-animate="left">
                <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
                  Performance
                </p>

                <h2
                  data-animate="center"
                  className="mt-4 m-0 max-w-[520px] text-[30px] font-bold leading-tight tracking-[-0.03em] sm:text-[38px]"
                >
                  Property Enquiry Funnel
                </h2>

                <p className="mt-5 max-w-[500px] text-[14px] leading-7 text-gray-600 sm:text-[15px] sm:leading-8">
                  Track the property journey from initial search through
                  property views, shortlists, enquiries and site visits.
                </p>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  <div className="rounded-[16px] border border-gray-200 bg-white p-4 shadow-sm">
                    <p className="m-0 text-[9px] font-bold uppercase tracking-[0.12em] text-gray-400">
                      Funnel start
                    </p>
                    <p className="mt-1 text-[23px] font-bold tracking-tight text-[#101828]">
                      100
                    </p>
                    <p className="mt-0.5 text-[10px] text-gray-500">
                      property searches
                    </p>
                  </div>

                  <div className="rounded-[16px] border border-gray-200 bg-white p-4 shadow-sm">
                    <p className="m-0 text-[9px] font-bold uppercase tracking-[0.12em] text-gray-400">
                      Final stage
                    </p>
                    <p className="mt-1 text-[23px] font-bold tracking-tight text-[#101828]">
                      14
                    </p>
                    <p className="mt-0.5 text-[10px] text-gray-500">
                      site visits
                    </p>
                  </div>
                </div>
              </div>

              <div
                data-animate="right"
                className="rounded-[24px] border border-gray-200 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,.06)] sm:p-7"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="m-0 text-[11px] font-bold text-[#101828]">
                      Conversion flow
                    </p>
                    <p className="mt-1 m-0 text-[10px] text-gray-400">
                      Illustrative funnel view
                    </p>
                  </div>

                  <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[9px] font-bold text-[#1455d9]">
                    5 stages
                  </span>
                </div>

                <div className="mt-6 space-y-3">
                  {enquiryFunnel.map((item, index) => (
                    <div
                      key={item.label}
                      data-animate="card"
                      data-delay={index + 1}
                      className="group"
                    >
                      <div className="mb-1.5 flex items-center justify-between gap-3">
                        <span className="text-[11px] font-bold text-[#101828]">
                          {item.label}
                        </span>
                        <span className="text-[11px] font-bold text-[#1455d9]">
                          {item.value}
                        </span>
                      </div>

                      <div className="h-3 overflow-hidden rounded-full bg-gray-100">
                        <div
                          className="h-full rounded-full bg-[#1455d9] transition-all duration-1000 ease-out group-hover:bg-[#073b91] animate-[funnelGrow_1.2s_ease-out_both]"
                          style={{
                            width: `${item.value}%`,
                            animationDelay: `${0.2 + index * 0.12}s`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
                  <span className="text-[10px] text-gray-400">
                    Search → Site visit
                  </span>
                  <span className="text-[11px] font-bold text-[#101828]">
                    14% of starting volume
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RECOMMENDED STRATEGY */}
        <section className="px-14 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto grid w-full max-w-[1400px] gap-10 px-4 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16 lg:px-8 xl:px-10">
            <div data-animate="left">
              <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
                Our Approach
              </p>

              <h2 data-animate="center" className="mt-4 m-0 text-[30px] font-bold leading-tight tracking-[-0.03em] sm:text-[38px]">
                Recommended Strategy
              </h2>

              <p className="mt-5 max-w-[470px] text-[14px] leading-7 text-gray-600 sm:text-[15px]">
                A structured approach that connects real estate audience
                research, discovery, content, conversion and measurement.
              </p>
            </div>

            <div className="space-y-3">
              {strategy.map((item, index) => (
                <div
                  key={item.number}
                  data-animate="card"
                  data-delay={index + 1}
                  className="flex gap-5 rounded-[18px] border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-6"
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

        {/* WHY AKKURATE */}
        <section className="bg-[#101828] px-14 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto grid w-full max-w-[1400px] gap-10 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-16 lg:px-8 xl:px-10">
            <div data-animate="left">
              <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-300">
                Why Choose Akkurate
              </p>

              <h2 className="mt-4 m-0 text-[30px] font-bold leading-tight tracking-[-0.03em] text-white sm:text-[38px]">
                Integrated Digital Growth for Real Estate
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {whyChoose.map((item, index) => (
                <div
                  key={item}
                  data-animate="card"
                  data-delay={index + 1} className="flex gap-3 rounded-[16px] border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.07]"
                >
                  <span className="mt-0.5 text-[14px] text-blue-300">✓</span>
                  <span className="text-[13px] leading-6 text-gray-300 sm:text-[14px]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-14 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 lg:px-8 xl:px-10">
            <div data-animate="left" className="lg:sticky lg:top-28 lg:self-start">
              <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1455d9] sm:text-[11px]">
                Frequently Asked Questions
              </p>

              <h2 data-animate="center" className="mt-4 m-0 max-w-[450px] text-[30px] font-bold leading-tight tracking-[-0.03em] sm:text-[38px]">
                Real Estate Marketing FAQs
              </h2>
            </div>

            <div data-animate="right" className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    key={faq.question}
                    data-animate="card" className="overflow-hidden rounded-[16px] border border-gray-200 bg-white transition-shadow duration-300 hover:shadow-[0_10px_35px_rgba(15,23,42,.05)]"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
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
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
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

        {/* FINAL CTA */}
        <section className="relative overflow-hidden bg-[#073b91] px-14 py-10 sm:py-12 lg:py-14">
          <div className="pointer-events-none absolute -right-32 -top-32 h-[320px] w-[320px] rounded-full bg-white/10 blur-3xl" />

          <div
            data-animate="center"
            className="relative mx-auto max-w-[1050px] px-4 text-center sm:px-6 lg:px-8"
          >
            <h2 className="mt-0 m-0 text-[30px] font-bold leading-tight tracking-[-0.03em] text-white sm:text-[38px] lg:text-[43px]">
              Ready to grow your real estate business online?
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
              <span className="ml-2">→</span>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

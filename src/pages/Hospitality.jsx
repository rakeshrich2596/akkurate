import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../index.css";
const roomOptions = [
  {
    name: "Deluxe Room",
    price: "₹8,500",
    meta: "2 Guests · 1 King Bed",
    accent: "bg-blue-50",
  },
  {
    name: "Ocean Suite",
    price: "₹14,800",
    meta: "3 Guests · 1 King Bed",
    accent: "bg-indigo-50",
  },
  {
    name: "Family Villa",
    price: "₹19,500",
    meta: "4 Guests · 2 Beds",
    accent: "bg-sky-50",
  },
];

const bookingDemand = [
  { month: "Jan", value: 42 },
  { month: "Feb", value: 55 },
  { month: "Mar", value: 48 },
  { month: "Apr", value: 68 },
  { month: "May", value: 76 },
  { month: "Jun", value: 64 },
  { month: "Jul", value: 82 },
  { month: "Aug", value: 91 },
];

const opportunities = [
  {
    number: "01",
    title: "Hotel & Destination SEO",
    description:
      "Develop this around real hospitality customer intent, commercial context and proof. The final page should include examples and evidence specific to Akkurate's actual experience rather than generic claims.",
  },
  {
    number: "02",
    title: "Local Search",
    description:
      "Develop this around real hospitality customer intent, commercial context and proof. The final page should include examples and evidence specific to Akkurate's actual experience rather than generic claims.",
  },
  {
    number: "03",
    title: "Paid Demand Generation",
    description:
      "Develop this around real hospitality customer intent, commercial context and proof. The final page should include examples and evidence specific to Akkurate's actual experience rather than generic claims.",
  },
  {
    number: "04",
    title: "Social Video",
    description:
      "Develop this around real hospitality customer intent, commercial context and proof. The final page should include examples and evidence specific to Akkurate's actual experience rather than generic claims.",
  },
  {
    number: "05",
    title: "Website UX",
    description:
      "Develop this around real hospitality customer intent, commercial context and proof. The final page should include examples and evidence specific to Akkurate's actual experience rather than generic claims.",
  },
  {
    number: "06",
    title: "Direct Enquiry/Booking Journeys",
    description:
      "Develop this around real hospitality customer intent, commercial context and proof. The final page should include examples and evidence specific to Akkurate's actual experience rather than generic claims.",
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
      "Why should a hospitality business use industry-specific digital marketing?",
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
        },
      );

      elements.forEach((element) => observer.observe(element));
    }, 50);

    return () => {
      clearTimeout(timer);
      if (observer) observer.disconnect();
    };
  }, [location.pathname]);

  return (
    <style>{`
      [data-animate] {
        opacity: 0;
        will-change: transform, opacity;
      }

      [data-animate="left"] {
        transform: translateX(-35px);
        transition: opacity 0.45s ease-out, transform 0.45s ease-out;
      }

      [data-animate="left"].is-visible {
        opacity: 1;
        transform: translateX(0);
      }

      [data-animate="right"] {
        transform: translateX(35px);
        transition: opacity 0.45s ease-out, transform 0.45s ease-out;
      }

      [data-animate="right"].is-visible {
        opacity: 1;
        transform: translateX(0);
      }

      [data-animate="center"] {
        opacity: 0;
        transform: scaleX(0.88);
        transform-origin: center center;
        transition: opacity 0.45s ease-out, transform 0.45s ease-out;
      }

      [data-animate="center"].is-visible {
        opacity: 1;
        transform: scaleX(1);
      }

      [data-animate="card"] {
        opacity: 0;
        transform: translateY(22px) scale(0.98);
        transition: opacity 0.4s ease-out, transform 0.4s ease-out;
      }

      [data-animate="card"].is-visible {
        opacity: 1;
        transform: translateY(0) scale(1);
      }

      [data-delay="1"] { transition-delay: 0.02s; }
      [data-delay="2"] { transition-delay: 0.04s; }
      [data-delay="3"] { transition-delay: 0.06s; }
      [data-delay="4"] { transition-delay: 0.08s; }
      [data-delay="5"] { transition-delay: 0.10s; }
      [data-delay="6"] { transition-delay: 0.12s; }

      [data-animate="up"] {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.4s ease-out, transform 0.4s ease-out;
      }

      [data-animate="up"].is-visible {
        opacity: 1;
        transform: translateY(0);
      }

      @media (max-width: 767px) {
        [data-animate="left"] {
          transform: translateX(-20px);
        }

        [data-animate="right"] {
          transform: translateX(20px);
        }

        [data-animate="card"] {
          transform: translateY(15px) scale(0.99);
        }

        [data-animate="center"] {
          transform: scaleX(0.94);
        }
      }

      @media (prefers-reduced-motion: reduce) {
        [data-animate],
        [data-animate].is-visible {
          opacity: 1 !important;
          transform: none !important;
          transition: none !important;
        }
      }
    `}</style>
  );
}

export default function Hospitality() {
  const [openFaq, setOpenFaq] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(1);

  useEffect(() => {
    document.title =
      "Hospitality Digital Marketing Services | SEO, Ads & Local Search | Akkurate";

    const description =
      "Grow hospitality businesses with industry-focused SEO, content, paid media, websites and conversion strategies from Akkurate Digital Solutions.";

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
              <span className="text-[#1455d9]">Hospitality</span>
            </div>

            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
              {/* LEFT CONTENT */}
              <div data-animate="left" className="max-w-[760px] pt-8">
                <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1455d9] sm:text-[11px]">
                  Hospitality Digital Marketing
                </p>

                <h1
                  data-animate="center"
                  className="mt-4 m-0 max-w-[760px] text-[34px] font-bold leading-[1.06] tracking-[-0.04em] sm:text-[44px] md:text-[50px] lg:text-[31px]"
                >
                  Digital Marketing for Hospitality Businesses That Need Better
                  Visibility, Trust &amp; Leads
                </h1>

                <p className="mt-6 max-w-[680px] text-[14px] leading-7 text-gray-600 sm:text-[16px]">
                  Hospitality customers have a specific buying journey. Akkurate
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

              {/* RIGHT HERO — BOOKING JOURNEY */}
              <div data-animate="right" className="relative">
                <div className="absolute -inset-8 rounded-[40px] bg-[#1455d9]/10 blur-3xl" />

                <div
                  className="
      relative overflow-hidden rounded-[28px] border border-blue-100
      bg-white p-5
      shadow-[0_25px_70px_rgba(15,23,42,.10)]
      sm:p-6
      animate-[heroFloat_6s_ease-in-out_infinite]
    "
                >
                  {/* HEADER */}
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p
                        className="
            m-0 text-[10px] font-bold uppercase tracking-[0.18em]
            text-[#1455d9]
            animate-[fadeSlideDown_.6s_ease-out_both]
          "
                      >
                        Booking Journey
                      </p>

                      <p
                        className="
            mt-1 m-0 text-[12px] text-gray-500
            animate-[fadeSlideDown_.7s_ease-out_.1s_both]
          "
                      >
                        From destination discovery to confirmed booking
                      </p>
                    </div>

                    <span
                      className="
          rounded-full bg-green-50 px-3 py-1.5
          text-[10px] font-bold text-green-700
          animate-[softPulse_2.5s_ease-in-out_infinite]
        "
                    >
                      Live Journey
                    </span>
                  </div>

                  {/* BOOKING JOURNEY STEPS */}
                  <div className="mt-5 grid grid-cols-4 items-center gap-1.5">
                    {["Destination Search", "Hotel", "Room", "Booking"].map(
                      (step, index) => (
                        <div
                          key={step}
                          className="
              flex items-center
              animate-[fadeSlideUp_.6s_ease-out_both]
            "
                          style={{
                            animationDelay: `${index * 0.15}s`,
                          }}
                        >
                          <div
                            className={`
                w-full rounded-xl border px-2 py-2.5 text-center
                transition-all duration-500
                ${
                  index === 2
                    ? `
                      border-[#1455d9]/30
                      bg-blue-50
                      text-[#073b91]
                      shadow-[0_8px_20px_rgba(20,85,217,.10)]
                      animate-[stepGlow_2.5s_ease-in-out_infinite]
                    `
                    : `
                      border-gray-100
                      bg-gray-50
                      text-gray-500
                      hover:border-blue-100
                      hover:bg-blue-50/50
                    `
                }
              `}
                          >
                            <span className="block text-[9px] font-bold uppercase tracking-wide sm:text-[10px]">
                              {step}
                            </span>
                          </div>

                          {index < 3 && (
                            <span
                              className="
                  px-0.5 text-[10px] text-gray-300
                  animate-[arrowMove_1.8s_ease-in-out_infinite]
                "
                              style={{
                                animationDelay: `${index * 0.2}s`,
                              }}
                            >
                              →
                            </span>
                          )}
                        </div>
                      ),
                    )}
                  </div>

                  {/* BOOKING PANEL */}
                  <div
                    className="
        mt-5 rounded-[20px] border border-gray-100
        bg-[#f8fbff] p-4
        animate-[fadeSlideUp_.7s_ease-out_.35s_both]
      "
                  >
                    {/* DESTINATION SEARCH */}
                    <div
                      className="
          flex items-center gap-3 rounded-xl border border-gray-200
          bg-white px-3 py-2.5 shadow-sm
          transition-all duration-300
          hover:-translate-y-0.5
          hover:border-blue-200
          hover:shadow-[0_10px_25px_rgba(20,85,217,.08)]
        "
                    >
                      <span
                        className="
            flex h-8 w-8 items-center justify-center rounded-full
            bg-blue-50 text-[#1455d9]
            animate-[searchPulse_2.5s_ease-in-out_infinite]
          "
                      >
                        ⌕
                      </span>

                      <div className="min-w-0 flex-1">
                        <p className="m-0 text-[9px] font-bold uppercase tracking-[0.12em] text-gray-400">
                          Destination
                        </p>

                        <p className="mt-0.5 truncate text-[12px] font-bold text-[#101828]">
                          Goa, India · 12–15 Sep
                        </p>
                      </div>

                      <span
                        className="
            cursor-pointer text-[11px] font-bold text-[#1455d9]
            transition-all duration-300
            hover:translate-x-1
          "
                      >
                        Search
                      </span>
                    </div>

                    {/* ROOM HEADER */}
                    <div className="mt-4 flex items-center justify-between">
                      <p className="m-0 text-[11px] font-bold text-[#101828]">
                        Choose your stay
                      </p>

                      <span
                        className="
            text-[10px] text-gray-400
            animate-[swipeHint_2s_ease-in-out_infinite]
          "
                      >
                        Swipe to explore
                      </span>
                    </div>

                    {/* ROOM CARDS */}
                    <div
                      className="
          mt-3 flex gap-3 overflow-x-auto pb-2
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
                    >
                      {roomOptions.map((room, index) => {
                        const isSelected = selectedRoom === index;

                        return (
                          <button
                            key={room.name}
                            type="button"
                            onClick={() => setSelectedRoom(index)}
                            className={`
                group min-w-[175px] shrink-0 rounded-[16px]
                border p-3 text-left
                transition-all duration-500
                animate-[roomCardIn_.65s_ease-out_both]
                ${
                  isSelected
                    ? `
                      border-[#1455d9]
                      bg-white
                      shadow-[0_12px_30px_rgba(20,85,217,.14)]
                      -translate-y-1
                    `
                    : `
                      border-gray-200
                      bg-white
                      hover:-translate-y-1
                      hover:border-blue-200
                      hover:shadow-[0_10px_25px_rgba(15,23,42,.08)]
                    `
                }
              `}
                            style={{
                              animationDelay: `${0.45 + index * 0.12}s`,
                            }}
                          >
                            {/* ROOM IMAGE */}
                            <div
                              className={`
                  relative flex h-20 items-end overflow-hidden
                  rounded-xl ${room.accent} p-2
                  transition-transform duration-500
                  group-hover:scale-[1.02]
                `}
                            >
                              {/* Decorative room shapes */}
                              <div className="absolute left-3 top-3 h-5 w-5 rounded-full bg-white/30" />

                              <div className="absolute right-3 top-2 h-8 w-12 rounded-md bg-white/20" />

                              <div
                                className="
                    h-8 w-full rounded-lg border border-white/80
                    bg-white/70
                    transition-all duration-500
                    group-hover:translate-y-[-2px]
                  "
                              />
                            </div>

                            {/* ROOM INFO */}
                            <div className="mt-2.5 flex items-start justify-between gap-2">
                              <div>
                                <p className="m-0 text-[11px] font-bold text-[#101828]">
                                  {room.name}
                                </p>

                                <p className="mt-1 m-0 text-[9px] text-gray-500">
                                  {room.meta}
                                </p>
                              </div>

                              {isSelected && (
                                <span
                                  className="
                      flex h-5 w-5 shrink-0 items-center
                      justify-center rounded-full
                      bg-[#073b91] text-[10px] text-white
                      animate-[checkPop_.35s_ease-out_both]
                    "
                                >
                                  ✓
                                </span>
                              )}
                            </div>

                            {/* PRICE */}
                            <p className="mt-2 m-0 text-[11px] font-bold text-[#1455d9]">
                              {room.price}
                              <span className="font-normal text-gray-400">
                                {" "}
                                / night
                              </span>
                            </p>

                            {/* SELECTED INDICATOR */}
                            <div
                              className={`
                  mt-2 h-0.5 overflow-hidden rounded-full
                  bg-[#1455d9]
                  transition-all duration-500
                  ${isSelected ? "w-full opacity-100" : "w-0 opacity-0"}
                `}
                            />
                          </button>
                        );
                      })}
                    </div>

                    {/* SELECTED ROOM / BOOK NOW */}
                    <div
                      className="
          mt-3 flex items-center justify-between rounded-xl
          bg-[#073b91] px-4 py-3 text-white
          shadow-[0_10px_25px_rgba(7,59,145,.18)]
          transition-all duration-300
          hover:-translate-y-0.5
          hover:shadow-[0_15px_30px_rgba(7,59,145,.25)]
        "
                    >
                      <div>
                        <p className="m-0 text-[9px] uppercase tracking-[0.12em] text-blue-200">
                          Selected room
                        </p>

                        <p
                          key={roomOptions[selectedRoom].name}
                          className="
              mt-0.5 m-0 text-[12px] font-bold
              animate-[roomChange_.35s_ease-out_both]
            "
                        >
                          {roomOptions[selectedRoom].name}
                        </p>
                      </div>

                      <span
                        className="
            cursor-pointer text-[12px] font-bold
            transition-all duration-300
            hover:translate-x-1
          "
                      >
                        Book Now →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY HOSPITALITY MARKETING */}
        <section className="px-14 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto grid w-full max-w-[1400px] gap-10 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 lg:px-8 xl:px-10">
            <div data-animate="left" className="">
              <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
                The Business Problem
              </p>

              <h2
                data-animate="center"
                className="mt-4 m-0 text-[30px] font-bold leading-tight tracking-[-0.03em] sm:text-[33px]"
              >
                Why Hospitality Marketing Needs a Specialized Approach
              </h2>
            </div>

            <div data-animate="right" className="">
              <p className="m-0 text-[14px] leading-7 text-gray-600 sm:text-[16px] sm:leading-8">
                A generic digital marketing package rarely reflects the way
                hospitality buyers search, compare and decide. The website
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

        {/* DIGITAL OPPORTUNITIES */}
        <section className="bg-[#f7faff] px-14 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8 xl:px-10">
            <div data-animate="center" className="text-center">
              <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
                Digital Opportunities
              </p>

              <h2
                data-animate="center"
                className="mt-3 m-0 text-[30px] font-bold leading-tight tracking-[-0.03em] sm:text-[38px]"
              >
                Key Digital Opportunities for Hospitality
              </h2>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {opportunities.map((item, index) => (
                <article
                  key={item.number}
                  data-animate="card"
                  data-delay={index + 1}
                  className="group rounded-[22px] border border-gray-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,.04)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-[0_18px_45px_rgba(15,23,42,.08)] sm:p-7"
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
        <section className="px-14 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto grid w-full max-w-[1400px] gap-10 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-16 lg:px-8 xl:px-10">
            <div data-animate="left">
              <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
                Performance
              </p>
              <h2
                data-animate="center"
                className="mt-4 m-0 text-[30px] font-bold leading-tight tracking-[-0.03em] sm:text-[38px]"
              >
                Booking Demand
              </h2>
              <p className="mt-5 max-w-[470px] text-[14px] leading-7 text-gray-600 sm:text-[15px]">
                Track how booking interest changes across the year and use
                demand signals to guide campaigns, content and conversion
                priorities.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3">
                <div className="rounded-[16px] border border-gray-200 bg-white p-4 shadow-sm">
                  <p className="m-0 text-[9px] font-bold uppercase tracking-[0.12em] text-gray-400">
                    Peak demand
                  </p>
                  <p className="mt-2 m-0 text-[22px] font-bold text-[#101828]">
                    91%
                  </p>
                  <p className="mt-1 m-0 text-[10px] text-gray-500">
                    Illustrative index
                  </p>
                </div>
                <div className="rounded-[16px] border border-gray-200 bg-white p-4 shadow-sm">
                  <p className="m-0 text-[9px] font-bold uppercase tracking-[0.12em] text-gray-400">
                    Focus
                  </p>
                  <p className="mt-2 m-0 text-[22px] font-bold text-[#101828]">
                    Q3
                  </p>
                  <p className="mt-1 m-0 text-[10px] text-gray-500">
                    Highest demand period
                  </p>
                </div>
              </div>
            </div>

            <div
              data-animate="right"
              className="rounded-[24px] border border-gray-200 bg-white p-5 shadow-[0_15px_45px_rgba(15,23,42,.06)] sm:p-7"
            >
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="m-0 text-[11px] font-bold text-[#101828]">
                    Booking Demand Bar Chart
                  </p>
                  <p className="mt-1 m-0 text-[10px] text-gray-400">
                    Illustrative monthly demand index
                  </p>
                </div>
                <span className="rounded-full bg-blue-50 px-3 py-1.5 text-[9px] font-bold text-[#1455d9]">
                  Demand Index
                </span>
              </div>

              <div className="mt-7 flex h-[260px] items-end gap-2 border-b border-gray-100 sm:gap-3">
                {bookingDemand.map((item, index) => (
                  <div
                    key={item.month}
                    className="group flex h-full flex-1 flex-col justify-end"
                  >
                    <div className="mb-2 text-center text-[9px] font-bold text-[#1455d9] opacity-0 transition-opacity group-hover:opacity-100">
                      {item.value}%
                    </div>
                    <div
                      className="mx-auto w-full max-w-[48px] rounded-t-[10px] bg-[#1455d9] transition-all duration-500 group-hover:bg-[#073b91]"
                      style={{
                        height: `${item.value * 2.05}px`,
                        transitionDelay: `${index * 40}ms`,
                      }}
                    />
                    <span className="mt-2 text-center text-[9px] font-medium text-gray-500">
                      {item.month}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between text-[9px] text-gray-400">
                <span>Lower demand</span>
                <span>Higher demand</span>
              </div>
            </div>
          </div>
        </section>

        {/* RECOMMENDED STRATEGY */}
        <section className="px-14 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto grid w-full max-w-[1400px] gap-10 px-4 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16 lg:px-8 xl:px-10">
            <div data-animate="left" className="">
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
                A structured approach that connects hospitality audience
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
            <div data-animate="left" className="">
              <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-300">
                Why Choose Akkurate
              </p>

              <h2
                data-animate="center"
                className="mt-4 m-0 text-[30px] font-bold leading-tight tracking-[-0.03em] text-white sm:text-[38px]"
              >
                Integrated Digital Growth for Hospitality
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {whyChoose.map((item, index) => (
                <div
                  key={item}
                  data-animate="card"
                  data-delay={index + 1}
                  className="flex gap-3 rounded-[16px] border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.07]"
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
                Hospitality Marketing FAQs
              </h2>
            </div>

            <div data-animate="right" className="space-y-3">
              {faqs.map((faq) => {
                const index = faqs.indexOf(faq);
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
            <h2 className="mt-0 m-0 text-[30px] font-bold leading-tight tracking-[-0.03em] text-white sm:text-[38px] lg:text-[45px]">
              Ready to grow your hospitality business online?
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

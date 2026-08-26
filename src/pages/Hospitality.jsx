import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

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
        }
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

                <h1 data-animate="center" className="mt-4 m-0 max-w-[760px] text-[34px] font-bold leading-[1.06] tracking-[-0.04em] sm:text-[44px] md:text-[50px] lg:text-[31px]">
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

              {/* RIGHT HERO IMAGE */}
              <div data-animate="right" className="relative flex items-center justify-center">
                <div className="absolute -inset-8 rounded-[40px] bg-[#1455d9]/10 blur-3xl" />

                <div className="relative w-full max-w-[600px] overflow-hidden rounded-[28px] border border-blue-100 bg-white p-2 shadow-[0_25px_70px_rgba(15,23,42,.10)]">
                  <img
                    src="/assets/images/content_images/hospitality.png"
                    alt="Hospitality Digital Marketing"
                    className="h-auto w-full rounded-[22px] object-cover transition-transform duration-500 hover:scale-[1.02]"
                  />
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

              <h2 data-animate="center" className="mt-4 m-0 text-[30px] font-bold leading-tight tracking-[-0.03em] sm:text-[33px]">
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

              <h2 data-animate="center" className="mt-3 m-0 text-[30px] font-bold leading-tight tracking-[-0.03em] sm:text-[38px]">
                Key Digital Opportunities for Hospitality
              </h2>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {opportunities.map((item, index) => (
                <article
                  key={item.number}
                  data-animate="card" data-delay={index + 1} className="group rounded-[22px] border border-gray-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,.04)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-[0_18px_45px_rgba(15,23,42,.08)] sm:p-7"
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

        {/* RECOMMENDED STRATEGY */}
        <section className="px-14 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto grid w-full max-w-[1400px] gap-10 px-4 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16 lg:px-8 xl:px-10">
            <div data-animate="left" className="">
              <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
                Our Approach
              </p>

              <h2 data-animate="center" className="mt-4 m-0 text-[30px] font-bold leading-tight tracking-[-0.03em] sm:text-[38px]">
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
                  data-animate="card" data-delay={index + 1} className="flex gap-5 rounded-[18px] border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-6"
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

              <h2 data-animate="center" className="mt-4 m-0 text-[30px] font-bold leading-tight tracking-[-0.03em] text-white sm:text-[38px]">
                Integrated Digital Growth for Hospitality
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {whyChoose.map((item, index) => (
                <div
                  key={item}
                  data-animate="card" data-delay={index + 1} className="flex gap-3 rounded-[16px] border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.07]"
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
                    data-animate="card" data-delay={index + 1} className="overflow-hidden rounded-[16px] border border-gray-200 bg-white transition-shadow duration-300 hover:shadow-[0_10px_35px_rgba(15,23,42,.05)]"
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

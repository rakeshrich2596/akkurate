import React, { useState } from "react";
import { Link } from "react-router-dom";

/*
  Google Business Profile
  Content follows the supplied Akkurate PDF.
  Animations use the existing global ScrollAnimations.jsx.
*/

const services = [
  {
    number: "01",
    title: "Profile Optimization",
    description:
      "Review categories, services, descriptions, contact information, business details and other relevant profile fields.",
  },
  {
    number: "02",
    title: "Business Information Consistency",
    description:
      "Keep core business information consistent across the website and important digital properties.",
  },
  {
    number: "03",
    title: "Local Content",
    description:
      "Create useful location-focused content that supports local intent rather than repeating city names unnaturally.",
  },
  {
    number: "04",
    title: "Review Support",
    description:
      "Develop a practical process for encouraging genuine customer feedback and responding professionally.",
  },
  {
    number: "05",
    title: "Local Landing Pages",
    description:
      "Connect the profile with relevant, useful location/service pages on the website.",
  },
  {
    number: "06",
    title: "Performance Monitoring",
    description:
      "Monitor visibility and customer actions where available and use findings to improve local strategy.",
  },
];

const outcomes = [
  "Stronger local relevance",
  "Clearer business information",
  "Better local customer journeys",
  "More useful location pages",
  "Improved review processes",
  "Connected local SEO",
];

const processSteps = [
  {
    number: "01",
    title: "Local Audit",
    description:
      "Understand the business objective, audience, current assets, constraints and success criteria before recommending the work.",
  },
  {
    number: "02",
    title: "Profile Optimization",
    description:
      "Translate the objective into a practical strategy, scope, content/creative direction and measurement plan.",
  },
  {
    number: "03",
    title: "Website & Local Content",
    description:
      "Create, optimize, design, develop or launch the agreed work with brand and user requirements in mind.",
  },
  {
    number: "04",
    title: "Review & Reputation Process",
    description:
      "Test the experience, tracking, messaging and key conversion paths before considering the work complete.",
  },
  {
    number: "05",
    title: "Monitoring & Improvement",
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
    question: "What is included in your google business profile service?",
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
      "Can your google business profile service be combined with SEO, paid media or website development?",
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

function GoogleBusiness() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="w-full overflow-hidden bg-white text-[#111827]">
      <section className="relative overflow-hidden bg-[#f7faff] px-14 pb-14 pt-14 sm:pb-18 sm:pt-18 lg:pb-20 lg:pt-20">
        <div className="pointer-events-none absolute -right-32 -top-32 h-[350px] w-[350px] rounded-full bg-blue-100/60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[300px] w-[300px] rounded-full bg-indigo-100/50 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="mb-8 flex items-center gap-2 text-[11px] font-medium text-gray-500 sm:text-[12px]">
            <Link to="/" className="transition hover:text-[#1455d9]">
              Home
            </Link>
            <span>/</span>
            <span>Services</span>
            <span>/</span>
            <span className="text-[#1455d9]">Google Business Profile</span>
          </div>

          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1.05fr_0.95fr] lg:gap-12 xl:grid-cols-[1fr_0.9fr] xl:gap-16">
            <div className="max-w-[760px]">
              <div className="mb-4 inline-flex items-center rounded-full border border-blue-100 bg-white px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#1455d9] shadow-sm sm:text-[11px]">
                Google Business Profile
              </div>

              <h1
                data-animate="left"
                className="m-0 max-w-[720px] text-[32px] font-bold leading-[1.08] tracking-[-0.035em] text-[#101828] sm:text-[40px] md:text-[44px] lg:text-[40px] xl:text-[45px]"
              >
                Be Easier to Find in Local Search
              </h1>

              <p className="mt-5 max-w-[650px] text-[14px] leading-6 text-gray-600 sm:text-[15px] sm:leading-7 lg:text-[16px] lg:leading-7">
                Improve local visibility with Google Business Profile
                optimization, accurate business information, local content and
                reputation support — built around your audience, business
                objective and measurable customer journey.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#073b91] px-6 py-3 text-[13px] font-bold text-white shadow-[0_10px_25px_rgba(7,59,145,0.16)] transition duration-300 hover:-translate-y-1 hover:bg-[#052f75]"
                >
                  Talk to Our Team <span className="ml-2">→</span>
                </Link>
              </div>
            </div>

            <div className="relative flex min-h-[280px] items-center justify-center md:min-h-[360px] lg:min-h-[430px]">
              <div className="absolute inset-8 rounded-full bg-blue-100/60 blur-3xl" />
              <div
                data-animate="right"
                className="relative z-10 w-full max-w-[560px] overflow-hidden rounded-[24px] bg-white p-2 shadow-[0_20px_60px_rgba(15,23,42,0.10)]"
              >
                <img
                  src="/assets/images/content_images/GB-OPTI.png"
                  alt="Google Business Profile"
                  className="h-auto w-full rounded-[18px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-14 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1600px] gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 lg:px-8 xl:px-10">
          <div>
            <p className="m-0 text-[10px] font-bold uppercase tracking-[0.18em] text-[#1455d9] sm:text-[11px]">
              Introduction
            </p>
            <h2
              data-animate="left"
              className="mt-3 m-0 text-[27px] font-bold leading-tight tracking-[-0.03em] text-[#101828] sm:text-[34px] lg:text-[40px]"
            >
              Google Business Profile Built Around Business Growth
            </h2>
          </div>
          <div>
            <p className="m-0 text-[14px] leading-7 text-gray-600 sm:text-[15px] sm:leading-7">
              Akkurate Digital Solutions provides google business profile as
              part of an integrated digital growth system. We begin with the
              business objective, audience and customer journey before deciding
              what should be created, optimized or measured.
            </p>
            <p className="mt-4 text-[14px] leading-7 text-gray-600 sm:text-[15px] sm:leading-7">
              The goal is not simply to deliver an asset or run a channel; it is
              to make the work useful to the business.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#101828] px-14 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-4 text-center sm:px-6 lg:px-8">
          <p className="m-0 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-300 sm:text-[11px]">
            The Business Problem We Solve
          </p>
          <h2
            data-animate="center"
            className="mt-4 m-0 text-[27px] font-bold leading-tight tracking-[-0.03em] text-white sm:text-[34px] lg:text-[42px]"
          >
            Google Business Profile With a Clear Commercial Purpose
          </h2>
          <p className="mx-auto mt-5 max-w-[900px] text-[14px] leading-7 text-gray-300 sm:text-[15px] sm:leading-7">
            Local search is often about trust and convenience. Customers want to
            know whether a business is relevant, nearby, credible and easy to
            contact. Akkurate connects the Business Profile with the website and
            wider local SEO system rather than treating it as an isolated
            listing.
          </p>
        </div>
      </section>

      <section className="px-14 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="text-center">
            <p className="m-0 text-[10px] font-bold uppercase tracking-[0.18em] text-[#1455d9] sm:text-[11px]">
              Our Services
            </p>
            <h2
              data-animate="left"
              className="mt-3 m-0 text-[29px] font-bold leading-tight tracking-[-0.03em] text-[#101828] sm:text-[36px]"
            >
              Our Google Business Profile Services
            </h2>
          </div>

          <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.number}
                data-animate="card"
                data-delay={(index % 6) + 1}
                className="group rounded-[20px] border border-gray-200 bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-[0_15px_40px_rgba(0,0,0,0.07)] sm:p-6"
              >
                <div className="flex items-start justify-between">
                  <span className="text-[11px] font-bold tracking-[0.14em] text-[#1455d9]">
                    {service.number}
                  </span>
                  <span className="text-[19px] text-gray-300 transition group-hover:text-[#1455d9]">
                    ↗
                  </span>
                </div>
                <h3 className="mt-6 m-0 text-[18px] font-bold leading-snug text-[#101828] sm:text-[19px]">
                  {service.title}
                </h3>
                <p className="mt-3 m-0 text-[13px] leading-6 text-gray-500 sm:text-[14px]">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7faff] px-14 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1600px] gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-14 lg:px-8 xl:px-10">
          <div>
            <p className="m-0 text-[10px] font-bold uppercase tracking-[0.18em] text-[#1455d9] sm:text-[11px]">
              What You Get
            </p>
            <h2
              data-animate="left"
              className="mt-3 m-0 text-[29px] font-bold leading-tight tracking-[-0.03em] text-[#101828] sm:text-[36px] lg:text-[42px]"
            >
              What You Get From Akkurate
            </h2>
            <p className="mt-5 m-0 text-[14px] leading-7 text-gray-600 sm:text-[15px]">
              The exact outcome depends on the starting point, competition,
              audience, budget, implementation and business model. Our job is to
              create the conditions for measurable improvement and to report
              honestly on what is working.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {outcomes.map((outcome, index) => (
              <div
                key={outcome}
                data-animate="card"
                data-delay={(index % 6) + 1}
                className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-4 shadow-sm"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#073b91] text-[10px] font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-[13px] font-semibold text-[#101828] sm:text-[14px]">
                  {outcome}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-14 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[950px] px-4 text-center sm:px-6 lg:px-8">
          <p className="m-0 text-[10px] font-bold uppercase tracking-[0.18em] text-[#1455d9]">
            Who This Service Is For
          </p>
          <h2
            data-animate="center"
            className="mt-3 m-0 text-[29px] font-bold leading-tight tracking-[-0.03em] text-[#101828] sm:text-[36px] lg:text-[42px]"
          >
            Google Business Profile Should Fit Your Business
          </h2>
          <p className="mt-5 m-0 text-[14px] leading-7 text-gray-600 sm:text-[15px] sm:leading-7">
            Google Business Profile is relevant to businesses that have a clear
            reason to improve their digital presence, customer journey or growth
            engine. The page should qualify visitors rather than promise that
            every business needs the same package. Akkurate can recommend a
            focused scope, a broader integrated program or a different service
            when that is more appropriate.
          </p>
        </div>
      </section>

      <section className="bg-[#101828] px-14 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="text-center">
            <p className="m-0 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-300">
              Our Process
            </p>
            <h2
              data-animate="left"
              className="mt-3 m-0 text-[29px] font-bold leading-tight tracking-[-0.03em] text-white sm:text-[36px] lg:text-[44px]"
            >
              A Practical Google Business Profile Process
            </h2>
          </div>

          <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                data-animate="card"
                data-delay={(index % 5) + 1}
                className="rounded-[18px] border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.07] sm:p-6"
              >
                <span className="text-[11px] font-bold tracking-[0.14em] text-blue-300">
                  {step.number}
                </span>
                <h3 className="mt-6 m-0 text-[17px] font-bold leading-snug text-white">
                  {step.title}
                </h3>
                <p className="mt-3 m-0 text-[13px] leading-6 text-gray-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-14 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="max-w-[750px]">
            <p className="m-0 text-[10px] font-bold uppercase tracking-[0.18em] text-[#1455d9] sm:text-[11px]">
              Why Choose Akkurate
            </p>
            <h2
              data-animate="left"
              className="mt-3 m-0 text-[29px] font-bold leading-tight tracking-[-0.03em] text-[#101828] sm:text-[36px] lg:text-[42px]"
            >
              A Business-First Approach
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((item, index) => (
              <article
                key={item.number}
                data-animate="card"
                data-delay={(index % 4) + 1}
                className="group rounded-[20px] border border-gray-200 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-[#1455d9] hover:bg-[#1455d9] hover:shadow-[0_15px_40px_rgba(20,85,217,0.25)]"
              >
                <span className="text-[11px] font-bold tracking-[0.14em] text-[#1455d9] transition-colors duration-300 group-hover:text-white">
                  {item.number}
                </span>

                <h3 className="mt-5 m-0 text-[18px] font-bold leading-snug text-[#101828] transition-colors duration-300 group-hover:text-white">
                  {item.title}
                </h3>

                <p className="mt-3 m-0 text-[13px] leading-6 text-gray-500 transition-colors duration-300 group-hover:text-white/90">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="
                          bg-[#f7faff]
                
                          px-14
                          py-12
                
                          sm:py-16
                        "
      >
        <div
          className="
                            mx-auto
                            flex
                            w-full
                            max-w-[1200px]
                            flex-col
                
                            gap-5
                
                            px-4
                
                            text-center
                
                            sm:flex-row
                            sm:items-center
                            sm:justify-between
                            sm:px-6
                            sm:text-left
                
                            lg:px-8
                          "
        >
          <div>
            <p
              className="
                                m-0
                
                                text-[10px]
                                font-bold
                                uppercase
                                tracking-[0.16em]
                                text-[#1455d9]
                              "
            >
              Related Services
            </p>

            <h3
              className="
                                mt-2
                                m-0
                
                                text-[20px]
                                font-bold
                                text-[#101828]
                
                                sm:text-[23px]
                              "
            >
              Youtube Marketing ↔ Google Business page
            </h3>
          </div>

          <div
            className="
                              flex
                              flex-wrap
                              justify-center
                              gap-2
                
                              sm:justify-end
                            "
          >
            <Link
              to="/youtube-marketing"
              className="
                                rounded-full
                
                                border
                                border-gray-200
                
                                bg-white
                
                                px-4
                                py-2
                
                                text-[12px]
                                font-semibold
                                text-gray-700
                
                                transition
                
                                hover:border-[#1455d9]
                                hover:text-[#1455d9]
                              "
            >
              Youtube Marketing
            </Link>

            <span
              className="
                                rounded-full
                
                                bg-[#073b91]
                
                                px-4
                                py-2
                
                                text-[12px]
                                font-semibold
                                text-white
                              "
            >
              Google Business Page
            </span>
          </div>
        </div>
      </section>

      <section
        className="
    px-14
    py-16
    sm:py-20
    lg:py-24
  "
      >
        <div
          className="
      mx-auto
      grid
      w-full
      max-w-[1200px]
      gap-10
      px-4
      sm:px-6
      lg:grid-cols-[0.7fr_1.3fr]
      lg:gap-14
      lg:px-8
    "
        >
          {/* LEFT CONTENT */}
          <div>
            <p
              className="
          m-0
          text-[10px]
          font-bold
          uppercase
          tracking-[0.18em]
          text-[#1455d9]
          sm:text-[11px]
        "
            >
              Frequently Asked Questions
            </p>

            <h2
              data-animate="center"
              className="
          mt-3
          m-0
          text-[29px]
          font-bold
          leading-tight
          tracking-[-0.03em]
          text-[#101828]
          sm:text-[36px]
          lg:text-[42px]
        "
            >
              Google Business Profile FAQs
            </h2>
          </div>

          {/* RIGHT FAQ CONTENT */}
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  data-animate="card"
                  data-delay={(index % 6) + 1}
                  className="
              overflow-hidden
              rounded-[16px]
              border
              border-gray-200
              bg-white
            "
                >
                  {/* QUESTION */}
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="
                flex
                w-full
                items-center
                justify-between
                gap-5
                px-5
                py-5
                text-left
                sm:px-6
              "
                  >
                    <span
                      className="
                  text-[14px]
                  font-bold
                  text-[#101828]
                  sm:text-[15px]
                "
                    >
                      {faq.question}
                    </span>

                    {/* PLUS ICON */}
                    <span
                      className={`
                  shrink-0
                  text-[20px]
                  text-[#1455d9]
                  transition-transform
                  duration-300
                  ${isOpen ? "rotate-45" : ""}
                `}
                    >
                      +
                    </span>
                  </button>

                  {/* ANSWER */}
                  <div
                    className={`
                grid
                transition-all
                duration-300
                ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
              `}
                  >
                    <div className="overflow-hidden">
                      <p
                        className="
                    px-5
                    pb-5
                    text-[13px]
                    leading-6
                    text-gray-600
                    sm:px-6
                  "
                      >
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

      <section className="relative overflow-hidden bg-[#073b91] px-14 py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -right-24 -top-24 h-[280px] w-[280px] rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 h-[260px] w-[260px] rounded-full bg-blue-300/10 blur-3xl" />
        <div className="relative mx-auto w-full max-w-[1000px] px-4 text-center sm:px-6 lg:px-8">
          <p className="m-0 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-200 sm:text-[11px]">
            Ready to Grow?
          </p>
          <h2
            data-animate="center"
            className="mt-3 m-0 text-[30px] font-bold leading-tight tracking-[-0.03em] text-white sm:text-[38px] lg:text-[36px]"
          >
            Make your business information easier to find, understand and act on
            when local customers are ready.
          </h2>
          <p className="mx-auto mt-5 max-w-[800px] text-[14px] leading-7 text-blue-100 sm:text-[15px] sm:leading-7">
            Tell us what you are trying to achieve, what you have already tried
            and what outcome matters most. Akkurate can then recommend the most
            practical next step.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-white px-7 py-3 text-[13px] font-bold text-[#073b91] transition duration-300 hover:-translate-y-1 hover:bg-gray-100"
            >
              Talk to Our Team <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GoogleBusiness;

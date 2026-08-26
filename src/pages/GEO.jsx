import React, { useState } from "react";
import { Link } from "react-router-dom";

// Scroll animations are provided globally by ScrollAnimations.jsx in App.jsx.

/* =========================================================
   GEO PAGE
   Generative Engine Optimization
========================================================= */

const geoServices = [
  {
    number: "01",
    title: "AI Search Visibility Audit",
    description:
      "Understand how your business, services and expertise are represented across the website and wider digital presence.",
  },
  {
    number: "02",
    title: "Entity & Brand Clarity",
    description:
      "Clarify the relationships between your brand, services, industries, locations, expertise and customer questions.",
  },
  {
    number: "03",
    title: "Topic & Question Mapping",
    description:
      "Build useful content that directly explains concepts, answers questions and demonstrates first-hand knowledge.",
  },
  {
    number: "04",
    title: "Answer-Ready Content",
    description:
      "Connect pillar pages, service pages, industry pages, FAQs, guides and case studies into a coherent topic system.",
  },
  {
    number: "05",
    title: "Topical Authority Architecture",
    description:
      "Strengthen consistency of important business information across relevant digital properties.",
  },
  {
    number: "06",
    title: "Digital Presence Consistency",
    description:
      "Measure organic discovery, content performance and available AI-search visibility signals without promising guaranteed mentions.",
  },
];

const outcomes = [
  "Clearer brand and service context",
  "Stronger topical depth",
  "Better question coverage",
  "Connected content architecture",
  "More useful customer journeys",
  "A durable foundation for evolving search",
];

const processSteps = [
  {
    number: "01",
    title: "Discovery & Entity Mapping",
    description:
      "Understand the business objective, audience, current assets, constraints and success criteria before recommending the work.",
  },
  {
    number: "02",
    title: "Content & Topic Strategy",
    description:
      "Translate the objective into a practical strategy, scope, content/creative direction and measurement plan.",
  },
  {
    number: "03",
    title: "Page and Content Optimization",
    description:
      "Create, optimize, design, develop or launch the agreed work with brand and user requirements in mind.",
  },
  {
    number: "04",
    title: "Authority & Digital Presence",
    description:
      "Test the experience, tracking, messaging and key conversion paths before considering the work complete.",
  },
  {
    number: "05",
    title: "Measurement & Iteration",
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
    question:
      "What is included in your generative engine optimization (GEO) service?",
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

function GEO() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="w-full overflow-hidden bg-white text-[#111827]">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#f7faff]

          px-20
          pb-14
          pt-14

          sm:pb-18
          sm:pt-18

          lg:pb-20
          lg:pt-20
        "
      >
        {/* Background decoration */}

        <div
          className="
            pointer-events-none
            absolute
            -right-32
            -top-32
            h-[350px]
            w-[350px]
            rounded-full
            bg-blue-100/60
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-40
            -left-40
            h-[300px]
            w-[300px]
            rounded-full
            bg-indigo-100/50
            blur-3xl
          "
        />

        {/* FULL WIDTH CONTAINER */}

        <div
          className="
            relative
            mx-auto
            w-full
            max-w-[1600px]

            px-4

            sm:px-6

            lg:px-8

            xl:px-10
          "
        >
          {/* Breadcrumb */}

          <div
            className="
              mb-8
              flex
              items-center
              gap-2

              text-[11px]
              font-medium
              text-gray-500

              sm:text-[12px]
            "
          >
            <Link to="/" className="transition hover:text-[#1455d9]">
              Home
            </Link>

            <span>/</span>

            <span>Services</span>

            <span>/</span>

            <span className="text-[#1455d9]">GEO</span>
          </div>

          {/* =================================================
              HERO GRID
          ================================================= */}

          <div
            className="
              grid
              grid-cols-1
              items-center

              gap-10

              md:grid-cols-[1.05fr_0.95fr]

              lg:gap-12

              xl:grid-cols-[1fr_0.9fr]
              xl:gap-16
            "
          >
            {/* LEFT CONTENT */}

            <div
              className="
                max-w-[760px]
              "
            >
              {/* Label */}

              <div
                className="
                  mb-4
                  inline-flex
                  items-center

                  rounded-full

                  border
                  border-blue-100

                  bg-white

                  px-3.5
                  py-1.5

                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-[#1455d9]

                  shadow-sm

                  sm:text-[11px]
                "
              >
                Generative Engine Optimization
              </div>

              {/* H1 */}

              <h1
                data-animate="left"
                data-delay="1"
                className="
                  m-0

                  max-w-[720px]

                  text-[32px]
                  font-bold
                  leading-[1.08]
                  tracking-[-0.035em]
                  text-[#101828]

                  sm:text-[40px]

                  md:text-[44px]

                  lg:text-[40px]

                  xl:text-[45px]
                "
              >
                Make Your Brand Easier for AI-Powered Search to Understand
              </h1>

              {/* Description */}

              <p
                className="
                  mt-5

                  max-w-[650px]

                  text-[14px]
                  leading-6
                  text-gray-600

                  sm:text-[15px]
                  sm:leading-7

                  lg:text-[16px]
                  lg:leading-7
                "
              >
                Improve your brand's visibility across generative search with
                original content, entity clarity, topical authority and strong
                SEO foundations — built around your audience, business objective
                and measurable customer journey.
              </p>

              {/* CTA */}

              <div
                className="
                  mt-7
                  flex
                  flex-col
                  gap-3

                  sm:flex-row
                "
              >
                <Link
                  to="/contact"
                  className="
                    inline-flex
                    min-h-[48px]
                    items-center
                    justify-center

                    rounded-full

                    bg-[#073b91]

                    px-6
                    py-3

                    text-[13px]
                    font-bold
                    text-white

                    shadow-[0_10px_25px_rgba(7,59,145,0.16)]

                    transition
                    duration-300

                    hover:-translate-y-1
                    hover:bg-[#052f75]
                  "
                >
                  Talk to Our Team
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>

            {/* =================================================
                RIGHT IMAGE
            ================================================= */}

            <div
              className="
                relative
                flex
                min-h-[280px]
                items-center
                justify-center

                md:min-h-[360px]

                lg:min-h-[430px]
              "
            >
              {/* Image glow */}

              <div
                className="
                  absolute
                  inset-8

                  rounded-full

                  bg-blue-100/60

                  blur-3xl
                "
              />

              {/* Image */}

              <div
                data-animate="right"
                className="
                  relative
                  z-10

                  w-full
                  max-w-[560px]

                  overflow-hidden

                  rounded-[24px]

                  bg-white

                  p-2

                  shadow-[0_20px_60px_rgba(15,23,42,0.10)]
                "
              >
                <img
                  src="/assets/images/content_images/GEO.png"
                  alt="Generative Engine Optimization"
                  className="
                    h-auto
                    w-full

                    rounded-[18px]

                    object-cover
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

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
            max-w-[1600px]

            gap-8

            px-4

            sm:px-6

            lg:grid-cols-[0.8fr_1.2fr]
            lg:gap-14
            lg:px-8

            xl:px-10
          "
        >
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
              Introduction
            </p>

            <h2
              data-animate="left"
              className="
                mt-3
                m-0

                text-[27px]
                font-bold
                leading-tight
                tracking-[-0.03em]
                text-[#101828]

                sm:text-[34px]

                lg:text-[40px]
              "
            >
              GEO Built Around Business Growth
            </h2>
          </div>

          <div>
            <p
              className="
                m-0

                text-[14px]
                leading-7
                text-gray-600

                sm:text-[15px]
                sm:leading-7
              "
            >
              Akkurate Digital Solutions provides generative engine optimization
              (GEO) as part of an integrated digital growth system. We begin
              with the business objective, audience and customer journey before
              deciding what should be created, optimized or measured.
            </p>

            <p
              className="
                mt-4

                text-[14px]
                leading-7
                text-gray-600

                sm:text-[15px]
                sm:leading-7
              "
            >
              The goal is not simply to deliver an asset or run a channel; it is
              to make the work useful to the business.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          BUSINESS PROBLEM
      ===================================================== */}

      <section
        className="
          bg-[#101828]

          px-14
          py-16

          sm:py-20

          lg:py-24
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-[1200px]

            px-4

            text-center

            sm:px-6

            lg:px-8
          "
        >
          <p
            className="
              m-0

              text-[10px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-blue-300

              sm:text-[11px]
            "
          >
            The Business Problem We Solve
          </p>

          <h2
            data-animate="center"
            className="
              mt-4
              m-0

              text-[27px]
              font-bold
              leading-tight
              tracking-[-0.03em]
              text-white

              sm:text-[34px]

              lg:text-[42px]
            "
          >
            Help AI Systems and Customers Understand Your Business
          </h2>

          <p
            className="
              mx-auto
              mt-5

              max-w-[850px]

              text-[14px]
              leading-7
              text-gray-300

              sm:text-[15px]
              sm:leading-7
            "
          >
            Generative search can synthesize information from multiple sources.
            A business with thin service pages, unclear terminology,
            inconsistent brand information or weak topical depth can be harder
            for systems and customers to understand.
          </p>

          <p
            className="
              mx-auto
              mt-4

              max-w-[850px]

              text-[14px]
              leading-7
              text-gray-300

              sm:text-[15px]
              sm:leading-7
            "
          >
            Akkurate approaches GEO as a practical extension of SEO, content
            strategy, brand clarity and digital authority — not as a shortcut or
            ranking hack.
          </p>
        </div>
      </section>

      {/* =====================================================
          GEO SERVICES
      ===================================================== */}

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
            w-full
            max-w-[1600px]

            px-4

            sm:px-6

            lg:px-8

            xl:px-10
          "
        >
          <div className="max-w-[100%] text-center">
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
              Our Services
            </p>

            <h2
              data-animate="left"
              className="
                mt-3
                m-0

                text-[29px]
                font-bold
                leading-tight
                tracking-[-0.03em]
                text-[#101828]

                sm:text-[36px]

                lg:text-[36px]
              "
            >
              Our Generative Engine Optimization (GEO) Services
            </h2>
          </div>

          <div
            className="
              mt-9

              grid
              grid-cols-1

              gap-4

              sm:grid-cols-2

              lg:grid-cols-3
            "
          >
            {geoServices.map((service, index) => (
              <article
                key={service.number}
                data-animate="card"
                data-delay={(index % 6) + 1}
                className="
                  group

                  rounded-[20px]

                  border
                  border-gray-200

                  bg-white

                  p-5

                  shadow-[0_8px_30px_rgba(0,0,0,0.035)]

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-blue-100
                  hover:shadow-[0_15px_40px_rgba(0,0,0,0.07)]

                  sm:p-6
                "
              >
                <div
                  className="
                    flex
                    items-start
                    justify-between
                  "
                >
                  <span
                    className="
                      text-[11px]
                      font-bold
                      tracking-[0.14em]
                      text-[#1455d9]
                    "
                  >
                    {service.number}
                  </span>

                  <span
                    className="
                      text-[19px]
                      text-gray-300

                      transition

                      group-hover:text-[#1455d9]
                    "
                  >
                    ↗
                  </span>
                </div>

                <h3
                  className="
                    mt-6
                    m-0

                    text-[18px]
                    font-bold
                    leading-snug
                    text-[#101828]

                    sm:text-[19px]
                  "
                >
                  {service.title}
                </h3>

                <p
                  className="
                    mt-3
                    m-0

                    text-[13px]
                    leading-6
                    text-gray-500

                    sm:text-[14px]
                  "
                >
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          OUTCOMES
      ===================================================== */}

      <section
        className="
          bg-[#f7faff]

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
            max-w-[1600px]

            gap-10

            px-4

            sm:px-6

            lg:grid-cols-[0.8fr_1.2fr]
            lg:items-center
            lg:gap-14
            lg:px-8

            xl:px-10
          "
        >
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
              What You Get
            </p>

            <h2
              data-animate="left"
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
              What You Get From Akkurate
            </h2>

            <p
              className="
                mt-5
                m-0

                text-[14px]
                leading-7
                text-gray-600

                sm:text-[15px]
              "
            >
              The exact outcome depends on the starting point, competition,
              audience, budget, implementation and business model. Our job is to
              create the conditions for measurable improvement and to report
              honestly on what is working.
            </p>
          </div>

          <div
            className="
              grid
              grid-cols-1

              gap-3

              sm:grid-cols-2
            "
          >
            {outcomes.map((outcome, index) => (
              <div
                key={outcome}
                data-animate="card"
                data-delay={(index % 6) + 1}
                className="
                  flex
                  items-center
                  gap-3

                  rounded-xl

                  border
                  border-gray-200

                  bg-white

                  px-4
                  py-4

                  shadow-sm
                "
              >
                <span
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center

                    rounded-full

                    bg-[#073b91]

                    text-[10px]
                    font-bold
                    text-white
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span
                  className="
                    text-[13px]
                    font-semibold
                    text-[#101828]

                    sm:text-[14px]
                  "
                >
                  {outcome}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHO THIS SERVICE IS FOR
      ===================================================== */}

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
            w-full
            max-w-[950px]

            px-4

            text-center

            sm:px-6

            lg:px-8
          "
        >
          <p
            className="
              m-0

              text-[10px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-[#1455d9]
            "
          >
            Who This Service Is For
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
            GEO Should Fit Your Business
          </h2>

          <p
            className="
              mt-5
              m-0

              text-[14px]
              leading-7
              text-gray-600

              sm:text-[15px]
              sm:leading-7
            "
          >
            Generative Engine Optimization (GEO) is relevant to businesses that
            have a clear reason to improve their digital presence, customer
            journey or growth engine.
          </p>

          <p
            className="
              mt-4
              m-0

              text-[14px]
              leading-7
              text-gray-600

              sm:text-[15px]
              sm:leading-7
            "
          >
            The right approach depends on the starting point. Akkurate can
            recommend a focused scope, a broader integrated program or a
            different service when that is more appropriate.
          </p>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section
        className="
          bg-[#101828]

          px-14
          py-16

          sm:py-20

          lg:py-24
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-[1600px]

            px-4

            sm:px-6

            lg:px-8

            xl:px-10
          "
        >
          <div className="max-w-[100%] text-center">
            <p
              className="
                m-0

                text-[10px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-blue-300
              "
            >
              Our Process
            </p>

            <h2
              data-animate="left"
              className="
                mt-3
                m-0

                text-[29px]
                font-bold
                leading-tight
                tracking-[-0.03em]
                text-white

                sm:text-[36px]

                lg:text-[44px]
              "
            >
              A Practical GEO Process
            </h2>
          </div>

          <div
            className="
              mt-9

              grid
              grid-cols-1

              gap-4

              sm:grid-cols-2

              lg:grid-cols-5
            "
          >
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                data-animate="card"
                data-delay={(index % 5) + 1}
                className="
                  rounded-[18px]

                  border
                  border-white/10

                  bg-white/[0.04]

                  p-5

                  transition

                  hover:bg-white/[0.07]

                  sm:p-6
                "
              >
                <span
                  className="
                    text-[11px]
                    font-bold
                    tracking-[0.14em]
                    text-blue-300
                  "
                >
                  {step.number}
                </span>

                <h3
                  className="
                    mt-6
                    m-0

                    text-[17px]
                    font-bold
                    leading-snug
                    text-white
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                    mt-3
                    m-0

                    text-[13px]
                    leading-6
                    text-gray-400
                  "
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY AKKURATE
      ===================================================== */}

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
            w-full
            max-w-[1600px]

            px-4

            sm:px-6

            lg:px-8

            xl:px-10
          "
        >
          <div className="max-w-[750px]">
            <p
              className="
                m-0

                text-[10px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#1455d9]
              "
            >
              Why Choose Akkurate
            </p>

            <h2
              data-animate="left"
              className="
                mt-3
                m-0

                text-[29px]
                font-bold
                leading-tight
                tracking-[-0.03em]
                text-[#101828]

                sm:text-[36px]

                lg:text-[44px]
              "
            >
              Strategy Before Activity
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

      {/* =====================================================
          RELATED SERVICES
      ===================================================== */}

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
              GEO ↔ AEO ↔ SEO
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
              GEO
            </span>

            <Link
              to="/aeo"
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
              AEO
            </Link>

            <Link
              to="/seo"
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
              SEO
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}

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
          <div>
            <p
              className="
                m-0

                text-[10px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#1455d9]
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
              GEO FAQs
            </h2>
          </div>

          <div
            className="
              divide-y
              divide-gray-200

              border-y
              border-gray-200
            "
          >
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  data-animate="up"
                  data-delay={(index % 6) + 1}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="
                      flex
                      w-full
                      items-center
                      justify-between

                      gap-5

                      py-4

                      text-left

                      sm:py-5
                    "
                  >
                    <span
                      className="
                        text-[13px]
                        font-semibold
                        leading-6
                        text-[#101828]

                        sm:text-[14px]
                      "
                    >
                      {faq.question}
                    </span>

                    <span
                      className={`
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center

                        rounded-full

                        border
                        border-gray-200

                        text-[16px]
                        text-gray-500

                        transition-transform
                        duration-200

                        ${isOpen ? "rotate-45" : ""}
                      `}
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      className="
                        pb-5
                        pr-8
                      "
                    >
                      <p
                        className="
                          m-0

                          text-[13px]
                          leading-6
                          text-gray-500

                          sm:text-[14px]
                          sm:leading-7
                        "
                      >
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section
        className="
          px-14
          pb-16

          sm:pb-20

          lg:pb-24
        "
      >
        <div
          className="
            relative
            mx-auto
            w-full
            max-w-[1500px]
            overflow-hidden

            rounded-[24px]

            bg-[#073b91]

            px-5
            py-10

            text-center

            sm:px-8
            sm:py-14

            lg:px-12
            lg:py-10
          "
        >
          <div
            className="
              pointer-events-none

              absolute
              -right-24
              -top-24

              h-[220px]
              w-[220px]

              rounded-full

              bg-white/10

              blur-2xl
            "
          />

          <div
            className="
              pointer-events-none

              absolute
              -bottom-28
              -left-20

              h-[200px]
              w-[300px]

              rounded-full

              bg-blue-300/10

              blur-2xl
            "
          />

          <div className="relative">
            <p
              className="
                m-0

                text-[10px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-blue-200
              "
            >
              Start With The Right Next Step
            </p>

            <h2
              data-animate="center"
              className="
                mx-auto
                mt-3
                max-w-[1300px]

                text-[15px]
                font-medium
                leading-tight
                tracking-[-0.03em]
                text-white

                sm:text-[36px]

                lg:text-[44px]
              "
            >
              Help customers and modern search systems understand what your
              business does, who it serves and why it is credible.
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-[750px]

                text-[13px]
                leading-6
                text-blue-100

                sm:text-[14px]
                sm:leading-7
              "
            >
              Tell us what you are trying to achieve, what you have already
              tried and what outcome matters most. Akkurate can then recommend
              the most practical next step.
            </p>

            <div className="mt-7">
              <Link
                to="/contact"
                className="
                  inline-flex
                  items-center
                  justify-center

                  rounded-full

                  bg-white

                  px-6
                  py-3

                  text-[13px]
                  font-bold
                  text-[#073b91]

                  transition
                  duration-300

                  hover:-translate-y-1
                "
              >
                Start a Conversation
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GEO;

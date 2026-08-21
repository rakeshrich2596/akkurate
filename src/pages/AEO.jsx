import React, { useState } from "react";
import { Link } from "react-router-dom";


/* =========================================================
   AEO SERVICES
========================================================= */

const aeoServices = [
  {
    number: "01",
    title: "Question & Search Intent Research",
    description:
      "Identify the questions, problems and search intents your audience uses when looking for answers related to your business.",
  },
  {
    number: "02",
    title: "Answer Opportunity Mapping",
    description:
      "Map important customer questions to the right pages, content formats and stages of the customer journey.",
  },
  {
    number: "03",
    title: "Answer-Ready Content",
    description:
      "Create clear, useful and well-structured content designed to answer important customer questions directly.",
  },
  {
    number: "04",
    title: "FAQ & Knowledge Architecture",
    description:
      "Build connected FAQs, service information, guides and supporting content that make your expertise easier to understand.",
  },
  {
    number: "05",
    title: "Content Authority",
    description:
      "Strengthen topical depth and consistency so your website communicates useful expertise across important subject areas.",
  },
  {
    number: "06",
    title: "AEO Performance Monitoring",
    description:
      "Review search visibility, content performance, engagement and available answer-related signals to guide future improvements.",
  },
];


/* =========================================================
   OUTCOMES
========================================================= */

const outcomes = [
  "Better coverage of customer questions",
  "Clearer and more useful answers",
  "Stronger topical relevance",
  "Improved content structure",
  "More useful customer journeys",
  "A stronger foundation for modern search",
];


/* =========================================================
   PROCESS
========================================================= */

const processSteps = [
  {
    number: "01",
    title: "Discovery & Audience Research",
    description:
      "Understand your business, audience, services, customers and the questions that matter most to your growth.",
  },
  {
    number: "02",
    title: "Question & Intent Mapping",
    description:
      "Identify important questions and connect them with search intent, topics, pages and customer journey stages.",
  },
  {
    number: "03",
    title: "Content Strategy",
    description:
      "Develop a practical content structure that prioritizes useful answers, topical depth and business relevance.",
  },
  {
    number: "04",
    title: "Optimization & Implementation",
    description:
      "Create or improve pages, FAQs, guides and supporting content with clarity, structure and user experience in mind.",
  },
  {
    number: "05",
    title: "Measurement & Iteration",
    description:
      "Review performance and customer behavior, then continuously improve the content and answer strategy.",
  },
];


/* =========================================================
   WHY AKKURATE
========================================================= */

const whyChoose = [
  {
    number: "01",
    title: "Business-First Strategy",
    description:
      "We start with your business objective and customer needs instead of creating content without a clear purpose.",
  },
  {
    number: "02",
    title: "Integrated Expertise",
    description:
      "SEO, AEO, GEO, content, web development and branding capabilities can work together when your project needs them.",
  },
  {
    number: "03",
    title: "Useful Content",
    description:
      "We focus on clear, relevant and genuinely useful answers that help customers make better decisions.",
  },
  {
    number: "04",
    title: "Continuous Improvement",
    description:
      "Search behavior changes over time, so the answer strategy should evolve based on performance and customer needs.",
  },
];


/* =========================================================
   FAQ
========================================================= */

const faqs = [
  {
    question:
      "What is included in your Answer Engine Optimization (AEO) service?",
    answer:
      "The service can include question research, search intent mapping, answer-ready content, FAQ architecture, topical content strategy, optimization and ongoing performance measurement.",
  },
  {
    question: "How is AEO different from SEO?",
    answer:
      "SEO focuses broadly on improving organic search visibility. AEO places additional emphasis on understanding the questions users ask and making useful, direct answers easier to discover and understand.",
  },
  {
    question: "Can AEO work together with SEO and GEO?",
    answer:
      "Yes. SEO, AEO and GEO can complement each other. SEO supports organic visibility, AEO focuses on answer opportunities, and GEO focuses on making brand and business information easier for generative systems to understand.",
  },
  {
    question: "How do you measure AEO success?",
    answer:
      "Measurement depends on the project and can include organic visibility, qualified traffic, engagement, question coverage, leads, enquiries, conversions and other agreed business signals.",
  },
  {
    question: "Do you guarantee rankings or answer placements?",
    answer:
      "No responsible agency can guarantee rankings, platform distribution or a fixed commercial outcome. We focus on a clear process, quality execution and transparent measurement.",
  },
  {
    question: "Can you optimize our existing website?",
    answer:
      "Yes. Existing service pages, FAQs, guides and other useful content can be audited and improved when that is more practical than rebuilding everything.",
  },
];


/* =========================================================
   AEO PAGE
========================================================= */

function AEO() {

  const [openFaq, setOpenFaq] = useState(null);


  return (
    <div
      className="
        w-full
        overflow-hidden
        bg-white
        text-[#111827]
      "
    >


      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#f7faff]

          px-14
          py-14

          sm:py-16

          lg:py-20

          xl:px-14
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
            -bottom-32
            -left-32

            h-[300px]
            w-[300px]

            rounded-full

            bg-indigo-100/50

            blur-3xl
          "
        />


        <div
          className="
            relative
            mx-auto
            w-full
            max-w-[1600px]
          "
        >

          {/* Breadcrumb */}

          <div
            className="
              mb-7

              flex
              flex-wrap
              items-center
              gap-2

              text-[11px]
              font-medium
              text-gray-500
            "
          >

            <Link
              to="/"
              className="
                transition
                hover:text-[#1455d9]
              "
            >
              Home
            </Link>

            <span>/</span>

            <span>
              Services
            </span>

            <span>/</span>

            <span className="text-[#1455d9]">
              AEO
            </span>

          </div>


          {/* HERO GRID */}

          <div
            className="
              grid
              grid-cols-1
              items-center

              gap-10

              md:grid-cols-[1.05fr_0.95fr]

              lg:gap-14
            "
          >

            {/* LEFT */}

            <div
              className="
                max-w-[760px]
              "
            >

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
                "
              >
                Answer Engine Optimization
              </div>


              <h1
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

                  lg:text-[50px]

                  xl:text-[56px]
                "
              >
                Make Your Brand Easier to Find Through Better Answers
              </h1>


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
                "
              >
                Help your customers find clear, useful answers to the
                questions they ask throughout their search journey with
                strategic content, question mapping, topical authority and
                strong search foundations.
              </p>


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
                  Talk to Our AEO Team

                  <span className="ml-2">
                    →
                  </span>
                </Link>

              </div>

            </div>


            {/* RIGHT IMAGE */}

            <div
              className="
                relative

                flex
                min-h-[280px]

                items-center
                justify-center

                md:min-h-[350px]

                lg:min-h-[420px]
              "
            >

              <div
                className="
                  absolute
                  inset-8

                  rounded-full

                  bg-blue-100/60

                  blur-3xl
                "
              />


              <div
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
                  src="/assets/images/content_images/AEO.png"
                  alt="Answer Engine Optimization"
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

            lg:grid-cols-[0.8fr_1.2fr]
            lg:gap-14
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
              Introduction
            </p>


            <h2
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
              AEO Built Around Customer Questions
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
              "
            >
              Akkurate Digital Solutions approaches Answer Engine
              Optimization as a practical way to improve how businesses
              answer the questions their customers ask during discovery,
              evaluation and decision-making.
            </p>


            <p
              className="
                mt-4

                text-[14px]
                leading-7
                text-gray-600

                sm:text-[15px]
              "
            >
              We connect audience research, search intent, content strategy,
              website structure and measurement to create a useful answer
              ecosystem around your business.
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

            text-center
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
            "
          >
            The Business Problem We Solve
          </p>


          <h2
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
            Give Customers Better Answers at the Right Moment
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
            "
          >
            Customers search with questions. When websites do not clearly
            address those questions, businesses can miss opportunities to
            educate, build trust and move potential customers toward the next
            step.
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
            "
          >
            Akkurate uses AEO to create a more useful connection between what
            people want to know and what your business can genuinely answer.
          </p>

        </div>

      </section>



      {/* =====================================================
          AEO SERVICES
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
              Our Services
            </p>


            <h2
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
              Our Answer Engine Optimization (AEO) Services
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

            {aeoServices.map((service) => (

              <article
                key={service.number}
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

            lg:grid-cols-[0.8fr_1.2fr]
            lg:items-center
            lg:gap-14
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
              What You Get
            </p>


            <h2
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
              The exact outcome depends on your starting point, competition,
              audience, implementation and business objective. We focus on
              creating useful content systems that support measurable business
              improvement.
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

            text-center
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
            AEO Should Fit Your Customer Journey
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
            AEO is useful for businesses that have important customer
            questions, complex services, educational content, products or
            expertise that customers need to understand before taking action.
          </p>


          <p
            className="
              mt-4
              m-0

              text-[14px]
              leading-7
              text-gray-600

              sm:text-[15px]
            "
          >
            The right scope depends on your existing content, audience,
            competition, website and business objectives.
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
                text-blue-300
              "
            >
              Our Process
            </p>


            <h2
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
              A Practical AEO Process
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

            {processSteps.map((step) => (

              <div
                key={step.number}
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


          <div
            className="
              mt-9

              grid
              grid-cols-1

              gap-5

              sm:grid-cols-2

              lg:grid-cols-4
            "
          >

            {whyChoose.map((item) => (

              <div
                key={item.number}
                className="
                  border-t
                  border-gray-200

                  pt-5
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
                  {item.number}
                </span>


                <h3
                  className="
                    mt-4
                    m-0

                    text-[18px]
                    font-bold
                    text-[#101828]
                  "
                >
                  {item.title}
                </h3>


                <p
                  className="
                    mt-3
                    m-0

                    text-[13px]
                    leading-6
                    text-gray-500
                  "
                >
                  {item.description}
                </p>

              </div>

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

            text-center

            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:text-left
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
              SEO ↔ AEO ↔ GEO
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
              AEO
            </span>


            <Link
              to="/geo"
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
              GEO
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

            lg:grid-cols-[0.7fr_1.3fr]
            lg:gap-14
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
              FAQ
            </p>


            <h2
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
              Frequently Asked Questions
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
                >

                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(
                        isOpen
                          ? null
                          : index
                      )
                    }
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

                        ${
                          isOpen
                            ? "rotate-45"
                            : ""
                        }
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

            px-6
            py-12

            text-center

            sm:px-10
            sm:py-14

            lg:px-14
            lg:py-16
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
              w-[200px]

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
              className="
                mx-auto

                mt-3

                max-w-[850px]

                text-[27px]
                font-bold
                leading-tight
                tracking-[-0.03em]
                text-white

                sm:text-[36px]

                lg:text-[44px]
              "
            >
              Give Your Customers Better Answers and a Clearer Path Forward
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
              Tell us what your customers are searching for, what you are
              trying to achieve and what content you already have. Akkurate
              can recommend the most practical next step.
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

                <span className="ml-2">
                  →
                </span>

              </Link>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}


export default AEO;
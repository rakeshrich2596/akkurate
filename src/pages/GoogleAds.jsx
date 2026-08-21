import React, { useState } from "react";
import { Link } from "react-router-dom";


/* =========================================================
   GOOGLE ADS SERVICES
========================================================= */

const googleAdsServices = [
  {
    number: "01",
    title: "Google Ads Strategy",
    description:
      "Build a paid search strategy around your business goals, target audience, services, products and customer journey.",
  },
  {
    number: "02",
    title: "Search Campaign Management",
    description:
      "Create and manage targeted search campaigns designed to connect your business with people actively looking for relevant solutions.",
  },
  {
    number: "03",
    title: "Keyword & Intent Research",
    description:
      "Identify valuable search terms and understand the intent behind them to improve targeting and campaign relevance.",
  },
  {
    number: "04",
    title: "Ad Copy & Creative",
    description:
      "Develop clear, relevant ad messaging that communicates your value proposition and encourages the right users to take action.",
  },
  {
    number: "05",
    title: "Landing Page Optimization",
    description:
      "Improve the connection between your ads and landing pages so visitors can quickly understand the offer and next step.",
  },
  {
    number: "06",
    title: "Performance Optimization",
    description:
      "Monitor campaign performance and continuously optimize targeting, bids, budgets, keywords and messaging.",
  },
];


/* =========================================================
   OUTCOMES
========================================================= */

const outcomes = [
  "Better-targeted search campaigns",
  "More relevant website traffic",
  "Clearer campaign structure",
  "Improved conversion opportunities",
  "Better budget allocation",
  "Transparent performance reporting",
];


/* =========================================================
   PROCESS
========================================================= */

const processSteps = [
  {
    number: "01",
    title: "Business & Audience Discovery",
    description:
      "Understand your business model, audience, products, services, competitors and commercial objectives.",
  },
  {
    number: "02",
    title: "Keyword & Campaign Planning",
    description:
      "Research search demand, identify intent and create a campaign structure around meaningful opportunities.",
  },
  {
    number: "03",
    title: "Campaign Creation",
    description:
      "Build campaigns, ad groups, targeting, keywords, messaging and conversion tracking based on the agreed strategy.",
  },
  {
    number: "04",
    title: "Launch & Monitoring",
    description:
      "Launch campaigns carefully and monitor spend, search terms, clicks, conversions and other agreed performance signals.",
  },
  {
    number: "05",
    title: "Optimization & Reporting",
    description:
      "Use campaign data to improve performance and provide clear reporting around what changed and what comes next.",
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
      "Campaign decisions begin with your business objectives rather than simply increasing clicks or impressions.",
  },
  {
    number: "02",
    title: "Audience-Focused Targeting",
    description:
      "We focus on reaching people whose search intent is relevant to your products, services and customer journey.",
  },
  {
    number: "03",
    title: "Creative & Technical Expertise",
    description:
      "Campaign strategy can connect with landing pages, SEO, content, branding and website optimization when needed.",
  },
  {
    number: "04",
    title: "Continuous Optimization",
    description:
      "Campaigns are reviewed and refined using performance data, search behavior and agreed business KPIs.",
  },
];


/* =========================================================
   FAQ
========================================================= */

const faqs = [
  {
    question:
      "What is included in your Google Ads management service?",
    answer:
      "Depending on the project, the service can include strategy, keyword research, campaign setup, ad copy, targeting, conversion tracking, landing page recommendations, monitoring, optimization and reporting.",
  },
  {
    question:
      "Can you manage an existing Google Ads account?",
    answer:
      "Yes. Existing campaigns can be audited first and then optimized or restructured based on performance, business objectives and available data.",
  },
  {
    question:
      "How do you decide which keywords to target?",
    answer:
      "We consider search intent, relevance to the business, customer journey, competition, available budget and the commercial value of the search opportunity.",
  },
  {
    question:
      "How do you measure Google Ads performance?",
    answer:
      "Depending on the campaign objective, measurement can include qualified traffic, leads, enquiries, conversions, cost per conversion, conversion value and other agreed business KPIs.",
  },
  {
    question:
      "Do you guarantee leads or sales?",
    answer:
      "No responsible agency can guarantee a fixed number of leads or sales because results depend on factors including market demand, competition, offer, landing page experience, budget and customer behavior.",
  },
  {
    question:
      "Can Google Ads work together with SEO?",
    answer:
      "Yes. Paid search and organic search can complement each other by covering immediate paid opportunities while building longer-term organic visibility.",
  },
];


/* =========================================================
   GOOGLE ADS PAGE
========================================================= */

function GoogleAds() {

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
              Google Ads
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

            {/* LEFT CONTENT */}

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
                Google Ads
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
                Turn High-Intent Searches Into Meaningful Business Opportunities
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
                Reach the right customers when they are actively searching
                for your products or services with strategic Google Ads
                campaigns built around your business goals and measurable
                outcomes.
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
                  Talk to Our Google Ads Team

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
                  src="/assets/images/content_images/GOOGLE-ADS.png"
                  alt="Google Ads"
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
              Google Ads Built Around Business Growth
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
              Akkurate Digital Solutions creates Google Ads campaigns around
              the business objective, target audience, offer, customer journey
              and available budget.
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
              Instead of focusing only on clicks, we look at the complete
              journey from search query to landing page to meaningful
              business action.
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
            Be Visible When Customers Are Ready to Search
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
            Potential customers often search Google when they already have a
            need, problem or purchase intention. Poor targeting, unclear
            messaging or weak landing pages can cause businesses to waste
            valuable advertising budget.
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
            Akkurate builds campaigns around relevance, intent, measurement
            and continuous optimization so your advertising activity has a
            clear business purpose.
          </p>

        </div>

      </section>



      {/* =====================================================
          SERVICES
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

          <div
            className="
              max-w-[750px]
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
              Our Google Ads Services
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

            {googleAdsServices.map((service) => (

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
              Google Ads performance depends on market demand, competition,
              offer quality, budget, landing page experience and customer
              behavior. Our focus is to build a clear campaign system and
              improve it using real performance data.
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
            Google Ads Should Fit Your Business
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
            Google Ads can be useful for businesses that want to capture
            existing search demand, promote specific products or services,
            generate enquiries or support a wider digital growth strategy.
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
            We first understand your objective and available resources before
            recommending campaign types, targeting and budget priorities.
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

          <div
            className="
              max-w-[750px]
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
              A Practical Google Ads Process
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

          <div
            className="
              max-w-[750px]
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
              Strategy Before Ad Spend
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
              Digital Growth Services
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
              Google Ads
            </span>

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

              const isOpen =
                openFaq === index;


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
              Put Your Business in Front of Customers When They Are Ready to Act
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
              Tell us about your business, audience, goals and current
              advertising activity. Akkurate can recommend the most practical
              Google Ads strategy for your next stage of growth.
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


export default GoogleAds;
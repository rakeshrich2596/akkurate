import React, { useState } from "react";
import { Link } from "react-router-dom";

const seoServices = [
  ["01","Technical SEO","Improve crawlability, indexation, site architecture, redirects, canonicals, performance and other technical foundations."],
  ["02","Keyword Research & Search Intent","Map search terms to customer intent and the pages that best satisfy informational, commercial and transactional needs."],
  ["03","On-Page SEO","Optimize titles, headings, content, internal links, URLs, images and calls to action around search intent."],
  ["04","Content SEO & Topical Authority","Build topic clusters, pillar pages and supporting resources that demonstrate useful depth instead of thin keyword pages."],
  ["05","Local SEO","Strengthen local relevance through business information consistency, location content, reviews and local landing-page strategy where appropriate."],
  ["06","Authority & Digital PR Support","Pursue relevant authority opportunities through useful assets, digital PR and credible outreach rather than low-quality link volume."],
];

const outcomes = [
  "More qualified organic discovery",
  "Better search-intent coverage",
  "Stronger service and industry relevance",
  "Improved crawlability and usability",
  "A content system that compounds",
  "Clearer connection between search and business goals",
];

const processSteps = [
  ["01","Audit & Baseline","Understand the business objective, audience, current assets, constraints and success criteria before recommending the work."],
  ["02","Opportunity Mapping","Translate the objective into a practical strategy, scope, content/creative direction and measurement plan."],
  ["03","Strategy & Architecture","Create, optimize, design, develop or launch the agreed work with brand and user requirements in mind."],
  ["04","Optimization & Production","Test the experience, tracking, messaging and key conversion paths before considering the work complete."],
  ["05","Measurement & Iteration","Review performance, feedback and business signals and use those learnings to prioritize the next improvement."],
];

const whyChoose = [
  ["01","Business-First Strategy","We start with what the business needs to achieve and then choose the right digital activity."],
  ["02","Integrated Expertise","SEO, AEO, GEO, paid media, web, content and branding capabilities can work together when the project requires them."],
  ["03","Clear Communication","The team should understand what is being done, why it matters and what the next priority is."],
  ["04","Continuous Improvement","Launch is not the end. Performance, feedback and changing customer behavior should guide the next iteration."],
];

const faqs = [
  ["What is included in your search engine optimization (SEO) service?","The scope is customized around the objective. The six capability areas above form the standard framework, while the actual deliverables depend on the project."],
  ["How do you decide the right scope?","We look at the business goal, audience, current performance, competition, assets, timeline and budget before recommending priorities."],
  ["Can this service be combined with SEO, paid media or website development?","Yes. Connected services are often more effective when the customer journey crosses discovery, content, website experience and conversion."],
  ["How do you measure success?","KPIs depend on the objective and may include qualified traffic, engagement, leads, enquiries, conversions, product usage or other agreed business signals."],
  ["Do you guarantee results?","No responsible agency can guarantee platform rankings, algorithmic distribution, exact lead volume or a fixed commercial outcome. We can commit to a clear process, quality execution and transparent measurement."],
  ["Can you work with an existing website, campaign or brand?","Yes. We can audit and improve existing assets instead of rebuilding everything when that is the more practical approach."],
];

function SEO() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="w-full overflow-hidden  bg-white text-[#111827]">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#f7faff] px-14 pb-14 pt-14 sm:pb-18 sm:pt-18 lg:pb-20 lg:pt-20">
        <div className="pointer-events-none absolute -right-32 -top-32 h-[350px] w-[350px] rounded-full bg-blue-100/60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[300px] w-[300px] rounded-full bg-indigo-100/50 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="mb-8 flex items-center gap-2 text-[11px] font-medium text-gray-500 sm:text-[12px]">
            <Link to="/" className="transition hover:text-[#1455d9]">Home</Link>
            <span>/</span><span>Services</span><span>/</span>
            <span className="text-[#1455d9]">SEO</span>
          </div>

          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1.05fr_0.95fr] lg:gap-12 xl:grid-cols-[1fr_0.9fr] xl:gap-16">
            <div className="max-w-[760px]">
              <div className="mb-4 inline-flex items-center rounded-full border border-blue-100 bg-white px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#1455d9] shadow-sm sm:text-[11px]">
                Search Engine Optimization
              </div>

              <h1 data-animate="left" className="m-0 max-w-[800px] text-[15px] font-bold leading-[1.08] tracking-[-0.035em] text-[#101828] sm:text-[40px] md:text-[44px] lg:text-[30px] xl:text-[35px]">
                SEO That Drives Visibility, Qualified Traffic &amp; Business Growth
              </h1>

              <p className="mt-5 max-w-[650px] text-[14px] leading-6 text-gray-600 sm:text-[15px] sm:leading-7 lg:text-[16px] lg:leading-7">
                Grow qualified organic traffic, search visibility and leads with technical SEO, content strategy, on-page optimization, local SEO and authority building — built around your audience, business objective and measurable customer journey.
              </p>

              <div className="mt-7">
                <Link to="/contact" className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#073b91] px-6 py-3 text-[13px] font-bold text-white shadow-[0_10px_25px_rgba(7,59,145,0.16)] transition duration-300 hover:-translate-y-1 hover:bg-[#052f75]">
                  Talk to Our Team<span className="ml-2">→</span>
                </Link>
              </div>
            </div>

            <div className="relative flex min-h-[280px] items-center justify-center md:min-h-[360px] lg:min-h-[430px]">
              <div className="absolute inset-8 rounded-full bg-blue-100/60 blur-3xl" />
              <div data-animate="right" className="relative z-10 w-full max-w-[560px] overflow-hidden rounded-[24px] bg-white p-2 shadow-[0_20px_60px_rgba(15,23,42,0.10)]">
                <img src="/assets/images/content_images/SEO.png" alt="Search Engine Optimization" className="h-auto w-full rounded-[18px] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-14 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1600px] gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 lg:px-8 xl:px-10">
          <div>
            <p className="m-0 text-[10px] font-bold uppercase tracking-[0.18em] text-[#1455d9]">Introduction</p>
            <h2 data-animate="left" className="mt-3 m-0 text-[27px] font-bold leading-tight tracking-[-0.03em] text-[#101828] sm:text-[34px] lg:text-[30px]">
              Search Engine Optimization Built Around Business Growth
            </h2>
          </div>
          <div>
            <p className="m-0 text-[14px] leading-7 text-gray-600 sm:text-[15px]">
              Akkurate Digital Solutions provides search engine optimization (SEO) as part of an integrated digital growth system. We begin with the business objective, audience and customer journey before deciding what should be created, optimized or measured.
            </p>
            <p className="mt-4 text-[14px] leading-7 text-gray-600 sm:text-[15px]">
              The goal is not simply to deliver an asset or run a channel; it is to make the work useful to the business.
            </p>
          </div>
        </div>
      </section>

      {/* BUSINESS PROBLEM */}
      <section className="bg-[#101828] px-14 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-4 text-center sm:px-6 lg:px-8">
          <p className="m-0 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-300">The Business Problem We Solve</p>
          <h2 data-animate="center" className="mt-4 m-0 text-[27px] font-bold leading-tight tracking-[-0.03em] text-white sm:text-[34px] lg:text-[42px]">
            SEO Should Support Business Growth, Not Rankings Alone
          </h2>
          <p className="mx-auto mt-5 max-w-[900px] text-[14px] leading-7 text-gray-300 sm:text-[15px]">
            Many businesses publish content, redesign pages and build links without a unified search strategy. This can produce impressions without enquiries, traffic to low-value pages, keyword cannibalization, weak internal linking or technical barriers. Akkurate connects technical foundations, content, intent, authority and conversion so SEO supports business growth rather than rankings alone.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-14 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="text-center">
            <p className="m-0 text-[10px] font-bold uppercase tracking-[0.18em] text-[#1455d9]">Our Services</p>
            <h2 data-animate="left" className="mt-3 m-0 text-[29px] font-bold leading-tight tracking-[-0.03em] text-[#101828] sm:text-[36px]">
              Our Search Engine Optimization (SEO) Services
            </h2>
          </div>

          <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {seoServices.map(([number,title,description], index) => (
              <article key={number} data-animate="card" data-delay={(index % 6) + 1} className="group rounded-[20px] border border-gray-200 bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-[0_15px_40px_rgba(0,0,0,0.07)] sm:p-6">
                <div className="flex items-start justify-between">
                  <span className="text-[11px] font-bold tracking-[0.14em] text-[#1455d9]">{number}</span>
                  <span className="text-[19px] text-gray-300 transition group-hover:text-[#1455d9]">↗</span>
                </div>
                <h3 className="mt-6 m-0 text-[18px] font-bold leading-snug text-[#101828] sm:text-[19px]">{title}</h3>
                <p className="mt-3 m-0 text-[13px] leading-6 text-gray-500 sm:text-[14px]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="bg-[#f7faff] px-14 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1600px] gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-14 lg:px-8 xl:px-10">
          <div>
            <p className="m-0 text-[10px] font-bold uppercase tracking-[0.18em] text-[#1455d9]">What You Get</p>
            <h2 data-animate="left" className="mt-3 m-0 text-[29px] font-bold leading-tight tracking-[-0.03em] text-[#101828] sm:text-[36px] lg:text-[42px]">
              What You Get From Akkurate
            </h2>
            <p className="mt-5 m-0 text-[14px] leading-7 text-gray-600 sm:text-[15px]">
              The exact outcome depends on the starting point, competition, audience, budget, implementation and business model. Our job is to create the conditions for measurable improvement and to report honestly on what is working.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {outcomes.map((outcome,index) => (
              <div key={outcome} data-animate="card" data-delay={(index % 6) + 1} className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-4 shadow-sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#073b91] text-[10px] font-bold text-white">{String(index+1).padStart(2,"0")}</span>
                <span className="text-[13px] font-semibold text-[#101828] sm:text-[14px]">{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO */}
      <section className="px-14 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[950px] px-4 text-center sm:px-6 lg:px-8">
          <p className="m-0 text-[10px] font-bold uppercase tracking-[0.18em] text-[#1455d9]">Who This Service Is For</p>
          <h2 data-animate="center" className="mt-3 m-0 text-[29px] font-bold leading-tight tracking-[-0.03em] text-[#101828] sm:text-[36px] lg:text-[35px]">
            Search Engine Optimization Should Fit Your Business
          </h2>
          <p className="mt-5 m-0 text-[14px] leading-7 text-gray-600 sm:text-[15px]">
            Search Engine Optimization (SEO) is relevant to businesses that have a clear reason to improve their digital presence, customer journey or growth engine. The page should qualify visitors rather than promise that every business needs the same package.
          </p>
          <p className="mt-4 m-0 text-[14px] leading-7 text-gray-600 sm:text-[15px]">
            Akkurate can recommend a focused scope, a broader integrated program or a different service when that is more appropriate.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#101828] px-14 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="text-center">
            <p className="m-0 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-300">Our Process</p>
            <h2 data-animate="left" className="mt-3 m-0 text-[29px] font-bold leading-tight tracking-[-0.03em] text-white sm:text-[36px] lg:text-[44px]">
              A Practical SEO Process
            </h2>
          </div>

          <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map(([number,title,description],index) => (
              <div key={number} data-animate="card" data-delay={(index % 5) + 1} className="rounded-[18px] border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.07] sm:p-6">
                <span className="text-[11px] font-bold tracking-[0.14em] text-blue-300">{number}</span>
                <h3 className="mt-6 m-0 text-[17px] font-bold leading-snug text-white">{title}</h3>
                <p className="mt-3 m-0 text-[13px] leading-6 text-gray-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY AKKURATE */}
      <section className="px-14 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="max-w-[750px]">
            <p className="m-0 text-[10px] font-bold uppercase tracking-[0.18em] text-[#1455d9]">Why Choose Akkurate</p>
            <h2 data-animate="left" className="mt-3 m-0 text-[29px] font-bold leading-tight tracking-[-0.03em] text-[#101828] sm:text-[36px] lg:text-[42px]">
              A Business-First SEO Approach
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map(([number,title,description],index) => (
              <article key={number} data-animate="card" data-delay={(index % 4) + 1} className="rounded-[20px] border border-gray-200 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.035)] transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-[0_15px_40px_rgba(0,0,0,0.07)]">
                <span className="text-[11px] font-bold tracking-[0.14em] text-[#1455d9]">{number}</span>
                <h3 className="mt-5 m-0 text-[18px] font-bold leading-snug text-[#101828]">{title}</h3>
                <p className="mt-3 m-0 text-[13px] leading-6 text-gray-500">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
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
                              AEO ↔ SEO ↔ Google-Ads
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
                              SEO
                            </span>
                
                            <Link
                              to="/google-ads"
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
                              Google-Ads
                            </Link>
                
                
                          </div>
                
                        </div>
                
                      </section>

      {/* FAQ */}
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
        SEO FAQs
      </h2>
    </div>

    {/* RIGHT FAQ CONTENT */}
    <div className="space-y-3">
      {faqs.map(([question, answer], index) => {
        const isOpen = openFaq === index;

        return (
          <div
            key={question}
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
              onClick={() =>
                setOpenFaq(isOpen ? null : index)
              }
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
                {question}
              </span>

              {/* PLUS ICON */}
              <span
                className={`
                  shrink-0
                  text-[20px]
                  text-[#1455d9]
                  transition-transform
                  duration-300
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

            {/* ANSWER */}
            <div
              className={`
                grid
                transition-all
                duration-300
                ${
                  isOpen
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }
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
                  {answer}
                </p>
              </div>
            </div>

          </div>
        );
      })}
    </div>

  </div>
</section>
      {/* CTA */}
      <section className="relative overflow-hidden bg-[#073b91] px-14 py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -right-24 -top-24 h-[280px] w-[300px] rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 h-[260px] w-[300px] rounded-full bg-blue-300/10 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1000px] px-4 text-center sm:px-6 lg:px-1">
          <p className="m-0 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-200">Ready to Grow?</p>
          <h2 data-animate="center" className="mt-3 m-0 text-[30px] font-bold leading-tight tracking-[-0.03em] text-white sm:text-[38px] lg:text-[30px]">
            Stop chasing traffic for its own sake. Build search visibility that attracts the right audience and gives them a clear path to action.
          </h2>
          <p className="mx-auto mt-5 max-w-[800px] text-[14px] leading-7 text-blue-100 sm:text-[15px]">
            Tell us what you are trying to achieve, what you have already tried and what outcome matters most. Akkurate can then recommend the most practical next step.
          </p>
          <div className="mt-8">
            <Link to="/contact" className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-white px-7 py-3 text-[13px] font-bold text-[#073b91] transition duration-300 hover:-translate-y-1 hover:bg-gray-100">
              Talk to Our Team<span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

export default SEO;

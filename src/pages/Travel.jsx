import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const industryData = {
  travel: {
    slug: "travel",
    focus: "Travel Digital Marketing",
    hero: "Digital Marketing for Travel Businesses That Need Better Visibility, Trust & Leads",
    intro: "Travel customers have a specific buying journey. Akkurate builds digital strategies around the questions, comparisons, trust signals and conversion actions that matter in this market.",
    problemTitle: "Why Travel Marketing Needs a Specialized Approach",
    problem: "A generic digital marketing package rarely reflects the way travel buyers search, compare and decide. The website should use industry language, answer relevant questions, demonstrate credible expertise and connect discovery channels to a clear commercial next step. Akkurate maps the customer journey first and then selects the right mix of SEO, AEO, GEO, paid media, website, content and branding services.",
    opportunities: [('Destination SEO', 'Build visibility around destination searches and real travel customer intent.'), ('Travel Guides', 'Create useful guides that answer genuine planning and comparison questions.'), ('Google Ads', 'Reach relevant audiences when travel demand is high and intent is clear.'), ('Travel Content', 'Build useful content that supports discovery, trust and planning.'), ('Social Visual Content', 'Use visual content to communicate experiences and destinations.'), ('Booking Journeys', 'Connect discovery with clear enquiry, booking or purchase paths.')],
    finalCta: "Ready to grow your travel business online? Tell Akkurate what you offer, who you want to reach and what outcome matters most.",
  },
};

const strategy = [
  ["Industry & Audience Research", "Identify segments, buying triggers, search behavior, competitors, objections and decision criteria."],
  ["Positioning & Message", "Clarify what the business offers, who it serves, why it is different and what proof can support the claim."],
  ["Discovery", "Build search, local, social and paid visibility around high-value customer journeys."],
  ["Content & Authority", "Answer genuine questions and demonstrate practical knowledge through service pages, guides, case studies and useful resources."],
  ["Conversion", "Improve landing pages, forms, calls to action, trust elements and enquiry/booking/purchase paths."],
  ["Measurement", "Track qualified traffic, leads, enquiries, conversions and other agreed business KPIs."],
];

const whyChoose = [
  "Integrated SEO, AEO, GEO, paid media, web and creative capabilities.",
  "Industry-specific content architecture.",
  "Customer-journey-first strategy.",
  "Clear internal linking between industry and service pages.",
  "Transparent measurement and continuous optimization.",
];

const faqs = (industry) => [
  [`Why should a ${industry.toLowerCase()} business use industry-specific digital marketing?`,
    "Industry-specific strategy allows the website and campaigns to reflect the language, buying process and trust requirements of the market."],
  ["Which digital channels should we invest in?",
    "There is no universal mix. Priorities should depend on audience, competition, geography, offer, buying journey and measurable business value."],
  ["Can Akkurate manage multiple channels?",
    "Yes. SEO, AEO, GEO, paid advertising, social media, websites, content and branding can be coordinated when the business needs an integrated program."],
  ["Can you work with our existing website?",
    "Yes. We can audit the current website and recommend improvements before considering a full rebuild."],
  ["How do you measure industry marketing performance?",
    "We agree on business-relevant KPIs such as qualified traffic, enquiries, leads, conversion rate or other measurable outcomes."],
  ["Do you guarantee leads or rankings?",
    "No. We focus on strategy, execution, testing and transparent measurement rather than guaranteeing outcomes controlled by platforms and market conditions."],
];

export default function IndustryPage() {
  const data = industryData.travel;
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-white text-[#151b2c]">
      {/* Digital Marketing for Travel Businesses That Need Better Visibility, Trust & Leads */}
      <section className="px-14 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1600px]">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="animate-[slideInLeft_.7s_ease-out_both]">
              <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
                {data.focus}
              </p>

              <h1 className="max-w-[760px] text-4xl font-bold leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                {data.hero}
              </h1>

              <p className="mt-7 max-w-[680px] text-base leading-7 text-gray-600 sm:text-lg">
                {data.intro}
              </p>

              <Link
                to="/contact"
                className="mt-8 inline-flex items-center rounded-full bg-[#073b91] px-7 py-3.5 text-sm font-bold text-white shadow-[0_10px_30px_rgba(7,59,145,.18)] transition duration-300 hover:-translate-y-1 hover:bg-[#052f75]"
              >
                Build My Industry Growth Strategy
                <span className="ml-2">→</span>
              </Link>
            </div>

            <div className="animate-[slideInRight_.7s_ease-out_both]">
              <div className="relative mx-auto max-w-[620px]">
                <div className="absolute -inset-8 rounded-[40px] bg-[#1455d9]/5 blur-2xl" />
                <div className="relative overflow-hidden rounded-[32px] border border-gray-100 bg-gradient-to-br from-[#f5f8ff] to-white p-5 shadow-[0_25px_80px_rgba(7,59,145,.10)]">
                  <div className="rounded-[25px] bg-[#073b91] p-8 text-white sm:p-10">
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">
                      Industry Growth
                    </span>
                    <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
                      {data.slug.replaceAll("-", " ")}
                    </h2>
                    <p className="mt-5 max-w-md text-sm leading-6 text-white/75">
                      Strategy built around audience, trust, discovery, content and measurable business outcomes.
                    </p>
                    <div className="mt-8 grid grid-cols-2 gap-3">
                      {["Visibility", "Trust", "Leads", "Growth"].map((item) => (
                        <div key={item} className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4 text-sm font-semibold backdrop-blur">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="px-14 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div className="animate-[slideInLeft_.7s_ease-out_both]">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
              The Business Problem
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              {data.problemTitle}
            </h2>
          </div>

          <div className="animate-[slideInRight_.7s_ease-out_both]">
            <p className="text-base leading-8 text-gray-600 sm:text-lg">
              {data.problem}
            </p>
          </div>
        </div>
      </section>

      {/* [('Destination SEO', 'Build visibility around destination searches and real travel customer intent.'), ('Travel Guides', 'Create useful guides that answer genuine planning and comparison questions.'), ('Google Ads', 'Reach relevant audiences when travel demand is high and intent is clear.'), ('Travel Content', 'Build useful content that supports discovery, trust and planning.'), ('Social Visual Content', 'Use visual content to communicate experiences and destinations.'), ('Booking Journeys', 'Connect discovery with clear enquiry, booking or purchase paths.')] */}
      <section className="px-14 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center animate-[scaleOut_.7s_ease-out_both]">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
              Digital Opportunities
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Key Digital Opportunities for {data.slug.replaceAll("-", " ")}
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {data.opportunities.map(([title, description], index) => (
              <article
                key={title}
                className="animate-[cardIn_.65s_ease-out_both] rounded-3xl border border-gray-100 bg-white p-7 shadow-[0_15px_50px_rgba(0,0,0,.05)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(7,59,145,.10)]"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef4ff] text-sm font-bold text-[#1455d9]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STRATEGY */}
      <section className="px-14 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
            <div className="animate-[slideInLeft_.7s_ease-out_both]">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
                Our Approach
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                Recommended Strategy
              </h2>
              <p className="mt-5 max-w-md text-base leading-7 text-gray-600">
                A customer-journey-first framework that connects discovery, authority and conversion.
              </p>
            </div>

            <div className="space-y-4 animate-[slideInRight_.7s_ease-out_both]">
              {strategy.map(([title, description], index) => (
                <div key={title} className="flex gap-5 rounded-2xl border border-gray-100 bg-[#fafcff] p-5">
                  <span className="shrink-0 text-sm font-bold text-[#1455d9]">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="font-bold">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-gray-600">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY AKKURATE */}
      <section className="px-14 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] rounded-[32px] bg-[#f6f9ff] p-8 sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="animate-[slideInLeft_.7s_ease-out_both]">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
                Why Choose Akkurate
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Integrated digital growth, built around your industry.
              </h2>
            </div>

            <div className="space-y-3 animate-[slideInRight_.7s_ease-out_both]">
              {whyChoose.map((item, index) => (
                <div key={item} className="flex gap-3 rounded-2xl bg-white p-4 shadow-sm">
                  <span className="text-[#1455d9]">✓</span>
                  <span className="text-sm leading-6 text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-14 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[.65fr_1.35fr]">
          <div className="animate-[slideInLeft_.7s_ease-out_both]">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
              Frequently Asked Questions
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Questions, answered clearly.
            </h2>
          </div>

          <div className="space-y-3 animate-[slideInRight_.7s_ease-out_both]">
            {faqs(data.slug.replaceAll("-", " ")).map(([question, answer], index) => (
              <div key={question} className="overflow-hidden rounded-2xl border border-gray-100">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between gap-5 p-5 text-left"
                >
                  <span className="font-semibold">{question}</span>
                  <span className="text-xl text-[#1455d9]">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>

                {openFaq === index && (
                  <div className="border-t border-gray-100 px-5 pb-5 pt-4">
                    <p className="text-sm leading-7 text-gray-600">{answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-14 pb-16 pt-8 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[35px] bg-[#073b91] px-8 py-14 text-center text-white sm:px-12 lg:px-20 lg:py-20 animate-[scaleOut_.7s_ease-out_both]">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60">
            Let’s Build the Right Strategy
          </p>
          <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            {data.finalCta}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
            Tell Akkurate what you sell, who you want to reach and what outcome matters most.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#073b91] transition duration-300 hover:-translate-y-1"
          >
            Contact Akkurate →
          </Link>
        </div>
      </section>

      <style>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-45px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(45px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(28px) scale(.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes scaleOut {
          from { opacity: 0; transform: scale(.96); }
          to { opacity: 1; transform: scale(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>
    </div>
  );
}

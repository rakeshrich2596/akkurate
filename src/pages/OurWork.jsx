import React from "react";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    id: "happypique",
    client: "Happypique",
    industry: "Jewellery / E-Commerce",
    service: "SEO & Digital Marketing",
    title: "400% Organic Growth for an Antique Jewellery Brand",
    description:
      "A long-term SEO strategy designed to improve organic visibility, search performance and sustainable growth.",
    href: "/our-work/happypique",
  },
  {
    id: "dr-multi-speciality-hospital",
    client: "DR Multi Speciality Hospital",
    industry: "Healthcare",
    service: "SEO & Social Media",
    title: "Turning Local Search Into Patient Enquiries",
    description:
      "A digital strategy focused on improving local visibility, trust and the journey from search to patient enquiry.",
    href: "/our-work/dr-multi-speciality-hospital",
  },
  {
    id: "alpine-coach-tree",
    client: "Alpine Coach Tree",
    industry: "Education",
    service: "Website Development",
    title: "From No Website to a Full Learning Platform",
    description:
      "A complete digital learning platform built to provide a stronger online presence and a better learning experience.",
    href: "/our-work/alpine-coach-tree",
  },
  {
    id: "rythmic-beat-dance-court",
    client: "Rythmic Beat Dance Court",
    industry: "Dance / Branding",
    service: "Logo & Brand Identity",
    title: "A Logo That Finally Matches the Energy",
    description:
      "A distinctive visual identity created to better communicate the energy, personality and positioning of the brand.",
    href: "/our-work/rythmic-beat-dance-court",
  },
  {
    id: "pentagon-tax-corp",
    client: "Pentagon Tax Corp",
    industry: "Corporate / Tax",
    service: "Website Development",
    title: "A Premium Site Their Team Can Actually Manage",
    description:
      "A professional corporate website designed around usability, credibility, scalability and search visibility.",
    href: "/our-work/pentagon-tax-corp",
  },
];

export default function OurWork() {
  return (
    <>
      <style>{`
        @keyframes ourWorkFadeUp {
          from { opacity: 0; transform: translateY(26px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes ourWorkImageFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(0.4deg); }
        }

        @keyframes ourWorkGlow {
          0%, 100% { opacity: .25; transform: scale(1); }
          50% { opacity: .55; transform: scale(1.08); }
        }

        .ow-fade-1 { animation: ourWorkFadeUp .7s ease-out both; }
        .ow-fade-2 { animation: ourWorkFadeUp .7s .12s ease-out both; }
        .ow-fade-3 { animation: ourWorkFadeUp .7s .24s ease-out both; }
        .ow-fade-4 { animation: ourWorkFadeUp .7s .36s ease-out both; }
        .ow-fade-5 { animation: ourWorkFadeUp .7s .48s ease-out both; }

        .ow-image-float {
          animation: ourWorkImageFloat 6s ease-in-out infinite;
        }

        .ow-glow {
          animation: ourWorkGlow 5s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .ow-fade-1,
          .ow-fade-2,
          .ow-fade-3,
          .ow-fade-4,
          .ow-fade-5,
          .ow-image-float,
          .ow-glow {
            animation: none !important;
          }
        }
      `}</style>

      <main className="min-h-screen overflow-hidden bg-white text-[#151b2c]">

        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="relative overflow-hidden bg-[#03102f]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(47,111,255,0.28),transparent_30%),radial-gradient(circle_at_18%_85%,rgba(20,85,217,0.18),transparent_34%)]" />
          <div className="absolute -right-32 top-16 h-80 w-80 rounded-full bg-[#2f6fff]/15 blur-3xl ow-glow" />
          <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[#1455d9]/15 blur-3xl" />

          <div className="relative mx-auto grid min-h-[680px] w-full max-w-[1240px] items-center gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-10 lg:py-24">

            {/* Left content */}
            <div className="max-w-[650px]">
              <div className="ow-fade-1 mb-6 flex items-center gap-3">
                <span className="h-px w-11 bg-[#5da7ff]" />
                <p className="m-0 text-[11px] font-bold uppercase tracking-[0.2em] text-[#8fc1ff]">
                  Selected Work
                </p>
              </div>

              <h1 className="ow-fade-2 m-0 text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl lg:text-[50px]">
                We Build Digital <span className="inline text-[#4d91ff]">
                  Work That Performs.
                </span>
                
              </h1>

              <p className="ow-fade-3 mt-7 max-w-[590px] text-base leading-7 text-white/68 sm:text-lg sm:leading-8">
                Real projects. Real business challenges. Real outcomes.
                Explore how Akkurate turns strategy, creativity and technology
                into measurable digital growth.
              </p>

              <div className="ow-fade-4 mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#case-studies"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#073b91] shadow-[0_14px_40px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.28)]"
                >
                  Explore Our Projects
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>

                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/[0.06] px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/10"
                >
                  Start Your Growth Journey
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </Link>
              </div>

              <div className="ow-fade-5 mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-white/45">
                <span>Strategy</span>
                <span className="h-1 w-1 rounded-full bg-[#4d91ff]" />
                <span>Execution</span>
                <span className="h-1 w-1 rounded-full bg-[#4d91ff]" />
                <span>Results</span>
              </div>
            </div>

            {/* Right visual */}
            <div className="relative mx-auto w-full max-w-[610px] lg:ml-auto">
              <div className="ow-image-float relative">
                <div className="absolute -inset-5 rounded-[34px] bg-[#2769df]/20 blur-2xl" />

                <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-white/[0.07] p-2 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-sm">
                  <div className="relative aspect-[16/11] overflow-hidden rounded-[22px]">
                    <img
                      src="/assets/images/ourwork/hero.webp"
                      alt="Akkurate Digital Solutions selected work"
                      className="h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-tr from-[#03102f]/65 via-transparent to-[#2d6bdd]/15" />

                    <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-[#03102f]/65 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white/80 backdrop-blur-md">
                      Akkurate • Digital Solutions
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 p-3">
                    <div className="rounded-2xl bg-white/[0.07] px-4 py-3">
                      <p className="m-0 text-lg font-semibold text-white">05</p>
                      <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-white/40">
                        Projects
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white/[0.07] px-4 py-3">
                      <p className="m-0 text-lg font-semibold text-white">SEO</p>
                      <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-white/40">
                        Growth
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white/[0.07] px-4 py-3">
                      <p className="m-0 text-lg font-semibold text-white">Web</p>
                      <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-white/40">
                        Experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-white/15 bg-[#071b47]/90 px-5 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-md sm:block">
                <p className="m-0 text-[10px] font-bold uppercase tracking-[0.15em] text-[#8fc1ff]">
                  What matters
                </p>
                <p className="mt-1 m-0 text-sm font-semibold text-white">
                  Business impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CASE STUDIES
        ====================================================== */}
        <section
          id="case-studies"
          className="scroll-mt-24 px-6 py-20 sm:px-8 lg:px-10 lg:py-10"
        >
          <div className="mx-auto w-full max-w-[1240px]">

            <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-[700px]">
                <p className="m-0 text-[10px] font-bold uppercase tracking-[0.18em] text-[#1455d9]">
                  Case Studies
                </p>

                <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#151b2c] sm:text-4xl">
                  Work that starts with <span className="inline text-[#1455d9]">
                    the business problem.
                  </span>
                  
                </h2>

                <p className="mt-5 max-w-[650px] text-base leading-7 text-gray-600">
                  Discover the challenge, strategy, execution and measurable
                  outcome behind each project.
                </p>
              </div>

              <span className="w-fit rounded-full border border-[#1455d9]/15 bg-[#1455d9]/5 px-4 py-2 text-xs font-semibold text-[#1455d9]">
                05 Client Stories
              </span>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {caseStudies.map((study, index) => (
                <article
                  key={study.id}
                  className="group relative overflow-hidden rounded-[26px] border border-gray-200 bg-white p-7 shadow-[0_8px_30px_rgba(20,40,80,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#1455d9]/25 hover:shadow-[0_22px_60px_rgba(20,85,217,0.10)] sm:p-8"
                >
                  <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[#1455d9]/5 blur-2xl transition-all duration-500 group-hover:bg-[#1455d9]/10" />

                  <div className="relative flex items-start justify-between gap-5">
                    <div>
                      <p className="m-0 text-[10px] font-bold uppercase tracking-[0.16em] text-[#1455d9]">
                        {study.industry}
                      </p>
                      <p className="mt-2 text-sm font-medium text-gray-500">
                        {study.service}
                      </p>
                    </div>

                    <span className="rounded-full bg-gray-50 px-3 py-1 text-[10px] font-bold tracking-[0.08em] text-gray-400">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="relative mt-8">
                    <p className="m-0 text-sm font-semibold text-[#151b2c]">
                      {study.client}
                    </p>

                    <h3 className="mt-3 max-w-[520px] text-2xl font-semibold leading-tight tracking-[-0.025em] text-[#151b2c] transition-colors duration-300 group-hover:text-[#1455d9] sm:text-[27px]">
                      {study.title}
                    </h3>

                    <p className="mt-5 max-w-[560px] text-sm leading-7 text-gray-600 sm:text-base">
                      {study.description}
                    </p>
                  </div>

                  <div className="relative mt-7 flex items-center justify-between border-t border-gray-100 pt-5">
                    <span className="text-xs font-medium uppercase tracking-[0.1em] text-gray-400">
                      Case Study
                    </span>

                    <Link
                      to={study.href}
                      className="group/link inline-flex items-center gap-2 text-sm font-semibold text-[#1455d9] transition-all duration-300"
                    >
                      View Case Study
                      <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            CASE STUDY FRAMEWORK
        ====================================================== */}
        <section className="bg-[#f7f9fc] px-6 py-20 sm:px-8 lg:px-10 lg:py-10">
          <div className="mx-auto grid w-full max-w-[1240px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

            <div>
              <p className="m-0 text-[10px] font-bold uppercase tracking-[0.18em] text-[#1455d9]">
                Our Approach
              </p>

              <h2 className="mt-4 max-w-[500px] text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#151b2c] sm:text-4xl">
                More than screenshots.
                <span className="block text-[#1455d9]">
                  A complete story.
                </span>
              </h2>

              <p className="mt-5 max-w-[500px] text-base leading-7 text-gray-600">
                Every case study shows what the business challenge was, what
                changed, how the work was executed and what evidence supports
                the outcome.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Client / Industry",
                "Business Challenge",
                "Starting Point",
                "Objectives",
                "Strategy",
                "Execution",
                "Technology / Channels",
                "Before & After Evidence",
                "Results",
                "Lessons & Next Steps",
              ].map((item, index) => (
                <div
                  key={item}
                  className="group rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1455d9]/30 hover:shadow-[0_10px_30px_rgba(20,85,217,0.06)]"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1455d9]/10 text-[10px] font-bold text-[#1455d9]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm font-semibold text-[#151b2c]">
                      {item}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            SEO CONTENT
        ====================================================== */}
        <section className="px-6 py-20 sm:px-8 lg:px-10 lg:py-10">
          <div className="mx-auto w-full max-w-[900px] text-center">
            <p className="m-0 text-[10px] font-bold uppercase tracking-[0.18em] text-[#1455d9]">
              Digital Marketing Case Studies
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-[#151b2c] sm:text-4xl">
              Practical solutions for real businesses
            </h2>

            <p className="mx-auto mt-5 max-w-[700px] text-base leading-7 text-gray-600">
              Explore practical digital marketing, web, branding and growth
              solutions from Akkurate Digital Solutions.
            </p>
          </div>
        </section>

        {/* =====================================================
            CTA
        ====================================================== */}
        <section className="relative overflow-hidden bg-[#073b91] px-6 py-16 text-white sm:px-8 lg:px-10 lg:py-20">
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="relative mx-auto flex w-full max-w-[1240px] flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-[700px]">
              <p className="m-0 text-[10px] font-bold uppercase tracking-[0.18em] text-white/55">
                Let's Build What Matters
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl lg:text-4xl">
                Your next growth story <span className="inline text-white/65">
                  could start here.
                </span>
                
              </h2>
            </div>

            <Link
              to="/contact"
              className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#073b91] no-underline shadow-[0_14px_40px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
            >
              Start a Conversation
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}

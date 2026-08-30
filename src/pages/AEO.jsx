import React, { useState } from "react";
import metaImage from "/assets/images/meta.jpg";
import "../index.css";
import { Link } from "react-router-dom";

/* =========================================================
   AEO PAGE
   Answer Engine Optimization

   GEO PAGE DESIGN + AEO CONTENT
========================================================= */

const aeoServices = [
  {
    number: "01",
    title: "Question & Intent Research",
    description:
      "Research the questions customers ask before, during and after evaluating a service.",
  },
  {
    number: "02",
    title: "Direct Answer Architecture",
    description:
      "Place concise answers near relevant headings, followed by context, examples and deeper explanation.",
  },
  {
    number: "03",
    title: "Featured-Snippet-Friendly Formatting",
    description:
      "Structure definitions, steps, lists and comparisons so users can scan and understand them quickly.",
  },
  {
    number: "04",
    title: "Conversational Content",
    description:
      "Write in natural language that reflects real customer questions instead of forcing awkward keyword variants.",
  },
  {
    number: "05",
    title: "Semantic & Entity Relationships",
    description:
      "Connect related concepts, services, industries and entities so the site communicates context clearly.",
  },
  {
    number: "06",
    title: "FAQ & Knowledge Content",
    description:
      "Create useful FAQs and knowledge content only where the questions genuinely help the audience.",
  },
];

const outcomes = [
  "Better question-intent coverage",
  "Clearer service explanations",
  "Stronger topical depth",
  "More useful service pages",
  "Improved internal linking",
  "Answer-oriented content architecture",
];

const processSteps = [
  {
    number: "01",
    title: "Question Discovery",
    description:
      "Understand the business objective, audience, current assets, constraints and success criteria before recommending the work.",
  },
  {
    number: "02",
    title: "Intent Classification",
    description:
      "Translate the objective into a practical strategy, scope, content/creative direction and measurement plan.",
  },
  {
    number: "03",
    title: "Answer Mapping",
    description:
      "Create, optimize, design, develop or launch the agreed work with brand and user requirements in mind.",
  },
  {
    number: "04",
    title: "Content Development",
    description:
      "Test the experience, tracking, messaging and key conversion paths before considering the work complete.",
  },
  {
    number: "05",
    title: "Review & Refresh",
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
      "What is included in your answer engine optimization (AEO) service?",
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

function AEO() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="w-full overflow-hidden bg-white text-[#111827]">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#f7faff] px-5 pb-16 pt-8 sm:px-8 sm:pb-20 sm:pt-10 lg:px-14 lg:pb-24 lg:pt-12">
        {/* Background */}
        <div className="pointer-events-none absolute -right-48 -top-48 h-[520px] w-[520px] rounded-full bg-blue-100/70 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-48 -left-48 h-[420px] w-[420px] rounded-full bg-indigo-100/50 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1600px] px-1 sm:px-2 lg:px-4 xl:px-6">
          {/* =================================================
        HERO GRID
        LEFT + RIGHT = EQUAL WIDTH
    ================================================= */}
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-10 xl:gap-14">
            {/* =================================================
          LEFT
      ================================================= */}
            <div className="max-w-[760px]">
              {/* Breadcrumb */}
              <div className="mb-5 flex flex-wrap items-center gap-2 text-[10px] font-medium text-gray-500 sm:mb-6 sm:text-[11px]">
                <a href="/" className="transition hover:text-[#1455d9]">
                  Home
                </a>

                <span>/</span>

                <span>Services</span>

                <span>/</span>

                <span className="text-[#1455d9]">AEO</span>
              </div>

              {/* Service Badge */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[.16em] text-[#1455d9] shadow-sm sm:text-[11px]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#1455d9]" />
                Answer Engine Optimization
              </div>

              {/* Heading */}
              <h1 className="m-0 max-w-[760px] text-[35px] font-bold leading-[1.04] tracking-[-.045em] text-[#101828] sm:text-[44px] md:text-[45px] lg:text-[45px] xl:text-[45px]">
                Get Found When Customers Ask the Question
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-[660px] text-[14px] leading-7 text-gray-600 sm:text-[15px] lg:text-[16px]">
                Improve your brand&apos;s visibility across generative search
                with original content, entity clarity, topical authority and
                strong SEO foundations — built around your audience, business
                objective and measurable customer journey.
              </p>

              {/* CTA */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/contact"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#073b91] px-6 py-3 text-[13px] font-bold text-white shadow-[0_12px_30px_rgba(7,59,145,.18)] transition duration-300 hover:-translate-y-1 hover:bg-[#052f75]"
                >
                  Talk to Our Team
                  <span className="ml-2">→</span>
                </a>

                <a
                  href="#aeo-services"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-gray-200 bg-white px-6 py-3 text-[13px] font-semibold text-gray-700 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:text-[#1455d9]"
                >
                  Explore Services
                </a>
              </div>

              {/* Trust Row */}
              <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 border-t border-gray-200/80 pt-5 text-[11px] font-medium text-gray-500">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Strategy-led
                </span>

                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-500" />
                  Search-ready
                </span>

                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-violet-500" />
                  Measurable
                </span>
              </div>
            </div>

            {/* =================================================
          RIGHT — AEO ANSWER VISUAL
      ================================================= */}
            <div className="relative mx-auto min-h-[360px] w-full max-w-[530px] sm:min-h-[400px] sm:max-w-[580px]">
              {/* Ambient Glow */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[70px]" />

              <div className="pointer-events-none absolute right-5 top-5 h-24 w-24 rounded-full bg-violet-500/10 blur-[55px]" />

              {/* =================================================
            MAIN CARD
        ================================================= */}
              <div className="absolute left-1/2 top-1/2 z-10 w-[92%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[22px] border border-white/10 bg-[#080b19]/95 p-3 shadow-[0_25px_70px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-4">
                {/* HEADER */}
                <div className="mb-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/10 ring-1 ring-blue-400/20">
                      <span className="text-[10px] text-blue-300">?</span>
                    </div>

                    <div>
                      <p className="text-[6px] uppercase tracking-[0.16em] text-white/25">
                        AEO
                      </p>

                      <h3 className="text-xs font-semibold text-white/70">
                        Answer Engine
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 rounded-full border border-emerald-400/15 bg-emerald-400/[0.035] px-2 py-1">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

                    <span className="text-[6px] text-emerald-300/70">Live</span>
                  </div>
                </div>

                {/* QUESTION */}
                <div className="rounded-xl border border-blue-400/15 bg-blue-400/[0.03] p-2.5">
                  <div className="mb-1.5 flex items-center gap-1.5">
                    <span className="text-[9px] text-blue-300">⌕</span>

                    <span className="text-[6px] uppercase tracking-[0.15em] text-white/25">
                      User Question
                    </span>
                  </div>

                  <div className="flex min-h-[34px] items-center rounded-lg border border-white/10 bg-[#060914] px-2.5">
                    <span className="text-[8px] text-white/60 sm:text-[9px]">
                      What is the best digital agency for my business?
                    </span>

                    <span className="ml-1 h-3 w-px animate-pulse bg-blue-400" />
                  </div>
                </div>

                {/* PROCESSING FLOW */}
                <div className="relative my-2.5">
                  <div className="absolute left-[18%] right-[18%] top-4 h-px overflow-hidden bg-white/10">
                    <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-[aeoFlow_2s_linear_infinite]" />
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {/* QUESTION NODE */}
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-blue-400/20 bg-blue-400/[0.06]">
                        <span className="text-[8px] text-blue-300">?</span>
                      </div>

                      <span className="mt-1 text-[5px] text-white/35">
                        Question
                      </span>
                    </div>

                    {/* PROCESS NODE */}
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-violet-400/20 bg-violet-400/[0.06]">
                        <span className="animate-spin text-[8px] text-violet-300">
                          ✦
                        </span>

                        <span className="absolute -right-1 -top-1 h-1.5 w-1.5 animate-ping rounded-full bg-violet-400/70" />
                      </div>

                      <span className="mt-1 text-[5px] text-violet-300/45">
                        Processing
                      </span>
                    </div>

                    {/* ANSWER NODE */}
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-emerald-400/20 bg-emerald-400/[0.06]">
                        <span className="text-[8px] text-emerald-300">✓</span>

                        <span className="absolute -right-1 -top-1 h-1.5 w-1.5 animate-ping rounded-full bg-emerald-400/70" />
                      </div>

                      <span className="mt-1 text-[5px] text-emerald-300/45">
                        Answer
                      </span>
                    </div>
                  </div>
                </div>

                {/* GENERATED ANSWER */}
                <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#060914] p-2.5">
                  <div className="pointer-events-none absolute -left-10 top-1/2 h-24 w-24 -translate-y-1/2 animate-pulse rounded-full bg-blue-400/10 blur-2xl" />

                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-400/10">
                        <span className="text-[8px] text-emerald-300">✓</span>
                      </div>

                      <div>
                        <p className="text-[5px] uppercase tracking-[0.15em] text-white/25">
                          Generated Answer
                        </p>

                        <p className="text-[8px] font-semibold text-white/65">
                          Direct Answer
                        </p>
                      </div>
                    </div>

                    <span className="rounded-full border border-emerald-400/15 bg-emerald-400/[0.04] px-2 py-1 text-[5px] text-emerald-300/60">
                      RELEVANT
                    </span>
                  </div>

                  {/* Answer Text */}
                  <div className="relative mt-2 rounded-lg border border-white/5 bg-white/[0.018] p-2">
                    <div className="space-y-1.5">
                      <div className="h-1.5 w-[92%] rounded-full bg-white/10" />

                      <div className="h-1.5 w-[78%] rounded-full bg-white/7" />

                      <div className="h-1.5 w-[60%] rounded-full bg-white/5" />
                    </div>

                    {/* BRAND HIGHLIGHT */}
                    <div className="mt-2 inline-flex items-center gap-1.5 rounded-md border border-blue-400/25 bg-blue-400/[0.08] px-2 py-1.5 shadow-[0_0_18px_rgba(59,130,246,0.12)] animate-[aeoBrand_2.5s_ease-in-out_infinite]">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />

                      <span className="text-[6px] font-semibold text-blue-200">
                        AKKURATE
                      </span>

                      <span className="text-[5px] text-blue-300/50">
                        Recommended
                      </span>
                    </div>
                  </div>

                  {/* SIGNALS */}
                  <div className="mt-2 grid grid-cols-3 gap-1.5">
                    <div className="rounded-lg border border-emerald-400/10 bg-emerald-400/[0.025] p-1.5">
                      <div className="flex items-center gap-1">
                        <span className="text-[7px] text-emerald-300">✓</span>

                        <span className="text-[5px] text-white/40">
                          Direct Answer
                        </span>
                      </div>

                      <div className="mt-1 h-1 w-[75%] rounded-full bg-emerald-400/15" />
                    </div>

                    <div className="rounded-lg border border-violet-400/10 bg-violet-400/[0.025] p-1.5">
                      <div className="flex items-center gap-1">
                        <span className="text-[7px] text-violet-300">◉</span>

                        <span className="text-[5px] text-white/40">Source</span>
                      </div>

                      <div className="mt-1 h-1 w-[65%] rounded-full bg-violet-400/15" />
                    </div>

                    <div className="rounded-lg border border-blue-400/10 bg-blue-400/[0.025] p-1.5">
                      <div className="flex items-center gap-1">
                        <span className="text-[7px] text-blue-300">★</span>

                        <span className="text-[5px] text-white/40">Brand</span>
                      </div>

                      <div className="mt-1 h-1 w-[80%] animate-pulse rounded-full bg-blue-400/20" />
                    </div>
                  </div>
                </div>

                {/* FINAL STATUS */}
                <div className="mt-2.5 flex items-center justify-center">
                  <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

                    <span className="text-[5px] text-white/30">
                      Question → Answer → Brand Visibility
                    </span>
                  </div>
                </div>
              </div>

              {/* LEFT FLOATING */}
              <div className="absolute bottom-4 left-0 z-30 hidden rounded-lg border border-white/10 bg-[#090c1b]/95 px-2.5 py-1.5 shadow-xl backdrop-blur-xl sm:block">
                <div className="flex items-center gap-1.5">
                  <span className="text-[8px] text-blue-300">?</span>

                  <div>
                    <p className="text-[6px] text-white/55">Query Detected</p>

                    <p className="text-[5px] text-blue-300/40">
                      Intent matched
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT FLOATING */}
              <div className="absolute bottom-4 right-0 z-30 hidden rounded-lg border border-white/10 bg-[#090c1b]/95 px-2.5 py-1.5 shadow-xl backdrop-blur-xl sm:block">
                <div className="flex items-center gap-1.5">
                  <span className="animate-pulse text-[8px] text-emerald-300">
                    ✓
                  </span>

                  <div>
                    <p className="text-[6px] text-white/55">Brand Mention</p>

                    <p className="text-[5px] text-emerald-300/40">
                      Answer optimized
                    </p>
                  </div>
                </div>
              </div>

              {/* PARTICLES */}
              <div className="pointer-events-none absolute inset-0">
                <span className="absolute left-[15%] top-[24%] h-1 w-1 animate-ping rounded-full bg-blue-400/60" />

                <span className="absolute right-[16%] top-[27%] h-1 w-1 animate-pulse rounded-full bg-violet-400/60" />

                <span className="absolute bottom-[20%] left-[21%] h-1 w-1 animate-pulse rounded-full bg-cyan-400/60" />

                <span className="absolute bottom-[21%] right-[22%] h-1 w-1 animate-ping rounded-full bg-emerald-400/60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-15">
        <div className="pointer-events-none absolute right-0 top-0 h-[320px] w-[320px] rounded-full bg-blue-50 blur-3xl" />

        <div className="relative mx-auto grid w-full max-w-[1500px] gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-end lg:gap-20">
          <div className="mb-9">
            <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9] sm:text-[11px]">
              Built for the new search landscape
            </p>

            <h2 className="mt-4 m-0 max-w-[600px] text-[31px] font-bold leading-[1.08] tracking-[-.04em] text-[#101828] sm:text-[38px] lg:text-[40px]">
              AEO that connects answers with business growth.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-[24px] border border-gray-200 bg-[#f8faff] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,.07)]">
              <span className="text-[11px] font-bold text-[#1455d9]">
                01 / CLARITY
              </span>

              <h3 className="mt-5 m-0 text-[20px] font-bold tracking-[-.025em] text-[#101828]">
                Make your expertise easy to understand.
              </h3>

              <p className="mt-3 m-0 text-[13px] leading-6 text-gray-500">
                Build clear relationships between your brand, services, topics,
                industries and the questions customers actually ask.
              </p>
            </div>

            <div className="rounded-[24px] border border-gray-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,.08)]">
              <span className="text-[11px] font-bold text-[#1455d9]">
                02 / ANSWERS
              </span>

              <h3 className="mt-5 m-0 text-[20px] font-bold tracking-[-.025em] text-[#101828]">
                Turn content into useful answers.
              </h3>

              <p className="mt-3 m-0 text-[13px] leading-6 text-gray-500">
                Structure content around real customer questions with concise
                answers, supporting context and deeper explanation.
              </p>
            </div>
          </div>
        </div>

        {/* Akkurate approach */}

        <div className="relative mx-auto mt-10 max-w-[1500px] rounded-[28px] border border-gray-200 bg-[#101828] p-6 shadow-[0_25px_70px_rgba(15,23,42,.12)] sm:p-8 lg:p-10">
          <div className="grid gap-7 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div>
              <p className="m-0 text-[10px] font-bold uppercase tracking-[.18em] text-blue-300">
                The Akkurate approach
              </p>

              <h3 className="mt-3 m-0 max-w-[650px] text-[25px] font-bold leading-tight tracking-[-.03em] text-white sm:text-[25px]">
                Strategy first. Content second. Measurement throughout.
              </h3>

              <p className="mt-4 max-w-[650px] text-[13px] leading-7 text-gray-300 sm:text-[14px]">
                We start with the business objective, audience and customer
                journey, then decide what should be created, optimized and
                measured.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                ["01", "Understand", "Business + audience"],
                ["02", "Build", "Topics + answers"],
                ["03", "Improve", "Signals + iteration"],
              ].map(([num, title, copy]) => (
                <div
                  key={num}
                  className="rounded-2xl border border-white/10 bg-white/[.05] p-4"
                >
                  <span className="text-[10px] font-bold text-blue-300">
                    {num}
                  </span>

                  <p className="mt-5 m-0 text-[13px] font-bold text-white">
                    {title}
                  </p>

                  <p className="mt-1 m-0 text-[9px] leading-4 text-gray-400">
                    {copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BUSINESS PROBLEM
      ===================================================== */}

      <section className="bg-[#101828] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-15">
        <div className="mx-auto w-full max-w-[1200px] px-4 text-center sm:px-6 lg:px-8">
          <p className="m-0 text-[10px] font-bold uppercase tracking-[.18em] text-blue-300 sm:text-[11px]">
            The Business Problem We Solve
          </p>

          <h2 className="mt-4 m-0 text-[27px] font-bold leading-tight tracking-[-.03em] text-white sm:text-[34px] lg:text-[42px]">
            Help Customers Find Clear Answers When They Search
          </h2>

          <p className="mx-auto mt-5 max-w-[850px] text-[14px] leading-7 text-gray-300 sm:text-[15px]">
            Generative search can synthesize information from multiple sources.
            A business with thin service pages, unclear terminology,
            inconsistent brand information or weak topical depth can be harder
            for systems and customers to understand.
          </p>

          <p className="mx-auto mt-4 max-w-[850px] text-[14px] leading-7 text-gray-300 sm:text-[15px]">
            Akkurate approaches AEO as a practical extension of SEO, content
            strategy, brand clarity and digital authority — not as a shortcut or
            ranking hack.
          </p>
          <div className="mt-8 grid gap-3 text-left sm:grid-cols-3">
            {[
              ["01", "Clarity", "Help the audience understand what matters."],
              [
                "02",
                "Confidence",
                "Make the experience feel credible and relevant.",
              ],
              ["03", "Action", "Make the next meaningful step easier."],
            ].map(([n, t, c]) => (
              <div
                key={n}
                className="rounded-[20px] border border-white/10 bg-white/[.045] p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/[.07]"
              >
                <span className="text-[9px] font-black tracking-[.15em] text-blue-300">
                  {n}
                </span>
                <h3 className="mt-4 m-0 text-[16px] font-bold text-white">
                  {t}
                </h3>
                <p className="mt-2 m-0 text-[11px] leading-5 text-gray-400">
                  {c}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          ANALYTICS
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#f7faff] px-5 py-10 sm:px-8 sm:py-20 lg:px-14 lg:py-15">
        <div className="mx-auto w-full max-w-[1500px]">
          <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-center lg:gap-16">
            <div>
              <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9]">
                Performance / Analytics
              </p>

              <h2 className="mt-3 m-0 text-[30px] font-bold leading-[1.08] tracking-[-.04em] text-[#101828] sm:text-[38px] lg:text-[37px]">
                See how your answer presence is getting stronger.
              </h2>

              <p className="mt-5 max-w-[560px] text-[14px] leading-7 text-gray-600">
                AEO should not be treated as a one-time content task. Track the
                signals that matter — question coverage, answer quality, content
                depth and qualified discovery — then use them to prioritize the
                next move.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3">
                {[
                  ["78%", "Visibility signal"],
                  ["126", "Questions mapped"],
                  ["92", "Answer clarity"],
                  ["84%", "Content readiness"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-[18px] border border-gray-200 bg-white p-4 shadow-[0_8px_28px_rgba(15,23,42,.04)]"
                  >
                    <p className="m-0 text-[22px] font-bold tracking-[-.03em] text-[#101828]">
                      {value}
                    </p>

                    <p className="mt-1 m-0 text-[10px] font-medium text-gray-400">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* AEO ANSWER COVERAGE */}

            <div className="rounded-[28px] border border-gray-200 bg-white p-4 shadow-[0_25px_70px_rgba(15,23,42,.08)] sm:p-6">
              <div className="flex flex-col gap-3 border-b border-gray-100 pb-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-[12px] font-bold text-[#1455d9]">
                    ?
                  </span>

                  <div>
                    <p className="m-0 text-[13px] font-bold text-[#101828]">
                      Answer Coverage
                    </p>
                    <p className="mt-1 m-0 text-[10px] text-gray-400">
                      Illustrative AEO content view
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-[8px] font-bold text-emerald-600">
                  Improving
                </span>
              </div>

              {/* Question intent bars */}

              <div className="mt-7 space-y-5">
                {[
                  ["Informational", "88%", "bg-[#1455d9]"],
                  ["Commercial", "74%", "bg-violet-400"],
                  ["Comparison", "63%", "bg-indigo-400"],
                  ["Transactional", "51%", "bg-emerald-400"],
                ].map(([label, value, barColor]) => (
                  <div key={label}>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-[10px] font-semibold text-[#101828]">
                        {label}
                      </span>
                      <span className="text-[10px] font-bold text-gray-500">
                        {value}
                      </span>
                    </div>

                    <div className="h-3 overflow-hidden rounded-full bg-gray-100">
                      <div
                        className={`h-full rounded-full ${barColor} transition-all duration-700`}
                        style={{ width: value }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Answer journey */}

              <div className="mt-8 rounded-[20px] bg-[#f7faff] p-4">
                <p className="m-0 text-[8px] font-bold uppercase tracking-[.14em] text-gray-400">
                  Answer journey
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <div className="text-center">
                    <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-[11px] font-bold text-[#1455d9]">
                      ?
                    </div>
                    <p className="mt-2 m-0 text-[8px] font-bold text-gray-500">
                      Question
                    </p>
                  </div>

                  <span className="h-px flex-1 bg-blue-100" />

                  <div className="text-center">
                    <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-violet-100 text-[11px] font-bold text-violet-500">
                      A
                    </div>
                    <p className="mt-2 m-0 text-[8px] font-bold text-gray-500">
                      Answer
                    </p>
                  </div>

                  <span className="h-px flex-1 bg-violet-100" />

                  <div className="text-center">
                    <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-[11px] font-bold text-emerald-500">
                      ✓
                    </div>
                    <p className="mt-2 m-0 text-[8px] font-bold text-gray-500">
                      Action
                    </p>
                  </div>
                </div>
              </div>

              {/* Summary */}

              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  ["Questions", "126"],
                  ["Clarity", "92"],
                  ["Coverage", "84%"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-gray-100 bg-white p-3"
                  >
                    <p className="m-0 text-[8px] font-medium text-gray-400">
                      {label}
                    </p>
                    <p className="mt-1 m-0 text-[15px] font-bold text-[#101828]">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section
        id="aeo-services"
        className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-15"
      >
        <div className="mx-auto w-full max-w-[1500px]">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[760px]">
              <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9] sm:text-[11px]">
                Our Services
              </p>

              <h2 className="mt-3 m-0 text-[30px] font-bold leading-[1.08] tracking-[-.04em] text-[#101828] sm:text-[38px] lg:text-[37px]">
                A complete AEO capability, not a single tactic.
              </h2>
            </div>

            <p className="max-w-[420px] text-[13px] leading-6 text-gray-500">
              Each capability is designed to work independently or as part of a
              connected search, content and digital-growth program.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {aeoServices.map((service) => (
              <article
                key={service.number}
                className="group relative overflow-hidden rounded-[24px] border border-gray-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,.035)] transition-all duration-500 hover:-translate-y-2 hover:border-blue-100 hover:shadow-[0_25px_60px_rgba(15,23,42,.09)] sm:p-7"
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-blue-50 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

                <div className="relative flex items-start justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f0f5ff] text-[10px] font-black text-[#1455d9]">
                    {service.number}
                  </span>

                  <span className="text-[20px] text-gray-300 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#1455d9]">
                    ↗
                  </span>
                </div>

                <h3 className="relative mt-7 m-0 text-[20px] font-bold leading-snug tracking-[-.02em] text-[#101828]">
                  {service.title}
                </h3>

                <p className="relative mt-3 m-0 text-[13px] leading-6 text-gray-500 sm:text-[14px]">
                  {service.description}
                </p>

                <div className="relative mt-6 h-px overflow-hidden bg-gray-100">
                  <div className="h-full w-1/3 bg-[#1455d9] transition-all duration-500 group-hover:w-full" />
                </div>

                <p className="relative mt-4 m-0 text-[9px] font-bold uppercase tracking-[.14em] text-gray-400 transition group-hover:text-[#1455d9]">
                  Explore capability →
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          OUTCOMES
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#f7faff] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-15">
        <div className="mx-auto w-full max-w-[1500px]">
          <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-center lg:gap-20">
            <div>
              <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9]">
                What You Get
              </p>

              <h2 className="mt-3 m-0 text-[31px] font-bold leading-[1.08] tracking-[-.04em] text-[#101828] sm:text-[40px] lg:text-[48px]">
                Build the conditions for better answers.
              </h2>

              <p className="mt-5 m-0 max-w-[540px] text-[14px] leading-7 text-gray-600">
                The exact outcome depends on the starting point, competition,
                audience, budget, implementation and business model. Our job is
                to create the conditions for measurable improvement and to
                report honestly on what is working.
              </p>

              <a
                href="/contact"
                className="mt-7 inline-flex items-center rounded-full bg-[#073b91] px-5 py-3 text-[12px] font-bold text-white transition hover:-translate-y-1 hover:bg-[#052f75]"
              >
                Discuss your growth goal
                <span className="ml-2">→</span>
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {outcomes.map((outcome, index) => (
                <div
                  key={outcome}
                  className="group flex items-center gap-4 rounded-[18px] border border-gray-200 bg-white p-5 shadow-[0_7px_25px_rgba(15,23,42,.035)] transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-[0_18px_40px_rgba(15,23,42,.07)]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f0f5ff] text-[10px] font-black text-[#1455d9] transition group-hover:bg-[#073b91] group-hover:text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-[13px] font-bold leading-5 text-[#101828] sm:text-[14px]">
                    {outcome}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHO THIS SERVICE IS FOR
      ===================================================== */}

      <section className="relative px-5 py-16 sm:px-8 sm:py-20 lg:py-15">
        <div className="mx-auto w-full max-w-[950px] px-4 text-center sm:px-6 lg:px-8">
          <p className="m-0 text-[10px] font-bold uppercase tracking-[.18em] text-[#1455d9]">
            Who This Service Is For
          </p>

          <h2 className="mt-3 m-0 text-[29px] font-bold leading-tight tracking-[-.03em] text-[#101828] sm:text-[36px] lg:text-[42px]">
            AEO Should Fit Your Business
          </h2>

          <p className="mt-5 m-0 text-[14px] leading-7 text-gray-600 sm:text-[15px]">
            Answer Engine Optimization (AEO) is relevant to businesses that have
            a clear reason to improve their digital presence, customer journey
            or growth engine.
          </p>

          <p className="mt-4 m-0 text-[14px] leading-7 text-gray-600 sm:text-[15px]">
            The right approach depends on the starting point. Akkurate can
            recommend a focused scope, a broader integrated program or a
            different service when that is more appropriate.
          </p>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#101828] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-15">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-900/20 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1500px]">
          <div className="mx-auto max-w-[800px] text-center">
            <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-blue-300">
              Our Process
            </p>

            <h2 className="mt-3 m-0 text-[31px] font-bold leading-[1.08] tracking-[-.04em] text-white sm:text-[40px] lg:text-[48px]">
              A Practical AEO Process
            </h2>

            <p className="mt-5 text-[13px] leading-7 text-gray-400 sm:text-[14px]">
              A structured process keeps strategy, content, optimization and
              measurement connected.
            </p>
          </div>

          <div className="relative mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
            <div className="pointer-events-none absolute left-[10%] right-[10%] top-[42px] hidden h-px bg-gradient-to-r from-blue-500/10 via-blue-400/50 to-blue-500/10 lg:block" />

            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className="group relative rounded-[22px] border border-white/10 bg-white/[.045] p-5 transition duration-500 hover:-translate-y-2 hover:border-blue-400/30 hover:bg-white/[.07] sm:p-6"
              >
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-blue-400/20 bg-[#101b31] text-[10px] font-black text-blue-300 shadow-[0_0_0_7px_rgba(20,85,217,.04)]">
                  {step.number}
                </div>

                <h3 className="mt-6 m-0 text-[18px] font-bold leading-snug text-white">
                  {step.title}
                </h3>

                <p className="mt-3 m-0 text-[12px] leading-6 text-gray-400">
                  {step.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.12em] text-blue-300 opacity-60 transition group-hover:opacity-100">
                  Step {String(index + 1).padStart(2, "0")}
                  <span className="h-px w-8 bg-blue-400/40" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY AKKURATE
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#f7faff] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-15">
        <div className="pointer-events-none absolute -right-32 top-10 h-[360px] w-[360px] rounded-full bg-blue-100/50 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 -left-32 h-[320px] w-[320px] rounded-full bg-indigo-100/40 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1500px]">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#1455d9]" />

                <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9] sm:text-[11px]">
                  Why Choose Akkurate
                </p>
              </div>

              <h2 className="m-0 max-w-[650px] text-[32px] font-bold leading-[1.05] tracking-[-.045em] text-[#101828] sm:text-[40px] lg:text-[50px]">
                More than a service.
                <span className="block text-[#1455d9]">A growth system.</span>
              </h2>
            </div>

            <div>
              <p className="m-0 max-w-[650px] text-[14px] leading-7 text-gray-600 sm:text-[15px]">
                Digital growth rarely depends on one channel. We bring strategy,
                search, content, web and technology together when the customer
                journey needs a connected approach.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Strategy", "Search", "Answers", "Content", "Digital"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.12em] text-gray-500"
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-[0.7fr_1.3fr]">
            {/* LEFT DARK PANEL */}

            <div className="relative min-h-[420px] overflow-hidden rounded-[28px] bg-[#101828] p-7 shadow-[0_25px_70px_rgba(15,23,42,.12)] sm:p-9">
              <div className="pointer-events-none absolute -right-24 -top-24 h-[260px] w-[260px] rounded-full border border-white/10" />

              <div className="pointer-events-none absolute -right-12 -top-12 h-[180px] w-[180px] rounded-full border border-white/10" />

              <div className="pointer-events-none absolute -bottom-28 -left-24 h-[250px] w-[250px] rounded-full bg-blue-600/10 blur-3xl" />

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.14em] text-blue-300">
                      Akkurate Method
                    </span>

                    <span className="flex items-center gap-2 text-[9px] font-semibold text-white/40">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Connected
                    </span>
                  </div>

                  <h3 className="mt-8 max-w-[390px] text-[27px] font-bold leading-tight tracking-[-.035em] text-white sm:text-[32px]">
                    One strategy.
                    <br />
                    Multiple answer levers.
                  </h3>

                  <p className="mt-4 max-w-[400px] text-[12px] leading-6 text-gray-400 sm:text-[13px]">
                    Instead of treating every digital activity separately, we
                    connect the right capabilities around your business
                    objective and customer journey.
                  </p>
                </div>

                {/* Strategy diagram */}

                <div className="relative mt-10 h-[180px]">
                  <div className="absolute left-[22%] top-[50%] h-px w-[58%] bg-gradient-to-r from-blue-400/20 via-blue-400/70 to-blue-400/20" />

                  <div className="absolute left-[50%] top-[15%] h-[70%] w-px bg-gradient-to-b from-transparent via-blue-400/50 to-transparent" />

                  {/* Center */}

                  <div className="absolute left-1/2 top-1/2 flex h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-blue-300/30 bg-[#15233d] shadow-[0_0_40px_rgba(20,85,217,.2)]">
                    <div className="text-center">
                      <p className="m-0 text-[8px] font-bold uppercase tracking-[.12em] text-blue-300">
                        Growth
                      </p>

                      <p className="mt-1 m-0 text-[11px] font-bold text-white">
                        Core
                      </p>
                    </div>
                  </div>

                  {[
                    ["AEO", "top-[5%] left-[15%]"],
                    ["CONTENT", "top-[5%] right-[15%]"],
                    ["SEO", "bottom-[5%] left-[15%]"],
                    ["FAQ", "bottom-[5%] right-[15%]"],
                  ].map(([label, position]) => (
                    <div
                      key={label}
                      className={`absolute ${position} rounded-xl border border-white/10 bg-white/[0.06] px-3 py-2 backdrop-blur-md`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />

                        <span className="text-[8px] font-bold tracking-[.08em] text-white/80">
                          {label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-3 border-t border-white/10 pt-5">
                  <div className="flex -space-x-1.5">
                    <span className="h-6 w-6 rounded-full border-2 border-[#101828] bg-blue-200" />

                    <span className="h-6 w-6 rounded-full border-2 border-[#101828] bg-indigo-200" />

                    <span className="h-6 w-6 rounded-full border-2 border-[#101828] bg-violet-200" />
                  </div>

                  <p className="m-0 text-[9px] leading-4 text-white/40">
                    Strategy connects the right
                    <br />
                    digital capabilities.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT CARDS */}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {whyChoose.map((item) => (
                <article
                  key={item.number}
                  className="group relative overflow-hidden rounded-[24px] border border-gray-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,.035)] transition-all duration-500 hover:-translate-y-2 hover:border-[#1455d9] hover:shadow-[0_25px_55px_rgba(20,85,217,.14)]"
                >
                  <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-blue-50 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

                  <div className="relative flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f0f5ff] text-[10px] font-black text-[#1455d9] transition duration-300 group-hover:bg-[#1455d9] group-hover:text-white">
                      {item.number}
                    </div>

                    <span className="text-[20px] text-gray-300 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#1455d9]">
                      ↗
                    </span>
                  </div>

                  <h3 className="relative mt-7 m-0 text-[19px] font-bold leading-snug tracking-[-.02em] text-[#101828]">
                    {item.title}
                  </h3>

                  <p className="relative mt-3 m-0 text-[12px] leading-6 text-gray-500 sm:text-[13px]">
                    {item.description}
                  </p>

                  <div className="relative mt-7 flex items-center justify-between border-t border-gray-100 pt-4">
                    <span className="text-[8px] font-bold uppercase tracking-[.14em] text-gray-400 transition group-hover:text-[#1455d9]">
                      Akkurate capability
                    </span>

                    <span className="h-1.5 w-1.5 rounded-full bg-gray-200 transition group-hover:bg-[#1455d9]" />
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Bottom strip */}

          <div className="mt-6 flex flex-col gap-4 rounded-[22px] border border-gray-200 bg-white px-6 py-5 shadow-[0_8px_30px_rgba(15,23,42,.035)] sm:flex-row sm:items-center sm:justify-between sm:px-7">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#073b91] text-white">
                ✓
              </span>

              <p className="m-0 text-[12px] font-semibold text-[#101828] sm:text-[13px]">
                Every recommendation starts with the business objective.
              </p>
            </div>

            <a
              href="/contact"
              className="inline-flex items-center text-[11px] font-bold text-[#1455d9] transition hover:gap-2"
            >
              Talk to our team
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          RELATED SERVICES
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#050713] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-5">
        {/* Background glow */}
        <div className="pointer-events-none absolute -left-40 top-10 h-[350px] w-[350px] rounded-full bg-violet-600/10 blur-[110px]" />

        <div className="pointer-events-none absolute -right-40 top-[30%] h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="pointer-events-none absolute left-[42%] bottom-0 h-[300px] w-[300px] rounded-full bg-cyan-500/5 blur-[100px]" />

        <div className="relative mx-auto w-full max-w-[1500px]">
          {/* HEADER */}
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-500 shadow-[0_0_12px_rgba(139,92,246,.8)]" />

                <p className="m-0 text-[10px] font-bold uppercase tracking-[0.22em] text-gray-400 sm:text-[11px]">
                  Related Services
                </p>
              </div>
            </div>

            <p className="max-w-[470px] text-[12px] leading-6 text-gray-400 sm:text-[13px] lg:pb-1">
              Extend your GEO strategy with connected digital capabilities that
              strengthen discovery, engagement and conversion.
            </p>
          </div>

          {/* CARDS */}
          <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* =====================================================
          SEO CARD
      ===================================================== */}

            <Link
              to="/seo"
              className="
          group
          relative
          h-[175px]
          overflow-hidden
          rounded-[20px]
          border
          border-white/10
          bg-gradient-to-br
          from-[#151d2b]
          via-[#101724]
          to-[#0b111c]
          p-5
          transition-all
          duration-500
          hover:-translate-y-1.5
          hover:border-cyan-400/30
          hover:shadow-[0_25px_60px_rgba(6,182,212,.15)]
          sm:h-[180px]
          sm:p-6
        "
            >
              {/* Cyan glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-[190px] w-[190px] rounded-full bg-cyan-500/15 blur-[65px] transition duration-700 group-hover:bg-cyan-400/25" />

              {/* Content */}
              <div className="relative z-20 flex h-full w-[58%] flex-col justify-between">
                <div>
                  <h3 className="mt-4 m-0 text-[17px] font-bold tracking-[-.025em] text-white sm:text-[18px]">
                    SEO
                  </h3>

                  <p className="mt-2 m-0 max-w-[270px] text-[10px] leading-[1.6] text-gray-400 sm:text-[11px]">
                    Improve organic visibility with strategic optimization that
                    drives qualified traffic and long-term growth.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[.12em] text-cyan-300/60 transition group-hover:text-cyan-300">
                  Explore service
                  <span className="h-px w-5 bg-cyan-400/30 transition-all duration-300 group-hover:w-8" />
                </div>
              </div>

              {/* SEO ORBIT VISUAL */}
              <div className="pointer-events-none absolute right-[-4px] top-1/2 h-[150px] w-[150px] -translate-y-1/2 transition duration-700 group-hover:scale-110">
                {/* Glow */}
                <div className="absolute left-1/2 top-1/2 h-[110px] w-[110px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-2xl" />

                {/* Main orbit */}
                <div className="absolute left-1/2 top-1/2 h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 animate-[spin_8s_linear_infinite] rounded-full border border-cyan-400/20 border-t-cyan-400/80">
                  <span className="absolute -right-1 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,.9)]" />
                </div>

                {/* Inner orbit */}
                <div className="absolute left-1/2 top-1/2 h-[82px] w-[82px] -translate-x-1/2 -translate-y-1/2 animate-[spin_5s_linear_infinite_reverse] rounded-full border border-dashed border-cyan-300/20">
                  <span className="absolute -top-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cyan-300" />
                </div>

                {/* Center */}
                <div className="absolute left-1/2 top-1/2 flex h-[56px] w-[56px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[17px] border border-cyan-300/25 bg-[#10202b] shadow-[0_0_35px_rgba(6,182,212,.25)]">
                  <div className="text-center">
                    <span className="text-[14px] font-bold uppercase tracking-[.1em] text-cyan-300/70">
                      SEO
                    </span>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="absolute bottom-4 right-4 z-30 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-500/10 text-[13px] text-cyan-300 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-cyan-500 group-hover:text-white">
                →
              </div>
            </Link>

            {/* =====================================================
          GOOGLE ADS CARD
      ===================================================== */}

            <Link
              to="/GoogleAds"
              className="
          group
          relative
          h-[175px]
          overflow-hidden
          rounded-[20px]
          border
          border-white/10
          bg-gradient-to-br
          from-[#17192a]
          via-[#121525]
          to-[#0c101d]
          p-5
          transition-all
          duration-500
          hover:-translate-y-1.5
          hover:border-violet-400/30
          hover:shadow-[0_25px_60px_rgba(124,58,237,.16)]
          sm:h-[180px]
          sm:p-6
        "
            >
              {/* Glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-[190px] w-[190px] rounded-full bg-violet-600/15 blur-[65px] transition duration-700 group-hover:bg-violet-500/25" />

              {/* LEFT CONTENT */}
              <div className="relative z-20 flex h-full w-[58%] flex-col justify-between">
                <div>
                  <h3 className="mt-4 m-0 text-[17px] font-bold tracking-[-.025em] text-white sm:text-[18px]">
                    Google Ads
                  </h3>

                  <p className="mt-2 m-0 max-w-[270px] text-[10px] leading-[1.6] text-gray-400 sm:text-[11px]">
                    Reach high-intent customers with targeted campaigns designed
                    to increase clicks, leads and conversions.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[.12em] text-violet-300/60 transition group-hover:text-violet-300">
                  Explore service
                  <span className="h-px w-5 bg-violet-400/30 transition-all duration-300 group-hover:w-8" />
                </div>
              </div>

              {/* GOOGLE ADS ORBIT */}
              <div className="pointer-events-none absolute right-[-4px] top-1/2 h-[150px] w-[150px] -translate-y-1/2 transition duration-700 group-hover:scale-110">
                {/* Outer glow */}
                <div className="absolute left-1/2 top-1/2 h-[115px] w-[115px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-2xl" />

                {/* Rotating orbit */}
                <div className="absolute left-1/2 top-1/2 h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 animate-[spin_9s_linear_infinite] rounded-full border border-violet-400/20 border-t-violet-400/80">
                  <span className="absolute -right-1 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-violet-400 shadow-[0_0_14px_rgba(167,139,250,.9)]" />
                </div>

                {/* Reverse orbit */}
                <div className="absolute left-1/2 top-1/2 h-[88px] w-[88px] -translate-x-1/2 -translate-y-1/2 animate-[spin_6s_linear_infinite_reverse] rounded-full border border-dashed border-violet-300/20">
                  <span className="absolute -top-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-purple-300" />
                </div>

                {/* Center */}
                <div className="absolute left-1/2 top-1/2 flex h-[55px] w-[55px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-violet-300/30 bg-[#17152b] shadow-[0_0_35px_rgba(139,92,246,.3)]">
                  <span className="text-[10px] font-black text-violet-300">
                    GOOGLE
                  </span>
                </div>
              </div>

              {/* Arrow */}
              <div className="absolute bottom-4 right-4 z-30 flex h-8 w-8 items-center justify-center rounded-full border border-violet-400/20 bg-violet-500/10 text-[13px] text-violet-300 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-violet-500 group-hover:text-white">
                →
              </div>
            </Link>

            {/* =====================================================
          META ADS CARD
      ===================================================== */}

            <Link
              to="/MetaAds"
              className="
          group
          relative
          h-[175px]
          overflow-hidden
          rounded-[20px]
          border
          border-white/10
          bg-gradient-to-br
          from-[#1c1920]
          via-[#15151d]
          to-[#0e1018]
          p-5
          transition-all
          duration-500
          hover:-translate-y-1.5
          hover:border-orange-400/30
          hover:shadow-[0_25px_60px_rgba(249,115,22,.14)]
          sm:h-[180px]
          sm:p-6
        "
            >
              {/* Orange glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-[190px] w-[190px] rounded-full bg-orange-500/15 blur-[65px] transition duration-700 group-hover:bg-orange-400/25" />

              {/* Content */}
              <div className="relative z-20 flex h-full w-[58%] flex-col justify-between">
                <div>
                  <h3 className="mt-4 m-0 text-[17px] font-bold tracking-[-.025em] text-white sm:text-[18px]">
                    Meta Ads
                  </h3>

                  <p className="mt-2 m-0 max-w-[275px] text-[10px] leading-[1.6] text-gray-400 sm:text-[11px]">
                    Create targeted social campaigns that build awareness,
                    engagement and measurable conversions.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[.12em] text-orange-300/60 transition group-hover:text-orange-300">
                  Explore service
                  <span className="h-px w-5 bg-orange-400/30 transition-all duration-300 group-hover:w-8" />
                </div>
              </div>

              {/* META ADS ORBIT */}
              <div className="pointer-events-none absolute right-[-4px] top-1/2 h-[150px] w-[150px] -translate-y-1/2 transition duration-700 group-hover:scale-110">
                {/* Glow */}
                <div className="absolute left-1/2 top-1/2 h-[110px] w-[110px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-400/10 blur-2xl" />

                {/* Orbit */}
                <div className="absolute left-1/2 top-1/2 h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 animate-[spin_10s_linear_infinite] rounded-full border border-orange-400/20 border-t-orange-400/80">
                  <span className="absolute -right-1 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-orange-400 shadow-[0_0_14px_rgba(251,146,60,.9)]" />
                </div>

                {/* Reverse orbit */}
                <div className="absolute left-1/2 top-1/2 h-[85px] w-[85px] -translate-x-1/2 -translate-y-1/2 animate-[spin_6s_linear_infinite_reverse] rounded-full border border-dashed border-orange-300/20">
                  <span className="absolute -top-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-orange-300" />
                </div>

                {/* Center */}
                <div className="absolute left-1/2 top-1/2 flex h-[58px] w-[75px] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-xl border border-orange-300/25 bg-[#1a1719] shadow-[0_0_35px_rgba(249,115,22,.22)]">
                  <span className="text-[11px] font-black uppercase tracking-[.08em] text-orange-300">
                    Meta Ads
                  </span>
                </div>
              </div>

              {/* Arrow */}
              <div className="absolute bottom-4 right-4 z-30 flex h-8 w-8 items-center justify-center rounded-full border border-orange-400/20 bg-orange-500/10 text-[13px] text-orange-300 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-orange-500 group-hover:text-white">
                →
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#f7faff] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-15">
        <div className="pointer-events-none absolute -left-32 top-20 h-[300px] w-[300px] rounded-full bg-blue-100/60 blur-3xl" />

        <div className="pointer-events-none absolute -right-32 bottom-0 h-[350px] w-[350px] rounded-full bg-indigo-100/50 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1250px]">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            {/* LEFT */}

            <div className="lg:sticky lg:top-24 lg:self-start">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1455d9] shadow-[0_0_12px_rgba(20,85,217,.5)]" />

                <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9]">
                  Frequently Asked Questions
                </p>
              </div>

              <h2 className="mt-4 m-0 max-w-[430px] text-[32px] font-bold leading-[1.05] tracking-[-.045em] text-[#101828] sm:text-[40px] lg:text-[40px]">
                Everything you need
                <span className="block text-[#1455d9]">to know about AEO.</span>
              </h2>

              <p className="mt-5 max-w-[430px] text-[12px] leading-6 text-gray-500 sm:text-[13px] sm:leading-7">
                Have questions about Answer Engine Optimization, implementation
                or how it fits into your existing digital strategy? Find the
                answers below.
              </p>

              {/* Question card */}

              <div className="mt-8 overflow-hidden rounded-[20px] border border-gray-200 bg-white p-5 shadow-[0_10px_35px_rgba(15,23,42,.04)]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#073b91] text-white">
                      <span className="text-[16px] font-bold">?</span>
                    </div>

                    <div>
                      <p className="m-0 text-[11px] font-bold text-[#101828]">
                        Still have questions?
                      </p>

                      <p className="mt-1 m-0 text-[9px] text-gray-400">
                        Our team can help.
                      </p>
                    </div>
                  </div>

                  <a
                    href="/contact"
                    className="group flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-[13px] text-gray-500 transition-all duration-300 hover:border-[#1455d9] hover:bg-[#1455d9] hover:text-white"
                  >
                    →
                  </a>
                </div>

                <div className="mt-5 border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] font-bold uppercase tracking-[.15em] text-gray-400">
                      AEO Strategy
                    </span>

                    <span className="flex items-center gap-1.5 text-[8px] font-semibold text-emerald-500">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                      Available
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-[18px] border border-gray-200 bg-white px-4 py-4">
                  <p className="m-0 text-[20px] font-bold tracking-[-.03em] text-[#101828]">
                    AEO
                  </p>

                  <p className="mt-1 m-0 text-[8px] font-medium uppercase tracking-[.12em] text-gray-400">
                    Answer Visibility
                  </p>
                </div>

                <div className="rounded-[18px] border border-gray-200 bg-white px-4 py-4">
                  <p className="m-0 text-[20px] font-bold tracking-[-.03em] text-[#1455d9]">
                    Q&A
                  </p>

                  <p className="mt-1 m-0 text-[8px] font-medium uppercase tracking-[.12em] text-gray-400">
                    Intent Ready
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT FAQ */}

            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    key={faq.question}
                    className={`group overflow-hidden rounded-[20px] border transition-all duration-500 ${
                      isOpen
                        ? "border-[#1455d9] bg-[#073b91] shadow-[0_18px_45px_rgba(20,85,217,.15)]"
                        : "border-gray-200 bg-white hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_12px_35px_rgba(15,23,42,.05)]"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6 sm:py-6"
                    >
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-[9px] font-black transition-all duration-300 ${
                          isOpen
                            ? "bg-white/10 text-blue-100"
                            : "bg-[#f0f5ff] text-[#1455d9]"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className={`flex-1 text-[12px] font-bold leading-6 transition-colors duration-300 sm:text-[13px] ${
                          isOpen ? "text-white" : "text-[#101828]"
                        }`}
                      >
                        {faq.question}
                      </span>

                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-[17px] transition-all duration-300 ${
                          isOpen
                            ? "rotate-45 border-white/20 bg-white/10 text-white"
                            : "border-gray-200 bg-gray-50 text-gray-500 group-hover:border-[#1455d9] group-hover:text-[#1455d9]"
                        }`}
                      >
                        +
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-500 ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-5 pb-6 pl-[68px] pr-6 sm:px-6 sm:pb-7 sm:pl-[77px]">
                          <div className="mb-4 h-px bg-white/10" />

                          <p className="m-0 max-w-[680px] text-[11px] leading-6 text-blue-100/85 sm:text-[12px] sm:leading-7">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom strip */}

          <div className="mt-10 flex flex-col gap-4 rounded-[20px] border border-gray-200 bg-white px-5 py-4 shadow-[0_8px_30px_rgba(15,23,42,.035)] sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f0f5ff] text-[#1455d9]">
                ✓
              </div>

              <p className="m-0 text-[10px] font-semibold text-gray-600 sm:text-[11px]">
                Can&apos;t find the answer you&apos;re looking for?
              </p>
            </div>

            <a
              href="/contact"
              className="group inline-flex items-center text-[10px] font-bold text-[#1455d9]"
            >
              Talk to our team
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="px-5 pb-14 sm:px-8 sm:pb-16 lg:px-14 lg:pb-15">
        <div className="relative mt-20 overflow-hidden rounded-[26px] bg-gradient-to-r from-[#0b2443] via-[#7434e8] to-[#245fe5] px-6 py-9 shadow-[0_25px_80px_rgba(91,45,190,.22)] sm:px-9 sm:py-10 lg:px-11 lg:py-11">
          <div className="pointer-events-none absolute -right-20 -top-28 h-[260px] w-[260px] rounded-full bg-white/10 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto_auto] lg:items-center">
            <div>
              <p className="m-0 text-[9px] font-bold uppercase tracking-[.18em] text-white/70">
                Ready to grow?
              </p>

              <h3 className="mt-2 m-0 max-w-[600px] text-[26px] font-bold leading-[1.12] tracking-[-.035em] text-white sm:text-[32px]">
                Let&apos;s build your answer growth system.
              </h3>

              <p className="mt-3 m-0 text-[12px] text-white/75 sm:text-[13px]">
                Strategy, AEO and digital growth — connected.
              </p>
            </div>

            <a
              href="/contact"
              className="inline-flex w-fit items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-[11px] font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#073b91]"
            >
              Start Your Project
              <span className="ml-2 text-[15px]">→</span>
            </a>

            <div className="flex items-center gap-6 border-t border-white/20 pt-5 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
              <div>
                <p className="m-0 text-[22px] font-bold text-white">500+</p>

                <p className="mt-1 m-0 text-[8px] text-white/65">Projects</p>
              </div>

              <div className="h-9 w-px bg-white/20" />

              <div>
                <p className="m-0 text-[22px] font-bold text-white">100+</p>

                <p className="mt-1 m-0 text-[8px] text-white/65">Clients</p>
              </div>

              <div className="h-9 w-px bg-white/20" />

              <div>
                <p className="m-0 text-[22px] font-bold text-white">24/7</p>

                <p className="mt-1 m-0 text-[8px] text-white/65">Support</p>
              </div>
            </div>
          </div>

          <div className="relative mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-4">
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[8px] text-blue-200">
                01
              </span>

              <span className="text-[9px] font-medium text-white/55">
                Discovery
              </span>
            </div>

            <span className="h-3 w-px bg-white/10" />

            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[8px] text-blue-200">
                02
              </span>

              <span className="text-[9px] font-medium text-white/55">
                Strategy
              </span>
            </div>

            <span className="h-3 w-px bg-white/10" />

            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[8px] text-blue-200">
                03
              </span>

              <span className="text-[9px] font-medium text-white/55">
                Answers
              </span>
            </div>

            <div className="ml-auto hidden items-center gap-2 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,.7)]" />

              <span className="text-[9px] font-medium text-white/45">
                Let&apos;s talk about your next move
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AEO;

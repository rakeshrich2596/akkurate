import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Blog1 = () => {
  const [activeSection, setActiveSection] = useState("introduction");

  useEffect(() => {
    document.title =
      "SEO vs AEO vs GEO: What Is the Difference and Which Does Your Business Need? | Akkurate Digital Solutions";

    const description =
      "A practical guide to seo vs aeo vs geo, including strategy, examples, common mistakes and actionable next steps from Akkurate Digital Solutions.";

    let metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute("content", description);

    let keywords = document.querySelector(
      'meta[name="keywords"]'
    );

    if (!keywords) {
      keywords = document.createElement("meta");
      keywords.setAttribute("name", "keywords");
      document.head.appendChild(keywords);
    }

    keywords.setAttribute(
      "content",
      "seo vs aeo vs geo, SEO, AEO, GEO, digital marketing agency, search engine optimization, answer engine optimization, generative engine optimization"
    );

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });

    const sections = document.querySelectorAll(
      "[data-blog-section]"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    const revealElements = document.querySelectorAll(
      ".blog-reveal"
    );

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("blog-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    revealElements.forEach((element) =>
      revealObserver.observe(element)
    );

    return () => {
      observer.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  const tableOfContents = [
    {
      id: "introduction",
      label: "Introduction",
    },
    {
      id: "what-is-it",
      label: "What is it and why does it matter?",
    },
    {
      id: "how-it-works",
      label: "How does it work?",
    },
    {
      id: "what-first",
      label: "What should a business do first?",
    },
    {
      id: "framework",
      label: "Practical framework",
    },
    {
      id: "mistakes",
      label: "Common mistakes",
    },
    {
      id: "examples",
      label: "Examples",
    },
    {
      id: "faqs",
      label: "FAQs",
    },
    {
      id: "akkurate-help",
      label: "How Akkurate can help",
    },
  ];

  const comparisonData = [
    {
      name: "SEO",
      fullName: "Search Engine Optimization",
      color: "blue",
      goal: "Improve visibility in traditional search results.",
      focus: "Search rankings, website authority, technical health and useful content.",
      example:
        "A customer searches for “best digital marketing agency in Chennai” and discovers your website.",
    },
    {
      name: "AEO",
      fullName: "Answer Engine Optimization",
      color: "indigo",
      goal: "Make content useful for direct answers.",
      focus: "Questions, structured information, concise answers and search intent.",
      example:
        "A customer asks “What is AEO?” and your content provides a clear answer that can be surfaced.",
    },
    {
      name: "GEO",
      fullName: "Generative Engine Optimization",
      color: "sky",
      goal: "Improve the likelihood of being represented in AI-generated answers.",
      focus: "Entity clarity, authoritative information, useful content and strong digital signals.",
      example:
        "A customer asks an AI assistant to recommend agencies and your brand is considered as part of the answer.",
    },
  ];

  const frameworkSteps = [
    {
      number: "01",
      title: "Understand the business",
      description:
        "Start with your products, customers, positioning, commercial priorities and the questions your audience actually asks.",
    },
    {
      number: "02",
      title: "Build strong foundations",
      description:
        "Make sure your website, technical SEO, content structure, internal linking and important business information are clear.",
    },
    {
      number: "03",
      title: "Create useful content",
      description:
        "Answer real customer questions with original, specific and easy-to-understand information.",
    },
    {
      number: "04",
      title: "Strengthen authority",
      description:
        "Develop credible brand signals, relevant mentions, useful resources and consistent information across important channels.",
    },
    {
      number: "05",
      title: "Measure and improve",
      description:
        "Review performance, search visibility, engagement and business outcomes. Then improve based on evidence.",
    },
  ];

  const mistakes = [
    "Treating SEO, AEO and GEO as three completely separate marketing strategies.",
    "Publishing large amounts of generic AI-generated content without adding useful expertise.",
    "Focusing only on keywords instead of understanding customer intent.",
    "Ignoring technical website foundations while chasing new search trends.",
    "Writing content only for search engines instead of people.",
    "Making unsupported claims about rankings, AI visibility or guaranteed results.",
  ];

  const faqs = [
    {
      question: "Is SEO still important if AI search is growing?",
      answer:
        "Yes. SEO remains an important foundation for discoverability. Strong websites, useful content, clear information architecture and authority can support visibility across multiple search experiences.",
    },
    {
      question: "Is AEO the same as SEO?",
      answer:
        "They overlap, but they are not identical. SEO broadly focuses on improving organic search visibility, while AEO places additional emphasis on providing clear answers to specific questions and intents.",
    },
    {
      question: "What is the difference between AEO and GEO?",
      answer:
        "AEO focuses heavily on answer-oriented search experiences, while GEO focuses on visibility and representation within generative AI experiences. Both benefit from clear, useful and trustworthy information.",
    },
    {
      question: "Should every business invest in SEO, AEO and GEO?",
      answer:
        "The right mix depends on the business, audience, competition, customer journey and available resources. A strong foundation should usually come before expanding into additional optimization activities.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "There is no universal timeline. Results depend on competition, website condition, content quality, authority, market and execution. The better approach is to establish measurable milestones rather than promise a fixed result.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-hidden bg-white text-[#071a46]">

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#071a46] px-5 pb-16 pt-24 text-white sm:px-8 sm:pb-20 sm:pt-28 lg:px-12 lg:pb-24 lg:pt-32">

          {/* Animated background */}
          <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl blog-floating-orb" />

          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-3xl blog-floating-orb-reverse" />

          <div className="relative z-10 mx-auto max-w-[1150px]">

            {/* Breadcrumb */}

            <div className="blog-reveal flex flex-wrap items-center gap-2 text-[11px] text-slate-400">
              <Link
                to="/"
                className="transition-colors hover:text-white"
              >
                Home
              </Link>

              <span>/</span>

              <Link
                to="/blog"
                className="transition-colors hover:text-white"
              >
                Blog
              </Link>

              <span>/</span>

              <span className="text-slate-300">
                SEO vs AEO vs GEO
              </span>
            </div>

            {/* Category */}

            <div className="blog-reveal mt-8 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-200">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-300 blog-pulse" />
              Digital Marketing
            </div>

            {/* H1 */}

            <h1 className="blog-reveal mt-6 max-w-[950px] text-[40px] font-bold leading-[1.08] tracking-[-0.045em] sm:text-[52px] lg:text-[40px]">
              SEO vs AEO vs GEO: What Is the Difference and Which Does Your Business Need?
            </h1>

            {/* Intro */}

            <p className="blog-reveal mt-7 max-w-[800px] text-[15px] leading-[1.8] text-slate-300 sm:text-[17px]">
              Search is changing. Businesses are no longer
              optimizing only for traditional search results.
              Answers, AI-generated responses and new discovery
              experiences are becoming part of the digital
              customer journey.
            </p>

            {/* Meta */}

            <div className="blog-reveal mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-[11px] text-slate-400">
              <span>By Akkurate Digital Solutions</span>

              <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />

              <span>Digital Marketing Guide</span>

              <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />

              <span>8 min read</span>
            </div>

            {/* Hero visual */}

            <div className="blog-reveal mt-14 grid gap-4 sm:grid-cols-3">

              {comparisonData.map((item, index) => (
                <div
                  key={item.name}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-300/30 hover:bg-white/[0.07]"
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-400/10 blur-2xl transition-transform duration-500 group-hover:scale-150" />

                  <div className="relative">
                    <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-blue-300">
                      {item.name}
                    </span>

                    <h3 className="mt-2 text-[16px] font-semibold">
                      {item.fullName}
                    </h3>

                    <p className="mt-3 text-[12px] leading-[1.7] text-slate-400">
                      {item.goal}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* =====================================================
            ARTICLE AREA
        ====================================================== */}

        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">

          <div className="mx-auto grid max-w-[1150px] gap-12 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-16">

            {/* =================================================
                TABLE OF CONTENTS
            ================================================== */}

            <aside className="hidden lg:block">
              <div className="sticky top-28">

                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
                  On this page
                </p>

                <nav className="mt-5 border-l border-slate-200">
                  {tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`block border-l-2 py-2 pl-4 text-[11px] leading-[1.5] transition-all duration-300 ${
                        activeSection === item.id
                          ? "border-[#1455d9] font-semibold text-[#1455d9]"
                          : "border-transparent text-slate-500 hover:border-slate-300 hover:text-[#071a46]"
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>

                <div className="mt-8 rounded-2xl bg-[#f5f8fd] p-5">
                  <p className="text-[11px] font-semibold text-[#071a46]">
                    Need help with your search strategy?
                  </p>

                  <Link
                    to="/contact"
                    className="mt-3 inline-flex text-[11px] font-semibold text-[#1455d9] transition hover:translate-x-1"
                  >
                    Talk to Akkurate →
                  </Link>
                </div>

              </div>
            </aside>

            {/* =================================================
                ARTICLE
            ================================================== */}

            <article className="min-w-0">

              {/* INTRODUCTION */}

              <div
                id="introduction"
                data-blog-section
                className="blog-section blog-reveal"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
                  SEO VS AEO VS GEO
                </p>

                <h2 className="mt-4 text-[30px] font-bold leading-[1.2] tracking-[-0.03em] sm:text-[40px]">
                  Search is becoming more than a list of links.
                </h2>

                <div className="mt-6 space-y-5 text-[15px] leading-[1.9] text-slate-600 sm:text-[16px]">
                  <p>
                    For years, businesses have focused on search
                    engine optimization to improve their visibility
                    in organic search results. That foundation
                    remains important, but the way people discover
                    information is expanding.
                  </p>

                  <p>
                    People increasingly ask direct questions, look
                    for summarized answers and use AI-powered tools
                    to explore products, services and businesses.
                    This is where terms such as AEO and GEO become
                    useful.
                  </p>

                  <p>
                    The important point is not to treat these as
                    completely disconnected activities. Instead,
                    businesses should understand what each approach
                    is trying to achieve and build a digital
                    foundation that supports useful discovery
                    wherever customers search.
                  </p>
                </div>
              </div>

              {/* DIVIDER */}

              <div className="my-16 h-px bg-slate-100" />

              {/* WHAT IS IT */}

              <div
                id="what-is-it"
                data-blog-section
                className="blog-section blog-reveal"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
                  01 / THE BASICS
                </p>

                <h2 className="mt-4 text-[30px] font-bold leading-[1.2] tracking-[-0.03em] sm:text-[40px]">
                  What is it and why does it matter?
                </h2>

                <p className="mt-6 text-[15px] leading-[1.9] text-slate-600 sm:text-[16px]">
                  SEO, AEO and GEO all relate to discoverability,
                  but they emphasize different search experiences.
                  Understanding those differences helps businesses
                  prioritize the right work instead of following
                  every new trend.
                </p>

                {/* Comparison Cards */}

                <div className="mt-10 space-y-5">

                  {comparisonData.map((item, index) => (
                    <div
                      key={item.name}
                      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_40px_rgba(7,26,70,0.04)] transition-all duration-500 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(7,26,70,0.08)] sm:p-7"
                    >
                      <div className="absolute left-0 top-0 h-full w-1 bg-[#1455d9] opacity-70 transition-all duration-500 group-hover:w-2" />

                      <div className="flex flex-col gap-5 sm:flex-row">

                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#eff5ff] text-[13px] font-bold text-[#1455d9]">
                          {item.name}
                        </div>

                        <div className="flex-1">

                          <h3 className="text-[20px] font-bold text-[#071a46]">
                            {item.fullName}
                          </h3>

                          <p className="mt-2 text-[14px] font-medium text-slate-700">
                            {item.goal}
                          </p>

                          <p className="mt-3 text-[13px] leading-[1.8] text-slate-500">
                            <strong className="text-slate-700">
                              Focus:
                            </strong>{" "}
                            {item.focus}
                          </p>

                          <div className="mt-4 rounded-xl bg-slate-50 p-4">
                            <p className="m-0 text-[12px] leading-[1.7] text-slate-600">
                              <strong className="text-[#071a46]">
                                Example:
                              </strong>{" "}
                              {item.example}
                            </p>
                          </div>

                        </div>
                      </div>
                    </div>
                  ))}

                </div>
              </div>

              {/* DIVIDER */}

              <div className="my-16 h-px bg-slate-100" />

              {/* HOW IT WORKS */}

              <div
                id="how-it-works"
                data-blog-section
                className="blog-section blog-reveal"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
                  02 / HOW IT WORKS
                </p>

                <h2 className="mt-4 text-[30px] font-bold leading-[1.2] tracking-[-0.03em] sm:text-[40px]">
                  How does it work?
                </h2>

                <p className="mt-6 text-[15px] leading-[1.9] text-slate-600 sm:text-[16px]">
                  The three approaches are connected by one
                  fundamental principle: make your business easier
                  to understand and your information more useful.
                </p>

                <div className="mt-9 grid gap-5 md:grid-cols-3">

                  <div className="blog-mini-card">
                    <span>SEO</span>
                    <h3>Discoverability</h3>
                    <p>
                      Helps search engines understand and surface
                      relevant website content.
                    </p>
                  </div>

                  <div className="blog-mini-card">
                    <span>AEO</span>
                    <h3>Answerability</h3>
                    <p>
                      Helps content respond clearly to specific
                      questions and search intent.
                    </p>
                  </div>

                  <div className="blog-mini-card">
                    <span>GEO</span>
                    <h3>AI Discoverability</h3>
                    <p>
                      Focuses on making business information clear,
                      useful and credible for generative search
                      experiences.
                    </p>
                  </div>

                </div>

                <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50/60 p-6">
                  <p className="m-0 text-[14px] leading-[1.8] text-slate-700">
                    <strong className="text-[#071a46]">
                      The takeaway:
                    </strong>{" "}
                    You do not need three completely separate
                    content strategies. A strong digital foundation
                    can support multiple discovery experiences at
                    the same time.
                  </p>
                </div>
              </div>

              {/* DIVIDER */}

              <div className="my-16 h-px bg-slate-100" />

              {/* WHAT FIRST */}

              <div
                id="what-first"
                data-blog-section
                className="blog-section blog-reveal"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
                  03 / PRIORITIES
                </p>

                <h2 className="mt-4 text-[30px] font-bold leading-[1.2] tracking-[-0.03em] sm:text-[40px]">
                  What should a business do first?
                </h2>

                <div className="mt-6 space-y-5 text-[15px] leading-[1.9] text-slate-600 sm:text-[16px]">
                  <p>
                    Start with the basics. Before investing heavily
                    in any new optimization trend, make sure your
                    business has a clear digital foundation.
                  </p>

                  <p>
                    Your website should communicate what you do,
                    who you serve, where you operate when relevant,
                    why customers should trust you and how they can
                    take the next step.
                  </p>

                  <p>
                    Once those fundamentals are strong, content can
                    be expanded around real customer questions,
                    commercial intent and topics where your business
                    has genuine expertise.
                  </p>
                </div>

                <div className="mt-8 rounded-2xl bg-[#071a46] p-7 text-white">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-300">
                    PRIORITY ORDER
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-3 text-[13px] font-semibold">
                    <span className="rounded-full bg-white/10 px-4 py-2">
                      Business clarity
                    </span>

                    <span className="text-blue-300">→</span>

                    <span className="rounded-full bg-white/10 px-4 py-2">
                      Website foundation
                    </span>

                    <span className="text-blue-300">→</span>

                    <span className="rounded-full bg-white/10 px-4 py-2">
                      Useful content
                    </span>

                    <span className="text-blue-300">→</span>

                    <span className="rounded-full bg-white/10 px-4 py-2">
                      Authority
                    </span>

                    <span className="text-blue-300">→</span>

                    <span className="rounded-full bg-white/10 px-4 py-2">
                      Measurement
                    </span>
                  </div>
                </div>
              </div>

              {/* DIVIDER */}

              <div className="my-16 h-px bg-slate-100" />

              {/* FRAMEWORK */}

              <div
                id="framework"
                data-blog-section
                className="blog-section blog-reveal"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
                  04 / PRACTICAL FRAMEWORK
                </p>

                <h2 className="mt-4 text-[30px] font-bold leading-[1.2] tracking-[-0.03em] sm:text-[40px]">
                  Practical framework / checklist
                </h2>

                <p className="mt-6 text-[15px] leading-[1.9] text-slate-600 sm:text-[16px]">
                  Use this simple framework to decide where your
                  business should focus first.
                </p>

                <div className="mt-10 space-y-4">

                  {frameworkSteps.map((step, index) => (
                    <div
                      key={step.number}
                      className="blog-framework-card blog-reveal"
                      style={{
                        transitionDelay: `${index * 80}ms`,
                      }}
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#eff5ff] text-[11px] font-bold text-[#1455d9]">
                        {step.number}
                      </div>

                      <div>
                        <h3 className="text-[17px] font-bold text-[#071a46]">
                          {step.title}
                        </h3>

                        <p className="mt-2 text-[13px] leading-[1.75] text-slate-500">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}

                </div>

                {/* Checklist */}

                <div className="mt-10 rounded-2xl border border-slate-200 p-6 sm:p-7">

                  <h3 className="text-[18px] font-bold text-[#071a46]">
                    Quick checklist
                  </h3>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">

                    {[
                      "Is your website technically sound?",
                      "Is your business clearly described?",
                      "Are your important services easy to understand?",
                      "Does your content answer real customer questions?",
                      "Are your internal links useful and logical?",
                      "Are your claims supported by evidence?",
                      "Is your business information consistent?",
                      "Are you measuring meaningful outcomes?",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-xl bg-slate-50 p-4"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1455d9] text-[10px] text-white">
                          ✓
                        </span>

                        <span className="text-[12px] leading-[1.6] text-slate-600">
                          {item}
                        </span>
                      </div>
                    ))}

                  </div>
                </div>
              </div>

              {/* DIVIDER */}

              <div className="my-16 h-px bg-slate-100" />

              {/* MISTAKES */}

              <div
                id="mistakes"
                data-blog-section
                className="blog-section blog-reveal"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
                  05 / COMMON MISTAKES
                </p>

                <h2 className="mt-4 text-[30px] font-bold leading-[1.2] tracking-[-0.03em] sm:text-[40px]">
                  Common mistakes businesses should avoid
                </h2>

                <div className="mt-8 space-y-3">

                  {mistakes.map((mistake, index) => (
                    <div
                      key={mistake}
                      className="group flex items-start gap-4 rounded-xl border border-slate-100 p-4 transition-all duration-300 hover:border-red-100 hover:bg-red-50/30"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[10px] font-bold text-slate-500 transition-colors group-hover:bg-red-100 group-hover:text-red-500">
                        {index + 1}
                      </span>

                      <p className="m-0 pt-1 text-[13px] leading-[1.7] text-slate-600">
                        {mistake}
                      </p>
                    </div>
                  ))}

                </div>
              </div>

              {/* DIVIDER */}

              <div className="my-16 h-px bg-slate-100" />

              {/* EXAMPLES */}

              <div
                id="examples"
                data-blog-section
                className="blog-section blog-reveal"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
                  06 / EXAMPLES
                </p>

                <h2 className="mt-4 text-[30px] font-bold leading-[1.2] tracking-[-0.03em] sm:text-[40px]">
                  SEO vs AEO vs GEO in practice
                </h2>

                <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">

                  <div className="grid grid-cols-3 border-b border-slate-200 bg-slate-50 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500">
                    <div className="p-4">Approach</div>
                    <div className="border-l border-slate-200 p-4">
                      Customer behaviour
                    </div>
                    <div className="border-l border-slate-200 p-4">
                      Content response
                    </div>
                  </div>

                  {[
                    [
                      "SEO",
                      "Searches for a service or topic.",
                      "Detailed page targeting relevant intent.",
                    ],
                    [
                      "AEO",
                      "Asks a direct question.",
                      "Clear, concise answer supported by context.",
                    ],
                    [
                      "GEO",
                      "Uses an AI or generative search experience.",
                      "Clear, authoritative and context-rich business information.",
                    ],
                  ].map((row) => (
                    <div
                      key={row[0]}
                      className="grid grid-cols-3 border-b border-slate-100 text-[12px] last:border-b-0"
                    >
                      <div className="p-4 font-bold text-[#1455d9]">
                        {row[0]}
                      </div>

                      <div className="border-l border-slate-100 p-4 leading-[1.6] text-slate-500">
                        {row[1]}
                      </div>

                      <div className="border-l border-slate-100 p-4 leading-[1.6] text-slate-500">
                        {row[2]}
                      </div>
                    </div>
                  ))}

                </div>
              </div>

              {/* DIVIDER */}

              <div className="my-16 h-px bg-slate-100" />

              {/* FAQ */}

              <div
                id="faqs"
                data-blog-section
                className="blog-section blog-reveal"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
                  07 / FAQS
                </p>

                <h2 className="mt-4 text-[30px] font-bold leading-[1.2] tracking-[-0.03em] sm:text-[40px]">
                  Frequently asked questions
                </h2>

                <div className="mt-8 space-y-3">

                  {faqs.map((faq, index) => (
                    <details
                      key={faq.question}
                      className="group overflow-hidden rounded-xl border border-slate-200 transition-all duration-300 hover:border-blue-200"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-5 text-[14px] font-semibold text-[#071a46]">
                        <span>{faq.question}</span>

                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[16px] font-normal text-slate-500 transition-transform duration-300 group-open:rotate-45">
                          +
                        </span>
                      </summary>

                      <div className="px-5 pb-5">
                        <p className="m-0 text-[13px] leading-[1.8] text-slate-500">
                          {faq.answer}
                        </p>
                      </div>
                    </details>
                  ))}

                </div>
              </div>

              {/* DIVIDER */}

              <div className="my-16 h-px bg-slate-100" />

              {/* AKKURATE */}

              <div
                id="akkurate-help"
                data-blog-section
                className="blog-section blog-reveal"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
                  08 / AKKURATE
                </p>

                <h2 className="mt-4 text-[30px] font-bold leading-[1.2] tracking-[-0.03em] sm:text-[40px]">
                  How Akkurate can help
                </h2>

                <div className="mt-6 space-y-5 text-[15px] leading-[1.9] text-slate-600 sm:text-[16px]">
                  <p>
                    The right search strategy starts with your
                    business, not with a list of marketing
                    buzzwords.
                  </p>

                  <p>
                    Akkurate Digital Solutions brings digital
                    marketing, technology and creative capabilities
                    together to help businesses build stronger
                    digital customer journeys.
                  </p>

                  <p>
                    Depending on your goals, that may include SEO,
                    AEO, GEO, paid advertising, social media,
                    content, web development, branding and other
                    digital capabilities.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">

                  <Link
                    to="/seo"
                    className="rounded-full bg-[#1455d9] px-6 py-3 text-[12px] font-semibold text-white no-underline transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    Explore SEO
                  </Link>

                  <Link
                    to="/aeo"
                    className="rounded-full border border-slate-200 px-6 py-3 text-[12px] font-semibold text-[#071a46] no-underline transition-all duration-300 hover:-translate-y-1 hover:border-[#1455d9] hover:text-[#1455d9]"
                  >
                    Explore AEO
                  </Link>

                  <Link
                    to="/geo"
                    className="rounded-full border border-slate-200 px-6 py-3 text-[12px] font-semibold text-[#071a46] no-underline transition-all duration-300 hover:-translate-y-1 hover:border-[#1455d9] hover:text-[#1455d9]"
                  >
                    Explore GEO
                  </Link>

                </div>
              </div>

              {/* =================================================
                  FINAL CTA
              ================================================== */}

              <div className="blog-reveal relative mt-20 overflow-hidden rounded-[24px] bg-[#071a46] p-8 text-white sm:p-10">

                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full border border-white/10" />

                <div className="pointer-events-none absolute -bottom-24 -left-16 h-44 w-44 rounded-full border border-white/10" />

                <div className="relative z-10">

                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-300">
                    BUILD A STRONGER DIGITAL FOUNDATION
                  </p>

                  <h3 className="mt-4 max-w-[650px] text-[27px] font-bold leading-[1.2] tracking-[-0.025em] sm:text-[34px]">
                    Ready to understand what your business should focus on first?
                  </h3>

                  <p className="mt-4 max-w-[650px] text-[13px] leading-[1.8] text-slate-300">
                    Let's understand your business, audience and
                    goals before deciding which digital channels
                    deserve attention.
                  </p>

                  <Link
                    to="/contact"
                    className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[12px] font-semibold text-[#071a46] no-underline transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    Let's Talk
                    <span>↗</span>
                  </Link>

                </div>
              </div>

            </article>
          </div>
        </section>

      </main>

      <Footer />

      {/* =======================================================
          ANIMATIONS
      ======================================================== */}

      <style>{`

        .blog-reveal {
          opacity: 0;
          transform: translateY(30px);
          transition:
            opacity 0.8s ease,
            transform 0.8s ease;
        }

        .blog-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .blog-floating-orb {
          animation:
            blogFloat 8s ease-in-out infinite;
        }

        .blog-floating-orb-reverse {
          animation:
            blogFloatReverse 10s ease-in-out infinite;
        }

        .blog-pulse {
          animation:
            blogPulse 2s ease-in-out infinite;
        }

        .blog-mini-card {
          position: relative;
          overflow: hidden;
          border: 1px solid #e5eaf2;
          border-radius: 18px;
          background: white;
          padding: 24px;
          transition:
            transform 0.4s ease,
            box-shadow 0.4s ease,
            border-color 0.4s ease;
        }

        .blog-mini-card::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 3px;
          background: #1455d9;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .blog-mini-card:hover {
          transform: translateY(-7px);
          border-color: #cbdcfb;
          box-shadow:
            0 20px 45px rgba(7, 26, 70, 0.08);
        }

        .blog-mini-card:hover::before {
          transform: scaleX(1);
        }

        .blog-mini-card span {
          color: #1455d9;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.15em;
        }

        .blog-mini-card h3 {
          margin-top: 14px;
          color: #071a46;
          font-size: 18px;
          font-weight: 700;
        }

        .blog-mini-card p {
          margin-top: 9px;
          color: #64748b;
          font-size: 13px;
          line-height: 1.7;
        }

        .blog-framework-card {
          display: flex;
          align-items: flex-start;
          gap: 18px;
          border: 1px solid #e5eaf2;
          border-radius: 18px;
          background: white;
          padding: 20px;
          transition:
            transform 0.35s ease,
            border-color 0.35s ease,
            box-shadow 0.35s ease;
        }

        .blog-framework-card:hover {
          transform: translateX(7px);
          border-color: #cbdcfb;
          box-shadow:
            0 15px 40px rgba(7, 26, 70, 0.06);
        }

        @keyframes blogFloat {

          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(-20px, 25px, 0);
          }

        }

        @keyframes blogFloatReverse {

          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(25px, -20px, 0);
          }

        }

        @keyframes blogPulse {

          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }

          50% {
            opacity: 0.45;
            transform: scale(1.4);
          }

        }

        @media (max-width: 767px) {

          .blog-framework-card:hover {
            transform: translateY(-3px);
          }

        }

        @media (prefers-reduced-motion: reduce) {

          .blog-reveal,
          .blog-framework-card,
          .blog-mini-card,
          .blog-floating-orb,
          .blog-floating-orb-reverse,
          .blog-pulse {
            animation: none !important;
            transition: none !important;
          }

          .blog-reveal {
            opacity: 1 !important;
            transform: none !important;
          }

        }

      `}</style>
    </>
  );
};

export default Blog1;
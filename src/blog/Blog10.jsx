import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Blog10 = () => {
  const [activeSection, setActiveSection] = useState("introduction");

  useEffect(() => {
    document.title = 'How to Create Content That Performs in Google Search and AI Experiences | Akkurate Digital Solutions';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", 'A practical guide to content for ai search, including strategy, examples, common mistakes and actionable next steps from Akkurate Digital Solutions.');
    window.scrollTo({ top: 0, behavior: "instant" });

    const sections = document.querySelectorAll("[data-blog-section]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { rootMargin: "-20% 0px -60% 0px" });
    sections.forEach((s) => observer.observe(s));

    const reveals = document.querySelectorAll(".blog-reveal");
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("blog-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    reveals.forEach((r) => revealObserver.observe(r));

    return () => {
      observer.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  const toc = [
    ["introduction","Introduction"],
    ["what-is-it","What is it and why does it matter?"],
    ["how-it-works","How does it work?"],
    ["what-first","What should a business do first?"],
    ["framework","Practical framework / checklist"],
    ["mistakes","Common mistakes"],
    ["examples","Examples"],
    ["faqs","FAQs"],
    ["akkurate-help","How Akkurate can help"]
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-hidden bg-white text-[#071a46]">
        <section className="relative overflow-hidden bg-[#071a46] px-5 pb-16 pt-24 text-white sm:px-8 lg:px-12 lg:pb-24 lg:pt-32">
          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl blog-orb" />
          <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-3xl blog-orb-reverse" />

          <div className="relative z-10 mx-auto max-w-[1150px]">
            <div className="blog-reveal text-[11px] text-slate-400">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/blog" className="hover:text-white">Blog</Link>
            </div>

            <div className="blog-reveal mt-8 inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-200">
              Digital Marketing
            </div>

            <h1 className="blog-reveal mt-6 max-w-[950px] text-[40px] font-bold leading-[1.08] tracking-[-0.045em] sm:text-[54px] lg:text-[37px]">
              How to Create Content That Performs in Google Search and AI Experiences
            </h1>

            <p className="blog-reveal mt-7 max-w-[800px] text-[15px] leading-[1.8] text-slate-300 sm:text-[17px]">
              Content for modern search should help people understand, compare and act. That means moving beyond keyword repetition and creating information that is specific, useful, well structured and connected to real intent.
            </p>

            <div className="blog-reveal mt-8 flex flex-wrap gap-6 text-[11px] text-slate-400">
              <span>By Akkurate Digital Solutions</span>
              <span>Digital Marketing Guide</span>
              <span>8 min read</span>
            </div>

            <div className="blog-reveal mt-12 grid gap-4 sm:grid-cols-3">
              <div className="hero-card"><span>INTENT</span><h3>Answer the real question</h3><p>Understand what the audience actually wants to know or accomplish.</p></div>
<div className="hero-card"><span>STRUCTURE</span><h3>Make information clear</h3><p>Use useful headings, concise explanations, examples and logical links.</p></div>
<div className="hero-card"><span>VALUE</span><h3>Add something useful</h3><p>Bring expertise, evidence, original context or practical guidance.</p></div>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto grid max-w-[1150px] gap-12 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-16">

            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">On this page</p>
                <nav className="mt-5 border-l border-slate-200">
                  {toc.map(([id,label]) => (
                    <a key={id} href={`#${id}`}
                      className={`block border-l-2 py-2 pl-4 text-[11px] transition-all ${activeSection === id ? "border-[#1455d9] font-semibold text-[#1455d9]" : "border-transparent text-slate-500 hover:text-[#071a46]"}`}>
                      {label}
                    </a>
                  ))}
                </nav>
                <div className="mt-8 rounded-2xl bg-[#f5f8fd] p-5">
                  <p className="text-[11px] font-semibold">Need help with your digital strategy?</p>
                  <Link to="/contact" className="mt-3 inline-flex text-[11px] font-semibold text-[#1455d9]">Talk to Akkurate →</Link>
                </div>
              </div>
            </aside>

            <article className="min-w-0">

              <div id="introduction" data-blog-section className="blog-reveal">
                <p className="eyebrow">content for ai search</p>
                <h2 className="section-title">A practical introduction</h2>
                <div className="prose-blog">
                  <p>Content for modern search should help people understand, compare and act. That means moving beyond keyword repetition and creating information that is specific, useful, well structured and connected to real intent.</p>
                  <p>Successful digital marketing starts with the customer rather than a channel. Businesses should understand what people need, how they search, what information helps them decide and what action they should take next.</p>
                </div>
              </div>

              <div className="divider" />

              <div id="what-is-it" data-blog-section className="blog-reveal">
                <p className="eyebrow">01 / THE BASICS</p>
                <h2 className="section-title">What is it and why does it matter?</h2>
                <p className="prose-blog mt-6">Content can support several discovery experiences when it is written for real users and organized clearly. Search engines and AI systems need understandable information, while customers need useful answers.</p>
                <div className="mt-9 grid gap-5 md:grid-cols-3">
                  <div className="blog-card"><span>INTENT</span><h3>Answer the real question</h3><p>Understand what the audience actually wants to know or accomplish.</p></div>
<div className="blog-card"><span>STRUCTURE</span><h3>Make information clear</h3><p>Use useful headings, concise explanations, examples and logical links.</p></div>
<div className="blog-card"><span>VALUE</span><h3>Add something useful</h3><p>Bring expertise, evidence, original context or practical guidance.</p></div>
                </div>
              </div>

              <div className="divider" />

              <div id="how-it-works" data-blog-section className="blog-reveal">
                <p className="eyebrow">02 / HOW IT WORKS</p>
                <h2 className="section-title">How does it work?</h2>
                <div className="prose-blog mt-6">
                  <p>Content can support several discovery experiences when it is written for real users and organized clearly. Search engines and AI systems need understandable information, while customers need useful answers.</p>
                  <p>The most effective approach connects strategy, content, technology, user experience and measurement. Each part should reinforce the same customer journey.</p>
                </div>
              </div>

              <div className="divider" />

              <div id="what-first" data-blog-section className="blog-reveal">
                <p className="eyebrow">03 / PRIORITIES</p>
                <h2 className="section-title">What should a business do first?</h2>
                <div className="prose-blog mt-6">
                  <p>Start with customer questions and commercial priorities. Build topic clusters around them, connect related pages and review content for accuracy and usefulness.</p>
                </div>
                <div className="mt-8 rounded-2xl bg-[#071a46] p-7 text-white">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-300">PRIORITY ORDER</p>
                  <p className="mt-3 text-[14px] leading-8 text-slate-300">Understand → Build the foundation → Create useful content → Connect channels → Measure → Improve</p>
                </div>
              </div>

              <div className="divider" />

              <div id="framework" data-blog-section className="blog-reveal">
                <p className="eyebrow">04 / PRACTICAL FRAMEWORK</p>
                <h2 className="section-title">Practical framework / checklist</h2>
                <div className="mt-9 space-y-4">
                  {[
                    "Define the business objective",
                    "Understand the audience and search intent",
                    "Audit the existing digital foundation",
                    "Create useful, specific content",
                    "Connect relevant pages and channels",
                    "Measure meaningful outcomes"
                  ].map((item,i) => (
                    <div key={item} className="blog-step blog-reveal">
                      <div className="step-number">0{i+1}</div>
                      <div>
                        <h3 className="text-[17px] font-bold">{item}</h3>
                        <p className="mt-2 text-[13px] leading-7 text-slate-500">Make this step practical, measurable and connected to a real customer or business need.</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-9 grid gap-3 sm:grid-cols-2">
                  {["Is the goal clearly defined?","Is the audience understood?","Is the website easy to navigate?","Does content answer real questions?","Are claims supported by evidence?","Are results being measured?"].map(x =>
                    <div key={x} className="rounded-xl bg-slate-50 p-4 text-[12px] text-slate-600">✓ &nbsp; {x}</div>
                  )}
                </div>
              </div>

              <div className="divider" />

              <div id="mistakes" data-blog-section className="blog-reveal">
                <p className="eyebrow">05 / COMMON MISTAKES</p>
                <h2 className="section-title">Common mistakes</h2>
                <div className="mt-8 space-y-3">
                  {[
                    "Chasing trends without a clear business objective",
                    "Publishing generic content with little original value",
                    "Ignoring website foundations and user experience",
                    "Focusing only on traffic instead of meaningful outcomes",
                    "Making unsupported promises about performance",
                    "Treating every audience and search intent the same"
                  ].map((item,i) =>
                    <div key={item} className="rounded-xl border border-slate-100 p-4 text-[13px] leading-7 text-slate-600">
                      <b className="mr-3 text-[#1455d9]">{i+1}</b>{item}
                    </div>
                  )}
                </div>
              </div>

              <div className="divider" />

              <div id="examples" data-blog-section className="blog-reveal">
                <p className="eyebrow">06 / EXAMPLES</p>
                <h2 className="section-title">Examples</h2>
                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  <div className="blog-card"><h3>How-to article</h3><p>Explain a task step by step, include common questions and link to the relevant service when useful.</p></div>
<div className="blog-card"><h3>Service content</h3><p>Explain what the service solves, who it is for, how it works and what customers should consider.</p></div>
                </div>
              </div>

              <div className="divider" />

              <div id="faqs" data-blog-section className="blog-reveal">
                <p className="eyebrow">07 / FAQS</p>
                <h2 className="section-title">Frequently asked questions</h2>
                <div className="mt-8 space-y-3">
                  <details className="rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer text-[14px] font-semibold">Does AI-generated content always perform?</summary><p className="mt-4 text-[13px] leading-7 text-slate-500">No. Quality, relevance, usefulness and accuracy matter more than how content was produced.</p></details>
<details className="rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer text-[14px] font-semibold">How long should content be?</summary><p className="mt-4 text-[13px] leading-7 text-slate-500">Long enough to answer the user's needs clearly. Length alone is not a quality signal.</p></details>
<details className="rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer text-[14px] font-semibold">Should every article target a keyword?</summary><p className="mt-4 text-[13px] leading-7 text-slate-500">Content should have a clear purpose and audience need; keywords can describe intent but should not dictate everything.</p></details>
                </div>
              </div>

              <div className="divider" />

              <div id="akkurate-help" data-blog-section className="blog-reveal">
                <p className="eyebrow">08 / AKKURATE</p>
                <h2 className="section-title">How Akkurate can help</h2>
                <div className="prose-blog mt-6">
                  <p>Akkurate Digital Solutions brings marketing, technology and creative capabilities together so businesses can build a connected digital customer journey.</p>
                  <p>The right mix depends on your goals, audience, market and existing digital foundation. Start with the business problem, then select the capabilities that support it.</p>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to="/content" className="rounded-full border border-slate-200 px-5 py-3 text-[12px] font-semibold transition hover:border-[#1455d9] hover:text-[#1455d9]">Explore Content</Link>
<Link to="/seo" className="rounded-full border border-slate-200 px-5 py-3 text-[12px] font-semibold transition hover:border-[#1455d9] hover:text-[#1455d9]">Explore SEO</Link>
<Link to="/contact" className="rounded-full border border-slate-200 px-5 py-3 text-[12px] font-semibold transition hover:border-[#1455d9] hover:text-[#1455d9]">Talk to Akkurate</Link>
                </div>
              </div>

              <div className="blog-reveal mt-20 rounded-[24px] bg-[#071a46] p-8 text-white sm:p-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-300">BUILD THE RIGHT DIGITAL ROADMAP</p>
                <h3 className="mt-4 max-w-[650px] text-[28px] font-bold sm:text-[34px]">Ready to turn your digital strategy into a practical plan?</h3>
                <p className="mt-4 max-w-[650px] text-[13px] leading-8 text-slate-300">Let's understand your business, audience and goals before deciding what deserves attention.</p>
                <Link to="/contact" className="mt-7 inline-flex rounded-full bg-white px-6 py-3.5 text-[12px] font-semibold text-[#071a46] transition hover:-translate-y-1">Let's Talk ↗</Link>
              </div>

            </article>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        .blog-reveal{opacity:0;transform:translateY(28px);transition:opacity .75s ease,transform .75s ease}
        .blog-visible{opacity:1;transform:translateY(0)}
        .blog-orb{animation:blogFloat 8s ease-in-out infinite}
        .blog-orb-reverse{animation:blogFloatReverse 10s ease-in-out infinite}
        .hero-card,.blog-card{border:1px solid #e5eaf2;border-radius:18px;padding:24px;background:white;transition:all .4s ease}
        .hero-card{background:rgba(255,255,255,.04);border-color:rgba(255,255,255,.1);color:white}
        .hero-card:hover,.blog-card:hover{transform:translateY(-6px);border-color:#cbdcfb;box-shadow:0 20px 45px rgba(7,26,70,.08)}
        .hero-card span,.blog-card span,.eyebrow{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.16em;color:#1455d9}
        .hero-card span{color:#93c5fd}
        .section-title{margin-top:16px;font-size:30px;font-weight:700;line-height:1.2;letter-spacing:-.03em}
        .prose-blog{font-size:15px;line-height:1.9;color:#64748b}
        .prose-blog p+p{margin-top:20px}
        .divider{height:1px;background:#f1f5f9;margin:64px 0}
        .blog-step{display:flex;gap:18px;padding:20px;border:1px solid #e5eaf2;border-radius:18px;transition:all .35s ease}
        .blog-step:hover{transform:translateX(6px);border-color:#cbdcfb;box-shadow:0 15px 40px rgba(7,26,70,.06)}
        .step-number{display:flex;height:44px;width:44px;flex-shrink:0;align-items:center;justify-content:center;border-radius:999px;background:#eff5ff;color:#1455d9;font-size:11px;font-weight:700}
        @keyframes blogFloat{0%,100%{transform:translate(0,0)}50%{transform:translate(-20px,25px)}}
        @keyframes blogFloatReverse{0%,100%{transform:translate(0,0)}50%{transform:translate(25px,-20px)}}
        @media(max-width:640px){.section-title{font-size:30px}.prose-blog{font-size:14px}}
        @media(prefers-reduced-motion:reduce){.blog-reveal,.blog-orb,.blog-orb-reverse,.hero-card,.blog-card,.blog-step{animation:none!important;transition:none!important}.blog-reveal{opacity:1!important;transform:none!important}}
      `}</style>
    </>
  );
};

export default Blog10;

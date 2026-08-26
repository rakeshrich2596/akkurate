import React, { useState } from "react";
import { Link } from "react-router-dom";

const services = [
  ["01", "Content Strategy", "Plan content themes, formats, audiences and objectives around the brand and business goals."],
  ["02", "Social Media Content", "Create platform-ready content designed around audience interests, brand voice and communication goals."],
  ["03", "Website Content", "Develop clear website copy that helps visitors understand services, value propositions and next actions."],
  ["04", "Campaign Content", "Create focused content for launches, promotions, campaigns and other marketing initiatives."],
  ["05", "Visual Content", "Develop creative visual assets that support messaging across digital channels."],
  ["06", "Content Calendars", "Organize content themes and publishing priorities into practical, manageable plans."],
];

const outcomes = [
  "Clearer brand communication",
  "Consistent content voice",
  "Useful audience-focused messaging",
  "Stronger digital presence",
  "Campaign-ready content",
  "A practical content system",
];

const processSteps = [
  ["01", "Discovery", "Understand the brand, audience, objectives, existing content and communication priorities."],
  ["02", "Content Direction", "Define themes, tone, formats, channels and the role of each content type."],
  ["03", "Content Creation", "Develop copy and creative assets around the agreed direction and business objective."],
  ["04", "Review & Refinement", "Review content for clarity, consistency, brand alignment and channel suitability."],
  ["05", "Publishing Support", "Organize approved content for publishing and use performance feedback to guide future content."],
];

const whyChoose = [
  ["01", "Brand-Aligned", "Content is developed around the brand personality, positioning and communication style."],
  ["02", "Audience-Focused", "We consider what the audience needs to understand, learn or act on."],
  ["03", "Purpose-Driven", "Each content piece should have a clear communication or business purpose."],
  ["04", "Consistent System", "Content can be planned as an ongoing system instead of disconnected one-off posts."],
];

const faqs = [
  ["What is included in content creation?", "Depending on the project, content creation can include strategy, website copy, social media content, campaign content, visual assets and content planning."],
  ["Can you create content for social media?", "Yes. Content can be planned and created around the platform, audience, brand voice and communication objective."],
  ["Can you create website content?", "Yes. Website content can be structured around user needs, service information, brand messaging and intended customer journeys."],
  ["Can content creation support campaigns?", "Yes. Content can be created for launches, promotions, campaigns and other focused marketing activities."],
  ["Can you follow our existing brand voice?", "Yes. Existing brand guidelines and communication style can be used as inputs when developing new content."],
  ["Can content be planned monthly?", "Yes. Content calendars and recurring content systems can be created around the agreed channels and publishing priorities."],
];

function ContentCreation() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="w-full overflow-hidden bg-white text-[#111827]">
      <section className="relative overflow-hidden bg-[#f7faff] px-14 pb-14 pt-14 sm:pb-18 sm:pt-18 lg:pb-20 lg:pt-20">
        <div className="pointer-events-none absolute -right-32 -top-32 h-[350px] w-[350px] rounded-full bg-blue-100/60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[300px] w-[300px] rounded-full bg-indigo-100/50 blur-3xl" />
        <div className="relative mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="mb-8 flex flex-wrap items-center gap-2 text-[11px] font-medium text-gray-500 sm:text-[12px]">
            <Link to="/" className="transition hover:text-[#1455d9]">Home</Link><span>/</span><span>Services</span><span>/</span>
            <span className="text-[#1455d9]">Content Creation</span>
          </div>
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1.05fr_0.95fr] lg:gap-12 xl:grid-cols-[1fr_0.9fr] xl:gap-16">
            <div className="max-w-[760px]">
              <div className="mb-4 inline-flex items-center rounded-full border border-blue-100 bg-white px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#1455d9] shadow-sm sm:text-[11px]">Content Creation</div>
              <h1 data-animate="left" className="m-0 max-w-[720px] text-[32px] font-bold leading-[1.08] tracking-[-0.035em] text-[#101828] sm:text-[40px] md:text-[44px] lg:text-[40px] xl:text-[45px]">Create Content That Gives Your Brand Something Worth Saying</h1>
              <p className="mt-5 max-w-[650px] text-[14px] leading-6 text-gray-600 sm:text-[15px] sm:leading-7 lg:text-[16px] lg:leading-7">Develop useful, engaging and brand-aligned content for websites, social media, campaigns and digital experiences.</p>
              <div className="mt-7"><Link to="/contact" className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#073b91] px-6 py-3 text-[13px] font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#052f75]">Talk to Our Team<span className="ml-2">→</span></Link></div>
            </div>
            <div className="relative flex min-h-[280px] items-center justify-center md:min-h-[360px] lg:min-h-[430px]">
              <div className="absolute inset-8 rounded-full bg-blue-100/60 blur-3xl" />
              <div data-animate="right" className="relative z-10 w-full max-w-[560px] overflow-hidden rounded-[24px] bg-white p-2 shadow-[0_20px_60px_rgba(15,23,42,0.10)]">
                <img src="/assets/images/content_images/CONTENT.png" alt="Content Creation" className="h-auto w-full rounded-[18px] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-14 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1600px] gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 lg:px-8 xl:px-10">
          <div><p className="m-0 text-[10px] font-bold uppercase tracking-[0.18em] text-[#1455d9]">Introduction</p>
            <h2 data-animate="left" className="mt-3 m-0 text-[27px] font-bold leading-tight tracking-[-0.03em] text-[#101828] sm:text-[34px] lg:text-[35px]">Create Content That Gives Your Brand Something Worth Saying</h2>
          </div>
          <div><p className="m-0 text-[14px] leading-7 text-gray-600 sm:text-[15px]">Develop useful, engaging and brand-aligned content for websites, social media, campaigns and digital experiences.</p>
            <p className="mt-4 text-[14px] leading-7 text-gray-600 sm:text-[15px]">Akkurate Digital Solutions approaches this service as part of an integrated digital growth system, connecting strategy, creativity, technology and measurable business objectives.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#101828] px-14 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-4 text-center sm:px-6 lg:px-8">
          <p className="m-0 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-300">The Business Problem We Solve</p>
          <h2 data-animate="center" className="mt-4 m-0 text-[27px] font-bold leading-tight tracking-[-0.03em] text-white sm:text-[34px] lg:text-[42px]">Content should do more than fill a page or social feed</h2>
          <p className="mx-auto mt-5 max-w-[900px] text-[14px] leading-7 text-gray-300 sm:text-[15px]">Content should do more than fill a page or social feed. It should communicate value, build trust, support the customer journey and give the brand a consistent voice.</p>
        </div>
      </section>

      <section className="px-14 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="text-center"><p className="m-0 text-[10px] font-bold uppercase tracking-[0.18em] text-[#1455d9]">Our Services</p>
            <h2 data-animate="left" className="mt-3 m-0 text-[29px] font-bold leading-tight tracking-[-0.03em] text-[#101828] sm:text-[36px]">What We Can Help You Create</h2>
          </div>
          <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(([number, title, description], index) => (
              <article key={number} data-animate="card" data-delay={(index % 6) + 1} className="group rounded-[20px] border border-gray-200 bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-[0_15px_40px_rgba(0,0,0,0.07)] sm:p-6">
                <div className="flex items-start justify-between"><span className="text-[11px] font-bold tracking-[0.14em] text-[#1455d9]">{number}</span><span className="text-[19px] text-gray-300 transition group-hover:text-[#1455d9]">↗</span></div>
                <h3 className="mt-6 m-0 text-[18px] font-bold leading-snug text-[#101828] sm:text-[19px]">{title}</h3>
                <p className="mt-3 m-0 text-[13px] leading-6 text-gray-500 sm:text-[14px]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7faff] px-14 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1600px] gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-14 lg:px-8 xl:px-10">
          <div><p className="m-0 text-[10px] font-bold uppercase tracking-[0.18em] text-[#1455d9]">What You Get</p>
            <h2 data-animate="left" className="mt-3 m-0 text-[29px] font-bold leading-tight tracking-[-0.03em] text-[#101828] sm:text-[36px] lg:text-[42px]">What You Get From Akkurate</h2>
            <p className="mt-5 m-0 text-[14px] leading-7 text-gray-600 sm:text-[15px]">The exact outcome depends on the starting point, scope, audience and business objective. Our focus is creating useful creative work and measuring what matters.</p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {outcomes.map((outcome, index) => (
              <div key={outcome} data-animate="card" data-delay={(index % 6) + 1} className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-4 shadow-sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#073b91] text-[10px] font-bold text-white">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-[13px] font-semibold text-[#101828] sm:text-[14px]">{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-14 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[950px] px-4 text-center sm:px-6 lg:px-8">
          <p className="m-0 text-[10px] font-bold uppercase tracking-[0.18em] text-[#1455d9]">Who This Service Is For</p>
          <h2 data-animate="center" className="mt-3 m-0 text-[29px] font-bold leading-tight tracking-[-0.03em] text-[#101828] sm:text-[36px] lg:text-[42px]">Creative Work Should Fit Your Business</h2>
          <p className="mt-5 m-0 text-[14px] leading-7 text-gray-600 sm:text-[15px]">This service is designed for businesses that have a clear communication, branding, marketing or customer-experience objective.</p>
          <p className="mt-4 m-0 text-[14px] leading-7 text-gray-600 sm:text-[15px]">Akkurate can recommend a focused project, a recurring content system or a broader integrated digital solution depending on the requirement.</p>
        </div>
      </section>

      <section className="bg-[#101828] px-14 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="text-center"><p className="m-0 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-300">Our Process</p>
            <h2 data-animate="left" className="mt-3 m-0 text-[29px] font-bold leading-tight tracking-[-0.03em] text-white sm:text-[36px] lg:text-[44px]">A Practical Content Creation Process</h2>
          </div>
          <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map(([number, title, description], index) => (
              <div key={number} data-animate="card" data-delay={(index % 5) + 1} className="rounded-[18px] border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.07] sm:p-6">
                <span className="text-[11px] font-bold tracking-[0.14em] text-blue-300">{number}</span>
                <h3 className="mt-6 m-0 text-[17px] font-bold leading-snug text-white">{title}</h3>
                <p className="mt-3 m-0 text-[13px] leading-6 text-gray-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-14 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="max-w-[750px]"><p className="m-0 text-[10px] font-bold uppercase tracking-[0.18em] text-[#1455d9]">Why Choose Akkurate</p>
            <h2 data-animate="left" className="mt-3 m-0 text-[29px] font-bold leading-tight tracking-[-0.03em] text-[#101828] sm:text-[36px] lg:text-[35px]">A Purpose-First Content Creation Approach</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map(([number, title, description], index) => (
              <article key={number} data-animate="card" data-delay={(index % 4) + 1} className="group rounded-[20px] border border-gray-200 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-[#1455d9] hover:bg-[#1455d9]">
                <span className="text-[11px] font-bold tracking-[0.14em] text-[#1455d9] transition-colors group-hover:text-white">{number}</span>
                <h3 className="mt-5 m-0 text-[18px] font-bold leading-snug text-[#101828] transition-colors group-hover:text-white">{title}</h3>
                <p className="mt-3 m-0 text-[13px] leading-6 text-gray-500 transition-colors group-hover:text-white/90">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7faff] px-14 py-12 sm:py-16">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-5 px-4 text-center sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:text-left lg:px-8">
          <div><p className="m-0 text-[10px] font-bold uppercase tracking-[0.16em] text-[#1455d9]">Related Services</p>
            <h3 className="mt-2 m-0 text-[20px] font-bold text-[#101828] sm:text-[23px]">Logo Design ↔ Creative Content ↔ UI/UX Design </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-2 sm:justify-end">
            <Link to="/logo-design" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-[12px] font-semibold text-gray-700 transition hover:border-[#1455d9] hover:text-[#1455d9]">Logo Design</Link>
            <span className="rounded-full bg-[#1c283b] px-4 py-2 text-[12px] font-semibold text-white">Content Creation</span>
            <Link to="/ui-ux-design" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-[12px] font-semibold text-gray-700 transition hover:border-[#1455d9] hover:text-[#1455d9]">UI/UX Design</Link>
          </div>
        </div>
      </section>

      <section className="px-14 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16 lg:px-8 xl:px-10">
          <div className="lg:sticky lg:top-28">
            <p className="m-0 text-[10px] font-bold uppercase tracking-[0.18em] text-[#1455d9] sm:text-[11px]">Frequently Asked Questions</p>
            <h2 data-animate="left" className="mt-3 m-0 max-w-[430px] text-[30px] font-bold leading-[1.08] tracking-[-0.03em] text-[#101828] sm:text-[36px] lg:text-[42px]">Content Creation FAQs</h2>
          </div>
          <div className="space-y-3">
            {faqs.map(([question, answer], index) => {
              const isOpen = openFaq === index;
              return (
                <div key={question} data-animate="card" data-delay={(index % 6) + 1} className="overflow-hidden rounded-[16px] border border-gray-200 bg-white transition-shadow duration-300 hover:shadow-[0_10px_35px_rgba(15,23,42,0.05)]">
                  <button type="button" onClick={() => setOpenFaq(isOpen ? null : index)} className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6">
                    <span className="pr-4 text-[14px] font-bold leading-6 text-[#101828] sm:text-[15px]">{question}</span>
                    <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-blue-100 text-[20px] font-normal text-[#1455d9] transition-all duration-300 ${isOpen ? "rotate-45 bg-[#073b91] text-white" : "bg-white"}`}>+</span>
                  </button>
                  <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden"><p className="m-0 px-5 pb-5 text-[13px] leading-6 text-gray-600 sm:px-6">{answer}</p></div>
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
          <p className="m-0 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-200">Ready to Create?</p>
          <h2 data-animate="center" className="mt-3 m-0 text-[30px] font-bold leading-tight tracking-[-0.03em] text-white sm:text-[38px] lg:text-[46px]">Create work that helps your brand get noticed, understood and remembered.</h2>
          <p className="mx-auto mt-5 max-w-[800px] text-[14px] leading-7 text-blue-100 sm:text-[15px]">Tell us what you are trying to achieve, what audience you want to reach and what outcome matters most. Akkurate can recommend the most practical next step.</p>
          <div className="mt-8"><Link to="/contact" className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-white px-7 py-3 text-[13px] font-bold text-[#073b91] transition duration-300 hover:-translate-y-1 hover:bg-gray-100">Talk to Our Team<span className="ml-2">→</span></Link></div>
        </div>
      </section>
    </div>
  );
}

export default ContentCreation;

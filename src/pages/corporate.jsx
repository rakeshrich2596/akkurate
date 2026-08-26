import React, { useState } from "react";
import { Link } from "react-router-dom";

const services = [
  ["01", "Corporate Storytelling", "Define the narrative, audience and message that the video needs to communicate."],
  ["02", "Company Profile Videos", "Present the company, capabilities, facilities, people and value proposition in a structured format."],
  ["03", "Brand & Culture Videos", "Show the people, culture, values and working environment behind the organization."],
  ["04", "Product & Capability Videos", "Explain products, services, technology, processes or capabilities through professional visuals."],
  ["05", "Interview-Led Videos", "Structure leadership, employee or customer interviews into a clear corporate narrative."],
  ["06", "Post-Production", "Edit footage, add graphics, titles, sound, colour treatment and final finishing for the intended channel."],
];

const outcomes = [
  "Stronger company storytelling",
  "Professional brand presentation",
  "Clearer capability communication",
  "Humanized corporate identity",
  "Reusable video content",
  "Audience-ready corporate assets",
];

const processSteps = [
  ["01", "Objective & Audience", "Understand why the video is needed, who will watch it and what they should remember."],
  ["02", "Concept & Script", "Develop the narrative, interview structure, visual direction and key messages."],
  ["03", "Production Planning", "Plan locations, people, shots, interviews, equipment and production requirements."],
  ["04", "Filming & Post-Production", "Capture the required footage and edit it with graphics, sound and visual finishing."],
  ["05", "Review & Delivery", "Refine the final cut and prepare the required formats for websites, presentations or campaigns."],
];

const whyChoose = [
  ["01", "Story-Led Communication", "The company story is structured around what audiences need to understand and remember."],
  ["02", "Professional Presentation", "Visuals, editing, graphics and sound are considered together for a cohesive result."],
  ["03", "Brand Consistency", "The video can follow the company's existing brand identity and communication style."],
  ["04", "Multiple Use Cases", "Corporate videos can support websites, events, presentations, recruitment and marketing."],
];

const faqs = [
  ["What is a corporate video?", "A corporate video communicates a company's story, people, capabilities, culture, products or purpose through professional video production."],
  ["Can you create company profile videos?", "Yes. Company profile videos can present the organization, facilities, people, capabilities and value proposition."],
  ["Can interviews be included?", "Yes. Leadership, employee or customer interviews can be structured into the overall narrative."],
  ["Do you handle editing and post-production?", "Yes. Post-production can include editing, graphics, titles, sound, colour treatment and final finishing."],
  ["Can the video be used on our website?", "Yes. Corporate videos can be prepared for websites, presentations, events, social platforms and other business communication."],
  ["Can you work with existing footage?", "Depending on the quality and requirements, existing footage can be reviewed and incorporated into the final edit."],
];

function Corporate() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="w-full overflow-hidden bg-white text-[#111827]">
      <section className="relative overflow-hidden bg-[#f7faff] px-14 pb-14 pt-14 sm:pb-18 sm:pt-18 lg:pb-20 lg:pt-20">
        <div className="pointer-events-none absolute -right-32 -top-32 h-[350px] w-[350px] rounded-full bg-blue-100/60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[300px] w-[300px] rounded-full bg-indigo-100/50 blur-3xl" />
        <div className="relative mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="mb-8 flex flex-wrap items-center gap-2 text-[11px] font-medium text-gray-500 sm:text-[12px]">
            <Link to="/" className="transition hover:text-[#1455d9]">Home</Link><span>/</span><span>Services</span><span>/</span>
            <span className="text-[#1455d9]">Corporate Video</span>
          </div>
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1.05fr_0.95fr] lg:gap-12 xl:grid-cols-[1fr_0.9fr] xl:gap-16">
            <div className="max-w-[760px]">
              <div className="mb-4 inline-flex items-center rounded-full border border-blue-100 bg-white px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#1455d9] shadow-sm sm:text-[11px]">Corporate Video</div>
              <h1 data-animate="left" className="m-0 max-w-[720px] text-[32px] font-bold leading-[1.08] tracking-[-0.035em] text-[#101828] sm:text-[40px] md:text-[44px] lg:text-[40px] xl:text-[45px]">Tell Your Company Story With a Professional Corporate Video</h1>
              <p className="mt-5 max-w-[650px] text-[14px] leading-6 text-gray-600 sm:text-[15px] sm:leading-7 lg:text-[16px] lg:leading-7">Create corporate videos that communicate your people, capabilities, culture, milestones, products and brand story with clarity.</p>
              <div className="mt-7"><Link to="/contact" className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#073b91] px-6 py-3 text-[13px] font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#052f75]">Talk to Our Team<span className="ml-2">→</span></Link></div>
            </div>
            <div className="relative flex min-h-[280px] items-center justify-center md:min-h-[360px] lg:min-h-[430px]">
              <div className="absolute inset-8 rounded-full bg-blue-100/60 blur-3xl" />
              <div data-animate="right" className="relative z-10 w-full max-w-[560px] overflow-hidden rounded-[24px] bg-white p-2 shadow-[0_20px_60px_rgba(15,23,42,0.10)]">
                <img src="/assets/images/content_images/corporate.png" alt="Corporate Video" className="h-auto w-full rounded-[18px] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-14 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1600px] gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 lg:px-8 xl:px-10">
          <div><p className="m-0 text-[10px] font-bold uppercase tracking-[0.18em] text-[#1455d9]">Introduction</p>
            <h2 data-animate="left" className="mt-3 m-0 text-[27px] font-bold leading-tight tracking-[-0.03em] text-[#101828] sm:text-[34px] lg:text-[35px]">Tell Your Company Story With a Professional Corporate Video</h2>
          </div>
          <div><p className="m-0 text-[14px] leading-7 text-gray-600 sm:text-[15px]">Create corporate videos that communicate your people, capabilities, culture, milestones, products and brand story with clarity.</p>
            <p className="mt-4 text-[14px] leading-7 text-gray-600 sm:text-[15px]">Akkurate Digital Solutions approaches this service as part of an integrated digital growth system, connecting strategy, creativity, technology and measurable business objectives.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#101828] px-14 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-4 text-center sm:px-6 lg:px-8">
          <p className="m-0 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-300">The Business Problem We Solve</p>
          <h2 data-animate="center" className="mt-4 m-0 text-[27px] font-bold leading-tight tracking-[-0.03em] text-white sm:text-[34px] lg:text-[35px]">Corporate communication can become generic when it only lists facts</h2>
          <p className="mx-auto mt-5 max-w-[900px] text-[14px] leading-7 text-gray-300 sm:text-[15px]">Corporate communication can become generic when it only lists facts. A strong corporate video connects the company's story, people, capabilities and purpose into a message audiences can remember.</p>
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
            <h2 data-animate="left" className="mt-3 m-0 text-[29px] font-bold leading-tight tracking-[-0.03em] text-white sm:text-[36px] lg:text-[44px]">A Practical Corporate Video Process</h2>
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
            <h2 data-animate="left" className="mt-3 m-0 text-[29px] font-bold leading-tight tracking-[-0.03em] text-[#101828] sm:text-[36px] lg:text-[42px]">A Purpose-First Corporate Video Approach</h2>
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
            <h3 className="mt-2 m-0 text-[20px] font-bold text-[#101828] sm:text-[23px]">Explainer Video ↔ Corporate Video ↔ Reels Making</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-2 sm:justify-end">
            <Link to="/explainer-video" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-[12px] font-semibold text-gray-700 transition hover:border-[#1455d9] hover:text-[#1455d9]">Explainer Video</Link>
            <span className="rounded-full bg-[#1c283b] px-4 py-2 text-[12px] font-semibold text-white">Corporate Video</span>
            <Link to="/reels-making" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-[12px] font-semibold text-gray-700 transition hover:border-[#1455d9] hover:text-[#1455d9]">Reels Making</Link>
          </div>
        </div>
      </section>

      <section className="px-14 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16 lg:px-8 xl:px-10">
          <div className="lg:sticky lg:top-28">
            <p className="m-0 text-[10px] font-bold uppercase tracking-[0.18em] text-[#1455d9] sm:text-[11px]">Frequently Asked Questions</p>
            <h2 data-animate="left" className="mt-3 m-0 max-w-[430px] text-[30px] font-bold leading-[1.08] tracking-[-0.03em] text-[#101828] sm:text-[36px] lg:text-[42px]">Corporate Video FAQs</h2>
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

export default Corporate;

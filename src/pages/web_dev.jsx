import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/* =========================================================
   WEBSITE DEVELOPMENT PAGE
   App Development GEO-style visual system
   React JS + Tailwind CSS ONLY
   ========================================================= */

const services = [
  [
    "01",
    "Website Strategy",
    "Define the business objective, target audience, key journeys, content structure and technical direction before development begins.",
  ],
  [
    "02",
    "Website Design",
    "Create clear, responsive interfaces that communicate the brand, guide visitors and support the intended customer journey.",
  ],
  [
    "03",
    "Frontend Development",
    "Build responsive, accessible and performance-conscious website experiences across desktop, tablet and mobile.",
  ],
  [
    "04",
    "Backend Development",
    "Develop the required business logic, integrations, data workflows and server-side functionality.",
  ],
  [
    "05",
    "CMS Development",
    "Create manageable content systems so teams can update important website content without unnecessary technical dependency.",
  ],
  [
    "06",
    "E-Commerce Development",
    "Build practical online shopping experiences with product discovery, checkout, integrations and customer-focused journeys.",
  ],
];

const outcomes = [
  "Clearer digital customer journeys",
  "Responsive website experiences",
  "Scalable technical foundations",
  "Better content management",
  "Connected business workflows",
  "A website built around measurable goals",
];

const audienceCards = [
  {
    number: "01",
    title: "Growing Businesses",
    text: "Businesses that need a professional website to support growth, attract customers and strengthen their online presence.",
  },
  {
    number: "02",
    title: "Service Businesses",
    text: "Companies that need a clear, conversion-focused website to explain their services and guide visitors toward action.",
  },
  {
    number: "03",
    title: "Established Brands",
    text: "Organizations looking to improve an existing website with better performance, scalability, functionality and user experience.",
  },
];

const processSteps = [
  [
    "01",
    "Discovery & Requirements",
    "Understand the business objective, audience, current assets, constraints and success criteria before recommending the work.",
  ],
  [
    "02",
    "Structure & UX Planning",
    "Translate the objective into a practical sitemap, user journeys, content structure and conversion paths.",
  ],
  [
    "03",
    "UI & Visual Design",
    "Create the agreed visual experience around the brand, audience, content and business requirements.",
  ],
  [
    "04",
    "Development & Integration",
    "Build the website, connect required systems and implement the agreed functionality.",
  ],
  [
    "05",
    "Testing & Launch",
    "Test responsive layouts, key journeys, forms, integrations, performance and tracking before launch.",
  ],
];

const whyChoose = [
  [
    "01",
    "Business-First Approach",
    "We start with what the business needs to achieve and define the website scope around that objective.",
  ],
  [
    "02",
    "Integrated Expertise",
    "Website development can connect with SEO, AEO, GEO, digital marketing, branding, content and other digital capabilities.",
  ],
  [
    "03",
    "Clear Communication",
    "The team should understand what is being built, why it matters and what the next priority is.",
  ],
  [
    "04",
    "Continuous Improvement",
    "Launch is not the end. Analytics, feedback and changing customer needs should guide the next improvement.",
  ],
];

const performanceMetrics = [
  ["01", "Page Experience", "92%", "+18%", "w-[92%]"],
  ["02", "Engagement", "84%", "+24%", "w-[84%]"],
  ["03", "Conversion", "6.8%", "+12%", "w-[68%]"],
];

const faqs = [
  [
    "What is included in your website development service?",
    "The scope is customized around the objective. It can include strategy, UX, design, frontend development, backend functionality, CMS, e-commerce, integrations, testing and launch depending on the project.",
  ],
  [
    "How do you decide the right website scope?",
    "We look at the business goal, audience, existing website or systems, content, technical requirements, timeline and budget before recommending priorities.",
  ],
  [
    "Can you redesign an existing website?",
    "Yes. We can audit the current experience and improve or rebuild the parts that need attention rather than assuming everything needs to be replaced.",
  ],
  [
    "Can the website be connected to existing business systems?",
    "Yes. Where required, websites can connect with APIs, CRMs, payment systems, databases, forms, analytics and other business tools.",
  ],
  [
    "Will the website be responsive?",
    "Yes. The page structure is designed to provide a usable experience across desktop, tablet and mobile screen sizes.",
  ],
  [
    "Can SEO and other marketing services be added?",
    "Yes. Website development can work alongside SEO, AEO, GEO, Google Ads, Meta Ads, social media and content when the customer journey requires an integrated approach.",
  ],
];

function Reveal({ children, direction = "up", delay = 0 }) {
  const [visible, setVisible] = useState(false);
  const ref = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const hidden = {
    up: "translate-y-8 opacity-0",
    left: "-translate-x-8 opacity-0",
    right: "translate-x-8 opacity-0",
    center: "scale-95 opacity-0",
  };

  const shown = {
    up: "translate-y-0 opacity-100",
    left: "translate-x-0 opacity-100",
    right: "translate-x-0 opacity-100",
    center: "scale-100 opacity-100",
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay * 80}ms` }}
      className={`transform transition-all duration-700 ${visible ? shown[direction] : hidden[direction]}`}
    >
      {children}
    </div>
  );
}

/* =========================================================
   HERO WEBSITE VISUAL
   ========================================================= */

function HeroWebsiteVisual() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % 3);
    }, 2300);

    return () => clearInterval(timer);
  }, []);

  const screens = [
    { label: "Traffic", value: "18.4K", change: "+24%" },
    { label: "Engagement", value: "84%", change: "+18%" },
    { label: "Conversion", value: "6.8%", change: "+12%" },
  ];

  const current = screens[active];

  return (
    <div className="relative mx-auto flex min-h-[420px] w-full max-w-[700px] items-center justify-center sm:min-h-[500px]">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-blue-100/70 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[410px] w-[410px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-50/70 blur-3xl" />

      {/* Orbits */}
      <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-100" />
      <div className="absolute left-1/2 top-1/2 h-[435px] w-[435px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-blue-100/80" />

      {/* Rotating orbit nodes */}
      <div className="absolute left-1/2 top-1/2 z-20 h-0 w-0 animate-[spin_12s_linear_infinite]">
        <div className="flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-blue-100 bg-white text-[8px] font-black text-[#1455d9] shadow-[0_10px_30px_rgba(20,85,217,.12)]">
          CMS
        </div>
      </div>

      <div className="absolute left-1/2 top-1/2 z-20 h-0 w-0 animate-[spin_9s_linear_infinite_reverse]">
        <div className="flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-100 bg-white text-[8px] font-black text-cyan-600 shadow-[0_10px_30px_rgba(6,182,212,.12)]">
          API
        </div>
      </div>

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[500px] -translate-x-1/2 -translate-y-1/2 rotate-[24deg] border-t border-dashed border-blue-100/80" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[240px] w-[430px] -translate-x-1/2 -translate-y-1/2 -rotate-[30deg] border-t border-dashed border-cyan-100/70" />

      {/* Browser */}
      <div className="relative z-10 w-[330px] rotate-[-2deg] rounded-[22px] border-[6px] border-[#101828] bg-[#101828] p-1.5 shadow-[0_35px_90px_rgba(15,23,42,.24)] transition-all duration-700 hover:rotate-0 hover:scale-[1.025] sm:w-[430px]">
        {/* Browser top */}
        <div className="relative overflow-hidden rounded-[15px] bg-[#f7faff]">
          <div className="flex h-7 items-center gap-1.5 border-b border-gray-100 bg-white px-3">
            <span className="h-2 w-2 rounded-full bg-red-300" />
            <span className="h-2 w-2 rounded-full bg-yellow-300" />
            <span className="h-2 w-2 rounded-full bg-green-300" />

            <div className="ml-3 flex h-4 flex-1 items-center rounded-full bg-gray-50 px-2">
              <span className="text-[5px] text-gray-400">yourbrand.com</span>
            </div>
          </div>

          {/* Website */}
          <div className="relative min-h-[265px] bg-white">
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-blue-50 to-transparent" />

            {/* Navigation */}
            <div className="relative z-10 flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-1.5">
                <div className="flex h-5 w-5 items-center justify-center rounded-md bg-[#073b91] text-[6px] font-black text-white">
                  A
                </div>

                <span className="text-[7px] font-bold text-[#101828]">
                  AKKURATE
                </span>
              </div>

              <div className="hidden gap-3 sm:flex">
                {["Home", "Services", "About", "Contact"].map((item, index) => (
                  <span
                    key={item}
                    className={`text-[5px] font-semibold ${index === 0 ? "text-[#1455d9]" : "text-gray-400"}`}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <span className="rounded-full bg-[#073b91] px-2.5 py-1 text-[5px] font-bold text-white">
                Let's talk
              </span>
            </div>

            {/* Hero */}
            <div className="relative z-10 grid grid-cols-[1.1fr_.9fr] gap-3 px-5 pt-4">
              <div>
                <span className="rounded-full bg-blue-50 px-2 py-1 text-[5px] font-bold uppercase tracking-wider text-[#1455d9]">
                  Digital Experience
                </span>

                <h3 className="mt-3 max-w-[185px] text-[19px] font-bold leading-[1.03] tracking-[-.04em] text-[#101828]">
                  A website built
                  <span className="block text-[#1455d9]">around growth.</span>
                </h3>

                <p className="mt-2 max-w-[190px] text-[6px] leading-3 text-gray-400">
                  Clear structure, responsive design and connected technology
                  for better customer journeys.
                </p>

                <div className="mt-3 flex gap-1.5">
                  <span className="rounded-full bg-[#073b91] px-3 py-1.5 text-[5px] font-bold text-white">
                    Explore
                  </span>
                  <span className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-[5px] font-bold text-gray-500">
                    Learn more
                  </span>
                </div>
              </div>

              {/* Mini website graphic */}
              <div className="relative flex min-h-[145px] items-center justify-center">
                <div className="absolute h-[125px] w-[125px] rounded-full bg-blue-50" />
                <div className="absolute h-[95px] w-[95px] rounded-full border border-dashed border-blue-200 animate-[spin_8s_linear_infinite]" />

                <div className="relative h-[105px] w-[80px] rounded-[12px] border-4 border-[#101828] bg-[#f7faff] p-1 shadow-lg">
                  <div className="h-2 rounded-full bg-[#073b91]" />

                  <div className="mt-2 h-10 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-50" />

                  <div className="mt-2 grid grid-cols-2 gap-1">
                    <div className="h-3 rounded bg-white shadow-sm" />
                    <div className="h-3 rounded bg-white shadow-sm" />
                  </div>

                  <div className="mt-1 h-5 rounded bg-white shadow-sm" />
                </div>
              </div>
            </div>

            {/* Metric row */}
            <div className="relative z-10 mx-5 mt-5 grid grid-cols-3 gap-1.5">
              {screens.map((item, index) => (
                <div
                  key={item.label}
                  className={`rounded-lg border p-2 transition-all duration-500 ${
                    index === active
                      ? "border-blue-100 bg-blue-50"
                      : "border-gray-100 bg-white"
                  }`}
                >
                  <p className="m-0 text-[5px] font-bold uppercase tracking-wider text-gray-400">
                    {item.label}
                  </p>

                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-[#101828]">
                      {item.value}
                    </span>

                    <span className="text-[5px] font-bold text-emerald-500">
                      {item.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Graph */}
            <div className="relative z-10 mx-5 mt-2 flex h-[38px] items-end gap-1">
              {[
                "h-[30%]",
                "h-[45%]",
                "h-[38%]",
                "h-[54%]",
                "h-[48%]",
                "h-[67%]",
                "h-[60%]",
                "h-[77%]",
                "h-[71%]",
                "h-[88%]",
                "h-[82%]",
                "h-[100%]",
              ].map((height, index) => (
                <div
                  key={index}
                  className={`flex-1 rounded-t-sm transition-all duration-700 ${
                    index === 11 ? "bg-[#1455d9]" : "bg-blue-100"
                  } ${height}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating cards */}
      <div className="absolute left-[1%] top-[20%] z-30 animate-bounce rounded-2xl border border-white bg-white/95 px-3 py-2.5 shadow-[0_18px_45px_rgba(15,23,42,.12)] [animation-duration:6s] sm:left-[3%]">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-[9px] font-black text-[#1455d9]">
            UX
          </span>
          <div>
            <p className="m-0 text-[8px] font-bold text-[#101828]">
              User first
            </p>
            <p className="mt-0.5 m-0 text-[7px] text-gray-400">
              Journey mapped
            </p>
          </div>
        </div>
      </div>

      <div className="absolute right-0 top-[12%] z-30 animate-bounce rounded-2xl bg-[#101828] px-3.5 py-3 shadow-[0_18px_45px_rgba(15,23,42,.18)] [animation-duration:5s] sm:right-[2%]">
        <p className="m-0 text-[7px] font-bold uppercase tracking-[.13em] text-blue-300">
          Performance
        </p>
        <p className="mt-1 m-0 text-[17px] font-bold text-white">
          {current.change}
        </p>
      </div>

      <div className="absolute bottom-[6%] left-[7%] z-30 rounded-2xl border border-blue-100 bg-white/95 px-3 py-2.5 shadow-[0_15px_40px_rgba(15,23,42,.1)] sm:left-[10%]">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-50 text-[9px] font-bold text-emerald-600">
            ✓
          </span>
          <div>
            <p className="m-0 text-[8px] font-bold text-[#101828]">
              Responsive
            </p>
            <p className="mt-0.5 m-0 text-[7px] text-gray-400">All devices</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[8%] right-[2%] z-30 rounded-full border border-white bg-white px-3 py-1.5 text-[7px] font-bold text-[#1455d9] shadow-lg">
        <span className="mr-1 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
        Website live
      </div>
    </div>
  );
}

/* =========================================================
   PERFORMANCE + ANALYTICS
   ========================================================= */

function PerformanceAnalytics() {
  const [activeMetric, setActiveMetric] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveMetric((current) => (current + 1) % performanceMetrics.length);
    }, 2400);

    return () => clearInterval(timer);
  }, []);

  const bars = [
    "h-[30%]",
    "h-[42%]",
    "h-[37%]",
    "h-[54%]",
    "h-[49%]",
    "h-[63%]",
    "h-[59%]",
    "h-[74%]",
    "h-[69%]",
    "h-[84%]",
    "h-[80%]",
    "h-[96%]",
  ];

  return (
    <section className="relative overflow-hidden bg-[#f4f7fc] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
      <div className="pointer-events-none absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-blue-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[350px] w-[350px] rounded-full bg-indigo-100/50 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1450px]">
        <Reveal direction="center">
          <div className="mx-auto max-w-[820px] text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.18em] text-[#1455d9] shadow-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#1455d9]" />
              Performance & Analytics
            </span>

            <h2 className="mt-5 text-[30px] font-bold leading-[1.05] tracking-[-.045em] text-[#101828] sm:text-[39px] lg:text-[46px]">
              Build it. Measure it. Improve it.
            </h2>

            <p className="mx-auto mt-5 max-w-[760px] text-[13px] leading-7 text-gray-600 sm:text-[14px]">
              A website should not stop at launch. Performance data, user
              behaviour and customer journeys can show what is working and where
              the next improvement should happen.
            </p>
          </div>
        </Reveal>

        <Reveal direction="up" delay={1}>
          <div className="mt-10 grid gap-4 lg:grid-cols-[.8fr_1.2fr]">
            {/* Metrics */}
            <div className="rounded-[26px] border border-gray-200 bg-white p-5 shadow-[0_15px_45px_rgba(15,23,42,.05)] sm:p-7">
              <div className="flex items-center justify-between">
                <div>
                  <p className="m-0 text-[9px] font-bold uppercase tracking-[.17em] text-gray-400">
                    Live website signals
                  </p>
                  <p className="mt-1 m-0 text-[18px] font-bold text-[#101828]">
                    Growth dashboard
                  </p>
                </div>

                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[8px] font-bold text-emerald-600">
                  Live
                </span>
              </div>

              <div className="mt-6 space-y-3">
                {performanceMetrics.map(
                  ([number, label, value, change, width], index) => (
                    <button
                      type="button"
                      key={number}
                      onClick={() => setActiveMetric(index)}
                      className={`w-full rounded-[17px] border p-4 text-left transition-all duration-300 ${
                        activeMetric === index
                          ? "border-blue-100 bg-[#f5f8ff] shadow-sm"
                          : "border-gray-100 bg-white hover:border-blue-100"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-[8px] font-black tracking-wider text-[#1455d9]">
                            {number}
                          </span>
                          <span className="text-[10px] font-bold text-[#101828]">
                            {label}
                          </span>
                        </div>

                        <span className="text-[9px] font-bold text-emerald-500">
                          {change}
                        </span>
                      </div>

                      <div className="mt-3 flex items-center gap-3">
                        <span className="w-14 text-[18px] font-bold tracking-[-.04em] text-[#101828]">
                          {value}
                        </span>

                        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-100">
                          <div
                            className={`h-full rounded-full bg-[#1455d9] transition-all duration-700 ${width}`}
                          />
                        </div>
                      </div>
                    </button>
                  ),
                )}
              </div>
            </div>

            {/* Graph */}
            <div className="rounded-[26px] bg-[#101828] p-5 text-white shadow-[0_20px_55px_rgba(15,23,42,.12)] sm:p-7">
              <div className="flex items-start justify-between">
                <div>
                  <p className="m-0 text-[9px] font-bold uppercase tracking-[.17em] text-blue-300">
                    Website performance
                  </p>

                  <div className="mt-2 flex items-end gap-3">
                    <span className="text-[30px] font-bold tracking-[-.05em]">
                      {performanceMetrics[activeMetric][2]}
                    </span>

                    <span className="mb-1 rounded-full bg-emerald-400/10 px-2 py-1 text-[8px] font-bold text-emerald-300">
                      {performanceMetrics[activeMetric][3]}
                    </span>
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                  <p className="m-0 text-[7px] text-gray-500">Last 30 days</p>
                  <p className="mt-1 m-0 text-[9px] font-bold text-white">
                    Improving
                  </p>
                </div>
              </div>

              <div className="relative mt-8 h-[220px] overflow-hidden rounded-[18px] border border-white/10 bg-white/[.025]">
                {/* Grid */}
                <div className="absolute inset-0 flex flex-col justify-between p-5">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="border-t border-white/[.06]" />
                  ))}
                </div>

                {/* Bars */}
                <div className="absolute inset-x-5 bottom-5 top-5 flex items-end gap-2">
                  {bars.map((height, index) => (
                    <div key={index} className="flex h-full flex-1 items-end">
                      <div
                        className={`w-full rounded-t-md transition-all duration-700 ${
                          index === 11
                            ? "bg-cyan-400"
                            : index === 10
                              ? "bg-blue-400"
                              : "bg-blue-400/20"
                        } ${height}`}
                      />
                    </div>
                  ))}
                </div>

                {/* Line-like markers */}
                <div className="absolute bottom-[30%] left-[12%] h-2 w-2 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,.6)]" />
                <div className="absolute bottom-[51%] left-[43%] h-2 w-2 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,.6)]" />
                <div className="absolute bottom-[76%] right-[12%] h-2 w-2 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(103,232,249,.7)]" />
              </div>

              <div className="mt-4 flex items-center justify-between text-[8px] text-gray-500">
                <span>Week 01</span>
                <span>Week 02</span>
                <span>Week 03</span>
                <span>Week 04</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================
   RELATED SERVICES ORBIT
   ========================================================= */

function RelatedServices() {
  const related = [
    {
      number: "01",
      title: "Web Application",
      short: "WEB APP",
      description:
        "Build functional web-based products for complex workflows and digital operations.",
      path: "/web-application",
      position: "left-[4%] top-1/2 -translate-y-1/2",
    },
    {
      number: "02",
      title: "CMS Development",
      short: "CMS",
      description:
        "Create manageable content systems that make publishing and updating digital experiences easier.",
      path: "/cms-development",
      position: "right-[4%] top-1/2 -translate-y-1/2",
    },
    {
      number: "03",
      title: "E-Commerce Service",
      short: "E-COMMERCE",
      description:
        "Create customer-focused shopping experiences with products, checkout and connected systems.",
      path: "/e-commerce",
      position: "left-1/2 bottom-[2%] -translate-x-1/2",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f7faff] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
      <div className="pointer-events-none absolute -left-40 top-0 h-[360px] w-[360px] rounded-full bg-blue-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[360px] w-[360px] rounded-full bg-cyan-100/50 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1250px]">
        <Reveal direction="center">
          <div className="mx-auto max-w-[760px] text-center">
            <p className="m-0 text-[10px] font-bold uppercase tracking-[.19em] text-[#1455d9]">
              Connected Capabilities
            </p>

            <h2 className="mt-3 m-0 text-[30px] font-bold leading-[1.06] tracking-[-.045em] text-[#101828] sm:text-[40px]">
              Your website can be
              <span className="text-[#1455d9]"> part of a bigger system.</span>
            </h2>

            <p className="mx-auto mt-4 max-w-[650px] text-[13px] leading-7 text-gray-500">
              Connect your website with the digital services that support your
              next stage of growth.
            </p>
          </div>
        </Reveal>

        {/* Orbit stage */}
        <div className="relative mx-auto mt-12 h-[520px] max-w-[1050px] sm:h-[560px]">
          {/* Orbit rings */}
          <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-100 sm:h-[340px] sm:w-[340px]" />

          <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-blue-100/80 sm:h-[500px] sm:w-[500px]" />

          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-100/50 sm:h-[650px] sm:w-[650px]" />

          {/* Rotating ring */}
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 animate-[spin_18s_linear_infinite] rounded-full border border-transparent border-t-blue-300 border-r-blue-100 sm:h-[500px] sm:w-[500px]" />

          {/* Center */}
          <div className="absolute left-1/2 top-1/2 z-20 flex h-[135px] w-[135px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[34px] border border-blue-100 bg-white text-center shadow-[0_25px_70px_rgba(20,85,217,.13)] sm:h-[155px] sm:w-[155px]">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#073b91] text-[11px] font-black text-white shadow-lg">
              WEB
            </div>

            <p className="mt-3 m-0 text-[12px] font-bold text-[#101828]">
              Website Development
            </p>

            <p className="mt-1 m-0 text-[7px] text-gray-400">
              Digital foundation
            </p>
          </div>

          {/* Rotating dots */}
          <div className="absolute left-1/2 top-1/2 z-10 h-0 w-0 animate-[spin_12s_linear_infinite]">
            <span className="absolute -left-2 -top-[202px] h-4 w-4 rounded-full border-4 border-white bg-[#1455d9] shadow-[0_0_20px_rgba(20,85,217,.4)]" />
          </div>

          <div className="absolute left-1/2 top-1/2 z-10 h-0 w-0 animate-[spin_16s_linear_infinite_reverse]">
            <span className="absolute -left-1 -top-[252px] h-3 w-3 rounded-full border-2 border-white bg-cyan-400 shadow-[0_0_15px_rgba(6,182,212,.5)]" />
          </div>

          {/* Service cards */}
          {related.map((service, index) => (
            <Link
              key={service.number}
              to={service.path}
              className={`group absolute z-30 w-[185px] rounded-[20px] border border-gray-200 bg-white p-4 shadow-[0_15px_45px_rgba(15,23,42,.07)] transition-all duration-500 hover:-translate-y-1 hover:border-[#1455d9] hover:shadow-[0_20px_50px_rgba(20,85,217,.13)] sm:w-[215px] sm:p-5 ${service.position}`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-black tracking-[.14em] text-[#1455d9]">
                  {service.number}
                </span>

                <span className="text-[16px] text-gray-300 transition group-hover:translate-x-1 group-hover:text-[#1455d9]">
                  ↗
                </span>
              </div>

              <span className="mt-3 inline-flex rounded-full bg-[#f1f5ff] px-2 py-1 text-[6px] font-bold uppercase tracking-wider text-[#1455d9]">
                {service.short}
              </span>

              <h3 className="mt-3 m-0 text-[13px] font-bold leading-5 text-[#101828] sm:text-[15px]">
                {service.title}
              </h3>

              <p className="mt-2 m-0 text-[9px] leading-5 text-gray-500 sm:text-[10px]">
                {service.description}
              </p>
            </Link>
          ))}

          {/* Mobile visual labels */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full border border-gray-200 bg-white px-4 py-2 text-[8px] font-bold text-gray-500 shadow-sm">
            Connected digital ecosystem
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   MAIN PAGE
   ========================================================= */

function WebDev() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="w-full overflow-hidden bg-white text-[#111827]">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#f7faff] px-5 pb-14 pt-8 sm:px-8 sm:pb-20 sm:pt-10 lg:px-14 lg:pb-20 lg:pt-12">
        <div className="pointer-events-none absolute -right-32 -top-32 h-[350px] w-[350px] rounded-full bg-blue-100/60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[300px] w-[300px] rounded-full bg-indigo-100/50 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1500px]">
          {/* HERO GRID */}
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-10 xl:gap-14">
            {/* ================= LEFT CONTENT ================= */}
            <Reveal direction="left">
              <div className="max-w-[700px]">
                {/* BREADCRUMB */}
                <div className="mb-5 flex flex-wrap items-center gap-2 text-[10px] font-medium text-gray-500 sm:mb-6 sm:text-[11px]">
                  <Link to="/" className="transition hover:text-[#1455d9]">
                    Home
                  </Link>

                  <span>/</span>

                  <span>Services</span>

                  <span>/</span>

                  <span className="text-[#1455d9]">Website Development</span>
                </div>

                {/* SERVICE BADGE */}
                <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-[.16em] text-[#1455d9] shadow-sm sm:text-[10px]">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#1455d9]" />
                  Website Development
                </span>

                {/* HEADING */}
                <h1 className="mt-5 m-0 max-w-[720px] text-[34px] font-bold leading-[1.04] tracking-[-.045em] text-[#101828] sm:text-[43px] lg:text-[48px] xl:text-[36px]">
                  Websites Built to Support Your
                  <span className="inline-block text-[#1455d9]">
                    Business, Brand & Customer Journey
                  </span>
                </h1>

                {/* DESCRIPTION */}
                <p className="mt-5 max-w-[650px] text-[13px] leading-7 text-gray-600 sm:text-[14px] lg:text-[15px]">
                  Build responsive, scalable and user-focused websites around
                  your audience, business objective and measurable customer
                  journey — from strategy and UX to design, development,
                  integrations, testing and continuous improvement.
                </p>

                {/* BUTTONS */}
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#073b91] px-6 py-3 text-[12px] font-bold text-white shadow-[0_12px_30px_rgba(7,59,145,.18)] transition duration-300 hover:-translate-y-1 hover:bg-[#052f75]"
                  >
                    Talk to Our Team
                    <span className="ml-2">→</span>
                  </Link>

                  <a
                    href="#services"
                    className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-gray-200 bg-white px-6 py-3 text-[12px] font-bold text-gray-600 transition duration-300 hover:border-[#1455d9] hover:text-[#1455d9]"
                  >
                    Explore Services
                  </a>
                </div>

                {/* TRUST ROW */}
                <div className="mt-7 flex flex-wrap items-center gap-5 text-[8px] font-semibold uppercase tracking-[.13em] text-gray-400">
                  <span>Responsive</span>
                  <span>Scalable</span>
                  <span>Performance-focused</span>
                </div>
              </div>
            </Reveal>

            {/* ================= RIGHT CONTENT ================= */}
            <Reveal direction="right" delay={1}>
              <div className="relative mx-auto w-full max-w-[560px]">
                {/* Ambient Glow */}
                <div className="pointer-events-none absolute -inset-10 rounded-full bg-blue-500/10 blur-3xl" />

                <div className="pointer-events-none absolute -right-10 top-10 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />

                {/* ================= BROWSER WINDOW ================= */}
                <div className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0a0d1c]/95 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                  {/* Browser Header */}
                  <div className="flex h-12 items-center gap-3 border-b border-white/10 bg-white/[0.035] px-4">
                    {/* Browser Dots */}
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    </div>

                    {/* URL Bar */}
                    <div className="ml-2 flex h-7 flex-1 items-center rounded-lg border border-white/10 bg-white/[0.035] px-3">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />

                      <span className="text-[10px] text-white/35">
                        yourwebsite.com
                      </span>
                    </div>
                  </div>

                  {/* Website Preview */}
                  <div className="relative min-h-[360px] overflow-hidden bg-[#070a16] p-5">
                    {/* Grid Background */}
                    <div
                      className="pointer-events-none absolute inset-0 opacity-[0.035]"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                      }}
                    />

                    <div className="relative z-10">
                      {/* Website Navbar */}
                      <div className="flex items-center justify-between border-b border-white/5 pb-4">
                        <div className="h-3 w-20 rounded-full bg-gradient-to-r from-blue-400/80 to-violet-400/70" />

                        <div className="hidden items-center gap-2 sm:flex">
                          <span className="h-1.5 w-8 rounded-full bg-white/10" />
                          <span className="h-1.5 w-10 rounded-full bg-white/10" />
                          <span className="h-1.5 w-8 rounded-full bg-white/10" />

                          <span className="h-6 w-16 rounded-md bg-blue-500/20 ring-1 ring-blue-400/20" />
                        </div>
                      </div>

                      {/* Hero Content */}
                      <div className="mt-6 grid grid-cols-[1.15fr_.85fr] gap-5">
                        {/* Hero Left */}
                        <div className="space-y-3">
                          {/* HTML Tag */}
                          <div className="flex items-center gap-2">
                            <span className="rounded-md border border-blue-400/20 bg-blue-400/10 px-2 py-1 font-mono text-[8px] text-blue-300">
                              &lt;section&gt;
                            </span>

                            <span className="h-px w-8 bg-white/10" />
                          </div>

                          {/* Heading */}
                          <div className="space-y-2">
                            <div className="h-4 w-[85%] rounded bg-white/15" />

                            <div className="h-4 w-[65%] rounded bg-white/10" />

                            <div className="h-2 w-[90%] rounded bg-white/5" />

                            <div className="h-2 w-[75%] rounded bg-white/5" />
                          </div>

                          {/* Buttons */}
                          <div className="flex gap-2 pt-2">
                            <div className="h-7 w-20 rounded-lg bg-blue-500/30 ring-1 ring-blue-400/20" />

                            <div className="h-7 w-16 rounded-lg border border-white/10 bg-white/[0.035]" />
                          </div>
                        </div>

                        {/* Component Preview */}
                        <div className="relative">
                          <div className="absolute right-0 top-1 h-24 w-24 rounded-2xl border border-violet-400/20 bg-violet-400/[0.06] p-3 shadow-[0_0_30px_rgba(139,92,246,0.12)] transition-transform duration-700 group-hover:-translate-y-2">
                            <div className="mb-3 h-2 w-12 rounded bg-violet-300/30" />

                            <div className="space-y-2">
                              <div className="h-1.5 w-full rounded bg-white/10" />

                              <div className="h-1.5 w-[70%] rounded bg-white/10" />

                              <div className="h-5 w-full rounded-md bg-violet-400/15" />
                            </div>

                            <span className="absolute -right-2 -top-2 rounded-md border border-violet-300/20 bg-[#0b0e20] px-1.5 py-1 font-mono text-[7px] text-violet-300">
                              Card
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Components */}
                      <div className="mt-7">
                        <div className="mb-3 flex items-center gap-2">
                          <span className="font-mono text-[8px] text-white/25">
                            components/
                          </span>

                          <div className="h-px flex-1 bg-white/5" />
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                          {/* Card 1 */}
                          <div className="relative h-24 overflow-hidden rounded-xl border border-blue-400/10 bg-blue-400/[0.035] p-3 transition-all duration-500 hover:border-blue-400/30 hover:bg-blue-400/[0.07]">
                            <div className="mb-3 h-2 w-8 rounded bg-blue-300/30" />

                            <div className="space-y-1.5">
                              <div className="h-1.5 w-full rounded bg-white/10" />
                              <div className="h-1.5 w-[75%] rounded bg-white/5" />
                              <div className="mt-2 h-4 w-12 rounded bg-blue-400/10" />
                            </div>

                            <span className="absolute bottom-2 right-2 font-mono text-[7px] text-blue-300/50">
                              Card
                            </span>
                          </div>

                          {/* Card 2 */}
                          <div className="relative h-24 overflow-hidden rounded-xl border border-violet-400/10 bg-violet-400/[0.035] p-3">
                            <div className="mb-3 h-2 w-10 rounded bg-violet-300/30" />

                            <div className="space-y-1.5">
                              <div className="h-1.5 w-full rounded bg-white/10" />
                              <div className="h-1.5 w-[65%] rounded bg-white/5" />
                              <div className="mt-2 h-4 w-14 rounded bg-violet-400/10" />
                            </div>

                            <span className="absolute bottom-2 right-2 font-mono text-[7px] text-violet-300/50">
                              Card
                            </span>
                          </div>

                          {/* Card 3 */}
                          <div className="relative h-24 overflow-hidden rounded-xl border border-cyan-400/10 bg-cyan-400/[0.035] p-3">
                            <div className="mb-3 h-2 w-7 rounded bg-cyan-300/30" />

                            <div className="space-y-1.5">
                              <div className="h-1.5 w-full rounded bg-white/10" />
                              <div className="h-1.5 w-[80%] rounded bg-white/5" />
                              <div className="mt-2 h-4 w-10 rounded bg-cyan-400/10" />
                            </div>

                            <span className="absolute bottom-2 right-2 font-mono text-[7px] text-cyan-300/50">
                              Card
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* HTML → Components → Website */}
                      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                        <div className="rounded-lg border border-blue-400/20 bg-blue-400/5 px-3 py-2 font-mono text-[8px] text-blue-300/70">
                          &lt;HTML /&gt;
                        </div>

                        <span className="text-white/20">→</span>

                        <div className="rounded-lg border border-violet-400/20 bg-violet-400/5 px-3 py-2 font-mono text-[8px] text-violet-300/70">
                          Components
                        </div>

                        <span className="text-white/20">→</span>

                        <div className="rounded-lg border border-emerald-400/20 bg-emerald-400/5 px-3 py-2 font-mono text-[8px] text-emerald-300/70">
                          Live ✓
                        </div>
                      </div>
                    </div>

                    {/* Scanning Animation */}
                    <div className="pointer-events-none absolute left-0 right-0 top-0 h-px animate-pulse bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
                  </div>

                  {/* Browser Footer */}
                  <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.02] px-4 py-2">
                    <span className="font-mono text-[8px] text-white/25">
                      building website...
                    </span>

                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

                      <span className="text-[8px] text-emerald-300/60">
                        LIVE
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating HTML Card */}
                <div className="absolute -left-5 top-16 hidden animate-bounce rounded-xl border border-white/10 bg-[#0a0d1c]/90 px-3 py-2 shadow-xl backdrop-blur-xl sm:block">
                  <div className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-md bg-blue-400/10 font-mono text-[8px] text-blue-300">
                      &lt;/&gt;
                    </span>

                    <div>
                      <p className="text-[8px] font-medium text-white/60">
                        HTML Blocks
                      </p>

                      <p className="text-[7px] text-white/25">Structured</p>
                    </div>
                  </div>
                </div>

                {/* Floating Website Ready Card */}
                <div className="absolute -right-5 bottom-14 hidden animate-bounce rounded-xl border border-white/10 bg-[#0a0d1c]/90 px-3 py-2 shadow-xl backdrop-blur-xl sm:block">
                  <div className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-md bg-emerald-400/10 text-[9px] text-emerald-300">
                      ✓
                    </span>

                    <div>
                      <p className="text-[8px] font-medium text-white/60">
                        Website Ready
                      </p>

                      <p className="text-[7px] text-emerald-300/40">
                        Published
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-10">
        <div className="pointer-events-none absolute right-0 top-0 h-[320px] w-[320px] rounded-full bg-blue-50 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1500px]">
          <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:items-end lg:gap-20">
            <Reveal direction="left">
              <div className="mb-10">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#1455d9]" />
                  <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9]">
                    Built around the product
                  </p>
                </div>

                <h2 className="mt-4 m-0 max-w-[620px] text-[31px] font-bold leading-[1.08] tracking-[-.04em] text-[#101828] sm:text-[39px] lg:text-[32px]">
                  Technology should support the product, not become the product.
                </h2>
              </div>
            </Reveal>

            <Reveal direction="right">
              <div className="grid gap-4 sm:grid-cols-2">
                <article className="group rounded-[24px] border border-gray-200 bg-[#f8faff] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(15,23,42,.07)]">
                  <span className="text-[10px] font-bold tracking-[.18em] text-[#1455d9]">
                    01 / PRODUCT
                  </span>
                  <h3 className="mt-5 m-0 text-[19px] font-bold tracking-[-.025em] text-[#101828]">
                    Start with a useful customer journey.
                  </h3>
                  <p className="mt-3 m-0 text-[12px] leading-6 text-gray-500">
                    A strong application starts with a clear business problem,
                    audience and outcome before technology decisions are made.
                  </p>
                </article>

                <article className="group rounded-[24px] border border-gray-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,.04)] transition-all duration-500 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(15,23,42,.08)]">
                  <span className="text-[10px] font-bold tracking-[.18em] text-[#1455d9]">
                    02 / SYSTEM
                  </span>
                  <h3 className="mt-5 m-0 text-[19px] font-bold tracking-[-.025em] text-[#101828]">
                    Connect UX, architecture and measurement.
                  </h3>
                  <p className="mt-3 m-0 text-[12px] leading-6 text-gray-500">
                    Product thinking, integrations, testing and performance work
                    together as one digital foundation.
                  </p>
                </article>
              </div>
            </Reveal>
          </div>

          <Reveal direction="up">
            <div className="relative mt-10 overflow-hidden rounded-[28px] bg-[#101828] p-6 text-white shadow-[0_25px_70px_rgba(15,23,42,.13)] sm:p-8 lg:p-10">
              <div className="pointer-events-none absolute -right-24 -top-24 h-[280px] w-[280px] rounded-full bg-blue-500/10 blur-3xl" />

              <div className="relative grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
                <div>
                  <p className="m-0 text-[9px] font-bold uppercase tracking-[.2em] text-blue-300">
                    The Akkurate approach
                  </p>
                  <h3 className="mt-3 m-0 max-w-[680px] text-[25px] font-bold leading-tight tracking-[-.035em] sm:text-[25px]">
                    Strategy first. Experience second. Measurement throughout.
                  </h3>
                  <p className="mt-4 max-w-[650px] text-[12px] leading-6 text-gray-400 sm:text-[13px] sm:leading-7">
                    We connect product thinking, UX, application architecture,
                    integrations, testing and measurement around the business
                    objective.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {[
                    ["01", "Understand", "Business + users"],
                    ["02", "Build", "UX + technology"],
                    ["03", "Improve", "Signals + iteration"],
                  ].map(([num, title, copy]) => (
                    <div
                      key={num}
                      className="rounded-2xl border border-white/10 bg-white/[.04] p-4 transition duration-300 hover:-translate-y-1 hover:bg-white/[.07]"
                    >
                      <span className="text-[9px] font-bold text-blue-300">
                        {num}
                      </span>
                      <p className="mt-4 m-0 text-[12px] font-bold text-white">
                        {title}
                      </p>
                      <p className="mt-1 m-0 text-[8px] leading-4 text-gray-500">
                        {copy}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          BUSINESS PROBLEM
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#101828] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-10">
        <div className="pointer-events-none absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-[1100px] text-center">
          <Reveal direction="center">
            <p className="m-0 text-[10px] font-bold uppercase tracking-[.18em] text-blue-300">
              The Business Problem We Solve
            </p>

            <h2 className="mt-4 m-0 text-[29px] font-bold leading-[1.08] tracking-[-.04em] text-white sm:text-[39px] lg:text-[30px]">
              A Website Should Do
              <span className="text-blue-300"> More Than Look Good.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-[900px] text-[13px] leading-7 text-gray-300 sm:text-[14px]">
              A website can look polished and still fail to communicate its
              value, guide visitors or support the business objective. Akkurate
              connects strategy, UX, design, technology, content, integrations
              and measurement so website development becomes part of the wider
              customer journey.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              [
                "01",
                "Clarity",
                "Make the value proposition easier to understand.",
              ],
              ["02", "Journey", "Guide visitors toward useful next actions."],
              [
                "03",
                "Measurement",
                "Create signals that show what is working.",
              ],
            ].map(([number, title, text]) => (
              <Reveal key={number} direction="up">
                <div className="rounded-[18px] border border-white/10 bg-white/[.04] p-5 text-left transition hover:bg-white/[.07]">
                  <span className="text-[9px] font-black tracking-[.15em] text-blue-300">
                    {number}
                  </span>

                  <h3 className="mt-4 m-0 text-[16px] font-bold text-white">
                    {title}
                  </h3>

                  <p className="mt-2 m-0 text-[10px] leading-5 text-gray-400">
                    {text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PERFORMANCE GRAPH
      ===================================================== */}

      <PerformanceAnalytics />

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section
        id="services"
        className="px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-10"
      >
        <div className="mx-auto w-full max-w-[1450px]">
          <Reveal direction="center">
            <div className="mx-auto max-w-[760px] text-center">
              <p className="m-0 text-[10px] font-bold uppercase tracking-[.18em] text-[#1455d9]">
                Our Services
              </p>

              <h2 className="mt-3 m-0 text-[30px] font-bold leading-[1.05] tracking-[-.04em] text-[#101828] sm:text-[40px]">
                Our Website Development Services
              </h2>

              <p className="mt-4 text-[13px] leading-7 text-gray-500">
                From strategy and design to development, integrations and
                optimization, choose the capabilities your website actually
                needs.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(([number, title, description], index) => (
              <Reveal key={number} direction="up" delay={index % 3}>
                <article className="group relative h-full overflow-hidden rounded-[22px] border border-gray-200 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,.035)] transition-all duration-500 hover:-translate-y-1 hover:border-blue-100 hover:shadow-[0_20px_45px_rgba(20,85,217,.09)] sm:p-6">
                  <div className="absolute right-0 top-0 h-20 w-20 rounded-full bg-blue-50 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

                  <div className="relative flex items-start justify-between">
                    <span className="text-[10px] font-black tracking-[.15em] text-[#1455d9]">
                      {number}
                    </span>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 text-[15px] text-gray-300 transition group-hover:bg-[#073b91] group-hover:text-white">
                      ↗
                    </span>
                  </div>

                  <div className="relative mt-8">
                    <h3 className="m-0 text-[17px] font-bold leading-snug text-[#101828] sm:text-[18px]">
                      {title}
                    </h3>

                    <p className="mt-3 m-0 text-[11px] leading-6 text-gray-500 sm:text-[12px]">
                      {description}
                    </p>
                  </div>

                  <div className="relative mt-6 h-1 overflow-hidden rounded-full bg-gray-100">
                    <div className="h-full w-0 rounded-full bg-[#1455d9] transition-all duration-500 group-hover:w-full" />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          OUTCOMES
      ===================================================== */}

      <section className="bg-[#f7faff] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-10">
        <div className="mx-auto grid w-full max-w-[1400px] gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-center lg:gap-16">
          <Reveal direction="left">
            <div>
              <p className="m-0 text-[10px] font-bold uppercase tracking-[.18em] text-[#1455d9]">
                What You Get
              </p>

              <h2 className="mt-3 m-0 text-[30px] font-bold leading-[1.06] tracking-[-.04em] text-[#101828] sm:text-[40px]">
                What You Get
                <span className="block text-[#1455d9]">From Akkurate</span>
              </h2>

              <p className="mt-5 m-0 max-w-[520px] text-[13px] leading-7 text-gray-600 sm:text-[14px]">
                The exact outcome depends on the starting point, audience,
                website scope, budget, implementation and business model. Our
                job is to create the conditions for a useful digital experience
                and report honestly on what is working.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {outcomes.map((outcome, index) => (
              <Reveal key={outcome} direction="up" delay={index % 2}>
                <div className="group flex items-center gap-3 rounded-[17px] border border-gray-200 bg-white px-4 py-4 shadow-[0_7px_25px_rgba(15,23,42,.025)] transition duration-300 hover:-translate-y-0.5 hover:border-blue-100">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#073b91] text-[8px] font-black text-white transition group-hover:scale-105">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-[11px] font-semibold leading-5 text-[#101828] sm:text-[12px]">
                    {outcome}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHO THIS IS FOR
      ===================================================== */}

      <section className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-20">
        <div className="mx-auto w-full max-w-[1500px]">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start lg:gap-20">
            {/* LEFT CONTENT */}
            <Reveal direction="left">
              <div>
                <p className="m-0 text-[10px] font-bold uppercase tracking-[.2em] text-[#1455d9]">
                  Who This Service Is For
                </p>

                <h2 className="mt-3 m-0 max-w-[560px] text-[31px] font-bold leading-[1.08] tracking-[-.04em] text-[#101828] sm:text-[30px]">
                  Website Development{" "}
                  <span className="text-[#1455d9]">
                    Should Fit Your Business.
                  </span>
                </h2>

                <p className="mt-4 max-w-[520px] text-[13px] leading-7 text-gray-500">
                  Website development is relevant to businesses that need a
                  reliable, scalable and purpose-driven digital presence. The
                  right approach depends on your audience, business model,
                  existing systems and website objectives.
                </p>

                <p className="mt-4 max-w-[520px] text-[13px] leading-7 text-gray-500">
                  Akkurate can recommend a focused website project, a broader
                  integrated development program or a different digital solution
                  when that is more appropriate.
                </p>
              </div>
            </Reveal>

            {/* RIGHT AUDIENCE CARDS */}
            <div className="grid gap-3 md:grid-cols-3">
              {audienceCards.map((card, index) => (
                <Reveal key={card.number} direction="up" delay={index}>
                  <article
                    className="
                h-full
                rounded-[22px]
                border
                border-gray-200
                bg-[#f8faff]
                p-5
                transition
                duration-300
                hover:-translate-y-1
                hover:bg-white
                hover:shadow-[0_20px_45px_rgba(15,23,42,.07)]
              "
                  >
                    {/* NUMBER */}
                    <span className="text-[9px] font-black tracking-[.15em] text-[#1455d9]">
                      {card.number}
                    </span>

                    {/* TITLE */}
                    <h3 className="mt-5 text-[16px] font-bold text-[#101828]">
                      {card.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="mt-2 text-[11px] leading-5 text-gray-500">
                      {card.text}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="bg-[#101828] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-10">
        <div className="mx-auto w-full max-w-[1450px]">
          <Reveal direction="center">
            <div className="mx-auto max-w-[800px] text-center">
              <p className="m-0 text-[10px] font-bold uppercase tracking-[.18em] text-blue-300">
                Our Process
              </p>

              <h2 className="mt-3 m-0 text-[30px] font-bold leading-[1.05] tracking-[-.04em] text-white sm:text-[40px]">
                A Practical Website
                <span className="text-blue-300"> Development Process.</span>
              </h2>
            </div>
          </Reveal>

          <div className="relative mt-10">
            {/* Connecting line */}
            <div className="absolute left-[10%] right-[10%] top-7 hidden h-px bg-white/10 lg:block" />

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {processSteps.map(([number, title, description], index) => (
                <Reveal key={number} direction="up" delay={index % 5}>
                  <div className="relative h-full rounded-[20px] border border-white/10 bg-white/[.035] p-5 transition duration-300 hover:bg-white/[.07] sm:p-6">
                    <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-blue-400/20 bg-[#101828] text-[9px] font-black text-blue-300">
                      {number}
                    </div>

                    <h3 className="mt-6 m-0 text-[15px] font-bold leading-snug text-white">
                      {title}
                    </h3>

                    <p className="mt-3 m-0 text-[10px] leading-5 text-gray-400 sm:text-[11px]">
                      {description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY AKKURATE
      ===================================================== */}

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-10">
        <div className="mx-auto w-full max-w-[1450px]">
          <Reveal direction="left">
            <div className="max-w-[800px]">
              <p className="m-0 text-[10px] font-bold uppercase tracking-[.18em] text-[#1455d9]">
                Why Choose Akkurate
              </p>

              <h2 className="mt-3 m-0 text-[30px] font-bold leading-[1.06] tracking-[-.04em] text-[#101828] sm:text-[40px]">
                A Business-First
                <span className="block text-[#1455d9]">
                  Website Development Approach.
                </span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map(([number, title, description], index) => (
              <Reveal key={number} direction="up" delay={index}>
                <article className="group h-full rounded-[21px] border border-gray-200 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,.035)] transition-all duration-500 hover:-translate-y-1 hover:border-[#1455d9] hover:bg-[#1455d9] hover:shadow-[0_20px_45px_rgba(20,85,217,.20)] sm:p-6">
                  <span className="text-[10px] font-black tracking-[.14em] text-[#1455d9] transition group-hover:text-blue-200">
                    {number}
                  </span>

                  <div className="mt-6 flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-[11px] font-bold text-[#1455d9] transition group-hover:bg-white/10 group-hover:text-white">
                    ✓
                  </div>

                  <h3 className="mt-5 m-0 text-[16px] font-bold leading-snug text-[#101828] transition group-hover:text-white">
                    {title}
                  </h3>

                  <p className="mt-3 m-0 text-[10px] leading-5 text-gray-500 transition group-hover:text-white/80 sm:text-[11px]">
                    {description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
    RELATED SERVICES — ORBIT CARDS
===================================================== */}

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
              Strengthen your digital presence with connected web solutions
              built to improve performance, flexibility and online business
              growth.
            </p>
          </div>

          {/* CARDS */}
          <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* =====================================================
          WEB APPLICATION CARD
      ===================================================== */}

            <Link
              to="/web-application"
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
                    Web Application
                  </h3>

                  <p className="mt-2 m-0 max-w-[270px] text-[10px] leading-[1.6] text-gray-400 sm:text-[11px]">
                    Build scalable and high-performance web applications that
                    deliver powerful functionality and seamless user
                    experiences.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[.12em] text-cyan-300/60 transition group-hover:text-cyan-300">
                  Explore service
                  <span className="h-px w-5 bg-cyan-400/30 transition-all duration-300 group-hover:w-8" />
                </div>
              </div>

              {/* WEB APPLICATION ORBIT */}
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
                <div className="absolute left-1/2 top-1/2 flex h-[56px] w-[70px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[17px] border border-cyan-300/25 bg-[#10202b] shadow-[0_0_35px_rgba(6,182,212,.25)]">
                  <span className="text-[8px] font-bold uppercase tracking-[.04em] text-cyan-300/70">
                    Web App
                  </span>
                </div>
              </div>

              {/* Arrow */}
              <div className="absolute bottom-4 right-4 z-30 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-500/10 text-[13px] text-cyan-300 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-cyan-500 group-hover:text-white">
                →
              </div>
            </Link>

            {/* =====================================================
          CMS DEVELOPMENT CARD
      ===================================================== */}

            <Link
              to="/cms-development"
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
              {/* Violet glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-[190px] w-[190px] rounded-full bg-violet-600/15 blur-[65px] transition duration-700 group-hover:bg-violet-500/25" />

              {/* Content */}
              <div className="relative z-20 flex h-full w-[58%] flex-col justify-between">
                <div>
                  <h3 className="mt-4 m-0 text-[17px] font-bold tracking-[-.025em] text-white sm:text-[18px]">
                    CMS Development
                  </h3>

                  <p className="mt-2 m-0 max-w-[270px] text-[10px] leading-[1.6] text-gray-400 sm:text-[11px]">
                    Create flexible and easy-to-manage websites with powerful
                    CMS solutions that make content management simple and
                    efficient.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[.12em] text-violet-300/60 transition group-hover:text-violet-300">
                  Explore service
                  <span className="h-px w-5 bg-violet-400/30 transition-all duration-300 group-hover:w-8" />
                </div>
              </div>

              {/* CMS DEVELOPMENT ORBIT */}
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
                <div className="absolute left-1/2 top-1/2 flex h-[55px] w-[62px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-violet-300/30 bg-[#17152b] shadow-[0_0_35px_rgba(139,92,246,.3)]">
                  <span className="text-[8px] font-black uppercase tracking-[.04em] text-violet-300">
                    CMS
                  </span>
                </div>
              </div>

              {/* Arrow */}
              <div className="absolute bottom-4 right-4 z-30 flex h-8 w-8 items-center justify-center rounded-full border border-violet-400/20 bg-violet-500/10 text-[13px] text-violet-300 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-violet-500 group-hover:text-white">
                →
              </div>
            </Link>

            {/* =====================================================
          E-COMMERCE CARD
      ===================================================== */}

            <Link
              to="/e-commerce"
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
                    E-commerce
                  </h3>

                  <p className="mt-2 m-0 max-w-[275px] text-[10px] leading-[1.6] text-gray-400 sm:text-[11px]">
                    Build secure and scalable online stores with seamless
                    shopping experiences designed to turn visitors into
                    customers.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[.12em] text-orange-300/60 transition group-hover:text-orange-300">
                  Explore service
                  <span className="h-px w-5 bg-orange-400/30 transition-all duration-300 group-hover:w-8" />
                </div>
              </div>

              {/* E-COMMERCE ORBIT */}
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
                <div className="absolute left-1/2 top-1/2 flex h-[58px] w-[78px] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-xl border border-orange-300/25 bg-[#1a1719] shadow-[0_0_35px_rgba(249,115,22,.22)]">
                  <span className="text-[8px] font-black uppercase tracking-[.04em] text-orange-300">
                    E-Commerce
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

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-10">
        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-16">
          <Reveal direction="left">
            <div className="lg:sticky lg:top-24">
              <p className="m-0 text-[10px] font-bold uppercase tracking-[.18em] text-[#1455d9]">
                Frequently Asked Questions
              </p>

              <h2 className="mt-3 m-0 max-w-[430px] text-[31px] font-bold leading-[1.05] tracking-[-.04em] text-[#101828] sm:text-[40px]">
                Website Development
                <span className="block text-[#1455d9]">FAQs</span>
              </h2>

              <p className="mt-5 max-w-[420px] text-[12px] leading-6 text-gray-500 sm:text-[13px]">
                Straightforward answers about scope, redesigns, integrations,
                responsive experiences and connected digital services.
              </p>

              <div className="mt-7 rounded-[20px] border border-gray-200 bg-[#f7faff] p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#073b91] text-white">
                    ?
                  </div>

                  <div>
                    <p className="m-0 text-[11px] font-bold text-[#101828]">
                      Still have a question?
                    </p>
                    <p className="mt-1 m-0 text-[9px] text-gray-400">
                      Talk to the Akkurate team.
                    </p>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="mt-4 inline-flex items-center text-[9px] font-bold text-[#1455d9]"
                >
                  Contact us
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </Reveal>

          <div className="space-y-3">
            {faqs.map(([question, answer], index) => {
              const isOpen = openFaq === index;

              return (
                <Reveal key={question} direction="up" delay={index % 3}>
                  <div
                    className={`overflow-hidden rounded-[19px] border transition-all duration-500 ${
                      isOpen
                        ? "border-[#1455d9] bg-[#073b91] shadow-[0_18px_45px_rgba(20,85,217,.14)]"
                        : "border-gray-200 bg-white hover:border-blue-100 hover:shadow-[0_12px_35px_rgba(15,23,42,.05)]"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6"
                    >
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[8px] font-black ${
                          isOpen
                            ? "bg-white/10 text-blue-100"
                            : "bg-[#f0f5ff] text-[#1455d9]"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className={`flex-1 text-[11px] font-bold leading-6 transition sm:text-[12px] ${
                          isOpen ? "text-white" : "text-[#101828]"
                        }`}
                      >
                        {question}
                      </span>

                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-[17px] transition-all duration-300 ${
                          isOpen
                            ? "rotate-45 border-white/20 bg-white/10 text-white"
                            : "border-gray-200 bg-gray-50 text-gray-500"
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
                        <div className="px-5 pb-6 pl-[68px] pr-6 sm:px-6 sm:pb-7 sm:pl-[72px]">
                          <div className="mb-4 h-px bg-white/10" />

                          <p className="m-0 text-[10px] leading-6 text-blue-100/85 sm:text-[11px] sm:leading-7">
                            {answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
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
                Strategy, website and digital growth — connected.
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

export default WebDev;

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

/* =========================================================
   EDUCATION OPPORTUNITIES
========================================================= */

const opportunities = [
  {
    number: "01",
    title: "Course & Program SEO",
    description:
      "Build visibility around courses, programs, qualifications and education searches that matter to prospective students and parents.",
    icon: "⌕",
  },
  {
    number: "02",
    title: "Student & Parent Content",
    description:
      "Create useful content around courses, careers, admissions, fees, outcomes and the learning journey.",
    icon: "✦",
  },
  {
    number: "03",
    title: "Google & Meta Lead Campaigns",
    description:
      "Reach high-intent students and parents with campaigns connected to relevant programs and clear enquiry paths.",
    icon: "↗",
  },
  {
    number: "04",
    title: "Local Search Visibility",
    description:
      "Strengthen discovery for education providers, campuses, training centres and location-specific searches.",
    icon: "⌖",
  },
  {
    number: "05",
    title: "Program Landing Pages",
    description:
      "Create focused landing experiences that explain the program, build trust and guide prospective students toward enquiry.",
    icon: "▣",
  },
  {
    number: "06",
    title: "Enquiry Conversion",
    description:
      "Improve forms, calls to action, trust signals and digital journeys so interested visitors can take the next step.",
    icon: "→",
  },
];

/* =========================================================
   STRATEGY
========================================================= */

const strategy = [
  {
    number: "01",
    title: "Audience & Course Research",
    description:
      "Understand student segments, parent concerns, search behaviour, course demand, competitors and decision criteria.",
  },
  {
    number: "02",
    title: "Positioning & Message",
    description:
      "Clarify the institution, program or training offer and communicate the value, outcomes and proof that matter.",
  },
  {
    number: "03",
    title: "Discovery",
    description:
      "Build visibility through search, local, social and paid channels around high-value education journeys.",
  },
  {
    number: "04",
    title: "Content & Authority",
    description:
      "Answer genuine student and parent questions through program pages, guides, resources, FAQs and useful content.",
  },
  {
    number: "05",
    title: "Enquiry Conversion",
    description:
      "Improve landing pages, forms, calls to action, trust elements and enquiry journeys.",
  },
  {
    number: "06",
    title: "Measurement",
    description:
      "Track qualified traffic, enquiries, applications, conversion rates and other agreed education marketing KPIs.",
  },
];

/* =========================================================
   WHY AKKURATE
========================================================= */

const whyChoose = [
  "Integrated SEO, AEO, GEO, paid media, web and creative capabilities.",
  "Education-specific content architecture.",
  "Student and parent journey-first strategy.",
  "Clear internal linking between industry and service pages.",
  "Transparent measurement and continuous optimization.",
];

/* =========================================================
   FAQ
========================================================= */

const faqs = [
  {
    question:
      "Why should an education business use industry-specific digital marketing?",
    answer:
      "Education customers have different research and decision journeys. An industry-specific strategy allows the website and campaigns to address course intent, student questions, parent concerns, trust signals and conversion actions more effectively.",
  },
  {
    question:
      "Which digital channels should an education business invest in?",
    answer:
      "There is no universal channel mix. Priorities should depend on the audience, course offering, location, competition, buying journey and measurable business objectives.",
  },
  {
    question:
      "Can Akkurate manage multiple education marketing channels?",
    answer:
      "Yes. SEO, AEO, GEO, paid advertising, social media, websites, content and branding can be coordinated when an education business needs an integrated digital strategy.",
  },
  {
    question:
      "Can Akkurate work with our existing education website?",
    answer:
      "Yes. We can audit the current website and recommend improvements before considering a complete rebuild.",
  },
  {
    question: "How do you measure education marketing performance?",
    answer:
      "We can measure business-relevant indicators such as qualified traffic, course enquiries, applications, conversion rate and other agreed KPIs.",
  },
  {
    question:
      "Do you guarantee student enquiries or rankings?",
    answer:
      "No. We focus on strategy, execution, testing and transparent measurement rather than guaranteeing outcomes controlled by search engines, advertising platforms and market conditions.",
  },
];

/* =========================================================
   HERO JOURNEY
========================================================= */

const educationJourney = [
  {
    title: "Course",
    subtitle: "Discover",
    icon: "🎓",
    position: "top-[3%] left-[1%] lg:left-[2%]",
  },
  {
    title: "Compare",
    subtitle: "Evaluate",
    icon: "⇄",
    position: "top-[2%] right-[1%] lg:right-[2%]",
  },
  {
    title: "Website",
    subtitle: "Explore",
    icon: "⌘",
    position: "bottom-[8%] left-[0%] lg:left-[3%]",
  },
  {
    title: "Application",
    subtitle: "Apply",
    icon: "↗",
    position: "bottom-[4%] right-[0%] lg:right-[3%]",
  },
  {
    title: "Enrolment",
    subtitle: "Join",
    icon: "✓",
    position: "top-[45%] right-[-2%] lg:right-[-1%]",
  },
];

/* =========================================================
   SCROLL ANIMATION
========================================================= */

function ScrollAnimations() {
  const location = useLocation();

  useEffect(() => {
    const elements = document.querySelectorAll("[data-animate]");

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove(
              "translate-y-6",
              "translate-x-8",
              "-translate-x-8",
              "scale-95",
            );

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px 80px 0px",
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [location.pathname]);

  return null;
}

/* =========================================================
   HERO JOURNEY VISUAL
========================================================= */

function EducationHeroVisual() {
  return (
    <div className="relative mx-auto h-[470px] w-full max-w-[650px] sm:h-[520px]">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-200/40 blur-3xl" />

      <div className="absolute inset-0 rounded-[36px] border border-blue-100 bg-white/70 shadow-[0_30px_90px_rgba(15,23,42,.10)] backdrop-blur-sm" />

      {/* Decorative grid */}
      <div className="pointer-events-none absolute inset-5 rounded-[28px] border border-dashed border-blue-100/80" />

      {/* Connecting route */}
      <div className="pointer-events-none absolute left-[15%] right-[15%] top-1/2 hidden h-px bg-blue-100 sm:block" />

      <div className="pointer-events-none absolute left-1/2 top-[16%] hidden h-[68%] w-px bg-blue-100 sm:block" />

      {/* Moving route dots */}
      <div
        className="absolute left-[18%] top-1/2 h-2 w-2 rounded-full bg-[#1455d9] animate-ping"
        style={{ animationDelay: "0s" }}
      />

      <div
        className="absolute right-[18%] top-1/2 h-2 w-2 rounded-full bg-[#1455d9] animate-ping"
        style={{ animationDelay: "0.9s" }}
      />

      <div
        className="absolute left-1/2 top-[17%] h-2 w-2 -translate-x-1/2 rounded-full bg-[#1455d9] animate-ping"
        style={{ animationDelay: "1.8s" }}
      />

      <div
        className="absolute bottom-[17%] left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#1455d9] animate-ping"
        style={{ animationDelay: "2.7s" }}
      />

      {/* Surrounding journey cards */}

      {educationJourney.map((item, index) => (
        <div
          key={item.title}
          className={`absolute ${item.position} z-20 w-[130px] sm:w-[150px]`}
          style={{
            animationDelay: `${index * 0.25}s`,
          }}
        >
          <div
            className={`rounded-[20px] border border-blue-100 bg-white p-3 shadow-[0_15px_40px_rgba(15,23,42,.08)] transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_22px_50px_rgba(20,85,217,.12)] ${
              index % 2 === 0 ? "animate-pulse" : ""
            }`}
          >
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[16px] text-[#1455d9]">
                {item.icon}
              </div>

              <div className="min-w-0">
                <p className="m-0 truncate text-[11px] font-bold text-[#101828]">
                  {item.title}
                </p>

                <p className="mt-0.5 m-0 text-[8px] font-medium uppercase tracking-[0.08em] text-gray-400">
                  {item.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Central course card */}
      <div className="absolute left-1/2 top-1/2 z-30 w-[230px] -translate-x-1/2 -translate-y-1/2 sm:w-[270px]">
        <div className="relative overflow-hidden rounded-[28px] border border-blue-100 bg-white p-5 shadow-[0_25px_70px_rgba(15,23,42,.15)]">
          {/* Shine */}
          <div className="pointer-events-none absolute -left-[70%] top-0 h-full w-[45%] rotate-[18deg] bg-gradient-to-r from-transparent via-blue-100/50 to-transparent animate-[pulse_3s_ease-in-out_infinite]" />

          {/* Card header */}
          <div className="relative flex items-center justify-between">
            <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.12em] text-[#1455d9]">
              Featured Course
            </span>

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-[11px] text-emerald-600">
              ✓
            </span>
          </div>

          {/* Graduation cap */}
          <div className="relative mx-auto mt-5 flex h-[90px] w-[90px] items-center justify-center rounded-full bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="absolute inset-3 rounded-full border border-blue-100" />

            <span className="relative text-[42px] animate-bounce">
              🎓
            </span>
          </div>

          <div className="relative mt-5 text-center">
            <p className="m-0 text-[8px] font-bold uppercase tracking-[0.18em] text-gray-400">
              Course Discovery
            </p>

            <h3 className="mt-2 m-0 text-[19px] font-bold tracking-[-0.03em] text-[#101828]">
              Digital Business Program
            </h3>

            <p className="mt-2 text-[10px] leading-5 text-gray-500">
              Discover the right program, explore the experience and take the
              next step.
            </p>
          </div>

          {/* Progress */}
          <div className="relative mt-5">
            <div className="flex items-center justify-between">
              <span className="text-[8px] font-bold uppercase tracking-[0.12em] text-gray-400">
                Journey Progress
              </span>

              <span className="text-[9px] font-bold text-[#1455d9]">
                82%
              </span>
            </div>

            <div className="mt-2 h-2 overflow-hidden rounded-full bg-blue-50">
              <div
                className="h-full w-[82%] rounded-full bg-[#1455d9] transition-all duration-[1800ms] ease-out"
              />
            </div>
          </div>

          {/* CTA */}
          <div className="relative mt-4 flex items-center justify-between rounded-xl bg-[#073b91] px-3 py-2.5 text-white">
            <span className="text-[9px] font-medium">
              Explore program
            </span>

            <span className="text-[11px] font-bold">
              →
            </span>
          </div>
        </div>
      </div>

      {/* Small status badge */}
      <div className="absolute bottom-[2%] left-1/2 z-30 -translate-x-1/2">
        <div className="flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 shadow-[0_10px_30px_rgba(15,23,42,.08)]">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />

          <span className="text-[8px] font-bold uppercase tracking-[0.12em] text-gray-500">
            Student Journey Active
          </span>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   STUDENT ACQUISITION BAR CHART
========================================================= */

function StudentAcquisitionChart() {
  const data = [
    {
      name: "Course Discovery",
      value: 100,
      number: "01",
    },
    {
      name: "Website Visits",
      value: 78,
      number: "02",
    },
    {
      name: "Applications",
      value: 52,
      number: "03",
    },
    {
      name: "Enrolments",
      value: 31,
      number: "04",
    },
  ];

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-gray-200 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,.06)] sm:p-7">
      {/* Glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-100/70 blur-3xl" />

      <div className="relative">
        {/* Header */}
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="m-0 text-[9px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
              Industry Performance
            </p>

            <h3 className="mt-2 m-0 text-[20px] font-bold tracking-[-0.03em] text-[#101828] sm:text-[23px]">
              Student Acquisition
            </h3>

            <p className="mt-2 max-w-[520px] text-[12px] leading-6 text-gray-500 sm:text-[13px]">
              Illustrative view of how prospective students can move from
              course discovery through website engagement, application and
              enrolment.
            </p>
          </div>

          <span className="hidden shrink-0 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.12em] text-[#1455d9] sm:block">
            Illustrative
          </span>
        </div>

        {/* Chart */}
        <div className="mt-8 space-y-6">
          {data.map((item, index) => (
            <div key={item.name} className="group">
              <div className="mb-2 flex items-center justify-between gap-4">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f1f5ff] text-[8px] font-bold text-[#1455d9]">
                    {item.number}
                  </span>

                  <span className="truncate text-[12px] font-bold text-[#101828] sm:text-[13px]">
                    {item.name}
                  </span>
                </div>

                <span className="shrink-0 text-[12px] font-bold text-[#1455d9]">
                  {item.value}
                </span>
              </div>

              <div className="relative h-[30px] overflow-hidden rounded-xl bg-[#f1f5fb]">
                {/* Background grid */}
                <div className="pointer-events-none absolute inset-0 flex justify-between px-3">
                  <span className="h-full border-l border-dashed border-gray-200" />
                  <span className="h-full border-l border-dashed border-gray-200" />
                  <span className="h-full border-l border-dashed border-gray-200" />
                  <span className="h-full border-l border-dashed border-gray-200" />
                  <span className="h-full border-l border-dashed border-gray-200" />
                </div>

                {/* Bar */}
                <div
                  className="relative h-full rounded-xl bg-[#1455d9] transition-all duration-[1200ms] ease-out group-hover:bg-[#073b91]"
                  style={{
                    width: `${item.value}%`,
                    transitionDelay: `${index * 120}ms`,
                  }}
                >
                  <div className="absolute right-2 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-white/80 animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Funnel labels */}
        <div className="mt-7 grid grid-cols-4 gap-2">
          {[
            "Discover",
            "Visit",
            "Apply",
            "Enrol",
          ].map((label, index) => (
            <div
              key={label}
              className="rounded-xl bg-[#f8faff] px-2 py-2.5 text-center"
            >
              <span className="block text-[8px] font-bold text-[#1455d9]">
                {index + 1}
              </span>

              <span className="mt-1 block text-[8px] font-medium text-gray-400">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-6 rounded-[16px] border border-blue-100 bg-[#f7faff] p-4">
          <div className="flex gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#073b91] text-[10px] font-bold text-white">
              i
            </span>

            <p className="m-0 text-[10px] leading-5 text-gray-500 sm:text-[11px] sm:leading-6">
              These values are illustrative examples for the page design and
              are not measured Akkurate client results. Replace them with
              verified business data when available.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   CUSTOMER JOURNEY
========================================================= */

function EducationCustomerJourney() {
  const stages = [
    {
      number: "01",
      title: "Discover",
      description: "Course searches, social and paid visibility.",
    },
    {
      number: "02",
      title: "Compare",
      description: "Programs, courses and provider evaluation.",
    },
    {
      number: "03",
      title: "Explore",
      description: "Website pages, content and course details.",
    },
    {
      number: "04",
      title: "Apply",
      description: "Clear application and enquiry next step.",
    },
    {
      number: "05",
      title: "Enrol",
      description: "Qualified student opportunity.",
    },
  ];

  return (
    <div className="relative mt-10">
      {/* Desktop connector */}
      <div className="pointer-events-none absolute left-[8%] right-[8%] top-[42px] hidden h-px bg-blue-100 lg:block" />

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
        {stages.map((stage, index) => (
          <div
            key={stage.number}
            data-animate
            className="translate-y-6 rounded-[20px] border border-gray-200 bg-white p-5 opacity-0 shadow-sm transition-all duration-700 hover:-translate-y-2 hover:border-blue-100 hover:shadow-[0_18px_45px_rgba(15,23,42,.08)]"
            style={{
              transitionDelay: `${index * 100}ms`,
            }}
          >
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-bold tracking-[0.16em] text-[#1455d9]">
                {stage.number}
              </span>

              <span className="h-2 w-2 rounded-full bg-[#1455d9] animate-pulse" />
            </div>

            <h3 className="mt-6 m-0 text-[16px] font-bold text-[#101828]">
              {stage.title}
            </h3>

            <p className="mt-2 m-0 text-[11px] leading-5 text-gray-500">
              {stage.description}
            </p>

            {index < stages.length - 1 && (
              <span className="mt-4 hidden text-[12px] font-bold text-blue-300 lg:block">
                Next →
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function Education() {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    document.title =
      "Digital Marketing for Education | SEO, Ads & Lead Generation | Akkurate";

    const description =
      "Grow education businesses with industry-focused SEO, content, paid media, websites and conversion strategies from Akkurate Digital Solutions.";

    let meta = document.querySelector('meta[name="description"]');

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.setAttribute("content", description);
  }, []);

  return (
    <>
      <ScrollAnimations />

      <div className="w-full overflow-hidden bg-white text-[#101828]">
        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="relative overflow-hidden bg-[#f7faff] px-5 py-12 sm:px-8 sm:py-16 lg:px-14 lg:py-10">
          {/* Background glow */}
          <div className="pointer-events-none absolute -right-40 -top-40 h-[430px] w-[430px] rounded-full bg-blue-100/60 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[350px] w-[350px] rounded-full bg-indigo-100/50 blur-3xl" />

          <div className="relative mx-auto w-full max-w-[1600px] px-2 sm:px-4 lg:px-8 xl:px-10">
            {/* Breadcrumb */}
            <div className="mb-7 flex flex-wrap items-center gap-2 text-[10px] font-medium text-gray-500 sm:text-[11px]">
              <Link
                to="/"
                className="transition hover:text-[#1455d9]"
              >
                Home
              </Link>

              <span>/</span>

              <span>Industries</span>

              <span>/</span>

              <span className="text-[#1455d9]">
                Education
              </span>
            </div>

            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-10">
              {/* LEFT */}
              <div
                data-animate
                className="translate-x-[-32px] opacity-0 transition-all duration-700"
              >
                <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1455d9] sm:text-[11px]">
                  Education Digital Marketing
                </p>

                <h1 className="mt-4 m-0 max-w-[720px] text-[35px] font-bold leading-[1.05] tracking-[-0.045em] text-[#101828] sm:text-[45px] lg:text-[30px]">
                  Digital Marketing for Education Businesses That Need Better
                  Visibility, Trust &amp; Student Enquiries
                </h1>

                <p className="mt-6 max-w-[650px] text-[14px] leading-7 text-gray-600 sm:text-[16px] sm:leading-8">
                  Build a digital journey around how students and parents
                  discover courses, compare options, explore websites, apply
                  and finally enrol.
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center rounded-full bg-[#073b91] px-6 py-3.5 text-[13px] font-bold text-white shadow-[0_10px_30px_rgba(7,59,145,.16)] transition duration-300 hover:-translate-y-1 hover:bg-[#052f75]"
                  >
                    Build My Education Growth Strategy

                    <span className="ml-2">
                      →
                    </span>
                  </Link>

                  <span className="text-[10px] font-medium text-gray-400">
                    Courses • Applications • Enrolments
                  </span>
                </div>
              </div>

              {/* RIGHT — NEW COURSE JOURNEY */}
              <div
                data-animate
                className="translate-x-8 opacity-0 transition-all duration-700"
              >
                <EducationHeroVisual />
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            BUSINESS PROBLEM
        ===================================================== */}

        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-10">
          <div className="mx-auto grid w-full max-w-[1400px] gap-10 px-2 sm:px-4 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 lg:px-8 xl:px-10">
            <div
              data-animate
              className="-translate-x-8 opacity-0 transition-all duration-700"
            >
              <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
                The Business Problem
              </p>

              <h2 className="mt-4 m-0 text-[30px] font-bold leading-tight tracking-[-0.03em] sm:text-[30px]">
                Why Education Marketing Needs a Specialized Approach
              </h2>
            </div>

            <div
              data-animate
              className="translate-x-8 opacity-0 transition-all duration-700"
            >
              <p className="m-0 text-[14px] leading-7 text-gray-600 sm:text-[16px] sm:leading-8">
                A generic digital marketing package rarely reflects the way
                students and parents search, compare and decide. Education
                websites need to explain courses clearly, answer relevant
                questions, demonstrate credibility and connect discovery to a
                clear application or enquiry action.
              </p>

              <p className="mt-5 text-[14px] leading-7 text-gray-600 sm:text-[16px] sm:leading-8">
                Akkurate maps the student journey first and then selects the
                right mix of SEO, AEO, GEO, paid media, website, content and
                branding services.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            PERFORMANCE
        ===================================================== */}

        <section className="bg-[#f7faff] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-10">
          <div className="mx-auto w-full max-w-[1400px] px-2 sm:px-4 lg:px-8 xl:px-10">
            <div className="grid items-center gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:gap-16">
              {/* LEFT */}
              <div
                data-animate
                className="-translate-x-8 opacity-0 transition-all duration-700"
              >
                <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
                  Industry Performance
                </p>

                <h2 className="mt-4 m-0 text-[30px] font-bold leading-tight tracking-[-0.03em] sm:text-[30px]">
                  Student Acquisition Across the Education Journey
                </h2>

                <p className="mt-5 max-w-[480px] text-[14px] leading-7 text-gray-600 sm:text-[15px] sm:leading-8">
                  A strong education strategy should connect course discovery,
                  website engagement, applications and enrolments instead of
                  treating each touchpoint separately.
                </p>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  <div className="rounded-[18px] border border-blue-100 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:shadow-md">
                    <span className="text-[21px]">
                      🎓
                    </span>

                    <p className="mt-3 m-0 text-[12px] font-bold text-[#101828]">
                      Course Discovery
                    </p>

                    <p className="mt-1 m-0 text-[10px] leading-5 text-gray-400">
                      Get discovered when students search.
                    </p>
                  </div>

                  <div className="rounded-[18px] border border-blue-100 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:shadow-md">
                    <span className="text-[21px]">
                      ↗
                    </span>

                    <p className="mt-3 m-0 text-[12px] font-bold text-[#101828]">
                      Student Action
                    </p>

                    <p className="mt-1 m-0 text-[10px] leading-5 text-gray-400">
                      Move interest toward application.
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div
                data-animate
                className="translate-x-8 opacity-0 transition-all duration-700"
              >
                <StudentAcquisitionChart />
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            DIGITAL OPPORTUNITIES
        ===================================================== */}

        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-10">
          <div className="mx-auto w-full max-w-[1500px] px-2 sm:px-4 lg:px-8 xl:px-10">
            <div
              data-animate
              className="translate-y-6 text-center opacity-0 transition-all duration-700"
            >
              <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
                Digital Opportunities
              </p>

              <h2 className="mt-3 m-0 text-[30px] font-bold leading-tight tracking-[-0.03em] sm:text-[38px]">
                Key Digital Opportunities for Education
              </h2>

              <p className="mx-auto mt-4 max-w-[720px] text-[13px] leading-7 text-gray-500">
                Build the digital system around how students and parents
                discover, evaluate and choose an education provider.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {opportunities.map((item, index) => (
                <article
                  key={item.number}
                  data-animate
                  className="group translate-y-6 overflow-hidden rounded-[22px] border border-gray-200 bg-white p-6 opacity-0 shadow-[0_8px_30px_rgba(15,23,42,.04)] transition-all duration-700 hover:-translate-y-2 hover:border-blue-100 hover:shadow-[0_22px_55px_rgba(15,23,42,.09)] sm:p-7"
                  style={{
                    transitionDelay: `${index * 90}ms`,
                  }}
                >
                  <div className="flex items-start justify-between">
                    <span className="text-[11px] font-bold tracking-[0.15em] text-[#1455d9]">
                      {item.number}
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-blue-50 text-[17px] text-[#1455d9] transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                      {item.icon}
                    </div>
                  </div>

                  <h3 className="mt-7 m-0 text-[18px] font-bold leading-snug text-[#101828] sm:text-[20px]">
                    {item.title}
                  </h3>

                  <p className="mt-3 m-0 text-[13px] leading-6 text-gray-500 sm:text-[14px] sm:leading-7">
                    {item.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
                    <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400">
                      Strategic Opportunity
                    </span>

                    <span className="text-[18px] text-gray-300 transition duration-300 group-hover:translate-x-1 group-hover:text-[#1455d9]">
                      →
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            STUDENT JOURNEY
        ===================================================== */}

        <section className="bg-[#f7faff] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-10">
          <div className="mx-auto w-full max-w-[1400px] px-2 sm:px-4 lg:px-8 xl:px-10">
            <div
              data-animate
              className="translate-y-6 text-center opacity-0 transition-all duration-700"
            >
              <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
                The Student Journey
              </p>

              <h2 className="mt-3 m-0 text-[30px] font-bold leading-tight tracking-[-0.03em] sm:text-[38px]">
                Turn Discovery Into Student Action
              </h2>

              <p className="mx-auto mt-4 max-w-[720px] text-[13px] leading-7 text-gray-500">
                Every channel should have a role in moving the right student
                or parent from first discovery to a meaningful application or
                enrolment.
              </p>
            </div>

            <EducationCustomerJourney />
          </div>
        </section>

        {/* =====================================================
            STRATEGY
        ===================================================== */}

        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-10">
          <div className="mx-auto grid w-full max-w-[1400px] gap-10 px-2 sm:px-4 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16 lg:px-8 xl:px-10">
            <div
              data-animate
              className="-translate-x-8 opacity-0 transition-all duration-700"
            >
              <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1455d9]">
                Our Approach
              </p>

              <h2 className="mt-4 m-0 text-[30px] font-bold leading-tight tracking-[-0.03em] sm:text-[38px]">
                Recommended Education Strategy
              </h2>

              <p className="mt-5 max-w-[470px] text-[14px] leading-7 text-gray-600 sm:text-[15px]">
                A structured approach that connects audience research,
                discovery, content, student trust, enquiry and measurement.
              </p>

              <div className="mt-7 rounded-[18px] border border-blue-100 bg-[#f7faff] p-5">
                <p className="m-0 text-[9px] font-bold uppercase tracking-[0.16em] text-[#1455d9]">
                  Strategy Principle
                </p>

                <p className="mt-2 m-0 text-[13px] font-bold leading-6 text-[#101828]">
                  Start with the student journey. Then choose the channels.
                </p>
              </div>
            </div>

            <div
              data-animate
              className="translate-x-8 space-y-3 opacity-0 transition-all duration-700"
            >
              {strategy.map((item, index) => (
                <div
                  key={item.number}
                  className="group flex gap-5 rounded-[18px] border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-md sm:p-6"
                  style={{
                    transitionDelay: `${index * 80}ms`,
                  }}
                >
                  <span className="shrink-0 pt-0.5 text-[11px] font-bold tracking-[0.14em] text-[#1455d9]">
                    {item.number}
                  </span>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="m-0 text-[15px] font-bold text-[#101828] sm:text-[17px]">
                        {item.title}
                      </h3>

                      <span className="text-gray-300 transition group-hover:translate-x-1 group-hover:text-[#1455d9]">
                        →
                      </span>
                    </div>

                    <p className="mt-2 m-0 text-[13px] leading-6 text-gray-600 sm:text-[14px] sm:leading-7">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            WHY AKKURATE
        ===================================================== */}

        <section className="relative overflow-hidden bg-[#101828] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-10">
          <div className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[360px] w-[360px] rounded-full bg-indigo-500/10 blur-3xl" />

          <div className="relative mx-auto grid w-full max-w-[1400px] gap-10 px-2 sm:px-4 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-16 lg:px-8 xl:px-10">
            <div
              data-animate
              className="-translate-x-8 opacity-0 transition-all duration-700"
            >
              <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-300">
                Why Choose Akkurate
              </p>

              <h2 className="mt-4 m-0 text-[30px] font-bold leading-tight tracking-[-0.03em] text-white sm:text-[38px]">
                Integrated Digital Growth for Education
              </h2>

              <p className="mt-5 max-w-[500px] text-[14px] leading-7 text-gray-400">
                Connect strategy, search, content, paid media, web and creative
                into one student-journey-first system.
              </p>
            </div>

            <div
              data-animate
              className="translate-x-8 grid gap-3 opacity-0 transition-all duration-700 sm:grid-cols-2"
            >
              {whyChoose.map((item, index) => (
                <div
                  key={item}
                  className="group flex gap-3 rounded-[16px] border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]"
                  style={{
                    transitionDelay: `${index * 80}ms`,
                  }}
                >
                  <span className="mt-0.5 text-[14px] text-blue-300">
                    ✓
                  </span>

                  <span className="text-[13px] leading-6 text-gray-300 sm:text-[14px]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            FAQ
        ===================================================== */}

        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-10">
          <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-10 px-2 sm:px-4 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 lg:px-8 xl:px-10">
            <div
              data-animate
              className="-translate-x-8 opacity-0 transition-all duration-700 lg:sticky lg:top-28 lg:self-start"
            >
              <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1455d9] sm:text-[11px]">
                Frequently Asked Questions
              </p>

              <h2 className="mt-4 m-0 max-w-[450px] text-[30px] font-bold leading-tight tracking-[-0.03em] sm:text-[38px]">
                Education Marketing FAQs
              </h2>

              <p className="mt-5 max-w-[430px] text-[14px] leading-7 text-gray-600 sm:text-[15px]">
                Clear answers to common questions about education marketing,
                channels, websites and performance.
              </p>
            </div>

            <div
              data-animate
              className="translate-x-8 space-y-3 opacity-0 transition-all duration-700"
            >
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    key={faq.question}
                    className="overflow-hidden rounded-[16px] border border-gray-200 bg-white transition-shadow duration-300 hover:shadow-[0_10px_35px_rgba(15,23,42,.05)]"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenFaq(isOpen ? null : index)
                      }
                      className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                    >
                      <span className="pr-4 text-[14px] font-bold leading-6 text-[#101828] sm:text-[15px]">
                        {faq.question}
                      </span>

                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-blue-100 text-[20px] text-[#1455d9] transition-all duration-300 ${
                          isOpen
                            ? "rotate-45 bg-[#073b91] text-white"
                            : "bg-white"
                        }`}
                      >
                        +
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="m-0 px-5 pb-5 text-[13px] leading-6 text-gray-600 sm:px-6 sm:text-[14px] sm:leading-7">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="relative overflow-hidden bg-[#073b91] px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-10">
          <div className="pointer-events-none absolute -right-32 -top-32 h-[320px] w-[320px] rounded-full bg-white/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-32 -left-32 h-[280px] w-[280px] rounded-full bg-blue-300/10 blur-3xl" />

          <div
            data-animate
            className="relative mx-auto max-w-[1050px] translate-y-6 px-2 text-center opacity-0 transition-all duration-700 sm:px-6 lg:px-8"
          >
            <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-200">
              Ready to Grow?
            </p>

            <h2 className="mt-3 m-0 text-[30px] font-bold leading-tight tracking-[-0.03em] text-white sm:text-[38px] lg:text-[40px]">
              Ready to grow your education business online?
            </h2>

            <p className="mx-auto mt-4 max-w-[820px] text-[14px] leading-7 text-blue-100 sm:text-[15px]">
              Tell Akkurate what you offer, who you want to reach and what
              outcome matters most.
            </p>

            <Link
              to="/contact"
              className="mt-6 inline-flex items-center rounded-full bg-white px-7 py-3.5 text-[13px] font-bold text-[#073b91] transition duration-300 hover:-translate-y-1 hover:bg-gray-100"
            >
              Build My Education Growth Strategy

              <span className="ml-2">
                →
              </span>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
import { useEffect } from "react";

const pageTitle =
  "DR Multi Speciality Hospital Case Study | Akkurate Digital Solutions";

const pageDescription =
  "How Akkurate Digital Solutions improved local SEO, organic visibility, social media reach and patient enquiries for DR Multi Speciality Hospital and Sri Ambal Health Care.";

export default function DRMultiSpecialityHospital() {
  useEffect(() => {
    document.title = pageTitle;

    let meta = document.querySelector('meta[name="description"]');

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.setAttribute("content", pageDescription);
  }, []);

  const challenges = [
    {
      number: "01",
      title: "Highly Competitive Healthcare Industry",
      description:
        "Both brands were competing against established hospital groups already dominating local search results.",
    },
    {
      number: "02",
      title: "Need for Local Keyword Dominance",
      description:
        "Patients search locally and specifically by specialty, symptom and locality, but the brands were not capturing enough of that demand.",
    },
    {
      number: "03",
      title: "Low Organic Website Traffic",
      description:
        "Search visibility was not translating into a meaningful and sustained stream of website visitors and potential patient enquiries.",
    },
    {
      number: "04",
      title: "Weak Social Media Presence",
      description:
        "Instagram and YouTube had limited reach and engagement despite the strong opportunity for healthcare education and short-form video.",
    },
    {
      number: "05",
      title: "Building Local Brand Trust",
      description:
        "Healthcare trust is built repeatedly and visibly, requiring consistent search presence, useful content and social proof.",
    },
  ];

  const solutions = [
    {
      number: "01",
      title: "Local SEO Foundation",
      description:
        "Optimized Google Business Profiles, improved local citations and mapped keywords around the way patients actually search for healthcare services.",
    },
    {
      number: "02",
      title: "On-Page & Technical SEO",
      description:
        "Resolved technical issues and developed healthcare-specific content around specialties, doctors, treatments and procedures.",
    },
    {
      number: "03",
      title: "Social & Video Growth",
      description:
        "Built a consistent content calendar across Instagram and YouTube, focusing on Reels and short-form video to increase reach.",
    },
    {
      number: "04",
      title: "Authority & Sustained Growth",
      description:
        "Combined ongoing authority building and community engagement with the SEO foundation to compound rankings and social visibility.",
    },
  ];

  const scope = [
    "Local SEO & Google Business Profile",
    "Technical & On-Page SEO",
    "Healthcare Content Strategy",
    "Reels & Video Marketing",
    "Instagram & YouTube Growth",
    "Community Engagement",
  ];

  const results = [
    {
      number: "25",
      label: "Keywords ranked in top positions",
    },
    {
      number: "40+",
      label: "Keywords on first page",
    },
    {
      number: "10M+",
      label: "Video reach generated",
    },
  ];

  const resultPoints = [
    <>
      <strong className="text-[#101a2e]">
        10,000+ overall organic visitors
      </strong>{" "}
      generated, with{" "}
      <strong className="text-[#101a2e]">
        500+ monthly organic visitors
      </strong>{" "}
      consistently.
    </>,
    <>
      <strong className="text-[#101a2e]">
        2,000+ organic Instagram followers
      </strong>{" "}
      and{" "}
      <strong className="text-[#101a2e]">
        8,000+ YouTube subscribers
      </strong>{" "}
      built through consistent content.
    </>,
    <>
      Significant increase in patient enquiries, directly connected to
      improved local visibility.
    </>,
    <>
      Stronger and more consistent healthcare brand presence across both SEO
      and social media.
    </>,
  ];

  return (
    <main className="min-h-screen bg-white text-[#101a2e]">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#031a46] via-[#062b72] to-[#1455d9] text-white">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full border border-white/10 shadow-[0_0_0_80px_rgba(255,255,255,0.02),0_0_0_160px_rgba(255,255,255,0.01)]" />

        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#1455d9]/30 blur-3xl" />

        <div className="relative mx-auto grid w-full max-w-[1180px] grid-cols-1 items-center gap-12 px-4 pb-0 pt-14 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:gap-16 lg:px-8 lg:pt-20">
          {/* LEFT */}
          <div className="relative z-10">
            <div className="mb-6 flex flex-wrap items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-white/60">
              <span className="h-px w-7 bg-[#5da7ff]" />

              <a
                href="/"
                className="transition-colors duration-300 hover:text-white"
              >
                Home
              </a>

              <span>/</span>

              <a
                href="/our-work"
                className="transition-colors duration-300 hover:text-white"
              >
                Case Studies
              </a>

              <span>/</span>

              <span>DR Multi Speciality Hospital</span>
            </div>

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white/70 backdrop-blur-md">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#5da7ff]" />
              Healthcare · SEO · Social Media
            </div>

            <h1 className="max-w-[720px] text-4xl font-bold leading-[1.03] tracking-[-0.045em] sm:text-5xl lg:text-[45px]">
              Turning local search into
              <span className="block text-[#5da7ff]">
                patient enquiries
              </span>
            </h1>

            <p className="mt-6 max-w-[650px] text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              1.5+ years of SEO and social media management for DR Multi
              Speciality Hospital and Sri Ambal Health Care — two healthcare
              brands competing in a crowded, trust-sensitive local market.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#results"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-[#062b72] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                View Results
                <span className="transition-transform duration-300 group-hover:translate-y-1">
                  ↓
                </span>
              </a>

              <a
                href="/register"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
              >
                Start a Project
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative min-h-[330px] sm:min-h-[400px] lg:min-h-[470px]">
            <div className="absolute left-0 top-5 z-20 min-w-[125px] animate-bounce rounded-2xl border border-[#062b72]/10 bg-white/95 p-4 text-[#062b72] shadow-2xl [animation-duration:4s]">
              <div className="text-2xl font-bold leading-none text-[#1455d9]">
                10M+
              </div>

              <div className="mt-1 text-[10px] font-medium leading-4 text-[#59677f]">
                Video reach
              </div>
            </div>

            <div className="group absolute inset-0 overflow-hidden rounded-[28px] border border-white/20 bg-white/10 shadow-[0_30px_90px_rgba(3,26,70,0.35)] transition-transform duration-700 lg:rotate-1 hover:rotate-0">
              <img
                src="/assets/images/ourwork/dr.png"
                alt="DR Multi Speciality Hospital healthcare case study"
                className="h-full w-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#031a46]/80 via-[#031a46]/10 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                <div>
                  <div className="text-lg font-bold text-white">
                    DR Multi Speciality Hospital
                  </div>

                  <div className="mt-1 text-[9px] font-medium uppercase tracking-[0.15em] text-white/60">
                    Healthcare · SEO & Social Media
                  </div>
                </div>

                <div className="text-[9px] font-medium uppercase tracking-[0.15em] text-white/60">
                  Case Study
                </div>
              </div>
            </div>

            <div className="absolute -bottom-2 right-0 z-20 min-w-[125px] animate-bounce rounded-2xl border border-[#062b72]/10 bg-white/95 p-4 text-[#062b72] shadow-2xl [animation-delay:1.5s] [animation-duration:4.5s]">
              <div className="text-2xl font-bold leading-none text-[#1455d9]">
                40+
              </div>

              <div className="mt-1 text-[10px] font-medium leading-4 text-[#59677f]">
                Page-one keywords
              </div>
            </div>
          </div>
        </div>

        {/* META BAR */}
        <div className="relative z-30 mt-5 border-t border-white/10 bg-[#031234]/40 backdrop-blur-md">
          <div className="mx-auto grid w-full max-w-[1180px] grid-cols-2 lg:grid-cols-4">
            {[
              ["Category", "SEO & Social Media"],
              ["Industry", "Healthcare"],
              ["Engagement", "1.5+ years, ongoing"],
              ["Coverage", "Local SEO + Social"],
            ].map(([label, value], index) => (
              <div
                key={label}
                className={`min-h-[82px] border-white/10 px-5 py-5 ${
                  index !== 1 ? "border-r" : "lg:border-r"
                } ${index > 1 ? "border-t lg:border-t-0" : ""}`}
              >
                <div className="text-[9px] uppercase tracking-[0.12em] text-white/40">
                  {label}
                </div>

                <div className="mt-1.5 text-xs font-semibold text-white">
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          ABOUT CLIENT
      ====================================================== */}
      <section className="border-b border-[#062b72]/10 py-16 sm:py-20 lg:py-16">
        <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16 lg:px-8">
          <div>
            <div className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#1455d9]">
              <span className="h-px w-7 bg-[#1455d9]" />
              About the Client
            </div>

            <h2 className="max-w-[700px] text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-3xl">
              Two healthcare brands, <span className="inline-block text-[#1455d9]">
                one trust problem
              </span>
              
            </h2>

            <p className="mt-5 max-w-[720px] text-[15px] leading-8 text-[#59677f]">
              DR Multi Speciality Hospital and Sri Ambal Health Care operate
              in a category where patients do not just search for a provider —
              they search for a provider they can trust.
            </p>

            <p className="mt-5 max-w-[720px] text-[15px] leading-8 text-[#59677f]">
              That makes healthcare one of the hardest SEO categories to win:
              rankings alone do not convert, credibility does.
            </p>

            <p className="mt-5 max-w-[720px] text-[15px] leading-8 text-[#59677f]">
              For more than 1.5 years, Akkurate Digital Solutions has managed
              SEO and social media marketing for both brands, treating search
              visibility and social proof as one connected system.
            </p>
          </div>

          <div className="h-fit rounded-[22px] border border-[#062b72]/10 bg-gradient-to-br from-[#f8fbff] to-[#eef4ff] p-6 shadow-[0_8px_30px_rgba(7,35,82,0.06)] lg:sticky lg:top-24">
            <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.14em] text-[#59677f]">
              Project Scope
            </div>

            {scope.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 border-b border-[#062b72]/10 py-3 text-sm text-[#101a2e] last:border-0"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#062b72] text-[10px] font-bold text-white">
                  ✓
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CHALLENGES
      ====================================================== */}
      <section className="relative overflow-hidden border-b border-[#062b72]/10 bg-[#f8faff] py-16 sm:py-20 lg:py-16">
        <div className="pointer-events-none absolute -left-32 top-20 h-64 w-64 rounded-full bg-[#1455d9]/5 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-[#1455d9]/5 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-[760px] text-center">
            <div className="mb-4 flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#1455d9]">
              <span className="h-px w-8 bg-[#1455d9]" />
              Client&apos;s Challenges
              <span className="h-px w-8 bg-[#1455d9]" />
            </div>

            <h2 className="text-3xl font-bold leading-[1.12] tracking-[-0.04em] text-[#101a2e] sm:text-4xl lg:text-[32px]">
              Competing for trust, <span className="inline-block text-[#1455d9]">
                not just clicks
              </span>
              
            </h2>

            <p className="mx-auto mt-5 max-w-[650px] text-sm leading-7 text-[#59677f] sm:text-base">
              Before growth could happen, we first had to understand the
              search visibility, traffic and trust challenges affecting both
              healthcare brands.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {challenges.map((item, index) => (
              <div
                key={item.number}
                className={`group relative overflow-hidden rounded-[24px] border border-[#062b72]/10 bg-white p-6 shadow-[0_8px_30px_rgba(7,35,82,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-[#1455d9]/25 hover:shadow-[0_22px_55px_rgba(7,35,82,0.10)] ${
                  index === 3 ? "lg:col-start-1" : ""
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#1455d9]/10 text-sm font-bold text-[#1455d9] transition-all duration-500 group-hover:bg-[#1455d9] group-hover:text-white">
                    {item.number}
                  </div>

                  <div className="text-4xl font-bold tracking-[-0.05em] text-[#062b72]/[0.06]">
                    0{index + 1}
                  </div>
                </div>

                <div className="mt-7">
                  <h3 className="text-lg font-bold leading-snug tracking-[-0.02em] text-[#101a2e] transition-colors duration-300 group-hover:text-[#1455d9]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#59677f]">
                    {item.description}
                  </p>
                </div>

                <div className="mt-7 flex items-center gap-2">
                  <span className="h-px w-7 bg-[#1455d9]/30 transition-all duration-500 group-hover:w-14 group-hover:bg-[#1455d9]" />
                  <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#59677f]/60">
                    Challenge
                  </span>
                </div>

                <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-[#1455d9]/5 blur-2xl transition-all duration-500 group-hover:bg-[#1455d9]/10" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SOLUTION
      ====================================================== */}
      <section className="border-b border-[#062b72]/10 py-16 sm:py-20 lg:py-16">
        <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-[760px]">
            <div className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#1455d9]">
              <span className="h-px w-7 bg-[#1455d9]" />
              Our Solution
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl">
              SEO and social,
              <span className="text-[#1455d9]">
                {" "}built as one system
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {solutions.map((item) => (
              <div
                key={item.number}
                className="group rounded-[20px] border border-[#062b72]/10 bg-[#f6f8fc] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_12px_35px_rgba(7,35,82,0.08)]"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#062b72] text-xs font-bold text-white transition-transform duration-300 group-hover:scale-110">
                  {item.number}
                </div>

                <h3 className="text-base font-bold text-[#101a2e]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#59677f]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          RESULTS
      ====================================================== */}
      <section
        id="results"
        className="border-b border-[#062b72]/10 bg-[#f8faff] py-16 sm:py-20 lg:py-10"
      >
        <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-[760px]">
            <div className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#1455d9]">
              <span className="h-px w-7 bg-[#1455d9]" />
              Results
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-3xl">
              SEO and social, <span className="inline-block text-[#1455d9]">
                both moving together
              </span>
              
            </h2>
          </div>

          <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {results.map((item) => (
              <div
                key={item.number}
                className="group relative overflow-hidden rounded-[20px] bg-gradient-to-br from-[#062b72] to-[#1455d9] p-7 text-white shadow-[0_18px_55px_rgba(7,35,82,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(3,26,70,0.2)]"
              >
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-white/10 transition-transform duration-700 group-hover:scale-150" />

                <div className="relative z-10 text-4xl font-bold leading-none">
                  {item.number}
                </div>

                <div className="relative z-10 mt-2 text-xs leading-5 text-white/70">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          <ul className="space-y-3">
            {resultPoints.map((item, index) => (
              <li
                key={index}
                className="relative pl-7 text-sm leading-7 text-[#59677f]"
              >
                <span className="absolute left-0 top-1 text-base font-bold text-[#1455d9]">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* =====================================================
          GROWTH TRAJECTORY — SAME STYLE AS HAPPYPIQUE
      ====================================================== */}
      <section className="border-b border-[#062b72]/10 py-16 sm:py-20 lg:py-16">
        <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-[760px]">
            <div className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#1455d9]">
              <span className="h-px w-7 bg-[#1455d9]" />
              Growth Trajectory
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-3xl">
              From local visibility to <span className="inline-block text-[#1455d9]">
                stronger patient reach
              </span>
              
            </h2>
          </div>

          <div className="rounded-[22px] border border-[#062b72]/10 bg-white p-5 shadow-[0_8px_30px_rgba(7,35,82,0.06)] sm:p-7">
            <div className="mb-5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#59677f]">
              Illustrative growth trajectory — based on reported engagement
            </div>

            <div className="overflow-hidden rounded-2xl bg-gradient-to-b from-[#f8fbff] to-white">
              <svg
                viewBox="0 0 760 300"
                className="h-auto w-full"
                role="img"
                aria-label="Illustrative growth trajectory for healthcare search and social visibility"
              >
                <defs>
                  <linearGradient
                    id="drAreaGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#1455d9"
                      stopOpacity="0.22"
                    />
                    <stop
                      offset="100%"
                      stopColor="#1455d9"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>

                {/* GRID */}
                <line
                  x1="50"
                  y1="25"
                  x2="50"
                  y2="245"
                  stroke="#002C7D"
                  strokeOpacity="0.16"
                />

                <line
                  x1="50"
                  y1="245"
                  x2="730"
                  y2="245"
                  stroke="#002C7D"
                  strokeOpacity="0.16"
                />

                <line
                  x1="50"
                  y1="190"
                  x2="730"
                  y2="190"
                  stroke="#002C7D"
                  strokeOpacity="0.07"
                  strokeDasharray="4 5"
                />

                <line
                  x1="50"
                  y1="135"
                  x2="730"
                  y2="135"
                  stroke="#002C7D"
                  strokeOpacity="0.07"
                  strokeDasharray="4 5"
                />

                <line
                  x1="50"
                  y1="80"
                  x2="730"
                  y2="80"
                  stroke="#002C7D"
                  strokeOpacity="0.07"
                  strokeDasharray="4 5"
                />

                {/* Y AXIS */}
                <text
                  x="40"
                  y="248"
                  textAnchor="end"
                  fontSize="11"
                  fill="#5b6477"
                >
                  Start
                </text>

                <text
                  x="40"
                  y="138"
                  textAnchor="end"
                  fontSize="11"
                  fill="#5b6477"
                >
                  Growth
                </text>

                <text
                  x="40"
                  y="28"
                  textAnchor="end"
                  fontSize="11"
                  fill="#5b6477"
                >
                  Peak
                </text>

                {/* AREA */}
                <polygon
                  points="50,226 185,210 320,185 455,145 590,92 730,42 730,245 50,245"
                  fill="url(#drAreaGradient)"
                />

                {/* LINE */}
                <polyline
                  points="50,226 185,210 320,185 455,145 590,92 730,42"
                  fill="none"
                  stroke="#002C7D"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* POINTS */}
                <circle
                  cx="50"
                  cy="226"
                  r="5"
                  fill="#002C7D"
                />

                <circle
                  cx="185"
                  cy="210"
                  r="4"
                  fill="#1455d9"
                />

                <circle
                  cx="320"
                  cy="185"
                  r="4"
                  fill="#1455d9"
                />

                <circle
                  cx="455"
                  cy="145"
                  r="4"
                  fill="#1455d9"
                />

                <circle
                  cx="590"
                  cy="92"
                  r="4"
                  fill="#1455d9"
                />

                <circle
                  cx="730"
                  cy="42"
                  r="5"
                  fill="#002C7D"
                />

                {/* X LABELS */}
                <text
                  x="50"
                  y="267"
                  textAnchor="middle"
                  fontSize="11"
                  fill="#11151c"
                >
                  Start
                </text>

                <text
                  x="185"
                  y="267"
                  textAnchor="middle"
                  fontSize="11"
                  fill="#11151c"
                >
                  Phase 1
                </text>

                <text
                  x="320"
                  y="267"
                  textAnchor="middle"
                  fontSize="11"
                  fill="#11151c"
                >
                  Phase 2
                </text>

                <text
                  x="455"
                  y="267"
                  textAnchor="middle"
                  fontSize="11"
                  fill="#11151c"
                >
                  Phase 3
                </text>

                <text
                  x="590"
                  y="267"
                  textAnchor="middle"
                  fontSize="11"
                  fill="#11151c"
                >
                  Phase 4
                </text>

                <text
                  x="730"
                  y="267"
                  textAnchor="middle"
                  fontSize="11"
                  fill="#11151c"
                >
                  Current
                </text>

                {/* VALUE LABELS */}
                <text
                  x="50"
                  y="214"
                  textAnchor="middle"
                  fontSize="11"
                  fontWeight="700"
                  fill="#002C7D"
                >
                  Local
                </text>

                <text
                  x="730"
                  y="31"
                  textAnchor="middle"
                  fontSize="11"
                  fontWeight="700"
                  fill="#002C7D"
                >
                  10M+ reach
                </text>
              </svg>
            </div>

            <div className="mt-5 border-t border-[#062b72]/10 pt-4 text-xs leading-6 text-[#59677f]">
              The graph is a visual representation of the overall growth
              direction reported for the engagement. It is not a month-by-month
              analytics export.
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          GROWTH METRICS
      ====================================================== */}
      <section className="border-b border-[#062b72]/10 bg-[#f8faff] py-16 sm:py-20 lg:py-16">
        <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-[760px]">
            <div className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#1455d9]">
              <span className="h-px w-7 bg-[#1455d9]" />
              Growth At A Glance
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-3xl">
              Key results across <span className="inline-block text-[#1455d9]">
                the engagement
              </span>
              
            </h2>
          </div>

          <div className="rounded-[22px] border border-[#062b72]/10 bg-white p-5 shadow-[0_8px_30px_rgba(7,35,82,0.06)] sm:p-7">
            <div className="space-y-6">
              {[
                ["Keywords on page 1", "40+", "42%"],
                ["Organic visitors", "10,000+", "88%"],
                ["Instagram followers", "2,000+", "28%"],
                ["YouTube subscribers", "8,000+", "65%"],
                ["Video reach", "10M+", "96%"],
              ].map(([label, value, width]) => (
                <div key={label}>
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <span className="text-sm font-medium text-[#101a2e]">
                      {label}
                    </span>

                    <span className="text-sm font-bold text-[#1455d9]">
                      {value}
                    </span>
                  </div>

                  <div className="h-3 overflow-hidden rounded-full bg-[#e9eef7]">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#062b72] to-[#3f8cff] transition-all duration-1000"
                      style={{ width }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 border-t border-[#062b72]/10 pt-5 text-xs leading-6 text-[#59677f]">
              Bar lengths are scaled for visual comparison across metrics, not
              a shared numeric axis. Figures are based on the reported client
              results.
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TESTIMONIAL
      ====================================================== */}
      <section className="py-16 sm:py-20 lg:py-16">
        <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[24px] border border-[#1455d9]/15 bg-gradient-to-br from-[#f0f5ff] to-[#e6efff] p-7 shadow-[0_8px_30px_rgba(7,35,82,0.06)] sm:p-10 lg:p-12">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#1455d9]/10" />

            <div className="relative z-10">
              <div className="mb-4 font-serif text-7xl leading-none text-[#1455d9]">
                &quot;
              </div>

              <blockquote className="max-w-[900px] text-xl font-medium leading-relaxed tracking-[-0.02em] text-[#101a2e] sm:text-2xl lg:text-[29px]">
                The growth in our online visibility has been remarkable. From
                SEO rankings to social media reach, the results have exceeded
                our expectations.
              </blockquote>

              <div className="mt-5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#59677f]">
                — DR Multi Speciality Hospital
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-6 border-t border-[#062b72]/10 pt-5 text-[11px] text-[#59677f]">
            <span>Reading duration: 5 min</span>
            <span>Category: Healthcare SEO & Social</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#031a46] to-[#1455d9] p-7 shadow-[0_18px_55px_rgba(7,35,82,0.1)] sm:p-10 lg:p-12">
            <div className="absolute -right-24 -top-32 h-72 w-72 rounded-full bg-white/10" />

            <div className="relative z-10 flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
              <div>
                <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-white/50">
                  Ready to grow?
                </div>

                <h3 className="max-w-[700px] text-2xl font-bold leading-tight tracking-[-0.035em] text-white sm:text-2xl">
                  Need patients to find you first, <span className="inline-block text-[#72b4ff]">
                    and trust you once they do?
                  </span>
                  
                </h3>
              </div>

              <a
                href="/register"
                className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-[#062b72] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                Book a Strategy Call
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          RELATED CASE STUDIES
      ====================================================== */}
      <section className="border-t border-[#062b72]/10 bg-[#f8faff] py-16 sm:py-20 lg:py-16">
        <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#1455d9]">
              <span className="h-px w-7 bg-[#1455d9]" />
              More Work
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl">
              Discover more case studies
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <a
              href="/our-work/happypique"
              className="group rounded-[20px] border border-[#062b72]/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1455d9]/25 hover:shadow-[0_18px_55px_rgba(7,35,82,0.1)]"
            >
              <span className="mb-4 inline-flex rounded-full border border-[#1455d9]/15 bg-[#1455d9]/5 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.08em] text-[#1455d9]">
                eCommerce · Jewellery · SEO
              </span>

              <h3 className="text-base font-bold text-[#101a2e]">
                Happypique
              </h3>

              <div className="mt-6 text-2xl font-bold text-[#1455d9]">
                400%
              </div>

              <div className="mt-1 text-xs text-[#59677f]">
                Business growth
              </div>

              <div className="mt-5 text-xs font-bold text-[#1455d9] transition-transform duration-300 group-hover:translate-x-1">
                View Case Study →
              </div>
            </a>

            <a
              href="/our-work/alpine-coach-tree"
              className="group rounded-[20px] border border-[#062b72]/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1455d9]/25 hover:shadow-[0_18px_55px_rgba(7,35,82,0.1)]"
            >
              <span className="mb-4 inline-flex rounded-full border border-[#1455d9]/15 bg-[#1455d9]/5 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.08em] text-[#1455d9]">
                Education · Web & LMS
              </span>

              <h3 className="text-base font-bold text-[#101a2e]">
                Alpine Coach Tree
              </h3>

              <div className="mt-6 text-2xl font-bold text-[#1455d9]">
                0→1
              </div>

              <div className="mt-1 text-xs text-[#59677f]">
                Platform built from scratch
              </div>

              <div className="mt-5 text-xs font-bold text-[#1455d9] transition-transform duration-300 group-hover:translate-x-1">
                View Case Study →
              </div>
            </a>

            <a
              href="/our-work"
              className="group rounded-[20px] border border-[#062b72]/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1455d9]/25 hover:shadow-[0_18px_55px_rgba(7,35,82,0.1)]"
            >
              <span className="mb-4 inline-flex rounded-full border border-[#1455d9]/15 bg-[#1455d9]/5 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.08em] text-[#1455d9]">
                All Work
              </span>

              <h3 className="text-base font-bold text-[#101a2e]">
                Browse every case study
              </h3>

              <div className="mt-6 text-2xl font-bold text-[#1455d9]">
                5
              </div>

              <div className="mt-1 text-xs text-[#59677f]">
                Client stories
              </div>

              <div className="mt-5 text-xs font-bold text-[#1455d9] transition-transform duration-300 group-hover:translate-x-1">
                View All Work →
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

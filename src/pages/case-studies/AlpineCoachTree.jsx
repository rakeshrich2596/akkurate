import React, { useEffect } from "react";

const pageTitle =
  "Alpine Coach Tree Case Study | Akkurate Digital Solutions";

const pageDescription =
  "How Akkurate Digital Solutions built Alpine Coach Tree's online learning platform from scratch — website, LMS integration, and SEO-ready architecture.";

const challenges = [
  {
    number: "01",
    title: "No existing website infrastructure.",
    description:
      "There was nothing to redesign or migrate — the platform had to be built entirely from zero.",
  },
  {
    number: "02",
    title: "Needed a professional course showcase.",
    description:
      "Coaching programs needed a platform that reflected their actual quality and structure.",
  },
  {
    number: "03",
    title: "LMS integration for real learning.",
    description:
      "Static pages were not enough — students needed genuine course access and progress tracking.",
  },
  {
    number: "04",
    title: "SEO-friendly architecture.",
    description:
      "The site needed to be discoverable from day one, not retrofitted for search later.",
  },
  {
    number: "05",
    title: "Navigation for two audiences.",
    description:
      "The structure had to work cleanly for both students and administrators.",
  },
];

const solutions = [
  {
    title: "Architecture & information design.",
    description:
      "Mapped course structure, program hierarchy, and navigation paths for both students and administrators before any page was designed.",
  },
  {
    title: "Design & build.",
    description:
      "Designed and developed the full website with mobile responsiveness built in from the start, not retrofitted.",
  },
  {
    title: "LMS integration.",
    description:
      "Connected the learning management system so enrollment, content delivery, and progress tracking worked as one seamless experience.",
  },
  {
    title: "SEO & performance pass.",
    description:
      "Implemented technical and on-page SEO and optimized site speed, so the platform was discoverable from launch day.",
  },
];

const scope = [
  "Website Design & Development",
  "LMS Integration",
  "Course & Program Pages",
  "Mobile Responsive Build",
  "Technical & On-Page SEO",
  "Speed Optimization",
];

const results = [
  {
    value: "0→1",
    label: "Platform built from the ground up",
  },
  {
    value: "100%",
    label: "Mobile responsive across devices",
  },
  {
    value: "SEO",
    label: "Ready architecture for growth",
  },
];

const resultPoints = [
  <>
    Successfully launched a{" "}
    <strong className="text-[#101a2e]">
      fully functional coaching and learning platform
    </strong>
    .
  </>,
  <>
    Delivered a{" "}
    <strong className="text-[#101a2e]">
      seamless LMS experience
    </strong>{" "}
    for students, from enrollment to course access.
  </>,
  <>
    Improved{" "}
    <strong className="text-[#101a2e]">
      website performance and loading speed
    </strong>{" "}
    across all pages.
  </>,
  <>
    Enhanced{" "}
    <strong className="text-[#101a2e]">
      brand credibility and online presence
    </strong>{" "}
    from launch.
  </>,
];

const relatedWork = [
  {
    href: "/our-work/happypique",
    tag: "eCommerce · Jewellery · SEO",
    title: "Happypique",
    value: "400%",
    label: "Business growth",
  },
  {
    href: "/our-work/dr-multi-speciality-hospital",
    tag: "Healthcare · SEO & Social",
    title: "DR Multi Speciality Hospital",
    value: "10M+",
    label: "Video reach generated",
  },
  {
    href: "/our-work",
    tag: "All Work",
    title: "Browse every case study",
    value: "5",
    label: "Client stories",
  },
];

export default function AlpineCoachTree() {
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

  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#101a2e]">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_78%_18%,rgba(77,145,255,.28),transparent_28%),radial-gradient(circle_at_10%_90%,rgba(20,85,217,.25),transparent_34%),linear-gradient(135deg,#031a46_0%,#062b72_54%,#1455d9_100%)] pt-12 text-white sm:pt-16 lg:pt-[76px]">
        <div className="pointer-events-none absolute -right-[220px] -top-[250px] h-[560px] w-[560px] rounded-full border border-white/10 shadow-[0_0_0_80px_rgba(255,255,255,.018),0_0_0_160px_rgba(255,255,255,.012)]" />

        <div className="relative z-10 mx-auto grid w-[min(100%-32px,1180px)] grid-cols-1 items-center gap-12 pb-14 sm:w-[min(100%-48px,1180px)] lg:grid-cols-[minmax(0,1fr)_minmax(420px,.9fr)] lg:gap-[62px] lg:pb-[76px]">
          {/* LEFT */}
          <div className="transition-all duration-700">
            <div className="mb-6 font-mono text-[10.5px] text-white/55">
              <a href="/" className="transition-colors hover:text-white/90">
                Home
              </a>{" "}
              /{" "}
              <a
                href="/our-work"
                className="transition-colors hover:text-white/90"
              >
                Case Studies
              </a>{" "}
              / Alpine Coach Tree
            </div>

            <div className="mb-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-white/70">
              <span className="h-px w-7 bg-current opacity-70" />
              Education · Website Development · LMS
            </div>

            <h1 className="max-w-[700px] text-[40px] font-bold leading-[1.02] tracking-[-0.04em] sm:text-[52px] lg:text-[50px]">
              From no website to a full learning platform
            </h1>

            <p className="mt-5 max-w-[650px] text-[15.5px] leading-7 text-white/70 sm:text-[17px] sm:leading-8">
              Alpine Coach Tree had coaching programs worth teaching and nowhere
              to put them. We built the entire platform — course pages, LMS,
              and SEO foundation — from a blank slate.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#results"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-5 text-[13px] font-bold text-[#062b72] shadow-[0_12px_32px_rgba(0,0,0,.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_17px_42px_rgba(0,0,0,.24)]"
              >
                View Results <span>↓</span>
              </a>

              <a
                href="/register"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/[0.07] px-5 text-[13px] font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                Start a Project <span>↗</span>
              </a>
            </div>
          </div>

          {/* RIGHT HERO IMAGE */}
          <div className="relative min-h-[300px] transition-all duration-700 sm:min-h-[390px] lg:min-h-[450px]">
            <div className="absolute inset-0 overflow-hidden rounded-[28px] border border-white/20 bg-white/[0.08] shadow-[0_30px_90px_rgba(3,26,70,.24)] transition-transform duration-500 lg:left-6 lg:rotate-[1deg] lg:hover:rotate-0 lg:hover:-translate-y-1">
              <img
                src="/assets/images/ourwork/alphine.png"
                alt="Alpine Coach Tree online learning platform case study"
                className="h-full w-full object-cover object-center transition-transform duration-1000 hover:scale-105"
              />

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,26,70,.02),rgba(3,26,70,.62)),linear-gradient(90deg,rgba(3,26,70,.12),transparent_55%)]" />

              <div className="absolute bottom-5 left-5 right-5 z-20 flex items-end justify-between gap-4">
                <div>
                  <div className="text-[17px] font-bold">
                    Alpine Coach Tree
                  </div>

                  <div className="mt-0.5 text-[9px] uppercase tracking-[0.13em] text-white/60">
                    Online Coaching &amp; Learning
                  </div>
                </div>

                <div className="text-[9px] uppercase tracking-[0.13em] text-white/60">
                  Case Study
                </div>
              </div>
            </div>

            {/* FLOATING BADGES */}
            <div className="pointer-events-none absolute inset-0 z-30">
              <div className="absolute left-[-7px] top-6 min-w-[126px] rounded-2xl border border-[#062b72]/10 bg-white/[0.96] px-4 py-3.5 text-[#062b72] shadow-[0_18px_45px_rgba(0,0,0,.22)] backdrop-blur-md transition-transform duration-500 hover:-translate-y-1 max-[900px]:left-2 max-[900px]:top-3">
                <div className="text-[25px] font-bold leading-none text-[#1455d9]">
                  0→1
                </div>
                <div className="mt-1 text-[10px] leading-tight text-[#59677f]">
                  Built from scratch
                </div>
              </div>

              <div className="absolute bottom-6 right-[-9px] min-w-[126px] rounded-2xl border border-[#062b72]/10 bg-white/[0.96] px-4 py-3.5 text-[#062b72] shadow-[0_18px_45px_rgba(0,0,0,.22)] backdrop-blur-md transition-transform duration-500 hover:-translate-y-1 max-[900px]:right-2 max-[900px]:bottom-3">
                <div className="text-[25px] font-bold leading-none text-[#1455d9]">
                  100%
                </div>
                <div className="mt-1 text-[10px] leading-tight text-[#59677f]">
                  Mobile responsive
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* META BAR */}
        <div className="relative z-20 border-t border-white/10 bg-[#031234]/40 backdrop-blur-md">
          <div className="mx-auto grid w-[min(100%-32px,1180px)] grid-cols-1 sm:w-[min(100%-48px,1180px)] sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Category", "Web & LMS Development"],
              ["Industry", "Education / Coaching"],
              ["Engagement", "Full-platform build"],
              ["Deliverable", "Website + LMS"],
            ].map(([label, value], index) => (
              <div
                key={label}
                className={`flex min-h-[78px] flex-col justify-center px-5 py-4 sm:px-[22px] lg:min-h-[88px] ${
                  index < 3
                    ? "border-b border-white/10 lg:border-b-0 lg:border-r"
                    : ""
                } ${index === 1 ? "sm:border-r-0 lg:border-r" : ""}`}
              >
                <div className="font-mono text-[9.5px] uppercase tracking-[0.09em] text-white/45">
                  {label}
                </div>
                <div className="mt-1 text-[13px] font-semibold text-white">
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          ABOUT + SCOPE
      ========================================================== */}
      <section className="border-b border-[#062b72]/10 py-16 sm:py-20 lg:py-[10px]">
        <div className="mx-auto grid w-[min(100%-32px,1180px)] grid-cols-1 gap-9 sm:w-[min(100%-48px,1180px)] lg:grid-cols-[minmax(0,1.25fr)_minmax(300px,.75fr)] lg:gap-[68px]">
          <div>
            <div className="mb-5 max-w-[700px]">
              <div className="mb-3 inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#1455d9]">
                <span className="h-px w-7 bg-current opacity-70" />
                About Alpine Coach Tree
              </div>

              <h2 className="text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl lg:text-[32px]">
                A coaching brand with <span className="inline-block text-[#1455d9]">
                  nothing to build on
                </span>
                
              </h2>
            </div>

            <p className="max-w-[720px] text-[15px] leading-8 text-[#59677f]">
              Most website projects start with something to improve. This one
              started with a coaching brand, a roster of programs worth teaching,
              and a blank slate — no domain presence, no course infrastructure,
              nothing for students to land on.
            </p>

            <p className="mt-5 max-w-[720px] text-[15px] leading-8 text-[#59677f]">
              Akkurate Digital Solutions developed the entire website from
              scratch, treating user experience and search engine visibility as
              one decision rather than two separate workstreams.
            </p>
          </div>

          <div className="h-fit rounded-[22px] border border-[#062b72]/10 bg-gradient-to-br from-[#f8fbff] to-[#eef4ff] p-6 shadow-[0_8px_30px_rgba(7,35,82,.06)] lg:sticky lg:top-24">
            <div className="mb-3.5 font-mono text-[10px] uppercase tracking-[0.12em] text-[#59677f]">
              Project Scope
            </div>

            {scope.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 border-b border-[#062b72]/10 py-3 text-[13.5px] text-[#101a2e] last:border-0"
              >
                <span className="grid h-[27px] w-[27px] shrink-0 place-items-center rounded-full bg-[#062b72] text-[10px] text-white">
                  ✓
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CHALLENGES
      ========================================================== */}
      <section className="border-b border-[#062b72]/10 bg-[#f8faff] py-16 sm:py-20 lg:py-[10px]">
        <div className="mx-auto w-[min(100%-32px,1180px)] sm:w-[min(100%-48px,1180px)]">
          <div className="mb-9 max-w-[700px]">
            <div className="mb-3 inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#1455d9]">
              <span className="h-px w-7 bg-current opacity-70" />
              Client's Challenges
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl lg:text-[42px]">
              Starting with nothing <span className="inline-block text-[#1455d9]">
                to build on
              </span>
              
            </h2>
          </div>

          <div className="grid gap-3.5">
            {challenges.map((item) => (
              <div
                key={item.number}
                className="grid grid-cols-[40px_1fr] gap-3 rounded-[17px] border border-[#062b72]/10 bg-white p-[18px] shadow-[0_4px_18px_rgba(7,35,82,.025)] transition-all duration-300 hover:translate-x-1 hover:border-[#1455d9]/25 hover:shadow-[0_8px_30px_rgba(7,35,82,.06)] sm:grid-cols-[52px_1fr] sm:gap-[18px] sm:p-[21px_22px]"
              >
                <div className="text-lg font-bold text-[#1455d9]">
                  {item.number}
                </div>

                <div>
                  <strong className="font-bold text-[#101a2e]">
                    {item.title}
                  </strong>

                  <p className="mt-1 text-[14px] leading-7 text-[#59677f]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SOLUTION
      ========================================================== */}
      <section className="border-b border-[#062b72]/10 py-16 sm:py-20 lg:py-[10px]">
        <div className="mx-auto w-[min(100%-32px,1180px)] sm:w-[min(100%-48px,1180px)]">
          <div className="mb-9 max-w-[700px]">
            <div className="mb-3 inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#1455d9]">
              <span className="h-px w-7 bg-current opacity-70" />
              Our Solution
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl lg:text-[32px]">
              Built end to end, <span className="inline-block text-[#1455d9]">
                design and SEO together
              </span>
              
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2">
            {solutions.map((item) => (
              <div
                key={item.title}
                className="rounded-[18px] border border-[#062b72]/10 bg-[#f6f8fc] p-[22px] text-[14px] leading-7 text-[#59677f] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_8px_30px_rgba(7,35,82,.06)]"
              >
                <strong className="mb-1 block font-bold text-[#101a2e]">
                  {item.title}
                </strong>
                {item.description}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          RESULTS
      ========================================================== */}
      <section
        id="results"
        className="border-b border-[#062b72]/10 py-16 sm:py-20 lg:py-[10px]"
      >
        <div className="mx-auto w-[min(100%-32px,1180px)] sm:w-[min(100%-48px,1180px)]">
          <div className="mb-9 max-w-[700px]">
            <div className="mb-3 inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#1455d9]">
              <span className="h-px w-7 bg-current opacity-70" />
              Results
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl lg:text-[22px]">
              A platform that <span className="inline-block text-[#1455d9]">
                launched and performed
              </span>
              
            </h2>
          </div>

          <div className="mb-7 grid grid-cols-1 gap-3.5 md:grid-cols-3">
            {results.map((item) => (
              <div
                key={item.value}
                className="relative overflow-hidden rounded-[20px] bg-gradient-to-br from-[#062b72] to-[#1455d9] p-[30px_25px] text-white shadow-[0_18px_55px_rgba(7,35,82,.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(3,26,70,.2)]"
              >
                <div className="absolute -right-[55px] -top-[60px] h-[130px] w-[130px] rounded-full bg-white/[0.09]" />

                <div className="relative z-10 text-[32px] font-bold leading-none sm:text-[37px]">
                  {item.value}
                </div>

                <div className="relative z-10 mt-2 text-[11.5px] text-white/70">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          <ul className="grid gap-2.5">
            {resultPoints.map((point, index) => (
              <li
                key={index}
                className="relative pl-[25px] text-[14.5px] leading-7 text-[#59677f]"
              >
                <span className="absolute left-0 top-0.5 font-extrabold text-[#1455d9]">
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* =========================================================
          GRAPH — inline SVG, no chart library
      ========================================================== */}
      <section className="border-b border-[#062b72]/10 py-16 sm:py-20 lg:py-[10px]">
        <div className="mx-auto w-[min(100%-32px,1180px)] sm:w-[min(100%-48px,1180px)]">
          <div className="mb-9 max-w-[700px]">
            <div className="mb-3 inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#1455d9]">
              <span className="h-px w-7 bg-current opacity-70" />
              Growth Trajectory
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl lg:text-[32px]">
              From a blank slate to <span className="inline-block text-[#1455d9]">
                a working learning ecosystem
              </span>
              
            </h2>
          </div>

          <div className="rounded-[22px] border border-[#062b72]/10 bg-white p-5 shadow-[0_8px_30px_rgba(7,35,82,.06)] sm:p-[30px]">
            <div className="mb-5 font-mono text-[10px] uppercase tracking-[0.1em] text-[#59677f]">
              Platform transformation — from concept to launch
            </div>

            <div className="overflow-hidden rounded-[15px] bg-gradient-to-b from-[#f8fbff] to-white">
              <svg
                viewBox="0 0 760 280"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Platform transformation from no online infrastructure to a complete coaching and learning platform"
                className="block h-auto w-full"
              >
                <defs>
                  <linearGradient
                    id="alpineGraphFill"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#1455d9"
                      stopOpacity=".18"
                    />
                    <stop
                      offset="100%"
                      stopColor="#1455d9"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>

                <line
                  x1="60"
                  y1="230"
                  x2="700"
                  y2="230"
                  stroke="#062b72"
                  strokeOpacity=".15"
                />

                <line
                  x1="60"
                  y1="175"
                  x2="700"
                  y2="175"
                  stroke="#062b72"
                  strokeOpacity=".07"
                  strokeDasharray="4 5"
                />

                <line
                  x1="60"
                  y1="120"
                  x2="700"
                  y2="120"
                  stroke="#062b72"
                  strokeOpacity=".07"
                  strokeDasharray="4 5"
                />

                <line
                  x1="60"
                  y1="65"
                  x2="700"
                  y2="65"
                  stroke="#062b72"
                  strokeOpacity=".07"
                  strokeDasharray="4 5"
                />

                <polyline
                  points="60,210 220,180 380,140 540,85 700,35"
                  fill="none"
                  stroke="#1455d9"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <polygon
                  points="60,210 220,180 380,140 540,85 700,35 700,230 60,230"
                  fill="url(#alpineGraphFill)"
                />

                {[
                  [60, 210],
                  [220, 180],
                  [380, 140],
                  [540, 85],
                ].map(([cx, cy], index) => (
                  <circle
                    key={index}
                    cx={cx}
                    cy={cy}
                    r="5"
                    fill="#1455d9"
                  />
                ))}

                <circle
                  cx="700"
                  cy="35"
                  r="6"
                  fill="#062b72"
                />

                <text
                  x="60"
                  y="253"
                  textAnchor="middle"
                  fontFamily="Inter, sans-serif"
                  fontSize="12"
                  fill="#59677f"
                >
                  Start
                </text>

                <text
                  x="220"
                  y="253"
                  textAnchor="middle"
                  fontFamily="Inter, sans-serif"
                  fontSize="12"
                  fill="#59677f"
                >
                  Architecture
                </text>

                <text
                  x="380"
                  y="253"
                  textAnchor="middle"
                  fontFamily="Inter, sans-serif"
                  fontSize="12"
                  fill="#59677f"
                >
                  Website
                </text>

                <text
                  x="540"
                  y="253"
                  textAnchor="middle"
                  fontFamily="Inter, sans-serif"
                  fontSize="12"
                  fill="#59677f"
                >
                  LMS
                </text>

                <text
                  x="700"
                  y="253"
                  textAnchor="middle"
                  fontFamily="Inter, sans-serif"
                  fontSize="12"
                  fill="#59677f"
                >
                  Launch
                </text>

                <text
                  x="700"
                  y="25"
                  textAnchor="middle"
                  fontFamily="monospace"
                  fontSize="11"
                  fontWeight="700"
                  fill="#062b72"
                >
                  FULL PLATFORM
                </text>
              </svg>
            </div>

            <div className="mt-4 border-t border-[#062b72]/10 pt-3 text-[12px] leading-6 text-[#59677f]">
              The transformation illustrates the project workflow described in
              the case study: architecture, website development, LMS
              integration, and launch-ready SEO/performance work.
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BEFORE / AFTER
      ========================================================== */}
      <section className="border-b border-[#062b72]/10 py-16 sm:py-20 lg:py-[16px]">
        <div className="mx-auto w-[min(100%-32px,1180px)] sm:w-[min(100%-48px,1180px)]">
          <div className="mb-9 max-w-[700px]">
            <div className="mb-3 inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#1455d9]">
              <span className="h-px w-7 bg-current opacity-70" />
              Before / After
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl lg:text-[42px]">
              What changed
            </h2>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2">
            <div className="rounded-[22px] border border-[#062b72]/10 bg-[#f6f8fc] p-6">
              <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.08em] text-[#59677f]">
                Before
              </div>

              <ul className="grid gap-2.5">
                {[
                  "No website or online presence",
                  "Programs without a digital showcase",
                  "No online learning infrastructure",
                  "No SEO-ready foundation",
                ].map((item) => (
                  <li
                    key={item}
                    className="relative pl-4 text-[14px] leading-6 text-[#101a2e]"
                  >
                    <span className="absolute left-0 top-0 text-[#59677f]">
                      –
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[22px] border border-[#062b72]/15 bg-gradient-to-br from-[#eef3ff] to-[#e6efff] p-6">
              <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.08em] text-[#1455d9]">
                After
              </div>

              <ul className="grid gap-2.5">
                {[
                  "Full coaching & learning platform",
                  "Structured course and program pages",
                  "Seamless LMS experience",
                  "SEO-ready architecture for growth",
                ].map((item) => (
                  <li
                    key={item}
                    className="relative pl-4 text-[14px] leading-6 text-[#101a2e]"
                  >
                    <span className="absolute left-0 top-0 font-bold text-[#1455d9]">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TESTIMONIAL
      ========================================================== */}
      <section className="border-b border-[#062b72]/10 py-16 sm:py-20 lg:py-[10px]">
        <div className="mx-auto w-[min(100%-32px,1180px)] sm:w-[min(100%-48px,1180px)]">
          <div className="relative overflow-hidden rounded-[24px] border border-[#1455d9]/15 bg-gradient-to-br from-[#f0f5ff] to-[#e6efff] p-7 shadow-[0_8px_30px_rgba(7,35,82,.06)] sm:p-[45px]">
            <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#1455d9]/[0.07]" />

            <div className="relative z-10">
              <div className="mb-2 font-serif text-[72px] leading-[0.55] text-[#1455d9]">
                "
              </div>

              <blockquote className="max-w-[900px] text-xl font-medium leading-[1.45] tracking-[-0.025em] text-[#101a2e] sm:text-2xl lg:text-[29px]">
                The team transformed our vision into reality. From website
                design to LMS integration, everything was handled
                professionally. We are extremely satisfied with the final
                outcome.
              </blockquote>

              <div className="mt-5 font-mono text-[11px] text-[#59677f]">
                — Alpine Coach Tree
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-5 border-t border-[#062b72]/10 pt-4 font-mono text-[11px] text-[#59677f]">
            <span>Reading duration: 4 min</span>
            <span>Category: Web &amp; LMS Development</span>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================== */}
      <section className="py-16 sm:py-20 lg:py-[10px]">
        <div className="mx-auto w-[min(100%-32px,1180px)] sm:w-[min(100%-48px,1180px)]">
          <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#031a46] to-[#1455d9] p-7 shadow-[0_18px_55px_rgba(7,35,82,.1)] sm:p-[46px]">
            <div className="absolute -right-24 -top-36 h-[280px] w-[280px] rounded-full bg-white/[0.07]" />

            <div className="relative z-10 grid grid-cols-1 items-center gap-7 lg:grid-cols-[1fr_auto] lg:gap-[30px]">
              <h3 className="max-w-[700px] text-2xl font-bold leading-tight tracking-[-0.035em] text-white sm:text-3xl">
                Need a platform built from the ground up?
              </h3>

              <a
                href="/register"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-[13px] font-bold text-[#062b72] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,.2)]"
              >
                Book a Strategy Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          RELATED WORK
      ========================================================== */}
      <section className="border-t border-[#062b72]/10 bg-[#f8faff] py-16 sm:py-20 lg:py-[10px]">
        <div className="mx-auto w-[min(100%-32px,1180px)] sm:w-[min(100%-48px,1180px)]">
          <div className="mb-9 max-w-[700px]">
            <div className="mb-3 inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#1455d9]">
              <span className="h-px w-7 bg-current opacity-70" />
              More Work
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl lg:text-[42px]">
              Discover more case studies
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-3.5 md:grid-cols-3">
            {relatedWork.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="group block rounded-[18px] border border-[#062b72]/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1455d9]/25 hover:shadow-[0_18px_55px_rgba(7,35,82,.1)]"
              >
                <span className="mb-3 inline-block rounded-full border border-[#1455d9]/15 bg-[#1455d9]/5 px-3 py-1.5 font-mono text-[9.5px] uppercase tracking-[0.07em] text-[#1455d9]">
                  {item.tag}
                </span>

                <h4 className="text-base font-bold leading-snug text-[#101a2e]">
                  {item.title}
                </h4>

                <div className="mt-5 text-[25px] font-bold text-[#1455d9]">
                  {item.value}
                </div>

                <div className="mt-0.5 text-[11.5px] text-[#59677f]">
                  {item.label}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

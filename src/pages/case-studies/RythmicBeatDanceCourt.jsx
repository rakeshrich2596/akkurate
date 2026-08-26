import React, { useEffect } from "react";

const pageTitle =
  "Rythmic Beat Dance Court Case Study | Akkurate Digital Solutions";

const pageDescription =
  "How Akkurate Digital Solutions reimagined Rythmic Beat Dance Court's brand identity with a modern, dynamic logo and complete brand asset suite.";

const challenges = [
  {
    number: "01",
    title: "Logo lacked uniqueness and impact.",
    description:
      "The existing mark blended in rather than standing out, weakening every touchpoint it appeared on.",
  },
  {
    number: "02",
    title: "Brand identity needed genuine modernization.",
    description:
      "A touch-up wasn't enough — the identity needed a real rebuild to match where the academy had grown to.",
  },
  {
    number: "03",
    title: "Needed a logo for both digital and print.",
    description:
      "The mark had to hold up across social profiles, signage, and printed materials without losing clarity.",
  },
  {
    number: "04",
    title: "Wanted stronger brand recognition.",
    description:
      "Students, parents, and the local dance community needed to recognize the brand instantly.",
  },
];

const solutions = [
  {
    title: "Discovery.",
    description:
      "Understood the academy's actual character — the energy of a live class, the audience it performs for, and what \"modern\" meant to them specifically.",
  },
  {
    title: "Concept exploration.",
    description:
      "Developed multiple distinct design directions, each tied to a different read on the brand.",
  },
  {
    title: "Refinement.",
    description:
      "Narrowed to the strongest direction and refined color, type, and form until the mark worked at every size.",
  },
  {
    title: "Asset delivery.",
    description:
      "Delivered the final identity as a full high-resolution asset suite, ready for social, signage, and print.",
  },
];

const scope = [
  "Logo Redesign",
  "Brand Identity Concept",
  "Color Psychology",
  "High-Resolution Assets",
  "Social Media Logo Versions",
];

const resultStats = [
  {
    value: "100%",
    label: "Digital & print ready identity",
  },
  {
    value: "Multiple",
    label: "Concepts explored before final",
  },
  {
    value: "High-Res",
    label: "Full brand asset suite",
  },
];

const resultPoints = [
  <>
    <strong className="text-[#101a2e]">
      Stronger, more professional brand presence
    </strong>{" "}
    across every touchpoint.
  </>,
  <>
    <strong className="text-[#101a2e]">Improved recognition</strong> across
    digital platforms.
  </>,
  <>
    A{" "}
    <strong className="text-[#101a2e]">
      modern, visually appealing identity
    </strong>{" "}
    that genuinely fits the academy.
  </>,
  <>
    <strong className="text-[#101a2e]">Positive response</strong> from students
    and stakeholders following launch.
  </>,
];

const beforeItems = [
  "Outdated logo with limited visual impact",
  "No consistent brand identity system",
  "Poor performance across digital platforms",
  "Low brand recall among students and parents",
];

const afterItems = [
  "Modern, energetic logo aligned with the academy's vision",
  "Full identity system with color psychology applied",
  "High-resolution assets ready for digital and print",
  "Social-media-ready logo versions for every platform",
];

export default function RythmicBeatDanceCourt() {
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
          HERO — Happypique style
      ========================================================== */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_78%_18%,rgba(77,145,255,.28),transparent_28%),radial-gradient(circle_at_10%_90%,rgba(20,85,217,.25),transparent_34%),linear-gradient(135deg,#031a46_0%,#062b72_54%,#1455d9_100%)] pt-12 text-white sm:pt-16 lg:pt-[76px]">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-[220px] -top-[250px] h-[560px] w-[560px] rounded-full border border-white/10 shadow-[0_0_0_80px_rgba(255,255,255,.018),0_0_0_160px_rgba(255,255,255,.012)]" />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/20 to-transparent" />

        <div className="relative z-10 mx-auto grid w-[min(100%-32px,1180px)] grid-cols-1 items-center gap-12 pb-14 sm:w-[min(100%-48px,1180px)] lg:grid-cols-[minmax(0,1fr)_minmax(420px,.9fr)] lg:gap-[62px] lg:pb-[76px]">
          {/* LEFT */}
          <div className="animate-[heroUp_.8s_cubic-bezier(.2,.7,.2,1)_both]">
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
              / Rythmic Beat Dance Court
            </div>

            <div className="mb-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-white/70">
              <span className="h-px w-7 bg-current opacity-70" />
              Branding · Brand Identity Transformation
            </div>

            <h1 className="max-w-[700px] text-[40px] font-bold leading-[1.02] tracking-[-0.04em] sm:text-[52px] lg:text-[66px]">
              A logo that finally matches the energy
            </h1>

            <p className="mt-5 max-w-[650px] text-[15.5px] leading-7 text-white/70 sm:text-[17px] sm:leading-8">
              Rythmic Beat Dance Court had real passion and professionalism —
              and a logo that reflected neither. We rebuilt the identity from
              the ground up.
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

          {/* RIGHT VISUAL */}
          <div className="relative min-h-[300px] transition-all duration-700 sm:min-h-[390px] lg:min-h-[450px]">
            <div className="absolute inset-0 overflow-hidden rounded-[28px] border border-white/20 bg-white/[0.08] shadow-[0_30px_90px_rgba(3,26,70,.24)] transition-transform duration-500 lg:left-6 lg:rotate-[1deg] lg:hover:rotate-0 lg:hover:-translate-y-1">
              <img
                src="/assets/images/ourwork/rhythem.png"
                alt="Alpine Coach Tree online learning platform case study"
                className="h-full w-full object-cover object-center transition-transform duration-1000 hover:scale-105"
              />

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,26,70,.02),rgba(3,26,70,.62)),linear-gradient(90deg,rgba(3,26,70,.12),transparent_55%)]" />

              <div className="absolute bottom-5 left-5 right-5 z-20 flex items-end justify-between gap-4">
                <div>
                  <div className="text-[17px] font-bold">
                    Rythmic Beat
                  </div>

                  <div className="mt-0.5 text-[9px] uppercase tracking-[0.13em] text-white/60">
                    Dance Court
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
              ["Category", "Brand Identity"],
              ["Industry", "Dance & Performing Arts"],
              ["Engagement", "Logo & identity project"],
              ["Deliverable", "Full Identity Suite"],
            ].map(([label, value], index) => (
              <div
                key={label}
                className={`flex min-h-[78px] flex-col justify-center px-5 py-4 sm:px-[22px] lg:min-h-[88px] ${
                  index < 3 ? "border-b border-white/10 lg:border-b-0 lg:border-r" : ""
                } ${
                  index === 1 ? "sm:border-r-0 lg:border-r" : ""
                }`}
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
      <section className="border-b border-[#062b72]/10 py-16 sm:py-20 lg:py-[86px]">
        <div className="mx-auto grid w-[min(100%-32px,1180px)] grid-cols-1 gap-9 sm:w-[min(100%-48px,1180px)] lg:grid-cols-[minmax(0,1.25fr)_minmax(300px,.75fr)] lg:gap-[68px]">
          <div>
            <div className="mb-5 max-w-[700px]">
              <div className="mb-3 inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#1455d9]">
                <span className="h-px w-7 bg-current opacity-70" />
                About the Client
              </div>

              <h2 className="text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl lg:text-[42px]">
                A brand outgrowing its old identity
              </h2>
            </div>

            <p className="max-w-[720px] text-[15px] leading-8 text-[#59677f]">
              A dance academy lives and dies by energy — and the old logo simply
              didn't carry any. It looked dated next to the academy's actual
              classes, performances, and student culture, which meant the brand
              was underselling itself everywhere it appeared.
            </p>

            <p className="mt-5 max-w-[720px] text-[15px] leading-8 text-[#59677f]">
              Our creative team completely reimagined the brand identity,
              designing a fresh, dynamic mark aligned with the academy's actual
              energy and vision — not a generic dance-studio template.
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
      <section className="border-b border-[#062b72]/10 bg-[#f8faff] py-16 sm:py-20 lg:py-[86px]">
        <div className="mx-auto w-[min(100%-32px,1180px)] sm:w-[min(100%-48px,1180px)]">
          <div className="mb-9 max-w-[700px]">
            <div className="mb-3 inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#1455d9]">
              <span className="h-px w-7 bg-current opacity-70" />
              Client's Challenges
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl lg:text-[42px]">
              An identity that wasn't being seen
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
      <section className="border-b border-[#062b72]/10 py-16 sm:py-20 lg:py-[86px]">
        <div className="mx-auto w-[min(100%-32px,1180px)] sm:w-[min(100%-48px,1180px)]">
          <div className="mb-9 max-w-[700px]">
            <div className="mb-3 inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#1455d9]">
              <span className="h-px w-7 bg-current opacity-70" />
              Our Solution
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl lg:text-[42px]">
              From concept to finished identity
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
        className="border-b border-[#062b72]/10 bg-white py-16 sm:py-20 lg:py-[86px]"
      >
        <div className="mx-auto w-[min(100%-32px,1180px)] sm:w-[min(100%-48px,1180px)]">
          <div className="mb-9 max-w-[700px]">
            <div className="mb-3 inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#1455d9]">
              <span className="h-px w-7 bg-current opacity-70" />
              Results
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl lg:text-[42px]">
              A brand people actually recognize
            </h2>
          </div>

          <div className="mb-7 grid grid-cols-1 gap-3.5 md:grid-cols-3">
            {resultStats.map((item) => (
              <div
                key={item.value}
                className="relative overflow-hidden rounded-[20px] bg-gradient-to-br from-[#062b72] to-[#1455d9] p-[30px_25px] text-white shadow-[0_18px_55px_rgba(7,35,82,.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(3,26,70,.2)]"
              >
                <div className="absolute -right-[55px] -top-[60px] h-[130px] w-[130px] rounded-full bg-white/[0.09]" />

                <div className="relative z-10 text-[32px] font-bold leading-none tracking-[-0.035em] sm:text-[37px]">
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
          GRAPH — Tailwind + inline SVG only
      ========================================================== */}
      <section className="border-b border-[#062b72]/10 py-16 sm:py-20 lg:py-[86px]">
        <div className="mx-auto w-[min(100%-32px,1180px)] sm:w-[min(100%-48px,1180px)]">
          <div className="mb-9 max-w-[700px]">
            <div className="mb-3 inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#1455d9]">
              <span className="h-px w-7 bg-current opacity-70" />
              Brand Transformation
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl lg:text-[42px]">
              From dated mark to a complete identity system
            </h2>
          </div>

          <div className="rounded-[22px] border border-[#062b72]/10 bg-white p-5 shadow-[0_8px_30px_rgba(7,35,82,.06)] sm:p-[30px]">
            <div className="mb-5 font-mono text-[10px] uppercase tracking-[0.1em] text-[#59677f]">
              Brand identity progression — concept to production
            </div>

            <div className="overflow-hidden rounded-[15px] bg-gradient-to-b from-[#f8fbff] to-white">
              <svg
                viewBox="0 0 760 280"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Brand identity progression from initial discovery through final asset delivery"
                className="block h-auto w-full"
              >
                <defs>
                  <linearGradient id="rhythmGraphFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1455d9" stopOpacity=".18" />
                    <stop offset="100%" stopColor="#1455d9" stopOpacity="0" />
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
                  points="60,212 220,184 380,145 540,88 700,34"
                  fill="none"
                  stroke="#062b72"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <polygon
                  points="60,212 220,184 380,145 540,88 700,34 700,230 60,230"
                  fill="url(#rhythmGraphFill)"
                />

                {[
                  [60, 212],
                  [220, 184],
                  [380, 145],
                  [540, 88],
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
                  cy="34"
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
                  Discovery
                </text>

                <text
                  x="220"
                  y="253"
                  textAnchor="middle"
                  fontFamily="Inter, sans-serif"
                  fontSize="12"
                  fill="#59677f"
                >
                  Concepts
                </text>

                <text
                  x="380"
                  y="253"
                  textAnchor="middle"
                  fontFamily="Inter, sans-serif"
                  fontSize="12"
                  fill="#59677f"
                >
                  Refinement
                </text>

                <text
                  x="540"
                  y="253"
                  textAnchor="middle"
                  fontFamily="Inter, sans-serif"
                  fontSize="12"
                  fill="#59677f"
                >
                  Identity
                </text>

                <text
                  x="700"
                  y="253"
                  textAnchor="middle"
                  fontFamily="Inter, sans-serif"
                  fontSize="12"
                  fill="#59677f"
                >
                  Assets
                </text>

                <text
                  x="700"
                  y="20"
                  textAnchor="middle"
                  fontFamily="monospace"
                  fontSize="11"
                  fontWeight="700"
                  fill="#062b72"
                >
                  FULL SUITE
                </text>
              </svg>
            </div>

            <div className="mt-4 border-t border-[#062b72]/10 pt-3 text-[12px] leading-6 text-[#59677f]">
              This visual represents the project workflow described in the case
              study: discovery, concept exploration, refinement, identity
              development, and final asset delivery.
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BEFORE / AFTER
      ========================================================== */}
      <section className="border-b border-[#062b72]/10 py-16 sm:py-20 lg:py-[86px]">
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

          <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-[1fr_auto_1fr]">
            <div className="rounded-[22px] border border-[#062b72]/10 bg-[#f6f8fc] p-6">
              <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.08em] text-[#59677f]">
                Before
              </div>

              <ul className="grid gap-2.5">
                {beforeItems.map((item) => (
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

            <div className="flex items-center justify-center text-2xl text-[#1455d9] md:px-1">
              <span className="rotate-90 md:rotate-0">→</span>
            </div>

            <div className="rounded-[22px] border border-[#062b72]/15 bg-gradient-to-br from-[#eef3ff] to-[#e6efff] p-6">
              <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.08em] text-[#1455d9]">
                After
              </div>

              <ul className="grid gap-2.5">
                {afterItems.map((item) => (
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
      <section className="border-b border-[#062b72]/10 py-16 sm:py-20 lg:py-[86px]">
        <div className="mx-auto w-[min(100%-32px,1180px)] sm:w-[min(100%-48px,1180px)]">
          <div className="relative overflow-hidden rounded-[24px] border border-[#1455d9]/15 bg-gradient-to-br from-[#f0f5ff] to-[#e6efff] p-7 shadow-[0_8px_30px_rgba(7,35,82,.06)] sm:p-[45px]">
            <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#1455d9]/[0.07]" />

            <div className="relative z-10">
              <div className="mb-2 font-serif text-[72px] leading-[0.55] text-[#1455d9]">
                "
              </div>

              <blockquote className="max-w-[900px] text-xl font-medium leading-[1.45] tracking-[-0.025em] text-[#101a2e] sm:text-2xl lg:text-[29px]">
                The transformation was beyond our expectations. The new logo
                perfectly represents our academy's energy and vision.
              </blockquote>

              <div className="mt-5 font-mono text-[11px] text-[#59677f]">
                — Rythmic Beat Dance Court
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-5 border-t border-[#062b72]/10 pt-4 font-mono text-[11px] text-[#59677f]">
            <span>Reading duration: 3 min</span>
            <span>Category: Brand Identity</span>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================== */}
      <section className="py-16 sm:py-20 lg:py-[86px]">
        <div className="mx-auto w-[min(100%-32px,1180px)] sm:w-[min(100%-48px,1180px)]">
          <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#031a46] to-[#1455d9] p-7 shadow-[0_18px_55px_rgba(7,35,82,.1)] sm:p-[46px]">
            <div className="absolute -right-24 -top-36 h-[280px] w-[280px] rounded-full bg-white/[0.07]" />

            <div className="relative z-10 grid grid-cols-1 items-center gap-7 lg:grid-cols-[1fr_auto] lg:gap-[30px]">
              <h3 className="max-w-[700px] text-2xl font-bold leading-tight tracking-[-0.035em] text-white sm:text-3xl">
                Outgrown your current brand identity?
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
      <section className="border-t border-[#062b72]/10 bg-[#f8faff] py-16 sm:py-20 lg:py-[86px]">
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
            {[
              {
                href: "/our-work/alpine-coach-tree",
                tag: "Education · Web & LMS",
                title: "Alpine Coach Tree",
                value: "0→1",
                label: "Platform built from scratch",
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
            ].map((item) => (
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

      {/* =========================================================
          CSS KEYFRAMES — Tailwind arbitrary animations
      ========================================================== */}
      <style>{`
        @keyframes heroUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroVisual {
          from {
            opacity: 0;
            transform: translateX(35px) scale(.97);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes badgeFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-9px);
          }
        }

        @keyframes rhythmWave {
          0%, 100% {
            transform: scaleY(.65);
            opacity: .55;
          }
          50% {
            transform: scaleY(1);
            opacity: 1;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: .001ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: .001ms !important;
          }
        }
      `}</style>
    </main>
  );
}

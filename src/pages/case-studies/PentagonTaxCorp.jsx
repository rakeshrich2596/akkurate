import React, { useEffect } from "react";

const pageTitle = "Pentagon Tax Corp Case Study | Akkurate Digital Solutions";

const pageDescription =
  "How Akkurate Digital Solutions built Pentagon Tax Corp a premium, scalable CMS website with SEO and lead generation built in.";

const challenges = [
  {
    number: "01",
    title: "Needed a modern, CMS-based website.",
    description:
      "A static build would not let the internal team manage content independently.",
  },
  {
    number: "02",
    title: "Wanted a professional corporate presentation.",
    description:
      "The site needed to build trust with prospective corporate clients from the first visit.",
  },
  {
    number: "03",
    title: "Had real SEO requirements.",
    description:
      "Visibility needed to be designed in from day one, not bolted on afterward.",
  },
  {
    number: "04",
    title: "Needed easy content management.",
    description:
      "The internal team needed to make updates without developer dependency.",
  },
  {
    number: "05",
    title: "Wanted improved lead generation.",
    description:
      "The site needed to actually convert visitors into enquiries, not just inform them.",
  },
];

const solutions = [
  {
    title: "Platform & CMS setup.",
    description:
      "Selected and configured a CMS architecture built around what the internal team actually needed to edit, without needing code access.",
  },
  {
    title: "Custom page design.",
    description:
      "Designed and built custom pages for services, team, and contact, built to feel premium and corporate.",
  },
  {
    title: "Technical SEO & security.",
    description:
      "Implemented technical and on-page SEO, hardened security, and optimized load speed.",
  },
  {
    title: "Lead-generation structure.",
    description:
      "Structured calls-to-action and page flow specifically to convert corporate visitors into enquiries.",
  },
];

const scope = [
  "Premium CMS Development",
  "Custom Page Design",
  "Technical & On-Page SEO",
  "Speed Optimization",
  "Security Enhancements",
  "Lead Generation Structure",
];

const resultStats = [
  {
    value: "Premium",
    label: "CMS website platform",
  },
  {
    value: "100%",
    label: "Mobile responsive build",
  },
  {
    value: "Secure",
    label: "Security-hardened platform",
  },
];

const resultPoints = [
  <>
    <strong className="text-[#101a2e]">Professional online presence</strong>{" "}
    established from launch.
  </>,
  <>
    <strong className="text-[#101a2e]">
      Improved usability and performance
    </strong>{" "}
    across every page.
  </>,
  <>
    <strong className="text-[#101a2e]">SEO-ready foundation</strong> built in
    for ongoing organic growth.
  </>,
  <>
    <strong className="text-[#101a2e]">Easy content management</strong> for the
    client's internal team, with no developer dependency.
  </>,
];

const relatedWork = [
  {
    href: "/our-work/rythmic-beat-dance-court",
    tag: "Branding · Logo & Identity",
    title: "Rythmic Beat Dance Court",
    value: "100%",
    label: "Print & digital ready",
  },
  {
    href: "/our-work/happypique",
    tag: "eCommerce · Jewellery · SEO",
    title: "Happypique",
    value: "400%",
    label: "Business growth",
  },
  {
    href: "/our-work",
    tag: "All Work",
    title: "Browse every case study",
    value: "5",
    label: "Client stories",
  },
];

const beforeItems = [
  "No CMS — content changes required developer involvement",
  "Presentation did not match the firm's actual professionalism",
  "No SEO foundation in place",
  "Limited lead generation from the website",
];

const afterItems = [
  "Premium CMS website the internal team can manage directly",
  "Custom-designed pages built for credibility",
  "SEO-ready foundation across technical and on-page SEO",
  "Lead-generation-focused page structure",
];

export default function PentagonTaxCorp() {
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
          HERO — Happypique-style
      ========================================================== */}
      <section
        className="
    relative
    overflow-hidden
    bg-[radial-gradient(circle_at_78%_18%,rgba(77,145,255,.28),transparent_28%),radial-gradient(circle_at_10%_90%,rgba(20,85,217,.25),transparent_34%),linear-gradient(135deg,#031a46_0%,#062b72_54%,#1455d9_100%)]
    pt-12
    text-white
    sm:pt-16
    lg:pt-[76px]
  "
      >
        {/* Decorative Circle */}
        <div
          className="
      pointer-events-none
      absolute
      -right-[220px]
      -top-[250px]
      h-[560px]
      w-[560px]
      rounded-full
      border
      border-white/10
      shadow-[0_0_0_80px_rgba(255,255,255,.018),0_0_0_160px_rgba(255,255,255,.012)]
    "
        />

        {/* =====================================================
      HERO CONTENT
  ====================================================== */}

        <div
          className="
      relative
      z-10
      mx-auto
      grid
      w-[min(100%-32px,1240px)]
      grid-cols-1
      items-center
      gap-10
      pb-14
      sm:w-[min(100%-48px,1240px)]
      sm:gap-12
      lg:grid-cols-[1.15fr_.85fr]
      lg:gap-[52px]
      lg:pb-[76px]
    "
        >
          {/* =================================================
        LEFT CONTENT
    ================================================= */}

          <div
            className="
        max-w-[760px]
        animate-[heroUp_.8s_cubic-bezier(.2,.7,.2,1)_both]
      "
          >
            {/* Breadcrumb */}

            <div
              className="
          mb-6
          font-mono
          text-[10.5px]
          text-white/55
        "
            >
              <a
                href="/"
                className="
            transition-colors
            hover:text-white/90
          "
              >
                Home
              </a>

              {" / "}

              <a
                href="/our-work"
                className="
            transition-colors
            hover:text-white/90
          "
              >
                Case Studies
              </a>

              {" / Pentagon Tax Corp"}
            </div>

            {/* Category */}

            <div
              className="
          mb-4
          inline-flex
          items-center
          gap-2
          font-mono
          text-[10px]
          uppercase
          tracking-[0.14em]
          text-white/70
        "
            >
              <span
                className="
            h-px
            w-7
            bg-current
            opacity-70
          "
              />
              Corporate · CMS Website · SEO Foundation
            </div>

            {/* Heading */}

            <h1
              className="
          max-w-[720px]
          text-[38px]
          font-bold
          leading-[1.03]
          tracking-[-0.04em]
          sm:text-[50px]
          lg:text-[50px]
          xl:text-[50px]
        "
            >
              A premium site their team can actually manage
            </h1>

            {/* Description */}

            <p
              className="
          mt-5
          max-w-[670px]
          text-[15px]
          leading-7
          text-white/70
          sm:text-[16.5px]
          sm:leading-8
        "
            >
              Pentagon Tax Corp needed a corporate website that looked the part
              and did not depend on a developer for every content change. We
              built both into one platform.
            </p>

            {/* Buttons */}

            <div
              className="
          mt-7
          flex
          flex-wrap
          gap-3
        "
            >
              <a
                href="#results"
                className="
            inline-flex
            min-h-12
            items-center
            justify-center
            gap-2
            rounded-full
            bg-white
            px-5
            text-[13px]
            font-bold
            text-[#062b72]
            shadow-[0_12px_32px_rgba(0,0,0,.18)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-[0_17px_42px_rgba(0,0,0,.24)]
          "
              >
                View Results
                <span>↓</span>
              </a>

              <a
                href="/register"
                className="
            inline-flex
            min-h-12
            items-center
            justify-center
            gap-2
            rounded-full
            border
            border-white/25
            bg-white/[0.07]
            px-5
            text-[13px]
            font-bold
            text-white
            backdrop-blur-md
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-white/10
          "
              >
                Start a Project
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* =================================================
        RIGHT HERO IMAGE
    ================================================= */}

          <div
            className="
        relative
        min-h-[290px]
        w-full
        max-w-[560px]
        justify-self-end
        transition-all
        duration-700
        sm:min-h-[380px]
        lg:min-h-[430px]
        xl:min-h-[450px]
      "
          >
            {/* IMAGE FRAME */}

            <div
              className="
          absolute
          inset-0
          overflow-hidden
          rounded-[28px]
          border
          border-white/20
          bg-[#062b72]
          shadow-[0_30px_90px_rgba(3,26,70,.24)]
          transition-transform
          duration-500
          lg:left-0
          lg:rotate-[1deg]
          lg:hover:rotate-0
          lg:hover:-translate-y-1
        "
            >
              {/* IMAGE */}

              <img
                src="/assets/images/ourwork/pentagon.png"
                alt="Pentagon Tax Corp corporate website development case study"
                className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
            transition-transform
            duration-1000
            hover:scale-105
          "
              />

              {/* DARK OVERLAY */}

              <div
                className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-[#031a46]/80
            via-[#031a46]/15
            to-transparent
          "
              />

              {/* IMAGE CONTENT */}

              <div
                className="
            absolute
            bottom-5
            left-5
            right-5
            z-20
            flex
            items-end
            justify-between
            gap-4
          "
              >
                <div>
                  <div
                    className="
                text-[17px]
                font-bold
                text-white
              "
                  >
                    Pentagon Tax Corp
                  </div>

                  <div
                    className="
                mt-1
                text-[9px]
                uppercase
                tracking-[0.13em]
                text-white/60
              "
                  >
                    Corporate / Tax · Website Development
                  </div>
                </div>

                <div
                  className="
              text-[9px]
              uppercase
              tracking-[0.13em]
              text-white/60
            "
                >
                  Case Study
                </div>
              </div>
            </div>

            {/* =================================================
          FLOATING BADGE 1
      ================================================= */}

            <div
              className="
          pointer-events-none
          absolute
          inset-0
          z-30
        "
            >
              <div
                className="
            absolute
            left-[-7px]
            top-6
            min-w-[126px]
            rounded-2xl
            border
            border-[#062b72]/10
            bg-white/[0.96]
            px-4
            py-3.5
            text-[#062b72]
            shadow-[0_18px_45px_rgba(0,0,0,.22)]
            backdrop-blur-md
            max-[900px]:left-2
            max-[900px]:top-3
          "
              >
                <div
                  className="
              text-[25px]
              font-bold
              leading-none
              text-[#1455d9]
            "
                >
                  05
                </div>

                <div
                  className="
              mt-1
              text-[10px]
              leading-tight
              text-[#59677f]
            "
                >
                  Website Development
                </div>
              </div>

              {/* =================================================
            FLOATING BADGE 2
        ================================================= */}

              <div
                className="
            absolute
            bottom-6
            right-[-9px]
            min-w-[126px]
            rounded-2xl
            border
            border-[#062b72]/10
            bg-white/[0.96]
            px-4
            py-3.5
            text-[#062b72]
            shadow-[0_18px_45px_rgba(0,0,0,.22)]
            backdrop-blur-md
            max-[900px]:bottom-3
            max-[900px]:right-2
          "
              >
                <div
                  className="
              text-[25px]
              font-bold
              leading-none
              text-[#1455d9]
            "
                >
                  Premium
                </div>

                <div
                  className="
              mt-1
              text-[10px]
              leading-tight
              text-[#59677f]
            "
                >
                  Corporate Website
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
      META BAR
  ====================================================== */}

        <div
          className="
      relative
      z-20
      border-t
      border-white/10
      bg-[#031234]/40
      backdrop-blur-md
    "
        >
          <div
            className="
        mx-auto
        grid
        w-[min(100%-32px,1240px)]
        grid-cols-1
        sm:w-[min(100%-48px,1240px)]
        sm:grid-cols-2
        lg:grid-cols-4
      "
          >
            {[
              ["Category", "CMS Website Development"],
              ["Industry", "Tax & Corporate Services"],
              ["Engagement", "Full website build"],
              ["Deliverable", "Premium CMS Platform"],
            ].map(([label, value], index) => (
              <div
                key={label}
                className={`
            flex
            min-h-[78px]
            flex-col
            justify-center
            px-5
            py-4
            sm:px-[22px]
            lg:min-h-[88px]

            ${
              index < 3
                ? "border-b border-white/10 lg:border-b-0 lg:border-r"
                : ""
            }

            ${index === 1 ? "sm:border-r-0 lg:border-r" : ""}
          `}
              >
                <div
                  className="
              font-mono
              text-[9.5px]
              uppercase
              tracking-[0.09em]
              text-white/45
            "
                >
                  {label}
                </div>

                <div
                  className="
              mt-1
              text-[13px]
              font-semibold
              text-white
            "
                >
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
      <section className="border-b border-[#062b72]/10 py-16 sm:py-20 lg:py-[16px]">
        <div className="mx-auto grid w-[min(100%-32px,1180px)] grid-cols-1 gap-9 sm:w-[min(100%-48px,1180px)] lg:grid-cols-[minmax(0,1.25fr)_minmax(300px,.75fr)] lg:gap-[68px]">
          <div>
            <div className="mb-5 max-w-[700px]">
              <div className="mb-3 inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#1455d9]">
                <span className="h-px w-7 bg-current opacity-70" />
                About Pentagon Tax Corp
              </div>

              <h2 className="text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl lg:text-[35px]">
                Professional presence,
                <span className="inline-block text-[#1455d9]">
                  practical control
                </span>
              </h2>
            </div>

            <p className="max-w-[720px] text-[15px] leading-8 text-[#59677f]">
              Pentagon Tax Corp needed a website that did two things most
              agencies treat as a trade-off: look genuinely premium, and stay
              easy for an internal, non-technical team to update without calling
              a developer every time.
            </p>

            <p className="mt-5 max-w-[720px] text-[15px] leading-8 text-[#59677f]">
              Akkurate Digital Solutions developed a premium CMS website with
              performance, scalability, and search engine optimization as the
              three pillars of the build — not features added on at the end.
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
      <section className="border-b border-[#062b72]/10 bg-[#f8faff] py-16 sm:py-20 lg:py-[16px]">
        <div className="mx-auto w-[min(100%-32px,1180px)] sm:w-[min(100%-48px,1180px)]">
          <div className="mb-9 max-w-[700px]">
            <div className="mb-3 inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#1455d9]">
              <span className="h-px w-7 bg-current opacity-70" />
              Client's Challenges
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl lg:text-[40px]">
              Professional presence,
              <span className="inline-block text-[#1455d9]">
                {" "}
                practical control
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
      <section className="border-b border-[#062b72]/10 py-16 sm:py-20 lg:py-[16px]">
        <div className="mx-auto w-[min(100%-32px,1180px)] sm:w-[min(100%-48px,1180px)]">
          <div className="mb-9 max-w-[700px]">
            <div className="mb-3 inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#1455d9]">
              <span className="h-px w-7 bg-current opacity-70" />
              Our Solution
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl lg:text-[35px]">
              Built for performance,{" "}
              <span className="inline-block text-[#1455d9]">
                scale, and search
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
        className="border-b border-[#062b72]/10 py-16 sm:py-20 lg:py-[16px]"
      >
        <div className="mx-auto w-[min(100%-32px,1180px)] sm:w-[min(100%-48px,1180px)]">
          <div className="mb-9 max-w-[700px]">
            <div className="mb-3 inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#1455d9]">
              <span className="h-px w-7 bg-current opacity-70" />
              Results
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl lg:text-[42px]">
              A foundation the team{" "}
              <span className="inline-block text-[#1455d9]">can build on</span>
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
          GRAPH — inline SVG, no chart library
      ========================================================== */}
      <section className="border-b border-[#062b72]/10 py-16 sm:py-20 lg:py-[16px]">
        <div className="mx-auto w-[min(100%-32px,1180px)] sm:w-[min(100%-48px,1180px)]">
          {/* Section Heading */}
          <div className="mb-9 max-w-[700px]">
            <div className="mb-3 inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#1455d9]">
              <span className="h-px w-7 bg-current opacity-70" />
              Growth Foundation
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl lg:text-[30px]">
              From corporate presentation{" "}
              <span className="inline-block text-[#1455d9]">
                to scalable platform
              </span>
            </h2>
          </div>

          {/* Animated Chart Container */}
          <div className="rounded-[22px] border border-[#062b72]/10 bg-white p-5 shadow-[0_8px_30px_rgba(7,35,82,.06)] sm:p-[30px]">
            <div className="mb-6 font-mono text-[10px] uppercase tracking-[0.1em] text-[#59677f]">
              Website transformation — structure, performance &amp; search
              readiness
            </div>

            {/* Chart */}
            <div className="relative overflow-hidden rounded-[18px] border border-[#062b72]/10 bg-gradient-to-b from-[#f8fbff] to-white p-4 sm:p-6">
              {/* Top Metric */}
              <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                  <p className="m-0 text-[10px] font-bold uppercase tracking-[.14em] text-[#59677f]">
                    Platform Maturity
                  </p>

                  <div className="mt-1 flex items-end gap-2">
                    <span className="text-3xl font-bold tracking-[-.04em] text-[#062b72] sm:text-4xl">
                      92%
                    </span>

                    <span className="mb-1 text-[10px] font-semibold text-[#1455d9]">
                      Growth Ready
                    </span>
                  </div>
                </div>

                {/* Animated Pulse */}
                <div className="flex items-center gap-2 rounded-full border border-[#1455d9]/10 bg-[#1455d9]/5 px-3 py-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1455d9] opacity-50" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1455d9]" />
                  </span>

                  <span className="font-mono text-[9px] font-bold uppercase tracking-[.08em] text-[#1455d9]">
                    Improving
                  </span>
                </div>
              </div>

              {/* Chart Area */}
              <div className="relative h-[270px] overflow-hidden rounded-[14px] bg-white">
                {/* Horizontal Grid */}
                <div className="pointer-events-none absolute inset-0 flex flex-col justify-between py-5">
                  <span className="h-px w-full bg-[#062b72]/[.06]" />
                  <span className="h-px w-full border-t border-dashed border-[#062b72]/[.07]" />
                  <span className="h-px w-full border-t border-dashed border-[#062b72]/[.07]" />
                  <span className="h-px w-full border-t border-dashed border-[#062b72]/[.07]" />
                  <span className="h-px w-full bg-[#062b72]/[.08]" />
                </div>

                {/* Y Axis Labels */}
                <div className="absolute left-0 top-0 flex h-full flex-col justify-between py-3 font-mono text-[8px] text-[#7a879b]">
                  <span>100</span>
                  <span>75</span>
                  <span>50</span>
                  <span>25</span>
                  <span>0</span>
                </div>

                {/* Animated SVG */}
                <svg
                  viewBox="0 0 900 300"
                  preserveAspectRatio="none"
                  className="absolute inset-0 h-full w-full pl-7"
                >
                  <defs>
                    <linearGradient id="growthFill" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="0%"
                        stopColor="#1455d9"
                        stopOpacity="0.18"
                      />

                      <stop offset="100%" stopColor="#1455d9" stopOpacity="0" />
                    </linearGradient>

                    <filter id="softGlow">
                      <feGaussianBlur stdDeviation="5" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Area */}
                  <path
                    d="M0 250
                 L180 215
                 L360 170
                 L540 105
                 L720 65
                 L900 25
                 L900 300
                 L0 300 Z"
                    fill="url(#growthFill)"
                    className="animate-[chartFade_1.5s_ease-out_forwards]"
                  />

                  {/* Main Line */}
                  <path
                    d="M0 250
                 L180 215
                 L360 170
                 L540 105
                 L720 65
                 L900 25"
                    fill="none"
                    stroke="#1455d9"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    pathLength="1"
                    strokeDasharray="1"
                    strokeDashoffset="1"
                    className="animate-[drawLine_2.5s_cubic-bezier(.65,0,.35,1)_forwards]"
                    filter="url(#softGlow)"
                  />

                  {/* Stage Points */}
                  <g>
                    <circle
                      cx="0"
                      cy="250"
                      r="6"
                      fill="#1455d9"
                      className="animate-[pointPop_.5s_ease-out_.2s_both]"
                    />

                    <circle
                      cx="180"
                      cy="215"
                      r="6"
                      fill="#1455d9"
                      className="animate-[pointPop_.5s_ease-out_.5s_both]"
                    />

                    <circle
                      cx="360"
                      cy="170"
                      r="6"
                      fill="#1455d9"
                      className="animate-[pointPop_.5s_ease-out_.8s_both]"
                    />

                    <circle
                      cx="540"
                      cy="105"
                      r="6"
                      fill="#1455d9"
                      className="animate-[pointPop_.5s_ease-out_1.1s_both]"
                    />

                    <circle
                      cx="720"
                      cy="65"
                      r="6"
                      fill="#1455d9"
                      className="animate-[pointPop_.5s_ease-out_1.4s_both]"
                    />

                    <circle
                      cx="900"
                      cy="25"
                      r="8"
                      fill="#062b72"
                      className="animate-[pointPulse_2s_ease-in-out_infinite]"
                    />
                  </g>
                </svg>

                {/* Moving Indicator */}
                <div className="pointer-events-none absolute inset-x-[7%] top-[8%] h-[82%]">
                  <div className="absolute right-0 top-0">
                    <div className="relative">
                      <div className="absolute -inset-3 animate-ping rounded-full bg-[#1455d9]/10" />

                      <div className="relative flex h-3 w-3 items-center justify-center rounded-full bg-[#062b72] shadow-[0_0_20px_rgba(20,85,217,.35)]">
                        <span className="h-1.5 w-1.5 rounded-full bg-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* X Axis Labels */}
                <div className="absolute bottom-1 left-8 right-0 grid grid-cols-5 gap-2 text-center font-mono text-[8px] text-[#59677f] sm:text-[9px]">
                  <span>Foundation</span>
                  <span>CMS</span>
                  <span>Performance</span>
                  <span>SEO</span>
                  <span>Growth Ready</span>
                </div>
              </div>

              {/* Progress Cards */}
              <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-5">
                {[
                  ["01", "Foundation", "32%"],
                  ["02", "CMS", "48%"],
                  ["03", "Performance", "67%"],
                  ["04", "SEO", "81%"],
                  ["05", "Growth Ready", "92%"],
                ].map(([number, label, value], index) => (
                  <div
                    key={number}
                    className="group rounded-[14px] border border-[#062b72]/10 bg-[#f8fbff] p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#1455d9]/20 hover:shadow-[0_8px_20px_rgba(20,85,217,.08)]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[8px] font-bold text-[#1455d9]">
                        {number}
                      </span>

                      <span className="text-[10px] font-bold text-[#062b72]">
                        {value}
                      </span>
                    </div>

                    <p className="mt-2 m-0 text-[9px] font-semibold text-[#59677f]">
                      {label}
                    </p>

                    <div className="mt-2 h-1 overflow-hidden rounded-full bg-[#062b72]/[.07]">
                      <div
                        className="h-full rounded-full bg-[#1455d9] transition-all duration-1000 ease-out"
                        style={{
                          width: value,
                          animation: `progressGrow 1.4s ease-out ${index * 0.15}s both`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Description */}
              <div className="mt-5 border-t border-[#062b72]/10 pt-3 text-[12px] leading-6 text-[#59677f]">
                This visual represents the build progression described in the
                case study: CMS setup, custom design, performance, technical
                SEO, security, and lead-generation structure.
              </div>
            </div>
          </div>
        </div>

        {/* Animation Keyframes */}
        <style jsx>{`
          @keyframes drawLine {
            from {
              stroke-dashoffset: 1;
            }
            to {
              stroke-dashoffset: 0;
            }
          }

          @keyframes chartFade {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes pointPop {
            from {
              opacity: 0;
              transform: scale(0);
              transform-origin: center;
            }
            to {
              opacity: 1;
              transform: scale(1);
              transform-origin: center;
            }
          }

          @keyframes pointPulse {
            0%,
            100% {
              transform: scale(1);
              opacity: 1;
            }

            50% {
              transform: scale(1.35);
              opacity: 0.7;
            }
          }

          @keyframes progressGrow {
            from {
              width: 0;
            }
          }
        `}</style>
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
      <section className="border-b border-[#062b72]/10 py-16 sm:py-20 lg:py-[16px]">
        <div className="mx-auto w-[min(100%-32px,1180px)] sm:w-[min(100%-48px,1180px)]">
          <div className="relative overflow-hidden rounded-[24px] border border-[#1455d9]/15 bg-gradient-to-br from-[#f0f5ff] to-[#e6efff] p-7 shadow-[0_8px_30px_rgba(7,35,82,.06)] sm:p-[45px]">
            <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#1455d9]/[0.07]" />

            <div className="relative z-10">
              <div className="mb-2 font-serif text-[72px] leading-[0.55] text-[#1455d9]">
                "
              </div>

              <blockquote className="max-w-[900px] text-xl font-medium leading-[1.45] tracking-[-0.025em] text-[#101a2e] sm:text-2xl lg:text-[29px]">
                Akkurate Digital Solutions delivered a premium website
                experience. Their attention to detail and SEO expertise exceeded
                our expectations.
              </blockquote>

              <div className="mt-5 font-mono text-[11px] text-[#59677f]">
                — Pentagon Tax Corp
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-5 border-t border-[#062b72]/10 pt-4 font-mono text-[11px] text-[#59677f]">
            <span>Reading duration: 4 min</span>
            <span>Category: Corporate CMS Website</span>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================== */}
      <section className="py-16 sm:py-20 lg:py-[16px]">
        <div className="mx-auto w-[min(100%-32px,1180px)] sm:w-[min(100%-48px,1180px)]">
          <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#031a46] to-[#1455d9] p-7 shadow-[0_18px_55px_rgba(7,35,82,.1)] sm:p-[46px]">
            <div className="absolute -right-24 -top-36 h-[280px] w-[280px] rounded-full bg-white/[0.07]" />

            <div className="relative z-10 grid grid-cols-1 items-center gap-7 lg:grid-cols-[1fr_auto] lg:gap-[30px]">
              <h3 className="max-w-[700px] text-2xl font-bold leading-tight tracking-[-0.035em] text-white sm:text-3xl">
                Need a corporate site built for growth,
                <span className="block text-[#8fc1ff]">
                  not just launch day?
                </span>
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
      <section className="border-t border-[#062b72]/10 bg-[#f8faff] py-16 sm:py-20 lg:py-[40px]">
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

      {/* =========================================================
          TAILWIND-FRIENDLY KEYFRAMES
          No separate CSS file needed.
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

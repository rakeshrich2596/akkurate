import React, {
  useEffect,
  useRef,
  useState,
} from "react";

const results = [
  {
    value: "3X – 5X",
    description:
      "Average ROAS Across Campaigns",
    type: "center",
    dark: true,
    width: "max-w-[388px]",
    countType: "range",
    start: 3,
    end: 5,
    suffix: "X",
  },

  {
    value: "40%",
    description:
      "Reduction in Customer Acquisition Cost",
    type: "row",
    dark: true,
    width: "max-w-[514px]",
    arrow: true,
    countType: "single",
    start: 40,
    suffix: "%",
  },

  {
    value: "2x",
    description:
      "Increase in Qualified Leads Within 90 Days",
    type: "row",
    dark: false,
    width: "max-w-[388px]",
    countType: "single",
    start: 2,
    suffix: "x",
  },

  {
    value: "60%",
    description:
      "Faster Funnel Conversions",
    type: "row",
    dark: false,
    width: "max-w-[490px]",
    countType: "single",
    start: 60,
    suffix: "%",
  },

  {
    value: "25%",
    description:
      "Improvement in Retention Metrics",
    type: "center",
    dark: true,
    width: "max-w-[288px]",
    countType: "single",
    start: 25,
    suffix: "%",
  },

  {
    value: "100%",
    description:
      "Transparent Performance Reporting clients",
    type: "row",
    dark: false,
    width: "max-w-[514px]",
    countType: "single",
    start: 100,
    suffix: "%",
  },
];

/* =========================================================
   COUNT UP COMPONENT
========================================================= */

function CountUpValue({
  item,
  isVisible,
}) {
  const [count, setCount] =
    useState(0);

  useEffect(() => {
    if (!isVisible) {
      setCount(0);
      return;
    }

    // Faster count animation
    const duration = 1200;

    const startTime =
      performance.now();

    const target =
      item.countType === "range"
        ? item.end
        : item.start;

    let animationFrame;

    const animate = (
      currentTime
    ) => {
      const elapsed =
        currentTime - startTime;

      const progress = Math.min(
        elapsed / duration,
        1
      );

      /*
        Smooth ease-out
        Fast initially -> slower near target
      */

      const easeOut =
        1 -
        Math.pow(
          1 - progress,
          3
        );

      const currentValue =
        Math.floor(
          easeOut * target
        );

      setCount(currentValue);

      if (progress < 1) {
        animationFrame =
          requestAnimationFrame(
            animate
          );
      } else {
        setCount(target);
      }
    };

    animationFrame =
      requestAnimationFrame(
        animate
      );

    return () => {
      cancelAnimationFrame(
        animationFrame
      );
    };
  }, [
    isVisible,
    item,
  ]);

  /* =======================================================
     RANGE VALUE

     3X – 5X
  ======================================================= */

  if (
    item.countType ===
    "range"
  ) {
    const rangeStart =
      count === 0
        ? 0
        : Math.min(
            count,
            item.start
          );

    const rangeEnd =
      count === 0
        ? 0
        : count;

    return (
      <>
        {rangeStart}
        {item.suffix} –{" "}
        {rangeEnd}
        {item.suffix}
      </>
    );
  }

  /* =======================================================
     NORMAL VALUE

     0 -> 40%
     0 -> 60%
     0 -> 100%
  ======================================================= */

  return (
    <>
      {count}
      {item.suffix}
    </>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

function ResultsSection() {
  const sectionRef =
    useRef(null);

  const [isVisible, setIsVisible] =
    useState(false);

  /* =========================================================
     INTERSECTION OBSERVER
  ========================================================= */

  useEffect(() => {
    const section =
      sectionRef.current;

    if (!section) return;

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (
            entry.isIntersecting
          ) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        },
        {
          threshold: 0.2,
        }
      );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        bg-white
        pb-10
        pt-2

        sm:pb-14
        sm:pt-4

        lg:pb-20
        lg:pt-6
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]

          px-4

          sm:px-6

          lg:px-8
        "
      >
        {/* ==========================================
            HEADING
        ========================================== */}

        <h3
          className="
            mb-8
            overflow-hidden
            px-2

            text-center
            text-2xl
            font-light
            leading-[1.08]
            tracking-tight
            text-[#081a4b]

            sm:mb-10
            sm:text-3xl

            md:text-4xl

            lg:mb-14
            lg:text-5xl
          "
        >
          {/* ACCURATE */}

          <span
            className={`
              mr-2
              inline-block

              transition-all
              duration-700
              ease-out

              ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-20 opacity-0"
              }
            `}
          >
            Accurate
          </span>

          {/* RESULTS */}

          <span
            className={`
              mr-2
              inline-block
              font-semibold

              transition-all
              duration-700
              ease-out

              ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-20 opacity-0"
              }
            `}
            style={{
              transitionDelay:
                isVisible
                  ? "180ms"
                  : "0ms",
            }}
          >
            Results
          </span>

          {/* THAT COMPOUND */}

          <span
            className={`
              inline-block

              transition-all
              duration-700
              ease-out

              ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-20 opacity-0"
              }
            `}
            style={{
              transitionDelay:
                isVisible
                  ? "360ms"
                  : "0ms",
            }}
          >
            That Compound
          </span>
        </h3>

        {/* ==========================================
            RESULTS GRID
        ========================================== */}

        <div
          className="
            grid
            w-full
            grid-cols-1
            justify-items-center
            gap-4

            sm:grid-cols-2
            sm:gap-5

            lg:flex
            lg:flex-wrap
            lg:justify-center
            lg:gap-4
          "
        >
          {results.map(
            (result, index) => (
              <div
                key={index}
                className={`
                  result-card
                  group
                  relative

                  flex
                  w-full
                  ${result.width}

                  ${
                    index === 1
                      ? "mt-2 sm:mt-3 lg:mt-4"
                      : ""
                  }

                  min-h-[150px]

                  items-center
                  justify-center

                  rounded-[80px]

                  px-5
                  py-6

                  sm:min-h-[165px]
                  sm:px-6

                  md:min-h-[175px]
                  md:px-8

                  lg:min-h-[184px]
                  lg:px-10

                  transition-all
                  duration-700
                  ease-[cubic-bezier(0.16,1,0.3,1)]

                  ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-14 opacity-0"
                  }

                  ${
                    result.dark
                      ? `
                        bg-[#1351D8]
                        text-white

                        shadow-[0_10px_30px_rgba(0,0,0,0.02)]

                        hover:-translate-y-2

                        hover:shadow-[0_20px_40px_rgba(19,81,216,0.22)]
                      `
                      : `
                        border
                        border-[#e8eaf0]
                        bg-white
                        text-[#1351D8]

                        shadow-[0_10px_30px_rgba(15,23,42,0.04)]

                        hover:-translate-y-2

                        hover:border-[#1351D8]

                        hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)]
                      `
                  }

                  ${
                    result.type ===
                    "center"
                      ? "flex-col gap-2 text-center"
                      : "flex-row gap-6 text-left"
                  }

                  max-[767px]:flex-col
                  max-[767px]:gap-3
                  max-[767px]:rounded-[42px]
                  max-[767px]:px-5
                  max-[767px]:py-5
                `}
                style={{
                  transitionDelay:
                    isVisible
                      ? `${
                          500 +
                          index *
                            120
                        }ms`
                      : "0ms",
                }}
              >
                {/* =================================================
                    STATIC OUTLINE
                ================================================= */}

                <span
                  className={`
                    pointer-events-none
                    absolute
                    inset-[-3px]

                    rounded-[83px]

                    opacity-0

                    transition-opacity
                    duration-300

                    group-hover:opacity-100

                    max-[767px]:rounded-[45px]

                    ${
                      result.dark
                        ? "border-2 border-white/90"
                        : "border-2 border-[#1351D8]"
                    }
                  `}
                />

                {/* =================================================
                    MOVING BORDER
                ================================================= */}

                <span
                  className="
                    pointer-events-none
                    absolute
                    inset-[-3px]

                    overflow-hidden
                    rounded-[83px]

                    opacity-0

                    transition-opacity
                    duration-300

                    group-hover:opacity-100

                    max-[767px]:rounded-[45px]
                  "
                >
                  <span
                    className={`
                      absolute
                      left-1/2
                      top-1/2

                      h-[220%]
                      w-[45%]

                      sm:w-[40%]

                      lg:w-[35%]

                      -translate-x-1/2
                      -translate-y-1/2

                      animate-border-spin

                      ${
                        result.dark
                          ? "bg-white/80"
                          : "bg-[#1351D8]/70"
                      }
                    `}
                  />
                </span>

                {/* =================================================
                    INNER MASK
                ================================================= */}

                <span
                  className={`
                    pointer-events-none
                    absolute
                    inset-0
                    z-[1]

                    rounded-[80px]

                    max-[767px]:rounded-[42px]

                    ${
                      result.dark
                        ? "bg-[#1351D8]"
                        : "bg-white"
                    }
                  `}
                />

                {/* =================================================
                    CARD CONTENT
                ================================================= */}

                <div
                  className={`
                    relative
                    z-[2]

                    flex
                    w-full
                    items-center
                    justify-center

                    ${
                      result.type ===
                      "center"
                        ? "flex-col gap-2 text-center"
                        : "flex-row gap-6 text-left"
                    }

                    max-[768px]:flex-col
                    max-[768px]:gap-3
                  `}
                >
                  {/* ======================================
                      VALUE / COUNT UP
                  ====================================== */}

                  <div
                    className={`
                      flex
                      shrink-0
                      items-center

                      ${
                        result.type ===
                        "center"
                          ? "justify-center"
                          : "justify-center"
                      }
                    `}
                  >
                    {/* ======================================
                        GREEN INCREASE ARROW

                        ↑ 40%
                    ====================================== */}

                    {result.arrow && (
                      <img
                        src="/assets/images/icons/arrow-up-green.svg"
                        alt=""
                        className="
                          mr-2

                          inline-block
                          h-7
                          w-auto
                          shrink-0

                          align-middle

                          transition-transform
                          duration-300

                          group-hover:-translate-y-1

                          sm:mr-2.5
                          sm:h-8

                          md:h-9

                          lg:h-10
                        "
                      />
                    )}

                    {/* ======================================
                        COUNT VALUE
                    ====================================== */}

                    <h3
                      className={`
                        m-0
                        whitespace-nowrap

                        text-5xl
                        font-medium
                        leading-none

                        sm:text-6xl

                        lg:text-6xl

                        ${
                          result.dark
                            ? "text-white"
                            : "text-[#1351D8]"
                        }

                        transition-transform
                        duration-300

                        group-hover:scale-105
                      `}
                    >
                      <CountUpValue
                        item={result}
                        isVisible={
                          isVisible
                        }
                      />
                    </h3>
                  </div>

                  {/* ======================================
                      DESCRIPTION
                  ====================================== */}

                  <p
                    className={`
                      m-0
                      max-w-[250px]

                      text-sm
                      leading-[1.45]

                      sm:max-w-[260px]
                      sm:text-base

                      md:text-[17px]

                      lg:text-base

                      ${
                        result.dark
                          ? "text-white"
                          : "text-[#071a45]"
                      }

                      ${
                        result.type ===
                        "row"
                          ? "max-w-[260px] sm:max-w-[220px]"
                          : "mx-auto"
                      }
                    `}
                  >
                    {
                      result.description
                    }
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* =====================================================
          CUSTOM BORDER ANIMATION
      ===================================================== */}

      <style>{`

        @keyframes borderSpin {

          0% {
            transform:
              translate(-50%, -50%)
              rotate(0deg);
          }

          100% {
            transform:
              translate(-50%, -50%)
              rotate(360deg);
          }

        }

        .animate-border-spin {
          animation:
            borderSpin
            2.8s
            linear
            infinite;
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (min-width: 768px) and (max-width: 1023px) {

          .result-card {
            min-height: 170px;
          }

        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 767px) {

          .result-card {
            min-height: 145px;
          }

          .result-card h3 {
            font-size: 48px;
          }

        }

        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 480px) {

          .result-card {
            min-height: 135px;
            padding-left: 16px;
            padding-right: 16px;
          }

          .result-card h3 {
            font-size: 44px;
          }

        }

        /* =====================================================
           VERY SMALL MOBILE
        ===================================================== */

        @media (max-width: 380px) {

          .result-card h3 {
            font-size: 40px;
          }

          .result-card p {
            font-size: 13px;
          }

        }

        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .animate-border-spin {
            animation: none;
          }

        }

      `}</style>
    </section>
  );
}

export default ResultsSection;
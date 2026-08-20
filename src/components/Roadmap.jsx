import React, { useEffect, useRef, useState } from "react";

const roadmapItems = [
  {
    number: "01",
    title: "SEO",
    icon: "/assets/images/icons/roadmap-icon1.svg",
    color: "bg-[#2563eb]",
    margin: "mt-14",
  },
  {
    number: "02",
    title: "Video production",
    icon: "/assets/images/icons/roadmap-icon2.svg",
    color: "bg-[#151D42]",
    margin: "-mt-2",
  },
  {
    number: "03",
    title: "YouTube and Meta ads",
    icon: "/assets/images/icons/roadmap-icon3.svg",
    color: "bg-[#075985]",
    margin: "mt-10",
  },
  {
    number: "04",
    title: "Whatsapp automation",
    icon: "/assets/images/icons/roadmap-icon4.svg",
    color: "bg-[#151D42]",
    margin: "-mt-7",
  },
  {
    number: "05",
    title: "Linkedin management",
    icon: "/assets/images/icons/roadmap-icon5.svg",
    color: "bg-[#151D42]",
    margin: "mt-8",
  },
  {
    number: "06",
    title: "Logo design",
    icon: "/assets/images/icons/roadmap-icon6.svg",
    color: "bg-[#ec4899]",
    margin: "-mt-2",
  },
  {
    number: "07",
    title: "Google Adwords",
    icon: "/assets/images/icons/roadmap-icon7.svg",
    color: "bg-[#2563eb]",
    margin: "mt-4",
  },
  {
    number: "08",
    title: "App development",
    icon: "/assets/images/icons/roadmap-icon8.svg",
    color: "bg-[#075985]",
    margin: "-mt-7",
  },
];

/* =========================================================
   ANIMATED COUNTER
========================================================= */

function AnimatedCounter({
  end,
  suffix = "",
  duration = 1800,
  start = false,
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) {
      setCount(0);
      return;
    }

    let animationFrame;

    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed =
        currentTime - startTime;

      const progress = Math.min(
        elapsed / duration,
        1
      );

      const eased =
        1 - Math.pow(1 - progress, 3);

      setCount(
        Number(
          (eased * end).toFixed(1)
        )
      );

      if (progress < 1) {
        animationFrame =
          requestAnimationFrame(animate);
      }
    };

    animationFrame =
      requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(
          animationFrame
        );
      }
    };
  }, [start, end, duration]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

/* =========================================================
   ROADMAP
========================================================= */

function Roadmap() {
  const sectionRef = useRef(null);

  const [isVisible, setIsVisible] =
    useState(false);

  /* =========================================================
     SCROLL OBSERVER
  ========================================================= */

  useEffect(() => {
    const section =
      sectionRef.current;

    if (!section) return;

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
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
        pb-20
        pt-0
      "
    >
      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          mx-auto
          max-w-[1440px]
          px-4

          sm:px-6
        "
      >
        {/* ===================================================
            ROADMAP BOX
        ==================================================== */}

        <div
          id="roadmap-section"
          className="
            relative
            overflow-hidden
            rounded-3xl
            bg-[#202A58]
          "
        >
          {/* =================================================
              CONTENT
          ================================================= */}

          <div
            className="
              px-4
              sm:px-6
              lg:px-10
              xl:pl-[74px]
              xl:pr-6
            "
          >
            <div
              className="
                flex
                flex-col
                gap-8

                lg:flex-row
                lg:items-start
                lg:gap-10

                xl:gap-5
              "
            >
              {/* =================================================
                  LEFT CONTENT
              ================================================= */}

              <div
                className="
                  w-full
                  max-w-none
                  shrink-0
                  pt-8

                  sm:pt-10

                  lg:max-w-[400px]
                  lg:pt-[60px]
                "
              >
                {/* =================================================
                    SMALL TITLE
                ================================================= */}

                <span
                  className={`
                    mb-3
                    inline-block
                    text-sm
                    font-semibold
                    capitalize
                    text-white

                    transition-all
                    duration-700
                    ease-out

                    ${
                      isVisible
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-16 opacity-0"
                    }
                  `}
                >
                  What we do
                </span>

                {/* =================================================
                    MAIN HEADING
                ================================================= */}

                <h3
                  className={`
                    mb-6
                    max-w-full
                    text-2xl
                    font-light
                    leading-[1.04]
                    text-white

                    sm:text-3xl

                    lg:text-4xl

                    transition-all
                    duration-1000
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
                        ? "150ms"
                        : "0ms",
                  }}
                >
                  <span className="font-semibold">
                    From Accurate Strategy to Scalable Revenue
                  </span>
                </h3>

                {/* =================================================
                    DESCRIPTION
                ================================================= */}

                <p
                  className={`
                    max-w-full
                    text-sm
                    leading-6
                    text-neutral-400

                    sm:text-base
                    sm:leading-7

                    transition-all
                    duration-1000
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
                        ? "350ms"
                        : "0ms",
                  }}
                >
                  A structured, tech-driven roadmap that turns
                  marketing into a predictable growth engine.
                </p>

                {/* =================================================
                    BUTTON + CLIENT REVIEWS
                ================================================= */}

                <div
                  className={`
                    mt-8
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-5

                    sm:justify-start
                    sm:gap-8

                    transition-all
                    duration-1000
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
                        ? "550ms"
                        : "0ms",
                  }}
                >
                  {/* =================================================
                      GET STARTED BUTTON
                  ================================================= */}

                  <a
                    href="/register"
                    className="
                      inline-flex
                      shrink-0
                      items-center
                      justify-center

                      rounded-full
                      bg-[#2563eb]

                      px-7
                      py-3.5

                      text-[13px]
                      font-semibold
                      text-white

                      transition-all
                      duration-300

                      hover:-translate-y-1
                      hover:scale-105
                      hover:bg-[#3b82f6]

                      active:scale-95

                      sm:px-10
                      sm:py-4
                      sm:text-[15px]

                      lg:px-12
                    "
                  >
                    Get Started
                  </a>

                  {/* =================================================
                      CLIENT REVIEW BLOCK

                      [LOGO] [LOGO] [LOGO] 2.3M+
                                      5000+ Client reviews
                  ================================================= */}

                  <div
                    className="
                      flex
                      min-w-0
                      flex-col
                      items-end
                      justify-center
                    "
                  >
                    {/* =================================================
                        TOP ROW
                    ================================================= */}

                    <div
                      className="
                        flex
                        items-center
                        gap-2

                        sm:gap-3
                      "
                    >
                      {/* =================================================
                          CLIENT LOGOS
                      ================================================= */}

                      <div
                        className="
                          flex
                          items-center
                        "
                      >
                        {/* LOGO 1 */}

                        <div
                          className="
                            relative
                            z-[3]

                            h-8
                            w-8

                            overflow-hidden
                            rounded-full
                            border
                            border-white/20
                            bg-white

                            transition-all
                            duration-300

                            hover:z-10
                            hover:scale-110

                            sm:h-9
                            sm:w-9
                          "
                        >
                          <img
                            src="/assets/images/brand_logo/brand03.png"
                            alt="Client"
                            className="
                              h-full
                              w-full
                              object-cover
                            "
                          />
                        </div>

                        {/* LOGO 2 */}

                        <div
                          className="
                            relative
                            z-[2]

                            -ml-2

                            h-8
                            w-8

                            overflow-hidden
                            rounded-full
                            border
                            border-white/20
                            bg-white

                            transition-all
                            duration-300

                            hover:z-10
                            hover:scale-110

                            sm:h-9
                            sm:w-9
                          "
                        >
                          <img
                            src="/assets/images/brand_logo/brand06.png"
                            alt="Client"
                            className="
                              h-full
                              w-full
                              object-cover
                            "
                          />
                        </div>

                        {/* LOGO 3 */}

                        <div
                          className="
                            relative
                            z-[1]

                            -ml-2

                            h-8
                            w-8

                            overflow-hidden
                            rounded-full
                            border
                            border-white/20
                            bg-white

                            transition-all
                            duration-300

                            hover:z-10
                            hover:scale-110

                            sm:h-9
                            sm:w-9
                          "
                        >
                          <img
                            src="/assets/images/brand_logo/brand01.png"
                            alt="Client"
                            className="
                              h-full
                              w-full
                              object-cover
                            "
                          />
                        </div>
                      </div>

                      {/* =================================================
                          2.3M+
                      ================================================= */}

                      <span
                        className="
                          whitespace-nowrap
                          text-lg
                          font-bold
                          leading-none
                          text-white

                          sm:text-2xl
                        "
                      >
                        <AnimatedCounter
                          end={2.3}
                          suffix="M+"
                          duration={1800}
                          start={isVisible}
                        />
                      </span>
                    </div>

                    {/* =================================================
                        5000+ CLIENT REVIEWS

                        RIGHT ALIGNED UNDER 2.3M+
                    ================================================= */}

                    <p
                      className="
                        mt-2
                        w-full

                        text-right

                        text-[10px]
                        font-semibold
                        leading-none
                        text-white

                        sm:text-xs
                      "
                    >
                      <AnimatedCounter
                        end={5000}
                        suffix="+ Client reviews"
                        duration={1800}
                        start={isVisible}
                      />
                    </p>
                  </div>
                </div>
              </div>

              {/* =================================================
                  RIGHT SIDE - ROADMAP BALLS
              ================================================= */}

              <div
                className="
                  w-full
                  min-w-0
                  flex-1

                  pt-2

                  sm:pt-4

                  lg:pt-[60px]
                "
              >
                <div
                  className="
                    grid
                    grid-cols-2
                    items-center
                    justify-items-center
                    gap-4

                    sm:grid-cols-2
                    sm:gap-5

                    md:grid-cols-3

                    lg:flex
                    lg:flex-wrap
                    lg:justify-start
                    lg:gap-3
                  "
                >
                  {roadmapItems.map(
                    (item, index) => {
                      return (
                        <div
                          key={
                            item.number
                          }
                          className={`
                            ${item.color}

                            lg:${item.margin}

                            relative

                            flex
                            h-[125px]
                            w-[125px]

                            shrink-0
                            flex-col
                            items-center
                            justify-center

                            rounded-full
                            text-center

                            transition-all
                            duration-700
                            ease-out

                            sm:h-[150px]
                            sm:w-[150px]

                            md:h-[165px]
                            md:w-[165px]

                            lg:h-[180px]
                            lg:w-[180px]

                            ${
                              isVisible
                                ? "translate-y-0 scale-100 opacity-100"
                                : "-translate-y-24 scale-75 opacity-0"
                            }

                            hover:-translate-y-3
                            hover:scale-105
                          `}
                          style={{
                            transitionDelay:
                              isVisible
                                ? `${
                                    250 +
                                    index *
                                      140
                                  }ms`
                                : "0ms",
                          }}
                        >
                          {/* NUMBER */}

                          <span
                            className="
                              absolute
                              left-2
                              top-4

                              flex
                              h-5
                              w-5

                              items-center
                              justify-center

                              rounded-full
                              bg-[#38bdf8]

                              text-xs
                              font-medium
                              text-white

                              transition-all
                              duration-300

                              hover:scale-125

                              sm:h-6
                              sm:w-6
                            "
                          >
                            {item.number}
                          </span>

                          {/* ICON */}

                          <div
                            className="
                              flex
                              h-9
                              w-9

                              items-center
                              justify-center

                              animate-roadmap-icon

                              sm:h-10
                              sm:w-10
                            "
                            style={{
                              animationDelay:
                                `${index * 0.18}s`,
                            }}
                          >
                            <img
                              src={item.icon}
                              alt={
                                item.title
                              }
                              className="
                                h-8
                                w-8
                                object-contain

                                sm:h-9
                                sm:w-9
                              "
                            />
                          </div>

                          {/* TITLE */}

                          <h6
                            className="
                              mx-auto
                              mt-3

                              max-w-[100px]

                              text-xs
                              font-medium
                              leading-5
                              text-white

                              sm:mt-4
                              sm:max-w-[118px]
                              sm:text-sm
                            "
                          >
                            {item.title}
                          </h6>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              CURVE LINE
          ===================================================== */}

          <div
            className="
              px-4
              pb-6

              sm:px-6
              sm:pb-9
            "
          >
            <img
              src="/assets/images/shapes/curve-line.png"
              alt=""
              className="
                block
                h-auto
                w-full
              "
            />
          </div>
        </div>
      </div>

      {/* =====================================================
          ICON ANIMATION
      ===================================================== */}

      <style>{`

        @keyframes roadmapIconFloat {

          0% {
            transform:
              translateY(0px)
              rotate(0deg);
          }

          20% {
            transform:
              translateY(-3px)
              rotate(-2deg);
          }

          40% {
            transform:
              translateY(2px)
              rotate(2deg);
          }

          60% {
            transform:
              translateY(-4px)
              rotate(-1deg);
          }

          80% {
            transform:
              translateY(2px)
              rotate(1deg);
          }

          100% {
            transform:
              translateY(0px)
              rotate(0deg);
          }
        }

        .animate-roadmap-icon {
          animation:
            roadmapIconFloat
            2.8s
            ease-in-out
            infinite;

          will-change: transform;
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (min-width: 640px) and (max-width: 1023px) {

          #roadmap-section {
            border-radius: 24px;
          }

        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 639px) {

          #roadmap-section {
            border-radius: 22px;
          }

        }

        /* =====================================================
           VERY SMALL MOBILE
        ===================================================== */

        @media (max-width: 400px) {

          .client-review-block {
            transform: scale(0.92);
            transform-origin: right center;
          }

        }

        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .animate-roadmap-icon {
            animation: none;
          }

        }

      `}</style>
    </section>
  );
}

export default Roadmap;
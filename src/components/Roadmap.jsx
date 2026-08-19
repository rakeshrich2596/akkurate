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
    color: "bg-[#919bb3]",
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
    color: "bg-[#919bb3]",
    margin: "-mt-7",
  },
  {
    number: "05",
    title: "Linkedin management",
    icon: "/assets/images/icons/roadmap-icon5.svg",
    color: "bg-[#919bb3]",
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

function Roadmap() {
  const sectionRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  /* =========================================================
     SCROLL OBSERVER

     Section visible -> animation starts
     Section leaves   -> animation resets
     Coming again     -> animation plays again
  ========================================================= */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.20,
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
      ===================================================== */}

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
        =================================================== */}

        <div
          id="roadmap-section"
          className="
            relative
            overflow-hidden
            rounded-3xl
            bg-[#071a45]
          "
        >
          {/* =================================================
              CONTENT
          ================================================= */}

          <div className="px-6 lg:pl-[74px] lg:pr-6">
            <div
              className="
                flex
                flex-wrap
                gap-6
                xl:flex-nowrap
                xl:gap-5
              "
            >
              {/* =================================================
                  LEFT CONTENT
              ================================================= */}

              <div
                className="
                  w-full
                  max-w-[432px]
                  shrink-0
                  pt-12
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
                    max-w-[432px]
                    text-3xl
                    font-light
                    leading-[1.04]
                    text-white
                    sm:text-4xl

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
                    transitionDelay: isVisible
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
                    max-w-[432px]
                    text-base
                    leading-7
                    text-neutral-400

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
                    transitionDelay: isVisible
                      ? "350ms"
                      : "0ms",
                  }}
                >
                  A structured, tech-driven roadmap that turns
                  marketing into a predictable growth engine.
                </p>

                {/* =================================================
                    BUTTON + REVIEWS
                ================================================= */}

                <div
                  className={`
                    mt-10
                    flex
                    flex-wrap
                    items-center
                    gap-8

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
                    transitionDelay: isVisible
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
                      hidden
                      items-center
                      justify-center
                      rounded-full
                      bg-[#2563eb]
                      px-14
                      py-4
                      font-semibold
                      text-white

                      transition-all
                      duration-300

                      hover:-translate-y-1
                      hover:scale-105
                      hover:bg-[#3b82f6]

                      sm:inline-flex
                    "
                  >
                    Get Started
                  </a>

                  {/* =================================================
                      CLIENT REVIEWS
                  ================================================= */}

                  <div>
                    <div className="flex items-center gap-4">
                      {/* CLIENT IMAGES */}

                      <div className="flex items-center">
                        <div
                          className="
                            relative
                            z-[3]
                            h-9
                            w-9
                            overflow-hidden
                            rounded-full
                            bg-white

                            transition-all
                            duration-300

                            hover:z-10
                            hover:scale-110
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

                        <div
                          className="
                            relative
                            z-[2]
                            -ml-2.5
                            h-9
                            w-9
                            overflow-hidden
                            rounded-full
                            bg-white

                            transition-all
                            duration-300

                            hover:z-10
                            hover:scale-110
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

                        <div
                          className="
                            relative
                            z-[1]
                            -ml-2.5
                            h-9
                            w-9
                            overflow-hidden
                            rounded-full
                            bg-white

                            transition-all
                            duration-300

                            hover:z-10
                            hover:scale-110
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

                      {/* 2.3M */}

                      <span
                        className="
                          text-2xl
                          font-bold
                          text-white
                        "
                      >
                        2.3M+
                      </span>
                    </div>

                    {/* REVIEW TEXT */}

                    <p
                      className="
                        mt-2
                        text-sm
                        font-bold
                        text-white
                      "
                    >
                      5000+ Client reviews
                    </p>
                  </div>
                </div>
              </div>

              {/* =================================================
                  RIGHT SIDE - ROADMAP BALLS
              ================================================= */}

              <div
                className="
                  flex-1
                  pt-10
                  lg:pt-[60px]
                "
              >
                <div
                  className="
                    flex
                    flex-wrap
                    items-center
                    justify-center
                    gap-3
                    lg:justify-start
                  "
                >
                  {roadmapItems.map((item, index) => {
                    return (
                      <div
                        key={item.number}
                        className={`
                          ${item.margin}
                          ${item.color}

                          relative
                          flex
                          h-[150px]
                          w-[150px]
                          shrink-0
                          flex-col
                          items-center
                          justify-center
                          rounded-full
                          text-center

                          transition-all
                          duration-700
                          ease-out

                          sm:h-[170px]
                          sm:w-[170px]

                          lg:h-[180px]
                          lg:w-[180px]

                          ${
                            isVisible
                              ? "translate-y-0 scale-100 opacity-100"
                              : "translate-y-16 scale-75 opacity-0"
                          }

                          hover:-translate-y-3
                          hover:scale-105
                        `}
                        style={{
                          transitionDelay: isVisible
                            ? `${300 + index * 120}ms`
                            : "0ms",
                        }}
                      >
                        {/* =====================================
                            NUMBER
                        ===================================== */}

                        <span
                          className="
                            absolute
                            left-2
                            top-5
                            flex
                            h-6
                            w-6
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
                          "
                        >
                          {item.number}
                        </span>

                        {/* =====================================
                            ICON

                            Continuous attractive floating
                            animation
                        ===================================== */}

                        <div
                          className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center

                            animate-roadmap-icon
                          "
                          style={{
                            animationDelay: `${index * 0.18}s`,
                          }}
                        >
                          <img
                            src={item.icon}
                            alt={item.title}
                            className="
                              h-9
                              w-9
                              object-contain
                            "
                          />
                        </div>

                        {/* =====================================
                            TITLE
                        ===================================== */}

                        <h6
                          className="
                            mx-auto
                            mt-4
                            max-w-[118px]
                            text-sm
                            font-medium
                            leading-5
                            text-white
                          "
                        >
                          {item.title}
                        </h6>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              CURVE LINE
          ===================================================== */}

          <div className="pb-9">
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

          Add custom keyframes globally
      ===================================================== */}

      <style>{`
        @keyframes roadmapIconFloat {
          0% {
            transform: translateY(0px) rotate(0deg);
          }

          20% {
            transform: translateY(-3px) rotate(-2deg);
          }

          40% {
            transform: translateY(2px) rotate(2deg);
          }

          60% {
            transform: translateY(-4px) rotate(-1deg);
          }

          80% {
            transform: translateY(2px) rotate(1deg);
          }

          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }

        .animate-roadmap-icon {
          animation: roadmapIconFloat 2.8s ease-in-out infinite;
          will-change: transform;
        }

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
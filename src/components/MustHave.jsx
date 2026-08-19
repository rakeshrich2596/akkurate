import React, { useEffect, useRef, useState } from "react";

const services = [
  {
    number: "1.",
    title: "Strong Brand Identity",
    description:
      "Your brand is what people remember after they leave your website. A consistent logo and identity builds trust from the very first click.",
  },
  {
    number: "2.",
    title: "High-Performing Website",
    description:
      "A website should be fast, mobile-friendly, and easy to navigate. Great design means nothing if visitors don't take action.",
  },
  {
    number: "3.",
    title: "Search Engine Visibility",
    description:
      "Your ideal customers should be able to find you on Google. SEO helps your website attract traffic long after it's launched.",
  },
  {
    number: "4.",
    title: "Lead Generation System",
    description:
      "Every website needs a clear way to capture enquiries. Forms, CTAs, and landing pages turn visitors into potential customers.",
  },
  {
    number: "5.",
    title: "Social Media Presence",
    description:
      "Customers often check your social channels before making a decision. Active profiles strengthen credibility and extend your reach.",
  },
  {
    number: "6.",
    title: "LinkedIn Personal Brand",
    description:
      "For B2B businesses, LinkedIn is your digital reputation. A strong presence builds authority and creates valuable business opportunities.",
  },
  {
    number: "7.",
    title: "Professional Visuals",
    description:
      "High-quality photos and videos make your business feel more credible. Strong visuals communicate your story faster than words.",
  },
];

/* =========================================================
   LETTER ANIMATION
========================================================= */

function AnimatedTitle({ text, start }) {
  return (
    <span className="block">
      {text.split("").map((letter, index) => (
        <span
          key={`${letter}-${index}`}
          className={`
            inline-block
            transform
            transition-all
            duration-500
            ease-out
            ${
              start
                ? "translate-x-0 opacity-100"
                : "translate-x-[-18px] opacity-0"
            }
          `}
          style={{
            transitionDelay: start
              ? `${index * 35}ms`
              : "0ms",
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </span>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

function MustHave() {
  const sectionRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  const [hoveredService, setHoveredService] = useState(null);

  const [clickedService, setClickedService] = useState(null);

  /* =========================================================
     INTERSECTION OBSERVER

     Section enter -> animation starts
     Section leave  -> animation resets
     Come again     -> animation plays again
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
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  /* =========================================================
     ACTIVE SERVICE

     Hover has priority.
     Click works for mobile.
  ========================================================= */

  const activeService =
    hoveredService !== null
      ? hoveredService
      : clickedService;

  /* =========================================================
     CLICK HANDLER
  ========================================================= */

  const handleClick = (number) => {
    setClickedService((prev) =>
      prev === number ? null : number
    );
  };

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-[#081a4b]
        px-6
        py-[60px]
        text-white
        sm:py-[80px]
      "
    >
      <div className="mx-auto max-w-[1320px] pb-4">
        <div
          className="
            grid
            grid-cols-1
            items-start
            gap-10
            lg:grid-cols-2
            lg:gap-16
          "
        >
          {/* =====================================================
              LEFT SIDE
          ===================================================== */}

          <div className="flex flex-col">
            {/* =================================================
                TITLE
            ================================================= */}

            <h2
              className="
                mb-6
                text-4xl
                font-semibold
                leading-[1.04]
                tracking-tight
                text-white
                sm:text-5xl
              "
            >
              <AnimatedTitle
                text="Must-Haves to Grow"
                start={isVisible}
              />

              <AnimatedTitle
                text="Your Business"
                start={isVisible}
              />
            </h2>

            {/* =================================================
                PARAGRAPH
            ================================================= */}

            <p
              className={`
                mb-8
                max-w-[650px]
                text-lg
                leading-8
                text-neutral-300
                transition-all
                duration-1000
                ease-out

                ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }
              `}
              style={{
                transitionDelay: isVisible
                  ? "900ms"
                  : "0ms",
              }}
            >
              A beautiful website is only one piece of the puzzle.
              Businesses that generate consistent leads and sales combine
              branding, technology, marketing, and optimization into one
              growth system.
            </p>

            {/* =================================================
                BUSINESS VIDEO
            ================================================= */}

            <div
              className={`
                h-[300px]
                w-full
                overflow-hidden
                rounded-xl
                bg-black
                transition-all
                duration-[1200ms]
                ease-out

                ${
                  isVisible
                    ? "translate-y-0 scale-100 opacity-100"
                    : "translate-y-16 scale-[0.96] opacity-0"
                }
              `}
              style={{
                transitionDelay: isVisible
                  ? "1100ms"
                  : "0ms",
              }}
            >
              <video
                src="/assets/video/business.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-[1800ms]
                  ease-out
                  hover:scale-105
                "
              />
            </div>
          </div>

          {/* =====================================================
              RIGHT SIDE
          ===================================================== */}

          <div className="w-full">
            <div className="flex flex-col">
              {services.map((service, index) => {
                const isActive =
                  activeService === service.number;

                return (
                  <div
                    key={service.number}
                    onMouseEnter={() =>
                      setHoveredService(service.number)
                    }
                    onMouseLeave={() =>
                      setHoveredService(null)
                    }
                    className={`
                      w-full
                      border-b
                      border-white/20
                      transition-all
                      duration-700
                      ease-out

                      ${
                        isVisible
                          ? "translate-x-0 opacity-100"
                          : "translate-x-10 opacity-0"
                      }
                    `}
                    style={{
                      transitionDelay: isVisible
                        ? `${300 + index * 100}ms`
                        : "0ms",
                    }}
                  >
                    {/* =========================================
                        SERVICE HEADER
                    ========================================= */}

                    <button
                      type="button"
                      onClick={() =>
                        handleClick(service.number)
                      }
                      className="
                        flex
                        w-full
                        items-center
                        justify-between
                        py-6
                        text-left
                        outline-none
                      "
                    >
                      {/* LEFT */}

                      <div className="flex items-center gap-4">
                        <span
                          className="
                            text-xl
                            font-bold
                            text-white
                          "
                        >
                          {service.number}
                        </span>

                        <span
                          className={`
                            text-lg
                            font-semibold
                            transition-colors
                            duration-300

                            ${
                              isActive
                                ? "text-[#7da7ff]"
                                : "text-white"
                            }
                          `}
                        >
                          {service.title}
                        </span>
                      </div>

                      {/* ARROW */}

                      <span
                        className={`
                          text-2xl
                          text-white
                          transition-all
                          duration-300

                          ${
                            isActive
                              ? "-translate-y-1 translate-x-1"
                              : ""
                          }
                        `}
                      >
                        ↗
                      </span>
                    </button>

                    {/* =========================================
                        DESCRIPTION
                    ========================================= */}

                    <div
                      className={`
                        grid
                        overflow-hidden
                        transition-[grid-template-rows]
                        duration-500
                        ease-in-out

                        ${
                          isActive
                            ? "grid-rows-[1fr]"
                            : "grid-rows-[0fr]"
                        }
                      `}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <div className="pb-6 pr-8">
                          <p
                            className={`
                              max-w-[650px]
                              text-sm
                              leading-7
                              text-[#cbd5e1]
                              transition-opacity
                              duration-300

                              ${
                                isActive
                                  ? "opacity-100"
                                  : "opacity-0"
                              }
                            `}
                          >
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MustHave;
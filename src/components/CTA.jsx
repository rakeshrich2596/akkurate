import React, { useEffect, useRef, useState } from "react";

const CTA = () => {
  const sectionRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  // =========================================================
  // SCROLL ANIMATION
  // Animation starts whenever CTA section enters viewport
  // =========================================================

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reset first
          setIsVisible(false);

          // Start animation after reset
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              setIsVisible(true);
            });
          });
        } else {
          // Reset when leaving viewport
          setIsVisible(false);
        }
      },
      {
        threshold: 0.25,
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
        overflow-hidden
        py-12
        md:py-0
      "
    >
      <div
        className="
          mx-auto
          max-w-[1200px]
          px-4
          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            flex
            flex-col
            items-center
            gap-8
            md:flex-row
            md:items-center
          "
        >

          {/* =========================================
              LEFT SIDE - MODEL IMAGE

              LEFT → CENTER
          ========================================= */}

          <div
            className={`
              hidden
              w-full
              md:block
              md:w-1/2

              transition-all
              duration-[1200ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]

              ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-24 opacity-0"
              }
            `}
          >
            <div className="pr-0 lg:pr-5">
              <div className="relative">

                {/* Model Image */}

                <img
                  src="/assets/images/thumbs/model-img.png"
                  alt="Model"
                  className="
                    h-auto
                    w-full
                    object-contain
                  "
                />

                {/* Arrow Shape */}

                <img
                  src="/assets/images/shapes/arrow-right-curve.png"
                  alt="Arrow shape"
                  className="
                    absolute
                    right-0
                    top-0
                    mt-[160px]
                    w-auto
                    animate-bounce
                  "
                />

              </div>
            </div>
          </div>


          {/* =========================================
              RIGHT SIDE - CTA CONTENT

              RIGHT → CENTER
          ========================================= */}

          <div
            className={`
              w-full
              md:w-1/2

              transition-all
              duration-[1200ms]
              delay-[150ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]

              ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-24 opacity-0"
              }
            `}
          >
            <div
              className="
                w-full
                pl-0
                lg:pl-8
              "
            >

              {/* =========================================
                  CONTENT
              ========================================= */}

              <div className="text-center md:text-left">

                {/* Small Heading */}

                <span
                  className="
                    mb-4
                    inline-block
                    text-sm
                    font-bold
                    uppercase
                    tracking-[0.1em]
                    text-blue-600
                  "
                >
                  Ready to Scale?
                </span>

              </div>


              {/* =========================================
                  MAIN HEADING
              ========================================= */}

              <h2
                className="
                  mb-6
                  text-center
                  text-[clamp(2.8rem,2rem+2.5vw,4.2rem)]
                  font-bold
                  leading-[1.1]
                  tracking-[-0.03em]
                  text-black
                  md:text-left
                "
              >
                <span className="font-normal text-gray-600">
                  Ready to Turn
                </span>

                <br />

                Marketing Into a

                <br />

                Growth Engine?
              </h2>


              {/* =========================================
                  DESCRIPTION
              ========================================= */}

              <p
                className="
                  mb-8
                  max-w-[480px]
                  text-center
                  text-xl
                  leading-[1.6]
                  text-gray-500
                  md:text-left
                "
              >
                Let’s build a predictable revenue system that scales
                effortlessly with your business.
              </p>


              {/* =========================================
                  CTA BUTTON
              ========================================= */}

              <div
                className="
                  flex
                  justify-center
                  md:justify-start
                "
              >

                <a
                  href="/contact"
                  className="
                    group
                    flex
                    w-full
                    max-w-[400px]
                    items-center
                    justify-center
                    gap-3
                    rounded-2xl
                    bg-gradient-to-br
                    from-slate-900
                    to-indigo-950
                    px-9
                    py-4
                    text-[1.15rem]
                    font-bold
                    tracking-[0.02em]
                    text-white
                    shadow-lg
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                  "
                >

                  <span>
                    Book a Strategy Call Today
                  </span>

                  {/* Arrow Icon */}

                  <i
                    className="
                      ph-bold
                      ph-arrow-right
                      text-xl
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />

                </a>

              </div>

            </div>
          </div>

        </div>
      </div>


      {/* =========================================
          CUSTOM RESPONSIVE ANIMATION
      ========================================= */}

      <style>{`

        /* =============================================
           REDUCED MOTION
        ============================================= */

        @media (
          prefers-reduced-motion: reduce
        ) {

          .cta-animation {
            transform: none !important;
            opacity: 1 !important;
            transition: none !important;
          }

        }

      `}</style>

    </section>
  );
};

export default CTA;
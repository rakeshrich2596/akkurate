import React, { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    logo: "/assets/images/brand_logo/brand01.png",
    text: "Their SEO team was great and helped us start from scratch. No matter what product you search for on any medium, our website and products turn up. The team understood our business, improved our online visibility, and helped us reach more customers through organic search.",
    author: "Mr. Ansel Nishan",
  },

  {
    logo: "/assets/images/brand_logo/brand01.png",
    text: "We wanted our business and website to pop up when people searched online. With good SEO and website optimization, the team helped us accurately rank high. Their approach was professional, consistent, and focused on improving our online presence and visibility.",
    author: "Mr. Indrakumar",
  },

  {
    logo: "/assets/images/brand_logo/brand/9.png",
    text: "We needed our logo and brand name to be revisited as the initial ones were too long. Customers did not read our full names or pay attention to the brand. The team understood our requirements and helped us create a stronger, simpler brand identity that was easier for our customers to recognize and remember.",
    author: "Mr. Yuvaraj",
  },

  {
    logo: "/assets/images/brand_logo/brand01.png",
    text: "We have 2 hotel chains in Madurai, India and we found it hard to rank both of them online. Akkurate helped us optimize our Google My Business pages and improve our local online visibility. Their support helped us strengthen our presence in search results and make it easier for customers to find our hotels.",
    author: "Mr. Ravi Balakrishnan",
  },
];

/* =========================================================
   TESTIMONIAL CARD
========================================================= */

function TestimonialCard({
  testimonial,
  onHoverStart,
  onHoverEnd,
}) {
  return (
    <article
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      className="
        relative
        flex
        h-[530px]

        /* =================================================
           MOBILE
           ONE CARD WIDTH
        ================================================= */

        w-[calc(100vw-48px)]
        max-w-[360px]

        shrink-0
        snap-center

        flex-col

        rounded-[20px]
        border
        border-neutral-200
        bg-white

        px-6
        pb-6
        pt-12

        shadow-[0_10px_35px_rgba(15,23,42,0.06)]

        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-[#1351D8]/30
        hover:shadow-[0_20px_45px_rgba(15,23,42,0.10)]

        /* =================================================
           TABLET / DESKTOP
        ================================================= */

        sm:w-[380px]
        sm:max-w-none

        lg:w-[390px]
      "
    >
      {/* =====================================================
          LOGO
      ===================================================== */}

      <div
        className="
          absolute
          left-1/2
          top-[-30px]

          flex
          h-[60px]
          w-[60px]

          -translate-x-1/2

          items-center
          justify-center

          overflow-hidden

          rounded-full
          border-4
          border-neutral-300
          bg-white

          shadow-md
        "
      >
        <img
          src={testimonial.logo}
          alt="Client logo"
          className="
            h-full
            w-full
            object-contain
          "
        />
      </div>

      {/* =====================================================
          QUOTE
      ===================================================== */}

      <div
        className="
          mb-4
          text-[42px]
          font-serif
          leading-none
          text-[#1351D8]/20
        "
      >
        “
      </div>

      {/* =====================================================
          TESTIMONIAL TEXT
      ===================================================== */}

      <p
        className="
          flex-1
          overflow-hidden
          text-[15px]
          font-normal
          leading-[1.75]
          text-[#1f2937]
        "
      >
        {testimonial.text}
      </p>

      {/* =====================================================
          AUTHOR
      ===================================================== */}

      <div
        className="
          mb-5
          border-t
          border-neutral-200
          pt-5
        "
      >
        <h6
          className="
            mb-1
            text-[16px]
            font-bold
            text-black
          "
        >
          {testimonial.author}
        </h6>

        <p
          className="
            text-[13px]
            text-neutral-500
          "
        >
          Verified Client
        </p>
      </div>
    </article>
  );
}

/* =========================================================
   TESTIMONIALS SECTION
========================================================= */

function Testimonials() {
  const sectionRef = useRef(null);

  const scrollContainerRef = useRef(null);

  const [isPaused, setIsPaused] = useState(false);

  const [headingVisible, setHeadingVisible] =
    useState(false);

  /* =========================================================
     HEADING INTERSECTION OBSERVER

     Every time section enters viewport:
     headingVisible = true

     When section leaves:
     headingVisible = false

     So when user comes back:
     animation starts again.
  ========================================================= */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeadingVisible(false);

          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              setHeadingVisible(true);
            });
          });
        } else {
          setHeadingVisible(false);
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

  /* =========================================================
     AUTO SCROLL REVIEW CARDS

     MOBILE:
     One card at a time.
     Exact card width + gap.
     
     DESKTOP:
     Existing 410px movement.
  ========================================================= */

  useEffect(() => {
    const container = scrollContainerRef.current;

    if (!container) return;

    const interval = setInterval(() => {
      if (isPaused) return;

      const isMobile =
        window.innerWidth < 640;

      /* =====================================================
         MOBILE
      ===================================================== */

      if (isMobile) {
        const firstCard =
          container.querySelector(
            "[data-testimonial-card]"
          );

        if (!firstCard) return;

        const cardWidth =
          firstCard.getBoundingClientRect().width;

        const gap = 20;

        const scrollAmount =
          cardWidth + gap;

        const maxScroll =
          container.scrollWidth -
          container.clientWidth;

        if (
          container.scrollLeft >=
          maxScroll - 10
        ) {
          container.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        } else {
          container.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
          });
        }

        return;
      }

      /* =====================================================
         DESKTOP
         KEEP EXISTING BEHAVIOUR
      ===================================================== */

      const maxScroll =
        container.scrollWidth -
        container.clientWidth;

      if (
        container.scrollLeft >=
        maxScroll - 10
      ) {
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        container.scrollBy({
          left: 410,
          behavior: "smooth",
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  /* =========================================================
     RETURN
  ========================================================= */

  return (
    <section
      ref={sectionRef}
      className="
        relative
        z-[1]
        overflow-hidden
        bg-white
        py-20
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1400px]
          px-4

          sm:px-6

          lg:px-8
        "
      >
        {/* =================================================
            TOP ROW
        ================================================= */}

        <div
          className="
            mb-12
            flex
            flex-col
            gap-8

            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          {/* =================================================
              HEADING

              ONLY THIS HEADING ANIMATES
          ================================================= */}

          <div
            className="
              w-full
              overflow-hidden

              lg:max-w-[520px]
            "
          >
            <h3
              className={`
                text-3xl
                font-normal
                leading-[1.15]
                tracking-tight
                text-black

                sm:text-4xl

                lg:text-[48px]

                ${
                  headingVisible
                    ? "testimonials-heading-enter"
                    : "testimonials-heading-hidden"
                }
              `}
            >
              Our clients'{" "}

              <span
                className="
                  font-normal
                  text-[#1351D8]
                "
              >
                success stories
              </span>{" "}

              speak volumes about the impact of our services
            </h3>
          </div>

          {/* =================================================
              RATINGS
          ================================================= */}

          <div
            className="
              flex
              flex-wrap
              items-center
              justify-start
              gap-7

              lg:justify-end
            "
          >
            {/* =================================================
                TRUSTPILOT
            ================================================= */}

            <a
              href="https://www.trustpilot.com/review/akkurate.in?languages=all"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-3
                no-underline

                transition-transform
                duration-300
                hover:scale-105
              "
            >
              <img
                src="/assets/images/icons/trustpilot-star.svg"
                alt="Trustpilot"
                className="
                  h-[30px]
                  w-[30px]
                "
              />

              <span
                className="
                  text-[25px]
                  font-bold
                  text-black
                "
              >
                Trustpilot
              </span>

              <span
                className="
                  text-[20px]
                  font-bold
                  text-black
                "
              >
                4.8
              </span>

              <span
                className="
                  text-[25px]
                  text-amber-500
                "
              >
                ★
              </span>
            </a>

            {/* =================================================
                DIVIDER
            ================================================= */}

            <div
              className="
                hidden
                h-[34px]
                w-px
                bg-neutral-300

                sm:block
              "
            />

            {/* =================================================
                GOOGLE
            ================================================= */}

            <a
              href="https://g.page/r/CdytXHC_I2fLEAE/review"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-3
                no-underline

                transition-transform
                duration-300
                hover:scale-105
              "
            >
              <span
                className="
                  text-[21px]
                  font-bold
                "
              >
                <span className="text-blue-500">
                  G
                </span>

                <span className="text-red-500">
                  o
                </span>

                <span className="text-amber-500">
                  o
                </span>

                <span className="text-blue-500">
                  g
                </span>

                <span className="text-green-500">
                  l
                </span>

                <span className="text-red-500">
                  e
                </span>
              </span>

              <span
                className="
                  text-[20px]
                  font-bold
                  text-black
                "
              >
                4.9
              </span>

              <span
                className="
                  text-[20px]
                  text-amber-500
                "
              >
                ★
              </span>
            </a>
          </div>
        </div>

        {/* =================================================
            MAIN CONTENT
        ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-8

            lg:grid-cols-12
            lg:items-stretch
            lg:gap-10
          "
        >
          {/* =================================================
              VIDEO
          ================================================= */}

          <div
            className="
              flex

              lg:col-span-4
            "
          >
            <div
              className="
                relative
                h-[530px]
                w-full
                overflow-hidden
                rounded-[20px]
                bg-black
                shadow-[0_15px_45px_rgba(15,23,42,0.10)]
              "
            >
              <video
                id="customerVideo"
                className="
                  h-full
                  w-full
                  object-cover
                  object-top
                "
                autoPlay
                loop
                muted
                playsInline
                controls
                preload="auto"
              >
                <source
                  src="/assets/video/customer_review.mp4"
                  type="video/mp4"
                />

                Your browser does not support
                the video tag.
              </video>
            </div>
          </div>

          {/* =================================================
              REVIEW CARDS
          ================================================= */}

          <div
            className="
              min-w-0

              lg:col-span-8
              lg:pl-4
            "
          >
            <div
              ref={scrollContainerRef}
              className="
                flex
                h-[530px]
                items-stretch
                gap-5

                overflow-x-auto
                overflow-y-hidden

                scroll-smooth

                px-2
                pb-4
                pt-8

                /* =================================================
                   MOBILE:
                   SNAP ONE CARD TO CENTER
                ================================================= */

                snap-x
                snap-mandatory

                [scrollbar-width:none]
                [-ms-overflow-style:none]
                [&::-webkit-scrollbar]:hidden
              "
            >
              {/* =================================================
                  ORIGINAL CARDS
              ================================================= */}

              {testimonials.map(
                (testimonial, index) => (
                  <div
                    key={`testimonial-${index}`}
                    data-testimonial-card
                    className="
                      shrink-0
                      snap-center
                    "
                  >
                    <TestimonialCard
                      testimonial={testimonial}
                      onHoverStart={() =>
                        setIsPaused(true)
                      }
                      onHoverEnd={() =>
                        setIsPaused(false)
                      }
                    />
                  </div>
                )
              )}

              {/* =================================================
                  DUPLICATE CARDS
              ================================================= */}

              {testimonials.map(
                (testimonial, index) => (
                  <div
                    key={`testimonial-copy-${index}`}
                    data-testimonial-card
                    className="
                      shrink-0
                      snap-center
                    "
                  >
                    <TestimonialCard
                      testimonial={testimonial}
                      onHoverStart={() =>
                        setIsPaused(true)
                      }
                      onHoverEnd={() =>
                        setIsPaused(false)
                      }
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          HEADING ANIMATION
      ========================================================= */}

      <style>{`

        .testimonials-heading-hidden {
          opacity: 0;
          transform: translateX(-120px);
        }

        .testimonials-heading-enter {
          opacity: 1;
          transform: translateX(0);

          animation:
            testimonialsHeadingSlide
            1.2s
            cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }

        @keyframes testimonialsHeadingSlide {

          0% {
            opacity: 0;
            transform: translateX(-120px);
          }

          100% {
            opacity: 1;
            transform: translateX(0);
          }

        }

        /* =======================================================
           MOBILE CARD WIDTH
           
           One card should occupy most of the screen.
           This prevents two cards from appearing equally.
        ======================================================= */

        @media (max-width: 639px) {

          [data-testimonial-card] {
            width: calc(100vw - 48px);
          }

          [data-testimonial-card] article {
            width: 100%;
            max-width: none;
          }

        }

        /* =======================================================
           DESKTOP
           
           Keep original card sizing.
        ======================================================= */

        @media (min-width: 640px) {

          [data-testimonial-card] {
            width: auto;
          }

        }

        /* =======================================================
           REDUCED MOTION
        ======================================================= */

        @media (prefers-reduced-motion: reduce) {

          .testimonials-heading-hidden {
            opacity: 1;
            transform: translateX(0);
          }

          .testimonials-heading-enter {
            animation: none;
            opacity: 1;
            transform: translateX(0);
          }

        }

      `}</style>
    </section>
  );
}

export default Testimonials;
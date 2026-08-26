import React, { useEffect, useMemo, useState } from "react";

const testimonials = [
  {
    logo: "/assets/images/brand_logo/happy.png",
    text: "Their SEO team was great and helped us start from scratch. No matter what product you search for on any medium, our website and products turn up. The team understood our business, improved our online visibility, and helped us reach more customers through organic search.",
    author: "Mr. Ansel Nishan",
    client: "Managing Director",
  },
  {
    logo: "/assets/images/brand_logo/lensmen.png",
    text: "We wanted our business and website to pop up when people searched online. With good SEO and website optimization, the team helped us accurately rank high. Their approach was professional, consistent, and focused on improving our online presence and visibility.",
    author: "Mr. Indrakumar",
    client: "Manager",
  },
  {
    logo: "/assets/images/brand_logo/rhythmic.png",
    text: "We needed our logo and brand name to be revisited as the initial ones were too long. Customers did not read our full names or pay attention to the brand. The team understood our requirements and helped us create a stronger, simpler brand identity that was easier for our customers to recognize and remember.",
    author: "Mr. Yuvaraj",
    client: "Managing Director",
  },
  {
    logo: "/assets/images/brand_logo/grt.png",
    text: "We have 2 hotel chains in Madurai, India and we found it hard to rank both of them online. Akkurate helped us optimize our Google My Business pages and improve our local online visibility. Their support helped us strengthen our presence in search results and make it easier for customers to find our hotels.",
    author: "Mr. Ravi Balakrishnan",
    client: "General Manager",
  },
];

function TestimonialCard({ testimonial }) {
  return (
    <article
      className="
        relative
        flex
        h-full
        min-h-[600px]
        w-full
        flex-col
        rounded-[20px]
        border
        border-neutral-200
        bg-white
        px-6
        pb-6
        pt-10
        shadow-[0_10px_35px_rgba(15,23,42,0.06)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#1351D8]/30
        hover:shadow-[0_20px_45px_rgba(15,23,42,0.10)]
      "
    >
      {/* Client Logo */}
      <div
        className="
          absolute
          left-1/2
          top-[-30px]
          z-10
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
          alt={`${testimonial.author} client logo`}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Quote */}
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

      {/* Text */}
      <p
        className="
          flex-1
          text-[14px]
          font-normal
          leading-[1.75]
          text-[#1f2937]
          sm:text-[15px]
        "
      >
        {testimonial.text}
      </p>

      {/* Author */}
      <div className="mt-4 border-t border-neutral-200 pt-4">
        <h6 className="mb-1 text-[15px] font-bold text-black sm:text-[16px]">
          {testimonial.author}
        </h6>

        <p className="text-[12px] text-neutral-500 sm:text-[13px]">
          {testimonial.client}
        </p>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const [headingVisible, setHeadingVisible] = useState(false);

  /*
    slideIndex works with the cloned first page.

    Desktop:
    0 = Card 1 + 2
    1 = Card 3 + 4
    2 = Clone of Card 1 + 2

    When it reaches 2, we instantly reset to 0
    AFTER the animation finishes.

    This creates:
    1 + 2 → 3 + 4 → 1 + 2 → 3 + 4
    without reverse animation.
  */
  const [slideIndex, setSlideIndex] = useState(0);

  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [enableTransition, setEnableTransition] = useState(true);

  /* =========================================================
     RESPONSIVE CHECK
  ========================================================= */

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  /* =========================================================
     HEADING ANIMATION
  ========================================================= */

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeadingVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  /* =========================================================
     PAGE GROUPS

     Desktop:
     [1,2]
     [3,4]

     Mobile:
     [1]
     [2]
     [3]
     [4]
  ========================================================= */

  const cardsPerPage = isMobile ? 1 : 2;

  const pages = useMemo(() => {
    const result = [];

    for (
      let i = 0;
      i < testimonials.length;
      i += cardsPerPage
    ) {
      result.push(
        testimonials.slice(i, i + cardsPerPage)
      );
    }

    return result;
  }, [cardsPerPage]);

  /*
    Clone the first page.

    Example desktop:

    [1,2] [3,4] [1,2-clone]

    Example mobile:

    [1] [2] [3] [4] [1-clone]
  */
  const sliderPages = useMemo(() => {
    if (pages.length <= 1) {
      return pages;
    }

    return [...pages, pages[0]];
  }, [pages]);

  /* =========================================================
     RESET SLIDER WHEN SCREEN SIZE CHANGES
  ========================================================= */

  useEffect(() => {
    setEnableTransition(false);
    setSlideIndex(0);

    const timer = setTimeout(() => {
      setEnableTransition(true);
    }, 50);

    return () => clearTimeout(timer);
  }, [isMobile]);

  /* =========================================================
     AUTO SLIDE
  ========================================================= */

  useEffect(() => {
    if (isPaused || pages.length <= 1) return;

    const timer = setInterval(() => {
      setSlideIndex((current) => current + 1);
    }, 3500);

    return () => {
      clearInterval(timer);
    };
  }, [isPaused, pages.length]);

  /* =========================================================
     RESET AFTER CLONED SLIDE

     When the clone of the first slide is reached:

     [1,2] → [3,4] → [1,2 CLONE]

     We wait until the animation completes,
     disable transition,
     jump back to real [1,2],
     then enable transition again.

     User never sees a reverse animation.
  ========================================================= */

  useEffect(() => {
    if (slideIndex !== pages.length || pages.length <= 1) {
      return;
    }

    const timer = setTimeout(() => {
      setEnableTransition(false);
      setSlideIndex(0);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setEnableTransition(true);
        });
      });
    }, 750);

    return () => {
      clearTimeout(timer);
    };
  }, [slideIndex, pages.length]);

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        py-14
        sm:py-16
        lg:py-20
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1600px]
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* =====================================================
            HEADING + REVIEWS
        ===================================================== */}

        <div
          className="
            mb-10
            flex
            flex-col
            gap-6
            lg:mb-12
            lg:flex-row
            lg:items-end
            lg:gap-4
          "
        >
          {/* LEFT HEADING */}

          <div
            className={`
              min-w-0
              w-full
              max-w-[700px]
              overflow-hidden
              transition-all
              duration-[1200ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${
                headingVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-[120px] opacity-0"
              }
            `}
          >
            <h3
              className="
                m-0
                text-[24px]
                font-normal
                leading-[1.2]
                tracking-tight
                text-black
                sm:text-[28px]
                md:text-[30px]
                lg:text-[32px]
                xl:text-[35px]
              "
            >
              Our client&apos;s{" "}
              <span className="text-[#1351D8]">
                success stories
              </span>{" "}
              speak volumes about the impact of our services
            </h3>
          </div>

          {/* RIGHT REVIEWS */}

          <div className="flex w-full min-w-0 shrink-0 lg:w-auto">
            <div
              className="
                flex
                max-w-full
                flex-wrap
                items-center
                justify-start
                gap-x-3
                gap-y-2
                sm:gap-x-4
                lg:flex-nowrap
                lg:gap-x-3
              "
            >
              {/* Trustpilot */}

              <a
                href="https://www.trustpilot.com/review/akkurate.in?languages=all"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  h-9
                  shrink-0
                  items-center
                  justify-center
                  gap-1.5
                  whitespace-nowrap
                  no-underline
                  transition-transform
                  duration-300
                  hover:scale-[1.03]
                  sm:h-10
                "
              >
                <img
                  src="/assets/images/icons/trustpilot-star.svg"
                  alt="Trustpilot"
                  className="h-5 w-5 object-contain sm:h-6 sm:w-6"
                />

                <span className="text-[13px] font-bold leading-none text-black sm:text-[15px]">
                  Trustpilot
                </span>

                <span className="text-[12px] font-bold text-black sm:text-[13px]">
                  4.8
                </span>

                <span className="text-[14px] text-amber-500 sm:text-[16px]">
                  ★
                </span>
              </a>

              {/* Divider */}

              <div className="hidden h-7 w-px bg-neutral-300 sm:block lg:h-8" />

              {/* Clutch */}

              <div
                className="
                  flex
                  h-9
                  w-[100px]
                  shrink-0
                  items-center
                  justify-center
                  overflow-hidden
                  sm:h-10
                  sm:w-[110px]
                "
              >
                <img
                  src="/assets/images/icons/clutch1.png"
                  alt="Clutch"
                  className="h-full w-full object-contain p-1"
                />
              </div>

              {/* Divider */}

              <div className="hidden h-7 w-px bg-neutral-300 sm:block lg:h-8" />

              {/* Google */}

              <a
                href="https://g.page/r/CdytXHC_I2fLEAE/review"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  h-9
                  shrink-0
                  items-center
                  justify-center
                  gap-1.5
                  whitespace-nowrap
                  no-underline
                  transition-transform
                  duration-300
                  hover:scale-[1.03]
                  sm:h-10
                "
              >
                <span className="text-[14px] font-bold leading-none sm:text-[16px]">
                  <span className="text-blue-500">G</span>
                  <span className="text-red-500">o</span>
                  <span className="text-amber-500">o</span>
                  <span className="text-blue-500">g</span>
                  <span className="text-green-500">l</span>
                  <span className="text-red-500">e</span>
                </span>

                <span className="text-[12px] font-bold text-black sm:text-[13px]">
                  4.9
                </span>

                <span className="text-[14px] text-amber-500 sm:text-[16px]">
                  ★
                </span>
              </a>

              {/* Divider */}

              <div className="hidden h-7 w-px bg-neutral-300 sm:block lg:h-8" />

              {/* GoodFirms */}

              <div
                className="
                  flex
                  h-9
                  w-[100px]
                  shrink-0
                  items-center
                  justify-center
                  overflow-hidden
                  sm:h-10
                  sm:w-[110px]
                "
              >
                <img
                  src="/assets/images/icons/goodfirm2.png"
                  alt="GoodFirms"
                  className="h-full w-full object-contain p-1"
                />
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            VIDEO + TESTIMONIALS
        ===================================================== */}

        <div
          className="
            grid
            grid-cols-1
            items-start
            gap-8
            lg:grid-cols-[minmax(320px,440px)_minmax(0,1fr)]
            lg:gap-8
            xl:grid-cols-[440px_minmax(0,1fr)]
          "
        >
          {/* =================================================
              LEFT VIDEO
          ================================================= */}

          <div className="w-full">
            <div
              className="
                mx-auto
                w-full
                max-w-[360px]
                overflow-hidden
                rounded-[20px]
                bg-black
                shadow-[0_15px_45px_rgba(15,23,42,0.10)]
              "
            >
              <video
                className="
                  block
                  h-auto
                  max-h-[620px]
                  w-full
                  bg-black
                  object-contain
                "
                loop
                muted
                playsInline
                controls
                preload="metadata"
              >
                <source
                  src="/assets/video/customer_review.mp4"
                  type="video/mp4"
                />

                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* =================================================
              RIGHT — TESTIMONIAL SLIDER
          ================================================= */}

          <div
            className="
              min-w-0
              overflow-visible
            "
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Slider viewport */}

            <div className="relative overflow-hidden pt-7">
              {/* Slider track */}

              <div
                className={`
                  flex
                  ${
                    enableTransition
                      ? "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                      : "transition-none"
                  }
                `}
                style={{
                  transform: `translateX(-${slideIndex * 100}%)`,
                }}
              >
                {sliderPages.map((pageItems, pageIndex) => (
                  <div
                    key={`page-${pageIndex}`}
                    className="
                      grid
                      w-full
                      min-w-full
                      shrink-0
                      grid-cols-1
                      gap-5
                      sm:grid-cols-2
                    "
                  >
                    {pageItems.map(
                      (testimonial, cardIndex) => (
                        <div
                          key={`${pageIndex}-${cardIndex}`}
                          className="
                            min-w-0
                            h-full
                          "
                        >
                          <TestimonialCard
                            testimonial={testimonial}
                          />
                        </div>
                      )
                    )}

                    {/* Keep two columns balanced */}
                    {!isMobile &&
                      pageItems.length === 1 && (
                        <div className="hidden sm:block" />
                      )}
                  </div>
                ))}
              </div>
            </div>

            {/* =================================================
                OPTIONAL PAGINATION
            ================================================= */}

            {/*
            <div className="mt-7 flex items-center justify-center gap-2">
              {pages.map((_, index) => (
                <button
                  key={`pagination-${index}`}
                  type="button"
                  aria-label={`Go to testimonial page ${
                    index + 1
                  }`}
                  onClick={() => {
                    setEnableTransition(true);
                    setSlideIndex(index);
                  }}
                  className={`
                    h-2.5
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      slideIndex === index
                        ? "w-8 bg-[#1351D8]"
                        : "w-2.5 bg-slate-300 hover:bg-slate-400"
                    }
                  `}
                />
              ))}
            </div>
            */}

            {/* =================================================
                OPTIONAL ARROWS
            ================================================= */}

            {/*
            <div className="mt-4 flex items-center justify-center gap-3">
              <button
                type="button"
                aria-label="Previous testimonials"
                onClick={() => {
                  setEnableTransition(true);

                  setSlideIndex((current) => {
                    if (current === 0) {
                      return pages.length - 1;
                    }

                    return current - 1;
                  });
                }}
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  text-slate-700
                  shadow-sm
                  transition-all
                  duration-300
                  hover:bg-[#1351D8]
                  hover:text-white
                "
              >
                ←
              </button>

              <button
                type="button"
                aria-label="Next testimonials"
                onClick={() => {
                  setEnableTransition(true);

                  setSlideIndex((current) => {
                    if (current >= pages.length - 1) {
                      return 0;
                    }

                    return current + 1;
                  });
                }}
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  text-slate-700
                  shadow-sm
                  transition-all
                  duration-300
                  hover:bg-[#1351D8]
                  hover:text-white
                "
              >
                →
              </button>
            </div>
            */}
          </div>
        </div>
      </div>
    </section>
  );
}
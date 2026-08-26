import React, { useEffect, useRef, useState } from "react";

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

/* =========================================================
   TESTIMONIAL CARD
========================================================= */

function TestimonialCard({ testimonial, onHoverStart, onHoverEnd }) {
  return (
    <article
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      className="
        relative
        flex
        h-[530px]
        w-full
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
      "
    >
      {/* =================================================
          CLIENT LOGO
      ================================================= */}

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
          alt="Client logo"
          className="
            h-full
            w-full
            object-contain
          "
        />
      </div>

      {/* =================================================
          QUOTE
      ================================================= */}

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

      {/* =================================================
          TESTIMONIAL TEXT
      ================================================= */}

      <p
        className="
          flex-1
          overflow-hidden
          text-[14px]
          font-normal
          leading-[1.75]
          text-[#1f2937]
          sm:text-[15px]
        "
      >
        {testimonial.text}
      </p>

      {/* =================================================
          AUTHOR
      ================================================= */}

      <div
        className="
          mt-5
          border-t
          border-neutral-200
          pt-5
        "
      >
        <h6
          className="
            mb-1
            text-[15px]
            font-bold
            text-black
            sm:text-[16px]
          "
        >
          {testimonial.author}
        </h6>

        <p
          className="
            text-[12px]
            text-neutral-500
            sm:text-[13px]
          "
        >
          {testimonial.client}
        </p>
      </div>
    </article>
  );
}

/* =========================================================
   TESTIMONIALS
========================================================= */

function Testimonials() {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);

  const [isPaused, setIsPaused] = useState(false);
  const [headingVisible, setHeadingVisible] = useState(false);

  /* =========================================================
     HEADING ANIMATION
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
        threshold: 0.2,
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  /* =========================================================
     AUTO SLIDER
  ========================================================= */

  useEffect(() => {
    const container = scrollContainerRef.current;

    if (!container) return;

    const interval = setInterval(() => {
      if (isPaused) return;

      const firstCard = container.querySelector("[data-testimonial-card]");

      if (!firstCard) return;

      const cardWidth = firstCard.getBoundingClientRect().width;

      const gap = 20;

      const scrollAmount = cardWidth + gap;

      const maxScroll = container.scrollWidth - container.clientWidth;

      /* END → START */

      if (container.scrollLeft >= maxScroll - 10) {
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });

        return;
      }

      /* MOVE ONE CARD */

      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }, 3500);

    return () => {
      clearInterval(interval);
    };
  }, [isPaused]);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        z-[1]
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
    gap-5
    lg:mb-12
    lg:flex-row
    lg:items-end
    lg:gap-3
  "
        >
          {/* =================================================
      LEFT — HEADING
  ================================================= */}

          <div
            className={`
      min-w-0
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
        text-[28px]
        font-normal
        leading-[1.2]
        tracking-tight
        text-black
        sm:text-[34px]
        md:text-[38px]
        lg:text-[35px]
        xl:text-[40px]
      "
            >
              <span className="inline">
                Our client's{" "}
                <span className="text-[#1351D8]">success stories</span> speak
                volumes <span className="inline">about the impact of our services</span>

              </span>

            </h3>
          </div>

          {/* =================================================
      RIGHT — TRUSTPILOT + CLUTCH + GOOGLE + GOODFIRMS
  ================================================= */}

          <div
            className="
      flex
      shrink-0
      items-center
      justify-start
      lg:mb-1
    "
          >
            <div
              className="
        flex
        h-[52px]
        items-center
        gap-3
        rounded-xl
        border
        border-neutral-200
        bg-white
        px-3
        shadow-[0_6px_20px_rgba(0,0,0,0.04)]
        sm:gap-4
        sm:px-4
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
          h-9
          min-w-[145px]
          shrink-0
          items-center
          justify-center
          gap-1.5
          no-underline
          transition-transform
          duration-300
          hover:scale-[1.03]
        "
              >
                <img
                  src="/assets/images/icons/trustpilot-star.svg"
                  alt="Trustpilot"
                  className="
            h-5
            w-5
            shrink-0
            object-contain
            sm:h-6
            sm:w-6
          "
                />

                <span
                  className="
            whitespace-nowrap
            text-[14px]
            font-bold
            leading-none
            text-black
            sm:text-[16px]
            lg:text-[17px]
          "
                >
                  Trustpilot
                </span>

                <span
                  className="
            text-[13px]
            font-bold
            leading-none
            text-black
            sm:text-[14px]
          "
                >
                  4.8
                </span>

                <span
                  className="
            text-[15px]
            leading-none
            text-amber-500
            sm:text-[16px]
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
          h-7
          w-px
          shrink-0
          bg-neutral-300
        "
              />

              {/* =================================================
          CLUTCH
      ================================================= */}

              <div
                className="
          flex
          h-9
          w-[105px]
          shrink-0
          items-center
          justify-center
          overflow-hidden
          sm:h-10
          sm:w-[115px]
        "
              >
                <img
                  src="/assets/images/icons/clutch1.png"
                  alt="Clutch"
                  className="
            h-full
            w-full
            object-contain
            p-1
          "
                />
              </div>

              {/* =================================================
          DIVIDER
      ================================================= */}

              <div
                className="
          h-7
          w-px
          shrink-0
          bg-neutral-300
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
          h-9
          min-w-[105px]
          shrink-0
          items-center
          justify-center
          gap-1.5
          no-underline
          transition-transform
          duration-300
          hover:scale-[1.03]
          sm:min-w-[115px]
        "
              >
                <span
                  className="
            whitespace-nowrap
            text-[15px]
            font-bold
            leading-none
            sm:text-[17px]
          "
                >
                  <span className="text-blue-500">G</span>
                  <span className="text-red-500">o</span>
                  <span className="text-amber-500">o</span>
                  <span className="text-blue-500">g</span>
                  <span className="text-green-500">l</span>
                  <span className="text-red-500">e</span>
                </span>

                <span
                  className="
            text-[13px]
            font-bold
            leading-none
            text-black
            sm:text-[14px]
          "
                >
                  4.9
                </span>

                <span
                  className="
            text-[15px]
            leading-none
            text-amber-500
            sm:text-[16px]
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
          h-7
          w-px
          shrink-0
          bg-neutral-300
        "
              />

              {/* =================================================
          GOODFIRMS
      ================================================= */}

              <div
                className="
          flex
          h-9
          w-[105px]
          shrink-0
          items-center
          justify-center
          overflow-hidden
          sm:h-10
          sm:w-[115px]
        "
              >
                <img
                  src="/assets/images/icons/goodfirm2.png"
                  alt="GoodFirms"
                  className="
            h-full
            w-full
            object-contain
            p-1
          "
                />
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-7
            lg:grid-cols-12
            lg:gap-8
          "
        >
          {/* =================================================
              VIDEO
          ================================================= */}

          <div
            className="
            min-w-0
            lg:col-span-4
          "
          >
            <div
              className="
      relative
      mt-5
      w-[400px]
      h-[550px]
      overflow-hidden
      rounded-[20px]
      bg-black
      shadow-[0_15px_45px_rgba(15,23,42,0.10)]
      aspect-video
    "
            >
              <video
                id="customerVideo"
                className="
        absolute
        inset-0
        h-full
        w-full
        object-contain
        object-center
      "
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
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* =================================================
              TESTIMONIAL SLIDER
          ================================================= */}

          <div
            className="
              min-w-0
              lg:col-span-7
            "
          >
            <div
              ref={scrollContainerRef}
              className="
                flex
                h-[570px]
                w-full
                items-stretch
                gap-5
                overflow-x-auto
                overflow-y-hidden
                scroll-smooth
                px-0
                pb-4
                pt-8
                
                snap-x
                snap-mandatory
                [scrollbar-width:none]
                [-ms-overflow-style:none]
                [&::-webkit-scrollbar]:hidden
              "
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={`testimonial-${index}`}
                  data-testimonial-card
                  className="
                      w-full
                      shrink-0
                      snap-center
                      sm:w-[calc((100%-20px)/2)]
                    "
                >
                  <TestimonialCard
                    testimonial={testimonial}
                    onHoverStart={() => setIsPaused(true)}
                    onHoverEnd={() => setIsPaused(false)}
                  />
                </div>
              ))}

              {/* =================================================
                  DUPLICATE CARDS
              ================================================= */}

              {testimonials.map((testimonial, index) => (
                <div
                  key={`testimonial-copy-${index}`}
                  data-testimonial-card
                  className="
                      w-full
                      shrink-0
                      snap-center
                      sm:w-[calc((100%-20px)/2)]
                    "
                >
                  <TestimonialCard
                    testimonial={testimonial}
                    onHoverStart={() => setIsPaused(true)}
                    onHoverEnd={() => setIsPaused(false)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

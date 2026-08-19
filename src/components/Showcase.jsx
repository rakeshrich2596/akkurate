import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import { FiArrowUpRight } from "react-icons/fi";

import "swiper/css";
import "swiper/css/free-mode";

/* =========================================================
   SHOWCASE DATA
========================================================= */

const showcaseItems = [
  {
    image: "/assets/images/content_images/Show-Case X1.jpg",
    category: "Performance Marketing",
    title: "Mobile Application Development",
  },

  {
    image: "/assets/images/content_images/Show-Case X2.jpg",
    category: "Excellent Performance",
    title: "Cloud Computing System",
  },

  {
    image: "/assets/images/content_images/Show-Case X3.jpg",
    category: "Excellent Performance",
    title: "Mobile Application Development",
  },

  {
    image: "/assets/images/content_images/Show-Case X4.jpg",
    category: "Excellent Performance",
    title: "Creative Complete Data Setup",
  },

  {
    image: "/assets/images/content_images/Show-Case X5.jpg",
    category: "Excellent Performance",
    title: "Mobile Application Development",
  },

  {
    image: "/assets/images/content_images/Show-Case X6.jpg",
    category: "Excellent Performance",
    title: "Cloud Computing System",
  },
];

/* =========================================================
   CENTER → OUTWARD HEADING
========================================================= */

const CenterOutwardText = ({
  text,
  animationKey,
  delayStep = 0.045,
}) => {
  const characters = Array.from(text);

  const center = (characters.length - 1) / 2;

  return (
    <span
      key={animationKey}
      className="
        inline-flex
        flex-wrap
        justify-center
      "
      aria-label={text}
    >
      {characters.map((char, index) => {
        const distance = Math.abs(index - center);

        const delay = distance * delayStep;

        const fromLeft = index < center;

        if (char === " ") {
          return (
            <span
              key={`space-${animationKey}-${index}`}
              aria-hidden="true"
              className="inline-block"
              style={{
                width: "0.28em",
              }}
            >
              &nbsp;
            </span>
          );
        }

        return (
          <span
            key={`${animationKey}-${char}-${index}`}
            className="
              inline-block
              opacity-0
            "
            style={{
              animationName: "centerOutward",
              animationDuration: "650ms",
              animationTimingFunction:
                "cubic-bezier(0.22,1,0.36,1)",
              animationFillMode: "forwards",
              animationDelay: `${delay}s`,

              /*
                Left characters come from left.
                Right characters come from right.
              */

              "--start-x": fromLeft
                ? "-28px"
                : "28px",
            }}
          >
            {char}
          </span>
        );
      })}
    </span>
  );
};

/* =========================================================
   SHOWCASE CARD
========================================================= */

const ShowcaseCard = ({
  image,
  category,
  title,
}) => {
  return (
    <div className="group w-full">

      {/* =================================================
          IMAGE
      ================================================= */}

      <div
        className="
          relative
          w-full
          overflow-hidden
          rounded-[16px]

          sm:rounded-[18px]
        "
      >
        <a
          href="/project-details"
          className="
            block
            h-[160px]
            w-full
            overflow-hidden

            sm:h-[185px]

            md:h-[210px]

            lg:h-[235px]

            xl:h-[250px]
          "
        >
          <img
            src={image}
            alt={title}
            className="
              h-full
              w-full
              object-cover

              transition-transform
              duration-500
              ease-out

              group-hover:scale-[1.05]
            "
          />
        </a>

        {/* =================================================
            ARROW
        ================================================= */}

        <a
          href="/project-details"
          aria-label={`View ${title}`}
          className="
            absolute
            right-3
            top-3

            flex
            h-[34px]
            w-[34px]
            items-center
            justify-center

            rounded-full
            bg-white

            text-[16px]
            text-slate-900

            opacity-0
            scale-75

            shadow-[0_5px_15px_rgba(0,0,0,0.15)]

            transition-all
            duration-300

            group-hover:scale-100
            group-hover:opacity-100

            hover:bg-[#2563eb]
            hover:text-white

            sm:h-[38px]
            sm:w-[38px]
          "
        >
          <FiArrowUpRight
            className="
              h-[16px]
              w-[16px]
            "
          />
        </a>
      </div>

      {/* =================================================
          CARD CONTENT
      ================================================= */}

      <div
        className="
          mt-3
          px-0.5

          sm:mt-4
        "
      >
        {/* CATEGORY */}

        <span
          className="
            block
            truncate

            text-[10px]
            font-medium
            leading-[1.4]

            text-white/65

            sm:text-[11px]
          "
        >
          {category}
        </span>

        {/* TITLE */}

        <h5
          className="
            m-0
            mt-1
            overflow-hidden

            text-[14px]
            font-semibold
            leading-[1.3]
            tracking-[-0.01em]

            text-white

            sm:text-[15px]

            lg:text-[16px]
          "
        >
          <a
            href="/project-details"
            className="
              line-clamp-1

              text-white
              no-underline

              transition-colors
              duration-300

              hover:text-blue-300
            "
          >
            {title}
          </a>
        </h5>
      </div>
    </div>
  );
};

/* =========================================================
   SHOWCASE COMPONENT
========================================================= */

const Showcase = () => {
  const sectionRef = useRef(null);

  const [animationKey, setAnimationKey] = useState(0);

  const [wasVisible, setWasVisible] = useState(false);

  /* =======================================================
     REPLAY HEADING EVERY TIME SECTION ENTERS VIEWPORT
  ======================================================= */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!wasVisible) {
            setWasVisible(true);

            setAnimationKey(
              (previous) => previous + 1
            );
          }
        } else {
          setWasVisible(false);
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
  }, [wasVisible]);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        w-full
        overflow-hidden

        bg-[#020b3d]

        py-[45px]

        sm:py-[52px]

        lg:py-[60px]
      "
    >

      {/* =================================================
          CENTER → OUTWARD ANIMATION CSS
      ================================================= */}

      <style>
        {`
          @keyframes centerOutward {
            0% {
              opacity: 0;
              transform:
                translateX(var(--start-x))
                translateY(8px)
                scale(0.88);
            }

            100% {
              opacity: 1;
              transform:
                translateX(0)
                translateY(0)
                scale(1);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            [style*="centerOutward"] {
              animation: none !important;
              opacity: 1 !important;
              transform: none !important;
            }
          }
        `}
      </style>

      {/* =================================================
          BACKGROUND GLOW
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-180px]

          h-[350px]
          w-[500px]

          -translate-x-1/2

          rounded-full

          bg-blue-600/10

          blur-[100px]
        "
      />

      {/* =================================================
          HEADING
      ================================================= */}

      <div
        className="
          relative
          z-10

          mx-auto
          max-w-[900px]

          px-5

          text-center
        "
      >

        {/* =================================================
            SMALL TITLE
        ================================================= */}

        <span
          className="
            mb-3
            block

            text-[10px]
            font-bold
            uppercase
            tracking-[0.15em]

            text-white/65

            sm:text-[11px]
          "
        >
          Work Showcase
        </span>

        {/* =================================================
            MAIN TITLE

            THIS WAS INVISIBLE BEFORE.
            NOW IT WILL SHOW.
        ================================================= */}

        <h3
          key={animationKey}
          className="
            m-0

            text-[clamp(1.7rem,4.5vw,2.8rem)]

            font-semibold
            leading-[1.1]

            tracking-[-0.035em]

            text-white
          "
        >
          <CenterOutwardText
            text="Case Studies & Growth Stories"
            animationKey={animationKey}
            delayStep={0.045}
          />
        </h3>

      </div>

      {/* =================================================
          SLIDER
      ================================================= */}

      <div
        className="
          relative
          z-10

          mt-[30px]

          w-full

          sm:mt-[38px]

          lg:mt-[45px]
        "
      >
        <Swiper
          modules={[
            Autoplay,
            FreeMode,
          ]}

          /* =================================================
             MEDIUM CARD WIDTH
          ================================================= */

          slidesPerView={2.2}
          spaceBetween={12}

          loop={true}

          freeMode={{
            enabled: true,
            momentum: false,
          }}

          autoplay={{
            delay: 2200,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}

          speed={600}

          /* =================================================
             RESPONSIVE
          ================================================= */

          breakpoints={{

            /* Small mobile */

            360: {
              slidesPerView: 2.15,
              spaceBetween: 10,
            },

            /* Mobile */

            480: {
              slidesPerView: 2.4,
              spaceBetween: 12,
            },

            /* Large mobile */

            640: {
              slidesPerView: 2.8,
              spaceBetween: 14,
            },

            /* Tablet */

            768: {
              slidesPerView: 3.2,
              spaceBetween: 16,
            },

            /* Small desktop */

            1024: {
              slidesPerView: 3,
              spaceBetween: 18,
            },

            /* Desktop */

            1280: {
              slidesPerView: 4,
              spaceBetween: 20,
            },

            /* Large desktop */

            1536: {
              slidesPerView: 4.7,
              spaceBetween: 22,
            },

            /* Very large */

            1800: {
              slidesPerView: 5,
              spaceBetween: 24,
            },
          }}

          className="
            !overflow-visible

            !px-5

            sm:!px-8

            lg:!px-10
          "
        >

          {showcaseItems.map(
            (item, index) => (
              <SwiperSlide
                key={`${item.title}-${index}`}
                className="!h-auto"
              >
                <ShowcaseCard
                  image={item.image}
                  category={item.category}
                  title={item.title}
                />
              </SwiperSlide>
            )
          )}

        </Swiper>
      </div>

      {/* =================================================
          BOTTOM SPACE
      ================================================= */}

      <div className="h-[2px]" />

    </section>
  );
};

export default Showcase;
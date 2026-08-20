import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import {
  Autoplay,
  FreeMode,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

// =========================================================
// CLIENT LOGOS
// =========================================================

const rowOneLogos = [
  "/assets/images/brand_logo/brand/1.png",
  "/assets/images/brand_logo/brand/2.png",
  "/assets/images/brand_logo/brand/3.png",
  "/assets/images/brand_logo/brand/4.png",
  "/assets/images/brand_logo/brand/5.png",
  "/assets/images/brand_logo/brand/6.png",
  "/assets/images/brand_logo/brand/7.png",
  "/assets/images/brand_logo/brand/8.png",
];

const rowTwoLogos = [
  "/assets/images/brand_logo/brand/9.png",
  "/assets/images/brand_logo/brand/10.png",
  "/assets/images/brand_logo/brand/11.png",
  "/assets/images/brand_logo/brand/12.png",
  "/assets/images/brand_logo/brand/13.png",
  "/assets/images/brand_logo/brand/14.png",
  "/assets/images/brand_logo/brand/15.avif",
  "/assets/images/brand_logo/brand/16.png",
];

// =========================================================
// ANIMATED TITLE
// CENTER → OUTWARD
// =========================================================

const AnimatedTitle = ({
  text,
  delayStep = 0.045,
  animationKey,
}) => {
  const words = text.split(" ");

  const letters = [];

  words.forEach((word, wordIndex) => {
    [...word].forEach(
      (character, characterIndex) => {
        letters.push({
          character,
          wordIndex,
          characterIndex,
          globalIndex: letters.length,
        });
      }
    );
  });

  const center =
    (letters.length - 1) / 2;

  const animationOrder = letters
    .map((letter) => ({
      ...letter,
      distance: Math.abs(
        letter.globalIndex - center
      ),
    }))
    .sort((a, b) => {
      if (a.distance !== b.distance) {
        return (
          a.distance - b.distance
        );
      }

      return (
        a.globalIndex -
        b.globalIndex
      );
    });

  const delayMap = {};

  animationOrder.forEach(
    (letter, order) => {
      delayMap[
        letter.globalIndex
      ] =
        order * delayStep;
    }
  );

  return (
    <span
      key={animationKey}
      className="client-title-text"
    >
      {words.map(
        (word, wordIndex) => (
          <React.Fragment
            key={`${wordIndex}-${animationKey}`}
          >
            <span className="client-title-word">
              {[...word].map(
                (
                  character,
                  characterIndex
                ) => {
                  const letter =
                    letters.find(
                      (item) =>
                        item.wordIndex ===
                          wordIndex &&
                        item.characterIndex ===
                          characterIndex
                    );

                  return (
                    <span
                      key={`
                        ${wordIndex}-
                        ${characterIndex}-
                        ${animationKey}
                      `}
                      className="
                        client-title-letter
                      "
                      style={{
                        animationDelay: `${
                          delayMap[
                            letter.globalIndex
                          ]
                        }s`,
                      }}
                    >
                      {character}
                    </span>
                  );
                }
              )}
            </span>

            {wordIndex <
              words.length - 1 && (
              <span
                className="
                  client-title-space
                "
                aria-hidden="true"
              >
                &nbsp;
              </span>
            )}
          </React.Fragment>
        )
      )}
    </span>
  );
};

// =========================================================
// LOGO CARD
// =========================================================

const LogoCard = ({
  logo,
  index,
}) => {
  return (
    <div
      className="
        group

        flex
        h-[82px]
        w-[180px]
        shrink-0

        items-center
        justify-center

        rounded-[10px]

        border
        border-slate-200

        bg-[#f8fafc]

        px-4

        shadow-[0_3px_10px_rgba(0,0,0,0.08)]

        transition-all
        duration-300

        hover:-translate-y-1
        hover:bg-white
        hover:shadow-[0_10px_25px_rgba(0,0,0,0.15)]

        sm:h-[86px]
        sm:w-[200px]

        lg:h-[88px]
        lg:w-[215px]
      "
    >
      <img
        src={logo}
        alt={`Client ${index + 1}`}
        className="
          h-[50px]
          w-full

          object-contain

          opacity-90

          transition-all
          duration-300

          group-hover:scale-105
          group-hover:opacity-100

          sm:h-[54px]
        "
      />
    </div>
  );
};

// =========================================================
// CLIENT TRUST
// =========================================================

const ClientTrust = () => {
  const sectionRef =
    useRef(null);

  const [
    titleVisible,
    setTitleVisible,
  ] = useState(false);

  const [
    animationKey,
    setAnimationKey,
  ] = useState(0);

  // =======================================================
  // SCROLL INTO VIEW
  // =======================================================

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
            setTitleVisible(false);

            setAnimationKey(
              (previous) =>
                previous + 1
            );

            requestAnimationFrame(
              () => {
                requestAnimationFrame(
                  () => {
                    setTitleVisible(
                      true
                    );
                  }
                );
              }
            );
          } else {
            setTitleVisible(false);
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
        relative

        w-full

        overflow-hidden

        bg-[#020617]

        py-[55px]

        text-white

        sm:py-[65px]

        lg:py-[72px]
      "
    >
      {/* =====================================================
          BACKGROUND GLOW - TOP
      ===================================================== */}

      <div
        className="
          pointer-events-none

          absolute

          left-1/2
          top-[-250px]

          h-[500px]
          w-[700px]

          -translate-x-1/2

          rounded-full

          bg-blue-600/10

          blur-[120px]
        "
      />

      {/* =====================================================
          BACKGROUND GLOW - CENTER/BOTTOM
      ===================================================== */}

      <div
        className="
          pointer-events-none

          absolute

          bottom-[-250px]
          left-1/2

          h-[500px]
          w-[700px]

          -translate-x-1/2

          rounded-full

          bg-indigo-600/10

          blur-[120px]
        "
      />

      {/* =====================================================
          NEW: BOTTOM RIGHT BLUE GRADIENT
      ===================================================== */}

      <div
        className="
          pointer-events-none

          absolute

          bottom-[-180px]
          right-[-180px]

          z-0

          h-[520px]
          w-[520px]

          rounded-full

          bg-gradient-to-br
          from-blue-500/0
          via-blue-500/15
          to-[#2563eb]/45

          blur-[100px]

          sm:bottom-[-200px]
          sm:right-[-160px]
          sm:h-[600px]
          sm:w-[600px]

          lg:bottom-[-240px]
          lg:right-[-180px]
          lg:h-[700px]
          lg:w-[700px]
        "
      />

      {/* =====================================================
          EXTRA BOTTOM RIGHT GRADIENT
      ===================================================== */}

      <div
        className="
          pointer-events-none

          absolute

          bottom-0
          right-0

          z-0

          h-[260px]
          w-[55%]

          bg-gradient-to-tl
          from-blue-600/25
          via-blue-500/8
          to-transparent

          blur-[25px]

          sm:h-[320px]

          lg:h-[380px]
          lg:w-[45%]
        "
      />

      {/* =====================================================
          TITLE
      ===================================================== */}

      <div
        className={`
          relative
          z-10

          mx-auto

          w-full

          max-w-[1500px]

          px-5

          text-center

          sm:px-8

          lg:px-12
        `}
      >
        <h2
          className={`
            client-main-title

            mx-auto

            whitespace-nowrap

            font-bold

            leading-none

            tracking-[-0.045em]

            text-[clamp(1.15rem,3.7vw,3.5rem)]

            text-white

            ${
              titleVisible
                ? "client-title-visible"
                : "client-title-hidden"
            }
          `}
        >
          <AnimatedTitle
            text="Built on Trust."
            delayStep={0.045}
            animationKey={`built-${animationKey}`}
          />

          <span
            className="
              inline-block
            "
          >
            {" "}
          </span>

          <span
            className="
              relative
              inline
              text-blue-400
            "
          >
            <AnimatedTitle
              text="Globally Proven Through Results."
              delayStep={0.035}
              animationKey={`global-${animationKey}`}
            />

            {/* BLUE UNDERLINE */}

            <span
              className="
                pointer-events-none

                absolute

                bottom-[-5px]
                left-0

                -z-10

                h-[5px]
                w-full

                rounded-full

                bg-blue-500/30
              "
            />
          </span>
        </h2>

        {/* =================================================
            DESCRIPTION
        ================================================= */}

        <p
          className="
            mx-auto

            mt-5

            max-w-[680px]

            px-2

            text-[13px]

            leading-[1.7]

            text-slate-400

            sm:text-[15px]
          "
        >
          The best measure of our work isn't what we say.
          It's the businesses that continue to trust us
          with their transformation.
        </p>
      </div>

      {/* =====================================================
          CLIENT LOGO SLIDER
      ===================================================== */}

      <div
        className="
          relative

          z-10

          mt-[38px]

          w-full

          sm:mt-[42px]

          lg:mt-[48px]
        "
      >
        {/* LEFT FADE */}

        <div
          className="
            pointer-events-none

            absolute

            left-0
            top-0

            z-20

            h-full

            w-[45px]

            bg-gradient-to-r

            from-[#020617]

            to-transparent

            sm:w-[80px]

            lg:w-[150px]
          "
        />

        {/* RIGHT FADE */}

        <div
          className="
            pointer-events-none

            absolute

            right-0
            top-0

            z-20

            h-full

            w-[45px]

            bg-gradient-to-l

            from-[#020617]

            to-transparent

            sm:w-[80px]

            lg:w-[150px]
          "
        />

        {/* ===================================================
            ROW 1
        =================================================== */}

        <div
          className="
            relative

            h-[90px]

            sm:h-[94px]

            lg:h-[96px]
          "
        >
          <Swiper
            modules={[
              Autoplay,
              FreeMode,
            ]}
            slidesPerView="auto"
            spaceBetween={18}
            loop={true}
            freeMode={{
              enabled: true,
              momentum: false,
            }}
            allowTouchMove={false}
            speed={5000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
              reverseDirection: true,
            }}
            className="
              client-swiper-row
            "
          >
            {[
              ...rowOneLogos,
              ...rowOneLogos,
              ...rowOneLogos,
              ...rowOneLogos,
            ].map(
              (logo, index) => (
                <SwiperSlide
                  key={`row1-${index}`}
                  className="
                    !h-[90px]
                    !w-[180px]

                    sm:!h-[94px]
                    sm:!w-[200px]

                    lg:!h-[96px]
                    lg:!w-[215px]
                  "
                >
                  <LogoCard
                    logo={logo}
                    index={index}
                  />
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>

        {/* ===================================================
            ROW 2
        =================================================== */}

        <div
          className="
            relative

            mt-[10px]

            h-[90px]

            sm:mt-[12px]
            sm:h-[94px]

            lg:h-[96px]
          "
        >
          <Swiper
            modules={[
              Autoplay,
              FreeMode,
            ]}
            slidesPerView="auto"
            spaceBetween={18}
            loop={true}
            freeMode={{
              enabled: true,
              momentum: false,
            }}
            allowTouchMove={false}
            speed={5000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
              reverseDirection: false,
            }}
            className="
              client-swiper-row
            "
          >
            {[
              ...rowTwoLogos,
              ...rowTwoLogos,
              ...rowTwoLogos,
              ...rowTwoLogos,
            ].map(
              (logo, index) => (
                <SwiperSlide
                  key={`row2-${index}`}
                  className="
                    !h-[90px]
                    !w-[180px]

                    sm:!h-[94px]
                    sm:!w-[200px]

                    lg:!h-[96px]
                    lg:!w-[215px]
                  "
                >
                  <LogoCard
                    logo={logo}
                    index={index}
                  />
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      </div>

      {/* =====================================================
          BOTTOM SPACE
      ===================================================== */}

      <div className="h-[8px]" />

      {/* =====================================================
          CSS
      ===================================================== */}

      <style>{`

        /* ================================================
           TITLE HIDDEN
        ================================================= */

        .client-title-hidden {
          opacity: 0;
        }

        /* ================================================
           TITLE VISIBLE
        ================================================= */

        .client-title-visible {
          opacity: 1;
        }

        /* ================================================
           TITLE TEXT
        ================================================= */

        .client-title-text {
          display: inline;
        }

        .client-title-word {
          display: inline-block;
          white-space: nowrap;
        }

        .client-title-space {
          display: inline-block;
          width: 0.32em;
          white-space: normal;
        }

        /* ================================================
           LETTER ANIMATION
        ================================================= */

        .client-title-letter {
          display: inline-block;

          opacity: 0;

          transform:
            translateY(16px)
            scale(0.82);

          animation-name:
            clientCenterLetterReveal;

          animation-duration:
            0.55s;

          animation-timing-function:
            cubic-bezier(
              0.22,
              1,
              0.36,
              1
            );

          animation-fill-mode:
            forwards;
        }

        /* ================================================
           CENTER → OUTWARD
        ================================================= */

        @keyframes clientCenterLetterReveal {

          0% {
            opacity: 0;

            transform:
              translateY(16px)
              scale(0.82);
          }

          60% {
            opacity: 1;

            transform:
              translateY(-2px)
              scale(1.04);
          }

          100% {
            opacity: 1;

            transform:
              translateY(0)
              scale(1);
          }

        }

        /* ================================================
           SWIPER
        ================================================= */

        .client-swiper-row {
          width: 100%;
          height: 100%;
          overflow: visible !important;
        }

        .client-swiper-row
        .swiper-wrapper {
          height: 100%;
          display: flex;
          align-items: flex-start;

          transition-timing-function:
            linear !important;
        }

        .client-swiper-row
        .swiper-slide {
          flex-shrink: 0;
          height: 100% !important;

          display: flex;

          align-items: flex-start;
        }

        /* ================================================
           MOBILE
        ================================================= */

        @media (max-width: 639px) {

          .client-main-title {
            font-size: clamp(
              0.9rem,
              4.4vw,
              1.35rem
            );

            letter-spacing:
              -0.045em;
          }

          .client-title-space {
            width: 0.22em;
          }

        }

        /* ================================================
           TABLET
        ================================================= */

        @media (
          min-width: 640px
        ) and (
          max-width: 1023px
        ) {

          .client-main-title {
            font-size:
              clamp(
                1.7rem,
                4.2vw,
                2.7rem
              );
          }

        }

        /* ================================================
           REDUCED MOTION
        ================================================= */

        @media (
          prefers-reduced-motion: reduce
        ) {

          .client-title-letter {
            opacity: 1;
            transform: none;
            animation: none;
          }

        }

      `}</style>
    </section>
  );
};

export default ClientTrust;
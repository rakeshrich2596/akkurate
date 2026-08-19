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
//
// Complete title is treated as ONE title.
// =========================================================

const AnimatedTitle = ({
  text,
  delayStep = 0.045,
  animationKey,
}) => {
  const words = text.split(" ");

  const letters = [];

  // =======================================================
  // CREATE LETTER LIST
  // =======================================================

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

  // =======================================================
  // FIND COMPLETE TITLE CENTER
  // =======================================================

  const center =
    (letters.length - 1) / 2;

  // =======================================================
  // CENTER → OUTWARD ORDER
  // =======================================================

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

  // =======================================================
  // CREATE DELAY FOR EACH LETTER
  // =======================================================

  const delayMap = {};

  animationOrder.forEach(
    (letter, order) => {
      delayMap[
        letter.globalIndex
      ] =
        order * delayStep;
    }
  );

  // =======================================================
  // RENDER
  // =======================================================

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
            {/* =========================================
                WORD
            ========================================= */}

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

            {/* =========================================
                PROPER WORD SPACE
            ========================================= */}

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
  row,
}) => {
  return (
    <div
      className="
        group
        flex
        h-[78px]
        w-[180px]
        shrink-0
        items-center
        justify-center
        rounded-[10px]
        border
        border-slate-200
        bg-white
        px-4
        shadow-[0_4px_12px_rgba(0,0,0,0.08)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_10px_25px_rgba(0,0,0,0.15)]
        sm:h-[82px]
        sm:w-[200px]
      "
      style={{
        marginTop:
          row === "row1"
            ? index % 2 === 0
              ? "0px"
              : "20px"
            : index % 2 === 0
              ? "20px"
              : "0px",
      }}
    >
      <img
        src={logo}
        alt={`Client ${index + 1}`}
        className="
          h-[52px]
          w-full
          object-contain
          opacity-90
          transition-all
          duration-300
          group-hover:scale-105
          group-hover:opacity-100
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
  //
  // Animation runs whenever this section
  // enters the viewport.
  // =======================================================

  useEffect(() => {
    const section =
      sectionRef.current;

    if (!section) return;

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          // =================================================
          // USER ENTERED CLIENT TRUST SECTION
          // =================================================

          if (
            entry.isIntersecting
          ) {
            // First hide
            setTitleVisible(false);

            // Create completely new animation
            setAnimationKey(
              (previous) =>
                previous + 1
            );

            /*
              Wait for React/browser to
              paint hidden state first.
            */

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
          }

          // =================================================
          // USER LEFT CLIENT TRUST SECTION
          // =================================================

          else {
            /*
              Reset.

              So when user comes back,
              animation starts again.
            */

            setTitleVisible(false);
          }
        },
        {
          /*
            Animation starts when 25%
            of section is visible.
          */

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
        lg:py-[75px]
      "
    >
      {/* =====================================================
          BACKGROUND GLOW
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
          TOP TITLE
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1000px]
          px-5
          text-center
        "
      >
        <h2
          className={`
            client-main-title
            text-[clamp(2rem,5vw,3.5rem)]
            font-bold
            leading-[1.15]
            tracking-[-0.04em]
            text-white
            ${
              titleVisible
                ? "client-title-visible"
                : "client-title-hidden"
            }
          `}
        >
          {/* =================================================
              COMPLETE TITLE

              ONE CENTER POINT
          ================================================= */}

          <AnimatedTitle
            text="Built on Trust."
            delayStep={0.055}
            animationKey={`built-${animationKey}`}
          />

          {/* MOBILE BREAK */}

          <br className="sm:hidden" />

          {/* DESKTOP SPACE */}

          <span className="hidden sm:inline">
            {" "}
          </span>

          {/* =================================================
              BLUE TITLE

              IMPORTANT:
              Same animation timing system.
          ================================================= */}

          <span
            className="
              relative
              inline
              text-blue-400
            "
          >
            <AnimatedTitle
              text="Globally Proven Through Results."
              delayStep={0.04}
              animationKey={`global-${animationKey}`}
            />

            {/* UNDERLINE */}

            <span
              className="
                pointer-events-none
                absolute
                bottom-[-2px]
                left-0
                -z-10
                h-[7px]
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
            max-w-[650px]
            text-[14px]
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
          LOGO SLIDER AREA
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mt-[45px]
          w-full
        "
      >
        {/* ===================================================
            LEFT FADE
        =================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            z-20
            h-full
            w-[70px]
            bg-gradient-to-r
            from-[#020617]
            to-transparent
            sm:w-[120px]
            lg:w-[180px]
          "
        />

        {/* ===================================================
            RIGHT FADE
        =================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-0
            z-20
            h-full
            w-[70px]
            bg-gradient-to-l
            from-[#020617]
            to-transparent
            sm:w-[120px]
            lg:w-[180px]
          "
        />

        {/* ===================================================
            ROW 1
            LEFT → RIGHT
        =================================================== */}

        <div className="relative">
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
            className="client-swiper-row"
          >
            {[
              ...rowOneLogos,
              ...rowOneLogos,
              ...rowOneLogos,
            ].map(
              (logo, index) => (
                <SwiperSlide
                  key={`row1-${index}`}
                  className="
                    !h-[105px]
                    !w-[180px]
                    sm:!w-[200px]
                  "
                >
                  <LogoCard
                    logo={logo}
                    index={index}
                    row="row1"
                  />
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>

        {/* ===================================================
            ROW 2
            RIGHT → LEFT
        =================================================== */}

        <div
          className="
            relative
            mt-[12px]
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
            className="client-swiper-row"
          >
            {[
              ...rowTwoLogos,
              ...rowTwoLogos,
              ...rowTwoLogos,
            ].map(
              (logo, index) => (
                <SwiperSlide
                  key={`row2-${index}`}
                  className="
                    !h-[105px]
                    !w-[180px]
                    sm:!w-[200px]
                  "
                >
                  <LogoCard
                    logo={logo}
                    index={index}
                    row="row2"
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

      <div className="h-[15px]" />

      {/* =====================================================
          TITLE ANIMATION CSS
      ===================================================== */}

      <style>{`

        /* =================================================
           BEFORE ENTERING VIEWPORT
        ================================================= */

        .client-title-hidden {
          opacity: 0;
        }

        /* =================================================
           WHEN SECTION IS VISIBLE
        ================================================= */

        .client-title-visible {
          opacity: 1;
        }

        /* =================================================
           COMPLETE TEXT
        ================================================= */

        .client-title-text {
          display: inline;
        }

        /* =================================================
           WORD
        ================================================= */

        .client-title-word {
          display: inline-block;

          white-space: nowrap;
        }

        /* =================================================
           WORD SPACE

           Example:

           Built  on  Trust.

           Globally  Proven  Through  Results.
        ================================================= */

        .client-title-space {
          display: inline-block;

          width: 0.35em;

          white-space: normal;
        }

        /* =================================================
           EACH LETTER
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

        /* =================================================
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

        /* =================================================
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
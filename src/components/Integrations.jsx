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

// ======================================================
// ROW 1 LOGOS
// ======================================================

const rowOneLogos = [
  {
    name: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Blender",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg",
  },
  {
    name: "Magento",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg",
  },
  {
    name: "WooCommerce",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg",
  },
  {
    name: "Figma",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "Photoshop",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
  },
  {
    name: "JavaScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "HTML5",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "Slack",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg",
  },
  {
    name: "GitHub",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
];

// ======================================================
// ROW 2 LOGOS
// ======================================================

const rowTwoLogos = [
  {
    name: "After Effects",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-plain.svg",
  },
  {
    name: "NodeJS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "TypeScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Illustrator",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
  },
  {
    name: "Premiere Pro",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-plain.svg",
  },
  {
    name: "Canva",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
  },
  {
    name: "Vue",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  {
    name: "Python",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "WordPress",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  },
  {
    name: "PHP",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
];

// ======================================================
// ANIMATED HEADING TEXT
//
// CENTER → OUTWARD
// ======================================================

const AnimatedHeadingText = ({
  text,
  delayStep = 0.045,
  animationKey,
}) => {
  // ------------------------------------------------------
  // Split into words
  // ------------------------------------------------------

  const words = text.split(" ");

  // ------------------------------------------------------
  // Create complete letter array
  // ------------------------------------------------------

  const letters = [];

  words.forEach(
    (word, wordIndex) => {
      [...word].forEach(
        (
          character,
          characterIndex
        ) => {
          letters.push({
            character,
            wordIndex,
            characterIndex,
            globalIndex:
              letters.length,
          });
        }
      );
    }
  );

  // ------------------------------------------------------
  // Find exact center of complete title
  // ------------------------------------------------------

  const center =
    (letters.length - 1) / 2;

  // ------------------------------------------------------
  // Center → outward order
  // ------------------------------------------------------

  const animationOrder =
    letters
      .map((letter) => ({
        ...letter,
        distance: Math.abs(
          letter.globalIndex -
            center
        ),
      }))
      .sort((a, b) => {
        if (
          a.distance !==
          b.distance
        ) {
          return (
            a.distance -
            b.distance
          );
        }

        return (
          a.globalIndex -
          b.globalIndex
        );
      });

  // ------------------------------------------------------
  // Delay map
  // ------------------------------------------------------

  const delayMap = {};

  animationOrder.forEach(
    (letter, order) => {
      delayMap[
        letter.globalIndex
      ] =
        order * delayStep;
    }
  );

  // ------------------------------------------------------
  // Render
  // ------------------------------------------------------

  return (
    <span
      key={animationKey}
      className="
        integration-heading-text
      "
    >
      {words.map(
        (word, wordIndex) => (
          <React.Fragment
            key={`${wordIndex}-${animationKey}`}
          >
            {/* ==========================================
                WORD
            ========================================== */}

            <span
              className="
                integration-heading-word
              "
            >
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
                        integration-heading-letter
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

            {/* ==========================================
                WORD SPACE
            ========================================== */}

            {wordIndex <
              words.length - 1 && (
              <span
                className="
                  integration-heading-space
                "
                aria-hidden="true"
              >
                {" "}
              </span>
            )}
          </React.Fragment>
        )
      )}
    </span>
  );
};

// ======================================================
// AKKURATE LOGO
// ======================================================

const AkkurateLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 110 102.2"
      className="
        h-[58px]
        w-[62px]
        fill-white
        sm:h-[70px]
        sm:w-[70px]
      "
    >
      <path d="m54.9 1.4c-4.3 0-8.2 3.4-8.3 8-0.1 4.3 3.2 8.6 8.1 8.7 4.6 0.1 8.3-3.5 8.4-8 0.2-4.2-3.3-8.7-8.2-8.7z" />

      <path d="m38.3 10.9c-1.2-2.4-3.7-4.1-6.8-4.1-2.6-0.1-5.2 1.2-6.8 3.5-1.7 2.3-2 5.8-0.4 8.5l14 23.6h-29.8c-3.8 0.1-7.1 3.1-7 7.5-0.1 4.3 3.2 8 7.1 8.2h32.5l12.1-20.9-14.9-26.3z" />

      <path d="m101.6 42.5-29.6-0.1 14.1-23.8c1.5-2.8 1.3-6.3-1.1-8.9-1.4-1.6-3.3-2.7-5.6-2.7-2 0-4.8 0.9-6.4 3.3l-16.1 27 12.3 20.8h32.6c3.9 0 7.2-3.3 7.1-7.9-0.2-3.9-3.3-7.4-7.3-7.7z" />

      <path d="m17.4 64.6c-4.4 0-8 3.4-8 7.9-0.1 4 2.8 8.7 8 8.8 4.5 0 8.1-3.4 8.2-7.7 0.2-4-2.9-8.9-8.2-9z" />

      <path d="m92.7 64.7c-4.3-0.2-8.3 3.1-8.3 7.7-0.1 4.1 2.9 8.8 8.3 8.9 4.2-0.1 8-3.1 8-8 0-4.2-3.4-8.4-8-8.6z" />

      <path d="m55.1 41.2-28.4 47.6c-1 1.4-1.3 3-1.1 4.9 0.4 2.9 3 6.5 7.4 6.8 2 0.1 5.3-0.4 7-3.2l14.4-24.7c-0.5-3.5-1.1-7.3-1.3-7.9-0.3-0.6-4.8-2.9-4.8-2.9s4.4-2.2 4.7-2.4c0.4-0.4 2.1-4.5 2.1-4.5s1.7 4 2 4.5c0.3 0.4 4.6 2.4 4.6 2.4s-4.1 2.2-4.6 2.7c-0.3 1.2-1.3 8.1-1.3 8.1l14.3 24.3c1.3 2.2 3.7 3.5 6.5 3.6 4 0.1 7.8-2.9 7.9-7.4 0-1.4-0.2-2.8-1.1-4.2l-28.3-47.7z" />
    </svg>
  );
};

// ======================================================
// LOGO CARD
// ======================================================

const LogoCard = ({
  logo,
  index,
  row,
}) => {
  const isEven =
    index % 2 === 0;

  return (
    <div
      className={`
        group
        flex
        h-[80px]
        w-[80px]
        shrink-0
        items-center
        justify-center
        rounded-[18px]
        border
        border-slate-200
        bg-white
        shadow-[0_4px_10px_rgba(0,0,0,0.03)]
        transition-all
        duration-300

        sm:h-[100px]
        sm:w-[100px]
        sm:rounded-[20px]

        md:h-[110px]
        md:w-[110px]

        ${
          row === 1
            ? isEven
              ? "mt-0"
              : "mt-[30px] md:mt-[50px]"
            : isEven
              ? "mt-[30px] md:mt-[50px]"
              : "mt-0"
        }

        hover:-translate-y-2
        hover:border-slate-300
        hover:bg-slate-50
        hover:shadow-[0_12px_25px_rgba(0,0,0,0.10)]
      `}
    >
      <img
        src={logo.src}
        alt={logo.name}
        className="
          h-[42px]
          w-[42px]
          object-contain
          opacity-80
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:opacity-100

          sm:h-[50px]
          sm:w-[50px]

          md:h-[60px]
          md:w-[60px]
        "
      />
    </div>
  );
};

// ======================================================
// MAIN COMPONENT
// ======================================================

const Integrations = () => {
  const sectionRef =
    useRef(null);

  const [
    headingVisible,
    setHeadingVisible,
  ] = useState(false);

  const [
    animationKey,
    setAnimationKey,
  ] = useState(0);

  // ======================================================
  // SCROLL OBSERVER
  //
  // Every time this section enters viewport:
  // CENTER → OUTWARD animation plays.
  // ======================================================

  useEffect(() => {
    const section =
      sectionRef.current;

    if (!section) return;

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          // ================================================
          // ENTER SECTION
          // ================================================

          if (
            entry.isIntersecting
          ) {
            // Hide first
            setHeadingVisible(false);

            // New animation instance
            setAnimationKey(
              (previous) =>
                previous + 1
            );

            // Force fresh animation
            requestAnimationFrame(
              () => {
                requestAnimationFrame(
                  () => {
                    setHeadingVisible(
                      true
                    );
                  }
                );
              }
            );
          }

          // ================================================
          // LEAVE SECTION
          // ================================================

          else {
            /*
              Reset so animation
              plays again when user
              comes back.
            */

            setHeadingVisible(
              false
            );
          }
        },
        {
          /*
            Start animation when
            25% of section is visible.
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
        min-h-[600px]
        overflow-hidden
        bg-white
        pb-[60px]
        pt-[80px]

        sm:pt-[90px]

        md:pb-[80px]
        md:pt-[100px]
      "
    >
      {/* =================================================
          HEADING
      ================================================= */}

      <div
        className={`
          relative
          z-20
          mx-auto
          mb-[35px]
          max-w-4xl
          px-5
          text-center

          md:mb-[50px]

          ${
            headingVisible
              ? "integration-heading-visible"
              : "integration-heading-hidden"
          }
        `}
      >
        {/* =================================================
            SMALL HEADING
        ================================================= */}

        <div className="mb-4">
          <span
            className="
              text-[11px]
              font-bold
              uppercase
              tracking-[0.15em]
              text-violet-500
              sm:text-[13px]
            "
          >
            <AnimatedHeadingText
              text="Integrations"
              delayStep={0.07}
              animationKey={`small-${animationKey}`}
            />
          </span>
        </div>

        {/* =================================================
            MAIN HEADING
        ================================================= */}

        <h2
          className="
            m-0
            w-full
            whitespace-nowrap
            text-[clamp(1rem,5.5vw,3rem)]
            font-bold
            leading-none
            tracking-[-0.02em]
            text-slate-900
          "
        >
          <AnimatedHeadingText
            text="Incorporate our tool into"
            delayStep={0.045}
            animationKey={`main-${animationKey}`}
          />
          <span className="inline-block w-[0.25em]" aria-hidden="true">
            &nbsp;
          </span>
          <span className="text-blue-500">
            <AnimatedHeadingText
              text="your everyday tasks"
              delayStep={0.045}
              animationKey={`blue-${animationKey}`}
            />
          </span>
        </h2>
      </div>

      {/* =================================================
          LOGO AREA
      ================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          h-[270px]
          w-full
          overflow-hidden

          sm:h-[310px]

          md:h-[340px]
        "
      >
        {/* =================================================
            TOP SWIPER
            LEFT → RIGHT
        ================================================= */}

        <div
          className="
            absolute
            left-0
            top-0
            w-full
          "
        >
          <Swiper
            modules={[
              Autoplay,
              FreeMode,
            ]}
            loop={true}
            freeMode={true}
            slidesPerView="auto"
            spaceBetween={30}
            speed={5000}
            allowTouchMove={false}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            className="!overflow-visible"
          >
            {rowOneLogos.map(
              (logo, index) => (
                <SwiperSlide
                  key={`row1-${logo.name}-${index}`}
                  className="
                    !h-[130px]
                    !w-[80px]
                    sm:!w-[100px]
                    md:!w-[110px]
                  "
                >
                  <LogoCard
                    logo={logo}
                    index={index}
                    row={1}
                  />
                </SwiperSlide>
              )
            )}

            {/* Duplicate slides */}

            {rowOneLogos.map(
              (logo, index) => (
                <SwiperSlide
                  key={`row1-duplicate-${logo.name}-${index}`}
                  className="
                    !h-[130px]
                    !w-[80px]
                    sm:!w-[100px]
                    md:!w-[110px]
                  "
                >
                  <LogoCard
                    logo={logo}
                    index={index}
                    row={1}
                  />
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>

        {/* =================================================
            BOTTOM SWIPER
            RIGHT → LEFT
        ================================================= */}

        <div
          className="
            absolute
            left-0
            top-[140px]
            w-full

            md:top-[180px]
          "
        >
          <Swiper
            modules={[
              Autoplay,
              FreeMode,
            ]}
            loop={true}
            freeMode={true}
            slidesPerView="auto"
            spaceBetween={30}
            speed={5000}
            allowTouchMove={false}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: true,
              pauseOnMouseEnter: true,
            }}
            className="!overflow-visible"
          >
            {rowTwoLogos.map(
              (logo, index) => (
                <SwiperSlide
                  key={`row2-${logo.name}-${index}`}
                  className="
                    !h-[130px]
                    !w-[80px]
                    sm:!w-[100px]
                    md:!w-[110px]
                  "
                >
                  <LogoCard
                    logo={logo}
                    index={index}
                    row={2}
                  />
                </SwiperSlide>
              )
            )}

            {/* Duplicate slides */}

            {rowTwoLogos.map(
              (logo, index) => (
                <SwiperSlide
                  key={`row2-duplicate-${logo.name}-${index}`}
                  className="
                    !h-[130px]
                    !w-[80px]
                    sm:!w-[100px]
                    md:!w-[110px]
                  "
                >
                  <LogoCard
                    logo={logo}
                    index={index}
                    row={2}
                  />
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>

        {/* =================================================
            CENTER GLASS ORB
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            z-20
            hidden
            h-[220px]
            w-[220px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-white/80
            bg-white/30
            shadow-[0_8px_32px_rgba(0,0,0,0.05),inset_0_0_20px_rgba(255,255,255,0.5)]
            backdrop-blur-[16px]

            sm:block
            sm:h-[250px]
            sm:w-[250px]

            md:h-[380px]
            md:w-[380px]
          "
        />

        {/* =================================================
            CENTER AKKURATE LOGO
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            z-30
            hidden
            -translate-x-1/2
            -translate-y-1/2

            sm:block
          "
        >
          <div
            className="
              flex
              h-[90px]
              w-[90px]
              items-center
              justify-center
              rounded-full
              bg-gradient-to-br
              from-blue-500
              to-violet-500
              shadow-[0_10px_25px_rgba(59,130,246,0.4)]

              md:h-[120px]
              md:w-[120px]
            "
          >
            <AkkurateLogo />
          </div>
        </div>

        {/* =================================================
            LEFT FADE
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            z-40
            h-full
            w-[15%]
            bg-gradient-to-r
            from-white
            to-transparent
          "
        />

        {/* =================================================
            RIGHT FADE
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-0
            z-40
            h-full
            w-[15%]
            bg-gradient-to-l
            from-white
            to-transparent
          "
        />
      </div>

      {/* =================================================
          ANIMATION CSS
      ================================================= */}

      <style>{`

        /* ================================================
           INITIAL STATE
        ================================================= */

        .integration-heading-hidden {
          opacity: 0;
        }

        /* ================================================
           VISIBLE STATE
        ================================================= */

        .integration-heading-visible {
          opacity: 1;
        }

        /* ================================================
           COMPLETE TEXT
        ================================================= */

        .integration-heading-text {
          display: inline;
        }

        /* ================================================
           WORD

           Prevents individual letters from
           breaking word layout.
        ================================================= */

        .integration-heading-word {
          display: inline-block;
          white-space: nowrap;
        }

        /* ================================================
           PROPER WORD SPACE
        ================================================= */

        .integration-heading-space {
          display: inline-block;

          width: 0.45em;

          white-space: normal;
        }

        /* ================================================
           LETTER INITIAL STATE
        ================================================= */

        .integration-heading-letter {
          display: inline-block;

          opacity: 0;

          transform:
            translateY(16px)
            scale(0.82);

          animation-name:
            integrationCenterReveal;

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

        @keyframes integrationCenterReveal {

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
           REDUCED MOTION
        ================================================= */

        @media (
          prefers-reduced-motion: reduce
        ) {

          .integration-heading-letter {
            opacity: 1;

            transform: none;

            animation: none;
          }

        }

      `}</style>
    </section>
  );
};

export default Integrations;
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
  Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

/* =====================================================
   BLOG DATA
===================================================== */

const blogs = [
  {
    id: 1,
    title:
      "Decoding the future: AI's impact on the industries",
    description:
      "Our dedicated patent sit amet consectetur adipiscing elit Ut et massa me. Aliquam hendrerit urna vitae mattis...",
    image:
      "https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Grow Your Business",
  },

  {
    id: 2,
    title:
      "Innovation unleashed: behind the scenes our AI breakthroughs",
    description:
      "Our dedicated patent sit amet consectetur adipiscing elit Ut et massa me. Aliquam hendrerit urna vitae mattis...",
    image:
      "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "SEO Tips",
  },

  {
    id: 3,
    title:
      "Decoding the future: AI's impact on the industries",
    description:
      "Our dedicated patent sit amet consectetur adipiscing elit Ut et massa me. Aliquam hendrerit urna vitae mattis...",
    image:
      "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Marketing Trends",
  },

  {
    id: 4,
    title:
      "Innovation unleashed: behind the scenes our AI breakthroughs",
    description:
      "Our dedicated patent sit amet consectetur adipiscing elit Ut et massa me. Aliquam hendrerit urna vitae mattis...",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Content Strategy",
  },

  {
    id: 5,
    title:
      "Building a powerful brand identity in the modern era",
    description:
      "Our dedicated patent sit amet consectetur adipiscing elit Ut et massa me. Aliquam hendrerit urna vitae mattis...",
    image:
      "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Brand Identity",
  },

  {
    id: 6,
    title:
      "The role of teamwork in driving digital innovation",
    description:
      "Our dedicated patent sit amet consectetur adipiscing elit Ut et massa me. Aliquam hendrerit urna vitae mattis...",
    image:
      "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Team Collaboration",
  },
];

/* =====================================================
   ANIMATED HEADING

   CENTER → OUTWARD

   Example:

             L A T E S T
                 ↑
              CENTER
                 ↓
             O U T W A R D
===================================================== */

function AnimatedHeadingText({
  text,
  delayStep = 0.045,
  animationKey,
}) {
  /* -----------------------------------------------------
     Split text into words
  ----------------------------------------------------- */

  const words = text.split(" ");

  /* -----------------------------------------------------
     Store every letter
  ----------------------------------------------------- */

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

  /* -----------------------------------------------------
     Calculate exact center
  ----------------------------------------------------- */

  const center =
    (letters.length - 1) / 2;

  /* -----------------------------------------------------
     Sort from center → outside
  ----------------------------------------------------- */

  const animationOrder = letters
    .map((letter) => ({
      ...letter,

      distance: Math.abs(
        letter.globalIndex -
          center
      ),
    }))
    .sort((a, b) => {
      /* Closest to center first */

      if (
        a.distance !==
        b.distance
      ) {
        return (
          a.distance -
          b.distance
        );
      }

      /* If equal distance,
         reveal both sides
         in stable order */

      return (
        a.globalIndex -
        b.globalIndex
      );
    });

  /* -----------------------------------------------------
     Create animation delay
  ----------------------------------------------------- */

  const delayMap = {};

  animationOrder.forEach(
    (letter, order) => {
      delayMap[
        letter.globalIndex
      ] =
        order * delayStep;
    }
  );

  /* -----------------------------------------------------
     Render
  ----------------------------------------------------- */

  return (
    <span
      key={animationKey}
      className="
        blog-heading-text
      "
    >
      {words.map(
        (word, wordIndex) => (
          <React.Fragment
            key={`${wordIndex}-${animationKey}`}
          >
            {/* =========================================
                WORD
            ========================================= */}

            <span
              className="
                blog-heading-word
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
                        blog-heading-letter
                      "
                      style={{
                        animationDelay: `${
                          delayMap[
                            letter
                              .globalIndex
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
                WORD SPACE
            ========================================= */}

            {wordIndex <
              words.length - 1 && (
              <span
                className="
                  blog-heading-word-space
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
}

/* =====================================================
   BLOG COMPONENT
===================================================== */

const Blog = () => {
  const sectionRef =
    useRef(null);

  /* -----------------------------------------------------
     Controls whether heading is visible
  ----------------------------------------------------- */

  const [
    headingVisible,
    setHeadingVisible,
  ] = useState(false);

  /* -----------------------------------------------------
     Forces fresh animation
  ----------------------------------------------------- */

  const [
    animationKey,
    setAnimationKey,
  ] = useState(0);

  /* =====================================================
     SCROLL TRIGGER

     Animation happens when user scrolls INTO
     the Blog section.

     When they scroll away:
       → reset

     When they come back:
       → animate again
  ===================================================== */

  useEffect(() => {
    const section =
      sectionRef.current;

    if (!section) return;

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          /* =============================================
             USER SCROLLED INTO BLOG SECTION
          ============================================= */

          if (
            entry.isIntersecting
          ) {
            /*
              First hide the title.
            */

            setHeadingVisible(
              false
            );

            /*
              Create a new animation
              instance.
            */

            setAnimationKey(
              (previous) =>
                previous + 1
            );

            /*
              Wait for browser to
              render hidden state,
              then show it.
            */

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

          /* =============================================
             USER SCROLLED AWAY
          ============================================= */

          else {
            /*
              Reset title.

              Next time the user
              scrolls here, animation
              starts again.
            */

            setHeadingVisible(
              false
            );
          }
        },
        {
          /*
            Start when approximately
            25% of Blog section is visible.
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
        z-[1]
        overflow-hidden
        bg-slate-50
        py-16
        sm:py-20
        lg:py-24
      "
    >
      {/* =================================================
          BACKGROUND SHAPE
      ================================================= */}

      <img
        src="/assets/images/shapes/shape-image.png"
        alt=""
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          -z-[1]
          w-full
          opacity-60
        "
      />

      {/* =================================================
          CONTAINER
      ================================================= */}

      <div
        className="
          mx-auto
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* =================================================
            TOP TITLE
        ================================================= */}

        <div
          className={`
            mb-10
            text-center
            sm:mb-12

            ${
              headingVisible
                ? "blog-heading-visible"
                : "blog-heading-hidden"
            }
          `}
        >
          {/* =================================================
              OUR INSIGHTS
          ================================================= */}

          <span
            className="
              block
              text-xs
              font-bold
              uppercase
              tracking-[0.15em]
              text-[#002c7d]
              sm:text-sm
            "
          >
            <AnimatedHeadingText
              text="Our Insights"
              delayStep={0.07}
              animationKey={`our-${animationKey}`}
            />
          </span>

          {/* =================================================
              LATEST BLOGS & ARTICLES
          ================================================= */}

          <h2
            className="
              mt-2
              text-3xl
              font-bold
              leading-tight
              tracking-tight
              text-slate-900
              sm:text-4xl
              lg:text-[42px]
            "
          >
            <AnimatedHeadingText
              text="Latest Blogs & Articles"
              delayStep={0.045}
              animationKey={`latest-${animationKey}`}
            />
          </h2>
        </div>

        {/* =================================================
            BLOG SWIPER
        ================================================= */}

        <Swiper
          modules={[
            Autoplay,
            Pagination,
          ]}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 16,
            },

            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={800}
          pagination={{
            clickable: true,
            dynamicBullets: false,
          }}
          className="
            blog-swiper
            !pb-14
          "
        >
          {blogs.map(
            (blog) => (
              <SwiperSlide
                key={blog.id}
                className="!h-auto"
              >
                {/* =================================================
                    BLOG CARD
                ================================================= */}

                <article
                  className="
                    group
                    flex
                    h-full
                    min-h-[470px]
                    flex-col
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:shadow-xl
                  "
                >
                  {/* ===============================================
                      IMAGE
                  =============================================== */}

                  <div
                    className="
                      h-[220px]
                      overflow-hidden
                    "
                  >
                    <img
                      src={blog.image}
                      alt={blog.alt}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                    />
                  </div>

                  {/* ===============================================
                      CONTENT
                  =============================================== */}

                  <div
                    className="
                      flex
                      flex-1
                      flex-col
                      p-5
                      sm:p-6
                    "
                  >
                    {/* TITLE */}

                    <h3
                      className="
                        mb-3
                        text-lg
                        font-bold
                        leading-snug
                        text-slate-900
                        sm:text-xl
                      "
                    >
                      {blog.title}
                    </h3>

                    {/* DESCRIPTION */}

                    <p
                      className="
                        mb-6
                        flex-1
                        text-[14px]
                        leading-relaxed
                        text-slate-500
                        sm:text-[15px]
                      "
                    >
                      {blog.description}
                    </p>

                    {/* BUTTON */}

                    <a
                      href="/blog"
                      className="
                        mt-auto
                        inline-flex
                        w-fit
                        items-center
                        gap-2
                        rounded-lg
                        bg-blue-600
                        px-5
                        py-2.5
                        text-sm
                        font-semibold
                        text-white
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:bg-blue-700
                      "
                    >
                      Read more

                      <span
                        className="
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      >
                        →
                      </span>
                    </a>
                  </div>
                </article>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>

      {/* =================================================
          CUSTOM CSS
      ================================================= */}

      <style>{`

        /* =================================================
           TITLE INITIAL STATE
        ================================================= */

        .blog-heading-hidden {
          opacity: 0;
        }

        /* =================================================
           TITLE ACTIVE STATE
        ================================================= */

        .blog-heading-visible {
          opacity: 1;
        }

        /* =================================================
           COMPLETE HEADING
        ================================================= */

        .blog-heading-text {
          display: inline;
        }

        /* =================================================
           WORD

           Keeps every word together.
        ================================================= */

        .blog-heading-word {
          display: inline-block;

          white-space: nowrap;
        }

        /* =================================================
           WORD SPACE

           Gives clear spacing:

           Our   Insights

           Latest   Blogs   &   Articles
        ================================================= */

        .blog-heading-word-space {
          display: inline-block;

          width: 0.45em;

          white-space: normal;
        }

        /* =================================================
           LETTER

           Starts slightly below and smaller.
        ================================================= */

        .blog-heading-letter {
          display: inline-block;

          opacity: 0;

          transform:
            translateY(16px)
            scale(0.82);

          animation-name:
            blogLetterCenterReveal;

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
           CENTER → OUTWARD ANIMATION
        ================================================= */

        @keyframes blogLetterCenterReveal {

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

          .blog-heading-letter {
            opacity: 1;

            transform: none;

            animation: none;
          }

        }

        /* =================================================
           SWIPER PAGINATION
        ================================================= */

        .blog-swiper
          .swiper-pagination {
          bottom: 0px !important;

          display: flex;

          align-items: center;

          justify-content: center;

          gap: 6px;
        }

        /* =================================================
           NORMAL DOT
        ================================================= */

        .blog-swiper
          .swiper-pagination-bullet {
          width: 9px;

          height: 9px;

          margin: 0 !important;

          opacity: 1;

          background: #cbd5e1;

          border-radius: 999px;

          transition:
            width 0.3s ease,
            background-color 0.3s ease,
            transform 0.3s ease;
        }

        /* =================================================
           ACTIVE DOT
        ================================================= */

        .blog-swiper
          .swiper-pagination-bullet-active {
          width: 28px;

          background: #2563eb;

          transform: scale(1);
        }

        /* =================================================
           MOBILE
        ================================================= */

        @media (max-width: 639px) {

          .blog-swiper
            .swiper-pagination-bullet {
            width: 8px;

            height: 8px;
          }

          .blog-swiper
            .swiper-pagination-bullet-active {
            width: 24px;
          }

        }

      `}</style>
    </section>
  );
};

export default Blog;
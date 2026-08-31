import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";

/* =====================================================
   BLOG DATA
===================================================== */

const blogs = [
  {
    id: 1,
    title:
      "SEO vs AEO vs GEO: What Is the Difference and Which Does Your Business Need?",
    description:
      "A practical guide to SEO vs AEO vs GEO, including strategy, examples, common mistakes and actionable next steps for businesses.",
    slug: "/blog/seo-vs-aeo-vs-geo/",
    image: "/assets/images/blogs/blog1.png",
    alt: "SEO AEO GEO digital marketing strategy",
  },

  {
    id: 2,
    title: "How AI Search Is Changing Digital Marketing in 2026",
    description:
      "Understand how AI search is changing digital marketing in 2026, with practical strategies, examples, common mistakes and actionable next steps.",
    slug: "/blog/ai-search-digital-marketing-2026/",
    image: "/assets/images/blogs/blog2.png",
    alt: "AI search and digital marketing",
  },

  {
    id: 3,
    title:
      "What Is Generative Engine Optimization (GEO)? A Practical Business Guide",
    description:
      "Learn what Generative Engine Optimization is, why it matters for businesses, how GEO works and the practical steps needed to improve visibility.",
    slug: "/blog/generative-engine-optimization-guide/",
    image: "/assets/images/blogs/blog3.png",
    alt: "Generative Engine Optimization GEO",
  },

  {
    id: 4,
    title: "How to Improve Your Brand's Visibility in AI Search",
    description:
      "Discover practical ways to improve your brand's visibility in AI search through better content, authority, structured information and search-focused strategy.",
    slug: "/blog/improve-ai-search-visibility/",
    image: "/assets/images/blogs/blog4.png",
    alt: "Brand visibility in AI search",
  },

  {
    id: 5,
    title: "Google Ads vs SEO: Which Is Better for Lead Generation?",
    description:
      "Compare Google Ads and SEO for lead generation, understand when to use each channel and build a practical strategy for sustainable business growth.",
    slug: "/blog/google-ads-vs-seo/",
    image: "/assets/images/blogs/blog5.png",
    alt: "Google Ads versus SEO lead generation",
  },

  {
    id: 6,
    title: "How to Build a B2B Digital Marketing Strategy in 2026",
    description:
      "Learn how to build a practical B2B digital marketing strategy in 2026 with clear goals, channels, content, lead generation and measurable next steps.",
    slug: "/blog/b2b-digital-marketing-strategy/",
    image: "/assets/images/blogs/blog6.png",
    alt: "B2B digital marketing strategy",
  },

  {
    id: 7,
    title:
      "Local SEO Guide for Businesses: Google Business Profile, Content & Reviews",
    description:
      "A practical local SEO guide covering Google Business Profile, local content, reviews and the key steps businesses can take to improve local visibility.",
    slug: "/blog/local-seo-guide/",
    image: "/assets/images/blogs/blog7.png",
    alt: "Local SEO guide for businesses",
  },

  {
    id: 8,
    title: "How Much Should a Business Invest in Digital Marketing?",
    description:
      "Understand digital marketing budgets, what influences investment decisions, how to allocate resources and how businesses can plan their next steps.",
    slug: "/blog/digital-marketing-budget-guide/",
    image: "/assets/images/blogs/blog8.png",
    alt: "Digital marketing budget planning",
  },

  {
    id: 9,
    title:
      "Website Redesign Checklist: SEO, UX, Performance & Conversion",
    description:
      "Use this website redesign checklist to review SEO, UX, website performance and conversion factors before launching your redesigned website.",
    slug: "/blog/website-redesign-checklist/",
    image: "/assets/images/blogs/blog9.png",
    alt: "Website redesign checklist",
  },

  {
    id: 10,
    title:
      "How to Create Content That Performs in Google Search and AI Experiences",
    description:
      "Learn how to create useful content that performs across Google Search and AI experiences through better structure, relevance, authority and user-focused strategy.",
    slug: "/blog/content-for-ai-search/",
    image: "/assets/images/blogs/blog10.png",
    alt: "Content strategy for Google and AI search",
  },
];

/* =====================================================
   ANIMATED HEADING
===================================================== */

function AnimatedHeadingText({
  text,
  delayStep = 0.045,
  animationKey,
}) {
  const words = text.split(" ");
  const letters = [];

  words.forEach((word, wordIndex) => {
    [...word].forEach((character, characterIndex) => {
      letters.push({
        character,
        wordIndex,
        characterIndex,
        globalIndex: letters.length,
      });
    });
  });

  const center = (letters.length - 1) / 2;

  const animationOrder = letters
    .map((letter) => ({
      ...letter,
      distance: Math.abs(letter.globalIndex - center),
    }))
    .sort((a, b) => {
      if (a.distance !== b.distance) {
        return a.distance - b.distance;
      }

      return a.globalIndex - b.globalIndex;
    });

  const delayMap = {};

  animationOrder.forEach((letter, order) => {
    delayMap[letter.globalIndex] = order * delayStep;
  });

  return (
    <span key={animationKey} className="inline">
      {words.map((word, wordIndex) => (
        <React.Fragment key={`${wordIndex}-${animationKey}`}>
          <span className="inline-block whitespace-nowrap">
            {[...word].map((character, characterIndex) => {
              const letter = letters.find(
                (item) =>
                  item.wordIndex === wordIndex &&
                  item.characterIndex === characterIndex
              );

              return (
                <span
                  key={`${wordIndex}-${characterIndex}-${animationKey}`}
                  className="
                    inline-block
                    opacity-0
                    animate-[blogLetterCenterReveal_0.55s_cubic-bezier(0.22,1,0.36,1)_forwards]
                  "
                  style={{
                    animationDelay: `${delayMap[letter.globalIndex]}s`,
                  }}
                >
                  {character}
                </span>
              );
            })}
          </span>

          {wordIndex < words.length - 1 && (
            <span className="inline-block w-[0.45em]"> </span>
          )}
        </React.Fragment>
      ))}
    </span>
  );
}

/* =====================================================
   BLOG COMPONENT
===================================================== */

const Blog = () => {
  const sectionRef = useRef(null);

  const [headingVisible, setHeadingVisible] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeadingVisible(false);

          setAnimationKey((previous) => previous + 1);

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
      {/* BACKGROUND SHAPE */}

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

      {/* CONTAINER */}

      <div
        className="
          mx-auto
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* HEADING */}

        <div
          className={`
            mb-10
            text-center
            transition-opacity
            duration-300
            sm:mb-12
            ${headingVisible ? "opacity-100" : "opacity-0"}
          `}
        >
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

        {/* BLOG SWIPER */}

        <Swiper
          modules={[Autoplay, Pagination]}
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
          className="!pb-14"
        >
          {blogs.map((blog) => (
            <SwiperSlide key={blog.id} className="!h-auto">
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
                {/* IMAGE */}

                <div
                  className="
                    h-[220px]
                    w-full
                    overflow-hidden
                    bg-slate-100
                  "
                >
                  <img
                    src={blog.image}
                    alt={blog.alt}
                    loading="lazy"
                    onError={(e) => {
                      console.error(
                        "Blog image not found:",
                        blog.image
                      );

                      e.currentTarget.style.display = "none";
                    }}
                    className="
                      block
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />
                </div>

                {/* CONTENT */}

                <div
                  className="
                    flex
                    flex-1
                    flex-col
                    p-5
                    sm:p-6
                  "
                >
                  {/* CATEGORY */}

                  <span
                    className="
                      mb-3
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-blue-600
                      sm:text-[11px]
                    "
                  >
                    Digital Marketing
                  </span>

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

                  {/* READ MORE */}

                  <Link
                    to={blog.slug}
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
                      no-underline
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
                  </Link>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ANIMATION */}

      <style>{`
        @keyframes blogLetterCenterReveal {
          0% {
            opacity: 0;
            transform: translateY(16px) scale(0.82);
          }

          60% {
            opacity: 1;
            transform: translateY(-2px) scale(1.04);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .swiper-pagination {
          bottom: 0 !important;
        }

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

        .swiper-pagination-bullet-active {
          width: 28px;
          background: #2563eb;
          transform: scale(1);
        }

        @media (max-width: 639px) {
          .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
          }

          .swiper-pagination-bullet-active {
            width: 24px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-\\[blogLetterCenterReveal_0\\.55s_cubic-bezier\\(0\\.22\\,1\\,0\\.36\\,1\\)_forwards\\] {
            opacity: 1 !important;
            transform: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Blog;
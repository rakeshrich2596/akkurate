import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    number: "1.",
    title: "Website Design & Development",
    description:
      "Build fast, modern websites designed to convert visitors into customers across every device.",
    points: [
      "Responsive, mobile-first websites",
      "Fast, secure, and SEO-ready builds",
      "UX focused on generating leads",
    ],
    image: "/assets/images/content_images/WEB-DEV.png",
    color: "bg-[#eaf2ff]",
  },

  {
    number: "2.",
    title: "Search Engine Optimization (SEO)",
    description:
      "Increase your visibility on Google with technical SEO, content strategy, and long-term organic growth.",
    points: [
      "On-page & technical optimization",
      "Keyword and content strategy",
      "Higher rankings and organic traffic",
    ],
    image: "/assets/images/content_images/SEO.png",
    color: "bg-[#fff3e8]",
  },

  {
    number: "3.",
    title: "Social Media Management",
    description:
      "Build brand awareness, engage your audience, and create consistent content that drives business results.",
    points: [
      "Content planning and creation",
      "Community engagement",
      "Performance tracking and reporting",
    ],
    image: "/assets/images/content_images/SMM.png",
    color: "bg-[#f0edff]",
  },

  {
    number: "4.",
    title: "Google & Meta Advertising",
    description:
      "Launch high-performing paid campaigns that generate qualified leads while maximizing your advertising budget.",
    points: [
      "Search, Display & Social campaigns",
      "Lead generation and retargeting",
      "ROI-focused campaign optimization",
    ],
    image: "/assets/images/content_images/GOOGLE ADS.png",
    color: "bg-[#e9f8f3]",
  },

  {
    number: "5.",
    title: "LinkedIn Personal Branding",
    description:
      "Position founders and executives as industry authorities through strategic content and thought leadership.",
    points: [
      "Thought leadership content and visuals",
      "Profile optimization",
      "Personal brand growth strategy",
    ],
    image: "/assets/images/content_images/Linkedin.png",
    color: "bg-[#fff0f5]",
  },

  {
    number: "6.",
    title: "Logo & Brand Identity Design",
    description:
      "Create memorable visual identities that build trust and make your business instantly recognizable.",
    points: [
      "Logo and visual identity design",
      "Brand guidelines and assets",
      "Consistent brand positioning",
    ],
    image: "/assets/images/content_images/Logo_brand.png",
    color: "bg-[#f1f4ff]",
  },

  {
    number: "7.",
    title: "Video Production & Creative Content",
    description:
      "Produce professional videos, reels, corporate films, and visual assets that capture attention and tell your story.",
    points: [
      "Corporate videos and brand films",
      "Reels and social media content",
      "Product and promotional videos",
    ],
    image: "/assets/images/content_images/VIDEO.png",
    color: "bg-[#fff5eb]",
  },

  {
    number: "8.",
    title: "Content Writing & Copywriting",
    description:
      "From websites to blogs and marketing campaigns, we create content that informs, persuades, and converts.",
    points: [
      "Website and landing page copy",
      "Blogs, articles, and newsletters",
      "Marketing and sales collateral",
    ],
    image: "/assets/images/content_images/CONTENT.png",
    color: "bg-[#eefaf5]",
  },

  {
    number: "9.",
    title: "Marketing Automation & CRM Solutions",
    description:
      "Automate follow-ups, lead nurturing, customer journeys, and sales processes to improve efficiency and growth.",
    points: [
      "CRM setup and integration",
      "Lead nurturing workflows",
      "Email and sales automation",
    ],
    image: "/assets/images/content_images/CRM.png",
    color: "bg-[#f3efff]",
  },

  {
    number: "10.",
    title: "Analytics, CRO & Growth Consulting",
    description:
      "Track what matters, optimize conversion rates, and make data-driven decisions that continuously improve business performance.",
    points: [
      "Website and campaign analytics",
      "Conversion rate optimization (CRO)",
      "Data-driven growth strategy",
    ],
    image: "/assets/images/content_images/CRO.png",
    color: "bg-[#edf4ff]",
  },
];

/* ============================================================
   CENTER → OUTWARD TITLE
============================================================ */

function AnimatedMainTitle({ playKey }) {
  const firstLine = "Production-Ready Systems";
  const secondLine = "Systems";

  const renderCenterOutward = (text, lineType) => {
    const letters = text.split("");

    const center = (letters.length - 1) / 2;

    return letters.map((letter, index) => {
      const distance = Math.abs(index - center);

      /*
        Center letters get smaller delay.
        Letters farther from center get larger delay.
      */

      const delay = distance * 0.055;

      return (
        <motion.span
          key={`${playKey}-${lineType}-${index}`}
          initial={{
            opacity: 0,
            scale: 0.65,
            x: index < center ? 25 : -25,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 0.65,
            delay,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            inline-block
            will-change-transform
          "
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      );
    });
  };

  return (
    <h2
      className="
        relative
        z-10
        text-4xl
        font-bold
        leading-tight
        tracking-tight
        text-[#081a4b]
        sm:text-5xl
        lg:text-6xl
      "
    >
      {/* FIRST LINE */}

      <span className="block whitespace-nowrap">
        {renderCenterOutward(firstLine, "first")}
      </span>
    </h2>
  );
}

/* ============================================================
   SERVICES
============================================================ */

function Services() {
  const sectionRef = useRef(null);

  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          /*
            Change key every time section enters.

            This forces Framer Motion to create
            a completely new animation.
          */

          setAnimationKey((prev) => prev + 1);
        }
      },
      {
        threshold: 0.25,
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="
        relative
        w-full
        bg-white
      "
    >
      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div
        className="
          mx-auto
          w-full
          px-4
          sm:px-6
          md:px-10
          lg:px-12
        "
      >
        {/* ===================================================
            HEADING
        =================================================== */}

        <div
          className="
            relative
            mx-auto
            max-w-[1000px]
            pb-10
            pt-12
            text-center
          "
        >
          {/* =================================================
              GHOST TEXT
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-5
              -translate-x-1/2
              select-none
              whitespace-nowrap
              text-[70px]
              font-black
              uppercase
              tracking-[-3px]
              text-neutral-100
              sm:text-[100px]
              lg:text-[140px]
            "
          >
            With Our
          </div>

          {/* =================================================
              BADGE
          ================================================= */}

          <div
            className="
              relative
              z-10
              mb-1
              inline-flex
              rounded-full
              border
              border-neutral-200
              bg-white
              px-5
              py-2
              shadow-sm
            "
          >
            <span
              className="
                text-sm
                font-semibold
                uppercase
                tracking-wide
                text-[#1455d9]
              "
            >
              What We Offer
            </span>
          </div>

          {/* =================================================
              MAIN TITLE

              ALWAYS VISIBLE

              CENTER → OUTWARD
          ================================================= */}

          <AnimatedMainTitle playKey={animationKey} />

          {/* =================================================
              SUB HEADING
          ================================================= */}

          <p
            className="
              relative
              z-10
              mx-auto
              mt-6
              max-w-[850px]
              text-base
              leading-7
              text-neutral-500
              sm:text-lg
            "
          >
            Akkurate helps enterprises and high-growth businesses design, build,
            and scale advanced digital systems that are secure, compliant, and
            built for real-world adoption.
          </p>
        </div>

        {/* =====================================================
            STICKY CARDS
        ===================================================== */}

        <div className="mx-auto max-w-[1400px] px-4 pt-2 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <div
              key={service.number}
              className="
        sticky
        top-6
        mb-6

        min-h-[620px]

        overflow-hidden
        rounded-[30px]

        shadow-[0_16px_45px_rgba(0,0,0,0.10)]

        sm:min-h-[580px]
        sm:rounded-[32px]

        md:min-h-[400px]
        md:mb-7

        lg:min-h-[360px]
        lg:mb-8
      "
              style={{
                zIndex: index + 1,
              }}
            >
              {/* =================================================
          CARD BACKGROUND
      ================================================= */}

              <div
                className={`
          relative

          flex
          min-h-[620px]

          w-full

          items-center

          px-6
          py-8

          sm:min-h-[580px]
          sm:px-9
          sm:py-9

          md:min-h-[400px]
          md:px-10
          md:py-8

          lg:min-h-[360px]
          lg:px-12
          lg:py-7

          ${service.color}
        `}
              >
                <div
                  className="
            grid
            w-full

            grid-cols-1

            items-center

            gap-7

            md:gap-9

            lg:grid-cols-2
            lg:gap-12
          "
                >
                  {/* =========================================
              LEFT CONTENT
          ========================================= */}

                  <div>
                    {/* TITLE */}

                    <h3
                      className="
                text-lg
                font-semibold
                leading-[1.2]
                tracking-tight
                text-[#081a4b]

                sm:text-2xl

                md:text-3xl

                lg:text-[38px]
                lg:leading-[1.15]
              "
                    >
                      {service.number} {service.title}
                    </h3>

                    {/* DESCRIPTION */}

                    <p
                      className="
                mt-4

                max-w-[560px]

                text-sm
                leading-6

                text-neutral-600

                sm:mt-5
                sm:text-base
                sm:leading-7

                lg:mt-5
                lg:text-[15px]
                lg:leading-7
              "
                    >
                      {service.description}
                    </p>

                    {/* LIST */}

                    <ul
                      className="
                mt-5
                space-y-3

                sm:mt-6
                sm:space-y-3
              "
                    >
                      {service.points.map((point, pointIndex) => (
                        <li
                          key={pointIndex}
                          className="
                      flex
                      items-start
                      gap-2.5

                      text-[13px]
                      font-medium
                      leading-5

                      text-[#081a4b]

                      sm:text-sm
                      sm:leading-6

                      lg:text-[14px]
                    "
                        >
                          <span
                            className="
                        mt-0.5

                        flex
                        h-5
                        w-5
                        shrink-0

                        items-center
                        justify-center

                        rounded-full

                        bg-[#1455d9]

                        text-[10px]
                        text-white

                        sm:h-5
                        sm:w-5
                        sm:text-[11px]
                      "
                          >
                            →
                          </span>

                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* BUTTON */}

                    <a
                      href="/contact"
                      className="
                mt-6

                inline-flex

                items-center
                gap-2

                rounded-full

                bg-[#081a4b]

                px-6
                py-3

                text-[13px]
                font-semibold

                text-white

                transition
                duration-300

                hover:-translate-y-1
                hover:bg-[#1455d9]

                sm:mt-7
                sm:px-6
                sm:py-3

                sm:text-sm
              "
                    >
                      Explore solutions
                      <span
                        className="
                  text-base
                "
                      >
                        →
                      </span>
                    </a>
                  </div>

                  {/* =========================================
              RIGHT IMAGE
          ========================================= */}

                  <div
                    className="
              flex

              h-[220px]

              items-center
              justify-center

              overflow-hidden

              rounded-2xl

              bg-white/60

              p-4

              sm:h-[280px]
              sm:rounded-3xl

              md:h-[320px]

              lg:h-[300px]
              lg:p-5
            "
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="
                h-full
                w-full

                object-contain

                transition
                duration-500

                hover:scale-105
              "
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

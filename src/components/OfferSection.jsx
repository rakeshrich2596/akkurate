import React, { useEffect, useRef, useState } from "react";

const offerCards = [
  {
    title: "Performance Marketing",
    heading:
      "High-ROI paid campaigns across Google, Meta, LinkedIn, and emerging platforms",
    image: "/assets/images/thumbs/offer-img1.png",
    bg: "bg-[#fce7f3]",
    labelColor: "text-[#ec4899]",
    buttonBg: "bg-white",
    layout: "large",
  },
  {
    title: "Logo Design",
    heading:
      "Turn traffic into customers with attractive logo designs.",
    image: "/assets/images/thumbs/offer-img2.png",
    bg: "bg-[#fdf2f8]",
    labelColor: "text-[#ec4899]",
    buttonBg: "bg-[#f9a8d4]",
    layout: "large",
  },
  {
    title: "SEO & Organic Growth Systems",
    heading:
      "Technical SEO and content engines that rank and convert.",
    image: "/assets/images/thumbs/offer-img3.png",
    bg: "bg-[#eff6ff]",
    labelColor: "text-[#1351D8]",
    buttonBg: "bg-[#1351D8]",
    layout: "middle",
  },
  {
    title: "Marketing Automation",
    heading:
      "Lead nurturing, CRM workflows, and AI-powered journeys.",
    image: "/assets/images/thumbs/offer-img4.png",
    bg: "bg-[#f3e8ff]",
    labelColor: "text-[#9333ea]",
    buttonBg: "bg-white",
    layout: "large",
  },
  {
    title: "Website Design and Development",
    heading:
      "Design frameworks, link building, and scalable website ecosystems",
    image: "/assets/images/thumbs/offer-img5.png",
    bg: "bg-[#ecfeff]",
    labelColor: "text-[#ec4899]",
    buttonBg: "bg-[#14b8a6]",
    layout: "large",
  },
];


/* =========================================================
   LETTER ANIMATION COMPONENT

   Example:

   O → U → R → C → O → R → E

   Each letter comes separately.
========================================================= */

function LetterAnimation({
  text,
  isVisible,
}) {
  return (
    <span className="inline-block">
      {text.split("").map((letter, index) => {

        /*
          Space should also take space,
          but should not visibly animate.
        */

        if (letter === " ") {
          return (
            <span
              key={index}
              className="inline-block"
            >
              &nbsp;
            </span>
          );
        }

        return (
          <span
            key={index}
            className={`
              inline-block

              transition-all
              duration-500

              ease-[cubic-bezier(0.16,1,0.3,1)]

              ${
                isVisible
                  ? "translate-x-0 translate-y-0 opacity-100"
                  : "-translate-x-8 translate-y-2 opacity-0"
              }
            `}
            style={{
              transitionDelay: isVisible
                ? `${index * 55}ms`
                : "0ms",
            }}
          >
            {letter}
          </span>
        );
      })}
    </span>
  );
}


/* =========================================================
   OFFER CARD
========================================================= */

function OfferCard({ card }) {
  return (
    <div
      className={`
        group
        relative
        z-10
        h-full
        min-h-[300px]
        overflow-hidden
        rounded-3xl
        px-8
        pt-14
        pb-20

        transition-all
        duration-300

        hover:-translate-y-1

        sm:px-10

        ${card.bg}
      `}
    >

      {/* TITLE */}

      <span
        className={`
          mb-2
          block
          text-base
          font-semibold
          ${card.labelColor}
        `}
      >
        {card.title}
      </span>


      {/* HEADING */}

      <h4
        className="
          relative
          z-10
          mb-5
          max-w-[330px]
          text-2xl
          font-semibold
          leading-[1.15]
          text-[#081a4b]
          sm:text-3xl
        "
      >
        {card.heading}
      </h4>


      {/* ARROW BUTTON */}

      <a
        href="/service-details"
        className={`
          relative
          z-10

          flex
          h-15
          w-15

          items-center
          justify-center

          rounded-full

          text-2xl

          transition-all
          duration-300

          hover:-translate-y-1
          hover:bg-[#1351D8]
          hover:text-white

          ${card.buttonBg}

          ${
            card.buttonBg === "bg-white"
              ? "text-[#081a4b]"
              : "text-white"
          }
        `}
        aria-label={`View ${card.title} service`}
      >
        ↗
      </a>


      {/* BACKGROUND IMAGE */}

      <img
        src={card.image}
        alt={card.title}
        className="
          pointer-events-none
          absolute
          bottom-0
          right-0
          z-0
          max-w-[65%]

          transition-transform
          duration-500

          group-hover:scale-105
        "
      />

    </div>
  );
}


/* =========================================================
   OFFER SECTION
========================================================= */

function OfferSection() {

  const sectionRef = useRef(null);

  const [isVisible, setIsVisible] =
    useState(false);


  /* =========================================================
     INTERSECTION OBSERVER

     Section enters viewport
          ↓
     Letter animation starts

     Section leaves viewport
          ↓
     Animation resets

     Comes again
          ↓
     Animation plays again
  ========================================================= */

  useEffect(() => {

    const section =
      sectionRef.current;

    if (!section) return;


    const observer =
      new IntersectionObserver(
        ([entry]) => {

          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
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
        overflow-hidden
        bg-white
        py-[60px]
      "
    >

      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-4
          sm:px-6
          lg:px-8
        "
      >

        {/* =========================================
            SECTION HEADER
        ========================================== */}

        <div className="mb-13">

          <div
            className="
              flex
              flex-wrap
              items-center
              justify-between
              gap-4
              lg:flex-nowrap
            "
          >

            {/* =====================================
                LEFT HEADING

                LETTER BY LETTER
            ====================================== */}

            <div
              className="
                w-full
                max-w-[672px]
                text-center
                lg:text-left
              "
            >

              <h3
                className="
                  text-3xl
                  font-semibold
                  leading-[1.04]
                  text-[#081a4b]
                  sm:text-4xl
                  lg:text-5xl
                "
              >

                <LetterAnimation
                  text="Our Core Growth Services"
                  isVisible={isVisible}
                />

              </h3>

            </div>


            {/* =====================================
                RIGHT DESCRIPTION

                NO ANIMATION
            ====================================== */}

            <p
              className="
                mx-auto
                w-full
                max-w-[500px]
                text-center
                text-base
                leading-7
                text-neutral-500
                lg:mx-0
                lg:text-left
              "
            >
              In today's competitive business, the demand for efficient and
              cost-effective IT solutions has never been more critical.
            </p>

          </div>

        </div>


        {/* =========================================
            SERVICES GRID
        ========================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-4
            lg:grid-cols-3
          "
        >

          {/* ======================================
              LEFT COLUMN
          ======================================= */}

          <div
            className="
              grid
              grid-cols-1
              gap-4
              sm:grid-cols-2
              lg:grid-cols-1
            "
          >

            <div className="min-h-[350px]">
              <OfferCard
                card={offerCards[0]}
              />
            </div>

            <div className="min-h-[350px]">
              <OfferCard
                card={offerCards[1]}
              />
            </div>

          </div>


          {/* ======================================
              CENTER COLUMN
          ======================================= */}

          <div
            className="
              min-h-[500px]
              lg:min-h-full
            "
          >
            <OfferCard
              card={offerCards[2]}
            />
          </div>


          {/* ======================================
              RIGHT COLUMN
          ======================================= */}

          <div
            className="
              grid
              grid-cols-1
              gap-4
              sm:grid-cols-2
              lg:grid-cols-1
            "
          >

            <div className="min-h-[350px]">
              <OfferCard
                card={offerCards[3]}
              />
            </div>

            <div className="min-h-[350px]">
              <OfferCard
                card={offerCards[4]}
              />
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default OfferSection;
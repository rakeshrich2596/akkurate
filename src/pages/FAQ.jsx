import React, { useEffect, useRef, useState } from "react";
import {
  FiSearch,
  FiPlus,
  FiMinus,
  FiArrowRight, 
} from "react-icons/fi";

/* ============================================================
   FAQ DATA
   WORDS KEPT EXACTLY FROM SOURCE
============================================================ */

const faqItems = [
  {
    id: 1,
    question: "What is Sassly?",
    answer:
      "GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online. Our professional",
  },

  {
    id: 2,
    question: "Why should I choose Sassly?",
    answer:
      "GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online. Our professional",
  },

  {
    id: 3,
    question:
      "Can I upgrade to a different plan at a later time?",
    answer:
      "GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online. Our professional",
  },

  {
    id: 4,
    question:
      "Whatâ€™s the cost of additional users?",
    answer:
      "GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online. Our professional",
  },

  {
    id: 5,
    question:
      "Whatâ€™s the commitment?",
    answer:
      "GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online. Our professional",
  },

  {
    id: 6,
    question:
      "What languages does Sassly AI support?",
    answer:
      "GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online. Our professional",
  },
];

/* ============================================================
   ANIMATION HOOK
============================================================ */

const useReveal = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return [ref, visible];
};

/* ============================================================
   FAQ ACCORDION
============================================================ */

const FAQAccordion = () => {
  // Original source has "Why should I choose Sassly?"
  // opened by default.
  const [openItem, setOpenItem] = useState(2);

  const toggleItem = (id) => {
    setOpenItem((current) =>
      current === id ? null : id
    );
  };

  return (
    <div className="w-full">
      {faqItems.map((item) => {
        const isOpen = openItem === item.id;

        return (
          <div
            key={item.id}
            className="
              border-b
              border-transparent
              last:border-b-0
            "
          >
            {/* QUESTION */}

            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              className="
                group
                flex
                w-full
                items-center
                justify-between
                gap-4
                bg-transparent
                px-0
                py-6
                text-left
                outline-none
                transition-all
                duration-300
                sm:py-7
                lg:py-8
              "
            >
              <span
                className="
                  max-w-[90%]
                  text-[15px]
                  font-semibold
                  leading-6
                  text-[#081a4b]
                  transition-colors
                  duration-300
                  group-hover:text-[#1455d9]
                  sm:text-[17px]
                  lg:text-[18px]
                "
              >
                {item.question}
              </span>

              {/* PLUS / MINUS */}

              <span
                className={`
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    isOpen
                      ? "rotate-180 bg-[#1455d9] text-white"
                      : "bg-orange-50 text-[#1455d9]"
                  }
                `}
              >
                {isOpen ? (
                  <FiMinus className="text-[16px]" />
                ) : (
                  <FiPlus className="text-[16px]" />
                )}
              </span>
            </button>

            {/* ANSWER */}

            <div
              className={`
                grid
                transition-all
                duration-500
                ease-[cubic-bezier(0.22,1,0.36,1)]
                ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }
              `}
            >
              <div className="min-h-0 overflow-hidden">
                <p
                  className="
                    max-w-[620px]
                    pb-7
                    pr-4
                    text-[13px]
                    leading-7
                    text-neutral-500
                    sm:text-[14px]
                    lg:text-[15px]
                    lg:leading-8
                  "
                >
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

/* ============================================================
   SEARCH / INTEGRATED APPS SECTION
============================================================ */

const IntegratedAppsSection = () => {
  const [searchText, setSearchText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const [sectionRef, visible] = useReveal();

  const popularTopics = [
    "Coding",
    "Traveling",
    "aeroplane",
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(searchText);
  };

  const handlePopularClick = (topic) => {
    setSearchText(topic);
    setSearchQuery(topic);
  };

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-[#f7f9fc]
        px-5
        pb-16
        pt-20
        sm:px-8
        sm:pb-20
        sm:pt-24
        lg:px-12
        lg:pb-[120px]
        lg:pt-[180px]
      "
    >
      {/* BACKGROUND SHAPES */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[180px]
          -top-[180px]
          h-[400px]
          w-[400px]
          animate-pulse
          rounded-full
          bg-blue-100/50
          blur-3xl
          sm:h-[520px]
          sm:w-[520px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-[180px]
          -left-[180px]
          h-[380px]
          w-[380px]
          rounded-full
          bg-slate-200/40
          blur-3xl
        "
      />

      {/* CONTAINER */}

      <div
        className={`
          relative
          z-10
          mx-auto
          w-full
          max-w-[1290px]
          text-center
          transition-all
          duration-[1000ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }
        `}
      >
        <div className="mx-auto max-w-[850px]">
          {/* TITLE */}

          <h3
            className="
              m-0
              text-[30px]
              font-bold
              leading-[1.15]
              tracking-[-0.035em]
              text-[#081a4b]
              sm:text-[38px]
              md:text-[46px]
              lg:text-[52px]
            "
          >
            Hello, what can we help you find?
          </h3>

          {/* DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-4
              max-w-[650px]
              text-[13px]
              font-medium
              leading-7
              text-neutral-500
              sm:text-[15px]
              lg:text-[16px]
            "
          >
            Docly is a fully featured knowledge base theme for
            WordPress.
          </p>

          {/* SEARCH */}

          <form
            onSubmit={handleSearch}
            className="
              relative
              mt-8
              sm:mt-11
            "
          >
            <div
              className="
                flex
                flex-col
                gap-2
                rounded-[24px]
                bg-white
                p-2
                shadow-[0_20px_60px_rgba(15,23,42,0.08)]
                sm:flex-row
                sm:items-center
                sm:rounded-full
              "
            >
              {/* INPUT */}

              <div className="relative flex-1">
                <FiSearch
                  className="
                    pointer-events-none
                    absolute
                    left-5
                    top-1/2
                    -translate-y-1/2
                    text-[18px]
                    text-slate-400
                  "
                />

                <input
                  type="text"
                  value={searchText}
                  onChange={(e) =>
                    setSearchText(e.target.value)
                  }
                  placeholder="Search What You Want to Know"
                  className="
                    h-[52px]
                    w-full
                    rounded-full
                    border-0
                    bg-transparent
                    pl-12
                    pr-5
                    text-[13px]
                    text-slate-800
                    outline-none
                    placeholder:text-slate-400
                    sm:h-[56px]
                    sm:text-[14px]
                  "
                />
              </div>

              {/* SEARCH BUTTON */}

              <button
                type="submit"
                className="
                  group
                  flex
                  h-[52px]
                  w-full
                  shrink-0
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#1455d9]
                  px-7
                  text-[13px]
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#081a4b]
                  hover:shadow-lg
                  active:scale-95
                  sm:h-[56px]
                  sm:w-auto
                "
              >
                <FiSearch
                  className="
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

                <span>
                  Search
                </span>
              </button>
            </div>
          </form>

          {/* POPULAR */}

          <div
            className="
              mt-7
              flex
              flex-col
              items-center
              justify-center
              gap-3
              sm:flex-row
              sm:flex-wrap
            "
          >
            <span
              className="
                text-[14px]
                font-semibold
                text-[#081a4b]
              "
            >
              Popular:
            </span>

            <div
              className="
                flex
                flex-wrap
                justify-center
                gap-3
              "
            >
              {popularTopics.map((topic) => (
                <button
                  key={topic}
                  type="button"
                  onClick={() =>
                    handlePopularClick(topic)
                  }
                  className="
                    rounded-lg
                    bg-white
                    px-4
                    py-2.5
                    text-[12px]
                    font-medium
                    text-slate-500
                    shadow-[0_8px_25px_rgba(15,23,42,0.06)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#1455d9]
                    hover:text-white
                  "
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          {/* SEARCH RESULT */}

          {searchQuery && (
            <p
              className="
                mt-5
                text-[12px]
                text-slate-400
              "
            >
              {searchQuery}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};


/* ============================================================
   FIRST FAQ SECTION
============================================================ */

const FirstFAQSection = () => {
  const [sectionRef, visible] = useReveal();

  return (
    <section
      ref={sectionRef}
      className="
        bg-white
        px-5
        py-16
        sm:px-8
        sm:py-20
        lg:px-12
        lg:py-[120px]
      "
    >
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1290px]
          grid-cols-1
          gap-10
          lg:grid-cols-12
          lg:gap-8
          xl:gap-12
        "
      >
        {/* LEFT */}

        <div
          className={`
            lg:col-span-4
            transition-all
            duration-[900ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${
              visible
                ? "translate-x-0 opacity-100"
                : "-translate-x-12 opacity-0"
            }
          `}
        >
          <h3
            className="
              m-0
              max-w-[500px]
              text-[30px]
              font-bold
              capitalize
              leading-[1.15]
              tracking-[-0.04em]
              text-[#081a4b]
              sm:text-[38px]
              lg:text-[44px]
            "
          >
            Frequently ask{" "}
            <span
              className="
                font-serif
                font-normal
                italic
                text-[#1455d9]
              "
            >
              Questions
            </span>
          </h3>

          <p
            className="
              mt-6
              max-w-[500px]
              text-[13px]
              font-medium
              leading-7
              text-neutral-500
              sm:mt-8
              sm:text-[15px]
              sm:leading-8
            "
          >
            Create tasks with various custom statuses to focus more on your keep track of the progress of each why in
          </p>

          <div className="mt-8 sm:mt-9">
            <a
              href="/register"
              className="
                group
                inline-flex
                items-center
                gap-5
                rounded-xl
                bg-[#1455d9]
                px-7
                py-3.5
                text-[13px]
                font-medium
                capitalize
                text-white
                no-underline
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#081a4b]
                hover:shadow-lg
                active:scale-95
                sm:px-8
              "
            >
              <span>
                Contact Us
              </span>

              <FiArrowRight
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </a>
          </div>
        </div>

        {/* RIGHT */}

        <div
          className={`
            lg:col-span-8
            lg:pl-5
            xl:pl-10
            transition-all
            delay-100
            duration-[1000ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${
              visible
                ? "translate-x-0 opacity-100"
                : "translate-x-12 opacity-0"
            }
          `}
        >
          <FAQAccordion />
        </div>
      </div>
    </section>
  );
};


/* ============================================================
   SECOND FAQ SECTION
============================================================ */

const SecondFAQSection = () => {
  const [sectionRef, visible] = useReveal();

  return (
    <section
      ref={sectionRef}
      className="
        bg-white
        px-5
        pb-16
        sm:px-8
        sm:pb-20
        lg:px-12
        lg:pb-[120px]
      "
    >
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1290px]
          grid-cols-1
          gap-10
          lg:grid-cols-12
          lg:gap-8
          xl:gap-12
        "
      >
        {/* LEFT */}

        <div
          className={`
            lg:col-span-5
            transition-all
            duration-[900ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${
              visible
                ? "translate-x-0 opacity-100"
                : "-translate-x-12 opacity-0"
            }
          `}
        >
          <h3
            className="
              m-0
              max-w-[600px]
              text-[30px]
              font-bold
              capitalize
              leading-[1.15]
              tracking-[-0.04em]
              text-[#081a4b]
              sm:text-[38px]
              lg:text-[44px]
            "
          >
            Navigating the Digital Marketing Landscape: Trends Unveiled
          </h3>

          <p
            className="
              mt-6
              max-w-[500px]
              text-[13px]
              font-medium
              leading-7
              text-neutral-500
              sm:mt-8
              sm:text-[15px]
              sm:leading-8
            "
          >
            Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium totamto aperiame eaque ipsa quae ab illo inventore veritatis
          </p>

          <div className="mt-8 sm:mt-9">
            <a
              href="/register"
              className="
                group
                inline-flex
                items-center
                gap-5
                rounded-xl
                bg-[#1455d9]
                px-7
                py-3.5
                text-[13px]
                font-medium
                capitalize
                text-white
                no-underline
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#081a4b]
                hover:shadow-lg
                active:scale-95
                sm:px-8
              "
            >
              <span>
                get started trial
              </span>

              <FiArrowRight
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </a>
          </div>
        </div>

        {/* RIGHT */}

        <div
          className={`
            lg:col-span-7
            lg:pl-5
            xl:pl-10
            transition-all
            delay-100
            duration-[1000ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${
              visible
                ? "translate-x-0 opacity-100"
                : "translate-x-12 opacity-0"
            }
          `}
        >
          <FAQAccordion />
        </div>
      </div>
    </section>
  );
};


/* ============================================================
   TASK MANAGEMENT SECTION
============================================================ */

const TaskManagementSection = () => {
  const [sectionRef, visible] = useReveal();

  const tags = [
    {
      text: "Project management",
      className:
        "bg-gradient-to-r from-[#1455d9] to-[#4f8cff] text-white",
    },
    {
      text: "Technology",
      className:
        "bg-[#f4eee8] text-[#081a4b]",
    },
    {
      text: "Technology",
      className:
        "bg-gradient-to-r from-[#1455d9] to-[#4f8cff] text-[#081a4b]",
    },
    {
      text: "Project management",
      className:
        "bg-yellow-400 text-[#081a4b]",
    },
    {
      text: "Technology",
      className:
        "bg-orange-400 text-[#081a4b]",
    },
    {
      text: "Technology",
      className:
        "bg-gradient-to-r from-[#1455d9] to-[#4f8cff] text-[#081a4b]",
    },
    {
      text: "Project management",
      className:
        "bg-orange-400 text-[#081a4b]",
    },
    {
      text: "Technology",
      className:
        "bg-gradient-to-r from-[#1455d9] to-[#4f8cff] text-[#081a4b]",
    },
    {
      text: "Project management",
      className:
        "bg-[#f4eee8] text-[#081a4b]",
    },
    {
      text: "Technology",
      className:
        "bg-pink-200 text-[#081a4b]",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-[#f7f8f2]
        px-5
        pb-16
        sm:px-8
        sm:pb-20
        lg:px-12
        lg:pb-[120px]
      "
    >
      <div className="mx-auto max-w-[1290px]">

        {/* ==================================================
            LAPTOP IMAGE
        ================================================== */}

        <div
          className={`
            relative
            z-20
            flex
            justify-end
            pr-0
            transition-all
            duration-[900ms]
            ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }
          `}
        >
          <img
            src="/assets/images/thumbs/laptop-man.png"
            alt="Image"
            className="
              -mb-8
              mr-0
              w-[170px]
              max-w-full
              object-contain
              sm:-mb-10
              sm:w-[220px]
              lg:-mb-10
              lg:mr-20
              lg:w-[280px]
            "
          />
        </div>


        {/* ==================================================
            GREEN MAIN CARD
        ================================================== */}

        <div
          className="
            relative
            z-10
            overflow-hidden
            rounded-[28px]
            bg-[#12654d]
            px-5
            pb-10
            pt-16
            sm:rounded-[32px]
            sm:px-8
            sm:pb-14
            sm:pt-20
            lg:px-10
            lg:pb-16
            lg:pt-[100px]
          "
        >
          {/* HILL SHAPE */}

          <img
            src="/assets/images/shapes/hill-shape.png"
            alt="Hill Shape"
            className="
              pointer-events-none
              absolute
              inset-0
              z-0
              h-full
              w-full
              object-cover
              opacity-40
            "
          />

          {/* TASK IMAGE */}

          <img
            src="/assets/images/thumbs/task-management-img.png"
            alt="Image"
            className="
              pointer-events-none
              absolute
              right-5
              top-5
              z-0
              hidden
              w-[180px]
              object-contain
              opacity-90
              lg:block
              xl:w-[230px]
            "
          />

          {/* =================================================
              CONTENT
          ================================================== */}

          <div
            className={`
              relative
              z-10
              mx-auto
              max-w-[570px]
              text-center
              transition-all
              duration-[1000ms]
              ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }
            `}
          >
            {/* BADGE */}

            <div
              className="
                mb-4
                inline-flex
                min-w-max
                items-center
                gap-2
                rounded-full
                bg-white/10
                px-3
                py-2
                text-[12px]
                font-medium
                leading-none
                text-white
                backdrop-blur-sm
                sm:mb-5
                sm:px-4
                sm:py-2.5
                sm:text-[13px]
              "
            >
              <span>
                Up to{" "}
                <span
                  className="
                    font-bold
                    text-yellow-300
                  "
                >
                  70%
                </span>{" "}
                off managed cloud hosting
              </span>
            </div>


            {/* TITLE */}

            <h3
              className="
                m-0
                text-[30px]
                font-bold
                leading-[1.15]
                tracking-[-0.035em]
                text-white
                sm:text-[38px]
                md:text-[44px]
                lg:text-[48px]
              "
            >
              Ready to revolutionize our service?
            </h3>


            {/* BUTTONS */}

            <div
              className="
                mt-7
                flex
                flex-wrap
                items-center
                justify-center
                gap-4
              "
            >
              <a
                href="#"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#1455d9]
                  px-6
                  py-4
                  text-[13px]
                  font-bold
                  text-white
                  no-underline
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white
                  hover:text-[#081a4b]
                  active:scale-95
                  sm:px-7
                  sm:py-5
                "
              >
                Get Started Trial
              </a>

              <a
                href="#"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/30
                  bg-transparent
                  px-6
                  py-4
                  text-[13px]
                  font-bold
                  text-white
                  no-underline
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white
                  hover:text-[#081a4b]
                  active:scale-95
                  sm:px-7
                  sm:py-5
                "
              >
                Get Started Trial
              </a>
            </div>
          </div>


          {/* =================================================
              DRAG / ROTATE TAGS
          ================================================== */}

          <div className="relative z-10 pt-10 sm:pt-14 lg:pt-16">
            <div
              className="
                flex
                w-full
                flex-wrap
                items-center
                justify-center
                gap-3
                overflow-hidden
                px-2
                sm:gap-4
                sm:px-6
              "
            >
              {tags.map((tag, index) => (
                <span
                  key={`${tag.text}-${index}`}
                  className={`
                    cursor-grab
                    select-none
                    rounded-full
                    px-5
                    py-2
                    text-[12px]
                    font-semibold
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:rotate-2
                    sm:px-7
                    sm:py-2.5
                    sm:text-[13px]
                    ${tag.className}
                  `}
                >
                  {tag.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


/* ============================================================
   MAIN COMPONENT
============================================================ */

const FAQ = () => {
  return (
    <main className="w-full overflow-hidden bg-white">

      {/* ================================================
          INTEGRATED APPS
      ================================================ */}

      <IntegratedAppsSection />


      {/* ================================================
          FREQUENTLY ASK QUESTIONS
      ================================================ */}

      <FirstFAQSection />


      {/* ================================================
          DIGITAL MARKETING / FAQ
      ================================================ */}

      <SecondFAQSection />


      {/* ================================================
          TASK MANAGEMENT
      ================================================ */}

      <TaskManagementSection />


      {/* ==================================================
          REDUCED MOTION
      ================================================== */}

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
};

export default FAQ;
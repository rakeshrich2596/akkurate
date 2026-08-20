import { useEffect, useState } from "react";

/* =========================================================
   HERO SLIDES
========================================================= */

const slides = [
  {
    title: "Accurate Digital Marketing Services",
    desc: "Get precise digital marketing strategies designed to deliver real results. Contact us today for your audit.",
  },
  {
    title: "Accurate Strategies. Real Growth.",
    desc: "We create data-driven strategies that position your brand at the top. Experience measurable growth and performance.",
  },
  {
    title: "Accuracy in Every Web Experience",
    desc: "Build meaningful connections through smart design and targeted strategies. Turn every visitor into a loyal customer.",
  },
  {
    title: "Accurate Logos for Strong Brands",
    desc: "We design logos that reflect your brand identity and build trust. Make every impression powerful and memorable.",
  },
];

/* =========================================================
   COUNTER
========================================================= */

function Counter({
  target,
  duration = 4000,
  decimals = 0,
  prefix = "",
  suffix = "",
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let startTime = null;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) {
        startTime = currentTime;
      }

      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easedProgress = 1 - Math.pow(1 - progress, 3);

      const currentValue = target * easedProgress;

      setValue(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setValue(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [target, duration]);

  return (
    <>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </>
  );
}

/* =========================================================
   HERO
========================================================= */

function Hero() {
  const [title, setTitle] = useState(
    "Accurate Marketing That Performs Like Revenue",
  );

  const [desc, setDesc] = useState(
    "Data-first digital growth systems built for brands that want measurable outcomes, not vanity metrics.",
  );

  const [isChanging, setIsChanging] = useState(false);

  const [revenueShapeKey, setRevenueShapeKey] = useState(0);

  /* =======================================================
     HERO SLIDER
  ======================================================= */

  useEffect(() => {
    let changeTimer;

    const interval = setInterval(() => {
      setIsChanging(true);

      changeTimer = setTimeout(() => {
        setTitle((currentTitle) => {
          const currentIndex = slides.findIndex(
            (slide) => slide.title === currentTitle,
          );

          const nextIndex =
            currentIndex + 1 >= slides.length ? 0 : currentIndex + 1;

          setDesc(slides[nextIndex].desc);

          setRevenueShapeKey((previous) => previous + 1);

          return slides[nextIndex].title;
        });

        setIsChanging(false);
      }, 450);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(changeTimer);
    };
  }, []);

  return (
    <section
      id="home"
      className="
        relative

        min-h-[calc(100svh-82px)]

        overflow-hidden

        bg-[#f3f3ff]
      "
    >
      {/* =================================================
          BACKGROUND SHAPE
      ================================================= */}

      <img
        src="/assets/images/shapes/sqaure_shape.png"
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          top-0
          z-0

          left-[40%]

          h-full
          w-[70%]

          object-cover
          object-left

          opacity-80

          md:left-[40%]
          md:w-[70%]

          lg:left-[20%]
          lg:w-[70%]

          xl:left-[40%]
          xl:w-[70%]

          2xl:left-[40%]
          2xl:w-[72%]

          max-md:left-[8%]
          max-md:h-full
          max-md:w-[110%]
          max-md:opacity-45
        "
      />

      {/* =================================================
          MAIN CONTAINER
      ================================================= */}

      <div
        className="
          relative
          z-10

          mx-auto

          grid

          min-h-[calc(100svh-82px)]

          max-w-[1600px]

          grid-cols-1

          items-center

          pb-[100px]

          px-5

          sm:px-8

          md:px-10

          lg:grid-cols-[46%_54%]

          lg:px-12

          xl:px-16

          2xl:px-20
        "
      >
        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div
          className="
            relative
            z-30

            flex
            min-h-full

            flex-col
            justify-center

            pt-14
            pb-12

            sm:pt-16
            sm:pb-14

            md:pt-18
            md:pb-16

            lg:pt-24
            lg:pb-20
            lg:pr-8

            xl:pt-28
            xl:pr-10
          "
        >
          {/* =================================================
              TITLE
          ================================================= */}

          <div
            className="
              w-full
              max-w-[680px]
            "
          >
            <h1
              className="
                m-0
                w-full

                font-['Inter']
                font-extrabold

                text-[34px]
                leading-[1.12]
                tracking-[-0.8px]

                text-black

                transition-all
                duration-500
                ease-out

                sm:text-[40px]

                md:text-[45px]

                lg:text-[48px]
                lg:tracking-[-1px]

                xl:text-[53px]

                2xl:text-[56px]

                max-[480px]:text-[31px]
                max-[480px]:leading-[1.15]

                max-[380px]:text-[29px]
              "
              style={{
                textWrap: "balance",
                opacity: isChanging ? 0 : 1,
                transform: isChanging ? "translateY(8px)" : "translateY(0)",
              }}
            >
              {title}
            </h1>
          </div>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <p
            className="
              mt-6

              max-w-[610px]

              font-['Inter']
              font-normal

              text-[14px]
              leading-[1.75]

              text-[#61708a]

              transition-all
              duration-500
              ease-out

              sm:mt-7
              sm:text-[15px]

              md:text-[16px]

              lg:mt-8
              lg:text-[17px]
            "
            style={{
              opacity: isChanging ? 0 : 1,
              transform: isChanging ? "translateY(8px)" : "translateY(0)",
            }}
          >
            {desc}
          </p>

          {/* =================================================
              BUTTON + CLIENT INFORMATION
          ================================================= */}

          <div
            className="
              mt-8

              flex
              flex-nowrap
              items-center

              gap-6

              sm:mt-9
              sm:gap-8

              md:gap-9

              lg:mt-10
              lg:gap-10

              max-[480px]:flex-col
              max-[480px]:items-start
            "
          >
            {/* BUTTON */}

            <a
              href="#contact"
              className="
                inline-flex

                min-h-[54px]
                min-w-[270px]

                items-center
                justify-center

                rounded-full

                bg-[#1455d9]

                px-7
                py-4

                font-['Inter']

                text-[14px]
                font-semibold

                text-white

                shadow-[0_12px_30px_rgba(20,85,217,0.20)]

                transition
                duration-300

                hover:-translate-y-1
                hover:bg-[#0847c9]

                sm:min-w-[285px]
                sm:text-[15px]

                md:min-w-[295px]

                max-[480px]:w-full
                max-[480px]:min-w-0
              "
            >
              Build My Growth Engine
            </a>

            {/* CLIENT INFORMATION */}

            <div
              className="
                flex
                flex-col
              "
            >
              {/* LOGOS + 2.3M */}

              <div
                className="
                  flex
                  items-center
                  gap-4
                "
              >
                <div
                  className="
                    flex
                    items-center
                  "
                >
                  <div
                    className="
                      relative
                      z-[3]

                      h-8
                      w-8

                      overflow-hidden
                      rounded-full
                      bg-white

                      sm:h-9
                      sm:w-9
                    "
                  >
                    <img
                      src="/assets/images/brand_logo/brand06.png"
                      alt="Client"
                      className="
                        h-full
                        w-full
                        object-cover
                      "
                    />
                  </div>

                  <div
                    className="
                      relative
                      z-[2]

                      -ml-2

                      h-8
                      w-8

                      overflow-hidden
                      rounded-full
                      bg-white

                      sm:h-9
                      sm:w-9
                    "
                  >
                    <img
                      src="/assets/images/brand_logo/brand03.png"
                      alt="Client"
                      className="
                        h-full
                        w-full
                        object-cover
                      "
                    />
                  </div>

                  <div
                    className="
                      relative
                      z-[1]

                      -ml-2

                      h-8
                      w-8

                      overflow-hidden
                      rounded-full
                      bg-white

                      sm:h-9
                      sm:w-9
                    "
                  >
                    <img
                      src="/assets/images/brand_logo/brand01.png"
                      alt="Client"
                      className="
                        h-full
                        w-full
                        object-cover
                      "
                    />
                  </div>
                </div>

                <div
                  className="
                    whitespace-nowrap

                    font-['Inter']

                    text-[21px]
                    font-bold
                    leading-none
                    text-black

                    sm:text-[23px]
                  "
                >
                  <Counter
                    target={2.3}
                    duration={4200}
                    decimals={1}
                    suffix="M+"
                  />
                </div>
              </div>

              {/* CLIENT REVIEWS */}

              <div
                className="
                  mt-2

                  whitespace-nowrap

                  font-['Inter']

                  text-[12px]
                  font-medium
                  leading-none

                  text-[#1e293b]

                  sm:mt-3
                  sm:text-[13px]
                "
              >
                <Counter target={5000} duration={4200} suffix="+" /> Client
                reviews
              </div>
            </div>
          </div>
        </div>

        {/* =================================================
            RIGHT HERO VISUAL
        ================================================= */}

        <div
          className="
            relative
            z-20

            flex

            min-h-[540px]

            items-end
            justify-center

            sm:min-h-[590px]

            md:min-h-[620px]

            lg:min-h-[calc(100svh-82px)]

            lg:justify-end

            xl:min-h-[720px]
          "
        >
          {/* =================================================
              WHITE FRAME
          ================================================= */}

          <div
            className="
              absolute

              bottom-0
              left-1/2

              z-10

              h-[430px]
              w-[86%]

              -translate-x-1/2

              rounded-t-[32px]
              rounded-br-[60px]
              rounded-bl-[32px]

              border
              border-white

              bg-white

              shadow-[0_25px_70px_rgba(20,30,70,0.06)]

              sm:h-[500px]
              sm:w-[76%]

              md:h-[555px]
              md:w-[70%]

              lg:left-[15%]
              lg:h-[625px]
              lg:w-[60%]
              lg:translate-x-0

              xl:left-[13%]
              xl:h-[650px]
              xl:w-[66%]
            "
          />

          {/* =================================================
              PERSON IMAGE
          ================================================= */}

          <img
            src="/assets/images/thumbs/banner-img.png"
            alt="Akkurate Digital Solutions"
            className="
              absolute

              bottom-[20px]
              left-1/2

              z-20

              w-[90%]

              -translate-x-1/2

              object-contain
              object-bottom

              sm:bottom-[23px]
              sm:w-[78%]

              md:bottom-[25px]
              md:w-[72%]

              lg:bottom-[25px]
              lg:left-[12%]
              lg:w-[68%]
              lg:translate-x-0

              xl:left-[10%]
              xl:w-[64%]
            "
          />

          {/* =================================================
              TRUSTPILOT CARD
          ================================================= */}

          <div
            className="
              absolute

              right-[1%]
              top-[70px]

              z-40

              hidden

              w-[195px]

              rounded-[28px]

              bg-white

              p-5

              shadow-[0_15px_40px_rgba(20,30,70,0.10)]

              md:block

              lg:right-[1%]
              lg:top-[90px]
              lg:w-[218px]
              lg:p-6

              xl:right-[2%]
              xl:top-[80px]
            "
          >
            {/* 4.9 */}

            <div
              className="
                absolute

                right-0
                top-0

                z-50

                -mr-3
                -mt-3

                inline-flex

                items-center
                gap-1

                rounded-full

                bg-[#05b779]

                px-3
                py-1
              "
            >
              <span
                className="
                  font-['Inter']

                  text-sm
                  font-bold

                  text-white
                "
              >
                4.9
              </span>

              <img
                src="/assets/images/icons/star.svg"
                alt=""
                className="
                  h-4
                  w-4
                "
              />
            </div>

            <img
              src="/assets/images/icons/ratings.svg"
              alt="Ratings"
              className="
                h-auto
                w-auto
              "
            />

            <div
              className="
                mt-4

                flex
                max-w-[154px]

                items-center
                justify-between
              "
            >
              <span
                className="
                  font-['Inter']

                  text-base
                  font-semibold

                  text-[#151b2c]

                  lg:text-lg
                "
              >
                Trust pilot
              </span>

              <img
                src="/assets/images/icons/verified-icon.svg"
                alt="Verified"
                className="
                  h-5
                  w-5
                "
              />
            </div>
          </div>

          {/* =================================================
              REVENUE SHAPE
              
              ONLY THIS IMAGE IS MOVED.
              REVENUE CARD BELOW IS NOT MOVED.
          ================================================= */}

          {/* =================================================
    REVENUE SHAPE
================================================= */}

          <img
            key={revenueShapeKey}
            src="/assets/images/shapes/revenue-shape.png"
            alt=""
            aria-hidden="true"
            className="
    pointer-events-none
    absolute
    z-50

    w-[38px]
    max-w-none
    opacity-80

    animate-revenue-shake

    /* MOBILE */
    bottom-[120px]
    left-[-18px]

    /* SMALL */
    sm:bottom-[135px]
    sm:left-[-20px]
    sm:w-[46px]

    /* TABLET */
    md:bottom-[145px]
    md:left-[-2%]
    md:w-[50px]

    /* LAPTOP */
    lg:bottom-[75px]
    lg:left-[-4%]

    /* LARGE DESKTOP */
    xl:bottom-[150px]
    xl:left-[-6%]
  "
            style={{
              transformOrigin: "center bottom",
            }}
          />

          {/* =================================================
              REVENUE CARD
              
              POSITION IS UNCHANGED
          ================================================= */}

          <div
            className="
              absolute

              bottom-0
              left-1/2

              z-40

              w-[calc(100%-24px)]
              max-w-[340px]

              -translate-x-1/2

              overflow-hidden

              rounded-[20px]

              bg-white

              p-4

              shadow-[0_20px_50px_rgba(0,0,0,0.10)]

              sm:w-[340px]
              sm:max-w-none
              sm:p-5

              md:left-[3%]
              md:translate-x-0

              lg:left-[1%]
              lg:w-[365px]
              lg:p-6

              xl:left-[-1%]
            "
          >
            <div
              className="
                relative
                z-10

                flex
                items-start
                justify-between
              "
            >
              {/* REVENUE TEXT */}

              <div>
                <p
                  className="
                    font-['Inter']

                    text-[13px]
                    font-medium
                    uppercase
                    tracking-wide

                    text-[#7c8799]

                    sm:text-[14px]
                  "
                >
                  Revenue
                </p>

                <h3
                  className="
                    mt-2

                    font-['Inter']

                    text-[25px]
                    font-bold

                    text-black

                    sm:text-[28px]

                    lg:text-[30px]
                  "
                >
                  <Counter
                    target={4820}
                    duration={4800}
                    decimals={2}
                    prefix="$"
                  />
                </h3>

                <div
                  className="
                    mt-3

                    flex
                    items-center
                    gap-3

                    font-['Inter']

                    text-[12px]

                    sm:gap-4
                    sm:text-[13px]

                    lg:gap-5
                    lg:text-[14px]
                  "
                >
                  <span
                    className="
                      font-bold
                      text-black
                    "
                  >
                    Daily
                  </span>

                  <span
                    className="
                      text-[#8c95a5]
                    "
                  >
                    Weekly
                  </span>

                  <span
                    className="
                      text-[#8c95a5]
                    "
                  >
                    Monthly
                  </span>
                </div>
              </div>

              {/* REVENUE CHART */}

              <img
                src="/assets/images/thumbs/revenue-chart.png"
                alt="Revenue chart"
                className="
                  mt-1

                  h-[72px]
                  w-[72px]

                  object-contain

                  sm:h-[82px]
                  sm:w-[82px]

                  lg:h-[100px]
                  lg:w-[100px]
                "
              />
            </div>
          </div>

          {/* =================================================
              EXPERIENCE BADGE
          ================================================= */}

          <div
            className="
              absolute

              bottom-5
              right-0

              z-40

              flex

              h-[150px]
              w-[200px]

              items-center
              justify-center

              bg-[#1455d9]

              font-['Inter']

              text-white

              shadow-[0_20px_40px_rgba(20,85,217,0.25)]

              sm:h-[120px]
              sm:w-[120px]

              md:h-[140px]
              md:w-[140px]

              lg:h-[200px]
              lg:w-[200px]

              lg:right-[4%]

              xl:right-[6%]
            "
            style={{
              clipPath: "polygon(0 0, 76% 0, 100% 25%, 100% 100%, 0 100%)",
            }}
          >
            <div
              className="
                text-center
              "
            >
              <div
                className="
                  font-['Inter']

                  text-[34px]
                  font-bold
                  leading-none

                  sm:text-[42px]

                  md:text-[48px]

                  lg:text-[52px]
                "
              >
                <Counter target={8} duration={4000} suffix="+" />
              </div>

              <p
                className="
                  mt-2

                  font-['Inter']

                  text-[11px]
                  font-medium

                  sm:text-[13px]

                  md:text-[14px]

                  lg:mt-3
                  lg:text-[15px]
                "
              >
                Years Experience
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          CUSTOM CSS
      ===================================================== */}

      <style>{`

        @keyframes revenueShake {

          0% {
            transform:
              translateY(0)
              rotate(0deg);
          }

          20% {
            transform:
              translateY(-2px)
              rotate(-2deg);
          }

          40% {
            transform:
              translateY(2px)
              rotate(2deg);
          }

          60% {
            transform:
              translateY(-1px)
              rotate(-1deg);
          }

          80% {
            transform:
              translateY(1px)
              rotate(1deg);
          }

          100% {
            transform:
              translateY(0)
              rotate(0deg);
          }

        }

        .animate-revenue-shake {
          animation:
            revenueShake
            0.7s
            ease-in-out;
        }

        #home h1 {
          text-wrap: balance;
        }

        @media (min-width: 1280px) {

          #home h1 {
            max-width: 700px;
            font-size: 53px;
            line-height: 1.1;
          }

        }

        @media (min-width: 1024px) and (max-width: 1279px) {

          #home h1 {
            max-width: 680px;
            font-size: 48px;
            line-height: 1.1;
          }

        }

        @media (min-width: 768px) and (max-width: 1023px) {

          #home h1 {
            max-width: 680px;
            font-size: 45px;
            line-height: 1.12;
          }

        }

        @media (max-width: 767px) {

          #home h1 {
            max-width: 100%;
            font-size: 34px;
            line-height: 1.12;
          }

        }

        @media (max-width: 480px) {

          #home h1 {
            max-width: 100%;
            font-size: 31px;
            line-height: 1.15;
          }

        }

        @media (max-width: 380px) {

          #home h1 {
            font-size: 29px;
          }

        }

        @media (prefers-reduced-motion: reduce) {

          .animate-revenue-shake {
            animation: none;
          }

        }

      `}</style>
    </section>
  );
}

export default Hero;

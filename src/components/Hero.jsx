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
   GENERIC COUNTER
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

  const [slideIndex, setSlideIndex] = useState(-1);

  const [isChanging, setIsChanging] = useState(false);

  /* =======================================================
     RESTART REVENUE SHAPE ONLY
  ======================================================= */

  const [revenueShapeKey, setRevenueShapeKey] = useState(0);

  /* =======================================================
     HERO SLIDER

     Same animation timing:
     2 seconds interval
     450ms content transition
  ======================================================= */

  useEffect(() => {
    let changeTimer;

    const interval = setInterval(() => {
      setIsChanging(true);

      changeTimer = setTimeout(() => {
        setSlideIndex((previousIndex) => {
          const nextIndex =
            previousIndex + 1 >= slides.length ? 0 : previousIndex + 1;

          setTitle(slides[nextIndex].title);

          setDesc(slides[nextIndex].desc);

          /* Revenue shape only */
          setRevenueShapeKey((previous) => previous + 1);

          return nextIndex;
        });

        setIsChanging(false);
      }, 450);
    }, 2000);

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
          BACKGROUND SQUARE / GRID

          Desktop:
          Starts around center and goes to right.

          Mobile:
          Stays behind hero content but becomes softer.
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
          md:opacity-80

          lg:left-[20%]
          lg:w-[70%]
          lg:opacity-80

          xl:left-[40%]
          xl:w-[70%]

          2xl:left-[40%]
          2xl:w-[72%]

          max-md:left-[8%]
          max-md:h-[100%]
          max-md:w-[110%]
          max-md:opacity-45
        "
      />

      {/* =================================================
          LIGHT CENTER BLEND

          Keeps left content readable.
      ================================================= */}

      

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

            py-12

            sm:py-14

            md:py-16

            lg:py-20
            lg:pr-8

            xl:pr-10
          "
        >
          {/* =================================================
              TITLE
          ================================================= */}

          <h1
            className={`
              max-w-[750px]

              break-words

              text-[38px]
              font-semibold
              leading-[1.06]
              tracking-[-1.5px]

              text-black

              transition-all
              duration-500

              sm:text-[46px]

              md:max-w-[680px]
              md:text-[54px]

              lg:max-w-[690px]
              lg:text-[58px]
              lg:tracking-[-2px]

              xl:max-w-[720px]
              xl:text-[66px]

              2xl:text-[70px]

              max-[380px]:text-[34px]

              ${
                isChanging
                  ? "translate-y-2 opacity-0"
                  : "translate-y-0 opacity-100"
              }
            `}
          >
            {title}
          </h1>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <p
            className={`
              mt-6

              max-w-[620px]

              text-[15px]
              leading-[1.75]

              text-[#61708a]

              transition-all
              duration-500

              sm:mt-7
              sm:text-[16px]

              md:text-[17px]

              lg:mt-8
              lg:text-[18px]

              ${
                isChanging
                  ? "translate-y-2 opacity-0"
                  : "translate-y-0 opacity-100"
              }
            `}
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
            {/* =================================================
                BUTTON
            ================================================= */}

            <a
              href="#contact"
              className="
                inline-flex

                min-h-[56px]
                min-w-[280px]

                items-center
                justify-center

                rounded-full

                bg-[#1455d9]

                px-7
                py-4

                text-[15px]
                font-bold
                text-white

                shadow-[0_12px_30px_rgba(20,85,217,0.20)]

                transition
                duration-300

                hover:-translate-y-1
                hover:bg-[#0847c9]

                sm:min-w-[300px]
                sm:text-[16px]

                md:min-w-[310px]
                md:text-[17px]

                max-[480px]:w-full
                max-[480px]:min-w-0
              "
            >
              Build My Growth Engine
            </a>

            {/* =================================================
                CLIENT INFORMATION
            ================================================= */}

            <div className="flex flex-col">
              {/* TOP ROW */}
              <div className="flex items-center gap-4">
                {/* CLIENT LOGOS */}
                <div className="flex items-center">
                  {/* CLIENT 1 */}
                  <div
                    className="
          relative
          z-[3]
          h-8
          w-8
          overflow-hidden
          rounded-full
          bg-white
          transition
          duration-300
          hover:z-[10]
          hover:scale-110
          sm:h-9
          sm:w-9
        "
                  >
                    <img
                      src="/assets/images/brand_logo/brand06.png"
                      alt="Client"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* CLIENT 2 */}
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
          transition
          duration-300
          hover:z-[10]
          hover:scale-110
          sm:-ml-2.5
          sm:h-9
          sm:w-9
        "
                  >
                    <img
                      src="/assets/images/brand_logo/brand03.png"
                      alt="Client"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* CLIENT 3 */}
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
          transition
          duration-300
          hover:z-[10]
          hover:scale-110
          sm:-ml-2.5
          sm:h-9
          sm:w-9
        "
                  >
                    <img
                      src="/assets/images/brand_logo/brand01.png"
                      alt="Client"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                {/* 2.3M+ */}
                <div
                  className="
        text-[23px]
        font-extrabold
        leading-none
        text-black
        sm:text-[25px]
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

              {/* BOTTOM ROW */}
              <div
                className="
      mt-2
      whitespace-nowrap
      text-[13px]
      font-medium
      leading-none
      text-[#1e293b]
      sm:mt-3
      sm:text-[15px]
    "
              >
                <Counter target={5000} duration={4200} suffix="+" /> Client
                reviews
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            RIGHT HERO VISUAL
        =================================================== */}

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
              LARGE WHITE PERSON FRAME
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
              max-w-none

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

              Desktop + tablet only.
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
            {/* 4.9 BADGE */}

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
                  text-sm
                  font-bold
                  leading-none
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

            {/* RATINGS */}

            <img
              src="/assets/images/icons/ratings.svg"
              alt="Ratings"
              className="
                h-auto
                w-auto
              "
            />

            {/* TRUST PILOT */}

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
          ================================================= */}

          <img
            key={revenueShapeKey}
            src="/assets/images/shapes/revenue-shape.png"
            alt=""
            aria-hidden="true"
            className="
              pointer-events-none

              absolute

              bottom-[118px]
              left-[2%]

              z-30

              w-[38px]

              max-w-none

              opacity-80

              animate-revenue-shake

              sm:bottom-[135px]
              sm:left-[2%]
              sm:w-[46px]

              md:bottom-[145px]
              md:w-[50px]

              lg:bottom-[150px]
              lg:left-[2%]

              xl:left-[1%]
            "
            style={{
              transformOrigin: "center bottom",
            }}
          />

          {/* =================================================
              REVENUE CARD
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
            {/* REVENUE CONTENT */}

            <div
              className="
                relative
                z-10

                flex
                items-start
                justify-between
              "
            >
              <div>
                <p
                  className="
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

                {/* REVENUE COUNTER */}

                <h3
                  className="
                    mt-2

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

                {/* TABS */}

                <div
                  className="
                    mt-3

                    flex
                    items-center

                    gap-3

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
                  relative
                  z-10

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
              8+ YEARS EXPERIENCE
          ================================================= */}

          <div
            className="
              absolute

              bottom-5
              right-[0%]

              z-40

              flex

              h-[150px]
              w-[200px]

              items-center
              justify-center

              bg-[#1455d9]

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
                  text-[34px]
                  font-bold
                  leading-none

                  sm:text-[42px]

                  md:text-[48px]

                  lg:text-[52px]
                "
              >
                <Counter target={8} duration={4000} decimals={0} suffix="+" />
              </div>

              <p
                className="
                  mt-2

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
    </section>
  );
}

export default Hero;

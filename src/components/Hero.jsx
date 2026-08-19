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
   Runs ONLY when the component mounts.
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

      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      /*
        Smooth ease-out.
      */
      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      const currentValue =
        target * easedProgress;

      setValue(currentValue);

      if (progress < 1) {
        animationFrame =
          requestAnimationFrame(animate);
      } else {
        setValue(target);
      }
    };

    animationFrame =
      requestAnimationFrame(animate);

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

  /* =======================================================
     INITIAL HERO CONTENT
  ======================================================= */

  const [title, setTitle] = useState(
    "Accurate Marketing That Performs Like Revenue"
  );

  const [desc, setDesc] = useState(
    "Data-first digital growth systems built for brands that want measurable outcomes, not vanity metrics."
  );

  const [slideIndex, setSlideIndex] = useState(-1);

  const [isChanging, setIsChanging] =
    useState(false);


  /*
    ONLY used to restart the revenue shape animation.

    It does NOT affect the counters.
  */
  const [revenueShapeKey, setRevenueShapeKey] =
    useState(0);


  /* =======================================================
     HERO SLIDER

     Content changes every 2 seconds.
  ======================================================= */

  useEffect(() => {
    let changeTimer;

    const interval = setInterval(() => {

      /* -----------------------------------------------
         Start content exit animation
      ----------------------------------------------- */

      setIsChanging(true);


      changeTimer = setTimeout(() => {

        setSlideIndex((previousIndex) => {

          const nextIndex =
            previousIndex + 1 >= slides.length
              ? 0
              : previousIndex + 1;


          /* -------------------------------------------
             CHANGE LEFT CONTENT
          ------------------------------------------- */

          setTitle(
            slides[nextIndex].title
          );

          setDesc(
            slides[nextIndex].desc
          );


          /* -------------------------------------------
             RESTART REVENUE SHAPE ONLY

             Numbers are NOT touched.
          ------------------------------------------- */

          setRevenueShapeKey(
            (previous) => previous + 1
          );


          return nextIndex;
        });


        /* ---------------------------------------------
           Show new content
        --------------------------------------------- */

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
        min-h-[calc(100vh-82px)]
        overflow-hidden
        bg-[#f3f3ff]
      "
    >

      {/* =================================================
          BACKGROUND SQUARE
      ================================================= */}

      <img
        src="/assets/images/shapes/sqaure_shape.png"
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          z-0
          h-full
          w-auto
          object-cover
          opacity-60
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
          min-h-[calc(100vh-82px)]
          max-w-[1600px]
          grid-cols-1
          items-center
          px-6

          sm:px-8

          lg:grid-cols-[48%_52%]
          lg:px-16

          xl:px-20
        "
      >


        {/* =================================================
            LEFT SIDE
        ================================================= */}

        <div
          className="
            relative
            z-30
            py-14

            lg:py-20
          "
        >

          {/* =================================================
              TITLE
          ================================================= */}

          <h1
            className={`
              max-w-[720px]

              text-[48px]
              font-extrabold
              leading-[1.05]
              tracking-[-2px]

              text-black

              transition-all
              duration-500

              sm:text-[58px]

              lg:text-[62px]

              xl:text-[68px]

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
              mt-8

              max-w-[650px]

              text-[17px]
              leading-[1.9]

              text-[#61708a]

              transition-all
              duration-500

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
              mt-10

              flex
              flex-wrap
              items-center
              gap-10
            "
          >

            {/* =================================================
                BUTTON
            ================================================= */}

            <a
              href="#contact"
              className="
                inline-flex

                min-w-[310px]

                items-center
                justify-center

                rounded-full

                bg-[#1455d9]

                px-8
                py-4

                text-[17px]
                font-bold

                text-white

                shadow-[0_12px_30px_rgba(20,85,217,0.20)]

                transition
                duration-300

                hover:-translate-y-1
                hover:bg-[#0847c9]
              "
            >
              Build My Growth Engine
            </a>


            {/* =================================================
                CLIENT INFORMATION
            ================================================= */}

            <div
              className="
                flex
                items-center
                gap-4
              "
            >

              {/* CLIENT LOGOS */}

              <div className="flex items-center">

                {/* CLIENT 1 */}

                <div
                  className="
                    relative
                    z-[2]

                    h-9
                    w-9

                    overflow-hidden
                    rounded-full

                    transition
                    duration-300

                    hover:z-[10]
                    hover:scale-110
                  "
                >
                  <img
                    src="/assets/images/brand_logo/brand06.png"
                    alt="Client Image"
                    className="
                      h-full
                      w-full
                      object-cover
                    "
                  />
                </div>


                {/* CLIENT 2 */}

                <div
                  className="
                    relative
                    z-[1]

                    -ml-2.5

                    h-9
                    w-9

                    overflow-hidden
                    rounded-full

                    transition
                    duration-300

                    hover:z-[10]
                    hover:scale-110
                  "
                >
                  <img
                    src="/assets/images/brand_logo/brand03.png"
                    alt="Client Image"
                    className="
                      h-full
                      w-full
                      object-cover
                    "
                  />
                </div>


                {/* CLIENT 3 */}

                <div
                  className="
                    relative

                    -ml-2.5

                    h-9
                    w-9

                    overflow-hidden
                    rounded-full

                    transition
                    duration-300

                    hover:z-[10]
                    hover:scale-110
                  "
                >
                  <img
                    src="/assets/images/brand_logo/brand01.png"
                    alt="Client Image"
                    className="
                      h-full
                      w-full
                      object-cover
                    "
                  />
                </div>

              </div>


              {/* =================================================
                  CLIENT COUNT
              ================================================= */}

              <div>

                {/* 2.3M+ */}

                <div
                  className="
                    text-[27px]
                    font-extrabold
                    leading-none
                    text-black
                  "
                >
                  <Counter
                    target={2.3}
                    duration={4200}
                    decimals={1}
                    suffix="M+"
                  />
                </div>


                {/* 5000+ */}

                <div
                  className="
                    mt-3

                    whitespace-nowrap

                    text-[15px]
                    font-medium

                    text-[#1e293b]
                  "
                >
                  <Counter
                    target={5000}
                    duration={4200}
                    suffix="+"
                  />{" "}
                  Client reviews
                </div>

              </div>

            </div>

          </div>

        </div>


        {/* ===================================================
            RIGHT SIDE
        =================================================== */}

        <div
          className="
            relative

            flex

            min-h-[570px]

            items-end
            justify-center

            lg:min-h-[700px]

            xl:min-h-[720px]
          "
        >

          {/* =================================================
              WHITE PERSON BACKGROUND CARD
          ================================================= */}

          <div
            className="
              absolute

              bottom-0
              left-[18%]

              z-10

              h-[570px]
              w-[64%]

              rounded-t-[32px]

              bg-white

              sm:h-[600px]

              lg:left-[12%]
              lg:h-[610px]
              lg:w-[64%]

              xl:h-[630px]
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

              bottom-0
              left-[17%]

              z-20

              w-[63%]

              max-w-[570px]

              object-contain
              object-bottom

              sm:w-[60%]

              lg:left-[13%]
              lg:w-[64%]

              xl:w-[60%]
            "
          />


          {/* =================================================
              TRUSTPILOT CARD
          ================================================= */}

          <div
            className="
              absolute

              right-[1%]
              top-[90px]

              z-40

              hidden

              w-full
              max-w-[218px]

              rounded-3xl

              bg-white

              p-6

              shadow-[0_12px_35px_rgba(0,0,0,0.10)]

              lg:block

              xl:right-[2%]
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
                className="h-4 w-4"
              />

            </div>


            {/* RATINGS */}

            <img
              src="/assets/images/icons/ratings.svg"
              alt="Ratings"
              className="h-auto w-auto"
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
                  text-lg
                  font-semibold
                  text-[#151b2c]
                "
              >
                Trust pilot
              </span>

              <img
                src="/assets/images/icons/verified-icon.svg"
                alt="Verified"
                className="h-5 w-5"
              />

            </div>

          </div>


          {/* =================================================
              REVENUE SHAPE

              IMPORTANT:
              This is the ONLY element that gets restarted
              when the hero content changes.
          ================================================= */}

          <img
            key={revenueShapeKey}
            src="/assets/images/shapes/revenue-shape.png"
            alt=""
            aria-hidden="true"
            className="
              pointer-events-none

              absolute

              bottom-[140px]
              left-[-30px]

              z-30

              w-[50px]

              max-w-none

              opacity-80

              animate-revenue-shake
            "
            style={{
              transformOrigin:
                "center bottom",
            }}
          />


          {/* =================================================
              REVENUE CARD
          ================================================= */}

          <div
            className="
              absolute

              bottom-0
              left-[2%]

              z-40

              w-[340px]

              overflow-hidden

              rounded-[22px]

              bg-white

              p-6

              shadow-[0_20px_50px_rgba(0,0,0,0.10)]

              lg:left-[-3%]
              lg:w-[365px]
            "
          >

            {/* CONTENT */}

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
                    text-[14px]

                    font-medium

                    uppercase

                    tracking-wide

                    text-[#7c8799]
                  "
                >
                  Revenue
                </p>


                {/* REVENUE COUNTER */}

                <h3
                  className="
                    mt-2

                    text-[30px]

                    font-bold

                    text-black
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

                    gap-5

                    text-[14px]
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

                  mt-2

                  h-[100px]
                  w-[100px]

                  object-contain
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

              bottom-0

              right-[-1%]

              z-40

              flex

              h-[150px]
              w-[150px]

              items-center
              justify-center

              bg-[#1455d9]

              text-white

              shadow-[0_20px_40px_rgba(20,85,217,0.25)]

              lg:right-[10%]
            "
            style={{
              clipPath:
                "polygon(0 0, 76% 0, 100% 25%, 100% 100%, 0 100%)",
            }}
          >

            <div className="text-center">

              <div
                className="
                  text-[52px]

                  font-bold

                  leading-none
                "
              >
                <Counter
                  target={8}
                  duration={4000}
                  decimals={0}
                  suffix="+"
                />
              </div>


              <p
                className="
                  mt-3

                  text-[15px]

                  font-medium
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
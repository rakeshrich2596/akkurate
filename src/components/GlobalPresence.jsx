import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import Globe from "globe.gl";

// =========================================================
// LOCATIONS
// =========================================================

const locations = [
  {
    id: 1,
    city: "Chennai",
    area: "West Tambaram",
    lat: 12.9249,
    lng: 80.1,
    flag: "/assets/images/icons/india.png",
  },

  {
    id: 2,
    city: "Trichy",
    area: "Woraiyur",
    lat: 10.8231,
    lng: 78.693,
    flag: "/assets/images/icons/india.png",
  },

  {
    id: 3,
    city: "Singapore",
    area: "Ang Mo Kio",
    lat: 1.3691,
    lng: 103.8454,
    flag: "/assets/images/icons/singapore.png",
  },
];

// =========================================================
// GLOBAL PRESENCE
// =========================================================

const GlobalPresence = () => {
  const globeContainerRef = useRef(null);

  const globeRef = useRef(null);

  const sectionRef = useRef(null);

  const [isVisible, setIsVisible] =
    useState(false);

  // =========================================================
  // SECTION SCROLL ANIMATION
  // =========================================================

  useEffect(() => {
    const section =
      sectionRef.current;

    if (!section) return;

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(false);

            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                setIsVisible(true);
              });
            });
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

  // =========================================================
  // INITIALIZE GLOBE
  // =========================================================

  useEffect(() => {
    if (!globeContainerRef.current) {
      return;
    }

    // Prevent duplicate globe
    globeContainerRef.current.innerHTML = "";

    // Create Globe
    const globe =
      Globe()(
        globeContainerRef.current
      );

    globeRef.current = globe;

    // =======================================================
    // EARTH IMAGE
    // =======================================================

    globe
      .globeImageUrl(
        "https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      )

      // Transparent background
      .backgroundColor(
        "rgba(0,0,0,0)"
      )

      // Globe size
      .width(500)
      .height(500)

      // =====================================================
      // INITIAL CAMERA
      // =====================================================

      .pointOfView(
        {
          lat: 10,
          lng: 90,
          altitude: 2,
        },
        0
      )

      // =====================================================
      // LOCATION MARKERS
      // =====================================================

      .htmlElementsData(
        locations
      )

      .htmlElement(
        (location) => {
          const marker =
            document.createElement(
              "div"
            );

          marker.className = `
            -translate-x-1/2
            -translate-y-full
            cursor-pointer
          `;

          const image =
            document.createElement(
              "img"
            );

          image.src =
            "/assets/images/icons/location.png";

          image.alt =
            location.city;

          image.className = `
            block
            h-[20px]
            w-[20px]
            object-contain
            drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]
            transition-transform
            duration-300
            hover:scale-125
          `;

          image.title =
            `${location.city} - ${location.area}`;

          marker.appendChild(
            image
          );

          return marker;
        }
      );

    // =======================================================
    // CONTROLS
    // =======================================================

    const controls =
      globe.controls();

    // =======================================================
    // FASTER AUTO ROTATION
    // =======================================================

    controls.autoRotate = true;

    /*
      OLD:
      0.6

      NEW:
      1.5

      This makes the globe rotate faster while
      keeping the movement smooth.
    */

    controls.autoRotateSpeed = 1.5;

    // Disable zoom
    controls.enableZoom = false;

    // Disable pan
    controls.enablePan = false;

    // Allow rotation
    controls.enableRotate = true;

    // =======================================================
    // CLEANUP
    // =======================================================

    return () => {
      if (
        globeContainerRef.current
      ) {
        globeContainerRef.current.innerHTML =
          "";
      }

      globeRef.current = null;
    };
  }, []);

  // =========================================================
  // GO TO LOCATION
  // =========================================================

  const goToLocation = (
    lat,
    lng
  ) => {
    if (!globeRef.current) {
      return;
    }

    globeRef.current.pointOfView(
      {
        lat,
        lng,
        altitude: 1.8,
      },
      900
    );
  };

  // =========================================================
  // TALK BUTTON
  // =========================================================

  const handleTalkToUs = () => {
    console.log(
      "Talk to us clicked"
    );

    // If you have Contact page:
    // window.location.href = "/contact";

    // Or React Router:
    // navigate("/contact");
  };

  // =========================================================
  // RETURN
  // =========================================================

  return (
    <section
      ref={sectionRef}
      className="
        relative
        w-full
        overflow-hidden
        bg-gradient-to-br
        from-slate-100
        via-slate-100
        to-slate-200
        pt-12
        pb-0

        sm:pt-16

        lg:pt-20
      "
    >
      {/* =====================================================
          BACKGROUND CIRCLE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[250px]
          -top-[150px]
          h-[700px]
          w-[700px]
          rounded-full
          bg-slate-300/30
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-[1400px]
          flex-col
          items-center
          justify-between
          gap-4
          px-5

          sm:gap-6
          sm:px-8

          lg:flex-row
          lg:gap-10
          lg:px-12
        "
      >
        {/* ===================================================
            LEFT CONTENT
        ==================================================== */}

        <div
          className={`
            flex
            w-full
            max-w-[650px]
            flex-col
            items-center
            text-center

            lg:w-[50%]
            lg:items-start
            lg:text-left

            transition-all
            duration-[1200ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]

            ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-24 opacity-0"
            }
          `}
        >
          {/* =================================================
              HEADING
          ================================================= */}

          <h1
            className="
              m-0
              text-[38px]
              font-bold
              leading-[1.08]
              tracking-[-0.04em]
              text-slate-900

              sm:text-5xl

              md:text-6xl

              lg:text-5xl

              xl:text-6xl
            "
          >
            Trusted to Deliver

            <br />

            Excellence

            <br />

            Across Geographies
          </h1>

          {/* =================================================
              BUTTON
          ================================================= */}

          <button
            type="button"
            onClick={
              handleTalkToUs
            }
            className="
              mt-6
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-full
              bg-slate-900
              px-7
              py-4
              text-[15px]
              font-bold
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-blue-700
              hover:shadow-xl
              active:scale-95

              sm:mt-8
            "
          >
            Talk to us

            <span className="text-lg">
              ↗
            </span>
          </button>
        </div>

        {/* ===================================================
            RIGHT GLOBE
        ==================================================== */}

        <div
          className={`
            relative
            flex
            w-full
            items-center
            justify-center

            lg:w-[50%]

            transition-all
            duration-[1200ms]
            delay-[100ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]

            ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-24 opacity-0"
            }
          `}
        >
          {/* =================================================
              GLOBE CONTAINER
          ================================================= */}

          <div
            ref={
              globeContainerRef
            }
            className="
              flex
              h-[320px]
              w-[320px]
              items-center
              justify-center

              sm:h-[380px]
              sm:w-[380px]

              md:h-[430px]
              md:w-[430px]

              lg:h-[500px]
              lg:w-[500px]
            "
          />
        </div>
      </div>

      {/* =====================================================
          LOCATION BAR
      ====================================================== */}

      <div
        className="
          relative
          z-20
          mx-auto
          mt-2
          w-full
          max-w-[1400px]
          border-t
          border-slate-300
          px-5

          sm:px-8

          lg:px-12
        "
      >
        <div
          className="
            grid
            grid-cols-1

            md:grid-cols-3
          "
        >
          {locations.map(
            (
              location,
              index
            ) => (
              <button
                key={
                  location.id
                }
                type="button"
                onClick={() =>
                  goToLocation(
                    location.lat,
                    location.lng
                  )
                }
                className={`
                  group
                  flex
                  items-center
                  justify-center
                  gap-3
                  border-slate-300
                  px-4
                  py-4
                  text-left
                  transition-all
                  duration-300
                  hover:bg-white/60

                  md:justify-center
                  md:py-5

                  ${
                    index !==
                    locations.length - 1
                      ? "md:border-r"
                      : ""
                  }
                `}
              >
                {/* FLAG */}

                <img
                  src={
                    location.flag
                  }
                  alt={
                    location.city
                  }
                  className="
                    h-[22px]
                    w-[30px]
                    shrink-0
                    rounded-sm
                    object-cover
                    shadow-sm
                  "
                />

                {/* LOCATION TEXT */}

                <div className="flex flex-col">
                  <span
                    className="
                      text-[15px]
                      font-medium
                      leading-tight
                      text-slate-900
                    "
                  >
                    {
                      location.city
                    }
                  </span>

                  <span
                    className="
                      mt-1
                      text-[12px]
                      leading-tight
                      text-slate-500
                    "
                  >
                    {
                      location.area
                    }
                  </span>
                </div>
              </button>
            )
          )}
        </div>
      </div>

      {/* =====================================================
          RESPONSIVE + REDUCED MOTION
      ====================================================== */}

      <style>{`

        @media (
          prefers-reduced-motion: reduce
        ) {

          section {
            scroll-behavior: auto;
          }

        }

        /* =========================================
           VERY SMALL MOBILE
        ========================================= */

        @media (max-width: 480px) {

          h1 {
            font-size: 34px;
          }

        }

        /* =========================================
           MOBILE GLOBE
        ========================================= */

        @media (max-width: 639px) {

          .globe-container {
            transform: scale(0.9);
          }

        }

      `}</style>
    </section>
  );
};

export default GlobalPresence;